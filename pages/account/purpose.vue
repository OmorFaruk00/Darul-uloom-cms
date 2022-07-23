<template>
  <div class="py-2">
    <h3>Create Payment Purpose</h3>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="createPurpose">
          <div class="form-group">
            <label for="inputAddress2">Payment Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Payment Name"
            />
            <span class="text-danger" v-if="error && error.name">{{
              error.name[0]
            }}</span>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Amount</label>
            <input
              v-model="amount"
              type="number"
              class="form-control"
              id="inputAddress2"
              placeholder="Amount"
            />

            <span class="text-danger" v-if="error && error.amount">{{
              error.amount[0]
            }}</span>
          </div>
          <div class="row">
            <div class="col-md-6">
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
            <div class="col-md-6">
              <label for="inputState" class="form-label">Class</label>
              <select v-model="class_id" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option :value="cls.id" v-for="cls in classes" :key="cls.id">
                  {{ cls.name }}
                </option>
              </select>
               <span class="text-danger" v-if="error && error.class_id">{{
              error.class_id[0]
            }}</span>
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">Fund</label>
              <select
                v-model="fund_id"
                @change="getSubfund"
                id="inputState"
                class="form-control"
              >
                <option selected disabled value="">Choose...</option>
                <option :value="fun.id" v-for="fun in funds" :key="fun.id">
                  {{ fun.name }}
                </option>
              </select>
               <span class="text-danger" v-if="error && error.fund_id">{{
              error.fund_id[0]
            }}</span>
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">Sub Fund</label>
              <select
                v-model="sub_fund_id"
                id="inputState"
                class="form-control"
              >
                <option selected disabled value="">Choose...</option>
                <option
                  :value="sfun.id"
                  v-for="sfun in subFunds"
                  :key="sfun.id"
                >
                  {{ sfun.name }}
                </option>
              </select>
               <span class="text-danger" v-if="error && error.sub_fund_id">{{
              error.sub_fund_id[0]
            }}</span>
            </div>
          </div>

          <button class="btn btn-info mt-3">Make</button>
        </form>
      </div>
    </div>
    <hr />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Payment Name</th>
             <th scope="col">Class Name</th>
            <th scope="col">Fee</th>
            <th scope="col">Monthly</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(purpo, i) in purposes" :key="purpo.id">
            <th scope="row">{{ ++i }}</th>
            <td>{{ purpo.name }}</td>
             <td>{{ purpo.rel_class?purpo.rel_class.name:'NaN' }}</td>
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

 layout:'Account-content',
  data() {
    return {
      name: "",
      amount: "",
      class_id: "",
      fund_id: "",
      sub_fund_id: "",
      classes: "",
      funds: "",
      subFunds: "",
      purposes: null,
      month_wise: "",
      error: "",
    };
  },
  created() {
    this.getClass();
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
    createPurpose() {
      this.$axios
        .post("/accounts/purpose", {
          name: this.name,
          amount: this.amount,
          month_wise: this.month_wise,
          class_id: this.class_id,
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
          this.error=''
          if (error.response.status === 422) {
            this.error = error.response.data.errors;
          }
          console.log(error);
        });
    },
    getClass() {
      this.$axios
        .get("/accounts/class")
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

<style></style>
