<template>
  <section class="col-md-6 mx-auto py-5">   
      <div class="form-shadow p-5">
        <div class="row">
          <div class="col-md-12 col-xl-12 col-sm-12">
            <div class="form-group">
              <label>Department *</label>
              <select class="form-control" v-model="department" @change="fetchBatch()">
                <option disabled selected value="">Select Department</option>
                <option disable v-for="(dpt, index) in departments" :key="index" :value="dpt.id"
                  v-text="dpt.department_name"></option>
              </select>
              <h6 v-if="error && error.department" v-text="error.department[0]" class="text-danger"></h6>
            </div>
          </div>
          <div class="col-md-12 col-xl-12 col-sm-12">
            <div class="form-group">
              <label>Batch *</label>
              <input type="text" disabled class="form-control" placeholder="Select Department first" v-if="!batches" />
              <select class="form-control" v-model="batch_id" required @change="getstudent_id" v-else>
                <option selected value="">Select Batch</option>
                <option v-for="batch in batches" :key="batch.id" :value="batch.id" v-text="batch.batch_name"></option>
              </select>
              <h6 v-if="error && error.batch_id" v-text="error.batch_id[0]" class="text-danger"></h6>
            </div>
          </div>
          <div class="col-md-12 col-xl-12 col-sm-12">
            <div class="form-group">
              <label>Student*</label>
              <input type="text" disabled class="form-control" placeholder="Select Batch first" v-if="!students" />
              <select class="form-control" v-model="student_id" required v-else @change="getStatement">
                <option selected value="">Select Batch</option>
                <option v-for="student in students" :key="student.id" :value="student.id"
                  v-text="`${student.roll_no} - ${student.student_name_english}`"></option>
              </select>
              <h6 v-if="error && error.student_id" v-text="error.student_id[0]" class="text-danger"></h6>
            </div>
          </div>
        </div>
      </div>    
    <div class="mt-3" v-if="statements">
      <div class="form-shadow p-5">
        <h4 class="card-title text-center">Student Account Statement</h4>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Sl</th>
                <th>Date</th>
                <th>Receipt</th>
                <th>Purpose </th>
                <th class="text-right">Amount</th>              
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rows, index) in statements" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ rows.date }}</td>
                <td>{{ rows.receipt_no }}</td>
                <td>{{ rows.purpose.name }}</td>
                <td class="text-right">{{ rows.amount }}</td>            
               
              </tr>
              <tr>
                <td colspan="4">
                  <h6 class="text-right">Total Paid</h6>
                </td>
                <td>
                  <h6 class="text-right">{{ total_paid }} tk</h6>
                </td>
              </tr>
              <!-- <tr>
                <td colspan="3">
                  <h6>Total Fee</h6>
                  <h6>Total Paid</h6>
                  <h6>Total schoralship</h6>
                  <h6>Current Due</h6>
                </td>

                <td colspan="4" align="right">

                  <h6>{{ statement.summary.total_paid }} tk</h6>

                  <h6>
                    {{
                      statement.summary.total_scholarship
                      ? statement.summary.total_scholarship
                      : "0"
                    }}
                    tk
                  </h6>
                  <h6>{{ statement.summary.current_due }} tk</h6>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "Account-content",
  data() {
    return {
      statements: null,
      departments: "",
      batches: null,
      students: null,
      department: "",
      batch_id: "",
      student_id: "",
      error: "",
      total_paid:"",
    };
  },
  created() {
    this.getDepartment();
    
  },
  methods: {
    getDepartment() {
      this.$axios.get("/admission/department-show").then((res) => {
        this.departments = res.data;
      });
    },
    fetchBatch() {
      this.$axios
        .$get("/admission/batch/" + this.department)
        .then((response) => {
          this.batches = response.data;
        })
        .catch((error) => {
          this.$toaster.error("Batch Not found");
        });
    },
    getstudent_id() {
      this.$axios
        .$get(`student/attendance-student/${this.department}/${this.batch_id}`)
        .then((response) => {
          this.students = response;
        });
    },
    getStatement() {
      this.$axios.get(`/accounts/fee-statement/${this.student_id}`).then((response) => {
        console.log(response.data.statement)
        this.statements = response.data.statement
        this.total_paid = response.data.total_paid
      });
    },
  },
};
</script>

<style></style>
