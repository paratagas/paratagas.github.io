(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0376a31c0cc360740a87":function(e,t,n){var r=n("113c018c21df34b9f592");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("1e4534d1d62a11482e97")(r,o);r.locals&&(e.exports=r.locals)},"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t),function(e){var r=n("8af190b70a6bc55c6f1b"),o=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("ab4cb61bcb2dc161defb"),a=n("1038378752f49ee7c6d4"),i=n.n(a),u=(n("a28fc3c963a1d4d1a2e5"),n("0ea2688da6325259697c"),n("115e29d9eb9dffcba676")),f=n("5afb1b1fc5e2c87b3cf8"),l=n("378978b9c78a58105127"),s=n("d95b0cf107403b178365"),p=n("b0bc3e68122dc9015576"),b=n("2cc79d106f9ca49f21f6"),d=(n("0376a31c0cc360740a87"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var c=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&c)for(var i in c)void 0===n[i]&&(n[i]=c[i]);else n||(n=c||{});if(1===a)n.children=o;else if(a>1){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var h=function(t){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={countries:[],loading:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r["PureComponent"]),y(n,[{key:"componentWillMount",value:function(){var t=this;this.setState({loading:!0}),e(l.b).then(function(e){return e.json()}).then(function(e){t.props.saveCountriesToStore(e),t.setState({countries:e,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.countries,n=void 0;return n=e.loading?d("div",{id:"center"},void 0,d(i.a,{className:"spinner",height:"128px",width:"128px",color:"fuchsia",thickness:5,gap:3,speed:"slow"}),";"):d(f.a,{countries:t}),d(u.a,{},void 0,n)}}]),n}();var v=Object(o.connect)(null,function(e){return{saveCountriesToStore:function(t){return e(Object(b.a)(t))},dispatch:e}}),m=Object(s.a)({key:"countries",reducer:p.a});t.default=Object(c.compose)(m,v)(h)}.call(this,n("5e511fa944f88972e69c"))},"113c018c21df34b9f592":function(e,t,n){(e.exports=n("c138e55a31f3f8960e99")(!1)).push([e.i,"#center{position:fixed;top:45%;left:45%}",""])},"2cc79d106f9ca49f21f6":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("a237392145f68026c892");function o(e){return{type:r.a,countries:e}}},"378978b9c78a58105127":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",o="https://restcountries.eu/rest/v2/all"},"5afb1b1fc5e2c87b3cf8":function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n("ca44bc79f7c5558d4871"),c=n.n(o),a=(n("8a2d1b95e05b6a321e74"),n("378978b9c78a58105127")),i={lat:53.9,lng:27.57},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var c=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&c)for(var i in c)void 0===n[i]&&(n[i]=c[i]);else n||(n=c||{});if(1===a)n.children=o;else if(a>1){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),f(t,[{key:"render",value:function(){var e=this.props.text;return u("h3",{},void 0," ",e," ")}}]),t}(),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var c=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&c)for(var i in c)void 0===n[i]&&(n[i]=c[i]);else n||(n=c||{});if(1===a)n.children=o;else if(a>1){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.navPanelHeight=38,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),p(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("nav-container")&&document.getElementById("nav-container").scrollHeight;this.navPanelHeight!==e&&(this.navPanelHeight=e,this.forceUpdate())}},{key:"render",value:function(){var e=document.documentElement.clientHeight-this.navPanelHeight,t=this.props.countries;return console.log("countries"),console.log(t),s("div",{id:"map-container",style:{width:"100%",height:e}},void 0,s(c.a,{defaultCenter:i,defaultZoom:6,bootstrapURLKeys:{key:a.a}},void 0,t.map(function(e,t){return s(l,{lat:e.latlng[0],lng:e.latlng[1],text:e.name},t)})))}}]),t}();t.a=b},a237392145f68026c892:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="SAVE_COUNTRIES_TO_STORE"},b0bc3e68122dc9015576:function(e,t,n){"use strict";var r=n("54f683fcda7806277002"),o=n("a237392145f68026c892");var c=Object(r.fromJS)([]);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case o.a:return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e),[t.countries]);default:return e}}},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),c=n("8a2d1b95e05b6a321e74"),a=n.n(c),i=n("5ef9de3df8d92ea0e41c"),u=n.n(i),f=n("6a4f9c383785f9168266"),l=n.n(f),s=n("a1cf5d6fa4ed65a6ddd5"),p=n.n(s),b=n("f3b0ff1628e56352bcbf"),d=n.n(b),y=n("5fa3f8487e09c6182715"),h=n.n(y),v=n("f2873ecf7390fe7d7c89"),m=n.n(v),g=n("d3a850c4000d77bccc89"),w=n.n(g);function j(e){var t={dispatch:d.a,subscribe:d.a,getState:d.a,replaceReducer:d.a,runSaga:d.a,injectedReducers:w.a,injectedSagas:w.a};l()(m()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var O=n("491cc2e27aa2b4221847");function _(e){return j(e),{injectReducer:function(e,t){return function(n,r){t||j(e),l()(h()(n)&&!p()(n)&&d()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(O.a)(e.injectedReducers)))}}(e,!0)}}var P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var r=function(r){function c(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=S(this,(e=c.__proto__||Object.getPrototypeOf(c)).call.apply(e,[this].concat(o))),n.injectors=_(n.context.store),S(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,o.a.Component),P(c,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),c}();return r.WrappedComponent=e,r.contextTypes={store:a.a.object.isRequired},r.displayName="withReducer("+(e.displayName||e.name||"Component")+")",u()(r,e)}}}}]);