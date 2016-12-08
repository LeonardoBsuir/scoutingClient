angular.module('scouthubApp').factory('TeamModalService', ['$uibModal', function ($uibModal) {

    function showModal(component, size, currentTeam) {
        var modalInstance = $uibModal.open({
            animation: true,
            component: component,
            size: size,
            resolve: {
                currentTeam: function () {
                    return currentTeam;
                }
            }
        });

        return modalInstance.result;
    }

    return {
        createModal: function () {
            return showModal('team-modal', 'lg', {
                teamId: null,
                name: '',
                photo: '',
                country: ''
            });
        },

        updateModal: function (currentTeam) {
            return showModal('team-modal', 'lg', angular.copy(currentTeam));
        }

    };
}]);