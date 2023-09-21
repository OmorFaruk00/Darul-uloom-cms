<template>
    <div>
        <div class="pt-5" v-if="auth">
            <div class="row">
                <div class="mx-auto col-md-12">
                    <div class="panel">
                        
                        <div class="d-flex justify-content-between">
                                <div>
                                    <h4>Deposite List</h4>
                                </div>
                                <div>
                                    <nuxt-link to="/account/deposite/create" class="btn-add">Create</nuxt-link>
                                </div>
                            </div>                        
                        <div class="panel-body table-responsive mt-3">
                            <table class="table table-striped table-bordered" v-if="deposites.length>0">
                                <tr>
                                    <th>SL</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                                <tbody>
                                    <tr v-for="(deposite, index) in deposites" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ deposite.purpose.name }}</td>
                                        <td>{{ deposite.date }}</td>
                                        <td>{{ deposite.amount }}</td>


                                    </tr>
                                    <tr>
                                        <th colspan="3" class="text-right">Total Amount</th>
                                        <th>{{ total_deposite }}</th>

                                    </tr>
                                </tbody>
                            </table>
                            <div v-else>
                               <h4 class="text-center text-danger mt-5 card py-5">Deposite is empty</h4>
                            </div>
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
    },
    data() {
        return {
            auth: true,
            deposites: [],           
            total_deposite:'',
        };
    },
    methods: {
    
        getData() {
            this.$axios
            .$get("/accounts/deposite-list")
                .then((res) => {
                    this.deposites = res.deposite;
                    this.total_deposite = res.total_deposite;
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
  