<style lang="css">
@import '../assets/css/website.css';
@import 'https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css';
@import 'https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
</style>
<template>
<div>
     <div class="flex flex-wrap  ">
        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <a href="/quan-ly-hien-vat">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs">Tổng số đơn vị</h5>
                                <span class="font-semibold text-xl text-blueGray-700"> 10</span>
                            </a>

                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                <a href="/quan-ly-hien-vat">
                                    <i class="fas fa-chart-bar "></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <a href="/bo-suu-tap">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs">Tổng số Lao Động Hợp Tác Xã
                                </h5>
                                <span class="font-semibold text-xl text-blueGray-700"> 500</span>
                            </a>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                <a href="bo-suu-tap">
                                    <i class="fas fa-chart-pie"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <a href="quan-ly-trung-bay">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs">Tổng Số Thành Viên Hợp Tác Xã
                                </h5>
                                <span class="font-semibold text-xl text-blueGray-700"> 1000</span>
                            </a>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                                <a href="quan-ly-trung-bay">
                                    <i class="fas fa-users"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <a href="trung-bay-ao">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs">Tổng Số Lĩnh Vực Hoạt Động
                                </h5>
                                <span class="font-semibold text-xl text-blueGray-700">15</span>
                            </a>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                <a href="trung-bay-ao">
                                    <i class="fas fa-percent"> </i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
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
                url: '',
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
                    
                
                })
                .rules({
                 
                })
                .messages({
                    
                }),
            rowId: '',
            statusForm: '',
            isActivemodal: true,
        }
    },
    mounted() {
        
    },
    watch: {
       
    },
    methods: {
       
        doAlertDelete(data) {
            const self = this;
            this.$confirm('Thao tác này không thể quay lại, bạn chắc chắn tiếp tục?', 'Cảnh báo', {
                confirmButtonText: 'Vâng, xóa nó!',
                cancelButtonText: 'Không xóa!',
                type: 'warning',
                center: true
            }).then(() => {
                axios.delete("/delete-phong-ban?id=" + data.id)
                    .then(function (response) {
                        self.loadData();
                        console.log(response.data[0])
                        if (response.data[0] == 'true') {
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
