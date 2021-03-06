'use strict';

angular.module('scouthubApp').controller('ParentController', ['$scope', '$rootScope', '$uibModal', 'Auth', 'AUTH_EVENTS', 'USER_ROLES',
    function ($scope, $rootScope, $uibModal, Auth, AUTH_EVENTS, USER_ROLES) {


        $scope.modalShown = false;
        var showLoginDialog = function () {
            if (!$scope.modalShown) {
                $scope.modalShown = true;
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/components/auth/login.template.html',
                    controller: "LoginCtrl",
                    backdrop: 'static'
                });

                modalInstance.result.then(function () {
                    $scope.modalShown = false;
                });
            }
        };

        var setCurrentUser = function () {
            $scope.currentUser = $rootScope.currentUser;
        };

        var showNotAuthorized = function () {
            alert("Not Authorized");
        };

        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = Auth.isAuthorized;

        //listen to events of unsuccessful logins, to run the login dialog

        showLoginDialog();
        $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginDialog);
        $rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginDialog);
        $rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginDialog);
        $rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);

    }]);