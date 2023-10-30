<style>
#printMe {
    font-family: "Times New Roman", Times, serif;
    width: 230mm;
    margin: 0 auto;
    padding: 0.25in 0.75in 0.13in 1.25in;
}
</style>
<template>
<div>
    <div class="text-gray-100 text-base grid grid-cols-12">
        <div class="p-2 sm:col-span-3 col-span-12 flex items-center">
            <h1 class="font-bold text-gray-600 text-base">Báo cáo tình hình hoạt động</h1>

        </div>

        <div class="p-2 sm:col-span-3 col-span-12">
            <select v-model="kyBienDongId" class="rounded-md w-full text-black p-2">
                <option value="0">-- Chọn kỳ biến động: --</option>
                <option selected v-for="i in listKybiendongs" :value="i.id" :key="i.id">
                    {{ i.tenKyBienDong }}
                </option>
            </select>

        </div>

        <div v-if="role !=3 " class="p-2 sm:col-span-3 col-span-12">
            <select v-model="diaBanId" class="rounded-md w-full text-black p-2">
                <option value="0">-- Chọn Huyện: --</option>
                <option selected v-for="i in listDiaBans" :value="i.id" :key="i.id">
                    {{ i.tenDiaBan }}
                </option>
            </select>

        </div>
        <div class="p-2 sm:col-span-3 col-span-12">
            <button @click="Printbaocao" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                In báo cáo
            </button>
        </div>
    </div>
    <div class=" grid grid-cols-12 ">
        <!-- thông tin chung -->
        <label class="col-span-12 text-base font-medium" for="">
            I. Thông tin chung

        </label>

        <div class="sm:col-span-6 col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-community-line"></i> Thống kê theo HND</div>

            <table class=" divide-y divide-gray-300 w-full">

                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Tổng số HND đang hoạt động:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Thongtinchung.chiTieu01 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> HND cung ứng dịch vụ:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Thongtinchung.chiTieu02 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> HND tạo việc làm cho <br class="xl:hidden"> thành viên:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ Thongtinchung.chiTieu05 }}</td>

                    </tr>

                </tbody>
            </table>

        </div>
        <div class="sm:col-span-6  col-span-12 border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-community-line"></i> Thống kê thành viên</div>

            <table class=" divide-y divide-gray-300 w-full">

                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng số thành viên:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ Thongtinchung.chiTieu08 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Chia theo mô hình tổ chức <br class="xl:hidden"> hoạt động:</td>

                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ Thongtinchung.chiTieu09 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Chia theo lĩnh vực :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ Thongtinchung.chiTieu13 }}</td>

                    </tr>

                </tbody>
            </table>

        </div>
        <div class="sm:col-span-6  col-span-12 border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-community-line"></i> Thống kê lao động</div>

            <table class=" divide-y divide-gray-300 w-full">

                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng số lao động thường <br class="xl:hidden"> xuyên:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ Thongtinchung.chiTieu16 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Lao động trong HND cung <br class="xl:hidden"> ứng dịch vụ:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ Thongtinchung.chiTieu17 }}</td>

                    </tr>

                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Lao động trong HND tạo <br class="xl:hidden"> việc làm :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ Thongtinchung.chiTieu18 }}</td>

                    </tr>
                </tbody>
            </table>

        </div>

        <!-- TÀI SẢN, VỐN, HOẠT ĐỘNG ĐẦU TƯ  -->
        <label class="col-span-12 text-base font-medium" for="">
            II. TÀI SẢN, VỐN, HOẠT ĐỘNG ĐẦU TƯ

        </label>

        <div class="sm:col-span-6 col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-money-dollar-circle-line"></i> Tài Sản</div>

            <table class=" divide-y divide-gray-300 w-full">
                <thead>
                    <tr class="divide-x divide-gray-200">
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tiêu Chí</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tổng số</th>

                    </tr>

                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tài sản không chia :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu02 +TaiSanVonDieuLe.chiTieu03+TaiSanVonDieuLe.chiTieu04+TaiSanVonDieuLe.chiTieu05 }}</td>
                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Tổng cộng tài sản :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu06 }}</td>
                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Tổng cộng nguồn vốn:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu08+TaiSanVonDieuLe.chiTieu09 }}</td>
                    </tr>

                </tbody>
            </table>

        </div>
        <div class="sm:col-span-6 col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-money-dollar-circle-line"></i> HOẠT ĐỘNG ĐẦU TƯ</div>

            <table class=" divide-y divide-gray-300 w-full">
                <thead>
                    <tr class="divide-x divide-gray-200">
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tiêu Chí</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tổng số</th>

                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng số vốn góp vào <br>
                            doanh nghiệp :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu14 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Tổng giá trị cổ phần mua :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu15 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng vốn điều lệ của <br> doanh nghiệp trực thuộc:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu16 }}</td>

                    </tr>

                </tbody>
            </table>

        </div>
        <div class="sm:col-span-6 col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-money-dollar-circle-line"></i> VỐN ĐIỀU LỆ VÀ VỐN GÓP CỦA THÀNH VIÊN</div>

            <table class=" divide-y divide-gray-300 w-full">
                <thead>
                    <tr class="divide-x divide-gray-200">
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tiêu Chí</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tổng số</th>

                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng vốn điều lệ :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu10 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Tổng số thành viên <br> góp vốn điều lệ :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu11 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Mức vốn góp thấp <br> nhất/thành viên:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu12 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Mức góp vốn cao <br> nhất/thành viên:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ TaiSanVonDieuLe.chiTieu13 }}</td>

                    </tr>

                </tbody>
            </table>

        </div>

        <!-- end TÀI SẢN, VỐN, HOẠT ĐỘNG ĐẦU TƯ  -->
        <!-- III. KẾT QUẢ KINH DOANH GHI NHẬN THEO BÁO CÁO TÀI CHÍNH NĂM -->

        <label class="col-span-12 text-base font-medium" for="">
            III. KẾT QUẢ KINH DOANH GHI NHẬN THEO BÁO CÁO TÀI CHÍNH NĂM
        </label>
        <div class="col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-money-dollar-circle-line"></i> KẾT QUẢ KINH DOANH</div>

            <table class=" divide-y divide-gray-300 w-full">
                <thead>
                    <tr class="divide-x divide-gray-200">
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tiêu Chí</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tổng số</th>

                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Doanh thu bán hàng <br class="sm:hidden ">
                            và cung cấp dịch vụ :</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500"> {{KetQuaKinhDoanh.chiTieu02 + KetQuaKinhDoanh.chiTieu04}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Từ HND cung ứng dịch vụ:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{KetQuaKinhDoanh.chiTieu02}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Từ HND tạo việc làm:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{KetQuaKinhDoanh.chiTieu04}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Tổng lợi nhuận kế toán <br class="sm:hidden "> trước thuế thu nhập:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{KetQuaKinhDoanh.chiTieu05}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Lợi nhuận sau nghĩa vụ <br class="sm:hidden "> tài chính:</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{KetQuaKinhDoanh.chiTieu08 + KetQuaKinhDoanh.chiTieu09 +KetQuaKinhDoanh.chiTieu10 + KetQuaKinhDoanh.chiTieu12 +KetQuaKinhDoanh.chiTieu13+KetQuaKinhDoanh.chiTieu14 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng lợi nhuận trích <br class="sm:hidden "> lập các quỹ</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{KetQuaKinhDoanh.chiTieu08 + KetQuaKinhDoanh.chiTieu09 +KetQuaKinhDoanh.chiTieu10}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng lợi nhuận chia cho <br class="sm:hidden "> thành viên </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ KetQuaKinhDoanh.chiTieu12 +KetQuaKinhDoanh.chiTieu13+KetQuaKinhDoanh.chiTieu14 }}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng quỹ lương </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ KetQuaKinhDoanh.chiTieu15 }}</td>

                    </tr>
                </tbody>
            </table>

        </div>

        <!-- end III. KẾT QUẢ KINH DOANH GHI NHẬN THEO BÁO CÁO TÀI CHÍNH NĂM -->
        <!-- IV. TÌNH HÌNH THỤ HƯỞNG CHÍNH SÁCH -->
        <label class="col-span-12 text-base font-medium" for="">
            IV. TÌNH HÌNH THỤ HƯỞNG CHÍNH SÁCH
        </label>
        <div class="col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-money-dollar-circle-line"></i> Chính sách hỗ trợ cho các HND</div>

            <table class=" divide-y divide-gray-300 w-full">
                <thead>
                    <tr class="divide-x divide-gray-200">
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tiêu Chí</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Số lượng</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Kinh phí </th>
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Số HND được hỗ trợ</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Hỗ trợ đào tạo, <br> bồi dưỡng nguồn <br> nhân lực</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu01'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu01'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu01'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Hỗ trợ xúc tiến <br> thương mại, mở rộng <br> thị trường</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu02'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu02'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu02'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Hỗ trợ ứng dụng <br> công khoa học,công <br> kỹ thuật và công <br> nghệ mới</td>

                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu03'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu03'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu03'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Hỗ trợ tiếp cận <br> vốn và quỹ hỗ <br> trợ phát triển HND</td>

                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu04'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu04'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu04'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Hỗ trợ tham gia <br> các chương trình mục<br> tiêu, chương trình phát <br> triển KT- XH</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu05'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu05'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu05'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Hỗ trợ thành lập mới</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu06'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu06'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu06'][2]}}</td>

                    </tr>

                </tbody>
            </table>

        </div>
        <div class="col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-money-dollar-circle-line"></i> Chính sách hỗ trợ, ưu đãi đối với các HND nông nghiệp</div>

            <table class=" divide-y divide-gray-300 w-full">
                <thead>
                    <tr class="divide-x divide-gray-200">
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tiêu Chí</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Số lượng</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Kinh phí </th>
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Số HND được hỗ trợ</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Hỗ trợ đầu tư phát <br class="xl:hidden"> triển kết cấu hạ <br class="sm:hidden "> tầng </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu07'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu07'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu07'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Diện tích đất được giao </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu08'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu08'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu08'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Diện tích đất được thuê </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu09'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu09'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu09'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tiền thuê đất được miễn, <br class="xl:hidden"> giảm </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu10'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu10'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu10'][2]}}</td>

                    </tr>

                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Số tiền được vay <br class="xl:hidden">tổ chức tín dụng </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu11'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu11'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu11'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Số tiền được hỗ trợ lãi <br class="xl:hidden"> suất vay </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu12'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu12'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu12'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Hỗ trợ vốn, giống <br class="xl:hidden">khi gặp khó khăn<br> do thiên tai, dịch bệnh</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu13'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu13'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu13'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Hỗ trợ chế biến<br class="sm:hidden "> sản phẩm</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu14'][0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu14'][1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu14'][2]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Khác</td>
                        <td rowspan="3" class="whitespace-nowrap p-4 text-sm text-gray-500">{{Tinhhinhthuhuongchinhsach['chiTieu15']}}</td>

                    </tr>

                </tbody>
            </table>

        </div>
        <!-- end IV. TÌNH HÌNH THỤ HƯỞNG CHÍNH SÁCH -->
        <!-- V. TRÌNH ĐỘ CÁN BỘ CHỦ CHỐT CỦA HND -->
        <label class="col-span-12 text-base font-medium" for="">
            V. TRÌNH ĐỘ CÁN BỘ CHỦ CHỐT
        </label>

        <div class="col-span-12  border border-slate-400 m-2">
            <div class="uppercase text-white p-2" style="background: linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%);">
                <i class="ri-money-dollar-circle-line"></i> TRÌNH ĐỘ CÁN BỘ CHỦ CHỐT</div>

            <table class=" divide-y divide-gray-300 w-full">
                <thead>
                    <tr class="divide-x divide-gray-200">
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tiêu Chí</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Chưa qua đào tạo</th>
                        <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Sơ cấp nghề</th>
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Trung cấp, cao đẳng</th>
                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Đại học, trên đại học</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 ">Tổng số </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[0] +TrinhDoCanBoChuChot.chiTieu04[0]+TrinhDoCanBoChuChot.chiTieu06[0] +TrinhDoCanBoChuChot.chiTieu07[0]+TrinhDoCanBoChuChot.chiTieu09[0] +TrinhDoCanBoChuChot.chiTieu10[0]+TrinhDoCanBoChuChot.chiTieu12[0] +TrinhDoCanBoChuChot.chiTieu13[0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[1] +TrinhDoCanBoChuChot.chiTieu04[1]+TrinhDoCanBoChuChot.chiTieu06[1] +TrinhDoCanBoChuChot.chiTieu07[1]+TrinhDoCanBoChuChot.chiTieu09[1] +TrinhDoCanBoChuChot.chiTieu10[1]+TrinhDoCanBoChuChot.chiTieu12[1] +TrinhDoCanBoChuChot.chiTieu13[1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[2] +TrinhDoCanBoChuChot.chiTieu04[2]+TrinhDoCanBoChuChot.chiTieu06[2] +TrinhDoCanBoChuChot.chiTieu07[2]+TrinhDoCanBoChuChot.chiTieu09[2] +TrinhDoCanBoChuChot.chiTieu10[2]+TrinhDoCanBoChuChot.chiTieu12[2] +TrinhDoCanBoChuChot.chiTieu13[2]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[3] +TrinhDoCanBoChuChot.chiTieu04[3]+TrinhDoCanBoChuChot.chiTieu06[3] +TrinhDoCanBoChuChot.chiTieu07[3]+TrinhDoCanBoChuChot.chiTieu09[3] +TrinhDoCanBoChuChot.chiTieu10[3]+TrinhDoCanBoChuChot.chiTieu12[3] +TrinhDoCanBoChuChot.chiTieu13[3]}}</td>

                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Chủ tịch hội đồng <br class="xl:hidden"> quản trị </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[0] +TrinhDoCanBoChuChot.chiTieu04[0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[1] +TrinhDoCanBoChuChot.chiTieu04[1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[2] +TrinhDoCanBoChuChot.chiTieu04[2]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu03[3] +TrinhDoCanBoChuChot.chiTieu04[3]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Giám đốc </td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu06[0] +TrinhDoCanBoChuChot.chiTieu07[0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu06[1] +TrinhDoCanBoChuChot.chiTieu07[1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu06[2] +TrinhDoCanBoChuChot.chiTieu07[2]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu06[3] +TrinhDoCanBoChuChot.chiTieu07[3]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Trưởng ban kiểm soát <br class="xl:hidden"> / kiểm soát <br class=" sm:block hidden"> viên</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu09[0] +TrinhDoCanBoChuChot.chiTieu10[0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu09[1] +TrinhDoCanBoChuChot.chiTieu10[1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu09[2] +TrinhDoCanBoChuChot.chiTieu10[2]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu09[3] +TrinhDoCanBoChuChot.chiTieu10[3]}}</td>

                    </tr>
                    <tr class="divide-x divide-gray-200">
                        <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 "> Kế toán trưởng</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu12[0] +TrinhDoCanBoChuChot.chiTieu13[0]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu12[1] +TrinhDoCanBoChuChot.chiTieu13[1]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu12[2] +TrinhDoCanBoChuChot.chiTieu13[2]}}</td>
                        <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{TrinhDoCanBoChuChot.chiTieu12[3] +TrinhDoCanBoChuChot.chiTieu13[3]}}</td>

                    </tr>

                </tbody>
            </table>

        </div>

        <!-- end V. TRÌNH ĐỘ CÁN BỘ CHỦ CHỐT CỦA HND -->
    </div>

</div>
</template>

<style scoped>
table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
  }

  table tr {
    background-color: white;
    border: 1px solid #ddd;
    padding: .35em;
  }

  table th,
  table td {
    padding: .625em;
    /* text-align: center; */
  }

  table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
    border-bottom: 1px solid #ddd;
      display: block;
      margin-bottom: .625em;
    }

    table td {
      border-bottom: 1px solid #ddd !important;
      display: block;
      font-size: .8em;
      border-left: none !important;
      /* text-align: right; */
    }

    table td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
</style>

<!-- <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script> -->
<script>
// import router from './router';
import axios from 'axios';
``
import form from 'vuejs-form';
import {
    log
} from 'console';

export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    "name"
                ],
                // đường dẫn đến ajax
                url: "",
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
            // dataForm: form({
            //         kyBienDongId: "",
            //     })
            //     .rules({
            //         kyBienDongId: "required",
            //     })
            //     .messages({
            //         "kyBienDongId.required": "Trường bắt buộc nhập",
            //     }),
            rowId: "",
            statusForm: "",

            listKybiendongs: [],
            listDiaBans: [],
            Thongtinchung: [],
            TaiSanVonDieuLe: {
               
            },
            KetQuaKinhDoanh: [],
            Tinhhinhthuhuongchinhsach: {
                "chiTieu01": [
                    0,
                    0,
                    0
                ],
                "chiTieu02": [
                    0,
                    0,
                    0
                ],
                "chiTieu03": [
                    0,
                    0,
                    0
                ],
                "chiTieu04": [
                    0,
                    0,
                    0
                ],
                "chiTieu05": [
                    0,
                    0,
                    0
                ],
                "chiTieu06": [
                    0,
                    0,
                    0
                ],
                "chiTieu07": [
                    0,
                    0,
                    0
                ],
                "chiTieu08": [
                    0,
                    0,
                    0
                ],
                "chiTieu09": [
                    0,
                    0,
                    0
                ],
                "chiTieu10": [
                    0,
                    0,
                    0
                ],
                "chiTieu11": [
                    0,
                    0,
                    0
                ],
                "chiTieu12": [
                    0,
                    0,
                    0
                ],
                "chiTieu13": [
                    0,
                    0,
                    0
                ],
                "chiTieu14": [
                    0,
                    0,
                    0
                ],
                "chiTieu15": null
            },
            TrinhDoCanBoChuChot: {
                "chiTieu02": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu03": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu04": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu05": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu06": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu07": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu08": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu09": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu10": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu11": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu12": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu13": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu14": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu15": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu16": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu17": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu18": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu19": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu20": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu21": [
                    0,
                    0,
                    0,
                    0
                ],
                "chiTieu22": [
                    0,
                    0,
                    0,
                    0
                ],

            },
            kyBienDongId: null,
            diaBanId: null,
            role: parseInt(localStorage.getItem("role")),
            idDiaBanuser: localStorage.getItem("idDiaBan"),
        };
    },
    mounted() {
        const self = this;
        axios.get("/KyBienDongs").then((res) => {
            self.listKybiendongs = res.data.data;
            for (let index = 0; index < self.listKybiendongs.length; index++) {
                self.kyBienDongId = self.listKybiendongs[0].id;

            }
            this.loadData();
        });
        axios.get("/DiaBan").then(function (response) {
            self.listDiaBans = response.data.data;
            for (let index = 0; index < self.listDiaBans.length; index++) {
                self.diaBanId = self.listDiaBans[1].id;
            }
        });

    },
    watch: {
        diaBanId() {
            this.loadData();
        },
        kyBienDongId() {
            this.loadData();
        }
    },
    methods: {
        print() {
            // Pass the element id here
            this.$htmlToPaper("printMe");
        },
        thongbaothanhcong(text) {
            this.$notify({
                title: "Success",
                message: text,
                type: "success"
            });
        },
        // load lại dữ liệu
        loadData() {
            const self = this;
            // Lấy index bản ghi bắt đầu

            if (this.role != 3) {

                self.Thongtinchung = [];
                axios.get("/BaoCaoII16/ThongTinChung?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.Thongtinchung = res.data;

                    });
                axios.get("/BaoCaoII16/TaiSanVonDieuLe?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.TaiSanVonDieuLe = res.data;
                        console.log(self.TaiSanVonDieuLe);
                    });
                axios.get("/BaoCaoII16/KetQuaKinhDoanh?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.KetQuaKinhDoanh = res.data;

                    });
                axios.get("/BaoCaoII16/TinhHinhChinhSachThuHuong?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.Tinhhinhthuhuongchinhsach = res.data;

                    });
                axios.get("/BaoCaoII16/TrinhDoCanBoChuChot?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.TrinhDoCanBoChuChot = res.data;
                    });

            } else {
                this.Baocao = 1;
                self.Thongtinchung = [];
                axios.get("/BaoCaoII16/ThongTinChung?diaBanId=" + self.idDiaBanuser + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.Thongtinchung = res.data;

                    });
                axios.get("/BaoCaoII16/TaiSanVonDieuLe?diaBanId=" + self.idDiaBanuser + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.TaiSanVonDieuLe = res.data;

                    });
                axios.get("/BaoCaoII16/KetQuaKinhDoanh?diaBanId=" + self.idDiaBanuser + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.KetQuaKinhDoanh = res.data;

                    });
                axios.get("/BaoCaoII16/TinhHinhChinhSachThuHuong?diaBanId=" + self.idDiaBanuser + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.Tinhhinhthuhuongchinhsach = res.data;

                    });
                axios.get("/BaoCaoII16/TrinhDoCanBoChuChot?diaBanId=" + self.idDiaBanuser + "&kyBienDong=" + self.kyBienDongId)
                    .then((res) => {
                        self.TrinhDoCanBoChuChot = res.data;
                    });
            }
        },
        Printbaocao() {
            const self = this;
           
            if (self.diaBanId != null) {
                window.location.href = "/tinh-hinh-hoat-dong-cua-hop-tac-xa-nam?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDongId;
            }
           
        },
        thongbaothatbai(text) {
            this.$notify.error({
                title: "Error",
                message: text
            });
        },

    },
}
</script>
