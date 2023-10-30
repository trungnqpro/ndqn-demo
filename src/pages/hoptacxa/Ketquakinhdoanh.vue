<template>
    <div>
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Hội Nông Dân</h1>
                <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
            </div>
        </div>
        <!-- <div class="my-2 bg-gray-600 h-[1px]"></div> -->
        <div v-cloak v-bind:class="{ hidden: isActivemodal }" style="z-index: 100"
            class="min-w-screen h-screen animated fadeIn faster 
                                                             fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div @click="closemodal()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div
                class="sm:w-8/12 w-10/12  h-4/5  overflow-auto p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
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
                    <div class="mt-5 md:col-span-12 md:mt-0">
                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng Doanh Thu</label>
                                <input v-model="dataForm.TongDoanhThu" name="TongDoanhThu" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('TongDoanhThu')">
                                    {{ dataForm.errors().get('TongDoanhThu') }}
                                </span>
                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng Dư Nợ Cho Vay</label>
                                <input v-model="dataForm.TongDuNoChoVay" name="TongDuNoChoVay" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('TongDuNoChoVay')">
                                    {{ dataForm.errors().get('TongDuNoChoVay') }}
                                </span>
                            </div>
                        </div>
                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Doanh Thu Thành Viên</label>
                                <input v-model="dataForm.DoanhThuThanhVien" name="v" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('DoanhThuThanhVien')">
                                    {{ dataForm.errors().get('DoanhThuThanhVien') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tỷ Lệ Kết Quả</label>
                                <input v-model="dataForm.TyLeKetQua" name="TyLeKetQua" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('TyLeKetQua')">
                                    {{ dataForm.errors().get('TyLeKetQua') }}
                                </span>
                            </div>
                        </div>



                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trước Thuế</label>
                                <input v-model="dataForm.LoiNhuanTruocThue" name="LoiNhuanTruocThue" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('LoiNhuanTruocThue')">
                                    {{ dataForm.errors().get('LoiNhuanTruocThue') }}
                                </span>
                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Sau Thuế</label>
                                <input v-model="dataForm.LoiNhuanSauThue" name="LoiNhuanSauThue" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('LoiNhuanSauThue')">
                                    {{ dataForm.errors().get('LoiNhuanSauThue') }}
                                </span>
                            </div>
                        </div>


                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trích Quỹ DTPT</label>
                                <input v-model="dataForm.LoiNhuanTrichQuyDTPT" name="LoiNhuanTrichQuyDTPT" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('LoiNhuanTrichQuyDTPT')">
                                    {{ dataForm.errors().get('LoiNhuanTrichQuyDTPT') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trích Quỹ DPTC</label>
                                <input v-model="dataForm.LoiNhuanTrichQuyDPTC" name="LoiNhuanTrichQuyDPTC" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('LoiNhuanTrichQuyDPTC')">
                                    {{ dataForm.errors().get('LoiNhuanTrichQuyDPTC') }}
                                </span>
                            </div>
                        </div>
                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trích Quỹ Khác</label>
                                <input v-model="dataForm.LoiNhuanTrichQuyKhac" name="LoiNhuanTrichQuyKhac" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('LoiNhuanTrichQuyKhac')">
                                    {{ dataForm.errors().get('LoiNhuanTrichQuyKhac') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Chia Thành Viên Theo Sử
                                    Dụng Dịch Vụ</label>
                                <input v-model="dataForm.LoiNhuanChiaThanhVienTheoSuDungDichVu"
                                    name="LoiNhuanChiaThanhVienTheoSuDungDichVu" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500"
                                    v-if="dataForm.errors().has('LoiNhuanChiaThanhVienTheoSuDungDichVu')">
                                    {{ dataForm.errors().get('LoiNhuanChiaThanhVienTheoSuDungDichVu') }}
                                </span>
                            </div>
                        </div>
                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Chia Thành Viên Theo Góp
                                    Vốn</label>
                                <input v-model="dataForm.LoiNhuanChiaThanhVienTheoGopVon"
                                    name="LoiNhuanChiaThanhVienTheoGopVon" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500"
                                    v-if="dataForm.errors().has('LoiNhuanChiaThanhVienTheoGopVon')">
                                    {{ dataForm.errors().get('LoiNhuanChiaThanhVienTheoGopVon') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Chia Theo Thành Viên
                                    Khác</label>
                                <input v-model="dataForm.LoiNhuanChiaThanhVienTheoKhac" name="LoiNhuanChiaThanhVienTheoKhac"
                                    type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500"
                                    v-if="dataForm.errors().has('LoiNhuanChiaThanhVienTheoKhac')">
                                    {{ dataForm.errors().get('LoiNhuanChiaThanhVienTheoKhac') }}
                                </span>
                            </div>
                        </div>
                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng Quỹ Lương</label>
                                <input v-model="dataForm.TongQuyLuong" name="TongQuyLuong" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('TongQuyLuong')">
                                    {{ dataForm.errors().get('TongQuyLuong') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng Khác Hàng Vay Vốn</label>
                                <input v-model="dataForm.TongKhachHangVayvon" name="TongKhachHangVayvon" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('TongKhachHangVayvon')">
                                    {{ dataForm.errors().get('TongKhachHangVayvon') }}
                                </span>
                            </div>
                        </div>


                    </div>
                    <div class="mt-5 md:col-span-12 md:mt-0">
                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Don Vi</label>
                                <select v-model="dataForm.donViId"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option selected value="">-- Chọn: --</option>
                                    <option v-for="i in listDonVi" :value="i.id" :key="i.id">
                                        {{ i.tenDonVi }}
                                    </option>
                                </select>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('donViId')">
                                    {{ dataForm.errors().get('donViId') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Kỳ Biến Động</label>
                                <select v-model="dataForm.kyBienDongId"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option selected value="">-- Chọn: --</option>
                                    <option v-for="i in listKyBienDong" :value="i.id" :key="i.id">
                                        {{ i.tenKyBienDong }}
                                    </option>
                                </select>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('kyBienDongId')">
                                    {{ dataForm.errors().get('kyBienDongId') }}
                                </span>
                            </div>

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
            <div class="flex justify-between sm:flex sm:items-center ">
                <div class="sm:flex-auto">
                    <button @click="saveform()" type="button"
                        class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                        Thêm mới
                    </button>

                </div>
                <div class="col-3 col-span-4">
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
                    <el-table-column label="STT" width="100" align="center">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.$index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="tongDoanhThu" label="Tổng doanh thu">
                    </el-table-column>
                    <!-- <el-table-column prop="DoanhThuThanhVien" label="Tài Sản Đất Không Chia">
                    </el-table-column>
                    <el-table-column prop="DonViId" label="Đơn Vị ID">
                    </el-table-column>
                    <el-table-column prop="KyBienDongId" label="Kỳ Biến Động">
                    </el-table-column> -->
                    <el-table-column align="center" width="270">
                        <template slot="header">
                            Chức năng
                        </template>
                        <template slot-scope="scope">
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
                url: `/KetQuaKinhDoanh`,
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
                TongDoanhThu: '',
                DoanhThuThanhVien: '',
                TyLeKetQua: '',
                LoiNhuanTruocThue: '',
                LoiNhuanSauThue: '',

                LoiNhuanTrichQuyDTPT: '',
                LoiNhuanTrichQuyDPTC: '',
                LoiNhuanTrichQuyKhac: '',
                LoiNhuanChiaThanhVienTheoSuDungDichVu: '',
                LoiNhuanChiaThanhVienTheoGopVon: '',

                LoiNhuanChiaThanhVienTheoKhac: '',
                TongQuyLuong: '',
                TongKhachHangVayvon: '',
                TongDuNoChoVay: '',
                kyBienDongId: '',
                donViId: ''

            })
                .rules({
                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({
                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',
                }),
            rowId: '',
            statusForm: '',
            isActivemodal: true,
            listDonVi: [],
            listKyBienDong: []


        }
    },
    mounted() {


        this.loadData();
        const self = this;
        axios.get("/DonVi")
            .then((res) => {
                self.listDonVi = res.data.data
            });
        axios.get("/KyBienDongs")
            .then((res) => {
                self.listKyBienDong = res.data.data
            });
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
            this.dataForm.TongDoanhThu = '';
            this.dataForm.DoanhThuThanhVien = '';
            this.dataForm.TyLeKetQua = '';
            this.dataForm.LoiNhuanTruocThue = '';
            this.dataForm.LoiNhuanSauThue = '';
            this.dataForm.LoiNhuanTrichQuyDTPT = '';

            this.dataForm.LoiNhuanTrichQuyKhac = '';
            this.dataForm.LoiNhuanTrichQuyDPTC = '';
            this.dataForm.LoiNhuanChiaThanhVienTheoSuDungDichVu = '';
            this.dataForm.LoiNhuanChiaThanhVienTheoGopVon = '';
            this.dataForm.LoiNhuanChiaThanhVienTheoKhac = '';
            this.dataForm.TongQuyLuong = '';

            this.dataForm.TongKhachHangVayvon = '';
            this.dataForm.TongDuNoChoVay = '';
            this.dataForm.donViId = '';
            this.dataForm.kyBienDongId = '';
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
                axios.post(this.datatb.url, self.dataForm.data).then(function () {
                    self.thongbaothanhcong('Lưu thành công')
                    self.loadData();
                })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            } else {
                axios.put(self.datatb.url + '/' + self.rowId, self.dataForm.data).then(function () {
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
        thongbaothanhcong(text) {
            this.$notify({
                title: 'Success',
                message: text,
                type: 'success'
            });
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
                    self.datatb.tableData = response.data.data;
                });
        },
        //data table
        doAlertEdit(data) {
            console.log(data)
            // Gán giá trị cho form
            const self = this;
            // Gán giá trị cho form
            self.dataForm.TongDoanhThu = data.tongDoanhThu;
            self.dataForm.DoanhThuThanhVien = data.doanhThuThanhVien;
            self.dataForm.TyLeKetQua = data.tyLeKetQua;
            self.dataForm.LoiNhuanTruocThue = data.loiNhuanTruocThue
            self.dataForm.LoiNhuanSauThue = data.loiNhuanSauThue;

            self.dataForm.LoiNhuanTrichQuyDTPT = data.loiNhuanTrichQuyDTPT;
            self.dataForm.LoiNhuanTrichQuyDPTC = data.loiNhuanTrichQuyDPTC;
            self.dataForm.LoiNhuanTrichQuyKhac = data.loiNhuanTrichQuyKhac;
            self.dataForm.LoiNhuanChiaThanhVienTheoSuDungDichVu = data.loiNhuanChiaThanhVienTheoSuDungDichVu;
            self.dataForm.LoiNhuanChiaThanhVienTheoGopVon = data.loiNhuanChiaThanhVienTheoGopVon;

            self.dataForm.LoiNhuanChiaThanhVienTheoKhac = data.loiNhuanChiaThanhVienTheoKhac;
            self.dataForm.TongQuyLuong = data.tongQuyLuong;
            self.dataForm.TongKhachHangVayvon = data.tongKhachHangVayvon;
            self.dataForm.TongDuNoChoVay = data.tongDuNoChoVay;
            self.dataForm.kyBienDongId = data.kyBienDongId;
            self.dataForm.donViId = data.donViId;

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
        doAlertDelete(data) {
            const self = this;
            this.$confirm('Thao tác này không thể quay lại, bạn chắc chắn tiếp tục?', 'Cảnh báo', {
                confirmButtonText: 'Vâng, xóa nó!',
                cancelButtonText: 'Không xóa!',
                type: 'warning',
                center: true
            }).then(() => {
                axios.delete(self.datatb.url + '/' + data.id)
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