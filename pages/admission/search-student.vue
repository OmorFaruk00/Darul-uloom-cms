<template>
    <div>
        <div class="col-md-4 mt-5 mx-auto d-flex">
            <input type="text" class="form-control select" placeholder="Enter Reg/Name" v-model="search_item">
            <button class="btn-submit ml-3" @click="studentSearch()">Search</button>
        </div>
        <div class="panel-body table-responsive pt-5">
            <table class="table table-striped text-center" v-if="students">
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


    </div>
</template>
<script>
export default {
    layout: 'Adm-content',
    data() {
        return {
            students: '',
            search_item: '',
        }
    },
    methods: {
        studentSearch() {
            this.$axios
                .$get("/admission/search-student/" + this.search_item)
                .then((response) => {
                    this.students = response;
                })
                .catch((error) => {
                    this.$toaster.error("Student Not Found");
                });
        }
    }
}
</script>
<style>
.select {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: none;
}
</style>