<template>

    <div class="offset-md-3 col-md-6">
        <div class="qualification">
            <h4 class="title">Add qualification</h4>
            <hr>
            <div class="form-row">
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Degree Name</label>
                    <input v-model="qualification.degree_name" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.degree_name" v-text="errors.degree_name[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Department Name</label>
                    <input v-model="qualification.subject_name" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.subject_name" v-text="errors.subject_name[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Passing Year</label>
                    <input v-model="qualification.passing_year" type="text" class="form-control" placeholder="Ex-yyyy-mm-dd" />
                    <h6 v-if="errors.passing_year" v-text="errors.passing_year[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Institute Name</label>
                    <input v-model="qualification.institute_name" type="text" class="form-control" placeholder="" />
                    <h6 v-if="errors.institute_name" v-text="errors.institute_name[0]" class="text-danger"></h6>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn-submit mt-4" @click="addQualification()">Submit</button>
            </div>
        </div>

    </div>


</template>
<script>
export default {
    layout: "Profile-content",
    data() {
        return {

            qualification:
            {
                degree_name: "",
                subject_name: "",
                passing_year: "",
                institute_name: "",

            },
            errors: '',

        };
    },
    methods: {
        addQualification() {
            this.$axios
                .$post("/qualification/add", this.qualification)
                .then((res) => {
                    this.$router.push("/profile/qualification");
                    this.qualification = "",
                    this.errors = "",
                    this.$toaster.success(res.message);
                    this.getqualification();
                    
                })
                .catch((err) => {                    
                    this.errors = err.response.data.errors;

                });
        },

    }






};
</script>
<style scoped>
.qualification {
    padding: 50px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 20px;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>