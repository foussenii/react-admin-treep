(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{427:function(e,t,a){e.exports=a(833)},432:function(e,t,a){},740:function(e,t){},742:function(e,t){},833:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),o=a.n(c),i=(a(432),a(855)),l=a(854),s=a(218),u=function(e,t){if(e===s.d){var a=t.username;return localStorage.setItem("username",a),Promise.resolve()}if(e===s.e)return localStorage.removeItem("username"),Promise.resolve();if(e===s.b){var n=t.status;return 401===n||403===n?(localStorage.removeItem("username"),Promise.reject()):Promise.resolve()}return e===s.a?localStorage.getItem("username")?Promise.resolve():Promise.reject():Promise.reject("Unknown method")},m=a(61),d=a.n(m),f=a(76),E=a.n(f),g=a(378),p=a.n(g),h=function(){return r.a.createElement(d.a,null,r.a.createElement(p.a,{title:" bienvenue dans l'administration"}),r.a.createElement(E.a,null,"c'est ici que tout commence "))},y=a(181),v=a(219),w=a(142),b=a(840),O=a(112),S="my.api.url",P=function(e,t,a){var n=b.a.fetchJson,r=function(e,t,a){switch(e){case w.d:var n=a.pagination,r=n.page,c=n.perPage,o=a.sort,i=o.field,l=o.order,s={sort:JSON.stringify([i,l]),range:JSON.stringify([(r-1)*c,r*c-1]),filter:JSON.stringify(a.filter)};return{url:"".concat(S,"/").concat(t,"?").concat(Object(O.stringify)(s))};case w.g:return{url:"".concat(S,"/").concat(t,"/").concat(a.id)};case w.e:var u={filter:JSON.stringify({id:a.ids})};return{url:"".concat(S,"/").concat(t,"?").concat(Object(O.stringify)(u))};case w.f:var m=a.pagination,d=m.page,f=m.perPage,E=a.sort,g=E.field,p=E.order,h={sort:JSON.stringify([g,p]),range:JSON.stringify([(d-1)*f,d*f-1]),filter:JSON.stringify(Object(v.a)({},a.filter,Object(y.a)({},a.target,a.id)))};return{url:"".concat(S,"/").concat(t,"?").concat(Object(O.stringify)(h))};case w.h:return{url:"".concat(S,"/").concat(t,"/").concat(a.id),options:{method:"PUT",body:JSON.stringify(a.data)}};case w.a:return{url:"".concat(S,"/").concat(t),options:{method:"POST",body:JSON.stringify(a.data)}};case w.b:return{url:"".concat(S,"/").concat(t,"/").concat(a.id),options:{method:"DELETE"}};default:throw new Error("Unsupported fetch action type ".concat(e))}}(e,t,a);return n(r.url,r.options).then(function(t){return function(e,t,a,n){var r=e.headers,c=e.json;switch(t){case w.d:return{data:c.map(function(e){return e}),total:parseInt(r.get("content-range").split("/").pop(),10)};case w.a:return{data:Object(v.a)({},n.data,{id:c.id})};default:return{data:c}}}(t,e,0,a)})},j=a(858),J=a(842),N=a(861),I=a(844),k=a(856),T=a(111),x=a(845),D=a(859),U=a(847),L=a(863),q=a(848),B=a(865),W=a(857),C=a(850),$=a(862),_=a(851),z=function(e){var t=e.record;return r.a.createElement("span",null,"Post ",t?'"'.concat(t.title,'"'):"")},A=function(e){return r.a.createElement(j.a,e,r.a.createElement(J.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(N.a,{label:"User",source:"userId",reference:"users",allowEmpty:!0},r.a.createElement(I.a,{optionText:"name"})))},F=function(e){return r.a.createElement(k.a,Object.assign({},e,{filters:r.a.createElement(A,null)}),r.a.createElement(T.a,{small:r.a.createElement(x.a,{primaryText:function(e){return e.title},secondaryText:function(e){return"".concat(e.views," views")},tertiaryText:function(e){return new Date(e.published_at).toLocaleDateString()}}),medium:r.a.createElement(D.a,null,r.a.createElement(U.a,{source:"id"}),r.a.createElement(L.a,{label:"User",source:"userId",reference:"users"},r.a.createElement(U.a,{source:"name"})),r.a.createElement(U.a,{source:"title"}),r.a.createElement(q.a,null))}))},G=function(e){return r.a.createElement(B.a,e,r.a.createElement(W.a,null,r.a.createElement(N.a,{source:"userId",reference:"users"},r.a.createElement(I.a,{optionText:"name"})),r.a.createElement(J.a,{source:"title"}),r.a.createElement(C.a,{source:"body"})))},H=function(e){return r.a.createElement($.a,Object.assign({title:r.a.createElement(z,null)},e),r.a.createElement(W.a,null,r.a.createElement(_.a,{source:"id"}),r.a.createElement(N.a,{source:"userId",reference:"users"},r.a.createElement(I.a,{optionText:"name"})),r.a.createElement(J.a,{source:"title"}),r.a.createElement(C.a,{source:"body"})))},K=a(852),M=a(4),Q=a(713),R=a.n(Q),V=Object(M.withStyles)({link:{textDecoration:"none"},icon:{width:"0.5em",paddingLeft:2}})(function(e){var t=e.record,a=void 0===t?{}:t,n=e.source,c=e.classes;return r.a.createElement("a",{href:a[n],classeName:c.link},a[n],r.a.createElement(R.a,{classeName:c.link}))}),X=function(e){return r.a.createElement(k.a,e,r.a.createElement(D.a,{rowClick:"edit"},r.a.createElement(U.a,{source:"id"}),r.a.createElement(U.a,{source:"name"}),r.a.createElement(K.a,{source:"email"}),r.a.createElement(U.a,{source:"phone"}),r.a.createElement(V,{source:"website"}),r.a.createElement(U.a,{source:"company.name"})))},Y=a(737),Z=a.n(Y),ee=a(736),te=a.n(ee),ae=a(735),ne=a.n(ae),re=function(){return r.a.createElement(i.a,{dataProvider:P,authProvider:u,Dashboard:h},r.a.createElement(l.a,{name:"dashboard",list:h,icon:ne.a}),r.a.createElement(l.a,{name:"users",list:X,icon:te.a}),r.a.createElement(l.a,{name:"posts",list:F,edit:H,create:G,icon:Z.a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[427,2,1]]]);
//# sourceMappingURL=main.87b25011.chunk.js.map