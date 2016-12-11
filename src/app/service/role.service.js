angular.module('scouthubApp').factory('RoleService', ['$resource', function($resource) {
    var REST_SERVICE_URI = 'http://localhost:8080/scouting/roles/:id';

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

        create: function(role) {
            return resource.save({}, role).$promise;
        },

        update: function(role, id) {
            return resource.update({id: id}, role).$promise;
        },

        delete: function(id) {
            return resource.delete({id: id}).$promise;
        }
    };
}]);