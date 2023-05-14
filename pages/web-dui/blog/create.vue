<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/web-dui/blog" class="btn-add"> Blog List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="blog.title" />
          <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
        </div>
        <div class="form-group">
          <label for="" class="">Short Description</label>
          <input type="text" class="form-control" placeholder="Short Description" v-model="blog.description" />
          <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
        </div>       
        <div class="form-group">
          <label for="" class="">Image</label>
          <input required type="file" id="blog_image" class="form-control" name="image"
            @change="(e) => (blog.image = e.target.files[0])" accept="image/*" />
          <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addblog()">
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
      blog: {
        title: "",
        image: "",
        description: "",        
      },
      errors: {},
    };
  },
  methods: {
    addblog() {
      let formData = new FormData();
      formData.append('title', this.blog.title)
      formData.append('description', this.blog.description)      
      formData.append('image', this.blog.image)
      this.$axios
        .$post("/blog/add", formData)
        .then((res) => {
          this.blog = "";
          this.errors = {};
          this.$toaster.success("Blog Added Successfully");
          this.$router.push("/web-dui/blog");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
