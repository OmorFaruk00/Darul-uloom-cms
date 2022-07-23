exports.ids = [34];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/program/create.vue?vue&type=template&id=18e22b18&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-5"},[_vm._ssrNode("<div class=\"col-md-6 mx-auto form-shadow p-5\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-end\">","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/program"}},[_vm._v(" program List")])],1),_vm._ssrNode(" "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"form-group\"><label for>Program Name</label> <input type=\"text\" placeholder=\"Program Name\""+(_vm._ssrAttr("value",(_vm.program.name)))+" class=\"form-control\"> "+((_vm.errors.title)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.title[0]))+"</p>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Duration</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.program.duration),expression:"program.duration"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.program, "duration", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Duration")]),_vm._v(" "),_c('option',{attrs:{"value":"1 Year"}},[_vm._v("1 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"2 Year"}},[_vm._v("2 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"3 Year"}},[_vm._v("3 Year")]),_vm._v(" "),_c('option',{attrs:{"value":"4 Year"}},[_vm._v("4 Year")])]),_vm._ssrNode(" "+((_vm.errors.duration)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.duration[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\"><label for>Image</label> <input required=\"required\" type=\"file\" id=\"program_image\" name=\"image\" accept=\"image/*\" class=\"form-control\"> "+((_vm.errors.image)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</p>"):"<!---->")+"</div> <div class=\"d-flex justify-content-end\"><button class=\"btn-submit\">\n          Submit\n        </button></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/program/create.vue?vue&type=template&id=18e22b18&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/program/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  data() {
    return {
      program: {
        name: "",
        image: "",
        duration: ""
      },
      errors: {}
    };
  },

  methods: {
    addprogram() {
      let formData = new FormData();
      formData.append('name', this.program.name);
      formData.append('duration', this.program.duration);
      formData.append('image', this.program.image);
      this.$axios.$post("/program/add", formData).then(res => {
        this.program = "";
        this.errors = {};
        this.$toaster.success("program Added Successfully");
        this.$router.push("/dum-ac/program");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/program/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var program_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/program/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  program_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "782f3234"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map