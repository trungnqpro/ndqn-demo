<template>
    <div class="grid grid-cols-12">
        <div class="p-2 sm:col-span-3 col-span-12">
            <button @click="print"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                In báo cáo
            </button>
        </div>
        <div id="printMe" class="col-span-12  grid grid-cols-12 pb-4">
            <div class="col-span-12 flex justify-around text-base">
                <div class="text-center">

                    <p class="font-semibold uppercase">

                        ỦY BAN NHÂN DÂN  {{ infodiaban.tenDiaBan }}
                    </p>
                    <p class="font-semibold">PHÒNG TÀI CHÍNH - KẾ HOẠCH</p>
                    <p class="h-1 w-1/5 m-auto" style="border-bottom: 2px dashed ;"></p>
                </div>
                <div class="text-center">
                    <p class="font-semibold">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                    <p class="font-semibold">
                        Độc Lập - Tự do - Hạnh phúc
                    </p>
                    <p class="h-1 w-1/5 m-auto" style="border-bottom: 2px dashed ;"></p>
                </div>
            </div>
            <div class="col-span-12 grid grid-cols-12  text-base mx-24 ">
                <div class="text-left col-span-6">
                    <p class="font-normal">
                        Số:............
                    </p>
                </div>
                <div class="text-right col-span-6">
                    <i>
                        ....., ngày.... tháng ....năm ....
                    </i>
                </div>
            </div>
            <div class="col-span-12 text-base text-center ">
                <h1 class="font-semibold">
                    BÁO CÁO
                </h1>
                <span class="font-semibold">
                    Tình hình hoạt động của hội nông dân năm
                </span>
                <h3>
                    Kính Gửi: Phòng Đăng ký kinh doanh - Sở Kế hoạch và Đầu tư
                </h3>
            </div>
            <div class="col-span-12 text-sm leading-normal pb-4">
                <br>
                <b> I. THÔNG TIN CHUNG</b>
                <br>

                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full ">
                            <table class="min-w-full divide-y divide-black">
                                <thead>
                                    <tr class="divide-x  divide-black">
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">TT</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">Chỉ tiêu
                                        </th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Mã chỉ tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Đơn vị tính</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">Tổng số
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-black bg-white">
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">A
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng số HND
                                                đang hoạt động (01=02+05)</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu01 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>1.1</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">HND cung ứng
                                            dịch vụ (02=03+04)</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu02 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- HND nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu03 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- HND phi nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu04 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>1.2</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>HND tạo việc
                                                làm cho thành viên (05=06+07)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu05 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- HND nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu06 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- HND phi nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu07 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>2</b> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng số thành
                                                viên </b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu08 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>2.1</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Chia theo mô
                                                hình tổ chức hoạt động (09=10+12)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu09 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Thành viên trong HND cung ứng dịch
                                            vụ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu10 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: số thành viên sử dụng dịch
                                            vụ của HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu11 }}

                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Thành viên trong HND tạo việc làm
                                            cho thành viên </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">12</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu12 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>2.2</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Chia theo
                                                lĩnh vực (13=14+15)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu13 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Tổng số thành viên trong lĩnh vực
                                            nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu14 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Tổng số thành viên trong lĩnh vực
                                            phi nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">15 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu15 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>3</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng số lao
                                                động thường xuyên (16=17+18)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">16</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu16 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>3.1</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Lao động
                                                trong HND cung ứng dịch vụ</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">17</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu17 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>3.2</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Lao động
                                                trong HND tạo việc làm cho thành viên</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">18</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu18 }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: lao động là thành viên
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">19</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu19 }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <b>
                    II. TÀI SẢN, VỐN ĐIỀU LỆ (tại thời điểm 31/12/...)
                </b>
                <br>
                <br>
                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black">
                        <div class="w-full ">
                            <table class="min-w-full divide-y divide-black">
                                <thead>
                                    <tr class="divide-x  divide-black">
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">TT</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">Chỉ tiêu
                                        </th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Mã chỉ tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Đơn vị tính</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">Tổng số
                                        </th>
                                    </tr>

                                </thead>
                                <tbody class="divide-y divide-black bg-white">
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">A
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">II
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"><b>TÀI SẢN</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center"></td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tài sản không
                                                chia (01=02+03+04+05)</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                            {{
                                                TaiSanVonDieuLe.chiTieu02 + TaiSanVonDieuLe.chiTieu03 +
                                                TaiSanVonDieuLe.chiTieu04 +
                                                TaiSanVonDieuLe.chiTieu05
                                            }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>1.1</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quyền sử dụng
                                            đất do Nhà nước giao đất, cho thuê đất</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu02 }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Khoản được cấp, hỗ trợ không hoàn
                                            lại của nhà nước,<br> khoản được tặng, cho theo thỏa thuận là tài sản không <br>
                                            chia</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu03 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Phần trích lại từ quỹ đầu tư phát
                                            triển đưa vào <br> tài sản không chia</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu04 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Vốn, tài sản khác do điều lệ quy
                                            định <br> là tài sản không chia</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu05 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>2</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng cộng tài
                                                sản </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu06 }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>2.1</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng cộng
                                                nguồn vốn (07=08+09) </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu08 + TaiSanVonDieuLe.chiTieu09 }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Nợ phải trả </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu08 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Vốn chủ sở hữu </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu09 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>II</b> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>VỐN ĐIỀU LỆ
                                                VÀ VỐN GÓP CỦA THÀNH VIÊN </b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>1</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng vốn điều lệ
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu10 }}

                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tổng số thành viên góp vốn điều lệ
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu11 }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Mức vốn góp thấp nhất/thành viên
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu12 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">4</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Mức góp vốn cao nhất/thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">13 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu13 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">III</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>HOẠT ĐỘNG ĐẦU TƯ</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tổng số vốn góp vào doanh nghiệp
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu14 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>2</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng giá trị cổ
                                            phần mua</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu15 }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tổng vốn điều lệ của doanh nghiệp
                                            trực thuộc</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">16</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe.chiTieu16 }}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <b>III. KẾT QUẢ KINH DOANH GHI NHẬN THEO BÁO CÁO TÀI CHÍNH NĂM</b>

                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full">
                            <table class="min-w-full divide-black">
                                <thead>
                                    <tr class="divide-x  divide-black">
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900">TT</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900">Chỉ tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Mã chỉ tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Đơn vị tính</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900">Tổng số</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-black bg-white">
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">A
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Doanh thu bán
                                                hàng và cung cấp dịch vụ (01=02+04)</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ (KetQuaKinhDoanh.chiTieu02 + KetQuaKinhDoanh.chiTieu04) }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>1.1</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Từ HND cung
                                                ứng dịch vụ</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu02 }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: - Từ giao dịch với thành
                                            viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu03 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">1.2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>Từ HND tạo việc làm</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu04 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>Tổng lợi nhuận kế toán trước thuế
                                                thu nhập doanh nghiệp </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ (KetQuaKinhDoanh.chiTieu05) }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>3</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Lợi nhuận sau
                                                nghĩa vụ tài chính (06=07+11)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ (KetQuaKinhDoanh.chiTieu08 + KetQuaKinhDoanh.chiTieu09 +
                                                KetQuaKinhDoanh.chiTieu10
                                                +
                                                KetQuaKinhDoanh.chiTieu12 + KetQuaKinhDoanh.chiTieu13 +
                                                KetQuaKinhDoanh.chiTieu14) }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>4</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng lợi
                                                nhuận trích lập các quỹ (07=08+09+10)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ (KetQuaKinhDoanh.chiTieu08 + KetQuaKinhDoanh.chiTieu09 +
                                                KetQuaKinhDoanh.chiTieu10) }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Quỹ Đầu tư phát triển</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu08 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Quỹ Dự phòng tài chính </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu09 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ khác</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu10 }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>5</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng lợi
                                                nhuận chia cho thành viên (11=12+13+14)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{
                                                (KetQuaKinhDoanh.chiTieu12 + KetQuaKinhDoanh.chiTieu13 +
                                                    KetQuaKinhDoanh.chiTieu14)
                                            }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo mức độ sử
                                            dụng dịch vụ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu12 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo vốn góp
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu13 }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Khác (ghi rõ):</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu14 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b>6</b></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng quỹ
                                                lương </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanh.chiTieu15 }}
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <b>IV. TÌNH HÌNH THỤ HƯỞNG CHÍNH SÁCH</b>
                <br>
                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full ">
                            <table class="min-w-full divide-y divide-black">
                                <thead class="divide-x divide-y divide-gray-900">
                                    <tr class="divide-x  divide-gray-900">
                                        <th scope="col" rowspan="2"
                                            class="p-2 text-left font-semibold text-gray-900 text-center ">Tên chỉ tiêu</th>
                                        <th scope="col" rowspan="2"
                                            class="p-2 text-left font-semibold text-gray-900 text-center">Mã chỉ tiêu</th>
                                        <th scope="col" colspan="3"
                                            class="p-2 text-left font-semibold text-gray-900 text-center">Số lượng hỗ trợ
                                        </th>
                                        <th scope="col" rowspan="2"
                                            class="p-2 text-left font-semibold text-gray-900 text-center">Thời điểm</th>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <th scope="col"
                                            class="p-2 text-left font-semibold text-gray-900 text-center border border-gray-900">
                                            Đơn vị tính</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900 text-center">Số
                                            lượng</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900 text-center">Kinh
                                            phí <br> (tr. đồng)</th>
                                    </tr>

                                </thead>
                                <tbody class="divide-y divide-gray-900 bg-white">
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 text-center ">A</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center ">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center ">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center ">4</td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">I. Chính sách hỗ trợ
                                            cho các HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">

                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">1. Hỗ trợ đào tạo, bồi
                                            dưỡng nguồn nhân lực</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Lượt</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu01'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu01'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu01'][2] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">2. Hỗ trợ xúc tiến
                                            thương mại, <br> mở rộng thị trường</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Lần</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu02'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu02'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu02'][2] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">3. Hỗ trợ ứng dụng công
                                            khoa học, <br> công kỹ thuật và công nghệ mới</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu03'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu03'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu03'][2] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">4. Hỗ trợ tiếp cận vốn
                                            và quỹ hỗ trợ <br> phát triển HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"> {{
                                            Tinhhinhthuhuongchinhsach['chiTieu04'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"> {{
                                            Tinhhinhthuhuongchinhsach['chiTieu04'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu04'][2] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">5. Hỗ trợ tham gia các
                                            chương trình mục tiêu, <br> chương trình phát triển KT- XH</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Lần</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu05'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu05'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu05'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">6. Hỗ trợ thành lập mới
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu06'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu06'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu06'][2] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 "><b>II. Chính sách hỗ
                                                trợ, ưu đãi đối <br> với các HND nông nghiệp</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">1. Hỗ trợ đầu tư phát
                                            triển kết cấu hạ tầng <br> (nhà kho, sân phơi, xưởng sơ chế, chế biến, <br> cửa
                                            hàng kinh doanh, máy móc, thiết bị... <br> phục vụ sản xuất kinh doanh)</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu07'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu07'][1] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu07'][2] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">2. Hỗ trợ, ưu đãi về
                                            giao đất, cho thuê đất</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">2. Hỗ trợ, ưu đãi về
                                            giao đất, cho thuê đất</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">08</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Ha</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu08'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu08'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu08'][2] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">- Diện tích đất được
                                            thuê</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Ha</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu09'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu09'][1] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu09'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">- Tiền thuê đất được
                                            miễn, giảm</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu10'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu10'][1] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu10'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">3. Ưu đãi về tín dụng
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">Trong đó: - Số tiền
                                            được vay tổ chức tín dụng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu11'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu11'][1] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu11'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">- Số tiền được hỗ trợ
                                            lãi suất vay</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">12</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu12'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu12'][1] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu12'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">4. Hỗ trợ vốn, giống
                                            khi gặp <br> khó khăn do thiên tai, dịch bệnh</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">13</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu13'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu13'][1] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu13'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">5. Hỗ trợ chế biến sản
                                            phẩm</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"> {{
                                            Tinhhinhthuhuongchinhsach['chiTieu14'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu14'][1] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu14'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">6. Khác (ghi cụ thể)
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"> {{
                                            Tinhhinhthuhuongchinhsach['chiTieu15'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"> {{
                                            Tinhhinhthuhuongchinhsach['chiTieu15'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"> {{
                                            Tinhhinhthuhuongchinhsach['chiTieu15'][2] }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <b>V. TRÌNH ĐỘ CÁN BỘ CHỦ CHỐT CỦA HND</b>

                <div class="mx-2 pb-4 w-full text-right">
                    <em>Đơn vị tính: người</em>
                    <div class="col-span-12  ring-1 ring-black">

                        <table class="min-w-full divide-y divide-black">
                            <thead>
                                <tr class="divide-x  divide-black">
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900 sm:pl-0">TT</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Chỉ tiêu</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Mã chỉ tiêu</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Chưa qua đào tạo</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Sơ cấp nghề</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Trung cấp, cao đẳng
                                    </th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Đại học, trên đại học
                                    </th>

                                </tr>

                            </thead>
                            <tbody class="divide-y divide-black bg-white">
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">A</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center text-center">B</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">C</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">1</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">4</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng số </b>
                                        (01=02+05+08+11)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center text-center">01</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[0]
                                            + TrinhDoCanBoChuChot.chiTieu04[0] + TrinhDoCanBoChuChot.chiTieu06[0]
                                            + TrinhDoCanBoChuChot.chiTieu07[0] + TrinhDoCanBoChuChot.chiTieu09[0]
                                            + TrinhDoCanBoChuChot.chiTieu10[0] + TrinhDoCanBoChuChot.chiTieu12[0]
                                            + TrinhDoCanBoChuChot.chiTieu13[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[1]
                                            + TrinhDoCanBoChuChot.chiTieu04[1] + TrinhDoCanBoChuChot.chiTieu06[1]
                                            + TrinhDoCanBoChuChot.chiTieu07[1] + TrinhDoCanBoChuChot.chiTieu09[1]
                                            + TrinhDoCanBoChuChot.chiTieu10[1] + TrinhDoCanBoChuChot.chiTieu12[1]
                                            + TrinhDoCanBoChuChot.chiTieu13[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[2]
                                            + TrinhDoCanBoChuChot.chiTieu04[2] + TrinhDoCanBoChuChot.chiTieu06[2]
                                            + TrinhDoCanBoChuChot.chiTieu07[2] + TrinhDoCanBoChuChot.chiTieu09[2]
                                            + TrinhDoCanBoChuChot.chiTieu10[2] + TrinhDoCanBoChuChot.chiTieu12[2]
                                            + TrinhDoCanBoChuChot.chiTieu13[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[3]
                                            + TrinhDoCanBoChuChot.chiTieu04[3] + TrinhDoCanBoChuChot.chiTieu06[3]
                                            + TrinhDoCanBoChuChot.chiTieu07[3] + TrinhDoCanBoChuChot.chiTieu09[3]
                                            + TrinhDoCanBoChuChot.chiTieu10[3] + TrinhDoCanBoChuChot.chiTieu12[3]
                                            + TrinhDoCanBoChuChot.chiTieu13[3] }}</td>

                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> Chủ tịch hội đồng
                                        quản trị (02=03+04)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">02</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[0] + TrinhDoCanBoChuChot.chiTieu04[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[1] + TrinhDoCanBoChuChot.chiTieu04[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[2] + TrinhDoCanBoChuChot.chiTieu04[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[3] + TrinhDoCanBoChuChot.chiTieu04[3] }}</td>
                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông nghiệp
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">03</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi nông
                                        nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">04</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu04[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu04[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu04[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu04[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Giám đốc (05=06+07)
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">05</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[0] + TrinhDoCanBoChuChot.chiTieu07[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[1] + TrinhDoCanBoChuChot.chiTieu07[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[2] + TrinhDoCanBoChuChot.chiTieu07[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[3] + TrinhDoCanBoChuChot.chiTieu07[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông nghiệp
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">06</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu06[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi nông
                                        nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">07</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu07[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu07[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu07[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu07[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Trưởng ban kiểm
                                        soát/ <br> kiểm soát viên (08=09+10)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">08</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[0] + TrinhDoCanBoChuChot.chiTieu10[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[1] + TrinhDoCanBoChuChot.chiTieu10[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[2] + TrinhDoCanBoChuChot.chiTieu10[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[3] + TrinhDoCanBoChuChot.chiTieu10[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông nghiệp
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">09</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi nông
                                        nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">10</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu10[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu10[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu10[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu10[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Kế toán trưởng
                                        (11=12+13)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">11</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[0] + TrinhDoCanBoChuChot.chiTieu13[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[1] + TrinhDoCanBoChuChot.chiTieu13[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[2] + TrinhDoCanBoChuChot.chiTieu13[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[3] + TrinhDoCanBoChuChot.chiTieu13[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông nghiệp
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">12</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi nông
                                        nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">13</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu13[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu13[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu13[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu13[3] }}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
                <div class="flex justify-between px-5">
                    <div class="text-center">
                        <br>
                        <p>Nơi nhận: <br>
                            - Như trên; <br>
                            - ............; <br>
                            - Lưu:......
                        </p>
                    </div>
                    <div class="text-center">
                        <b>TRƯỞNG PHÒNG</b><br>
                        <em>(Ký, ghi họ tên và đóng dấu)</em>
                    </div>
                </div>
                <!-- end thông tin chung -->
            </div>

        </div>
    </div>
</template>

<script>
// import router from './router';
import axios from 'axios';
import form from 'vuejs-form';

export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    "name"
                ],
                // đường dẫn đến ajax
                url: "/KyBienDongs",
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
            dataForm: form({
                kyBienDongId: "",
            })
                .rules({
                    kyBienDongId: "required",
                })
                .messages({
                    "kyBienDongId.required": "Trường bắt buộc nhập",
                }),
            Thongtinchung: [],
            TaiSanVonDieuLe: {
                "chiTieu02": 0,
                "chiTieu03": 0,
                "chiTieu04": 0,
                "chiTieu05": 0,
                "chiTieu06": 0,
                "chiTieu08": 0,
                "chiTieu09": 0,
                "chiTieu10": 0,
                "chiTieu11": 0,
                "chiTieu12": 0,
                "chiTieu13": 0,
                "chiTieu14": 0,
                "chiTieu15": 0,
                "chiTieu16": 0,
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
            diaBanId: '',
            kyBienDong: '',
            params: '',
            infodiaban:{},

        };
    },
    mounted: async function () {
        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);

        // console.log(params);
        const self = this;
        this.diaBanId = Number(params.get("diaBanId"));
        this.kyBienDong = Number(params.get("kyBienDong"));
        console.log(this.diaBanId);
        console.log(this.kyBienDong);
        axios.get("/BaoCaoII16/ThongTinChung?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDong)
            .then((res) => {
                self.Thongtinchung = res.data;

            });
        axios.get("/BaoCaoII16/TaiSanVonDieuLe?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDong)
            .then((res) => {
                self.TaiSanVonDieuLe = res.data;
                console.log(self.TaiSanVonDieuLe);
            });
        axios.get("/BaoCaoII16/KetQuaKinhDoanh?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDong)
            .then((res) => {
                self.KetQuaKinhDoanh = res.data;
            });
        axios.get("/BaoCaoII16/TinhHinhChinhSachThuHuong?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDong)
            .then((res) => {
                self.Tinhhinhthuhuongchinhsach = res.data;

            });
        axios.get("/BaoCaoII16/TrinhDoCanBoChuChot?diaBanId=" + self.diaBanId + "&kyBienDong=" + self.kyBienDong)
            .then((res) => {
                self.TrinhDoCanBoChuChot = res.data;
            });
        axios.get("/DiaBan").then(function (response) {

            for (let index = 0; index < response.data.data.length; index++) {
         
                if (self.diaBanId == response.data.data[index].id) {
                    self.infodiaban =  response.data.data[index];
                }
             
            }
        });
        this.loadData();
    },
    watch: {
        "datatb.searchnow"() {
            this.loadData();
        }
    },
    methods: {
        print() {
            // Pass the element id here
            this.$htmlToPaper("printMe");
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
                    self.datatb.total = Math.ceil(response.data.recordsTotal / self.datatb.length);
                    // Dữ liệu bảng
                    self.datatb.tableData = response.data.data;
                });
        },
        //data table
        doAlertEdit(data) {
            // Gán giá trị cho form
            if (data.id === "") {
                this.thongbaothatbai("Bạn chưa chọn kỳ biến động");
            } else {
                window.location.href = "xem-thong-tin?ky=" + data.id + "&&donvi=" + this.Donvi_id;
            }
            // Sửa tình trạng form
        },
        doPrint(data) {
            console.log(data);
            this.TenDonVi = data.tenDonVi;
            this.Masothue = data.maSo;
            for (let index = 0; index < this.listLinhVuc.length; index++) {
                if (this.listLinhVuc[index].id == data.linhVucID) {
                    this.LinhVucName = this.listLinhVuc[index].tenLinhVucHoatDong;
                }
            }
            for (let index = 0; index < this.listLoaiHinh.length; index++) {
                if (this.listLoaiHinh[index].id == data.loaiHinhID) {
                    this.LoaiHinhName = this.listLoaiHinh[index].tenLoaiHinhKinhTe;
                }
            }
            for (let index = 0; index < this.listMoHinh.length; index++) {
                if (this.listMoHinh[index].id == data.moHinhID) {
                    this.MoHinhname = this.listMoHinh[index].tenMoHinhHoatDong;
                }
            }

            this.openmodal2();
        },

    },
}
</script>
