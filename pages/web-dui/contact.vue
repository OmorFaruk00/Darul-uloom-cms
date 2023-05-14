<template>
    <div>
         <div class="panel-body table-responsive mt-4" v-if="auth">
           
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Email</th>                    
                    <th>Subject</th>
                    <th>Messages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(contact,index) in contacts" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.subject }}</td>
                    <td style="width:40%">{{ contact.message }}</td>                 
                  
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 v-else class="text-center mt-5 text-danger">You are not authorized</h2>
    </div>
</template>
<script>
export default {
    layout: "Web-content",
       mounted() {
        this.getContacts();
  },
    data() {
        return {
          auth:true,
            contacts: [],
           
        };
    },
   
    methods: {
        getContacts() {
      this.$axios
        .$get("/contact/show")
        .then((res) => {
          this.contacts = res;
        })
         .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        });
    },
}


}
</script>