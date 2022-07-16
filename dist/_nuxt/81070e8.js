(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{437:function(t,e,o){"use strict";o.r(e);var l={layout:"Profile-content",mounted:function(){this.getsocial()},data:function(){return{socials:"",social:{type:"",name:""},errors:{}}},methods:{getsocial:function(){var t=this;this.$axios.$get("/social/show").then((function(e){t.socials=e})).catch((function(t){console.log(t)}))},socialEdit:function(t){var e=this;$("#socialUpdate").modal("show"),this.$axios.$get("/social/edit/"+t).then((function(t){e.social=t})).catch((function(t){console.log(t)}))},socialUpdate:function(){var t=this;this.$axios.$post("/social/update/"+this.social.id,this.social).then((function(e){t.getsocial(),$("#socialUpdate").modal("hide"),t.$toaster.success(e.message),t.errors=""})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},socialDelete:function(t){var e=this;confirm("Are you sure to delete this social?")&&this.$axios.$get("/social/delete/"+t).then((function(t){e.getsocial(),e.$toaster.error(t.message)})).catch((function(t){console.log(t)}))}}},c=o(34),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"pt-5"},[o("div",{staticClass:"row"},[o("div",{staticClass:"mx-auto col-md-12"},[o("div",{staticClass:"panel"},[o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-sm-7 col-xs-12 text-right"},[o("nuxt-link",{staticClass:"btn-add",attrs:{to:"/Profile/social/create"}},[t._v("Add social")])],1)])]),t._v(" "),o("div",{staticClass:"panel-body table-responsive"},[o("table",{staticClass:"table table-striped text-center"},[t._m(1),t._v(" "),o("tbody",t._l(t.socials,(function(e){return o("tr",{key:e._id},[o("td",[t._v(t._s(e.social_name))]),t._v(" "),o("td",[t._v(t._s(e.social_url))]),t._v(" "),o("td",[o("button",{staticClass:"btn-edit",on:{click:function(o){return t.socialEdit(e.id)}}},[t._v("\n                        Edit\n                      ")]),t._v(" "),o("button",{staticClass:"btn-delete",on:{click:function(o){return t.socialDelete(e.id)}}},[t._v("\n                        Delete\n                      ")])])])})),0)])])])])]),t._v(" "),o("div",{staticClass:"modal fade",attrs:{id:"socialUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-horizontal"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Social Name")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.social.social_name,expression:"social.social_name"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.social,"social_name",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select Type")]),t._v(" "),o("option",{attrs:{value:"Facebook"}},[t._v("Facebook")]),t._v(" "),o("option",{attrs:{value:"Instagram"}},[t._v("Instagram")]),t._v(" "),o("option",{attrs:{value:"LinkedIn"}},[t._v("LinkedIn")]),t._v(" "),o("option",{attrs:{value:"Twitter"}},[t._v("Twitter")]),t._v(" "),o("option",{attrs:{value:"WhatsApp"}},[t._v("WhatsApp")])]),t._v(" "),t.errors.social_name?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.social_name[0])}}):t._e()]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Social Link")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.social.social_url,expression:"social.social_url"}],staticClass:"form-control",attrs:{social_name:"text",placeholder:"Social Link "},domProps:{value:t.social.social_url},on:{input:function(e){e.target.composing||t.$set(t.social,"social_url",e.target.value)}}})]),t._v(" "),t.errors.social_url?o("h6",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.social_url[0])}}):t._e()])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn-submit",attrs:{type:"button"},on:{click:function(e){return t.socialUpdate()}}},[t._v("\n                Update\n              ")])])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col col-sm-5 col-xs-12"},[o("h4",{staticClass:"title"},[t._v("Social Link List")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Social Name")]),t._v(" "),o("th",[t._v("Social Link")]),t._v(" "),o("th",[t._v("Action")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"title"},[t._v("\n                Social Update\n              ")]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],!1,null,"9c261120",null);e.default=component.exports}}]);