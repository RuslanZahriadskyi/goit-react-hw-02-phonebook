(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={container:"ContactForm_container__2XhJJ",label__name:"ContactForm_label__name__3rxGd",label__number:"ContactForm_label__number__2cPke",label__input:"ContactForm_label__input__1c3jJ",form:"ContactForm_form__GSeKy",button__submitForm:"ContactForm_button__submitForm__26mLm"}},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(12),i=n.n(o),s=(n(19),n(11)),l=n(4),u=n(5),_=n(6),m=n(8),b=n(7),j=n(9),d=n.n(j),h=n(21),f=n(2),p=n.n(f),O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).contactInfo=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.handelSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Object(h.a)(),name:a,number:c};t.reset(),t.props.onSubmit(r)},t.reset=function(){t.setState({name:"",number:""})},t.state={name:"",number:""},t}return Object(_.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)("div",{className:p.a.container,children:Object(a.jsxs)("form",{onSubmit:this.handelSubmit,className:p.a.form,children:[Object(a.jsxs)("label",{className:p.a.label__name,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",className:p.a.label__input,pattern:"[A-Za-z]{1, 28}",placeholder:"Format: Tomy Brait",required:!0,value:e,onChange:this.contactInfo})]}),Object(a.jsxs)("label",{className:p.a.label__number,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",className:p.a.label__input,pattern:"[+][0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}",placeholder:" Format number: +38-050-12-34-567",required:!0,value:n,onChange:this.contactInfo})]}),Object(a.jsx)("button",{type:"submit",className:p.a.button__submitForm,children:"Add contact"})]})})}}]),n}(c.Component);var x=function(t){var e=t.handlerFilter,n=t.filterValue;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",name:"filter",value:n,onChange:e})]})},C=n(3),v=n.n(C);var N=function(t){var e=t.contacts,n=t.filterValue,c=t.deleteCOntact;return Object(a.jsx)("ul",{className:v.a.contacts__list,children:e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(n.toLowerCase())})).map((function(t){return Object(a.jsxs)("li",{className:v.a.contact__info,children:[Object(a.jsxs)("p",{className:v.a.contact,children:[Object(a.jsxs)("span",{className:v.a.contact__name,children:[t.name,":"]}),Object(a.jsx)("span",{className:v.a.contact__number,children:t.number})]}),Object(a.jsx)("button",{className:v.a.contact__button,type:"button",onClick:function(){return c(t.id)},children:"Delete"})]},Object(h.a)())}))})},F=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).handlerFilter=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmit=function(e){var n=t.state.contacts;if(n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in contacts"));if(n.some((function(t){return t.number.toLowerCase()===e.number.toLowerCase()})))return alert("".concat(e.number," is already in contacts"));var a=n.concat(e);t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{contacts:a})}))},t.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"+38-099-12-15-567"},{id:"id-2",name:"Hermione Kline",number:"+48-050-04-98-001"},{id:"id-3",name:"Eden Clements",number:"+42-078-79-58-520"},{id:"id-4",name:"Annie Copeland",number:"+72-098-07-27-637"}],filter:""},t}return Object(_.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:this.formSubmit}),Object(a.jsxs)("div",{className:d.a.container,children:[Object(a.jsx)("h2",{className:d.a.contacts__title,children:"Contacts"}),Object(a.jsx)(x,{handlerFilter:this.handlerFilter,filterValue:n}),Object(a.jsx)(N,{contacts:e,filterValue:n,deleteCOntact:this.onDeleteContact})]})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={contact__info:"ContactList_contact__info__1OLGG",contacts__list:"ContactList_contacts__list__2kKu_",contact:"ContactList_contact__3h1Mn",contact__name:"ContactList_contact__name__1O93c",contact__number:"ContactList_contact__number__2xr2P",contact__button:"ContactList_contact__button__TTzXA"}},9:function(t,e,n){t.exports={App:"App_App__zYVoy",container:"App_container__3QTm0",title:"App_title__3ExXw",contacts__title:"App_contacts__title__1pzHj"}}},[[20,1,2]]]);
//# sourceMappingURL=main.e23f8ee6.chunk.js.map