<template>
    <div>
      <div class="form-shadow col-md-4 mx-auto p-5 my-5">
        <h3 class="title">Fund Transfer</h3>
        <div class="row">  
              
          <div class="col-md-12">
            <div class="form-group">
              <label for="inputState" class="form-label">From Fund</label>
              <select v-model="from_fund_id" id="inputState" class="form-control" @change="transferFund">
                <option selected disabled value="">Choose...</option>
                <option :value="fun.id" v-for="fun in funds" :key="fun.id">
                  {{ fun.name }}
                </option>
              </select>
              <span class="text-danger" v-if="error && error.from_fund_id">{{
                  error.from_fund_id[0]
              }}</span>
            </div>
          </div>   
          <div class="col-md-12">
            <div class="form-group">
              <label for="inputState" class="form-label">To Fund</label>
              <select v-model="to_fund_id" id="inputState" class="form-control">
                <option selected disabled value="">Choose...</option>                
                <option :value="fun.id" v-for="fun in transfer_funds" :key="fun.id">
                  {{ fun.name }}
                </option>
              </select>
              <span class="text-danger" v-if="error && error.to_fund_id">{{
                  error.to_fund_id[0]
              }}</span>
            </div>
          </div>  
          <div class="col-md-12">
                <div class="form-group">
                  <label for="inpu4" class="form-label">Amount
                  </label>
                  <input type="number" v-model="amount" class="form-control" id="inpu4" />
                  <h6 v-if="error && error.amount" v-text="error.amount[0]" class="text-danger"></h6>
                </div>
              </div> 
              <div class="col-md-12">
                <div class="form-group">
                  <label for="inputAddress2" class="form-label">Note</label>
                  <textarea v-model="note" type="number" class="form-control" id="inputAddress2"></textarea>
                </div>
              </div>    
        </div>      
        <div class="float-right">
          <button class="btn btn-info" @click="fundTransfer">Send</button>
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
        from_fund_id: "",   
        to_fund_id: "",   
        amount: "",
        funds:"",
        transfer_funds:"",
        note:"",
        error: "",
        
      };
    },
    created() {    
      this.getFund();
     
    }, 
    methods: { 
    
      fundTransfer() {
        this.$axios
          .post("/accounts/fund-transfer", {
            from_fund_id: this.from_fund_id,
            to_fund_id: this.to_fund_id,
            amount: this.amount,   
            note: this.note,   
          
          })
          .then((response) => {
            this.from_fund_id = "";
            this.to_fund_id = "";
            this.amount = "";            
            this.note = "";            
            this.error = "";         
           
            this.$toaster.success(response.data.message);
          })
          .catch((error) => {            
            if (error.response.status === 422) {
              this.error = error.response.data.errors;
            }
            if (error.response.status === 404) {              
              this.$toaster.error(error.response.data.message)
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

      transferFund() {
        this.$axios
          .get("/accounts/get-funds/"+this.from_fund_id)
          .then((response) => {
            this.transfer_funds = response.data;
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
  