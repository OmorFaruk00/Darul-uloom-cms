(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{470:function(t,e,r){"use strict";r.r(e);r(23);var o={layout:"Dum-content",data:function(){return{facilitie:{title:"",description:"",created_by:this.$auth.user.name},errors:{}}},methods:{addFacilitie:function(){var t=this;this.$axios.$post("/facilitie/add",this.facilitie).then((function(e){t.facilitie="",t.errors={},t.$toaster.success(e.message),t.$router.push("/dum-ac/facilitie")})).catch((function(e){t.errors=e.response.data.errors}))}}},n=r(30),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-5"},[r("div",{staticClass:"col-md-6 mx-auto form-shadow p-5"},[r("div",{staticClass:"d-flex justify-content-end"},[r("nuxt-link",{staticClass:"btn-add",attrs:{to:"/dum-ac/facilitie"}},[t._v(" Facilitie List")])],1),t._v(" "),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Title")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facilitie.title,expression:"facilitie.title"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Title"},domProps:{value:t.facilitie.title},on:{input:function(e){e.target.composing||t.$set(t.facilitie,"title",e.target.value)}}}),t._v(" "),t.errors.title?r("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.title[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Description")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.facilitie.description,expression:"facilitie.description"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Description"},domProps:{value:t.facilitie.description},on:{input:function(e){e.target.composing||t.$set(t.facilitie,"description",e.target.value)}}}),t._v(" "),t.errors.description?r("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.description[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"d-flex justify-content-end"},[r("button",{staticClass:"btn-submit",on:{click:function(e){return e.preventDefault(),t.addFacilitie()}}},[t._v("\n          Submit\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);