<template>
  <div>
    <div class="col-md-6 col-12 mx-auto">
      <div class="card mt-5">
        <div class="card-header">
          <h4 title="create-role">Give Extra permission</h4>
        </div>
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
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkbox1"
              name="option1"
              value="good"
            />
            <label for="checkbox1" class="form-check-label"> Post Image </label>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-info">Assign</button>
        </div>
      </div>
    </div>
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
  methods: {
    getPermissions() {
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
  },
};
</script>

<style></style>
