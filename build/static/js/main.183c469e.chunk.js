(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{11:function(e,t,n){},37:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(25),r=n.n(i),l=n(9),o=(n(37),n(4));n(46);var j=[{title:"Register",path:"/marketing",cName:"dropdown-link"},{title:"Login",path:"/consulting",cName:"dropdown-link"}];n(47);var d=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{onClick:function(){return s(!n)},className:n?"dropdown-menu clicked":"dropdown-menu",children:j.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{className:e.cName,to:e.path,onClick:function(){return s(!1)},children:e.title})},t)}))})})};var u=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),j=r[0],u=r[1],b=function(){return s(!1)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)(o.b,{to:"/",className:"navbar-logo",onClick:b,children:"MAVIZENT"}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(c.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(c.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:"/",className:"nav-links",onClick:b,children:"HOME"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:"/products",className:"nav-links",onClick:b,children:"PRODUCTS"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:"/contact-us",className:"nav-links",onClick:b,children:"CONTACT US"})}),Object(c.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?u(!1):u(!0)},onMouseLeave:function(){window.innerWidth,u(!1)},children:[Object(c.jsxs)(o.b,{to:"/services",className:"nav-links",onClick:b,children:["ACCOUNT"," ",Object(c.jsx)("span",{className:"arrow",children:window.innerWidth>960?j?Object(c.jsx)("i",{className:"fas  fa-angle-up"}):Object(c.jsx)("i",{className:"fas arrow fa-angle-down"}):null})]}),j&&Object(c.jsx)(d,{})]})]})]})})},b=(n(48),[{title:"VOILE",path:"/",cName:"nav-linkstwo"},{title:"CAMBRIC",path:"/",cName:"nav-linkstwo"},{title:"POPLIN",path:"/",cName:"nav-linkstwo"},{title:"CANVAS",path:"/",cName:"nav-linkstwo"},{title:"JACQUARD",path:"/",cName:"nav-linkstwo"},{title:"PLAINJERSY",path:"/",cName:"nav-linkstwo"},{title:"FLATKNIT",path:"/",cName:"nav-linkstwo"},{title:"SPECIALITY",path:"/",cName:"nav-linkstwo"},{title:"SPECIALJERSY",path:"/",cName:"nav-linkstwo"}]);var m=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1]),s=Object(a.useState)(!1),i=Object(l.a)(s,2),r=i[0],j=i[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbartwo",children:Object(c.jsxs)("ul",{className:"nav-menutwo",children:[Object(c.jsxs)("li",{className:"nav-itemtwo",onMouseEnter:function(){window.innerWidth<960?j(!1):j(!0)},onMouseLeave:function(){window.innerWidth,j(!1)},children:[Object(c.jsxs)(o.b,{to:"/services",className:"nav-linkstwo",onClick:function(){return n(!1)},children:["COTTON"," ",Object(c.jsx)("span",{className:"arrow",children:window.innerWidth>960?r?Object(c.jsx)("i",{className:"fas  fa-angle-up"}):Object(c.jsx)("i",{className:"fas arrow fa-angle-down"}):null})]}),r&&Object(c.jsx)(d,{})]}),b.map((function(e,t){return Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:e.path,className:e.cName,children:e.title})},t)}))]})})})},h=(n(11),n(49),n(27)),O=n(28),p=n(31),x=n(30),N=(n(50),n(51),function(e){var t=e.item,n=t.title,a=t.disPrice,s=t.oriPrice,i=t._id;return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("img",{className:"image",src:"https://b2b-backendd.herokuapp.com/products/".concat(i,"/image"),alt:"product title"})}),Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("p",{className:"title",children:n}),Object(c.jsxs)("div",{className:"price",children:[Object(c.jsxs)("p",{className:"dis-price",children:["$ ",a]}),Object(c.jsxs)("p",{className:"ori-price",children:["$ ",s]})]})]})]})}),v=n(29),f=n.n(v),w=function(e){Object(p.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).state={products:[],Loading:!1},c}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({Loading:!0}),f.a.get("https://b2b-backendd.herokuapp.com/products").then((function(t){e.setState({products:t.data},(function(){console.log(e.state.products),e.setState({Loading:!1})}))}))}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"card-list",children:this.state.products.map((function(e,t){return Object(c.jsx)(N,{item:e},t)}))})}}]),n}(s.a.Component);function k(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"home-container",children:Object(c.jsx)(w,{})})})}var g=n(2);function C(){return Object(c.jsx)("h1",{className:"services",children:"SERVICES"})}function S(){return Object(c.jsx)("h1",{className:"products",children:"PRODUCTS"})}function A(){return Object(c.jsx)("h1",{className:"contact-us",children:"CONTACT"})}function E(){return Object(c.jsx)("h1",{className:"sign-up",children:"LIKE & SUBSCRIBE"})}function I(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"marketing",children:"MARKETING"})})}function T(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{className:"consulting",children:"CONSULTING"})})}var L=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(m,{}),Object(c.jsxs)(g.c,{children:[Object(c.jsx)(g.a,{path:"/",exact:!0,component:k}),Object(c.jsx)(g.a,{path:"/services",component:C}),Object(c.jsx)(g.a,{path:"/products",component:S}),Object(c.jsx)(g.a,{path:"/contact-us",component:A}),Object(c.jsx)(g.a,{path:"/sign-up",component:E}),Object(c.jsx)(g.a,{path:"/marketing",component:I}),Object(c.jsx)(g.a,{path:"/consulting",component:T})]})]})})};r.a.render(Object(c.jsx)(L,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.183c469e.chunk.js.map