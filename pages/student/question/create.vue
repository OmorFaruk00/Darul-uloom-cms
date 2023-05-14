<template>
    <div class="form-bg py-5">
        <div class="col-md-8 offset-md-2">
            <div class="form-shadow p-5">
                <h3 class="title">Create question</h3>                
                <form>
                    <div class="row">      
                        
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Department *</label>
                                <select class="form-control" v-model="question.department" @change="fetchBatch()">
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
                                <input type="text" disabled class="form-control"
                                                placeholder="Select Department first" v-if="!batches" />
                                            <select class="form-control" v-model="question.batch" required v-else @change="fetchCourse()"
                                                >
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
                                <input type="text" disabled class="form-control"
                                                placeholder="Select Batch First" v-if="!courses" />
                                            
                                  <select class="form-control" v-model="question.course_name" @change="fetchCourseCode" v-else>
                                    <option disabled selected value="">Select Course</option>
                                    <option disable v-for="(course, index) in courses" :key="index"
                                        :value="course.course_name" v-text="course.course_name"></option>

                                </select>                                
                                <h6 v-if="errors.course_name" v-text="errors.course_name[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>
                         <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Course Code *</label>
                                 <input type="text" disabled class="form-control"
                                                placeholder="Select Course first" v-if="question.course_code==''" />
                                <input type="text" class="form-control" placeholder="Enter Course Code"
                                    v-model="question.course_code" v-else/>
                                <h6 v-if="errors.course_code" v-text="errors.course_code[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Description *</label>
                                <input type="text" class="form-control" placeholder="Enter Description "
                                    v-model="question.description" />
                                <h6 v-if="errors.description" v-text="errors.description[0]" class="text-danger"></h6>
                            </div>
                        </div>                      

                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label class="">File *</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (question.file = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.file" v-text="errors.file[0]" class="text-danger"></h6>
                            </div>
                        </div>

                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="addquestion()">Submit</button>
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
            department_id:'',
            batches:'',
            courses:'',
            question: {
                course_name:'',
                course_code:'',
                description: '',                
                department: '',
                batch: '',
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
        fetchBatch() {
            this.$axios.$get("/admission/batch/"+this.question.department).then((response) => {
                this.batches = response.data;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchCourse(){
             this.$axios.$get("/student/course/"+this.question.department).then((response) => {                
                this.courses = response;
                console.log(response)
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchCourseCode(){
             this.$axios.$get("/student/course-code/"+this.question.course_name).then((response) => {                
                this.question.course_code =response[0].course_code;         
            }).catch((error) => {
                console.log(error);
            });
        },

        addquestion() {

            let formData = new FormData();
            formData.append('course_name', this.question.course_name)
            formData.append('course_code', this.question.course_code)
            formData.append('department', this.question.department)
            formData.append('batch', this.question.batch)            
            formData.append('description', this.question.description)            
            formData.append('file', this.question.file)

            this.$axios
                .$post("/question/add", formData)
                .then((res) => {
                    this.question = "";
                    this.errors = {};
                    this.$toaster.success("Question Added Successfully");
                    this.$router.push("/student/question");
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
