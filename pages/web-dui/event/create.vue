<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/web-dui/event" class="btn-add"> event List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="event.title" />
          <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
        </div>
        <div class="form-group">
          <label for="" class="">Description</label>
          <input type="text" class="form-control" placeholder="Short Description" v-model="event.description" />
          <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
        </div>       
        <div class="form-group">
          <label for="" class="">Image</label>
          <input required type="file" id="event_image" class="form-control" name="image"
            @change="(e) => (event.image = e.target.files[0])" accept="image/*" />
          <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addevent()">
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
      event: {
        title: "",
        image: "",
        description: "",
       
      },
      errors: {},
    };
  },
  methods: {
    addevent() {
      let formData = new FormData();
      formData.append('title', this.event.title)
      formData.append('description', this.event.description)      
      formData.append('image', this.event.image)
      this.$axios
        .$post("/event/add", formData)
        .then((res) => {
          this.event = "";
          this.errors = {};
          this.$toaster.success("Event Added Successfully");
          this.$router.push("/web-dui/event");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
