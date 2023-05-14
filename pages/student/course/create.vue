<template>
    <div class="form-bg py-5">
        <div class="col-md-8 offset-md-2">
            <div class="form-shadow p-5">
                <h3 class="title">Create course</h3>
                <form class="">
                    <div class="row">
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Department *</label>
                                <select class="form-control" v-model="course.department" @change="fetchBatch">
                                    <option disabled selected value="">Select Department</option>
                                    <option disable v-for="(department, index) in departments" :key="index"
                                        :value="department.id" v-text="department.department_name"></option>

                                </select>
                                <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Batch *</label>
                                <input type="text" disabled class="form-control" placeholder="Select Department first"
                                    v-if="!batches" />
                                <select class="form-control" v-model="course.batch" required v-else>
                                    <option selected value="">Select Batch</option>
                                    <option v-for="batch in batches" :key="batch.id" :value="batch.id"
                                        v-text="batch.batch_name">
                                    </option>
                                </select>
                                <h6 v-if="errors.batch" v-text="errors.batch[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Course Name *</label>
                                <input type="text" class="form-control" placeholder="Enter Course Name"
                                    v-model="course.course_name" />
                                <h6 v-if="errors.course_name" v-text="errors.course_name[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Course Code *</label>
                                <input type="text" class="form-control" placeholder="Enter Course Code"
                                    v-model="course.course_code" />
                                <h6 v-if="errors.course_code" v-text="errors.course_code[0]" class="text-danger"></h6>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="addCourse()">Submit</button>
                    </div>
                </form>
            </div>            
        </div>
               
    </div>
</template>
<script>
export default {
    layout: "Student-content",
    mounted() {
        this.fetchDepartmentInfo();

    },
    data() {
        return {
            errors: [],
            departments: '',
            department_id: '',
            batches: '',
            course: {
                course_name: '',
                course_code: '',
                department: '',
                batch: '',

            }
        }

    },
    methods: {
        fetchDepartmentInfo() {
            this.$axios.$get('/admission/department').then(response => {
                this.departments = response;
            }).catch((error) => {
                this.$toaster.error("Department Not found");
            });
        },
        fetchBatch() {
            this.$axios.$get("/admission/batch/" + this.course.department).then((response) => {
                this.batches = response.data;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });


        },

        addCourse() {

            let formData = new FormData();
            formData.append('course_name', this.course.course_name)
            formData.append('course_code', this.course.course_code)
            formData.append('department', this.course.department)
            formData.append('batch', this.course.batch)
            formData.append('description', this.course.description)
            formData.append('file', this.course.file)

            this.$axios
                .$post("/course/add", formData)
                .then((res) => {
                    this.course = "";
                    this.$toaster.success("course Added Successfully");
                    this.$router.push("/student/course");
                })
                .catch((error) => {
                    if (error.response.status == 401) {                        
                        this.$toaster.error(error.response.data.message);
                    }
                    this.errors = error.response.data.errors;
                });
        },





    },


};

</script>
<style scoped>
</style>
