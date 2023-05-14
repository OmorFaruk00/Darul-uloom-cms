<template>
    <div class="profile">
        <div class="container pt-5">
            <div class="d-flex justify-content-center">
                <div class="profile-body">
                    <h2 class="text-center pb-4 font-weight-bold">Profile</h2>
                    <hr>
                    <div class="text-center ">
                        <img :src="base_url + '/images/emp/' + profile.profile_photo" alt="image"
                            class="rounded-circle profile_img" /><br>
                    </div>
                    <div class="form-group focused mx-auto" style="max-width: 280px">
                        <div class="custom-file">
                            <input type="file" class="" name="profile_photo" ref="profile_photo" id="profile_photo"
                                v-on:change="ProfilePicUpload()" accept="images/*" />
                            <label class="custom-file-label" for="profile_photo">Upload Profile Picture</label>
                        </div>
                       
                    </div>


                    <div class="text-center ">
                        <h4 class=" mb-2">{{ profile.name }}</h4>
                        <h6 v-if="profile.rel_designation">{{ profile.rel_designation.designation }}</h6>


                        <div class="d-flex justify-content-center" v-if="profile.rel_social">
                            <ul class="social" v-for="social in profile.rel_social" :key="social._id">
                                <li v-if="social.social_name == 'Facebook'">
                                    <a :href="social.social_url"><img src="/images/fb.png" alt=""
                                            class="social-icon"></a>
                                </li>
                                <li v-if="social.social_name == 'Twitter'">
                                    <a :href="social.social_url"><img src="/images/twi.png" alt=""
                                            class="social-icon"></a>
                                </li>
                                <li v-if="social.social_name == 'Instagram'">
                                    <a :href="social.social_url"><img src="/images/ins.png" alt=""
                                            class="social-icon"></a>
                                </li>
                                <li v-if="social.social_name == 'LinkedIn'">
                                    <a :href="social.social_url"><img src="/images/linkedin.png" alt=""
                                            class="social-icon"></a>
                                </li>
                                <li v-if="social.social_name == 'WhatsApp'">
                                    <a :href="social.social_url"><img src="/images/whatsapp.png" alt=""
                                            class="social-icon"></a>
                                </li>
                            </ul>
                        </div>
                        <div class="contact-info pt-3 ">
                            <h6>E-mail :
                                <small>{{ profile.email }}</small>
                            </h6>
                            <h6>Phone :
                                <small>{{ profile.personal_phone_no }}</small>
                            </h6>
                            <!-- <h6>Mobile :
                                <small>{{ profile.alternative_phone_no }}</small>
                            </h6> -->
                        </div>

                        <hr>
                        <div class="profile-info pb-4" v-if="profile.about != null">
                            <div class="about">
                                <h4 class="about-title">About</h4>
                                <p class="about-desc">{{ profile.about }}</p>

                            </div>
                        </div>
                        <div class="profile-info pb-4" v-if="profile.rel_qualification != ''">
                            <div class="about">
                                <h4 class="about-title">Academic Qualification</h4>
                                <div class="px-3">
                                    <table class="table table-striped table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Sl</th>
                                                <th>Degree Name</th>
                                                <th>Institute Name</th>
                                                <th>Department</th>
                                                <th>Passsing Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(qualification,index) in profile.rel_qualification"
                                                :key="index">
                                                <td>{{ index +1}}</td>
                                                <td>{{ qualification.degree_name }}</td>
                                                <td>{{ qualification.institute_name }}</td>
                                                <td>{{ qualification.subject }}</td>
                                                <td>{{ qualification.passing_year }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="profile-info pb-4" v-if="profile.rel_training != ''">
                            <div class="about">
                                <h4 class="about-title">Training Experience</h4>
                                <div class="px-3">
                                    <table class="table table-striped table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Sl</th>
                                                <th>Training Name</th>
                                                <th>Institute Name</th>
                                                <th>Duration</th>
                                                <th>Training Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(training,index) in profile.rel_training" :key="index">
                                                <td>{{ index +1}}</td>
                                                <td>{{ training.training_name }}</td>
                                                <td>{{ training.institute_name }}</td>
                                                <td>{{ training.duration }}</td>
                                                <td>{{ training.training_year }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            qualifications: [],
            trainings: [],
            socials: [],
            profile: [],
            about: '',
            base_url: process.env.url
        }
    },

    methods: {
        getUser() {
            this.$axios.get('/profile')
                .then(response => {
                    this.profile = response.data;
                });
        },
        async ProfilePicUpload() {


            let formData = new FormData();
            formData.append("image", this.$refs.profile_photo.files[0]);

            return await this.$axios
                .post(
                    "/upload-profile-photo",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                )
                .then(response => {
                    this.$toaster.success(response.data.message);
                    window.location.reload();

                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

}
</script>
<style scoped>
.custom-file-label:hover{
    cursor: pointer;
    color: #1a5ab4;
    
}
.profile-body {
    width: 100%;
    border: none;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    background: #fff;
    padding: 50px 0px;
    margin-bottom: 80px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.profile-body:hover::after {
    transform: scaleY(1)
}

.profile_img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}

.profile-info {
    padding: 0px 100px;    
}

.contact-info {
    display: flex;
    justify-content: space-around;
}

.about {
    font-size: 15px;
    text-align: justify;
    padding-bottom: 20px;
    box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
    border-radius: 5px;
}

.about-title {
    padding: 10px 20px;

}

.about-desc {
    padding: 0px 20px;

}

.social {
    padding: 0;
    margin: 0;
    list-style: none;
}

.social li {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
}

.social-icon {
    display: block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    background: #fff;
    font-size: 20px;
    color: #4c5462;
    margin-right: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease 0s;
}

.social-icon:hover {
    background: linear-gradient(to right, #7851a9 0%, #ffd700 100%);
    color: #fff;
}

@media only screen and (max-width: 590px) {
    .profile-info {
        padding: 0px 10px;
    }

    .contact-info {
        display: block;
        justify-content: space-between;
        text-align: center;

    }
}
</style>