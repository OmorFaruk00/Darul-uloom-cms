<template>
    <div>
        <div class="col-md-4 mt-5 mx-auto d-flex">
            <input type="text" class="form-control select" placeholder="Enter Reg/Name" v-model="search_item">
            <button class="btn-submit ml-3" @click="studentSearch()">Search</button>
        </div>
        <div v-if="show">
            <div class="panel-body table-responsive pt-5" v-if="students.length > 0">
                <table class="table table-stripedn table-bordered" v-if="students">
                    <thead class="bg-dark text-white">
                        <tr>
                            <th>Serial</th>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Reg. Code</th>                           
                            <th>Guardian Name</th>
                            <th>Guardian Phone</th>                           

                            <!-- <th>Action</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(student, index) in students" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ student.id }}</td>
                            <td>{{ student.student_name_english }}</td>
                            <td>{{ student.roll_no }}</td>
                            <td>{{ student.reg_no }}</td>                            
                            <td>{{ student.g_name }}</td>
                            <td>{{ student.g_cellno1 }}</td>

                            <!-- <td>
                            <nuxt-link :to="`/admission/student-update/${student.id}`" class="btn-edit mr-3"
                                style="padding:7px 15px">
                                Edit
                            </nuxt-link>
                        </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <h4 class="text-center mt-5">Student Not Found</h4>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    layout: 'Student-content',
    data() {
        return {
            show: false,
            students: '',
            search_item: '',
        }
    },
    methods: {
        studentSearch() {
            this.$axios
                .$get("/admission/search-student/" + this.search_item)
                .then((response) => {
                    this.show = true;
                    this.students = response;
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        this.$toaster.error(error.response.data.message);
                    }
                    console.log(error);
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