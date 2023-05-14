<template>
    <div class="col-xl-8 mx-auto my-5 p-5 form-shadow">
         <div class="d-flex justify-content-between">
            <h2 class="title">Update Batch</h2>
            <div><nuxt-link to="/admission/batch" class="btn-add">Batch List</nuxt-link></div>            
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="department">Department <span class="text-danger">*</span></label>
                        <select v-model="batch.department_id" id="department" class="form-control" required>
                            <option v-for="(department, index) in departments" :key="index"
                                :value="department.id" v-text="department.department_name"></option>
                        </select>
                        <small v-if="errors.department" class="text-danger with-errors"
                            v-html="errors.department[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="group_id">Group <span class="text-danger">*</span></label>
                        <select name="group_id" v-model="batch.group" class="form-control" required>
                            <option value="" disabled selected>Select Group</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        <small v-if="errors.group_id" class="text-danger with-errors"
                            v-html="errors.group_id[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="shift">Shift <span class="text-danger">*</span></label>
                        <select name="shift" v-model="batch.shift" id="shift" class="form-control" required>
                            <option value="" disabled selected>Select Shift</option>
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                        </select>
                        <small v-if="errors.shift" class="text-danger with-errors" v-html="errors.shift[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="batch_name">Batch Name <span class="text-danger">*</span></label>
                        <input type="text" v-model="batch.batch_name" class="form-control"
                            placeholder="Enter batch name">

                        <small v-if="errors.batch_name" class="text-danger with-errors"
                            v-html="errors.batch_name[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="tution_fee">Tution Fee <span class="text-danger">*</span></label>
                        <input type="number" v-model="batch.tution_fee" class="form-control" placeholder="Enter said fee">
                        <small v-if="errors.tution_fee" class="text-danger with-errors"
                            v-html="errors.tution_fee[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="common_scholarship">Common Scholarship <span class="text-danger">*</span></label>
                        <input type="number" v-model="batch.common_scholarship" class="form-control"
                            placeholder="Enter common scholarship">
                        <small v-if="errors.common_scholarship" class="text-danger with-errors"
                            v-html="errors.common_scholarship[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="no_of_seat">No. Of Seat <span class="text-danger">*</span></label>
                        <input type="number" v-model="batch.no_of_seat" class="form-control"
                            placeholder="Enter no of seat">

                        <small v-if="errors.no_of_seat" class="text-danger with-errors"
                            v-html="errors.no_of_seat[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="year">Year <span class="text-danger">*</span></label>

                        <select name="year" v-model="batch.year" id="year" class="form-control" required>
                            <option v-for="(year, index) in years" :key='index' :value="year" v-text="year"></option>
                        </select>
                        <small v-if="errors.year" class="text-danger with-errors" v-html="errors.year[0]"></small>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="session">Session <span class="text-danger">*</span></label>

                        <select name="session" v-model="batch.session" id="session" class="form-control" required>
                            <option v-for="(year, index) in years" :key="index" :value="sessionYear(year)"
                                v-text="sessionYear(year)">
                            </option>

                        </select>

                        <small v-if="errors.session" class="text-danger with-errors" v-html="errors.session[0]"></small>

                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="admission_season">Admission Season <span class="text-danger">*</span></label>

                        <select name="admission_season" v-model="batch.admission_season" id="admission_season"
                            class="form-control" required>

                            <option value="1">Spring</option>
                            <option value="2">Summer</option>
                            <option value="3">Fall</option>

                        </select>

                        <small v-if="errors.admission_season" class="text-danger with-errors"
                            v-html="errors.admission_season[0]"></small>
                    </div>
                </div>
            </div>
             <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="no_of_seat">Duration <span class="text-danger">*</span></label>
                        <input type="number" v-model="batch.duration" class="form-control"
                            placeholder="Enter Duration">

                        <small v-if="errors.duration" class="text-danger with-errors"
                            v-html="errors.duration[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="id_card_expiration_date">ID Card Expiration Date <span
                                class="text-danger">*</span></label>

                        <input type="date" class="form-control" v-model="batch.id_card_expiration_date">


                        <small v-if="errors.id_card_expiration_date" class="text-danger with-errors"
                            v-html="errors.id_card_expiration_date[0]"></small>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="class_start_date">Class Start Date</label>
                        <input type="date" v-model="batch.class_start_date" class="form-control">

                        <small v-if="errors.class_start_date" class="text-danger with-errors"
                            v-html="errors.class_start_date[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="last_data_of_admission">Last Data of Admission</label>
                        <input type="date" v-model="batch.last_data_of_admission" class="form-control">

                        <small v-if="errors.last_data_of_admission" class="text-danger with-errors"
                            v-html="errors.last_data_of_admission[0]"></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="form-group">
                    <div class="form-group">
                        <label for="admission_start_date">Admission start date <span
                                class="text-danger">*</span></label>
                        <input type="date" v-model="batch.admission_start_date" class="form-control">

                        <small v-if="errors.admission_start_date" class="text-danger with-errors"
                            v-html="errors.admission_start_date[0]"></small>
                    </div>
                </div>
            </div>
         <div class="d-flex justify-content-end col-xl-12">
            <button type="button" class="btn-submit my-4" @click="updateBatch()">Update</button>
            </div>
        </div>     

    </div>
</template>
<script>
export default {
    layout: 'Adm-content',
    computed: {
        years() {
            const year = new Date().getFullYear();
            let data = Array.from({ length: (year + 1) - 2020 }, (value, index) => 2020 + index);
            return data.slice().reverse();
        },

    },
    mounted() {
        this.getDepartment();
        this.editBatch();
    },
    data() {
        return {
            batch: ({
                department_id: '',
                duration:'',
                group: '',
                shift: '',
                batch_name: '',
                tution_fee: '',
                common_scholarship: '',
                no_of_seat: '',
                year: '',
                session: '',
                admission_season: '',                
                id_card_expiration_date: '',
                class_start_date: '',
                last_data_of_admission: '',
                payment_system: '',
                admission_start_date: '',
            }),

            errors: '',
            loading: false,
            departments: [],
            shifts: [],
            groups: [],
            campuses: [],
            paymentSystems: [],

        }
    },
    methods: {

        sessionYear(year) {
            return `${year}-${year + 1}`;
        },

        getDepartment() {
            this.$axios
                .$get("/admission/department")
                .then((response) => {
                    this.departments = response;
                })
                .catch((error) => {
                    console.log(error);
                    this.errors = error.response.message.errors;
                });
        },
        editBatch() {
            this.$axios
                .$get("/admission/batch-edit/" + this.$route.params.id)
                .then((response) => {
                    // console.log(response.department.department_name);
                    this.batch = response;
                    
                })
                .catch((error) => {
                    this.errors = error.response.message.errors;
                });
        },

        updateBatch() {
            this.$axios
                .$post("/admission/batch-update/"+this.$route.params.id,this.batch)
                .then((response) => {
                    this.$toaster.success(response.message);
                    this.$router.push("/admission/batch");

                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });

        }

    },

}
</script>