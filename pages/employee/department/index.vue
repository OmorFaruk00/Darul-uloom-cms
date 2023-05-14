<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Department List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/employee/department/create" class="btn-add">Add Department</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive" v-if="departments">
             <table class="table table-striped table-bordered text-center">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Type</th>
                    <th>Department Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(department,index) in departments" :key="index">
                    <td>{{ index +1}}</td>
                    <td>{{ department.type }}</td>
                    <td>{{ department.department }}</td>
                    <td>
                      <button v-if="department.status == 1" class="btn-active" @click="departmentStatus(department.id)">
                        Active
                      </button>
                      <button v-if="department.status == 0" class="btn-inactive"
                        @click="departmentStatus(department.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="departmentEdit(department.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="departmentDelete(department.id)">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="departmentUpdate" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="title">
                Department Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-horizontal">
                <div class="form-group">
                  <label>Type</label>
                  <select class="form-control" v-model="department.type">
                    <option disabled selected value="">Select Type</option>
                    <option value="Academic">Academic</option>
                    <option value="Non Academic">Non Academic</option>
                  </select>
                  <h6 v-if="errors.type" v-text="errors.type[0]" class="text-danger"></h6>
                </div>
                <div class="form-group">
                  <label>Department Name </label>
                  <input type="text" class="form-control" placeholder="Department Name "
                    v-model="department.department" />
                </div>
                <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger"></h6>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-submit" @click="departmentUpdate()">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
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
      departments: '',
      department: {
        type: "",
        name: '',
      },
      errors: {},
    };
  },
  methods: {
    getDepartment() {
      this.$axios
        .$get("/department/show")
        .then((res) => {
          this.departments = res;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    departmentEdit(id) {
      $("#departmentUpdate").modal("show");
      this.$axios
        .$get("/department/edit/" + id)
        .then((res) => {
          this.department = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    departmentUpdate() {
      this.$axios
        .$post("/department/update/" + this.department.id, this.department)
        .then((res) => {
          this.getDepartment();
          $("#departmentUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";


        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    departmentDelete(id) {
      if (confirm("Are you sure to delete this department?")) {
        this.$axios
          .$get("/department/delete/" + id)
          .then((res) => {
            this.getDepartment();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    departmentStatus(id) {
      this.$axios
        .$get("/department/status/" + id)
        .then((res) => {
          console.log(res);
          this.getDepartment();
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
