angular.module('scouthubApp').controller('PlayerCtrl', ['PlayerService', '$state', '$stateParams', 'Session', 'PlayerModalService', 'UserService',
    function (PlayerService, $state, $stateParams, Session, PlayerModalService, UserService) {
        var $ctrl = this;
        var PLAYERS_NOT_LOAD = 'error.players.load';
        $ctrl.player = $stateParams.player;

        $ctrl.user = Session.user;

        $ctrl.initButtons = function () {
            document.getElementById("buy").disabled = true;
        };

        $ctrl.deletePlayer = function (player) {
            PlayerService.delete(player.playerId).then(function () {
                $state.go('scouting.players');
            });
        };

        $ctrl.buy = function (player) {
            player.teamByTeamId = $ctrl.user.teamByTeamId;
            PlayerService.update(player, player.playerId).then(function () {
                $state.go('scouting.players', {team: $ctrl.user.teamByTeamId});
            });
        };

        $ctrl.addList = function (player) {
            UserService.addPlayerToUser(player.playerId, $ctrl.user).then(function () {
                $state.go('scouting.account');
            });
        };


        $ctrl.delList = function (player) {
            UserService.delPlayerToUser($ctrl.user.userId, player.playerId).then(function () {
                $state.go('scouting.account');
            });
        };

        $ctrl.isAdmin = function () {
            if ($ctrl.user.roleByRoleId.type === 'admin') {
                return true;
            }
            else return false;

        };

        $ctrl.isCoach = function () {
            if ($ctrl.user.roleByRoleId.type === 'coach') {
                return true;
            }
            else return false;

        };

        $ctrl.isBuy = function () {
            if ($ctrl.user.teamByTeamId.teamId === $ctrl.player.teamByTeamId.teamId) {
                return false;
            }
            else return true;

        };

        $ctrl.isScout = function () {
            if ($ctrl.user.roleByRoleId.type === 'scout') {
                return true;
            }
            else return false;

        };

        $ctrl.playerModalUpdate = function (currentPlayer) {
            PlayerModalService.updateModal(currentPlayer).then(function (data) {
                $state.go('scouting.player', {player: data});
            });
        };

    }]).filter("getAge", function () {
    return function (birthdate) {
        var minutes = 1000 * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        var d = new Date();
        var t = d.getTime();

        return Math.round((t - birthdate) / years);
    }
}).filter("getArrow", function () {
    return function (userSkill, playerSkill) {
        if (userSkill > playerSkill) {
            return "app/assets/img/red.png"
        } else
            return "app/assets/img/green.png";
    }
});
