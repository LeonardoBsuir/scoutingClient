angular.module('scouthubApp').factory('PlayerService', ['$resource', function ($resource) {
    var REST_SERVICE_URI = 'http://localhost:8080/scouting/players/:id';

    var resource = $resource(REST_SERVICE_URI, {}, {
        getAll: {
            method: 'GET',
            isArray: true
        },

        getByTeamId: {
            method: 'GET',
            isArray: true
        },

        save: {
            method: 'POST'
        },

        get: {
            method: 'GET',
            params: {
                id: '@id'
            }
        },


        update: {
            method: 'PUT',
            params: {
                id: '@id'
            }
        },

        delete: {
            method: 'DELETE',
            params: {
                id: '@id'
            }
        }
    });

    return {
        getAll: function () {
            return resource.getAll({}).$promise;
        },

        getByTeamId: function (teamId) {
            return resource.getByTeamId({
                teamId: teamId
            }).$promise;
        },

        get: function (id) {
            return resource.get({id: id}).$promise;
        },

        create: function (user) {
            return resource.save({}, user).$promise;
        },


        update: function (user, id) {
            return resource.update({id: id}, user).$promise;
        },

        delete: function (id) {
            return resource.delete({id: id}).$promise;
        }
    };
}]);
