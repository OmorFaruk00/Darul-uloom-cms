<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h6 class="title">Committee Member List</h6>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/web-dui/committee/create" class="btn-add">Add committee</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Committee Type</th>
                    <th>Member Name</th>
                    <th>Member Type</th>
                    <th>Profession</th>
                    <th>Phone Number</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(committee, index) in committees" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ committee.committee_type }}</td>
                    <td>{{ committee.member_name }}</td>
                    <td>{{ committee.member_type }}</td>
                    <td>{{ committee.profession }}</td>
                    <td>{{ committee.personal_phone_no }}</td>
                    <td><img :src="base_url + '/images/dum/' + committee.image" alt="image" style="height:80px" />
                    </td>
                    <td>
                      <button v-if="committee.status == 1" class="btn-active" @click="committeeStatus(committee.id)">
                        Active
                      </button>
                      <button v-if="committee.status == 0" class="btn-inactive" @click="committeeStatus(committee.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <nuxt-link :to="`/web-dui/committee/update/${committee.id}`" class="btn-edit" style="padding:8px 15px">Edit</nuxt-link>
                      <button class="btn-delete" @click="committeeDelete(committee.id)">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 v-else class="text-center mt-5 text-danger">You are not authorized</h2>
  </div>
</template>
<script>
export default {
  layout: "Web-content",
  mounted() {
    this.getCommittee();

  },
  data() {
    return {
      auth: true,
      committees: [],
      errors: {},
      base_url: process.env.url
    };
  },
  methods: {
    getCommittee() {
      this.$axios
        .$get("/committee/show")
        .then((res) => {
          this.committees = res;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
    committeeDelete(id) {
      if (confirm("Are you sure to delete this committee?")) {
        this.$axios
          .$get("/committee/delete/" + id)
          .then((res) => {
            this.getCommittee();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    committeeStatus(id) {
      this.$axios
        .$get("/committee/status/" + id)
        .then((res) => {
          this.getCommittee();
          this.$toaster.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>
