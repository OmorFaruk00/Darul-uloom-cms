<template>
  <div>
    <div class="pt-5" v-if="auth" >
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">designation List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/employee/designation/create" class="btn-add">Add designation</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive" v-if="designations">
              <table class="table table-striped table-bordered text-center">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Type</th>
                    <th>Designation Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(designation,index) in designations" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ designation.type }}</td>
                    <td>{{ designation.designation }}</td>
                    <td>
                      <button v-if="designation.status == 1" class="btn-active"
                        @click="designationStatus(designation.id)">
                        Active
                      </button>
                      <button v-if="designation.status == 0" class="btn-inactive"
                        @click="designationStatus(designation.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="designationEdit(designation.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="designationDelete(designation.id)">
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
      <div class="modal fade" id="designationUpdate" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="title">
                designation Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-horizontal">
                <div class="form-group">
                  <label>Type</label>
                  <select class="form-control" v-model="designation.type">
                    <option disabled selected value="">Select Type</option>
                    <option value="Academic">Academic</option>
                    <option value="Non Academic">Non Academic</option>
                  </select>
                  <h6 v-if="errors.type" v-text="errors.type[0]" class="text-danger"></h6>
                </div>
                <div class="form-group">
                  <label>designation Name </label>
                  <input type="text" class="form-control" placeholder="designation Name "
                    v-model="designation.designation" />
                </div>
                <h6 v-if="errors.designation" v-text="errors.designation[0]" class="text-danger"></h6>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-submit" @click="designationUpdate()">
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
    this.getDesignation();

  },
  data() {
    return {
      auth:true,
      designations: '',
      designation: {
        type: "",
        name: '',
      },
      errors: {},
    };
  },
  methods: {
    getDesignation() {
      this.$axios
        .$get("/designation/show")
        .then((res) => {
          this.designations = res;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    designationEdit(id) {
      $("#designationUpdate").modal("show");
      this.$axios
        .$get("/designation/edit/" + id)
        .then((res) => {
          this.designation = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    designationUpdate() {
      this.$axios
        .$post("/designation/update/" + this.designation.id, this.designation)
        .then((res) => {
          this.getDesignation();
          $("#designationUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";


        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    designationDelete(id) {
      if (confirm("Are you sure to delete this designation?")) {
        this.$axios
          .$get("/designation/delete/" + id)
          .then((res) => {
            this.getDesignation();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    designationStatus(id) {
      this.$axios
        .$get("/designation/status/" + id)
        .then((res) => {
          console.log(res);
          this.getDesignation();
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
