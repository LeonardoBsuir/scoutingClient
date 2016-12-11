angular.module('scouthubApp').controller('RegisterCtrl', ['TeamService', 'UserService', '$state', '$stateParams', 'Session', 'RoleService',
    function (TeamService, UserService, $state, $stateParams, Session, RoleService) {
        var $ctrl = this;
        var TEAM_NOT_LOAD = 'error.teams.load';
        var SERVER_ERROR = 'error.user.load';


        $ctrl.loadTeams = function () {
            TeamService.getAll().then(function (data) {
                $ctrl.teams = data;
            }, function () {
                $ctrl.error = {message: TEAM_NOT_LOAD};
            });
        };

        $ctrl.loadTeams();

        $ctrl.loadRoles = function () {
            RoleService.getAll().then(function (data) {
                    var roles = data;
                    $ctrl.roles = {};
                    var i = 0;
                    var k = 0;
                    console.log(roles);
                    for (i; i < roles.length; i++) {
                        if (roles[i].type === "coach" || roles[i].type === "scout") {
                            $ctrl.roles[k] = roles[i];
                            k++;
                        }
                    }
                },
                function () {
                }
            )
            ;
        };

        $ctrl.loadRoles();


        $ctrl.register = function () {
            $ctrl.currentUser.photo = 'app/assets/img/' + $ctrl.currentUser.photo.name;
            UserService.create($ctrl.currentUser).then(function (data) {
                $state.go('scouting.teams');
            }, function () {
                $ctrl.error = {message: SERVER_ERROR};
            });
        };

        $ctrl.login = function () {
            $state.go('scouting.teams');

        };
    }
])
;