(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(e,n){},"0785de3f40b134973d35":function(e,n,t){var r=t("ab039aecd4a1d4fedc0e").addLocaleData,o=t("58d82b287428be065a42"),a=t("7dd68a64079d1d4cd439");r(o);var c=function e(n,t){var r="en"!==n?e("en",a):{};return Object.keys(t).reduce(function(e,o){var a=t[o]||"en"===n?t[o]:r[o];return Object.assign(e,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},o,a))},{})},i={en:c("en",a)};n.appLocales=["en"],n.formatTranslationMessages=c,n.translationMessages=i,n.DEFAULT_LOCALE="en"},"0cbc23df16a5c6ceec4d":function(e,n,t){e.exports=t.p+".htaccess"},1:function(e,n,t){t("5b15df55c1316f23e9d0"),e.exports=t("8b703812aa8ae3c41814")},"29d5dc79fa2ea78fcbb7":function(e,n,t){var r=t("efc6f560e0bf9b71c388");"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("1e4534d1d62a11482e97")(r,o);r.locals&&(e.exports=r.locals)},"7dd68a64079d1d4cd439":function(e){e.exports=[]},"8b703812aa8ae3c41814":function(e,n,t){"use strict";t.r(n);t("8c8e4f08a118a28666b0");var r=t("8af190b70a6bc55c6f1b"),o=t.n(r),a=t("63f14ac74ce296f77f4d"),c=t.n(a),i=t("d7dd51e1bf6bfc2c9c3d"),f=t("accfe20dac886d57b695"),l=t("89fa59dfd48f288c4600"),u=t.n(l)()(),d=(t("6735bdf1a3a541ab43fd"),t("e95a63b25fb92ed15721")),b=t("be49ece3c9ac38c7621f"),s=Object(b.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,"0b8eb3e35929778b339a"))}),p=Object(b.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,"0443432f519b254b32b6"))}),y=Object(b.a)(function(){return t.e(6).then(t.bind(null,"8937ca26cad1b574ef33"))}),v=t("0b3cb19af78752326f59");function h(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  body.fontLoaded {\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #app {\n    background-color: #fafafa;\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n"]);return h=function(){return e},e}var m,g=Object(v.a)(h());t("29d5dc79fa2ea78fcbb7");function O(e,n,t,r){m||(m="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===a)n.children=r;else if(a>1){for(var i=new Array(a),f=0;f<a;f++)i[f]=arguments[f+3];n.children=i}return{$$typeof:m,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var w=O("div",{},void 0,O(d.Switch,{},void 0,O(d.Route,{exact:!0,path:"/",component:s}),O(d.Route,{path:"/watchlist",component:p}),O(d.Route,{component:y})),O(g,{}));t("8a2d1b95e05b6a321e74");var j=t("a28fc3c963a1d4d1a2e5"),S=t("ab039aecd4a1d4fedc0e"),P=t("54f683fcda7806277002"),_="app/LanguageToggle/CHANGE_LOCALE",L=t("0785de3f40b134973d35"),k=Object(P.fromJS)({locale:L.DEFAULT_LOCALE});var A,E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return e.set("locale",n.locale);default:return e}},R=function(e){return e.get("language",k)};function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,n){return!n||"object"!==x(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,n){return($=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var H=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),T(this,M(n).apply(this,arguments))}var t,r,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&$(e,n)}(n,o.a.PureComponent),t=n,(r=[{key:"render",value:function(){return function(e,n,t,r){A||(A="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===a)n.children=r;else if(a>1){for(var i=new Array(a),f=0;f<a;f++)i[f]=arguments[f+3];n.children=i}return{$$typeof:A,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}(S.IntlProvider,{locale:this.props.locale,messages:this.props.messages[this.props.locale]},this.props.locale,o.a.Children.only(this.props.children))}}])&&C(t.prototype,r),a&&C(t,a),n}(),D=Object(j.a)(Object(j.a)(R,function(e){return e.get("locale")}),function(e){return{locale:e}});var I=Object(i.connect)(D,function(e){return{dispatch:e}})(H),J=(t("9c6be9f00377ac8be3d8"),t("0cbc23df16a5c6ceec4d"),t("ab4cb61bcb2dc161defb")),N=t("74431d47afb6248fcb69"),z=t("4e2e9348dad8fe460c1d");function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(z.combineReducers)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){B(e,n,t[n])})}return e}({language:E},e));return Object(f.connectRouter)(u)(n)}var G=Object(N.a)();var U;t("09caa5021a05adbb5bb0");function q(e,n,t,r){U||(U="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===a)n.children=r;else if(a>1){for(var i=new Array(a),f=0;f<a;f++)i[f]=arguments[f+3];n.children=i}return{$$typeof:U,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=[G,Object(f.routerMiddleware)(n)],r=[J.applyMiddleware.apply(void 0,t)],o=J.compose,a=Object(J.createStore)(F(),Object(P.fromJS)(e),o.apply(void 0,r));return a.runSaga=G.run,a.injectedReducers={},a.injectedSagas={},a}({},u),Q=document.getElementById("app"),V=q(f.ConnectedRouter,{history:u},void 0,q(function(){return w},{})),W=function(e){c.a.render(q(i.Provider,{store:K},void 0,q(I,{messages:e},void 0,V)),Q)};window.Intl?W(L.translationMessages):new Promise(function(e){e(Promise.all([t.e(0),t.e(7)]).then(t.t.bind(null,"97694e21b72f8e9351c4",7)))}).then(function(){return Promise.all([t.e(0).then(t.t.bind(null,"f030ad8f70186ef5cb63",7))])}).then(function(){return W(L.translationMessages)}).catch(function(e){throw e}),t("30d14b3a3295666f3aba").install()},"9c6be9f00377ac8be3d8":function(e,n,t){e.exports=t.p+"favicon.ico"},efc6f560e0bf9b71c388:function(e,n,t){(e.exports=t("c138e55a31f3f8960e99")(!1)).push([e.i,".app{background-color:#2B3247}\n",""])}},[[1,3,0]]]);