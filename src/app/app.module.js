angular.module('scouthubApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'pascalprecht.translate',
    'bw.paging', 'ngCookies', 'checklist-model', 'oi.select'])
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        scout: 'scout',
        coach: 'coach',
        user: 'user'
    }).constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    }).config(['$stateProvider', '$urlRouterProvider', '$translateProvider', '$httpProvider', 'USER_ROLES',
        function ($stateProvider, $urlRouterProvider, $translateProvider, $httpProvider, USER_ROLES) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('scouting', {
                    url: '/scouthub',
                    template: '<home></home>'
                })
                .state('scouting.teams', {
                    url: '/teams',
                    template: '<teams-list></teams-list>',
                    data: {
                        authorizedRoles: [USER_ROLES.admin, USER_ROLES.scout, USER_ROLES.coach]
                    }
                })
                .state('scouting.players', {
                    url: '/players',
                    template: '<players-list></players-list>',
                    "params": {
                        team: null
                    },
                    data: {
                        authorizedRoles: [USER_ROLES.admin, USER_ROLES.scout, USER_ROLES.coach, USER_ROLES.user]
                    }

                })
                .state('scouting.account', {
                    url: '/account',
                    template: '<account></account>',
                    data: {
                        authorizedRoles: [USER_ROLES.admin, USER_ROLES.scout, USER_ROLES.coach]
                    }

                })
                .state('register', {
                    url: '/register',
                    template: '<register></register>',

                })
                .state('scouting.player', {
                    url: '/player',
                    template: '<player></player>',
                    "params": {
                        "player": null
                    },
                    data: {
                        authorizedRoles: [USER_ROLES.admin, USER_ROLES.scout, USER_ROLES.coach]
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


            $httpProvider.interceptors.push([
                '$injector',
                function ($injector) {
                    return $injector.get('AuthInterceptor');
                }
            ]);

        }
    ]);


require('./assets/css/style.css');
require('./assets/css/languages.css');
require('./service/team.service.js');
require('./service/user.service.js');
require('./service/player.service.js');
require('./service/role.service.js');
require('./components/validation/validator.component.js');
require('./components/validation/servererror.component.js');
require('./components/home/home.component.js');
require('./components/home/home.controller.js');
require('./components/teamlist/teamlist.component.js');
require('./components/teamlist/teamlist.controller.js');
require('./components/register/register.component.js');
require('./components/register/register.controller.js');
require('./components/playerlist/playerlist.component.js');
require('./components/playerlist/playerlist.controller.js');
require('./components/player/player.component.js');
require('./components/player/player.controller.js');
require('./components/account/account.component.js');
require('./components/account/account.controller.js');
require('./commons/translate.controller.js');

require('./components/modals/teammodal/teammodal.component.js');
require('./components/modals/playermodal/playermodal.component.js');

require('./service/teammodal.service.js');
require('./service/playermodal.service.js');
require('./components/modals/directive.js');

require('./components/auth/session.service.js');
require('./components/auth/auth.service.js');
require('./components/auth/parentController.controller.js');
require('./components/auth/authInterceptor.js');
require('./components/auth/directive.js');
require('./components/auth/globalFunctions.js');
require('./components/auth/login.controller.js');





