<template>
    <section class="accounts">
      <div class="container mt-5">
        <div class="form-shadow p-5">
          <div class="">            
            <div class="row">
              <div class="col-md-12 col-xl-6 col-sm-12">
                <div class="form-group">
                  <label>Department *</label>
                  <select class="form-control" v-model="department_id" @change="fetchBatch()">
                    <option disabled selected value="">Select Department</option>
                    <option disable v-for="(dpt, index) in departments" :key="index" :value="dpt.id"
                      v-text="dpt.department_name"></option>
                  </select>
                  <h6 v-if="error && error.department_id" v-text="error.department_id[0]" class="text-danger"></h6>
                </div>
              </div>
              <div class="col-md-12 col-xl-6 col-sm-12">
                <div class="form-group">
                  <label>Batch *</label>
                  <input type="text" disabled class="form-control" placeholder="Select Department first"
                    v-if="!batches" />
                  <select class="form-control" v-model="batch_id" required @change="fetchStudent" v-else>
                    <option selected value="">Select Batch</option>
                    <option v-for="batch in batches" :key="batch.id" :value="batch.id" v-text="batch.batch_name"></option>
                  </select>
                  <h6 v-if="error && error.batch_id" v-text="error.batch_id[0]" class="text-danger"></h6>
                </div>
              </div>
              <div class="col-md-12 col-xl-6 col-sm-12">
                <div class="form-group">
                  <label>Student *</label>
                  <input type="text" disabled class="form-control" placeholder="Select Batch first" v-if="!students" />
                  <select class="form-control" v-model="student_id" required v-else>
                    <option selected value="">Select Batch</option>
                    <option v-for="student in students" :key="student.id" :value="student.id"
                      v-text="`${student.roll_no}- ${student.student_name_english}`"></option>
                  </select>
                  <h6 v-if="error && error.student_id" v-text="error.student_id[0]" class="text-danger"></h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Purpose</label>
                  <select v-model="purpose_id" id="inputState" class="form-control">
                    <option selected disabled value="">Choose...</option>
                    <option v-for="(purpo, i) in purposes" :key="i" :value="purpo.id" v-text="purpo.name"></option>
                  </select>
                  <h6 v-if="error && error.purpose_id" v-text="error.purpose_id[0]" class="text-danger"></h6>
                </div>
              </div>
  
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputState" class="form-label">Pay By</label>
                  <select id="inputState" class="form-control" v-model="pay_by">
                    <option selected disabled value="">Choose...</option>
                    <option value="CASH">CASH</option>
                    <option value="BANK">BANK</option>
                    <!-- <option value="LILHA">LILHA</option>                     -->
                  </select>
                  <h6 v-if="error && error.pay_by" v-text="error.pay_by[0]" class="text-danger"></h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inpu4" class="form-label">Total Pay
                  </label>
                  <input type="number" v-model="amount" class="form-control" id="inpu4" />
                  <h6 v-if="error && error.amount" v-text="error.amount[0]" class="text-danger"></h6>
                </div>
              </div>           
                        
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputAddress2" class="form-label">Receipt No</label>
                  <input v-model="receipt_no" type="text" class="form-control" id="inputAddress2"
                    placeholder="Receipt No" />
                    <h6 v-if="error && error.receipt_no" v-text="error.receipt_no[0]" class="text-danger"></h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputAddress2" class="form-label">Payment Date</label>
                  <input v-model="date" type="date" class="form-control" id="inputAddress2" placeholder="Date" />
                  <h6 v-if="error && error.date" v-text="error.date[0]" class="text-danger"></h6>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="inputAddress2" class="form-label">Note</label>
                  <textarea v-model="note" type="number" class="form-control" id="inputAddress2"></textarea>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
              <button type="submit" class="btn btn-info" @click="takingFee()">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  export default {
    layout: "Account-content",
    data() {
      return {      
        department_id: "",
        batch_id: "",
        student_id: "",
        purpose_id: "",
        pay_by: "",
        amount: "",
        receipt_no: "",
        date: "",
        note: "",
        departments: "",
        batches: "",
        students: "",
        purposes: "",
        error: "",
      };
    },
    created() {
      this.getDepartment();
      this.getPurpose();
    },
    methods: {
      getDepartment() {
        this.$axios.get("/admission/department-show").then((res) => {
          this.departments = res.data;
        });
      },
      fetchBatch() {
        this.$axios
          .$get("/admission/batch/" + this.department_id)
          .then((response) => {
            this.batches = response.data;
          })
          .catch((error) => {
            this.$toaster.error("Batch Not found");
          });
      },
      fetchStudent() {
        this.$axios
          .$get("/admission/batch-wise-student/" + this.batch_id)
          .then((response) => {
            this.students = response;
          })
          .catch((error) => {
            this.$toaster.error("Batch Not found");
          });
      },   
      getPurpose() {
        this.$axios
          .$get("/accounts/purpose/Fee")
          .then((response) => {
            this.purposes = response;
            console.log(response)
          })
          .catch((error) => {
            this.$toaster.error("Purpose Not found");
          });
    
      },
      takingFee() {
        this.$axios
          .post("/accounts/fee-cashin", {
            department_id: this.department_id,
            batch_id: this.batch_id,
            student_id: this.student_id,
            purpose_id: this.purpose_id,
            note: this.note,
            receipt_no: this.receipt_no,
            pay_by: this.pay_by,
            amount: this.amount,           
            date: this.date,
           
          })
          .then((response) => {
              (this.department_id = ""),
              (this.batch_id = ""),              
              (this.student_id = ""),
              (this.purpose_id = ""),
              (this.pay_by = ""),
              (this.amount = ""),              
              (this.date = ""),
              (this.note = ""),
              (this.receipt_no = ""), 
              (this.error= ""),                            
              this.$toaster.success(response.data.message);
          })
          .catch((error) => {
            if (error.response.status === 422) {
              if (error.response.data.message) {
                this.$toaster.error(error.response.data.message);
              }
              this.error = error.response.data.errors;
            } else {
            }
          });
      },
    },

    
  };
  </script>
  
  <style>
  </style>
  