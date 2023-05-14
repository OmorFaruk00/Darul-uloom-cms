<template>

    <div class="offset-md-3 col-md-6">
        <div class="training">
            <h4 class="title">Add Training</h4>
            <hr>
              <div class="form-row">
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Training Name</label>
                    <input v-model="training.training_name" type="text" class="form-control" placeholder="Enter Training Name" />
                    <h6 v-if="errors.training_name" v-text="errors.training_name[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Duration</label>
                    <input v-model="training.duration" type="text" class="form-control" placeholder="Enter Duration" />
                    <h6 v-if="errors.duration" v-text="errors.duration[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Training Year</label>
                    <input v-model="training.training_year" type="text" class="form-control" placeholder="Ex-yyyy-mm-dd" />
                    <h6 v-if="errors.training_year" v-text="errors.training_year[0]" class="text-danger"></h6>
                </div>
                <div class="form-group col-md-6 col-lg-6 col-sm-12">
                    <label class="form-label">Institute Name</label>
                    <input v-model="training.institute_name" type="text" class="form-control" placeholder="Enter Institute Name" />
                    <h6 v-if="errors.institute_name" v-text="errors.institute_name[0]" class="text-danger"></h6>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn-submit mt-4" @click="addtraining()">Submit</button>
            </div>
        </div>

    </div>


</template>
<script>
export default {
    layout: "Profile-content",
    data() {
        return {

          trainings: '',
         training: {
          training_name: "",
          duration: "",
          training_year: "",
          institute_name: "",
      },
            errors: '',

        };
    },
    methods: {
        addtraining() {
            this.$axios
                .$post("/training/add", this.training)
                .then((res) => {
                    this.$router.push("/profile/training");
                    this.training = "",
                    this.errors = "",
                    this.$toaster.success(res.message);
                    this.gettraining();
                    
                })
                .catch((err) => {                    
                    this.errors = err.response.data.errors;

                });
        },

    }






};
</script>
<style scoped>
.training {
    padding: 50px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 20px;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>