angular.module('scouthubApp').factory('PlayerModalService', ['$uibModal', function ($uibModal) {

    function showModal(component, size, currentPlayer) {
        var modalInstance = $uibModal.open({
            animation: true,
            component: component,
            size: size,
            resolve: {
                currentPlayer: function () {
                    return currentPlayer;
                }
            }
        });

        return modalInstance.result;
    }

    return {
        createModal: function () {
            return showModal('player-modal', 'lg', {
                    "playerId": null,
                    "firstName": '',
                    "lastName": '',
                    "position": '',
                    "birthdate": '',

                    "skillsBySkillsId": {
                        "skillsId": null,
                        "shooting": null,
                        "passing": null,
                        "dribbling": null,
                        "defence": null,
                        "speed": null,
                        "energy": null,
                        "stamina": null
                    },
                    "teamByTeamId": {
                        "teamId": '',
                        "name": '',
                        "skillsBySkillsId": {
                            "skillsId": '',
                            "shooting": '',
                            "passing": '',
                            "dribbling": '',
                            "defence": '',
                            "speed": '',
                            "energy": '',
                            "stamina": ''
                        },
                        "country": '',
                        "photo": ''
                    },
                    "weight": null,
                    "height": null,
                    "salary": null,
                    "cost": null,
                    "foot": null,
                    "photo": ''
                }
            );
        },

        updateModal: function (currentPlayer) {
            return showModal('player-modal', 'lg', angular.copy(currentPlayer));
        }


    };
}])
;