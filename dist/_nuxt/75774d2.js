(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{379:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("c38cefee",content,!0,{sourceMap:!1})},404:function(t,e,o){"use strict";o(379)},405:function(t,e,o){var l=o(44)(!1);l.push([t.i,".profile-body[data-v-4457d676]{width:100%;border:none;position:relative;overflow:hidden;border-radius:8px;cursor:pointer;background:#fff;padding:50px 0;margin-bottom:80px;box-shadow:0 3px 8px rgba(0,0,0,.24)}.profile-body[data-v-4457d676]:hover:after{transform:scaleY(1)}.profile_img[data-v-4457d676]{width:150px;height:150px;border-radius:50%;margin-bottom:20px}.profile-info[data-v-4457d676]{padding:0 100px}.contact-info[data-v-4457d676]{display:flex;justify-content:space-around}.about[data-v-4457d676]{font-size:15px;text-align:justify;padding-bottom:20px;border-radius:10px;box-shadow:0 3px 8px rgba(0,0,0,.24)}.about-title[data-v-4457d676]{padding:10px 20px}.about-desc[data-v-4457d676]{padding:0 20px}.social[data-v-4457d676]{padding:0;margin:0;list-style:none}.social li[data-v-4457d676]{display:inline-block;margin-top:10px;margin-bottom:10px}.social-icon[data-v-4457d676]{display:block;width:35px;height:35px;line-height:35px;border-radius:50%;background:#fff;font-size:20px;color:#4c5462;margin-right:15px;box-shadow:0 2px 5px rgba(0,0,0,.15);transition:all .5s ease 0s}.social-icon[data-v-4457d676]:hover{background:linear-gradient(90deg,#7851a9 0,gold);color:#fff}@media only screen and (max-width:590px){.profile-info[data-v-4457d676]{padding:0 10px}.contact-info[data-v-4457d676]{display:block;justify-content:space-between;text-align:center}}",""]),t.exports=l},484:function(t,e,o){"use strict";o.r(e);var l={layout:"Emp-content",mounted:function(){this.employeeDetails()},data:function(){return{employee:[],errors:{}}},methods:{employeeDetails:function(){var t=this;this.$axios.$get("/employee/details/"+this.$route.params.id).then((function(e){t.employee=e})).catch((function(t){console.log(t)}))}}},n=(o(404),o(30)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"profile"},[o("div",{staticClass:"container pt-5"},[o("div",{staticClass:"d-flex justify-content-center"},[o("div",{staticClass:"profile-body"},[o("h2",{staticClass:"text-center pb-4 font-weight-bold"},[t._v("Profile")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"text-center "},[o("img",{staticClass:"rounded-circle profile_img",attrs:{src:"http://localhost:8000/images/emp/"+t.employee.profile_photo,alt:"image"}})]),t._v(" "),o("div",{staticClass:"text-center "},[o("h4",{staticClass:" mb-2"},[t._v(t._s(t.employee.name))]),t._v(" "),t.employee.rel_designation?o("h6",[t._v(t._s(t.employee.rel_designation.designation))]):t._e(),t._v(" "),""!=t.employee.rel_social?o("div",{staticClass:"d-flex justify-content-center"},t._l(t.employee.rel_social,(function(e){return o("ul",{key:e._id,staticClass:"social"},["Facebook"==e.social_name?o("li",[o("a",{attrs:{href:e.social_url}},[o("img",{staticClass:"social-icon",attrs:{src:"/images/fb.png",alt:""}})])]):t._e(),t._v(" "),"Twitter"==e.social_name?o("li",[o("a",{attrs:{href:e.social_url}},[o("img",{staticClass:"social-icon",attrs:{src:"/images/twi.png",alt:""}})])]):t._e(),t._v(" "),"Instagram"==e.social_name?o("li",[o("a",{attrs:{href:e.social_url}},[o("img",{staticClass:"social-icon",attrs:{src:"/images/ins.png",alt:""}})])]):t._e(),t._v(" "),"LinkedIn"==e.social_name?o("li",[o("a",{attrs:{href:e.social_url}},[o("img",{staticClass:"social-icon",attrs:{src:"/images/linkedin.png",alt:""}})])]):t._e(),t._v(" "),"WhatsApp"==e.social_name?o("li",[o("a",{attrs:{href:e.social_url}},[o("img",{staticClass:"social-icon",attrs:{src:"/images/whatsapp.png",alt:""}})])]):t._e()])})),0):t._e(),t._v(" "),o("div",{staticClass:"contact-info pt-3 "},[o("h6",[t._v("E-mail :\n                            "),o("small",[t._v(t._s(t.employee.email))])]),t._v(" "),o("h6",[t._v("Phone :\n                            "),o("small",[t._v(t._s(t.employee.personal_phone_no))])]),t._v(" "),o("h6",[t._v("Mobile :\n                            "),o("small",[t._v(t._s(t.employee.alternative_phone_no))])])]),t._v(" "),o("hr"),t._v(" "),null!=t.employee.about?o("div",{staticClass:"profile-info pb-4"},[o("div",{staticClass:"about"},[o("h4",{staticClass:"about-title"},[t._v("About")]),t._v(" "),o("p",{staticClass:"about-desc"},[t._v(t._s(t.employee.about))])])]):t._e(),t._v(" "),""!=t.employee.rel_qualification?o("div",{staticClass:"profile-info pb-4"},[o("div",{staticClass:"about"},[o("h4",{staticClass:"about-title"},[t._v("Academic Qualification")]),t._v(" "),o("div",{staticClass:"px-3"},[o("table",{staticClass:"table table-striped text-center"},[t._m(0),t._v(" "),o("tbody",t._l(t.employee.rel_qualification,(function(e){return o("tr",{key:e._id},[o("td",[t._v(t._s(e.degree_name))]),t._v(" "),o("td",[t._v(t._s(e.institute_name))]),t._v(" "),o("td",[t._v(t._s(e.subject))]),t._v(" "),o("td",[t._v(t._s(e.passing_year))])])})),0)])])])]):t._e(),t._v(" "),""!=t.employee.rel_training?o("div",{staticClass:"profile-info pb-4"},[o("div",{staticClass:"about"},[o("h4",{staticClass:"about-title"},[t._v("Training Experience")]),t._v(" "),o("div",{staticClass:"px-3"},[o("table",{staticClass:"table table-striped text-center"},[t._m(1),t._v(" "),o("tbody",t._l(t.employee.rel_training,(function(e){return o("tr",{key:e._id},[o("td",[t._v(t._s(e.training_name))]),t._v(" "),o("td",[t._v(t._s(e.institute_name))]),t._v(" "),o("td",[t._v(t._s(e.duration))]),t._v(" "),o("td",[t._v(t._s(e.training_year))])])})),0)])])])]):t._e()])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Degree Name")]),t._v(" "),o("th",[t._v("Institute Name")]),t._v(" "),o("th",[t._v("Department")]),t._v(" "),o("th",[t._v("Passsing Year")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Training Name")]),t._v(" "),o("th",[t._v("Institute Name")]),t._v(" "),o("th",[t._v("Duration")]),t._v(" "),o("th",[t._v("Training Year")])])])}],!1,null,"4457d676",null);e.default=component.exports}}]);