<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h6 class="title">course List</h6>
                </div>
                <div class="col-sm-7 col-xs-12 text-right mb-2">
                  <nuxt-link to="/student/course/create" class="btn-add" v-if="$auth.user.permission.includes('Course-add')"><svg height='25px'
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> Add course</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered">
                <thead class="bg-dark text-white">
                  <tr>                    
                    <th>Sl</th>           
                    <th>Department</th>                    
                    <th>Batch</th>                    
                    <th>Course Name</th>              
                    <th>Course Code</th>                                 
                    <th style="width:250px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(course,index) in courses" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td >{{ course.department[0].department_name}}</td>
                    <td >{{ course.batch[0].batch_name}}</td>
                    <td>{{ course.course_name }}</td>                   
                    <td>{{ course.course_code }}</td>        
                    <td>
                      <nuxt-link :to="`/student/course/update/${course.id}`" class="btn-edit py-2 mr-3 btn-responsive" v-if="$auth.user.permission.includes('Course-update')"><svg height='20px' xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mb-1 pr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clip-rule="evenodd" />
                      </svg>Edit</nuxt-link>                      
                      <button class="btn-delete" @click="courseDelete(course.id)" v-if="$auth.user.permission.includes('Course-delete')"><svg height='18px'
                        xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1 pr-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>Delete</button>              
                    </td>
                  </tr>
                </tbody>
              </table>              
            </div>
          </div>
        </div>
      </div>     
    </div>
    <h2 class="text-center text-danger mt-5" v-else>You are not authorized</h2>
  </div>
</template>
<script>
export default{
    layout:'Student-content',
    data(){
        return{
          auth:true,
            courses:'',
            base_url:process.env.url

        }
    },
    mounted(){
        this.fetchcourseInfo();

    },
    methods:{
          fetchcourseInfo() {
            this.$axios.$get('/course/show').then(response => {
                this.courses = response;                
            }).catch((error) => {
              if(error.response.status == 401){
                this.auth = false;
                this.$toaster.error(error.response.data.message);
              }
                console.log(error);
            });
        },
        courseDelete($id){
            if (confirm("Are you sure to delete this ?")) {
                this.$axios.$get('/course/delete/'+$id).then(response => {
                this.$toaster.success(response.message);
                this.$router.push("/student/course");
                this.fetchcourseInfo();
            }).catch((error) => {
              if(error.response.status == 401){
                this.auth = false;
                this.$toaster.error(error.response.data.message);
              }
                console.log(error);
            });
            }

        },
       

    }

}
</script>