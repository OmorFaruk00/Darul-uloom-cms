<template>
  <div>
    <div class="col-md-4 mt-5 mx-auto d-flex">
      <input
        type="text"
        class="form-control select"
        placeholder="Enter Reg/Name"
        v-model="search_item"
      />
      <button class="btn-submit ml-3" @click="studentSearch()">Search</button>
    </div>
    <div v-if="show">
      <div class="panel-body table-responsive pt-5" v-if="students.length > 0">
        <table class="table table-stripedn table-bordered" v-if="students">
          <thead class="bg-dark text-white">
            <tr>
              <th>Serial</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Reg. Code</th>
              <th>Image</th>
              <th>Action</th>

              <!-- <th>Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in students" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ student.id }}</td>
              <td>{{ student.student_name_english }}</td>
              <td>{{ student.roll_no }}</td>
              <td>{{ student.reg_no }}</td>
              <td>
                <img
                  :src="base_url + '/images/student_photo/' + student.s_photo"
                  alt="image"
                  style="height: 80px; width: 100px"
                />
              </td>

              <td>
                <a
                  :href="base_url + '/images/student_photo/' + student.s_photo"
                  :download="
                    base_url + '/images/student_photo/' + student.s_photo
                  "
                  class="btn btn-warning mr-2"
                  target="_blank"
                >
                  Download Image
                </a>

                <a
                  href="#"
                  class="btn btn-info"
                  @click="updateImage(student.id)"
                  >Update Image</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Modal -->
        <div
          class="modal fade"
          id="imageUploadModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Image</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!-- Image upload form -->
                <form @submit.prevent="uploadImage">
                  <div class="form-group">
                    <label for="imageUpload">Choose Image</label>
                    <input
                      type="file"
                      class="form-control"
                      id="imageUpload"
                      @change="onFileChange"
                    />
                    <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary float-right"
                    :disabled="!image"
                  >
                    Update Image
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center mt-5">Student Not Found</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Student-content",
  data() {
    return {
      show: false,
      students: "",
      search_item: "",
      base_url: process.env.url,
      student_id: "",
      image: null,
      errors:"",
    };
  },
  methods: {
    studentSearch() {
      this.$axios
        .$get("/admission/search-student/" + this.search_item)
        .then((response) => {
          this.show = true;
          this.students = response;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    updateImage(id) {
      this.student_id = id;
      $("#imageUploadModal").modal("show");
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.image = file;
      }
    },
    uploadImage() {
     

      const formData = new FormData();
      formData.append("image", this.image);
      this.$axios
        .$post("/admission/student/update-image/" + this.student_id, formData)
        .then((res) => {
          this.$toaster.success("Image Update Successfully");
          $("#imageUploadModal").modal("hide");
          this.studentSearch();
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.$toaster.error(error.response.data.message);
          }
          this.errors = error.response.data.errors;
        });
    },
  },
    //   mounted() {
    //   this.studentSearch();

    // },
};
</script>
<style>
.select {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
}
</style>