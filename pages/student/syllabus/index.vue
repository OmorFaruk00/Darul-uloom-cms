<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h6 class="title">Syllabus List</h6>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/student/syllabus/create" class="btn-add">Add Syllabus</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead class="bg-dark text-white">
                  <tr>                    
                    <th>Sl</th>           
                    <th>Department</th>           
                    <th>Description</th>           
                    <!-- <th>File</th>           -->
                   
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(syllabus,index) in syllabuss" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td >{{ syllabus.department}}</td>
                    <td>{{ syllabus.description }}</td>                   
                    <!-- <td><img :src="base_url+'/images/syllabus/' + syllabus.file" alt="image" style="height:80px" />
                    </td> -->
                    <!-- <td>
                      <button v-if="syllabus.status == 1" class="btn-active" @click="syllabusStatus(syllabus.id)">
                        Active
                      </button>
                      <button v-if="syllabus.status == 0" class="btn-inactive" @click="syllabusStatus(syllabus.id)">
                        Inactive
                      </button>
                    </td> -->
                    <td>
                      <nuxt-link :to="`/student/syllabus/update/${syllabus.id}`" class="btn-edit py-2 mr-3">Edit</nuxt-link>                      
                      <button class="btn-delete" @click="syllabusDelete(syllabus.id)">Delete</button>                      

                      
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>

     
    </div>
  </div>
</template>
<script>
export default{
    layout:'Student-content',
    data(){
        return{
            syllabuss:'',
            base_url:process.env.url

        }
    },
    mounted(){
        this.fetchSyllbusInfo();

    },
    methods:{
          fetchSyllbusInfo() {

            this.$axios.$get('/syllabus/show').then(response => {
                this.syllabuss = response;
            }).catch((error) => {
                tconsole.log(error);
            });


        },
        syllabusDelete($id){
                this.$axios.$get('/syllabus/delete/'+$id).then(response => {
                this.$toaster.success(response.message);
                this.$router.push("/student/syllabus");
                this.fetchSyllbusInfo();
            }).catch((error) => {
                tconsole.log(error);
            });

        }
    }

}
</script>