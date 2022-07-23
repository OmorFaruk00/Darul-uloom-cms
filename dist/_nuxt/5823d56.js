(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{452:function(t,e,r){"use strict";r.r(e);r(23);var o={layout:"Dum-content",mounted:function(){this.getprogram()},data:function(){return{programs:[],program:{name:"",duration:"",new_image:""},errors:{},base_url:"http://localhost:8000"}},methods:{getprogram:function(){var t=this;this.$axios.$get("/program/show").then((function(e){t.programs=e})).catch((function(t){console.log(t)}))},programEdit:function(t){var e=this;$("#programUpdate").modal("show"),this.$axios.$get("/program/edit/"+t).then((function(t){e.program=t})).catch((function(t){console.log(t)}))},programUpdate:function(){var t=this,e=new FormData;e.append("name",this.program.name),e.append("duration",this.program.duration),this.program.new_image&&e.append("image",this.program.new_image),this.$axios.$post("/program/update/"+this.program.id,e).then((function(e){t.getprogram(),$("#programUpdate").modal("hide"),t.$toaster.success(e.message),t.errors=""})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},deleteprogram:function(t){var e=this;confirm("Are you sure to delete this program?")&&this.$axios.$get("/program/delete/"+t).then((function(t){e.getprogram(),e.$toaster.error(t.message)})).catch((function(t){console.log(t)}))},programStatus:function(t,e){var r=this;this.$axios.$get("/program/status/"+t).then((function(t){r.getprogram(),r.$toaster.success(t.message)})).catch((function(t){console.log(t)}))}}},n=r(30),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"pt-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mx-auto col-md-12"},[r("div",{staticClass:"panel"},[r("div",{staticClass:"panel-heading"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-sm-7 col-xs-12 text-right"},[r("nuxt-link",{staticClass:"btn-add",attrs:{to:"/dum-ac/program/create"}},[t._v("Add program")])],1)])]),t._v(" "),r("div",{staticClass:"panel-body table-responsive"},[r("table",{staticClass:"table table-striped  text-center"},[t._m(1),t._v(" "),r("tbody",t._l(t.programs,(function(e){return r("tr",{key:e._id},[r("td",[t._v(t._s(e.id))]),t._v(" "),r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.duration))]),t._v(" "),r("td",[r("img",{staticStyle:{height:"80px"},attrs:{src:t.base_url+"/images/dum/"+e.image,alt:"image"}})]),t._v(" "),r("td",[1==e.status?r("button",{staticClass:"btn-active",on:{click:function(r){return t.programStatus(e.id)}}},[t._v("\n                      Active\n                    ")]):t._e(),t._v(" "),0==e.status?r("button",{staticClass:"btn-inactive",on:{click:function(r){return t.programStatus(e.id)}}},[t._v("\n                      Inactive\n                    ")]):t._e()]),t._v(" "),r("td",[r("button",{staticClass:"btn-edit",on:{click:function(r){return t.programEdit(e.id)}}},[t._v("Edit")]),t._v(" "),r("button",{staticClass:"btn-delete",on:{click:function(r){return t.deleteprogram(e.id)}}},[t._v("\n                      Delete\n                    ")])])])})),0)])])])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"programUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Title")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.program.name,expression:"program.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Title"},domProps:{value:t.program.name},on:{input:function(e){e.target.composing||t.$set(t.program,"name",e.target.value)}}}),t._v(" "),t.errors.title?r("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.title[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Duration")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.program.duration,expression:"program.duration"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.program,"duration",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Select Duration")]),t._v(" "),r("option",{attrs:{value:"1 Year"}},[t._v("1 Year")]),t._v(" "),r("option",{attrs:{value:"2 Year"}},[t._v("2 Year")]),t._v(" "),r("option",{attrs:{value:"3 Year"}},[t._v("3 Year")]),t._v(" "),r("option",{attrs:{value:"4 Year"}},[t._v("4 Year")])]),t._v(" "),t.errors.duration?r("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.duration[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v("Image")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{required:"",type:"file",id:"program_image",name:"image",accept:"image/*"},on:{change:function(e){return t.program.new_image=e.target.files[0]}}}),t._v(" "),t.errors.image?r("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.new_image[0])}}):t._e()])]),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-submit",attrs:{type:"button"},on:{click:function(e){return t.programUpdate()}}},[t._v("Update")])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col col-sm-5 col-xs-12"},[r("h4",{staticClass:"title"},[t._v("Program List")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("ID")]),t._v(" "),r("th",[t._v("Program name")]),t._v(" "),r("th",[t._v("Duration")]),t._v(" "),r("th",[t._v("Image")]),t._v(" "),r("th",[t._v("Status")]),t._v(" "),r("th",[t._v("Action")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("program Update")]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],!1,null,"3adacca0",null);e.default=component.exports}}]);