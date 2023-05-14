<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/web-dui/notice" class="btn-add"> notice List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="notice.title" />
          <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
        </div>
        <div class="form-group">
          <label for="" class="">Short Description</label>
          <input type="text" class="form-control" placeholder="Short Description" v-model="notice.description" />
          <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
        </div>       
        <div class="form-group">
          <label for="" class="">Image</label>
          <input required type="file" id="notice_image" class="form-control" name="image"
            @change="(e) => (notice.image = e.target.files[0])" accept="image/*" />
          <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addnotice()">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Web-content",
  data() {
    return {
      notice: {
        title: "",
        image: "",
        description: "",        
      },
      errors: {},
    };
  },
  methods: {
    addnotice() {
      let formData = new FormData();
      formData.append('title', this.notice.title)
      formData.append('description', this.notice.description)      
      formData.append('image', this.notice.image)
      this.$axios
        .$post("/notice/add", formData)
        .then((res) => {
          this.notice = "";
          this.errors = {};
          this.$toaster.success("Notice Added Successfully");
          this.$router.push("/web-dui/notice");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
