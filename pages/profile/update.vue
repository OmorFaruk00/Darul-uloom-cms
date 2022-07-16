<template>
    <div class="offset-md-3 col-md-6 form-shadow mt-5">
        <div class="p-5">
            <h4 class="title">Update Profile Info</h4>
            <hr>
            <div class="row">

                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>Name*</label>
                        <input type="text" class="form-control" placeholder="Enter Name" v-model="user.name" />
                        <h6 v-if="errors.name" v-text="errors.name[0]" class="text-danger">
                        </h6>
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>Date Of Birth *</label>
                        <input type="date" class="form-control" placeholder="Date Of Birth"
                            v-model="user.date_of_birth" />
                        <h6 v-if="errors.date_of_birth" v-text="errors.date_of_birth[0]" class="text-danger">
                        </h6>
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>Personal Phone No *</label>
                        <input type="text" class="form-control" placeholder="Phone Number"
                            v-model="user.personal_phone_no" />
                        <h6 v-if="errors.personal_phone_no" v-text="errors.personal_phone_no[0]" class="text-danger">
                        </h6>
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>Alternative Phone No</label>
                        <input type="text" class="form-control" placeholder="Alternative Phone No"
                            v-model="user.alternative_phone_no" />
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>Home Phone No</label>
                        <input type="text" class="form-control" placeholder="Home Phone No"
                            v-model="user.home_phone_no" />
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>Parents Phone No</label>
                        <input type="text" class="form-control" placeholder="Parents Phone No"
                            v-model="user.parent_phone_no" />
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>NID No *</label>
                        <input type="text" class="form-control" placeholder="NID No" v-model="user.nid_no" />
                        <h6 v-if="errors.nid_no" v-text="errors.nid_no[0]" class="text-danger"></h6>
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-sm-12">
                    <div class="form-group">
                        <label>Image </label>
                        <input type="file" class="form-control" placeholder=""
                            @change="(e) => (user.update_image = e.target.files[0])" accept="image/*" />
                        <h6 v-if="errors.image" v-text="errors.image[0]" class="text-danger"></h6>
                    </div>
                </div>
                   <div class="col-md-12 col-xl-12 col-sm-12">
                    <div class="form-group">
                        <label>Abour Me</label>
                        <textarea type="text" class="form-control" placeholder=""
                            v-model="user.about" />
                    </div>
                </div>

            </div>

            <div class="d-flex justify-content-end pt-3">
                <button class="btn-submit" @click="updateProfile()">Update</button>
            </div>
        </div>

    </div>
</template>
 <script>
 export default {
     layout: "Profile-content",
     mounted() {
         this.getUser();
 
     },
     data() {
         return {
 
             user: {
                 name: '',
                 date_of_birth: '',
                 personal_phone_no: '',
                 alternative_phone_no: '',
                 home_phone_no: '',
                 parent_phone_no: '',
                 nid_no: '',
                 update_image: '',
                 about:'',
 
             },
             errors: "",
         }
     },
 
     methods: {
         getUser() {
             this.$axios.get('/profile')
                 .then(response => {
                     this.user = response.data;
                 });
         },
         updateProfile() {
             let formData = new FormData();
             formData.append('name', this.user.name)
             formData.append('date_of_birth', this.user.date_of_birth)
             formData.append('personal_phone_no', this.user.personal_phone_no)
             formData.append('alternative_phone_no', this.user.alternative_phone_no)
             formData.append('home_phone_no', this.user.home_phone_no)
             formData.append('parent_phone_no', this.user.parent_phone_no)
             formData.append('nid_no', this.user.nid_no)
             formData.append('about', this.user.about)
             if (this.user.update_image) {
                 formData.append('image', this.user.update_image)
             }
 
 
 
             this.$axios
                 .$post("/profile-update", formData)
                 .then((res) => {                     
                     this.errors = {};
                     this.$toaster.success("Profile Update Successfully");
                       this.$router.push("/profile");       
                 })
                 .catch((error) => {
                     this.errors = error.response.data.errors;
                 });
 
         }
     }
 
 }
 </script>