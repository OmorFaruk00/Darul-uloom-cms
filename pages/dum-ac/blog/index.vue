<template>
    <div>
        <div class="pt-5">
            <div class="row">
                <div class="mx-auto col-md-12">
                    <div class="panel">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col col-sm-5 col-xs-12">
                                    <h4 class="title">blog List</h4>
                                </div>
                                <div class="col-sm-7 col-xs-12 text-right">
                                    <nuxt-link to="/dum-ac/blog/create" class="btn-add">Add blog</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body table-responsive">
                            <table class="table table-striped  text-center">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>Status</th>
                                        <th style="width:200px">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="blog in blogs" :key="blog._id">
                                        <td>{{ blog.id }}</td>
                                        <td>{{ blog.title }}</td>
                                        <td>{{ blog.description }}</td>
                                        <td><img :src="base_url + '/images/dum/' + blog.image" alt="image"
                                                style="height:80px" />
                                        </td>
                                        <td>
                                            <button v-if="blog.status == 1" class="btn-active"
                                                @click="blogStatus(blog.id)">
                                                Active
                                            </button>
                                            <button v-if="blog.status == 0" class="btn-inactive"
                                                @click="blogStatus(blog.id)">
                                                Inactive
                                            </button>
                                        </td>
                                        <td>
                                            <button class="btn-edit" @click="blogEdit(blog.id)">Edit</button>
                                            <button class="btn-delete" @click="deleteblog(blog.id)">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="blogUpdate" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">blog Update</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="" class="">Title</label>
                                <input type="text" class="form-control" id="name" placeholder="Title"
                                    v-model="blog.title" />
                                <p v-if="errors.title" v-text="errors.title[0]" class="text-danger"></p>
                            </div>
                            <div class="form-group">
                                <label for="" class="">Short Description</label>
                                <input type="text" class="form-control" id="name" placeholder="Short Description"
                                    v-model="blog.description" />
                                <p v-if="errors.description" v-text="errors.description[0]" class="text-danger"></p>
                            </div>
                            <div class="form-group">
                                <label for="" class="">Image</label>
                                <input required type="file" id="blog_image" class="" name="image"
                                    @change="(e) => (blog.new_image = e.target.files[0])" accept="image/*" />
                                <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                            <button type="button" class="btn btn-submit" @click="blogUpdate()">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Dum-content",
    mounted() {
        this.getblog();
    },
    data() {
        return {
            blogs: [],
            blog: {
                title: "",
                description: "",
                new_image: "",

            },
            errors: {},
            base_url: process.env.url
        };
    },
    methods: {
        getblog() {
            this.$axios
                .$get("/blog/show")
                .then((res) => {
                    this.blogs = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        blogEdit(id) {
            $("#blogUpdate").modal("show");
            this.$axios
                .$get("/blog/edit/" + id)
                .then((res) => {
                    this.blog = res;

                })
                .catch((err) => {
                    console.log(err);
                });

        },
        blogUpdate() {
            let formData = new FormData();
            formData.append('title', this.blog.title)
            formData.append('description', this.blog.description)
            if (this.blog.new_image) {
                formData.append('image', this.blog.new_image)
            }
            this.$axios
                .$post("/blog/update/" + this.blog.id, formData)
                .then((res) => {
                    this.getblog();
                    $("#blogUpdate").modal("hide");
                    this.$toaster.success(res.message);
                    this.errors = "";
                })
                .catch((err) => {
                    console.log(err);
                    this.errors = err.response.data.errors;
                });
        },
        deleteblog(id) {
            if (confirm("Are you sure to delete this blog?")) {
                this.$axios
                    .$get("/blog/delete/" + id)
                    .then((res) => {
                        this.getblog();
                        this.$toaster.error(res.message);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

        },
        blogStatus(id) {
            this.$axios
                .$get("/blog/status/" + id)
                .then((res) => {
                    this.getblog();
                    this.$toaster.success(res.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        },









    }
};
</script>
<style scoped>
</style>
