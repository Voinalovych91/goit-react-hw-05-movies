"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{93:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,i,u,o,s,p=e(439),f=e(791),d=e(689),l=e(228),h=e(168),x=e(686),m=x.Z.ul(r||(r=(0,h.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px 10px;\n  justify-content: center;\n"]))),v=x.Z.li(a||(a=(0,h.Z)(["\n  flex-basis: 150px;\n  width: 200px;\n  height: 300px;\n\n  position: relative;\n"]))),Z=x.Z.div(c||(c=(0,h.Z)(["\n  position: absolute; \n\tbottom:0;\n"]))),g=x.Z.img(i||(i=(0,h.Z)(["\n  margin-bottom: 5px;\n  border-radius: 4px;\n  width: 100%;\n"]))),w=x.Z.p(u||(u=(0,h.Z)(["\n  margin-bottom: 5px;\n  font-weight: 500;\n"]))),b=x.Z.p(o||(o=(0,h.Z)(["\n  color: #312754;\n"]))),k=x.Z.p(s||(s=(0,h.Z)(["\n  color: #312754;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),j=e(184),y=function(){var n=(0,f.useState)(null),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,d.UO)().movieId;if((0,f.useEffect)((function(){(0,l.zv)(a).then(r)}),[a]),e)return(0,j.jsxs)(m,{children:[0===e.length&&(0,j.jsx)(k,{children:"Nothing"}),e.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return e?(0,j.jsxs)(v,{children:[(0,j.jsx)(g,{src:"https://image.tmdb.org/t/p/w500/".concat(e),alt:""}),(0,j.jsxs)(Z,{children:[(0,j.jsx)(w,{children:r}),(0,j.jsx)(b,{children:a})]})]},t):(0,j.jsxs)(v,{children:[(0,j.jsx)(g,{src:"https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png",alt:""}),(0,j.jsxs)(Z,{children:[(0,j.jsx)(w,{children:r}),(0,j.jsx)(b,{children:a})]})]},t)}))]})}},228:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return s},tx:function(){return d},z1:function(){return p},zv:function(){return f}});var r=e(861),a=e(687),c=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="e9e1ce2d3882ce34d9293036748dc823",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/week?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=93.6c8f2488.chunk.js.map