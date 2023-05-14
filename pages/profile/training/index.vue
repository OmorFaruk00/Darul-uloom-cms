<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">training List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/profile/training/create" class="btn-add">Add training</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered text-center">
                <thead>
                  <tr>                   
                    <th>Sl</th>
                    <th>Training Name</th>
                    <th>Institute Name</th>
                    <th>Duration</th>
                    <th>Training Year</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(training,index) in trainings" :key="index">
                    <td>{{ index +1}}</td>
                    <td>{{ training.training_name}}</td>
                    <td>{{ training.institute_name }}</td>                  
                    <td>{{ training.duration}}</td>                  
                    <td>{{ training.training_year }}</td>                  
                    <td>
                      <button class="btn-edit" @click="trainingEdit(training.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="trainingDelete(training.id)">
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
      <div class="modal fade" id="trainingUpdate" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="title">
                training Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-horizontal">
                 <div class="form-row">
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Training Name</label>
                    <input v-model="training.training_name" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.training_name" v-text="errors.training_name[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Duration</label>
                    <input v-model="training.duration" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.duration" v-text="errors.duration[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Training Year</label>
                    <input v-model="training.training_year" type="text" class="form-control" placeholder="Ex-yyyy-mm-dd" />
                    <h6 v-if="errors.training_year" v-text="errors.training_year[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Institute Name</label>
                    <input v-model="training.institute_name" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.institute_name" v-text="errors.institute_name[0]" class="text-danger"></h6>
                </div>



            </div>


              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn-submit" @click="trainingUpdate()">
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
    this.getTraining();

  },
  data() {
    return {
      trainings: '',
      training: {
          training_name: "",
          duration: "",
          training_year: "",
          institute_name: "",
      },
      errors: {},
    };
  },
  methods: {
    getTraining() {
      this.$axios
        .$get("/training/show")
        .then((res) => {
          console.log(res);
          this.trainings = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    trainingEdit(id) {
      $("#trainingUpdate").modal("show");
      this.$axios
        .$get("/training/edit/" + id)
        .then((res) => {
          this.training = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    trainingUpdate() {
      this.$axios
        .$post("/training/update/" + this.training.id, this.training)
        .then((res) => {
          this.getTraining();
          $("#trainingUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";


        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    trainingDelete(id) {
      if (confirm("Are you sure to delete this training?")) {
        this.$axios
          .$get("/training/delete/" + id)
          .then((res) => {
            this.getTraining();
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
<style scoped>
</style>
