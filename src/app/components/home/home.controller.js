angular.module('scouthubApp').controller('HomeCtrl', ['$state', '$stateParams', 'PlayerModalService', 'TeamModalService',
    function ($state, $stateParams, PlayerModalService, TeamModalService) {
        var $ctrl = this;

        $ctrl.onSelected = function () {
            $state.go('scouting.players', {team: null});
        };

        $ctrl.onSelectedAccount = function () {
            $state.go('scouting.account');
        };

        $ctrl.playerModalCreate = function () {
            PlayerModalService.createModal().then(function (data) {
                $state.go('scouting.player', {player: data});
            });
        };

        $ctrl.teamModalCreate = function () {
            TeamModalService.createModal();
        };

        $ctrl.resetFilter = function () {
            $ctrl.onSelected();
        };
    }
]);