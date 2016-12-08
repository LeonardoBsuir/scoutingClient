webpackJsonp([0],[function(n,a,l){angular.module("scouthubApp",["ui.router","ngResource","ui.bootstrap","pascalprecht.translate","bw.paging","ngCookies","checklist-model","oi.select"]).constant("USER_ROLES",{all:"*",admin:"admin",scout:"scout",coach:"coach",user:"user"}).constant("AUTH_EVENTS",{loginSuccess:"auth-login-success",loginFailed:"auth-login-failed",logoutSuccess:"auth-logout-success",sessionTimeout:"auth-session-timeout",notAuthenticated:"auth-not-authenticated",notAuthorized:"auth-not-authorized"}).config(["$stateProvider","$urlRouterProvider","$translateProvider","$httpProvider","USER_ROLES",function(n,a,l,t,e){a.otherwise("/"),n.state("scouting",{url:"/scouthub",template:"<home></home>"}).state("scouting.teams",{url:"/teams",template:"<teams-list></teams-list>",data:{authorizedRoles:[e.admin,e.scout,e.coach]}}).state("scouting.players",{url:"/players",template:"<players-list></players-list>",params:{team:null},data:{authorizedRoles:[e.admin,e.scout,e.coach,e.user]}}).state("scouting.account",{url:"/account",template:"<account></account>",data:{authorizedRoles:[e.admin,e.scout,e.coach]}}).state("scouting.player",{url:"/player",template:"<player></player>",params:{player:null},data:{authorizedRoles:[e.admin,e.scout,e.coach]}}),l.useLocalStorage(),l.fallbackLanguage("en"),l.registerAvailableLanguageKeys(["en","ru"]),l.useStaticFilesLoader({prefix:"app/i18n/",suffix:".json"}),l.useSanitizeValueStrategy("escape"),l.preferredLanguage("en"),t.interceptors.push(["$injector",function(n){return n.get("AuthInterceptor")}])}]),l(1),l(5),l(8),l(9),l(10),l(11),l(12),l(13),l(14),l(15),l(16),l(17),l(18),l(19),l(20),l(21),l(22),l(23),l(24),l(26),l(28),l(29),l(30),l(31),l(32),l(33),l(34),l(35),l(36),l(37)},function(n,a,l){var t=l(2);"string"==typeof t&&(t=[[n.id,t,""]]);l(4)(t,{});t.locals&&(n.exports=t.locals)},function(n,a,l){a=n.exports=l(3)(),a.push([n.id,'html{position:relative;min-height:100%}main{background:inherit;min-height:calc(100vh - 121px)}footer{background-color:#000}.footer-offset,footer{height:50px}.custom-footer{color:#fff;position:relative;z-index:2000}.logo{padding:0}.lang{margin-top:7px;color:#8c8c8c;cursor:pointer}.add-button{position:fixed;top:100px;left:20px}.left-vertical-line{border-left:1px dashed #333}.nav-side-menu{overflow:auto;font-family:verdana,sans-serif;font-size:12px;font-weight:200;background-color:#2e353d;position:fixed;top:0;left:0;width:300px;height:100%;color:#e1ffff}.nav-side-menu .brand{background-color:#23282e;line-height:50px;display:block;text-align:center;font-size:14px}.nav-side-menu .toggle-btn{display:none}.nav-side-menu li,.nav-side-menu ul{list-style:none;padding:0;margin:0;line-height:35px;cursor:pointer}.nav-side-menu li :not(collapsed) .arrow:before,.nav-side-menu ul :not(collapsed) .arrow:before{font-family:Glyphicons Halflings,sans-serif;content:"\\E259";display:inline-block;padding-left:10px;padding-right:10px;vertical-align:middle;float:right}.nav-side-menu li .active,.nav-side-menu ul .active{border-left:3px solid #d19b3d;background-color:#4f5b69}.nav-side-menu li .sub-menu li.active,.nav-side-menu li .sub-menu li.active .li-item,.nav-side-menu ul .sub-menu li.active,.nav-side-menu ul .sub-menu li.active .li-item{color:#d19b3d}.nav-side-menu li .sub-menu li,.nav-side-menu ul .sub-menu li{background-color:#181c20;border:none;line-height:28px;border-bottom:1px solid #23282e;margin-left:0}.nav-side-menu li .sub-menu li:hover,.nav-side-menu ul .sub-menu li:hover{background-color:#020203}.nav-side-menu li .sub-menu li:before,.nav-side-menu ul .sub-menu li:before{font-family:Glyphicons Halflings,sans-serif;content:"\\E080";display:inline-block;padding-left:10px;padding-right:10px;vertical-align:middle}.sub-menu input{vertical-align:sub}.sub-menu-container{max-height:200px;overflow:auto}.nav-side-menu li{padding-left:0;border-left:3px solid #2e353d;border-bottom:1px solid #23282e}.nav-side-menu li .li-item{text-decoration:none;color:#e1ffff}.nav-side-menu li .li-item i{padding-left:10px;width:20px;padding-right:20px}.nav-side-menu li:hover{border-left:3px solid #d19b3d;background-color:#4f5b69;-webkit-transition:all 1s ease;transition:all 1s ease}@media (max-width:767px){.nav-side-menu{position:relative;width:100%;margin-bottom:10px}.nav-side-menu .toggle-btn{display:block;cursor:pointer;position:absolute;right:10px;top:10px;z-index:10!important;padding:3px;background-color:#fff;color:#000;width:40px;text-align:center}.brand{text-align:left!important;font-size:22px;padding-left:20px;line-height:50px!important}}@media (min-width:767px){.nav-side-menu .menu-list .menu-content{display:block}}.custom-scroll::-webkit-scrollbar{width:12px}.custom-scroll::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-border-radius:10px;background:grey;border-radius:10px}.custom-scroll::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(27,8,23,.43);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.5)}.custom-scroll::-webkit-scrollbar-thumb:window-inactive{background:rgba(27,8,23,.43)}.overflow-break{overflow-wrap:break-word}h2,p{text-align:center;color:#000;text-shadow:0 1px 0 #111}a{color:#777}.progress-bar{background-color:#1a1a1a;height:20px;padding:5px;width:250px;margin:20px 0 0 20px;border-radius:5px;box-shadow:inset 0 1px 5px #000,0 1px 0 #444}.progress-bar span{display:inline-block;height:100%;float:left;background-color:#777;border-radius:3px;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.5);-webkit-transition:width .4s ease-in-out;transition:width .4s ease-in-out}.blue span{background-color:#34c2e3}.red span{background-color:red}.orange span{background-color:#fecf23}.green span{background-color:#a5df41}.deepblue span{background-color:blue}.brown span{background-color:#8b4513}.magenta span{background-color:#8b008b}',""])},,,function(n,a,l){var t=l(6);"string"==typeof t&&(t=[[n.id,t,""]]);l(4)(t,{});t.locals&&(n.exports=t.locals)},function(n,a,l){a=n.exports=l(3)(),a.push([n.id,".lang-xs{background-position:0 -473px;min-width:14px;height:11px;min-height:11px;max-height:11px;background-image:url("+l(7)+")}.lang-sm,.lang-xs{background-repeat:no-repeat;display:inline-block}.lang-sm{background-position:0 -1172px;min-width:22px;height:16px;min-height:16px;max-height:16px;background-image:url("+l(7)+")}.lang-lg{background-position:0 -2134px;min-width:30px;height:22px;min-height:22px;max-height:22px;background-repeat:no-repeat;display:inline-block;background-image:url("+l(7)+')}.lang-xs[lang=ar]{background-position:0 0}.lang-xs[lang=be]{background-position:0 -11px}.lang-xs[lang=bg]{background-position:0 -22px}.lang-xs[lang=cs]{background-position:0 -33px}.lang-xs[lang=da]{background-position:0 -44px}.lang-xs[lang=de]{background-position:0 -55px}.lang-xs[lang=el]{background-position:0 -66px}.lang-xs[lang=en]{background-position:0 -77px}.lang-xs[lang=es]{background-position:0 -88px}.lang-xs[lang=et]{background-position:0 -99px}.lang-xs[lang=fi]{background-position:0 -110px}.lang-xs[lang=fr]{background-position:0 -121px}.lang-xs[lang=ga]{background-position:0 -132px}.lang-xs[lang=hi]{background-position:0 -143px}.lang-xs[lang=hr]{background-position:0 -154px}.lang-xs[lang=hu]{background-position:0 -165px}.lang-xs[lang=in]{background-position:0 -176px}.lang-xs[lang=is]{background-position:0 -187px}.lang-xs[lang=it]{background-position:0 -198px}.lang-xs[lang=iw]{background-position:0 -209px}.lang-xs[lang=ja]{background-position:0 -220px}.lang-xs[lang=ko]{background-position:0 -231px}.lang-xs[lang=lt]{background-position:0 -242px}.lang-xs[lang=lv]{background-position:0 -253px}.lang-xs[lang=mk]{background-position:0 -264px}.lang-xs[lang=ms]{background-position:0 -275px}.lang-xs[lang=mt]{background-position:0 -286px}.lang-xs[lang=nl]{background-position:0 -297px}.lang-xs[lang=no]{background-position:0 -308px}.lang-xs[lang=pl]{background-position:0 -319px}.lang-xs[lang=pt]{background-position:0 -330px}.lang-xs[lang=ro]{background-position:0 -341px}.lang-xs[lang=ru]{background-position:0 -352px}.lang-xs[lang=sk]{background-position:0 -363px}.lang-xs[lang=sl]{background-position:0 -374px}.lang-xs[lang=sq]{background-position:0 -385px}.lang-xs[lang=sr]{background-position:0 -396px}.lang-xs[lang=sv]{background-position:0 -407px}.lang-xs[lang=th]{background-position:0 -418px}.lang-xs[lang=tr]{background-position:0 -429px}.lang-xs[lang=uk]{background-position:0 -440px}.lang-xs[lang=vi]{background-position:0 -451px}.lang-xs[lang=zh]{background-position:0 -462px}.lang-sm[lang=ar]{background-position:0 -484px}.lang-sm[lang=be]{background-position:0 -500px}.lang-sm[lang=bg]{background-position:0 -516px}.lang-sm[lang=cs]{background-position:0 -532px}.lang-sm[lang=da]{background-position:0 -548px}.lang-sm[lang=de]{background-position:0 -564px}.lang-sm[lang=el]{background-position:0 -580px}.lang-sm[lang=en]{background-position:0 -596px}.lang-sm[lang=es]{background-position:0 -612px}.lang-sm[lang=et]{background-position:0 -628px}.lang-sm[lang=fi]{background-position:0 -644px}.lang-sm[lang=fr]{background-position:0 -660px}.lang-sm[lang=ga]{background-position:0 -676px}.lang-sm[lang=hi]{background-position:0 -692px}.lang-sm[lang=hr]{background-position:0 -708px}.lang-sm[lang=hu]{background-position:0 -724px}.lang-sm[lang=in]{background-position:0 -740px}.lang-sm[lang=is]{background-position:0 -756px}.lang-sm[lang=it]{background-position:0 -772px}.lang-sm[lang=iw]{background-position:0 -788px}.lang-sm[lang=ja]{background-position:0 -804px}.lang-sm[lang=ko]{background-position:0 -820px}.lang-sm[lang=lt]{background-position:0 -836px}.lang-sm[lang=lv]{background-position:0 -852px}.lang-sm[lang=mk]{background-position:0 -868px}.lang-sm[lang=ms]{background-position:0 -884px}.lang-sm[lang=mt]{background-position:0 -900px}.lang-sm[lang=nl]{background-position:0 -916px}.lang-sm[lang=no]{background-position:0 -932px}.lang-sm[lang=pl]{background-position:0 -948px}.lang-sm[lang=pt]{background-position:0 -964px}.lang-sm[lang=ro]{background-position:0 -980px}.lang-sm[lang=ru]{background-position:0 -996px}.lang-sm[lang=sk]{background-position:0 -1012px}.lang-sm[lang=sl]{background-position:0 -1028px}.lang-sm[lang=sq]{background-position:0 -1044px}.lang-sm[lang=sr]{background-position:0 -1060px}.lang-sm[lang=sv]{background-position:0 -1076px}.lang-sm[lang=th]{background-position:0 -1092px}.lang-sm[lang=tr]{background-position:0 -1108px}.lang-sm[lang=uk]{background-position:0 -1124px}.lang-sm[lang=vi]{background-position:0 -1140px}.lang-sm[lang=zh]{background-position:0 -1156px}.lang-lg[lang=ar]{background-position:0 -1188px}.lang-lg[lang=be]{background-position:0 -1210px}.lang-lg[lang=bg]{background-position:0 -1232px}.lang-lg[lang=cs]{background-position:0 -1254px}.lang-lg[lang=da]{background-position:0 -1276px}.lang-lg[lang=de]{background-position:0 -1298px}.lang-lg[lang=el]{background-position:0 -1320px}.lang-lg[lang=en]{background-position:0 -1342px}.lang-lg[lang=es]{background-position:0 -1364px}.lang-lg[lang=et]{background-position:0 -1386px}.lang-lg[lang=fi]{background-position:0 -1408px}.lang-lg[lang=fr]{background-position:0 -1430px}.lang-lg[lang=ga]{background-position:0 -1452px}.lang-lg[lang=hi]{background-position:0 -1474px}.lang-lg[lang=hr]{background-position:0 -1496px}.lang-lg[lang=hu]{background-position:0 -1518px}.lang-lg[lang=in]{background-position:0 -1540px}.lang-lg[lang=is]{background-position:0 -1562px}.lang-lg[lang=it]{background-position:0 -1584px}.lang-lg[lang=iw]{background-position:0 -1606px}.lang-lg[lang=ja]{background-position:0 -1628px}.lang-lg[lang=ko]{background-position:0 -1650px}.lang-lg[lang=lt]{background-position:0 -1672px}.lang-lg[lang=lv]{background-position:0 -1694px}.lang-lg[lang=mk]{background-position:0 -1716px}.lang-lg[lang=ms]{background-position:0 -1738px}.lang-lg[lang=mt]{background-position:0 -1760px}.lang-lg[lang=nl]{background-position:0 -1782px}.lang-lg[lang=no]{background-position:0 -1804px}.lang-lg[lang=pl]{background-position:0 -1826px}.lang-lg[lang=pt]{background-position:0 -1848px}.lang-lg[lang=ro]{background-position:0 -1870px}.lang-lg[lang=ru]{background-position:0 -1892px}.lang-lg[lang=sk]{background-position:0 -1914px}.lang-lg[lang=sl]{background-position:0 -1936px}.lang-lg[lang=sq]{background-position:0 -1958px}.lang-lg[lang=sr]{background-position:0 -1980px}.lang-lg[lang=sv]{background-position:0 -2002px}.lang-lg[lang=th]{background-position:0 -2024px}.lang-lg[lang=tr]{background-position:0 -2046px}.lang-lg[lang=uk]{background-position:0 -2068px}.lang-lg[lang=vi]{background-position:0 -2090px}.lang-lg[lang=zh]{background-position:0 -2112px}.lang-lbl-en:after,.lang-lbl-full:after,.lang-lbl:after{content:"Unknown language"}.lang-lbl[lang=ar]:after{content:"\\627\\644\\639\\631\\628\\64A\\629"}.lang-lbl[lang=be]:after{content:"\\411\\435\\43B\\430\\440\\443\\441\\43A\\456"}.lang-lbl[lang=bg]:after{content:"\\411\\44A\\43B\\433\\430\\440\\441\\43A\\438"}.lang-lbl[lang=cs]:after{content:"\\10C  e\\161tina"}.lang-lbl[lang=da]:after{content:"Dansk"}.lang-lbl[lang=de]:after{content:"Deutsch"}.lang-lbl[lang=el]:after{content:"\\395\\3BB\\3BB\\3B7\\3BD\\3B9\\3BA\\3AC"}.lang-lbl[lang=en]:after{content:"English"}.lang-lbl[lang=es]:after{content:"Espa\\F1ol"}.lang-lbl[lang=et]:after{content:"Eesti"}.lang-lbl[lang=fi]:after{content:"Suomi"}.lang-lbl[lang=fr]:after{content:"Fran\\E7  ais"}.lang-lbl[lang=ga]:after{content:"Gaeilge"}.lang-lbl[lang=hi]:after{content:"\\939\\93F\\902\\926\\940"}.lang-lbl[lang=hr]:after{content:"Hrvatski"}.lang-lbl[lang=hu]:after{content:"Magyar"}.lang-lbl[lang=in]:after{content:"Bahasa indonesia"}.lang-lbl[lang=is]:after{content:"\\CDslenska"}.lang-lbl[lang=it]:after{content:"Italiano"}.lang-lbl[lang=iw]:after{content:"\\5E2\\5D1\\5E8\\5D9\\5EA"}.lang-lbl[lang=ja]:after{content:"\\65E5\\672C\\8A9E"}.lang-lbl[lang=ko]:after{content:"\\D55C\\AD6D\\C5B4"}.lang-lbl[lang=lt]:after{content:"Lietuvi\\173"}.lang-lbl[lang=lv]:after{content:"Latvie\\161u"}.lang-lbl[lang=mk]:after{content:"\\41C\\430\\43A\\435\\434\\43E\\43D\\441\\43A\\438"}.lang-lbl[lang=ms]:after{content:"Bahasa melayu"}.lang-lbl[lang=mt]:after{content:"Malti"}.lang-lbl[lang=nl]:after{content:"Nederlands"}.lang-lbl[lang=no]:after{content:"Norsk"}.lang-lbl[lang=pl]:after{content:"Polski"}.lang-lbl[lang=pt]:after{content:"Portugu\\EAs"}.lang-lbl[lang=ro]:after{content:"Rom\\E2n\\103"}.lang-lbl[lang=ru]:after{content:"\\420\\443\\441\\441\\43A\\438\\439"}.lang-lbl[lang=sk]:after{content:"Sloven\\10Dina"}.lang-lbl[lang=sl]:after{content:"Sloven\\161\\10Dina"}.lang-lbl[lang=sq]:after{content:"Shqipe"}.lang-lbl[lang=sr]:after{content:"\\421\\440\\43F\\441\\43A\\438"}.lang-lbl[lang=sv]:after{content:"Svenska"}.lang-lbl[lang=th]:after{content:"\\E44\\E17\\E22"}.lang-lbl[lang=tr]:after{content:"T\\FCrk\\E7  e"}.lang-lbl[lang=uk]:after{content:"\\423\\43A\\440\\430\\457\\43D\\441\\44C\\43A\\430"}.lang-lbl[lang=vi]:after{content:"Ti\\1EBFng vi\\1EC7t"}.lang-lbl[lang=zh]:after{content:"\\4E2D\\6587"}.lang-lbl-en[lang=ar]:after{content:"Arabic"}.lang-lbl-en[lang=be]:after{content:"Belarusian"}.lang-lbl-en[lang=bg]:after{content:"Bulgarian"}.lang-lbl-en[lang=cs]:after{content:"Czech"}.lang-lbl-en[lang=da]:after{content:"Danish"}.lang-lbl-en[lang=de]:after{content:"German"}.lang-lbl-en[lang=el]:after{content:"Greek"}.lang-lbl-en[lang=en]:after{content:"English"}.lang-lbl-en[lang=es]:after{content:"Spanish"}.lang-lbl-en[lang=et]:after{content:"Estonian"}.lang-lbl-en[lang=fi]:after{content:"Finnish"}.lang-lbl-en[lang=fr]:after{content:"French"}.lang-lbl-en[lang=ga]:after{content:"Irish"}.lang-lbl-en[lang=hi]:after{content:"Hindi"}.lang-lbl-en[lang=hr]:after{content:"Croatian"}.lang-lbl-en[lang=hu]:after{content:"Hungarian"}.lang-lbl-en[lang=in]:after{content:"Indonesian"}.lang-lbl-en[lang=is]:after{content:"Icelandic"}.lang-lbl-en[lang=it]:after{content:"Italian"}.lang-lbl-en[lang=iw]:after{content:"Hebrew"}.lang-lbl-en[lang=ja]:after{content:"Japanese"}.lang-lbl-en[lang=ko]:after{content:"Korean"}.lang-lbl-en[lang=lt]:after{content:"Lithuanian"}.lang-lbl-en[lang=lv]:after{content:"Latvian"}.lang-lbl-en[lang=mk]:after{content:"Macedonian"}.lang-lbl-en[lang=ms]:after{content:"Malay"}.lang-lbl-en[lang=mt]:after{content:"Maltese"}.lang-lbl-en[lang=nl]:after{content:"Dutch"}.lang-lbl-en[lang=no]:after{content:"Norwegian"}.lang-lbl-en[lang=pl]:after{content:"Polish"}.lang-lbl-en[lang=pt]:after{content:"Portuguese"}.lang-lbl-en[lang=ro]:after{content:"Romanian"}.lang-lbl-en[lang=ru]:after{content:"Russian"}.lang-lbl-en[lang=sk]:after{content:"Slovak"}.lang-lbl-en[lang=sl]:after{content:"Slovenian"}.lang-lbl-en[lang=sq]:after{content:"Albanian"}.lang-lbl-en[lang=sr]:after{content:"Serbian"}.lang-lbl-en[lang=sv]:after{content:"Swedish"}.lang-lbl-en[lang=th]:after{content:"Thai"}.lang-lbl-en[lang=tr]:after{content:"Turkish"}.lang-lbl-en[lang=uk]:after{content:"Ukrainian"}.lang-lbl-en[lang=vi]:after{content:"Vietnamese"}.lang-lbl-en[lang=zh]:after{content:"Chinese"}.lang-lbl-full[lang=ar]:after{content:"\\627\\644\\639\\631\\628\\64A\\629\\A0/\\A0  Arabic"}.lang-lbl-full[lang=be]:after{content:"\\411\\435\\43B\\430\\440\\443\\441\\43A\\456\\A0/\\A0  Belarusian"}.lang-lbl-full[lang=bg]:after{content:"\\411\\44A\\43B\\433\\430\\440\\441\\43A\\438\\A0/\\A0  Bulgarian"}.lang-lbl-full[lang=cs]:after{content:"\\10C  e\\161tina\\A0/\\A0  Czech"}.lang-lbl-full[lang=da]:after{content:"Dansk\\A0/\\A0  Danish"}.lang-lbl-full[lang=de]:after{content:"Deutsch\\A0/\\A0German"}.lang-lbl-full[lang=el]:after{content:"\\395\\3BB\\3BB\\3B7\\3BD\\3B9\\3BA\\3AC\\A0/\\A0Greek"}.lang-lbl-full[lang=en]:after{content:"English\\A0/\\A0  English"}.lang-lbl-full[lang=es]:after{content:"Espa\\F1ol\\A0/\\A0Spanish"}.lang-lbl-full[lang=et]:after{content:"Eesti\\A0/\\A0  Estonian"}.lang-lbl-full[lang=fi]:after{content:"Suomi\\A0/\\A0  Finnish"}.lang-lbl-full[lang=fr]:after{content:"Fran\\E7  ais\\A0/\\A0  French"}.lang-lbl-full[lang=ga]:after{content:"Gaeilge\\A0/\\A0Irish"}.lang-lbl-full[lang=hi]:after{content:"\\939\\93F\\902\\926\\940\\A0/\\A0Hindi"}.lang-lbl-full[lang=hr]:after{content:"Hrvatski\\A0/\\A0  Croatian"}.lang-lbl-full[lang=hu]:after{content:"Magyar\\A0/\\A0Hungarian"}.lang-lbl-full[lang=in]:after{content:"Bahasa indonesia\\A0/\\A0Indonesian"}.lang-lbl-full[lang=is]:after{content:"\\CDslenska\\A0/\\A0Icelandic"}.lang-lbl-full[lang=it]:after{content:"Italiano\\A0/\\A0Italian"}.lang-lbl-full[lang=iw]:after{content:"\\5E2\\5D1\\5E8\\5D9\\5EA\\A0/\\A0Hebrew"}.lang-lbl-full[lang=ja]:after{content:"\\65E5\\672C\\8A9E\\A0/\\A0Japanese"}.lang-lbl-full[lang=ko]:after{content:"\\D55C\\AD6D\\C5B4\\A0/\\A0Korean"}.lang-lbl-full[lang=lt]:after{content:"Lietuvi\\173\\A0/\\A0Lithuanian"}.lang-lbl-full[lang=lv]:after{content:"Latvie\\161u\\A0/\\A0Latvian"}.lang-lbl-full[lang=mk]:after{content:"\\41C\\430\\43A\\435\\434\\43E\\43D\\441\\43A\\438\\A0/\\A0Macedonian"}.lang-lbl-full[lang=ms]:after{content:"Bahasa melayu\\A0/\\A0Malay"}.lang-lbl-full[lang=mt]:after{content:"Malti\\A0/\\A0Maltese"}.lang-lbl-full[lang=nl]:after{content:"Nederlands\\A0/\\A0  Dutch"}.lang-lbl-full[lang=no]:after{content:"Norsk\\A0/\\A0Norwegian"}.lang-lbl-full[lang=pl]:after{content:"Polski\\A0/\\A0Polish"}.lang-lbl-full[lang=pt]:after{content:"Portugu\\EAs\\A0/\\A0Portuguese"}.lang-lbl-full[lang=ro]:after{content:"Rom\\E2n\\103\\A0/\\A0Romanian"}.lang-lbl-full[lang=ru]:after{content:"\\420\\443\\441\\441\\43A\\438\\439\\A0/\\A0Russian"}.lang-lbl-full[lang=sk]:after{content:"Sloven\\10Dina\\A0/\\A0Slovak"}.lang-lbl-full[lang=sl]:after{content:"Sloven\\161\\10Dina\\A0/\\A0Slovenian"}.lang-lbl-full[lang=sq]:after{content:"Shqipe\\A0/\\A0  Albanian"}.lang-lbl-full[lang=sr]:after{content:"\\421\\440\\43F\\441\\43A\\438\\A0/\\A0Serbian"}.lang-lbl-full[lang=sv]:after{content:"Svenska\\A0/\\A0Swedish"}.lang-lbl-full[lang=th]:after{content:"\\E44\\E17\\E22\\A0/\\A0Thai"}.lang-lbl-full[lang=tr]:after{content:"T\\FCrk\\E7  e\\A0/\\A0Turkish"}.lang-lbl-full[lang=uk]:after{content:"\\423\\43A\\440\\430\\457\\43D\\441\\44C\\43A\\430\\A0/\\A0Ukrainian"}.lang-lbl-full[lang=vi]:after{content:"Ti\\1EBFng vi\\1EC7t\\A0/\\A0Vietnamese"}.lang-lbl-full[lang=zh]:after{content:"\\4E2D\\6587\\A0/\\A0  Chinese"}.lang-lg:before,.lang-sm:before,.lang-xs:before{content:\'\\A0\'}.lang-xs.lang-lbl,.lang-xs.lang-lbl-en,.lang-xs.lang-lbl-full{padding-left:16px}.lang-sm.lang-lbl,.lang-sm.lang-lbl-en,.lang-sm.lang-lbl-full{padding-left:24px}.lang-lg.lang-lbl,.lang-lg.lang-lbl-en,.lang-lg.lang-lbl-full{padding-left:32px}.lang-lg.lang-lbl-en:before,.lang-lg.lang-lbl-full:before,.lang-lg.lang-lbl:before,.lang-sm.lang-lbl-en:before,.lang-sm.lang-lbl-full:before,.lang-sm.lang-lbl:before,.lang-xs.lang-lbl-en:before,.lang-xs.lang-lbl-full:before,.lang-xs.lang-lbl:before{content:\'\'}.lang-lg,.lang-lg:after{top:0;position:relative}.lang-sm{top:1px;position:relative}.lang-sm:after{top:-1px;position:relative}.lang-xs{top:4px;position:relative}.lang-xs:after{top:-4px;position:relative}.lead>.lang-lg{top:2px}.lead>.lang-lg:after{top:-2px}.lead>.lang-sm{top:6px}.lead>.lang-sm:after{top:-6px}.lead>.lang-xs{top:8px}.lead>.lang-xs:after{top:-8px}small>.lang-sm{top:-1px}small>.lang-sm:after{top:1px}small>.lang-xs{top:2px}small>.lang-xs:after{top:-2px}h1>.lang-lg{top:9px}h1>.lang-lg:after{top:-9px}h1>.lang-sm{top:12px}h1>.lang-sm:after{top:-12px}h1>.lang-xs{top:14px}h1>.lang-xs:after{top:-14px}h2>.lang-lg{top:5px}h2>.lang-lg:after{top:-5px}h2>.lang-sm{top:8px}h2>.lang-sm:after{top:-8px}h2>.lang-xs{top:10px}h2>.lang-xs:after{top:-10px}h3>.lang-lg{top:1px}h3>.lang-lg:after{top:-1px}h3>.lang-sm{top:5px}h3>.lang-sm:after{top:-5px}h3>.lang-xs{top:8px}h3>.lang-xs:after{top:-8px}h4>.lang-lg{top:-1px}h4>.lang-lg:after,h4>.lang-sm{top:1px}h4>.lang-sm:after{top:-1px}h4>.lang-xs{top:4px}h4>.lang-xs:after{top:-4px}h5>.lang-sm,h5>.lang-sm:after{top:0}h5>.lang-xs{top:2px}h5>.lang-xs:after{top:-2px}h6>.lang-sm,h6>.lang-sm:after{top:0}h6>.lang-xs{top:1px}h6>.lang-xs:after{top:-1px}.btn>.lang-sm{top:2px}.btn>.lang-sm:after{top:-2px}.btn>.lang-xs{top:4px}.btn>.lang-xs:after{top:-4px}.btn.btn-xs>.lang-sm,.btn.btn-xs>.lang-sm:after{top:0}.btn.btn-xs>.lang-xs{top:3px}.btn.btn-xs>.lang-xs:after{top:-3px}.btn.btn-sm>.lang-sm,.btn.btn-sm>.lang-sm:after{top:0}.btn.btn-sm>.lang-xs{top:3px}.btn.btn-sm>.lang-xs:after{top:-3px}.btn.btn-lg>.lang-lg{top:1px}.btn.btn-lg>.lang-lg:after{top:-1px}.btn.btn-lg>.lang-sm{top:3px}.btn.btn-lg>.lang-sm:after{top:-3px}.btn.btn-lg>.lang-xs{top:6px}.btn.btn-lg>.lang-xs:after{top:-6px}',""])},function(n,a,l){n.exports=l.p+"fbcfd4ee7361094e402d88e9adf3c3cf.png"},function(n,a){angular.module("scouthubApp").factory("TeamService",["$resource",function(n){var a="http://localhost:8080/scouting/teams/:id",l=n(a,{},{getAll:{method:"GET",isArray:!0},save:{method:"POST"},get:{method:"GET",params:{id:"@id"}},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE",params:{id:"@id"}}});return{getAll:function(){return l.getAll({}).$promise},get:function(n){return l.get({id:n}).$promise},create:function(n){return l.save({},n).$promise},update:function(n,a){return l.update({id:a},n).$promise},"delete":function(n){return l["delete"]({id:n}).$promise}}}])},function(n,a){angular.module("scouthubApp").factory("UserService",["$resource",function(n){var a="http://localhost:8080/scouting/users/:id",l=n(a,{},{getAll:{method:"GET",isArray:!0},getByTeamId:{method:"GET",isArray:!0},save:{method:"POST"},get:{method:"GET",params:{id:"@id"}},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE",params:{id:"@id"}}});return{getAll:function(){return l.getAll({}).$promise},getByTeamId:function(n){return l.getByTeamId({teamId:n}).$promise},get:function(n){return l.get({id:n}).$promise},create:function(n){return l.save({},n).$promise},update:function(n,a){return l.update({id:a},n).$promise},"delete":function(n){return l["delete"]({id:n}).$promise}}}])},function(n,a){angular.module("scouthubApp").factory("PlayerService",["$resource",function(n){var a="http://localhost:8080/scouting/players/:id",l=n(a,{},{getAll:{method:"GET",isArray:!0},getByTeamId:{method:"GET",isArray:!0},save:{method:"POST"},get:{method:"GET",params:{id:"@id"}},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE",params:{id:"@id"}}});return{getAll:function(){return l.getAll({}).$promise},getByTeamId:function(n){return l.getByTeamId({teamId:n}).$promise},get:function(n){return l.get({id:n}).$promise},create:function(n){return l.save({},n).$promise},update:function(n,a){return l.update({id:a},n).$promise},"delete":function(n){return l["delete"]({id:n}).$promise}}}])},function(n,a){angular.module("scouthubApp").component("validator",{templateUrl:"app/components/validation/validator.template.html",bindings:{control:"=",fieldName:"@"},controllerAs:"$ctrl"})},function(n,a){angular.module("scouthubApp").component("serverError",{templateUrl:"app/components/validation/servererror.template.html",bindings:{error:"="},controllerAs:"$ctrl"})},function(n,a){angular.module("scouthubApp").component("home",{templateUrl:"app/components/home/home.template.html",controller:"HomeCtrl"})},function(n,a){angular.module("scouthubApp").controller("HomeCtrl",["$state","$stateParams","PlayerModalService","TeamModalService",function(n,a,l,t){var e=this;e.onSelected=function(){n.go("scouting.players",{team:null})},e.onSelectedAccount=function(){n.go("scouting.account")},e.playerModalCreate=function(){l.createModal().then(function(a){n.go("scouting.player",{player:a})})},e.teamModalCreate=function(){t.createModal()},e.resetFilter=function(){e.onSelected()}}])},function(n,a){angular.module("scouthubApp").component("teamsList",{templateUrl:"app/components/teamlist/teamlist.template.html",controller:"TeamsCtrl"})},function(n,a){angular.module("scouthubApp").controller("TeamsCtrl",["TeamService","UserService","$state","$stateParams",function(n,a,l,t){var e=this,o="error.teams.load",r="error.user.load";e.loadTeams=function(){n.getAll().then(function(n){e.teams=n},function(){e.error={message:o}})},e.loadTeams(),e.loadCoach=function(){a.getAll().then(function(n){e.users=n},function(){e.error={message:r}})},e.loadCoach(),e.onSelected=function(n){l.go("scouting.players",{team:n})}}])},function(n,a){angular.module("scouthubApp").component("playersList",{templateUrl:"app/components/playerlist/playerlist.template.html",controller:"PlayersCtrl"})},function(n,a){angular.module("scouthubApp").controller("PlayersCtrl",["PlayerService","$state","$stateParams",function(n,a,l){var t=this,e="error.players.load";t.team=l.team;var o;null!=t.team&&(o=t.team.teamId),t.loadPlayers=function(){n.getByTeamId(o).then(function(n){t.players=n},function(){t.error={message:e}})},t.loadPlayers(),t.onSelected=function(n){a.go("scouting.player",{player:n})}}]).filter("getTotal",function(){return function(n){var a;return a=Math.round((+n.shooting+ +n.passing+ +n.dribbling+ +n.defence+ +n.speed+ +n.energy+ +n.stamina)/7)}})},function(n,a){angular.module("scouthubApp").component("player",{templateUrl:"app/components/player/player.template.html",controller:"PlayerCtrl"})},function(n,a){angular.module("scouthubApp").controller("PlayerCtrl",["PlayerService","$state","$stateParams","Session",function(n,a,l,t){var e=this;e.player=l.player,e.user=t.user,e.deletePlayer=function(l){n["delete"](l.playerId).then(function(){a.go("scouting.players")})},e.ifDel=function(){return"admin"===e.user.roleByRoleId.type}}]).filter("getAge",function(){return function(n){var a=6e4,l=60*a,t=24*l,e=365*t,o=new Date,r=o.getTime();return Math.round((r-n)/e)}}).filter("getArrow",function(){return function(n,a){return n>a?"app/assets/img/red.png":"app/assets/img/green.png"}})},function(n,a){angular.module("scouthubApp").component("account",{templateUrl:"app/components/account/account.template.html",controller:"AccountCtrl"})},function(n,a){angular.module("scouthubApp").controller("AccountCtrl",["PlayerService","$state","$stateParams","Session","UserService",function(n,a,l,t,e){var o=this,r="error.user.load";o.player=l.player,o.user=t.user,o.loadUser=function(){e.get(o.user.userId).then(function(n){o.user=n,t.destroy(),t.create(o.user)},function(){o.error={message:r}})},o.loadUser(),o.onSelected=function(n){a.go("scouting.player",{player:n})}}])},function(n,a){angular.module("scouthubApp").controller("TranslateCtrl",["$translate",function(n){var a=this;a.changeLocale=function(a){n.use(a)}}])},function(n,a){angular.module("scouthubApp").component("teamModal",{templateUrl:"app/components/modals/teammodal/teammodal.template.html",bindings:{resolve:"<",close:"&",dismiss:"&"},controller:["$filter","TeamService",function(n,a){var l="error.server",t="modal.teams.label.create",e="modal.teams.label.edit",o=this;o.$onInit=function(){o.currentTeam=o.resolve.currentTeam,null!==o.currentTeam.teamId?o.header=n("translate")(e):o.header=n("translate")(t)},o.finish=function(){o.currentTeam.photo="app/assets/img/"+o.currentTeam.photo.name,null!==o.currentTeam.teamId?a.update(o.currentTeam,o.currentTeam.teamId).then(function(n){o.close({$value:n})},function(){o.error={message:l}}):a.create(o.currentTeam).then(function(n){o.close({$value:n})},function(){o.error={message:l}})},o.cancel=function(){o.dismiss({$value:"cancel"})}}]})},,function(n,a){angular.module("scouthubApp").component("playerModal",{templateUrl:"app/components/modals/playermodal/playermodal.template.html",bindings:{resolve:"<",close:"&",dismiss:"&"},controller:["$filter","PlayerService","TeamService",function(n,a,l){var t="error.server",e="modal.players.label.create",o="modal.players.label.edit",r="error.teams.load",i=this;i.$onInit=function(){i.currentPlayer=i.resolve.currentPlayer,l.getAll().then(function(n){i.teams=n},function(){i.error={message:r}}),null!==i.currentPlayer.playerId?i.header=n("translate")(o):i.header=n("translate")(e)},i.finish=function(){console.log(i.currentPlayer),i.currentPlayer.photo="app/assets/img/"+i.currentPlayer.photo.name,null!==i.currentPlayer.playerId?a.update(i.currentPlayer,i.currentPlayer.playerId).then(function(n){i.close({$value:n})},function(){i.error={message:t}}):a.create(i.currentPlayer).then(function(n){i.close({$value:n})},function(){i.error={message:t}})},i.cancel=function(){i.dismiss({$value:"cancel"})}}]})},,function(n,a){angular.module("scouthubApp").factory("TeamModalService",["$uibModal",function(n){function a(a,l,t){var e=n.open({animation:!0,component:a,size:l,resolve:{currentTeam:function(){return t}}});return e.result}return{createModal:function(){return a("team-modal","lg",{teamId:null,name:"",photo:"",country:""})},updateModal:function(n){return a("team-modal","lg",angular.copy(n))}}}])},function(n,a){angular.module("scouthubApp").factory("PlayerModalService",["$uibModal",function(n){function a(a,l,t){var e=n.open({animation:!0,component:a,size:l,resolve:{currentPlayer:function(){return t}}});return e.result}return{createModal:function(){return a("player-modal","lg",{playerId:null,firstName:"",lastName:"",position:"",birthdate:"",skillsBySkillsId:{skillsId:null,shooting:null,passing:null,dribbling:null,defence:null,speed:null,energy:null,stamina:null},teamByTeamId:{teamId:"",name:"",skillsBySkillsId:{skillsId:"",shooting:"",passing:"",dribbling:"",defence:"",speed:"",energy:"",stamina:""},country:"",photo:""},weight:null,height:null,salary:null,cost:null,foot:null,photo:""})},updateModal:function(n){return a("player-modal","lg",angular.copy(n))}}}])},function(n,a){angular.module("scouthubApp").directive("bindFile",[function(){return{require:"ngModel",restrict:"A",link:function(n,a,l,t){a.bind("change",function(a){t.$setViewValue(a.target.files[0]),n.$apply()}),n.$watch(function(){return t.$viewValue},function(n){n||a.val("")})}}}])},function(n,a){angular.module("scouthubApp").service("Session",function(){return this.create=function(n){this.user=n,this.userRole=n.roleByRoleId.type},this.destroy=function(){this.user=null,this.userRole=null},this})},function(n,a){angular.module("scouthubApp").factory("Auth",["$http","$rootScope","$window","Session","AUTH_EVENTS",function(n,a,l,t,e){var o={},r={};
return o.login=function(o,i,g){n.get("http://localhost:8080/scouting/users/",{}).success(function(n){r=n;var s,u=!1;for(s=0;s<r.length;s++)o.username==r[s].login&&o.password==r[s].password&&(l.sessionStorage.userInfo=JSON.stringify(r[s]),u=!0,delete r[s].password,t.create(r[s]),a.currentUser=r[s],a.$broadcast(e.loginSuccess),i(r[s]));u||(a.$broadcast(e.loginFailed),g())})},o.isAuthenticated=function(){return!!t.user},o.isAuthorized=function(n){return angular.isArray(n)||(n=[n]),o.isAuthenticated()&&n.indexOf(t.userRole)!==-1},o.logout=function(){t.destroy(),l.sessionStorage.removeItem("userInfo"),a.$broadcast(e.logoutSuccess)},o}])},function(n,a){"use strict";angular.module("scouthubApp").controller("ParentController",["$scope","$rootScope","$uibModal","Auth","AUTH_EVENTS","USER_ROLES",function(n,a,l,t,e,o){n.modalShown=!1;var r=function(){if(!n.modalShown){n.modalShown=!0;var a=l.open({templateUrl:"app/components/auth/login.template.html",controller:"LoginCtrl",backdrop:"static"});a.result.then(function(){n.modalShown=!1})}},i=function(){n.currentUser=a.currentUser},g=function(){alert("Not Authorized")};n.currentUser=null,n.userRoles=o,n.isAuthorized=t.isAuthorized,r(),a.$on(e.notAuthorized,g),a.$on(e.notAuthenticated,r),a.$on(e.sessionTimeout,r),a.$on(e.logoutSuccess,r),a.$on(e.loginSuccess,i)}])},function(n,a){angular.module("scouthubApp").factory("AuthInterceptor",["$rootScope","$q","Session","AUTH_EVENTS",function(n,a,l,t){return{responseError:function(l){return n.$broadcast({401:t.notAuthenticated,403:t.notAuthorized,419:t.sessionTimeout,440:t.sessionTimeout}[l.status],l),a.reject(l)}}}])},function(n,a){angular.module("scouthubApp").directive("formAutofillFix",["$timeout",function(n){return function(a,l,t){l.prop("method","post"),t.ngSubmit&&n(function(){l.unbind("submit").bind("submit",function(n){n.preventDefault(),l.find("input, textarea, select").trigger("input").trigger("change").trigger("keydown"),a.$apply(t.ngSubmit)})})}}])},function(n,a){angular.module("scouthubApp").run(["$rootScope","$state","Auth","AUTH_EVENTS",function(n,a,l,t){n.$on("$stateChangeStart",function(a,e){var o=e.data.authorizedRoles;l.isAuthorized(o)||(a.preventDefault(),l.isAuthenticated()?n.$broadcast(t.notAuthorized):n.$broadcast(t.notAuthenticated))}),n.getClass=function(n){return a.current.name==n?"active":""},n.logout=function(){l.logout()}}])},function(n,a){angular.module("scouthubApp").controller("LoginCtrl",["$scope","$state","$uibModalInstance","$window","Auth",function(n,a,l,t,e){if(n.credentials={},n.loginForm={},n.error=!1,n.submit=function(){n.submitted=!0,n.loginForm.$invalid?n.error=!0:n.login(n.credentials)},n.login=function(t){n.error=!1,e.login(t,function(n){l.close(),a.go("scouting.teams")},function(a){console.log("error"),n.error=!0})},t.sessionStorage.userInfo){var o=JSON.parse(t.sessionStorage.userInfo);n.login(o)}}])}]);
//# sourceMappingURL=app.bundle.js.map