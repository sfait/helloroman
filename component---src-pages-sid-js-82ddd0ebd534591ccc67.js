(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t);var a=n(151),r=n.n(a),o=n(0),i=n.n(o),s=n(150),u=n(145),l=n(165),c=n.n(l);function d(){var e=r()(["\n  body, h1 {\n    padding: 0;\n    margin: 0;\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n"]);return d=function(){return e},e}var p=Object(s.a)(d()),f=s.b.div.withConfig({displayName:"sid__StyledWrapper",componentId:"co2n7c-0"})(["width:100%;height:100vh;background:url(",") no-repeat center/cover;display:flex;flex-direction:column;align-items:left;justify-content:top;padding:80px;font-family:'Arial',sans-serif;@media only screen and (max-width:600px){align-items:center;}"],c.a),h=s.b.h1.withConfig({displayName:"sid__HeaderItem",componentId:"co2n7c-1"})(["color:rgba(255,255,255,0.8);text-shadow:1px 1px 5px rgba(68,68,68,0.2);font-size:5rem;font-weight:700;"]),m=s.b.q.withConfig({displayName:"sid__CiteItem",componentId:"co2n7c-2"})(["width:500px;margin:80px 0;color:rgba(255,255,255,0.7);text-shadow:1px 1px 1px rgba(0,0,0,0.3);font-size:2rem;font-weight:700;text-align:left;line-height:1.5;@media only screen and (max-width:600px){width:400px;text-align:center;}"]),g=s.b.a.withConfig({displayName:"sid__LinkItem",componentId:"co2n7c-3"})(["a{text-decoration:none;color:rgba(255,255,255,0.6);text-shadow:1px 1px 1px rgba(0,0,0,0.5);font-size:1.5rem;font-weight:700;}a:hover{color:rgba(255,255,255,1);}"]);t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(f,null,i.a.createElement(h,null,"sid"),i.a.createElement(m,null,"Wiem, że jestem rudy, ale po co mi to od razu na piśmie?"),i.a.createElement(g,null,i.a.createElement(u.Link,{to:"/"},"Powrót"))))}},144:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(147)),o=a(n(148)),i=a(n(7)),s=a(n(48)),u=a(n(49)),l=a(n(4)),c=a(n(0)),d=n(13),p=n(145);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/helloroman/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(n);return c.default.createElement(d.Link,(0,o.default)({to:g,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(n,{state:l,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var g=m;t.default=g;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(144),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(146),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},148:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(50),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},165:function(e,t,n){e.exports=n.p+"static/sid-342aaee84a23d7748591f4e5d295ae51.jpg"}}]);
//# sourceMappingURL=component---src-pages-sid-js-82ddd0ebd534591ccc67.js.map