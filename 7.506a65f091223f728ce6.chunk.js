(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0b8eb3e35929778b339a":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return O});var n,a=o("8af190b70a6bc55c6f1b"),r=o("bd183afcc37eabd79225"),i=o.n(r),c=o("a8ec0c2a8b14558544ed"),f=o("d954071182f1bafcfbb1"),p=o("80b4f1dc6f43d38e5890"),l=o("049ee1af445e90292998"),u=o("a6c15019d6d9e168e7a2"),s=o("fcb99a06256635f70435"),d=o("52cdc9d1cd9229ce98da");o("4f85e7e53be8b30a3ccb");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,o,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var f=new Array(i),p=0;p<i;p++)f[p]=arguments[p+3];t.children=f}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function _(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=m("div",{className:"home--page__page--menu"},void 0,m(f.a,{})),w=m("div",{className:"home--page__page--content__page--title"},void 0,m(l.a,{text:"All movies"})),x=m("div",{className:"home--page__page--content__search"},void 0,m(u.a,{})),O=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=g(this,v(t).call(this,e))).state={movies:[]},o}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a["Component"]),o=t,(n=[{key:"componentDidMount",value:function(){var e=this;i.a.get("".concat(s.a,"/movie/popular?api_key=").concat("1ae6bf73ea58a58290edad6afca876a9")).then(function(t){var o=t.data.results;e.setState({movies:o})}).catch(function(e){})}},{key:"render",value:function(){var e=["Popular","Top rated","Upcoming","Now playing"].map(function(e){return m(c.a,{text:e})}),t=this.state.movies.map(function(e){console.log("movie: ",e);var t=e.genre_ids[0],o=s.c[t];return m(p.a,{title:e.title,vote:e.vote_average,year:Object(d.a)(e.release_date),imageUrl:s.b+e.poster_path,mainGenre:o})});return m("div",{className:"home--page"},void 0,h,m("div",{className:"home--page__page--content"},void 0,w,x,m("div",{className:"home--page__page--content__sorting--bar"},void 0,e),m("div",{className:"home--page__page--content__movies"},void 0,t)))}}])&&_(o.prototype,n),r&&_(o,r),t}()},"4f85e7e53be8b30a3ccb":function(e,t,o){var n=o("6adc480b00a59b4029a9");"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("1e4534d1d62a11482e97")(n,a);n.locals&&(e.exports=n.locals)},"6adc480b00a59b4029a9":function(e,t,o){(e.exports=o("c138e55a31f3f8960e99")(!1)).push([e.i,".home--page{background-color:#2B3247;display:flex;flex-direction:row;height:100%;justify-content:flex-start;padding-top:50px}.home--page__page--menu{background-color:#3f9087;margin-top:-50px;width:10%}.home--page__page--content__page--title{margin-bottom:50px}.home--page__page--content__movies{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start}.home--page__page--content__sorting--bar{margin-bottom:25px;margin-left:45px}.home--page__page--content__sorting--bar button{cursor:pointer}\n",""])}}]);