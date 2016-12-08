angular.module('scouthubApp').component('teamModal', {
    templateUrl: 'app/components/modals/teammodal/teammodal.template.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: ['$filter', 'TeamService',
        function ($filter, TeamService) {
            var SERVER_ERROR = 'error.server';
            var CREATE_TITLE_KEY = 'modal.teams.label.create';
            var EDIT_TITLE_KEY = 'modal.teams.label.edit';
            var $ctrl = this;

            $ctrl.$onInit = function () {
                $ctrl.currentTeam = $ctrl.resolve.currentTeam;
                if ($ctrl.currentTeam.teamId !== null) {
                    $ctrl.header = $filter('translate')(EDIT_TITLE_KEY);
                } else {
                    $ctrl.header = $filter('translate')(CREATE_TITLE_KEY);
                }
            };

            $ctrl.finish = function () {
                $ctrl.currentTeam.photo = 'app/assets/img/' + $ctrl.currentTeam.photo.name;
                if ($ctrl.currentTeam.teamId !== null) {
                    TeamService.update($ctrl.currentTeam, $ctrl.currentTeam.teamId).then(function (data) {
                        $ctrl.close({$value: data});
                    }, function () {
                        $ctrl.error = {message: SERVER_ERROR};
                    });
                } else {
                    TeamService.create($ctrl.currentTeam).then(function (data) {
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