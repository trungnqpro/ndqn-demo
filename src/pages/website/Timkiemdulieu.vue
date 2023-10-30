<template>
    <div>
        <LayoutWebsiteNew>
            <section id="body-of-portlet">
                <div class="columns-1" id="main-content" role="main">
                    <div class="portlet-layout row">
                        <div class="col-md-12 portlet-column portlet-column-only" id="column-1">
                            <div class="portlet-dropzone portlet-column-content portlet-column-content-only"
                                id="layout-column_column-1">

                                <div class="portlet-boundary portlet-boundary_vn_gov_data_portlet_DatagovPortlet_  portlet-static portlet-static-end decorate  "
                                    id="p_p_id_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke_">
                                    <span id="p_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"></span>

                                    <section class="portlet"
                                        id="portlet_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"
                                        style="width: 101.2%;">

                                        <div class="portlet-content" style="padding:0px !important;">

                                            <div class=" portlet-content-container">

                                                <div class="portlet-body">

                                                    <section class="bg-slide container-fluid">
                                                        <div class="row">
                                                            <div class="col-md-4 col-md-offset-1  mt-150">

                                                                <h1 class="text-to">HỘI NÔNG DÂN TỈNH QUẢNG NAM</h1>
                                                                <p class="text-trang">Điểm đầu mối công bố dữ liệu mở, cung
                                                                    cấp thông tin về chia sẻ dữ liệu của cơ quan nhà nước
                                                                </p>
                                                                <a href="#"
                                                                    class="btn btn-success text-uppercase">Dữ liệu mở</a>
                                                            </div>
                                                            <div class="col-md-5 text-center col-md-offset-2"><img
                                                                    class="mt-30slide img-responsive" src="~@/assets/fonts/slide.svg"
                                                                    alt></div>
                                                        </div>
                                                    </section>

                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="timkiemdulieu" class="mx-6 my-4 p-2 bg-white">

                <div class="grid grid-cols-12 py-2">

                    <div class="col-span-12  ">
                        <!-- thông tin dư liệu tra cứu  -->
                        <div class="flex p-2 text-white " style="background-color: #2067DD ">
                            <i class="ri-search-line text-xl"></i>
                            <p class="uppercase px-2  text-xl " style="margin: 0px !important;">
                                Tra cứu dữ liệu kinh tế tập thể
                            </p>
                        </div>
                        <div class=" grid grid-cols-12 ">
                            <div class="relative col-span-12 sm:col-span-4 p-2">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input type="search" id="search" v-model="searchnow"
                                    class="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Từ khóa tìm kiếm" required />
                            </div>
                            <div class=" col-span-12 sm:col-span-4 p-2">
                                <select v-model="diaban_id"
                                    class=" rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="0">-- Chọn Địa Bàn --</option>
                                    <option v-for="i in listDiaban" :value="i.id" :key="i.id">
                                        {{ i.tenDiaBan }}
                                    </option>
                                </select>
                            </div>
                            <div class=" col-span-12 sm:col-span-4 p-2">
                                <select v-model="loaihinhkinhte_id"
                                    class=" rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="0">-- Chọn Loại Hình Kinh Tế --</option>
                                    <option v-for="i in listLoaihinhkinhte" :value="i.id" :key="i.id">
                                        {{ i.tenLoaiHinhKinhTe }}
                                    </option>
                                </select>
                            </div>
                            <div class=" col-span-12 sm:col-span-4 p-2">
                                <select v-model="linhvuchoatdong_id"
                                    class=" rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="0">-- Chọn Lĩnh Vực --</option>
                                    <option v-for="i in Linhvuchoatdong" :value="i.id" :key="i">
                                        {{ i.tenLinhVucHoatDong }}
                                    </option>
                                </select>
                            </div>
                            <div class=" col-span-12 sm:col-span-4 p-2">
                                <select v-model="trangthai_id"
                                    class=" rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="0">-- Chọn trang thái --</option>
                                    <option value="1">Đang hoạt động</option>
                                    <option value="2">Ngừng hoạt động</option>
                                </select>
                            </div>
                        </div>
                        <div class="border p-2">
                            <Datatable :datatb="datatb" namePaging="pagination" @pagination="pagination">
                                <template>
                                    <el-table-column label="STT" width="60" align="center">
                                        <template slot-scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.stt }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="tenDonVi" label="Đơn vị">
                                    </el-table-column>
                                    <el-table-column prop="diaBan" label="Địa bàn">
                                    </el-table-column>
                                    <el-table-column prop="linhVucHoatDongChinh" label="Lĩnh vực hoạt động chính">
                                    </el-table-column>
                                    <el-table-column prop="Tinhtrang" label="Tình trạng">
                                        <template slot-scope="scope">
                                            <span v-if="scope.row.status == 1">Đang hoạt động </span>
                                            <span v-else-if="scope.row.status == 2"> Ngừng hoạt động</span>

                                        </template>
                                    </el-table-column>
                                </template>
                                <!--End Colum -->
                            </Datatable>
                        </div>
                        <!-- end thông tin dữ liệu tra cứu -->

                    </div>
                </div>
            </div>
        </LayoutWebsiteNew>
    </div>
</template>

<script>
import axios from "axios";
// import form from "vuejs-form";

export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: ["tenDonVi"],
                // đường dẫn đến ajax
                url: "DonVi/TraCuuThongTinDuLieu",
                // Số bản ghi trên 1 trang
                length: 10,

                // Biến tìm kiếm
                searchnow: "",
                // Số trang
                total: "",
                // Dữ liệu danh sách bảng
                tableData: [],
                // Trang hiện tại đang ở
                paginatenow: 1,
            },
            listDiaban: [],
            listLoaihinhkinhte: [],
            Linhvuchoatdong: [],
            searchnow: "",
            diaban_id: 0,
            linhvuchoatdong_id: 0,
            loaihinhkinhte_id: 0,
            trangthai_id: 0,
        };
    },
    mounted() {
        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.linhvuchoatdong_id = Number(params.get("linhvuchoatdong_id"));
        this.loaihinhkinhte_id = Number(params.get("loaihinhkinhte_id"));
        console.log(this.linhvuchoatdong_id);
        console.log(this.loaihinhkinhte_id);
        const self = this;
        this.loadData();
        axios.get("/DiaBan").then(function (response) {
            self.listDiaban = response.data.data;
        });
        axios.get("/LoaiHinhKinhTe").then(function (response) {
            self.listLoaihinhkinhte = response.data.data;
        });
        axios.get("/LinhVucHoatDong").then(function (response) {
            self.Linhvuchoatdong = response.data.data;
        });

    },
    watch: {
        searchnow() {
            this.loadData();
        },
        diaban_id() {
            this.loadData();
        },
        linhvuchoatdong_id() {
            this.loadData();
        },
        loaihinhkinhte_id() {
            this.loadData();
        },
        trangthai_id() {
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
                        diaBanId: this.diaban_id,
                        linhVucId: this.linhvuchoatdong_id,
                        loaiHinhKinhTeId: this.loaihinhkinhte_id,
                        status: this.trangthai_id,
                        start: this.datatb.start,
                        searchcolum: this.datatb.searchcolum,
                        length: this.datatb.length,
                        searchnow: this.searchnow,
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

                    // for (let index = 0; index < array.length; index++) {
                    //     const element = array[index];

                    // }
                    self.listParentId = response.data.data;
                });
        },
    },
};
</script>
