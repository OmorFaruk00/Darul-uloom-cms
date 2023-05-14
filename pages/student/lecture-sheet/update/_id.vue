<template>
    <div class="form-bg py-5">
        <div class="col-md-8 offset-md-2">
            <div class="form-shadow p-5">
                <h3 class="title">Update lecture</h3>
                <form>
                    <div class="row">
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Department *</label>
                                <select class="form-control" v-model="lecture.department"
                                    @change="fetchBatch(), fetchCourse()">
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
                                <select class="form-control" v-model="lecture.batch" required v-else>
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
                                <input type="text" disabled class="form-control" placeholder="Select Department first"
                                    v-if="!courses" />
                                <select class="form-control" v-model="lecture.course_name" @change="fetchCourseCode"
                                    v-else>
                                    <option disabled selected value="">Select Course</option>
                                    <option disable v-for="(course, index) in courses" :key="index"
                                        :value="course.course_name" v-text="course.course_name"></option>

                                </select>
                                <h6 v-if="errors.course_name" v-text="errors.course_name[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Course Code *</label>
                                <input type="text" disabled class="form-control" placeholder="Select Course first"
                                    v-if="lecture.course_code == ''" />
                                <input type="text" class="form-control" placeholder="Enter Course Code"
                                    v-model="lecture.course_code" v-else />
                                <h6 v-if="errors.course_code" v-text="errors.course_code[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Description *</label>
                                <input type="text" class="form-control" placeholder="Enter Description "
                                    v-model="lecture.description" />
                                <h6 v-if="errors.description" v-text="errors.description[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label class="">File *</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (lecture.file = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.file" v-text="errors.file[0]" class="text-danger"></h6>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="updateLecture()">Submit</button>
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
        this.fetchlectureInfo();
    },
    data() {
        return {
            errors: [],
            departments: '',
            batches: '',
            courses: '',
            lecture: {
                course_name: '',
                course_code: '',
                description: '',
                department: '',
                batch: '',
                new_file: '',
            }
        }

    },
    methods: {
        fetchlectureInfo() {
            this.$axios.$get('lecture-sheet/edit/' + this.$route.params.id).then(response => {
                this.lecture = response;
                this.fetchBatch();
                this.fetchCourse();
            }).catch((error) => {
                console.log(error);
            });
        },
        fetchDepartmentInfo() {
            this.$axios.$get('/admission/department').then(response => {
                this.departments = response;
            }).catch((error) => {
                this.$toaster.error("Department Not found");
            });
        },
        fetchBatch() {
            this.$axios.$get("/admission/batch/" + this.lecture.department).then((response) => {
                this.batches = response.data;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchCourse() {
            this.$axios.$get("/student/course/" + this.lecture.department).then((response) => {
                this.courses = response;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchCourseCode() {
            this.$axios.$get("/student/course-code/" + this.lecture.course_name).then((response) => {
                this.lecture.course_code = response[0].course_code;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },

        updateLecture() {
            let formData = new FormData();
            formData.append('course_name', this.lecture.course_name)
            formData.append('course_code', this.lecture.course_code)
            formData.append('department', this.lecture.department)
            formData.append('batch', this.lecture.batch)
            formData.append('description', this.lecture.description)
            if (this.lecture.new_file) {
                formData.append('new_file', this.lecture.new_file)
            }

            this.$axios
                .$post("/lecture-sheet/update/" + this.$route.params.id, formData)
                .then((res) => {
                    this.errors = '';
                    this.$toaster.success("Lecture Update Successfully");
                    this.$router.push("/student/lecture-sheet");
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
