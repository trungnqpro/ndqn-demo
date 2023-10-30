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
        <div id="baocaothongke" class="mx-6 my-4 p-2 bg-white">
            <b>
                1. Thống kê theo địa bàn hoạt động
            </b>
            <Datatable :datatb="datatb" namePaging="pagination" @@pagination="pagination">
                <template>
                    <el-table-column prop="name" label="Địa bàn">
                    </el-table-column>
                    <el-table-column prop="tonghtx" align="center" label="Số HND">
                    </el-table-column>
                    <el-table-column prop="tongts" align="center" label="Tổng tài sản
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="Tinhtrang" align="center" label="Tài sản cố định
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="von" align="center" label="Tổng nguồn vốn
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="doanhthu" align="center" label="Tổng doanh thu
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="thue" align="center" label="Nộp thuế
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="Tinhtrang" align="center" label="SL HĐQT
        (người)">
                    </el-table-column>
                    <el-table-column prop="thanhvien" align="center" label="SL thành viên
        (người)">
                    </el-table-column>
                    <el-table-column prop="laodong" align="center" label="SL lao động
        (người)">
                    </el-table-column>
                </template>
                <!--End Colum -->
            </Datatable>

            <b>
                2. Thống kê theo lĩnh vực hoạt động
            </b>
            <Datatable :datatb="datatb2" namePaging="pagination" @@pagination="pagination">
                <template>
                    <el-table-column prop="name" label="Lĩnh vực">
                    </el-table-column>
                    <el-table-column prop="tonghtx" align="center" label="Số HND">
                    </el-table-column>
                    <el-table-column prop="tongts" align="center" label="Tổng tài sản
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="Tinhtrang" align="center" label="Tài sản cố định
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="von" align="center" label="Tổng nguồn vốn
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="doanhthu" align="center" label="Tổng doanh thu
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="thue" align="center" label="Nộp thuế
        (triệu đồng)">
                    </el-table-column>
                    <el-table-column prop="Tinhtrang" align="center" label="SL HĐQT
        (người)">
                    </el-table-column>
                    <el-table-column prop="thanhvien" align="center" label="SL thành viên
        (người)">
                    </el-table-column>
                    <el-table-column prop="laodong" align="center" label="SL lao động
        (người)">
                    </el-table-column>
                </template>
                <!--End Colum -->
            </Datatable>

        </div>
    </LayoutWebsiteNew>
</div>
</template>

<script>
// import axios from "axios";
// import form from "vuejs-form";
export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'name'
                ],
                // đường dẫn đến ajax
                url: '/ajax-bao-cao-thong-ke',
                // Số bản ghi trên 1 trang
                length: 20,

                // Biến tìm kiếm
                searchnow: '',
                // Số trang
                total: '',
                // Dữ liệu danh sách bảng

                // Trang hiện tại đang ở
                paginatenow: 1,
            },
            datatb2: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'name'
                ],
                // đường dẫn đến ajax
                url: '/ajax-bao-cao-thong-ke2',
                // Số bản ghi trên 1 trang
                length: 20,

                // Biến tìm kiếm
                searchnow: '',
                // Số trang
                total: '',
                // Dữ liệu danh sách bảng

                // Trang hiện tại đang ở
                paginatenow: 1,
            },

        };
    },
    mounted() {},
    watch: {},
    methods: {},
};
</script>
