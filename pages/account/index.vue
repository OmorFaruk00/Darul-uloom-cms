<template>
  <section class="accounts">
    <div class="container py-5">
      <div class="card">
        <div class="card-body">
          <p v-for="error in errors" class="text-danger" :key="error.id">* {{error[0]}}</p>
          <p v-if="errors&&errors.message">* {{errors.message}}</p>
          <form class="row g-3" method="POST" @submit.prevent="takingCost()">
            <div class="col-md-6">
              <label for="inputStae" class="form-label">Class</label>
              <select v-model="classId" @change="getPurpose" id="inputStae" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option :value="cls.id" v-for="cls in classes" :key="cls.id">
                  {{ cls.name }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">Roll</label>
              <select v-model="roll" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">Purpose</label>
              <select v-model="purpose" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>

                <option
                  v-for="(purpo, i) in purposes"
                  :key="i"
                  :value="purpo.id"
                  v-text="purpo.name"
                ></option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">Pay By</label>
              <select id="inputState" class="form-control" v-model="payBy">
                <option selected disabled value="">Choose...</option>
                <option value="BANK">BANK</option>
                <option value="LILHA">LILHA</option>
                <option value="COD">COD</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inpu4" class="form-label"
                >Total Pay <span readonly v-if="totalPay" v-text="'('+totalPay+')'"></span>
              </label>
              <input
                type="number"
                v-model="amount"
                class="form-control"
                id="inpu4"
              />
            </div>
            <div class="col-6" v-if="payBy === 'LILHA'">
              <label for="inputAddress2" class="form-label"
                >LILHA PAY Amount</label
              >
              <input
                v-model="lilha_pay"
                type="number"
                class="form-control"
                id="inputAddress2"
                placeholder="Enter Amount"
              />
            </div>

            <div v-if="payBy === 'BANK'" class="col-12">
              <label for="inputAddress2" class="form-label">RECEIPT NO</label>
              <input
                v-model="receiptNo"
                type="number"
                class="form-control"
                id="inputAddress2"
                placeholder="Enter Amount"
              />
            </div>
            <div v-if="getPurposeMonth" class="col-12">
              <label for="inputAddress2" class="form-label">Month No</label>
              <input
                v-model="monthCount"
                type="number"
                class="form-control"
                id="inputAddress2"
                placeholder="Enter Amount"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Discount</label>
              <input
                v-model="scholarship"
                type="number"
                class="form-control"
                id="inputAddress2"
                placeholder="Discount"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label"
                >Discount Type</label
              >
              <input
                v-model="scholarship_type"
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Discount Type"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Date</label>
              <input
                v-model="date"
                type="date"
                class="form-control"
                id="inputAddress2"
                placeholder="Date"
              />
            </div>
            <div class="col-12 mt-2">
              <button type="submit" class="btn btn-info">Make Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      payBy: "",
      department: "",
      classId: "",
      roll: "",
      purpose: "",
      amount: "",
      lilha_pay: "",
      receiptNo: "",
      date: "",
      scholarship: "",
      scholarship_type: "",
      purposes: "",
      classes: "",
      monthCount: "",
      errors: "",
    };
  },
  mounted() {
   // this.getPurpose();
    this.getClass();
  },
  methods: {
    getClass() {
      this.$axios.get("/accounts/class").then((res) => {
        this.classes = res.data;
      });
    },
    getPurpose() {
      this.$axios.get("/accounts/purpose/"+this.classId).then((res) => {
        this.purposes = res.data;
      });
    },
    takingCost() {
      this.$axios
        .post("/accounts/costs-taking", {
          department: this.department,
          class: this.classId,
          roll: this.roll,
          purpose: this.purpose,
          scholarship: this.scholarship,
          scholarship_type: this.scholarship_type,
          payBy: this.payBy,
          amount: this.amount,
          receiptNo: this.receiptNo,
          date: this.date,
          discount: this.discount,
          monthCount: this.monthCount,
        })
        .then((response) => {
          (this.payBy = ""),
            (this.department = ""),
            (this.classId = ""),
            (this.roll = ""),
            (this.purpose = ""),
            (this.amount = ""),
            (this.lilha_pay = ""),
            (this.receiptNo = ""),
            (this.date = ""),
            (this.scholarship = ""),
            (this.scholarship_type = ""),
            (this.monthCount = ""),
            this.$toaster.success(response.data.message);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            if(error.response.data.message){
              this.$toaster.success(error.response.data.message);
            }
            this.errors = error.response.data.errors;
          } else {

          }
        });
    },
  },
  computed: {
    totalPay() {
      let amount = "";
      if (this.purposes.length > 0) {
        this.purposes.filter((purpo) => {
          if (purpo.id === this.purpose) {
            amount = parseInt(purpo.amount);
          }
        });
      }

      return amount;
    },
    getPurposeMonth() {
      let month = 0;
      if (this.purposes.length > 0) {
        this.purposes.filter((purpo) => {
          if (purpo.id === this.purpose) {
            month = parseInt(purpo.month_wise);
          }
        });
      }
      return month;
    },
  },
  layout:'Account-content',
};
</script>

<style></style>
