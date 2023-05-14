<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Facilities List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/web-dui/facilitie/create" class="btn-add">Add Facilitie</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(facilitie, index) in facilities" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ facilitie.title }}</td>
                    <td>{{ facilitie.description }}</td>
                    <td>
                      <button v-if="facilitie.status == 1" class="btn-active" @click="facilitieStatus(facilitie.id)">
                        Active
                      </button>
                      <button v-if="facilitie.status == 0" class="btn-inactive" @click="facilitieStatus(facilitie.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="facilitieEdit(facilitie.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="deletefacilitie(facilitie.id)">
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
      <div class="modal fade" id="facilitieUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Facilitie Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Title</label>
                <input type="text" class="form-control" id="name" placeholder="Title" v-model="facilitie.title" />
                <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label for="" class="">Description</label>
                <input type="text" class="form-control" id="name" placeholder="Description"
                  v-model="facilitie.description" />
                <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-submit" @click="facilitieUpdate()">
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
    this.getfacilitie();
  },
  data() {
    return {
      auth: true,
      facilities: [],
      facilitie: {
        title: "",
        description: "",
      },
      errors: {},
    };
  },
  methods: {
    getfacilitie() {
      this.$axios
        .$get("/facilitie/show")
        .then((res) => {
          this.facilities = res;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    facilitieEdit(id) {
      $("#facilitieUpdate").modal("show");
      this.$axios
        .$get("/facilitie/edit/" + id)
        .then((res) => {
          this.facilitie = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    facilitieUpdate() {
      this.$axios
        .$post("/facilitie/update/" + this.facilitie.id, this.facilitie)
        .then((res) => {
          this.getfacilitie();
          $("#facilitieUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deletefacilitie(id) {
      if (confirm("Are you sure to delete this Facilitie?")) {
        this.$axios
          .$get("/facilitie/delete/" + id)
          .then((res) => {
            this.getfacilitie();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    facilitieStatus(id) {
      this.$axios
        .$get("/facilitie/status/" + id)
        .then((res) => {
          this.getfacilitie();
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
