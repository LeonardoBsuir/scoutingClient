angular.module('scouthubApp').controller('TeamsCtrl', ['TeamService', '$state', '$stateParams',
    function (TeamService, $state, $stateParams) {
        var $ctrl = this;
        var TEAM_NOT_LOAD = 'error.teams.load';

        $ctrl.loadTeams = function () {
            TeamService.getAll().then(function (data) {
                $ctrl.teams = data;
            }, function () {
                $ctrl.error = {message: TEAM_NOT_LOAD};
            });
        };


        $ctrl.loadTeams();
    }
]);