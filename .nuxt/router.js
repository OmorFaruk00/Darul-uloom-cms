import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bff9b9cc = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _4275d176 = () => interopDefault(import('../pages/admission/index.vue' /* webpackChunkName: "pages/admission/index" */))
const _78bf08cb = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _40fcc042 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _68d6c877 = () => interopDefault(import('../pages/employee/index.vue' /* webpackChunkName: "pages/employee/index" */))
const _0d9ac0b8 = () => interopDefault(import('../pages/leave/index.vue' /* webpackChunkName: "pages/leave/index" */))
const _79fae3e3 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _3fdc10d4 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _9b83d106 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "pages/setting/index" */))
const _094c3cb0 = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _93ea1328 = () => interopDefault(import('../pages/web-dui/index.vue' /* webpackChunkName: "pages/web-dui/index" */))
const _63701a16 = () => interopDefault(import('../pages/account/account.vue' /* webpackChunkName: "pages/account/account" */))
const _64175422 = () => interopDefault(import('../pages/account/deposite.vue' /* webpackChunkName: "pages/account/deposite" */))
const _39f823a0 = () => interopDefault(import('../pages/account/expense.vue' /* webpackChunkName: "pages/account/expense" */))
const _7a3cafab = () => interopDefault(import('../pages/account/fee-collect.vue' /* webpackChunkName: "pages/account/fee-collect" */))
const _37ed142d = () => interopDefault(import('../pages/account/fund.vue' /* webpackChunkName: "pages/account/fund" */))
const _ae8d908a = () => interopDefault(import('../pages/account/fund-transfer.vue' /* webpackChunkName: "pages/account/fund-transfer" */))
const _b1c8312e = () => interopDefault(import('../pages/account/purpose/index.vue' /* webpackChunkName: "pages/account/purpose/index" */))
const _31d89592 = () => interopDefault(import('../pages/account/statement.vue' /* webpackChunkName: "pages/account/statement" */))
const _196d674c = () => interopDefault(import('../pages/account/sub_fund.vue' /* webpackChunkName: "pages/account/sub_fund" */))
const _bd78f10c = () => interopDefault(import('../pages/account/test.vue' /* webpackChunkName: "pages/account/test" */))
const _31236216 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/index.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/index" */))
const _3f80983e = () => interopDefault(import('../pages/admission/batch/index.vue' /* webpackChunkName: "pages/admission/batch/index" */))
const _a1cf453e = () => interopDefault(import('../pages/admission/department/index.vue' /* webpackChunkName: "pages/admission/department/index" */))
const _1100527e = () => interopDefault(import('../pages/admission/dept-wish-student.vue' /* webpackChunkName: "pages/admission/dept-wish-student" */))
const _d353031c = () => interopDefault(import('../pages/admission/form-import.vue' /* webpackChunkName: "pages/admission/form-import" */))
const _97d25958 = () => interopDefault(import('../pages/admission/form-sale.vue' /* webpackChunkName: "pages/admission/form-sale" */))
const _22fdd159 = () => interopDefault(import('../pages/admission/form-stock.vue' /* webpackChunkName: "pages/admission/form-stock" */))
const _73225922 = () => interopDefault(import('../pages/admission/search-student.vue' /* webpackChunkName: "pages/admission/search-student" */))
const _3af8abc0 = () => interopDefault(import('../pages/employee/department/index.vue' /* webpackChunkName: "pages/employee/department/index" */))
const _4b5b78df = () => interopDefault(import('../pages/employee/designation/index.vue' /* webpackChunkName: "pages/employee/designation/index" */))
const _e1bd1134 = () => interopDefault(import('../pages/employee/office-time/index.vue' /* webpackChunkName: "pages/employee/office-time/index" */))
const _3310122f = () => interopDefault(import('../pages/leave/application_denied_by_other.vue' /* webpackChunkName: "pages/leave/application_denied_by_other" */))
const _750ebdf1 = () => interopDefault(import('../pages/leave/application_form.vue' /* webpackChunkName: "pages/leave/application_form" */))
const _26a48d72 = () => interopDefault(import('../pages/leave/approval_application.vue' /* webpackChunkName: "pages/leave/approval_application" */))
const _98c5b434 = () => interopDefault(import('../pages/leave/approved_application.vue' /* webpackChunkName: "pages/leave/approved_application" */))
const _1d739e0c = () => interopDefault(import('../pages/leave/pending_application.vue' /* webpackChunkName: "pages/leave/pending_application" */))
const _55adc851 = () => interopDefault(import('../pages/leave/self_denied_application.vue' /* webpackChunkName: "pages/leave/self_denied_application" */))
const _9f90778e = () => interopDefault(import('../pages/leave/withdraw_application.vue' /* webpackChunkName: "pages/leave/withdraw_application" */))
const _33ac7e76 = () => interopDefault(import('../pages/profile/qualification/index.vue' /* webpackChunkName: "pages/profile/qualification/index" */))
const _28f4c8c8 = () => interopDefault(import('../pages/profile/social/index.vue' /* webpackChunkName: "pages/profile/social/index" */))
const _25a963c9 = () => interopDefault(import('../pages/profile/training/index.vue' /* webpackChunkName: "pages/profile/training/index" */))
const _32bda196 = () => interopDefault(import('../pages/profile/update.vue' /* webpackChunkName: "pages/profile/update" */))
const _415e41ff = () => interopDefault(import('../pages/setting/assign-role.vue' /* webpackChunkName: "pages/setting/assign-role" */))
const _018337b4 = () => interopDefault(import('../pages/setting/permission.vue' /* webpackChunkName: "pages/setting/permission" */))
const _49eda49b = () => interopDefault(import('../pages/setting/role.vue' /* webpackChunkName: "pages/setting/role" */))
const _453bde48 = () => interopDefault(import('../pages/setting/special-permission.vue' /* webpackChunkName: "pages/setting/special-permission" */))
const _1ff0e8c6 = () => interopDefault(import('../pages/student/attendance/index.vue' /* webpackChunkName: "pages/student/attendance/index" */))
const _b2ec3f10 = () => interopDefault(import('../pages/student/course/index.vue' /* webpackChunkName: "pages/student/course/index" */))
const _16fbe629 = () => interopDefault(import('../pages/student/lecture-sheet/index.vue' /* webpackChunkName: "pages/student/lecture-sheet/index" */))
const _58afe312 = () => interopDefault(import('../pages/student/lesson-plan/index.vue' /* webpackChunkName: "pages/student/lesson-plan/index" */))
const _2b198203 = () => interopDefault(import('../pages/student/question/index.vue' /* webpackChunkName: "pages/student/question/index" */))
const _6faf3da0 = () => interopDefault(import('../pages/student/search-student.vue' /* webpackChunkName: "pages/student/search-student" */))
const _9753d596 = () => interopDefault(import('../pages/student/students/index.vue' /* webpackChunkName: "pages/student/students/index" */))
const _7a782142 = () => interopDefault(import('../pages/student/syllabus/index.vue' /* webpackChunkName: "pages/student/syllabus/index" */))
const _3c31d17b = () => interopDefault(import('../pages/web-dui/blog/index.vue' /* webpackChunkName: "pages/web-dui/blog/index" */))
const _6ad89fda = () => interopDefault(import('../pages/web-dui/committee/index.vue' /* webpackChunkName: "pages/web-dui/committee/index" */))
const _5077a23a = () => interopDefault(import('../pages/web-dui/contact.vue' /* webpackChunkName: "pages/web-dui/contact" */))
const _9fd0a892 = () => interopDefault(import('../pages/web-dui/event/index.vue' /* webpackChunkName: "pages/web-dui/event/index" */))
const _42772362 = () => interopDefault(import('../pages/web-dui/facilitie/index.vue' /* webpackChunkName: "pages/web-dui/facilitie/index" */))
const _46bedc22 = () => interopDefault(import('../pages/web-dui/gallery/index.vue' /* webpackChunkName: "pages/web-dui/gallery/index" */))
const _775c549e = () => interopDefault(import('../pages/web-dui/notice/index.vue' /* webpackChunkName: "pages/web-dui/notice/index" */))
const _1ead3abe = () => interopDefault(import('../pages/web-dui/program/index.vue' /* webpackChunkName: "pages/web-dui/program/index" */))
const _6082807a = () => interopDefault(import('../pages/web-dui/slider/index.vue' /* webpackChunkName: "pages/web-dui/slider/index" */))
const _7d80e0a4 = () => interopDefault(import('../pages/web-dui/tution/index.vue' /* webpackChunkName: "pages/web-dui/tution/index" */))
const _13b41782 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/test.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/test" */))
const _4f6b12fd = () => interopDefault(import('../pages/admission/batch/create.vue' /* webpackChunkName: "pages/admission/batch/create" */))
const _5ba7997d = () => interopDefault(import('../pages/admission/department/create.vue' /* webpackChunkName: "pages/admission/department/create" */))
const _4bd116fe = () => interopDefault(import('../pages/employee/department/create.vue' /* webpackChunkName: "pages/employee/department/create" */))
const _47c7edbf = () => interopDefault(import('../pages/employee/designation/create.vue' /* webpackChunkName: "pages/employee/designation/create" */))
const _49c74162 = () => interopDefault(import('../pages/employee/employee/create.vue' /* webpackChunkName: "pages/employee/employee/create" */))
const _30752e63 = () => interopDefault(import('../pages/employee/employee/show.vue' /* webpackChunkName: "pages/employee/employee/show" */))
const _004cc578 = () => interopDefault(import('../pages/employee/employee/test.vue' /* webpackChunkName: "pages/employee/employee/test" */))
const _69979b08 = () => interopDefault(import('../pages/profile/qualification/create.vue' /* webpackChunkName: "pages/profile/qualification/create" */))
const _a63bbabc = () => interopDefault(import('../pages/profile/social/create.vue' /* webpackChunkName: "pages/profile/social/create" */))
const _91913fd6 = () => interopDefault(import('../pages/profile/training/create.vue' /* webpackChunkName: "pages/profile/training/create" */))
const _276252f0 = () => interopDefault(import('../pages/student/attendance/report.vue' /* webpackChunkName: "pages/student/attendance/report" */))
const _3dea27b9 = () => interopDefault(import('../pages/student/course/assign.vue' /* webpackChunkName: "pages/student/course/assign" */))
const _52667946 = () => interopDefault(import('../pages/student/course/create.vue' /* webpackChunkName: "pages/student/course/create" */))
const _1f95ac96 = () => interopDefault(import('../pages/student/lecture-sheet/create.vue' /* webpackChunkName: "pages/student/lecture-sheet/create" */))
const _6de3e9b2 = () => interopDefault(import('../pages/student/lesson-plan/create.vue' /* webpackChunkName: "pages/student/lesson-plan/create" */))
const _5fcb091b = () => interopDefault(import('../pages/student/question/create.vue' /* webpackChunkName: "pages/student/question/create" */))
const _077f5c88 = () => interopDefault(import('../pages/student/syllabus/create.vue' /* webpackChunkName: "pages/student/syllabus/create" */))
const _71bca8a3 = () => interopDefault(import('../pages/web-dui/blog/create.vue' /* webpackChunkName: "pages/web-dui/blog/create" */))
const _17efa624 = () => interopDefault(import('../pages/web-dui/committee/create.vue' /* webpackChunkName: "pages/web-dui/committee/create" */))
const _7a9215e7 = () => interopDefault(import('../pages/web-dui/event/create.vue' /* webpackChunkName: "pages/web-dui/event/create" */))
const _217da64f = () => interopDefault(import('../pages/web-dui/facilitie/create.vue' /* webpackChunkName: "pages/web-dui/facilitie/create" */))
const _24c5a9a6 = () => interopDefault(import('../pages/web-dui/notice/create.vue' /* webpackChunkName: "pages/web-dui/notice/create" */))
const _4c373c3d = () => interopDefault(import('../pages/web-dui/program/create.vue' /* webpackChunkName: "pages/web-dui/program/create" */))
const _50fc4cf8 = () => interopDefault(import('../pages/web-dui/slider/create.vue' /* webpackChunkName: "pages/web-dui/slider/create" */))
const _e3329e60 = () => interopDefault(import('../pages/web-dui/tution/create.vue' /* webpackChunkName: "pages/web-dui/tution/create" */))
const _4efed66d = () => interopDefault(import('../pages/account/purpose/update/_id.vue' /* webpackChunkName: "pages/account/purpose/update/_id" */))
const _271acb94 = () => interopDefault(import('../pages/admission/admissionInActiveBatch/create/_id.vue' /* webpackChunkName: "pages/admission/admissionInActiveBatch/create/_id" */))
const _6f5e232e = () => interopDefault(import('../pages/admission/batch/BatchWiseStudent/_id.vue' /* webpackChunkName: "pages/admission/batch/BatchWiseStudent/_id" */))
const _3d2014f5 = () => interopDefault(import('../pages/admission/batch/update/_id.vue' /* webpackChunkName: "pages/admission/batch/update/_id" */))
const _01ba6062 = () => interopDefault(import('../pages/employee/employee/detail/_id.vue' /* webpackChunkName: "pages/employee/employee/detail/_id" */))
const _374488da = () => interopDefault(import('../pages/employee/employee/update/_id.vue' /* webpackChunkName: "pages/employee/employee/update/_id" */))
const _69f4ac63 = () => interopDefault(import('../pages/student/attendance/create/_id.vue' /* webpackChunkName: "pages/student/attendance/create/_id" */))
const _2805a284 = () => interopDefault(import('../pages/student/course/update/_id.vue' /* webpackChunkName: "pages/student/course/update/_id" */))
const _addfe0a6 = () => interopDefault(import('../pages/student/lecture-sheet/update/_id.vue' /* webpackChunkName: "pages/student/lecture-sheet/update/_id" */))
const _82522fc2 = () => interopDefault(import('../pages/student/lesson-plan/update/_id.vue' /* webpackChunkName: "pages/student/lesson-plan/update/_id" */))
const _db8867da = () => interopDefault(import('../pages/student/question/update/_id.vue' /* webpackChunkName: "pages/student/question/update/_id" */))
const _28ac4798 = () => interopDefault(import('../pages/student/syllabus/update/_id.vue' /* webpackChunkName: "pages/student/syllabus/update/_id" */))
const _3d48bc9c = () => interopDefault(import('../pages/web-dui/committee/update/_id.vue' /* webpackChunkName: "pages/web-dui/committee/update/_id" */))
const _21940a12 = () => interopDefault(import('../pages/admission/print-receive/_id.vue' /* webpackChunkName: "pages/admission/print-receive/_id" */))
const _7d3d8652 = () => interopDefault(import('../pages/admission/student-update/_id.vue' /* webpackChunkName: "pages/admission/student-update/_id" */))
const _087dd383 = () => interopDefault(import('../pages/password-reset-confirm/_token.vue' /* webpackChunkName: "pages/password-reset-confirm/_token" */))
const _0ae5cb08 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _bff9b9cc,
    name: "account"
  }, {
    path: "/admission",
    component: _4275d176,
    name: "admission"
  }, {
    path: "/app",
    component: _78bf08cb,
    name: "app"
  }, {
    path: "/change-password",
    component: _40fcc042,
    name: "change-password"
  }, {
    path: "/employee",
    component: _68d6c877,
    name: "employee"
  }, {
    path: "/leave",
    component: _0d9ac0b8,
    name: "leave"
  }, {
    path: "/password-reset",
    component: _79fae3e3,
    name: "password-reset"
  }, {
    path: "/profile",
    component: _3fdc10d4,
    name: "profile"
  }, {
    path: "/setting",
    component: _9b83d106,
    name: "setting"
  }, {
    path: "/student",
    component: _094c3cb0,
    name: "student"
  }, {
    path: "/web-dui",
    component: _93ea1328,
    name: "web-dui"
  }, {
    path: "/account/account",
    component: _63701a16,
    name: "account-account"
  }, {
    path: "/account/deposite",
    component: _64175422,
    name: "account-deposite"
  }, {
    path: "/account/expense",
    component: _39f823a0,
    name: "account-expense"
  }, {
    path: "/account/fee-collect",
    component: _7a3cafab,
    name: "account-fee-collect"
  }, {
    path: "/account/fund",
    component: _37ed142d,
    name: "account-fund"
  }, {
    path: "/account/fund-transfer",
    component: _ae8d908a,
    name: "account-fund-transfer"
  }, {
    path: "/account/purpose",
    component: _b1c8312e,
    name: "account-purpose"
  }, {
    path: "/account/statement",
    component: _31d89592,
    name: "account-statement"
  }, {
    path: "/account/sub_fund",
    component: _196d674c,
    name: "account-sub_fund"
  }, {
    path: "/account/test",
    component: _bd78f10c,
    name: "account-test"
  }, {
    path: "/admission/admissionInActiveBatch",
    component: _31236216,
    name: "admission-admissionInActiveBatch"
  }, {
    path: "/admission/batch",
    component: _3f80983e,
    name: "admission-batch"
  }, {
    path: "/admission/department",
    component: _a1cf453e,
    name: "admission-department"
  }, {
    path: "/admission/dept-wish-student",
    component: _1100527e,
    name: "admission-dept-wish-student"
  }, {
    path: "/admission/form-import",
    component: _d353031c,
    name: "admission-form-import"
  }, {
    path: "/admission/form-sale",
    component: _97d25958,
    name: "admission-form-sale"
  }, {
    path: "/admission/form-stock",
    component: _22fdd159,
    name: "admission-form-stock"
  }, {
    path: "/admission/search-student",
    component: _73225922,
    name: "admission-search-student"
  }, {
    path: "/employee/department",
    component: _3af8abc0,
    name: "employee-department"
  }, {
    path: "/employee/designation",
    component: _4b5b78df,
    name: "employee-designation"
  }, {
    path: "/employee/office-time",
    component: _e1bd1134,
    name: "employee-office-time"
  }, {
    path: "/leave/application_denied_by_other",
    component: _3310122f,
    name: "leave-application_denied_by_other"
  }, {
    path: "/leave/application_form",
    component: _750ebdf1,
    name: "leave-application_form"
  }, {
    path: "/leave/approval_application",
    component: _26a48d72,
    name: "leave-approval_application"
  }, {
    path: "/leave/approved_application",
    component: _98c5b434,
    name: "leave-approved_application"
  }, {
    path: "/leave/pending_application",
    component: _1d739e0c,
    name: "leave-pending_application"
  }, {
    path: "/leave/self_denied_application",
    component: _55adc851,
    name: "leave-self_denied_application"
  }, {
    path: "/leave/withdraw_application",
    component: _9f90778e,
    name: "leave-withdraw_application"
  }, {
    path: "/profile/qualification",
    component: _33ac7e76,
    name: "profile-qualification"
  }, {
    path: "/profile/social",
    component: _28f4c8c8,
    name: "profile-social"
  }, {
    path: "/profile/training",
    component: _25a963c9,
    name: "profile-training"
  }, {
    path: "/profile/update",
    component: _32bda196,
    name: "profile-update"
  }, {
    path: "/setting/assign-role",
    component: _415e41ff,
    name: "setting-assign-role"
  }, {
    path: "/setting/permission",
    component: _018337b4,
    name: "setting-permission"
  }, {
    path: "/setting/role",
    component: _49eda49b,
    name: "setting-role"
  }, {
    path: "/setting/special-permission",
    component: _453bde48,
    name: "setting-special-permission"
  }, {
    path: "/student/attendance",
    component: _1ff0e8c6,
    name: "student-attendance"
  }, {
    path: "/student/course",
    component: _b2ec3f10,
    name: "student-course"
  }, {
    path: "/student/lecture-sheet",
    component: _16fbe629,
    name: "student-lecture-sheet"
  }, {
    path: "/student/lesson-plan",
    component: _58afe312,
    name: "student-lesson-plan"
  }, {
    path: "/student/question",
    component: _2b198203,
    name: "student-question"
  }, {
    path: "/student/search-student",
    component: _6faf3da0,
    name: "student-search-student"
  }, {
    path: "/student/students",
    component: _9753d596,
    name: "student-students"
  }, {
    path: "/student/syllabus",
    component: _7a782142,
    name: "student-syllabus"
  }, {
    path: "/web-dui/blog",
    component: _3c31d17b,
    name: "web-dui-blog"
  }, {
    path: "/web-dui/committee",
    component: _6ad89fda,
    name: "web-dui-committee"
  }, {
    path: "/web-dui/contact",
    component: _5077a23a,
    name: "web-dui-contact"
  }, {
    path: "/web-dui/event",
    component: _9fd0a892,
    name: "web-dui-event"
  }, {
    path: "/web-dui/facilitie",
    component: _42772362,
    name: "web-dui-facilitie"
  }, {
    path: "/web-dui/gallery",
    component: _46bedc22,
    name: "web-dui-gallery"
  }, {
    path: "/web-dui/notice",
    component: _775c549e,
    name: "web-dui-notice"
  }, {
    path: "/web-dui/program",
    component: _1ead3abe,
    name: "web-dui-program"
  }, {
    path: "/web-dui/slider",
    component: _6082807a,
    name: "web-dui-slider"
  }, {
    path: "/web-dui/tution",
    component: _7d80e0a4,
    name: "web-dui-tution"
  }, {
    path: "/admission/admissionInActiveBatch/test",
    component: _13b41782,
    name: "admission-admissionInActiveBatch-test"
  }, {
    path: "/admission/batch/create",
    component: _4f6b12fd,
    name: "admission-batch-create"
  }, {
    path: "/admission/department/create",
    component: _5ba7997d,
    name: "admission-department-create"
  }, {
    path: "/employee/department/create",
    component: _4bd116fe,
    name: "employee-department-create"
  }, {
    path: "/employee/designation/create",
    component: _47c7edbf,
    name: "employee-designation-create"
  }, {
    path: "/employee/employee/create",
    component: _49c74162,
    name: "employee-employee-create"
  }, {
    path: "/employee/employee/show",
    component: _30752e63,
    name: "employee-employee-show"
  }, {
    path: "/employee/employee/test",
    component: _004cc578,
    name: "employee-employee-test"
  }, {
    path: "/profile/qualification/create",
    component: _69979b08,
    name: "profile-qualification-create"
  }, {
    path: "/profile/social/create",
    component: _a63bbabc,
    name: "profile-social-create"
  }, {
    path: "/profile/training/create",
    component: _91913fd6,
    name: "profile-training-create"
  }, {
    path: "/student/attendance/report",
    component: _276252f0,
    name: "student-attendance-report"
  }, {
    path: "/student/course/assign",
    component: _3dea27b9,
    name: "student-course-assign"
  }, {
    path: "/student/course/create",
    component: _52667946,
    name: "student-course-create"
  }, {
    path: "/student/lecture-sheet/create",
    component: _1f95ac96,
    name: "student-lecture-sheet-create"
  }, {
    path: "/student/lesson-plan/create",
    component: _6de3e9b2,
    name: "student-lesson-plan-create"
  }, {
    path: "/student/question/create",
    component: _5fcb091b,
    name: "student-question-create"
  }, {
    path: "/student/syllabus/create",
    component: _077f5c88,
    name: "student-syllabus-create"
  }, {
    path: "/web-dui/blog/create",
    component: _71bca8a3,
    name: "web-dui-blog-create"
  }, {
    path: "/web-dui/committee/create",
    component: _17efa624,
    name: "web-dui-committee-create"
  }, {
    path: "/web-dui/event/create",
    component: _7a9215e7,
    name: "web-dui-event-create"
  }, {
    path: "/web-dui/facilitie/create",
    component: _217da64f,
    name: "web-dui-facilitie-create"
  }, {
    path: "/web-dui/notice/create",
    component: _24c5a9a6,
    name: "web-dui-notice-create"
  }, {
    path: "/web-dui/program/create",
    component: _4c373c3d,
    name: "web-dui-program-create"
  }, {
    path: "/web-dui/slider/create",
    component: _50fc4cf8,
    name: "web-dui-slider-create"
  }, {
    path: "/web-dui/tution/create",
    component: _e3329e60,
    name: "web-dui-tution-create"
  }, {
    path: "/account/purpose/update/:id?",
    component: _4efed66d,
    name: "account-purpose-update-id"
  }, {
    path: "/admission/admissionInActiveBatch/create/:id?",
    component: _271acb94,
    name: "admission-admissionInActiveBatch-create-id"
  }, {
    path: "/admission/batch/BatchWiseStudent/:id?",
    component: _6f5e232e,
    name: "admission-batch-BatchWiseStudent-id"
  }, {
    path: "/admission/batch/update/:id?",
    component: _3d2014f5,
    name: "admission-batch-update-id"
  }, {
    path: "/employee/employee/detail/:id?",
    component: _01ba6062,
    name: "employee-employee-detail-id"
  }, {
    path: "/employee/employee/update/:id?",
    component: _374488da,
    name: "employee-employee-update-id"
  }, {
    path: "/student/attendance/create/:id?",
    component: _69f4ac63,
    name: "student-attendance-create-id"
  }, {
    path: "/student/course/update/:id?",
    component: _2805a284,
    name: "student-course-update-id"
  }, {
    path: "/student/lecture-sheet/update/:id",
    component: _addfe0a6,
    name: "student-lecture-sheet-update-id"
  }, {
    path: "/student/lesson-plan/update/:id",
    component: _82522fc2,
    name: "student-lesson-plan-update-id"
  }, {
    path: "/student/question/update/:id?",
    component: _db8867da,
    name: "student-question-update-id"
  }, {
    path: "/student/syllabus/update/:id?",
    component: _28ac4798,
    name: "student-syllabus-update-id"
  }, {
    path: "/web-dui/committee/update/:id",
    component: _3d48bc9c,
    name: "web-dui-committee-update-id"
  }, {
    path: "/admission/print-receive/:id?",
    component: _21940a12,
    name: "admission-print-receive-id"
  }, {
    path: "/admission/student-update/:id?",
    component: _7d3d8652,
    name: "admission-student-update-id"
  }, {
    path: "/password-reset-confirm/:token?",
    component: _087dd383,
    name: "password-reset-confirm-token"
  }, {
    path: "/",
    component: _0ae5cb08,
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
