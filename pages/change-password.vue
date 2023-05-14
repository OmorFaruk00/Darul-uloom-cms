<template>
    <div>
        <Topnav />
        <div class="col-md-4 mx-auto mt-5">
            <div class="form-shadow p-5 ">
                <h4 class="title mb-4">Change Password</h4>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Old Password"
                        v-model="change.old_password">
                    <!-- <p v-if="invalid" v-text="invalid" class="text-danger"></p> -->
                    <p v-if="errors.old_password" v-text="errors.old_password[0]" class="text-danger"></p>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter New Password" v-model="change.password">
                    <p v-if="errors.password" v-text="errors.password[0]" class="text-danger"></p>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Confirm Password"
                        v-model="change.password_confirmation">
                    <p v-if="errors.password_confirmation" v-text="errors.password_confirmation[0]" class="text-danger"></p>
                </div>                
                <div class="d-flex justify-content-end pt-3">
                    <nuxt-link to="/app" class="btn-edit pt-2">HOME</nuxt-link>
                    <button class="btn-submit" @click="ChangePassword()">Change</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            errors: [],
            invalid: '',
            change: {
                old_password: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        ChangePassword() {
            this.$axios
                .$post("/change-password", this.change)
                .then((response) => {
                    if (response.status == 203) {                       
                        this.$toaster.error(response.message)
                    }
                      if (response.status == 201) {
                       this.$toaster.success(response.message);
                       this.errors = '';
                       this.change = '';
                    }                   
                   
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        }
    }

}
</script>


<style scoped>
.form-control {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: none;
    margin-top: 40px;
    color: #000;
}
</style>