angular.module('scouthubApp').controller('AccountCtrl', ['PlayerService', '$state', '$stateParams', 'Session', 'UserService',
    function (PlayerService, $state, $stateParams, Session, UserService) {
        var $ctrl = this;
        var PLAYERS_NOT_LOAD = 'error.players.load';
        var USER_NOT_LOAD = 'error.user.load';
        $ctrl.player = $stateParams.player;

        $ctrl.loadUser = function () {
            UserService.get(Session.user.userId).then(function (data) {
                $ctrl.user = data;
            }, function () {
                $ctrl.error = {message: USER_NOT_LOAD};
            });
        };

        $ctrl.loadUser();

    }

]);
