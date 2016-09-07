/**
 * yearoflinux - Branding theme for Ghost
 * @version 1.1.0
 * @link    https://github.com/Kikobeats/bloggy
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]}}e(document).on("ready",function(){e(".header-gallery").flickity({cellAlign:"center",autoPlay:2500,pauseAutoPlayOnHover:!1,wrapAround:!0,draggable:!1,lazyLoad:1})}),e.fn.emulateTransitionEnd=function(t){var n=!1,a=this;e(this).one(e.support.transition.end,function(){n=!0});var i=function(){n||e(a).trigger(e.support.transition.end)};return setTimeout(i,t),this},e(function(){e.support.transition=t()})}(jQuery),+function(e){"use strict";var t=function(n,a){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,a),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=e.Event("show.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var a=n.data("bs.collapse");if(a&&a.transitioning)return;n.collapse("hide"),a||n.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("in")[i]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var r=e.camelCase(["scroll",i].join("-"));this.$element.one(e.support.transition.end,e.proxy(s,this)).emulateTransitionEnd(350)[i](this.$element[0][r])}}},t.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var a=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return e.support.transition?void this.$element[n](0).one(e.support.transition.end,e.proxy(a,this)).emulateTransitionEnd(350):a.call(this)}}},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var a=e(this),i=a.data("bs.collapse"),s=e.extend({},t.DEFAULTS,a.data(),"object"==typeof n&&n);i||a.data("bs.collapse",i=new t(this,s)),"string"==typeof n&&i[n]()})},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var n,a=e(this),i=a.attr("data-target")||t.preventDefault()||(n=a.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),s=e(i),r=s.data("bs.collapse"),o=r?"toggle":a.data(),l=a.attr("data-parent"),c=l&&e(l);r&&r.transitioning||(c&&c.find('[data-toggle=collapse][data-parent="'+l+'"]').not(a).addClass("collapsed"),a[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),s.collapse(o)})}(jQuery),+function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};t.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},t.prototype.toggle=function(e){return this[this.isShown?"hide":"show"](e)},t.prototype.show=function(t){var n=this,a=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(a),this.isShown||a.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.backdrop(function(){var a=e.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(document.body),n.$element.show(),a&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var i=e.Event("shown.bs.modal",{relatedTarget:t});a?n.$element.find(".modal-dialog").one(e.support.transition.end,function(){n.$element.focus().trigger(i)}).emulateTransitionEnd(300):n.$element.focus().trigger(i)}))},t.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one(e.support.transition.end,e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},t.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.focus()},this))},t.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},t.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden.bs.modal")})},t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},t.prototype.backdrop=function(t){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var a=e.support.transition&&n;if(this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",e.proxy(function(e){e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),a&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;a?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()):t&&t()};var n=e.fn.modal;e.fn.modal=function(n,a){return this.each(function(){var i=e(this),s=i.data("bs.modal"),r=e.extend({},t.DEFAULTS,i.data(),"object"==typeof n&&n);s||i.data("bs.modal",s=new t(this,r)),"string"==typeof n?s[n](a):r.show&&s.show(a)})},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),a=n.attr("href"),i=e(n.attr("data-target")||a&&a.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(a)&&a},i.data(),n.data());t.preventDefault(),i.modal(s,this).one("hide",function(){n.is(":visible")&&n.focus()})}),e(document).on("show.bs.modal",".modal",function(){e(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){e(document.body).removeClass("modal-open")})}(jQuery),function(){"use strict";var e;window.Bloggy=e={version:"1.1.0",is:function(e,t){return null==t&&(t=!1),this.app.dataset[e]===t},app:function(){return document.body}(),context:function(){var e;return e=document.body.className.split(" ")[0].split("-")[0],""===e?"error":e},device:function(){var e,t;return t=window.innerWidth,e=window.innerHeight,t<=480?"mobile":t<=1024?"tablet":"desktop"}},e.app.dataset.page=e.context(),e.app.dataset.device=e.device(),window.newsletter_form&&$("#newsletter_form").attr("action",window.newsletter_form)}.call(this),!function(e,t){var n;n=function(e,t,n){var a;return a=void 0,function(){var i,s,r;r=this,i=arguments,s=function(){n||e.apply(r,i),a=null},a?clearTimeout(a):n&&e.apply(r,i),a=setTimeout(s,t||100)}},jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}}(jQuery,"smartresize"),function(){"use strict";$(window).load(function(){var e;return e=function(){return $("img").each(function(){var e,t,n;return e=$(".post-content").outerWidth(),t=$(this)[0].naturalWidth,n=t>=e?"addClass":"removeClass",$(this)[n]("full-img")}),$(this).smartresize(e)}()}),$(function(){if($(".post-content").fitVids(),!Bloggy.is("device","desktop"))return FastClick.attach(Bloggy.app)})}.call(this);var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var i in e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var i in n)a[i]=n[i];return a},insertBefore:function(e,n,a,i){i=i||t.languages;var s=i[e];if(2==arguments.length){a=arguments[1];for(var r in a)a.hasOwnProperty(r)&&(s[r]=a[r]);return s}var o={};for(var l in s)if(s.hasOwnProperty(l)){if(l==n)for(var r in a)a.hasOwnProperty(r)&&(o[r]=a[r]);o[l]=s[l]}return t.languages.DFS(t.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=o)}),i[e]=o},DFS:function(e,n,a,i){i=i||{};for(var s in e)e.hasOwnProperty(s)&&(n.call(e,s,e[s],a||s),"Object"!==t.util.type(e[s])||i[e[s]]?"Array"!==t.util.type(e[s])||i[e[s]]||(i[e[s]]=!0,t.languages.DFS(e[s],n,s,i)):(i[e[s]]=!0,t.languages.DFS(e[s],n,null,i)))}},plugins:{},highlightAll:function(e,n){for(var a,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),s=0;a=i[s++];)t.highlightElement(a,e===!0,n)},highlightElement:function(n,a,i){for(var s,r,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(s=(o.className.match(e)||[,""])[1],r=t.languages[s]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var l=n.textContent,c={element:n,language:s,grammar:r,code:l};if(!l||!r)return void t.hooks.run("complete",c);if(t.hooks.run("before-highlight",c),a&&_self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){c.highlightedCode=e.data,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(n),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(e,a,i){var s=t.tokenize(e,a);return n.stringify(t.util.encode(s),i)},tokenize:function(e,n){var a=t.Token,i=[e],s=n.rest;if(s){for(var r in s)n[r]=s[r];delete n.rest}e:for(var r in n)if(n.hasOwnProperty(r)&&n[r]){var o=n[r];o="Array"===t.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var c=o[l],u=c.inside,d=!!c.lookbehind,p=0,h=c.alias;c=c.pattern||c;for(var g=0;g<i.length;g++){var m=i[g];if(i.length>e.length)break e;if(!(m instanceof a)){c.lastIndex=0;var f=c.exec(m);if(f){d&&(p=f[1].length);var v=f.index-1+p,f=f[0].slice(p),b=f.length,y=v+b,w=m.slice(0,v+1),k=m.slice(y+1),$=[g,1];w&&$.push(w);var P=new a(r,u?t.tokenize(f,u):f,h);$.push(P),k&&$.push(k),Array.prototype.splice.apply(i,$)}}}}}return i},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var i,s=0;i=a[s++];)i(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,i){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var s={type:e.type,content:n.stringify(e.content,a,i),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:i};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var r="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,r)}t.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=(o?" ":"")+l+'="'+(s.attributes[l]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,i=n.code,s=n.immediateClose;_self.postMessage(t.highlight(i,t.languages[a],a)),s&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e={css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",yaml:"YAML"};Prism.hooks.add("before-highlight",function(t){var n=t.element.parentNode;if(n&&/pre/i.test(n.nodeName)){var a,i,s=n.getAttribute("data-language")||e[t.language]||t.language.substring(0,1).toUpperCase()+t.language.substring(1),r=n.previousSibling;r&&/\s*\bprism-show-language\b\s*/.test(r.className)&&r.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(r.firstChild.className)?i=r.firstChild:(a=document.createElement("div"),i=document.createElement("div"),i.className="prism-show-language-label",a.className="prism-show-language",a.appendChild(i),n.parentNode.insertBefore(a,n)),i.innerHTML=s}})}}();