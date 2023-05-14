<template>
  <div>
    <div class="pt-5" v-if="auth">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h6 class="title">lesson plan List</h6>
                </div>
                <div class="col-sm-7 col-xs-12 text-right mb-2">
                  <nuxt-link to="/student/lesson-plan/create" class="btn-add"  v-if="$auth.user.permission.includes('Lesson-add')"><svg height='25px'
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> Add lesson plan</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped table-bordered text-center">
                <thead class="bg-dark text-white">
                  <tr>
                    <th>Sl</th>
                    <th>Department</th>
                    <th>Batch</th>
                    <th>Course Name</th>
                    <th>Course Code</th>
                    <th>Description</th>
                    <th>File</th>
                    <th style="width:250px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lesson, index) in lessons" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ lesson.department.department_name }}</td>
                    <td>{{ lesson.batch[0].batch_name }}</td>
                    <td>{{ lesson.course.course_name }}</td>
                    <td>{{ lesson.course.course_code }}</td>
                    <td>{{ lesson.description }}</td>
                    <td><a :href="base_url + '/images/lessonplan/' + lesson.file" download target="_blank"
                        class="btn-download"><svg height="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg> Download</a></td>
                    <td>
                      <nuxt-link :to="`/student/lesson-plan/update/${lesson.id}`"
                        class="btn-edit btn-responsive py-2 mr-3" v-if="$auth.user.permission.includes('Lesson-update')"><svg height='20px' xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mb-1 pr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd" />
                        </svg>Edit</nuxt-link>
                      <button class="btn-delete btn-responsive" @click="lessonDelete(lesson.id)" v-if="$auth.user.permission.includes('Lesson-delete')"><svg height='18px'
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
export default {
  layout: 'Student-content',
  data() {
    return {
      auth:true,
      lessons: '',
      base_url: process.env.url
    }
  },
  mounted() {
    this.fetchlessonInfo();
  },
  methods: {
    fetchlessonInfo() {
      this.$axios.$get('/lessonplan/show').then(response => {
        this.lessons = response;
      }).catch((error) => {
         if(error.response.status == 401){
                this.auth = false;
                this.$toaster.error(error.response.data.message);
              }
        console.log(error);
      });
    },
    lessonDelete($id) {
      if (confirm("Are you sure to delete this ?")) {
        this.$axios.$get('/lessonplan/delete/' + $id).then(response => {
          this.$toaster.success(response.message);
          this.$router.push("/student/lesson-plan");
          this.fetchlessonInfo();
        }).catch((error) => {
          console.log(error);
        });
      }

    },
  }
}
</script>