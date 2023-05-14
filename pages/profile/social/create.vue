<template>
    <div class="form-bg pt-5">
        <div class="container">
            <div class="offset-md-2  col-md-8">
                <div class="form-shadow p-5">
                    <h3 class="title">Create social</h3>
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
                        <div class="d-flex justify-content-end pt-3">
                            <button class="btn-submit" @click="addsocial()">Submit</button>
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
    data() {
        return {
            social: {
                social_name: "",
                social_url: "",

            },
            errors: [],
        };
    },
    methods: {
        addsocial() {
            this.$axios
                .$post("/social/add", this.social)
                .then((res) => {
                    this.social = "";
                    this.errors = "";
                    this.$toaster.success(res.message);
                    this.$router.push("/profile/social");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                });
        },
    },

};
</script>

