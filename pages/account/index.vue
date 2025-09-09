<template>
  <div class="px-4">
    <h2 class="text-center mt-3">Welcome to Accounts</h2>

    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12  mb-5">
        <div class="counter">
          <div class="content">
            <h5>Today Fee Collect</h5>
            <h4>{{ dashboard.todayFee }} TK</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12  mb-5">
        <div class="counter">
          <div class="content">
            <h5>This Month Fee Collect</h5>
            <h4>{{ dashboard.thisMonthFee }} TK</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12  mb-5">
        <div class="counter">
          <div class="content">
            <h5>Total Fee Collect</h5>
            <h4>{{ dashboard.totalFee }} TK</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12  mb-5">
        <div class="counter">
          <div class="content">
            <h5>Today Expense</h5>
            <h4>{{ dashboard.todayExpense }} TK</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12  mb-5">
        <div class="counter">
          <div class="content">
            <h5>This Month Expense</h5>
            <h4>{{ dashboard.thisMonthExpense }} TK</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12  mb-5">
        <div class="counter">
          <div class="content">
            <h5>Total Expense</h5>
            <h4>{{ dashboard.totalExpense }} TK</h4>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    layout: "Account-content",
    mounted() {
        this.getData();
    },
    data() {
        return {
            auth: true,
           dashboard:"",
        };
    },
    methods: {
        getData() {
      this.$axios
        .$get("/accounts/dashboard")
        .then((response) => {
          this.dashboard = response;
          console.log(this.dashboard)
        })
        .catch((error) => {
          this.$toaster.error("Purpose Not found");
        });

    },





    },
};
</script>

<style>
.counter {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 10px;
  margin: 10px;
}

.content {
  text-align: center;
  padding: 20px;
}
</style>
