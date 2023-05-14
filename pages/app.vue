<template>
  <div class="bg">
    <Topnav />
    <!-- <div class="head-title">
			<h2>Central Management System</h2>
		</div> -->

    <div class="row main-content">
      <div class="col-md-3 col-xl-2 col-sm-6">
        <nuxt-link class="app-link" to="/web-dui">
          <div class="app">
            <div class="app-icon">
              <img src="images/dum2.webp" alt="" />
            </div>
          </div>
          <p class="app-title">DUI Website</p>
        </nuxt-link>
      </div>
      <div class="col-md-3 col-xl-2 col-sm-6 app">
        <nuxt-link class="app-link" to="/student">
          <div class="app">
            <div class="app-icon">
              <img src="images/student1.webp" alt="" />
            </div>
          </div>
          <p class="app-title">Student Management</p>
        </nuxt-link>
      </div>
      <div class="col-md-3 col-xl-2 col-sm-6 app">
        <nuxt-link class="app-link" to="/employee">
          <div class="app">
            <div class="app-icon">
              <img src="images/employee4.png" class="" alt="" />
            </div>
          </div>
          <p class="app-title">Employee Management</p>
        </nuxt-link>
      </div>
      <div class="col-md-3 col-xl-2 col-sm-6 app">
        <nuxt-link class="app-link" to="/profile">
          <div class="app">
            <div class="app-icon">
              <img src="images/app-profile.png" class="" alt="" />
            </div>
          </div>
          <p class="app-title">Profile</p>
        </nuxt-link>
      </div>
      <div class="col-md-3 col-xl-2 col-sm-6 app">
        <nuxt-link class="app-link" to="/admission">
          <div class="app">
            <div class="app-icon">
              <img src="images/admission.png" class="" alt="" />
            </div>
          </div>
          <p class="app-title">Admission</p>
        </nuxt-link>
      </div>
      <div class="col-md-3 col-xl-2 col-sm-6 app">
        <nuxt-link class="app-link" to="/account">
          <div class="app">
            <div class="app-icon">
              <img src="images/account1.jpg" class="" alt="" />
            </div>
          </div>
          <p class="app-title">Accounts</p>
        </nuxt-link>
      </div>

      <div class="col-md-3 col-xl-2 col-sm-6 app mt-4">
        <nuxt-link class="app-link" to="/setting">
          <div class="app">
            <div class="app-icon">
              <img src="images/setting.png" class="" alt="" />
            </div>
          </div>
          <p class="app-title">Setting</p>
        </nuxt-link>
      </div>
         <div class="col-md-3 col-xl-2 col-sm-6 app mt-4">
        <nuxt-link class="app-link" to="/leave">
          <div class="app">
            <div class="app-icon">
              <img src="images/leave_app.png" class="" alt="" />
            </div>
          </div>
          <p class="app-title">Leave Application</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "auth",
};
</script>
<style scoped>
.bg {
  /* background: rgb(191, 67, 67); */
}

.head-title {
  background: #337ab7;
}

.head-title h2 {
  color: #fff;
  font-size: 25px;
  padding: 1% 5%;
  margin-left: 50px;
}

.main-content {
  padding: 5%;
}

.app {
  display: flex;
  justify-content: center;
}

.app-icon {
  height: 150px;
  width: 160px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.app-icon:hover {
  transform: scale(1.1);
}

.app-icon img {
  height: 120px;
  width: auto;
}

.app-title {
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
}

.app-link {
  color: #000;
}
</style>
