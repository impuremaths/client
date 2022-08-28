/*! @license DOMPurify 2.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.0/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,(function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,u=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return r(e,o(t))});var y,b=_(Array.prototype.forEach),v=_(Array.prototype.pop),T=_(Array.prototype.push),N=_(String.prototype.toLowerCase),A=_(String.prototype.match),E=_(String.prototype.replace),w=_(String.prototype.indexOf),x=_(String.prototype.trim),S=_(RegExp.prototype.test),k=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(y,t)});function _(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function O(e,t,n){n=n||N,l&&l(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(c(t)||(t[r]=a),o=a)}e[o]=!0}return e}function D(e){var t,n=p(null);for(t in e)h(i,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=u(e)}return function(e){return console.warn("fallback value for",e),null}}var M=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),C=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),U=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),j=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),q=f(/^data-[\-\w.\u00B7-\uFFFF]/),Y=f(/^aria-[\-\w]+$/),K=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=f(/^(?:\w+script|data):/i),$=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),X=f(/^html$/i),Z=function(){return"undefined"==typeof window?null:window},J=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};var Q=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z(),r=function(e){return t(e)};if(r.version="2.4.0",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,u=n.Node,s=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,y=n.trustedTypes,_=s.prototype,Q=R(_,"cloneNode"),ee=R(_,"nextSibling"),te=R(_,"childNodes"),ne=R(_,"parentNode");if("function"==typeof c){var re=i.createElement("template");re.content&&re.content.ownerDocument&&(i=re.content.ownerDocument)}var oe=J(y,a),ae=oe?oe.createHTML(""):"",ie=i,le=ie.implementation,ce=ie.createNodeIterator,ue=ie.createDocumentFragment,se=ie.getElementsByTagName,me=a.importNode,fe={};try{fe=D(i).documentMode?i.documentMode:{}}catch(e){}var pe={};r.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var de,he,ge=G,ye=W,be=q,ve=Y,Te=V,Ne=$,Ae=K,Ee=null,we=O({},[].concat(o(M),o(L),o(C),o(F),o(U))),xe=null,Se=O({},[].concat(o(z),o(j),o(B),o(P))),ke=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),_e=null,Oe=null,De=!0,Re=!0,Me=!1,Le=!1,Ce=!1,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,je=!0,Be=!1,Pe="user-content-",Ge=!0,We=!1,qe={},Ye=null,Ke=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ve=null,$e=O({},["audio","video","img","source","image","track"]),Xe=null,Ze=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Je="http://www.w3.org/1998/Math/MathML",Qe="http://www.w3.org/2000/svg",et="http://www.w3.org/1999/xhtml",tt=et,nt=!1,rt=["application/xhtml+xml","text/html"],ot="text/html",at=null,it=i.createElement("form"),lt=function(e){return e instanceof RegExp||e instanceof Function},ct=function(t){at&&at===t||(t&&"object"===e(t)||(t={}),t=D(t),de=de=-1===rt.indexOf(t.PARSER_MEDIA_TYPE)?ot:t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===de?function(e){return e}:N,Ee="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS,he):we,xe="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR,he):Se,Xe="ADD_URI_SAFE_ATTR"in t?O(D(Ze),t.ADD_URI_SAFE_ATTR,he):Ze,Ve="ADD_DATA_URI_TAGS"in t?O(D($e),t.ADD_DATA_URI_TAGS,he):$e,Ye="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS,he):Ke,_e="FORBID_TAGS"in t?O({},t.FORBID_TAGS,he):{},Oe="FORBID_ATTR"in t?O({},t.FORBID_ATTR,he):{},qe="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,Me=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=t.SAFE_FOR_TEMPLATES||!1,Ce=t.WHOLE_DOCUMENT||!1,He=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,Fe=t.FORCE_BODY||!1,je=!1!==t.SANITIZE_DOM,Be=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,We=t.IN_PLACE||!1,Ae=t.ALLOWED_URI_REGEXP||Ae,tt=t.NAMESPACE||et,t.CUSTOM_ELEMENT_HANDLING&&lt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&lt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(Re=!1),Ue&&(He=!0),qe&&(Ee=O({},o(U)),xe=[],!0===qe.html&&(O(Ee,M),O(xe,z)),!0===qe.svg&&(O(Ee,L),O(xe,j),O(xe,P)),!0===qe.svgFilters&&(O(Ee,C),O(xe,j),O(xe,P)),!0===qe.mathMl&&(O(Ee,F),O(xe,B),O(xe,P))),t.ADD_TAGS&&(Ee===we&&(Ee=D(Ee)),O(Ee,t.ADD_TAGS,he)),t.ADD_ATTR&&(xe===Se&&(xe=D(xe)),O(xe,t.ADD_ATTR,he)),t.ADD_URI_SAFE_ATTR&&O(Xe,t.ADD_URI_SAFE_ATTR,he),t.FORBID_CONTENTS&&(Ye===Ke&&(Ye=D(Ye)),O(Ye,t.FORBID_CONTENTS,he)),Ge&&(Ee["#text"]=!0),Ce&&O(Ee,["html","head","body"]),Ee.table&&(O(Ee,["tbody"]),delete _e.tbody),m&&m(t),at=t)},ut=O({},["mi","mo","mn","ms","mtext"]),st=O({},["foreignobject","desc","title","annotation-xml"]),mt=O({},["title","style","font","a","script"]),ft=O({},L);O(ft,C),O(ft,I);var pt=O({},F);O(pt,H);var dt=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:et,tagName:"template"});var n=N(e.tagName),r=N(t.tagName);return e.namespaceURI===Qe?t.namespaceURI===et?"svg"===n:t.namespaceURI===Je?"svg"===n&&("annotation-xml"===r||ut[r]):Boolean(ft[n]):e.namespaceURI===Je?t.namespaceURI===et?"math"===n:t.namespaceURI===Qe?"math"===n&&st[r]:Boolean(pt[n]):e.namespaceURI===et&&(!(t.namespaceURI===Qe&&!st[r])&&(!(t.namespaceURI===Je&&!ut[r])&&(!pt[n]&&(mt[n]||!ft[n]))))},ht=function(e){T(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ae}catch(t){e.remove()}}},gt=function(e,t){try{T(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){T(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(He||Ue)try{ht(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},yt=function(e){var t,n;if(Fe)e="<remove></remove>"+e;else{var r=A(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===de&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=oe?oe.createHTML(e):e;if(tt===et)try{t=(new g).parseFromString(o,de)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(tt,"template",null);try{t.documentElement.innerHTML=nt?"":o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),tt===et?se.call(t,Ce?"html":"body")[0]:Ce?t.documentElement:a},bt=function(e){return ce.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},vt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},Tt=function(t){return"object"===e(u)?t instanceof u:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Nt=function(e,t,n){pe[e]&&b(pe[e],(function(e){e.call(r,t,n,at)}))},At=function(e){var t;if(Nt("beforeSanitizeElements",e,null),vt(e))return ht(e),!0;if(S(/[\u0080-\uFFFF]/,e.nodeName))return ht(e),!0;var n=he(e.nodeName);if(Nt("uponSanitizeElement",e,{tagName:n,allowedTags:Ee}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&(!Tt(e.content)||!Tt(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return ht(e),!0;if("select"===n&&S(/<template/i,e.innerHTML))return ht(e),!0;if(!Ee[n]||_e[n]){if(!_e[n]&&wt(n)){if(ke.tagNameCheck instanceof RegExp&&S(ke.tagNameCheck,n))return!1;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))return!1}if(Ge&&!Ye[n]){var o=ne(e)||e.parentNode,a=te(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(Q(a[i],!0),ee(e))}return ht(e),!0}return e instanceof s&&!dt(e)?(ht(e),!0):"noscript"!==n&&"noembed"!==n||!S(/<\/no(script|embed)/i,e.innerHTML)?(Le&&3===e.nodeType&&(t=e.textContent,t=E(t,ge," "),t=E(t,ye," "),e.textContent!==t&&(T(r.removed,{element:e.cloneNode()}),e.textContent=t)),Nt("afterSanitizeElements",e,null),!1):(ht(e),!0)},Et=function(e,t,n){if(je&&("id"===t||"name"===t)&&(n in i||n in it))return!1;if(Re&&!Oe[t]&&S(be,t));else if(De&&S(ve,t));else if(!xe[t]||Oe[t]){if(!(wt(e)&&(ke.tagNameCheck instanceof RegExp&&S(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&S(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&S(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return!1}else if(Xe[t]);else if(S(Ae,E(n,Ne,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!Ve[e]){if(Me&&!S(Te,E(n,Ne,"")));else if(n)return!1}else;return!0},wt=function(e){return e.indexOf("-")>0},xt=function(t){var n,o,a,i;Nt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(i=l.length;i--;){var u=n=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?n.value:x(n.value),a=he(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Nt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(gt(s,t),c.keepAttr))if(S(/\/>/i,o))gt(s,t);else{Le&&(o=E(o,ge," "),o=E(o,ye," "));var f=he(t.nodeName);if(Et(f,a,o)){if(!Be||"id"!==a&&"name"!==a||(gt(s,t),o=Pe+o),oe&&"object"===e(y)&&"function"==typeof y.getAttributeType)if(m);else switch(y.getAttributeType(f,a)){case"TrustedHTML":o=oe.createHTML(o);break;case"TrustedScriptURL":o=oe.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),v(r.removed)}catch(e){}}}}Nt("afterSanitizeAttributes",t,null)}},St=function e(t){var n,r=bt(t);for(Nt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Nt("uponSanitizeShadowNode",n,null),At(n)||(n.content instanceof l&&e(n.content),xt(n));Nt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(t){var o,i,c,s,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((nt=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!Tt(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(Tt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Ie||ct(f),r.removed=[],"string"==typeof t&&(We=!1),We){if(t.nodeName){var p=he(t.nodeName);if(!Ee[p]||_e[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof u)1===(i=(o=yt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!He&&!Le&&!Ce&&-1===t.indexOf("<"))return oe&&ze?oe.createHTML(t):t;if(!(o=yt(t)))return He?null:ze?ae:""}o&&Fe&&ht(o.firstChild);for(var d=bt(We?t:o);c=d.nextNode();)3===c.nodeType&&c===s||At(c)||(c.content instanceof l&&St(c.content),xt(c),s=c);if(s=null,We)return t;if(He){if(Ue)for(m=ue.call(o.ownerDocument);o.firstChild;)m.appendChild(o.firstChild);else m=o;return xe.shadowroot&&(m=me.call(a,m,!0)),m}var h=Ce?o.outerHTML:o.innerHTML;return Ce&&Ee["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&S(X,o.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+h),Le&&(h=E(h,ge," "),h=E(h,ye," ")),oe&&ze?oe.createHTML(h):h},r.setConfig=function(e){ct(e),Ie=!0},r.clearConfig=function(){at=null,Ie=!1},r.isValidAttribute=function(e,t,n){at||ct({});var r=he(e),o=he(t);return Et(r,o,n)},r.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],T(pe[e],t))},r.removeHook=function(e){if(pe[e])return v(pe[e])},r.removeHooks=function(e){pe[e]&&(pe[e]=[])},r.removeAllHooks=function(){pe={}},r}();return Q}));
//# sourceMappingURL=purify.min.js.map
