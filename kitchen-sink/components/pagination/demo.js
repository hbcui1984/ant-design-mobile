webpackJsonp([26],{1503:function(n,a,s){n.exports={basic:s(1918)}},1575:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getComponentLocale=function(n,a,s,t){var e={};if(a&&a.antLocale&&a.antLocale[s])e=a.antLocale[s];else{var p=t();e=p.default||p}var o=Object.assign({},e);n.locale&&(o=Object.assign({},o,n.locale),n.locale.lang&&(o.lang=Object.assign({},e.lang,n.locale.lang)));return o},a.getLocaleCode=function(n){var a=n.antLocale&&n.antLocale.locale;if(n.antLocale&&n.antLocale.exist&&!a)return"zh-cn";return a}},1576:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=p(s(1577)),e=p(s(1578));function p(n){return n&&n.__esModule?n:{default:n}}t.default.Item=e.default,a.default=t.default,n.exports=a.default},1577:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),p=c(s(7)),o=c(s(0));function c(n){return n&&n.__esModule?n:{default:n}}function l(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var u=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]])}return s},r=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,o.default.Component),e(a,[{key:"render",value:function(){var n,a=this.props,s=a.direction,e=a.wrap,c=a.justify,r=a.align,i=a.alignContent,k=a.className,f=a.children,m=a.prefixCls,g=a.style,d=u(a,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),b=(0,p.default)(m,k,(l(n={},m+"-dir-row","row"===s),l(n,m+"-dir-row-reverse","row-reverse"===s),l(n,m+"-dir-column","column"===s),l(n,m+"-dir-column-reverse","column-reverse"===s),l(n,m+"-nowrap","nowrap"===e),l(n,m+"-wrap","wrap"===e),l(n,m+"-wrap-reverse","wrap-reverse"===e),l(n,m+"-justify-start","start"===c),l(n,m+"-justify-end","end"===c),l(n,m+"-justify-center","center"===c),l(n,m+"-justify-between","between"===c),l(n,m+"-justify-around","around"===c),l(n,m+"-align-start","start"===r),l(n,m+"-align-center","center"===r),l(n,m+"-align-end","end"===r),l(n,m+"-align-baseline","baseline"===r),l(n,m+"-align-stretch","stretch"===r),l(n,m+"-align-content-start","start"===i),l(n,m+"-align-content-end","end"===i),l(n,m+"-align-content-center","center"===i),l(n,m+"-align-content-between","between"===i),l(n,m+"-align-content-around","around"===i),l(n,m+"-align-content-stretch","stretch"===i),n));return o.default.createElement("div",t({className:b,style:g},d),f)}}]),a}();a.default=r,r.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=a.default},1578:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),p=c(s(7)),o=c(s(0));function c(n){return n&&n.__esModule?n:{default:n}}var l=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]])}return s},u=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,o.default.Component),e(a,[{key:"render",value:function(){var n=this.props,a=n.children,s=n.className,e=n.prefixCls,c=n.style,u=l(n,["children","className","prefixCls","style"]),r=(0,p.default)(e+"-item",s);return o.default.createElement("div",t({className:r,style:c},u),a)}}]),a}();a.default=u,u.defaultProps={prefixCls:"am-flexbox"},n.exports=a.default},1579:function(n,a,s){"use strict";s(49),s(1580)},1580:function(n,a){},1769:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),e=r(s(7)),p=r(s(3)),o=r(s(0)),c=s(1575),l=r(s(274)),u=r(s(1576));function r(n){return n&&n.__esModule?n:{default:n}}function i(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var k=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var s=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.state={current:n.current},s}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,o.default.Component),t(a,[{key:"componentWillReceiveProps",value:function(n){n.current!==this.state.current&&this.setState({current:n.current})}},{key:"onChange",value:function(n){this.setState({current:n}),this.props.onChange&&this.props.onChange(n)}},{key:"render",value:function(){var n=this,a=this.props,t=a.prefixCls,p=a.className,r=a.style,k=a.mode,f=a.total,m=a.simple,g=this.state.current,d=(0,c.getComponentLocale)(this.props,this.context,"Pagination",function(){return s(1770)}),b=d.prevText,y=d.nextText,v=o.default.createElement(u.default,null,o.default.createElement(u.default.Item,{className:t+"-wrap-btn "+t+"-wrap-btn-prev"},o.default.createElement(l.default,{inline:!0,disabled:g<=1,onClick:function(){return n.onChange(g-1)}},b)),this.props.children?o.default.createElement(u.default.Item,null,this.props.children):!m&&o.default.createElement(u.default.Item,{className:t+"-wrap","aria-live":"assertive"},o.default.createElement("span",{className:"active"},g),"/",o.default.createElement("span",null,f)),o.default.createElement(u.default.Item,{className:t+"-wrap-btn "+t+"-wrap-btn-next"},o.default.createElement(l.default,{inline:!0,disabled:g>=f,onClick:function(){return n.onChange(n.state.current+1)}},y)));if("number"===k)v=o.default.createElement("div",{className:t+"-wrap"},o.default.createElement("span",{className:"active"},g),"/",o.default.createElement("span",null,f));else if("pointer"===k){for(var h=[],w=0;w<f;w++)h.push(o.default.createElement("div",{key:"dot-"+w,className:(0,e.default)(t+"-wrap-dot",i({},t+"-wrap-dot-active",w+1===g))},o.default.createElement("span",null)));v=o.default.createElement("div",{className:t+"-wrap"},h)}var x=(0,e.default)(t,p);return o.default.createElement("div",{className:x,style:r},v)}}]),a}();a.default=k,k.defaultProps={prefixCls:"am-pagination",mode:"button",current:1,total:0,simple:!1,onChange:function(){}},k.contextTypes={antLocale:p.default.object},n.exports=a.default},1770:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={prevText:"\u4e0a\u4e00\u9875",nextText:"\u4e0b\u4e00\u9875"},n.exports=a.default},1771:function(n,a,s){"use strict";s(49),s(275),s(1579),s(1772)},1772:function(n,a){},1918:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],"en-US":[["p","Basic Pagination"]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  prevText<span class="token punctuation">:</span> <span class="token string">\'Prev\'</span><span class="token punctuation">,</span>\n  nextText<span class="token punctuation">:</span> <span class="token string">\'Next\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pagination-container<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button <span class="token keyword">with</span> text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button <span class="token keyword">with</span> text and icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-pagination-with-icon<span class="token punctuation">"</span></span>\n      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        prevText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u4e0a\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        nextText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0b\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hide number<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">simple</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show number only<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Point style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pointer<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(0),e(s(95))),t=e(s(1769));function e(n){return n&&n.__esModule?n:{default:n}}s(96),s(1771);var p={prevText:"Prev",nextText:"Next"};return n.createElement(function(){return n.createElement("div",{className:"pagination-container"},n.createElement("p",{className:"sub-title"},"Button with text"),n.createElement(t.default,{total:5,current:1,locale:p}),n.createElement("p",{className:"sub-title"},"Button with text and icon"),n.createElement(t.default,{total:5,className:"custom-pagination-with-icon",current:1,locale:{prevText:n.createElement("span",{className:"arrow-align"},n.createElement(a.default,{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:n.createElement("span",{className:"arrow-align"},"\u4e0b\u4e00\u6b65",n.createElement(a.default,{type:"right"}))}}),n.createElement("p",{className:"sub-title"},"Hide number"),n.createElement(t.default,{simple:!0,total:5,current:1,locale:p}),n.createElement("p",{className:"sub-title"},"Show number only"),n.createElement(t.default,{mode:"number",total:5,current:3}),n.createElement("p",{className:"sub-title"},"Point style"),n.createElement(t.default,{mode:"pointer",total:5,current:2,style:{marginBottom:"16px"}}))},null)},style:".pagination-container {\n  margin: 0 15px;\n}\n\n.custom-pagination-with-icon .am-pagination-wrap-btn-prev .am-button-inline{\n  padding-left: 0;\n  padding-right: 10px;\n}\n.custom-pagination-with-icon .am-pagination-wrap-btn-next .am-button-inline{\n  padding-left: 10px;\n  padding-right: 0;\n}\n.arrow-align {\n  display: flex;\n  align-items: center;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.pagination-container</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.custom-pagination-with-icon</span> <span class="token class">.am-pagination-wrap-btn-prev</span> <span class="token class">.am-button-inline</span></span><span class="token punctuation">{</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-pagination-with-icon</span> <span class="token class">.am-pagination-wrap-btn-next</span> <span class="token class">.am-button-inline</span></span><span class="token punctuation">{</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.arrow-align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});