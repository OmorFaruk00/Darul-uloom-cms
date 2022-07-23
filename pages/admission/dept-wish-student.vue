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
        <div class="panel-body table-responsive pt-5" v-if="students">
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Reg. Code</th>
                        <!-- <th>Group</th> -->
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>F Name</th>
                        <th>E Name</th>
                        <th>E Cell</th>
                        <th>Student ID</th>
                        <!-- <th>Action</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in students" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ student.student_name }}</td>
                        <td>{{ student.roll_no }}</td>
                        <td>{{ student.reg_code }}</td>
                        <!-- <td >{{student.GROUP}}</td> -->
                        <td>{{ student.email }}</td>
                        <td>{{ student.phone_no }}</td>
                        <td>{{ student.f_name }}</td>
                        <td>{{ student.e_name }}</td>
                        <td>{{ student.e_cellno }}</td>
                        <td>{{ student.id }}</td>
                        <td>
                            <!-- <nuxt-link :to="`/admission/student-update/${student.id}`" class="btn-edit mr-3"
                                style="padding:7px 15px">
                                Edit
                            </nuxt-link> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- <div v-else>
                        <h4>No Student Fount</h4>
                    </div> -->
    </div>
</template>
<script>
export default {
    layout: "Adm-content",
    data() {
        return {
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
                    this.students = response;
                })
                .catch((error) => {
                    this.$toaster.error("Student Not found");
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