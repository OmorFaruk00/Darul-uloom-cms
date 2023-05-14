<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">event List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/web-dui/event/create" class="btn-add">Add event</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Sl </th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(event, index) in events" :key="index">
                    <td>{{ index +1 }}</td>
                    <td>{{ event.title }}</td>
                    <td>{{ event.description }}</td>
                    <td><img :src="base_url + '/images/dum/' + event.image" alt="image" style="height:80px" />
                    </td>
                    <td>
                      <button v-if="event.status == 1" class="btn-active" @click="eventStatus(event.id)">
                        Active
                      </button>
                      <button v-if="event.status == 0" class="btn-inactive" @click="eventStatus(event.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="eventEdit(event.id)">Edit</button>
                      <button class="btn-delete" @click="deleteevent(event.id)">
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
      <div class="modal fade" id="eventUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">event Update</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Title</label>
                <input type="text" class="form-control" id="name" placeholder="Title" v-model="event.title" />
                <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label for="" class="">Short Description</label>
                <input type="text" class="form-control" id="name" placeholder="Short Description"
                  v-model="event.description" />
                <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label for="" class="">Image</label>
                <input required type="file" id="event_image" class="" name="image"
                  @change="(e) => (event.new_image = e.target.files[0])" accept="image/*" />
                <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="button" class="btn-submit" @click="eventUpdate()">Update</button>
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
    this.getevent();
  },
  data() {
    return {
      auth:true,
      events: [],
      event: {
        title: "",
        description: "",
        new_image: "",
        slug: "",
      },
      errors: {},
      base_url: process.env.url,
    };
  },
  methods: {
    getevent() {
      this.$axios
        .$get("/event/show")
        .then((res) => {
          this.events = res;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    eventEdit(id) {
      $("#eventUpdate").modal("show");
      this.$axios
        .$get("/event/edit/" + id)
        .then((res) => {
          this.event = res;

        })
        .catch((error) => {

          console.log(error.response.data);
        });

    },
    eventUpdate() {
      let formData = new FormData();
      formData.append('title', this.event.title)
      formData.append('description', this.event.description)
      if (this.event.new_image) {
        formData.append('image', this.event.new_image)
      }

      this.$axios
        .$post("/event/update/" + this.event.id, formData)
        .then((res) => {
          this.getevent();
          $("#eventUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deleteevent(id) {
      if (confirm("Are you sure to delete this event?")) {
        this.$axios
          .$get("/event/delete/" + id)
          .then((res) => {
            this.getevent();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    },
    eventStatus(id) {
      this.$axios
        .$get("/event/status/" + id)
        .then((res) => {
          this.getevent();
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
