import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _56cb27ef = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _674ff50b = () => interopDefault(import('../pages/admission/index.vue' /* webpackChunkName: "pages/admission/index" */))
const _43aa23e0 = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _65d6e3d7 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _e9e1437c = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _0a6fd5b9 = () => interopDefault(import('../pages/leave/index.vue' /* webpackChunkName: "pages/leave/index" */))
const _c7990ca4 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _d24c072a = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _69061c52 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _9bbc3306 = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _6cd2fb41 = () => interopDefault(import('../pages/web-dui/index.vue' /* webpackChunkName: "pages/web-dui/index" */))
const _19bbd2ec = () => interopDefault(import('../pages/account/account.vue' /* webpackChunkName: "pages/account/account" */))
const _407607fd = () => interopDefault(import('../pages/account/deposite/index.vue' /* webpackChunkName: "pages/account/deposite/index" */))
const _5b37d1f8 = () => interopDefault(import('../pages/account/expense/index.vue' /* webpackChunkName: "pages/account/expense/index" */))
const _d0fdfe80 = () => interopDefault(import('../pages/account/fee-collect.vue' /* webpackChunkName: "pages/account/fee-collect" */))
const _4e56a0b8 = () => interopDefault(import('../pages/account/fund.vue' /* webpackChunkName: "pages/account/fund" */))
const _f3a4d0e0 = () => interopDefault(import('../pages/account/fund-transfer.vue' /* webpackChunkName: "pages/account/fund-transfer" */))
const _f6df7184 = () => interopDefault(import('../pages/account/purpose/index.vue' /* webpackChunkName: "pages/account/purpose/index" */))
const _3df3478c = () => interopDefault(import('../pages/account/statement.vue' /* webpackChunkName: "pages/account/statement" */))
const _e0509352 = () => interopDefault(import('../pages/account/sub_fund.vue' /* webpackChunkName: "pages/account/sub_fund" */))
const _90a5d7f6 = () => interopDefault(import('../pages/account/test.vue' /* webpackChunkName: "pages/account/test" */))
const _5e761880 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/index.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/index" */))
const _8497d894 = () => interopDefault(import('../pages/admission/batch/index.vue' /* webpackChunkName: "pages/admission/batch/index" */))
const _bc00caa8 = () => interopDefault(import('../pages/admission/department/index.vue' /* webpackChunkName: "pages/admission/department/index" */))
const _618042d6 = () => interopDefault(import('../pages/admission/dept-wish-student.vue' /* webpackChunkName: "pages/admission/dept-wish-student" */))
const _73cade47 = () => interopDefault(import('../pages/admission/form-import.vue' /* webpackChunkName: "pages/admission/form-import" */))
const _5d49b72e = () => interopDefault(import('../pages/admission/form-sale.vue' /* webpackChunkName: "pages/admission/form-sale" */))
const _1cab1f9c = () => interopDefault(import('../pages/admission/form-sale-list.vue' /* webpackChunkName: "pages/admission/form-sale-list" */))
const _a378ba38 = () => interopDefault(import('../pages/admission/form-stock.vue' /* webpackChunkName: "pages/admission/form-stock" */))
const _6c927268 = () => interopDefault(import('../pages/admission/form-unsold-list.vue' /* webpackChunkName: "pages/admission/form-unsold-list" */))
const _5cbe6d2d = () => interopDefault(import('../pages/admission/search-student.vue' /* webpackChunkName: "pages/admission/search-student" */))
const _f641cdd6 = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _3e42b62a = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _73fd6371 = () => interopDefault(import('../pages/employee/employee/index.vue' /* webpackChunkName: "pages/employee/employee/index" */))
const _fbee969e = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _d61b4af8 = () => interopDefault(import('../pages/leave/application_denied_by_other.vue' /* webpackChunkName: "pages/leave/application_denied_by_other" */))
const _462658bc = () => interopDefault(import('../pages/leave/application_form.vue' /* webpackChunkName: "pages/leave/application_form" */))
const _198bcabd = () => interopDefault(import('../pages/leave/approval_application.vue' /* webpackChunkName: "pages/leave/approval_application" */))
const _b2f7399e = () => interopDefault(import('../pages/leave/approved_application.vue' /* webpackChunkName: "pages/leave/approved_application" */))
const _3b2c9e4f = () => interopDefault(import('../pages/leave/pending_application.vue' /* webpackChunkName: "pages/leave/pending_application" */))
const _41438326 = () => interopDefault(import('../pages/leave/self_denied_application.vue' /* webpackChunkName: "pages/leave/self_denied_application" */))
const _b9c1fcf8 = () => interopDefault(import('../pages/leave/withdraw_application.vue' /* webpackChunkName: "pages/leave/withdraw_application" */))
const _c4a62aea = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _76cb6d27 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _127e02d8 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _08d9c500 = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _5ea29314 = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _f2d42002 = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _60573126 = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _38231b93 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _098cfcd1 = () => interopDefault(import('../pages/student/attendance/index.vue' /* webpackChunkName: "pages/student/attendance/index" */))
const _31cfb203 = () => interopDefault(import('../pages/student/course/index.vue' /* webpackChunkName: "pages/student/course/index" */))
const _fe075b84 = () => interopDefault(import('../pages/student/lecture-sheet/index.vue' /* webpackChunkName: "pages/student/lecture-sheet/index" */))
const _1d8e7bcc = () => interopDefault(import('../pages/student/lesson-plan/index.vue' /* webpackChunkName: "pages/student/lesson-plan/index" */))
const _079dc664 = () => interopDefault(import('../pages/student/question/index.vue' /* webpackChunkName: "pages/student/question/index" */))
const _cd80080a = () => interopDefault(import('../pages/student/search-student.vue' /* webpackChunkName: "pages/student/search-student" */))
const _f524a000 = () => interopDefault(import('../pages/student/students/index.vue' /* webpackChunkName: "pages/student/students/index" */))
const _4b8fbc0d = () => interopDefault(import('../pages/student/syllabus/index.vue' /* webpackChunkName: "pages/student/syllabus/index" */))
const _a7308a08 = () => interopDefault(import('../pages/student/update-image.vue' /* webpackChunkName: "pages/student/update-image" */))
const _7d76ec74 = () => interopDefault(import('../pages/web-dui/blog/index.vue' /* webpackChunkName: "pages/web-dui/blog/index" */))
const _86974322 = () => interopDefault(import('../pages/web-dui/committee/index.vue' /* webpackChunkName: "pages/web-dui/committee/index" */))
const _7551c5cf = () => interopDefault(import('../pages/web-dui/contact.vue' /* webpackChunkName: "pages/web-dui/contact" */))
const _65480668 = () => interopDefault(import('../pages/web-dui/event/index.vue' /* webpackChunkName: "pages/web-dui/event/index" */))
const _30a02ce4 = () => interopDefault(import('../pages/web-dui/facilitie/index.vue' /* webpackChunkName: "pages/web-dui/facilitie/index" */))
const _8bd61c78 = () => interopDefault(import('../pages/web-dui/gallery/index.vue' /* webpackChunkName: "pages/web-dui/gallery/index" */))
const _4f97a73c = () => interopDefault(import('../pages/web-dui/notice/index.vue' /* webpackChunkName: "pages/web-dui/notice/index" */))
const _63c47b14 = () => interopDefault(import('../pages/web-dui/program/index.vue' /* webpackChunkName: "pages/web-dui/program/index" */))
const _286f5bf6 = () => interopDefault(import('../pages/web-dui/slider/index.vue' /* webpackChunkName: "pages/web-dui/slider/index" */))
const _4c856139 = () => interopDefault(import('../pages/web-dui/tution/index.vue' /* webpackChunkName: "pages/web-dui/tution/index" */))
const _14017b3e = () => interopDefault(import('../pages/account/deposite/create.vue' /* webpackChunkName: "pages/account/deposite/create" */))
const _3376b7c6 = () => interopDefault(import('../pages/account/expense/create.vue' /* webpackChunkName: "pages/account/expense/create" */))
const _db5bebd8 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/test.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/test" */))
const _2082adc8 = () => interopDefault(import('../pages/admission/batch/create.vue' /* webpackChunkName: "pages/admission/batch/create" */))
const _74aff4dc = () => interopDefault(import('../pages/admission/department/create.vue' /* webpackChunkName: "pages/admission/department/create" */))
const _3eb85449 = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _9c6f4c58 = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _3363556d = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _018cc92e = () => interopDefault(import('../pages/employee/employee/show.vue' /* webpackChunkName: "pages/employee/employee/show" */))
const _3fa4b193 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _eb52fb12 = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _09131eaa = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _7148c045 = () => interopDefault(import('../pages/student/attendance/report.vue' /* webpackChunkName: "pages/student/attendance/report" */))
const _1b5e878e = () => interopDefault(import('../pages/student/course/assign.vue' /* webpackChunkName: "pages/student/course/assign" */))
const _2fdad91b = () => interopDefault(import('../pages/student/course/create.vue' /* webpackChunkName: "pages/student/course/create" */))
const _737b7f80 = () => interopDefault(import('../pages/student/lecture-sheet/create.vue' /* webpackChunkName: "pages/student/lecture-sheet/create" */))
const _88156f1c = () => interopDefault(import('../pages/student/lesson-plan/create.vue' /* webpackChunkName: "pages/student/lesson-plan/create" */))
const _9cb270a0 = () => interopDefault(import('../pages/student/question/create.vue' /* webpackChunkName: "pages/student/question/create" */))
const _4e1c1051 = () => interopDefault(import('../pages/student/syllabus/create.vue' /* webpackChunkName: "pages/student/syllabus/create" */))
const _e1fe0c90 = () => interopDefault(import('../pages/web-dui/blog/create.vue' /* webpackChunkName: "pages/web-dui/blog/create" */))
const _018bba2f = () => interopDefault(import('../pages/web-dui/committee/create.vue' /* webpackChunkName: "pages/web-dui/committee/create" */))
const _05d7e772 = () => interopDefault(import('../pages/web-dui/event/create.vue' /* webpackChunkName: "pages/web-dui/event/create" */))
const _0b19ba5a = () => interopDefault(import('../pages/web-dui/facilitie/create.vue' /* webpackChunkName: "pages/web-dui/facilitie/create" */))
const _69dce9fc = () => interopDefault(import('../pages/web-dui/notice/create.vue' /* webpackChunkName: "pages/web-dui/notice/create" */))
const _1d4ed708 = () => interopDefault(import('../pages/web-dui/program/create.vue' /* webpackChunkName: "pages/web-dui/program/create" */))
const _96138d4e = () => interopDefault(import('../pages/web-dui/slider/create.vue' /* webpackChunkName: "pages/web-dui/slider/create" */))
const _6bdb10a5 = () => interopDefault(import('../pages/web-dui/tution/create.vue' /* webpackChunkName: "pages/web-dui/tution/create" */))
const _41e613b8 = () => interopDefault(import('../pages/account/purpose/update/_id.vue' /* webpackChunkName: "pages/account/purpose/update/_id" */))
const _4e9b24ae = () => interopDefault(import('../pages/admission/admissionInActiveBatch/create/_id.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/create/_id" */))
const _b7df6c18 = () => interopDefault(import('../pages/admission/batch/BatchWiseStudent/_id.vue' /* webpackChunkName: "pages/admission/batch/BatchWiseStudent/_id" */))
const _30075240 = () => interopDefault(import('../pages/admission/batch/update/_id.vue' /* webpackChunkName: "pages/admission/batch/update/_id" */))
const _50711226 = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _0d519f65 = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _558a6738 = () => interopDefault(import('../pages/student/attendance/create/_id.vue' /* webpackChunkName: "pages/student/attendance/create/_id" */))
const _35e39c13 = () => interopDefault(import('../pages/student/course/update/_id.vue' /* webpackChunkName: "pages/student/course/update/_id" */))
const _236e2e90 = () => interopDefault(import('../pages/student/lecture-sheet/update/_id.vue' /* webpackChunkName: "pages/student/lecture-sheet/update/_id" */))
const _45f887ea = () => interopDefault(import('../pages/student/lesson-plan/update/_id.vue' /* webpackChunkName: "pages/student/lesson-plan/update/_id" */))
const _07878fb0 = () => interopDefault(import('../pages/student/question/update/_id.vue' /* webpackChunkName: "pages/student/question/update/_id" */))
const _55aa4849 = () => interopDefault(import('../pages/student/syllabus/update/_id.vue' /* webpackChunkName: "pages/student/syllabus/update/_id" */))
const _1355d327 = () => interopDefault(import('../pages/web-dui/committee/update/_id.vue' /* webpackChunkName: "pages/web-dui/committee/update/_id" */))
const _e8d713b2 = () => interopDefault(import('../pages/admission/print-receive/_id.vue' /* webpackChunkName: "pages/admission/print-receive/_id" */))
const _534a9cdd = () => interopDefault(import('../pages/admission/student-update/_id.vue' /* webpackChunkName: "pages/admission/student-update/_id" */))
const _17d8e350 = () => interopDefault(import('../pages/password-reset-confirm/_token.vue' /* webpackChunkName: "pages/password-reset-confirm/_token" */))
const _91c4775e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _56cb27ef,
    name: "account"
  }, {
    path: "/admission",
    component: _674ff50b,
    name: "admission"
  }, {
    path: "/app",
    component: _43aa23e0,
    name: "app"
  }, {
    path: "/change-password",
    component: _65d6e3d7,
    name: "change-password"
  }, {
    path: "/employee",
    component: _e9e1437c,
    name: "employee"
  }, {
    path: "/leave",
    component: _0a6fd5b9,
    name: "leave"
  }, {
    path: "/password-reset",
    component: _c7990ca4,
    name: "password-reset"
  }, {
    path: "/profile",
    component: _d24c072a,
    name: "profile"
  }, {
    path: "/setting",
    component: _69061c52,
    name: "setting"
  }, {
    path: "/student",
    component: _9bbc3306,
    name: "student"
  }, {
    path: "/web-dui",
    component: _6cd2fb41,
    name: "web-dui"
  }, {
    path: "/account/account",
    component: _19bbd2ec,
    name: "account-account"
  }, {
    path: "/account/deposite",
    component: _407607fd,
    name: "account-deposite"
  }, {
    path: "/account/expense",
    component: _5b37d1f8,
    name: "account-expense"
  }, {
    path: "/account/fee-collect",
    component: _d0fdfe80,
    name: "account-fee-collect"
  }, {
    path: "/account/fund",
    component: _4e56a0b8,
    name: "account-fund"
  }, {
    path: "/account/fund-transfer",
    component: _f3a4d0e0,
    name: "account-fund-transfer"
  }, {
    path: "/account/purpose",
    component: _f6df7184,
    name: "account-purpose"
  }, {
    path: "/account/statement",
    component: _3df3478c,
    name: "account-statement"
  }, {
    path: "/account/sub_fund",
    component: _e0509352,
    name: "account-sub_fund"
  }, {
    path: "/account/test",
    component: _90a5d7f6,
    name: "account-test"
  }, {
    path: "/admission/admissionInActiveBatch",
    component: _5e761880,
    name: "admission-admissionInActiveBatch"
  }, {
    path: "/admission/batch",
    component: _8497d894,
    name: "admission-batch"
  }, {
    path: "/admission/department",
    component: _bc00caa8,
    name: "admission-department"
  }, {
    path: "/admission/dept-wish-student",
    component: _618042d6,
    name: "admission-dept-wish-student"
  }, {
    path: "/admission/form-import",
    component: _73cade47,
    name: "admission-form-import"
  }, {
    path: "/admission/form-sale",
    component: _5d49b72e,
    name: "admission-form-sale"
  }, {
    path: "/admission/form-sale-list",
    component: _1cab1f9c,
    name: "admission-form-sale-list"
  }, {
    path: "/admission/form-stock",
    component: _a378ba38,
    name: "admission-form-stock"
  }, {
    path: "/admission/form-unsold-list",
    component: _6c927268,
    name: "admission-form-unsold-list"
  }, {
    path: "/admission/search-student",
    component: _5cbe6d2d,
    name: "admission-search-student"
  }, {
    path: "/employee/department",
    component: _f641cdd6,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _3e42b62a,
    name: "employee-designation"
  }, {
    path: "/employee/employee",
    component: _73fd6371,
    name: "employee-employee"
  }, {
    path: "/employee/office-time",
    component: _fbee969e,
    name: "employee-office-time"
  }, {
    path: "/leave/application_denied_by_other",
    component: _d61b4af8,
    name: "leave-application_denied_by_other"
  }, {
    path: "/leave/application_form",
    component: _462658bc,
    name: "leave-application_form"
  }, {
    path: "/leave/approval_application",
    component: _198bcabd,
    name: "leave-approval_application"
  }, {
    path: "/leave/approved_application",
    component: _b2f7399e,
    name: "leave-approved_application"
  }, {
    path: "/leave/pending_application",
    component: _3b2c9e4f,
    name: "leave-pending_application"
  }, {
    path: "/leave/self_denied_application",
    component: _41438326,
    name: "leave-self_denied_application"
  }, {
    path: "/leave/withdraw_application",
    component: _b9c1fcf8,
    name: "leave-withdraw_application"
  }, {
    path: "/profile/qualification",
    component: _c4a62aea,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _76cb6d27,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _127e02d8,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _08d9c500,
    name: "profile-update"
  }, {
    path: "/setting/assign-role",
    component: _5ea29314,
    name: "setting-assign-role"
  }, {
    path: "/setting/permission",
    component: _f2d42002,
    name: "setting-permission"
  }, {
    path: "/setting/role",
    component: _60573126,
    name: "setting-role"
  }, {
    path: "/setting/special-permission",
    component: _38231b93,
    name: "setting-special-permission"
  }, {
    path: "/student/attendance",
    component: _098cfcd1,
    name: "student-attendance"
  }, {
    path: "/student/course",
    component: _31cfb203,
    name: "student-course"
  }, {
    path: "/student/lecture-sheet",
    component: _fe075b84,
    name: "student-lecture-sheet"
  }, {
    path: "/student/lesson-plan",
    component: _1d8e7bcc,
    name: "student-lesson-plan"
  }, {
    path: "/student/question",
    component: _079dc664,
    name: "student-question"
  }, {
    path: "/student/search-student",
    component: _cd80080a,
    name: "student-search-student"
  }, {
    path: "/student/students",
    component: _f524a000,
    name: "student-students"
  }, {
    path: "/student/syllabus",
    component: _4b8fbc0d,
    name: "student-syllabus"
  }, {
    path: "/student/update-image",
    component: _a7308a08,
    name: "student-update-image"
  }, {
    path: "/web-dui/blog",
    component: _7d76ec74,
    name: "web-dui-blog"
  }, {
    path: "/web-dui/committee",
    component: _86974322,
    name: "web-dui-committee"
  }, {
    path: "/web-dui/contact",
    component: _7551c5cf,
    name: "web-dui-contact"
  }, {
    path: "/web-dui/event",
    component: _65480668,
    name: "web-dui-event"
  }, {
    path: "/web-dui/facilitie",
    component: _30a02ce4,
    name: "web-dui-facilitie"
  }, {
    path: "/web-dui/gallery",
    component: _8bd61c78,
    name: "web-dui-gallery"
  }, {
    path: "/web-dui/notice",
    component: _4f97a73c,
    name: "web-dui-notice"
  }, {
    path: "/web-dui/program",
    component: _63c47b14,
    name: "web-dui-program"
  }, {
    path: "/web-dui/slider",
    component: _286f5bf6,
    name: "web-dui-slider"
  }, {
    path: "/web-dui/tution",
    component: _4c856139,
    name: "web-dui-tution"
  }, {
    path: "/account/deposite/create",
    component: _14017b3e,
    name: "account-deposite-create"
  }, {
    path: "/account/expense/create",
    component: _3376b7c6,
    name: "account-expense-create"
  }, {
    path: "/admission/admissionInActiveBatch/test",
    component: _db5bebd8,
    name: "admission-admissionInActiveBatch-test"
  }, {
    path: "/admission/batch/create",
    component: _2082adc8,
    name: "admission-batch-create"
  }, {
    path: "/admission/department/create",
    component: _74aff4dc,
    name: "admission-department-create"
  }, {
    path: "/employee/department/create",
    component: _3eb85449,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _9c6f4c58,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _3363556d,
    name: "employee-employee-create"
  }, {
    path: "/employee/employee/show",
    component: _018cc92e,
    name: "employee-employee-show"
  }, {
    path: "/profile/qualification/create",
    component: _3fa4b193,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _eb52fb12,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _09131eaa,
    name: "profile-training-create"
  }, {
    path: "/student/attendance/report",
    component: _7148c045,
    name: "student-attendance-report"
  }, {
    path: "/student/course/assign",
    component: _1b5e878e,
    name: "student-course-assign"
  }, {
    path: "/student/course/create",
    component: _2fdad91b,
    name: "student-course-create"
  }, {
    path: "/student/lecture-sheet/create",
    component: _737b7f80,
    name: "student-lecture-sheet-create"
  }, {
    path: "/student/lesson-plan/create",
    component: _88156f1c,
    name: "student-lesson-plan-create"
  }, {
    path: "/student/question/create",
    component: _9cb270a0,
    name: "student-question-create"
  }, {
    path: "/student/syllabus/create",
    component: _4e1c1051,
    name: "student-syllabus-create"
  }, {
    path: "/web-dui/blog/create",
    component: _e1fe0c90,
    name: "web-dui-blog-create"
  }, {
    path: "/web-dui/committee/create",
    component: _018bba2f,
    name: "web-dui-committee-create"
  }, {
    path: "/web-dui/event/create",
    component: _05d7e772,
    name: "web-dui-event-create"
  }, {
    path: "/web-dui/facilitie/create",
    component: _0b19ba5a,
    name: "web-dui-facilitie-create"
  }, {
    path: "/web-dui/notice/create",
    component: _69dce9fc,
    name: "web-dui-notice-create"
  }, {
    path: "/web-dui/program/create",
    component: _1d4ed708,
    name: "web-dui-program-create"
  }, {
    path: "/web-dui/slider/create",
    component: _96138d4e,
    name: "web-dui-slider-create"
  }, {
    path: "/web-dui/tution/create",
    component: _6bdb10a5,
    name: "web-dui-tution-create"
  }, {
    path: "/account/purpose/update/:id?",
    component: _41e613b8,
    name: "account-purpose-update-id"
  }, {
    path: "/admission/admissionInActiveBatch/create/:id?",
    component: _4e9b24ae,
    name: "admission-admissionInActiveBatch-create-id"
  }, {
    path: "/admission/batch/BatchWiseStudent/:id?",
    component: _b7df6c18,
    name: "admission-batch-BatchWiseStudent-id"
  }, {
    path: "/admission/batch/update/:id?",
    component: _30075240,
    name: "admission-batch-update-id"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _50711226,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _0d519f65,
    name: "employee-employee-update-id"
  }, {
    path: "/student/attendance/create/:id?",
    component: _558a6738,
    name: "student-attendance-create-id"
  }, {
    path: "/student/course/update/:id?",
    component: _35e39c13,
    name: "student-course-update-id"
  }, {
    path: "/student/lecture-sheet/update/:id",
    component: _236e2e90,
    name: "student-lecture-sheet-update-id"
  }, {
    path: "/student/lesson-plan/update/:id",
    component: _45f887ea,
    name: "student-lesson-plan-update-id"
  }, {
    path: "/student/question/update/:id?",
    component: _07878fb0,
    name: "student-question-update-id"
  }, {
    path: "/student/syllabus/update/:id?",
    component: _55aa4849,
    name: "student-syllabus-update-id"
  }, {
    path: "/web-dui/committee/update/:id",
    component: _1355d327,
    name: "web-dui-committee-update-id"
  }, {
    path: "/admission/print-receive/:id?",
    component: _e8d713b2,
    name: "admission-print-receive-id"
  }, {
    path: "/admission/student-update/:id?",
    component: _534a9cdd,
    name: "admission-student-update-id"
  }, {
    path: "/password-reset-confirm/:token?",
    component: _17d8e350,
    name: "password-reset-confirm-token"
  }, {
    path: "/",
    component: _91c4775e,
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
