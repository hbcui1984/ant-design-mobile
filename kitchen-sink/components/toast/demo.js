webpackJsonp([29],{1563:function(n,a,s){n.exports={basic:s(2002)}},1574:function(n,a,s){"use strict";a.__esModule=!0,a.default=function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}},1639:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=c(s(7)),p=c(s(0)),e=c(s(1653)),o=c(s(95));function c(n){return n&&n.__esModule?n:{default:n}}function l(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var u=void 0,i="am-toast";function k(n,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,c=arguments[3],k=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"}[a];!function(n,a){var s;u&&(u.destroy(),u=null),e.default.newInstance({prefixCls:i,style:{},transitionName:"am-fade",className:(0,t.default)((s={},l(s,i+"-mask",n),l(s,i+"-nomask",!n),s))},function(n){return a&&a(n)})}(k,function(a){u=a,a.notice({duration:s,style:{},content:r?p.default.createElement("div",{className:i+"-text "+i+"-text-icon",role:"alert","aria-live":"assertive"},p.default.createElement(o.default,{type:r,size:"lg"}),p.default.createElement("div",{className:i+"-text-info"},n)):p.default.createElement("div",{className:i+"-text",role:"alert","aria-live":"assertive"},p.default.createElement("div",null,n)),closable:!0,onClose:function(){c&&c(),a.destroy(),a=null,u=null}})})}a.default={SHORT:3,LONG:8,show:function(n,a,s){return k(n,"info",a,function(){},s)},info:function(n,a,s,t){return k(n,"info",a,s,t)},success:function(n,a,s,t){return k(n,"success",a,s,t)},fail:function(n,a,s,t){return k(n,"fail",a,s,t)},offline:function(n,a,s,t){return k(n,"offline",a,s,t)},loading:function(n,a,s,t){return k(n,"loading",a,s,t)},hide:function(){u&&(u.destroy(),u=null)}},n.exports=a.default},1640:function(n,a,s){"use strict";s(49),s(96),s(1657)},1653:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(1654);a.default=t.a},1654:function(n,a,s){"use strict";var t=s(1574),p=s.n(t),e=s(27),o=s.n(e),c=s(4),l=s.n(c),u=s(2),i=s.n(u),k=s(12),r=s.n(k),f=s(8),m=s.n(f),d=s(9),g=s.n(d),v=s(0),h=s(3),y=s.n(h),b=s(0),C=s(276),w=s(1655),T=s(7),E=s.n(T),N=s(1656),x=0,_=Date.now();var j=function(n){function a(){var n,s,t,p;i()(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=m()(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={notices:[]},t.add=function(n){var a=n.key=n.key||"rcNotification_"+_+"_"+x++;t.setState(function(s){var t=s.notices;if(!t.filter(function(n){return n.key===a}).length)return{notices:t.concat(n)}})},t.remove=function(n){t.setState(function(a){return{notices:a.notices.filter(function(a){return a.key!==n})}})},p=s,m()(t,p)}return g()(a,n),r()(a,[{key:"getTransitionName",value:function(){var n=this.props,a=n.transitionName;return!a&&n.animation&&(a=n.prefixCls+"-"+n.animation),a}},{key:"render",value:function(){var n,a=this,s=this.props,t=this.state.notices.map(function(n){var t=Object(w.a)(a.remove.bind(a,n.key),n.onClose);return v.default.createElement(N.a,l()({prefixCls:s.prefixCls},n,{onClose:t}),n.content)}),p=(n={},o()(n,s.prefixCls,1),o()(n,s.className,!!s.className),n);return v.default.createElement("div",{className:E()(p),style:s.style},v.default.createElement(C.a,{transitionName:this.getTransitionName()},t))}}]),a}(v.Component);j.propTypes={prefixCls:y.a.string,transitionName:y.a.string,animation:y.a.oneOfType([y.a.string,y.a.object]),style:y.a.object},j.defaultProps={prefixCls:"rmc-notification",animation:"fade",style:{top:65,left:"50%"}},j.newInstance=function(n,a){var s=n||{},t=s.getContainer,e=p()(s,["getContainer"]),o=void 0;t?o=t():(o=document.createElement("div"),document.body.appendChild(o));var c=!1;b.default.render(v.default.createElement(j,l()({},e,{ref:function(n){c||(c=!0,a({notice:function(a){n.add(a)},removeNotice:function(a){n.remove(a)},component:n,destroy:function(){b.default.unmountComponentAtNode(o),t||document.body.removeChild(o)}}))}})),o)},a.a=j},1655:function(n,a,s){"use strict";a.a=function(){var n=[].slice.call(arguments,0);if(1===n.length)return n[0];return function(){for(var a=0;a<n.length;a++)n[a]&&n[a].apply&&n[a].apply(this,arguments)}}},1656:function(n,a,s){"use strict";var t=s(27),p=s.n(t),e=s(2),o=s.n(e),c=s(12),l=s.n(c),u=s(8),i=s.n(u),k=s(9),r=s.n(k),f=s(0),m=s(7),d=s.n(m),g=s(3),v=s.n(g),h=function(n){function a(){var n,s,t,p;o()(this,a);for(var e=arguments.length,c=Array(e),l=0;l<e;l++)c[l]=arguments[l];return s=t=i()(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(c))),t.close=function(){t.clearCloseTimer(),t.props.onClose()},t.startCloseTimer=function(){t.props.duration&&(t.closeTimer=setTimeout(function(){t.close()},1e3*t.props.duration))},t.clearCloseTimer=function(){t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=null)},p=s,i()(t,p)}return r()(a,n),l()(a,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var n,a=this.props,s=a.prefixCls+"-notice",t=(n={},p()(n,""+s,1),p()(n,s+"-closable",a.closable),p()(n,a.className,!!a.className),n);return f.default.createElement("div",{className:d()(t),style:a.style},f.default.createElement("div",{className:s+"-content"},a.children),a.closable?f.default.createElement("a",{tabIndex:"0",onClick:this.close,className:s+"-close"},f.default.createElement("span",{className:s+"-close-x"})):null)}}]),a}(f.Component);h.propTypes={duration:v.a.number,onClose:v.a.func,children:v.a.any},h.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},a.a=h},1657:function(n,a){},2002:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'This is a toast tips !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">showToastNoMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'Toast without mask !!!\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Load success !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'Load failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'Network connection failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Loading...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Load complete !!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> customIcon <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0</span> <span class="token attr-name">0</span> <span class="token attr-name">64</span> <span class="token attr-name">64"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-icon</span> <span class="token attr-name">am-icon-md"</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">fillRule</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>evenodd<span class="token punctuation">"</span></span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M59.177</span> <span class="token attr-name">29.5s-1.25</span> <span class="token attr-name">0-1.25</span> <span class="token attr-name">2.5c0</span> <span class="token attr-name">14.47-11.786</span> <span class="token attr-name">26.244-26.253</span> <span class="token attr-name">26.244C17.206</span> <span class="token attr-name">58.244</span> <span class="token attr-name">5.417</span> <span class="token attr-name">46.47</span> <span class="token attr-name">5.417</span> <span class="token attr-name">32c0-13.837</span> <span class="token attr-name">11.414-25.29</span> <span class="token attr-name">25.005-26.26v6.252c0</span> <span class="token attr-name">.622-.318</span> <span class="token attr-name">1.635.198</span> <span class="token attr-name">1.985a1.88</span> <span class="token attr-name">1.88</span> <span class="token attr-name">0</span> <span class="token attr-name">0</span> <span class="token attr-name">0</span> <span class="token attr-name">1.75.19l21.37-8.545c.837-.334</span> <span class="token attr-name">1.687-1.133</span> <span class="token attr-name">1.687-2.384C55.425</span> <span class="token attr-name">1.99</span> <span class="token attr-name">53.944</span> <span class="token attr-name">2</span> <span class="token attr-name">53.044</span> <span class="token attr-name">2h-21.37C15.134</span> <span class="token attr-name">2</span> <span class="token attr-name">1.667</span> <span class="token attr-name">15.46</span> <span class="token attr-name">1.667</span> <span class="token attr-name">32c0</span> <span class="token attr-name">16.543</span> <span class="token attr-name">13.467</span> <span class="token attr-name">30</span> <span class="token attr-name">30.007</span> <span class="token attr-name">30</span> <span class="token attr-name">16.538</span> <span class="token attr-name">0</span> <span class="token attr-name">29.918-13.458</span> <span class="token attr-name">29.993-30</span> <span class="token attr-name">.01-2.5-1.24-2.5-1.24-2.5h-1.25"</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ToastExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Loading...\'</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Load complete !!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      Toast<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>text only<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToastNoMask<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>without mask<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          cumstom icon\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>fail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>network failure<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(0),c(s(272))),t=c(s(274)),p=c(s(270)),e=c(s(1639)),o=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}();function c(n){return n&&n.__esModule?n:{default:n}}function l(){e.default.info("This is a toast tips !!!",1)}function u(){e.default.info("Toast without mask !!!",2,null,!1)}function i(){e.default.success("Load success !!!",1)}function k(){e.default.fail("Load failed !!!",1)}function r(){e.default.offline("Network connection failed !!!",1)}function f(){e.default.loading("Loading...",1,function(){console.log("Load complete !!!")})}s(273),s(275),s(271),s(1640);var m=function(s){function c(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,c),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(c,n.Component),o(c,[{key:"componentDidMount",value:function(){e.default.loading("Loading...",30,function(){console.log("Load complete !!!")}),setTimeout(function(){e.default.hide()},3e3)}},{key:"render",value:function(){return n.createElement(a.default,null,n.createElement(p.default,null),n.createElement(t.default,{onClick:l},"text only"),n.createElement(p.default,null),n.createElement(t.default,{onClick:u},"without mask"),n.createElement(p.default,null),n.createElement(t.default,{onClick:function(){return e.default.info(n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",className:"am-icon am-icon-md"},n.createElement("path",{fillRule:"evenodd",d:"M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25"})),1)}},"cumstom icon"),n.createElement(p.default,null),n.createElement(t.default,{onClick:i},"success"),n.createElement(p.default,null),n.createElement(t.default,{onClick:k},"fail"),n.createElement(p.default,null),n.createElement(t.default,{onClick:r},"network failure"),n.createElement(p.default,null),n.createElement(t.default,{onClick:f},"loading"),n.createElement(p.default,null))}}]),c}();return n.createElement(m,null)}}}});