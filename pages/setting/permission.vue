<template>
  <div>
    <div class="col-md-6 col-12 mx-auto mt-5">
      <div class="form-shadow">
        <div class="card-header">
          <h4 title="create-permission">Create Permission</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="inputAddress2">Permission Name</label>
            <input v-model="name" type="text" class="form-control" id="inputAddress2" placeholder="Permission Name" />
            <span class="text-danger" v-if="error && error.name">{{
                error.name[0]
            }}</span>
          </div>       
        </div>
        <div class="card-footer d-flex justify-content-end">
             <button class="btn-submit" @click="createPermission">
            Make
          </button>
        </div>
      </div>
    </div>
    
    <div class="container mt-5">
      <table class="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Permission Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(permission, i) in permissions" :key="permission.id">
            <th scope="row">{{ ++i }}</th>
            <td>{{ permission.name }}</td>
            <td @click="permissionEdit(permission.id)" style="cursor: pointer">
              <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 class="text-center" v-if="!loading && permissions === null">
        No permission Found...
      </h3>
      <h3 class="text-center" v-if="loading === true">Loading...</h3>
    </div>

    <div class="modal fade" id="roleUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
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
              <input v-model="permissionInfo.name" type="text" class="form-control" id="inputAddress2"
                placeholder="Permission Name" />
              <span class="text-danger" v-if="error && error.name">{{
                  error.name[0]
              }}</span>
            </div>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            <button type="button" class="btn-submit" @click="permissionUpdate()">
              Update
            </button>
          </div>
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
      name: "",
      permissions: null,
      error: "",
      loading: false,
      permissionInfo: {},
    };
  },
  mounted() {
    this.getpermissions();
  },
  methods: {
    createPermission() {
      this.loading = true;
      this.$axios
        .post("setting/permission", {
          name: this.name,
        })
        .then((response) => {
          this.$toaster.success(response.data.message);
          this.name = "";
          this.getpermissions();
        })
        .catch((error) => {
          this.$toaster.error(error.response.data.message);
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getpermissions() {
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
    permissionEdit(id) {
      $("#roleUpdate").modal("show");
      this.$axios
        .$get("setting/permission/" + id)
        .then((res) => {
          this.permissionInfo = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    permissionUpdate() {
      this.$axios
        .$post("/setting/permission/" + this.permissionInfo.id, {
          ...this.permissionInfo,
        })
        .then((res) => {
          this.getpermissions();
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