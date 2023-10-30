<template>
    <div class="container mt-4">
        <div class="large-12 medium-12 small-12 cell">
            <div class="-my-2  sm:-mx-6 lg:-mx-8 col-span-12 mb-4">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow  sm:rounded-lg">

                        <div v-for="(file, key) in files" class=" block mt-1 px-2 py-4   border-b border-gray-200"
                            :key="key">
                            <div v-if="!file.status || file.status != 'delete'" class="items-center flex overflow-hidden ">
                                <img style="width: auto;" class="w-6 h-8 mr-2" :src="file.linkbackground" alt="">
                                <a :href="'./' + file.linkview" target="_blank" style="width: 80%;"
                                    class="overflow-hidden px-2 py-1 rounded-lg  transition duration-300 ease-in-out"> {{
                                        file.tenFile }}
                                </a>
                                <span class="ml-4" v-on:click="removeFile(file)">Xóa </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="large-12 medium-12 small-12 cell">
            <label>
                <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()" />
            </label>
        </div>

        <!-- overlay -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "uploadfile",
    data() {
        return {
            configfile: [
                'docx',
                'docm',
                'doc',
                //  excel
                'xlsm',
                'xls',
                'xlsx',
                //  pdf
                'pdf', 'ppt', 'pps', 'pptx', 'odt', 'rtf', 'md', 'txt', 'css',
                //  img
                'jpg',
                'JPG',
                'png',
                'PNG',
                'heic',
                'HEIC',
                'jpeg',
                'JPEG',
                'GIF',
                'GIF',
            ],
            view: false,
            files: [],
        };
    },
    props: {
        tenbang: {
            type: String,
            default: "None",
        },
        id: {
            type: Number,
        },
    },
    watch: {

    },
    mounted() {
        const self = this;
        self.loadfile();
    },
    /*
        Defines the method used by the component
      */

    methods: {
        closeModal() {
            this.view = false;
        },

        /*
            Handles the uploading of files
          */
        //  Sau khi thêm file thì chạy
        handleFilesUpload() {
            const self = this;
            let uploadedFiles = this.$refs.files.files;
            /*
                Adds the uploaded file to the files array
              */
            var check = 0;
            for (var i = 0; i < uploadedFiles.length; i++) {
                // Lấy tên fiel và đuôi file
                // Lấy vị trí dấu chấm
                var fileupload = uploadedFiles[i].name.lastIndexOf(".");
                //Lấy tên file
                // var tenfile = uploadedFiles[i].name.slice(0, fileupload);
                // Lấy đuôi file
                var duoi = uploadedFiles[i].name.slice(fileupload + 1);
                // Kiểm tra đuôi file có nằm trong tập tin cofig ko(nằm trong là cho phép pull)
                //
                if (self.configfile.includes(duoi)) {
                    self.files.push(uploadedFiles[i]);
                    // Thêm dữ liệu vào biến files và gọi đến submit
                } else {
                    check = 1;
                }
            }
            if (check == 0) {
                self.submitFiles();
            } else {
                self.$notify.error({
                    title: 'Error',
                    message: "File không hợp lệ"
                });
                // self.$toasted.error("File không hợp lệ");
            }
        },
        submitFiles() {
            const self = this;
            /*
                Initialize the form data
              */
            let formData = new FormData();

            //  Lấy dữ liệu file
            for (var i = 0; i < this.files.length; i++) {
                let file = this.files[i];

                formData.append("images", file);
            }
            // Dữ liệu đính kèm
            formData.append("tenbang", this.tenbang);
            formData.append("sanPhamId", this.id);
            /*
                Make the request to the POST /select-files URL
              */
            axios
                .post("/SanPham/UploadImage", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(function () {
                    self.loadfile();
                    self.$notify({
                        title: 'Success',
                        message: 'Tải file thành công',
                        type: "success"
                    });
                    // self.$toasted.success("Tải file thành công");
                })
                .catch(function () {
                    self.$notify.error({
                        title: 'Error',
                        message: 'Tải file thất bại',
                        type: "Error"

                    });
                });
        },
        /*
            Removes a select file the user has uploaded
          */
        //  xóa file
        removeFile(file) {
            const self = this;
            axios
                .get("/HinhAnhSanPham/Delete/" + file.id).then(function () {
                    self.$notify({
                        title: 'Success',
                        message: 'Xóa thành công',
                        type: "Success"
                    });
                    self.loadfile();
                }).catch(function () {
                    self.$notify.error({
                        title: 'Error',
                        message: "Xóa thất bại!!",
                        type: "Error"

                    });
                    self.loadfile();

                });
        },
        loadfile() {
            const self = this;
            // Lấy dữ liệu
            axios
                .get("/HinhAnhSanPham?sanPhamId=" + this.id)
                .then(function (response) {
                    self.files = response.data;
                });
        },
    },
};
</script>

<style>
div.file-listing {
    width: 200px;
}

span.remove-file {
    color: red;
    cursor: pointer;
    float: right;
}
</style>
