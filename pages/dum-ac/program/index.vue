<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Program List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/dum-ac/program/create" class="btn-add">Add program</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped  text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Program name</th>
                    <th>Duration</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="program in programs" :key="program._id">
                    <td>{{ program.id }}</td>
                    <td>{{ program.name }}</td>
                    <td>{{ program.duration }}</td>
                    <td><img :src="base_url + '/images/dum/' + program.image" alt="image" style="height:80px" />
                    </td>
                    <td>
                      <button v-if="program.status == 1" class="btn-active" @click="programStatus(program.id)">
                        Active
                      </button>
                      <button v-if="program.status == 0" class="btn-inactive" @click="programStatus(program.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="programEdit(program.id)">Edit</button>
                      <button class="btn-delete" @click="deleteprogram(program.id)">
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
      <div class="modal fade" id="programUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">program Update</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Title</label>
                <input type="text" class="form-control" id="name" placeholder="Title" v-model="program.name" />
                <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label>Duration</label>
                <select class="form-control" v-model="program.duration">
                  <option disabled selected value="">Select Duration</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Year">2 Year</option>
                  <option value="3 Year">3 Year</option>
                  <option value="4 Year">4 Year</option>

                </select>
                <h6 v-if="errors.duration" v-text="errors.duration[0]" class="text-danger"></h6>
              </div>
              <div class="form-group">
                <label for="" class="">Image</label>
                <input required type="file" id="program_image" class="form-control" name="image"
                  @change="(e) => (program.new_image = e.target.files[0])" accept="image/*" />
                <p v-if="errors.image" v-text="errors.new_image[0]" class="text-danger"></p>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="button" class="btn btn-submit" @click="programUpdate()">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Dum-content",
  mounted() {
    this.getprogram();
  },
  data() {
    return {
      programs: [],
      program: {
        name: "",
        duration: "",
        new_image: "",

      },
      errors: {},
      base_url: process.env.url
    };
  },
  methods: {
    getprogram() {
      this.$axios
        .$get("/program/show")
        .then((res) => {
          this.programs = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    programEdit(id) {
      $("#programUpdate").modal("show");
      this.$axios
        .$get("/program/edit/" + id)
        .then((res) => {
          this.program = res;

        })
        .catch((err) => {
          console.log(err);
        });

    },
    programUpdate() {
      let formData = new FormData();
      formData.append('name', this.program.name)
      formData.append('duration', this.program.duration)
      if (this.program.new_image) {
        formData.append('image', this.program.new_image)
      }
      this.$axios
        .$post("/program/update/" + this.program.id, formData)
        .then((res) => {
          this.getprogram();
          $("#programUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deleteprogram(id) {
      if (confirm("Are you sure to delete this program?")) {
        this.$axios
          .$get("/program/delete/" + id)
          .then((res) => {
            this.getprogram();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    },
    programStatus(id, status) {
      this.$axios
        .$get("/program/status/" + id)
        .then((res) => {
          this.getprogram();
          this.$toaster.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },









  }
};
</script>
<style scoped>
</style>
