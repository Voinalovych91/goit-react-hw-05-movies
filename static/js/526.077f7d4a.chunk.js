"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{526:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,s,a,i,o,c,u,p=t(439),d=t(791),l=t(689),x=t(87),f=t(228),h=t(168),v=t(686),m=v.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),w=v.Z.img(s||(s=(0,h.Z)(["\n  border-radius: 4px;\n  box-shadow: #312754;\n height: 100%;\n"]))),j=v.Z.div(a||(a=(0,h.Z)([""]))),g=v.Z.h2(i||(i=(0,h.Z)(["\n  margin-bottom: 45px;\n  font-weight: 700;\n  font-size: 36px;\n  color: #312754;\n  text-shadow: #312754;\n"]))),Z=v.Z.span(o||(o=(0,h.Z)(["\n  font-weight: 200;\n  color: #4c1130;\n"]))),b=v.Z.p(c||(c=(0,h.Z)(["\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n  color: #741b47;\n"]))),k=v.Z.span(u||(u=(0,h.Z)(["\n  font-weight: 300;\n  letter-spacing: 0.05em;\n  color: #741b47;\n"]))),y=t(184);var _,z,U=function(n){var e=n.movie,t=e.poster_path,r=e.title,s=e.release_date,a=e.vote_average,i=e.overview,o=e.genres,c=s.slice(0,4),u=a.toFixed(1),p=o.map((function(n){return n.name})).join(", ");return t?(0,y.jsxs)(m,{children:[(0,y.jsx)(w,{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:"{title}",width:"350"}),(0,y.jsxs)(j,{children:[(0,y.jsxs)(g,{children:[r," ",(0,y.jsxs)(Z,{children:["(",c,")"]})]}),(0,y.jsxs)(b,{children:["User score: ",(0,y.jsx)(k,{children:u})]}),(0,y.jsxs)(b,{children:["Overview: ",(0,y.jsx)(k,{children:i})]}),(0,y.jsxs)(b,{children:["Genres: ",(0,y.jsx)(k,{children:p})]})]})]}):(0,y.jsxs)(m,{children:[(0,y.jsx)(w,{src:"https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png",alt:"{title}",width:"350"}),(0,y.jsxs)(j,{children:[(0,y.jsxs)(g,{children:[r," ",(0,y.jsxs)(Z,{children:["(",c,")"]})]}),(0,y.jsxs)(b,{children:["User score: ",(0,y.jsx)(k,{children:u})]}),(0,y.jsxs)(b,{children:["Overview: ",(0,y.jsx)(k,{children:i})]}),(0,y.jsxs)(b,{children:["Genres: ",(0,y.jsx)(k,{children:p})]})]})]})},O=v.Z.div(_||(_=(0,h.Z)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: flex;\n  justify-content: left;\n\n  text-decoration: none;\n"]))),C=(0,v.Z)(x.OL)(z||(z=(0,h.Z)(["\n  display: inline-block;\n  padding: 8px 14px;\n\n  font-weight: 500;\n  font-size: 18px;\n\n  border-radius: 4px;\n\n  border: none;\n  color: #574191;\n\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  \n  margin-right: 10px;\n\n  &.active {\n    color: #fa0093;\n    outline: 1px solid #fa0093;;\n    box-shadow: 0px 0px 0px 1px #fa0093;\n  }\n\n  :hover,\n  :focuds {\n    color: #fa0093;\n    outline: 1px solid #fa0093;;\n    box-shadow: 0px 0px 0px 1px #fa0093;\n  }\n\n"])));var G=function(){var n,e,t=(0,d.useState)(null),r=(0,p.Z)(t,2),s=r[0],a=r[1],i=(0,l.UO)().movieId,o=(0,l.TH)();if((0,d.useEffect)((function(){(0,f.TP)(i).then(a)}),[i]),!s)return null;var c=null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.rU,{to:c,children:"\u2190 Go back"}),(0,y.jsx)(U,{movie:s}),(0,y.jsxs)(O,{children:[(0,y.jsx)(C,{to:"cast",state:{from:c},children:"Cast"}),(0,y.jsx)(C,{to:"reviews",state:{from:c},children:"Reviews"})]}),(0,y.jsx)(d.Suspense,{children:(0,y.jsx)(l.j3,{})})]})}},228:function(n,e,t){t.d(e,{Df:function(){return c},TP:function(){return u},tx:function(){return l},z1:function(){return p},zv:function(){return d}});var r=t(861),s=t(687),a=t.n(s),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="e9e1ce2d3882ce34d9293036748dc823",c=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/week?api_key=".concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=526.077f7d4a.chunk.js.map