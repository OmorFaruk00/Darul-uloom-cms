<template>
    <div>
      <div class="form-shadow col-md-8 mx-auto p-5 my-5">
        <h3 class="title">Create Payment Purpose</h3>
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
        <table class="table table-striped table-bordered" v-if="purposes">
          <thead>
            <tr>
              <th scope="col">SL NO</th>
              <th scope="col">Payment Name</th>           
              <th scope="col">Payment Type</th>           
              <th scope="col">Type</th>          
              <th scope="col">Fund</th>           
              <th width="200px" scope="col">Action</th>           
            </tr>
          </thead>
          <tbody>
            <tr v-for="(purpo, i) in purposes" :key="purpo.id">
              <th scope="row">{{ ++i }}</th>
              <td>{{ purpo.name }}</td>
              <td>{{ purpo.payment_type }}</td>
              <td>{{ purpo.type }}</td>
              <td>{{ purpo.fund.name }}</td>
              <td>
                <nuxt-link :to="`/account/purpose/update/${purpo.id}`" class="btn-edit"
                        style="padding:8px 15px" >Edit
                      </nuxt-link>
                        
                        <button class="btn-delete" @click="purposeDelete(purpo.id)">
                          Delete
                        </button>
                      </td>
            </tr>
            <!-- <h3 class="text-center" v-if="purposes === null">Loading...</h3> -->
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
      this.getFund();
      this.getPurpose();
    }, 
    methods: { 
    
      createPurpose() {
        this.$axios
          .post("/accounts/purpose", {
            name: this.name,
            type: this.type,
            payment_type: this.payment_type,         
            fund_id: this.fund_id,
          
          })
          .then((response) => {
            this.name = "";
            this.type = "";
            this.payment_type = "";         
            this.fund_id = ""; 
            this.error = "";         
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
  
      purposeDelete(id) {
        if (confirm("Are you sure to delete this item?")) {
          this.$axios
            .$delete("/accounts/purpose/" + id)
            .then((res) => {
              this.getPurpose();
              this.$toaster.error(res.message);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    
    },
  };
  </script>
  
  <style>
  </style>
  