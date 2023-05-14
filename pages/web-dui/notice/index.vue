<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">notice List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/web-dui/notice/create" class="btn-add">Add notice</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(notice,index) in notices" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ notice.title }}</td>
                    <td>{{ notice.description }}</td>
                    <td><img :src="base_url + '/images/dum/' + notice.image" alt="image" style="height:80px" />
                    </td>
                    <td>
                      <button v-if="notice.status == 1" class="btn-active" @click="noticeStatus(notice.id)">
                        Active
                      </button>
                      <button v-if="notice.status == 0" class="btn-inactive" @click="noticeStatus(notice.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="noticeEdit(notice.id)">Edit</button>
                      <button class="btn-delete" @click="deletenotice(notice.id)">
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
      <div class="modal fade" id="noticeUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Notice Update</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Title</label>
                <input type="text" class="form-control" id="name" placeholder="Title" v-model="notice.title" />
                <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label for="" class="">Short Description</label>
                <input type="text" class="form-control" id="name" placeholder="Short Description"
                  v-model="notice.description" />
                <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
              </div>
              <div class="form-group">
                <label for="" class="">Image</label>
                <input required type="file" id="notice_image" class="" name="image"
                  @change="(e) => (notice.new_image = e.target.files[0])" accept="image/*" />
                <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="button" class="btn-submit" @click="noticeUpdate()">Update</button>
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
    this.getnotice();
  },
  data() {
    return {
      notices: [],
      auth:true,
      notice: {
        title: "",
        description: "",
        new_image: "",
        slug: "",
      },
      errors: {},
      base_url: process.env.url
    };
  },
  methods: {
    getnotice() {
      this.$axios
        .$get("/notice/show")
        .then((res) => {
          this.notices = res;
        })
        .catch((error) => {
            if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    noticeEdit(id) {
      $("#noticeUpdate").modal("show");
      this.$axios
        .$get("/notice/edit/" + id)
        .then((res) => {
          this.notice = res;

        })
        .catch((err) => {
          console.log(err);
        });

    },
    noticeUpdate() {
      let formData = new FormData();
      formData.append('title', this.notice.title)
      formData.append('description', this.notice.description)
      if (this.notice.new_image) {
        formData.append('image', this.notice.new_image)
      }

      this.$axios
        .$post("/notice/update/" + this.notice.id, formData)
        .then((res) => {
          this.getnotice();
          $("#noticeUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deletenotice(id) {
      if (confirm("Are you sure to delete this notice?")) {
        this.$axios
          .$get("/notice/delete/" + id)
          .then((res) => {
            this.getnotice();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    },
    noticeStatus(id) {
      this.$axios
        .$get("/notice/status/" + id)
        .then((res) => {
          this.getnotice();
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
