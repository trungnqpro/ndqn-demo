<template>
    <div>
        <div class="text-gray-100 text-xl">
            <div class="p-2 mt-1 ">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Đánh giá hội nông dân</h1>
            </div>
        </div>

        <div class="pb-2">
            <div class="flex justify-between sm:flex sm:items-center ">
                <div class=" w-full">
                    <div class="justify-between sm:flex sm:items-center ">
                        <div class="sm:flex-auto">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <export-excel class="btn btn-default" :data="datatb.tableData" :fields="json_fields"
                                    worksheet="My Worksheet" name="Danhgia.xls">
                                    Xuất excel
                                </export-excel>
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

            </div>
        </div>
        <div>
            <Datatable :datatb="datatb" namePaging="pagination" @pagination="pagination">
                <template>
                    <el-table-column label="STT" width="100">
                        <template slot-scope="scope">
                            <div class="sm:text-center">
                                <span class="sm:hidden"><b>STT:</b> </span>{{ scope.row.stt  }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Tên đơn vị" prop="tieuDe">
                        <template slot-scope="scope">

                            <span class="sm:hidden"><b>Tên đơn vị:</b> </span>{{ scope.row.tenDonVi }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Mã số thuế" prop="tieuDe">
                        <template slot-scope="scope">

                            <span class="sm:hidden"><b>Mã số thuế:</b> </span>{{ scope.row.maSo }}
                        </template>
                    </el-table-column>
                    <!-- <el-table-column label="Tổng điểm" prop="tieuDe">
                        <template slot-scope="scope">

                            <span class="sm:hidden"><b>Tổng điểm:</b> </span>{{ scope.row.diemDanhGia }}
                        </template>
                    </el-table-column> -->
                    <!-- <el-table-column label="Xếp loại" prop="tieuDe">
                    <template slot-scope="scope">

                        <span class="sm:hidden"><b>Xếp loại:</b> </span>{{ scope.row.tieuDe }}
                    </template>
                </el-table-column> -->
                    <el-table-column width="270">
                        <template slot="header">
                            Chức năng
                        </template>
                        <template slot-scope="scope">
                            <div class="text-center">
                                <el-tooltip class="item" effect="dark" content="Bảng đánh giá hội nông dân năm"
                                    placement="top-start">
                                    <el-button size="mini" @click="doBangdanhgiahoptacxanam(scope.row)">
                                        <i class="el-icon-receiving text-lg"></i>
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
import excel from 'vue-excel-export'
import Vue from 'vue'
Vue.use(excel)
export default {

    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'name'
                ],
                // đường dẫn đến ajax
                url: '/Donvi',
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
                tieuDe: '',
            })
                .rules({
                    tieuDe: 'required',
                })
                .messages({
                    'tieuDe.required': 'Trường bắt buộc nhập',
                }),
            json_fields: {
                'Tên đơn vị': 'tenDonVi',
                'Mã số thuế': 'maSo',
                'Tổng điểm': 'diemDanhGia',
            },
            json_meta: [
                [
                    {
                        'key': 'charset',
                        'value': 'utf-8'
                    }
                ]
            ],
            rowId: '',
            statusForm: '',
            isActivemodal: true,
            listKybiendongs: [],
            Listdonvi: [],

        }
    },
    mounted() {
        const self = this;
        axios.get("/KyBienDongs").then((res) => {
            self.listKybiendongs = res.data.data;
            for (let index = 0; index < self.listKybiendongs.length; index++) {
                self.kyBienDongId = self.listKybiendongs[0].id;

            }

        });
        this.loadData();
    },
    watch: {
        'datatb.searchnow'() {
            this.loadData();
        },

    },
    methods: {
        doBangdanhgiahoptacxanam(data) {
            window.location.href = "bang-danh-gia-hop-tac-xa-nam?kyBienDong=" + this.kyBienDongId + "&&donvi=" + data.id;
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

                    // for (let index = 0; index < response.data.data.length; index++) {
                    //     axios.get("/DanhGiaHTX?donViId=" + response.data.data[index].id + "&kyBienDong=" + self.kyBienDongId)
                    //         .then((res) => {

                    //             if (res.data.data.length > 0) {

                    //                 response.data.data[index].diemDanhGia = res.data.data[0].diemDanhGia;

                    //             } else {
                    //                 response.data.data[index].diemDanhGia = 0
                    //             }
                    //             self.Listdonvi.push(response.data.data[index]);
                    //         });

                    // }
                    for (let index = 0; index < response.data.data.length; index++) {

                        response.data.data[index].stt = start + 1;
                        start++;
                    }
                    self.datatb.tableData = response.data.data;
                });
        },
        //data table

        thongbaothatbai(text) {
            this.$notify.error({
                title: 'Error',
                message: text
            });

        },

    },
}
</script>
