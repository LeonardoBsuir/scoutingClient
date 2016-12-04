angular.module('scouthubApp').controller('PlayerCtrl', ['PlayerService', '$state', '$stateParams',
    function (PlayerService, $state, $stateParams) {
        var $ctrl = this;
        var PLAYERS_NOT_LOAD = 'error.players.load';
        $ctrl.player = $stateParams.player;


    
    }

]);
