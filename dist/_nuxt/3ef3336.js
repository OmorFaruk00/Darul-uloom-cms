(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{476:function(t,e,n){"use strict";n.r(e);var o={layout:"Emp-content",data:function(){return{designation:{type:"",designation:""},errors:[]}},methods:{addDesignation:function(){var t=this;this.$axios.$post("/designation/add",this.designation).then((function(e){t.designation="",t.errors="",t.$toaster.success(e.message),t.$router.push("/employee/designation")})).catch((function(e){t.errors=e.response.data.errors,console.log(t.errors)}))}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-bg pt-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"form-container offset-md-2  col-md-8"},[n("h3",{staticClass:"title"},[t._v("Create designation")]),t._v(" "),n("div",{staticClass:"form-horizontal"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Type")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.designation.type,expression:"designation.type"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.designation,"type",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Select Type")]),t._v(" "),n("option",{attrs:{value:"Academic"}},[t._v("Academic")]),t._v(" "),n("option",{attrs:{value:"Non Academic"}},[t._v("Non Academic")])]),t._v(" "),t.errors.type?n("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.type[0])}}):t._e()]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Designation Name ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.designation,expression:"designation.designation"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Designation Name "},domProps:{value:t.designation.designation},on:{input:function(e){e.target.composing||t.$set(t.designation,"designation",e.target.value)}}})]),t._v(" "),t.errors.designation?n("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.designation[0])}}):t._e(),t._v(" "),n("div",{staticClass:"d-flex justify-content-end pt-3"},[n("button",{staticClass:"btn-submit",on:{click:function(e){return t.addDesignation()}}},[t._v("Submit")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);