<template>
  <div>
    <Topnav />
    <div class="d-flex" id="wrapper">
      <div class=" " id="sidebar-wrapper">
        <div class="list-group sidebar">
          <nuxt-link class="sidebar-item" to="/account"
            ><img src="/images/dashboard.png" alt="" />Dashboard</nuxt-link
          >
          <nuxt-link class="sidebar-item" to="/account/fee-collect" 
            ><img src="/images/acc.png" alt="" />Fee Collect</nuxt-link
          >
          <nuxt-link class="sidebar-item" to="/account/deposite" 
            ><img src="/images/deposite.png" alt="" />Deposite</nuxt-link
          >
          <nuxt-link class="sidebar-item" to="/account/expense" 
            ><img src="/images/expense.png" alt="" />Expense</nuxt-link
          >
          <!-- <nuxt-link class="sidebar-item" to="/account/account" v-if="$auth.user.permission.includes('Accounts')"
            ><img src="/images/acc.png" alt="" />Account</nuxt-link
          > -->
          <nuxt-link class="sidebar-item" to="/account/fund" v-if="$auth.user.permission.includes('Funds')"
            ><img src="/images/fund.png" alt="" />Fund</nuxt-link
          >
          <!-- <nuxt-link class="sidebar-item" to="/account/sub_fund" v-if="$auth.user.permission.includes('Sub-funds')"
            ><img src="/images/fund.png" alt="" />Sub Fund</nuxt-link
          > -->
          <nuxt-link class="sidebar-item" to="/account/purpose" 
            ><img src="/images/purpose.png" alt="" />Purpose</nuxt-link
          >
          <nuxt-link class="sidebar-item" to="/account/fund-transfer" 
            ><img src="/images/transfer.png" alt="" />Fund Transfer</nuxt-link
          >
          <nuxt-link class="sidebar-item" to="/account/statement" v-if="$auth.user.permission.includes('Account-statement')"
            ><img src="/images/statement.png" alt="" />Student Account Statment</nuxt-link
          >
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
  data() {
    return {
      menu: false,
    };
  },
};
</script>
<style scoped>
.dropdown_menu a {
  cursor: pointer;
}
.dropdown_item a {
  border: none;
  padding-left: 60px;
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
  background-color: #fff !important;
}
</style>
