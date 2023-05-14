<template>
  <div>
    <Topnav />
    <div class="d-flex" id="wrapper">
      <div class=" " id="sidebar-wrapper">
        <div class="list-group sidebar">
          <nuxt-link class="sidebar-item" to="/web-dui"><img src="/images/dash.png" alt="" /> Dashboard</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/slider"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>Slider</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/notice"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>Notice</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/event"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>Event</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/program"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>Program</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/facilitie"><img src="/images/fac.png" alt="" />Facilities
          </nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/tution"><img src="/images/fee.png" alt="" />Tution Fee</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/blog"><img src="/images/blog.png" alt="" />Blogs</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/committee"><img src="/images/committee.png" alt="" />Committee</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/gallery"><img src="/images/gallery.png" alt="" />Gallery</nuxt-link>
          <nuxt-link class="sidebar-item" to="/web-dui/contact"><img src="/images/mail.png" alt="" />Contacts</nuxt-link>
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
  // mounted() {
  //   //toggle sidebar
  //   $("#menu-toggle").click(function (e) {
  //     e.preventDefault();
  //     $("#wrapper").toggleClass("toggled");
  //   });
  // },
};
</script>
<style scoped>
.sidebar {
  
  line-height: 50px;
  padding-left: 20px; 
  padding-right: 40px;
}

.sidebar-item {
  font-size: 18px;
  color: #000;
  /* padding: 0px 50px; */
}

.sidebar-item svg,
img {
  height: 20px;
  padding-right: 5px;
  padding-left: 20px;
}

.user {
  height: 30px;
  padding-right: 30px;
}

.cms-title {
  padding-left: 50px;
  color: #fff;
  font-weight: bolder;
}

.topnav {
  background: #337ab7;
}

.nuxt-link-exact-active {
  background: #fff !important; 
  color: #000;  
  border-radius: 10px;
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

#menu-toggle {
  background: #fff;
  border: none;
}

#menu-toggle:hover {
  background: #21537f;
}

#menu-toggle img {
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
  background-color: #fff;
}
</style>
