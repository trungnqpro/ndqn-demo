<template>
    <div class="bg-slate-50 px-2 shadow-md">
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1  items-center">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Quản lý sản phẩm</h1>
                <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
            </div>
        </div>

        <!-- <div class="my-2 bg-gray-600 h-[1px]"></div> -->
        <div v-cloak v-bind:class="{ hidden: isActivemodal }" style="z-index: 100"
            class="min-w-screen h-screen animated fadeIn faster 
                                     fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div @click="closemodal()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div
                class="sm:w-6/12 w-10/12 h-4/5 overflow-auto     p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                <div class="w-full  overflow-auto ">
                    <div class=" flex justify-between items-center  rounded-t border-b mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white uppercase">
                            Thêm mới, chỉnh sửa
                        </h3>
                        <button type="button" @click="closemodal()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-12 ">
                        <div class="col-span-12">
                            <label for="Tieude" class="block my-2 text-sm font-medium text-gray-900 dark:text-white">Tiêu
                                đề</label>
                            <input v-model="dataForm.tenSanPham" type="text" name="tenSanPham" id="tenSanPham" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tiêu đề">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('tenSanPham')">
                                {{ dataForm.errors().get('tenSanPham') }}
                            </span>
                        </div>
                        <div class="col-span-12">
                            <label for="Tomtat" class="block my-2 text-sm font-medium text-gray-900 dark:text-white">Tóm
                                tắt</label>
                            <input v-model="dataForm.moTa" type="text" name="moTa" id="moTa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tóm tắt">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('moTa')">
                                {{ dataForm.errors().get('moTa') }}
                            </span>
                        </div>
                        <div class=" col-span-12 ">
                            <label class="block text-sm font-medium text-gray-700">Nhóm sản phẩm</label>
                            <select v-model="dataForm.nhomSanPhamId"
                                class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option selected value="0">-- Chọn nhóm sản phẩm: --</option>
                                <option v-for="i in Listnhomsanphams" :value="i.id" :key="i.id">
                                    {{ i.tenNhomSanPham }}
                                </option>
                            </select>
                            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('nhomSanPhamId')">
                                {{ dataForm.errors().get('nhomSanPhamId') }}
                            </span>
                        </div>
                        <div class="col-span-12">
                            <label for="Noidung" class="block my-2 text-sm font-medium text-gray-900 dark:text-white">Nội
                                dung</label>
                            <ckeditor v-model="dataForm.noiDung"></ckeditor>
                        </div>
                        <div class="col-span-11" v-if="statusForm == 'update'">
                            <label for="uploadfile"
                                class="block my-2 text-sm font-medium text-gray-900 dark:text-white">uploadfile</label>

                            <UploadFile tenbang="sanpham" :id="dataForm.id"></UploadFile>
                        </div>

                    </div>

                </div>

                <!--footer-->
                <div class="col-span-12 text-center  md:block flex pt-4 justify-center">
                    <button @click="submitform()"
                        class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Lưu
                    </button>
                    <button @click="closemodal()"
                        class=" items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">Hủy</button>
                </div>

            </div>
        </div>
        <div class="py-4">
            <div class="grid grid-cols-12 ">
                <div class="sm:col-span-2 lg:mb-0 mb-2 col-span-12 ">
                    <button @click="saveform()"
                        class="rounded-lg lg:w-auto w-full px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Thêm
                        mới</button>
                </div>
                <div class="sm:col-start-10 sm:col-end-13  col-span-12">
                    <input class="effect-7" type="text" placeholder="Tìm kiếm" v-model="datatb.searchnow" />
                    <span class="focus-border">
                        <i></i>
                    </span>
                </div>
            </div>
        </div>
        <div>
            <Datatable :datatb="datatb" namePaging="pagination" @pagination="pagination">
                <template>
                    <el-table-column label="STT" width="100">
                        <template slot-scope="scope">
                            <div class="sm:text-center">
                                <span class="sm:hidden "><b>
                                        STT:</b></span> {{ scope.row.stt }}
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="Tên sản phẩm" prop="tenSanPham">
                        <template slot-scope="scope">
                            <span class="sm:hidden "><b>
                                    Tên sản phẩm :</b></span> {{ scope.row.tenSanPham }}

                        </template>
                    </el-table-column>

                    <el-table-column width="270">
                        <template slot="header">
                            Chức năng
                        </template>
                        <template slot-scope="scope">
                            <div class="sm:text-center">
                                <el-tooltip class="item" effect="dark" content="Chỉnh sửa" placement="top-start">
                                    <el-button size="mini" @click="doAlertEdit(scope.row)">
                                        <i class="el-icon-edit-outline text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="Xóa" placement="top-start">
                                    <el-button size="mini" @click="doAlertDelete(scope.row)">
                                        <i class="  el-icon-delete text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                            </div>
                        </template>
                    </el-table-column>
                </template>
            </Datatable>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import form from 'vuejs-form'
import {
    uuid
} from 'vue-uuid';
export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'name'
                ],
                // đường dẫn đến ajax
                url: '/Sanpham',
                // Số bản ghi trên 1 trang
                length: 10,

                // Biến tìm kiếm
                searchnow: '',
                // Số trang
                total: '',
                // Dữ liệu danh sách bảng
                tableData: [],
                // Trang hiện tại đang ở
                paginatenow: 1,

            },
            dataForm: form({
                tenSanPham: '',
                moTa: '',
                noiDung: '',
                Uploadfile: [],
                nhomSanPhamId: 0,
                id: ''
            })
                .rules({
                    tenSanPham: 'required',
                    nhomSanPhamId: 'required',
                })
                .messages({
                    'tenSanPham.required': 'Trường bắt buộc nhập',
                    'nhomSanPhamId.required': 'Trường bắt buộc nhập',
                }),
            rowId: '',
            statusForm: '',
            isActivemodal: true,
            Listnhomsanphams: [],

        }
    },
    mounted() {
        const self = this;
        // axios.get(this.datatb.url)
        //     .then(function (response) {
        //         self.listDiaBan = response.data.data;
        //     })
        axios.get("/NhomSanPham").then(function (response) {
            self.Listnhomsanphams = response.data.data;
        });
        this.loadData();
    },
    watch: {
        'datatb.searchnow'() {
            this.loadData();
        }
    },
    methods: {

        openmodal() {
            this.isActivemodal = false;
        },
        closemodal() {
            this.isActivemodal = true;
            this.dataForm.errors().messages = {};
        },
        saveform() {
            const self = this;
            self.dataForm.data.tenSanPham = '';
            self.dataForm.data.id = uuid.v1();

            self.dataForm.data.moTa = '';
            self.dataForm.data.noiDung = '';
            self.dataForm.data.nhomSanPhamId = 0;
            self.dataForm.data.Uploadfile = [];
            self.statusForm = "insert";
            self.openmodal();
        },
        submitform() {
            if (this.dataForm.validate().errors().any()) {
                return;
            }
            const self = this;
            this.closemodal()
            if (this.statusForm == "insert") {
                axios.post(this.datatb.url, self.dataForm.data).then(function () {
                    self.thongbaothanhcong('Lưu thành công')
                    self.loadData();
                })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            } else {
                axios.post(self.datatb.url + '/' + self.rowId, self.dataForm.data).then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            }

        },
        pagination(data) {
            // Gán lại giá trị paginatenow
            this.datatb.paginatenow = data;
            // Load lại bảng
            this.loadData();
        },
        // load lại dữ liệu
        loadData() {
            const self = this;
            // Lấy index bản ghi bắt đầu
            var start = this.datatb.length * (this.datatb.paginatenow - 1);
            self.datatb.start = start;
            // Ajax dữ liệu
            axios
                .get(self.datatb.url, {
                    // Đẩy dữ liệu lên controller
                    params: {
                        // Giá trị mặc định phải có
                        // start:index bản ghi bắt đầu
                        // length:số lượng bản ghi trên 1 trang
                        // searchcolum:Các cột được phép tìm kiếm
                        // searchnow: Giá trị tìm kiêm hiện tại

                        start: this.datatb.start,
                        searchcolum: this.datatb.searchcolum,
                        length: this.datatb.length,
                        searchnow: this.datatb.searchnow,
                    },
                })
                .then(function (response) {
                    // Tổng số trang hiện có
                    self.datatb.total = Math.ceil(
                        response.data.recordsTotal / self.datatb.length
                    );
                    // Dữ liệu bảng
                    for (let index = 0; index < response.data.data.length; index++) {
                        response.data.data[index].stt = start + 1;
                        start++;
                    }
                    self.datatb.tableData = response.data.data;
                });
        },
        //data table
        doAlertEdit(data) {
            // Gán giá trị cho form
            this.dataForm.data.tenSanPham = data.tenSanPham;
            this.dataForm.data.id = data.id;
            this.dataForm.data.moTa = data.moTa;
            this.dataForm.data.noiDung = data.noiDung;
            this.dataForm.data.nhomSanPhamId = data.nhomSanPhamId;
            this.dataForm.data.Uploadfile = data.Uploadfile;
            // Sửa tình trạng form
            this.statusForm = "update";
            this.rowId = data.id;
            this.openmodal('sua');
        },
        thongbaothatbai(text) {
            this.$notify.error({
                title: 'Error',
                message: text
            });

        },
        thongbaothanhcong(text) {
            this.$notify({
                title: 'Success',
                message: text,
                type: 'success'
            });
        },
        doAlertDelete(data) {
            const self = this;
            this.$confirm('Thao tác này không thể quay lại, bạn chắc chắn tiếp tục?', 'Cảnh báo', {
                confirmButtonText: 'Vâng, xóa nó!',
                cancelButtonText: 'Không xóa!',
                type: 'warning',
                center: true
            }).then(() => {
                axios.post(self.datatb.url + '/Delete/' + data.id)
                    .then(function (response) {
                        self.loadData();
                        console.log(response.data)
                        if (response.data == true) {
                            self.$message({
                                type: 'success',
                                message: 'Xóa thành công'
                            });
                        } else {
                            self.thongbaothatbai(response.data[1])
                        }
                    })
                    .catch(function (error) {
                        // Thông báo xóa thất bại
                        self.thongbaothatbai(error)
                    });
                // this.$message({
                //     type: 'success',
                //     message: 'Xóa thành công'
                // });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Đã hủy xóa'
                });
            });

        },

    },
}
</script>
