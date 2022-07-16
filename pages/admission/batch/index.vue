<template>
    <div>
        <div class="pt-5">
            <div class="row">
                <div class="mx-auto col-md-12">
                    <div class="panel">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col col-sm-5 col-xs-12">
                                    <h6 class="title">batch List</h6>
                                </div>
                                <div class="col-sm-7 col-xs-12 text-right">
                                    <nuxt-link to="/admission/batch/create" class="btn-add">Add batch</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body table-responsive">
                            <table class="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Department </th>
                                        <th>Group / Shift</th>
                                        <th>Batch Name</th>
                                        <th>No. Of Seat</th>
                                        <th>Year/Season</th>
                                        <th>Class Start Date</th>
                                        <th>Admission Start Date</th>
                                        <th>Last Date Of Admission</th>
                                        <th>Status</th>
                                        <th style="width:200px">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="batch in batchs" :key="batch._id">
                                        <td>{{ batch.id}}</td>
                                        <td>{{ batch.department.department_name }}</td>
                                        <td>{{ batch.group }}/{{ batch.shift }}</td>
                                        <td>{{ batch.batch_name }}</td>
                                        <td>{{ batch.no_of_seat }}</td>
                                        <td>{{ batch.year }}/{{ batch.session }}</td>
                                        <td>{{ batch.class_start_date }}</td>
                                        <td>{{ batch.admission_start_date }}</td>
                                        <td>{{ batch.last_data_of_admission }}</td>

                                        <td>
                                            <button v-if="batch.status == 1" class="btn-active"
                                                @click="batchStatus(batch.id)">
                                                Active
                                            </button>
                                            <button v-if="batch.status == 0" class="btn-inactive"
                                                @click="batchStatus(batch.id)">
                                                Inactive
                                            </button>
                                        </td>
                                        <td>
                                            <nuxt-link :to="`/admission/batch/update/${batch.id}`" class="btn-edit mr-3" style="padding:7px 15px">
                                                Edit
                                            </nuxt-link>
                                            <button class="btn-delete " @click="batchDelete(batch.id)">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
export default {
    layout: "Adm-content",
    mounted() {
        this.getbatch();

    },
    data() {
        return {
            batchs: [],
            errors: {},
        };
    },
    methods: {
        getbatch() {
            this.$axios
                .$get("admission/batch-show")
                .then((res) => {
                    console.log(res);
                    this.batchs = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        batchDelete(id) {
            if (confirm("Are you sure to delete this batch?")) {
                this.$axios
                    .$get("admission/batch-delete/" + id)
                    .then((res) => {
                        this.getbatch();
                        this.$toaster.error(res.message);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        batchStatus(id, status) {
            this.$axios
                .$get("admission/batch-status/" + id)
                .then((res) => {
                    this.getbatch();
                    this.$toaster.success(res.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
<style scoped>
</style>
