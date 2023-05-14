<template>
    <div class="pt-5">
        <div class="col-md-6 mx-auto form-shadow p-5">
            <div class="d-flex justify-content-end">
                <nuxt-link to="/web-dui/tution" class="btn-add"> Tution List</nuxt-link>
            </div>
            <div>
                <div class="form-group">
                    <label for="" class="">Name Of Program</label>
                      <select class="form-control" v-model="tution.name_of_program">
                        <option disabled selected value="">Select Program</option>
                        <option :value="program.name" v-for="program in programs" :key="program.id">{{program.name}}</option>         
                        
                    </select>
                    <p v-if="errors.name_of_program" v-text="errors.name_of_program[0]" class="text-danger"></p>
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select class="form-control" v-model="tution.type">
                        <option disabled selected value="">Select Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Non_residential">Non Residential</option>
                        <option value="Day_care">Day Care</option>
                    </select>
                    <h6 v-if="errors.type" v-text="errors.type[0]" class="text-danger"></h6>
                </div>                
                <div class="form-group">
                    <label>Duration</label>
                    <select class="form-control" v-model="tution.duration">
                        <option disabled selected value="">Select Duration</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2 Year">2 Year</option>
                        <option value="3 Year">3 Year</option>
                        <option value="4 Year">4 Year</option>                              
                        
                    </select>
                    <h6 v-if="errors.duration" v-text="errors.duration[0]" class="text-danger"></h6>
                </div>
                <div class="form-group">
                    <label for="" class="">Total Fee</label>
                    <input type="text" class="form-control" id="name_of_program" placeholder="Total Fee"
                        v-model="tution.total_fee" />
                    <p v-if="errors.total_fee" v-text="errors.total_fee[0]" class="text-danger"></p>
                </div>

                <div class="d-flex justify-content-end">
                    <button class="btn-submit" @click.prevent="addTution()">
                        Submit
                    </button>                    
                </div> 
                            
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Web-content",
    data() {
        return {
            tution: {
                name_of_program: "",
                total_fee: "",
                duration: "",
                type: "",


            },            
            programs:'',
            errors: {},
        };
    },
    mounted(){
        this.getProgram();

    },
    methods: {
          getProgram() {
      this.$axios
        .$get("/program/show")
        .then((res) => {
          this.programs = res;          
                  
        })
        .catch((err) => {
          console.log(err);
        });
    },
        addTution() {
            this.$axios
                .$post("/tution/add", this.tution)
                .then((res) => {
                    this.tution = "";
                    this.errors = {};
                    this.$toaster.success(res.message);
                    this.$router.push("/web-dui/tution");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
};
</script>
