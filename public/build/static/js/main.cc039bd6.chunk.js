(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(12),a=c.n(i),j=(c(17),c(18),c(0)),r=function(){return Object(j.jsxs)("div",{className:"pt-5 pb-2 bg-info text-white",children:[Object(j.jsx)("h3",{className:"fs-1 fw-bolder",children:"Web Developer Team"}),Object(j.jsx)("p",{children:Object(j.jsx)("small",{className:"fw-lighter",children:"\u201cPerfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.\u201d \u2013 Antoine de Saint-Exupery"})}),Object(j.jsx)("h5",{className:"fw-light",children:"Meet our awesome team members."}),Object(j.jsx)("p",{className:"fs-2",children:"Total project : 180"})]})},l=c(11),o=c(8),b=c(3),d=c(4),h=(c(25),function(e){var t=Object(j.jsx)(b.a,{icon:d.e}),c=e.meet;return Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("p",{children:[t,Object(j.jsx)("span",{className:"ps-1",children:c})]})})}),m=(c(26),function(e){var t=Object(j.jsx)(b.a,{icon:d.g}),c=Object(j.jsx)(b.a,{icon:d.a}),s=Object(j.jsx)(b.a,{icon:d.b}),n=e.member,i=n.name,a=n.Skill,r=n.sallery,l=n.age,o=n.img,h=n.projectCompete,m=n.email;return Object(j.jsx)("div",{className:"col-md-4 px-2 py-3",children:Object(j.jsxs)("div",{className:" row-shadow  bg-white",children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)("img",{src:o,className:"person-img p-0",alt:""})}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h5",{children:i}),Object(j.jsxs)("p",{children:["Skill : ",a]}),Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsxs)("p",{children:["Salary :",r,"$ |"]}),Object(j.jsxs)("p",{children:["|  Age:",l]})]}),Object(j.jsxs)("p",{className:"cursor-zoom-in",children:[s," ",m]}),Object(j.jsxs)("p",{children:["Project Finish  : ",h," ",c]})]}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsxs)("button",{type:"button",className:"btn btn-outline-info bg-info text-white w-75",onClick:function(){return e.addMember(i,h)},children:[t," ",Object(j.jsx)("span",{className:"mx-1",children:"ADD to Meeting"})," "]})})]})})}),x=(c(27),function(){var e=Object(j.jsx)(b.a,{icon:d.c}),t=Object(j.jsx)(b.a,{icon:d.f}),c=Object(j.jsx)(b.a,{icon:d.d}),n=Object(s.useState)([]),i=Object(o.a)(n,2),a=i[0],r=i[1],x=Object(s.useState)([]),O=Object(o.a)(x,2),u=O[0],f=O[1],p=Object(s.useState)([]),g=Object(o.a)(p,2),N=g[0],v=g[1],w=function(e,t){var c=[].concat(Object(l.a)(N),[t]);v(c);var s=[].concat(Object(l.a)(u),[e]);f(s)},y=0;return N.forEach((function(e){y+=e})),Object(s.useEffect)((function(){fetch("https://k17h02.github.io/api/userDtails.json").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)}))}),[]),Object(j.jsx)("div",{className:"background-set ",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row g-0",children:[Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)("div",{className:"row g-0",children:a.map((function(e){return Object(j.jsx)(m,{member:e,addMember:w},e.key)}))})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"col-md-12  custom-style  bg-light ms-5 sticky-top",children:[Object(j.jsx)("h2",{className:"shadow-lg p-2 rounded bg-white",children:"List for Meeting"}),Object(j.jsxs)("h4",{children:[t,"Total Member : ",Object(j.jsx)("span",{className:"text-info",children:u.length})," "]}),Object(j.jsxs)("h4",{children:[c," Total Project : ",Object(j.jsx)("span",{className:"text-info",children:y})," "]}),Object(j.jsx)("div",{className:"row px-4 d-flex jusify-content-center",children:u.map((function(e){return Object(j.jsx)(h,{meet:e})}))}),Object(j.jsxs)("button",{type:"button",className:"btn btn-outline-info bg-info text-white w-50 rounded",children:[e," ",Object(j.jsx)("span",{className:"mx-1",children:"Start Meeting"})," "]})]})})]})})})});var O=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(r,{}),Object(j.jsx)(x,{})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),u()}},[[28,1,2]]]);
//# sourceMappingURL=main.cc039bd6.chunk.js.map