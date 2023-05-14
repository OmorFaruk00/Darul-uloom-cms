<template>
    <div class="form-bg pt-5">
        <div class="container">
            <div class="form-container offset-md-1  col-md-10 p-5">
                <h3 class="title">Manage Office Time</h3>
                <div class="form-horizontal">
                    <div class="form-group pb-3">
                        <label>Select Employee</label>
                        <select class="form-control" v-model="office_time.type">
                            <option disabled selected value="">Select Type</option>
                            <option value="">Academic</option>
                            <option value="">Non Academic</option>
                        </select>
                        <h6 v-if="errors.type" v-text="errors.type[0]" class="text-danger"></h6>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label>Friday</label>
                                <input type="tewxt" class="form-control" v-model="office_time.from">
                                <h6 v-if="errors.from" v-text="errors.from[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label>Type</label>
                                <select class="form-control" v-model="office_time.type">
                                    <option disabled selected value="">Select Type</option>
                                    <option value="">Offday</option>
                                    <option value="">Fixed</option>
                                    <option value="">Flexible</option>
                                </select>
                                <h6 v-if="errors.type" v-text="errors.type[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label>Office Time Start</label>
                                <input type="time" class="form-control" v-model="office_time.from">
                                <h6 v-if="errors.from" v-text="errors.from[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label>Office Time End</label>
                                <input type="time" class="form-control" v-model="office_time.from">
                                <h6 v-if="errors.from" v-text="errors.from[0]" class="text-danger"></h6>
                            </div>
                        </div>
                    </div>

                    <h6 v-if="errors.office_time" v-text="errors.office_time[0]" class="text-danger"></h6>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click="addoffice_time()">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Emp-content",
    data() {
        return {
            office_time: {
                type: "",
                office_time: "",

            },
            errors: [],
        };
    },
    methods: {
        addoffice_time() {

            this.$axios
                .$post("/office_time/add", this.office_time)
                .then((res) => {
                    this.office_time = "";
                    this.errors = "";
                    this.$toaster.success(res.message);
                    this.$router.push("/employee/office_time");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                });
        },
    },

};
</script>

