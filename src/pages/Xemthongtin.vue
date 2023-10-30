<style>
.el-tabs__nav-next,
.el-tabs__nav-prev {

    font-size: 24px !important;

}

@media only screen and (max-width: 600px) {

    .el-tabs__nav-next,
    .el-tabs__nav-prev {

        font-size: 24px !important;

    }
}
</style>
<template>
<div id="demo" class="bg-white min-h-screen">

    <template>

        <el-tabs type="card" @tab-click="handleClick">

            <!-- chưa tạo datatable ở vuejs -->

            <el-tab-pane label="Thành viên và lao động">
                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto sm:block hidden" style="height:90%">
                        <div class="col-span-12  ring-1 ring-gray-300  sm:rounded-lg   m-4 p-1">

                            <div class="overflow-x-auto ">
                                <div class="inline-block min-w-full  align-middle ">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr class="divide-x  divide-gray-200">
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tên chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Đơn vị tính</th>
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Số lượng</th>
                                            </tr>

                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">A</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">B</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">1</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">2</td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">1. Tổng số thành viên </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">01</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Thành viên</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.tongSoThanhVien" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Trong đó: Số thành viên sử dụng <br> dịch vụ</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">02</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">%</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.soThanhVienSuDungDichVu" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">2. Tổng số lao động thường xuyên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">03</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.tongSoLaoDong" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>

                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Trong đó: Số lao động là thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">04</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.soLaoDongLaThanhVien" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> Trình độ lao động Đại học/ trên đại học</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">05</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongDaiHoc" placeholder="Độ tuổi lao động " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> Trình độ lao động trung cấp , cao đẳng</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">06</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongTrungCap" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> Trình độ lao động sơ cấp nghề </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">07</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongSoCapNghe" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> Trình độ lao động chưa qua đào tạo</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">08</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongChuaQuaDaoTao" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> Khung độ tuổi lao động</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">09</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Tuổi</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="text" v-model="dataFormThanhVienLaoDong.khungDoTuoiLaoDong" placeholder="Độ tuổi lao động " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thành viên tham gia mới</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">10</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.thanhVienThamGiaMoi" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> Thành viên là cá nhân</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">11</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.thanhVienLaCaNhan" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thành viên là hộ gia đình</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">12</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.thanhVienLaHoGiaDinh" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thành viên sử dụng sản phẩm dịch vụ</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">13</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.thanhVienSuDungSanPhamDichVu" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lao động có tham gia bảo hiểm xã hội</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">14</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.laoDongThamGiaBaoHiemXaHoi" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Mức độ hài lòng của thành viên đối với hội nông dân</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">15</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">mức độ</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <select id="rating" v-model="dataFormThanhVienLaoDong.mucDoHaiLong" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                                        <option value="0">Chọn mức độ hài lòng </option>
                                                        <option value="1">Tốt</option>
                                                        <option value="2">Khá</option>
                                                        <option value="3">Trung bình</option>
                                                        <option value="4">Kém</option>
                                                    </select>

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Trong đó lao động thường xuyên là nam</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">16</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.soLaoDongNam" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Trong đó lao động thường xuyên là nữ</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">17</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.soLaoDongNu" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thành viên là pháp nhân</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">18</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Đơn vị</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.thanhVienLaPhapNhan" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thu nhập bình quân/năm của một thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">19</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.thuNhapBinhQuanCuaThanhVien" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Mức độ tham gia đại hội thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">20</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.mucDoThamGiaDaiHoiThanhVien" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thu nhập bình quân của người lao động</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">21</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="number" v-model="dataFormThanhVienLaoDong.thuNhapBinhQuanCuaLaoDong" placeholder="Tổng số thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 sm:hidden">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">1. Tổng số thành viên</label>
                                <input type="text" placeholder="Đơn vị tính bằng người (VD:1)" v-model="dataFormThanhVienLaoDong.tongSoThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trong đó: Số thành viên sử dụng dịch vụ</label>
                                <input placeholder="Đơn vị tính bằng % (VD:1)" v-model="dataFormThanhVienLaoDong.soThanhVienSuDungDichVu" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">2. Tổng số lao động thường xuyên</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.tongSoLaoDong" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trong đó: Số lao động là thành viên</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.soLaoDongLaThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trình độ lao động Đại học/ trên đại học</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongDaiHoc" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trình độ lao động trung cấp , cao đẳng</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongTrungCap" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trình độ lao động sơ cấp nghề</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongSoCapNghe" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trình độ lao động chưa qua đào tạo</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.trinhDoLaoDongChuaQuaDaoTao" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Khung độ tuổi lao động</label>
                                <input  placeholder="Đơn vị tính tuổi (VD:30)" type="text" v-model="dataFormThanhVienLaoDong.khungDoTuoiLaoDong" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thành viên tham gia mới</label>
                                <input type="text" v-model="dataFormThanhVienLaoDong.thanhVienThamGiaMoi" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thành viên là cá nhân</label>
                                <input type="text"  placeholder="Đơn vị tính bằng người (VD:1)" v-model="dataFormThanhVienLaoDong.thanhVienLaCaNhan" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thành viên là hộ gia đình</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.thanhVienLaHoGiaDinh" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thành viên sử dụng sản phẩm dịch vụ</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.thanhVienSuDungSanPhamDichVu" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Lao động có tham gia bảo hiểm xã hội</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.laoDongThamGiaBaoHiemXaHoi" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thu nhập bình quân của người lao động</label>
                                <select id="rating" v-model="dataFormThanhVienLaoDong.mucDoHaiLong" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="0">Chọn mức độ hài lòng </option>
                                    <option value="1">Tốt</option>
                                    <option value="2">Khá</option>
                                    <option value="3">Trung bình</option>
                                    <option value="4">Kém</option>
                                </select>

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng số lao động thường xuyên là nam</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.soLaoDongNam" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng số lao động thường xuyên là nữ</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.soLaoDongNu" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thành viên là pháp nhân</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)" type="text" v-model="dataFormThanhVienLaoDong.thanhVienLaPhapNhan" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thu nhập bình quân/năm của một thành viên</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormThanhVienLaoDong.thuNhapBinhQuanCuaThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Mức độ tham gia đại hội thành viên</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)"  type="text" v-model="dataFormThanhVienLaoDong.mucDoThamGiaDaiHoiThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng số lao động thường xuyên là nữ</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)"  type="text" v-model="dataFormThanhVienLaoDong.thuNhapBinhQuanCuaLaoDong" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                        </div>
                    </div>
                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformThanhVienLaoDong()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>
            </el-tab-pane>
            <el-tab-pane label="Trình độ cán bộ chủ chốt">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">

                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto " style="height:90%">
                        <div v-for="(TrinhDoCanBoChuChot,key)  in ListTrinhDoCanBoChuChots" :value="TrinhDoCanBoChuChot.id" :key="key" class="col-span-12 m-3">
                            <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">{{TrinhDoCanBoChuChot.tenChucDanh}}
                                </label>
                                <div class="col-span-12 grid grid-cols-12 my-3">

                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Số người</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'songuoi')" v-model="TrinhDoCanBoChuChot.soNguoi" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Dưới 40 tuổi</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'duoi40')" v-model="TrinhDoCanBoChuChot.doTuoiDuoi40" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Trên 40 tuổi</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'tren40')" v-model="TrinhDoCanBoChuChot.doTuoiTren40" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Tiểu học</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'tieuhoc')" v-model="TrinhDoCanBoChuChot.trinhDoVanHoaTieuHoc" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">THCS</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'thcs')" v-model="TrinhDoCanBoChuChot.trinhDoVanHoaTHCS" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">THPT</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'thpt')" v-model="TrinhDoCanBoChuChot.trinhDoVanHoaTHPT" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Chưa qua đào tạo</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'chuaquadaotao')" v-model="TrinhDoCanBoChuChot.trinhDoChuaQuaDaoTao" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Sở cấp</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'socap')" v-model="TrinhDoCanBoChuChot.trinhDoSoCap" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Trung Cấp</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'trungcap')" v-model="TrinhDoCanBoChuChot.trinhDoTrungCap" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">CĐ</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'cd')" v-model="TrinhDoCanBoChuChot.trinhDoCaoDang" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">ĐH</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'dh')" v-model="TrinhDoCanBoChuChot.trinhDoDaiHoc" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700 px-2 r">Sau ĐH</label>
                                        <input  placeholder="Đơn vị tính bằng người (VD:1)" @blur="Chontrinhdocanbo($event,key,'saudh')" v-model="TrinhDoCanBoChuChot.trinhDoSauDaiHoc" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformTrinhDoCanboChuChot()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>
            </el-tab-pane>
            <el-tab-pane label="Tài sản">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white sm:block hidden">
                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto " style="height:90%">
                        <div class="col-span-12  ring-1 ring-gray-300  sm:rounded-lg   m-4 p-1">

                            <div class="overflow-x-auto ">
                                <div class="inline-block min-w-full  align-middle ">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr class="divide-x  divide-gray-200">
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tên chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Thời điểm</th>
                                            </tr>

                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">A</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">B</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">1</td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">1. Tài sản không chia (01=02+03+04+05)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">01</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{dataFormTaiSan.taiSan01}}</td>

                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Chia ra</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>

                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Quyền sử dụng đất do Nhà nước giao đất, <br>
                                                    cho thuê đất</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">02</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text" v-model="dataFormTaiSan.taiSan02"  required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>

                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Khoản được cấp, hỗ trợ không hoàn lại của nhà <br> nước,
                                                    khoản được tặng, cho theo thỏa thuận là tài <br> sản không chia</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">03</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text" v-model="dataFormTaiSan.taiSan03"  required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Phần trích lại từ quỹ đầu tư phát triển đưa vào tài <br> sản
                                                    không chia</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">04</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text" v-model="dataFormTaiSan.taiSan04"  required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Vốn, tài sản khác do điều lệ quy định là tài sản <br>
                                                    không chia</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">05</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text" v-model="dataFormTaiSan.taiSan05"  required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">2. Tổng cộng tài sản </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">06</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text" v-model="dataFormTaiSan.taiSan06"  required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">3. Tổng cộng nguồn vốn (07=08+09) </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">07</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    {{dataFormTaiSan.taiSan07}}

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Nợ phải trả</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">08</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text"  v-model="dataFormTaiSan.taiSan08" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Vốn chủ sở hữu</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">09</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text"  v-model="dataFormTaiSan.taiSan09" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Vốn đóng góp của các thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">10</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text"  v-model="dataFormTaiSan.vonDongGopCuaThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Vốn vay từ thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">11</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text"  v-model="dataFormTaiSan.vonVayTuThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Vay từ quỹ hỗ trợ của <br> liên minh HND Tỉnh</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">12</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text"  v-model="dataFormTaiSan.vonVayTuQuyHoTro" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Vay từ các nguồn tín dụng khác</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">13</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                                    <input placeholder="Triệu đồng (VD:100)"   type="text"  v-model="dataFormTaiSan.vonVayTuNguonTinDungKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformTaiSan()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>

                <!-- mobile -->
                <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 sm:hidden">
                    <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">1. Tài sản không chia (01=02+03+04+05) = {{dataFormTaiSan.taiSan02 +dataFormTaiSan.taiSan03+ dataFormTaiSan.taiSan04 +dataFormTaiSan.taiSan05}}</label>

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">02: Quyền sử dụng đất do Nhà nước giao đất, cho thuê đất</label>
                            <input placeholder="Triệu đồng (VD:100)" v-model="dataFormTaiSan.taiSan02" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">03: Khoản được cấp, hỗ trợ không hoàn lại của nhà nước, khoản được tặng, cho theo thỏa thuận là tài sản không chia</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.taiSan03" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">04: Phần trích lại từ quỹ đầu tư phát triển đưa vào tài sản không chia</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.taiSan04" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">05: Vốn, tài sản khác do điều lệ quy định là tài sản không chia</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.taiSan05" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">2. Tổng cộng tài sản</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.taiSan06" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">3. Tổng cộng nguồn vốn (07=08+09)= {{dataFormTaiSan.taiSan08 +dataFormTaiSan.taiSan09}}</label>

                        </div>

                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">08: Nợ phải trả</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.taiSan08" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">09: Vốn chủ sở hữu</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.taiSan09" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">10:Vốn đóng góp của các thành viên</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.vonDongGopCuaThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">11: Vay từ thành viên</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.vonVayTuThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">12: Vay từ quỹ hỗ trỡ của Liên minh HND tỉnh</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.vonVayTuQuyHoTro" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">13: Vay từ các nguồn tín dụng khác</label>
                            <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormTaiSan.vonVayTuNguonTinDungKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                    </div>
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformTaiSan()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>
                </div>
                <!--footer-->
            </el-tab-pane>

            <el-tab-pane label="Vốn điều lệ">
                <div class="sm:w-12/12 w-12/12  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto sm:block hidden" style="height:90%">
                        <div class="col-span-12  ring-1 ring-gray-300  sm:rounded-lg   m-4 p-1">

                            <div class="overflow-x-auto ">
                                <div class="inline-block min-w-full  align-middle ">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr class="divide-x  divide-gray-200">
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tên chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Đơn vị tính</th>
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Thời điểm</th>
                                            </tr>

                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">A</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">B</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">C</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">1</td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">1. Tổng vốn điều lệ</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">01</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Tr.đ</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="text" v-model="dataFormVonDieuLe.tongVonDieuLe" placeholder="Tổng vốn điều lệ" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">2. Tổng số thành viên góp vốn điều lệ</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">02</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Thành viên</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="text" v-model="dataFormVonDieuLe.tongThanhVienGop" placeholder="Tổng số thành viên góp vốn điều lệ" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">3. Mức vốn góp thấp nhất/thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">03</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Tr.đ</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="text" v-model="dataFormVonDieuLe.thapNhat" placeholder="Mức vốn góp thấp nhất/thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">4. Mức góp vốn cao nhất/thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">04</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Tr.đ</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="text" v-model="dataFormVonDieuLe.caoNhat" placeholder="Mức góp vốn cao nhất/thành viên" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 sm:hidden">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">1. Tổng vốn điều lệ</label>
                                <input placeholder="Triệu đồng (VD:100)"  type="text" v-model="dataFormVonDieuLe.tongVonDieuLe" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">2. Tổng số thành viên góp vốn điều lệ</label>
                                <input placeholder="Đơn vị tính bằng người (VD:1)"  v-model="dataFormVonDieuLe.tongThanhVienGop" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">3. Mức vốn góp thấp nhất/thành viên</label>
                                <input placeholder="Triệu đồng (VD:100)"  type="text" v-model="dataFormVonDieuLe.thapNhat" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">4. Mức góp vốn cao nhất/thành viên</label>
                                <input placeholder="Triệu đồng (VD:100)"  type="text" v-model="dataFormVonDieuLe.caoNhat" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>

                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class=" text-center  md:block pt-4">
                        <button @click="submitformVonDieuLe()" class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>
            </el-tab-pane>
            <el-tab-pane label="Hoạt động đầu tư">
                <div class="sm:w-12/12 w-12/12  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto   sm:block hidden" style="height:90%">
                        <div class="col-span-12  ring-1 ring-gray-300  sm:rounded-lg   m-4 p-1">

                            <div class="overflow-x-auto ">
                                <div class="inline-block min-w-full  align-middle ">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr class="divide-x  divide-gray-200">
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tên chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Đơn vị tính</th>
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Thời điểm</th>
                                            </tr>

                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">A</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">B</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">C</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">1</td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Tổng số vốn góp vào doanh nghiệp</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">01</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Tr.đ</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input v-model="dataFormHoatDongDautu.tongVonGop" type="text" placeholder="Tổng vốn điều lệ" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Tổng giá trị cổ phần mua</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">02</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Tr.đ</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="text" v-model="dataFormHoatDongDautu.tongCoPhan" placeholder="Tổng số thành viên góp vốn điều lệ" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Tổng vốn điều lệ của doanh nghiệp <br> trực thuộc</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">03</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Tr.đ</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input type="text" v-model="dataFormHoatDongDautu.tongVonDieuLeDoanhNghiep" placeholder="Mức vốn góp thấp nhất/thành viên " required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 sm:hidden">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng số vốn góp vào doanh nghiệp</label>
                                <input type="text"  placeholder="Triệu đồng (VD:100)" v-model="dataFormHoatDongDautu.tongVonGop" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng giá trị cổ phần mua</label>
                                <input v-model="dataFormHoatDongDautu.tongCoPhan" type="text"  placeholder="Triệu đồng (VD:100)" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổng vốn điều lệ của doanh nghiệp trực thuộc</label>
                                <input type="text"  placeholder="Triệu đồng (VD:100)" v-model="dataFormHoatDongDautu.tongVonDieuLeDoanhNghiep" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>

                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class=" text-center  md:block pt-4">
                        <button @click="submitformHoatDongDauTu()" class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>
            </el-tab-pane>
            <el-tab-pane v-if="dataFormDonVi.LoaiHinhID == 1 || dataFormDonVi.LoaiHinhID == 3" label="Kết quả kinh doanh HND,LHHTX">
                <div class="sm:w-12/12 w-12/12  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto sm:block hidden" style="height:90%">
                        <div class="col-span-12  ring-1 ring-gray-300  sm:rounded-lg   m-4 p-1">

                            <div class="overflow-x-auto ">
                                <div class="inline-block min-w-full  align-middle ">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr class="divide-x  divide-gray-200">
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tên chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tổng số</th>

                                            </tr>

                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">A</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">B</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">1</td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">1. Doanh thu bán hàng và cung cấp dịch vụ </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">01</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" v-model="dataFormKetQuaKinhDoanhHTX.doanhThuBanHangVaCungCapDichVu" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>

                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> - Từ giao dịch với thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">02</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.doanhThuThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">2. Tổng lợi nhuận kế toán trước thuế thu nhập <br>
                                                    doanh nghiệp</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">03</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTruocThue" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">3. Tổng lợi nhuận sau nghĩa vụ tài chính (04=05+09)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">04</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    {{dataFormKetQuaKinhDoanhHTX.TongLoinhuan04 }}
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">4. Tổng lợi nhuận trích lập các quỹ (05=06+07+08)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">05</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    {{ dataFormKetQuaKinhDoanhHTX.TongLoinhuan05 }}
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Chia ra:</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Quỹ Đầu tư phát triển</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">06</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTrichQuyDTPT" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Quỹ Dự phòng tài chính</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">07</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTrichQuyDPTC" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Quỹ khác</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">08</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTrichQuyKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">5. Tổng lợi nhuận chia cho thành viên (09=10+11+12)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">09</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    {{ dataFormKetQuaKinhDoanhHTX.TongLoinhuan09 }}
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Chia ra:</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Chia cho thành viên theo mức độ sử dụng dịch vụ</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">10</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanChiaThanhVienTheoSuDungDichVu" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Chia cho thành viên theo vốn góp</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">11</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanChiaThanhVienTheoGopVon" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Khác (ghi rõ):</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">12</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanChiaThanhVienTheoKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">6. Tổng quỹ lương</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">13</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.tongQuyLuong" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thuế GTGT</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">14</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.thueGTGT" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thuế thu nhập doanh nghiệp</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">15</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.thueThuNhapDoanhNghiep" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Các loại thuế khác</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">16</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.thueKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 sm:hidden">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">1. Doanh thu bán hàng và cung cấp dịch vụ</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.doanhThuBanHangVaCungCapDichVu" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Từ giao dịch với thành viên</label>
                                <input placeholder="Triệu đồng (VD:100)" v-model="dataFormKetQuaKinhDoanhHTX.doanhThuThanhVien" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">2. Tổng lợi nhuận kế toán trước thuế thu nhập doanh nghiệp</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTruocThue" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">3. Tổng lợi nhuận sau nghĩa vụ tài chính (04=05+09) = {{dataFormKetQuaKinhDoanhHTX.TongLoinhuan04}}</label>

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">4. Tổng lợi nhuận trích lập các quỹ (05=06+07+08)= {{dataFormKetQuaKinhDoanhHTX.TongLoinhuan05}}</label>

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Quỹ Đầu tư phát triển</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTrichQuyDTPT" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Quỹ Dự phòng tài chính</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTrichQuyDPTC" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Quỹ Dự phòng tài chính</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTrichQuyDPTC" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Quỹ khác</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanTrichQuyKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> 5. Tổng lợi nhuận chia cho thành viên (09=10+11+12) = {{ dataFormKetQuaKinhDoanhHTX.TongLoinhuan09 }} </label>

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Chia cho thành viên theo mức độ sử dụng dịch vụ</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanChiaThanhVienTheoSuDungDichVu" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Chia cho thành viên theo vốn góp</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanChiaThanhVienTheoGopVon" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Khác (ghi rõ):</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.loiNhuanChiaThanhVienTheoKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">6. Tổng quỹ lương:</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.tongQuyLuong" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thuế GTGT</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.thueGTGT" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thuế thu nhập doanh nghiệp</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.thueThuNhapDoanhNghiep" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Các loại thuế khác</label>
                                <input placeholder="Triệu đồng (VD:100)" type="text" v-model="dataFormKetQuaKinhDoanhHTX.thueKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class=" text-center  md:block pt-4">
                        <button @click="submitformKetQuaKinhDoanhHTX()" class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>
            </el-tab-pane>

            <el-tab-pane v-if="dataFormDonVi.LoaiHinhID == 2 || dataFormDonVi.LoaiHinhID == 4" label="Kết quả kinh doanh QTDND, NHHTX">
                <div class="sm:w-12/12 w-12/12  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white sm:block hidden">
                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto " style="height:90%">
                        <div class="col-span-12  ring-1 ring-gray-300  sm:rounded-lg   m-4 p-1">

                            <div class="overflow-x-auto ">
                                <div class="inline-block min-w-full  align-middle ">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr class="divide-x  divide-gray-200">
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tên chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Đơn vị tính</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tổng số</th>

                                            </tr>

                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">A</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">B</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">1</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">2</td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">1. Tổng số khách hàng đang vay vốn</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">01</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Khách hàng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.tongKhachHangDangVayvon" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>

                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> Trong đó: tổng số thành viên đang vay <br> vốn</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">02</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Thành viên</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.tongThanhVienDangVayvon" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">2. Tổng dư nợ cho vay</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">03</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.tongDuNoChoVay" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Trong đó: dư nợ cho vay thành viên</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">04</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.duNoChoVayThanhVien" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">3. Tổng lợi nhuận kế toán trước thuế <br> thu nhập doanh nghiệp </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">05</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanKeToanTruocThue" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">4. Tổng lợi nhuận sau nghĩa vụ tài chính <br> (06=07+11)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">06</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    {{ dataFormKetQuaKinhDoanhQTDND.TongLoinhuan06 }}
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">5. Tổng lợi nhuận trích lập các quỹ <br> (07=08+09+10)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">07</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    {{ dataFormKetQuaKinhDoanhQTDND.TongLoinhuan07 }}
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Chia ra:</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Quỹ Đầu tư phát triển</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">08</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanTrichQuyDTPT" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Quỹ Dự phòng tài chính</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">09</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanTrichQuyDPTC" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Quỹ khác</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">10</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanTrichQuyKhac" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">6. Tổng lợi nhuận chia cho thành viên <br>
                                                    (11=12+13+14)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">11</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    {{ dataFormKetQuaKinhDoanhQTDND.TongLoinhuan11 }}
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Chia ra:</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Chia cho thành viên theo mức độ sử <br>
                                                    dụng dịch vụ</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">12</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanChiaThanhVienTheoSuDungDichVu" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Chia cho thành viên theo vốn góp</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">13</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanChiaThanhVienTheoGopVon" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Khác (ghi rõ):</td>

                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">14</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanChiaThanhVienTheoKhac" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">7. Tổng quỹ lương</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">15</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.tongQuyLuong" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thuế GTGT</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">16</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.thueGTGT" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Thuế thu nhập doanh nghiệp</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">17</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.thueThuNhapDoanhNghiep" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Các loại thuế khác</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">18</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.thueKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 sm:hidden">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">1. Tổng số khách hàng đang vay vốn</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.tongKhachHangDangVayvon" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trong đó: tổng số thành viên đang vay vốn</label>
                                <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormKetQuaKinhDoanhQTDND.tongThanhVienDangVayvon" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">2. Tổng dư nợ cho vay</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.tongDuNoChoVay" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trong đó: dư nợ cho vay thành viên</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.tongThanhVienDangVayvon" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">3. Tổng lợi nhuận kế toán trước thuế thu nhập doanh nghiệp</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanKeToanTruocThue" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>

                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">4. Tổng lợi nhuận sau nghĩa vụ tài chính (06=07+11) = {{ dataFormKetQuaKinhDoanhQTDND.TongLoinhuan06 }}</label>

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">5. Tổng lợi nhuận trích lập các quỹ (07=08+09+10) {{dataFormKetQuaKinhDoanhQTDND.TongLoinhuan07}}</label>

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Quỹ Đầu tư phát triển</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanTrichQuyDTPT" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>

                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Quỹ Dự phòng tài chính</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanTrichQuyDPTC" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Quỹ khác</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanTrichQuyKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> 6. Tổng lợi nhuận chia cho thành viên (11=12+13+14) = {{ dataFormKetQuaKinhDoanhQTDND.TongLoinhuan11 }} </label>

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Chia cho thành viên theo mức độ sử dụng dịch vụ</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanChiaThanhVienTheoSuDungDichVu" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Chia cho thành viên theo vốn góp</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanChiaThanhVienTheoGopVon" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Khác (ghi rõ):</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.loiNhuanChiaThanhVienTheoKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">7. Tổng quỹ lương</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.tongQuyLuong" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thuế GTGT</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.thueGTGT" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Thuế thu nhập doanh nghiệp</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.thueThuNhapDoanhNghiep" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Các loại thuế khác</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormKetQuaKinhDoanhQTDND.thueKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class=" text-center  md:block pt-4">
                        <button @click="submitformKetQuaKinhDoanhQTDND()" class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>
            </el-tab-pane>
            <el-tab-pane label="Chính sách">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto sm:block hidden" style="height:90%">
                        <div class="col-span-12  ring-1 ring-gray-300  sm:rounded-lg   m-4 p-1">

                            <div class="overflow-x-auto ">
                                <div class="inline-block min-w-full  align-middle ">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr class="divide-x  divide-gray-200">
                                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tên chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Đơn vị tính</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tổng số</th>
                                                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Số lượng văn bản</th>

                                            </tr>

                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">A</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">B</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">1</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">2</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">3</td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">I. Chính sách hỗ trợ cho các hội nông dân</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"> 1. Hỗ trợ đào tạo, bồi dưỡng nguồn <br> nhân lực</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">01</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Lượt người</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Lượt người (VD:1)" v-model="dataFormChinhSach.chinhSach01" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)"  v-model="dataFormChinhSach.soLuongVanBan01" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">2. Hỗ trợ xúc tiến thương mại, mở rộng <br> thị trường</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">02</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Lần</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input  placeholder="Lần (VD:1)"  v-model="dataFormChinhSach.chinhSach02" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan02" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">3. Hỗ trợ ứng dụng công khoa học, <br> công kỹ thuật và công nghệ mới</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">03</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach03" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan03" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">4. Hỗ trợ tiếp cận vốn và quỹ hỗ trợ <br> phát triển HND</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">04</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach04" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)"  v-model="dataFormChinhSach.soLuongVanBan04" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">5. Hỗ trợ tham gia các chương trình <br> mục tiêu, chương trình phát triển <br> KT-XH</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">05</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Lần</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Lần (VD:1)" v-model="dataFormChinhSach.chinhSach05" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)"  v-model="dataFormChinhSach.soLuongVanBan05" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">6. Hỗ trợ thành lập mới</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">06</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach06" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)"  v-model="dataFormChinhSach.soLuongVanBan06" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">II. Chính sách hỗ trợ, ưu đãi đối với các <br> HND nông nghiệp</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">1. Hỗ trợ đầu tư phát triển kết cấu <br> hạ tầng (nhà kho, sân phơi, xưởng sơ <br> chế, chế biến, cửa hàng kinh doanh,<br> máy móc, thiết bị... phục vụ SXKD)</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">07</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach07" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan07" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">2. Hỗ trợ, ưu đãi về giao đất, cho thuê <br> đất</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Trong đó: - Diện tích đất được giao</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">08</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Ha</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <input placeholder="Ha (VD:1)" v-model="dataFormChinhSach.chinhSach08" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)"  v-model="dataFormChinhSach.soLuongVanBan08" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Diện tích đất được thuê</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">09</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Ha</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <input placeholder="Ha (VD:1)" v-model="dataFormChinhSach.chinhSach09" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan09" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Tiền thuê đất được miễn, giảm</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">10</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach10" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan10" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">3. Ưu đãi về tín dụng</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    Tr. đồng
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Trong đó: - Số tiền được vay tổ chức tín <br> dụng</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">11</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach11" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan11" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">- Số tiền được hỗ trợ lãi suất vay</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">12</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach12" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan12" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">4. Hỗ trợ vốn, giống khi gặp khó khăn <br> do thiên tai, dịch bệnh</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">13</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach13" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan13" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">5. Hỗ trợ chế biến sản phẩm</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">14</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Triệu đồng</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.chinhSach14" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Số văn bản (VD:1)" v-model="dataFormChinhSach.soLuongVanBan14" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">6. Khác (ghi cụ thể):</td>

                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">15</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Khác (ghi cụ thể)" v-model="dataFormChinhSach.chinhSach15" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">HND được giao đất</td>

                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">16</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">ha</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Ha (VD:1)" v-model="dataFormChinhSach.htxDuocGiaoDat" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">HND được cho thuê đất</td>

                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">17</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">ha</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Ha (VD:1)" v-model="dataFormChinhSach.htxDuocChoThueDat" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                            </tr>

                                            <tr class="divide-x divide-gray-200">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">HND được miễn tiền sử dụng đất</td>

                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">18</td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">ha</td>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                                    <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormChinhSach.htxDuocMienTienSuDungDat" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                </td>
                                                <td class="whitespace-nowrap p-4 text-sm text-gray-500"></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 sm:hidden">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">1. Hỗ trợ đào tạo, bồi dưỡng nguồn nhân lực</label>
                                <input type="text" placeholder="Lượt người (VD:1)"  v-model="dataFormChinhSach.chinhSach01" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan01" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">2. Hỗ trợ xúc tiến thương mại, mở rộng thị trường</label>
                                <input placeholder="Lần (VD:1)" v-model="dataFormChinhSach.chinhSach02" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan02" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">3. Hỗ trợ ứng dụng công khoa học, công kỹ thuật và công nghệ mới</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach03" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan03" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">4. Hỗ trợ tiếp cận vốn và quỹ hỗ trợ phát triển HND</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach04" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan04" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">5. Hỗ trợ tham gia các chương trình mục tiêu, chương trình phát triển KT-XH</label>
                                <input placeholder="Lần (VD:1)" type="text" v-model="dataFormChinhSach.chinhSach05" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan05" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>

                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">6. Hỗ trợ thành lập mới</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach06" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan06" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Hỗ trợ đầu tư phát triển kết cấu hạ tầng (nhà kho, sân phơi, xưởng sơ chế, chế biến, cửa hàng kinh doanh, máy móc, thiết bị... phục vụ SXKD)</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach07" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan07" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Diện tích đất được giao</label>
                                <input placeholder="Ha (VD:1)" type="text" v-model="dataFormChinhSach.chinhSach08" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan08" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Diện tích đất được thuê</label>
                                <input placeholder="Ha (VD:1)" type="text" v-model="dataFormChinhSach.chinhSach09" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan09" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Tiền thuê đất được miễn, giảm</label>
                                <input  placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach10" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan10" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Số tiền được vay tổ chức tín dụng</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach11" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan11" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Số tiền được hỗ trợ lãi suất vay</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach12" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan12" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Hỗ trợ vốn, giống khi gặp khó khăn do thiên tai, dịch bệnh</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach13" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan13" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Hỗ trợ chế biến sản phẩm</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.chinhSach14" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <input type="text"  v-model="dataFormChinhSach.soLuongVanBan14" placeholder="Nhập số lượng văn  bản" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> Khác (ghi cụ thể)</label>
                                <input type="text" v-model="dataFormChinhSach.chinhSach15" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700"> HND được gia đất</label>
                                <input placeholder="Ha (VD:1)" type="text" v-model="dataFormChinhSach.htxDuocGiaoDat" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">HND được cho thuê đất</label>
                                <input placeholder="Ha (VD:1)" type="text" v-model="dataFormChinhSach.htxDuocChoThueDat" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">HND được miễn sử dụng đất</label>
                                <input placeholder="Triệu đồng (VD:1000000)" type="text" v-model="dataFormChinhSach.htxDuocMienTienSuDungDat" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformChinhSach()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>

            </el-tab-pane>
            <el-tab-pane label="Thông tin khác">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">

                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 ">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900"> Hoạt động từ thiện
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <button @click="CreatHoatdongtuthien()" class="sm:col-span-2 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Hoạt động từ thiện
                                        </button>

                                        <div class="col-span-12 grid grid-cols-12" v-for="(hoatdongtuthien,key) in listHoatdongtuthiens" :value="hoatdongtuthien.id" :key="key">

                                            <div class="sm:col-span-3 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Nội dung</label>
                                                <input @blur="Chonthongtintuthien($event,key,'noidung')" placeholder="Nội dung" v-model="hoatdongtuthien.noiDung" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div>

                                            <div class="sm:col-span-3 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">DVT</label>
                                                <input @blur="Chonthongtintuthien($event,key,'dvt')" placeholder="Đơn vị tính" v-model="hoatdongtuthien.donViTinh" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div>
                                            <!-- <div class="sm:col-span-2 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">SL</label>
                                                <input @blur="Chonthongtintuthien($event,key,'sl')" placeholder="Số lượng" v-model="hoatdongtuthien.noiDung" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div> -->

                                            <div class="sm:col-span-3 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Số tiền quy đổi</label>
                                                <input @blur="Chonthongtintuthien($event,key,'sotienquydoi')" placeholder="Số tiền quy đổi" v-model="hoatdongtuthien.giaTri" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div>

                                            <div class="sm:col-span-1 col-span-1  bg-white px-4 py-5 flex items-end">

                                                <button content="Xóa hoạt động từ thiện" @click="DeleteHoatdongtuthien(key)" class="sm:col-span-2 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                                                    X
                                                </button>
                                            </div>
                                            <div class="border border-gray-300 h-px col-span-12"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Sản phẩm
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <button @click="CreatSanphamdonviky()" class="sm:col-span-2 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Sản Phẩm
                                        </button>

                                        <div class="col-span-12 grid grid-cols-12" v-for="(sanphamdonviky,key) in listSanphamdonvikys" :value="sanphamdonviky.id" :key="key">

                                            <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Sản phẩm </label>
                                                <treeselect v-model="sanphamdonviky.sanPhamId" @input="Chonthongtinsanpham($event,key,'chonsanpham')" :multiple="false" :normalizer="normalizer2" :options="ListSanphams" />

                                            </div>
                                            <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Đạt chứng nhận OCOP</label>
                                                <select @blur="Chonthongtinsanpham($event,key,'datchungnhanocop')" v-model="sanphamdonviky.chungNhanOCOP" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                                    <option selected value="0">-- Chọn: --</option>
                                                    <option value="1">1 sao</option>
                                                    <option value="2">2 sao</option>
                                                    <option value="3">3 sao</option>
                                                    <option value="4">4 sao</option>
                                                    <option value="5">5 sao</option>

                                                </select>

                                            </div>

                                            <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Đạt chứng nhận sản phẩm </label>
                                                <select @blur="Chonthongtinsanpham($event,key,'chungNhanSanPhamCongNghiep')" v-model="sanphamdonviky.ChungNhanSanPhamCongNghiepId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                                    <option selected value="0">-- Chọn: --</option>
                                                    <option v-for="i in listChungnhansanphams" :value="i.id" :key="i.id">
                                                        {{ i.tieuDe }}
                                                    </option>
                                                </select>

                                            </div>
                                            <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Năm đạt chứng nhận</label>
                                                <input @blur="Chonthongtinsanpham($event,key,'namdatduoc')" v-model="sanphamdonviky.namDatDuoc" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div>
                                            <div class="sm:col-span-5 col-span-10  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Đạt chứng nhận vietGAP; hữu cơ; Global; UTZ; HCCP, khác</label>
                                                <treeselect v-model="sanphamdonviky.chungNhanKhacId" @input="Chonthongtinsanpham($event,key,'chungnhankhac')" :multiple="true" :normalizer="normalizer" :options="listChungnhankhacs" />

                                            </div>
                                            <div class="sm:col-span-3 col-span-2  bg-white px-4 py-5 flex items-end">

                                                <button content="Xóa Sản Phẩm" @click="DeleteSanphamdonvi(key)" class="sm:col-span-2 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                                                    X
                                                </button>
                                            </div>
                                            <div class="border border-gray-300 h-px col-span-12"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Thành tựu đạt được
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <button @click="CreatThanhTuu()" class="sm:col-span-2 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Thành tựu
                                        </button>

                                        <div v-for="(danhhieu,key) in listDanhhieus" :value="danhhieu.id" :key="key" class="col-span-12 grid grid-cols-12">
                                            <div class="sm:col-span-4 col-span-12  bg-white  py-5 ">
                                                <label class="block text-sm font-medium text-gray-700">Danh hiệu thi đua</label>
                                                <select @blur="Chondanhhieu($event,key,'danhhieuthidua')" v-model="danhhieu.danhHieuThiDua" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                                    <option selected value="0">-- Chọn: --</option>
                                                    <option v-for="i in listDanhhieuthiduas" :value="i.id" :key="i.id">
                                                        {{ i.tenDanhHieu }}
                                                    </option>
                                                </select>

                                            </div>
                                            <div class="sm:col-span-4 col-span-8  bg-white px-4 py-5 ">
                                                <label class="block text-sm font-medium text-gray-700">Hình thức khen thưởng</label>
                                                <select @blur="Chondanhhieu($event,key,'danhhieukhenthuong')" :key="key" v-model="danhhieu.hinhThucKhenThuong" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                                    <option selected value="0">-- Chọn: --</option>
                                                    <option v-for="i in listHinhthuckhenthuongs" :value="i.id" :key="i.id">
                                                        {{ i.tenHinhThucKhenThuong }}
                                                    </option>
                                                </select>

                                            </div>
                                            <div class=" sm:col-span-3 col-span-12  bg-white px-4 py-5 ">
                                                <label class="block text-sm font-medium text-gray-700">Năm đạt được thành tựu</label>
                                                <input @blur="Chondanhhieu($event,key,'thanhtuudatduoc')" v-model="danhhieu.thanhTuuDatDuoc" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div>
                                            <div class="sm:col-span-1 col-span-2  bg-white px-4 py-5   flex items-end ">

                                                <button content="Xóa thành tựu" @click="DeleteThanhTuu(key)" class="sm:col-span-2 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                                                    X
                                                </button>
                                            </div>
                                            <div class="border border-gray-300 h-px col-span-12"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Thành tựu đạt được
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <button @click="CreatChuongtrinhthamgia()" class="sm:col-span-3 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Tham gia chương trình
                                        </button>

                                        <div v-for="(chuongtrinhthamgia,key) in listChuongtrinhthamgia" :value="chuongtrinhthamgia.id" :key="key" class="col-span-12 grid grid-cols-12">
                                            <div class="sm:col-span-4 col-span-12  bg-white  py-5 ">
                                                <label class="block text-sm font-medium text-gray-700">Tên chương trình dự án</label>
                                                <input @blur="Chonchuongtrinhthamgia($event,key,'tenchuongtrinh')" v-model="chuongtrinhthamgia.tenChuongTrinhDuAn" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            </div>
                                            <div class="sm:col-span-4 col-span-8  bg-white px-4 py-5 ">
                                                <label class="block text-sm font-medium text-gray-700">Số tiền</label>
                                                <input @blur="Chonchuongtrinhthamgia($event,key,'sotien')" v-model="chuongtrinhthamgia.soTien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div>
                                            <div class=" sm:col-span-3 col-span-12  bg-white px-4 py-5 ">
                                                <label class="block text-sm font-medium text-gray-700">Thời gian tham gia</label>
                                                <input @blur="Chonchuongtrinhthamgia($event,key,'thoigianthamgia')" v-model="chuongtrinhthamgia.thoiGianThamGia" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                            </div>
                                            <div class="sm:col-span-1 col-span-2  bg-white px-4 py-5   flex items-end ">

                                                <button content="Xóa thành tựu" @click="DeleteChuongtrinhthamgia(key)" class="sm:col-span-2 col-span-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                                                    X
                                                </button>
                                            </div>
                                            <div class="border border-gray-300 h-px col-span-12"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Ứng dụng công nghệ thông tin và chuyển đổi số
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                       
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 r">Sử dụng phần mềm quản lý</label>
                                            <input v-model="dataFormThongTinKhac.suDungPhanMemQuanLy" checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 r">Ứng dụng trong tiêu thụ sản phẩm</label>
                                            <input v-model="dataFormThongTinKhac.ungDungTrongTieuThuSanPham" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 r">Ứng dụng trong sản xuất</label>
                                            <input v-model="dataFormThongTinKhac.ungDungTrongSanXuat" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">Phần mềm quản lý </label>

                                            <textarea  :disabled="dataFormThongTinKhac.suDungPhanMemQuanLy == false " v-model="dataFormThongTinKhac.phanMemQuanLy" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformThongTinKhac()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>

            </el-tab-pane>
            <el-tab-pane label="Chấp hành pháp luật, giải quyết khiếu nại">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">

                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 ">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">

                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Chấp hành pháp luật trong tổ chức của HND/LHHTX/QTDND
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Chấp hành đầy đủ</label>
                                            <input v-model="dataFormChapHanhPhapLuat.phapLuat01" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Số vi phạm chưa khắc phục</label>
                                            <input placeholder="Số vi phạm (VD:1)" v-model="dataFormChapHanhPhapLuat.soViPhamChuaKhacPhuc01" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Chấp hành pháp luật trong thành lập, đăng ký của HND/LHHTX/QTDND
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Chấp hành đầy đủ</label>
                                            <input v-model="dataFormChapHanhPhapLuat.phapLuat02" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Số vi phạm chưa khắc phục</label>
                                            <input placeholder="Số vi phạm (VD:1)" v-model="dataFormChapHanhPhapLuat.soViPhamChuaKhacPhuc02" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Chấp hành các quy định khác của pháp luật
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Chấp hành đầy đủ</label>
                                            <input v-model="dataFormChapHanhPhapLuat.phapLuat03" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Số vi phạm chưa khắc phục</label>
                                            <input placeholder="Số vi phạm (VD:1)" v-model="dataFormChapHanhPhapLuat.soViPhamChuaKhacPhuc03" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Giải quyết các tranh chấp, khiếu nại
                                    </label>

                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <h1 class="col-span-12   sm:px-4 sm:py-1">
                                            a. Trong nội bộ HND
                                        </h1>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-2 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Giả quyết đầy đủ, kịp thời</label>
                                            <input v-model="dataFormChapHanhPhapLuat.giaiQuyetTranhChap04a" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-2 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Còn tồn động</label>
                                            <input placeholder="Tồn đọng (VD:1)" v-model="dataFormChapHanhPhapLuat.conTonDong04a" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>
                                    <div class="border border-gray-300 h-px col-span-12"></div>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <h1 class="col-span-12   sm:px-4 sm:py-1">
                                            a.Bên ngoài HND
                                        </h1>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-2 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Giả quyết đầy đủ, kịp thời</label>
                                            <input v-model="dataFormChapHanhPhapLuat.giaiQuyetTranhChap04b" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-2 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Còn tồn động</label>
                                            <input placeholder="Tồn đọng (VD:1)" v-model="dataFormChapHanhPhapLuat.conTonDong04b" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Chi trả lương
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Đẩy đủ, đúng quy định</label>
                                            <input v-model="dataFormCheDoChinhSachChoThanhVien.chiTraLuong" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Nợ lương trái quy định</label>
                                            <input placeholder="Triệu đồng (VD:1000000)" v-model="dataFormCheDoChinhSachChoThanhVien.noLuongTraiQuyDinh" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Chế độ phụ cấp cho hội đồng quản trị, ban kiểm soát
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Đẩy đủ, đúng quy định</label>
                                            <input v-model="dataFormCheDoChinhSachChoThanhVien.phuCapChoHoiDongQuanTri" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Chưa thực hiện </label>
                                            <input placeholder="Chưa thực hiện (VD:1)" v-model="dataFormCheDoChinhSachChoThanhVien.chuaThucHien02" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Chính sách về BHYT, BHXH, BHTN
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 flex items-center">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Đẩy đủ, đúng quy định</label>
                                            <input v-model="dataFormCheDoChinhSachChoThanhVien.chinhSachVeBHYT" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700 px-2 ">Chưa thực hiện</label>
                                            <input placeholder="Chưa thực hiện (VD:1)" v-model="dataFormCheDoChinhSachChoThanhVien.chuaThucHien03" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformChapHanhPhapLuat()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>

            </el-tab-pane>
            <el-tab-pane label="Áp dụng tiến bộ khoa học">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">

                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 ">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">

                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Áp dụng tiến bộ khoa học kỹ thuật, xây dựng thương hiệu, chuỗi giá trị
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">

                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có Website, tham gia thương mại điện tử hoặc có gia dịch trên các diễn đàn, mạng xã hội</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi01" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi01" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có nhãn hiệu sản phẩm, hàng hóa</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi02" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi02" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có nhận dạng, thương hiệu riêng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi03" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi03" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có đầu tư máy móc, cơ giới áp dụng và sản xuất kinh doanh, chế biến</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi04" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi04" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có sản phẩm chủ lực gán với chuỗi giá trị hoặc tham gia và liên hiệp hội nông dân</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi05" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi05" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có văn bằng sáng chế, quyền sở hữu hoặc được hưởng quyền sở hữu đối với giống cây trồng mới</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi06" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi06" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có tổ chức quy trình sản xuất thực hành nông nghiệp sạch - Gap,hữu cơ</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi07" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi07" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Có chứng nhận truy xuất nguồn gốc</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi08" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi08" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>
                                        <div class=" sm:col-span-8 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Các tiến bộ khoa học kỹ thuật khác</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.ghiChuTieuChi09" placeholder="Ghi chú" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class=" sm:col-span-4 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Áp dụng</label>

                                            <input v-model="dataFormApDungKhoaHocKyThuat.tieuChi09" checked type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformApDungKhoaHocKyThuat()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>

            </el-tab-pane>
            <el-tab-pane label="Sản phẩm, dịch vụ">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">

                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 ">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">

                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Sản phẩm, dịch vụ cung ưng cho thành viên
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">

                                        <div class=" sm:col-span-6 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Số lượng sản phẩm dịch vụ cung ưng cho thành viên</label>

                                            <input v-model="dataFormSanPhamDichVuCungUngThanhVien.soLuongSanPham" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                        <div class=" sm:col-span-6 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Chất lượng dịch vụ cung ứng trung bình</label>

                                            <input v-model="dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuTrungBinh" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                        <div class=" sm:col-span-6 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Chất lượng dịch vụ cung ứng khá </label>

                                            <input v-model="dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuKha" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                        <div class=" sm:col-span-6 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Chất lượng dịch vụ cung ứng tốt</label>

                                            <input v-model="dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuTot" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                        <div class=" sm:col-span-6 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Chất lượng dịch vụ cung ứng rất tốt</label>

                                            <input v-model="dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuRatTot" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                        <div class=" sm:col-span-6 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Giá ưu đãi so với khách hàng không phải thành viên</label>

                                            <input v-model="dataFormSanPhamDichVuCungUngThanhVien.giaUuDaiSoVoiKhachHangKhongPhaiThanhVien" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                        <div class=" sm:col-span-6 col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Mức độ hài lòng của thành viên </label>

                                            <input v-model="dataFormSanPhamDichVuCungUngThanhVien.mucDoHaiLong" placeholder="%" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformSanPhamDichVuCungUngThanhVien()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>

            </el-tab-pane>
            <el-tab-pane label="Nhưng thuận lợi khó khăn và nhu cầu">

                <div class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">

                    <!-- mobile -->
                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0 ">
                        <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12">

                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Nhưng thuận lợi, khó khắn của HND/LHHTX/QTDNN
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">

                                        <div class="col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Những thuận lợi hiện nay</label>

                                            <textarea v-model="dataFormThongTinBoSungDonVi.thuanLoiHienTai" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>

                                        </div>
                                        <div class=" col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">Nhưng khó khăn hiện nay</label>
                                            <textarea v-model="dataFormThongTinBoSungDonVi.khoKhanHienTai" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Đề xuất kiến nghị
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">

                                        <div class="col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Đối với tỉnh Quảng Nam</label>

                                            <textarea v-model="dataFormThongTinBoSungDonVi.deXuatDoiVoiTinh" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>

                                        </div>
                                        <div class="col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">Đối với liên minh htx tỉnh Quảng Nam</label>
                                            <textarea v-model="dataFormThongTinBoSungDonVi.deXuatDoiVoiLMHTX" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 m-3">
                                <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Nhu cầu của HND/LHHTX/QTDND trong thời gian tới
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">

                                        <div class="col-span-12 bg-white px-4 py-5 ">
                                            <label class="block text-sm font-medium text-gray-700">Về đào tạo bồi dưỡng tập huấn</label>
                                            <textarea v-model="dataFormThongTinBoSungDonVi.nhuCauVeDaoTao" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>
                                        </div>
                                        <div class="col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">Về tín dụng</label>
                                            <textarea v-model="dataFormThongTinBoSungDonVi.nhuCauVeTinDung" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>
                                        </div>
                                        <div class="col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">Về xúc tiến thương mại</label>
                                            <textarea v-model="dataFormThongTinBoSungDonVi.nhuCauVeXucTienThuongMai" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>
                                        </div>
                                        <div class="col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">Hỗ trợ khác</label>
                                            <textarea v-model="dataFormThongTinBoSungDonVi.nhuCauHoTroKhac" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="" id="" cols="20" rows="5"></textarea>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <!--end mobile-->
                    <!--footer-->
                    <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                        <button @click="submitformThongTinBoSungDonVi()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Lưu
                        </button>

                    </div>

                </div>

            </el-tab-pane>
        </el-tabs>
        <!-- chưa tạo datatable ở vuejs -->

    </template>

</div>
</template>

<script>
import axios from 'axios';
import form from 'vuejs-form'
import Treeselect from '@riophae/vue-treeselect'

import '@riophae/vue-treeselect/dist/vue-treeselect.css'
// import {
//         v4 as uuidv4
//     } from "https://jspm.dev/uuid";

export default {
    components: {
        Treeselect
    },
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: ["name"],
                // đường dẫn đến ajax
                url: "/ajax-quan-ly-hien-vat",
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

                activeName: "first",

            },
            rowId: "",

            dataFormDonVi: form({
                    TenDonVi: '',
                    MaSo: '',
                    NamThanhLap: '',
                    DiaChi: '',
                    DaiDienPhapLuat: '',
                    DienThoai: '',
                    NganhNgheID: '',
                    LinhVucID: '',
                    MoHinhID: '',
                    LoaiHinhID: '',
                    DiaBanId: '',
                    status: 1,
                    moHinhToChucId: null,

                })
                .rules({

                    TenDonVi: 'required',
                    MaSo: 'required',
                    NamThanhLap: 'required',
                    DiaChi: 'required',
                    DaiDienPhapLuat: 'required',
                    DienThoai: 'required',
                    // NganhNgheID: 'required',
                    LinhVucID: 'required',
                    MoHinhID: 'required',
                    LoaiHinhID: 'required',

                })
                .messages({
                    'TenDonVi.required': 'Trường bắt buộc nhập',
                    'MaSo.required': 'Trường bắt buộc nhập',
                    'NamThanhLap.required': 'Trường bắt buộc nhập',
                    'DiaChi.required': 'Trường bắt buộc nhập',
                    'DaiDienPhapLuat.required': 'Trường bắt buộc nhập',
                    'DienThoai.required': 'Trường bắt buộc nhập',
                    // 'NganhNgheID.required': 'Trường bắt buộc nhập',
                    'LinhVucID.required': 'Trường bắt buộc nhập',
                    'MoHinhID.required': 'Trường bắt buộc nhập',
                    'LoaiHinhID.required': 'Trường bắt buộc nhập',

                }),

            dataFormTrinhDoCanBoChuChot: form({
                    TrinhDoID: '',

                })
                .rules({

                    TrinhDoID: 'required',

                })
                .messages({

                    'TrinhDoID.required': 'Trường bắt buộc nhập',
                    /*'donViId': 'Trường bắt buộc nhập',
                    'kyBienDongId': 'Trường bắt buộc nhập',*/

                }),

            dataFormThanhVienLaoDong: form({
                    tongSoThanhVien: null,
                    soThanhVienSuDungDichVu: null,
                    tongSoLaoDong: null,
                    soLaoDongLaThanhVien: null,
                    khungDoTuoiLaoDong: null,
                    thanhVienThamGiaMoi: null,
                    thanhVienLaCaNhan: null,
                    thanhVienLaHoGiaDinh: null,
                    laoDongThamGiaBaoHiemXaHoi: null,
                    trinhDoLaoDongDaiHoc: null,
                    trinhDoLaoDongTrungCap: null,
                    trinhDoLaoDongSoCapNghe: null,
                    trinhDoLaoDongChuaQuaDaoTao: null,
                    thanhVienSuDungSanPhamDichVu: null,
                    soLaoDongNam: null,
                    soLaoDongNu: null,
                    thanhVienLaPhapNhan: null,
                    thuNhapBinhQuanCuaThanhVien: null,
                    mucDoThamGiaDaiHoiThanhVien: null,
                    thuNhapBinhQuanCuaLaoDong: null,
                    mucDoHaiLong: 0,

                })
                .rules({

                })
                .messages({

                }),

            dataFormTaiSan: form({
                    taiSan01: null,
                    taiSan02: null,
                    taiSan03: null,
                    taiSan04: null,
                    taiSan05: null,
                    taiSan06: null,
                    taiSan07: null,
                    taiSan08: null,
                    taiSan09: null,
                    vonDongGopCuaThanhVien: 0,
                    vonVayTuThanhVien: 0,
                    vonVayTuQuyHoTro: 0,
                    vonVayTuNguonTinDungKhac: 0,
                    donViId: null,
                    kyBienDongId: null

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),
            dataFormVonDieuLe: form({
                    tongVonDieuLe: '',
                    tongThanhVienGop: '',
                    thapNhat: '',
                    caoNhat: '',
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                })
                .messages({

                }),
            dataFormHoatDongDautu: form({
                    tongVonDieuLeDoanhNghiep: '',
                    tongCoPhan: '',
                    tongVonGop: '',
                    donViId: null,
                    kyBienDongId: null

                })
                .rules({

                })
                .messages({

                }),

            dataFormKetQuaKinhDoanhHTX: form({
                    doanhThuBanHangVaCungCapDichVu: 0,
                    doanhThuThanhVien: 0,
                    loiNhuanTruocThue: 0,
                    loiNhuanTrichQuyDTPT: 0,
                    loiNhuanTrichQuyDPTC: 0,
                    loiNhuanTrichQuyKhac: 0,
                    loiNhuanChiaThanhVienTheoSuDungDichVu: 0,
                    loiNhuanChiaThanhVienTheoGopVon: 0,
                    loiNhuanChiaThanhVienTheoKhac: 0,
                    thueGTGT: 0,
                    thueThuNhapDoanhNghiep: 0,
                    thueKhac: 0,
                    tongQuyLuong: 0,
                    donViId: null,
                    kyBienDongId: null,

                })
                .rules({
                    donViId: 'required',
                    kyBienDongId: 'required',
                })
                .messages({
                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',
                }),

            dataFormKetQuaKinhDoanhQTDND: form({
                    tongKhachHangDangVayvon: 0,
                    tongThanhVienDangVayvon: 0,
                    tongDuNoChoVay: 0,
                    duNoChoVayThanhVien: 0,
                    loiNhuanSauThue: 0,
                    loiNhuanKeToanTruocThue: 0,
                    loiNhuanTrichQuyDTPT: 0,
                    loiNhuanTrichQuyDPTC: 0,
                    loiNhuanTrichQuyKhac: 0,
                    loiNhuanChiaThanhVienTheoSuDungDichVu: 0,
                    loiNhuanChiaThanhVienTheoGopVon: 0,
                    loiNhuanChiaThanhVienTheoKhac: 0,
                    tongQuyLuong: 0,
                    thueGTGT: 0,
                    thueThuNhapDoanhNghiep: 0,
                    thueKhac: 0,
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({
                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({
                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',
                }),
            dataFormChinhSach: form({
                    chinhSach01: '',
                    chinhSach02: '',
                    chinhSach03: '',
                    chinhSach04: '',

                    chinhSach05: '',
                    chinhSach06: '',
                    chinhSach07: '',
                    chinhSach08: '',
                    chinhSach09: '',
                    chinhSach10: '',
                    chinhSach11: '',
                    chinhSach12: '',
                    chinhSach13: '',
                    chinhSach14: '',
                    chinhSach15: '',
                    htxDuocGiaoDat: '',
                    htxDuocChoThueDat: '',
                    htxDuocMienTienSuDungDat: '',

                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),
            dataFormThongTinKhac: form({
                    id: '',
                    hoatDongXaHoiTuThien: '',
                    suDungPhanMemQuanLy: false,
                    phanMemQuanLy: '',
                    ungDungTrongTieuThuSanPham: false,
                    ungDungTrongSanXuat: false,

                    soLuongDanhHieu: 0,
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),
            dataFormChapHanhPhapLuat: form({
                    id: '',
                    phapLuat01: true,
                    soViPhamChuaKhacPhuc01: 0,
                    phapLuat02: true,
                    soViPhamChuaKhacPhuc02: 0,
                    phapLuat03: true,
                    soViPhamChuaKhacPhuc03: 0,
                    giaiQuyetTranhChap04a: true,
                    conTonDong04a: 0,
                    giaiQuyetTranhChap04b: true,
                    conTonDong04b: 0,
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),
            dataFormCheDoChinhSachChoThanhVien: form({
                    id: '',
                    chiTraLuong: true,
                    noLuongTraiQuyDinh: 0,
                    phuCapChoHoiDongQuanTri: true,
                    chuaThucHien02: 0,
                    chinhSachVeBHYT: true,
                    chuaThucHien03: 0,
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),

            dataFormApDungKhoaHocKyThuat: form({
                    id: '',
                    tieuChi01: true,
                    ghiChuTieuChi01: '',
                    tieuChi02: true,
                    ghiChuTieuChi02: '',
                    tieuChi03: true,
                    ghiChuTieuChi03: '',
                    tieuChi04: true,
                    ghiChuTieuChi04: '',
                    tieuChi05: true,
                    ghiChuTieuChi05: '',
                    tieuChi06: true,
                    ghiChuTieuChi06: '',
                    tieuChi07: true,
                    ghiChuTieuChi07: '',
                    tieuChi08: true,
                    ghiChuTieuChi08: '',
                    tieuChi09: true,
                    ghiChuTieuChi09: '',
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),
            dataFormSanPhamDichVuCungUngThanhVien: form({
                    id: '',
                    soLuongSanPham: 0,
                    chatLuongDichVuTrungBinh: 0,
                    chatLuongDichVuKha: 0,
                    chatLuongDichVuTot: 0,
                    chatLuongDichVuRatTot: 0,
                    giaUuDaiSoVoiKhachHangKhongPhaiThanhVien: 0,
                    mucDoHaiLong: 0,
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),
            dataFormThongTinBoSungDonVi: form({
                    id: '',
                    thuanLoiHienTai: '',
                    khoKhanHienTai: '',
                    deXuatDoiVoiTinh: '',
                    deXuatDoiVoiLMHTX: '',
                    nhuCauVeDaoTao: '',
                    nhuCauVeTinDung: '',
                    nhuCauVeXucTienThuongMai: '',
                    nhuCauHoTroKhac: '',
                    donViId: 0,
                    kyBienDongId: 0,

                })
                .rules({

                    donViId: 'required',
                    kyBienDongId: 'required',

                })
                .messages({

                    'donViId.required': 'Trường bắt buộc nhập',
                    'kyBienDongId.required': 'Trường bắt buộc nhập',

                }),

            listNganhNghe: [],
            listLoaiHinh: [],
            listMoHinh: [],
            listLinhVuc: [],
            listSanPhamTieuBieu: [],
            listDanhMuc: [],
            ListDiaBan: [],

            listDonVi: [],
            listKyBienDong: [],
            listTrinhDo: [],
            donVi: '',
            kyID: "",
            statusForm: "",
            trangthai: "",

            ThongTinChung: [],
            ThanhVienHopTacXa: {},
            ThanhVienLaoDong: {},
            KetQuaKinhDoanh: {},
            LaoDongHopTacXa: {},
            VonDieuLe: {},
            LaoDongLMHTX: {},
            ThanhVienLMHTX: {},
            ChinhSach: {},
            ListTrinhDoCanBoChuChots: [],
            TaiSan: {},
            HoatDongDauTu: {},
            // danh hiệu 
            listDanhhieus: [],
            listSanphamdonvikys: [],
            ListSanphams: [],
            listDanhhieuthiduas: [],
            listHinhthuckhenthuongs: [],
            listChungnhansanphams: [],
            listChungnhankhacs: [],
            listHoatdongtuthiens: [],
            listChuongtrinhthamgia: [],
            normalizer(node) {
                return {
                    id: node.id,
                    label: node.tieuDe,

                };
            },
            normalizer2(node) {
                return {
                    id: node.id,
                    label: node.tenSanPham,

                };
            },

        }
    },
    mounted: async function () {
        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.donVi = Number(params.get("donvi"));
        this.kyID = Number(params.get("ky"));

        if (this.id == null) {
            this.saveform();
        } else {
            this.doAlertEdit();
        }
        this.loadData();
        const self = this;

        axios.get("/Nganhnghe")
            .then((res) => {
                self.listNganhNghe = res.data.data
            });

        axios.get("/LinhVucHoatDong")
            .then((res) => {
                self.listLinhVuc = res.data.data
            });

        axios.get("/LoaiHinhKinhTe")
            .then((res) => {
                self.listLoaiHinh = res.data.data
            });

        axios.get("/MoHinhHoatDong")
            .then((res) => {
                self.listMoHinh = res.data.data
            });
        axios.get("/DiaBan")
            .then((res) => {
                self.ListDiaBan = res.data.data
            });
        axios.get("/TrinhDo")
            .then((res) => {
                self.listTrinhDo = res.data.data
            });
        axios.get("/DanhHieuThiDua")
            .then((res) => {
                self.listDanhhieuthiduas = res.data.data
            });
        axios.get("/HinhThucKhenThuong")
            .then((res) => {
                self.listHinhthuckhenthuongs = res.data.data
            });
        axios.get("/ChungNhanSanPham")
            .then((res) => {
                self.listChungnhansanphams = res.data.data
            });
        axios.get("/ChungNhanKhac")
            .then((res) => {
                self.listChungnhankhacs = res.data.data
            });
        axios.get("/TrinhDoCanBoChuChot?KyBienDong=" + this.kyID + "&donViId=" + this.donVi)
            .then((res) => {
                self.ListTrinhDoCanBoChuChots = res.data.data;

            });
        axios.get("/Sanpham")
            .then((res) => {
                self.ListSanphams = res.data.data;
            });
        axios.get("/DonVi/" + this.donVi).then(function (response) {

            self.ThongTinChung = response.data;

            self.dataFormDonVi.data.TenDonVi = self.ThongTinChung.tenDonVi
            self.dataFormDonVi.data.MaSo = self.ThongTinChung.maSo
            self.dataFormDonVi.data.NamThanhLap = self.ThongTinChung.namThanhLap
            self.dataFormDonVi.data.DiaChi = self.ThongTinChung.diaChi
            self.dataFormDonVi.data.DaiDienPhapLuat = self.ThongTinChung.daiDienPhapLuat
            self.dataFormDonVi.data.DienThoai = self.ThongTinChung.dienThoai
            self.dataFormDonVi.data.NganhNgheID = self.ThongTinChung.nganhNgheID
            self.dataFormDonVi.data.LinhVucID = self.ThongTinChung.linhVucID
            self.dataFormDonVi.data.MoHinhID = self.ThongTinChung.moHinhID
            self.dataFormDonVi.data.LoaiHinhID = self.ThongTinChung.loaiHinhID
            self.dataFormDonVi.data.DiaBanId = self.ThongTinChung.diaBanId
            self.dataFormDonVi.data.moHinhToChucId = self.ThongTinChung.moHinhToChucId

        })
        axios.get("/ThanhVienLaoDong?KyBienDong=" + this.kyID + "&donViId=" + this.donVi)
            .then((res) => {

                self.dataFormThanhVienLaoDong.id = res.data.data[0].id;
                self.dataFormThanhVienLaoDong.tongSoThanhVien = res.data.data[0].tongSoThanhVien;
                self.dataFormThanhVienLaoDong.soThanhVienSuDungDichVu = res.data.data[0].soThanhVienSuDungDichVu;
                self.dataFormThanhVienLaoDong.tongSoLaoDong = res.data.data[0].tongSoLaoDong;
                self.dataFormThanhVienLaoDong.soLaoDongLaThanhVien = res.data.data[0].soLaoDongLaThanhVien;
                self.dataFormThanhVienLaoDong.khungDoTuoiLaoDong = res.data.data[0].khungDoTuoiLaoDong;
                self.dataFormThanhVienLaoDong.thanhVienThamGiaMoi = res.data.data[0].thanhVienThamGiaMoi;
                self.dataFormThanhVienLaoDong.thanhVienLaCaNhan = res.data.data[0].thanhVienLaCaNhan;
                self.dataFormThanhVienLaoDong.thanhVienLaHoGiaDinh = res.data.data[0].thanhVienLaHoGiaDinh;
                self.dataFormThanhVienLaoDong.laoDongThamGiaBaoHiemXaHoi = res.data.data[0].laoDongThamGiaBaoHiemXaHoi;
                self.dataFormThanhVienLaoDong.mucDoHaiLong = res.data.data[0].mucDoHaiLong;
                self.dataFormThanhVienLaoDong.thanhVienSuDungSanPhamDichVu = res.data.data[0].thanhVienSuDungSanPhamDichVu;
                self.dataFormThanhVienLaoDong.trinhDoLaoDongDaiHoc = res.data.data[0].trinhDoLaoDongDaiHoc;
                self.dataFormThanhVienLaoDong.trinhDoLaoDongSoCapNghe = res.data.data[0].trinhDoLaoDongSoCapNghe;
                self.dataFormThanhVienLaoDong.trinhDoLaoDongTrungCap = res.data.data[0].trinhDoLaoDongTrungCap;
                self.dataFormThanhVienLaoDong.trinhDoLaoDongChuaQuaDaoTao = res.data.data[0].trinhDoLaoDongChuaQuaDaoTao;
                self.dataFormThanhVienLaoDong.soLaoDongNam = res.data.data[0].soLaoDongNam;
                self.dataFormThanhVienLaoDong.soLaoDongNu = res.data.data[0].soLaoDongNu;
                self.dataFormThanhVienLaoDong.thanhVienLaPhapNhan = res.data.data[0].thanhVienLaPhapNhan;
                self.dataFormThanhVienLaoDong.thuNhapBinhQuanCuaThanhVien = res.data.data[0].thuNhapBinhQuanCuaThanhVien;
                self.dataFormThanhVienLaoDong.mucDoThamGiaDaiHoiThanhVien = res.data.data[0].mucDoThamGiaDaiHoiThanhVien;
                self.dataFormThanhVienLaoDong.thuNhapBinhQuanCuaLaoDong = res.data.data[0].thuNhapBinhQuanCuaLaoDong;
                self.dataFormThanhVienLaoDong.donViId = res.data.data[0].donViId;
                self.dataFormThanhVienLaoDong.kyBienDongId = res.data.data[0].kyBienDongId;

            });
    },
    watch: {
        // 'dataFormThongTinKhac.phanMemQuanLy'() {
        //     if (this.dataFormThongTinKhac.phanMemQuanLy == true) {
        //         this.dataFormThongTinKhac.suDungPhanMemQuanLy = true
        //     } else {
        //         this.dataFormThongTinKhac.suDungPhanMemQuanLy = false
        //     }

        // },
        // 'dataFormThongTinKhac.ungDungTrongSanXuat'() {
        //     if (this.dataFormThongTinKhac.ungDungTrongSanXuat == true) {
        //         this.dataFormThongTinKhac.suDungPhanMemQuanLy = true
        //     } else {
        //         this.dataFormThongTinKhac.suDungPhanMemQuanLy = true
        //     }

        // }

    },
    methods: {

        handleClick(tab) {

            const self = this;

            // Thành viên và lao động

            if (tab.label == "Trình độ cán bộ chủ chốt") {
                axios.get("/TrinhDoCanBoChuChot?KyBienDong=" + this.kyID + "&donViId=" + this.donVi)
                    .then((res) => {
                        var ListTrinhDoCanBoChuChots = [];
                        // self.ListTrinhDoCanBoChuChots = res.data.data;
                        for (let index = 0; index < res.data.data.length; index++) {
                            if (res.data.data[index].soNguoi == null) {
                                res.data.data[index].soNguoi = 0;
                            }
                            if (res.data.data[index].doTuoiDuoi40 == null) {
                                res.data.data[index].doTuoiDuoi40 = 0;
                            }
                            if (res.data.data[index].doTuoiTren40 == null) {
                                res.data.data[index].doTuoiTren40 = 0;
                            }
                            if (res.data.data[index].trinhDoVanHoaTieuHoc == null) {
                                res.data.data[index].trinhDoVanHoaTieuHoc = 0;
                            }
                            if (res.data.data[index].trinhDoVanHoaTHCS == null) {
                                res.data.data[index].trinhDoVanHoaTHCS = 0;
                            }
                            if (res.data.data[index].trinhDoVanHoaTHPT == null) {
                                res.data.data[index].trinhDoVanHoaTHPT = 0;
                            }
                            if (res.data.data[index].trinhDoChuaQuaDaoTao == null) {
                                res.data.data[index].trinhDoChuaQuaDaoTao = 0;
                            }
                            if (res.data.data[index].trinhDoSoCap == null) {
                                res.data.data[index].trinhDoSoCap = 0;
                            }
                            if (res.data.data[index].trinhDoTrungCap == null) {
                                res.data.data[index].trinhDoTrungCap = 0;
                            }
                            if (res.data.data[index].trinhDoCaoDang == null) {
                                res.data.data[index].trinhDoCaoDang = 0;
                            }
                            if (res.data.data[index].trinhDoDaiHoc == null) {
                                res.data.data[index].trinhDoDaiHoc = 0;
                            }
                            if (res.data.data[index].trinhDoSauDaiHoc == null) {
                                res.data.data[index].trinhDoSauDaiHoc = 0;
                            }
                            ListTrinhDoCanBoChuChots.push(res.data.data[index]);
                        }
                        self.ListTrinhDoCanBoChuChots = ListTrinhDoCanBoChuChots;

                    });
            }
            if (tab.label == "Thành viên và lao động") {
                axios.get("/ThanhVienLaoDong?KyBienDong=" + this.kyID + "&donViId=" + this.donVi)
                    .then((res) => {

                        self.dataFormThanhVienLaoDong.id = res.data.data[0].id;
                        self.dataFormThanhVienLaoDong.tongSoThanhVien = res.data.data[0].tongSoThanhVien;
                        self.dataFormThanhVienLaoDong.soThanhVienSuDungDichVu = res.data.data[0].soThanhVienSuDungDichVu;
                        self.dataFormThanhVienLaoDong.tongSoLaoDong = res.data.data[0].tongSoLaoDong;
                        self.dataFormThanhVienLaoDong.soLaoDongLaThanhVien = res.data.data[0].soLaoDongLaThanhVien;
                        self.dataFormThanhVienLaoDong.khungDoTuoiLaoDong = res.data.data[0].khungDoTuoiLaoDong;
                        self.dataFormThanhVienLaoDong.thanhVienThamGiaMoi = res.data.data[0].thanhVienThamGiaMoi;
                        self.dataFormThanhVienLaoDong.thanhVienLaCaNhan = res.data.data[0].thanhVienLaCaNhan;
                        self.dataFormThanhVienLaoDong.thanhVienLaHoGiaDinh = res.data.data[0].thanhVienLaHoGiaDinh;
                        self.dataFormThanhVienLaoDong.laoDongThamGiaBaoHiemXaHoi = res.data.data[0].laoDongThamGiaBaoHiemXaHoi;
                        self.dataFormThanhVienLaoDong.mucDoHaiLong = res.data.data[0].mucDoHaiLong;
                        self.dataFormThanhVienLaoDong.thanhVienSuDungSanPhamDichVu = res.data.data[0].thanhVienSuDungSanPhamDichVu;
                        self.dataFormThanhVienLaoDong.trinhDoLaoDongDaiHoc = res.data.data[0].trinhDoLaoDongDaiHoc;
                        self.dataFormThanhVienLaoDong.trinhDoLaoDongSoCapNghe = res.data.data[0].trinhDoLaoDongSoCapNghe;
                        self.dataFormThanhVienLaoDong.trinhDoLaoDongTrungCap = res.data.data[0].trinhDoLaoDongTrungCap;
                        self.dataFormThanhVienLaoDong.trinhDoLaoDongChuaQuaDaoTao = res.data.data[0].trinhDoLaoDongChuaQuaDaoTao;
                        self.dataFormThanhVienLaoDong.donViId = res.data.data[0].donViId;
                        self.dataFormThanhVienLaoDong.kyBienDongId = res.data.data[0].kyBienDongId;

                    });
            }
            if (tab.label == "Tài sản") {
                axios.get("/TaiSan?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {

                        self.dataFormTaiSan.id = res.data.data[0].id;
                        self.dataFormTaiSan.taiSan01 = res.data.data[0].taiSan02 + res.data.data[0].taiSan03 + res.data.data[0].taiSan04 + res.data.data[0].taiSan05;
                        self.dataFormTaiSan.taiSan02 = res.data.data[0].taiSan02;
                        self.dataFormTaiSan.taiSan03 = res.data.data[0].taiSan03;
                        self.dataFormTaiSan.taiSan04 = res.data.data[0].taiSan04;
                        self.dataFormTaiSan.taiSan05 = res.data.data[0].taiSan05
                        self.dataFormTaiSan.taiSan06 = res.data.data[0].taiSan06;
                        self.dataFormTaiSan.taiSan07 = res.data.data[0].taiSan08 + res.data.data[0].taiSan09;
                        self.dataFormTaiSan.taiSan08 = res.data.data[0].taiSan08;
                        self.dataFormTaiSan.taiSan09 = res.data.data[0].taiSan09;
                        self.dataFormTaiSan.vonDongGopCuaThanhVien = res.data.data[0].vonDongGopCuaThanhVien;
                        self.dataFormTaiSan.vonVayTuThanhVien = res.data.data[0].vonVayTuThanhVien;
                        self.dataFormTaiSan.vonVayTuQuyHoTro = res.data.data[0].vonVayTuQuyHoTro;
                        self.dataFormTaiSan.vonVayTuNguonTinDungKhac = res.data.data[0].vonVayTuNguonTinDungKhac;
                        self.dataFormTaiSan.donViId = res.data.data[0].donViId;
                        self.dataFormTaiSan.kyBienDongId = res.data.data[0].kyBienDongId;
                        self.statusForm = "update"
                    });

            }
            if (tab.label == "Vốn điều lệ") {
                axios.get("/VonDieuLe?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.dataFormVonDieuLe.id = res.data.data[0].id;
                        self.dataFormVonDieuLe.tongVonDieuLe = res.data.data[0].tongVonDieuLe;
                        self.dataFormVonDieuLe.tongThanhVienGop = res.data.data[0].tongThanhVienGop;
                        self.dataFormVonDieuLe.thapNhat = res.data.data[0].thapNhat;
                        self.dataFormVonDieuLe.caoNhat = res.data.data[0].caoNhat;
                        self.dataFormVonDieuLe.data.kyBienDongId = res.data.data[0].kyBienDongId;
                        self.dataFormVonDieuLe.data.donViId = res.data.data[0].donViId;
                    });

            }
            if (tab.label == "Hoạt động đầu tư") {
                axios.get("/HoatDongDauTu?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.dataFormHoatDongDautu.id = res.data.data[0].id;
                        self.dataFormHoatDongDautu.tongVonDieuLeDoanhNghiep = res.data.data[0].tongVonDieuLeDoanhNghiep;
                        self.dataFormHoatDongDautu.tongVonGop = res.data.data[0].tongVonGop;
                        self.dataFormHoatDongDautu.tongCoPhan = res.data.data[0].tongCoPhan;
                        self.dataFormHoatDongDautu.data.kyBienDongId = res.data.data[0].kyBienDongId;
                        self.dataFormHoatDongDautu.data.donViId = res.data.data[0].donViId;
                        self.statusForm = "update"
                    });
            }

            if (tab.label == "Kết quả kinh doanh HND,LHHTX") {
                axios.get("/KetQuaKinhDoanhHTX?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.LaoDongHopTacXa = res.data;
                        self.dataFormKetQuaKinhDoanhHTX.data.id = res.data.data[0].id;

                        self.dataFormKetQuaKinhDoanhHTX.data.doanhThuBanHangVaCungCapDichVu = res.data.data[0].doanhThuBanHangVaCungCapDichVu;
                        self.dataFormKetQuaKinhDoanhHTX.data.doanhThuThanhVien = res.data.data[0].doanhThuThanhVien;
                        self.dataFormKetQuaKinhDoanhHTX.data.loiNhuanTruocThue = res.data.data[0].loiNhuanTruocThue;
                        self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan05 = res.data.data[0].loiNhuanTrichQuyDTPT + res.data.data[0].loiNhuanTrichQuyDPTC + res.data.data[0].loiNhuanTrichQuyKhac;
                        self.dataFormKetQuaKinhDoanhHTX.data.loiNhuanTrichQuyDTPT = res.data.data[0].loiNhuanTrichQuyDTPT;
                        self.dataFormKetQuaKinhDoanhHTX.data.loiNhuanTrichQuyDPTC = res.data.data[0].loiNhuanTrichQuyDPTC;
                        self.dataFormKetQuaKinhDoanhHTX.data.loiNhuanTrichQuyKhac = res.data.data[0].loiNhuanTrichQuyKhac;
                        self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan09 = res.data.data[0].loiNhuanChiaThanhVienTheoSuDungDichVu + res.data.data[0].loiNhuanChiaThanhVienTheoGopVon + res.data.data[0].loiNhuanChiaThanhVienTheoKhac;
                        self.dataFormKetQuaKinhDoanhHTX.data.loiNhuanChiaThanhVienTheoSuDungDichVu = res.data.data[0].loiNhuanChiaThanhVienTheoSuDungDichVu;
                        self.dataFormKetQuaKinhDoanhHTX.data.loiNhuanChiaThanhVienTheoGopVon = res.data.data[0].loiNhuanChiaThanhVienTheoGopVon;
                        self.dataFormKetQuaKinhDoanhHTX.data.loiNhuanChiaThanhVienTheoKhac = res.data.data[0].loiNhuanChiaThanhVienTheoKhac;
                        self.dataFormKetQuaKinhDoanhHTX.data.tongQuyLuong = res.data.data[0].tongQuyLuong;
                        self.dataFormKetQuaKinhDoanhHTX.data.thueGTGT = res.data.data[0].thueGTGT;
                        self.dataFormKetQuaKinhDoanhHTX.data.thueThuNhapDoanhNghiep = res.data.data[0].thueThuNhapDoanhNghiep;
                        self.dataFormKetQuaKinhDoanhHTX.data.thueKhac = res.data.data[0].thueKhac;
                        self.dataFormKetQuaKinhDoanhHTX.data.kyBienDongId = res.data.data[0].kyBienDongId;
                        self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan04 = self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan05 + self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan09;
                        self.dataFormKetQuaKinhDoanhHTX.data.donViId = res.data.data[0].donViId;
                        self.statusForm = "update"
                    });

            }
            if (tab.label == "Kết quả kinh doanh QTDND, NHHTX") {
                axios.get("/KetQuaKinhDoanhQTDND?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.LaoDongHopTacXa = res.data;
                        self.dataFormKetQuaKinhDoanhQTDND.data.id = res.data.data[0].id;
                        self.dataFormKetQuaKinhDoanhQTDND.data.tongKhachHangDangVayvon = res.data.data[0].tongKhachHangDangVayvon;
                        self.dataFormKetQuaKinhDoanhQTDND.data.tongThanhVienDangVayvon = res.data.data[0].tongThanhVienDangVayvon;
                        self.dataFormKetQuaKinhDoanhQTDND.data.tongDuNoChoVay = res.data.data[0].tongDuNoChoVay;
                        self.dataFormKetQuaKinhDoanhQTDND.data.duNoChoVayThanhVien = res.data.data[0].duNoChoVayThanhVien;
                        self.dataFormKetQuaKinhDoanhQTDND.data.loiNhuanKeToanTruocThue = res.data.data[0].loiNhuanKeToanTruocThue;
                        self.dataFormKetQuaKinhDoanhQTDND.data.TongLoinhuan07 = res.data.data[0].loiNhuanTrichQuyDTPT + res.data.data[0].loiNhuanTrichQuyDPTC + res.data.data[0].loiNhuanTrichQuyKhac;
                        self.dataFormKetQuaKinhDoanhQTDND.data.loiNhuanTrichQuyDTPT = res.data.data[0].loiNhuanTrichQuyDTPT;
                        self.dataFormKetQuaKinhDoanhQTDND.data.loiNhuanTrichQuyDPTC = res.data.data[0].loiNhuanTrichQuyDPTC;
                        self.dataFormKetQuaKinhDoanhQTDND.data.loiNhuanTrichQuyKhac = res.data.data[0].loiNhuanTrichQuyKhac;
                        self.dataFormKetQuaKinhDoanhQTDND.data.TongLoinhuan11 = res.data.data[0].loiNhuanChiaThanhVienTheoSuDungDichVu + res.data.data[0].loiNhuanChiaThanhVienTheoGopVon + res.data.data[0].loiNhuanChiaThanhVienTheoKhac;
                        self.dataFormKetQuaKinhDoanhQTDND.data.loiNhuanChiaThanhVienTheoSuDungDichVu = res.data.data[0].loiNhuanChiaThanhVienTheoSuDungDichVu;
                        self.dataFormKetQuaKinhDoanhQTDND.data.loiNhuanChiaThanhVienTheoGopVon = res.data.data[0].loiNhuanChiaThanhVienTheoGopVon;
                        self.dataFormKetQuaKinhDoanhQTDND.data.loiNhuanChiaThanhVienTheoKhac = res.data.data[0].loiNhuanChiaThanhVienTheoKhac;
                        self.dataFormKetQuaKinhDoanhQTDND.data.TongLoinhuan06 = self.dataFormKetQuaKinhDoanhQTDND.data.TongLoinhuan07 + self.dataFormKetQuaKinhDoanhQTDND.data.TongLoinhuan11;
                        self.dataFormKetQuaKinhDoanhQTDND.data.thueGTGT = res.data.data[0].thueGTGT;
                        self.dataFormKetQuaKinhDoanhQTDND.data.thueThuNhapDoanhNghiep = res.data.data[0].thueThuNhapDoanhNghiep;
                        self.dataFormKetQuaKinhDoanhQTDND.data.thueKhac = res.data.data[0].thueKhac;
                        self.dataFormKetQuaKinhDoanhQTDND.data.tongQuyLuong = res.data.data[0].tongQuyLuong;
                        self.dataFormKetQuaKinhDoanhQTDND.data.kyBienDongId = res.data.data[0].kyBienDongId;
                        self.dataFormKetQuaKinhDoanhQTDND.data.donViId = res.data.data[0].donViId;
                        self.statusForm = "update"
                    });

            }
            if (tab.label == "Chính sách") {
                axios.get("/ChinhSach?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.ChinhSach = res.data;
                        self.dataFormChinhSach.id = res.data.data[0].id;
                        self.dataFormChinhSach.chinhSach01 = res.data.data[0].chinhSach01;
                        self.dataFormChinhSach.soLuongVanBan01 = res.data.data[0].soLuongVanBan01;
                        self.dataFormChinhSach.chinhSach02 = res.data.data[0].chinhSach02;
                        self.dataFormChinhSach.soLuongVanBan02 = res.data.data[0].soLuongVanBan02;
                        self.dataFormChinhSach.chinhSach03 = res.data.data[0].chinhSach03;
                        self.dataFormChinhSach.soLuongVanBan03 = res.data.data[0].soLuongVanBan03;
                        self.dataFormChinhSach.chinhSach04 = res.data.data[0].chinhSach04;
                        self.dataFormChinhSach.soLuongVanBan04 = res.data.data[0].soLuongVanBan04;
                        self.dataFormChinhSach.chinhSach05 = res.data.data[0].chinhSach05;
                        self.dataFormChinhSach.soLuongVanBan05 = res.data.data[0].soLuongVanBan05;
                        self.dataFormChinhSach.chinhSach06 = res.data.data[0].chinhSach06;
                        self.dataFormChinhSach.soLuongVanBan06 = res.data.data[0].soLuongVanBan06;
                        self.dataFormChinhSach.chinhSach07 = res.data.data[0].chinhSach07;
                        self.dataFormChinhSach.soLuongVanBan07 = res.data.data[0].soLuongVanBan07;
                        self.dataFormChinhSach.chinhSach08 = res.data.data[0].chinhSach08;
                        self.dataFormChinhSach.soLuongVanBan08 = res.data.data[0].soLuongVanBan08;
                        self.dataFormChinhSach.chinhSach09 = res.data.data[0].chinhSach09;
                        self.dataFormChinhSach.soLuongVanBan09 = res.data.data[0].soLuongVanBan09;
                        self.dataFormChinhSach.chinhSach10 = res.data.data[0].chinhSach10;
                        self.dataFormChinhSach.soLuongVanBan10 = res.data.data[0].soLuongVanBan10;
                        self.dataFormChinhSach.chinhSach11 = res.data.data[0].chinhSach11;
                        self.dataFormChinhSach.soLuongVanBan11 = res.data.data[0].soLuongVanBan11;
                        self.dataFormChinhSach.chinhSach12 = res.data.data[0].chinhSach12;
                        self.dataFormChinhSach.soLuongVanBan12 = res.data.data[0].soLuongVanBan12;
                        self.dataFormChinhSach.chinhSach13 = res.data.data[0].chinhSach13;
                        self.dataFormChinhSach.soLuongVanBan13 = res.data.data[0].soLuongVanBan13;
                        self.dataFormChinhSach.chinhSach14 = res.data.data[0].chinhSach14;
                        self.dataFormChinhSach.soLuongVanBan14 = res.data.data[0].soLuongVanBan14;
                        self.dataFormChinhSach.chinhSach15 = res.data.data[0].chinhSach15;
                        self.dataFormChinhSach.htxDuocGiaoDat = res.data.data[0].htxDuocGiaoDat;
                        self.dataFormChinhSach.htxDuocChoThueDat = res.data.data[0].htxDuocChoThueDat;
                        self.dataFormChinhSach.htxDuocMienTienSuDungDat = res.data.data[0].htxDuocMienTienSuDungDat;
                        self.dataFormChinhSach.donViId = res.data.data[0].donViId;
                        self.dataFormChinhSach.kyBienDongId = res.data.data[0].kyBienDongId;
                    });

            }
            if (tab.label == "Thông tin khác") {
                axios.get("/ThongTinKhac?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {

                        self.dataFormThongTinKhac.id = res.data.data[0].id;

                        self.dataFormThongTinKhac.hoatDongXaHoiTuThien = res.data.data[0].hoatDongXaHoiTuThien;
                        self.dataFormThongTinKhac.suDungPhanMemQuanLy = res.data.data[0].suDungPhanMemQuanLy;
                        self.dataFormThongTinKhac.phanMemQuanLy = res.data.data[0].phanMemQuanLy;
                        self.dataFormThongTinKhac.ungDungTrongTieuThuSanPham = res.data.data[0].ungDungTrongTieuThuSanPham;
                        self.dataFormThongTinKhac.ungDungTrongSanXuat = res.data.data[0].ungDungTrongSanXuat;
                        self.dataFormThongTinKhac.donViId = res.data.data[0].donViId;
                        self.dataFormThongTinKhac.kyBienDongId = res.data.data[0].kyBienDongId;
                        axios.get("/DanhHieu?thongTinKhacId=" + self.dataFormThongTinKhac.id)
                            .then((res) => {
                                self.listDanhhieus = res.data.data;

                            });
                    });

                axios.get("/SanPhamDonVi?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.listSanphamdonvikys = res.data.data;
                        if (self.listSanphamdonvikys.length > 0) {

                            for (let index = 0; index < self.listSanphamdonvikys.length; index++) {
                                var convertidchungnhankhacs = [];
                                var idchungnhankhacs = self.listSanphamdonvikys[index].chungNhanKhacId.split(",");
                                for (let index = 0; index < idchungnhankhacs.length; index++) {
                                    var idchungnhankhac = parseInt(idchungnhankhacs[index]);
                                    convertidchungnhankhacs.push(idchungnhankhac);
                                }
                                self.listSanphamdonvikys[index].chungNhanKhacId = convertidchungnhankhacs;

                            }
                        }

                    });
                axios.get("/HoatDongXaHoiTuThien?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.listHoatdongtuthiens = res.data.data;

                    });
                axios.get("/ThamGiaChuongTrinhDuAn?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {
                        self.listChuongtrinhthamgia = res.data.data;

                    });
            }
            if (tab.label == "Chấp hành pháp luật, giải quyết khiếu nại") {
                axios.get("/ChapHanhPhapLuat?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {

                        self.dataFormChapHanhPhapLuat.id = res.data.data[0].id;
                        self.dataFormChapHanhPhapLuat.phapLuat01 = res.data.data[0].phapLuat01;
                        self.dataFormChapHanhPhapLuat.soViPhamChuaKhacPhuc01 = res.data.data[0].soViPhamChuaKhacPhuc01;
                        self.dataFormChapHanhPhapLuat.phapLuat02 = res.data.data[0].phapLuat02;
                        self.dataFormChapHanhPhapLuat.soViPhamChuaKhacPhuc02 = res.data.data[0].soViPhamChuaKhacPhuc02;
                        self.dataFormChapHanhPhapLuat.phapLuat03 = res.data.data[0].phapLuat03;
                        self.dataFormChapHanhPhapLuat.soViPhamChuaKhacPhuc03 = res.data.data[0].soViPhamChuaKhacPhuc03;
                        self.dataFormChapHanhPhapLuat.giaiQuyetTranhChap04a = res.data.data[0].giaiQuyetTranhChap04a;
                        self.dataFormChapHanhPhapLuat.conTonDong04a = res.data.data[0].conTonDong04a;
                        self.dataFormChapHanhPhapLuat.giaiQuyetTranhChap04b = res.data.data[0].giaiQuyetTranhChap04b;
                        self.dataFormChapHanhPhapLuat.conTonDong04b = res.data.data[0].conTonDong04b;

                        self.dataFormChapHanhPhapLuat.donViId = res.data.data[0].donViId;
                        self.dataFormChapHanhPhapLuat.kyBienDongId = res.data.data[0].kyBienDongId;
                    });
                axios.get("/CheDoChinhSachChoThanhVien?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {

                        self.dataFormCheDoChinhSachChoThanhVien.id = res.data.data[0].id;
                        self.dataFormCheDoChinhSachChoThanhVien.chiTraLuong = res.data.data[0].chiTraLuong;
                        self.dataFormCheDoChinhSachChoThanhVien.noLuongTraiQuyDinh = res.data.data[0].noLuongTraiQuyDinh;
                        self.dataFormCheDoChinhSachChoThanhVien.phuCapChoHoiDongQuanTri = res.data.data[0].phuCapChoHoiDongQuanTri;
                        self.dataFormCheDoChinhSachChoThanhVien.chuaThucHien02 = res.data.data[0].chuaThucHien02;
                        self.dataFormCheDoChinhSachChoThanhVien.chinhSachVeBHYT = res.data.data[0].chinhSachVeBHYT;
                        self.dataFormCheDoChinhSachChoThanhVien.chuaThucHien03 = res.data.data[0].chuaThucHien03;
                        self.dataFormCheDoChinhSachChoThanhVien.donViId = res.data.data[0].donViId;
                        self.dataFormCheDoChinhSachChoThanhVien.kyBienDongId = res.data.data[0].kyBienDongId;
                    });

            }
            if (tab.label == "Áp dụng tiến bộ khoa học") {
                axios.get("/ApDungKhoaHocKyThuat?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {

                        self.dataFormApDungKhoaHocKyThuat.id = res.data.data[0].id;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi01 = res.data.data[0].tieuChi01;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi01 = res.data.data[0].ghiChuTieuChi01;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi02 = res.data.data[0].tieuChi02;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi02 = res.data.data[0].ghiChuTieuChi02;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi03 = res.data.data[0].tieuChi03;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi03 = res.data.data[0].ghiChuTieuChi03;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi04 = res.data.data[0].tieuChi04;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi04 = res.data.data[0].ghiChuTieuChi04;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi05 = res.data.data[0].tieuChi05;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi05 = res.data.data[0].ghiChuTieuChi05;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi06 = res.data.data[0].tieuChi06;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi06 = res.data.data[0].ghiChuTieuChi06;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi07 = res.data.data[0].tieuChi07;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi07 = res.data.data[0].ghiChuTieuChi07;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi08 = res.data.data[0].tieuChi08;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi08 = res.data.data[0].ghiChuTieuChi08;
                        self.dataFormApDungKhoaHocKyThuat.tieuChi09 = res.data.data[0].tieuChi09;
                        self.dataFormApDungKhoaHocKyThuat.ghiChuTieuChi09 = res.data.data[0].ghiChuTieuChi09;
                        self.dataFormApDungKhoaHocKyThuat.donViId = res.data.data[0].donViId;
                        self.dataFormApDungKhoaHocKyThuat.kyBienDongId = res.data.data[0].kyBienDongId;
                    });

            }
            if (tab.label == "Sản phẩm, dịch vụ") {
                axios.get("/SanPhamDichVuCungUngThanhVien?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {

                        self.dataFormSanPhamDichVuCungUngThanhVien.id = res.data.data[0].id;
                        self.dataFormSanPhamDichVuCungUngThanhVien.soLuongSanPham = res.data.data[0].soLuongSanPham;
                        self.dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuTrungBinh = res.data.data[0].chatLuongDichVuTrungBinh;
                        self.dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuKha = res.data.data[0].chatLuongDichVuKha;
                        self.dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuTot = res.data.data[0].chatLuongDichVuTot;
                        self.dataFormSanPhamDichVuCungUngThanhVien.chatLuongDichVuRatTot = res.data.data[0].chatLuongDichVuRatTot;
                        self.dataFormSanPhamDichVuCungUngThanhVien.giaUuDaiSoVoiKhachHangKhongPhaiThanhVien = res.data.data[0].giaUuDaiSoVoiKhachHangKhongPhaiThanhVien;
                        self.dataFormSanPhamDichVuCungUngThanhVien.mucDoHaiLong = res.data.data[0].mucDoHaiLong;
                        self.dataFormSanPhamDichVuCungUngThanhVien.donViId = res.data.data[0].donViId;
                        self.dataFormSanPhamDichVuCungUngThanhVien.kyBienDongId = res.data.data[0].kyBienDongId;
                    });

            }
            if (tab.label == "Nhưng thuận lợi khó khăn và nhu cầu") {
                axios.get("/ThongTinBoSungDonVi?donViId=" + self.donVi + "&KyBienDong=" + self.kyID)
                    .then((res) => {

                        self.dataFormThongTinBoSungDonVi.id = res.data.data[0].id;
                        self.dataFormThongTinBoSungDonVi.thuanLoiHienTai = res.data.data[0].thuanLoiHienTai;
                        self.dataFormThongTinBoSungDonVi.khoKhanHienTai = res.data.data[0].khoKhanHienTai;
                        self.dataFormThongTinBoSungDonVi.deXuatDoiVoiTinh = res.data.data[0].deXuatDoiVoiTinh;
                        self.dataFormThongTinBoSungDonVi.deXuatDoiVoiLMHTX = res.data.data[0].deXuatDoiVoiLMHTX;
                        self.dataFormThongTinBoSungDonVi.nhuCauVeDaoTao = res.data.data[0].nhuCauVeDaoTao;
                        self.dataFormThongTinBoSungDonVi.nhuCauVeTinDung = res.data.data[0].nhuCauVeTinDung;
                        self.dataFormThongTinBoSungDonVi.nhuCauVeXucTienThuongMai = res.data.data[0].nhuCauVeXucTienThuongMai;
                        self.dataFormThongTinBoSungDonVi.nhuCauHoTroKhac = res.data.data[0].nhuCauHoTroKhac;
                        self.dataFormThongTinBoSungDonVi.donViId = res.data.data[0].donViId;
                        self.dataFormThongTinBoSungDonVi.kyBienDongId = res.data.data[0].kyBienDongId;
                    });

            }

        },
        Back() {
            window.location.href = "/quan-ly-du-lieu-ky";
        },
        saveform() {

        },
        Chontrinhdocanbo(event, key, tentruong) {
            const self = this;

            if (tentruong == 'songuoi') {

                if (this.ListTrinhDoCanBoChuChots[key].soNguoi == '') {
                    console.log(1);
                    this.ListTrinhDoCanBoChuChots[key].soNguoi = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].soNguoi = parseInt(event.target.value);
                }

            } else if (tentruong == 'duoi40') {
                if (this.ListTrinhDoCanBoChuChots[key].doTuoiDuoi40 == '') {
                    this.ListTrinhDoCanBoChuChots[key].doTuoiDuoi40 = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].doTuoiDuoi40 = parseInt(event.target.value);
                }

            } else if (tentruong == 'tren40') {
                if (this.ListTrinhDoCanBoChuChots[key].doTuoiTren40 == '') {
                    this.ListTrinhDoCanBoChuChots[key].doTuoiTren40 = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].doTuoiTren40 = parseInt(event.target.value);
                }

            } else if (tentruong == 'tieuhoc') {
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTieuHoc == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTieuHoc = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTieuHoc = parseInt(event.target.value);
                }

            } else if (tentruong == 'thcs') {
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHCS == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHCS = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHCS = parseInt(event.target.value);
                }

            } else if (tentruong == 'thpt') {
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHPT == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHPT = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHPT = parseInt(event.target.value);
                }

            } else if (tentruong == 'chuaquadaotao') {
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoChuaQuaDaoTao == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoChuaQuaDaoTao = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoChuaQuaDaoTao = parseInt(event.target.value);
                }

            } else if (tentruong == 'socap') {
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoSoCap == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSoCap = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSoCap = parseInt(event.target.value);
                }

            } else if (tentruong == 'trungcap') {
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoTrungCap == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoTrungCap = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoTrungCap = parseInt(event.target.value);
                }

            } else if (tentruong == 'cd') {

                if (this.ListTrinhDoCanBoChuChots[key].trinhDoCaoDang == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoCaoDang = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoCaoDang = parseInt(event.target.value);
                }

            } else if (tentruong == 'dh') {

                if (this.ListTrinhDoCanBoChuChots[key].trinhDoDaiHoc == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoDaiHoc = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoDaiHoc = parseInt(event.target.value);
                }

            } else {
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoSauDaiHoc == '') {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSauDaiHoc = 0;
                } else {
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSauDaiHoc = parseInt(event.target.value);
                }

            }
            if (this.ListTrinhDoCanBoChuChots[key].soNguoi > 0) {

                if (this.ListTrinhDoCanBoChuChots[key].doTuoiDuoi40 > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    self.ListTrinhDoCanBoChuChots[key].doTuoiDuoi40 = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].doTuoiTren40 > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    self.ListTrinhDoCanBoChuChots[key].doTuoiTren40 = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].doTuoiTren40 + this.ListTrinhDoCanBoChuChots[key].doTuoiDuoi40 > this.ListTrinhDoCanBoChuChots[key].soNguoi) {

                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    self.ListTrinhDoCanBoChuChots[key].doTuoiTren40 = 0;
                    self.ListTrinhDoCanBoChuChots[key].doTuoiDuoi40 = 0;
                }

                // check văn hóa
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTieuHoc > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTieuHoc = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHCS > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHCS = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHPT > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHPT = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTieuHoc + this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHCS + this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHPT > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTieuHoc = 0;
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHCS = 0;
                    this.ListTrinhDoCanBoChuChots[key].trinhDoVanHoaTHPT = 0;
                }
                // checek trinh độ
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoChuaQuaDaoTao > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoChuaQuaDaoTao = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoSoCap > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSoCap = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoTrungCap > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoTrungCap = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoCaoDang > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoCaoDang = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoDaiHoc > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoDaiHoc = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoSauDaiHoc > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSauDaiHoc = 0;
                }
                if (this.ListTrinhDoCanBoChuChots[key].trinhDoChuaQuaDaoTao + this.ListTrinhDoCanBoChuChots[key].trinhDoSoCap + this.ListTrinhDoCanBoChuChots[key].trinhDoTrungCap + this.ListTrinhDoCanBoChuChots[key].trinhDoCaoDang + this.ListTrinhDoCanBoChuChots[key].trinhDoDaiHoc + this.ListTrinhDoCanBoChuChots[key].trinhDoSauDaiHoc > this.ListTrinhDoCanBoChuChots[key].soNguoi) {
                    self.thongbaothatbai('số người vượt quá mức khai báo');
                    this.ListTrinhDoCanBoChuChots[key].trinhDoChuaQuaDaoTao = 0;
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSoCap = 0;
                    this.ListTrinhDoCanBoChuChots[key].trinhDoTrungCap = 0;
                    this.ListTrinhDoCanBoChuChots[key].trinhDoCaoDang = 0;
                    this.ListTrinhDoCanBoChuChots[key].trinhDoDaiHoc = 0;
                    this.ListTrinhDoCanBoChuChots[key].trinhDoSauDaiHoc = 0;
                }
            }
        },

        submitformDonVi() {

            if (this.dataFormDonVi.validate().errors().any()) {
                return;
            }
            const self = this;

            axios.post("/DonVi/" + self.donVi, self.dataFormDonVi.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
            ``
        },
        submitformTrinhDoCanboChuChot() {

            const self = this;
            for (let index = 0; index < this.ListTrinhDoCanBoChuChots.length; index++) {
                console.log(this.ListTrinhDoCanBoChuChots[index]);
                axios.post("/TrinhDoCanBoChuChot/" + this.ListTrinhDoCanBoChuChots[index].id, this.ListTrinhDoCanBoChuChots[index]).then(function () {

                        self.loadData();
                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            }
            this.thongbaothanhcong('Lưu thành công')

        },
        submitformThanhVienLaoDong() {
            if (this.dataFormThanhVienLaoDong.validate().errors().any()) {
                return;
            }
            const self = this;

            self.dataFormThanhVienLaoDong.data.thanhVienThamGiaMoi = parseFloat(self.dataFormThanhVienLaoDong.data.thanhVienThamGiaMoi);
            self.dataFormThanhVienLaoDong.data.thanhVienLaCaNhan = parseFloat(self.dataFormThanhVienLaoDong.data.thanhVienLaCaNhan);
            self.dataFormThanhVienLaoDong.data.thanhVienLaHoGiaDinh = parseFloat(self.dataFormThanhVienLaoDong.data.thanhVienLaHoGiaDinh);
            self.dataFormThanhVienLaoDong.data.laoDongThamGiaBaoHiemXaHoi = parseFloat(self.dataFormThanhVienLaoDong.data.laoDongThamGiaBaoHiemXaHoi);
            self.dataFormThanhVienLaoDong.data.mucDoHaiLong = parseFloat(self.dataFormThanhVienLaoDong.data.mucDoHaiLong);
            self.dataFormThanhVienLaoDong.data.thanhVienSuDungSanPhamDichVu = parseFloat(self.dataFormThanhVienLaoDong.data.thanhVienSuDungSanPhamDichVu);
            self.dataFormThanhVienLaoDong.data.trinhDoLaoDongDaiHoc = parseFloat(self.dataFormThanhVienLaoDong.data.trinhDoLaoDongDaiHoc);
            self.dataFormThanhVienLaoDong.data.trinhDoLaoDongSoCapNghe = parseFloat(self.dataFormThanhVienLaoDong.data.trinhDoLaoDongSoCapNghe);
            self.dataFormThanhVienLaoDong.data.trinhDoLaoDongTrungCap = parseFloat(self.dataFormThanhVienLaoDong.data.trinhDoLaoDongTrungCap);
            self.dataFormThanhVienLaoDong.data.trinhDoLaoDongChuaQuaDaoTao = parseFloat(self.dataFormThanhVienLaoDong.data.trinhDoLaoDongChuaQuaDaoTao);
            self.dataFormThanhVienLaoDong.data.tongSoThanhVien = parseFloat(self.dataFormThanhVienLaoDong.data.tongSoThanhVien);
            self.dataFormThanhVienLaoDong.data.soThanhVienSuDungDichVu = parseFloat(self.dataFormThanhVienLaoDong.data.soThanhVienSuDungDichVu);
            self.dataFormThanhVienLaoDong.data.tongSoLaoDong = parseFloat(self.dataFormThanhVienLaoDong.data.tongSoLaoDong);
            self.dataFormThanhVienLaoDong.data.soLaoDongLaThanhVien = parseFloat(self.dataFormThanhVienLaoDong.data.soLaoDongLaThanhVien);
            axios.post("/ThanhVienLaoDong/" + self.dataFormThanhVienLaoDong.id, self.dataFormThanhVienLaoDong.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

        },
        submitformTaiSan() {

            if (this.dataFormTaiSan.validate().errors().any()) {
                return;
            }
            const self = this;

            axios.post("/TaiSan/" + self.dataFormTaiSan.data.id, self.dataFormTaiSan.data).then(function () {
                    self.thongbaothanhcong('Lưu thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

        },

        submitformVonDieuLe() {
            if (this.dataFormVonDieuLe.validate().errors().any()) {
                return;
            }
            const self = this;

            axios.post("/VonDieuLe/" + self.dataFormVonDieuLe.id, self.dataFormVonDieuLe.data).then(function () {
                    self.thongbaothanhcong('Lưu thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

        },
        submitformHoatDongDauTu() {
            if (this.dataFormHoatDongDautu.validate().errors().any()) {
                return;
            }
            const self = this;

            axios.post("/HoatDongDauTu/" + self.dataFormHoatDongDautu.id, self.dataFormHoatDongDautu.data).then(function () {
                    self.thongbaothanhcong('Lưu thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

        },

        submitformKetQuaKinhDoanhHTX() {
            if (this.dataFormKetQuaKinhDoanhHTX.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/KetQuaKinhDoanhHTX/" + self.dataFormKetQuaKinhDoanhHTX.id, self.dataFormKetQuaKinhDoanhHTX.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
        },
        submitformKetQuaKinhDoanhQTDND() {

            if (this.dataFormKetQuaKinhDoanhQTDND.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/KetQuaKinhDoanhQTDND/" + self.dataFormKetQuaKinhDoanhQTDND.id, self.dataFormKetQuaKinhDoanhQTDND.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
        },
        submitformChinhSach() {
            if (this.dataFormChinhSach.validate().errors().any()) {
                return;
            }
            const self = this;

            axios.post("/ChinhSach/" + self.dataFormChinhSach.id, self.dataFormChinhSach.data).then(function () {
                    self.thongbaothanhcong('Lưu thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

        },
        submitformThongTinKhac() {
            if (this.dataFormThongTinKhac.validate().errors().any()) {
                return;
            }
            const self = this;

            axios.post("/ThongTinKhac/" + self.dataFormThongTinKhac.id, self.dataFormThongTinKhac.data).then(function () {
                    for (let index = 0; index < self.listDanhhieus.length; index++) {

                        if (self.listDanhhieus[index].id) {
                            axios.post("/DanhHieu/" + self.listDanhhieus[index].id, self.listDanhhieus[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        } else {
                            axios.post("/DanhHieu", self.listDanhhieus[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        }

                    }
                    for (let index = 0; index < self.listHoatdongtuthiens.length; index++) {

                        if (self.listHoatdongtuthiens[index].id) {
                            axios.post("/HoatDongXaHoiTuThien/" + self.listHoatdongtuthiens[index].id, self.listHoatdongtuthiens[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        } else {
                            axios.post("/HoatDongXaHoiTuThien", self.listHoatdongtuthiens[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        }

                    }
                    for (let index = 0; index < self.listChuongtrinhthamgia.length; index++) {

                        if (self.listChuongtrinhthamgia[index].id) {
                            axios.post("/ThamGiaChuongTrinhDuAn/" + self.listChuongtrinhthamgia[index].id, self.listChuongtrinhthamgia[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        } else {
                            axios.post("/ThamGiaChuongTrinhDuAn", self.listChuongtrinhthamgia[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        }

                    }
                    for (let index = 0; index < self.listSanphamdonvikys.length; index++) {
     
                        if (self.listSanphamdonvikys[index].chungNhanKhacId != null) {
                            self.listSanphamdonvikys[index].chungNhanKhacId = self.listSanphamdonvikys[index].chungNhanKhacId.join();
                        }
                        if (self.listSanphamdonvikys[index].id) {
                            axios.post("/SanPhamDonVi/" + self.listSanphamdonvikys[index].id, self.listSanphamdonvikys[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        } else {
                            axios.post("/SanPhamDonVi", self.listSanphamdonvikys[index]).then(function () {

                                    self.loadData();
                                })
                                .catch(error => {
                                    self.thongbaothatbai(error);
                                });
                        }

                    }
                    self.thongbaothanhcong('Lưu thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

        },
        submitformChapHanhPhapLuat() {
            if (this.dataFormChapHanhPhapLuat.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/ChapHanhPhapLuat/" + self.dataFormChapHanhPhapLuat.id, self.dataFormChapHanhPhapLuat.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
            axios.post("/CheDoChinhSachChoThanhVien/" + self.dataFormCheDoChinhSachChoThanhVien.id, self.dataFormCheDoChinhSachChoThanhVien.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
        },
        submitformApDungKhoaHocKyThuat() {
            if (this.dataFormApDungKhoaHocKyThuat.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/ApDungKhoaHocKyThuat/" + self.dataFormApDungKhoaHocKyThuat.id, self.dataFormApDungKhoaHocKyThuat.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
        },
        submitformSanPhamDichVuCungUngThanhVien() {
            if (this.dataFormSanPhamDichVuCungUngThanhVien.validate().errors().any()) {
                return;
            }
            const self = this;
            if (self.dataFormSanPhamDichVuCungUngThanhVien.soLuongSanPham == '') {
                self.dataFormSanPhamDichVuCungUngThanhVien.soLuongSanPham = 0;
            }
            axios.post("/SanPhamDichVuCungUngThanhVien/" + self.dataFormSanPhamDichVuCungUngThanhVien.id, self.dataFormSanPhamDichVuCungUngThanhVien.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
        },
        submitformThongTinBoSungDonVi() {
            if (this.dataFormThongTinBoSungDonVi.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/ThongTinBoSungDonVi/" + self.dataFormThongTinBoSungDonVi.id, self.dataFormThongTinBoSungDonVi.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
        },
        CreatThanhTuu() {
            const self = this;
            var DanhHieu = new Object();

            DanhHieu.thongTinKhacId = self.dataFormThongTinKhac.id;
            DanhHieu.danhHieuThiDua = null;
            DanhHieu.hinhThucKhenThuong = null;
            DanhHieu.thanhTuuDatDuoc = null;
            this.listDanhhieus.push(DanhHieu);

        },
        DeleteThanhTuu(key) {
            const self = this;
            if (this.listDanhhieus[key].id) {

                axios.post("/DanhHieu/Delete/" + self.listDanhhieus[key].id).then(function () {
                        // self.thongbaothanhcong('xóa thành công')
                        // self.loadData();
                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
                this.listDanhhieus.splice(key, 1);
            } else {
                this.listDanhhieus.splice(key, 1);
            }

        },
        Chondanhhieu(event, key, tentruong) {
            if (tentruong == 'danhhieuthidua') {
                this.listDanhhieus[key].danhHieuThiDua = event.target.value;
            } else if (tentruong == 'thanhtuudatduoc') {
                this.listDanhhieus[key].thanhTuuDatDuoc = event.target.value;
            } else {
                this.listDanhhieus[key].hinhThucKhenThuong = event.target.value;
            }

        },
        CreatSanphamdonviky() {
            const self = this;
            var Sanpham = new Object();
            Sanpham.donViId = self.donVi;
            Sanpham.kyBienDongId = self.kyID;
            Sanpham.sanPhamId = null;
            Sanpham.chungNhanOCOP = 0;
            Sanpham.ChungNhanSanPhamCongNghiepId = 0;
            Sanpham.namDatDuoc = '';
            Sanpham.chungNhanKhacId = [];
            this.listSanphamdonvikys.push(Sanpham);

        },
        DeleteSanphamdonvi(key) {
            const self = this;

            if (this.listSanphamdonvikys[key].id) {

                axios.post("/SanPhamDonVi/Delete/" + self.listSanphamdonvikys[key].id).then(function () {

                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
                this.listSanphamdonvikys.splice(key, 1);
            } else {
                this.listSanphamdonvikys.splice(key, 1);
            }

        },
        Chonthongtinsanpham(event, key, tentruong) {

            if (tentruong == 'chungnhankhac') {

                this.listSanphamdonvikys[key].chungNhanKhacId = event;

            } else if (tentruong == 'namdatduoc') {
                this.listSanphamdonvikys[key].namDatDuoc = event.target.value;

            } else if (tentruong == 'chungNhanSanPhamCongNghiep') {
                this.listSanphamdonvikys[key].ChungNhanSanPhamCongNghiepId = event.target.value;

            } else if (tentruong == 'datchungnhanocop') {
                this.listSanphamdonvikys[key].chungNhanOCOP = parseInt(event.target.value);
            } else {
                this.listSanphamdonvikys[key].sanPhamID = event.target.value;
            }

        },
        CreatHoatdongtuthien() {
            const self = this;
            var Hoatdongtuthien = new Object();
            Hoatdongtuthien.donViId = self.donVi;
            Hoatdongtuthien.kyBienDongId = self.kyID;
            Hoatdongtuthien.noiDung = null;
            Hoatdongtuthien.soLuong = null;
            Hoatdongtuthien.donViTinh = null;
            Hoatdongtuthien.giaTri = 0;

            this.listHoatdongtuthiens.push(Hoatdongtuthien);

        },
        DeleteHoatdongtuthien(key) {
            const self = this;

            if (this.listHoatdongtuthiens[key].id) {

                axios.post("/HoatDongXaHoiTuThien/Delete/" + self.listHoatdongtuthiens[key].id).then(function () {

                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
                this.listHoatdongtuthiens.splice(key, 1);
            } else {
                this.listHoatdongtuthiens.splice(key, 1);
            }

        },
        Chonthongtintuthien(event, key, tentruong) {

            if (tentruong == 'noidung') {

                this.listHoatdongtuthiens[key].noiDung = event.target.value;

            } else if (tentruong == 'sl') {
                this.listHoatdongtuthiens[key].soLuong = event.target.value;

            } else if (tentruong == 'dvt') {
                this.listHoatdongtuthiens[key].donViTinh = event.target.value;

            } else {
                this.listHoatdongtuthiens[key].quyDoiThanhTien = event.target.value;
            }

        },
        CreatChuongtrinhthamgia() {

            var Chuongtrinhthamgia = new Object();
            Chuongtrinhthamgia.donViId = self.donVi;
            Chuongtrinhthamgia.kyBienDongId = self.kyID;
            Chuongtrinhthamgia.tenChuongTrinhDuAn = null;
            Chuongtrinhthamgia.soTien = null;
            Chuongtrinhthamgia.thoiGianThamGia = null;
            this.listChuongtrinhthamgia.push(Chuongtrinhthamgia);
        },
        DeleteChuongtrinhthamgia(key) {
            const self = this;
            if (this.listChuongtrinhthamgia[key].id) {

                axios.post("/ThamGiaChuongTrinhDuAn/Delete/" + self.listChuongtrinhthamgia[key].id).then(function () {
                        // self.thongbaothanhcong('xóa thành công')
                        // self.loadData();
                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
                this.listChuongtrinhthamgia.splice(key, 1);
            } else {
                this.listChuongtrinhthamgia.splice(key, 1);
            }

        },
        Chonchuongtrinhthamgia(event, key, tentruong) {
            if (tentruong == 'tenchuongtrinh') {
                this.listChuongtrinhthamgia[key].tenChuongTrinhDuAn = event.target.value;
            } else if (tentruong == 'sotien') {
                this.listChuongtrinhthamgia[key].soTien = event.target.value;
            } else {
                this.listChuongtrinhthamgia[key].thoiGianThamGia = event.target.value;
            }

        },
        pagination(data) {
            // Gán lại giá trị paginatenow
            this.datatb.paginatenow = data;
            // Load lại bảng
            this.loadData();
        },
        // load lại dữ liệu
        loadData() {
            // const self = this;
            axios.get("/DonVi/ChinhSuaDonVi?idDonVi=" + this.donVi + "&kyBienDong=" + this.kyID)
                .then((res) => {
                    console.log(res.data);
                });
           

        },
        //data table
        doAlertEdit() {

        },

        doAfterReload() {
            window.alert("data reloaded");
        },

        thongbaothanhcong(text) {
            this.$notify({
                title: "Success",
                message: text,
                type: "success",
            });
        },
        thongbaothatbai(text) {
            this.$notify.error({
                title: "Error",
                message: text,
            });
        },
    },
}
</script>
