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

                                                            <h1 class="text-to">CSDL HND TỈNH QUẢNG NAM</h1>
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

            <div class="grid grid-cols-12 mx-auto w-full">

                <div class="sm:col-span-8 col-span-12 p-3 grid grid-cols-12">
                    <div class="sm:col-span-4 col-span-12">
                        <img class="max-h-56 mx-auto" :src="InfoSanpham.images?InfoSanpham.images:'/img/No_Image_Available.jpg'" alt="ui/ux review check" />
                    </div>
                    <div class="sm:col-span-8 col-span-12">

                        <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {{InfoSanpham.tenSanPham}}
                        </h5>

                        <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                            {{InfoSanpham.noiDung}}
                        </p>
                    </div>
                </div>
                <div class="sm:col-span-4 col-span-12 p-3 grid grid-cols-12">
                    <div class="col-span-12 border-b-2 h-8">
                        <h5 class="block border-b-4  w-fit font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased" style="border-color: rgb(20, 129, 193);">
                            Hội nông dân sản xuất
                        </h5>
                    </div>
                    <div class="col-span-12  grid grid-cols-12 py-2">
                        <div class="col-span-4 py-2">
                            <img class="max-w-20 w-28 h-24 object-cover" src="/img/No_Image_Available.jpg" alt="ui/ux review check" />
                        </div>
                        <div class="col-span-8 p-2">

                            <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                <a :href="'/chi-tiet-san-pham?'">
                                    Chè
                                </a>
                            </h5>

                            <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                                Chè
                            </p>
                        </div>
                    </div>
                    <div class="col-span-12  grid grid-cols-12 py-2">
                        <div class="col-span-4 py-2">
                            <img class="max-w-20 w-28 h-24 object-cover" src="/img/No_Image_Available.jpg" alt="ui/ux review check" />
                        </div>
                        <div class="col-span-8 p-2">

                            <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                <a :href="'/chi-tiet-san-pham?'">
                                    Chè
                                </a>
                            </h5>

                            <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                                Chè
                            </p>
                        </div>
                    </div>

                </div>
            </div>

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
            idsanpham: 0,
            InfoSanpham: [],

        };
    },
    mounted() {
        const self = this;
        let uri = window.location.search.substring(1);
        this.idsanpham = Number(uri);
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
            axios.get(self.datatb.url + '/' + this.idsanpham).then(function (response) {
                self.InfoSanpham = response.data;

            });

        },
    },
};
</script>
