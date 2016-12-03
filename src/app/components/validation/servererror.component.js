angular.module('scouthubApp').component('serverError', {
    templateUrl: 'app/components/validation/servererror.template.html',
    bindings: {
        error: '='
    },
    controllerAs: '$ctrl'
});