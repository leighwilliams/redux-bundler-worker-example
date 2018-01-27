!function(){"use strict";var e={},t=[],n=[];function o(o,r){var a,l,i,s,c=arguments,u=n;for(s=arguments.length;s-- >2;)t.push(c[s]);for(r&&null!=r.children&&(t.length||t.push(r.children),delete r.children);t.length;)if((l=t.pop())&&void 0!==l.pop)for(s=l.length;s--;)t.push(l[s]);else"boolean"==typeof l&&(l=null),(i="function"!=typeof o)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(i=!1)),i&&a?u[u.length-1]+=l:u===n?u=[l]:u.push(l),a=i;var p=new function(){};return p.nodeName=o,p.children=u,p.attributes=null==r?void 0:r,p.key=null==r?void 0:r.key,void 0!==e.vnode&&e.vnode(p),p}function r(e,t){for(var n in t)e[n]=t[n];return e}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,l=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,i=[];function s(t){!t._dirty&&(t._dirty=!0)&&1==i.push(t)&&(e.debounceRendering||a)(c)}function c(){var e,t=i;for(i=[];e=t.pop();)e._dirty&&T(e)}function u(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var a in n)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"==typeof o[a]&&!1===l.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,i):e.removeEventListener(t,h,i),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function h(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var v=[],m=0,b=!1,y=!1;function g(){for(var t;t=v.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(e,t,n,o,r,a){m++||(b=null!=r&&void 0!==r.ownerSVGElement,y=null!=e&&!("__preactattr_"in e));var l=w(e,t,n,o,a);return r&&l.parentNode!==r&&r.appendChild(l),--m||(y=!1,a||g()),l}function w(e,t,n,o,r){var a=e,l=b;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),C(e,!0))),a.__preactattr_=!0,a;var i,s,c=t.nodeName;if("function"==typeof c)return function(e,t,n,o){var r=e&&e._component,a=r,l=e,i=r&&e._componentConstructor===t.nodeName,s=i,c=p(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(P(r,c,3,n,o),e=r.base):(a&&!i&&(U(a),e=l=null),r=N(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,l=null),P(r,c,1,n,o),e=r.base,l&&e!==l&&(l._component=null,C(l,!1)));return e}(e,t,n,o);if(b="svg"===c||"foreignObject"!==c&&b,c=String(c),(!e||!u(e,c))&&(i=c,(s=b?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i)).normalizedNodeName=i,a=s,e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),C(e,!0)}var h=a.firstChild,v=a.__preactattr_,m=t.children;if(null==v){v=a.__preactattr_={};for(var g=a.attributes,_=g.length;_--;)v[g[_].name]=g[_].value}return!y&&m&&1===m.length&&"string"==typeof m[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=m[0]&&(h.nodeValue=m[0]):(m&&m.length||null!=h)&&function(e,t,n,o,r){var a,l,i,s,c,p=e.childNodes,d=[],h={},v=0,m=0,b=p.length,y=0,g=t?t.length:0;if(0!==b)for(var _=0;_<b;_++){var k=p[_],x=k.__preactattr_,N=g&&x?k._component?k._component.__key:x.key:null;null!=N?(v++,h[N]=k):(x||(void 0!==k.splitText?!r||k.nodeValue.trim():r))&&(d[y++]=k)}if(0!==g)for(var _=0;_<g;_++){s=t[_],c=null;var N=s.key;if(null!=N)v&&void 0!==h[N]&&(c=h[N],h[N]=void 0,v--);else if(!c&&m<y)for(a=m;a<y;a++)if(void 0!==d[a]&&(S=l=d[a],T=r,"string"==typeof(P=s)||"number"==typeof P?void 0!==S.splitText:"string"==typeof P.nodeName?!S._componentConstructor&&u(S,P.nodeName):T||S._componentConstructor===P.nodeName)){c=l,d[a]=void 0,a===y-1&&y--,a===m&&m++;break}c=w(c,s,n,o),i=p[_],c&&c!==e&&c!==i&&(null==i?e.appendChild(c):c===i.nextSibling?f(i):e.insertBefore(c,i))}var S,P,T;if(v)for(var _ in h)void 0!==h[_]&&C(h[_],!1);for(;m<=y;)void 0!==(c=d[y--])&&C(c,!1)}(a,m,n,o,y||null!=v.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||d(e,o,n[o],n[o]=void 0,b);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||d(e,o,n[o],n[o]=t[o],b)}(a,t.attributes,v),b=l,a}function C(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),k(e))}function k(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}var x={};function N(e,t,n){var o,r=x[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),D.call(o,t,n)):((o=new D(t,n)).constructor=e,o.render=S),r)for(var a=r.length;a--;)if(r[a].constructor===e){o.nextBase=r[a].nextBase,r.splice(a,1);break}return o}function S(e,t,n){return this.constructor(e,n)}function P(t,n,o,r,a){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||a?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==o&&(1!==o&&!1===e.syncComponentUpdates&&t.base?s(t):T(t,1,a)),t.__ref&&t.__ref(t))}function T(t,n,o,a){if(!t._disable){var l,i,s,c=t.props,u=t.state,f=t.context,d=t.prevProps||c,h=t.prevState||u,b=t.prevContext||f,y=t.base,w=t.nextBase,k=y||w,x=t._component,S=!1;if(y&&(t.props=d,t.state=h,t.context=b,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,u,f)?S=!0:t.componentWillUpdate&&t.componentWillUpdate(c,u,f),t.props=c,t.state=u,t.context=f),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!S){l=t.render(c,u,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var D,L,E=l&&l.nodeName;if("function"==typeof E){var W=p(l);(i=x)&&i.constructor===E&&W.key==i.__key?P(i,W,1,f,!1):(D=i,t._component=i=N(E,W,f),i.nextBase=i.nextBase||w,i._parentComponent=t,P(i,W,0,f,!1),T(i,1,o,!0)),L=i.base}else s=k,(D=x)&&(s=t._component=null),(k||1===n)&&(s&&(s._component=null),L=_(s,l,f,o||!y,k&&k.parentNode,!0));if(k&&L!==k&&i!==x){var B=k.parentNode;B&&L!==B&&(B.replaceChild(L,k),D||(k._component=null,C(k,!1)))}if(D&&U(D),t.base=L,L&&!a){for(var O=t,j=t;j=j._parentComponent;)(O=j).base=L;L._component=O,L._componentConstructor=O.constructor}}if(!y||o?v.unshift(t):S||(t.componentDidUpdate&&t.componentDidUpdate(d,h,b),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);m||a||g()}}function U(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?U(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,f(n),function(e){var t=e.constructor.name;(x[t]||(x[t]=[])).push(e)}(t),k(n)),t.__ref&&t.__ref(null)}function D(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}r(D.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),T(this,2)},render:function(){}});var L=function(){};L.prototype.getChildContext=function(){return{store:this.props.store}},L.prototype.render=function(e){return e.children[0]};var E=function(){for(var e=arguments,t=[],n=arguments.length;n--;)t[n]=e[n];var r=t.slice(-1)[0],a=[],l=[];return(t.length>1?t.slice(0,-1):[]).forEach(function(e){if("select"!==e.slice(0,6)){if("do"!==e.slice(0,2))throw Error("CanNotConnect "+e);a.push(e)}else l.push(e)}),function(e){function t(t,n){var o=this;e.call(this,t,n);var r=n.store;this.state=r.select(l),this.unsubscribe=r.subscribeToSelectors(l,this.setState.bind(this)),this.actionCreators={},a.forEach(function(e){o.actionCreators[e]=function(){for(var t=arguments,n=[],o=arguments.length;o--;)n[o]=t[o];return r.action?r.action(e,n):r[e].apply(r,n)}})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentWillUnmount=function(){this.unsubscribe()},t.prototype.render=function(e,t){return o(r,Object.assign({},e,t,this.actionCreators))},t}(D)},W=function(e){return"A"===e.tagName?e:e.parentElement?W(e.parentElement):null},B=function(e){return e&&e.origin===window.location.origin?e.href.replace(window.location.origin,""):null};function O(e){var t=e.onInternalNav,n=e.children;return o("div",{className:e.className,onClick:function(e){var n=W(e.target);if(n&&"_blank"!==n.target){var o=B(n),r=e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||0!==e.button;o&&!r&&(e.preventDefault(),t(o))}}},n)}var j={home:E("selectBaseDataStatus","selectBaseData",function(e){var t=e.baseDataStatus,n=e.baseData;return o("article",null,o("p",null,"Open dev tools to see output of debug bundle. The current version of redux-bundler you're running, the list of installed bundles, etc."),o("p",null,"This app uses the awesome ",o("a",{href:"https://swapi.co/"},"SWAPI")," as an API to demonstrate how you can reactively trigger data fetching due to the the application's current state rather than by some arbitrary component being displayed."),o("p",null,"It will never fetch unless its data is stale, or it needs to retry to do a failed attempt to fetch"),o("p",null,"This entire app with all dependencies and without any tree-shaking is approx 18.5 kbs min + gzip"),o("h3",null,"Things to try"),o("ul",null,o("li",{class:"mb2"},"Leave this page open, and watch the log output in the console. The data will be refreshed if its older than one minute."),o("li",{class:"mb2"},"While you have the page loaded, use devtools to force the app to go offline. It will keep showing the data it has, but will now retry more actively. These fetches will fail, but it will still show the data it has. Now, make it go online again, and you should see the data getting refreshed rather quickly."),o("li",{class:"mb2"},'The "APP_IDLE" actions will only be dispatched when the tab is in focus. Test this out by opening the network tab in devtools and clearing it, now switching away to a different tab for a while. When you switch back you\'ll notice no fetches occured while you were away, but as soon as you switch back to this tab a fetch is immediately triggered.'),o("li",{class:"mb3"},"Whenever there has been a successful fetch, the data is persisted to indexedDB via the localCaching bundle (including metadata about the fetch). So if you refresh and it successfully fetched data recentl enough, no fetch is triggered at all.")),o("div",{class:"ph3 ba br3 bg-lightest-blue"},o("h3",null,"Dynamically Fetched Data:"),o("p",null,"Source: https://swapi.co/api/"),o("p",null,"Status: ",t),o("p",null,"result: ",o("pre",null,o("code",null,JSON.stringify(n,null,2))))))}),people:E("selectPeopleData",function(e){var t=e.peopleData;return o("article",null,o("h1",null,"People Data"),!t&&o("p",null,"No data yet"),t&&t.map(function(e){return o("ul",null,o("li",null,o("a",{href:"/people/"+e.id},e.name)))}))}),personDetail:E("selectRouteParams","selectActivePerson",function(e){var t=e.routeParams,n=e.activePerson;return o("article",null,o("h1",null,"Demo of an item detail view"),o("p",null,"the route parameters that are available in redux with this URL open: ",o("pre",null,o("code",null,JSON.stringify(t,null,2)))),o("p",null,"We can use this in our selectors to determine if this is data we have or need to fetch."),o("p",null,o("pre",null,o("code",null,JSON.stringify(n,null,2)))))})},A=E("selectCurrentComponent","selectPathname","doUpdateUrl",function(e){var t=e.doUpdateUrl,n=e.currentComponent,r=e.pathname,a=j[n];return o(O,{onInternalNav:t},o("main",{class:"ph3 ph4-ns pt3 bt b--black-10 black-60"},o("nav",{class:"pa3 pa4-ns"},o("p",{class:"b f3 tc f2-ns black-70 lh-solid mb0"},"redux-bundler sample web-worker app"),o("p",{class:"f6 db b tc pb2"},"By: ",o("a",{href:"https://twitter.com/henrikjoreteg",class:"link blue dim"},"@HenrikJoreteg")),o("div",{class:"tc pb3"},[{url:"/",label:"Home"},{url:"/people",label:"People List"},{url:"/people/1",label:"Person Detail"},{url:"https://github.com/henrikjoreteg/redux-bundler",label:"GitHub"}].map(function(e){return o("a",{class:"link dim gray f6 f5-ns dib pa2 mr1 "+(e.url===r?"bg-lightest-blue":""),href:e.url},e.label)}))),o(a,null)))});var M,I,R=function(e,t){var n;try{e()}catch(e){n=e}t&&t(n||null)},H=(M="debug",function(e,t){var n;try{e()}catch(e){n=e}t&&t(n||null)}(function(){I=window.localStorage[M]}),I),V=function(e){var t="s"===e[0]?6:5;return e[t].toLowerCase()+e.slice(t+1)};!function(){var e=window.worker=new Worker("/b/w.js"),t=function(t){return e.postMessage(t)};t({type:"initial",payload:{url:window.location.href,debug:H}});var n,r,a,l=function(e){var n={},o=new Set,r={};e.onmessage=function(t){var r=t.data;if(H&&console.log("🔃 from worker",r),"string"!=typeof r){if(r.urlRaw){var a=r.urlRaw.url;a!==window.location.href&&R(function(){window.history[r.urlRaw.replace?"replaceState":"pushState"]({},null,a),document.body.scrollTop=0})}Object.assign(n,r),o.forEach(function(e){var t={},n=!1;"all"===e.names?(Object.assign(t,r),n=!!Object.keys(t).length):e.names.forEach(function(e){r.hasOwnProperty(e)&&(t[e]=r[e],n=!0)}),n&&e.fn(t)})}else R(function(){new Function("worker",r)(e)},function(e){e&&console.error(e)})};var a=function(e){},l=function(e){},i=function(e){return e.reduce(function(e,t){var o=V(t);return e[o]=n[o],e},{})};return{getAll:function(){return n},select:i,subscribeToSelectors:function(e,t){var n={fn:t,names:e.map(V)};return o.add(n),e.forEach(a),Object.assign(r,i(e)),function(){o.delete(n),e.forEach(l)}},action:function(e,n){t({type:"action",name:e,payload:n})}}}(e);window.addEventListener("popstate",function(){l.action("doUpdateUrl",[window.location.pathname])}),n=o(L,{store:l},o(A,null)),r=document.body,_(a,n,{},!1,r,!1)}()}();
