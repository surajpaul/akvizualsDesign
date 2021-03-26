// http://spin.js.org/#v2.3.2
!function(a,b){"object"==typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return m[e]||(k.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",k.cssRules.length),m[e]=1),e}function d(a,b){var c,d,e=a.style;if(b=b.charAt(0).toUpperCase()+b.slice(1),void 0!==e[b])return b;for(d=0;d<l.length;d++)if(c=l[d]+b,void 0!==e[c])return c}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}k.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.scale*d.width,left:d.scale*d.radius,top:-d.scale*d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.scale*(d.length+d.width),k=2*d.scale*j,l=-(d.width+d.length)*d.scale*2+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k,l=["webkit","Moz","ms","O"],m={},n={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(h.defaults={},f(h.prototype,{spin:function(b){this.stop();var c=this,d=c.opts,f=c.el=a(null,{className:d.className});if(e(f,{position:d.position,width:0,zIndex:d.zIndex,left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.scale*(f.length+f.width)+"px",height:f.scale*f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.scale*f.radius+"px,0)",borderRadius:(f.corners*f.scale*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.scale*f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),"undefined"!=typeof document){k=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}();var o=e(a("group"),{behavior:"url(#default#VML)"});!d(o,"transform")&&o.adj?i():j=d(o,"animation")}return h});
;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

  if (typeof exports == 'object') {
    // CommonJS
    factory(require('jquery'), require('spin'))
  }
  else if (typeof define == 'function' && define.amd) {
    // AMD, register as anonymous module
    define(['jquery', 'spin'], factory)
  }
  else {
    // Browser globals
    if (!window.Spinner) throw new Error('Spin.js not present')
    factory(window.jQuery, window.Spinner)
  }

}(function($, Spinner) {

  $.fn.spin = function(opts, color) {

    return this.each(function() {
      var $this = $(this),
        data = $this.data();

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (opts !== false) {
        opts = $.extend(
          { color: color || $this.css('color') },
          $.fn.spin.presets[opts] || opts
        )
        data.spinner = new Spinner(opts).spin(this)
      }
    })
  }

  $.fn.spin.presets = {
    tiny: { lines: 8, length: 2, width: 2, radius: 3 },
    small: { lines: 8, length: 4, width: 3, radius: 5 },
    large: { lines: 10, length: 8, width: 4, radius: 8 }
  }

}));
;/* Tooltipster v3.3.0 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},hideOnClick:false,icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,positionTrackerCallback:function(e){if(this.option("trigger")=="hover"&&this.option("autoClose")){this.hide()}},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){var r=null;if(t.$el.data("tooltipster-initialTitle")===undefined){r=t.$el.attr("title");if(r===undefined)r=null;t.$el.data("tooltipster-initialTitle",r)}if(t.options.content!==null){t._content_set(t.options.content)}else{t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}if(r.options.hideOnClick){r.$elProxy.on("click."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition();t.options.positionTrackerCallback.call(t,t.$el)}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0]){t.$elProxy.remove()}t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=null;if(t.options.restoration==="previous"){r=t.$el.data("tooltipster-initialTitle")}else if(t.options.restoration==="current"){r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html()}if(r){t.$el.attr("title",r)}t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
;// make it a global variable so other scripts can access it
var booked_load_calendar_date_booking_options,
	booked_appt_form_options,
	bookedNewAppointment;

;(function($, window, document, undefined) {

	var $win = $(window);

	$.fn.spin.presets.booked = {
	 	lines: 10, // The number of lines to draw
		length: 7, // The length of each line
		width: 5, // The line thickness
		radius: 11, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#555', // #rgb or #rrggbb or array of colors
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'booked-spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '50%', // Top position relative to parent
		left: '50%' // Left position relative to parent
	}

	$.fn.spin.presets.booked_top = {
	 	lines: 11, // The number of lines to draw
		length: 10, // The length of each line
		width: 6, // The line thickness
		radius: 15, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		scale: 0.5,
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#aaaaaa', // #rgb or #rrggbb or array of colors
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'booked-spinner booked-spinner-top', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '15px', // Top position relative to parent
		left: '50%' // Left position relative to parent
	}

	$.fn.spin.presets.booked_white = {
	 	lines: 13, // The number of lines to draw
		length: 11, // The length of each line
		width: 5, // The line thickness
		radius: 18, // The radius of the inner circle
		scale: 1,
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#fff', // #rgb or #rrggbb or array of colors
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'booked-spinner booked-white', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: '50%', // Top position relative to parent
		left: '50%' // Left position relative to parent
	}

	// Adjust the calendar sizing when resizing the window
	$win.on('resize', function(){

		adjust_calendar_boxes();
		resize_booked_modal();

	});

	$win.on('load', function() {

		BookedTabs.Init();

		var ajaxRequests = [];

		// Adjust the calendar sizing on load
		adjust_calendar_boxes();

		$('.booked-calendar-wrap').each(function(){
			var thisCalendar = $(this);
			var calendar_month = thisCalendar.find('table.booked-calendar').attr('data-calendar-date');
			thisCalendar.attr('data-default',calendar_month);
			init_tooltips(thisCalendar);
		});

		$('.booked-list-view').each(function(){
			var thisList = $(this);
			var list_date = thisList.find('.booked-appt-list').attr('data-list-date');
			thisList.attr('data-default',list_date);
		});

		bookedRemoveEmptyTRs();
		init_appt_list_date_picker();

		$('.booked_calendar_chooser').change(function(e){

			e.preventDefault();

			var $selector 			= $(this),
				thisIsCalendar		= $selector.parents('.booked-calendarSwitcher').hasClass('calendar');

			if (!thisIsCalendar){

				var thisCalendarWrap	= $selector.parents('.booked-calendar-shortcode-wrap').find('.booked-list-view'),
				thisDefaultDate			= thisCalendarWrap.attr('data-default'),
				thisIsCalendar			= $selector.parents('.booked-calendarSwitcher').hasClass('calendar');

				if (typeof thisDefaultDate == 'undefined'){ thisDefaultDate = false; }

				thisCalendarWrap.addClass('booked-loading');

				var args = {
					'action'		: 'booked_appointment_list_date',
					'date'		: thisDefaultDate,
					'calendar_id'	: $selector.val()
				};

				$(document).trigger("booked-before-loading-appointment-list-booking-options");
				thisCalendarWrap.spin('booked_top');

				$.ajax({
					url: booked_js_vars.ajax_url,
					type: 'post',
					data: args,
					success: function( html ) {

						thisCalendarWrap.html( html );

						init_appt_list_date_picker();
						setTimeout(function(){
							thisCalendarWrap.removeClass('booked-loading');
						},1);

					}
				});

			} else {

				var thisCalendarWrap 	= $selector.parents('.booked-calendar-shortcode-wrap').find('.booked-calendar-wrap'),
				thisDefaultDate			= thisCalendarWrap.attr('data-default');
				if (typeof thisDefaultDate == 'undefined'){ thisDefaultDate = false; }

				var args = {
					'action'		: 'booked_calendar_month',
					'gotoMonth'		: thisDefaultDate,
					'calendar_id'	: $selector.val()
				};

				savingState(true,thisCalendarWrap);

				$.ajax({
					url: booked_js_vars.ajax_url,
					type: 'post',
					data: args,
					success: function( html ) {

						thisCalendarWrap.html( html );

						adjust_calendar_boxes();
						bookedRemoveEmptyTRs();
						init_tooltips(thisCalendarWrap);
					 	$(window).trigger('booked-load-calendar', args, $selector );

					}
				});

			}

			return false;

		});

		// Calendar Next/Prev Click
		$('.booked-calendar-wrap').on('click', '.page-right, .page-left, .monthName a', function(e) {

			e.preventDefault();

			var $button 			= $(this),
				gotoMonth			= $button.attr('data-goto'),
				thisCalendarWrap 	= $button.parents('.booked-calendar-wrap'),
				thisCalendarDefault = thisCalendarWrap.attr('data-default'),
				calendar_id			= $button.parents('table.booked-calendar').attr('data-calendar-id');

			if (typeof thisCalendarDefault == 'undefined'){ thisCalendarDefault = false; }

			var args = {
				'action'		: 'booked_calendar_month',
				'gotoMonth'		: gotoMonth,
				'calendar_id'	: calendar_id,
				'force_default'	: thisCalendarDefault
			};

			savingState(true,thisCalendarWrap);

			$.ajax({
				url: booked_js_vars.ajax_url,
				type: 'post',
				data: args,
				success: function( html ) {

					thisCalendarWrap.html( html );

					adjust_calendar_boxes();
					bookedRemoveEmptyTRs();
					init_tooltips(thisCalendarWrap);
					$(window).trigger('booked-load-calendar', args, $button );

				}
			});

			return false;

		});

		// Calendar Date Click
		$('.booked-calendar-wrap').on('click', 'tr.week td', function(e) {

			e.preventDefault();

			var $thisDate 				= $(this),
				booked_calendar_table 	= $thisDate.parents('table.booked-calendar'),
				$thisRow				= $thisDate.parent(),
				date					= $thisDate.attr('data-date'),
				calendar_id				= booked_calendar_table.attr('data-calendar-id'),
				colspanSetting			= $thisRow.find('td').length;

			if (!calendar_id){ calendar_id = 0; }

			if ($thisDate.hasClass('blur') || $thisDate.hasClass('booked') && !booked_js_vars.publicAppointments || $thisDate.hasClass('prev-date')){

				// Do nothing.

			} else if ($thisDate.hasClass('active')){

				$thisDate.removeClass('active');
				$('tr.entryBlock').remove();

				var calendarHeight = booked_calendar_table.height();
				booked_calendar_table.parent().height(calendarHeight);

			} else {

				$('tr.week td').removeClass('active');
				$thisDate.addClass('active');

				$('tr.entryBlock').remove();
				$thisRow.after('<tr class="entryBlock booked-loading"><td colspan="'+colspanSetting+'"></td></tr>');
				$('tr.entryBlock').find('td').spin('booked');

				booked_load_calendar_date_booking_options = {'action':'booked_calendar_date','date':date,'calendar_id':calendar_id};
				$(document).trigger("booked-before-loading-calendar-booking-options");

				var calendarHeight = booked_calendar_table.height();
				booked_calendar_table.parent().height(calendarHeight);

				$.ajax({
					url: booked_js_vars.ajax_url,
					type: 'post',
					data: booked_load_calendar_date_booking_options,
					success: function( html ) {

						$('tr.entryBlock').find('td').html( html );

						$('tr.entryBlock').removeClass('booked-loading');
						$('tr.entryBlock').find('.booked-appt-list').fadeIn(300);
						$('tr.entryBlock').find('.booked-appt-list').addClass('shown');
						adjust_calendar_boxes();

					}
				});

			}

			return;

		});

		// Appointment List Next/Prev Date Click
		$('.booked-list-view').on('click', '.booked-list-view-date-prev,.booked-list-view-date-next', function(e) {

			e.preventDefault();

			var $thisLink 			= $(this),
				date				= $thisLink.attr('data-date'),
				thisList			= $thisLink.parents('.booked-list-view'),
				defaultDate			= thisList.attr('data-default'),
				calendar_id			= $thisLink.parents('.booked-list-view-nav').attr('data-calendar-id');

			if (typeof defaultDate == 'undefined'){ defaultDate = false; }

			if (!calendar_id){ calendar_id = 0; }

			thisList.addClass('booked-loading');

			var booked_load_list_view_date_booking_options = {
				'action'		: 'booked_appointment_list_date',
				'date'			: date,
				'calendar_id'	: calendar_id,
				'force_default'	: defaultDate
			};

			$(document).trigger("booked-before-loading-appointment-list-booking-options");
			thisList.spin('booked_top');

			$.ajax({
				url: booked_js_vars.ajax_url,
				type: 'post',
				data: booked_load_list_view_date_booking_options,
				success: function( html ) {

					thisList.html( html );

					init_appt_list_date_picker();
					setTimeout(function(){
						thisList.removeClass('booked-loading');
					},1);

				}
			});

			return false;

		});

		// New Appointment Click
		bookedNewAppointment = function(e) {
			e.preventDefault();

			var $button 		= $(this),
				title           = $button.attr('data-title'),
				timeslot		= $button.attr('data-timeslot'),
				date			= $button.attr('data-date'),
				calendar_id		= $button.attr('data-calendar-id'),
				$thisTimeslot	= $button.parents('.timeslot'),
				is_list_view	= $button.parents('.booked-calendar-wrap').hasClass('booked-list-view');

			if (typeof is_list_view != 'undefined' && is_list_view){
				var new_calendar_id	= $button.parents('.booked-list-view').find('.booked-list-view-nav').attr('data-calendar-id');
			} else {
				var new_calendar_id	= $button.parents('table.booked-calendar').attr('data-calendar-id');
			}
			calendar_id = new_calendar_id ? new_calendar_id : calendar_id;

			booked_appt_form_options = {'action':'booked_new_appointment_form','date':date,'timeslot':timeslot,'calendar_id':calendar_id,'title':title};
			$(document).trigger("booked-before-loading-booking-form");

			create_booked_modal();
			setTimeout(function(){

				$.ajax({
					url: booked_js_vars.ajax_url,
					type: 'post',
					data: booked_appt_form_options,
					success: function( html ) {

						$('.bm-window').html( html );

						var bookedModal = $('.booked-modal');
						var bmWindow = bookedModal.find('.bm-window');
						bmWindow.css({'visibility':'hidden'});
						bookedModal.removeClass('bm-loading');
						$(document).trigger("booked-on-new-app");
						resize_booked_modal();
						bmWindow.hide();
						$('.booked-modal .bm-overlay').find('.booked-spinner').remove();

						setTimeout(function(){
							bmWindow.css({'visibility':'visible'});
							bmWindow.show();
						},50);

					}
				});

			},100);

			return false;
		}
		$('.booked-calendar-wrap').on('click', 'button.new-appt', bookedNewAppointment);

		// Profile Tabs
		var profileTabs = $('.booked-tabs');

		if (!profileTabs.find('li.active').length){
			profileTabs.find('li:first-child').addClass("active");
		}

		if (profileTabs.length){
			$('.booked-tab-content').hide();
			var activeTab = profileTabs.find('.active > a').attr('href');
			activeTab = activeTab.split('#');
			activeTab = activeTab[1];
			$('#profile-'+activeTab).show();

			profileTabs.find('li > a').on('click', function(e) {

				e.preventDefault();
				$('.booked-tab-content').hide();
				profileTabs.find('li').removeClass('active');

				$(this).parent().addClass('active');
				var activeTab = $(this).attr('href');
				activeTab = activeTab.split('#');
				activeTab = activeTab[1];

				$('#profile-'+activeTab).show();
				return false;

			});
		}

		// Show Additional Information
		$('.booked-profile-appt-list').on('click', '.booked-show-cf', function(e) {

			e.preventDefault();
			var hiddenBlock = $(this).parent().find('.cf-meta-values-hidden');

			if(hiddenBlock.is(':visible')){
				hiddenBlock.hide();
				$(this).removeClass('booked-cf-active');
			} else {
				hiddenBlock.show();
				$(this).addClass('booked-cf-active');
			}

			return false;

		});

		// Check Login/Registration/Forgot Password forms before Submitting
		if ($('#loginform').length){
			$('#loginform input[type="submit"]').on('click',function(e) {
				if ($('#loginform input[name="log"]').val() && $('#loginform input[name="pwd"]').val()){
					$('#loginform .booked-custom-error').hide();
				} else {
					if ( $('#loginform').parents('.booked-form-wrap').length ){
						e.preventDefault();
						$('#loginform').parents('.booked-form-wrap').find('.booked-custom-error').fadeOut(200).fadeIn(200);
					}
				}
			});
		}

		if ($('#profile-forgot').length){
			$('#profile-forgot input[type="submit"]').on('click',function(e) {
				if ($('#profile-forgot input[name="user_login"]').val()){
					$('#profile-forgot .booked-custom-error').hide();
				} else {
					e.preventDefault();
					$('#profile-forgot').find('.booked-custom-error').fadeOut(200).fadeIn(200);
				}
			});
		}

		// Custom Upload Field
		if ($('.booked-upload-wrap').length){

			$('.booked-upload-wrap input[type=file]').on('change',function(){

				var fileName = $(this).val();
				$(this).parent().find('span').html(fileName);
				$(this).parent().addClass('hasFile');

			});

		}

		// Delete Appointment
		$('.booked-profile-appt-list').on('click', '.appt-block .cancel', function(e) {

			e.preventDefault();

			var $button 		= $(this),
				$thisParent		= $button.parents('.appt-block'),
				appt_id			= $thisParent.attr('data-appt-id');

			confirm_delete = confirm(booked_js_vars.i18n_confirm_appt_delete);
			if (confirm_delete == true){

				var currentApptCount = parseInt($('.booked-profile-appt-list').find('h4').find('span.count').html());
				currentApptCount = parseInt(currentApptCount - 1);
				if (currentApptCount < 1){
					$('.booked-profile-appt-list').find('h4').find('span.count').html('0');
					$('.no-appts-message').slideDown('fast');
				} else {
					$('.booked-profile-appt-list').find('h4').find('span.count').html(currentApptCount);
				}

				$('.appt-block').animate({'opacity':0.4},0);

	  			$thisParent.slideUp('fast',function(){
					$(this).remove();
				});

				$.ajax({
					'url' 		: booked_js_vars.ajax_url,
					'method' 	: 'post',
					'data'		: {
						'action'     	: 'booked_cancel_appt',
						'appt_id'     	: appt_id
					},
					success: function(data) {
						$('.appt-block').animate({'opacity':1},150);
					}
				});

			}

			return false;

		});

		$('body').on('touchstart click','.bm-overlay, .bm-window .close, .booked-form .cancel',function(e){
			e.preventDefault();
			close_booked_modal();
			return false;
		});

		$('body')
		.on('focusin', '.booked-form input', function() {
			if(this.title==this.value) {
				$(this).addClass('hasContent');
				this.value = '';
			}
		}).on('focusout', '.booked-form input', function(){
			if(this.value==='') {
				$(this).removeClass('hasContent');
				this.value = this.title;
			}
		});

		$('body').on('change','.booked-form input',function(){

			var condition = $(this).attr('data-condition'),
				thisVal = $(this).val();

			if (condition && $('.condition-block').length) {
				$('.condition-block.'+condition).hide();
				$('#condition-'+thisVal).fadeIn(200);
				resize_booked_modal();
			}

		});

		// Perform AJAX login on form submit
	    $('body').on('submit','form#ajaxlogin', function(e){
		    e.preventDefault();

	        $('form#ajaxlogin p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
	        resize_booked_modal();

	        var $this = $(this),
	        	date = $this.data('date'),
	        	title = $this.data('title'),
	        	timeslot = $this.data('timeslot'),
	        	calendar_id = $this.data('calendar-id');

	        $.ajax({
		        type	: 'post',
				url 	: booked_js_vars.ajax_url,
				data	: $('form#ajaxlogin').serialize(),
				success	: function(data) {
					if (data == 'success'){

						// close the modal box
						close_booked_modal();

						// reopen the modal box
						var $button = $( '<button data-title="' + title + '" data-timeslot="' + timeslot + '" data-date="' + date + '" data-calendar-id="' + calendar_id + '"></button>' );
						$button.on( 'click', window.bookedNewAppointment );
						$button.triggerHandler( 'click' );
						$button.unbind( 'click', window.bookedNewAppointment );
						$button.detach();

					} else {
						$('form#ajaxlogin p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_wrong_username_pass);
						resize_booked_modal();
					}
	            }
	        });
	        e.preventDefault();
	    });

	    $('body').on('click','.booked-forgot-password',function(e){

			e.preventDefault();
			$('#ajaxlogin').hide();
			$('#ajaxforgot').show();

			resize_booked_modal();

	    });

	     $('body').on('click','.booked-forgot-goback',function(e){

			e.preventDefault();
			$('#ajaxlogin').show();
			$('#ajaxforgot').hide();

			resize_booked_modal();

	    });

	    // Perform AJAX login on form submit

	    $('body').on('submit','form#ajaxforgot', function(e){
		    e.preventDefault();

	        $('form#ajaxforgot p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
	        resize_booked_modal();

	        var $this = $(this);

	        $.ajax({
		        type	: 'post',
				url 	: booked_js_vars.ajax_url,
				data	: $('form#ajaxforgot').serialize(),
				success	: function(data) {
					if (data == 'success'){

						e.preventDefault();
						$('#ajaxlogin').show();
						$('#ajaxforgot').hide();

						$('form#ajaxlogin p.status').show().html('<i class="booked-icon booked-icon-check" style="color:#56c477"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_password_reset);
						resize_booked_modal();

					} else {

						//console.log(data);
						$('form#ajaxforgot p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_password_reset_error);
						resize_booked_modal();

					}
	            }
	        });
	        e.preventDefault();
	    });


		// Submit the "Request Appointment" Form
		$('body').on('click','.booked-form input#submit-request-appointment',function(e){

			$('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
	        resize_booked_modal();

			e.preventDefault();

			var customerType        = $('#newAppointmentForm input[name=customer_type]').val(),
				customerID          = $('#newAppointmentForm input[name=user_id]').val(),
				name                = $('#newAppointmentForm input[name=booked_appt_name]').val(),
				surname             = $('#newAppointmentForm input[name=booked_appt_surname]').val(),
				surnameActive		= $('#newAppointmentForm input[name=booked_appt_surname]').length,
				guest_name          = $('#newAppointmentForm input[name=guest_name]').val(),
				guest_surname      	= $('#newAppointmentForm input[name=guest_surname]').val(),
				guest_surnameActive = $('#newAppointmentForm input[name=guest_surname]').length,
				guest_email			= $('#newAppointmentForm input[name=guest_email]').val(),
				guest_emailActive 	= $('#newAppointmentForm input[name=guest_email]').length,
				email               = $('#newAppointmentForm input[name=booked_appt_email]').val(),
				password            = $('#newAppointmentForm input[name=booked_appt_password]').val(),
				showRequiredError   = false,
				ajaxRequests        = [];

			$(this).parents('.booked-form').find('input,textarea,select').each(function(i,field){

				var required = $(this).attr('required');

				if (required && $(field).attr('type') == 'hidden'){
					var fieldParts = $(field).attr('name');
					fieldParts = fieldParts.split('---');
					fieldName = fieldParts[0];
					fieldNumber = fieldParts[1].split('___');
					fieldNumber = fieldNumber[0];

					if (fieldName == 'radio-buttons-label'){
						var radioValue = false;
						$('input:radio[name="single-radio-button---'+fieldNumber+'[]"]:checked').each(function(){
							if ($(this).val()){
								radioValue = $(this).val();
							}
						});
						if (!radioValue){
							showRequiredError = true;
						}
					} else if (fieldName == 'checkboxes-label'){
						var checkboxValue = false;
						$('input:checkbox[name="single-checkbox---'+fieldNumber+'[]"]:checked').each(function(){
							if ($(this).val()){
								checkboxValue = $(this).val();
							}
						});
						if (!checkboxValue){
							showRequiredError = true;
						}
					}

				} else if (required && $(field).attr('type') != 'hidden' && $(field).val() == ''){
		            showRequiredError = true;
		        }

		    });

		    if (showRequiredError) {
			    $('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_fill_out_required_fields);
				resize_booked_modal();
			    return false;
		    }

			if ( customerType == 'new' && !name || customerType == 'new' && surnameActive && !surname || customerType == 'new' && !email || customerType == 'new' && !password ) {
				$('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_appt_required_fields);
				resize_booked_modal();
				return false;
			}

			if ( customerType == 'guest' && !guest_name || customerType == 'guest' && guest_emailActive && !guest_email || customerType == 'guest' && guest_surnameActive && !guest_surname ){
				$('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_appt_required_fields_guest);
				resize_booked_modal();
				return false;
			}

			if (customerType == 'current' && customerID ||
				customerType == 'guest' && guest_name && !guest_surnameActive && !guest_emailActive ||
				customerType == 'guest' && guest_name && guest_surnameActive && guest_surname && !guest_emailActive ||
				customerType == 'guest' && guest_name && guest_emailActive && guest_email && !guest_surnameActive ||
				customerType == 'guest' && guest_name && guest_emailActive && guest_email && guest_surnameActive && guest_surname ) {

			    SubmitRequestAppointment.currentUserOrGuest();

			}

			if (customerType == 'new' && name && email && password) {
				if ( !surnameActive || surnameActive && surname ){
					SubmitRequestAppointment.newUser();
				}
			}

		});

		var SubmitRequestAppointment = {

			formSelector: '#newAppointmentForm',
			formBtnRequestSelector: '.booked-form input#submit-request-appointment',
			formStatusSelector: 'p.status',
			formSubmitBtnSelector: '#submit-request-appointment',

			apptContainerSelector: '.booked-appointment-details',

			baseFields: 	[ 'guest_name','guest_surname','guest_email','action', 'customer_type', 'user_id' ],
			apptFields: 	[ 'appoinment', 'calendar_id', 'title', 'date', 'timestamp', 'timeslot' ],
			userFields: 	[ 'booked_appt_name','booked_appt_surname','booked_appt_email', 'booked_appt_password' ],
			captchaFields: 	[ 'captcha_word', 'captcha_code' ],

			currentApptIndex: false,
			currentApptCounter: false,
			hasAnyErrors: false,

			currentUserOrGuest: function() {
				var total_appts = SubmitRequestAppointment._totalAppts();

				if ( ! total_appts ) {
					return;
				}

				SubmitRequestAppointment._showLoadingMessage();
				SubmitRequestAppointment._resetDefaultValues();

				var data = SubmitRequestAppointment._getBaseData();

				SubmitRequestAppointment.currentApptIndex = 0;
				SubmitRequestAppointment.currentApptCounter = 1;
				SubmitRequestAppointment._doRequestAppointment( data, total_appts );

			},

			// pretty much the same as SubmitRequestAppointment.currentUserOrGuest(), however, it include the user name, email and password
			newUser: function() {
				var total_appts = SubmitRequestAppointment._totalAppts();

				if ( ! total_appts ) {
					return;
				}

				SubmitRequestAppointment._showLoadingMessage();
				SubmitRequestAppointment._resetDefaultValues();

				var data = SubmitRequestAppointment._getBaseData();

				// when there are more than one appointment, we need to make the registration request first and then loop the appointments
				if ( total_appts > 1 ) {
					var data_obj_with_no_reference = null;
					data_obj_with_no_reference = $.extend( true, {}, data );
					data_obj_with_no_reference = SubmitRequestAppointment._addUserRegistrationData( data_obj_with_no_reference );
					SubmitRequestAppointment._requestUserRegistration( data_obj_with_no_reference );

					data.customer_type = 'current';
				} else {
					// add user registration fields values
					data = SubmitRequestAppointment._addUserRegistrationData( data );
				}

				SubmitRequestAppointment.currentApptIndex = 0;
				SubmitRequestAppointment._doRequestAppointment( data, total_appts );
			},

			_doRequestAppointment: function( data, total_appts ) {

				var appt_fields = SubmitRequestAppointment.apptFields;

				// for the first item only
				if ( SubmitRequestAppointment.currentApptIndex === 0 ) {
					SubmitRequestAppointment._hideCancelBtn();
					SubmitRequestAppointment._disableSubmitBtn();
					SubmitRequestAppointment.hasAnyErrors = false;
				}
				// <------end

				var data_obj_with_no_reference = $.extend( true, {}, data );

				// add the appointment fields to the data
				for (var i = 0; i < appt_fields.length; i++) {
					data_obj_with_no_reference[ appt_fields[i] ] = SubmitRequestAppointment._getFieldVal( appt_fields[i], SubmitRequestAppointment.currentApptIndex );
				}

				var calendar_id = SubmitRequestAppointment._getFieldVal( 'calendar_id', SubmitRequestAppointment.currentApptIndex );
				data_obj_with_no_reference = SubmitRequestAppointment._addCustomFieldsData( data_obj_with_no_reference, calendar_id );

				var $appt = SubmitRequestAppointment._getApptElement( SubmitRequestAppointment.currentApptIndex );

				if ( ! $appt.hasClass('skip') ) {
					$.ajax({
						type    : 'post',
						url     : booked_js_vars.ajax_url,
						data    : data_obj_with_no_reference,
						success	: function( response ) {

							//SubmitRequestAppointment._enableSubmitBtn();
							//SubmitRequestAppointment._showCancelBtn();

							//console.log(response);
							//return;

							SubmitRequestAppointment._requestAppointmentResponseHandler( response );
							SubmitRequestAppointment.currentApptIndex++;

							setTimeout( function() {
								if ( SubmitRequestAppointment.currentApptCounter === total_appts ) {
									// for the last item only
									if ( ! SubmitRequestAppointment.hasAnyErrors ) {
										SubmitRequestAppointment._onAfterRequestAppointment();
									} else {
										SubmitRequestAppointment._enableSubmitBtn();
										SubmitRequestAppointment._showCancelBtn();
									}
									// <------end
								} else {
									SubmitRequestAppointment.currentApptCounter++;
									SubmitRequestAppointment._doRequestAppointment( data, total_appts );
								}
							}, 100 );
						}
					});
				} else {
					SubmitRequestAppointment.currentApptIndex++;
					SubmitRequestAppointment.currentApptCounter++;
					SubmitRequestAppointment._doRequestAppointment( data, total_appts, SubmitRequestAppointment.currentApptIndex );
				}
			},

			_totalAppts: function() {
				return $(SubmitRequestAppointment.formSelector + ' input[name="appoinment[]"]').length;
			},

			_getBaseData: function() {
				var data = {},
					fields = SubmitRequestAppointment.baseFields;

				// set up the base form data
				for ( var i = 0; i < fields.length; i++ ) {
					data[ fields[i] ] = SubmitRequestAppointment._getFieldVal( fields[i] );
				}

				data['is_fe_form'] = true;
				data['total_appts'] = SubmitRequestAppointment._totalAppts();

				return data;
			},

			_getFieldVal: function( field_name, field_index ) {
				var field_name = typeof field_name === 'undefined' ? '' : field_name,
					field_index = typeof field_index === 'undefined' ? false : field_index,
					selector = SubmitRequestAppointment.formSelector + ' ';

				if ( field_index === false ) {
					selector += ' [name=' + field_name + ']';
					return $( selector ).val();
				}

				selector += ' [name="' + field_name + '[]"]';
				return $( selector ).eq( field_index ).val();
			},

			_resetDefaultValues: function() {
				 $('.booked-form input').each(function(){
					var thisVal = $(this).val(),
						thisDefault = $(this).attr('title');

					if ( thisDefault == thisVal ){
						$(this).val('');
					}
				});
			},

			_resetToDefaultValues: function() {
				$('.booked-form input').each(function(){
					var thisVal = $(this).val(),
						thisDefault = $(this).attr('title');

					if ( ! thisVal ){
						$(this).val( thisDefault );
					}
				});
			},

			_addUserRegistrationData: function( data ) {
				// populate the user data
				$.each( SubmitRequestAppointment.userFields, function( index, field_name ) {
					data[ field_name ] = SubmitRequestAppointment._getFieldVal( field_name );
				} );

				// populate captcha data if available
				$.each( SubmitRequestAppointment.captchaFields, function( index, field_name ) {
					var field_value = SubmitRequestAppointment._getFieldVal( field_name );

					if ( ! field_value ) {
						return;
					}

					data[ field_name ] = field_value;
				} );

				return data;
			},

			_addCustomFieldsData: function( data, calendar_id ) {
				var custom_fields_data = $('.cf-block [name]')
					.filter( function( index ) {
						var $this = $(this);
						return parseInt($this.data('calendar-id')) === parseInt(calendar_id) && $this.attr('name').match(/---\d+/g);
					} )
					.each( function( index ) {
						var $this = $(this),
							name = $this.attr('name'),
							value = $this.val(),
							type = $this.attr('type');

						if ( ! value ) {
							return;
						}

						if ( ! name.match(/checkbox|radio+/g) ) {
							data[ name ] = value;
							return;
						}

						if ( name.match(/radio+/g) && $this.is(':checked') ) {
							data[ name ] = value;
							return;
						}

						if ( ! name.match(/radio+/g) && typeof data[ name ] === 'undefined' || ! name.match(/radio+/g) && data[ name ].constructor !== Array ) {
							data[ name ] = [];
						}

						if ( ! $this.is(':checked') ) {
							return;
						}

						data[ name ].push( value );
					} );

				return data;
			},

			_requestUserRegistration: function( base_data, appt_index ) {
				$.ajax({
					type    : 'post',
					url     : booked_js_vars.ajax_url,
					data    : base_data,
					async   : false,
					success	: function( response ) {
						SubmitRequestAppointment._requestUserRegistrationResponseHandler( response );
					}
				});
			},

			_requestUserRegistrationResponseHandler: function( response ) {
				var response_parts = response.split('###'),
					data_result = response_parts[0].substr( response_parts[0].length - 5 );

				if ( data_result === 'error' ) {
					// do something on registration failure
					return;
				}

				// do something on successful registration
			},

			_requestAppointment: function( response ) {
				SubmitRequestAppointment._requestAppointmentResponseHandler( response );
			},

			_requestAppointmentResponseHandler: function( response ) {
				var response_parts = response.split('###'),
					data_result = response_parts[0].substr( response_parts[0].length - 5 );

				if ( data_result === 'error' ) {
					SubmitRequestAppointment._requestAppointmentOnError( response_parts );
					return;
				}

				SubmitRequestAppointment._requestAppointmentOnSuccess( response_parts );
			},

			_requestAppointmentOnError: function( response_parts ) {
				var $apptEl = SubmitRequestAppointment._getApptElement();

				$(document).trigger("booked-on-requested-appt-error",[$apptEl]);

				SubmitRequestAppointment._highlightAppt();

				SubmitRequestAppointment._setStatusMsg( response_parts[1] );

				SubmitRequestAppointment.hasAnyErrors = true;

				resize_booked_modal();
			},

			_requestAppointmentOnSuccess: function( response_parts ) {
				var $apptEl = SubmitRequestAppointment._getApptElement();

				$(document).trigger("booked-on-requested-appt-success",[$apptEl]);

				SubmitRequestAppointment._unhighlightAppt();
			},

			_onAfterRequestAppointment: function() {
				var redirectObj = { redirect : false };
				var redirect = $(document).trigger("booked-on-requested-appointment",[redirectObj]);

				if ( redirectObj.redirect ) {
					return;
				}

				if ( booked_js_vars.profilePage ) {
					window.location = booked_js_vars.profilePage;
					return;
				}

				SubmitRequestAppointment._reloadApptsList();
				SubmitRequestAppointment._reloadCalendarTable();
			},

			_setStatusMsg: function( msg ) {
				var form_status_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.formStatusSelector;
				$( form_status_selector ).show().html( '<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + msg );
			},

			_getApptElement: function( appt_index ) {
				var appt_index = typeof appt_index === 'undefined' ? SubmitRequestAppointment.currentApptIndex : appt_index,
					appt_cnt_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.apptContainerSelector;

				return $( appt_cnt_selector ).eq( appt_index );
			},

			_highlightAppt: function( msg ) {
				var $apptEl = SubmitRequestAppointment._getApptElement();

				if ( ! $apptEl.length ) {
					return;
				}

				$apptEl.addClass('has-error');
			},

			_unhighlightAppt: function( msg ) {
				var $apptEl = SubmitRequestAppointment._getApptElement();

				if ( ! $apptEl.length ) {
					return;
				}

				$apptEl.removeClass('has-error').addClass('skip');
			},

			_enableSubmitBtn: function() {
				var btn_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.formSubmitBtnSelector;
				$( btn_selector ).attr( 'disabled', false );
			},

			_disableSubmitBtn: function() {
				var btn_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.formSubmitBtnSelector;
				$( btn_selector ).attr( 'disabled', true );
			},

			_showCancelBtn: function() {
				$( SubmitRequestAppointment.formSelector ).find('button.cancel').show();
			},

			_hideCancelBtn: function() {
				$( SubmitRequestAppointment.formSelector ).find('button.cancel').hide();
			},

			_showLoadingMessage: function() {
				$('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
			},

			_reloadApptsList: function() {
				if ( ! $('.booked-appt-list').length ){
					return;
				}

				$('.booked-appt-list').each( function() {
					var $thisApptList  = $(this),
						date          = $thisApptList.attr('data-list-date'),
						thisList      = $thisApptList.parents('.booked-list-view'),
						defaultDate   = thisList.attr('data-default'),
						calendar_id   = parseInt($thisApptList.find('.booked-list-view-nav').attr('data-calendar-id')) || 0;

					defaultDate = typeof defaultDate === 'undefined' ? false : defaultDate;
					calendar_id = calendar_id ? calendar_id : 0;

					thisList.addClass('booked-loading');

					var booked_load_list_view_date_booking_options = {
						'action'		: 'booked_appointment_list_date',
						'date'			: date,
						'calendar_id'	: calendar_id,
						'force_default'	: defaultDate
					};

					$(document).trigger("booked-before-loading-appointment-list-booking-options");
					thisList.spin('booked_top');

					$.ajax({
						url: booked_js_vars.ajax_url,
						type: 'post',
						data: booked_load_list_view_date_booking_options,
						success: function( html ) {
							thisList.html( html );

							close_booked_modal();
							init_appt_list_date_picker();
							setTimeout(function(){
								thisList.removeClass('booked-loading');
							},1);
						}
					});
				});
			},

			_reloadCalendarTable: function() {
				if ( ! $('td.active').length ) {
					return;
				}

				var $activeTD = $('td.active'),
					activeDate = $activeTD.attr('data-date'),
					calendar_id = parseInt( $activeTD.parents('table').data('calendar-id') ) || 0;

				booked_load_calendar_date_booking_options = { 'action':'booked_calendar_date', 'date':activeDate, 'calendar_id':calendar_id };
				$(document).trigger("booked-before-loading-calendar-booking-options");

				$.ajax({
					url: booked_js_vars.ajax_url,
					type: 'post',
					data: booked_load_calendar_date_booking_options,
					success: function( html ) {

						$('tr.entryBlock').find('td').html( html );

						close_booked_modal();
						$('tr.entryBlock').removeClass('booked-loading');
						$('tr.entryBlock').find('.booked-appt-list').hide().fadeIn(300);
						$('tr.entryBlock').find('.booked-appt-list').addClass('shown');
						adjust_calendar_boxes();
					}
				});
			}
		}
	});

	function bookedRemoveEmptyTRs(){
		$('table.booked-calendar').find('tr.week').each(function(){
			if ($(this).children().length == 0){
				$(this).remove();
			}
		});
	}

	// Saving state updater
	function savingState(show,limit_to){

		show = typeof show !== 'undefined' ? show : true;
		limit_to = typeof limit_to !== 'undefined' ? limit_to : false;

		if (limit_to){

			var $savingStateDIV = limit_to.find('li.active .savingState, .topSavingState.savingState, .calendarSavingState');
			var $stuffToHide = limit_to.find('.monthName');
			var $stuffToTransparent = limit_to.find('table.booked-calendar tbody');

		} else {

			var $savingStateDIV = $('li.active .savingState, .topSavingState.savingState, .calendarSavingState');
			var $stuffToHide = $('.monthName');
			var $stuffToTransparent = $('table.booked-calendar tbody');

		}

		if (show){
			$savingStateDIV.fadeIn(200);
			$stuffToHide.hide();
			$stuffToTransparent.animate({'opacity':0.2},100);
		} else {
			$savingStateDIV.hide();
			$stuffToHide.show();
			$stuffToTransparent.animate({'opacity':1},0);
		}

	}

	$(document).ajaxStop(function() {
		savingState(false);
	});

	function init_appt_list_date_picker(){

		$('.booked_list_date_picker').each(function(){
			var thisDatePicker = $(this);
			var minDateVal = thisDatePicker.parents('.booked-appt-list').attr('data-min-date');
			var maxDateVal = thisDatePicker.parents('.booked-appt-list').attr('data-max-date');
			if (typeof minDateVal == 'undefined'){ var minDateVal = thisDatePicker.attr('data-min-date'); }

			thisDatePicker.datepicker({
		        dateFormat: 'yy-mm-dd',
		        minDate: minDateVal,
		        maxDate: maxDateVal,
		        showAnim: false,
		        beforeShow: function(input, inst) {
					$('#ui-datepicker-div').removeClass();
					$('#ui-datepicker-div').addClass('booked_custom_date_picker');
			    },
			    onClose: function(dateText){
					$('.booked_list_date_picker_trigger').removeClass('booked-dp-active');
			    },
			    onSelect: function(dateText){

				   	var thisInput 			= $(this),
						date				= dateText,
						thisList			= thisInput.parents('.booked-list-view'),
						defaultDate			= thisList.attr('data-default'),
						calendar_id			= thisInput.parents('.booked-list-view-nav').attr('data-calendar-id');

					if (typeof defaultDate == 'undefined'){ defaultDate = false; }

					if (!calendar_id){ calendar_id = 0; }
					thisList.addClass('booked-loading');

					var booked_load_list_view_date_booking_options = {
						'action'		: 'booked_appointment_list_date',
						'date'			: date,
						'calendar_id'	: calendar_id,
						'force_default'	: defaultDate
					};

					$(document).trigger("booked-before-loading-appointment-list-booking-options");
					thisList.spin('booked_top');

					$.ajax({
						url: booked_js_vars.ajax_url,
						type: 'post',
						data: booked_load_list_view_date_booking_options,
						success: function( html ) {

							thisList.html( html );

							init_appt_list_date_picker();
							setTimeout(function(){
								thisList.removeClass('booked-loading');
							},1);

						}
					});

					return false;
			    }
		    });

		});

		$('body').on('click','.booked_list_date_picker_trigger',function(e){
			e.preventDefault();
			if (!$(this).hasClass('booked-dp-active')){
				$(this).addClass('booked-dp-active');
				$(this).parents('.booked-appt-list').find('.booked_list_date_picker').datepicker('show');
			}

	    });

	}

	var BookedTabs = {
		bookingModalSelector: '.booked-modal',
		tabSelector: '.booked-tabs',
		tabNavSelector: '.booked-tabs-nav span',
		tabCntSelector: '.booked-tabs-cnt',

		Init: function() {
			$(document).on( 'click', this.tabNavSelector, this.tabsNav );
		},

		tabsNav: function( event ) {
			event.preventDefault();

			BookedTabs.switchToTab( $(this) );
			BookedTabs.maybeResizeBookingModal();
		},

		switchToTab: function( tab_nav_item ) {
			var $nav_item = tab_nav_item,
				tab_cnt_class = '.' + $nav_item.data('tab-cnt'),
				$tabs_container = $nav_item.parents( BookedTabs.tabSelector );

			$nav_item
				.addClass( 'active' )
				.siblings()
				.removeClass( 'active' )

			$tabs_container
				.find( BookedTabs.tabCntSelector + ' ' + tab_cnt_class )
				.addClass( 'active' )
				.siblings()
				.removeClass( 'active' );
		},

		maybeResizeBookingModal: function() {
			if ( ! $(BookedTabs.bookingModalSelector).length ) {
				return;
			}

			resize_booked_modal();
		}
	}

})(jQuery, window, document);

// Create Booked Modal
function create_booked_modal(){
	var windowHeight = jQuery(window).height();
	var windowWidth = jQuery(window).width();
	if (windowWidth > 720){
		var maxModalHeight = windowHeight - 295;
	} else {
		var maxModalHeight = windowHeight;
	}

	jQuery('body input, body textarea, body select').blur();
	jQuery('body').addClass('booked-noScroll');
	jQuery('<div class="booked-modal bm-loading"><div class="bm-overlay"></div><div class="bm-window"><div style="height:100px"></div></div></div>').appendTo('body');
	jQuery('.booked-modal .bm-overlay').spin('booked_white');
	jQuery('.booked-modal .bm-window').css({'max-height':maxModalHeight+'px'});
}

var previousRealModalHeight = 100;

function resize_booked_modal(){

	var windowHeight = jQuery(window).height();
	var windowWidth = jQuery(window).width();

	var common43 = 43;

	if (jQuery('.booked-modal .bm-window .booked-scrollable').length){
		var realModalHeight = jQuery('.booked-modal .bm-window .booked-scrollable')[0].scrollHeight;

		if (realModalHeight < 100){
			realModalHeight = previousRealModalHeight;
		} else {
			previousRealModalHeight = realModalHeight;
		}

	} else {
		var realModalHeight = 0;
	}
	var minimumWindowHeight = realModalHeight + common43 + common43;
	var modalScrollableHeight = realModalHeight - common43;
	var maxModalHeight;
	var maxFormHeight;

	if (windowHeight < minimumWindowHeight){
		modalScrollableHeight = windowHeight - common43 - common43;
	} else {
		modalScrollableHeight = realModalHeight;
	}

	if (windowWidth > 720){
		maxModalHeight = modalScrollableHeight - 25;
		maxFormHeight = maxModalHeight - 15;
		var modalNegMargin = (maxModalHeight + 78) / 2;
	} else {
		maxModalHeight = windowHeight - common43;
		maxFormHeight = maxModalHeight - 60;
		var modalNegMargin = (maxModalHeight) / 2;
	}

	jQuery('.booked-modal').css({'margin-top':'-'+modalNegMargin+'px'});
	jQuery('.booked-modal .bm-window').css({'max-height':maxModalHeight+'px'});
	jQuery('.booked-modal .bm-window .booked-scrollable').css({'max-height':maxFormHeight+'px'});

}

function close_booked_modal(){
	var modal = jQuery('.booked-modal');
	modal.fadeOut(200);
	modal.addClass('bm-closing');
	jQuery('body').removeClass('booked-noScroll');
	setTimeout(function(){
		modal.remove();
	},300);
}

function init_tooltips(container){
	jQuery('.tooltipster').tooltipster({
		theme: 		'tooltipster-light',
		animation:	'grow',
		speed:		200,
		delay: 		50,
		offsetY:	-15
	});
}

// Function to adjust calendar sizing
function adjust_calendar_boxes(){
	jQuery('.booked-calendar').each(function(){

		var windowWidth = jQuery(window).width();
		var smallCalendar = jQuery(this).parents('.booked-calendar-wrap').hasClass('small');
		var boxesWidth = jQuery(this).find('tbody tr.week td').width();
		var calendarHeight = jQuery(this).height();
		boxesHeight = boxesWidth * 1;
		jQuery(this).find('tbody tr.week td').height(boxesHeight);
		jQuery(this).find('tbody tr.week td .date').css('line-height',boxesHeight+'px');
		jQuery(this).find('tbody tr.week td .date .number').css('line-height',boxesHeight+'px');
		if (smallCalendar || windowWidth < 720){
			jQuery(this).find('tbody tr.week td .date .number').css('line-height',boxesHeight+'px');
		} else {
			jQuery(this).find('tbody tr.week td .date .number').css('line-height','');
		}

		var calendarHeight = jQuery(this).height();
		jQuery(this).parent().height(calendarHeight);

	});
}

;( function( $ ) {

	'use strict';

	if ( typeof wpcf7 === 'undefined' || wpcf7 === null ) {
		return;
	}

	wpcf7 = $.extend( {
		cached: 0,
		inputs: []
	}, wpcf7 );

	$( function() {
		wpcf7.supportHtml5 = ( function() {
			var features = {};
			var input = document.createElement( 'input' );

			features.placeholder = 'placeholder' in input;

			var inputTypes = [ 'email', 'url', 'tel', 'number', 'range', 'date' ];

			$.each( inputTypes, function( index, value ) {
				input.setAttribute( 'type', value );
				features[ value ] = input.type !== 'text';
			} );

			return features;
		} )();

		$( 'div.wpcf7 > form' ).each( function() {
			var $form = $( this );
			wpcf7.initForm( $form );

			if ( wpcf7.cached ) {
				wpcf7.refill( $form );
			}
		} );
	} );

	wpcf7.getId = function( form ) {
		return parseInt( $( 'input[name="_wpcf7"]', form ).val(), 10 );
	};

	wpcf7.initForm = function( form ) {
		var $form = $( form );

		$form.submit( function( event ) {
			if ( typeof window.FormData !== 'function' ) {
				return;
			}

			wpcf7.submit( $form );
			event.preventDefault();
		} );

		$( '.wpcf7-submit', $form ).after( '<span class="ajax-loader"></span>' );

		wpcf7.toggleSubmit( $form );

		$form.on( 'click', '.wpcf7-acceptance', function() {
			wpcf7.toggleSubmit( $form );
		} );

		// Exclusive Checkbox
		$( '.wpcf7-exclusive-checkbox', $form ).on( 'click', 'input:checkbox', function() {
			var name = $( this ).attr( 'name' );
			$form.find( 'input:checkbox[name="' + name + '"]' ).not( this ).prop( 'checked', false );
		} );

		// Free Text Option for Checkboxes and Radio Buttons
		$( '.wpcf7-list-item.has-free-text', $form ).each( function() {
			var $freetext = $( ':input.wpcf7-free-text', this );
			var $wrap = $( this ).closest( '.wpcf7-form-control' );

			if ( $( ':checkbox, :radio', this ).is( ':checked' ) ) {
				$freetext.prop( 'disabled', false );
			} else {
				$freetext.prop( 'disabled', true );
			}

			$wrap.on( 'change', ':checkbox, :radio', function() {
				var $cb = $( '.has-free-text', $wrap ).find( ':checkbox, :radio' );

				if ( $cb.is( ':checked' ) ) {
					$freetext.prop( 'disabled', false ).focus();
				} else {
					$freetext.prop( 'disabled', true );
				}
			} );
		} );

		// Placeholder Fallback
		if ( ! wpcf7.supportHtml5.placeholder ) {
			$( '[placeholder]', $form ).each( function() {
				$( this ).val( $( this ).attr( 'placeholder' ) );
				$( this ).addClass( 'placeheld' );

				$( this ).focus( function() {
					if ( $( this ).hasClass( 'placeheld' ) ) {
						$( this ).val( '' ).removeClass( 'placeheld' );
					}
				} );

				$( this ).blur( function() {
					if ( '' === $( this ).val() ) {
						$( this ).val( $( this ).attr( 'placeholder' ) );
						$( this ).addClass( 'placeheld' );
					}
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.date ) {
			$form.find( 'input.wpcf7-date[type="date"]' ).each( function() {
				$( this ).datepicker( {
					dateFormat: 'yy-mm-dd',
					minDate: new Date( $( this ).attr( 'min' ) ),
					maxDate: new Date( $( this ).attr( 'max' ) )
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.number ) {
			$form.find( 'input.wpcf7-number[type="number"]' ).each( function() {
				$( this ).spinner( {
					min: $( this ).attr( 'min' ),
					max: $( this ).attr( 'max' ),
					step: $( this ).attr( 'step' )
				} );
			} );
		}

		// Character Count
		$( '.wpcf7-character-count', $form ).each( function() {
			var $count = $( this );
			var name = $count.attr( 'data-target-name' );
			var down = $count.hasClass( 'down' );
			var starting = parseInt( $count.attr( 'data-starting-value' ), 10 );
			var maximum = parseInt( $count.attr( 'data-maximum-value' ), 10 );
			var minimum = parseInt( $count.attr( 'data-minimum-value' ), 10 );

			var updateCount = function( target ) {
				var $target = $( target );
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr( 'data-current-value', count );
				$count.text( count );

				if ( maximum && maximum < length ) {
					$count.addClass( 'too-long' );
				} else {
					$count.removeClass( 'too-long' );
				}

				if ( minimum && length < minimum ) {
					$count.addClass( 'too-short' );
				} else {
					$count.removeClass( 'too-short' );
				}
			};

			$( ':input[name="' + name + '"]', $form ).each( function() {
				updateCount( this );

				$( this ).keyup( function() {
					updateCount( this );
				} );
			} );
		} );

		// URL Input Correction
		$form.on( 'change', '.wpcf7-validates-as-url', function() {
			var val = $.trim( $( this ).val() );

			if ( val
			&& ! val.match( /^[a-z][a-z0-9.+-]*:/i )
			&& -1 !== val.indexOf( '.' ) ) {
				val = val.replace( /^\/+/, '' );
				val = 'http://' + val;
			}

			$( this ).val( val );
		} );
	};

	wpcf7.submit = function( form ) {
		if ( typeof window.FormData !== 'function' ) {
			return;
		}

		var $form = $( form );

		$( '.ajax-loader', $form ).addClass( 'is-active' );

		$( '[placeholder].placeheld', $form ).each( function( i, n ) {
			$( n ).val( '' );
		} );

		wpcf7.clearResponse( $form );

		var formData = new FormData( $form.get( 0 ) );

		var detail = {
			id: $form.closest( 'div.wpcf7' ).attr( 'id' ),
			status: 'init',
			inputs: [],
			formData: formData
		};

		$.each( $form.serializeArray(), function( i, field ) {
			if ( '_wpcf7' == field.name ) {
				detail.contactFormId = field.value;
			} else if ( '_wpcf7_version' == field.name ) {
				detail.pluginVersion = field.value;
			} else if ( '_wpcf7_locale' == field.name ) {
				detail.contactFormLocale = field.value;
			} else if ( '_wpcf7_unit_tag' == field.name ) {
				detail.unitTag = field.value;
			} else if ( '_wpcf7_container_post' == field.name ) {
				detail.containerPostId = field.value;
			} else if ( field.name.match( /^_wpcf7_\w+_free_text_/ ) ) {
				var owner = field.name.replace( /^_wpcf7_\w+_free_text_/, '' );
				detail.inputs.push( {
					name: owner + '-free-text',
					value: field.value
				} );
			} else if ( field.name.match( /^_/ ) ) {
				// do nothing
			} else {
				detail.inputs.push( field );
			}
		} );

		wpcf7.triggerEvent( $form.closest( 'div.wpcf7' ), 'beforesubmit', detail );

		var ajaxSuccess = function( data, status, xhr, $form ) {
			detail.id = $( data.into ).attr( 'id' );
			detail.status = data.status;
			detail.apiResponse = data;

			var $message = $( '.wpcf7-response-output', $form );

			switch ( data.status ) {
				case 'validation_failed':
					$.each( data.invalidFields, function( i, n ) {
						$( n.into, $form ).each( function() {
							wpcf7.notValidTip( this, n.message );
							$( '.wpcf7-form-control', this ).addClass( 'wpcf7-not-valid' );
							$( '[aria-invalid]', this ).attr( 'aria-invalid', 'true' );
						} );
					} );

					$message.addClass( 'wpcf7-validation-errors' );
					$form.addClass( 'invalid' );

					wpcf7.triggerEvent( data.into, 'invalid', detail );
					break;
				case 'acceptance_missing':
					$message.addClass( 'wpcf7-acceptance-missing' );
					$form.addClass( 'unaccepted' );

					wpcf7.triggerEvent( data.into, 'unaccepted', detail );
					break;
				case 'spam':
					$message.addClass( 'wpcf7-spam-blocked' );
					$form.addClass( 'spam' );

					$( '[name="g-recaptcha-response"]', $form ).each( function() {
						if ( '' === $( this ).val() ) {
							var $recaptcha = $( this ).closest( '.wpcf7-form-control-wrap' );
							wpcf7.notValidTip( $recaptcha, wpcf7.recaptcha.messages.empty );
						}
					} );

					wpcf7.triggerEvent( data.into, 'spam', detail );
					break;
				case 'aborted':
					$message.addClass( 'wpcf7-aborted' );
					$form.addClass( 'aborted' );

					wpcf7.triggerEvent( data.into, 'aborted', detail );
					break;
				case 'mail_sent':
					$message.addClass( 'wpcf7-mail-sent-ok' );
					$form.addClass( 'sent' );

					wpcf7.triggerEvent( data.into, 'mailsent', detail );
					break;
				case 'mail_failed':
					$message.addClass( 'wpcf7-mail-sent-ng' );
					$form.addClass( 'failed' );

					wpcf7.triggerEvent( data.into, 'mailfailed', detail );
					break;
				default:
					var customStatusClass = 'custom-'
						+ data.status.replace( /[^0-9a-z]+/i, '-' );
					$message.addClass( 'wpcf7-' + customStatusClass );
					$form.addClass( customStatusClass );
			}

			wpcf7.refill( $form, data );

			wpcf7.triggerEvent( data.into, 'submit', detail );

			if ( 'mail_sent' == data.status ) {
				$form.each( function() {
					this.reset();
				} );

				wpcf7.toggleSubmit( $form );
			}

			$form.find( '[placeholder].placeheld' ).each( function( i, n ) {
				$( n ).val( $( n ).attr( 'placeholder' ) );
			} );

			$message.html( '' ).append( data.message ).slideDown( 'fast' );
			$message.attr( 'role', 'alert' );

			$( '.screen-reader-response', $form.closest( '.wpcf7' ) ).each( function() {
				var $response = $( this );
				$response.html( '' ).attr( 'role', '' ).append( data.message );

				if ( data.invalidFields ) {
					var $invalids = $( '<ul></ul>' );

					$.each( data.invalidFields, function( i, n ) {
						if ( n.idref ) {
							var $li = $( '<li></li>' ).append( $( '<a></a>' ).attr( 'href', '#' + n.idref ).append( n.message ) );
						} else {
							var $li = $( '<li></li>' ).append( n.message );
						}

						$invalids.append( $li );
					} );

					$response.append( $invalids );
				}

				$response.attr( 'role', 'alert' ).focus();
			} );
		};

		$.ajax( {
			type: 'POST',
			url: wpcf7.apiSettings.getRoute(
				'/contact-forms/' + wpcf7.getId( $form ) + '/feedback' ),
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		} ).done( function( data, status, xhr ) {
			ajaxSuccess( data, status, xhr, $form );
			$( '.ajax-loader', $form ).removeClass( 'is-active' );
		} ).fail( function( xhr, status, error ) {
			var $e = $( '<div class="ajax-error"></div>' ).text( error.message );
			$form.after( $e );
		} );
	};

	wpcf7.triggerEvent = function( target, name, detail ) {
		var $target = $( target );

		/* DOM event */
		var event = new CustomEvent( 'wpcf7' + name, {
			bubbles: true,
			detail: detail
		} );

		$target.get( 0 ).dispatchEvent( event );

		/* jQuery event */
		$target.trigger( 'wpcf7:' + name, detail );
		$target.trigger( name + '.wpcf7', detail ); // deprecated
	};

	wpcf7.toggleSubmit = function( form, state ) {
		var $form = $( form );
		var $submit = $( 'input:submit', $form );

		if ( typeof state !== 'undefined' ) {
			$submit.prop( 'disabled', ! state );
			return;
		}

		if ( $form.hasClass( 'wpcf7-acceptance-as-validation' ) ) {
			return;
		}

		$submit.prop( 'disabled', false );

		$( '.wpcf7-acceptance', $form ).each( function() {
			var $span = $( this );
			var $input = $( 'input:checkbox', $span );

			if ( ! $span.hasClass( 'optional' ) ) {
				if ( $span.hasClass( 'invert' ) && $input.is( ':checked' )
				|| ! $span.hasClass( 'invert' ) && ! $input.is( ':checked' ) ) {
					$submit.prop( 'disabled', true );
					return false;
				}
			}
		} );
	};

	wpcf7.notValidTip = function( target, message ) {
		var $target = $( target );
		$( '.wpcf7-not-valid-tip', $target ).remove();
		$( '<span role="alert" class="wpcf7-not-valid-tip"></span>' )
			.text( message ).appendTo( $target );

		if ( $target.is( '.use-floating-validation-tip *' ) ) {
			var fadeOut = function( target ) {
				$( target ).not( ':hidden' ).animate( {
					opacity: 0
				}, 'fast', function() {
					$( this ).css( { 'z-index': -100 } );
				} );
			};

			$target.on( 'mouseover', '.wpcf7-not-valid-tip', function() {
				fadeOut( this );
			} );

			$target.on( 'focus', ':input', function() {
				fadeOut( $( '.wpcf7-not-valid-tip', $target ) );
			} );
		}
	};

	wpcf7.refill = function( form, data ) {
		var $form = $( form );

		var refillCaptcha = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( 'img.wpcf7-captcha-' + i ).attr( 'src', n );
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec( n );
				$form.find( 'input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]' ).attr( 'value', match[ 1 ] );
			} );
		};

		var refillQuiz = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( ':input[name="' + i + '"]' ).siblings( 'span.wpcf7-quiz-label' ).text( n[ 0 ] );
				$form.find( 'input:hidden[name="_wpcf7_quiz_answer_' + i + '"]' ).attr( 'value', n[ 1 ] );
			} );
		};

		if ( typeof data === 'undefined' ) {
			$.ajax( {
				type: 'GET',
				url: wpcf7.apiSettings.getRoute(
					'/contact-forms/' + wpcf7.getId( $form ) + '/refill' ),
				beforeSend: function( xhr ) {
					var nonce = $form.find( ':input[name="_wpnonce"]' ).val();

					if ( nonce ) {
						xhr.setRequestHeader( 'X-WP-Nonce', nonce );
					}
				},
				dataType: 'json'
			} ).done( function( data, status, xhr ) {
				if ( data.captcha ) {
					refillCaptcha( $form, data.captcha );
				}

				if ( data.quiz ) {
					refillQuiz( $form, data.quiz );
				}
			} );

		} else {
			if ( data.captcha ) {
				refillCaptcha( $form, data.captcha );
			}

			if ( data.quiz ) {
				refillQuiz( $form, data.quiz );
			}
		}
	};

	wpcf7.clearResponse = function( form ) {
		var $form = $( form );
		$form.removeClass( 'invalid spam sent failed' );
		$form.siblings( '.screen-reader-response' ).html( '' ).attr( 'role', '' );

		$( '.wpcf7-not-valid-tip', $form ).remove();
		$( '[aria-invalid]', $form ).attr( 'aria-invalid', 'false' );
		$( '.wpcf7-form-control', $form ).removeClass( 'wpcf7-not-valid' );

		$( '.wpcf7-response-output', $form )
			.hide().empty().removeAttr( 'role' )
			.removeClass( 'wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked' );
	};

	wpcf7.apiSettings.getRoute = function( path ) {
		var url = wpcf7.apiSettings.root;

		url = url.replace(
			wpcf7.apiSettings.namespace,
			wpcf7.apiSettings.namespace + path );

		return url;
	};

} )( jQuery );

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
( function () {
	if ( typeof window.CustomEvent === "function" ) return false;

	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event,
			params.bubbles, params.cancelable, params.detail );
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
} )();

;jQuery(function(e){if("undefined"==typeof wc_add_to_cart_params)return!1;var t=function(){e(document.body).on("click",".add_to_cart_button",this.onAddToCart).on("click",".remove_from_cart_button",this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart",this.updateCartPage).on("added_to_cart removed_from_cart",this.updateFragments)};t.prototype.onAddToCart=function(t){var a=e(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;t.preventDefault(),a.removeClass("added"),a.addClass("loading");var o={};e.each(a.data(),function(t,a){o[t]=a}),e(document.body).trigger("adding_to_cart",[a,o]),e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),o,function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?e(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)})}},t.prototype.onRemoveFromCart=function(t){var a=e(this),o=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),o.block({message:null,overlayCSS:{opacity:.6}}),e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),{cart_item_key:a.data("cart_item_key")},function(t){t&&t.fragments?e(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash]):window.location=a.attr("href")}).fail(function(){window.location=a.attr("href")})},t.prototype.updateButton=function(t,a,o,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),r.addClass("added"),wc_add_to_cart_params.is_cart||0!==r.parent().find(".added_to_cart").length||r.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),e(document.body).trigger("wc_cart_button_updated",[r]))},t.prototype.updateCartPage=function(){var t=window.location.toString().replace("add-to-cart","added-to-cart");e(".shop_table.cart").load(t+" .shop_table.cart:eq(0) > *",function(){e(".shop_table.cart").stop(!0).css("opacity","1").unblock(),e(document.body).trigger("cart_page_refreshed")}),e(".cart_totals").load(t+" .cart_totals:eq(0) > *",function(){e(".cart_totals").stop(!0).css("opacity","1").unblock(),e(document.body).trigger("cart_totals_refreshed")})},t.prototype.updateFragments=function(t,a){a&&(e.each(a,function(t){e(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),e.each(a,function(t,a){e(t).replaceWith(a),e(t).stop(!0).css("opacity","1").unblock()}),e(document.body).trigger("wc_fragments_loaded"))},new t});
;/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&n.message!==undefined?n.message:undefined;if(!(n=e.extend({},e.blockUI.defaults,n||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=y===undefined?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=m,g.parent=m.parentNode,g.display=m.style.display,g.position=m.style.position,g.parent&&g.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var v,I,w,U,x=n.baseZ;v=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&v.css("opacity",0);var C=[v,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=a(t,"borderTopWidth"),T=a(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(n.css&&n.css.top?parseInt(n.css.top,10):0)+') + "px"';o.setExpression("top",i)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&v.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):d(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,d=e(t),a=d.data("blockUI.history"),c=d.data("blockUI.timeout");c&&(clearTimeout(c),d.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=d.data("blockUI.onUnblock"),d.removeData("blockUI.onUnblock"));var r;r=l?e(document.body).children().filter(".blockUI").add("body > .blockUI"):d.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0==--s&&n(r,a,o,t)})):n(r,a,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(d,n,s):e(document).unbind(d,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,d=e(t.target);return d.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),d.parents("div."+s.blockMsgClass).length>0||0===d.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[!0===e?b.length-1:0];t&&t.focus()}}function d(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-a(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-a(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function a(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
;jQuery(function(i){i(".woocommerce-ordering").on("change","select.orderby",function(){i(this).closest("form").submit()}),i("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(i(this).attr("min"));0<=o&&parseFloat(i(this).val())<o&&i(this).val(o)}),i(".woocommerce-store-notice__dismiss-link").click(function(){Cookies.set("store_notice","hidden",{path:"/"}),i(".woocommerce-store-notice").hide()}),"hidden"===Cookies.get("store_notice")?i(".woocommerce-store-notice").hide():i(".woocommerce-store-notice").show(),i(document.body).on("click",function(){i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),i(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),i(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=i(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=i(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),i.scroll_to_notices=function(o){var e="scrollBehavior"in document.documentElement.style;o.length&&(e?o[0].scrollIntoView({behavior:"smooth",block:"center"}):i("html, body").animate({scrollTop:o.offset().top-100},1e3))}});
;jQuery(function(n){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(e){e&&e.fragments&&(n.each(e.fragments,function(e,t){n(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),n(document.body).trigger("wc_fragments_refreshed"))}};function r(){n.ajax(e)}if(t){var i=null;n(document.body).on("wc_fragment_refresh updated_wc_div",function(){r()}),n(document.body).on("added_to_cart removed_from_cart",function(e,t,n){var r=sessionStorage.getItem(o);null!==r&&r!==undefined&&""!==r||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(n)}),n(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(r,864e5)}),n(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&r()}),n(window).on("pageshow",function(e){e.originalEvent.persisted&&(n(".widget_shopping_cart_content").empty(),n(document.body).trigger("wc_fragment_refresh"))});try{var c=n.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,f=(new Date).getTime();if(d<f)throw"Fragment expired";i=setTimeout(r,d-f)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";n.each(c,function(e,t){n(e).replaceWith(t)}),n(document.body).trigger("wc_fragments_loaded")}catch(w){r()}}else r();0<Cookies.get("woocommerce_items_in_cart")?n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),n(document.body).on("adding_to_cart",function(){n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});
;(function($) {
    'use strict';
    window.dahz = window.dahz || {};

    dahz.stickyHeader = {
        set: function(options) {
            _.extend(
                dahz.stickyHeader,
                _.pick(
                    options || {},
                    'elementDesktop',
                    'elementMobile',
                    'offsetTop',
                    'offsetTopMobile',
                    'offsetBottom',
                    'edgeY',
                    'firstWindowWidth',
					'framedWidth',
                    'headerOffsetTop'
                )
            );
        },
        init: function() {
			
			var defaultOffset = $( '#de-header-horizontal-desktop .de-header__sticky--wrapper' ).data( 'header-sticky-offset' );

            dahz.stickyHeader.set({
                elementDesktop: $( '#de-header-horizontal-desktop .de-header__sticky--wrapper' ),
                elementMobile: $('#de-header-horizontal-mobile .de-header__sticky--wrapper'),
                offsetTop: $('#wpadminbar').height(),
                offsetTopMobile: $(window).outerWidth() > 600 ? $('#wpadminbar').height() : 0,
                offsetBottom: $(window).height(),
                edgeY: 100,
                firstWindowWidth: $(window).outerWidth() > 600 ? 'desktop' : 'mobile',
				framedWidth: $(window).outerWidth() >= 960 ? typeof defaultOffset == 'number' ? defaultOffset : 0 : 0,
                headerOffsetTop: $('#de-site-header').length ? $('#de-site-header').offset().top : 0
            });
            dahz.stickyHeader.sticky(dahz.stickyHeader.elementDesktop, 'desktop');
            dahz.stickyHeader.sticky(dahz.stickyHeader.elementMobile, 'mobile');
            $('.de-header__sticky--wrapper').off('active');
            $('.de-header__sticky--wrapper').off('inactive');
            $('.de-header__sticky--wrapper').on('active', dahz.stickyHeader.onActive);
            $('.de-header__sticky--wrapper').on('inactive', dahz.stickyHeader.onInactive);

        },
        onActive: function() {
            if (typeof $('#de-header-horizontal').data('transparency') !== 'undefined') {
                $('#de-header-horizontal')
                    .addClass('no-transparency')
                    .removeClass($('#de-header-horizontal').data('transparency'));
            }
            if (
                typeof $(this).data('header-sticky-box-shadow') !== 'undefined' &&
                $(this).data('header-sticky-box-shadow') !== ''
            ) {
                $(this).addClass($(this).data('header-sticky-box-shadow'));
            }
        },
        onInactive: function() {
            if (typeof $('#de-header-horizontal').data('transparency') !== 'undefined') {
                $('#de-header-horizontal')
                    .removeClass('no-transparency')
                    .addClass($('#de-header-horizontal').data('transparency'));
            }
            if (
                typeof $(this).data('header-sticky-box-shadow') !== 'undefined' &&
                $(this).data('header-sticky-box-shadow') !== ''
            ) {
                $(this).removeClass($(this).data('header-sticky-box-shadow'));
            }
        },
        sticky: function($el, type) {

            var offsetTop = 0

            if (type == 'mobile') {
                offsetTop = dahz.stickyHeader.offsetTopMobile;
                dahz.stickyHeader.set({
                    offsetTopMobile: dahz.stickyHeader.offsetTopMobile + $($el).outerHeight()
                });
            } else {
                offsetTop = dahz.stickyHeader.offsetTop;
                dahz.stickyHeader.set({
                    offsetTop: dahz.stickyHeader.offsetTop + $($el).outerHeight()
                });
            }

            UIkit.sticky($el, {
                'offset': ( offsetTop + dahz.stickyHeader.framedWidth ),
                'top': ( ( $('#de-site-header').outerHeight() + dahz.stickyHeader.edgeY ) + ( $(window).outerHeight() ) ),
                'animation': 'uk-animation-slide-top',
                'cls-active': 'no-transparency',
            });
        },
    };

    dahz.wishlist = {
        init: function() {
            dahz.wishlist.set({
                totalItemContainer: $('.de-wishlist__total-item', $('[data-item-id="wishlist"]')),
                wishlistButton: $('.de-header__wishlist-btn', $('[data-item-id="wishlist"]'))
            });
            $(document).on('added_to_wishlist removed_from_wishlist', function() {
                dahz.wishlist.updateCount();
            });
        },
        set: function(options) {
            _.extend(
                dahz.wishlist,
                _.pick(
                    options || {},
                    'totalItemContainer',
                    'wishlistButton'
                )
            );
        },
        updateCount: function() {
            $.ajax({
                url: dahzFramework.ajaxURL,
                async: true,
                beforeSend: function() {
                    dahz.wishlist.wishlistButton.append('<div class="de-header__wishlist-btn--overlay uk-overlay-default uk-position-cover"><div class="uk-position-center" uk-spinner></div></div>');
                },
                data: {
                    action: 'dahz_framework_update_wishlist_count'
                },
                error: function() {
                    $('.de-header__wishlist-btn--overlay', dahz.wishlist.wishlistButton).remove();
                },
                dataType: 'json',
                success: function(data) {
                    $('.de-header__wishlist-btn--overlay', dahz.wishlist.wishlistButton).remove();
                    if (data.count > 0) {
                        dahz.wishlist.wishlistButton.removeClass('de-header__wishlist--empty');
                        dahz.wishlist.totalItemContainer.html(data.count);
                    } else {
                        dahz.wishlist.totalItemContainer.html('');
                        dahz.wishlist.wishlistButton.addClass('de-header__wishlist--empty');
                    }
                },
            });
        }
    };

    dahz.notices = {
        statuses: {
            error: 'danger',
            success: 'success',
            notice: 'warning'
        },
        positions: {
            error: 'top-right',
            success: 'top-right',
            notice: 'top-right'
        },
        init: function() {
            dahz.notices.set({
                $el: $('.de-notices'),
            });
            dahz.notices.show();
        },
        set: function(options) {
            _.extend(
                dahz.notices,
                _.pick(
                    options || {},
                    '$el'
                )
            );
        },
        show: function() {
            dahz.notices.$el.each(dahz.notices.showNotices);
        },
        showNotices: function(i, $el) {
            var status = $($el).data('notices-type');
            UIkit.notification({
                message: $($el).html(),
                status: dahz.notices.statuses[status],
                pos: dahz.notices.positions[status],
                timeout: 3000
            });
            $($el).remove();
        }
    };

    dahz.mobileMenu = {
        init: function() {
            dahz.mobileMenu.set({
                body: $('body')
            });
            $('#header-mobile-menu').on('shown', dahz.mobileMenu.lazyMenu);
        },
        set: function(options) {
            _.extend(
                dahz.mobileMenu,
                _.pick(
                    options || {},
                    'body'
                )
            );
        },
        renderMenu: function(data, $container) {
            $container.html(data).promise().done(function() {
                $(document).trigger('dahz_mobile_menu_loaded');
            });
        },
        lazyMenu: function() {
            var $container = $('.header-mobile-menu__container--content', $(this));
            if (!$container.data('mobile-menu-is-loaded')) {
                $.ajax({
                    url: dahzFramework.ajaxURL,
                    type: 'POST',
                    async: true,
                    beforeSend: function() {
                        $container.data('mobile-menu-is-loaded', true);
                        $container.append('<div class="header-mobile-menu__container--content--overlay uk-overlay-default uk-position-cover"><div class="uk-position-center" uk-spinner></div></div>');
                    },
                    error: function() {
                        $container.data('mobile-menu-is-loaded', false);
                    },
                    complete: function() {
                        $('.header-mobile-menu__container--content--overlay', $container).remove();
                    },
                    data: {
                        action: 'dahz_framework_render_mobile_menu_elements'
                    },
                    success: function(data) {
                        _.defer(dahz.mobileMenu.renderMenu, data, $container);
                    }
                });
            }
        },
    };

    dahz.share = {
        popup: {
            width: 600,
            height: 450
        },
        init: function() {
            $('body').on('click', 'a.ds-social-share', dahz.share.onClick);
        },
        onClick: function() {
            dahz.share.popup.top = ($(window).height() / 2) - (dahz.share.popup.height / 2);
            dahz.share.popup.left = ($(window).width() / 2) - (dahz.share.popup.width / 2);
            window.open(this.href, 'targetWindow', "\n toolbar=no,\n location=no,\n status=no,\n menubar=no,\n scrollbars=yes,\n resizable=yes,\n left=" + dahz.share.popup.left + ",\n top=" + dahz.share.popup.top + ",\n width=" + dahz.share.popup.width + ",\n height=" + dahz.share.popup.height + "\n");
            return false;
        }
    };

    dahz.backToTop = {
        scrollTop: 0,
        init: function() {
            if ($('body').hasClass('enable-back-to-top')) {
                $(window).on('scroll', dahz.backToTop.onScroll);
            }
        },
        onScroll: function() {

            dahz.backToTop.scrollTop = $(window).scrollTop();

            if (dahz.backToTop.scrollTop > 500) {
                $('.de-back-to-top').removeClass('uk-hidden uk-animation-fade uk-animation-reverse');
                $('.de-back-to-top').addClass('uk-animation-slide-right-small');
            } else {
                $('.de-back-to-top').addClass('uk-animation-slide-right-small uk-animation-fade uk-animation-reverse');
                $('.de-back-to-top').removeClass('uk-animation-slide-right-small');
            }

        }
    };

    dahz.wooPriceSlider = {
        init: function() {
            $(".price_slider").on("slidechange", dahz.wooPriceSlider.onChange);
        },
        onChange: function() {
            $(this).parents('form').trigger('submit');
        }
    };

    dahz.tableResponsive = {
        init: function() {
            $("table").wrap('<div class="uk-overflow-auto></div"');
        },
    };

    dahz.drop = {
        getBottomPosition: function($el, dataContainer) {
            var $parentMenu,
                positionTop;
			switch( dataContainer ){
				case "auto":
					$parentMenu = $el.parents('.main-menu-item');
					break;
				case "row":
					$parentMenu = $el.parents('.de-header__row');
					break;
				case "container":
					$parentMenu = $el.parents('.uk-container');
					break;
			}
			
			positionTop = $parentMenu.length ? $parentMenu.position().top : 0;
			
            return positionTop + $parentMenu.outerHeight() + parseInt($parentMenu.css('margin-top'));
        },
        getboundaryHeight: function($boundary) {
            var positionTop = $boundary.length ? $boundary.position().top : 0;
            return positionTop + $boundary.outerHeight()
        },
        getOffset: function($el, $boundary, dataContainer) {
            return dahz.drop.getboundaryHeight($boundary) - dahz.drop.getBottomPosition( $el, dataContainer );
        },
        init: function() {
            $('[data-dahz-drop]').each(function() {
                var $this = $(this),
                    dataUKDrop = $this.data('dahz-drop'),
					dataContainer = '';
                if ( ! dataUKDrop.boundaryAlign ) {
                    dataUKDrop.offset = dahz.drop.getOffset( $this, $this.parents('.de-header__section'), 'auto' );
                } else if( dataUKDrop.boundaryAlign && dataUKDrop.pos !== 'bottom-justify' ){
					dataContainer = $this.data('container');
					dataUKDrop.offset = dahz.drop.getOffset( $this, $this.parents('.de-header__section'), dataContainer );
				}
                UIkit.drop($this, dataUKDrop);
            });
        }
    };

    dahz.shop = {

        singleProduct: function() {
            $('.ds-single').each( function() {
             
                $('.woocommerce-product-gallery__trigger', this).addClass('uk-icon');

                UIkit.icon( $('.woocommerce-product-gallery__trigger', this), { icon : 'expand'});
                UIkit.icon( $('.woocommerce-product-gallery__trigger--popup-video', this), { icon : 'play'});

                UIkit.modal( $('#modal-media-video', this));
                
                UIkit.tooltip($('.tooltip', this), { pos: 'top-left' });

            });
        }

    };

    dahz.shopArchive = {
        init: function() {
            $('.de-product .de-product__item').each(function() {
                var getOuterHeightThumbAction = $('.de-product-thumbnail__action--add-to-cart a', this).width();
                var getOuterHeightThumbActionSvg = $('.de-product-thumbnail__action--add-to-cart a svg', this).width();
                var getOuterHeightThumbActionWish = $('.yith-wcwl-add-button a', this).width();
                var getOuterHeightThumbActionWishSVG = $('.yith-wcwl-add-button a svg', this).width();

                if ($('.yith-wcwl-wishlistexistsbrowse.show', this).length) {
                    var getOuterHeightThumbActionWish = $('.yith-wcwl-wishlistexistsbrowse.show a').width();
                    var getOuterHeightThumbActionWishSVG = $('.yith-wcwl-wishlistexistsbrowse.show a svg').width();
                } else if ($('.yith-wcwl-wishlistaddedbrowse.show', this).length) {
                    var getOuterHeightThumbActionWish = $('.yith-wcwl-wishlistaddedbrowse.show a').width();
                    var getOuterHeightThumbActionWishSVG = $('.yith-wcwl-wishlistaddedbrowse.show a svg').width();
                }

                $('.yith-wcwl-add-to-wishlist', this).css('right', -(getOuterHeightThumbActionWish - (getOuterHeightThumbActionWishSVG - 2)));
                $('.de-product-thumbnail__action--add-to-cart', this).css('right', -(getOuterHeightThumbAction - (getOuterHeightThumbActionSvg - 2)));
            });
        },
		updateButton:function( e, fragments, cart_hash, $button ){
			$button = typeof $button === 'undefined' ? false : $button;

			if ( $button && typeof wc_add_to_cart_params !== 'undefined' ) {

				if ( ! wc_add_to_cart_params.is_cart && $button.parent().find( '.added_to_cart' ).length === 0 ) {
					$button.attr( 'href', wc_add_to_cart_params.cart_url );
					$button.removeClass( 'ajax_add_to_cart' );
					$( 'span', $button ).html( wc_add_to_cart_params.i18n_view_cart );
				}

			}
		}
    };
	
	dahz.headerTransparent = {
		init:function(){
			
			var $headerTransparent = $( '#de-header-horizontal' ),
				$pageTitle = $( '.de-page-title' ),
				paddingPageTitle = 0;
			
			if( typeof $headerTransparent.data( 'transparency' ) !== 'undefined' && typeof $pageTitle !== 'undefined'  ){
				
				$pageTitle = $( '.de-page-title' );
				
				if( typeof $pageTitle.data( 'padding-default' ) == 'undefined' ){
					$pageTitle.data( 'padding-default', $pageTitle.css( 'padding-top' ) );
				}
				
				if( $( '#de-header-horizontal-desktop', $headerTransparent ).is( ':visible' ) ){
					
					paddingPageTitle = parseInt( $pageTitle.data( 'padding-default' ) ) + $( '#de-header-horizontal-desktop', $headerTransparent ).outerHeight();
				
					$pageTitle.css('padding-top',paddingPageTitle);
				
				} else {
					
					$pageTitle.css('padding-top','');
					
				}
				
			}
		}
	};

    dahz.widget = {

        calendar: function() {
            $('.sidebar').each(function() {
                if ( $( '.widget_calendar tfoot td a', this ).length == 0 ) {
                    $( '.widget_calendar tfoot' ).css( "display", "none" );
                }
            });
        }

    };
    
    $(document).on('ready', function() {
		
		dahz.headerTransparent.init();
		
        dahz.tableResponsive.init();
        
        dahz.drop.init();
        
        dahz.shop.singleProduct();
        
        dahz.widget.calendar();

        var docWidth = document.documentElement.offsetWidth;

        //dahz.notices.init();

        dahz.mobileMenu.init();

        dahz.share.init();

        dahz.backToTop.init();

        dahz.wooPriceSlider.init();

        $('iframe').each(function() {
            if ($(this).parents('.ds-video-cover').length) {
                UIkit.cover(this);
            }
        });

        dahz.stickyHeader.init();

        $('.footer-section__toggle-content').on('show', function() {
            $('.footer-section__toggle-content--btn', $(this).parents('.de-footer__section')).addClass('active');
        });
        $('.footer-section__toggle-content').on('hide', function() {
            $('.footer-section__toggle-content--btn', $(this).parents('.de-footer__section')).removeClass('active');
        });
        if ($('[data-item-id="wishlist"]').length) {
            dahz.wishlist.init();
        }


        $(window).on('resize', function() {
			_.defer(dahz.headerTransparent.init);
            _.defer(dahz.stickyHeader.init);
            _.defer(dahz.drop.init);
            dahz.shopArchive.init();
        });
    });

    $(document).on('ajaxComplete', function() {
       // dahz.notices.init();
    });
	
	$( document.body ).on( 'added_to_cart', dahz.shopArchive.updateButton );

    $(document).on('content_block_ready', function() {
        if (typeof dahz.stickyHeader == 'undefined' && dahz.stickyHeader.headerOffsetTop == 'undefined') return;
        var headerOffsetTop = $('#de-site-header').length ? $('#de-site-header').offset().top : 0;
        if (headerOffsetTop > dahz.stickyHeader.headerOffsetTop) {
            //dahz.stickyHeader.init();
        }
    });

    $(document).on('added_to_cart', function(e, fragments, hash, $button) {
        if (typeof fragments !== 'undefined' && typeof fragments.notice !== 'undefined') {
            //dahz.notices.showNotices(0, $(fragments.notice));
        }
    });

    $(window).on('load', function() {
        dahz.shopArchive.init();
    });

    $(document).ajaxComplete(function() {
        dahz.shopArchive.init();
    });
})(jQuery);
;!function(t){"use strict";window.dahzWidget={navMenu:function(o){this.$target=o,this.$target.addClass("dahz-initialized"),t("li.menu-item-has-children > span",this.$target).on("click",{_this:this},this.navOpener)},woocommerceTitle:function(t){this.$target=t,this.$target.addClass("dahz-initialized")},productCategories:function(t){this.$target=t,this.$target.addClass("dahz-initialized"),this.init()}},window.InitDahzWidget=function(){var o,e,n,i,a,r;t(".widget_nav_menu:not(.dahz-initialized)").each(function(){t(this).dahzWidgetNav()}),t(".widget.woocommerce:not(.dahz-initialized)").each(function(){t(".widget-title",this).length&&t(this).dahzWidgetWooTitle()}),t(".widget_product_categories").each(function(){t(this).dahzWidgetProductCategories()}),t(".woocs_converter_shortcode").length&&(t(".woocs_converter_shortcode_button").off("click"),t(".woocs_converter_shortcode_button").on("click",function(){return o=t(this).parent(".woocs_converter_shortcode").find(".woocs_converter_shortcode_amount").eq(0).val(),e=t(this).parent(".woocs_converter_shortcode").find(".woocs_converter_shortcode_from").eq(0).val(),n=t(this).parent(".woocs_converter_shortcode").find(".woocs_converter_shortcode_to").eq(0).val(),i=t(this).parent(".woocs_converter_shortcode").find(".woocs_converter_shortcode_precision").eq(0).val(),a=t(this).parent(".woocs_converter_shortcode").find(".woocs_converter_shortcode_results").eq(0),t(a).val(woocs_lang_loading+" ..."),r={action:"woocs_convert_currency",amount:o,from:e,to:n,precision:i},t.post(woocs_ajaxurl,r,function(o){t(a).val(o)}),!1}))},dahzWidget.navMenu.prototype.navOpener=function(o){o.data._this;var e=t(this);o.preventDefault(),e.hasClass("df-arrow-up")?(e.next(".sub-menu").slideUp("fast"),e.removeClass("df-arrow-up"),e.addClass("df-arrow-down")):(e.next(".sub-menu").slideDown("fast",function(){t(window).trigger("dahzForceLazyload")}),e.removeClass("df-arrow-down"),e.addClass("df-arrow-up"))},dahzWidget.woocommerceTitle.prototype.titleOpener=function(o){t(this).toggleClass("active"),t(this).next().slideToggle("200",function(){t(window).trigger("dahzForceLazyload")}).css("display","flex")},dahzWidget.productCategories.prototype.init=function(o){var e=this,n=t(".product-categories .cat-item.cat-parent",e.$target);n.find(".children").length&&(n.find(".count").length?t(".count",n).append('<span class="cat-toggle"><span data-uk-icon="df_dots-horizontal" class="df-arrow-down"></span></span>').promise().done(function(){t(".count",n).on("click",{_this:e},e.togglePCatList)}):n.append('<span class="count"><span class="cat-toggle"><span data-uk-icon="df_dots-horizontal" class="df-arrow-down"></span></span></span>').promise().done(function(){t(".count",n).on("click",{_this:e},e.togglePCatList)}))},dahzWidget.productCategories.prototype.togglePCatList=function(o){t(window).trigger("dahzForceLazyload"),t(this).siblings(".children").slideToggle("200",function(){t(window).trigger("dahzForceLazyload")}).toggleClass("active")},t.fn.dahzWidgetNav=function(){return new dahzWidget.navMenu(this),this},t.fn.dahzWidgetWooTitle=function(){return new dahzWidget.woocommerceTitle(this),this},t.fn.dahzWidgetProductCategories=function(){return new dahzWidget.productCategories(this),this},t(document).on("ready",function(){InitDahzWidget()}),t(document).on("footer_widget_1_ready",function(){InitDahzWidget()}),t(document).on("footer_widget_2_ready",function(){InitDahzWidget()}),t(document).on("footer_widget_3_ready",function(){InitDahzWidget()}),t(document).on("footer_widget_4_ready",function(){InitDahzWidget()})}(jQuery);
;!function(e,t,n,o){function a(e,t){return e[t]===o?v[t]:e[t]}function i(){var e=t.pageYOffset;return e===o?h.scrollTop:e}function r(e,t){var n=v["on"+e];n&&(p(n)?n.call(t[0]):(n.addClass&&t.addClass(n.addClass),n.removeClass&&t.removeClass(n.removeClass))),t.trigger("lazy"+e,[t]),c()}function l(t){r(t.type,e(this).off(g,l))}function s(n){if(E.length){n=n||v.forceLoad,b=1/0;var o,a,s=i(),d=t.innerHeight||h.clientHeight,c=t.innerWidth||h.clientWidth;for(o=0,a=E.length;o<a;o++){var f,u=E[o],m=u[0],y=u[A],C=!1,z=n;if(w(h,m)){if(n||!y.visibleOnly||m.offsetWidth||m.offsetHeight){if(!z){var I=m.getBoundingClientRect(),T=y.edgeX,B=y.edgeY;z=(f=I.top+s-B-d)<=s&&I.bottom>-B&&I.left<=c+T&&I.right>-T}if(z){r("show",u);var L=y.srcAttr,X=p(L)?L(u):m.getAttribute(L);X&&(u.on(g,l),m.src=X),C=!0}else f<b&&(b=f)}}else C=!0;C&&(E.splice(o--,1),a--)}a||r("complete",e(h))}}function d(){I>1?(I=1,s(),setTimeout(d,v.throttle)):I=0}function c(e){E.length&&(e&&"scroll"===e.type&&e.currentTarget===t&&b>=i()||(I||setTimeout(d,0),I=2))}function f(){y.lazyLoadXT()}function u(){s(!0)}var A="lazyLoadXT",g="load error",h=n.documentElement||n.body,v={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:50,forceLoad:t.onscroll===o||!!t.operamini||!h.getBoundingClientRect,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:"lazy-hidden"},onload:{removeClass:"lazy-hidden",addClass:"lazy-loaded"},onerror:{removeClass:"lazy-hidden"},checkDuplicates:!0},m={srcAttr:"data-src",edgeX:500,edgeY:500,visibleOnly:!0},y=e(t),p=e.isFunction,C=e.extend,z=e.data||function(t,n){return e(t).data(n)},w=e.contains||function(e,t){for(;t=t.parentNode;)if(t===e)return!0;return!1},E=[],b=0,I=0;e[A]=C(v,m,e[A]),e.fn[A]=function(n){var o,i=a(n=n||{},"blankImage"),l=a(n,"checkDuplicates"),s=a(n,"scrollContainer"),d={};e(s).on("scroll",c);for(o in m)d[o]=a(n,o);return this.each(function(o,a){if(a===t)e(v.selector).lazyLoadXT(n);else{if(l&&z(a,"lazied"))return;var s=e(a).data("lazied",1);i&&"IMG"===a.tagName&&!a.src&&(a.src=i),s[A]=C({},d),r("init",s),E.push(s)}})},e(n).ready(function(){r("start",y),y.on(v.loadEvent,f).on(v.updateEvent,c).on(v.forceEvent,u),e(n).on(v.updateEvent,c),v.autoInit&&f()})}(window.jQuery||window.Zepto||window.$,window,document);
;(function ($) {
	"use strict";
	window.dahz = window.dahz || {};

	dahz.blogSingle = {
		init: function(){
			dahz.blogSingle.set({
				$relatedItemContainer : $('[data-single-related-is-loaded="false"]'),
				$relatedContainer : $( '.ds-single__section-related' )
			});
			dahz.blogSingle.lazyRelated();			
		},
		set: function( options ){
			_.extend(
				dahz.blogSingle, 
				_.pick(
					options || {}, 
					'$relatedItemContainer',
					'$relatedItem',
					'$relatedContainer'
				)
			);
			dahz.blogSingle.relatedSlideToShow = 3;
		},
		renderRelated: function( data ){
			dahz.blogSingle.$relatedItemContainer.html( data.related_loop_html ).promise().done( function() {
				dahz.blogSingle.set({
					$relatedItem : $( '.de-related-post__item', dahz.blogSingle.$relatedItemContainer ),
					$relatedContainer : $( '.ds-single__section-related' )
				});
			});
		},
		getRelated : function(){
			$.ajax({
				url: dahzFramework.ajaxURL,
				beforeSend:function(){
					dahz.blogSingle.$relatedItemContainer.attr( 'data-single-related-is-loaded', 'true' );
					dahz.blogSingle.$relatedItemContainer.append( '<div class="uk-height-small"><div class="de-sc-lazy-load--overlay uk-overlay-default uk-position-cover"><div class="uk-position-center" uk-spinner></div></div></div>' );
					dahz.blogSingle.set({
						$relatedItemContainer : $('[data-single-related-is-loaded="true"]')
					});
				},
				type: 'POST',
				data: {
					action: 'dahz_framework_blog_single_lazy_related',
					id: dahz.blogSingle.$relatedItemContainer.data( 'id' ),
				},
				complete:function(){
					$( '.de-sc-lazy-load--overlay', dahz.blogSingle.$relatedItemContainer ).remove();
				},
				dataType:'json',
				success: function success(data) {
					_.defer( dahz.blogSingle.renderRelated, data );
				}
			});
		},
		lazyRelated: function(){
			UIkit.scrollspy( dahz.blogSingle.$relatedItemContainer, {});
			dahz.blogSingle.$relatedItemContainer.on( 'inview', dahz.blogSingle.getRelated );
		}
	};
	$( document ).on( 'ready', dahz.blogSingle.init );
	
})(jQuery);
;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
;!function(a){"use strict";window.dahz=window.dahz||{},dahz.headerCart={init:function(){dahz.headerCart.set({miniCart:a(".ds-mini-cart__item"),miniCartContainer:a(".de-header__mini-cart-container")}),a(document).on("wc_fragments_loaded",dahz.headerCart.loadMiniCart),a(document).on("wc_fragments_refreshed",dahz.headerCart.loadMiniCart),a(document).on("dahz_mobile_menu_loaded",dahz.headerCart.loadMiniCart)},loadMiniCart:function(){dahz.headerCart.miniCartContainer.attr("data-mini-cart-is-loaded","false"),dahz.headerCart.lazyCart()},set:function(a){_.extend(dahz.headerCart,_.pick(a||{},"miniCart","miniCartContainer"))},decodeUrlParameter:function(a){return decodeURIComponent((a+"").replace(/\+/g,"%20"))},renderCart:function(e){var t=a(".de-mini-cart__item-outer-container",a(e)),r="",i="";a(".de-header__mini-cart-btn--overlay",a(".de-header__mini-cart-btn")).remove(),t.length&&!t.hasClass("de-mini-cart__item-outer-container--empty")?(r=dahz.headerCart.decodeUrlParameter(t.data("total-price")),i=t.data("total-items"),a(".de-header__mini-cart-btn .de-cart__total-price").html(r),a(".de-header__mini-cart-btn .de-cart__total-item").html(i),a(".de-header__mini-cart-btn").removeClass("de-header__mini-cart--empty")):(a(".de-header__mini-cart-btn .de-cart__total-price").html(""),a(".de-header__mini-cart-btn .de-cart__total-item").html(""),a(".de-header__mini-cart-btn").addClass("de-header__mini-cart--empty")),dahz.headerCart.miniCartContainer.html(e).promise().done(function(){a(document).trigger("dahz_mini_cart_ready")})},lazyCart:function(){"false"===dahz.headerCart.miniCartContainer.attr("data-mini-cart-is-loaded")&&a.ajax({url:dahzFramework.ajaxURL,type:"POST",async:!0,beforeSend:function(){dahz.headerCart.miniCartContainer.attr("data-mini-cart-is-loaded","true"),a(".de-header__mini-cart-btn").append('<div class="de-header__mini-cart-btn--overlay uk-overlay-default uk-position-cover"><div class="uk-position-center" uk-spinner></div></div>')},error:function(){dahz.headerCart.miniCartContainer.attr("data-mini-cart-is-loaded","false"),a(".de-header__mini-cart-btn--overlay",a(".de-header__mini-cart-btn")).remove()},data:{action:"dahz_framework_header_lazy_mini_cart"},success:function(a){_.defer(dahz.headerCart.renderCart,a)}})}},dahz.headerCart.init()}(jQuery);
;!function(e){"use strict";window.dahz=window.dahz||{},dahz.headerSearch={init:_.once(function(a){dahz.headerSearch.set({modal:a,input:e('input[name="s"]',a),loader:e("[data-uk-spinner]",a),result:e(".de-header-search__result",a)}),dahz.headerSearch.input.focus(),dahz.headerSearch.listener(),dahz.headerSearch.modal.on("hide",this.searchFlush)}),set:function(e){_.extend(dahz.headerSearch,_.pick(e||{},"modal","input","loader","result"))},listener:function(){dahz.headerSearch.input.unbind("keyup"),dahz.headerSearch.input.keyup(_.debounce(dahz.headerSearch.searchProcess,1e3))},searchProcess:function(){var a=e(this).val();a.length>=2?dahz.headerSearch.searchContentRender(a):dahz.headerSearch.searchFlush()},searchContentRender:function(a){e.ajax({url:dahzFramework.ajaxURL,type:"POST",data:{action:"dahz_framework_search_product_render",keyword:a},beforeSend:function(){dahz.headerSearch.loader.removeClass("uk-invisible"),dahz.headerSearch.result.removeClass("de-header-search__result--found")},success:function(e){""===e?(dahz.headerSearch.loader.addClass("uk-invisible"),dahz.headerSearch.result.html('<span class="uk-modal-title">'+dahzFramework.language.emptyMessage+"</span>")):(dahz.headerSearch.loader.addClass("uk-invisible"),dahz.headerSearch.result.html(e).addClass("de-header-search__result--found"))}})},searchFlush:function(){dahz.headerSearch.input.val(""),dahz.headerSearch.result.html("").removeClass("de-header-search__result--found")}},e("#header-search-modal").on("show",function(){dahz.headerSearch.init(e(this))})}(jQuery);
;function vc_js(){vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_googleplus(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_google_fonts(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval")),sliderFx=this_element.attr("data-flex_fx"),slideshow=!0;0===sliderTimeout&&(slideshow=!1),this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//assets.pinterest.com/js/pinit.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.waypoint&&jQuery(".vc_progress_bar").waypoint(function(){jQuery(this).find(".vc_single_bar").each(function(index){var bar=jQuery(this).find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.waypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function(){jQuery(this).addClass("wpb_start_animation animated")},{offset:"85%"})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(e){e&&e.preventDefault&&e.preventDefault();var element=jQuery(this).closest(".vc_toggle"),content=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?content.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):content.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}$el?$el.hasClass("vc_toggle_title")?$el.unbind("click").click(event):$el.find(".vc_toggle_title").unbind("click").click(event):jQuery(".vc_toggle_title").unbind("click").on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function($tab){if(jQuery.ui){var $call=$tab||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0])&&parseInt(ver[1])<9;$call.each(function(index){var $tabs,interval=jQuery(this).attr("data-interval"),tabs_array=[];if($tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},beforeActivate:function(event,ui){1!==ui.newPanel.index()&&ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}}),interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(e){window.console&&window.console.warn&&console.warn(e)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").click(function(e){return e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e){if(e.preventDefault(),old_version){var index=$tabs.tabs("option","selected");jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,index<0?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)}else{index=$tabs.tabs("option","active");var length=$tabs.find(".wpb_tab").length;index=jQuery(this).parent().hasClass("wpb_next_slide")?length<=index+1?0:index+1:index-1<0?length-1:index-1,$tabs.tabs("option","active",index)}})})}}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $tabs,$this=jQuery(this),active_tab=($this.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"))&&parseInt($this.data("active-tab"))-1),collapsible=!1===active_tab||"yes"===$this.data("collapsible");$tabs=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}}),!0===$this.data("vcDisableKeydown")&&($tabs.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).click(function(e){e.preventDefault();var $thumbs=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),$thumbs.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var $this=jQuery(this);if(!0!==$this.data("carousel_enabled")&&$this.is(":visible")){$this.data("carousel_enabled",!0);getColumnsCount(jQuery(this));jQuery(this).hasClass("columns_count_1")&&900;var carousele_li=jQuery(this).find(".wpb_thumbnails-fluid li");carousele_li.css({"margin-right":carousele_li.css("margin-left"),"margin-left":0});var fluid_ul=jQuery(this).find("ul.wpb_thumbnails-fluid");fluid_ul.width(fluid_ul.width()+300),jQuery(window).resize(function(){screen_size!=(screen_size=getSizeName())&&window.setTimeout("location.reload()",20)})}})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,this_element=jQuery(this);if(this_element.hasClass("wpb_slider_nivo")){var sliderTimeout=1e3*this_element.attr("data-interval");0===sliderTimeout&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})}else this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.warn&&console.warn(err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var vcSkrollrOptions,callSkrollInit,$=window.jQuery;function fullWidthRow(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);$el.addClass("vc_hidden");var $el_full=$el.next(".vc_row-full-width");if($el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length){var padding,paddingRight,el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width();if("rtl"===$el.css("direction")&&(offset-=$el_full.width(),offset+=width,offset+=el_margin_left,offset+=el_margin_right),$el.css({position:"relative",left:offset,"box-sizing":"border-box",width:width}),!$el.data("vcStretchContent"))"rtl"===$el.css("direction")?((padding=$el_full.offset().left)<0&&(padding=0),(paddingRight=offset)<0&&(paddingRight=0)):((padding=-1*offset)<0&&(padding=0),(paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right)<0&&(paddingRight=0)),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"});$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width})}}),$(document).trigger("vc-full-width-row",$elements)}function fullHeightRow(){var windowHeight,offsetTop,fullHeight,$element=$(".vc_row-o-full-height:first");$element.length&&(windowHeight=$(window).height(),(offsetTop=$element.offset().top)<windowHeight&&(fullHeight=100-offsetTop/(windowHeight/100),$element.css("min-height",fullHeight+"vh")));$(document).trigger("vc-full-height-row",$element)}$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),vc_initVideoBackgrounds(),callSkrollInit=!1,window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrSize,skrollrStart,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrSize=100*$(this).data("vcParallax"),($parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize+"%"),(youtubeId=vcExtractYoutubeId(parallaxImage=$(this).data("vcParallaxImage")))?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),skrollrStart=-(skrollrSize-100),$parallaxElement.attr("data-bottom-top","top: "+skrollrStart+"%;").attr("data-top-bottom","top: 0%;")}),callSkrollInit&&window.skrollr&&(vcSkrollrOptions={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(vcSkrollrOptions),window.vcParallaxSkroll)}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}});var screen_size=getSizeName();function getSizeName(){var screen_w=jQuery(window).width();return 1170<screen_w?"desktop_wide":960<screen_w&&screen_w<1169?"desktop":768<screen_w&&screen_w<959?"tablet":300<screen_w&&screen_w<767?"mobile":screen_w<300?"mobile_portrait":""}function loadScript(url,$obj,callback){var script=document.createElement("script");script.type="text/javascript",script.readyState&&(script.onreadystatechange=function(){"loaded"!==script.readyState&&"complete"!==script.readyState||(script.onreadystatechange=null,callback())}),script.src=url,$obj.get(0).appendChild(script)}function vc_ttaActivation(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}function vc_accordionActivate(event,ui){if(ui.newPanel.length&&ui.newHeader.length){var $pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]');void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}}function initVideoBackgrounds(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}function vc_initVideoBackgrounds(){jQuery("[data-vc-video-bg]").each(function(){var youtubeId,$element=jQuery(this);$element.data("vcVideoBg")?((youtubeId=vcExtractYoutubeId($element.data("vcVideoBg")))&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeId)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}function insertYoutubeVideoAsBackground($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).bind("resize",function(){vcResizeVideoBackground($element)})}function vcResizeVideoBackground($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px"):(iframeH=(iframeW=containerW)*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px"),iframeW+="px",iframeH+="px",$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}function vcExtractYoutubeId(url){if(void 0===url)return!1;var id=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id&&id[1]}if("function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var $ui_panel,$google_maps,panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$line_charts=panel.find(".vc_line-chart"),$carousel=panel.find('[data-ride="vc_carousel"]');if(vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),$ui_panel=panel.find(".isotope, .wpb_image_grid_ul"),$google_maps=panel.find(".wpb_gmaps_widget"),0<$ui_panel.length&&$ui_panel.isotope("layout"),$google_maps.length&&!$google_maps.is(".map_ready")){var $frame=$google_maps.find("iframe");$frame.attr("src",$frame.attr("src")),$google_maps.addClass("map_ready")}panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}),"function"!=typeof window.vc_googleMapsPointer)function vc_googleMapsPointer(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.click(function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.mouseleave(function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}function vc_setHoverBoxPerspective(hoverBox){hoverBox.each(function(){var $this=jQuery(this),perspective=4*$this.width()+"px";$this.css("perspective",perspective)})}function vc_setHoverBoxHeight(hoverBox){hoverBox.each(function(){var $this=jQuery(this),hoverBoxInner=$this.find(".vc-hoverbox-inner");hoverBoxInner.css("min-height",0);var frontHeight=$this.find(".vc-hoverbox-front-inner").outerHeight(),backHeight=$this.find(".vc-hoverbox-back-inner").outerHeight(),hoverBoxHeight=backHeight<frontHeight?frontHeight:backHeight;hoverBoxHeight<250&&(hoverBoxHeight=250),hoverBoxInner.css("min-height",hoverBoxHeight+"px")})}function vc_prepareHoverBox(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}jQuery(document).ready(vc_prepareHoverBox),jQuery(window).resize(vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()});
;window.$=jQuery,$.fn.cascadingImage=function(){$(this).addClass("initialized");var i=$(this).children().map(function(i,a){return $(a).outerHeight()}).get();maxHeight=Math.max.apply(null,i),$(this).height(maxHeight)},function(i){i(document).ready(function(){i(".de-sc-cascading-image:not(.initialized)").each(function(a,n){i(n).is(":visible")&&i(n).parent().not('[data-dahz-is-lazyload-shortcode="true"]')?i(n).cascadingImage():setTimeout(function(){i(".de-sc-cascading-image:not(.initialized)").each(function(a,n){i(n).cascadingImage()})},8e3)})}),i(document).on("shortcode_cascading_image_ready",function(){i(".de-sc-cascading-image:not(.initialized)").each(function(a,n){i(n).cascadingImage()})})}(window.jQuery);
;"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(i,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(i)),t(s),s}:t(jQuery)}(function(t){return t.fn.tilt=function(i){var s=function(){this.ticking||(requestAnimationFrame(g.bind(this)),this.ticking=!0)},e=function(){var i=this;t(this).on("mousemove",o),t(this).on("mouseenter",a),this.settings.reset&&t(this).on("mouseleave",l),this.settings.glare&&t(window).on("resize",d.bind(i))},n=function(){var i=this;void 0!==this.timeout&&clearTimeout(this.timeout),t(this).css({transition:this.settings.speed+"ms "+this.settings.easing}),this.settings.glare&&this.glareElement.css({transition:"opacity "+this.settings.speed+"ms "+this.settings.easing}),this.timeout=setTimeout(function(){t(i).css({transition:""}),i.settings.glare&&i.glareElement.css({transition:""})},this.settings.speed)},a=function(i){this.ticking=!1,t(this).css({"will-change":"transform"}),n.call(this),t(this).trigger("tilt.mouseEnter")},r=function(i){return"undefined"==typeof i&&(i={pageX:t(this).offset().left+t(this).outerWidth()/2,pageY:t(this).offset().top+t(this).outerHeight()/2}),{x:i.pageX,y:i.pageY}},o=function(t){this.mousePositions=r(t),s.call(this)},l=function(){n.call(this),this.reset=!0,s.call(this),t(this).trigger("tilt.mouseLeave")},h=function(){var i=t(this).outerWidth(),s=t(this).outerHeight(),e=t(this).offset().left,n=t(this).offset().top,a=(this.mousePositions.x-e)/i,r=(this.mousePositions.y-n)/s,o=(this.settings.maxTilt/2-a*this.settings.maxTilt).toFixed(2),l=(r*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),h=Math.atan2(this.mousePositions.x-(e+i/2),-(this.mousePositions.y-(n+s/2)))*(180/Math.PI);return{tiltX:o,tiltY:l,percentageX:100*a,percentageY:100*r,angle:h}},g=function(){return this.transforms=h.call(this),this.reset?(this.reset=!1,t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg)"),void(this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0")))):(t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.disableAxis?0:this.transforms.tiltY)+"deg) rotateY("+("y"===this.settings.disableAxis?0:this.transforms.tiltX)+"deg) scale3d("+this.settings.scale+","+this.settings.scale+","+this.settings.scale+")"),this.settings.glare&&(this.glareElement.css("transform","rotate("+this.transforms.angle+"deg) translate(-50%, -50%)"),this.glareElement.css("opacity",""+this.transforms.percentageY*this.settings.maxGlare/100)),t(this).trigger("change",[this.transforms]),void(this.ticking=!1))},c=function(){var i=this.settings.glarePrerender;if(i||t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=t(this).find(".js-tilt-glare"),this.glareElement=t(this).find(".js-tilt-glare-inner"),!i){var s={position:"absolute",top:"0",left:"0",width:"100%",height:"100%"};this.glareElementWrapper.css(s).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth(),transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"})}},d=function(){this.glareElement.css({width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth()})};return t.fn.tilt.destroy=function(){t(this).each(function(){t(this).find(".js-tilt-glare").remove(),t(this).css({"will-change":"",transform:""}),t(this).off("mousemove mouseenter mouseleave")})},t.fn.tilt.getValues=function(){var i=[];return t(this).each(function(){this.mousePositions=r.call(this),i.push(h.call(this))}),i},t.fn.tilt.reset=function(){t(this).each(function(){var i=this;this.mousePositions=r.call(this),this.settings=t(this).data("settings"),l.call(this),setTimeout(function(){i.reset=!1},this.settings.transition)})},this.each(function(){var s=this;this.settings=t.extend({maxTilt:t(this).is("[data-tilt-max]")?t(this).data("tilt-max"):20,perspective:t(this).is("[data-tilt-perspective]")?t(this).data("tilt-perspective"):300,easing:t(this).is("[data-tilt-easing]")?t(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:t(this).is("[data-tilt-scale]")?t(this).data("tilt-scale"):"1",speed:t(this).is("[data-tilt-speed]")?t(this).data("tilt-speed"):"400",transition:!t(this).is("[data-tilt-transition]")||t(this).data("tilt-transition"),disableAxis:t(this).is("[data-tilt-disable-axis]")?t(this).data("tilt-disable-axis"):null,axis:t(this).is("[data-tilt-axis]")?t(this).data("tilt-axis"):null,reset:!t(this).is("[data-tilt-reset]")||t(this).data("tilt-reset"),glare:!!t(this).is("[data-tilt-glare]")&&t(this).data("tilt-glare"),maxGlare:t(this).is("[data-tilt-maxglare]")?t(this).data("tilt-maxglare"):1},i),null!==this.settings.axis&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=function(){t(s).data("settings",s.settings),s.settings.glare&&c.call(s),e.call(s)},this.init()})},t("[data-tilt]").tilt(),!0});
;jQuery(document).ready(function(e){var i=!1,t=!1,n=!1,o=e(".cd-image-container");function a(i){i.each(function(){var i=e(this);e(window).scrollTop()+.5*e(window).height()>i.offset().top&&i.addClass("is-visible")}),t=!1}function s(i){i.each(function(){var i=e(this);r(i.find('.cd-image-label[data-type="modified"]'),i.find(".cd-resize-img"),"left"),r(i.find('.cd-image-label[data-type="original"]'),i.find(".cd-resize-img"),"right")}),n=!1}function d(t,n,o,a,s,d,f,u,l,m){var c=t.pageX+n-o||t.originalEvent.pageX+n-o;c<a?c=a:c>s&&(c=s);var g=100*(c+o/2-d)/f+"%";e(".draggable").css("left",g).on("mouseup vmouseup",function(){e(this).removeClass("draggable"),u.removeClass("resizable")}),e(".resizable").css("width",g),r(m,u,"left"),r(l,u,"right"),i=!1}function r(e,i,t){"left"==t?e.offset().left+e.outerWidth()<i.offset().left+i.outerWidth()?e.removeClass("is-hidden"):e.addClass("is-hidden"):e.offset().left>i.offset().left+i.outerWidth()?e.removeClass("is-hidden"):e.addClass("is-hidden")}a(o),e(window).on("scroll",function(){t||(t=!0,window.requestAnimationFrame?requestAnimationFrame(function(){a(o)}):setTimeout(function(){a(o)},100))}),o.each(function(){var t,n,o,a,s,r=e(this);t=r.find(".cd-handle"),n=r.find(".cd-resize-img"),o=r,a=r.find('.cd-image-label[data-type="original"]'),s=r.find('.cd-image-label[data-type="modified"]'),t.on("mousedown vmousedown touchstart",function(e){t.addClass("draggable"),n.addClass("resizable");var r=t.outerWidth(),f=t.offset().left+r-e.pageX||t.offset().left+r-e.originalEvent.pageX,u=o.offset().left,l=o.outerWidth(),m=u+10,c=u+l-r-10;t.parents().on("mousemove vmousemove touchmove",function(e){i||(i=!0,window.requestAnimationFrame?requestAnimationFrame(function(){d(e,f,r,m,c,u,l,n,a,s)}):setTimeout(function(){d(e,f,r,m,c,u,l,n,a,s)},100))}).on("mouseup vmouseup touchend",function(e){t.removeClass("draggable"),n.removeClass("resizable")}),e.preventDefault()}).on("mouseup vmouseup touchend",function(e){t.removeClass("draggable"),n.removeClass("resizable")})}),e(window).on("resize",function(){n||(n=!0,window.requestAnimationFrame?requestAnimationFrame(function(){s(o)}):setTimeout(function(){s(o)},100))})});
;var sbi_js_exists=void 0!==sbi_js_exists;sbi_js_exists||(!function(i){function e(){var i,e,s,t=t||{VER:"0.9.944"};t.bgs_Available=!1,t.bgs_CheckRunned=!1,function(i){i.fn.extend({sbi_imgLiquid:function(e){this.defaults={fill:!0,verticalAlign:"center",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},function(){if(!t.bgs_CheckRunned){t.bgs_CheckRunned=!0;var e=i('<span style="background-size:cover" />');i("body").append(e),function(){var i=e[0];if(i&&window.getComputedStyle){var s=window.getComputedStyle(i,null);s&&s.backgroundSize&&(t.bgs_Available="cover"===s.backgroundSize)}}(),e.remove()}}();var s=this;return this.options=e,this.settings=i.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each(function(e){function a(){(r.responsive||h.data("sbi_imgLiquid_oldProcessed"))&&h.data("sbi_imgLiquid_settings")&&(r=h.data("sbi_imgLiquid_settings"),l.actualSize=l.get(0).offsetWidth+l.get(0).offsetHeight/1e4,l.sizeOld&&l.actualSize!==l.sizeOld&&o(),l.sizeOld=l.actualSize,setTimeout(a,r.responsiveCheckTime))}function n(){h.data("sbi_imgLiquid_error",!0),l.addClass("sbi_imgLiquid_error"),r.onItemError&&r.onItemError(e,l,h),d()}function o(){var i,s,t,a,n,o,g,u,m=0,_=0,f=l.width(),c=l.height();void 0===h.data("owidth")&&h.data("owidth",h[0].width),void 0===h.data("oheight")&&h.data("oheight",h[0].height),r.fill===f/c>=h.data("owidth")/h.data("oheight")?(i="100%",s="auto",t=Math.floor(f),a=Math.floor(f*(h.data("oheight")/h.data("owidth")))):(i="auto",s="100%",t=Math.floor(c*(h.data("owidth")/h.data("oheight"))),a=Math.floor(c)),g=f-t,"left"===(n=r.horizontalAlign.toLowerCase())&&(_=0),"center"===n&&(_=.5*g),"right"===n&&(_=g),-1!==n.indexOf("%")&&((n=parseInt(n.replace("%",""),10))>0&&(_=g*n*.01)),u=c-a,"left"===(o=r.verticalAlign.toLowerCase())&&(m=0),"center"===o&&(m=.5*u),"bottom"===o&&(m=u),-1!==o.indexOf("%")&&((o=parseInt(o.replace("%",""),10))>0&&(m=u*o*.01)),r.hardPixels&&(i=t,s=a),h.css({width:i,height:s,"margin-left":Math.floor(_),"margin-top":Math.floor(m)}),h.data("sbi_imgLiquid_oldProcessed")||(h.fadeTo(r.fadeInTime,1),h.data("sbi_imgLiquid_oldProcessed",!0),r.removeBoxBackground&&l.css("background-image","none"),l.addClass("sbi_imgLiquid_nobgSize"),l.addClass("sbi_imgLiquid_ready")),r.onItemFinish&&r.onItemFinish(e,l,h),d()}function d(){e===s.length-1&&s.settings.onFinish&&s.settings.onFinish()}var r=s.settings,l=i(this),h=i("img:first",l);return h.length?(h.data("sbi_imgLiquid_settings")?(l.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"),r=i.extend({},h.data("sbi_imgLiquid_settings"),s.options)):r=i.extend({},s.settings,function(){var i={};if(s.settings.useDataHtmlAttr){var e=l.attr("data-sbi_imgLiquid-fill"),a=l.attr("data-sbi_imgLiquid-horizontalAlign"),n=l.attr("data-sbi_imgLiquid-verticalAlign");("true"===e||"false"===e)&&(i.fill=Boolean("true"===e)),void 0===a||"left"!==a&&"center"!==a&&"right"!==a&&-1===a.indexOf("%")||(i.horizontalAlign=a),void 0===n||"top"!==n&&"bottom"!==n&&"center"!==n&&-1===n.indexOf("%")||(i.verticalAlign=n)}return t.isIE&&s.settings.ieFadeInDisabled&&(i.fadeInTime=0),i}()),h.data("sbi_imgLiquid_settings",r),r.onItemStart&&r.onItemStart(e,l,h),void(t.bgs_Available&&r.useBackgroundSize?(-1===l.css("background-image").indexOf(encodeURI(h.attr("src")))&&l.css({"background-image":'url("'+encodeURI(h.attr("src"))+'")'}),l.css({"background-size":r.fill?"cover":"contain","background-position":(r.horizontalAlign+" "+r.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),i("a:first",l).css({display:"block",width:"100%",height:"100%"}),i("img",l).css({display:"none"}),r.onItemFinish&&r.onItemFinish(e,l,h),l.addClass("sbi_imgLiquid_bgSize"),l.addClass("sbi_imgLiquid_ready"),d()):function s(){if(h.data("oldSrc")&&h.data("oldSrc")!==h.attr("src")){var t=h.clone().removeAttr("style");return t.data("sbi_imgLiquid_settings",h.data("sbi_imgLiquid_settings")),h.parent().prepend(t),h.remove(),(h=t)[0].width=0,void setTimeout(s,10)}return h.data("sbi_imgLiquid_oldProcessed")?void o():(h.data("sbi_imgLiquid_oldProcessed",!1),h.data("oldSrc",h.attr("src")),i("img:not(:first)",l).css("display","none"),l.css({overflow:"hidden"}),h.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),h.on("error",n),h[0].onerror=n,function i(){h.data("sbi_imgLiquid_error")||h.data("sbi_imgLiquid_loaded")||h.data("sbi_imgLiquid_oldProcessed")||(l.is(":visible")&&h[0].complete&&h[0].width>0&&h[0].height>0?(h.data("sbi_imgLiquid_loaded",!0),setTimeout(o,e*r.delay)):setTimeout(i,r.timecheckvisibility))}(),void a())}())):void n()})}})}(jQuery),i=t.injectCss,e=document.getElementsByTagName("head")[0],(s=document.createElement("style")).type="text/css",s.styleSheet?s.styleSheet.cssText=i:s.appendChild(document.createTextNode(i)),e.appendChild(s)}function s(){this.feeds={},this.options=sb_instagram_js_options}function t(i,e,s){this.el=i,this.index=e,this.settings=s,this.minImageWidth=0,this.imageResolution=150,this.resizedImages={},this.needsResizing=[],this.outOfPages=!1,this.isInitialized=!1}function a(e,s){i.ajax({url:sbiajaxurl,type:"post",data:e,success:s})}s.prototype={createPage:function(e,s){void 0!==window.sbiajaxurl&&-1!==window.sbiajaxurl.indexOf(window.location.hostname)||(window.sbiajaxurl=location.protocol+"//"+window.location.hostname+"/wp-admin/admin-ajax.php"),i(".sbi_no_js_error_message").remove(),i(".sbi_no_js").removeClass("sbi_no_js"),e(s)},createFeeds:function(e){e.whenFeedsCreated(i(".sbi").each(function(e){i(this).attr("data-sbi-index",e+1);var s=i(this),n=void 0!==s.attr("data-sbi-flags")?s.attr("data-sbi-flags").split(","):[],o=void 0!==s.attr("data-options")?JSON.parse(s.attr("data-options")):{};if(n.indexOf("testAjax")>-1){window.sbi.triggeredTest=!0;a({action:"sbi_on_ajax_test_trigger"},function(i){console.log("did test")})}var d={cols:s.attr("data-cols"),colsmobile:"same"!==s.attr("data-colsmobile")?s.attr("data-colsmobile"):s.attr("data-cols"),num:s.attr("data-num"),imgRes:s.attr("data-res"),feedID:s.attr("data-feedid"),shortCodeAtts:s.attr("data-shortcode-atts"),resizingEnabled:-1===n.indexOf("resizeDisable"),imageLoadEnabled:-1===n.indexOf("imageLoadDisable"),debugEnabled:n.indexOf("debug")>-1,favorLocal:n.indexOf("favorLocal")>-1,ajaxPostLoad:n.indexOf("ajaxPostLoad")>-1,autoMinRes:1,general:o};window.sbi.feeds[e]=function(i,e,s){return new t(i,e,s)}(this,e,d),window.sbi.feeds[e].setResizedImages(),window.sbi.feeds[e].init();var r=jQuery.Event("sbiafterfeedcreate");r.feed=window.sbi.feeds[e],jQuery(window).trigger(r)}))},afterFeedsCreated:function(){i(".sb_instagram_header").each(function(){var e=i(this);e.find(".sbi_header_link").hover(function(){e.find(".sbi_header_img_hover").addClass("sbi_fade_in")},function(){e.find(".sbi_header_img_hover").removeClass("sbi_fade_in")})})},encodeHTML:function(i){return void 0===i?"":i.replace(/(>)/g,"&gt;").replace(/(<)/g,"&lt;").replace(/(&lt;br\/&gt;)/g,"<br>").replace(/(&lt;br&gt;)/g,"<br>")},urlDetect:function(i){return i.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g)}},t.prototype={init:function(){var e=this;i(this.el).find("#sbi_mod_error").length&&i(this.el).prepend(i(this.el).find("#sbi_mod_error")),this.settings.ajaxPostLoad?this.getNewPostSet():this.afterInitialImagesLoaded();var s,t=(s=0,function(i,e){clearTimeout(s),s=setTimeout(i,e)});jQuery(window).resize(function(){t(function(){e.afterResize()},500)})},initLayout:function(){},afterInitialImagesLoaded:function(){this.initLayout(),this.loadMoreButtonInit(),this.hideExtraImagesForWidth(),this.beforeNewImagesRevealed(),this.revealNewImages(),this.afterNewImagesRevealed()},afterResize:function(){this.setImageHeight(),this.setImageResolution(),this.maybeRaiseImageResolution(),this.setImageSizeClass()},afterLoadMoreClicked:function(i){i.find(".sbi_loader").removeClass("sbi_hidden"),i.find(".sbi_btn_text").addClass("sbi_hidden"),i.closest(".sbi").find(".sbi_num_diff_hide").addClass("sbi_transition").removeClass("sbi_num_diff_hide")},afterNewImagesLoaded:function(){var e=i(this.el),s=this;this.beforeNewImagesRevealed(),this.revealNewImages(),this.afterNewImagesRevealed(),setTimeout(function(){e.find(".sbi_loader").addClass("sbi_hidden"),e.find(".sbi_btn_text").removeClass("sbi_hidden"),s.maybeRaiseImageResolution()},500)},beforeNewImagesRevealed:function(){this.setImageHeight(),this.maybeRaiseImageResolution(!0),this.setImageSizeClass()},revealNewImages:function(){var e=i(this.el);e.find(".sbi-screenreader").each(function(){i(this).find("img").remove()}),"function"==typeof sbi_custom_js&&setTimeout(function(){sbi_custom_js()},100),this.applyImageLiquid(),e.find(".sbi_item").each(function(i){jQuery(this).find(".sbi_photo").hover(function(){jQuery(this).fadeTo(200,.85)},function(){jQuery(this).stop().fadeTo(500,1)})}),setTimeout(function(){jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new");var i=10;e.find(".sbi_transition").each(function(){var e=jQuery(this);setTimeout(function(){e.removeClass("sbi_transition")},i),i+=10})},500)},afterNewImagesRevealed:function(){this.listenForVisibilityChange(),this.sendNeedsResizingToServer(),this.settings.imageLoadEnabled||i(".sbi_no_resraise").removeClass("sbi_no_resraise");var e=i.Event("sbiafterimagesloaded");e.el=i(this.el),i(window).trigger(e)},setResizedImages:function(){i(this.el).find(".sbi_resized_image_data").length&&void 0!==i(this.el).find(".sbi_resized_image_data").attr("data-resized")&&0===i(this.el).find(".sbi_resized_image_data").attr("data-resized").indexOf('{"')&&(this.resizedImages=JSON.parse(i(this.el).find(".sbi_resized_image_data").attr("data-resized")),i(this.el).find(".sbi_resized_image_data").remove())},sendNeedsResizingToServer:function(){var e=this;if(e.needsResizing.length>0&&e.settings.resizingEnabled){var s=i(this.el).find(".sbi_item").length;a({action:"sbi_resized_images_submit",needs_resizing:e.needsResizing,offset:s,feed_id:e.settings.feedID,atts:e.settings.shortCodeAtts},function(i){if(0===i.trim().indexOf("{")){var s=JSON.parse(i);e.settings.debugEnabled&&console.log(s)}})}},loadMoreButtonInit:function(){var e=i(this.el),s=this;e.find("#sbi_load .sbi_load_btn").off().on("click",function(){s.afterLoadMoreClicked(jQuery(this)),s.getNewPostSet()})},getNewPostSet:function(){var e=i(this.el),s=this;a({action:"sbi_load_more_clicked",offset:e.find(".sbi_item").length,feed_id:s.settings.feedID,atts:s.settings.shortCodeAtts,current_resolution:s.imageResolution},function(t){if(0===t.trim().indexOf("{")){var a=JSON.parse(t);s.settings.debugEnabled&&console.log(a),s.appendNewPosts(a.html),s.addResizedImages(a.resizedImages),s.settings.ajaxPostLoad?(s.settings.ajaxPostLoad=!1,s.afterInitialImagesLoaded()):s.afterNewImagesLoaded(),a.feedStatus.shouldPaginate?s.outOfPages=!1:(s.outOfPages=!0,e.find(".sbi_load_btn").hide()),i(".sbi_no_js").removeClass("sbi_no_js")}})},appendNewPosts:function(e){var s=i(this.el);s.find("#sbi_images .sbi_item").length?s.find("#sbi_images .sbi_item").last().after(e):s.find("#sbi_images").append(e)},addResizedImages:function(i){for(var e in i)this.resizedImages[e]=i[e]},setImageHeight:function(){var e=i(this.el),s=e.find(".sbi_photo").eq(0).innerWidth(),t=this.getColumnCount(),a=e.find("#sbi_images").innerWidth()-e.find("#sbi_images").width(),n=a/2;sbi_photo_width_manual=e.find("#sbi_images").width()/t-a,e.find(".sbi_photo").css("height",s),e.find(".sbi-owl-nav").length&&setTimeout(function(){var i=2;e.find(".sbi_owl2row-item").length&&(i=1);var s=e.find(".sbi_photo").eq(0).innerWidth()/i;s+=parseInt(n)*(2-i+2),e.find(".sbi-owl-nav div").css("top",s)},100)},maybeRaiseSingleImageResolution:function(e,s,t){var a=this,n=a.getImageUrls(e),o=e.find(".sbi_photo img").attr("src"),d=150,r=e.find("img").get(0),l=o===window.sbi.options.placeholder?1:r.naturalWidth/r.naturalHeight;t=void 0!==t&&t;if(!(e.hasClass("sbi_no_resraise")||e.hasClass("sbi_had_error")||e.find(".sbi_link_area").length&&e.find(".sbi_link_area").hasClass("sbi_had_error"))){i.each(n,function(i,e){e===o&&(d=parseInt(i),t=!1)});var h=640;switch(a.settings.imgRes){case"thumb":h=150;break;case"medium":h=320;break;case"full":h=640;break;default:var g=Math.max(a.settings.autoMinRes,e.find(".sbi_photo").innerWidth()),u=a.getBestResolutionForAuto(g,l,e);switch(u){case 320:h=320;break;case 150:h=150}}if(h>d||o===window.sbi.options.placeholder||t){if(a.settings.debugEnabled){var m=o===window.sbi.options.placeholder?"was placeholder":"too small";console.log("raise res for "+o,m)}var _=n[h].split("?ig_cache_key")[0];if(e.find(".sbi_photo img").attr("src",_),e.find(".sbi_photo").css("background-image",'url("'+_+'")'),d=h,"auto"===a.settings.imgRes){var f=!1;e.find(".sbi_photo img").on("load",function(){var s=i(this),t=s.get(0).naturalWidth/s.get(0).naturalHeight;if(1e3!==s.get(0).naturalWidth&&t>l&&!f){switch(a.settings.debugEnabled&&console.log("raise res again for aspect ratio change "+o),f=!0,g=e.find(".sbi_photo").innerWidth(),u=a.getBestResolutionForAuto(g,t,e),h=640,u){case 320:h=320;break;case 150:h=150}h>d&&(_=n[h].split("?ig_cache_key")[0],s.attr("src",_),s.closest(".sbi_photo").css("background-image",'url("'+_+'")')),"masonry"!==a.layout&&"highlight"!==a.layout||(i(a.el).find("#sbi_images").smashotope(a.isotopeArgs),setTimeout(function(){i(a.el).find("#sbi_images").smashotope(a.isotopeArgs)},500))}else if(a.settings.debugEnabled){var r=f?"already checked":"no aspect ratio change";console.log("not raising res for replacement  "+o,r)}})}}e.find("img").on("error",function(){if(i(this).hasClass("sbi_img_error"))console.log("unfixed error "+i(this).attr("src"));else{var e;if(i(this).addClass("sbi_img_error"),i(this).attr("src").indexOf("media/?size=")>-1||i(this).attr("src").indexOf("cdninstagram")>-1||i(this).attr("src").indexOf("fbcdn")>-1)a.settings.favorLocal=!0,void 0!==(e=a.getImageUrls(i(this).closest(".sbi_item")))[640]&&(i(this).attr("src",e[640]),i(this).closest(".sbi_photo").css("background-image","url("+e[640]+")"),i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href",e[640]).addClass("sbi_had_error"));else if("undefined"!==i(this).closest(".sbi_photo").attr("data-img-src-set"))void 0!==(e=JSON.parse(i(this).closest(".sbi_photo").attr("data-img-src-set").replace(/\\\//g,"/"))).d&&(i(this).attr("src",e.d),i(this).closest(".sbi_photo").css("background-image","url("+e.d+")"),i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href",e[640]).addClass("sbi_had_error"));setTimeout(function(){a.afterResize()},1500)}})}},maybeRaiseImageResolution:function(e){var s=this,t=void 0!==e&&!0===e?".sbi_item.sbi_new":".sbi_item",a=!s.isInitialized;i(s.el).find(t).each(function(e){!i(this).hasClass("sbi_num_diff_hide")&&i(this).find(".sbi_photo").length&&void 0!==i(this).find(".sbi_photo").attr("data-img-src-set")&&s.maybeRaiseSingleImageResolution(i(this),e,a)}),s.isInitialized=!0},getBestResolutionForAuto:function(e,s,t){(isNaN(s)||s<1)&&(s=1);var a=e*s,n=10*Math.ceil(a/10),o=[150,320,640];if(t.hasClass("sbi_highlighted")&&(n*=2),-1===o.indexOf(parseInt(n))){var d=!1;i.each(o,function(i,e){e>parseInt(n)&&!d&&(n=e,d=!0)})}return n},hideExtraImagesForWidth:function(){if("carousel"!==this.layout){var e=i(this.el),s=void 0!==e.attr("data-num")&&""!==e.attr("data-num")?parseInt(e.attr("data-num")):1,t=void 0!==e.attr("data-nummobile")&&""!==e.attr("data-nummobile")?parseInt(e.attr("data-nummobile")):s;i(window).width()<480?t<e.find(".sbi_item").length&&e.find(".sbi_item").slice(t-e.find(".sbi_item").length).addClass("sbi_num_diff_hide"):s<e.find(".sbi_item").length&&e.find(".sbi_item").slice(s-e.find(".sbi_item").length).addClass("sbi_num_diff_hide")}},setImageSizeClass:function(){var e=i(this.el);e.removeClass("sbi_small sbi_medium");var s=e.innerWidth(),t=parseInt(e.find("#sbi_images").outerWidth()-e.find("#sbi_images").width())/2,a=this.getColumnCount(),n=(s-t*(a+2))/a;n>120&&n<240?e.addClass("sbi_medium"):n<=120&&e.addClass("sbi_small")},setMinImageWidth:function(){i(this.el).find(".sbi_item .sbi_photo").first().length?this.minImageWidth=i(this.el).find(".sbi_item .sbi_photo").first().innerWidth():this.minImageWidth=150},setImageResolution:function(){if("auto"===this.settings.imgRes)this.imageResolution="auto";else switch(this.settings.imgRes){case"thumb":this.imageResolution=150;break;case"medium":this.imageResolution=320;break;default:this.imageResolution=640}},getImageUrls:function(i){var e=JSON.parse(i.find(".sbi_photo").attr("data-img-src-set").replace(/\\\//g,"/")),s=i.attr("id").replace("sbi_","");if(void 0!==this.resizedImages[s]&&"video"!==this.resizedImages[s]&&"pending"!==this.resizedImages[s]&&"error"!==this.resizedImages[s].id&&"video"!==this.resizedImages[s].id&&"pending"!==this.resizedImages[s].id){if(void 0!==this.resizedImages[s].sizes){var t=[];void 0!==this.resizedImages[s].sizes.full&&(e[640]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"full.jpg",t.push(640)),void 0!==this.resizedImages[s].sizes.low&&(e[320]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"low.jpg",t.push(320)),void 0!==this.resizedImages[s].sizes.thumb&&(t.push(150),e[150]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"thumb.jpg"),this.settings.favorLocal&&(-1===t.indexOf(640)&&t.indexOf(320)>-1&&(e[640]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"low.jpg"),-1===t.indexOf(320)&&(t.indexOf(640)>-1?e[320]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"full.jpg":t.indexOf(150)>-1&&(e[320]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"thumb.jpg")),-1===t.indexOf(150)&&(t.indexOf(320)>-1?e[150]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"low.jpg":t.indexOf(640)>-1&&(e[150]=sb_instagram_js_options.resized_url+this.resizedImages[s].id+"full.jpg")))}}else(void 0===this.resizedImages[s]||void 0!==this.resizedImages[s].id&&"pending"!==this.resizedImages[s].id&&"error"!==this.resizedImages[s].id)&&this.addToNeedsResizing(s);return e},getAvatarUrl:function(i,e){if(""===i)return"";var s=this.settings.general.avatars;return"local"===(e=void 0!==e?e:"local")?void 0!==s["LCL"+i]&&1===parseInt(s["LCL"+i])?sb_instagram_js_options.resized_url+i+".jpg":void 0!==s[i]?s[i]:"":void 0!==s[i]?s[i]:void 0!==s["LCL"+i]&&1===parseInt(s["LCL"+i])?sb_instagram_js_options.resized_url+i+".jpg":""},addToNeedsResizing:function(i){-1===this.needsResizing.indexOf(i)&&this.needsResizing.push(i)},applyImageLiquid:function(){var s=i(this.el);e(),"function"==typeof s.find(".sbi_photo").sbi_imgLiquid&&s.find(".sbi_photo").sbi_imgLiquid({fill:!0})},listenForVisibilityChange:function(){var e,s,t,a=this;e=jQuery,s={callback:function(){},runOnLoad:!0,frequency:100,sbiPreviousVisibility:null},t={sbiCheckVisibility:function(i,e){if(jQuery.contains(document,i[0])){var s=e.sbiPreviousVisibility,a=i.is(":visible");e.sbiPreviousVisibility=a,null==s?e.runOnLoad&&e.callback(i,a):s!==a&&e.callback(i,a),setTimeout(function(){t.sbiCheckVisibility(i,e)},e.frequency)}}},e.fn.sbiVisibilityChanged=function(i){var a=e.extend({},s,i);return this.each(function(){t.sbiCheckVisibility(e(this),a)})},"function"==typeof i(this.el).filter(":hidden").sbiVisibilityChanged&&i(this.el).filter(":hidden").sbiVisibilityChanged({callback:function(i,e){a.afterResize()},runOnLoad:!1})},getColumnCount:function(){var e=i(this.el),s=this.settings.cols,t=this.settings.colsmobile,a=s;return sbiWindowWidth=window.innerWidth,e.hasClass("sbi_mob_col_auto")?(sbiWindowWidth<640&&parseInt(s)>2&&parseInt(s)<7&&(a=2),sbiWindowWidth<640&&parseInt(s)>6&&parseInt(s)<11&&(a=4),sbiWindowWidth<=480&&parseInt(s)>2&&(a=1)):sbiWindowWidth<=480&&(a=t),parseInt(a)}},window.sbi_init=function(){window.sbi=new s,window.sbi.createPage(window.sbi.createFeeds,{whenFeedsCreated:window.sbi.afterFeedsCreated})}}(jQuery),jQuery(document).ready(function(i){void 0===window.sb_instagram_js_options&&(window.sb_instagram_js_options={font_method:"svg",resized_url:location.protocol+"//"+window.location.hostname+"/wp-content/uploads/sb-instagram-feed-images/",placeholder:location.protocol+"//"+window.location.hostname+"/wp-content/plugins/instagram-feed/img/placeholder.png"}),void 0!==window.sb_instagram_js_options.resized_url&&-1===window.sb_instagram_js_options.resized_url.indexOf(location.protocol)&&("http:"===location.protocol?window.sb_instagram_js_options.resized_url=window.sb_instagram_js_options.resized_url.replace("http:","https:"):window.sb_instagram_js_options.resized_url=window.sb_instagram_js_options.resized_url.replace("https:","http:")),sbi_init()}));
;