(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0b8eb3e35929778b339a":function(e,t,o){"use strict";o.r(t);var n,a=o("8af190b70a6bc55c6f1b"),i=o("bd183afcc37eabd79225"),r=o.n(i),c=o("a8ec0c2a8b14558544ed"),l=o("d954071182f1bafcfbb1"),f=o("80b4f1dc6f43d38e5890"),s=o("049ee1af445e90292998"),u=o("a6c15019d6d9e168e7a2"),p=o("140a1b1565770058ec7f");o("8dd5203744e2fd47969c");function d(e,t,o,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});if(1===r)t.children=a;else if(r>1){for(var l=new Array(r),f=0;f<r;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _,g=d("div",{className:"overlay"},void 0," "),w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var o,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),o=t,(n=[{key:"render",value:function(){return g}}])&&b(o.prototype,n),i&&b(o,i),t}(),x=o("fcb99a06256635f70435"),O=o("52cdc9d1cd9229ce98da");o("4f85e7e53be8b30a3ccb");function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t,o,n){_||(_="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var r in a)void 0===t[r]&&(t[r]=a[r]);else t||(t=a||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:_,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function j(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,"default",function(){return T});var C=k(w,{}),N=k("div",{className:"home--page__page--menu"},void 0,k(l.a,{})),E=k("div",{className:"home--page__page--content__page--title"},void 0,k(s.a,{text:"All movies"})),I=k("div",{className:"home--page__page--content__search"},void 0,k(u.a,{})),T=function(e){function t(e){var o,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(a=D(t).call(this,e))||"object"!==S(a)&&"function"!==typeof a?P(n):a).state={movies:[],movieDetails:null,movieCast:null,modalWindowVisibility:"hidden",selectedMovieId:null},o.showMovieDetails=o.showMovieDetails.bind(P(P(o))),o.hideMovieDetails=o.hideMovieDetails.bind(P(P(o))),o}var o,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,a["Component"]),o=t,(n=[{key:"componentDidMount",value:function(){var e=this;r.a.get("".concat(x.a,"/movie/popular?api_key=").concat("1ae6bf73ea58a58290edad6afca876a9")).then(function(t){var o=t.data.results;e.setState({movies:o})}).catch(function(e){})}},{key:"showMovieDetails",value:function(e){var t=this;r.a.all([r.a.get("".concat(x.a,"/movie/").concat(e,"?api_key=").concat("1ae6bf73ea58a58290edad6afca876a9")),r.a.get("".concat(x.a,"/movie/").concat(e,"/casts?api_key=").concat("1ae6bf73ea58a58290edad6afca876a9"))]).then(r.a.spread(function(o,n){var a=o.data,i=n.data;t.setState({movieDetails:a,movieCast:i,modalWindowVisibility:"visible",selectedMovieId:e})}))}},{key:"hideMovieDetails",value:function(){this.setState({movieDetails:null,movieCast:null,modalWindowVisibility:"hidden",selectedMovieId:null})}},{key:"render",value:function(){var e=this,t=["Popular","Top rated","Upcoming","Now playing"].map(function(e,t){return k(c.a,{text:e},"button-".concat(t))}),o=this.state,n=o.movies,a=o.movieDetails,i=o.movieCast,r=o.modalWindowVisibility,l=o.selectedMovieId,s=n.map(function(t,o){var n=t.genre_ids[0],a=x.c[n];return k(f.a,{id:t.id,title:t.title,vote:t.vote_average,year:Object(O.a)(t.release_date),imageUrl:x.b+t.poster_path,mainGenre:a,onClickHandler:e.showMovieDetails},"movie-".concat(o))});return k("div",{className:"home--page"},void 0,k("div",{className:"home--page__overlay"},void 0,"visible"===r&&C),k("div",{className:"home--page__movie--details--modal"},void 0,"visible"===r&&k(p.default,{movieDetails:a,movieCast:i,id:l,onClickHandler:this.hideMovieDetails})),N,k("div",{className:"home--page__page--content"},void 0,E,I,k("div",{className:"home--page__page--content__sorting--bar"},void 0,t),k("div",{className:"home--page__page--content__movies"},void 0,s)))}}])&&j(o.prototype,n),i&&j(o,i),t}()},"3689f3a4e607cb383d9b":function(e,t,o){(e.exports=o("c138e55a31f3f8960e99")(!1)).push([e.i,".overlay{background-color:grey;height:100%;left:0;opacity:0.7;overflow:hidden;position:fixed;top:0;width:25%;z-index:2000}\n",""])},"4f85e7e53be8b30a3ccb":function(e,t,o){var n=o("6adc480b00a59b4029a9");"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("1e4534d1d62a11482e97")(n,a);n.locals&&(e.exports=n.locals)},"6adc480b00a59b4029a9":function(e,t,o){(e.exports=o("c138e55a31f3f8960e99")(!1)).push([e.i,".home--page{background-color:#2B3247;display:flex;flex-direction:row;height:100%;justify-content:flex-start;padding-top:50px}.home--page__page--menu{background-color:#3f9087;margin-top:-50px;width:10%}.home--page__overlay{height:100%;position:absolute}.home--page__page--content__page--title{margin-bottom:50px}.home--page__page--content__movies{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start}.home--page__page--content__sorting--bar{margin-bottom:25px;margin-left:45px}.home--page__page--content__sorting--bar button{cursor:pointer}\n",""])},"8dd5203744e2fd47969c":function(e,t,o){var n=o("3689f3a4e607cb383d9b");"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("1e4534d1d62a11482e97")(n,a);n.locals&&(e.exports=n.locals)}}]);