(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=u,t.useAmp=function(){return u(i.default.useContext(a.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"1Yd/":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),u=o.a.createElement;t.a=function(e){var t=e.title,n=void 0===t?"Next.js Boilerplate":t,r=e.description,o=e.robots,i=void 0===o?"index, follow":o;return u(a.a,null,u("title",null,n),r&&u("meta",{name:"description",content:r}),u("meta",{name:"robots",content:i}),u("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),u("meta",{name:"theme-color",content:"#ffffff"}),u("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),u("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),u("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),u("link",{rel:"manifest",href:"/app.webmanifest"}))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var a=i(n("q1tI")),u=i(n("Xuae")),l=n("lwAK"),c=n("FYa8"),f=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var u=i.key.slice(i.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var f=p[l];if(i.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=i.props[f],d=o[f]||new r;d.has(s)?a=!1:(d.add(s),o[f]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var v=u.default();function m(e){var t=e.children;return a.default.createElement(l.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)}))}))}m.rewind=v.rewind,t.default=m},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},FYa8:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=o(n("q1tI"));t.HeadManagerContext=i.createContext(null)},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");e.exports=function(e){return r(e)||o(e)||i()}},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),a=n("sNwI"),u=n("NwJ3"),l=n("tEej"),c=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,s,d=i(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,w=0,y=f(d);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&u(y))for(n=new p(t=l(d.length));t>w;w++)c(n,w,m?v(d[w],w):d[w]);else for(s=y.call(d),n=new p;!(o=s.next()).done;w++)c(n,w,m?a(s,v,[o.value,w],!0):o.value);return n.length=w,n}})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),u=n("WaGi"),l=n("N9n2"),c=n("TbGu"),f=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var s=n("q1tI"),d=!1;t.default=function(){var e,t=new f;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function f(e){var u;return r(this,f),u=o(this,i(f).call(this,e)),d&&(t.add(a(u)),n(a(u))),u}return l(f,c),u(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=o(n("q1tI"));t.AmpStateContext=i.createContext({})},"rwG/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-it-works",function(){return n("w9kj")}])},ttDY:function(e,t,n){e.exports=n("+iuc")},w9kj:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("Nj6E"),a=n("soUV"),u=n("1Yd/"),l=o.a.createElement;function c(){return l(a.a,null,l(u.a,{title:"Next.js Boilerplate How It Works",description:"How this project works."}),l("h1",null,"In progress\u2026"),l("ul",null,l("li",null,"How to use useContextApplication;"),l("li",null,"Customize layout;"),l("li",null,"Modify assets;")))}c.getInitialProps=function(){return{pageType:"howItWorks"}},t.default=Object(i.a)(c)},xvv9:function(e,t,n){n("cHUd")("Set")}},[["rwG/",1,2,0,13]]]);