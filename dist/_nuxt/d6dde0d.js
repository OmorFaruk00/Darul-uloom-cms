(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{441:function(t,o,r){"use strict";r.r(o);var e={layout:"Adm-content",data:function(){return{form:{start:"",end:"",count:""},errors:{}}},methods:{slStart:function(){var t=this.form.start,o=this.form.end;this.form.count=o-t+1},slEnd:function(){var t=this.form.start,o=this.form.end;this.form.count=o-t+1},importForm:function(){var t=this;this.$axios.$post("/admission/form-import",this.form).then((function(o){t.$toaster.success(o.message),t.form="",t.errors=""})).catch((function(o){t.errors=o.response.data.errors,t.$toast.error(o.response.data.message)}))}}},n=r(30),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"form-bg pt-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"form-shadow p-5 offset-md-2  col-md-8"},[r("div",{staticClass:"form-horizontal"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Start Sl No")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.start,expression:"form.start"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.start},on:{keyup:t.slStart,input:function(o){o.target.composing||t.$set(t.form,"start",o.target.value)}}}),t._v(" "),t.errors.start?r("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.start[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("End Sl No")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.end,expression:"form.end"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.end},on:{keyup:t.slEnd,input:function(o){o.target.composing||t.$set(t.form,"end",o.target.value)}}}),t._v(" "),t.errors.end?r("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.end[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Number of Form")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.count,expression:"form.count"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.count},on:{input:function(o){o.target.composing||t.$set(t.form,"count",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"d-flex justify-content-end pt-3"},[r("button",{staticClass:"btn-submit",on:{click:function(o){return t.importForm()}}},[t._v("Submit")])])])])])])}),[],!1,null,null,null);o.default=component.exports}}]);