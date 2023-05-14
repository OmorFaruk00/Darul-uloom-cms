<template>
    <div class="form-bg py-5">
        <div class="col-md-8 offset-md-2">
            <div class="form-shadow p-5">
                <h3 class="title">Create Syllabus</h3>
                <form class="">
                    <div class="row">
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Department Name*</label>
                                <select class="form-control" v-model="syllabus.department">
                                    <option disabled selected value="">Select Department Name</option>
                                    <option disable v-for="(department, index) in departments" :key="index"
                                        :value="department.department_name" v-text="department.department_name"></option>

                                </select>
                                <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Publish Status*</label>
                                <select class="form-control" v-model="syllabus.status">
                                    <option selected disabled value="">Select Status</option>
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                                <h6 v-if="errors.status" v-text="errors.status[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Description *</label>
                                <input type="text" class="form-control" placeholder="Enter Description "
                                    v-model="syllabus.description" />
                                <h6 v-if="errors.description" v-text="errors.description[0]" class="text-danger"></h6>
                            </div>
                        </div>

                        <!-- <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Short Description *</label>
                                <input type="text" class="form-control" placeholder="Enter Short Description"
                                    v-model="syllabus.short_description" />
                                <h6 v-if="errors.short_description" v-text="errors.short_description[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div> -->

                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label class="">File*</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (syllabus.file = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.file" v-text="errors.file[0]" class="text-danger"></h6>
                            </div>
                        </div>

                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="addSyllabus()">Submit</button>
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
            syllabus: {
                description: '',                
                department: '',
                status: '',
                file: '',


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

        addSyllabus() {

            let formData = new FormData();
            formData.append('department', this.syllabus.department)
            formData.append('status', this.syllabus.status)
            formData.append('description', this.syllabus.description)            
            formData.append('file', this.syllabus.file)

            this.$axios
                .$post("/syllabus/add", formData)
                .then((res) => {
                    this.syllabus = "";
                    this.errors = {};
                    this.$toaster.success("Syllabus Added Successfully");
                    this.$router.push("/student/syllabus");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },





    },


};

</script>
<style scoped>
</style>
