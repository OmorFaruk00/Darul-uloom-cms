<template>
  <div>
    <div class="col-md-6 col-12 mx-auto" v-if="$auth.user.permission.includes('Permission')">
      <div class="form-shadow mt-5">
        <div class="card-header">
          <h4 title="create-role">Assign Role</h4>
        </div>        
        <div class="card-body mb-4">
          <div class="form-group focused">
            <label for="_id">Employee Name</label>
            <select class="form-control" v-model="employee" required>
              <option selected value="">Select Employee</option>
              <option v-for="emp in employees" :key="emp.id" :value="emp.id" v-text="emp.name"></option>
            </select>
            <h6 class="text-danger" v-if="error && error.employee" v-text="error.employee[0]"></h6>
          </div>
          <div class="form-group focused">
            <label for="_id">Role</label>
            <select class="form-control" v-model="role" required>
              <option selected value="">Select Role</option>
              <option v-for="rl in roles" :key="rl.id" :value="rl.name" v-text="rl.name"></option>
            </select>
            <h6 class="text-danger" v-if="error && error.role" v-text="error.role[0]"></h6>
          </div>
          
        </div>
        <div class="card-footer d-flex justify-content-end">
          <button class="btn-submit" @click="givePermission">Assign</button>

        </div>
      </div>
    </div>
     <h2 class="text-center text-danger mt-5" v-else>You are not authorized</h2>
  </div>
</template>

<script>
export default {
  layout: "Setting-content",
  data() {
    return {
      employess: null,
      employee: "",
      roles: null,
      role: "",
      error: "",
      loading: false,
    };
  },
  mounted() {
    this.getEmployees();
    this.getRoles();
  },
  methods: {
    givePermission() {
      this.loading = true;
      this.$axios
        .post(`setting/assign-role/${this.employee}`, {
          role: this.role,
        })
        .then((response) => {
          this.$toaster.success(response.data.message);
        })
        .catch((error) => {
          this.$toaster.error(error.response.data.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getPermissions() {
      this.loading = true;
      this.$axios
        .get("/setting/permissions")
        .then((response) => {
          this.permissions = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getEmployees() {
      this.loading = true;
      this.$axios
        .get("/employee/show")
        .then((response) => {
          this.employees = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getRoles() {
      this.loading = true;
      this.$axios
        .get("/setting/roles")
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
  },
};
</script>

<style>
</style>
