<template>
    <div class="form-bg py-5">
        <div class="container">
            <div class="form-shadow col-md-6 mx-auto p-4">
                <h3 class="title">Add Image</h3>
                <form>
                    <div class="form-group">
                        <label>Gallery Type <span class="text-success">*</span></label>
                        <select class="form-control" v-model="gallery.gallery_type">
                            <option disabled selected value="">Select Gallery Type</option>
                            <option value="academic">Academic</option>
                            <option value="event">Event</option>
                            <option value="tour">Tour</option>
                        </select>
                        <h6 v-if="errors.gallery_type" v-text="errors.gallery_type[0]" class="text-danger mt-2">
                        </h6>
                    </div>
                    <div class="form-group">
                        <label for="">Image <span class="text-success">*</span></label> <br>
                        <input type="file" id="file_input" class="form-control"
                            @change='(e) => gallery.image = e.target.files' name="gallery[]" multiple="multiple"
                            accept="image/*">
                        <h6 v-if="errors.image" v-text="errors.image[0]" class="text-danger mt-2"></h6>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="addGallery()">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Web-content",
    mounted() {

    },
    data() {
        return {

            errors: [],
            gallery: {
                gallery_type: '',
                image: '',
            }
        }

    },
    methods: {

        addGallery() {
            let formData = new FormData();
            for (let x in this.gallery.image) {
                if (this.gallery.image[x] instanceof File) {
                    var FileSize = this.gallery.image[x].size / 1024 / 1024; // in MiB
                    if (FileSize > 1) {
                        alert('File max size must be 1024KB');
                        formData.delete('gallery');
                        $("#file_input").val('');
                        return false;
                    }
                    formData.append('image[]', this.gallery.image[x]);
                }
            }
            formData.append('gallery_type', this.gallery.gallery_type)

            this.$axios
                .$post("/gallery/add", formData)
                .then((res) => {
                    this.gallery = "";
                    this.errors = {};
                    this.$toaster.success(res.message);
                    this.$router.push("/web-dui/gallery");
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        this.auth = false;
                        this.$toaster.error(error.response.data.message);
                    }
                    console.log(error);

                });
        },
    },


};

</script>
<style scoped>
</style>
