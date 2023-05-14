<template>
  <div>
    <div>
      <div class="pt-3" v-if="students.length > 0">
        <h3 class="title">Students List</h3>
        <div class="table-responsive overflow-scroll">
          <table class="table table-striped table-bordered">
            <thead class="bg-dark text-white">
              <tr>
                <th>Sl</th>
                <th>Name</th>       
                <th>Roll</th>
                <th>Reg No</th>
                <th>Department</th>
                <th>batch</th>
                <!-- <th style="width:250px">Action</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ student.student_name_english }}</td>                
                <td>{{ student.roll_no }}</td>
                <td>{{ student.reg_no }}</td>
                <td>{{ student.department[0].department_name }}</td>
                <td>{{ student.batch.batch_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12">
              Showing <span v-html="meta.from || 0"></span> to
              <span v-html="meta.to || 0"></span>
              of
              <span v-html="meta.total"></span> entries
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12">
              <nav aria-label="Page navigation example" class="my-3 mx-2">
                <ul class="pagination pagination-sm justify-content-end">
                  <li class="page-item" :class="meta.current_page > 1 ? '' : 'disabled'">
                    <a class="page-link" href="javaScript:void(0)" @click="paginatePreview" aria-label="Previous">
                      <!-- <span aria-hidden="true">&laquo;</span> -->
                      <span class="">Previous</span>
                    </a>
                  </li>
                  <li class="page-item" v-for="(row, index) in meta.last_page" :key="index"
                    :class="row == meta.current_page ? 'active' : ''">
                    <a class="page-link" href="javaScript:void(0)" @click="paginatePageWise(row)" v-text="row"></a>
                  </li>
                  <li class="page-item" :class="meta.last_page > meta.current_page ? '' : 'disabled'">
                    <a class="page-link" href="javaScript:void(0)" @click="paginateNext" aria-label="Next">
                      <!-- <span aria-hidden="true">&raquo;</span> -->
                      <span class="">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2 class="text-center mt-5"> No Students</h2>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
export default {
  layout: 'Student-content',
  data() {
    return {
      auth: true,
      students: "",
      links: '',
      meta: '',
      page: '',

    };
  },
  mounted() {
    this.getStudent();

  },

  methods: {
    getStudent() {
      return this.$axios.$get("/student/show?page=" + this.page)
        .then(response => {
          console.log(response);
          this.students = response.data;
          this.links = response.data.links;
          this.meta = response
        })
        .catch(error => {
          if (error.response.status == 401) {
            this.true = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
        })
    },
    paginatePreview() {
      let page_number = parseInt(this.meta.current_page - 1);
      this.page = page_number;
      this.getStudent();
    },

    paginateNext() {
      let page_number = parseInt(this.meta.current_page + 1);
      this.page = page_number;
      this.getStudent();

    },

    paginatePageWise(row) {
      window.scrollTo(0, 0);
      this.page = row;
      this.getStudent();
    },


  }


};
</script>

