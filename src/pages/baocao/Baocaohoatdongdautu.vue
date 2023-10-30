<template>
    <div>
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1  items-center">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Báo cáo tài sản</h1>
                <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
            </div>
        </div>
        <!-- <div class="my-2 bg-gray-600 h-[1px]"></div> -->
        <div class="py-4 w-full">
            <div class="grid grid-cols-12 ">
                <div class="sm:col-span-3 col-span-12 w-full sm:p-1 py-2">
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

                <div class="sm:col-start-11 sm:col-end-13  col-span-12">
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

                            <el-row v-for="(i, index) in slots" :key="index">
                                <div class="px-2  idMobile1  sm:flex sm:items-center sm:h-full sm:overflow-auto">

                                    <span>{{ i.title }}</span>
                                </div>
                                <div class="px-2 sm:hidden idMobile">

                                    <span>{{ i.title }}: {{ scope.row[i.prop] }}</span>
                                </div>

                            </el-row>
                        </template>
                        <!-- <span style="margin-left: 10px">{{ i.title }}</span> -->

                    </el-table-column>
                    <el-table-column v-if="windowWidth > 767" label="Số lượng" align="left" width="150">
                        <template slot-scope="scope">
                            <el-row v-for="(i, index) in slots" :key="index">
                                <div class="px-2 " style="height: 100%;display: flex;align-items: center;">
                                    <span>{{ scope.row[i.prop] }}</span>
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
                url: '/DonVi/ThongKeHoatDongDauTuDonVi',
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
                title: 'Tổng số vốn góp vào doanh nghiệp',
                prop: 'tongVonGop'
            },
            {
                title: 'Tổng giá trị cổ phần mua',
                prop: 'tongCoPhan'
            },
            {
                title: 'Tổng vốn điều lệ của doanh nghiệp trực thuộc',
                prop: 'tongVonDieuLeDoanhNghiep'
            },

            ],

            windowWidth: window.innerWidth

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
                    

                })
        },
        //data table

    },
}
</script>
