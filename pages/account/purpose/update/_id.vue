<template>
    <div>
      <div class="form-shadow col-md-8 mx-auto p-5 my-5">
        <h3 class="title">Update Payment Purpose</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputAddress2">Purpose Name</label>
              <input v-model="name" type="text" class="form-control" id="inputAddress2" placeholder="Purpose Name" />
              <span class="text-danger" v-if="error && error.name">{{
                  error.name[0]
              }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputAddress2">Type</label>
              <select v-model="type" id="type" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option value="Fee">Fee</option>
                <option value="Deposited">Deposited</option>
                <option value="Expense">Expense</option>
              </select>
              <span class="text-danger" v-if="error && error.type">{{
                  error.type[0]
              }}</span>
            </div>
          </div>   
     
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputState" class="form-label">Payment Type</label>
              <select v-model="payment_type" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>
                <option value="One Time Pay">One Time Pay</option>
                <option value="Monthly">Monthly</option>
              </select>
              <span class="text-danger" v-if="error && error.payment_type">{{
                  error.payment_type[0]
              }}</span>
            </div>
          </div>       
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputState" class="form-label">Fund</label>
              <select v-model="fund_id" id="inputState" class="form-control">
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
        </div>      
        <div class="float-right">
          <button class="btn btn-info" @click="createPurpose">Make</button>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: "Account-content",
    data() {
      return {      
        name: "",
        type: "",      
        fund_id: "",   
        payment_type: "",
        error: "",
        funds:"",
        purposes:"",
      };
    },
    created() {  
      this.getPurpose()  
      this.getFund();      
    }, 
    methods: { 
    
      createPurpose() {
        this.$axios
          .put("/accounts/purpose/"+this.$route.params.id, {
            name: this.name,
            type: this.type,
            payment_type: this.payment_type,         
            fund_id: this.fund_id,
          
          })
          .then((response) => {
            this.error="";
            this.$router.push("/account/purpose")     
            this.$toaster.success(response.data.message);
          })
          .catch((error) => {           
            if (error.response.status === 422) {
              this.error = error.response.data.errors;
            }
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
      getPurpose() {
        this.$axios
          .get("/accounts/purpose/"+this.$route.params.id+"/edit")
          .then((response) => {
            this.name = response.data.name;
            this.payment_type = response.data.payment_type;
            this.type = response.data.type;
            this.fund_id = response.data.fund_id;            
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
  