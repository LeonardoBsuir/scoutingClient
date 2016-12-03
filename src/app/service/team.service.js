angular.module('scouthubApp').factory('TeamService', ['$resource', function($resource) {
    var REST_SERVICE_URI = 'http://localhost:8080/scouting/teams/:id';

    var resource = $resource(REST_SERVICE_URI, {}, {
        getAll: {
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
        getAll: function() {
            return resource.getAll({}).$promise;
        },

        get: function(id) {
            return resource.get({id: id}).$promise;
        },

        create: function(team) {
            return resource.save({}, team).$promise;
        },

        update: function(team, id) {
            return resource.update({id: id}, team).$promise;
        },

        delete: function(id) {
            return resource.delete({id: id}).$promise;
        }
    };
}]);