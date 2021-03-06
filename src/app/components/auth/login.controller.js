angular.module('scouthubApp').controller('LoginCtrl', ['$scope', '$state', '$uibModalInstance', '$window', 'Auth',
    function ($scope, $state, $uibModalInstance, $window, Auth) {
        $scope.credentials = {};
        $scope.loginForm = {};
        $scope.error = false;

        //when the form is submitted
        $scope.submit = function () {
            $scope.submitted = true;
            if (!$scope.loginForm.$invalid) {
                $scope.login($scope.credentials);
            } else {
                $scope.error = true;
            }
        };

        //Performs the login function, by sending a request to the server with the Auth service
        $scope.login = function (credentials) {
            $scope.error = false;
            Auth.login(credentials, function (user) {
                //success function
                $uibModalInstance.close();
                $state.go('scouting.teams');
            }, function (err) {
                console.log("error");
                $scope.error = true;
            });
        };

        $scope.register = function () {
            $scope.error = false;
            $uibModalInstance.close();
            $state.go('register');
        };

        // if a session exists for current user (page was refreshed)
        // log him in again
        if ($window.sessionStorage["userInfo"]) {
            var credentials = JSON.parse($window.sessionStorage["userInfo"]);
            $scope.login(credentials);
        }

    }]);