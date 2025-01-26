<template>
    <div class="">
        <h4 class="title pt-4">Form Sale List</h4>
      <table class="table table-striped table-bordered text-center">
        <thead class="bg-dark text-white">
          <tr>
            <th>SL</th>
            <th>Form Number</th>
            <th>Student Name</th>
            <th>Reg Code</th>
            <th>Department</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(form,index) in forms" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ form.form_number }}</td>
            <td>{{ form.name_of_student }}</td>
            <td v-if="form.reg_code">{{ form.reg_code  }}</td>
            <td v-else>NA</td>
            <td>{{ form.department.department_name }}</td>
            <td>{{ form.batch.batch_name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    layout: "Adm-content",
    data() {
      return {
        forms: "",
      };
    },
    mounted() {
      this.availableForm();
    },
  
    methods: {
      availableForm() {
        this.$axios.$get("/admission/form-sale-list").then((response) => {        
          this.forms = response;
          console.log(this.forms);
        });
      },
    },
  };
  </script>
  