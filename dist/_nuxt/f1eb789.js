(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{450:function(e,t,r){"use strict";r.r(t);var l={layout:"Dum-content",mounted:function(){},data:function(){return{errors:[],gallery:{gallery_type:"",image:""}}},methods:{addGallery:function(){var e=this,t=new FormData;for(var r in this.gallery.image)if(this.gallery.image[r]instanceof File){if(this.gallery.image[r].size/1024/1024>1)return alert("File max size must be 1024KB"),t.delete("gallery"),$("#file_input").val(""),!1;t.append("image[]",this.gallery.image[r])}t.append("gallery_type",this.gallery.gallery_type),this.$axios.$post("/gallery/add",t).then((function(t){e.gallery="",e.errors={},e.$toaster.success(t.message),e.$router.push("/dum-ac/gallery")})).catch((function(t){e.errors=t.response.data.errors}))}}},n=r(30),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-bg py-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"form-shadow col-md-6 mx-auto p-4"},[r("h3",{staticClass:"title"},[e._v("Add Image")]),e._v(" "),r("form",[r("div",{staticClass:"form-group"},[e._m(0),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.gallery.gallery_type,expression:"gallery.gallery_type"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.gallery,"gallery_type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Select Gallery Type")]),e._v(" "),r("option",{attrs:{value:"academic"}},[e._v("Academic")]),e._v(" "),r("option",{attrs:{value:"event"}},[e._v("Event")]),e._v(" "),r("option",{attrs:{value:"tour"}},[e._v("Tour")])]),e._v(" "),e.errors.gallery_type?r("h6",{staticClass:"text-danger mt-2",domProps:{textContent:e._s(e.errors.gallery_type[0])}}):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[e._m(1),e._v(" "),r("br"),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"file",id:"file_input",name:"gallery[]",multiple:"multiple",accept:"image/*"},on:{change:function(t){return e.gallery.image=t.target.files}}}),e._v(" "),e.errors.image?r("h6",{staticClass:"text-danger mt-2",domProps:{textContent:e._s(e.errors.image[0])}}):e._e()]),e._v(" "),r("div",{staticClass:"d-flex justify-content-end pt-3"},[r("button",{staticClass:"btn-submit",on:{click:function(t){return t.preventDefault(),e.addGallery()}}},[e._v("Submit")])])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Gallery Type "),r("span",{staticClass:"text-success"},[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:""}},[e._v("Image "),r("span",{staticClass:"text-success"},[e._v("*")])])}],!1,null,"f7832110",null);t.default=component.exports}}]);