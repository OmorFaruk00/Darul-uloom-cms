<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg topnav ">
      <button class="btn btn-primary" id="menu-toggle"> <img src="/images/menu.png" alt="">
      </button>
      <nuxt-link to="/app">
        <h4 class="cms-title">Central Management System | Darul Uloom Moniram</h4>
      </nuxt-link>
      <div class="ml-auto">
        <div class="dropdown">
          <img src="/images/user.png" alt="user" class="user-icon" @click="userprofile()">
          <div id="user" class="dropdown-content pt-4">
            <div class="user-info d-flex justify-content-center">

              <img :src="base_url+'/images/emp/' + $auth.user.profile_photo" alt="image" class="profile" />
            </div>
            <div class="user-text">
              <h4 class="pt-3">{{ $auth.user.name }}</h4>
              <p >{{ $auth.user.rel_designation?$auth.user.rel_designation:'' }}</p>
            </div>
            <button class="btn-logout" @click="logout">Log out</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profile: [],
      base_url:process.env.url,
    }
  },

  mounted() {
    //toggle sidebar
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  },
  methods: {
    userprofile() {
      document.getElementById("user").classList.toggle("show");
    },


    logout() {
      this.$auth.logout().then(response => {
        console.log(response);
        this.$router.push('/')
      }).catch(error => {
        console.log(error);
      });
    }
  }

}
</script>
<style scoped>
.profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0px 50px;
  /* padding: 0px 40px; */
}

.btn-logout {
  position: relative;
  float: right;
  margin: 10px 20px;
  background: rgb(212, 78, 20);
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 18px;
  font-weight: bolder;
}

.btn-logout:hover {
  background: rgb(119, 48, 48);
}

.dropdown {
  float: right;
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 300px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  right: 0;
  z-index: 1111;
  margin-top: 20px;
  margin-right: 15px;
  border-radius: 5px;
  padding-bottom: 30px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

.sidebar {
  text-align: center;
  line-height: 50px;

}

.sidebar-item {
  font-size: 18px;
  color: #000;
}

.user-icon {
  height: 30px;
  padding-right: 30px;
  cursor: pointer;
}

.user-img {
  height: 70px;
  margin: 30px 0px;

}

.user-text {
  text-align: center;
  margin: 0px 20px;
}

.user-text h4 {
  font-size: 20px;
}

.user-text p {
  font-size: 12px;
}

.cms-title {
  padding-left: 50px;
  color: #fff;
  font-weight: bolder;
}

a {
  text-decoration: none;
}

.topnav {
  background: #337ab7;
  position: sticky;
    top: 0px;

}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  padding-top: 58px;
  background: #f2f2f2;
}


#menu-toggle {
  background: #337ab7;
  border: none;

}

#menu-toggle:hover {
  background: #21537f;

}

#menu-toggle img {
  height: 20px;


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

