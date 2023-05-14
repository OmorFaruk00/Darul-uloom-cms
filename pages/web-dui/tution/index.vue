<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">tution List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/web-dui/tution/create" class="btn-add">Add tution</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name Of Program</th>
                    <th>Duration</th>
                    <th>Type</th>
                    <th>Total Fee</th>
                    <th>Status</th>
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(tution, index) in tutions" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ tution.name_of_program }}</td>
                    <td>{{ tution.duration }}</td>
                    <td>{{ tution.type }}</td>
                    <td>{{ tution.total_fee }}</td>
                    <td>
                      <button v-if="tution.status == 1" class="btn-active" @click="tutionStatus(tution.id)">
                        Active
                      </button>
                      <button v-if="tution.status == 0" class="btn-inactive" @click="tutionStatus(tution.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="tutionEdit(tution.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="deletetution(tution.id)">
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
      <div class="modal fade" id="tutionUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Tution Fee Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Name Of Program</label>
                <select class="form-control" v-model="tution.name_of_program">
                  <option disabled selected value="">Select Program</option>
                  <option :value="program.name" v-for="program in programs" :key="program.id">{{ program.name }}
                  </option>

                </select>
                <p v-if="errors.name_of_program" v-text="errors.name_of_program[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label>Type</label>
                <select class="form-control" v-model="tution.type">
                  <option disabled selected value="">Select Type</option>
                  <option value="residential">Residential</option>
                  <option value="non_residential">Non Residential</option>
                  <option value="day_care">Day Care</option>
                </select>
                <h6 v-if="errors.type" v-text="errors.type[0]" class="text-danger"></h6>
              </div>
              <div class="form-group">
                <label>Duration</label>
                <select class="form-control" v-model="tution.duration">
                  <option disabled selected value="">Select Duration</option>
                  <option :value="program.duration" v-for="program in programs" :key="program.id">{{ program.duration }}
                  </option>

                </select>
                <h6 v-if="errors.duration" v-text="errors.duration[0]" class="text-danger"></h6>
              </div>
              <div class="form-group">
                <label for="" class="">Total Fee</label>
                <input type="text" class="form-control" id="name_of_program" placeholder="Total Fee"
                  v-model="tution.total_fee" />
                <p v-if="errors.total_fee" v-text="errors.total_fee[0]" class="text-danger"></p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-submit" @click="tutionUpdate()">
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
  layout: "Web-content",
  mounted() {
    this.getTution();
    this.getProgram();
  },
  data() {
    return {
      auth: true,
      tutions: [],
      tution: {
        name_of_program: "",
        duration: "",
        type: "",
        total_fee: "",
      },
      errors: {},
      programs: '',
    };
  },
  methods: {
    getProgram() {
      this.$axios
        .$get("/program/show")
        .then((res) => {
          this.programs = res;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    getTution() {
      this.$axios
        .$get("/tution/show")
        .then((res) => {
          console.log(res);
          this.tutions = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tutionEdit(id) {
      $("#tutionUpdate").modal("show");
      this.$axios
        .$get("/tution/edit/" + id)
        .then((res) => {
          this.tution = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tutionUpdate() {
      this.$axios
        .$post("/tution/update/" + this.tution.id, this.tution)
        .then((res) => {
          this.getTution();
          $("#tutionUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deletetution(id) {
      if (confirm("Are you sure to delete this tution?")) {
        this.$axios
          .$get("/tution/delete/" + id)
          .then((res) => {
            this.getTution();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    tutionStatus(id) {
      this.$axios
        .$get("/tution/status/" + id)
        .then((res) => {
          this.getTution();
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
