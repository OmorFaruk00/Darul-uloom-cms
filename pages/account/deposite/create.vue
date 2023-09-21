<template>
    <section class="accounts">
      <div class="container mt-5">
        <div class="form-shadow p-5">
          <div class="d-flex justify-content-between">
          <div>
            <h3 class="title">Add Deposite</h3>
          </div>
          <div>
             <nuxt-link to="/account/deposite"><img src="/images/list.png" alt=""></nuxt-link>
            </div>
        </div>
          <div class="">           
            <div class="row">         
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
                  <label for="inpu4" class="form-label">Reference Id
                  </label>
                  <input type="number" v-model="reference_id" class="form-control" id="inpu4" />
                  <h6 v-if="error && error.reference_id" v-text="error.reference_id[0]" class="text-danger"></h6>
                </div>
              </div> 
  
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputState" class="form-label">Pay By</label>
                  <select id="inputState" class="form-control" v-model="pay_by">
                    <option selected disabled value="">Choose...</option>
                    <option value="CASH">CASH</option>
                    <option value="BANK">BANK</option>
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
             
              <div class="col-md-12">
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
              <button type="submit" class="btn btn-info" @click="makeDeposited()">
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
        purpose_id: "",        
        amount: "",      
        date: "",
        note: "",      
        purposes: "",
        reference_id:"",
        error: "",
      };
    },
    created() {      
      this.getPurpose();
    },
    methods: {
  
      getPurpose() {
        this.$axios
          .$get("/accounts/purpose/Deposited")
          .then((response) => {
            this.purposes = response;
            console.log(response)
          })
          .catch((error) => {
            this.$toaster.error("Purpose Not found");
          });
    
      },
      makeDeposited() {
        this.$axios
          .post("/accounts/deposite", {          
            purpose_id: this.purpose_id,
            reference_id: this.reference_id,
            note: this.note,           
            pay_by: this.pay_by,
            amount: this.amount,           
            date: this.date,
           
          })
          .then((response) => {             
              (this.purpose_id = ""),
              (this.reference_id = ""),
              (this.pay_by = ""),
              (this.amount = ""),              
              (this.date = ""),
              (this.note = ""),               
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
  