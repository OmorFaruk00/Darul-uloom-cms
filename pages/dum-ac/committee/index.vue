<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h6 class="title">Committee Member List</h6>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/dum-ac/committee/create" class="btn-add">Add committee</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead>
                  <tr>

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
                  <tr v-for="committee in committees" :key="committee._id">
                    <td >{{ committee.committee_type }}</td>
                    <td>{{ committee.member_name }}</td>
                    <td>{{ committee.member_type }}</td>
                    <td>{{ committee.profession }}</td>
                    <td>{{ committee.personal_phone_no }}</td>
                    <td><img :src="base_url+'/images/dum/' + committee.image" alt="image" style="height:80px" />
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
                      <nuxt-link :to="`/dum-ac/committee/update/${committee.id}`" class="btn-edit">Edit</nuxt-link>                      
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
  </div>
</template>
<script>
export default {
  layout: "Dum-content",
  mounted() {
    this.getCommittee();

  },
  data() {
    return {
      committees: [],
      errors: {},
      base_url:process.env.url
    };
  },
  methods: {
    getCommittee() {
      this.$axios
        .$get("/committee/show")
        .then((res) => {
          this.committees = res;
        })
        .catch((err) => {
          console.log(err);
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
