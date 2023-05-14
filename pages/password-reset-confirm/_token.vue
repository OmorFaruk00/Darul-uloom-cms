<template>
    <div>
        <div class="col-md-4 mx-auto mt-5">
            <div class="form-shadow p-5 ">
                <h4 class="title mb-4">Reset Password</h4>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Password" v-model="reset.password">
                    <p v-if="errors.password" v-text="errors.password[0]" class="text-danger"></p>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Confirm Password"
                        v-model="reset.password_confirmation">
                    <p v-if="errors.password" v-text="errors.password[0]" class="text-danger"></p>
                </div>
                <div class="d-flex justify-content-end pt-3">
                    <button class="btn-submit" @click="ResetPassword()">Submit</button>
                </div>
                <div class="alert alert-info mt-4" v-if="message">
                    <strong>{{ message }}!</strong>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    auth: false,
    data() {
        return {
            errors: [],
            message:'',
            reset: {
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        ResetPassword() {
            this.$axios
                .$post("password-reset-confirm/" + this.$route.params.token, this.reset)
                .then((response) => {
                    if (response.status == 404) {
                        this.message = response.message;
                    }
                    if (response.status == 201) {
                        this.message = response.message;
                        this.reset = '';
                        // this.$router.push("/");
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