<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Social Link List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/Profile/social/create" class="btn-add">Add social</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered text-center">
                <thead>
                  <tr>                    
                    <th>SL</th>
                    <th>Social Name</th>
                    <th>Social Link</th>                    
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(social,index) in socials" :key="index">
                    <td>{{ index+1}}</td>
                    <td>{{ social.social_name}}</td>
                    <td>{{ social.social_url }}</td>                  
                    <td>
                      <button class="btn-edit" @click="socialEdit(social.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="socialDelete(social.id)">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="socialUpdate" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="title">
                Social Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             <div class="form-horizontal">
                    <div class="form-group">
                    <label>Social Name</label>
                    <select class="form-control" v-model="social.social_name">                           
										<option value="" selected disabled>Select Type</option>
                     <option value="Facebook">Facebook</option>
										<option value="Instagram">Instagram</option>										
										<option value="LinkedIn">LinkedIn</option>
										<option value="Twitter">Twitter</option>
										<option value="WhatsApp">WhatsApp</option>	
										
                        </select>
                        <h6 v-if="errors.social_name" v-text="errors.social_name[0]" class="text-danger"></h6>
                    </div>
                    <div class="form-group">
                        <label>Social Link</label>
                        <input social_name="text" class="form-control" placeholder="Social Link "
                            v-model="social.social_url" />
                    </div>
                    <h6 v-if="errors.social_url" v-text="errors.social_url[0]" class="text-danger"></h6>
                  

                </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn-submit" @click="socialUpdate()">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Profile-content",
  mounted() {
    this.getsocial();

  },
  data() {
    return {
      socials: '',
      social: {
        type: "",
        name: '',
      },
      errors: {},
    };
  },
  methods: {
    getsocial() {
      this.$axios
        .$get("/social/show")
        .then((res) => {
          this.socials = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    socialEdit(id) {
      $("#socialUpdate").modal("show");
      this.$axios
        .$get("/social/edit/" + id)
        .then((res) => {
          this.social = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    socialUpdate() {
      this.$axios
        .$post("/social/update/" + this.social.id, this.social)
        .then((res) => {
          this.getsocial();
          $("#socialUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";


        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    socialDelete(id) {
      if (confirm("Are you sure to delete this social?")) {
        this.$axios
          .$get("/social/delete/" + id)
          .then((res) => {
            this.getsocial();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    





  },
};
</script>
<style scoped>
</style>
