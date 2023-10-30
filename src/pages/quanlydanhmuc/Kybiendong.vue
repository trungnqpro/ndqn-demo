<template>
    <div>
        <div v-cloak v-bind:class="{ hidden: isActivemodal }" style="z-index: 100"
            class="min-w-screen h-screen animated fadeIn faster 
                     fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div @click="closemodal()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="sm:w-6/12 w-10/12   p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
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
                        <div class="col-span-12 sm:col-span-6 px-4 py-5 sm:p-4">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên kỳ
                                biến động:</label>
                            <input v-model="dataForm.tenKyBienDong" type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tên kỳ biến động" required="">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('tenKyBienDong')">
                                @{{ dataForm.errors().get('tenKyBienDong') }}
                            </span>
                        </div>
                        <div class="col-span-12 sm:col-span-6 px-4 py-5 sm:p-4">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày bắt
                                đầu:</label>
                            <input v-model="dataForm.ngayBatDau" type="date" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required="">

                        </div>
                        <div class="col-span-12 sm:col-span-6 px-4 py-5 sm:p-4">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày kết
                                thúc:</label>
                            <input v-model="dataForm.ngayKetThuc" type="date" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required="">

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
                                <span class="sm:hidden"><b>
                                        STT:</b> </span>{{ scope.row.stt }}
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column label="Tên kỳ biến động" prop="tenKyBienDong">
                        <template slot-scope="scope">
                            <span class="sm:hidden"><b>Tên kỳ biến động: </b></span>{{ scope.row.tenKyBienDong }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Ngày bắt đầu" prop="tenKyBienDong">
                        <template slot-scope="scope">
                            <span class="sm:hidden"><b>Ngày bắt đầu: </b></span>{{ scope.row.ngayBatDau1 }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Ngày kết thúc" prop="tenKyBienDong">
                        <template slot-scope="scope">
                            <span class="sm:hidden"><b>Ngày kết thúc: </b></span>{{ scope.row.ngayKetThuc1 }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Trang thái" prop="tenKyBienDong">
                        <template slot-scope="scope">
                            <span class="sm:hidden"><b>Trang thái: </b></span>
                            <p v-if="scope.row.status == 0" class="text-red-500">Khóa </p>
                            <p v-else class="text-green-500">Mở</p>
                        </template>
                    </el-table-column>
                    <el-table-column width="270">
                        <template slot="header">
                            Chức năng
                        </template>
                        <template slot-scope="scope">
                            <div class="sm:text-center">

                                <el-tooltip v-if="scope.row.status == 1" class="item" effect="dark"
                                    content="Đóng kỳ biến động" placement="top-start">
                                    <el-button size="mini" @click="doAlertLock(scope.row)">
                                        <i class="el-icon-lock text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip v-else class="item" effect="dark" content="Đóng kỳ biến động"
                                    placement="top-start">
                                    <el-button size="mini" @click="doAlertLock(scope.row)">
                                        <i class="el-icon-unlock text-lg"></i>
                                    </el-button>
                                </el-tooltip>
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
export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'name'
                ],
                // đường dẫn đến ajax
                url: '/KyBienDongs',
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
                tenKyBienDong: '',
                ngayBatDau: '',
                ngayKetThuc: '',

            })
                .rules({
                    tenKyBienDong: 'required',
                })
                .messages({
                    'tenKyBienDong.required': 'Trường bắt buộc nhập',
                }),
            rowId: '',
            statusForm: '',
            isActivemodal: true,
        }
    },
    mounted() {
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
            this.dataForm.data.tenKyBienDong = '';
            this.dataForm.data.ngayBatDau = '';
            this.dataForm.data.ngayKetThuc = '';

            this.statusForm = "insert";
            this.openmodal();
        },
        submitform() {
            if (this.dataForm.validate().errors().any()) {
                return;
            }
            const self = this;
            this.closemodal()
            if (this.statusForm == "insert") {
                axios.post(self.datatb.url, self.dataForm.data).then(function () {
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

                    for (let index = 0; index < self.datatb.tableData.length; index++) {
                        const inputDate = new Date(self.datatb.tableData[index].ngayBatDau);
                        // Lấy giá trị ngày tháng năm từ đối tượng Date
                        const year = inputDate.getFullYear();
                        const month = String(inputDate.getMonth() + 1).padStart(2, '0');
                        const day = String(inputDate.getDate()).padStart(2, '0');

                        // Kết hợp các giá trị để tạo ra chuỗi định dạng "yyyy-MM-dd"
                        const outputDate = `${day}-${month}-${year}`;
                        const inputDate2 = new Date(self.datatb.tableData[index].ngayKetThuc);

                        // Lấy giá trị ngày tháng năm từ đối tượng Date
                        const year2 = inputDate2.getFullYear();
                        const month2 = String(inputDate2.getMonth() + 1).padStart(2, '0');
                        const day2 = String(inputDate2.getDate()).padStart(2, '0');

                        // Kết hợp các giá trị để tạo ra chuỗi định dạng "yyyy-MM-dd"
                        const outputDate2 = `${day2}-${month2}-${year2}`;
                        self.datatb.tableData[index].ngayBatDau1 = outputDate;
                        self.datatb.tableData[index].ngayKetThuc1 = outputDate2;

                    }

                });
        },
        //data table
        doAlertEdit(data) {
            // Gán giá trị cho form
            this.dataForm.data.tenKyBienDong = data.tenKyBienDong;
            const inputDate = new Date(data.ngayBatDau);

            // Lấy giá trị ngày tháng năm từ đối tượng Date
            const year = inputDate.getFullYear();
            const month = String(inputDate.getMonth() + 1).padStart(2, '0');
            const day = String(inputDate.getDate()).padStart(2, '0');

            // Kết hợp các giá trị để tạo ra chuỗi định dạng "yyyy-MM-dd"
            const outputDate = `${year}-${month}-${day}`;
            const inputDate2 = new Date(data.ngayKetThuc);

            // Lấy giá trị ngày tháng năm từ đối tượng Date
            const year2 = inputDate2.getFullYear();
            const month2 = String(inputDate2.getMonth() + 1).padStart(2, '0');
            const day2 = String(inputDate2.getDate()).padStart(2, '0');

            // Kết hợp các giá trị để tạo ra chuỗi định dạng "yyyy-MM-dd"
            const outputDate2 = `${year2}-${month2}-${day2}`;
            this.dataForm.data.ngayBatDau = outputDate;
            this.dataForm.data.ngayKetThuc = outputDate2;
            // Sửa tình trạng form
            this.statusForm = "update";
            this.rowId = data.id;
            this.openmodal('sua');
        },
        doAlertLock(data) {

            const self = this;

            axios.post(self.datatb.url + '/ThayDoiTrangThai?id=' + data.id + '&status=' + data.status).then(function () {
                self.thongbaothanhcong('Sửa thành công')
                self.loadData();
            })
                .catch(error => {
                    self.thongbaothatbai(error);
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
                axios.post(self.datatb.url + "/Delete/" + data.id)
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
        thongbaothanhcong(text) {
            this.$notify({
                title: 'Success',
                message: text,
                type: 'success'
            });
        },
        thongbaothatbai(text) {
            this.$notify.error({
                title: 'Error',
                message: text
            });

        },

    },
}
</script>
