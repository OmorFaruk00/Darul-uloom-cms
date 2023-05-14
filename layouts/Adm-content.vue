<template>
  <div>
    <Topnav />
    <div class="d-flex" id="wrapper">
      <div class=" " id="sidebar-wrapper">
        <div class="list-group sidebar">

          <nuxt-link class="sidebar-item" to="/admission"><img src="/images/dashboard.png" alt="" />Dashboard</nuxt-link>
           <nuxt-link class="sidebar-item" to="/admission/batch"><img src="/images/batch.png" alt="" />Batch</nuxt-link>
           <nuxt-link class="sidebar-item" to="/admission/department"><img src="/images/department.png" />Department</nuxt-link>
        
          <div class="dropdown_final_admission_form">
            <a class="sidebar-item" @click.prevent="admission_form=!admission_form"><img src="/images/right-arrow1.png" alt="" style="height:15px"/>
              
               Admission Form
            </a>
            <div v-if="admission_form" class="dropdown_item">
              <nuxt-link to="/admission/form-import" v-if="$auth.user.permission.includes('Form-import')">                
                Form Import
              </nuxt-link>
                <nuxt-link to="/admission/form-stock" v-if="$auth.user.permission.includes('Form-stock')">                
                Form Stock
              </nuxt-link>
                <nuxt-link to="/admission/form-sale" v-if="$auth.user.permission.includes('Form-sale')">                
                Form Sale
              </nuxt-link>
            </div>
          </div>
           <div class="dropdown_final_admission_form">
            <a class="sidebar-item" @click.prevent="final_admission=!final_admission"><img src="/images/right-arrow1.png" alt="" style="height:15px"/>
              
               Final Admission 
            </a>
            <div v-if="final_admission" class="dropdown_item">
              <nuxt-link to="/admission/admissionInActiveBatch" class="">                
                Admission in active batch
              </nuxt-link>
             
            </div>
          </div>
              <div class="dropdown_final_admission_form">
            <a class="sidebar-item" @click.prevent="students=!students"><img src="/images/right-arrow1.png" alt="" style="height:15px"/>              
               Students
            </a>
            <div v-if="students" class="dropdown_item">
              <nuxt-link to="/admission/dept-wish-student" class="">                
               Dept. Wise Students
              </nuxt-link>
                <nuxt-link to="/admission/search-student" class="">                
              Search Students
              </nuxt-link>
            </div>
          </div>
        
          
        </div>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {
data(){
    return {
        admission_form: false,
        final_admission: false,
        students: false,
    }

}
}
</script>
<style scoped>
.dropdown_final_admission_form a{  
  cursor: pointer;
  
}
.dropdown_item a{  
  border: none;
  padding-left: 45px;
  line-height: 50px;
  color: #000;
  display: block;
  font-size: 14px;

  
}

/* .dropdown_item a:hover{  
 background: #fff;
  
} */
.sidebar {
  line-height: 50px;
  position: sticky;
  top: 0  
  
}

.sidebar-item {
  font-size: 15px;
  color: #000;  
}

.sidebar-item svg,
img {
  height: 20px;
  padding-right: 10px;
  padding-left: 20px;
}



.nuxt-link-exact-active {
  background: #fff !important;
  color: #000;  
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  padding-top: 58px;
  background: #f6f6f6;
}

#final_admission_form-toggle {
  background: #fff;
  border: none;
}

#final_admission_form-toggle:hover {
  background: #21537f;
}

#final_admission_form-toggle img {
  height: 15px;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.bg-light {
  background-color: rgb(10, 94, 118);
}

#page-content-wrapper {
  background-color: #fff !important;
}
</style>
