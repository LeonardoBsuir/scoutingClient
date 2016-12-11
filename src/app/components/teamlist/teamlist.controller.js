angular.module('scouthubApp').controller('TeamsCtrl', ['TeamService', 'UserService', '$state', '$stateParams', 'Session',
    function (TeamService, UserService, $state, $stateParams, Session) {
        var $ctrl = this;
        var TEAM_NOT_LOAD = 'error.teams.load';
        var USER_NOT_LOAD = 'error.user.load';


        $ctrl.user = Session.user;

        $ctrl.loadUser = function () {
            UserService.get($ctrl.user.userId).then(function (data) {
                $ctrl.user = data;
                Session.destroy();
                Session.create($ctrl.user);
            }, function () {
                $ctrl.error = {message: USER_NOT_LOAD};
            });
        };

        $ctrl.loadUser();
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

        $ctrl.onSelected = function (team) {
            $state.go('scouting.players', {team: team});
        };

    }
]);