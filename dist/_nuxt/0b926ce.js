(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{442:function(t,e,n){"use strict";n.r(e);n(4),n(60);var r={layout:"Dum-content",data:function(){return{event:{title:"",image:"",description:""},errors:{}}},methods:{addevent:function(){var t=this,e=new FormData;e.append("title",this.event.title),e.append("description",this.event.description),e.append("image",this.event.image),this.$axios.$post("/event/add",e).then((function(e){t.event="",t.errors={},t.$toaster.success("Event Added Successfully"),t.$router.push("/dum-ac/event")})).catch((function(e){t.errors=e.response.data.errors}))}}},o=n(34),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-5"},[n("div",{staticClass:"col-md-6 mx-auto form-shadow p-5"},[n("div",{staticClass:"d-flex justify-content-end"},[n("nuxt-link",{staticClass:"btn-add",attrs:{to:"/dum-ac/event"}},[t._v(" event List")])],1),t._v(" "),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.event.title,expression:"event.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.event.title},on:{input:function(e){e.target.composing||t.$set(t.event,"title",e.target.value)}}}),t._v(" "),t.errors.title?n("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.title[0])}}):t._e()]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Description")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.event.description,expression:"event.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Short Description"},domProps:{value:t.event.description},on:{input:function(e){e.target.composing||t.$set(t.event,"description",e.target.value)}}}),t._v(" "),t.errors.description?n("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.description[0])}}):t._e()]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Image")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{required:"",type:"file",id:"event_image",name:"image",accept:"image/*"},on:{change:function(e){return t.event.image=e.target.files[0]}}}),t._v(" "),t.errors.image?n("p",{staticClass:"text-danger",domProps:{textContent:t._s(t.errors.image[0])}}):t._e()]),t._v(" "),n("div",{staticClass:"d-flex justify-content-end"},[n("button",{staticClass:"btn-submit",on:{click:function(e){return e.preventDefault(),t.addevent()}}},[t._v("\n          Submit\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);