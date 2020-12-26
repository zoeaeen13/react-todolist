(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var o=t(1),c=t(0),a=t(12),i=t.n(a),r=t(2),d=t(16),u=t(8),s=t(3),l=t(4),b=Object(c.createContext)(null);function j(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background: white;\n\n  "," {\n    flex-wrap: wrap;\n    justify-content: center;\n\n    button {\n      margin: 10px 0;\n    }\n\n    div {\n      margin: 0 10px;\n    }\n  }\n"]);return j=function(){return n},n}function p(){var n=Object(s.a)(["\n  margin: 0 auto;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  button {\n    margin: 0 10px;\n  }\n\n  input {\n    box-sizing: border-box;\n    border: none;\n    border-radius: 3px;\n    padding: 5px;\n    width: 70%;\n    background: #a3d2ca;\n\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  border-radius: 1.5px;\n  padding: 10px 0 20px 0;\n  width: 100%;\n  background: #5eaaa8;\n  text-align: center;\n\n  h1 {\n    margin: 10px;\n    font-size: 2rem;\n    color: white;\n  }\n"]);return h=function(){return n},n}var x=l.a.form(h()),f=l.a.div(p()),O=l.a.section(j(),"@media (max-width: 576px)");function g(n){var e=n.typeName,t=n.selectedType,c=n.handleSelectType;return Object(o.jsxs)("label",{className:"btn btn-secondary ".concat(t===e?"active":""),children:[Object(o.jsx)("input",{type:"radio",name:"options",onClick:function(){c(e)}}),e]})}function m(n){var e=n.value,t=n.handleInputChnage,c=n.handleAddTodo;return Object(o.jsxs)(x,{onSubmit:c,children:[Object(o.jsx)("h1",{children:"TODOs"}),Object(o.jsxs)(f,{children:[Object(o.jsx)("input",{type:"text",placeholder:"Let's do something!",onChange:t,value:e}),Object(o.jsx)("button",{className:"btn btn-light",children:"Add"})]})]})}function v(n){var e=n.handleClearTodos,t=n.handleSelectType,a=Object(c.useContext)(b).selectedType;return Object(o.jsxs)(O,{children:[Object(o.jsx)("button",{className:"btn btn-danger",onClick:e,children:"Clear"}),Object(o.jsx)("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons",children:["All","Completed","Incomplete"].map((function(n,e){return Object(o.jsx)(g,{typeName:n,selectedType:a,handleSelectType:t},e)}))})]})}function w(){var n=Object(s.a)(["\n  background: white;\n  box-shadow: 4px 4px 25px #f0f0f0;\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  margin: 10vh auto;\n  width: 90vw;\n  "," {\n    width: 60vw;\n  }\n"]);return y=function(){return n},n}var T=l.a.div(y(),"@media (min-width: 768px)"),C=l.a.section(w()),D=t.p+"static/media/check.30036e3a.svg",S=t.p+"static/media/uncheck.50bf432c.svg",k=t.p+"static/media/delete.7f39c7af.svg";function N(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  padding: 8px;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n\n  img {\n    width: 90%;\n    height: 90%;\n    object-fit: cover;\n  }\n"]);return N=function(){return n},n}function A(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border: 1px solid transparent;\n\n  &:hover {\n    box-shadow: 0px 2px 10px #eeeeee;\n  }\n\n  input {\n    width: 80%;\n    border: none;\n    border-bottom: 1px solid transparent;\n    ","\n\n    &:focus {\n      outline: none;\n      border-color: #eeeeee;\n    }\n  }\n"]);return A=function(){return n},n}var I=l.a.div(A(),(function(n){return n.isDone&&"\n    color: gray;\n    text-decoration: line-through;  \n  "})),z=l.a.div(N());function E(n){var e=n.todo,t=n.handleToggleTodo,c=n.handlgeEditTodo,a=n.handleDeleteTodo;return Object(o.jsxs)(I,{isDone:e.isDone,children:[Object(o.jsx)(z,{children:Object(o.jsx)("img",{alt:"",src:e.isDone?D:S,onClick:function(){t(e.id)}})}),Object(o.jsx)("input",{type:"text",id:e.id,value:e.content,readOnly:e.isDone,onChange:c}),Object(o.jsx)(z,{children:Object(o.jsx)("img",{alt:"",src:k,onClick:function(){a(e.id)}})})]})}var J=1;var B=function(){var n=Object(c.useState)("All"),e=Object(u.a)(n,2),t=e[0],a=e[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),l=s[0],j=s[1],p=Object(c.useState)([]),h=Object(u.a)(p,2),x=h[0],f=h[1];function O(n){f(x.filter((function(e){return e.id!==n})))}function g(n){f(x.map((function(e){return e.id!==n?e:Object(r.a)(Object(r.a)({},e),{},{isDone:!e.isDone})})))}function w(n){f(x.map((function(e){return e.id!==Number(n.target.id)?e:Object(r.a)(Object(r.a)({},e),{},{content:n.target.value})})))}return Object(o.jsx)(b.Provider,{value:{selectedType:t},children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(T,{children:[Object(o.jsx)(m,{value:l,handleInputChnage:function(n){j(n.target.value)},handleAddTodo:function(n){n.preventDefault(),""!==l&&(f([{id:J,content:l,isDone:!1,isShowed:"Completed"!==t}].concat(Object(d.a)(x))),J+=1,j(""))}}),Object(o.jsx)(v,{handleSelectType:function(n){switch(a(n),n){case"Completed":f(x.map((function(n){return n.isDone?Object(r.a)(Object(r.a)({},n),{},{isShowed:!0}):Object(r.a)(Object(r.a)({},n),{},{isShowed:!1})})));break;case"Incomplete":f(x.map((function(n){return n.isDone?Object(r.a)(Object(r.a)({},n),{},{isShowed:!1}):Object(r.a)(Object(r.a)({},n),{},{isShowed:!0})})));break;default:f(x.map((function(n){return Object(r.a)(Object(r.a)({},n),{},{isShowed:!0})})))}},handleClearTodos:function(){f(x.filter((function(n){return!n.isDone})))}}),Object(o.jsx)(C,{children:x.map((function(n){return n.isShowed?Object(o.jsx)(E,{todo:n,handlgeEditTodo:w,handleToggleTodo:g,handleDeleteTodo:O},n.id):null}))})]})})})};i.a.render(Object(o.jsx)(B,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.25e2d1c5.chunk.js.map