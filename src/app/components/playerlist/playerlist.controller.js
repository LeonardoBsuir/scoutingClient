angular.module('scouthubApp').controller('PlayersCtrl', ['PlayerService', '$state', '$stateParams',
    function (PlayerService, $state, $stateParams) {
        var $ctrl = this;
        var PLAYERS_NOT_LOAD = 'error.players.load';

        $ctrl.loadPlayers = function () {
            PlayerService.getAll().then(function (data) {
                $ctrl.players = data;
            }, function () {
                $ctrl.error = {message: PLAYERS_NOT_LOAD};
            });
        };

        $ctrl.loadPlayers();

        $ctrl.onSelected = function (player) {
            $state.go('scouting.player', {player: player});
        };


    }

]).filter("getTotal", function () {
    return function (skills) {
        var total;
        total = Math.round((+skills.shooting + (+skills.passing) + (+skills.dribbling) + (+skills.defence) + (+skills.speed) + (+skills.energy) + (+skills.stamina)) / 7);
        return total;
    }
});
