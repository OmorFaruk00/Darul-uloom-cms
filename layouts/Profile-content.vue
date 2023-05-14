<template>
  <div>
    <Topnav />
    <div class="d-flex" id="wrapper">
      <div class="" id="sidebar-wrapper">
        <div class="list-group sidebar">
          <nuxt-link class="sidebar-item" to="/profile"><img src="/images/profile.png" alt="" /> Profile</nuxt-link>
          <nuxt-link class="sidebar-item" to="/profile/update"><img src="/images/profile-edit.png" alt="" /> Upadte Profile</nuxt-link>
          <nuxt-link class="sidebar-item" to="/profile/qualification"><img src="/images/qualification.png" alt="" /> Academic Qualification</nuxt-link>
          <nuxt-link class="sidebar-item" to="/profile/social"><img src="/images/social.png" alt="" /> Social Contact
          </nuxt-link>
          <nuxt-link class="sidebar-item" to="/profile/training"><img src="/images/training.png" alt="" />Training Experience</nuxt-link>
        </div>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid ">
          <router-view />
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {};
</script>
<style scoped>
.dropdown_final_syllabus a{  
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
.sidebar {
  line-height: 50px;

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
  padding-top: 40px;
  background: #f6f6f6;
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


</style>
