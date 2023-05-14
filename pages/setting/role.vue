<template>
<div>
  <div v-if="auth">
    <div class="col-md-6 col-12 mx-auto mt-3">
      <div class="form-shadow mt-5">
        <div class="card-header">
          <h4 title="create-role">Create Role</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="inputAddress2">Role Name</label>
            <input v-model="name" type="text" class="form-control" id="inputAddress2" placeholder="Role Name" />
            <span class="text-danger" v-if="error && error.name">{{
                error.name[0]
            }}</span>
          </div>
          <div class="d-flex flex-wrap" style="gap: 1rem">
            <div class="form-check" v-for="prm in permissions" :key="prm.i">
              <input v-model="permission" class="form-check-input" type="checkbox" :id="prm.name" :name="prm.name"
                :value="prm.name" />
              <input v-model="permission" class="form-check-input" type="checkbox" :id="prm.name" :name="prm.name"
                :value="prm.name" />
              <label :for="prm.name" class="form-check-label">
                {{ prm.name }}
              </label>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <button class="btn-submit " @click="createRole">
            Make
          </button>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <table class="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">SL NO</th>
            <th scope="col">Role Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(role, i) in roles" :key="i">
            <th scope="row">{{ ++i }}</th>
            <td>{{ role.name }}</td>
            <td @click="roleEdit(role.id)" style="cursor: pointer">
              <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 class="text-center" v-if="!loading && roles === null">
        No Role Found...
      </h3>
      <h3 class="text-center" v-if="loading === true">Loading...</h3>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="roleUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Role Update</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="inputAddress2">Role Name</label>
              <input v-model="roleInfo.name" type="text" class="form-control" id="inputAddress2"
                placeholder="Role Name" />
              <span class="text-danger" v-if="error && error.name">{{
                  error.name[0]
              }}</span>
            </div>
            <div class="d-flex flex-wrap" style="gap: 1rem">
              <div class="form-check" v-for="prm in permissions" :key="prm.i">
                <input v-model="roleInfo.permissions" class="form-check-input" type="checkbox" :id="prm.name + 1"
                  :name="prm.name" :value="prm.name" />
                <label :for="prm.name + 1" class="form-check-label">
                  {{ prm.name }}
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-submit" @click="roleUpdate()">
              Update
            </button>
          </div>
        </div>
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
      auth:true,
      name: "",
      roles: null,
      error: "",
      loading: false,
      permissions: null,
      permission: [],
      roleInfo: {},
    };
  },
  mounted() {
    this.getRoles();
    this.getPermissions();
  },
  methods: {
    createRole() {
      this.loading = true;
      this.$axios
        .$post("setting/role", {
          name: this.name,
          permissions: this.permission,
        })
        .then((response) => {
          this.name = "";
          this.getRoles();
          this.$toaster.success(response.data.message);

        })
        .catch((error) => {        
          console.log(error);
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
           if (error.response.status == 401) {
          this.auth = false;
          this.$toaster.error(error.response.data.message);
        }
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getRoles() {
      this.loading = true;
      this.$axios
        .$get("/setting/roles")
        .then((response) => {
          this.roles = response;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    roleEdit(id) {
      $("#roleUpdate").modal("show");
      this.$axios
        .$get("setting/roles/" + id)
        .then((res) => {
          this.roleInfo = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    roleUpdate() {
      this.$axios
        .$post("/setting/role/" + this.roleInfo.id, {
          ...this.roleInfo,
        })
        .then((res) => {
          this.getRoles();
          $("#roleUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>

<style>
</style>