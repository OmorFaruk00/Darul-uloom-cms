<template>
    <div class="form-bg py-5">
        <div class="col-md-8 offset-md-2">
            <div class="form-shadow p-5">
                <h3 class="title">Update Syllabus</h3>
                <form class="form-horizontal">
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
                        <div class="col-md-12 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>File*</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (syllabus.new_file = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.new_file" v-text="errors.new_file[0]" class="text-danger"></h6>
                            </div>
                        </div>

                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="updateSyllabus()">Submit</button>
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
        this.fetchSyllabusInfo();

    },
    data() {
        return {

            errors: [],
            departments: '',
            base_url:process.env.url,
            syllabus: {
                description: '',                
                department: '',
                status: '',
                new_file: '',
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
         fetchSyllabusInfo() {
            this.$axios.$get('syllabus/edit/'+this.$route.params.id).then(response => {
                this.syllabus = response;
            }).catch((error) => {
                console.log(error);
            });
        },

        updateSyllabus() {

            let formData = new FormData();
            formData.append('department', this.syllabus.department)
            formData.append('status', this.syllabus.status)
            formData.append('description', this.syllabus.description)            
             if(this.syllabus.new_file){
                formData.append('new_file', this.syllabus.new_file)
            }
            

            this.$axios
                .$post("/syllabus/update/"+this.$route.params.id, formData)
                .then((res) => {                    
                    this.errors = {};
                    this.$toaster.success(res.message);
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
