(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(t,e,o){"use strict";o.r(e);o(40);var r=o(5),n=(o(61),{computed:{isValid:function(){return this.msg.name&&this.msg.company&&this.msg.region&&this.msg.email&&this.msg.message}},data:function(){return{submitted:!1,valid:!1,nameError:!1,companyError:!1,regionError:!1,emailError:!1,msgError:!1,sendError:!1,msg:{name:"",company:"",region:"",email:"",phone:"",message:""}}},methods:{sendEmail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isValid){e.next=9;break}return t.msg.name||(t.nameError=!0),t.msg.company||(t.companyError=!0),t.msg.region||(t.regionError=!0),t.msg.email||(t.emailError=!0),t.msg.message||(t.msgError=!0),e.abrupt("return",0);case 9:return t.nameError=!1,t.companyError=!1,t.regionError=!1,t.emailError=!1,t.msgError=!1,t.submitted=!0,e.prev=15,e.next=18,t.$axios.post("https://us-central1-tecnomic-systems-web.cloudfunctions.net/sendMail",{email:t.msg.email,name:t.msg.name,company:t.msg.company,region:t.msg.region,message:t.msg.message,phone:t.msg.phone?t.msg.phone:"NA"});case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(15),console.error(e.t0),t.sendError=!0;case 24:case"end":return e.stop()}}),e,null,[[15,20]])})))()}}}),l=o(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container bg-blue-100"},[o("div",{staticClass:"flex-col"},[o("div",{staticClass:"flex justify-center subtitle"},[o("div",{staticClass:"flex-col"},[o("h1",[t._v("Contact Us")]),t._v(" "),o("div",{staticClass:"flex flex-col-reverse items-center justify-center content-center mt-10 w-screen md:flex-row md:items-start"},[t._m(0),t._v(" "),o("div",{staticClass:"flex justify-center mt-5 w-11/12 md:w-2/5"},[o("form",{staticClass:"border border-purple-700 p-10 w-11/12",on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[o("div",{staticClass:"flex justify-start"},[t.nameError?o("label",{staticClass:"text-xl text-left text-red-700 font-semibold",attrs:{for:"name"}},[t._v("Name is Required")]):o("label",{staticClass:"text-xl text-left",attrs:{for:"name"}},[t._v("Name*")])]),t._v(" "),o("div",{staticClass:"flex items-stretch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.msg.name,expression:"msg.name"}],staticClass:"w-full text-xl p-2",attrs:{type:"text",name:"name"},domProps:{value:t.msg.name},on:{input:function(e){e.target.composing||t.$set(t.msg,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"flex justify-start"},[t.companyError?o("label",{staticClass:"text-xl text-left text-red-700 font-semibold",attrs:{for:"name"}},[t._v("Company Name is Required")]):o("label",{staticClass:"text-xl text-left",attrs:{for:"name"}},[t._v("Company*")])]),t._v(" "),o("div",{staticClass:"flex items-stretch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.msg.company,expression:"msg.company"}],staticClass:"w-full text-xl p-2",attrs:{type:"text",name:"name"},domProps:{value:t.msg.company},on:{input:function(e){e.target.composing||t.$set(t.msg,"company",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"flex justify-start mt-5"},[t.regionError?o("label",{staticClass:"text-xl text-left text-red-700 font-semibold",attrs:{for:"region"}},[t._v("Region is Required")]):o("label",{staticClass:"text-xl text-left",attrs:{for:"region"}},[t._v("Region*")])]),t._v(" "),o("div",{staticClass:"flex items-stretch"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.msg.region,expression:"msg.region"}],staticClass:"w-full text-xl p-2 bg-white",attrs:{name:"region",id:"region"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.msg,"region",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"sea"}},[t._v("South East Asia")]),t._v(" "),o("option",{attrs:{value:"sa"}},[t._v("South Asia")]),t._v(" "),o("option",{attrs:{value:"mea"}},[t._v("Middle East & Africa")]),t._v(" "),o("option",{attrs:{value:"other"}},[t._v("Other")])])]),t._v(" "),o("div",{staticClass:"flex justify-start mt-5"},[t.emailError?o("label",{staticClass:"text-xl text-left text-red-700 font-semibold",attrs:{for:"email"}},[t._v("Email is Required")]):o("label",{staticClass:"text-xl text-left",attrs:{for:"email"}},[t._v("Email*")])]),t._v(" "),o("div",{staticClass:"flex items-stretch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.msg.email,expression:"msg.email"}],staticClass:"w-full text-xl p-2",attrs:{type:"email",name:"email"},domProps:{value:t.msg.email},on:{input:function(e){e.target.composing||t.$set(t.msg,"email",e.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"flex items-stretch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.msg.phone,expression:"msg.phone"}],staticClass:"w-full text-xl p-2",attrs:{type:"text",name:"phone"},domProps:{value:t.msg.phone},on:{input:function(e){e.target.composing||t.$set(t.msg,"phone",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"flex justify-start mt-5"},[t.msgError?o("label",{staticClass:"text-xl text-left text-red-700 font-semibold",attrs:{for:"message"}},[t._v("Message is Required")]):o("label",{staticClass:"text-xl text-left",attrs:{for:"message"}},[t._v("Message*")])]),t._v(" "),o("div",{staticClass:"flex items-stretch"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg.message,expression:"msg.message"}],staticClass:"w-full text-xl p-2",attrs:{name:"message",id:"message",rows:"3"},domProps:{value:t.msg.message},on:{input:function(e){e.target.composing||t.$set(t.msg,"message",e.target.value)}}})]),t._v(" "),t.submitted?o("div",{staticClass:"flex justify-start mt-5"},[o("div",{staticClass:"text-xl text-pink-800"},[t._v("\n                    Thank you! Message submitted... We will get back to\n                    shortly.\n                  ")])]):o("div",{staticClass:"flex justify-start mt-5"},[o("button",{staticClass:"text-xl border border-pink-800 rounded-md px-5 py-1 bg-purple-500 text-white"},[t._v("\n                    Submit\n                  ")])]),t._v(" "),t.sendError?o("div",{staticClass:"flex justify-start mt-5"},[t._m(2)]):t._e()])])])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex-col justify-center text-xl text-left p-6 w-11/12 md:w-2/5"},[o("h2",{staticClass:"font-semibold"},[t._v("\n                Singapore HQ\n              ")]),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("Tecnomic Systems Pte. Ltd.")]),t._v(" "),o("div",[t._v("120 Lower Delta Road, #08-12 Cendex Center")]),t._v(" "),o("div",[t._v("Singapore 169208")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Chee Wai Tham -\n                "),o("a",{attrs:{href:"mailto:cwtham@tecnomic.com"}},[t._v("cwtham@tecnomic.com")])]),t._v(" "),o("div",[t._v("Mob: +60 12 3780680")]),t._v(" "),o("div",[t._v("Tel: +65 63258576")]),t._v(" "),o("div",[t._v("Fax: +65 65151803")]),t._v(" "),o("a",{attrs:{href:"https://www.google.com/maps/place/Tecnomic+Systems+Pte+Ltd/@1.2799755,103.823626,9z/data=!4m8!1m2!2m1!1stecnomic+systems+pte+ltd!3m4!1s0x31da190ea37960af:0x3d36c4789d4509b5!8m2!3d1.2799417!4d103.8230191"}},[t._v("Map Location")]),t._v(" "),o("div",{staticClass:"mt-5"}),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                Malaysia\n              ")]),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                Tecnomic Systems Sdh. Bhd.\n              ")]),t._v(" "),o("div",[t._v("27A 1st Floor Jalan SS21/60, Damansara Utama 47400")]),t._v(" "),o("div",[t._v("Petaling Jaya Selangor, Malaysia")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Chee Wai Tham -\n                "),o("a",{attrs:{href:"mailto:cwtham@tecnomic.com"}},[t._v("cwtham@tecnomic.com")])]),t._v(" "),o("div",[t._v("Mob: +60 12 3780680")]),t._v(" "),o("div",[t._v("Tel: +60 3 77106496")]),t._v(" "),o("div",[t._v("Fax: +60 3 77223923")]),t._v(" "),o("a",{attrs:{href:"https://www.google.com/maps/place/Tecnomic+Systems+Sdn+Bhd/@3.132818,101.623148,15z/data=!4m2!3m1!1s0x0:0xcb2d42dc4eaff31a?sa=X&ved=2ahUKEwiDqOytupPnAhUFA3IKHSqKCmoQ_BIwCnoECA0QCA"}},[t._v("Map Location")]),t._v(" "),o("div",{staticClass:"mt-5"}),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("Indonesia")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Ganjar -\n                "),o("a",{attrs:{href:"mailto:ganjar@tecnomic.com"}},[t._v("ganjar@tecnomic.com")])]),t._v(" "),o("div",[t._v("Mob: +62-817228801")]),t._v(" "),o("div",{staticClass:"mt-5"}),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("Thailand")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Phuwish -\n                "),o("a",{attrs:{href:"mailto:phuwish@tecnomic.com"}},[t._v("phuwish@tecnomic.com")])]),t._v(" "),o("div",[t._v("Mob: +62-817228801")]),t._v(" "),o("div",{staticClass:"mt-5"}),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                India\n              ")]),t._v(" "),o("div",{staticClass:"font-semibold"},[t._v("\n                Bangalore\n              ")]),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                Tecnomic Systems and Networks Pvt. Ltd.\n              ")]),t._v(" "),o("div",[t._v("1st Floor, Maruthi Towers, 138, HAL Airport Road")]),t._v(" "),o("div",[t._v("Bangalore 560008")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Amiya Kumar -\n                "),o("a",{attrs:{href:"mailto:amiya@tecnomic.com"}},[t._v("amiya@tecnomic.com")])]),t._v(" "),o("div",[t._v("Mob: +91 99023 13655")]),t._v(" "),o("div",[t._v("Tel: +91 80 2528 6934")]),t._v(" "),o("div",[t._v("Fax: +91 80 2521 4860")]),t._v(" "),o("a",{attrs:{href:"https://goo.gl/maps/59Tdqu3qpeysJmKu7"}},[t._v("Map Location")]),t._v(" "),o("div",{staticClass:"mt-5"}),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                Noida\n              ")]),t._v(" "),o("div",[t._v("A-201, Tower 1, Highway Tower, Plot A-13, Sector 62")]),t._v(" "),o("div",[t._v("Noida 201309")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Shibu Jacob -\n                "),o("a",{attrs:{href:"mailto:shibu@tecnomic.com"}},[t._v("shibu@tecnomic.com")])]),t._v(" "),o("div",[t._v("Mob: +91 98113 22107")]),t._v(" "),o("div",[t._v("Tel: +91 120 6541555")]),t._v(" "),o("a",{attrs:{href:"https://goo.gl/maps/J9WA859S6XxQbW5C6"}},[t._v("Map Location")]),t._v(" "),o("div",{staticClass:"mt-5"}),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                UAE - Dubai\n              ")]),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                Tecnomic Systems Middle East & Africa LLC.\n              ")]),t._v(" "),o("div",[t._v("#805-46, Opal Tower, Business Bay")]),t._v(" "),o("div",[t._v("PO Box 116410, Dubai, UAE")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Vaisakh Nair -\n                "),o("a",{attrs:{href:"mailto:vaisakh@tecnomicsystems.com"}},[t._v("vaisakh@tecnomicsystems.com")])]),t._v(" "),o("div",[t._v("Mob: +971 50 450 3530")]),t._v(" "),o("div",[t._v("Tel: +971 4 370 6360")]),t._v(" "),o("a",{attrs:{href:"https://goo.gl/maps/3yAWEb6wdV2gAciQA"}},[t._v("Map Location")]),t._v(" "),o("div",{staticClass:"mt-5"}),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                Australia\n              ")]),t._v(" "),o("h2",{staticClass:"font-semibold"},[t._v("\n                AMFA Systems Pty. Ltd.\n              ")]),t._v(" "),o("div",[t._v("88 Bluebell Drive, Craigieburn, 3064")]),t._v(" "),o("div",[t._v("Victoria, Australia")]),t._v(" "),o("div",[t._v("\n                Contact: Mr. Bilal Siddiqui -\n                "),o("a",{attrs:{href:"mailto:bilal@tecnomic.com"}},[t._v("bilal@tecnomic.com")])]),t._v(" "),o("div",[t._v("Mob: +61 435 899 001")]),t._v(" "),o("a",{attrs:{href:"https://goo.gl/maps/9PhsDK5GVLY9GhRW6"}},[t._v("Map Location")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-start mt-5"},[e("label",{staticClass:"text-xl text-left",attrs:{for:"phone"}},[this._v("Phone")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-xl text-pink-800"},[this._v("\n                    An error occured while trying to send your message! Please\n                    try again later or click on this link to message us\n                    directly -\n                    "),e("a",{staticClass:"font-semibold underline",attrs:{href:"mailto:sales@tecnomic.com"}},[this._v("Email Us")])])}],!1,null,null,null);e.default=component.exports}}]);