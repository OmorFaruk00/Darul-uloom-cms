<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/web-dui/slider" class="btn-add"> Slider List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="slider.title" />
          <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
        </div>
        <div class="form-group">
          <label for="" class="">Short Description</label>
          <input type="text" class="form-control" placeholder="Short Description" v-model="slider.description" />
          <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
        </div>       
        <div class="form-group">
          <label for="" class="">Image</label>
          <input required type="file" id="slider_image" class="form-control" name="image"
            @change="(e) => (slider.image = e.target.files[0])" accept="image/*" />
          <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addslider()">
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
      slider: {
        title: "",
        image: "",
        description: "",
        slug: "",
      },
      errors: {},
    };
  },
  methods: {
    addslider() {
      let formData = new FormData();
      formData.append('title', this.slider.title)
      formData.append('description', this.slider.description)
      formData.append('slug', this.slider.slug)
      formData.append('image', this.slider.image)
      this.$axios
        .$post("/slider/add", formData)
        .then((res) => {
          this.slider = "";
          this.errors = {};
          this.$toaster.success("Slider Added Successfully");
          this.$router.push("/web-dui/slider");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
