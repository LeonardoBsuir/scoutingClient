angular.module('scouthubApp').component('validator', {
    templateUrl: 'app/components/validation/validator.template.html',
    bindings: {
        control: '=',
        fieldName: '@'
    },
    controllerAs: '$ctrl'
});