<template>
    <div>
        <div v-if="courses.length > 0">
            <h2 class="text-center my-3 ">Attendance Courses</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered text-center">
                    <thead class="bg-dark text-white">
                        <tr>
                            <th>SL</th>
                            <th>Department</th>
                            <th>Batch</th>
                            <th>Course</th>
                            <th>Course Code</th>
                            <th style="width:250px">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course, index) in courses" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ course.department[0].department_name }}</td>
                            <td>{{ course.batch[0].batch_name }}</td>
                            <td>{{ course.course_name }}</td>
                            <td>{{ course.course_code }}</td>
                            <td>
                                <nuxt-link :to="`/student/attendance/create/${course.id}`" class="btn-submit select">
                                    Take Attendance</nuxt-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else>
            <h2 class="text-center mt-4">You have no assigned course</h2>

        </div>
    </div>
</template>
<script>
export default {
    layout: 'Student-content',
    data() {
        return {
            courses: ''
        }
    },
    mounted() {
        this.fetchAttendanceCourse();

    },
    methods: {
        fetchAttendanceCourse() {
            this.$axios.$get("/student/attendance-show/").then((response) => {
                this.courses = response;               
                
            });
        },
    }
}
</script>