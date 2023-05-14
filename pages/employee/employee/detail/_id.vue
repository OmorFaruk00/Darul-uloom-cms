<template v-if="employee">
    <div class="profile">
        <div class="container pt-5">
            <div class="d-flex justify-content-center">
                <div class="profile-body">
                    <h2 class="text-center pb-4 font-weight-bold">Profile</h2>
                    <hr>
                    <div class="text-center ">
                        <img :src="'http://localhost:8000/images/emp/' + employee.profile_photo" alt="image"
                            class="rounded-circle profile_img" />
                    </div>
                    <div class="text-center ">
                        <h4 class=" mb-2">{{ employee.name }}</h4>
                        <h6 v-if="employee.rel_designation">{{ employee.rel_designation.designation}}</h6>                        
                        
                                             
                      <div class="d-flex justify-content-center" v-if="employee.rel_social!=''">
                            <ul class="social" v-for="social in employee.rel_social" :key="social._id" >
                            <li v-if="social.social_name=='Facebook'">
                                <a :href="social.social_url"><img src="/images/fb.png" alt="" class="social-icon"></a>
                            </li>
                            <li v-if="social.social_name=='Twitter'">
                                <a :href="social.social_url"><img src="/images/twi.png" alt="" class="social-icon"></a>
                            </li>
                          <li v-if="social.social_name=='Instagram'">
                                <a :href="social.social_url"><img src="/images/ins.png" alt="" class="social-icon"></a>
                            </li>
                            <li v-if="social.social_name=='LinkedIn'">
                                <a :href="social.social_url"><img src="/images/linkedin.png" alt="" class="social-icon"></a>
                            </li>
                             <li v-if="social.social_name=='WhatsApp'">
                                <a :href="social.social_url"><img src="/images/whatsapp.png" alt="" class="social-icon"></a>
                            </li>
                        </ul>
                      </div>
                        <div class="contact-info pt-3 ">
                            <h6>E-mail :
                                <small>{{ employee.email }}</small>
                            </h6>
                            <h6>Phone :
                                <small>{{ employee.personal_phone_no }}</small>
                            </h6>
                            <h6>Mobile :
                                <small>{{ employee.alternative_phone_no }}</small>
                            </h6>
                        </div>
                        <hr>                        
                        <div class="profile-info pb-4" v-if="employee.about != null">
                            <div class="about">
                                <h4 class="about-title">About</h4>
                                <p class="about-desc">{{ employee.about }}</p>
                               
                            </div>
                        </div>
                        <div class="profile-info pb-4" v-if="employee.rel_qualification !=''">
                            <div class="about">
                                <h4 class="about-title">Academic Qualification</h4>
                                <div class="px-3">
                                    <table class="table table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>Degree Name</th>
                                                <th>Institute Name</th>
                                                <th>Department</th>
                                                <th>Passsing Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="qualification in employee.rel_qualification" :key="qualification._id">
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
                        <div class="profile-info pb-4" v-if="employee.rel_training!=''">
                            <div class="about">
                                <h4 class="about-title">Training Experience</h4>
                                <div class="px-3">
                                    <table class="table table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>Training Name</th>
                                                <th>Institute Name</th>
                                                <th>Duration</th>
                                                <th>Training Year</th>                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="training in employee.rel_training" :key="training._id">
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
    layout: "Emp-content",
    mounted() {
        this.employeeDetails();
        
    },
    data() {
        return {
            employee: [],
            errors: {},
            
        };
    },
    methods:{
         employeeDetails() {      
      this.$axios
        .$get("/employee/details/" +this.$route.params.id)
        .then((res) => {         
            
          this.employee = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    }
}
</script>
<style scoped>
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
.profile_img{
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
    border-radius: 10px;
    /* box-shadow: 0 0 30px rgba(31, 45, 61, 0.125); */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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