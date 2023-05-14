<template>
    <div>
      <div class="pt-5" v-if="auth">
        <div class="row">
          <div class="mx-auto col-md-12">
            <div class="panel">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-sm-5 col-xs-12">
                    <h6 class="title">Employee List</h6>
                  </div>
                  <div class="col-sm-7 col-xs-12 text-right">
                    <nuxt-link to="/employee/employee/create" class="btn-add"
                      v-if="$auth.user.permission.includes('Employee-add')">Add Employee</nuxt-link>
                  </div>
                </div>
              </div>
              <div class="panel-body table-responsive" v-if="employees">
               <table class="table table-striped table-bordered text-center">
                  <thead>
                    <tr>
                     <th>SL</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Depertment</th>
                      <th>E-mail</th>
                      <th>Phone</th>
                      <th>Action</th>
                    
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(employee,index) in employees" :key="index">
                      <td>{{ index +1}}</td>
                      <td>{{ employee.name }}</td>
                      <td>{{ employee.rel_designation.designation }}</td>
                      <td>{{ employee.rel_department.department }}</td>
                      <td>{{ employee.email }}</td>
                      <td>{{ employee.personal_phone_no }}</td>
                      <td class="pt-3">
                        <nuxt-link :to="`/employee/employee/update/${employee.id}`" class="btn-edit"
                          style="padding:8px 15px">Edit
                        </nuxt-link>
                        <nuxt-link :to="`/employee/employee/detail/${employee.id}`" class="btn-details"
                          style="padding:8px 15px">Details</nuxt-link>
                      </td> 
                   
                    
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Modal -->
        
      </div>
      <h2 v-else class="text-center mt-5 text-danger">You are not authorized</h2>
    </div>
  </template>
  <script>
  export default {
    layout: "Emp-content",
    mounted() {
      this.getDepartment();
  
    },
    data() {
      return {
        auth: true,
        employees: '',       
      };
    },
    methods: {
      getDepartment() {
        this.$axios
          .$get("/employee/show-paginate")
          .then((res) => {
            this.employees = res;
          })
          .catch((error) => {
            if (error.response.status == 401) {
              this.auth = false;
              this.$toaster.error(error.response.data.message);
            }
            console.log(error);
          });
      },
   
   
  
  
  
  
  
    },
  };
  </script>
  <style scoped>
  </style>
  