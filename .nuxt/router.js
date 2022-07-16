import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d0ee46e = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _a8d2e46c = () => interopDefault(import('../pages/admission/index.vue' /* webpackChunkName: "pages/admission/index" */))
const _cb0eb9c2 = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _04fddcc8 = () => interopDefault(import('../pages/dum-ac/index.vue' /* webpackChunkName: "pages/dum-ac/index" */))
const _e5799cba = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _5d1db8ea = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _7865a2fc = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _4c9ca214 = () => interopDefault(import('../pages/account/class.vue' /* webpackChunkName: "pages/account/class" */))
const _002c41ba = () => interopDefault(import('../pages/account/purpose.vue' /* webpackChunkName: "pages/account/purpose" */))
const _0fbcf421 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/index.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/index" */))
const _606ee135 = () => interopDefault(import('../pages/admission/batch/index.vue' /* webpackChunkName: "pages/admission/batch/index" */))
const _4db4648d = () => interopDefault(import('../pages/admission/department/index.vue' /* webpackChunkName: "pages/admission/department/index" */))
const _1685abc6 = () => interopDefault(import('../pages/admission/form-import.vue' /* webpackChunkName: "pages/admission/form-import" */))
const _29cd74b0 = () => interopDefault(import('../pages/admission/form-sale.vue' /* webpackChunkName: "pages/admission/form-sale" */))
const _676cacf6 = () => interopDefault(import('../pages/admission/form-stock.vue' /* webpackChunkName: "pages/admission/form-stock" */))
const _e7c6f6c2 = () => interopDefault(import('../pages/dum-ac/blog/index.vue' /* webpackChunkName: "pages/dum-ac/blog/index" */))
const _2e144336 = () => interopDefault(import('../pages/dum-ac/committee/index.vue' /* webpackChunkName: "pages/dum-ac/committee/index" */))
const _a36b3cd4 = () => interopDefault(import('../pages/dum-ac/contact.vue' /* webpackChunkName: "pages/dum-ac/contact" */))
const _5d835d13 = () => interopDefault(import('../pages/dum-ac/event/index.vue' /* webpackChunkName: "pages/dum-ac/event/index" */))
const _bbffdcaa = () => interopDefault(import('../pages/dum-ac/facilitie/index.vue' /* webpackChunkName: "pages/dum-ac/facilitie/index" */))
const _4435476a = () => interopDefault(import('../pages/dum-ac/gallery/index.vue' /* webpackChunkName: "pages/dum-ac/gallery/index" */))
const _77476056 = () => interopDefault(import('../pages/dum-ac/notice/index.vue' /* webpackChunkName: "pages/dum-ac/notice/index" */))
const _1c23a606 = () => interopDefault(import('../pages/dum-ac/program/index.vue' /* webpackChunkName: "pages/dum-ac/program/index" */))
const _608cfa9e = () => interopDefault(import('../pages/dum-ac/slider/index.vue' /* webpackChunkName: "pages/dum-ac/slider/index" */))
const _7d6bec5c = () => interopDefault(import('../pages/dum-ac/tution/index.vue' /* webpackChunkName: "pages/dum-ac/tution/index" */))
const _eb2de1d8 = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _2c10ffea = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _533acd30 = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _2dbd7e92 = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _68915cca = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _d65d1870 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _a9403e16 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _0b0d9861 = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _0f95dabd = () => interopDefault(import('../pages/admission/admissionInActiveBatch/create.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/create" */))
const _55bcdfae = () => interopDefault(import('../pages/admission/batch/create.vue' /* webpackChunkName: "pages/admission/batch/create" */))
const _dee7105e = () => interopDefault(import('../pages/admission/department/create.vue' /* webpackChunkName: "pages/admission/department/create" */))
const _1f2859ff = () => interopDefault(import('../pages/dum-ac/blog/create.vue' /* webpackChunkName: "pages/dum-ac/blog/create" */))
const _87af2370 = () => interopDefault(import('../pages/dum-ac/committee/create.vue' /* webpackChunkName: "pages/dum-ac/committee/create" */))
const _7a9c900b = () => interopDefault(import('../pages/dum-ac/event/create.vue' /* webpackChunkName: "pages/dum-ac/event/create" */))
const _7493231a = () => interopDefault(import('../pages/dum-ac/facilitie/create.vue' /* webpackChunkName: "pages/dum-ac/facilitie/create" */))
const _223c14ee = () => interopDefault(import('../pages/dum-ac/notice/create.vue' /* webpackChunkName: "pages/dum-ac/notice/create" */))
const _738bbd61 = () => interopDefault(import('../pages/dum-ac/program/create.vue' /* webpackChunkName: "pages/dum-ac/program/create" */))
const _4e72b840 = () => interopDefault(import('../pages/dum-ac/slider/create.vue' /* webpackChunkName: "pages/dum-ac/slider/create" */))
const _e0a909a8 = () => interopDefault(import('../pages/dum-ac/tution/create.vue' /* webpackChunkName: "pages/dum-ac/tution/create" */))
const _2b25c3ac = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _7caccc13 = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _3bd3238e = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _5d62f198 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _2d114ff6 = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _2f5eef2e = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _4887c7be = () => interopDefault(import('../pages/admission/batch/update/_id.vue' /* webpackChunkName: "pages/admission/batch/update/_id" */))
const _09d8d2c0 = () => interopDefault(import('../pages/dum-ac/committee/update/_id.vue' /* webpackChunkName: "pages/dum-ac/committee/update/_id" */))
const _69714c8e = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _c20915f4 = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _5678e866 = () => interopDefault(import('../pages/admission/print-receive/_id.vue' /* webpackChunkName: "pages/admission/print-receive/_id" */))
const _d76d2060 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _1d0ee46e,
    name: "account"
  }, {
    path: "/admission",
    component: _a8d2e46c,
    name: "admission"
  }, {
    path: "/app",
    component: _cb0eb9c2,
    name: "app"
  }, {
    path: "/dum-ac",
    component: _04fddcc8,
    name: "dum-ac"
  }, {
    path: "/employee",
    component: _e5799cba,
    name: "employee"
  }, {
    path: "/profile",
    component: _5d1db8ea,
    name: "profile"
  }, {
    path: "/student",
    component: _7865a2fc,
    name: "student"
  }, {
    path: "/account/class",
    component: _4c9ca214,
    name: "account-class"
  }, {
    path: "/account/purpose",
    component: _002c41ba,
    name: "account-purpose"
  }, {
    path: "/admission/admissionInActiveBatch",
    component: _0fbcf421,
    name: "admission-admissionInActiveBatch"
  }, {
    path: "/admission/batch",
    component: _606ee135,
    name: "admission-batch"
  }, {
    path: "/admission/department",
    component: _4db4648d,
    name: "admission-department"
  }, {
    path: "/admission/form-import",
    component: _1685abc6,
    name: "admission-form-import"
  }, {
    path: "/admission/form-sale",
    component: _29cd74b0,
    name: "admission-form-sale"
  }, {
    path: "/admission/form-stock",
    component: _676cacf6,
    name: "admission-form-stock"
  }, {
    path: "/dum-ac/blog",
    component: _e7c6f6c2,
    name: "dum-ac-blog"
  }, {
    path: "/dum-ac/committee",
    component: _2e144336,
    name: "dum-ac-committee"
  }, {
    path: "/dum-ac/contact",
    component: _a36b3cd4,
    name: "dum-ac-contact"
  }, {
    path: "/dum-ac/event",
    component: _5d835d13,
    name: "dum-ac-event"
  }, {
    path: "/dum-ac/facilitie",
    component: _bbffdcaa,
    name: "dum-ac-facilitie"
  }, {
    path: "/dum-ac/gallery",
    component: _4435476a,
    name: "dum-ac-gallery"
  }, {
    path: "/dum-ac/notice",
    component: _77476056,
    name: "dum-ac-notice"
  }, {
    path: "/dum-ac/program",
    component: _1c23a606,
    name: "dum-ac-program"
  }, {
    path: "/dum-ac/slider",
    component: _608cfa9e,
    name: "dum-ac-slider"
  }, {
    path: "/dum-ac/tution",
    component: _7d6bec5c,
    name: "dum-ac-tution"
  }, {
    path: "/employee/department",
    component: _eb2de1d8,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _2c10ffea,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _533acd30,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _2dbd7e92,
    name: "employee-office-time"
  }, {
    path: "/profile/qualification",
    component: _68915cca,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _d65d1870,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _a9403e16,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _0b0d9861,
    name: "profile-update"
  }, {
    path: "/admission/admissionInActiveBatch/create",
    component: _0f95dabd,
    name: "admission-admissionInActiveBatch-create"
  }, {
    path: "/admission/batch/create",
    component: _55bcdfae,
    name: "admission-batch-create"
  }, {
    path: "/admission/department/create",
    component: _dee7105e,
    name: "admission-department-create"
  }, {
    path: "/dum-ac/blog/create",
    component: _1f2859ff,
    name: "dum-ac-blog-create"
  }, {
    path: "/dum-ac/committee/create",
    component: _87af2370,
    name: "dum-ac-committee-create"
  }, {
    path: "/dum-ac/event/create",
    component: _7a9c900b,
    name: "dum-ac-event-create"
  }, {
    path: "/dum-ac/facilitie/create",
    component: _7493231a,
    name: "dum-ac-facilitie-create"
  }, {
    path: "/dum-ac/notice/create",
    component: _223c14ee,
    name: "dum-ac-notice-create"
  }, {
    path: "/dum-ac/program/create",
    component: _738bbd61,
    name: "dum-ac-program-create"
  }, {
    path: "/dum-ac/slider/create",
    component: _4e72b840,
    name: "dum-ac-slider-create"
  }, {
    path: "/dum-ac/tution/create",
    component: _e0a909a8,
    name: "dum-ac-tution-create"
  }, {
    path: "/employee/department/create",
    component: _2b25c3ac,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _7caccc13,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _3bd3238e,
    name: "employee-employee-create"
  }, {
    path: "/profile/qualification/create",
    component: _5d62f198,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _2d114ff6,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _2f5eef2e,
    name: "profile-training-create"
  }, {
    path: "/admission/batch/update/:id?",
    component: _4887c7be,
    name: "admission-batch-update-id"
  }, {
    path: "/dum-ac/committee/update/:id",
    component: _09d8d2c0,
    name: "dum-ac-committee-update-id"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _69714c8e,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _c20915f4,
    name: "employee-employee-update-id"
  }, {
    path: "/admission/print-receive/:id?",
    component: _5678e866,
    name: "admission-print-receive-id"
  }, {
    path: "/",
    component: _d76d2060,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
