<template>
    <div>
        <div class="container">
            <h4 class="pt-3 text-center font-weight-bold">Search Department Wise Student</h4>
            <div class="row pt-3">
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <select name="department_id" v-model="student.department_id" class="form-control select" required
                        @change="fetchBatch">
                        <option value="" disabled selected>Select Department</option>
                        <option disable v-for="(department, index) in departments" :key="index" :value="department.id"
                            v-text="department.department_name"></option>
                    </select>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <input type="text" disabled class="form-control select" placeholder="Select Department first"
                        v-if="!batches" />
                    <select class="form-control select" v-model="student.batch_id" required v-else
                        @change="fetchStudent">
                        <option selected value="">Select Batch</option>
                        <option v-for="batch in batches" :key="batch.id" :value="batch.id" v-text="batch.batch_name">
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div v-if="show">
        <div class="panel-body table-responsive pt-5" v-if="students.length>0">
            <table class="table table-striped table-bordered text-center">
                <thead class="bg-dark text-white">
                    <tr>
                        
                        <th>SL</th>                        
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Reg. Code</th>                      
                        <th>Group</th>                      
                        <th>Father Name</th>                        
                        <th>Father Mobile</th>
                        <th v-if="$auth.user.permission.includes('Student-update')">Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in students" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ student.id }}</td>
                        <td>{{ student.student_name_english }}</td>
                        <td>{{ student.roll_no }}</td>
                        <td>{{ student.reg_no }}</td>
                        <td >{{student.group_id}}</td>                        
                        <td>{{ student.f_name }}</td>                       
                        <td>{{ student.f_cellno1 }}</td>
                        <td v-if="$auth.user.permission.includes('Student-update')">
                            <nuxt-link :to="`/admission/student-update/${student.id}`" class="btn-edit mr-3"
                                style="padding:7px 15px">
                                Edit
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h4 class="text-center mt-5">Student not Found</h4>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Adm-content",
    data() {
        return {
            show:false,
            student: {
                department_id: "",
                batch_id: "",
            },
            departments: "",
            batches: "",
            students: '',
        };
    },
    mounted() {
        this.fetchDepartmentInfo();
    },
    methods: {
        fetchDepartmentInfo() {
            this.$axios
                .$get("/admission/department")
                .then((response) => {
                    this.departments = response;
                })
                .catch((error) => {
                    this.$toaster.error("Department Not found");
                });
        },
        fetchBatch() {
            this.$axios
                .$get("/admission/batch/" + this.student.department_id)
                .then((response) => {
                    this.batches = response.data;
                })
                .catch((error) => {
                    this.$toaster.error("Batch Not found");
                });
        },
        fetchStudent() {
            this.$axios
                .$get("/admission/department-wise-student/" + this.student.department_id + '/' + this.student.batch_id)
                .then((response) => {
                    this.show = true;
                    this.students = response;
                })
                .catch((error) => {
                    if(error.response.status == 401){
                        this.$toaster.error(error.response.data.message)
                    }
                    console.log(error);
                });
        }
    },
};
</script>
<style>
.select {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: none;
}
</style>