<template>
    <div class="form-bg pt-5">
        <div class="container">
            <div class="form-container offset-md-2  col-md-8">
                <h3 class="title">Create Department</h3>
                <div class="form-horizontal">
                    <div class="form-group">
                        <label>Type</label>
                        <select class="form-control" v-model="department.type">
                            <option disabled selected value="">Select Type</option>
                            <option value="Academic">Academic</option>
                            <option value="Non Academic">Non Academic</option>
                        </select>
                        <h6 v-if="errors.type" v-text="errors.type[0]" class="text-danger"></h6>
                    </div>
                    <div class="form-group">
                        <label>Department Name </label>
                        <input type="text" class="form-control" placeholder="Department Name "
                            v-model="department.department" />
                    </div>
                    <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger"></h6>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click="addDepartment()">Submit</button>
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
            department: {
                type: "",
                department: "",

            },
            errors: [],
        };
    },
    methods: {
        addDepartment() {

            this.$axios
                .$post("/department/add", this.department)
                .then((res) => {
                    this.department = "";
                    this.errors = "";
                    this.$toaster.success(res.message);
                    this.$router.push("/employee/department");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                });
        },
    },

};
</script>

