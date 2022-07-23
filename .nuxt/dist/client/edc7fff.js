(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{454:function(t,e,o){"use strict";o.r(e);var n={layout:"Dum-content",mounted:function(){this.getTution(),this.getProgram()},data:function(){return{tutions:[],tution:{name_of_program:"",duration:"",type:"",total_fee:""},errors:{},programs:""}},methods:{getProgram:function(){var t=this;this.$axios.$get("/program/show").then((function(e){t.programs=e})).catch((function(t){console.log(t)}))},getTution:function(){var t=this;this.$axios.$get("/tution/show").then((function(e){console.log(e),t.tutions=e})).catch((function(t){console.log(t)}))},tutionEdit:function(t){var e=this;$("#tutionUpdate").modal("show"),this.$axios.$get("/tution/edit/"+t).then((function(t){e.tution=t})).catch((function(t){console.log(t)}))},tutionUpdate:function(){var t=this;this.$axios.$post("/tution/update/"+this.tution.id,this.tution).then((function(e){t.getTution(),$("#tutionUpdate").modal("hide"),t.$toaster.success(e.message),t.errors=""})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},deletetution:function(t){var e=this;confirm("Are you sure to delete this tution?")&&this.$axios.$get("/tution/delete/"+t).then((function(t){e.getTution(),e.$toaster.error(t.message)})).catch((function(t){console.log(t)}))},tutionStatus:function(t){var e=this;this.$axios.$get("/tution/status/"+t).then((function(t){e.getTution(),e.$toaster.success(t.message)})).catch((function(t){console.log(t)}))}}},r=o(30),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"pt-5"},[o("div",{staticClass:"row"},[o("div",{staticClass:"mx-auto col-md-12"},[o("div",{staticClass:"panel"},[o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-sm-7 col-xs-12 text-right"},[o("nuxt-link",{staticClass:"btn-add",attrs:{to:"/dum-ac/tution/create"}},[t._v("Add tution")])],1)])]),t._v(" "),o("div",{staticClass:"panel-body table-responsive"},[o("table",{staticClass:"table table-striped text-center"},[t._m(1),t._v(" "),o("tbody",t._l(t.tutions,(function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.id))]),t._v(" "),o("td",[t._v(t._s(e.name_of_program))]),t._v(" "),o("td",[t._v(t._s(e.duration))]),t._v(" "),o("td",[t._v(t._s(e.type))]),t._v(" "),o("td",[t._v(t._s(e.total_fee))]),t._v(" "),o("td",[1==e.status?o("button",{staticClass:"btn-active",on:{click:function(o){return t.tutionStatus(e.id)}}},[t._v("\n                      Active\n                    ")]):t._e(),t._v(" "),0==e.status?o("button",{staticClass:"btn-inactive",on:{click:function(o){return t.tutionStatus(e.id)}}},[t._v("\n                      Inactive\n                    ")]):t._e()]),t._v(" "),o("td",[o("button",{staticClass:"btn-edit",on:{click:function(o){return t.tutionEdit(e.id)}}},[t._v("\n                      Edit\n                    ")]),t._v(" "),o("button",{staticClass:"btn-delete",on:{click:function(o){return t.deletetution(e.id)}}},[t._v("\n                      Delete\n                    ")])])])})),0)])])])])]),t._v(" "),o("div",{staticClass:"modal fade",attrs:{id:"tutionUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Name Of Program")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.tution.name_of_program,expression:"tution.name_of_program"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tution,"name_of_program",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Select Program")]),t._v(" "),t._l(t.programs,(function(e){return o("option",{key:e.id,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2),t._v(" "),t.errors.name_of_program?o("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.name_of_program[0])}}):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Type")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.tution.type,expression:"tution.type"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tution,"type",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Select Type")]),t._v(" "),o("option",{attrs:{value:"residential"}},[t._v("Residential")]),t._v(" "),o("option",{attrs:{value:"non_residential"}},[t._v("Non Residential")]),t._v(" "),o("option",{attrs:{value:"day_care"}},[t._v("Day Care")])]),t._v(" "),t.errors.type?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.type[0])}}):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Duration")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.tution.duration,expression:"tution.duration"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tution,"duration",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Select Duration")]),t._v(" "),t._l(t.programs,(function(e){return o("option",{key:e.id,domProps:{value:e.duration}},[t._v(t._s(e.duration))])}))],2),t._v(" "),t.errors.duration?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.duration[0])}}):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Total Fee")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tution.total_fee,expression:"tution.total_fee"}],staticClass:"form-control",attrs:{type:"text",id:"name_of_program",placeholder:"Total Fee"},domProps:{value:t.tution.total_fee},on:{input:function(e){e.target.composing||t.$set(t.tution,"total_fee",e.target.value)}}}),t._v(" "),t.errors.total_fee?o("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.total_fee[0])}}):t._e()])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-submit",attrs:{type:"button"},on:{click:function(e){return t.tutionUpdate()}}},[t._v("\n              Update\n            ")])])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col col-sm-5 col-xs-12"},[o("h4",{staticClass:"title"},[t._v("tution List")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("ID")]),t._v(" "),o("th",[t._v("Name Of Program")]),t._v(" "),o("th",[t._v("Duration")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Total Fee")]),t._v(" "),o("th",[t._v("Status")]),t._v(" "),o("th",{staticStyle:{width:"200px"}},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("\n              Tution Fee Update\n            ")]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],!1,null,"126f1bee",null);e.default=component.exports}}]);