"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[103],{7103:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(4270),a=n(2791),o=n(9434),c=n(3634),i=n(4678),s=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.filter},u=function(e){return e.contacts.items},m=n(8174),d=n(9894),f={contact__item:"Contact_contact__item__pT95f"},h=n(184),_=function(e){var t=e.name,n=e.number,r=e.contactID,a=(0,o.I0)();return(0,h.jsxs)("li",{className:f.contact__item,children:[(0,h.jsxs)("p",{children:[t,": "]}),(0,h.jsx)("p",{children:n}),(0,h.jsx)(d.z,{className:f.contact__btn,onClick:function(){a((0,c.GK)(r)),m.Am.info(t+" has been deleted from the contact list!",{icon:"\ud83d\ude80"})},children:"Delete"})]})},b="ContactList_contactList__box__TquSj",v=function(){var e=(0,o.I0)(),t=(0,o.v9)(s),n=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t)})):e}((0,o.v9)(u),(0,o.v9)(l));return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,h.jsxs)("div",{className:b,children:[(0,h.jsx)("h3",{children:"Your contact list:"}),t&&(0,h.jsx)(i.a,{}),(0,h.jsx)("ul",{children:n.length>0&&n.map((function(e){return(0,h.jsx)(_,{name:e.name,number:e.number,contactID:e.id},e.id)}))})]})},p=n(181);var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},j="ContactForm_form__dhl+T",y="ContactForm_form__label__8W82B",C="ContactForm_form__btn__WXQ4e";var g=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.contacts.items})),n=x(7),r=x(7);return(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r,a=n.target,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,p.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(a.elements.name.value.toLowerCase()===i.name.toLowerCase())return m.Am.info(a.elements.name.value+" is already in contacts!",{icon:"\ud83d\ude80"})}}catch(s){o.e(s)}finally{o.f()}e((0,c.uK)({name:a.elements.name.value,number:a.elements.number.value})),m.Am.info(a.elements.name.value+" has been added to the contact list!",{icon:"\ud83d\ude80"}),a.reset()},className:j,children:[(0,h.jsxs)("label",{className:y,htmlFor:n,children:[" Name",(0,h.jsx)("input",{type:"text",name:"name",id:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{className:y,htmlFor:r,children:[" Number",(0,h.jsx)("input",{type:"tel",name:"number",id:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(d.z,{className:C,type:"submit",children:"Add contact"})]})},w=n(4808),N="Filter_filter__label__ttfPR",A="Filter_filter__input__toa89",F=function(){var e=(0,o.I0)();return(0,h.jsxs)("label",{className:N,children:[" Find contacts by name",(0,h.jsx)("input",{className:A,type:"text",onChange:function(t){var n=t.currentTarget.value.toLowerCase();e((0,w.T)(n))}})]})},I=n(5802);function k(){var e=(0,o.I0)();return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,h.jsxs)("div",{className:I.Z.container,children:[(0,h.jsx)(r.q,{children:(0,h.jsx)("title",{children:"Your Contacts"})}),(0,h.jsx)(g,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)(F,{}),(0,h.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=103.e7f15e78.chunk.js.map