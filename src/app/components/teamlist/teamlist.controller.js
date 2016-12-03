angular.module('scouthubApp').controller('TeamsCtrl', ['TeamService', 'UserService', '$state', '$stateParams',
    function (TeamService, UserService, $state, $stateParams) {
        var $ctrl = this;
        var TEAM_NOT_LOAD = 'error.teams.load';
        var USER_NOT_LOAD = 'error.user.load';

        $ctrl.loadTeams = function () {
            TeamService.getAll().then(function (data) {
                $ctrl.teams = data;
            }, function () {
                $ctrl.error = {message: TEAM_NOT_LOAD};
            });
        };

        $ctrl.loadTeams();

        $ctrl.loadCoach = function () {
            UserService.getAll().then(function (data) {
                $ctrl.users = data;
            }, function () {
                $ctrl.error = {message: USER_NOT_LOAD};
            });
        };

        $ctrl.loadCoach();

    }
]);