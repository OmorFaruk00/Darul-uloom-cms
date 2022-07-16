<template>
    <div>

        <div class="text-center py-5">
            <h2>Welcome To Darul Uloom Moniram</h2>
        </div>
        <div class="">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xl-3">
                    <nuxt-link to="/dum-ac/event">
                    <div class="dashboard">
                        <div class="dashboard-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg></div>
                        <h3>Event</h3>
                        <span class="dashboard-value">{{events}}</span>
                    </div>
                    </nuxt-link>
                </div>
                <div class="col-md-6 col-sm-12 col-xl-3">
                    <nuxt-link to="/dum-ac/notice">
                    <div class="dashboard green">
                        <div class="dashboard-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg></div>
                        <h3>Notice</h3>
                        <span class="dashboard-value">{{notices }}</span>
                    </div>
                    </nuxt-link>
                </div>
                <div class="col-md-6 col-sm-12 col-xl-3">
                    <nuxt-link to="/dum-ac/program">
                    <div class="dashboard yellow">
                        <div class="dashboard-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg></div>
                        <h3>Program</h3>
                        <span class="dashboard-value">{{programs}}</span>
                    </div>
                    </nuxt-link>
                </div>
                <div class="col-md-6 col-sm-12 col-xl-3">
                    <nuxt-link to="/dum-ac/slider">
                    <div class="dashboard blue">
                        <div class="dashboard-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg></div>
                        <h3>Slider</h3>
                        <span class="dashboard-value">{{sliders}}</span>
                    </div>
                    </nuxt-link>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    layout: "Dum-content",

    mounted() {
        this.getNotice();
        this.getEvent();
        this.getSlider();
        this.getProgram() 
    },
    data(){
        return {
            notices: [], 
            events: [], 
            sliders: [], 
            programs:[],         
            
        }
    },
    methods: {
         getNotice() {
      this.$axios
        .$get("/notice/show")
        .then((res) => {           
          this.notices =res.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
     getEvent() {
      this.$axios
        .$get("/event/show")
        .then((res) => {
          this.events = res.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
       getSlider() {
      this.$axios
        .$get("/slider/show")
        .then((res) => {
          this.sliders = res.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
      getProgram() {
      this.$axios
        .$get("/program/show")
        .then((res) => {
          this.programs = res.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    }
    
    

}
</script>
<style scoped>
a{
    text-decoration: none;;
}
.dashboard {
    color: #0B697E;
    background: linear-gradient(#0B697E, #0B697E 43%, transparent 43%, transparent 57%, #0B697E 57%);
    font-family: 'Poppins', sans-serif;
    text-align: center;
    width: 210px;
    height: 210px;
    padding: 43px 28px 35px;
    margin: 0 auto;
    border-radius: 70px;
    position: relative;
    z-index: 1;
    transition: all .2s ease-in-out;
    cursor: pointer;
}
.dashboard:hover{
    transform: scale(1.1);

}

.dashboard:before,
.dashboard:after {
    content: "";
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 13px;
    left: 13px;
    right: 13px;
    bottom: 13px;
    z-index: -1;
}

.dashboard:after {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
    top: 23px;
    left: 23px;
    right: 23px;
    bottom: 23px;
}

.dashboard .dashboard-icon {
    font-size: 30px;
    margin: 0 0 10px;
}

.dashboard-icon svg {
    height: 40px;
}

.dashboard h3 {
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 9px;
}

.dashboard .dashboard-value {
    font-size: 30px;
    font-weight: 600;
    display: block;
}

.dashboard.green {
    color: #59AE58;
    background: linear-gradient(#59AE58, #59AE58 43%, transparent 43%, transparent 57%, #59AE58 57%);
}

.dashboard.yellow {
    color: #FEA703;
    background: linear-gradient(#FEA703, #FEA703 43%, transparent 43%, transparent 57%, #FEA703 57%);
}

.dashboard.blue {
    color: #0C8AFA;
    background: linear-gradient(#0C8AFA, #0C8AFA 43%, transparent 43%, transparent 57%, #0C8AFA 57%);
}

@media screen and (max-width:990px) {
    .dashboard {
        margin-bottom: 40px;
    }
}
</style>