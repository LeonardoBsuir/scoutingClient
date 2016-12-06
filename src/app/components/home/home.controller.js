angular.module('scouthubApp').controller('HomeCtrl', ['$state', '$stateParams',
    function ($state, $stateParams) {
        var $ctrl = this;

        $ctrl.onSelected = function () {
            $state.go('scouting.players', {team: null});
        };

        $ctrl.onSelectedAccount = function () {
            $state.go('scouting.account');
        };

        $ctrl.resetFilter = function () {
            $ctrl.onSelected();
        };
    }
]);