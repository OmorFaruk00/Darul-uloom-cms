<template>
    <div class="container">

        <h4 class="pt-5 text-center font-weight-bolder">Welcome To Leave Application System</h4>
        <div class="row mt-5 ">
            <div class="col-md-6 mb-4">
                <div class="p-5 form-shadow" >
                    <div class=" d-flex justify-content-center">
                        <img :src="base_url + '/images/emp/' + $auth.user.profile_photo" alt="image" class="profile" />
                    </div>
                    <div class="text-center">
                        <h4 class="pt-3">{{ $auth.user.name }}</h4>
                        <p>{{ $auth.user.rel_designation.designation }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 form-shadow">
                <div class="mt-3 table-responsive p-3 ">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Leave type</th>
                                <th scope="col">This Year</th>
                                <th scope="col">Last Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Earned</td>
                                <td v-if="this_year.Earned">{{ this_year.Earned.length }}</td>
                                <td v-else>0</td>
                                <td v-if="last_year.Earned">{{ last_year.Earned.length }}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Without Pay</td>
                                <td v-if="this_year.Without_Pay">{{ this_year.Without_Pay.length }}</td>
                                <td v-else>0</td>
                                <td v-if="last_year.Without_Pay">{{ last_year.Without_Pay.length }}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Study</td>
                                <td v-if="this_year.Study">{{ this_year.Study.length }}</td>
                                <td v-else>0</td>
                                <td v-if="last_year.Study">{{ last_year.Study.length }}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Maternity</td>
                                <td v-if="this_year.Maternity">{{ this_year.Maternity.length }}</td>
                                <td v-else>0</td>
                                <td v-if="last_year.Maternity">{{ last_year.Maternity.length }}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Others</td>
                                <td v-if="this_year.Others">{{ this_year.Others.length }}</td>
                                <td v-else>0</td>
                                <td v-if="last_year.Others">{{ last_year.Others.length }}</td>
                                <td v-else>0</td>

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
    layout: 'Leave-content',
    data() {
        return {
            this_year: '',
            last_year: '',
            base_url: process.env.url,
        }
    },
    mounted() {
        this.getLeaveReport();

    },
    methods: {

        getLeaveReport() {
            this.$axios.$get("/leave/application-report").then((response) => {
                this.this_year = response.this_year;
                this.last_year = response.last_year;
            }).catch((error) => {
                console.log(error);
                this.$toaster.error("Something  wrong");
            });
        },

    },

};
</script>
<style scoped>
.profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0px 50px;
    /* padding: 0px 40px; */
}
</style>