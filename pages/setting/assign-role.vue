<template>
  <div>
    <div class="col-md-6 col-12 mx-auto">
      <div class="card mt-5">
        <div class="card-body">
          <div class="form-group focused">
            <label for="_id">Employee Name</label>
            <select class="form-control" v-model="employee" required>
              <option selected value="">Select Employee</option>
              <option
                v-for="emp in employees"
                :key="emp.id"
                :value="emp.id"
                v-text="emp.employee"
              ></option>
            </select>
            <h6
              class="text-danger"
              v-if="error && error.employee"
              v-text="error.employee[0]"
            ></h6>
          </div>
          <div class="form-group focused">
            <label for="_id">Role</label>
            <select class="form-control" v-model="role" required>
              <option  selected value="">Select Role</option>
              <option
                v-for="rl in roles"
                :key="rl.id"
                :value="rl.id"
                v-text="rl.department_name"
              ></option>
            </select>
            <h6
              class="text-danger"
              v-if="error && error.role"
              v-text="error.role[0]"
            ></h6>
          </div>
          <button class="btn btn-info">Assign</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "Setting-content",
  data(){
    return {
      employess: null,
      employee: "",
      roles: null,
      role: "",
      error: "",
      loading: false,
    };
  },
  methods: {
    // createClass() {
    //   this.$axios
    //     .post("/accounts/class", {
    //       name: this.name,
    //       admissionFee: this.admissionFee,
    //       monthlyFee: this.monthlyFee,
    //     })
    //     .then((response) => {
    //       this.classes = [
    //         ...this.classes,
    //         {
    //           id: this.classes.length + 1,
    //           name: this.name,
    //           admission_fee: this.admissionFee,
    //           monthly_fee: this.monthlyFee,
    //         },
    //       ];
    //       (this.name = ""),
    //         (this.admissionFee = ""),
    //         (this.monthlyFee = ""),
    //         this.$toaster.success(response.data.message);
    //       this.$router.push("/account/class");
    //     })
    //     .catch((error) => {
    //       if (error.response.status === 422) {
    //         this.error = error.response.data.errors;
    //       }
    //       console.log(error);
    //     });
    // },
    getRoles() {
      this.loading = true;
      this.$axios
        .get("/roles")
        .then((response) => {
          this.roles = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getEmplyees() {
      this.loading = true;
      this.$axios
        .get("/roles")
        .then((response) => {
          this.employess = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  }
};
</script>

<style></style>
