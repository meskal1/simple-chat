"use strict";(self.webpackChunkchat_websocket=self.webpackChunkchat_websocket||[]).push([[787],{787:function(e,t,n){function i(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}}function r(e,t){try{var n;if(PerformanceObserver.supportedEntryTypes.includes(e)&&("first-input"!==e||"PerformanceEventTiming"in self))return(n=new PerformanceObserver((function(e){return e.getEntries().map(t)}))).observe({type:e,buffered:!0}),n}catch(e){}}function a(e,t){function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)}function o(e,t,n){var i;return function(r){0<=t.value&&(r||n)&&(t.delta=t.value-(i||0),t.delta||void 0===i)&&(i=t.value,e(t))}}function u(){return h<0&&(h=g(),T(),l((function(){setTimeout((function(){h=g(),T()}),0)}))),{get firstHiddenTime(){return h}}}function c(e,t){m||(m=t,p=e,d=new Date,f(removeEventListener),s())}function s(){var e;0<=p&&p<d-b&&(e={entryType:"first-input",name:m.type,target:m.target,cancelable:m.cancelable,startTime:m.timeStamp,processingStart:m.timeStamp+p},v.forEach((function(t){t(e)})),v=[])}function f(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,k,S)}))}n.r(t),n.d(t,{getCLS:function(){return L},getFCP:function(){return y},getFID:function(){return F},getLCP:function(){return P},getTTFB:function(){return D}});var m,p,d,v,l=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},h=-1,g=function(){return"hidden"===document.visibilityState?0:1/0},T=function(){a((function(e){e=e.timeStamp,h=e}),!0)},y=function(e,t){function n(e){"first-contentful-paint"===e.name&&(m&&m.disconnect(),e.startTime<c.firstHiddenTime)&&(s.value=e.startTime,s.entries.push(e),a(!0))}var a,c=u(),s=i("FCP"),f=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],m=f?null:r("paint",n);(f||m)&&(a=o(e,s,t),f&&n(f),l((function(n){s=i("FCP"),a=o(e,s,t),requestAnimationFrame((function(){requestAnimationFrame((function(){s.value=performance.now()-n.timeStamp,a(!0)}))}))})))},E=!1,w=-1,L=function(e,t){function n(t){-1<w&&e(t)}function u(e){var t,n;e.hadRecentInput||(t=p[0],n=p[p.length-1],m&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(m+=e.value,p.push(e)):(m=e.value,p=[e]),m>f.value&&(f.value=m,f.entries=p,c()))}E||(y((function(e){w=e.value})),E=!0);var c,s,f=i("CLS",0),m=0,p=[];(s=r("layout-shift",u))&&(c=o(n,f,t),a((function(){s.takeRecords().map(u),c(!0)})),l((function(){w=-1,f=i("CLS",m=0),c=o(n,f,t)})))},S={passive:!0,capture:!0},b=new Date,k=function(e){var t,n,i,r;function a(){c(n,i),r()}function o(){r()}e.cancelable&&(t=(1e12<e.timeStamp?new Date:performance.now())-e.timeStamp,"pointerdown"==e.type?(n=t,i=e,r=function(){removeEventListener("pointerup",a,S),removeEventListener("pointercancel",o,S)},addEventListener("pointerup",a,S),addEventListener("pointercancel",o,S)):c(t,e))},F=function(e,t){function n(e){e.startTime<c.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),g(!0))}var c=u(),d=i("FID"),h=r("first-input",n),g=o(e,d,t);h&&a((function(){h.takeRecords().map(n),h.disconnect()}),!0),h&&l((function(){d=i("FID"),g=o(e,d,t),v=[],p=-1,m=null,f(addEventListener),v.push(n),s()}))},C={},P=function(e,t){function n(e){var t=e.startTime;t<f.firstHiddenTime&&(m.value=t,m.entries.push(e),c())}var c,s,f=u(),m=i("LCP"),p=r("largest-contentful-paint",n);p&&(c=o(e,m,t),s=function(){C[m.id]||(p.takeRecords().map(n),p.disconnect(),C[m.id]=!0,c(!0))},["keydown","click"].forEach((function(e){addEventListener(e,s,{once:!0,capture:!0})})),a(s,!0),l((function(n){m=i("LCP"),c=o(e,m,t),requestAnimationFrame((function(){requestAnimationFrame((function(){m.value=performance.now()-n.timeStamp,C[m.id]=!0,c(!0)}))}))})))},D=function(e){var t=i("TTFB"),n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e,t=performance.timing,n={entryType:"navigation",startTime:0};for(e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now()||(t.entries=[n],e(t))}catch(n){}};"complete"===document.readyState?setTimeout(n,0):addEventListener("load",(function(){return setTimeout(n,0)}))}}}]);