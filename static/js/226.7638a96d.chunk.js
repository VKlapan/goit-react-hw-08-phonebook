"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[226],{3226:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,c=t(2791),a=t(9434),i=t(6580),o=t(8254),s=t(6101),l=t(6015),u=t(5403),d=t(1634),h=t(3329),f=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.filter}));return(0,h.jsx)(l.Z,{children:(0,h.jsx)(s.Z,{label:"Find contact by Name",type:"text",name:"search",value:e,onChange:function(e){n((0,d.T)(e.currentTarget.value))},InputProps:{startAdornment:(0,h.jsx)(o.Z,{position:"start",children:(0,h.jsx)(u.Z,{})})},variant:"outlined"})})},x=t(6052),m=t(7247),p=t(2087),j=t(4346),b=t(3811),v=function(n){var e=n.contact,t=e.id,r=e.name,c=e.number,i=(0,a.I0)();return(0,h.jsxs)(p.ZP,{secondaryAction:(0,h.jsx)(b.Z,{"aria-label":"comment",onClick:function(){i((0,x.GK)(t))},children:(0,h.jsx)(m.Z,{})}),children:[(0,h.jsx)(j.Z,{primary:r}),(0,h.jsx)(j.Z,{primary:c})]},t)},Z=t(5629),g=function(n){var e=n.contacts;return(0,h.jsx)(Z.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.map((function(n){return(0,h.jsx)(v,{contact:n},n.id)}))})},w=t(168),y=t(2430).Z.div(r||(r=(0,w.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]))),C=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},I=function(n){return n.filter},S=t(885),A=t(7205),E=t(788),T=t(7323),W=t(8440),q=t(9571),D=t(464);function K(){var n=c.useState(!1),e=(0,S.Z)(n,2),t=e[0],r=e[1],i=function(){r(!1)},o=(0,a.I0)(),l=(0,a.v9)(C),u=(0,c.useState)(""),d=(0,S.Z)(u,2),f=d[0],m=d[1],p=(0,c.useState)(""),j=(0,S.Z)(p,2),b=j[0],v=j[1],Z=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":m(r);break;case"number":v(r);break;default:console.log("incorrect input name")}};return(0,h.jsxs)("div",{children:[(0,h.jsx)(A.Z,{variant:"outlined",onClick:function(){r(!0)},children:"Add new Contact"}),(0,h.jsxs)(E.Z,{open:t,onClose:i,children:[(0,h.jsx)(D.Z,{children:"Add new contact"}),(0,h.jsxs)(W.Z,{sx:{display:"flex",flexDirection:"column",mr:1,alignItems:"center"},children:[(0,h.jsx)(q.Z,{children:"To add new contact to your phonebook, please enter contact's name and phone number here. We will send updates occasionally."}),(0,h.jsx)(s.Z,{label:"Name",name:"name",variant:"filled",type:"text",placeholder:"Enter contact name",onChange:Z,required:!0,fullWidth:!0}),(0,h.jsx)(s.Z,{label:"Phone number",name:"number",variant:"filled",type:"tel",placeholder:"Enter contact phone number",onChange:Z,required:!0,fullWidth:!0})]}),(0,h.jsxs)(T.Z,{children:[(0,h.jsx)(A.Z,{onClick:i,children:"Cancel"}),(0,h.jsx)(A.Z,{onClick:function(n){n.preventDefault(),l.find((function(n){return n.name===f}))?alert("".concat(f," is already in contacts")):(o((0,x.uK)({name:f,number:b})),m(""),v(""),i())},children:"Subscribe"})]})]})]})}var L=function(){var n=(0,a.I0)();(0,c.useEffect)((function(){n(x.K2())}),[n]);var e=(0,a.v9)(C),t=(0,a.v9)(I),r=(0,a.v9)(k),o=(0,a.v9)(_),s=t.toLowerCase(),l=e.filter((function(n){return n.name.toLowerCase().includes(s)}));return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:20,color:"#010101",width:"auto",padding:"20px"},children:[(0,h.jsxs)(y,{children:[(0,h.jsx)(K,{}),(0,h.jsx)(f,{})]}),r&&!o&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.Z,{})," ",(0,h.jsx)("br",{}),(0,h.jsx)("b",{children:"Request in progress..."})]}),o&&(0,h.jsxs)("p",{children:['Oops, something went wrong. Error is: "',o,'"']}),!r&&e.length>0&&(0,h.jsx)(g,{contacts:l})]})}}}]);
//# sourceMappingURL=226.7638a96d.chunk.js.map