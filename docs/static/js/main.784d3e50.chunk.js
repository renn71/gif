(this.webpackJsonpgiphy=this.webpackJsonpgiphy||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c(5),i=c.n(a),s=(c(12),c(2)),j=function(e){var t=e.setCategories,c=e.setLimit,a=Object(r.useState)(""),i=Object(s.a)(a,2),j=i[0],d=i[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(j),c(10),d("")},children:Object(n.jsx)("input",{type:"text",value:j,onChange:function(e){d(e.target.value)},placeholder:"\ud83d\udd0e"})})})},d=c(4),o=c.n(d),l=c(6),u=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n,r,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=").concat(c,"&api_key=acVf25n0dfnwMkrs0g3RaydjUqB5CV4c&offset=2"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,i=a.data,s=i.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),b=function(e){var t=e.item;return Object(n.jsx)("div",{className:"card animate__animated animate__bounce",children:Object(n.jsx)("img",{onClick:function(e){navigator.clipboard.writeText(t.url)},src:t.url,alt:""})})},h=function(e){var t=e.category,c=function(e,t){var c=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(c,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){u(e,t).then((function(e){i({data:e,loading:!1})}))}),[e,t]),a}(t,e.limit),a=c.data,i=c.loading;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"text-center mt-4",children:Object(n.jsx)("h3",{children:t})}),i&&Object(n.jsx)("p",{children:"Loading"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-8 offset-2 mt-5",children:Object(n.jsx)("div",{className:"card-container text-center",children:a.map((function(e){return Object(n.jsx)(b,{item:e},e.id)}))})})})]})},m=function(){var e=Object(r.useState)("hi"),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)(10),d=Object(s.a)(i,2),o=d[0],l=d[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-6 offset-3",children:[Object(n.jsx)("div",{className:"text-center mt-5",children:Object(n.jsx)("h1",{children:Object(n.jsx)("b",{children:"Gif Expert App \ud83c\udf87"})})}),Object(n.jsx)("hr",{})]})})}),Object(n.jsxs)("div",{className:"mb-5 mt-3",children:[Object(n.jsx)("div",{className:"text-center ",children:Object(n.jsx)(j,{setCategories:a,setLimit:l})}),Object(n.jsx)(h,{category:c,limit:o}),";",Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{onClick:function(){l(o+10)},children:"MORE"})})]}),Object(n.jsx)("footer",{className:"row bg-dark text-center mt-5 h-100",children:Object(n.jsx)("h4",{children:"Development by Naiar \ud83d\udcd0"})})]})};i.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.784d3e50.chunk.js.map