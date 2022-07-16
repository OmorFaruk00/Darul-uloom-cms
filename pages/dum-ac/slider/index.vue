<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Slider List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/dum-ac/slider/create" class="btn-add">Add slider</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped  text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="slider in sliders" :key="slider._id">
                    <td>{{ slider.id }}</td>
                    <td>{{ slider.title }}</td>
                    <td>{{ slider.description }}</td>
                    <td><img :src="base_url + '/images/dum/' + slider.image" alt="image" style="height:80px" />
                    </td>
                    <td>
                      <button v-if="slider.status == 1" class="btn-active" @click="sliderStatus(slider.id)">
                        Active
                      </button>
                      <button v-if="slider.status == 0" class="btn-inactive" @click="sliderStatus(slider.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="sliderEdit(slider.id)">Edit</button>
                      <button class="btn-delete" @click="deleteslider(slider.id)">
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
      <div class="modal fade" id="sliderUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Slider Update</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Title</label>
                <input type="text" class="form-control" id="name" placeholder="Title" v-model="slider.title" />
                <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label for="" class="">Short Description</label>
                <input type="text" class="form-control" id="name" placeholder="Short Description"
                  v-model="slider.description" />
                <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label for="" class="">Image</label>
                <input required type="file" id="slider_image" class="" name="image"
                  @change="(e) => (slider.image = e.target.files[0])" accept="image/*" />
                <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="button" class="btn btn-submit" @click="sliderUpdate()">Update</button>
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
    this.getslider();
  },
  data() {
    return {
      sliders: [],
      slider: {
        title: "",
        description: "",
        image: "",
        slug: "",
      },
      errors: {},
      base_url: process.env.url
    };
  },
  methods: {
    getslider() {
      this.$axios
        .$get("/slider/show")
        .then((res) => {
          this.sliders = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sliderEdit(id) {
      $("#sliderUpdate").modal("show");
      this.$axios
        .$get("/slider/edit/" + id)
        .then((res) => {
          this.slider = res;

        })
        .catch((err) => {
          console.log(err);
        });

    },
    sliderUpdate() {
      let formData = new FormData();
      formData.append('title', this.slider.title)
      formData.append('description', this.slider.description)
      formData.append('image', this.slider.image)
      this.$axios
        .$post("/slider/update/" + this.slider.id, formData)
        .then((res) => {
          this.getslider();
          $("#sliderUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deleteslider(id) {
      if (confirm("Are you sure to delete this slider?")) {
        this.$axios
          .$get("/slider/delete/" + id)
          .then((res) => {
            this.getslider();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    },
    sliderStatus(id) {
      this.$axios
        .$get("/slider/status/" + id)
        .then((res) => {
          this.getslider();
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
