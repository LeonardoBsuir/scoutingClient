angular.module('scouthubApp').factory('Auth', ['$http', '$rootScope', '$window', 'Session', 'AUTH_EVENTS',
    function ($http, $rootScope, $window, Session, AUTH_EVENTS) {
        var authService = {};
        var users = {};


        //the login function
        authService.login = function (user, success, error) {
            $http.get('http://localhost:8080/scouting/users/', {}).success(function (data) {
                users = data;
                var flag = false;
                var i;
                for (i = 0; i < users.length; i++) {
                    //insert your custom login function here
                    if (user.username == users[i].login && user.password == users[i].password) {
                        //set the browser session, to avoid relogin on refresh
                        $window.sessionStorage["userInfo"] = JSON.stringify(users[i]);
                        flag = true;
                        //delete password not to be seen clientside
                        delete users[i].password;

                        //update current user into the Session service or $rootScope.currentUser
                        //whatever you prefer
                        Session.create(users[i]);
                        //or
                        $rootScope.currentUser = users[i];

                        //fire event of successful login
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        //run success function
                        success(users[i]);
                    }
                }
                if (!flag) {
                    //unsuccessful login, fire login failed event for
                    //the according functions to run
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    error();
                }
            });
        };

//check if the user is authenticated
        authService.isAuthenticated = function () {
            return !!Session.user;
        };

//check if the user is authorized to access the next route
//this function can be also used on element level
//e.g. <p ng-if="isAuthorized(authorizedRoles)">show this only to admins</p>
        authService.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
            authorizedRoles.indexOf(Session.userRole) !== -1);
        };

//log out the user and broadcast the logoutSuccess event
        authService.logout = function () {
            Session.destroy();
            $window.sessionStorage.removeItem("userInfo");
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        };

        return authService;
    }])
;