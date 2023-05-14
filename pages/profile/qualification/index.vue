<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Qualification List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/profile/qualification/create" class="btn-add">Add qualification</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered text-center">
                <thead>
                  <tr>                   
                    <th>SL</th>
                    <th>Degree Name</th>
                    <th>Institute Name</th>
                    <th>Department</th>
                    <th>Passsing Year</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(qualification, index ) in qualifications" :key="index">
                    <td>{{ index +1}}</td>
                    <td>{{ qualification.degree_name}}</td>
                    <td>{{ qualification.institute_name }}</td>                  
                    <td>{{ qualification.subject}}</td>                  
                    <td>{{ qualification.passing_year }}</td>                  
                    <td>
                      <button class="btn-edit" @click="qualificationEdit(qualification.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="qualificationDelete(qualification.id)">
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
      <div class="modal fade" id="qualificationUpdate" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="title">
                qualification Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-horizontal">
                 <div class="form-row">
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Degree Name</label>
                    <input v-model="qualification.degree_name" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.degree_name" v-text="errors.degree_name[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Department Name</label>
                    <input v-model="qualification.subject" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.subject_name" v-text="errors.subject_name[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Passing Year</label>
                    <input v-model="qualification.passing_year" type="text" class="form-control" placeholder="Ex-yyyy-mm-dd" />
                    <h6 v-if="errors.passing_year" v-text="errors.passing_year[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Institute Name</label>
                    <input v-model="qualification.institute_name" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.institute_name" v-text="errors.institute_name[0]" class="text-danger"></h6>
                </div>



            </div>


              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn-submit" @click="qualificationUpdate()">
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
  layout: "Profile-content",
  mounted() {
    this.getqualification();

  },
  data() {
    return {
      qualifications: '',
      qualification: {
          degree_name: "",
          subject: "",
          passing_year: "",
          institute_name: "",
      },
      errors: {},
    };
  },
  methods: {
    getqualification() {
      this.$axios
        .$get("/qualification/show")
        .then((res) => {
          console.log(res);
          this.qualifications = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    qualificationEdit(id) {
      $("#qualificationUpdate").modal("show");
      this.$axios
        .$get("/qualification/edit/" + id)
        .then((res) => {
          this.qualification = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    qualificationUpdate() {
      this.$axios
        .$post("/qualification/update/" + this.qualification.id, this.qualification)
        .then((res) => {
          this.getqualification();
          $("#qualificationUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";


        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    qualificationDelete(id) {
      if (confirm("Are you sure to delete this qualification?")) {
        this.$axios
          .$get("/qualification/delete/" + id)
          .then((res) => {
            this.getqualification();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    qualificationStatus(id) {
      this.$axios
        .$get("/qualification/status/" + id)
        .then((res) => {
          console.log(res);
          this.getqualification();
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
