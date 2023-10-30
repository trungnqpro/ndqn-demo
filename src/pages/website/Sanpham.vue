<template>
<div>
    <LayoutWebsiteNew>
        <section id="body-of-portlet">
            <div class="columns-1" id="main-content" role="main">
                <div class="portlet-layout row">
                    <div class="col-md-12 portlet-column portlet-column-only" id="column-1">
                        <div class="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">

                            <div class="portlet-boundary portlet-boundary_vn_gov_data_portlet_DatagovPortlet_  portlet-static portlet-static-end decorate  " id="p_p_id_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke_">
                                <span id="p_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"></span>

                                <section class="portlet" id="portlet_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke" style="width: 101.2%;">

                                    <div class="portlet-content" style="padding:0px !important;">

                                        <div class=" portlet-content-container">

                                            <div class="portlet-body">

                                                <section class="bg-slide container-fluid">
                                                    <div class="row">
                                                        <div class="col-md-4 col-md-offset-1  mt-150">

                                                            <h1 class="text-to">HỘI NÔNG DÂN TỈNH QUẢNG NAM</h1>
                                                            <p class="text-trang">Điểm đầu mối công bố dữ liệu mở, cung cấp thông tin về chia sẻ dữ liệu của cơ quan nhà nước</p>
                                                            <a href="#" class="btn btn-success text-uppercase">Dữ liệu mở</a>
                                                        </div>
                                                        <div class="col-md-5 text-center col-md-offset-2"><img class="mt-30slide img-responsive" src="~@/assets/fonts/slide.svg" alt></div>
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
        <div class="bg-white">

            <form class="grid grid-cols-12 w-full px-2 my-2">

                <div class="sm:col-span-4 col-span-12 w-full px-2">

                    <select style="max-width: -webkit-fill-available;height: 100% !important;" v-model="nhomSanPhamId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full h-full " >
                        <option value="0">Chọn nhóm sản phẩm</option>
                        <option v-for="(i, index) in Listnhomsanphams" :value="i.id" :key="index">
                            {{ i.tenNhomSanPham }}
                        </option>
                    </select>

                </div>
                <div class="sm:col-span-8 col-span-12">
                    <input type="text" v-model="datatb.searchnow" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                </div>
                <!-- <button type="submit" class="sm:col-span-1 col-span-12 p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button> -->
            </form>

            <div class="grid grid-cols-12 mx-auto w-full">
                <div class="sm:col-span-4 col-span-12 p-3" v-for="(i,index) in (datatb.tableData)" :key="index">
                    <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <img class="max-h-56 mx-auto" :src="i.images?i.images:'/img/No_Image_Available.jpg'" alt="ui/ux review check" />
                            <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

                        </div>
                        <div class="p-6">
                            <div class="mb-3 flex items-center justify-between">
                                <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    <a :href="'/chi-tiet-san-pham?'+i.id">
                                        {{i.tenSanPham}}
                                    </a>
                                </h5>
                                <!-- <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="-mt-0.5 h-5 w-5 text-yellow-700">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                    </svg>
                                    5.0
                                </p> -->
                            </div>
                            <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                                {{i.mota}}
                            </p>

                        </div>
                        <div class="p-6 pt-3">
                            <a :href="'/chi-tiet-san-pham?'+i.id" class="block w-full select-none rounded-lg bg-blue-500  py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
                                Chi tiết
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <el-pagination @current-change="handleCurrentChange" :page-size="100" layout="prev, pager, next, jumper" :total="datatb.total * 100">
            </el-pagination>
        </div>
    </LayoutWebsiteNew>
</div>
</template>

<script>
// import axios from "axios";
// import form from "vuejs-form";
import Vue from 'vue'
Vue.component('LayoutWebsiteNew', require('../../components/LayoutWebsiteNew.vue').default);
import axios from "axios";
import form from "vuejs-form";
export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: ["tenSanPham"],
                // đường dẫn đến ajax
                url: "/SanPham",
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
            dataForm: form({}).rules({}).messages({}),
            rowId: "",
            statusForm: "",
            isActivemodal: true,
            searchnow: "",
            nhomSanPhamId: 0,
            Listnhomsanphams: [],

        };
    },
    mounted() {
        const self = this;
        this.loadData();
        axios.get("/NhomSanPham").then(function (response) {
            self.Listnhomsanphams = response.data.data;
        });
    },
    watch: {
        'datatb.searchnow'() {
            this.loadData();
        },
        nhomSanPhamId() {
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
                        start: this.datatb.start,
                        searchcolum: this.datatb.searchcolum,
                        length: this.datatb.length,
                        nhomSanPhamId: this.nhomSanPhamId,
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
                    self.listParentId = response.data.data;
                });
        },
    },
};
</script>
