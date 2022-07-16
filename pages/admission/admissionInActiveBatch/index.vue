<template>
    <div>
        <div class="d-flex justify-content-between pt-5">

            <div class="title">
                Admission In Active Batch
            </div>
            <div>
                <nuxt-link to="/admission/admissionInActiveBatch/create" class="btn-add">Admission</nuxt-link>
            </div>

        </div>
        <div>

            <div>


               <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                     <thead>
                        <tr>
                            <th>Department</th>
                            <th>Batch Number</th>
                            <th>Shift</th>
                            <th>Group</th>            
                            
                            <th>No. Of Seat</th>
                            <!-- <th>Fill</th> -->
                            <th>Available Seat</th>
                            <th>Session</th>
                            <th>Class Start Date</th>
                            <th>Last Date Of Admission</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody>

                             <tr v-for="batch in activeBatchs" :key="batch._id">                                        
                                        <td>{{ batch.department.department_name }}</td>
                                        <td>{{ batch.batch_name }}</td>
                                        <td>{{ batch.shift }}</td>
                                        <td>{{ batch.group }}</td>
                                        <td>{{ batch.no_of_seat }}</td>
                                        <td>{{ batch.no_of_seat }}</td>
                                        <!-- <td>{{ batch.no_of_seat }}</td> -->
                                        <td>{{ batch.session }}</td>
                                        <td>{{ batch.class_start_date }}</td>                                        
                                        <td>{{ batch.last_data_of_admission }}</td>

                                       
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
                .$get("admission/batch-show")
                .then((res) => {
                    console.log(res);
                    this.activeBatchs = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    }
}
</script>

