(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{377:function(t,e,o){var content=o(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("514fe223",content,!0,{sourceMap:!1})},400:function(t,e,o){"use strict";o(377)},401:function(t,e,o){var n=o(44)(!1);n.push([t.i,".qualification[data-v-41fc1dc4]{padding:50px;border-radius:5px;background-color:#fff;margin-bottom:20px;margin-top:50px;box-shadow:0 3px 8px rgba(0,0,0,.24)}",""]),t.exports=n},478:function(t,e,o){"use strict";o.r(e);var n={layout:"Profile-content",data:function(){return{qualification:{degree_name:"",subject_name:"",passing_year:"",institute_name:""},errors:""}},methods:{addQualification:function(){var t=this;this.$axios.$post("/qualification/add",this.qualification).then((function(e){t.$router.push("/profile/qualification"),t.qualification="",t.errors="",t.$toaster.success(e.message),t.getqualification()})).catch((function(e){t.errors=e.response.data.errors}))}}},r=(o(400),o(30)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"offset-md-3 col-md-6"},[o("div",{staticClass:"qualification"},[o("h4",{staticClass:"title"},[t._v("Add qualification")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6 col-lg-6 col-sm-12"},[o("label",{staticClass:"form-label"},[t._v("Degree Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.qualification.degree_name,expression:"qualification.degree_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.qualification.degree_name},on:{input:function(e){e.target.composing||t.$set(t.qualification,"degree_name",e.target.value)}}}),t._v(" "),t.errors.degree_name?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.degree_name[0])}}):t._e()]),t._v(" "),o("div",{staticClass:"form-group col-md-6 col-lg-6 col-sm-12"},[o("label",{staticClass:"form-label"},[t._v("Department Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.qualification.subject_name,expression:"qualification.subject_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.qualification.subject_name},on:{input:function(e){e.target.composing||t.$set(t.qualification,"subject_name",e.target.value)}}}),t._v(" "),t.errors.subject_name?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.subject_name[0])}}):t._e()]),t._v(" "),o("div",{staticClass:"form-group col-md-6 col-lg-6 col-sm-12"},[o("label",{staticClass:"form-label"},[t._v("Passing Year")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.qualification.passing_year,expression:"qualification.passing_year"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ex-yyyy-mm-dd"},domProps:{value:t.qualification.passing_year},on:{input:function(e){e.target.composing||t.$set(t.qualification,"passing_year",e.target.value)}}}),t._v(" "),t.errors.passing_year?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.passing_year[0])}}):t._e()]),t._v(" "),o("div",{staticClass:"form-group col-md-6 col-lg-6 col-sm-12"},[o("label",{staticClass:"form-label"},[t._v("Institute Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.qualification.institute_name,expression:"qualification.institute_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.qualification.institute_name},on:{input:function(e){e.target.composing||t.$set(t.qualification,"institute_name",e.target.value)}}}),t._v(" "),t.errors.institute_name?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.institute_name[0])}}):t._e()])]),t._v(" "),o("div",{staticClass:"d-flex justify-content-end"},[o("button",{staticClass:"btn-submit btn-lg",on:{click:function(e){return t.addQualification()}}},[t._v("Submit")])])])])}),[],!1,null,"41fc1dc4",null);e.default=component.exports}}]);