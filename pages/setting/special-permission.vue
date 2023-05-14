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
                v-text="emp.name"
              ></option>
            </select>
            <h6
              class="text-danger"
              v-if="error && error.employee"
              v-text="error.employee[0]"
            ></h6>
          </div>
          <div class="d-flex flex-wrap" style="gap: 1rem">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="check_all"
                @click="checkAll"
              />
              <label for="check_all" class="form-check-label">
                Check All
              </label>
            </div>
            <div class="form-check" v-for="prm in permissions" :key="prm.i">
              <input
                v-model="permission"
                class="form-check-input"
                type="checkbox"
                :id="prm.name"
                :name="prm.name"
                :value="prm.name"
              />
              <label :for="prm.name" class="form-check-label">
                {{ prm.name }}
              </label>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-info float-right" @click="givePermission">Assign</button>
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
      employees: null,
      employee: "",
      permissions: null,
      permission: [],
      error: "",
      loading: false,
    };
  },
  mounted() {
    this.getPermissions();
    this.getEmplyees();
  },
  methods: {
    checkAll() {
      this.permission = this.permissions.map((prm) => prm.name);
    },
    givePermission() {
      this.loading = true;
      this.$axios
        .post(`setting/special-permission/${this.employee}`, {
          permissions: this.permission,
        })
        .then((response) => {
          this.$toaster.success(response.data.message);
        })
        .catch((error) => {
          this.$toaster.success(error.response.data.error);
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
    getEmplyees() {
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
  },
};
</script>

<style></style>