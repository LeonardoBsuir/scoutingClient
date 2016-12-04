angular.module('scouthubApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'pascalprecht.translate',
    'bw.paging', 'ngCookies', 'checklist-model', 'oi.select'])
    .config(['$stateProvider', '$urlRouterProvider', '$translateProvider',
        function ($stateProvider, $urlRouterProvider, $translateProvider) {
            $urlRouterProvider.otherwise('/scouthub/teams');
            $stateProvider
                .state('scouting', {
                    url: '/scouthub',
                    template: '<home></home>'
                })
                .state('scouting.teams', {
                    url: '/teams',
                    template: '<teams-list></teams-list>'
                })
                .state('scouting.players', {
                    url: '/players',
                    template: '<players-list></players-list>'
                }).state('scouting.player', {
                    url: '/player',
                    template: '<player></player>',
                    "params": {
                        "player": null
                    }
                });

            $translateProvider.useLocalStorage();
            $translateProvider.fallbackLanguage('en');
            $translateProvider.registerAvailableLanguageKeys(['en', 'ru']);

            $translateProvider.useStaticFilesLoader({
                prefix: 'app/i18n/',
                suffix: '.json'
            });
            $translateProvider.useSanitizeValueStrategy('escape');
            $translateProvider.preferredLanguage('en');
        }
    ]);

require('./assets/css/style.css');
require('./assets/css/languages.css');
require('./service/team.service.js');
require('./service/user.service.js');
require('./service/player.service.js');
require('./components/validation/validator.component.js');
require('./components/validation/servererror.component.js');
require('./components/home/home.component.js');
require('./components/home/home.controller.js');
require('./components/teamlist/teamlist.component.js');
require('./components/teamlist/teamlist.controller.js');
require('./components/playerlist/playerlist.component.js');
require('./components/playerlist/playerlist.controller.js');
require('./components/player/player.component.js');
require('./components/player/player.controller.js');
require('./commons/translate.controller.js');