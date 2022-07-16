<template>
    <div class="form-bg py-5">
        <div class="container">
            <div class="form-container">
                <h3 class="title">Create Committee Member</h3>
                <form class="form-horizontal">
                    <div class="row">
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Committee Type *</label>
                                <select class="form-control" v-model="committee.committee_type">
                                    <option disabled selected value="">Select committee type</option>
                                    <option value="Majlishe_Shura">Majlishe Shura</option>
                                    <option value="Majlishe_Alema">Majlishe Alema</option>


                                </select>
                                <h6 v-if="errors.committee_type" v-text="errors.committee_type[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Member Type *</label>
                                <select class="form-control" v-model="committee.member_type">
                                    <option disabled selected value="">Select Member type</option>                                   
                                    <option value="President">President</option>
                                    <option value="Co-president">Co-president</option>
                                    <option value="General Secretary">General Secretary</option>
                                    <option value="Joint Editor">Joint Editor</option>
                                    <option value="Treasurer">Treasurer</option>
                                    <option value="Teacher representative">Teacher representative</option>
                                    <option value="Member">Member</option>

                                </select>
                                <h6 v-if="errors.member_type" v-text="errors.member_type[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Member Name *</label>
                                <input type="text" class="form-control" placeholder="Member Name"
                                    v-model="committee.member_name" />
                                <h6 v-if="errors.member_name" v-text="errors.member_name[0]" class="text-danger"></h6>
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Profassion *</label>
                                <input type="text" class="form-control" placeholder="profession"
                                    v-model="committee.profession" />
                                <h6 v-if="errors.profession" v-text="errors.profession[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Date Of Birth *</label>
                                <input type="date" class="form-control" placeholder="Date Of Birth"
                                    v-model="committee.date_of_birth" />
                                <h6 v-if="errors.date_of_birth" v-text="errors.date_of_birth[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Personal Phone No *</label>
                                <input type="number" class="form-control" placeholder="Phone Number"
                                    v-model="committee.personal_phone_no" />
                                <h6 v-if="errors.personal_phone_no" v-text="errors.personal_phone_no[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Alternative Phone No</label>
                                <input type="number" class="form-control" placeholder="Alternative Phone No"
                                    v-model="committee.alternative_phone_no" />
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Home Phone No</label>
                                <input type="number" class="form-control" placeholder="Home Phone No"
                                    v-model="committee.home_phone_no" />
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>NID No *</label>
                                <input type="number" class="form-control" placeholder="NID No"
                                    v-model="committee.nid_no" />
                                <h6 v-if="errors.nid_no" v-text="errors.nid_no[0]" class="text-danger"></h6>
                            </div>
                        </div>
                          <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Image *</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (committee.image = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.image" v-text="errors.image[0]" class="text-danger"></h6>
                            </div>
                        </div>                       
                        
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                            <button class="btn-submit" @click.prevent="addCommittee()">Submit</button>
                        </div>
                </form>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Dum-content",
    mounted() {

    },
    data() {
        return {
           
            errors: [],
            committee: {
                member_name: '',
                profession: '',
                committee_type: '',
                member_type: '',              
                date_of_birth: '',
                personal_phone_no: '',
                alternative_phone_no: '',
                home_phone_no: '',
                nid_no: '',
                image: '',
                

            }
        }

    },
    methods: {

        addCommittee() {        


            let formData = new FormData();
            formData.append('committee_type', this.committee.committee_type)
            formData.append('member_type', this.committee.member_type)
            formData.append('member_name', this.committee.member_name)           
            formData.append('date_of_birth', this.committee.date_of_birth)
            formData.append('personal_phone_no', this.committee.personal_phone_no)
            formData.append('alternative_phone_no', this.committee.alternative_phone_no)
            formData.append('home_phone_no', this.committee.home_phone_no)
            formData.append('nid_no', this.committee.nid_no)
            formData.append('profession', this.committee.profession)
            formData.append('image', this.committee.image)


            this.$axios
                .$post("/committee/add", formData)
                .then((res) => {
                    this.committee = "";
                    this.errors = {};
                    this.$toaster.success("committee Added Successfully");
                      this.$router.push("/dum-ac/committee");       
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
