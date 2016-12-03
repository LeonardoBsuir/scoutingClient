angular.module('scouthubApp').controller('TranslateCtrl', ['$translate', function ($translate) {
    var $ctrl = this;

    $ctrl.changeLocale = function(locale) {
        $translate.use(locale);
    };
}]);