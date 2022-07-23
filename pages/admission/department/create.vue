<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <!-- <nuxt-link to="/dum-ac/department" class="btn-add"> Department List</nuxt-link> -->
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Department Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter Department Name"
            v-model="department.department_name" />
          <p v-if="errors.department_name" v-text="errors.department_name[0]" class="text-danger"></p>
        </div>
        <!-- <div class="form-group">
          <label for="" class="">Description</label>
          <input type="text" class="form-control" id="name" placeholder="Description" v-model="department.description" />
          <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
        </div> -->

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="adddepartment()">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Adm-content",
  data() {
    return {
      department: {
        department_name: "",

      },
      errors: {},
    };
  },
  methods: {
    adddepartment() {
      this.$axios
        .$post("/admission/department-add", this.department)
        .then((res) => {
          this.department = "";
          this.errors = {};
          this.$toaster.success(res.message);
          this.$router.push("/admission/department");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
