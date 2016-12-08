angular.module('scouthubApp').controller('PlayerCtrl', ['PlayerService', '$state', '$stateParams', 'Session',
    function (PlayerService, $state, $stateParams, Session) {
        var $ctrl = this;
        var PLAYERS_NOT_LOAD = 'error.players.load';
        $ctrl.player = $stateParams.player;

        $ctrl.user = Session.user;

        $ctrl.deletePlayer = function (player) {
            PlayerService.delete(player.playerId).then(function () {
                $state.go('scouting.players');
            });
        };


        $ctrl.ifDel = function () {
            if ($ctrl.user.roleByRoleId.type === 'admin') {
                return true;
            }
            else return false;

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
