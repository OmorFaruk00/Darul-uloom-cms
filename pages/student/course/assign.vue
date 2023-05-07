<template>
    <div>
        <div class="col-md-4 mx-auto mt-5">
            <div class="form-group">
                <select class="form-control select" v-model="assign_id">
                    <option disabled selected value="">Select Course Teacher</option>
                    <option disable v-for="(teacher, index) in teachers" :key="index" :value="teacher.id"
                        v-text="teacher.name"></option>
                </select>
            </div>
        </div>
        <div class="">
            <div class="row">
                <div class="mx-auto col-md-12">
                    <div class="panel">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col col-sm-5 col-xs-12">
                                    <h6 class="title">course List</h6>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body table-responsive">
                            <table class="table table-striped table-bordered text-center">
                                <thead class="bg-dark text-white">
                                    <tr>
                                        <th>Sl</th>
                                        <th>Department</th>
                                        <th>Batch</th>
                                        <th>Course Name</th>
                                        <th>Course Code</th>
                                        <th>Course Teacher</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(course, index) in courses" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ course.department[0].department_name }}</td>
                                        <td>{{ course.batch[0].batch_name }}</td>
                                        <td>{{ course.course_name }}</td>
                                        <td>{{ course.course_code }}</td>
                                        <td v-if="course.assigned_by_id != null">{{ course.teacher[0].name }}</td>
                                        <td v-else>Not Assigned</td>
                                        <td>
                                            <div class="checkbox">
                                                <input type="checkbox" v-model="course_id" :value="course.id"
                                                    class="text-center select" :id="index">
                                                <label :for="index"></label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-end pt-4">
            <button class="btn-submit select" @click.prevent="CourseAssign()"
                v-if="$auth.user.permission.includes('Assign-course')">Assign</button>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'Student-content',
    data() {
        return {
            courses: '',
            teachers: '',
            assign_id: '',
            course_id: [],

        }
    },
    mounted() {
        this.fetchcourseInfo();
        this.fetchTeacher();

    },
    methods: {
        fetchcourseInfo() {
            this.$axios.$get('/student/course-show').then(response => {
                this.courses = response;
            }).catch((error) => {
                console.log(error);
            });


        },
        fetchTeacher() {
            this.$axios.$get("/student/teacher-show").then((response) => {
                this.teachers = response;
                console.log(response);
            }).catch((error) => {
                this.$toaster.error("Employee Not found");
            });

        },
        CourseAssign() {
            if (this.assign_id == '') {
                this.$toaster.error('Please Select Teacher');

            } else {
                this.$axios.$post("/student/assign-course-teacher", { "assign_id": this.assign_id, 'course_id': this.course_id }).then((response) => {
                    console.log(response);
                    this.$toaster.success(response.message);
                    this.fetchcourseInfo();
                    this.assign_id = '';
                    this.course_id = '';

                }).catch((error) => {
                    if (error.response.status == 401) {
                        this.$toaster.error(error.response.data.message);
                    }
                    console.log(error);
                });


            }

        }


    }

}
</script>
<style>
.table-bg {

    background: #337ab7;
    color: #fff;
}

.checkbox {
    display: inline-block;
}

.checkbox input[type=checkbox] {
    margin: 0;
    visibility: hidden;
    left: 1px;
    top: 1px;
}

.checkbox label {
    background: linear-gradient(to right, #f5f5f5 0, #f5f5f5 45%, #337ab7 55%, #007177 100%) 0 0;
    background-size: 650px 100%;
    width: 57px;
    height: 35px;
    margin: 0;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 500ms ease;
}

.checkbox label:before {
    content: "";
    color: #fd1a15;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    line-height: 28px;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    position: absolute;
    left: 3px;
    top: 3px;
    transition: all 150ms ease;
}

.checkbox input[type=checkbox]:checked+label {
    background-position-x: -400px;
}

.checkbox input[type=checkbox]:checked+label:before {
    content: "A";
    color: #007177;
    left: 25px;
}

@media only screen and (max-width:767px) {
    .checkbox {
        margin: 0 0 20px;
    }
}
</style>