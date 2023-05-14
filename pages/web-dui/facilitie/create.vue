<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/web-dui/facilitie" class="btn-add"> Facilitie List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input type="text" class="form-control" id="name" placeholder="Title" v-model="facilitie.title" />
          <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
        </div>
        <div class="form-group">
          <label for="" class="">Description</label>
          <input type="text" class="form-control" id="name" placeholder="Description" v-model="facilitie.description" />
          <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addFacilitie()">
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
      facilitie: {
        title: "",
        description: "",
        created_by: this.$auth.user.name,
      },
      errors: {},
    };
  },
  methods: {
    addFacilitie() {
      this.$axios
        .$post("/facilitie/add", this.facilitie)
        .then((res) => {
          this.facilitie = "";
          this.errors = {};
          this.$toaster.success(res.message);
          this.$router.push("/web-dui/facilitie");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
