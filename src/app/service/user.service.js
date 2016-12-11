angular.module('scouthubApp').factory('UserService', ['$resource', function ($resource) {
    var REST_SERVICE_URI = 'http://localhost:8080/scouting/users/:id/:playerId';

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

        addPlayerToUser: {
            method: 'POST',
            params: {
                id: '@id'
            }
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
        },

        delPlayerToUser: {
            method: 'DELETE',
            params: {
                id: '@id',
                playerId: '@playerId'
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

        addPlayerToUser: function (id, user) {
            return resource.addPlayerToUser({id: id}, user).$promise;
        },

        delPlayerToUser: function (id, playerId) {
            return resource.delPlayerToUser({id: id}, {playerId: playerId}).$promise;
        },

        delete: function (id) {
            return resource.delete({id: id}).$promise;
        }
    };
}]);
