"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[964],{8964:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(2791),r=t(9434),s=t(885),c=t(452),o="ContactForm_form__xMklr",i="ContactForm_label__YXYvo",u="ContactForm_input__dxiTT",l=t(184),m=function(){var e=(0,a.useState)(""),n=(0,s.Z)(e,2),t=n[0],m=n[1],d=(0,a.useState)(""),h=(0,s.Z)(d,2),_=h[0],f=h[1],p=(0,r.I0)(),b=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":m(a);break;case"number":f(a);break;default:return}},v=function(){m(""),f("")};return(0,l.jsxs)("form",{onSubmit:function(e){var n;e.preventDefault(),n={name:t,phone:_},p((0,c.uK)(n)),v()},className:o,children:[(0,l.jsxs)("label",{htmlFor:"",className:i,children:["Name",(0,l.jsx)("input",{className:u,name:"name",type:"text",value:t,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{htmlFor:"",className:i,children:["Number",(0,l.jsx)("input",{className:u,name:"number",value:_,onChange:b,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})},d="ContactListItem_btn__xaCww",h="ContactListItem_name__edtSS",_="ContactListItem_number__-3Vz+";var f=function(e){var n=e.id,t=e.name,a=e.number,s=(0,r.I0)();return(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:h,children:t}),":"," ",(0,l.jsx)("span",{className:_,children:a}),(0,l.jsx)("button",{className:d,type:"button",onClick:function(){s((0,c.zY)(n))},children:"Delete"})]},n)},p=function(e){return e.filter};var b=function(){var e=(0,r.v9)((function(e){return e.contacts.items})),n=(0,r.v9)(p);return(0,l.jsx)("ul",{children:e&&e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){var n=e.id,t=e.name,a=e.phone;return(0,l.jsx)(f,{name:t,number:a,id:n},n)}))})},v="Filter_label__hOULN",x="Filter_input__8EywS";var j=function(e){var n=e.value,t=e.onChange;return(0,l.jsxs)("label",{className:v,children:["Find contact by name",(0,l.jsx)("input",{className:x,name:"filter",value:n,onChange:t})]})},C=t(5577),N=function(e){return e.contacts.loading},g=function(){var e=(0,r.v9)(p),n=(0,r.v9)(N),t=(0,r.I0)();(0,a.useEffect)((function(){t((0,c.yF)())}),[t]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(m,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(j,{onChange:function(e){var n=e.target;t((0,C.T)(n.value))},value:e}),n&&(0,l.jsx)("p",{children:"...load contacts"}),(0,l.jsx)(b,{})]})}}}]);
//# sourceMappingURL=964.da78d54e.chunk.js.map