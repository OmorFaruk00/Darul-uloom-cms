<template>
    <div>
        <div class="col-md-4 mx-auto mt-5">
            <div class="form-shadow p-5 ">
                <h4 class="title mb-4">Reset Password</h4>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Enter Your Email Address" v-model="email">
                    <p v-if="errors.email" v-text="errors.email[0]" class="text-danger"></p>
                </div>
                <div class="d-flex justify-content-end pt-3">
                    <nuxt-link to="/" class="btn-edit pt-2">HOME</nuxt-link>
                    <button class="btn-submit" @click="ResetPassword()">Send</button>
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
            email: '',
            message: '',
        }
    },
    methods: {
        ResetPassword() {
            this.$axios
                .$get("password-reset/" + this.email)
                .then((response) => {
                    if (response.status == 404) {
                        this.message = response.message;
                    }
                    if (response.status == 200) {
                        this.message = response.message;
                        this.email = '';
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