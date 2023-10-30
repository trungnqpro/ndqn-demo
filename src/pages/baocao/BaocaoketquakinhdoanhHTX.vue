<template>
    <div>
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1  items-center">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Báo cáo kết quả kinh doanh HND</h1>
                <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
            </div>
        </div>
        <!-- <div class="my-2 bg-gray-600 h-[1px]"></div> -->

        <div class="py-4 w-full">
            <div class="grid grid-cols-12 ">
                <div class="sm:col-span-3 col-span-12 w-full sm:px-2 pb-2">
                    <select @change="loadData()" tyle="max-width: -webkit-fill-available;" v-model="dataForm.kybiendongId"
                        class="rounded-md border-2 p-2 form-control form-select px-5 w-full ">
                        <option v-for="(i, index) in listKybiendong" :value="i.id" :key="index" :selected="index == 0">
                            {{ i.tenKyBienDong }}
                        </option>
                    </select>
                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('kybiendongId')">
                        {{ dataForm.errors().get('kybiendongId') }}
                    </span>
                </div>
                <div class="sm:col-span-3 col-span-12 sm:px-2 pb-2 ">
                    <select id="taisan" name="taisan" v-model="tongDoanhThuBanHangVaCungCapDichVu"
                        class="rounded-md border-2 p-2 form-control form-select px-5  "
                        style="max-width: -webkit-fill-available;">
                        <option value="0">Tra cứu theo tổng doanh thu bán hàng và cung cấp dịch vụ</option>
                        <option value="1">Dưới 100 triệu đồng</option>
                        <option value="2">Từ 100 triệu đồng đến dưới 1 tỷ đồng</option>
                        <option value="3">Từ 1 tỷ đồng đến dưới 5 tỷ đồng</option>
                        <option value="4">Từ 5 tỷ đồng đến dưới 10 tỷ đồng</option>
                        <option value="5">Từ 10 tỷ đồng trở lên</option>

                    </select>
                </div>
                <div class="sm:col-span-3 col-span-12 sm:px-2 pb-2">
                    <select name="tong_von" v-model="loiNhuanTruocThue" style="max-width: -webkit-fill-available;"
                        class="rounded-md border-2 p-2 form-control form-select px-5  ">
                        <option value="0">Tra cứu theo lợi nhuận trước thuế</option>
                        <option value="1">Lỗ hoặc không có lợi nhuận</option>
                        <option value="2">Dưới 200 triệu đồng</option>
                        <option value="3">Từ 200 triệu đồng đến dưới 500 triệu</option>
                        <option value="4">Từ 500 triệu đồng đến dưới 1 tỷ đồng</option>
                        <option value="5">Từ 1 tỷ đồng trở lên</option>
                    </select>

                </div>
                <div class="sm:col-span-3 col-span-12">
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
                    <el-table-column label="STT" width="100" align="left">
                        <template slot-scope="scope">
                            <span class="block idMobile1" style="margin-left: 10px">{{ scope.row.stt }}</span>
                            <span class="sm:hidden idMobile py-3" style="margin-left: 10px">STT: {{ scope.row.stt
                            }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Tên hội nông dân" prop="tenDonVi" align="left" width="200">
                        <template slot-scope="scope">

                            <span class="block idMobile1" style="margin-left: 10px">{{ scope.row.tenDonVi }}</span>
                            <span class="sm:hidden idMobile py-3" style="margin-left: 10px">Tên hội nông dân:{{
                                scope.row.tenDonVi }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="Mã số" prop="tenDonVi" align="left" width="200">
                        <template slot-scope="scope">

                            <span class="block idMobile1" style="margin-left: 10px">{{ scope.row.maSo }}</span>
                            <span class="sm:hidden idMobile py-3" style="margin-left: 10px">Mã số:{{ scope.row.maSo
                            }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Nội dung báo cáo" align="left">
                        <template slot-scope="scope">
                            <el-row>
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>Doanh thu bán hàng và cung cấp dịch vụ</span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>Doanh thu bán hàng và cung cấp dịch vụ: {{
                                        scope.row.doanhThuBanHangVaCungCapDichVu }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>Từ giao dịch với thành viên</span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>Từ giao dịch với thành viên: {{ scope.row.doanhThuThanhVien }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>Tổng lợi nhuận kế toán trước thuế thu nhập</span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>Tổng lợi nhuận kế toán trước thuế thu nhập: {{
                                        scope.row.loiNhuanTruocThue }}</span>
                                </div>

                            </el-row>

                            <el-row>
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>Tổng lợi nhuận sau nghĩa vụ tài chính </span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>Tổng lợi nhuận sau nghĩa vụ tài chính : {{ scope.row.loiNhuanTrichQuyDTPT +
                                        scope.row.loiNhuanTrichQuyDPTC + scope.row.loiNhuanTrichQuyKhac
                                        + scope.row.loiNhuanChiaThanhVienTheoSuDungDichVu
                                        + scope.row.loiNhuanChiaThanhVienTheoGopVon +
                                        scope.row.loiNhuanChiaThanhVienTheoKhac
                                    }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>Tổng lợi nhuận trích lập các quỹ</span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>Tổng lợi nhuận trích lập các quỹ: {{ scope.row.loiNhuanTrichQuyDTPT +
                                        scope.row.loiNhuanTrichQuyDPTC + scope.row.loiNhuanTrichQuyKhac }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>Tổng lợi nhuận chia cho thành viên</span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>Tổng lợi nhuận chia cho thành viên: {{
                                        scope.row.loiNhuanChiaThanhVienTheoSuDungDichVu
                                        + scope.row.loiNhuanChiaThanhVienTheoGopVon +
                                        scope.row.loiNhuanChiaThanhVienTheoKhac
                                    }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>Tổng quỹ lương</span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>Tổng quỹ lương: {{ scope.row.tongQuyLuong }}</span>
                                </div>

                            </el-row>

                        </template>
                        <!-- <span style="margin-left: 10px">{{ i.title }}</span> -->

                    </el-table-column>
                    <el-table-column v-if="windowWidth > 767" label="Kết quả" align="left" width="150">
                        <template slot-scope="scope">
                            <el-row>
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span>{{ scope.row.doanhThuBanHangVaCungCapDichVu }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span>{{ scope.row.doanhThuThanhVien }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span>{{ scope.row.loiNhuanTruocThue }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span>{{ scope.row.loiNhuanTrichQuyDTPT + scope.row.loiNhuanTrichQuyDPTC
                                        + scope.row.loiNhuanTrichQuyKhac + scope.row.loiNhuanChiaThanhVienTheoSuDungDichVu
                                        + scope.row.loiNhuanChiaThanhVienTheoGopVon +
                                        scope.row.loiNhuanChiaThanhVienTheoKhac
                                    }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span> {{ scope.row.loiNhuanTrichQuyDTPT + scope.row.loiNhuanTrichQuyDPTC
                                        + scope.row.loiNhuanTrichQuyKhac }}</span>
                                </div>

                            </el-row>
                            <el-row>
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span> {{ scope.row.loiNhuanChiaThanhVienTheoSuDungDichVu
                                        + scope.row.loiNhuanChiaThanhVienTheoGopVon +
                                        scope.row.loiNhuanChiaThanhVienTheoKhac
                                    }}</span>
                                </div>

                            </el-row>

                            <el-row>
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span> {{ scope.row.tongQuyLuong }}</span>
                                </div>

                            </el-row>

                        </template>
                    </el-table-column>

                </template>
            </Datatable>
        </div>
    </div>
</template>

<style>
/* .cell,
        .el-table_1_column_3.is-left.el-table__cell {
            padding: 0 !important;
        }

        .el-table__row>td {
            padding: 0 !important;

        } */

.el-row {
    /* border-top: 1px solid #EBEEF5; */
    height: 50px;
}

.el-row:last-child {
    margin-bottom: 0;
}

/* .grid-content {

      min-height: 36px;
    } */
@media screen and (max-width: 767px) {
    .idMobile {
        display: block;
    }

    .idMobile1 {
        display: none;

    }

}
</style>

<script>
import axios from 'axios';
import form from 'vuejs-form'
export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'tenDonVi', 'maSo'
                ],
                // đường dẫn đến ajax
                url: '/DonVi/ThongKeKetQuaKinhDoanhHTX',
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
                kybiendongId: '',
            })
                .rules({
                    kybiendongId: 'required',
                })
                .messages({
                    'kybiendongId.required': 'Trường bắt buộc nhập',
                }),
            rowId: '',
            statusForm: '',

            listKybiendong: [],
            slots: [{
                title: 'Doanh thu bán hàng và cung cấp dịch vụ',
                prop: 'doanhThuBanHangVaCungCapDichVu'
            },
            {
                title: 'Tổng lợi nhuận kế toán trước thuế thu nhập',
                prop: 'loiNhuanTruocThue'
            },
            {
                title: 'Tổng lợi nhuận sau nghĩa vụ tài chính ',
                prop: 'TongLoinhuan04'
            },
            {
                title: 'Tổng lợi nhuận trích lập các quỹ ',
                prop: 'TongLoinhuan05'
            },
            {
                title: 'Tổng lợi nhuận chia cho thành viên ',
                prop: 'TongLoinhuan09'
            },
            {
                title: 'Tổng quỹ lương',
                prop: 'tongQuyLuong'
            },

            ],
            tongDoanhThuBanHangVaCungCapDichVu: 0,
            loiNhuanTruocThue: 0,
            windowWidth: window.innerWidth,

        }
    },
    async mounted() {
        const self = this
        const response = await axios.get('/KyBienDongs')

        this.listKybiendong = response.data.data
        this.dataForm.kybiendongId = self.listKybiendong[0].id

        // console.log(this.dataForm.kybiendongId);
        this.loadData();

        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    },
    watch: {

        'datatb.searchnow'() {
            this.loadData();
        },
        tongDoanhThuBanHangVaCungCapDichVu() {
            this.loadData();
        },
        loiNhuanTruocThue() {
            this.loadData();
        }
    },

    methods: {

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
                .get(self.datatb.url + '?kyBienDong=' + self.dataForm.kybiendongId, {
                    // Đẩy dữ liệu lên controller
                    params: {
                        // Giá trị mặc định phải có
                        // start:index bản ghi bắt đầu
                        // length:số lượng bản ghi trên 1 trang
                        // searchcolum:Các cột được phép tìm kiếm
                        // searchnow: Giá trị tìm kiêm hiện tại
                        tongDoanhThuBanHangVaCungCapDichVu: self.tongDoanhThuBanHangVaCungCapDichVu,
                        loiNhuanTruocThue: self.loiNhuanTruocThue,
                        start: self.datatb.start,
                        searchcolum: self.datatb.searchcolum,
                        length: self.datatb.length,
                        searchnow: self.datatb.searchnow,
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
                    console.log(response.data);

                })
        },
        //data table

    },
}
</script>
