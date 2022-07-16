<template>
    <div class="form-bg pt-5">
        <div class="container">
            <div class="form-shadow p-5 offset-md-2  col-md-8">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label>Start Sl No</label>
                        <input type="text" class="form-control" v-model="form.start" @keyup="slStart" />
                        <h6 v-if="errors.start" v-text="errors.start[0]" class="text-danger"></h6>
                    </div>
                    <div class="form-group">
                        <label>End Sl No</label>
                        <input type="text" class="form-control" v-model="form.end" @keyup="slEnd" />
                        
                        <h6 v-if="errors.end" v-text="errors.end[0]" class="text-danger"></h6>
                    </div>
                    <div class="form-group">
                        <label>Number of Form</label>
                        <input type="text" class="form-control" readonly v-model="form.count" />
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click="importForm()">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Adm-content",
    data: function () {
        return {
            form: {
                start: '',
                end: '',
                count: '',
            },
            errors: {},

        };
    },
    methods: {
        slStart() {
            var start = this.form.start;
            var end = this.form.end;
            this.form.count = end - start + 1;
        },
        slEnd() {
            var start = this.form.start;
            var end = this.form.end;
            this.form.count = end - start + 1;
        },
        importForm() {
            this.$axios.$post('/admission/form-import', this.form).then(response => {
                this.$toaster.success(response.message);
                this.form = '',
                this.errors = '';
            }).catch(error => {
                this.errors = error.response.data.errors;
                this.$toast.error(error.response.data.message);
            });



        }
    }



}
</script>

