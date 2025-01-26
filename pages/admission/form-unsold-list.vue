<template>
    <div class="">
        <h4 class="title pt-4">Form Unsold List</h4>
      <table class="table table-striped table-bordered text-center">
        <thead class="bg-dark text-white">
          <tr>
            <th>SL</th>
            <th>Form Number</th>          
          </tr>
        </thead>
        <tbody>
          <tr v-for="(form,index) in forms" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ form.form_number }}</td>            
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
        this.$axios.$get("/admission/form-unsold-list").then((response) => {        
          this.forms = response;
          console.log(this.forms);
        });
      },
    },
  };
  </script>
  