<template>
    <div class="form-bg py-5">
        <div class="col-md-8 offset-md-2">
            <div class="form-shadow p-5">
                <h3 class="title">leave application</h3>
                <form>
                    <div class="row">
                        <div class="col-md-12 col-xl-12 col-sm-12">
                            <div class="form-group">
                                <label>Kinds of Leave *</label>
                                <select class="form-control" v-model="leave.kinds_of_leave">
                                    <option disabled selected value="">Open this select menu</option>
                                    <option value="Earned">Earned</option>
                                    <option value="Without_Pay">Without Pay</option>
                                    <option value="Study">Study</option>
                                    <option value="Maternity">Maternity</option>
                                    <option value="Others">Others</option>
                                </select>
                                <h6 v-if="errors.kinds_of_leave" v-text="errors.kinds_of_leave[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-12 col-sm-12">
                            <div class="form-group">
                                <label>Causes of Leave *</label>
                                <textarea type="text" class="form-control" 
                                    v-model="leave.causes_of_leave"></textarea>
                                <h6 v-if="errors.causes_of_leave" v-text="errors.causes_of_leave[0]" class="text-danger"></h6>
                            </div>
                        </div>

                        <div class="col-md-12 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Starting Date *</label>
                              <input type="date" class="form-control" v-model="leave.start_date">
                                <h6 v-if="errors.start_date" v-text="errors.start_date[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                         <div class="col-md-12 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Ending Date *</label>
                              <input type="date" class="form-control" v-model="leave.end_date">
                                <h6 v-if="errors.end_date" v-text="errors.end_date[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                           <div class="col-md-12 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>No of Days *</label>
                              <input type="text" class="form-control" v-model="leave.no_of_day">
                                <h6 v-if="errors.no_of_day" v-text="errors.no_of_day[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-12 col-sm-12">
                            <div class="form-group">
                                <label>Do you need permission to leave office? ( If Yes, Please specify why? ) *</label>

                                <input type="text" class="form-control"
                                    v-model="leave.need_permission" />
                                <h6 v-if="errors.need_permission" v-text="errors.need_permission[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-12 col-sm-12">
                            <div class="form-group">
                                <label>Who will be In-charge of your duty on above dates *</label>
                                 <select class="form-control" v-model="leave.in_charge">
                                    <option disabled selected value="">Open this select menu</option>
                                    <option  v-for="(employee, index) in employees" :key="index"
                                        :value="employee.id" v-text="employee.name"></option>
                                    
                                </select>
                                <h6 v-if="errors.in_charge" v-text="errors.in_charge[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="form-group pl-3">
                            <input type="checkbox" class="mr-2" v-model="leave.accept_it">
                            <label for="">If I find any difference in my salary as leave rules. I'll accept it. *</label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="submitApplication()">Submit</button>
                    </div>
                </form>        

            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Leave-content",
    mounted() {
        this.fetchEmployee();
        

    },
    data() {
        return {
            errors:'',
            employees:'',
            leave:{
                kinds_of_leave:'',
                causes_of_leave:'',
                need_permission:'',
                start_date:'',
                end_date:'',               
                no_of_day:'',
                accept_it:'',
                in_charge:'',
            }
        }
    },
    methods: {     

          fetchEmployee() {
            this.$axios.$get("/employee/show").then((response) => {                
                this.employees = response;
            }).catch((error) => {
                this.$toaster.error("Employee Not found");
            });

        },


        submitApplication() {
            this.$axios
                .$post("/leave/application-store", this.leave)
                .then((response) => {
                    console.log(response);
                    this.leave = "";
                    this.errors = '';
                    this.$toaster.success(response.message);                    
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },





    },


};

</script>
<style scoped>
</style>
