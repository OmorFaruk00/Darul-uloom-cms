<template>
<div>
    <div class="form-bg py-5" v-if="$auth.user.permission.includes('Attendance-report')">
        <div class="col-md-8 offset-md-2" v-if="show">
            <div class="form-shadow p-5">
                <h3 class="title">find report </h3>
                <div class="row">
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Department *</label>
                            <select class="form-control select" v-model="report.department" @change="fetchBatch()">
                                <option disabled selected value="">Select Department</option>
                                <option disable v-for="(department, index) in departments" :key="index"
                                    :value="department.id" v-text="department.department_name"></option>

                            </select>
                            <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger mt-1">
                            </h6>
                        </div>
                    </div>
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Batch *</label>
                            <input type="text" disabled class="form-control select"
                                placeholder="Select Department First" v-if="!batches" />
                            <select class="form-control select" v-model="report.batch" required v-else
                                @change="fetchCourse()">
                                <option selected value="">Select Batch</option>
                                <option v-for="batch in batches" :key="batch.id" :value="batch.id"
                                    v-text="batch.batch_name">
                                </option>
                            </select>
                            <h6 v-if="errors.batch" v-text="errors.batch[0]" class="text-danger mt-1"></h6>
                        </div>
                    </div>
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Course Name *</label>
                            <input type="text" disabled class="form-control select" placeholder="Select Batch First"
                                v-if="!courses" />
                            <select class="form-control select" v-model="report.course_name" v-else>
                                <option disabled selected value="">Select Course</option>
                                <option disable v-for="(course, index) in courses" :key="index"
                                    :value="course.course_name" v-text="course.course_name"></option>
                            </select>
                            <h6 v-if="errors.course_name" v-text="errors.course_name[0]" class="text-danger mt-1"></h6>
                        </div>
                    </div>
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Date *</label>
                            <input type="date" class="form-control select" v-model="report.date" />
                            <h6 v-if="errors.date" v-text="errors.date[0]" class="text-danger mt-1"></h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end pt-3">
                    <button class="btn-submit" @click.prevent="findReport()">Find</button>
                </div>
            </div>
        </div>
        <div v-if="report_table">
            <div class="col-md-4 mx-auto" v-if="report_list.length > 0">
                <h3 class="text-center ">Attendance Report</h3>
                <div class="row p-3">
                    <div class="col-md-12 col-sm-12 col-xl-6">
                        <p><strong>Department Name :</strong> {{ report_list[0].department_name }}</p>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xl-6">
                        <p><strong>Batch :</strong> {{ report_list[0].batch.batch_name }}</p>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xl-6">
                        <p><strong>Course Name :</strong> {{ report_list[0].course_name }} </p>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xl-6">
                        <p><strong>Course Code :</strong> {{ report_list[0].course_code }}</p>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xl-6">
                        <p><strong>Date:</strong> {{ report_list[0].date }}</p>
                    </div>
                     <div class="col-md-12 col-sm-12 col-xl-6">
                        <p><strong>Total Attendance :</strong> {{ report_list[0].report.length }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-10 mx-auto panel-body table-responsive" v-if="report_list.length > 0">
                <table class="table table-striped table-bordered text-center">
                    <thead class="bg-dark text-white">
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Student Id</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(report, index) in report_list[0].report" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ report.student.student_name }}</td>
                            <td>{{ report.student.roll_no }}</td>
                            <td>{{ report.student_id }}</td>
                            <td v-if="report.comments!=null">{{ report.comments }}</td>
                            <td v-else>N/C</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn-print float-right mt-4" @click="PrintReport(report_list[0].id)">Print Report</button>
            </div>
            <div v-else>
                <h3 class="text-center">Attendance Not Found</h3>
            </div>
        </div>
        </div>
       <h2 class="text-center text-danger mt-5" v-else>You are not authorized</h2>
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
            courses: '',
            show: true,
            report_table: false,
            report_list: '',
            report: {
                course_name: '',
                department: '',
                batch: '',
                date: ''

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
            this.$axios.$get("/admission/batch/" + this.report.department).then((response) => {
                this.batches = response.data;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchCourse() {
            this.$axios.$get("/student/course/" + this.report.department).then((response) => {
                this.courses = response;
            }).catch((error) => {
                this.$toaster.error("Course Not found");
            });
        },
        findReport() {
            this.$axios
                .$post("/student/attendance-report", this.report)
                .then((response) => {
                    this.show = false;
                    this.report_table = true;
                    this.report_list = response;
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
        PrintReport($id) {       
            this.$axios
                .$get("/student/attendance-report-print/"+ $id ,{
                    responseType: "blob",
                })
                .then((response) => {                   
                    const url = window.URL.createObjectURL(new Blob([response]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "attendance-report.pdf");
                    document.body.appendChild(link);
                    link.click();
                })
                .catch((error) => {
                    this.error = error.response.data.errors;
                });
        },
    },

};

</script>
<style scoped>
</style>
