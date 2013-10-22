/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
(function(e){e.fn.bxSlider=function(t){function n(t,n,r,i){var s=[],o=r,u=!1;i=="backward"&&(t=e.makeArray(t),t.reverse());while(o>0)e.each(t,function(t,r){if(!(o>0))return!1;u?(s.push(e(this).clone()),o--):t==n&&(u=!0,s.push(e(this).clone()),o--)});return s}function r(){var e=L.outerHeight()*t.displaySlideQty;return e}function i(){var e=L.outerWidth()*t.displaySlideQty;return e}function s(t,n){if(n=="left")var r=e(".pager",k).eq(t).position().left;else if(n=="top")var r=e(".pager",k).eq(t).position().top;return r}function o(){!t.infiniteLoop&&t.hideControlOnEnd&&(z==G?e(".bx-prev",k).hide():e(".bx-prev",k).show(),z==Y?e(".bx-next",k).hide():e(".bx-next",k).show())}function u(n,r,i,s){H=e('<a href="" class="bx-start"></a>'),n=="text"?j=r:j='<img src="'+r+'" />',i=="text"?F=s:F='<img src="'+s+'" />',t.autoControlsSelector?e(t.autoControlsSelector).append(H):(k.append('<div class="bx-auto"></div>'),e(".bx-auto",k).html(H)),H.click(function(){return t.ticker?e(this).hasClass("stop")?x.stopTicker():e(this).hasClass("start")&&x.startTicker():e(this).hasClass("stop")?x.stopShow(!0):e(this).hasClass("start")&&x.startShow(!0),!1})}function f(){var n=e("img",C.eq(z)).attr("title");n!=""?t.captionsSelector?e(t.captionsSelector).html(n):e(".bx-captions",k).html(n):t.captionsSelector?e(t.captionsSelector).html(" "):e(".bx-captions",k).html(" ")}function l(n){var r=C.length;t.moveSlideQty>1&&(C.length%t.moveSlideQty!=0?r=Math.ceil(C.length/t.moveSlideQty):r=C.length/t.moveSlideQty);var i="";if(t.buildPager)for(var s=0;s<r;s++)i+=t.buildPager(s,C.eq(s*t.moveSlideQty));else if(n=="full")for(var s=1;s<=r;s++)i+='<a href="" class="pager-link pager-'+s+'">'+s+"</a>";else n=="short"&&(i='<span class="bx-pager-current">'+(t.startingSlide+1)+"</span> "+t.pagerShortSeparator+' <span class="bx-pager-total">'+C.length+"</span>");if(t.pagerSelector)e(t.pagerSelector).append(i),D=e(t.pagerSelector);else{var o=e('<div class="bx-pager"></div>');o.append(i),t.pagerLocation=="top"?k.prepend(o):t.pagerLocation=="bottom"&&k.append(o),D=e(".bx-pager",k)}D.children().click(function(){if(t.pagerType=="full"){var e=D.children().index(this);t.moveSlideQty>1&&(e*=t.moveSlideQty),x.goToSlide(e)}return!1})}function c(n,r,i,s){var o=e('<a href="" class="bx-next"></a>'),u=e('<a href="" class="bx-prev"></a>');n=="text"?o.html(r):o.html('<img src="'+r+'" />'),i=="text"?u.html(s):u.html('<img src="'+s+'" />'),t.prevSelector?e(t.prevSelector).append(u):k.append(u),t.nextSelector?e(t.nextSelector).append(o):k.append(o),o.click(function(){return x.goToNextSlide(),!1}),u.click(function(){return x.goToPreviousSlide(),!1})}function h(n){t.pagerType=="full"&&t.pager?(e("a",D).removeClass(t.pagerActiveClass),e("a",D).eq(n).addClass(t.pagerActiveClass)):t.pagerType=="short"&&t.pager&&e(".bx-pager-current",D).html(z+1)}function p(){C.not(":eq("+z+")").fadeTo(t.speed,0).css("zIndex",98),C.eq(z).css("zIndex",99).fadeTo(t.speed,1,function(){Q=!1,jQuery.browser.msie&&C.eq(z).get(0).style.removeAttribute("filter"),t.onAfterSlide(z,C.length,C.eq(z))})}function d(){T.hover(function(){I&&x.stopTicker(!1)},function(){I&&x.startTicker(!1)})}function v(){k.find(".bx-window").hover(function(){I&&x.stopShow(!1)},function(){I&&x.startShow(!1)})}function m(){t.startImage!=""?(startContent=t.startImage,startType="image"):(startContent=t.startText,startType="text"),t.stopImage!=""?(stopContent=t.stopImage,stopType="image"):(stopContent=t.stopText,stopType="text"),u(startType,startContent,stopType,stopContent)}function g(e,n,r){t.mode=="horizontal"?t.tickerDirection=="next"?T.animate({left:"-="+n+"px"},r,"linear",function(){T.css("left",e),g(e,V,t.tickerSpeed)}):t.tickerDirection=="prev"&&T.animate({left:"+="+n+"px"},r,"linear",function(){T.css("left",e),g(e,V,t.tickerSpeed)}):t.mode=="vertical"&&(t.tickerDirection=="next"?T.animate({top:"-="+n+"px"},r,"linear",function(){T.css("top",e),g(e,$,t.tickerSpeed)}):t.tickerDirection=="prev"&&T.animate({top:"+="+n+"px"},r,"linear",function(){T.css("top",e),g(e,$,t.tickerSpeed)}))}function y(){t.auto?t.infiniteLoop?t.autoDirection=="next"?P=setInterval(function(){x.goToNextSlide(!1)},t.pause):t.autoDirection=="prev"&&(P=setInterval(function(){x.goToPreviousSlide(!1)},t.pause)):t.autoDirection=="next"?P=setInterval(function(){z+=t.moveSlideQty,z>Y&&(z%=C.length),x.goToSlide(z,!1)},t.pause):t.autoDirection=="prev"&&(P=setInterval(function(){z-=t.moveSlideQty,z<0&&(negativeOffset=z%C.length,negativeOffset==0?z=0:z=C.length+negativeOffset),x.goToSlide(z,!1)},t.pause)):t.ticker&&(t.tickerSpeed*=10,e(".pager",k).each(function(t){V+=e(this).width(),$+=e(this).height()}),t.tickerDirection=="prev"&&t.mode=="horizontal"?T.css("left","-"+(V+W)+"px"):t.tickerDirection=="prev"&&t.mode=="vertical"&&T.css("top","-"+($+X)+"px"),t.mode=="horizontal"?(J=parseInt(T.css("left")),g(J,V,t.tickerSpeed)):t.mode=="vertical"&&(K=parseInt(T.css("top")),g(K,$,t.tickerSpeed)),t.tickerHover&&d())}function b(){t.nextImage!=""?(nextContent=t.nextImage,nextType="image"):(nextContent=t.nextText,nextType="text"),t.prevImage!=""?(prevContent=t.prevImage,prevType="image"):(prevContent=t.prevText,prevType="text"),c(nextType,nextContent,prevType,prevContent)}function w(){if(t.mode=="horizontal"||t.mode=="vertical"){var r=n(C,0,t.moveSlideQty,"backward");e.each(r,function(t){T.prepend(e(this))});var i=C.length+t.moveSlideQty-1,s=C.length-t.displaySlideQty,o=i-s,u=n(C,0,o,"forward");t.infiniteLoop&&e.each(u,function(t){T.append(e(this))})}}function E(){w(t.startingSlide),t.mode=="horizontal"?(T.wrap('<div class="'+t.wrapperClass+'" style="width:'+M+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+M+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+W+"px"}),T.children().css({width:A,"float":"left",listStyle:"none"}),k=T.parent().parent(),C.addClass("pager")):t.mode=="vertical"?(T.wrap('<div class="'+t.wrapperClass+'" style="width:'+R+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+R+"px; height:"+_+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+X+"px"}),T.children().css({listStyle:"none",height:U}),k=T.parent().parent(),C.addClass("pager")):t.mode=="fade"&&(T.wrap('<div class="'+t.wrapperClass+'" style="width:'+R+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+U+"px; width:"+R+'px; position:relative; overflow:hidden;"></div>'),T.children().css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98}),k=T.parent().parent(),C.not(":eq("+z+")").fadeTo(0,0),C.eq(z).css("zIndex",99)),t.captions&&t.captionsSelector==null&&k.append('<div class="bx-captions"></div>')}var S={mode:"horizontal",infiniteLoop:!0,hideControlOnEnd:!1,controls:!0,speed:500,easing:"swing",pager:!1,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:!1,captionsSelector:null,auto:!1,autoDirection:"next",autoControls:!1,autoControlsSelector:null,autoStart:!0,autoHover:!1,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:!1,tickerSpeed:5e3,tickerDirection:"next",tickerHover:!1,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:!1,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null},t=e.extend(S,t),x=this,T="",N="",C="",k="",L="",A="",O="",M="",_="",D="",P="",H="",B="",j="",F="",I=!0,q=!1,R=0,U=0,z=0,W=0,X=0,V=0,$=0,J=0,K=0,Q=!1,G=0,Y=C.length-1;return this.goToSlide=function(e,n){if(!Q){Q=!0,z=e,t.onBeforeSlide(z,C.length,C.eq(z));if(typeof n=="undefined")var n=!0;n&&t.auto&&x.stopShow(!0),slide=e,slide==G&&t.onFirstSlide(z,C.length,C.eq(z)),slide==Y&&t.onLastSlide(z,C.length,C.eq(z)),t.mode=="horizontal"?T.animate({left:"-"+s(slide,"left")+"px"},t.speed,t.easing,function(){Q=!1,t.onAfterSlide(z,C.length,C.eq(z))}):t.mode=="vertical"?T.animate({top:"-"+s(slide,"top")+"px"},t.speed,t.easing,function(){Q=!1,t.onAfterSlide(z,C.length,C.eq(z))}):t.mode=="fade"&&p(),o(),t.moveSlideQty>1&&(e=Math.floor(e/t.moveSlideQty)),h(e),f()}},this.goToNextSlide=function(e){if(typeof e=="undefined")var e=!0;e&&t.auto&&x.stopShow(!0);if(!t.infiniteLoop){if(!Q){var n=!1;z+=t.moveSlideQty,z<=Y?(o(),t.onNextSlide(z,C.length,C.eq(z)),x.goToSlide(z)):z-=t.moveSlideQty}}else if(!Q){Q=!0;var n=!1;z+=t.moveSlideQty,z>Y&&(z%=C.length,n=!0),t.onNextSlide(z,C.length,C.eq(z)),t.onBeforeSlide(z,C.length,C.eq(z));if(t.mode=="horizontal"){var r=t.moveSlideQty*O;T.animate({left:"-="+r+"px"},t.speed,t.easing,function(){Q=!1,n&&T.css("left","-"+s(z,"left")+"px"),t.onAfterSlide(z,C.length,C.eq(z))})}else if(t.mode=="vertical"){var i=t.moveSlideQty*U;T.animate({top:"-="+i+"px"},t.speed,t.easing,function(){Q=!1,n&&T.css("top","-"+s(z,"top")+"px"),t.onAfterSlide(z,C.length,C.eq(z))})}else t.mode=="fade"&&p();t.moveSlideQty>1?h(Math.ceil(z/t.moveSlideQty)):h(z),f()}},this.goToPreviousSlide=function(n){if(typeof n=="undefined")var n=!0;n&&t.auto&&x.stopShow(!0);if(!t.infiniteLoop){if(!Q){var r=!1;z-=t.moveSlideQty,z<0&&(z=0,t.hideControlOnEnd&&e(".bx-prev",k).hide()),o(),t.onPrevSlide(z,C.length,C.eq(z)),x.goToSlide(z)}}else if(!Q){Q=!0;var r=!1;z-=t.moveSlideQty,z<0&&(negativeOffset=z%C.length,negativeOffset==0?z=0:z=C.length+negativeOffset,r=!0),t.onPrevSlide(z,C.length,C.eq(z)),t.onBeforeSlide(z,C.length,C.eq(z));if(t.mode=="horizontal"){var i=t.moveSlideQty*O;T.animate({left:"+="+i+"px"},t.speed,t.easing,function(){Q=!1,r&&T.css("left","-"+s(z,"left")+"px"),t.onAfterSlide(z,C.length,C.eq(z))})}else if(t.mode=="vertical"){var u=t.moveSlideQty*U;T.animate({top:"+="+u+"px"},t.speed,t.easing,function(){Q=!1,r&&T.css("top","-"+s(z,"top")+"px"),t.onAfterSlide(z,C.length,C.eq(z))})}else t.mode=="fade"&&p();t.moveSlideQty>1?h(Math.ceil(z/t.moveSlideQty)):h(z),f()}},this.goToFirstSlide=function(e){if(typeof e=="undefined")var e=!0;x.goToSlide(G,e)},this.goToLastSlide=function(){if(typeof e=="undefined")var e=!0;x.goToSlide(Y,e)},this.getCurrentSlide=function(){return z},this.getSlideCount=function(){return C.length},this.stopShow=function(e){clearInterval(P);if(typeof e=="undefined")var e=!0;e&&t.autoControls&&(H.html(j).removeClass("stop").addClass("start"),I=!1)},this.startShow=function(e){if(typeof e=="undefined")var e=!0;y(),e&&t.autoControls&&(H.html(F).removeClass("start").addClass("stop"),I=!0)},this.stopTicker=function(e){T.stop();if(typeof e=="undefined")var e=!0;e&&t.ticker&&(H.html(j).removeClass("stop").addClass("start"),I=!1)},this.startTicker=function(e){if(t.mode=="horizontal"){if(t.tickerDirection=="next")var n=parseInt(T.css("left")),r=V+n+C.eq(0).width();else if(t.tickerDirection=="prev")var n=-parseInt(T.css("left")),r=n-C.eq(0).width();var i=r*t.tickerSpeed/V;g(J,r,i)}else if(t.mode=="vertical"){if(t.tickerDirection=="next")var s=parseInt(T.css("top")),r=$+s+C.eq(0).height();else if(t.tickerDirection=="prev")var s=-parseInt(T.css("top")),r=s-C.eq(0).height();var i=r*t.tickerSpeed/$;g(K,r,i);if(typeof e=="undefined")var e=!0;e&&t.ticker&&(H.html(F).removeClass("start").addClass("stop"),I=!0)}},this.initShow=function(){T=e(this),N=T.clone(),C=T.children(),k="",L=T.children(":first"),A=L.width(),R=0,O=L.outerWidth(),U=0,M=i(),_=r(),Q=!1,D="",z=0,W=0,X=0,P="",H="",B="",j="",F="",I=!0,q=!1,V=0,$=0,J=0,K=0,G=0,Y=C.length-1,C.each(function(t){e(this).outerHeight()>U&&(U=e(this).outerHeight()),e(this).outerWidth()>R&&(R=e(this).outerWidth())});if(t.randomStart){var n=Math.floor(Math.random()*C.length);z=n,W=O*(t.moveSlideQty+n),X=U*(t.moveSlideQty+n)}else z=t.startingSlide,W=O*(t.moveSlideQty+t.startingSlide),X=U*(t.moveSlideQty+t.startingSlide);E(),t.pager&&!t.ticker&&(t.pagerType=="full"?l("full"):t.pagerType=="short"&&l("short")),t.controls&&!t.ticker&&b();if(t.auto||t.ticker)t.autoControls&&m(),t.autoStart?setTimeout(function(){x.startShow(!0)},t.autoDelay):x.stopShow(!0),t.autoHover&&!t.ticker&&v();t.moveSlideQty>1?h(Math.ceil(z/t.moveSlideQty)):h(z),o(),t.captions&&f(),t.onAfterSlide(z,C.length,C.eq(z))},this.destroyShow=function(){clearInterval(P),e(".bx-next, .bx-prev, .bx-pager, .bx-auto",k).remove(),T.unwrap().unwrap().removeAttr("style"),T.children().removeAttr("style").not(".pager").remove(),C.removeClass("pager")},this.reloadShow=function(){x.destroyShow(),x.initShow()},this.each(function(){e(this).children().length>0&&x.initShow()}),this},jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var e=parseFloat(jQuery.css(this.elem,this.prop));return e}return this.elem[this.prop]}})(jQuery),$(function(){var e=$("#back-to-top"),t=$(document),n=e.offset(),r=90,i=!1;positionBackToTop=function(r){r&&(e.css({top:"",position:""}),n=e.offset()),!i&&t.scrollTop()>n.top+200?(i=!0,e.css({position:"fixed",top:20,left:n.left,display:" block"})):i&&t.scrollTop()<=n.top+200&&(i=!1,e.css({display:"none"}))},e.length&&(e.on("click",function(e){return $("html,body").animate({scrollTop:0},200),!1}),t.on("scroll",function(){positionBackToTop()})),$(".bx-wrapper, .bx-window").width(940)});var Swiftype=window.Swiftype||{};(function(){Swiftype.key="HTNahKf4xmo8GgFbTz4n",Swiftype.inputElement="#st-search-input",Swiftype.resultContainingElement="#st-results-container",Swiftype.attachElement="#st-search-input",Swiftype.renderStyle="overlay";var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//swiftype.com/embed.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();