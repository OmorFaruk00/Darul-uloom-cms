<template>
    <div>
      <div class="form-shadow col-md-8 mx-auto p-5 my-5">
        <h3 class="title">Create Payment Purpose</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputAddress2">Payment Name</label>
              <input v-model="name" type="text" class="form-control" id="inputAddress2" placeholder="Payment Name" />
              <span class="text-danger" v-if="error && error.name">{{
                  error.name[0]
              }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputAddress2">Amount</label>
              <input v-model="amount" type="number" class="form-control" id="inputAddress2" placeholder="Amount" />
  
              <span class="text-danger" v-if="error && error.amount">{{
                  error.amount[0]
              }}</span>
            </div>
          </div>
          <div class="col-md-12 col-xl-6 col-sm-12">
            <div class="form-group">
              <label>Department *</label>
              <select class="form-control" v-model="department" @change="fetchBatch()">
                <option disabled selected value="">Select Department</option>
                <option disable v-for="(dpt, index) in departments" :key="index" :value="dpt.id"
                  v-text="dpt.department_name"></option>
              </select>
              <h6 v-if="error && error.department" v-text="error.department[0]" class="text-danger"></h6>
            </div>
          </div>
          <div class="col-md-12 col-xl-6 col-sm-12">
            <div class="form-group">
              <label>Batch *</label>
              <input type="text" disabled class="form-control" placeholder="Select Department first" v-if="!batches" />
              <select class="form-control" v-model="batch_id" required v-else>
                <option selected value="">Select Batch</option>
                <option v-for="batch in batches" :key="batch.id" :value="batch.id" v-text="batch.batch_name"></option>
              </select>
              <h6 v-if="error && error.batch_id" v-text="error.batch_id[0]" class="text-danger"></h6>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputState" class="form-label">Month Wise</label>
              <select v-model="month_wise" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option value="0">One Time Pay</option>
                <option value="1">Monthly</option>
              </select>
              <span class="text-danger" v-if="error && error.monthly_fee">{{
                  error.monthly_fee[0]
              }}</span>
            </div>
          </div>
          <!-- <div class="col-md-6">
            <div class="form-group">
              <label for="inputState" class="form-label">Class</label>
              <select v-model="class_id" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option :value="cls.id" v-for="cls in classes" :key="cls.id">
                  {{ cls.department_name }}
                </option>
              </select>
              <span class="text-danger" v-if="error && error.class_id">{{
                error.class_id[0]
              }}</span>
            </div>
          </div> -->
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputState" class="form-label">Fund</label>
              <select v-model="fund_id" @change="getSubfund" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option :value="fun.id" v-for="fun in funds" :key="fun.id">
                  {{ fun.name }}
                </option>
              </select>
              <span class="text-danger" v-if="error && error.fund_id">{{
                  error.fund_id[0]
              }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputState" class="form-label">Sub Fund</label>
              <select v-model="sub_fund_id" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option :value="sfun.id" v-for="sfun in subFunds" :key="sfun.id">
                  {{ sfun.name }}
                </option>
              </select>
              <span class="text-danger" v-if="error && error.sub_fund_id">{{
                  error.sub_fund_id[0]
              }}</span>
            </div>
          </div>
        </div>
        .
        <div class="float-right">
          <button class="btn btn-info mt-3" @click="createPurpose">Make</button>
        </div>
      </div>
      <div>
        <table class="table table-striped text-center" v-if="purposes">
          <thead>
            <tr>
              <th scope="col">SL NO</th>
              <th scope="col">Payment Name</th>
              <th scope="col">Department</th>
              <th scope="col">Batch</th>
              <th scope="col">Fee</th>
              <th scope="col">Monthly</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(purpo, i) in purposes" :key="purpo.id">
              <th scope="row">{{ ++i }}</th>
              <td>{{ purpo.name }}</td>
              <td>{{ purpo.rel_batch ? purpo.rel_department.department_name : "NaN" }}</td>
              <td>{{ purpo.rel_batch ? purpo.rel_batch.batch_name : "NaN" }}</td>
              <td>{{ purpo.amount }}</td>
              <td>{{ purpo.month_wise == 1 ? "yes" : "one time" }}</td>
            </tr>
            <h3 class="text-center" v-if="purposes === null">Loading...</h3>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: "Account-content",
    data() {
      return {
        departments: "",
        department: "",
        name: "",
        amount: "",
        batch_id: "",
        fund_id: "",
        sub_fund_id: "",
        batches: "",
        funds: "",
        subFunds: "",
        purposes: null,
        month_wise: "",
        error: "",
      };
    },
    created() {
      this.fetchDepartmentInfo();
      this.getFund();
      this.getPurpose();
    },
    computed: {
      totalFee() {
        if (this.admissionFee && this.monthlyFee) {
          return parseInt(this.admissionFee) + parseInt(this.monthlyFee);
        }
      },
    },
    methods: {
      fetchDepartmentInfo() {
        this.$axios
          .$get("/admission/department")
          .then((response) => {
            this.departments = response;
          })
          .catch((error) => {
            this.$toaster.error("Department Not found");
          });
      },
      fetchBatch() {
        this.$axios
          .$get("/admission/batch/" + this.department)
          .then((response) => {
            this.batches = response.data;
          })
          .catch((error) => {
            this.$toaster.error("Batch Not found");
          });
      },
      createPurpose() {
        this.$axios
          .post("/accounts/purpose", {
            name: this.name,
            amount: this.amount,
            month_wise: this.month_wise,
            department_id: this.department,
            batch_id: this.batch_id,
            fund_id: this.fund_id,
            sub_fund_id: this.sub_fund_id,
          })
          .then((response) => {
            this.name = "";
            this.amount = "";
            this.month_wise = "";
            this.class_id = "";
            this.fund_id = "";
            this.sub_fund_id = "";
            this.getPurpose();
            this.$toaster.success(response.data.message);
          })
          .catch((error) => {
            this.error = "";
            if (error.response.status === 422) {
              this.error = error.response.data.errors;
            }
            console.log(error);
          });
      },
      getClass() {
        this.$axios
          .get("/admission/department-show")
          .then((response) => {
            this.classes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getPurpose() {
        this.$axios
          .get("/accounts/purpose")
          .then((response) => {
            this.purposes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getFund() {
        this.$axios
          .get("/accounts/funds")
          .then((response) => {
            this.funds = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getSubfund() {
        this.$axios
          .get("/accounts/funds-subfunds/" + this.fund_id)
          .then((response) => {
            this.subFunds = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style>
  </style>
  