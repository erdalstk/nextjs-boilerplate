(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=u,e.useAmp=function(){return u(i.default.useContext(a.AmpStateContext))}},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"1Yd/":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),u=o.a.createElement;e.a=function(t){var e=t.title,n=void 0===e?"Next.js Boilerplate":e,r=t.description,o=t.robots,i=void 0===o?"index, follow":o;return u(a.a,null,u("title",null,n),r&&u("meta",{name:"description",content:r}),u("meta",{name:"robots",content:i}),u("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),u("meta",{name:"theme-color",content:"#ffffff"}),u("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),u("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),u("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),u("link",{rel:"manifest",href:"/app.webmanifest"}))}},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var a=i(n("q1tI")),u=i(n("Xuae")),c=n("lwAK"),l=n("FYa8"),f=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var u=i.key.slice(i.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(i.type){case"title":case"base":e.has(i.type)?a=!1:e.add(i.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var f=p[c];if(i.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=i.props[f],d=o[f]||new r;d.has(s)?a=!1:(d.add(s),o[f]=d)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var h=u.default();function m(t){var e=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=h.rewind,e.default=m},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.HeadManagerContext=i.createContext(null)},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),a=n("sNwI"),u=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,s,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,w=f(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&u(w))for(n=new p(e=c(d.length));e>y;y++)l(n,y,m?h(d[y],y):d[y]);else for(s=w.call(d),n=new p;!(o=s.next()).done;y++)l(n,y,m?a(s,h,[o.value,y],!0):o.value);return n.length=y,n}})},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),u=n("WaGi"),c=n("N9n2"),l=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var s=n("q1tI"),d=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(l){function f(t){var u;return r(this,f),u=o(this,i(f).call(this,t)),d&&(e.add(a(u)),n(a(u))),u}return c(f,l),u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},e8mA:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("Nj6E"),a=n("soUV"),u=n("1Yd/"),c=o.a.createElement;var l=function(){return c("div",{className:"contributors"},[{name:"Diogo Fernandes",url:"https://github.com/imaginamundo"}].map((function(t,e){return c("div",{className:"contributor",key:"contributor-".concat(e)},c("p",null,c("strong",null,t.name),c("br",null),c("a",{href:t.url},t.url)))})))},f=o.a.createElement;function s(){return f(a.a,null,f(u.a,{title:"Next.js Boilerplate Contributors",description:"List of all contributors to the project."}),f("h1",null,"Contributors"),f(l,null))}s.getInitialProps=function(){return{pageType:"contributors"}};e.default=Object(i.a)(s)},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")},yS8R:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributors",function(){return n("e8mA")}])}},[["yS8R",1,2,0,3]]]);