(this.webpackJsonpgame2048=this.webpackJsonpgame2048||[]).push([[0],{13:function(e,t,n){e.exports=n(34)},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=n(1);function l(e){var t=e.score,n=e.bestScore;return r.a.createElement("header",{className:"heading"},r.a.createElement("h1",{className:"title"},"2048"),r.a.createElement("div",{className:"scores-container"},r.a.createElement("div",{className:"score-container",style:{marginRight:5}},t),r.a.createElement("div",{className:"best-container"},n)))}function s(){return r.a.createElement("div",{className:"above-game"},r.a.createElement("p",{className:"game-intro"},"Join the numbers and get to the ",r.a.createElement("strong",null,"2048 tile!")),r.a.createElement("a",{href:"/",className:"restart-button"},"New Game"))}var u=n(4),v=n.n(u),f=n(12),d=n(5);function m(e,t){return Math.floor(Math.random()*t+e)}function y(){var e=[],t=x(e);e.push(t);var n=x(e);return e.push(n),e}function b(e,t){return e.some((function(e){return e.x===t.x&&e.y===t.y}))}var g=0;function x(e){for(var t;!t||e&&b(e,t);)t={id:g++,x:m(1,4),y:m(1,4),value:2,isNew:void 0,isMerged:void 0};return t}var E=n(9),h=n(10),N={};function j(e,t){N[e]||(N[e]=[],Object(h.a)(e,(function(){return function(e){var t,n=Object(E.a)(N[e]);try{for(n.s();!(t=n.n()).done;){(0,t.value)()}}catch(a){n.e(a)}finally{n.f()}}(e)}))),N[e].push(t)}function p(e,t){N[e]=N[e].filter((function(e){return e!==t}))}function w(e){var t=e.tileList,n=e.setTileList,r=e.setScore;function i(e){var a=e.x,i=e.y,c=function(e){for(var t=e.tileList,n=e.x,a=e.y,r=0!==a,i=n+a<0,c=t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isMerged:!1,isNew:!1})})).filter((function(e){return!e.isDisabled})).sort((function(e,t){var n=r?e.x-t.x:e.y-t.y;return n||(r?i?e.y-t.y:t.y-e.y:i?e.x-t.x:t.x-e.x)})),o=i?1:4,l=o,s=0;s<c.length;s++){var u,v;if(r)c[s].y=l,l=i?l+1:l-1,c[s].x!==(null===(u=c[s+1])||void 0===u?void 0:u.x)&&(l=o);else c[s].x=l,l=i?l+1:l-1,c[s].y!==(null===(v=c[s+1])||void 0===v?void 0:v.y)&&(l=o)}for(var m=0,y=Object(f.a)(c),b=0;b<c.length;b++){var g,E,h,N,j;if(!c[b].isDisabled&&(m&&(r?c[b].x===(null===(g=c[b-1])||void 0===g?void 0:g.x):c[b].y===(null===(E=c[b-1])||void 0===E?void 0:E.y))?(r?c[b].y=m:c[b].x=m,m+=i?1:-1):m=0,(r?c[b].x===(null===(h=c[b+1])||void 0===h?void 0:h.x):c[b].y===(null===(N=c[b+1])||void 0===N?void 0:N.y))&&c[b].value===(null===(j=c[b+1])||void 0===j?void 0:j.value))){var p=x();p.x=c[b].x,p.y=c[b].y,p.isMerged=!0,p.value=2*c[b].value,y.push(p),c[b].isDisabled=!0,c[b+1].isDisabled=!0,r?(m=c[b+1].y,c[b+1].y=c[b].y):(m=c[b+1].x,c[b+1].x=c[b].x)}}return y}({tileList:t,x:a,y:i}),o=c.reduce((function(e,t){return t.isMerged?e+t.value:e}),0);r((function(e){return e+o}));var l=x(c);return l.isNew=!0,c.push(l),n(c),t}function c(){i({x:0,y:-1})}function o(){i({x:0,y:1})}function l(){i({x:-1,y:0})}function s(){i({x:1,y:0})}Object(a.useEffect)((function(){return j("up",c),j("down",o),j("left",l),j("right",s),function(){p("up",c),p("down",o),p("left",l),p("right",s)}}))}var O=n(11),S=n.n(O);function M(e){var t=e.x,n=e.y,a=e.value,i=e.isMerged,c=e.isNew;return r.a.createElement("div",{className:S()("tile tile-".concat(a," tile-position-").concat(t,"-").concat(n),{"tile-merged":i,"tile-new":c})},r.a.createElement("div",{className:"tile-inner"},a))}function L(e){var t=e.setScore,n=Object(a.useState)(y),i=Object(o.a)(n,2),c=i[0];return w({tileList:c,setTileList:i[1],setScore:t}),r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"grid-container"},v()(4,(function(e){return r.a.createElement("div",{key:e,className:"grid-row"},v()(4,(function(e){return r.a.createElement("div",{key:e,className:"grid-cell"})})))}))),r.a.createElement("div",{className:"tile-container"},c.map((function(e){return r.a.createElement(M,Object.assign({key:e.id},e))}))))}function k(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],c=function(e,t){var n=Object(a.useState)(t),r=Object(o.a)(n,2),i=r[0],c=r[1];return Object(a.useEffect)((function(){var t=window.localStorage.getItem(e);t&&c(Number(t))}),[e]),Object(a.useEffect)((function(){var t=window.localStorage.getItem(e),n=String(i);t!==n&&window.localStorage.setItem(e,n)}),[e,i]),[i,c]}("bestScore",0),u=Object(o.a)(c,2),v=u[0],f=u[1];return Object(a.useEffect)((function(){n>v&&f(n)})),r.a.createElement("div",{className:"container"},r.a.createElement(l,{score:n,bestScore:v}),r.a.createElement(s,null),r.a.createElement(L,{setScore:i}))}n(33);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b008866a.chunk.js.map