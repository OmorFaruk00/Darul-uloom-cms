<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">department List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/admission/department/create" class="btn-add">Add department</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Department name</th>                    
                    <th>Status</th>
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="department in departments" :key="department._id">
                    <td>{{ department.id }}</td>
                    <td>{{ department.department_name }}</td>                    
                    <td>
                      <button v-if="department.status == 1" class="btn-active" @click="departmentStatus(department.id)">
                        Active
                      </button>
                      <button v-if="department.status == 0" class="btn-inactive" @click="departmentStatus(department.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="departmentEdit(department.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="deletedepartment(department.id)">
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
      <div class="modal fade" id="departmentUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Department Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Department Name</label>
                <input type="text" class="form-control" id="name" placeholder="Title" v-model="department.department_name" />
                <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
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
  </div>
</template>
<script>
export default {
  layout: "Adm-content",
  mounted() {
    this.getdepartment();
  },
  data() {
    return {
      departments: [],
      department: {
        department_name: "",
       
      },
      errors: {},
    };
  },
  methods: {
    getdepartment() {
      this.$axios
        .$get("/admission/department-show")
        .then((res) => {
          this.departments = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    departmentEdit(id) {
      $("#departmentUpdate").modal("show");
      this.$axios
        .$get("/admission/department-edit/" + id)
        .then((res) => {
          this.department = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    departmentUpdate() {
      this.$axios
        .$post("/admission/department-update/" + this.department.id, this.department)
        .then((res) => {
          this.getdepartment();
          $("#departmentUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deletedepartment(id) {
      if (confirm("Are you sure to delete this department?")) {
        this.$axios
          .$get("/admission/department-delete/" + id)
          .then((res) => {
            this.getdepartment();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    departmentStatus(id) {
      this.$axios
        .$get("/admission/department-status/" + id)
        .then((res) => {
          this.getdepartment();
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
