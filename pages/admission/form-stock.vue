<template>
  <div class="container">
      <h4 class="title pt-4">Form Import List</h4>
    <table class="table table-striped table-bordered text-center">
      <thead class="bg-dark text-white">
        <tr>
          <th>ID</th>
          <th>Start Sl Number</th>
          <th>End Sl Number</th>
          <th>Number Of Form</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(form,index) in forms" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ form.start }}</td>
          <td>{{ form.end }}</td>
          <td>{{ form.count }}</td>
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
      this.$axios.$get("/admission/form-stock").then((response) => {        
        this.forms = response.data;
      });
    },
  },
};
</script>
