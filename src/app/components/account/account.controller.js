angular.module('scouthubApp').controller('AccountCtrl', ['PlayerService', '$state', '$stateParams', 'Session', 'UserService',
    function (PlayerService, $state, $stateParams, Session, UserService) {
        var $ctrl = this;
        var PLAYERS_NOT_LOAD = 'error.players.load';
        var USER_NOT_LOAD = 'error.user.load';
        $ctrl.player = $stateParams.player;
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

        $ctrl.onSelected = function (player) {
            $state.go('scouting.player', {player: player});
        };


    }

]);
