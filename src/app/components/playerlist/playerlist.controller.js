angular.module('scouthubApp').controller('PlayersCtrl', ['PlayerService', '$state', '$stateParams',
    function (PlayerService, $state, $stateParams) {
        var $ctrl = this;
        var PLAYERS_NOT_LOAD = 'error.players.load';
        $ctrl.team = $stateParams.team;
        var teamId;
        $ctrl.option = 'firstName';

        if ($ctrl.team != null) {
            teamId = $ctrl.team.teamId;
        }

        $ctrl.loadPlayers = function () {
            PlayerService.getByTeamId(teamId).then(function (data) {
                $ctrl.players = data;
                $ctrl.player = $ctrl.players[0];
            }, function () {
                $ctrl.error = {message: PLAYERS_NOT_LOAD};
            });
        };

        $ctrl.loadPlayers();

        $ctrl.onSelected = function (player) {
            $state.go('scouting.player', {player: player});
        };

        $ctrl.orderByMe = function (x) {
            $ctrl.myOrderBy = x;
        };

        $ctrl.orderByMe($ctrl.option);

        $ctrl.isNumber = function () {
            return typeof $ctrl.player[$ctrl.option] === typeof 0;
        };

        $ctrl.isString = function () {
            return typeof $ctrl.player[$ctrl.option] === "string";
        };

        $ctrl.myFilter = function (player) {
            if ($ctrl.option === "birthdate") return true;
            if (typeof player[$ctrl.option] === typeof 0) {
                var min = document.getElementById("min").value;
                var max = document.getElementById("max").value;
                if (max == 0 && min == 0) {
                    return true;
                }
                return (player[$ctrl.option] > min && player[$ctrl.option] < max);
            } else if (typeof player[$ctrl.option] === "string") {
                var like = document.getElementById("like").value;
                return player[$ctrl.option].toUpperCase().indexOf(like.toUpperCase()) > -1;
            } else return true;

        };

    }]).
    filter("getTotal", function () {
        return function (skills) {
            var total;
            total = Math.round((+skills.shooting + (+skills.passing) + (+skills.dribbling) + (+skills.defence) + (+skills.speed) + (+skills.energy) + (+skills.stamina)) / 7);
            return total;
        }
    });
