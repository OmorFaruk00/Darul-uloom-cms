import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe70eda6 = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _03b8fec9 = () => interopDefault(import('../pages/admission/index.vue' /* webpackChunkName: "pages/admission/index" */))
const _4ff55a9e = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _6b4e2429 = () => interopDefault(import('../pages/dum-ac/index.vue' /* webpackChunkName: "pages/dum-ac/index" */))
const _bec1b678 = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _7e5344ae = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _47c3708a = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _9f55725a = () => interopDefault(import('../pages/account/class.vue' /* webpackChunkName: "pages/account/class" */))
const _584eb2b9 = () => interopDefault(import('../pages/account/purpose.vue' /* webpackChunkName: "pages/account/purpose" */))
const _8f2dbcf6 = () => interopDefault(import('../pages/admission/form-import.vue' /* webpackChunkName: "pages/admission/form-import" */))
const _cae5c1b2 = () => interopDefault(import('../pages/admission/form-sale.vue' /* webpackChunkName: "pages/admission/form-sale" */))
const _0b50ffe6 = () => interopDefault(import('../pages/admission/form-stock.vue' /* webpackChunkName: "pages/admission/form-stock" */))
const _6566b1de = () => interopDefault(import('../pages/dum-ac/blog/index.vue' /* webpackChunkName: "pages/dum-ac/blog/index" */))
const _6ec0f552 = () => interopDefault(import('../pages/dum-ac/committee/index.vue' /* webpackChunkName: "pages/dum-ac/committee/index" */))
const _7cb35692 = () => interopDefault(import('../pages/dum-ac/contact.vue' /* webpackChunkName: "pages/dum-ac/contact" */))
const _a5025098 = () => interopDefault(import('../pages/dum-ac/event/index.vue' /* webpackChunkName: "pages/dum-ac/event/index" */))
const _3c8b53cc = () => interopDefault(import('../pages/dum-ac/facilitie/index.vue' /* webpackChunkName: "pages/dum-ac/facilitie/index" */))
const _1cecb2ac = () => interopDefault(import('../pages/dum-ac/gallery/index.vue' /* webpackChunkName: "pages/dum-ac/gallery/index" */))
const _73d02954 = () => interopDefault(import('../pages/dum-ac/notice/index.vue' /* webpackChunkName: "pages/dum-ac/notice/index" */))
const _30f5835e = () => interopDefault(import('../pages/dum-ac/program/index.vue' /* webpackChunkName: "pages/dum-ac/program/index" */))
const _1000d41d = () => interopDefault(import('../pages/dum-ac/slider/index.vue' /* webpackChunkName: "pages/dum-ac/slider/index" */))
const _70bde351 = () => interopDefault(import('../pages/dum-ac/tution/index.vue' /* webpackChunkName: "pages/dum-ac/tution/index" */))
const _03e4e55a = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _2a3a6ca8 = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _0a17cf2f = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _2ea8c833 = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _f5e1716e = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _584e6bae = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _45eb2316 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _6f23d4a0 = () => interopDefault(import('../pages/dum-ac/blog/create.vue' /* webpackChunkName: "pages/dum-ac/blog/create" */))
const _73057047 = () => interopDefault(import('../pages/dum-ac/committee/create.vue' /* webpackChunkName: "pages/dum-ac/committee/create" */))
const _2a10698a = () => interopDefault(import('../pages/dum-ac/event/create.vue' /* webpackChunkName: "pages/dum-ac/event/create" */))
const _7c937072 = () => interopDefault(import('../pages/dum-ac/facilitie/create.vue' /* webpackChunkName: "pages/dum-ac/facilitie/create" */))
const _2de94bea = () => interopDefault(import('../pages/dum-ac/notice/create.vue' /* webpackChunkName: "pages/dum-ac/notice/create" */))
const _156f3320 = () => interopDefault(import('../pages/dum-ac/program/create.vue' /* webpackChunkName: "pages/dum-ac/program/create" */))
const _17cdfa41 = () => interopDefault(import('../pages/dum-ac/slider/create.vue' /* webpackChunkName: "pages/dum-ac/slider/create" */))
const _629a5ce6 = () => interopDefault(import('../pages/dum-ac/tution/create.vue' /* webpackChunkName: "pages/dum-ac/tution/create" */))
const _294f306a = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _cdaa92dc = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _6096616f = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _448dec95 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _62167496 = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _c1a4eb30 = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _2656bd3f = () => interopDefault(import('../pages/dum-ac/committee/update/_id.vue' /* webpackChunkName: "pages/dum-ac/committee/update/_id" */))
const _469e9c22 = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _123ada67 = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _72f6d2e5 = () => interopDefault(import('../pages/admission/print-receive/_id.vue' /* webpackChunkName: "pages/admission/print-receive/_id" */))
const _451378e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _fe70eda6,
    name: "account"
  }, {
    path: "/admission",
    component: _03b8fec9,
    name: "admission"
  }, {
    path: "/app",
    component: _4ff55a9e,
    name: "app"
  }, {
    path: "/dum-ac",
    component: _6b4e2429,
    name: "dum-ac"
  }, {
    path: "/employee",
    component: _bec1b678,
    name: "employee"
  }, {
    path: "/profile",
    component: _7e5344ae,
    name: "profile"
  }, {
    path: "/student",
    component: _47c3708a,
    name: "student"
  }, {
    path: "/account/class",
    component: _9f55725a,
    name: "account-class"
  }, {
    path: "/account/purpose",
    component: _584eb2b9,
    name: "account-purpose"
  }, {
    path: "/admission/form-import",
    component: _8f2dbcf6,
    name: "admission-form-import"
  }, {
    path: "/admission/form-sale",
    component: _cae5c1b2,
    name: "admission-form-sale"
  }, {
    path: "/admission/form-stock",
    component: _0b50ffe6,
    name: "admission-form-stock"
  }, {
    path: "/dum-ac/blog",
    component: _6566b1de,
    name: "dum-ac-blog"
  }, {
    path: "/dum-ac/committee",
    component: _6ec0f552,
    name: "dum-ac-committee"
  }, {
    path: "/dum-ac/contact",
    component: _7cb35692,
    name: "dum-ac-contact"
  }, {
    path: "/dum-ac/event",
    component: _a5025098,
    name: "dum-ac-event"
  }, {
    path: "/dum-ac/facilitie",
    component: _3c8b53cc,
    name: "dum-ac-facilitie"
  }, {
    path: "/dum-ac/gallery",
    component: _1cecb2ac,
    name: "dum-ac-gallery"
  }, {
    path: "/dum-ac/notice",
    component: _73d02954,
    name: "dum-ac-notice"
  }, {
    path: "/dum-ac/program",
    component: _30f5835e,
    name: "dum-ac-program"
  }, {
    path: "/dum-ac/slider",
    component: _1000d41d,
    name: "dum-ac-slider"
  }, {
    path: "/dum-ac/tution",
    component: _70bde351,
    name: "dum-ac-tution"
  }, {
    path: "/employee/department",
    component: _03e4e55a,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _2a3a6ca8,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _0a17cf2f,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _2ea8c833,
    name: "employee-office-time"
  }, {
    path: "/profile/qualification",
    component: _f5e1716e,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _584e6bae,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _45eb2316,
    name: "profile-training"
  }, {
    path: "/dum-ac/blog/create",
    component: _6f23d4a0,
    name: "dum-ac-blog-create"
  }, {
    path: "/dum-ac/committee/create",
    component: _73057047,
    name: "dum-ac-committee-create"
  }, {
    path: "/dum-ac/event/create",
    component: _2a10698a,
    name: "dum-ac-event-create"
  }, {
    path: "/dum-ac/facilitie/create",
    component: _7c937072,
    name: "dum-ac-facilitie-create"
  }, {
    path: "/dum-ac/notice/create",
    component: _2de94bea,
    name: "dum-ac-notice-create"
  }, {
    path: "/dum-ac/program/create",
    component: _156f3320,
    name: "dum-ac-program-create"
  }, {
    path: "/dum-ac/slider/create",
    component: _17cdfa41,
    name: "dum-ac-slider-create"
  }, {
    path: "/dum-ac/tution/create",
    component: _629a5ce6,
    name: "dum-ac-tution-create"
  }, {
    path: "/employee/department/create",
    component: _294f306a,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _cdaa92dc,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _6096616f,
    name: "employee-employee-create"
  }, {
    path: "/profile/qualification/create",
    component: _448dec95,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _62167496,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _c1a4eb30,
    name: "profile-training-create"
  }, {
    path: "/dum-ac/committee/update/:id",
    component: _2656bd3f,
    name: "dum-ac-committee-update-id"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _469e9c22,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _123ada67,
    name: "employee-employee-update-id"
  }, {
    path: "/admission/print-receive/:id?",
    component: _72f6d2e5,
    name: "admission-print-receive-id"
  }, {
    path: "/",
    component: _451378e2,
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
