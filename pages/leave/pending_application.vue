<template>
    <div >
    <div v-if="applications.length>0">
        <div class="container my-5" v-for="(application,index) in applications" :key="index">
            <div class="form-shadow mt-5">
                <div class="card-header line_height pt-4 pl-4">
                    <p> <strong class="font-weight-bold">Aplication ID :</strong> {{application.id}}</p>
                    <p> <strong class="font-weight-bold">Aplication Date :</strong> {{application.created_at}}</p>
                </div>
                <div class="card-body">   

                    <div class="mt-3 form-shadow table-responsive">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                     <td style="width:50%" class="text-left line_height pt-4">
                                        <p class="font-weight-bold"> Aplicant By</p>
                                        <p> {{application.applied_by.name}}</p>
                                        <p> {{application.applied_by.rel_designation.designation}}</p>
                                      
                                    </td>
                                    <td style="width:50%" class="text-right line_height pt-4">
                                        <p class="font-weight-bold"> Approvel By</p>
                                       <p> {{application.approved_by.name}}</p>
                                        <p> {{application.approved_by.rel_designation.designation}}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-3 form-shadow table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Leave Start</th>
                                    <th scope="col">Leave End</th>
                                    <th scope="col">Kind of Leave</th>
                                    <th scope="col">Cause</th>
                                    <th scope="col">No of Days</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{application.start_date}}</td>
                                    <td>{{application.end_date}}</td>
                                    <td>{{application.kinds_of_leave}}</td>
                                    <td>{{application.causes_of_leave}}</td>
                                    <td>{{application.no_of_days}}</td>         
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button class="btn-delete" @click='WidthdrawApplication(application.id)'>
                        Withdraw
                    </button>
                </div>
            </div>
        </div>  
        </div>
        <div v-else>
            <h2 class="text-center mt-4">Application Not Pending</h2>

        </div> 
    </div>
</template>
<script>
export default {
    layout: 'Leave-content',
    data(){
        return{
            applications:'',           

        }
    },
      mounted() {
        this.getPandingApplications();       

    },
        methods: {         

          getPandingApplications() {
            this.$axios.$get("/leave/application-pending").then((response) => {                              
                this.applications = response;
            }).catch((error) => {
                this.$toaster.error("Something  wrong");
            });
        },
        WidthdrawApplication($id){
               this.$axios.$get("/leave/application-withdraw/"+$id).then((response) => { 
               this.getPandingApplications();    
               this.$toaster.success(response.message);
            }).catch((error) => {
                this.$toaster.error("Something wrong");
            });
        }
    },

};
</script>
<style scoped>
</style>