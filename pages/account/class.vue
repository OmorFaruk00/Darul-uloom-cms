<template>
  <div class="py-2">
    <h3>Create Class</h3>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="createClass">
          <div class="form-group">
            <label for="inputAddress2">Class Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Class Name"
            />
            <span class="text-danger" v-if="error && error.name">{{
              error.name[0]
            }}</span>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Admission Fee</label>
            <input
              v-model="admissionFee"
              type="number"
              class="form-control"
              id="inputAddress2"
              placeholder="Class Description"
            />

            <span class="text-danger" v-if="error && error.admission_fee">{{
              error.admission_fee[0]
            }}</span>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Monthly fee</label>
            <input
              v-model="monthlyFee"
              type="number"
              class="form-control"
              id="inputAddress2"
              placeholder="Class Price"
            />
            <span class="text-danger" v-if="error && error.monthly_fee">{{
              error.monthly_fee[0]
            }}</span>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Total fee</label>
            <input
              v-model="totalFee"
              type="number"
              class="form-control"
              id="inputAddress3"
              placeholder="Class Price"
            />
          </div>
          <button class="btn btn-info">Make Class</button>
        </form>
      </div>
    </div>
    <hr />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Class Name</th>
            <th scope="col">Admission Fee</th>
            <th scope="col">Monthly Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cls, i) in classes" :key="cls.id">
            <th scope="row">{{ ++i }}</th>
            <td>{{ cls.name }}</td>
            <td>{{ cls.admission_fee }}</td>
            <td>{{ cls.monthly_fee }}</td>
          </tr>
          <h3 class="text-center" v-if="classes === null">Loading...</h3>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout:'Account-content',
  data() {
    return {
      name: "",
      admissionFee: "",
      monthlyFee: "",
      classes: null,
      error: "",
    };
  },
  created() {
    this.getClass();
  },
  computed: {
    totalFee() {
      if (this.admissionFee && this.monthlyFee) {
        return parseInt(this.admissionFee) + parseInt(this.monthlyFee);
      }
    },
  },
  methods: {
    createClass() {
      this.$axios
        .post("/accounts/class", {
          name: this.name,
          admissionFee: this.admissionFee,
          monthlyFee: this.monthlyFee,
        })
        .then((response) => {
          this.classes = [
            ...this.classes,
            {
              id: this.classes.length + 1,
              name: this.name,
              admission_fee: this.admissionFee,
              monthly_fee: this.monthlyFee,
            },
          ];
          (this.name = ""),
            (this.admissionFee = ""),
            (this.monthlyFee = ""),
            this.$toaster.success(response.data.message);
          this.$router.push("/account/class");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.error = error.response.data.errors;
          }
          console.log(error);
        });
    },
    getClass() {
      this.$axios
        .get("/accounts/class")
        .then((response) => {
          this.classes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
