import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30cf696f = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _5d6c52ea = () => interopDefault(import('../pages/admission/index.vue' /* webpackChunkName: "pages/admission/index" */))
const _784a4560 = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _605e7552 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _1cd9667c = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _d8d3118e = () => interopDefault(import('../pages/leave/index.vue' /* webpackChunkName: "pages/leave/index" */))
const _02b7682e = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _70de3deb = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _430a5dd2 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _e7b3b006 = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _46d73cc1 = () => interopDefault(import('../pages/web-dui/index.vue' /* webpackChunkName: "pages/web-dui/index" */))
const _5d1bf80a = () => interopDefault(import('../pages/account/account.vue' /* webpackChunkName: "pages/account/account" */))
const _3563767d = () => interopDefault(import('../pages/account/deposite/index.vue' /* webpackChunkName: "pages/account/deposite/index" */))
const _73a29378 = () => interopDefault(import('../pages/account/expense/index.vue' /* webpackChunkName: "pages/account/expense/index" */))
const _72a3bb80 = () => interopDefault(import('../pages/account/fee-collect.vue' /* webpackChunkName: "pages/account/fee-collect" */))
const _2bf7a190 = () => interopDefault(import('../pages/account/fund.vue' /* webpackChunkName: "pages/account/fund" */))
const _c2cf4de0 = () => interopDefault(import('../pages/account/fund-transfer.vue' /* webpackChunkName: "pages/account/fund-transfer" */))
const _c609ee84 = () => interopDefault(import('../pages/account/purpose/index.vue' /* webpackChunkName: "pages/account/purpose/index" */))
const _10fac90c = () => interopDefault(import('../pages/account/statement.vue' /* webpackChunkName: "pages/account/statement" */))
const _651a04d7 = () => interopDefault(import('../pages/account/sub_fund.vue' /* webpackChunkName: "pages/account/sub_fund" */))
const _535aa285 = () => interopDefault(import('../pages/account/test.vue' /* webpackChunkName: "pages/account/test" */))
const _c3f53b80 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/index.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/index" */))
const _53c25594 = () => interopDefault(import('../pages/admission/batch/index.vue' /* webpackChunkName: "pages/admission/batch/index" */))
const _6d91c92c = () => interopDefault(import('../pages/admission/department/index.vue' /* webpackChunkName: "pages/admission/department/index" */))
const _0833e456 = () => interopDefault(import('../pages/admission/dept-wish-student.vue' /* webpackChunkName: "pages/admission/dept-wish-student" */))
const _e794c072 = () => interopDefault(import('../pages/admission/form-import.vue' /* webpackChunkName: "pages/admission/form-import" */))
const _008845e9 = () => interopDefault(import('../pages/admission/form-sale.vue' /* webpackChunkName: "pages/admission/form-sale" */))
const _60f63eb2 = () => interopDefault(import('../pages/admission/form-sale-list.vue' /* webpackChunkName: "pages/admission/form-sale-list" */))
const _64bab164 = () => interopDefault(import('../pages/admission/form-stock.vue' /* webpackChunkName: "pages/admission/form-stock" */))
const _d56e1568 = () => interopDefault(import('../pages/admission/form-unsold-list.vue' /* webpackChunkName: "pages/admission/form-unsold-list" */))
const _67eb88a6 = () => interopDefault(import('../pages/admission/search-student.vue' /* webpackChunkName: "pages/admission/search-student" */))
const _01e5cad6 = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _09d4e4aa = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _1cbdc4f1 = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _4d9ae331 = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _67c6dc04 = () => interopDefault(import('../pages/leave/application_denied_by_other.vue' /* webpackChunkName: "pages/leave/application_denied_by_other" */))
const _3b13c73c = () => interopDefault(import('../pages/leave/application_form.vue' /* webpackChunkName: "pages/leave/application_form" */))
const _35c40d86 = () => interopDefault(import('../pages/leave/approval_application.vue' /* webpackChunkName: "pages/leave/approval_application" */))
const _721691b1 = () => interopDefault(import('../pages/leave/approved_application.vue' /* webpackChunkName: "pages/leave/approved_application" */))
const _954ac062 = () => interopDefault(import('../pages/leave/pending_application.vue' /* webpackChunkName: "pages/leave/pending_application" */))
const _0994c4a6 = () => interopDefault(import('../pages/leave/self_denied_application.vue' /* webpackChunkName: "pages/leave/self_denied_application" */))
const _6eb13004 = () => interopDefault(import('../pages/leave/withdraw_application.vue' /* webpackChunkName: "pages/leave/withdraw_application" */))
const _44608c0b = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _2d427ba7 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _28a325d8 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _6f5db380 = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _e46096d8 = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _147e9e7f = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _07f680b4 = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _03b54a13 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _78d8cb51 = () => interopDefault(import('../pages/student/attendance/index.vue' /* webpackChunkName: "pages/student/attendance/index" */))
const _2f727efa = () => interopDefault(import('../pages/student/course/index.vue' /* webpackChunkName: "pages/student/course/index" */))
const _27aff3be = () => interopDefault(import('../pages/student/lecture-sheet/index.vue' /* webpackChunkName: "pages/student/lecture-sheet/index" */))
const _d0870568 = () => interopDefault(import('../pages/student/lesson-plan/index.vue' /* webpackChunkName: "pages/student/lesson-plan/index" */))
const _1dc2e964 = () => interopDefault(import('../pages/student/question/index.vue' /* webpackChunkName: "pages/student/question/index" */))
const _e3a52b0a = () => interopDefault(import('../pages/student/search-student.vue' /* webpackChunkName: "pages/student/search-student" */))
const _7a5b1e80 = () => interopDefault(import('../pages/student/students/index.vue' /* webpackChunkName: "pages/student/students/index" */))
const _407d2a8d = () => interopDefault(import('../pages/student/syllabus/index.vue' /* webpackChunkName: "pages/student/syllabus/index" */))
const _62dec97c = () => interopDefault(import('../pages/student/update-image.vue' /* webpackChunkName: "pages/student/update-image" */))
const _4f2d3846 = () => interopDefault(import('../pages/web-dui/blog/index.vue' /* webpackChunkName: "pages/web-dui/blog/index" */))
const _6574bfef = () => interopDefault(import('../pages/web-dui/committee/index.vue' /* webpackChunkName: "pages/web-dui/committee/index" */))
const _4168b162 = () => interopDefault(import('../pages/web-dui/contact.vue' /* webpackChunkName: "pages/web-dui/contact" */))
const _06edc368 = () => interopDefault(import('../pages/web-dui/event/index.vue' /* webpackChunkName: "pages/web-dui/event/index" */))
const _4d3ee338 = () => interopDefault(import('../pages/web-dui/facilitie/index.vue' /* webpackChunkName: "pages/web-dui/facilitie/index" */))
const _5b009978 = () => interopDefault(import('../pages/web-dui/gallery/index.vue' /* webpackChunkName: "pages/web-dui/gallery/index" */))
const _060eb5bc = () => interopDefault(import('../pages/web-dui/notice/index.vue' /* webpackChunkName: "pages/web-dui/notice/index" */))
const _32eef814 = () => interopDefault(import('../pages/web-dui/program/index.vue' /* webpackChunkName: "pages/web-dui/program/index" */))
const _bb813ef6 = () => interopDefault(import('../pages/web-dui/slider/index.vue' /* webpackChunkName: "pages/web-dui/slider/index" */))
const _02fc6fb9 = () => interopDefault(import('../pages/web-dui/tution/index.vue' /* webpackChunkName: "pages/web-dui/tution/index" */))
const _c280b83e = () => interopDefault(import('../pages/account/deposite/create.vue' /* webpackChunkName: "pages/account/deposite/create" */))
const _28642646 = () => interopDefault(import('../pages/account/expense/create.vue' /* webpackChunkName: "pages/account/expense/create" */))
const _07ec68d8 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/test.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/test" */))
const _15701c48 = () => interopDefault(import('../pages/admission/batch/create.vue' /* webpackChunkName: "pages/admission/batch/create" */))
const _6c5ba712 = () => interopDefault(import('../pages/admission/department/create.vue' /* webpackChunkName: "pages/admission/department/create" */))
const _0a4a82c9 = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _587bfb54 = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _baa1b826 = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _130b90a4 = () => interopDefault(import('../pages/employee/employee/show.vue' /* webpackChunkName: "pages/employee/employee/show" */))
const _6f654013 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _ba7d7812 = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _9c58ffac = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _29127c76 = () => interopDefault(import('../pages/student/attendance/report.vue' /* webpackChunkName: "pages/student/attendance/report" */))
const _33c9490e = () => interopDefault(import('../pages/student/course/assign.vue' /* webpackChunkName: "pages/student/course/assign" */))
const _48459a9b = () => interopDefault(import('../pages/student/course/create.vue' /* webpackChunkName: "pages/student/course/create" */))
const _13fa6280 = () => interopDefault(import('../pages/student/lecture-sheet/create.vue' /* webpackChunkName: "pages/student/lecture-sheet/create" */))
const _f0f1121c = () => interopDefault(import('../pages/student/lesson-plan/create.vue' /* webpackChunkName: "pages/student/lesson-plan/create" */))
const _5a672930 = () => interopDefault(import('../pages/student/question/create.vue' /* webpackChunkName: "pages/student/question/create" */))
const _12471c5e = () => interopDefault(import('../pages/student/syllabus/create.vue' /* webpackChunkName: "pages/student/syllabus/create" */))
const _83a3c990 = () => interopDefault(import('../pages/web-dui/blog/create.vue' /* webpackChunkName: "pages/web-dui/blog/create" */))
const _70d788af = () => interopDefault(import('../pages/web-dui/committee/create.vue' /* webpackChunkName: "pages/web-dui/committee/create" */))
const _8762141c = () => interopDefault(import('../pages/web-dui/event/create.vue' /* webpackChunkName: "pages/web-dui/event/create" */))
const _7a6588da = () => interopDefault(import('../pages/web-dui/facilitie/create.vue' /* webpackChunkName: "pages/web-dui/facilitie/create" */))
const _390766fc = () => interopDefault(import('../pages/web-dui/notice/create.vue' /* webpackChunkName: "pages/web-dui/notice/create" */))
const _123c4588 = () => interopDefault(import('../pages/web-dui/program/create.vue' /* webpackChunkName: "pages/web-dui/program/create" */))
const _653e0a4e = () => interopDefault(import('../pages/web-dui/slider/create.vue' /* webpackChunkName: "pages/web-dui/slider/create" */))
const _f7745bb6 = () => interopDefault(import('../pages/web-dui/tution/create.vue' /* webpackChunkName: "pages/web-dui/tution/create" */))
const _0d784238 = () => interopDefault(import('../pages/account/purpose/update/_id.vue' /* webpackChunkName: "pages/account/purpose/update/_id" */))
const _3a19e1ae = () => interopDefault(import('../pages/admission/admissionInActiveBatch/create/_id.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/create/_id" */))
const _2b9a5874 = () => interopDefault(import('../pages/admission/batch/BatchWiseStudent/_id.vue' /* webpackChunkName: "pages/admission/batch/BatchWiseStudent/_id" */))
const _08ccfe80 = () => interopDefault(import('../pages/admission/batch/update/_id.vue' /* webpackChunkName: "pages/admission/batch/update/_id" */))
const _0788056d = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _3d122de5 = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _1ddba8b8 = () => interopDefault(import('../pages/student/attendance/create/_id.vue' /* webpackChunkName: "pages/student/attendance/create/_id" */))
const _9fdcc4da = () => interopDefault(import('../pages/student/course/update/_id.vue' /* webpackChunkName: "pages/student/course/update/_id" */))
const _161e3738 = () => interopDefault(import('../pages/student/lecture-sheet/update/_id.vue' /* webpackChunkName: "pages/student/lecture-sheet/update/_id" */))
const _f061132c = () => interopDefault(import('../pages/student/lesson-plan/update/_id.vue' /* webpackChunkName: "pages/student/lesson-plan/update/_id" */))
const _ba204cb0 = () => interopDefault(import('../pages/student/question/update/_id.vue' /* webpackChunkName: "pages/student/question/update/_id" */))
const _07442c6e = () => interopDefault(import('../pages/student/syllabus/update/_id.vue' /* webpackChunkName: "pages/student/syllabus/update/_id" */))
const _431661a7 = () => interopDefault(import('../pages/web-dui/committee/update/_id.vue' /* webpackChunkName: "pages/web-dui/committee/update/_id" */))
const _324817a7 = () => interopDefault(import('../pages/admission/print-receive/_id.vue' /* webpackChunkName: "pages/admission/print-receive/_id" */))
const _f9e9a946 = () => interopDefault(import('../pages/admission/student-update/_id.vue' /* webpackChunkName: "pages/admission/student-update/_id" */))
const _87366050 = () => interopDefault(import('../pages/password-reset-confirm/_token.vue' /* webpackChunkName: "pages/password-reset-confirm/_token" */))
const _443b85d1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _30cf696f,
    name: "account"
  }, {
    path: "/admission",
    component: _5d6c52ea,
    name: "admission"
  }, {
    path: "/app",
    component: _784a4560,
    name: "app"
  }, {
    path: "/change-password",
    component: _605e7552,
    name: "change-password"
  }, {
    path: "/employee",
    component: _1cd9667c,
    name: "employee"
  }, {
    path: "/leave",
    component: _d8d3118e,
    name: "leave"
  }, {
    path: "/password-reset",
    component: _02b7682e,
    name: "password-reset"
  }, {
    path: "/profile",
    component: _70de3deb,
    name: "profile"
  }, {
    path: "/setting",
    component: _430a5dd2,
    name: "setting"
  }, {
    path: "/student",
    component: _e7b3b006,
    name: "student"
  }, {
    path: "/web-dui",
    component: _46d73cc1,
    name: "web-dui"
  }, {
    path: "/account/account",
    component: _5d1bf80a,
    name: "account-account"
  }, {
    path: "/account/deposite",
    component: _3563767d,
    name: "account-deposite"
  }, {
    path: "/account/expense",
    component: _73a29378,
    name: "account-expense"
  }, {
    path: "/account/fee-collect",
    component: _72a3bb80,
    name: "account-fee-collect"
  }, {
    path: "/account/fund",
    component: _2bf7a190,
    name: "account-fund"
  }, {
    path: "/account/fund-transfer",
    component: _c2cf4de0,
    name: "account-fund-transfer"
  }, {
    path: "/account/purpose",
    component: _c609ee84,
    name: "account-purpose"
  }, {
    path: "/account/statement",
    component: _10fac90c,
    name: "account-statement"
  }, {
    path: "/account/sub_fund",
    component: _651a04d7,
    name: "account-sub_fund"
  }, {
    path: "/account/test",
    component: _535aa285,
    name: "account-test"
  }, {
    path: "/admission/admissionInActiveBatch",
    component: _c3f53b80,
    name: "admission-admissionInActiveBatch"
  }, {
    path: "/admission/batch",
    component: _53c25594,
    name: "admission-batch"
  }, {
    path: "/admission/department",
    component: _6d91c92c,
    name: "admission-department"
  }, {
    path: "/admission/dept-wish-student",
    component: _0833e456,
    name: "admission-dept-wish-student"
  }, {
    path: "/admission/form-import",
    component: _e794c072,
    name: "admission-form-import"
  }, {
    path: "/admission/form-sale",
    component: _008845e9,
    name: "admission-form-sale"
  }, {
    path: "/admission/form-sale-list",
    component: _60f63eb2,
    name: "admission-form-sale-list"
  }, {
    path: "/admission/form-stock",
    component: _64bab164,
    name: "admission-form-stock"
  }, {
    path: "/admission/form-unsold-list",
    component: _d56e1568,
    name: "admission-form-unsold-list"
  }, {
    path: "/admission/search-student",
    component: _67eb88a6,
    name: "admission-search-student"
  }, {
    path: "/employee/department",
    component: _01e5cad6,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _09d4e4aa,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _1cbdc4f1,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _4d9ae331,
    name: "employee-office-time"
  }, {
    path: "/leave/application_denied_by_other",
    component: _67c6dc04,
    name: "leave-application_denied_by_other"
  }, {
    path: "/leave/application_form",
    component: _3b13c73c,
    name: "leave-application_form"
  }, {
    path: "/leave/approval_application",
    component: _35c40d86,
    name: "leave-approval_application"
  }, {
    path: "/leave/approved_application",
    component: _721691b1,
    name: "leave-approved_application"
  }, {
    path: "/leave/pending_application",
    component: _954ac062,
    name: "leave-pending_application"
  }, {
    path: "/leave/self_denied_application",
    component: _0994c4a6,
    name: "leave-self_denied_application"
  }, {
    path: "/leave/withdraw_application",
    component: _6eb13004,
    name: "leave-withdraw_application"
  }, {
    path: "/profile/qualification",
    component: _44608c0b,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _2d427ba7,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _28a325d8,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _6f5db380,
    name: "profile-update"
  }, {
    path: "/setting/assign-role",
    component: _e46096d8,
    name: "setting-assign-role"
  }, {
    path: "/setting/permission",
    component: _147e9e7f,
    name: "setting-permission"
  }, {
    path: "/setting/role",
    component: _07f680b4,
    name: "setting-role"
  }, {
    path: "/setting/special-permission",
    component: _03b54a13,
    name: "setting-special-permission"
  }, {
    path: "/student/attendance",
    component: _78d8cb51,
    name: "student-attendance"
  }, {
    path: "/student/course",
    component: _2f727efa,
    name: "student-course"
  }, {
    path: "/student/lecture-sheet",
    component: _27aff3be,
    name: "student-lecture-sheet"
  }, {
    path: "/student/lesson-plan",
    component: _d0870568,
    name: "student-lesson-plan"
  }, {
    path: "/student/question",
    component: _1dc2e964,
    name: "student-question"
  }, {
    path: "/student/search-student",
    component: _e3a52b0a,
    name: "student-search-student"
  }, {
    path: "/student/students",
    component: _7a5b1e80,
    name: "student-students"
  }, {
    path: "/student/syllabus",
    component: _407d2a8d,
    name: "student-syllabus"
  }, {
    path: "/student/update-image",
    component: _62dec97c,
    name: "student-update-image"
  }, {
    path: "/web-dui/blog",
    component: _4f2d3846,
    name: "web-dui-blog"
  }, {
    path: "/web-dui/committee",
    component: _6574bfef,
    name: "web-dui-committee"
  }, {
    path: "/web-dui/contact",
    component: _4168b162,
    name: "web-dui-contact"
  }, {
    path: "/web-dui/event",
    component: _06edc368,
    name: "web-dui-event"
  }, {
    path: "/web-dui/facilitie",
    component: _4d3ee338,
    name: "web-dui-facilitie"
  }, {
    path: "/web-dui/gallery",
    component: _5b009978,
    name: "web-dui-gallery"
  }, {
    path: "/web-dui/notice",
    component: _060eb5bc,
    name: "web-dui-notice"
  }, {
    path: "/web-dui/program",
    component: _32eef814,
    name: "web-dui-program"
  }, {
    path: "/web-dui/slider",
    component: _bb813ef6,
    name: "web-dui-slider"
  }, {
    path: "/web-dui/tution",
    component: _02fc6fb9,
    name: "web-dui-tution"
  }, {
    path: "/account/deposite/create",
    component: _c280b83e,
    name: "account-deposite-create"
  }, {
    path: "/account/expense/create",
    component: _28642646,
    name: "account-expense-create"
  }, {
    path: "/admission/admissionInActiveBatch/test",
    component: _07ec68d8,
    name: "admission-admissionInActiveBatch-test"
  }, {
    path: "/admission/batch/create",
    component: _15701c48,
    name: "admission-batch-create"
  }, {
    path: "/admission/department/create",
    component: _6c5ba712,
    name: "admission-department-create"
  }, {
    path: "/employee/department/create",
    component: _0a4a82c9,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _587bfb54,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _baa1b826,
    name: "employee-employee-create"
  }, {
    path: "/employee/employee/show",
    component: _130b90a4,
    name: "employee-employee-show"
  }, {
    path: "/profile/qualification/create",
    component: _6f654013,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _ba7d7812,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _9c58ffac,
    name: "profile-training-create"
  }, {
    path: "/student/attendance/report",
    component: _29127c76,
    name: "student-attendance-report"
  }, {
    path: "/student/course/assign",
    component: _33c9490e,
    name: "student-course-assign"
  }, {
    path: "/student/course/create",
    component: _48459a9b,
    name: "student-course-create"
  }, {
    path: "/student/lecture-sheet/create",
    component: _13fa6280,
    name: "student-lecture-sheet-create"
  }, {
    path: "/student/lesson-plan/create",
    component: _f0f1121c,
    name: "student-lesson-plan-create"
  }, {
    path: "/student/question/create",
    component: _5a672930,
    name: "student-question-create"
  }, {
    path: "/student/syllabus/create",
    component: _12471c5e,
    name: "student-syllabus-create"
  }, {
    path: "/web-dui/blog/create",
    component: _83a3c990,
    name: "web-dui-blog-create"
  }, {
    path: "/web-dui/committee/create",
    component: _70d788af,
    name: "web-dui-committee-create"
  }, {
    path: "/web-dui/event/create",
    component: _8762141c,
    name: "web-dui-event-create"
  }, {
    path: "/web-dui/facilitie/create",
    component: _7a6588da,
    name: "web-dui-facilitie-create"
  }, {
    path: "/web-dui/notice/create",
    component: _390766fc,
    name: "web-dui-notice-create"
  }, {
    path: "/web-dui/program/create",
    component: _123c4588,
    name: "web-dui-program-create"
  }, {
    path: "/web-dui/slider/create",
    component: _653e0a4e,
    name: "web-dui-slider-create"
  }, {
    path: "/web-dui/tution/create",
    component: _f7745bb6,
    name: "web-dui-tution-create"
  }, {
    path: "/account/purpose/update/:id?",
    component: _0d784238,
    name: "account-purpose-update-id"
  }, {
    path: "/admission/admissionInActiveBatch/create/:id?",
    component: _3a19e1ae,
    name: "admission-admissionInActiveBatch-create-id"
  }, {
    path: "/admission/batch/BatchWiseStudent/:id?",
    component: _2b9a5874,
    name: "admission-batch-BatchWiseStudent-id"
  }, {
    path: "/admission/batch/update/:id?",
    component: _08ccfe80,
    name: "admission-batch-update-id"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _0788056d,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _3d122de5,
    name: "employee-employee-update-id"
  }, {
    path: "/student/attendance/create/:id?",
    component: _1ddba8b8,
    name: "student-attendance-create-id"
  }, {
    path: "/student/course/update/:id?",
    component: _9fdcc4da,
    name: "student-course-update-id"
  }, {
    path: "/student/lecture-sheet/update/:id",
    component: _161e3738,
    name: "student-lecture-sheet-update-id"
  }, {
    path: "/student/lesson-plan/update/:id",
    component: _f061132c,
    name: "student-lesson-plan-update-id"
  }, {
    path: "/student/question/update/:id?",
    component: _ba204cb0,
    name: "student-question-update-id"
  }, {
    path: "/student/syllabus/update/:id?",
    component: _07442c6e,
    name: "student-syllabus-update-id"
  }, {
    path: "/web-dui/committee/update/:id",
    component: _431661a7,
    name: "web-dui-committee-update-id"
  }, {
    path: "/admission/print-receive/:id?",
    component: _324817a7,
    name: "admission-print-receive-id"
  }, {
    path: "/admission/student-update/:id?",
    component: _f9e9a946,
    name: "admission-student-update-id"
  }, {
    path: "/password-reset-confirm/:token?",
    component: _87366050,
    name: "password-reset-confirm-token"
  }, {
    path: "/",
    component: _443b85d1,
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
