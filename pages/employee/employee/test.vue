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
              <div class="panel-body table-responsive">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Depertment</th>
                      <th>E-mail</th>
                      <th>Phone</th>
                      <th>Image</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    <tr v-for="(employee, index) in employees" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ employee.name }}</td>
                      <td>{{ employee.rel_designation.designation }}</td>
                      <td>{{ employee.rel_department.department }}</td>
                      <td>{{ employee.email }}</td>
                      <td>{{ employee.personal_phone_no }}</td>
                       <td><img :src="base_url + '/images/emp/' + employee.profile_photo" alt="image"
                          style="height:80px;width: 100px;" /></td>
                      <td>
                        <button v-if="employee.status == 1" class="btn-active" @click="employeeStatus(employee.id)">
                          Active
                        </button>
                        <button v-if="employee.status == 0" class="btn-inactive" @click="employeeStatus(employee.id)">
                          Inactive
                        </button>
                      </td>
                       <td class="pt-3">
                        <nuxt-link :to="`/employee/employee/update/${employee.id}`" class="btn-edit"
                          style="padding:8px 15px" v-if="$auth.user.permission.includes('Employee-update')">Edit
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
  
  
  
        <div class="col-12">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12">
              Showing <span v-html="meta.from || 0"></span> to
              <span v-html="meta.to || 0"></span>
              of
              <span v-html="meta.total"></span> entries
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12">
              <nav aria-label="Page navigation example" class="my-3 mx-2">
                <ul class="pagination pagination-sm justify-content-end">
                  <li class="page-item" :class="meta.current_page > 1 ? '' : 'disabled'">
                    <a class="page-link" href="javaScript:void(0)" @click="paginatePreview" aria-label="Previous">
                      <!-- <span aria-hidden="true">&laquo;</span> -->
                      <span class="">Previous</span>
                    </a>
                  </li>
                  <li class="page-item" v-for="(row, index) in meta.last_page" :key="index"
                    :class="row == meta.current_page ? 'active' : ''">
                    <a class="page-link" href="javaScript:void(0)" @click="paginatePageWise(row)" v-text="row"></a>
                  </li>
                  <li class="page-item" :class="meta.last_page > meta.current_page ? '' : 'disabled'">
                    <a class="page-link" href="javaScript:void(0)" @click="paginateNext" aria-label="Next">
                      <!-- <span aria-hidden="true">&raquo;</span> -->
                      <span class="">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-center text-danger mt-5" v-else>You are not authorized</h2>
    </div>
  </template>
  <script>
  export default {
    layout: "Emp-content",
   
    data() {
      return {
        auth: true,
        employees: "",
        links: "",
        meta: "",
        page: "",
        errors: "",
        base_url: process.env.url
      };
    },
    created() {
      this.getEmployee();  
    },
    methods: {
      getEmployee() {
        this.$axios
          .$get("/employee/show-paginate?page=" + this.page)
          .then((response) => {
            this.employees = response.data;
            this.links = response.data.links;
            this.meta = response;
          })
          .catch((error) => {
            if (error.response.status == 401) {
              this.auth = false;
              this.$toaster.error(error.response.data.message);
            }
            console.log(error);
          });
      },  
      employeeStatus(id) {
        this.$axios
          .$get("/employee/status/" + id)
          .then((res) => {
            this.getEmployee();
            this.$toaster.success(res.message);
          })
          .catch((error) => {
            if (error.response.status == 401) {
              this.$toaster.error(error.response.data.message);
            }
            console.log(error);
          });
      },
      paginatePreview() {
        let page_number = parseInt(this.meta.current_page - 1);
        this.page = page_number;
        this.getEmployee();
      },
  
      paginateNext() {
        let page_number = parseInt(this.meta.current_page + 1);
        this.page = page_number;
        this.getEmployee();
  
      },
  
      paginatePageWise(row) {
        window.scrollTo(0, 0);
        this.page = row;
        this.getEmployee();
      },
    },
  };
  </script>
  <style scoped>
  </style>
  