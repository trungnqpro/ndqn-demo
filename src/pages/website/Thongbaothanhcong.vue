
<template>
<div>
    <LayoutWebsite>
        <div class="bg-green-100 border border-green-400 rounded-lg px-4 py-3 flex items-center" role="alert">
            <div class="mr-4">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x text-green-400"></i>
                    <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div>
                <p class="font-bold">Đăng ký tài khoản thành công!</p>
                <p class="text-sm">Cảm ơn bạn đã đăng ký tài khoản. Bây giờ bạn có thể đăng nhập vào trang web của chúng tôi<a href="/login"><b> tại đây.</b></a></p>
              
            </div>
        </div>

        <!-- <div class="flex items-center justify-center  w-full h-full p-4 bg-white  ">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <p class="ml-3 text-sm font-bold text-green-600">Chúc mừng bạn đã đăng ký tài khoản thành công !</p>
            </div>

        </div> -->

    </LayoutWebsite>
</div>
</template>

<script>
// import axios from "axios";
// import form from "vuejs-form";
import Vue from 'vue'
Vue.component('LayoutWebsite', require('../../components/LayoutWebsite.vue').default);
import axios from "axios";
import form from "vuejs-form";
export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: ["tenSanPham"],
                // đường dẫn đến ajax
                url: "SanPham",
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

        };
    },
    mounted() {
        this.loadData();

    },
    watch: {
        searchnow() {
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
                    self.datatb.tableData = response.data.data;
                    self.listParentId = response.data.data;
                });
        },
    },
};
</script>
