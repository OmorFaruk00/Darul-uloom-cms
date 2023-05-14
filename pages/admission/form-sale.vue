<template>
  <div class="form-bg pt-5">
    <div class="container">
      <div class="form-shadow offset-md-2 col-md-8 p-5">
        <div>
          <div v-if="!show">
            <div class="form-group">
              <label>Form Number</label>
              <input type="number" class="form-control" v-model="form_number" />
            </div>
            <div class="d-flex justify-content-end pt-3">
              <button class="btn-submit" @click="searchForm()">Search</button>
            </div>
          </div>
          <div v-if="show">
            <div class="form-group focused">
              <label for="">Name of Student</label>
              <input type="text" class="form-control" placeholder="" id="" name="std_name" v-model="student_name"
                required />

              <h6 class="text-danger" v-if="error.student_name" v-text="error.student_name[0]"></h6>
              <small id="" class="form-text text-danger">&nbsp;</small>
            </div>
            <div class="form-group focused">
              <label for="_id">Department</label>
              <select class="form-control" v-model="department" @change="getBatch" required>
                <option selected value="">Select depertment</option>
                <option v-for="dpt in department_list" :key="dpt.id" :value="dpt.id" v-text="dpt.department_name"></option>
              </select>

              <h6 class="text-danger" v-if="error.department" v-text="error.department[0]"></h6>
              
            </div>           
            <div class="form-group focused">
              <label for="">Batch</label>
              <input type="text" disabled class="form-control" placeholder="Select Department first"
                v-if="!batch_list" />
              <select class="form-control" v-model="batch" required v-else>
                <option selected value="">Select Batch</option>
                <option v-for="batch in batch_list" :key="batch.id" :value="batch.id" v-text="batch.batch_name">
                </option>
              </select>

              <h6 class="text-danger" v-if="error.batch" v-text="error.batch[0]"></h6>
              
            </div>

            <div class="d-flex justify-content-end">             
              <button type="button" class=" btn-reset mr-3" @click="reset_button">
                Reset
              </button>
               <button type="submit" class="btn-submit" @click="form_sales">
                Submit
              </button>
              <button v-if='receipt_no' type="button" class="btn-print ml-4" @click="print_recieve()">Print Recieve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form_info container pt-5" v-if="form_info">
      <table class="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>Form Number</th>
            <th>Student Name</th>
            <th>Department</th>
            <th>Batch</th>
            <th>Sold By</th>
            <th>Sale Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>           
            <td v-text="form_info.form_number"></td>
            <td v-text="form_info.name_of_student"></td>
            <td v-text="form_info.department.department_name"></td>
            <td v-text="form_info.batch.batch_name"></td>
            <td v-text="form_info.employee.name"></td>      
            <td v-text="form_info.sale_date"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "Adm-content",
  data() {
    return {
      form_number: "",
      student_name: "",
      department: "",
      department_list: "",
      batch: "",
      roll: "",
      reg_code: "",
      department: "",
      batch_list: "",
      receipt_no: "",
      error: "",
      department_name: null,
      form_info: "",
      show: false,
    };
  },
  mounted() {
    this.getDepartment();    
  },
  methods: {
    reset_button(){
      this.student_name = "";
      this.department = "";
      this.batch = "";

    },
    searchForm() {      
      this.$axios
        .$get("/admission/form-search/" + this.form_number)
        .then((response) => {          
          this.form_info = "";
          this.show = true;
          
        })
        .catch((error) => {
          if (error.response.status == 302) {
            this.$toaster.error("Form not Available");
            this.form_info = error.response.data.form_info;                        
          }
          
          this.error = error.response.data.errors;
        });
    },
    getDepartment() {
      this.$axios
        .$get("/admission/department")
        .then((response) => {          
          this.department_list = response;
        })
        .catch((error) => {
          this.errors = error.response.message.errors;
        });
    },
    getBatch() {
      
      this.$axios
        .$get("/admission/batch/" + this.department)
        .then((response) => {        
          this.batch_list = response.data;
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    form_sales() {
      let form = {
        student_name: this.student_name,
        department: this.department,
        batch: this.batch,
      };
      this.$axios
        .$post("/admission/form-sales/" + this.form_number, form)
        .then((response) => {
          this.$toaster.success(response.message);
          this.student_name = "";
          this.department = "";
          this.batch = "";
          this.receipt_no = response.receipt_no;
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    print_recieve() {
      this.$axios
        .$get("/admission/print-receive/" + this.form_number, {
          responseType: "blob",
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "admission_slip.pdf");
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>
<style scoped>
/* .form_info {
  margin-top: 50px;
  box-shadow: 1px 1px 5px #dcdcdc;
  padding: 50px;
} */
</style>