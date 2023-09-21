<template>
    <div>
        <div class="pt-5" v-if="auth">
            <div class="row">
                <div class="mx-auto col-md-12">
                    <div class="panel">
                        <div class="panel-heading container mb-5 ">
                            <div class="row">

                                <div class="col-md-6  col-sm-12 col-xl-4 mb-2">
                                    <div class="input-group form-inline ">
                                        <label for="" class="mr-2">Purpose</label>
                                        <select name="" id="" class="form-control" v-model="purpose">
                                            <option value="" selected> - All -</option>
                                            <option v-for="(purpose, index) in purpose_list" :key="index"
                                                :value="purpose.id">
                                                {{ purpose.name }}
                                            </option>
                                        </select>

                                    </div>
                                </div>
                                <div class="col-md-6  col-sm-12 col-xl-3 mb-2">
                                    <div class="input-group form-inline ">
                                        <label for="" class="mr-2">Form date</label>
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><img src="/images/calender.png" height="15px"
                                                    alt=""></div>
                                        </div>
                                        <input type="date" class="form-control" v-model="start_date">
                                    </div>
                                </div>
                                <div class="col-md-6  col-sm-12 col-xl-5 mb-2">
                                    <div class="input-group form-inline ">
                                        <label for="" class="mr-2">To date</label>
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><img src="/images/calender.png" height="15px"
                                                    alt=""></div>
                                        </div>
                                        <input type="date" class="form-control" v-model="end_date">
                                        <button class=" btn btn-info mx-5" @click="getData()">Search</button>
                                    </div>
                                </div>
                            </div>     
                        </div>
                        <div class="d-flex justify-content-between">
                                <div>
                                    <h4>Expense List</h4>
                                </div>
                                <div>
                                    <nuxt-link to="/account/expense/create" class="btn-add">Create</nuxt-link>
                                </div>
                            </div>                        
                        <div class="panel-body table-responsive">
                            <table class="table table-striped table-bordered">
                                <tr>
                                    <th>SL</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                                <tbody>
                                    <tr v-for="(expense, index) in expenses" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ expense.purpose.name }}</td>
                                        <td>{{ expense.date }}</td>
                                        <td>{{ expense.amount }}</td>


                                    </tr>
                                    <tr>
                                        <th colspan="3" class="text-right">Total Amount</th>
                                        <th>{{ total_expense }}</th>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <h2 class="text-center text-danger mt-5" v-else>You are not authorized</h2>
    </div>
</template>
<script>
export default {
    layout: "Account-content",
    mounted() {
        this.getData();
        this.getPurpose();
    },
    data() {
        return {
            auth: true,
            expenses: [],
            total_expense: '',
            errors: {},
            start_date: '',
            end_date: '',
            purpose: "",
            purpose_list:'',
        };
    },
    methods: {
        getPurpose() {
      this.$axios
        .$get("/accounts/purpose/Expense")
        .then((response) => {
          this.purpose_list = response;
          console.log(response)
        })
        .catch((error) => {
          this.$toaster.error("Purpose Not found");
        });

    },
        getData() {
            this.$axios
            .$post("/accounts/expense-list", { "start_date": this.start_date, "end_date": this.end_date,"purpose":this.purpose })
                .then((res) => {
                    this.expenses = res.expense;
                    this.total_expense = res.total_expense;
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        this.auth = false;
                        this.$toaster.error(error.response.data.message);
                    }
                });
        },




    },
};
</script>
<style scoped></style>
  