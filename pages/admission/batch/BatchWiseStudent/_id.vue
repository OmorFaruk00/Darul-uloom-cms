<template>
    <div>       
        <div>
            <div class="d-flex justify-content-end mt-4">         
                <nuxt-link to="/admission/admissionInActiveBatch" class="btn-add" >Admission In Active Batch List</nuxt-link>    
        </div>
        <div class="panel-body table-responsive pt-3" v-if="students.length>0">
            <table class="table table-striped table-bordered text-center">
                <thead class="bg-dark text-white">
                    <tr>
                        <th>Serial</th>                    
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Reg. Code</th>                      
                        <th>Admission Form Sl</th>                      
                        <th>Admited By</th>                        
                      
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in students" :key="index">
                        <td>{{ index + 1 }}</td>                       
                        <td>{{ student.student_name_english }}</td>
                        <td>{{ student.roll_no }}</td>
                        <td>{{ student.reg_no }}</td>
                        <td >{{student.adm_frm_sl}}</td>                        
                        <td >{{student.employee.name}}</td>                        
                     
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
    layout: 'Adm-content',
    data() {
        return {
            
            students: '',
            
        }
    },
    mounted(){
        this.fetchStudent();

    },
    methods: {
        fetchStudent() {
            this.$axios
                .$get("/admission/batch-wise-student/"+this.$route.params.id)
                .then((response) => {
                   
                    this.students = response;
                })
                .catch((error) => {
                    if(error.response.status == 401){
                        this.$toaster.error(error.response.data.message)
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