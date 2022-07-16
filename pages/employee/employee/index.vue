<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h6 class="title">Employee List</h6>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/employee/employee/create" class="btn-add">Add Employee</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead>
                  <tr>
                    <!-- <th>SL</th> -->
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Depertment</th>
                    <th>E-mail</th>
                    <th>Job Type</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="employee in employees" :key="employee._id">
                    <!-- <td>{{ employee.id}}</td> -->
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.rel_designation.designation }}</td>
                    <td>{{ employee.rel_department.department }}</td>
                    <td>{{ employee.email }}</td>
                    <td>{{ employee.jobtype }}</td>
                    <td><img :src="'http://localhost:8000/images/emp/' + employee.profile_photo" alt="image" style="height:80px" /></td>
                    <td>
                      <button v-if="employee.status == 1" class="btn-active" @click="employeeStatus(employee.id)">
                        Active
                      </button>
                      <button v-if="employee.status == 0" class="btn-inactive" @click="employeeStatus(employee.id)">
                        Inactive
                      </button>
                    </td>
                    <td class="pt-3">
                      <nuxt-link :to="`/employee/employee/update/${employee.id}`" class="btn-edit">Edit</nuxt-link>
                      <nuxt-link :to="`/employee/employee/detail/${employee.id}`" class="btn-details">Details</nuxt-link>

                      <!-- <button class="btn-delete " @click="employeeDelete(employee.id)">
                        Delete
                      </button> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  </div>
</template>
<script>
export default {
  layout: "Emp-content",
  mounted() {
    this.getEmployee();

  },
  data() {
    return {
      employees: [],
      errors: {},
    };
  },
  methods: {
    getEmployee() {
      this.$axios
        .$get("/employee/show")
        .then((res) => {
          this.employees = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },    
    employeeDelete(id) {
      if (confirm("Are you sure to delete this employee?")) {
        this.$axios
          .$get("/employee/delete/" + id)
          .then((res) => {
            this.getEmployee();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    employeeStatus(id, status) {
      this.$axios
        .$get("/employee/status/" + id)
        .then((res) => {
          this.getEmployee();
          this.$toaster.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>
