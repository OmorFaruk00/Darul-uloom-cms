<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/web-dui/program" class="btn-add"> program List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Program Name</label>
          <input type="text" class="form-control" placeholder="Program Name" v-model="program.name" />
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
            @change="(e) => (program.image = e.target.files[0])" accept="image/*" />
          <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addprogram()">
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
      program: {
        name: "",
        image: "",
        duration: "",
      },
      errors: {},
    };
  },
  methods: {
    addprogram() {
      let formData = new FormData();
      formData.append('name', this.program.name)
      formData.append('duration', this.program.duration)
      formData.append('image', this.program.image)
      this.$axios
        .$post("/program/add", formData)
        .then((res) => {
          this.program = "";
          this.errors = {};
          this.$toaster.success("program Added Successfully");
          this.$router.push("/web-dui/program");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
