<template>
    <div class="form-bg py-5">
        <div class="container">
            <div class="form-container">
                <h3 class="title">Create Employee</h3>
                <form class="form-horizontal ">
                    <div class="row">
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Employee Name *</label>
                                <input type="text" class="form-control" placeholder="User Name"
                                    v-model="employee.name" />
                                <h6 v-if="errors.name" v-text="errors.name[0]" class="text-danger"></h6>
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Email ID *</label>
                                <input type="email" class="form-control" placeholder="Email Address"
                                    v-model="employee.email" />
                                <h6 v-if="errors.email" v-text="errors.email[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Password*</label>
                                <input type="password" class="form-control" placeholder="" id="showpassword"
                                    v-model="employee.password" />
                                <h6 v-if="errors.password" v-text="errors.password[0]" class="text-danger"></h6>


                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control" placeholder=""
                                    v-model="employee.password_confirmation" />
                                <h6 v-if="errors.password_confirmation" v-text="errors.password_confirmation[0]"
                                    class="text-danger"></h6>


                            </div>
                        </div>
                    </div>


                    <h4 class="sub-title">Personal Information</h4>
                    <div class="row">

                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Date Of Birth *</label>
                                <input type="date" class="form-control" placeholder="Date Of Birth"
                                    v-model="employee.date_of_birth" />
                                <h6 v-if="errors.date_of_birth" v-text="errors.date_of_birth[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Personal Phone No *</label>
                                <input type="number" class="form-control" placeholder="Phone Number"
                                    v-model="employee.personal_phone_no" />
                                <h6 v-if="errors.personal_phone_no" v-text="errors.personal_phone_no[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Alternative Phone No</label>
                                <input type="number" class="form-control" placeholder="Alternative Phone No"
                                    v-model="employee.alternative_phone_no" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Home Phone No</label>
                                <input type="number" class="form-control" placeholder="Home Phone No"
                                    v-model="employee.home_phone_no" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Parents Phone No</label>
                                <input type="number" class="form-control" placeholder="parents Phone No"
                                    v-model="employee.parent_phone_no" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>NID No *</label>
                                <input type="number" class="form-control" placeholder="NID No"
                                    v-model="employee.nid_no" />
                                <h6 v-if="errors.nid_no" v-text="errors.nid_no[0]" class="text-danger"></h6>
                            </div>
                        </div>

                    </div>

                    <h4 class="sub-title">Office Information</h4>
                    <div class="row">
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Date Of Joining *</label>
                                <input type="date" class="form-control" placeholder=""
                                    v-model="employee.date_of_joining" />
                                <h6 v-if="errors.date_of_joining" v-text="errors.date_of_joining[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Department *</label>
                                <select class="form-control" v-model="employee.department">
                                    <option disabled selected value="">Select Department</option>
                                    <option v-for="department in departments" :key="department._id"
                                        :value="department.id">{{ department.department }}</option>
                                </select>
                                <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Merit </label>
                                <select class="form-control" v-model="employee.merit">
                                    <option disabled selected value="">Select Merit</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>

                                </select>

                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Designation *</label>
                                <select class="form-control" v-model="employee.designation">
                                    <option disabled selected value="">Select Designation </option>
                                    <option v-for="designation in designations" :key="designation._id"
                                        :value="designation.id">{{ designation.designation }}</option>

                                </select>
                                <h6 v-if="errors.designation" v-text="errors.designation[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Job Type*</label>
                                <select class="form-control" v-model="employee.job_type">
                                    <option disabled selected value="">Job Type</option>
                                    <option value="full time">Full Time</option>
                                    <option value="part time">Part Time</option>
                                </select>
                                <h6 v-if="errors.job_type" v-text="errors.job_type[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Role *</label>
                                <select class="form-control" v-model="employee.role">
                                    <option disabled selected value="">Select Role</option>
                                    <option v-for="(role, index) in roles" :key="index" :value="role.name">{{ role.name
                                    }}</option>
                                </select>
                                <h6 v-if="errors.role" v-text="errors.role[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Supervised By*</label>
                                <select class="form-control" v-model="employee.supervised_by">
                                    <option disabled selected value="">Select Option</option>
                                    <option v-for="(employee, index) in employees" :key="index" :value="employee.id">{{
                                            employee.name
                                    }}</option>
                                </select>
                                <h6 v-if="errors.supervised_by" v-text="errors.supervised_by[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Image *</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (employee.image = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.image" v-text="errors.image[0]" class="text-danger"></h6>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end  py-4">
                        <button class="btn-submit" @click.prevent="addEmployee()">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Emp-content",
    mounted() {
        this.getDesignation();
        this.getDepartment();
        this.getEmployee();
        this.getEmployeeRole();

    },
    data() {
        return {
            designations: [],
            departments: [],
            employees: [],
            roles: [],
            errors: [],
            employee: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                date_of_birth: '',
                personal_phone_no: '',
                alternative_phone_no: '',
                home_phone_no: '',
                parent_phone_no: '',
                nid_no: '',
                date_of_joining: '',
                department: '',
                designation: '',
                job_type: '',
                merit: '',
                role: '',
                supervised_by: '',

            }
        }

    },
    methods: {
        getDesignation() {
            this.$axios
                .$get("/designation/show")
                .then((res) => {
                    this.designations = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getEmployee() {
            this.$axios
                .$get("/employee/show")
                .then((res) => {
                    this.employees = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getEmployeeRole() {
            this.$axios
                .$get("/employee/role")
                .then((res) => {
                    this.roles = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getDepartment() {
            this.$axios
                .$get("/department/show")
                .then((res) => {
                    this.departments = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        addEmployee() {

            let formData = new FormData();
            formData.append('name', this.employee.name)
            formData.append('email', this.employee.email)
            formData.append('password', this.employee.password)
            formData.append('password_confirmation', this.employee.password_confirmation)
            formData.append('date_of_birth', this.employee.date_of_birth)
            formData.append('personal_phone_no', this.employee.personal_phone_no)
            formData.append('alternative_phone_no', this.employee.alternative_phone_no)
            formData.append('home_phone_no', this.employee.home_phone_no)
            formData.append('parent_phone_no', this.employee.parent_phone_no)
            formData.append('nid_no', this.employee.nid_no)
            formData.append('date_of_joining', this.employee.date_of_joining)
            formData.append('department', this.employee.department)
            formData.append('designation', this.employee.designation)
            formData.append('job_type', this.employee.job_type)
            formData.append('merit', this.employee.merit)
            formData.append('role', this.employee.role)
            formData.append('supervised_by', this.employee.supervised_by)
            formData.append('image', this.employee.image)


            this.$axios
                .$post("/employee/add", formData)
                .then((res) => {
                    this.employee = "";
                    this.errors = {};
                    this.$toaster.success("Employee Added Successfully");
                    this.$router.push("/employee/employee");       
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
