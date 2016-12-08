angular.module('scouthubApp').component('playerModal', {
    templateUrl: 'app/components/modals/playermodal/playermodal.template.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: ['$filter', 'PlayerService', 'TeamService',
        function ($filter, PlayerService, TeamService) {
            var SERVER_ERROR = 'error.server';
            var CREATE_TITLE_KEY = 'modal.players.label.create';
            var EDIT_TITLE_KEY = 'modal.players.label.edit';
            var TEAM_NOT_LOAD = 'error.teams.load';
            var $ctrl = this;

            $ctrl.$onInit = function () {
                $ctrl.currentPlayer = $ctrl.resolve.currentPlayer;
                TeamService.getAll().then(function (data) {
                    $ctrl.teams = data;
                }, function () {
                    $ctrl.error = {message: TEAM_NOT_LOAD};
                });
                if ($ctrl.currentPlayer.playerId !== null) {
                    $ctrl.header = $filter('translate')(EDIT_TITLE_KEY);
                } else {
                    $ctrl.header = $filter('translate')(CREATE_TITLE_KEY);
                }
            };

            $ctrl.finish = function () {
                console.log($ctrl.currentPlayer);
                $ctrl.currentPlayer.photo = 'app/assets/img/' + $ctrl.currentPlayer.photo.name;
                if ($ctrl.currentPlayer.playerId !== null) {
                    PlayerService.update($ctrl.currentPlayer, $ctrl.currentPlayer.playerId).then(function (data) {
                        $ctrl.close({$value: data});
                    }, function () {
                        $ctrl.error = {message: SERVER_ERROR};
                    });
                } else {
                    PlayerService.create($ctrl.currentPlayer).then(function (data) {
                        $ctrl.close({$value: data});
                    }, function () {
                        $ctrl.error = {message: SERVER_ERROR};
                    });
                }
            };

            $ctrl.cancel = function () {
                $ctrl.dismiss({$value: 'cancel'});
            };


        }]
});