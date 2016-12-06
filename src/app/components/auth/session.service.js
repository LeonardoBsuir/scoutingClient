angular.module('scouthubApp').service('Session', function () {

    this.create = function (user) {
        this.user = user;
        this.userRole = user.roleByRoleId.type;
    };
    this.destroy = function () {
        this.user = null;
        this.userRole = null;
    };
    return this;
});