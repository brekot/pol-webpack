!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(S){var a,e=navigator.userAgent,T=/iphone/i.test(e),r=/chrome/i.test(e),A=/android/i.test(e);S.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},S.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,v){var n,k,b,y,x,j,R;if(!t&&0<this.length){var e=S(this[0]).data(S.mask.dataName);return e?e():void 0}return v=S.extend({autoclear:S.mask.autoclear,placeholder:S.mask.placeholder,completed:null},v),n=S.mask.definitions,k=[],b=j=t.length,y=null,t=String(t),S.each(t.split(""),function(e,t){"?"==t?(j--,b=e):n[t]?(k.push(new RegExp(n[t])),null===y&&(y=k.length-1),e<b&&(x=k.length-1)):k.push(null)}),this.trigger("unmask").each(function(){var o=S(this),c=S.map(t.split(""),function(e,t){if("?"!=e)return n[e]?f(t):e}),u=c.join(""),i=o.val();function l(){if(v.completed){for(var e=y;e<=x;e++)if(k[e]&&c[e]===f(e))return;v.completed.call(o)}}function f(e){return e<v.placeholder.length?v.placeholder.charAt(e):v.placeholder.charAt(0)}function s(e){for(;++e<j&&!k[e];);return e}function h(e,t){var n,a;if(!(e<0)){for(n=e,a=s(t);n<j;n++)if(k[n]){if(!(a<j&&k[n].test(c[a])))break;c[n]=c[a],c[a]=f(a),a=s(a)}g(),o.caret(Math.max(y,e))}}function m(e){p(),o.val()!=i&&o.change()}function d(e,t){var n;for(n=e;n<t&&n<j;n++)k[n]&&(c[n]=f(n))}function g(){o.val(c.join(""))}function p(e){var t,n,a,r=o.val(),i=-1;for(a=t=0;t<j;t++)if(k[t]){for(c[t]=f(t);a++<r.length;)if(n=r.charAt(a-1),k[t].test(n)){c[t]=n,i=t;break}if(a>r.length){d(t+1,j);break}}else c[t]===r.charAt(a)&&a++,t<b&&(i=t);return e?g():i+1<b?v.autoclear||c.join("")===u?(o.val()&&o.val(""),d(0,j)):g():(g(),o.val(o.val().substring(0,i+1))),b?t:y}o.data(S.mask.dataName,function(){return S.map(c,function(e,t){return k[t]&&e!=f(t)?e:null}).join("")}),o.one("unmask",function(){o.off(".mask").removeData(S.mask.dataName)}).on("focus.mask",function(){var e;o.prop("readonly")||(clearTimeout(a),i=o.val(),e=p(),a=setTimeout(function(){o.get(0)===document.activeElement&&(g(),e==t.replace("?","").length?o.caret(0,e):o.caret(e))},10))}).on("blur.mask",m).on("keydown.mask",function(e){if(!o.prop("readonly")){var t,n,a,r=e.which||e.keyCode;R=o.val(),8===r||46===r||T&&127===r?(n=(t=o.caret()).begin,(a=t.end)-n==0&&(n=46!==r?function(e){for(;0<=--e&&!k[e];);return e}(n):a=s(n-1),a=46===r?s(a):a),d(n,a),h(n,a-1),e.preventDefault()):13===r?m.call(this,e):27===r&&(o.val(i),o.caret(0,p()),e.preventDefault())}}).on("keypress.mask",function(e){if(!o.prop("readonly")){var t,n,a,r=e.which||e.keyCode,i=o.caret();e.ctrlKey||e.altKey||e.metaKey||r<32||!r||13===r||(i.end-i.begin!=0&&(d(i.begin,i.end),h(i.begin,i.end-1)),(t=s(i.begin-1))<j&&(n=String.fromCharCode(r),k[t].test(n))&&(function(e){var t,n,a,r;for(n=f(t=e);t<j;t++)if(k[t]){if(a=s(t),r=c[t],c[t]=n,!(a<j&&k[a].test(r)))break;n=r}}(t),c[t]=n,g(),a=s(t),A?setTimeout(function(){S.proxy(S.fn.caret,o,a)()},0):o.caret(a),i.begin<=x&&l()),e.preventDefault())}}).on("input.mask paste.mask",function(){o.prop("readonly")||setTimeout(function(){var e=p(!0);o.caret(e),l()},0)}),r&&A&&o.off("input.mask").on("input.mask",function(e){var t=o.val(),n=o.caret(),a=function(){S.proxy(S.fn.caret,o,n.begin,n.begin)()};if(R&&R.length&&R.length>t.length){for(var r=p(!0),i=n.end;0<i&&!k[i-1];)i--;0===i&&(i=r),n.begin=i,setTimeout(function(){a(),l()},0)}else n.begin=p(!0),setTimeout(function(){a(),l()},0)}),p()})}})});