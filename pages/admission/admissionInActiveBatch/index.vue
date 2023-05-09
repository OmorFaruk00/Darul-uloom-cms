<template>
    <div>
        <div class="d-flex justify-content-between pt-5">
            <div class="title">
                Admission In Active Batch
            </div>
            <!-- <div>
                <nuxt-link to="/admission/admissionInActiveBatch/create" class="btn-add" v-if="$auth.user.permission.includes('Student-admission')"><svg height='25px'
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>Admission</nuxt-link>
            </div> -->
        </div>
        <div>
            <div>
               <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered text-center">
                     <thead class="bg-dark text-white">
                        <tr>
                            <th>Sl</th>
                            <th>Department</th>
                            <th>Batch</th>
                            <th>Shift</th>
                            <th>Group</th>                    
                            <th>No. Of Seat</th>                            
                            <!-- <th>Available Seat</th> -->
                            <th>Session</th>
                            <th>Class Start Date</th>
                            <th>Last Date Of Admission</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                             <tr v-for="(batch,index) in activeBatchs" :key="index">                                        
                                        <td>{{ index +1 }}</td>
                                        <td>{{ batch.department.department_name }}</td>
                                        <td>{{ batch.batch_name }}</td>
                                        <td>{{ batch.shift }}</td>
                                        <td>{{ batch.group }}</td>
                                        <td>{{ batch.no_of_seat }}</td>
                                        <!-- <td v-if="batch.available_seat !==0">{{ batch.available_seat }}</td>
                                        <td v-else> Seat not available</td> -->
                                        <!-- <td>{{ batch.no_of_seat }}</td> -->
                                        <td>{{ batch.session }}</td>
                                        <td>{{ batch.class_start_date }}</td>                                        
                                        <td>{{ batch.last_data_of_admission }}</td>  
                                        <td>
                                            <nuxt-link :to="`/admission/admissionInActiveBatch/create/${batch.id}`" class="btn-add mr-3"
                                                style="padding:7px 15px"
                                                >
                                                Add
                                            </nuxt-link>
                                            <nuxt-link :to="`/admission/batch/batchwisestudent/${batch.id}`" class="btn-edit"
                                                style="padding:7px 15px"
                                                >
                                                Show
                                            </nuxt-link>
                                           
                                        </td>                                     
                                    </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'Adm-content',
    data(){
        return{
            activeBatchs:'',

        }
    },
    mounted(){
         this.getbatch();

    },
    methods:{
            getbatch() {
            this.$axios
                .$get("admission/active-batch")
                .then((res) => {                   
                    this.activeBatchs = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    }
}
</script>

