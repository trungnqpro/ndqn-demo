<template>
    <div class="grid grid-cols-12">
        <div class="p-2 sm:col-span-3 col-span-12">
            <button @click="print"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                In báo cáo
            </button>
        </div>
        <div id="printMe" class="w-full  col-span-12 grid grid-cols-12 pb-4">
            <div class="col-span-12 flex justify-around text-base">
                <div class="text-center">

                    <p class="font-semibold">
                        SỞ KẾ HOẠCH VÀ ĐẦU TƯ
                    </p>
                    <p class="font-semibold">PHÒNG ĐĂNG KÝ KINH DOANH</p>
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
                    Tình hình hoạt động của hội nông dân năm...
                </span>
                <h3>
                    Kính gửi: Bộ Kế hoạch và Đầu tư
                </h3>

            </div>
            <div class="col-span-12 text-sm leading-normal pb-4">
                <br>
                <b> I. THÔNG TIN CHUNG</b>
                <br>
                <b>I.1. HỢP TÁC XÃ (Bao gồm HND và QTDND)</b>
                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full ">
                            <table class="min-w-full divide-y divide-black">
                                <thead>
                                    <tr class="divide-x  divide-black">
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">
                                            TT</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">
                                            Chỉ tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Mã chỉ
                                            tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Đơn vị
                                            tính</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">
                                            Tổng số</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-black bg-white">
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
                                            A</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                số HND đang hoạt động (01=02+06)</b> </td>
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>1.1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">HND cung
                                            ứng dịch vụ (02=03+04+05)</td>
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b></b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>-
                                                QTDND</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu05 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>1.2</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>HND
                                                tạo việc làm (06=07+08)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu06 }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- HND nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu07 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- HND phi nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu08 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>2</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                số thành viên </b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu09 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>2.1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Chia
                                                theo mô hình tổ chức hoạt động (10=11+13)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu10 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Thành viên trong HND cung
                                            ứng dịch vụ </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu11 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: số thành viên sử
                                            dụng dịch vụ của HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu12 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Thành viên trong HND tạo
                                            việc làm</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu13 }}

                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2.2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia theo lĩnh vực
                                            (14=15+16+17) </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu14 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>2.2</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Tổng
                                            số thành viên trong lĩnh vực nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu15 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Tổng số thành viên trong
                                            lĩnh vực phi nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">16 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu16 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Tổng số thành viên trong
                                            các QTDND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">17</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu17 }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>3</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                số lao động thường xuyên (18=19+20)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">18</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu18 }}
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Lao động
                                            trong HND cung ứng dịch vụ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">19</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu19 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Lao động
                                            trong HND tạo việc làm</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">20</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu20 }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: Số lao động là
                                            thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">21</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ Thongtinchung.chiTieu21 }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <br>
                <b>I.2 LIÊN HIỆP HỢP TÁC XÃ (Bao gồm LHHTX và NHHTX)</b>
                <br>

                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full ">
                            <table class="min-w-full divide-y divide-black">
                                <thead>
                                    <tr class="divide-x  divide-black">
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">
                                            TT</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">
                                            Chỉ tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Mã chỉ
                                            tiêu</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900">Đơn vị
                                            tính</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">
                                            Tổng số</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-black bg-white">
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
                                            A</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                số LHHTX đang hoạt động (01=02+03+04)</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">LHHTX</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu01 }}
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
                                        <td class="whitespace-nowrap p-2 text-gray-900">- LHHTX nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">LHHTX</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu02 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- LHHTX phi nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">LHHTX</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu03 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b></b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>-
                                                NHHTX</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">LHHTX</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu04 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> 2</td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                số HND thành viên (05=07+08+09)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu05 }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: số thành viên sử
                                            dụng dịch vụ của LHHTX</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu06 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- LHHTX nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu07 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- LHHTX phi nông nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu08 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> <b></b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>-
                                                NHHTX</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu09 }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>3</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                số lao động thường xuyên</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ ThongtinchungLHHTX.chiTieu10 }}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <b>
                    II. TÀI SẢN, VỐN, HOẠT ĐỘNG ĐẦU TƯ (tại thời điểm 31/12/...)
                </b>
                <br>
                <br>
                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black">
                        <div class="w-full ">
                            <table class="min-w-full divide-y divide-black">
                                <thead>
                                    <tr class="divide-x  divide-y  divide-black">
                                        <th scope="col" rowspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">TT</th>
                                        <th scope="col" rowspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">Chỉ tiêu</th>
                                        <th scope="col" rowspan="2" class="p-2 text-left font-semibold text-gray-900">Mã chỉ
                                            tiêu</th>
                                        <th scope="col" rowspan="2" class="p-2 text-left font-semibold text-gray-900">Đơn vị
                                            tính</th>
                                        <th scope="col" colspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">Tổng số</th>
                                    </tr>
                                    <tr class="divide-x  divide-y divide-black">
                                        <th scope="col"
                                            class="p-2 text-left font-semibold text-gray-900 border border-gray-900">
                                            HTX1</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">
                                            LH HTX2</th>
                                    </tr>

                                </thead>
                                <tbody class="divide-y divide-black bg-white">
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
                                            A</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">3</td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
                                            II</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"><b>TÀI SẢN</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center"></td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tài
                                                sản không chia (01=02+03+04+05)</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu02'][0] + TaiSanVonDieuLe['chiTieu03'][0] +
                                                TaiSanVonDieuLe['chiTieu04'][0] + TaiSanVonDieuLe['chiTieu05'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu02'][1] + TaiSanVonDieuLe['chiTieu03'][1] +
                                                TaiSanVonDieuLe['chiTieu04'][1] + TaiSanVonDieuLe['chiTieu05'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quyền
                                            sử dụng đất do Nhà nước giao đất, cho thuê đất</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu02'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu02'][1] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Khoản được cấp, hỗ trợ
                                            không hoàn lại của nhà nước,<br> khoản được tặng, cho theo thỏa thuận là
                                            tài sản không <br> chia</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu03'][0] }}
                                        </td>

                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu03'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Phần trích lại từ quỹ đầu
                                            tư phát triển đưa vào <br> tài sản không chia</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu04'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu04'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Vốn, tài sản khác do điều
                                            lệ quy định <br> là tài sản không chia</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu05'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu05'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>2</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                cộng tài sản </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu06'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu06'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>3</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                cộng nguồn vốn (07=08+09) </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu08'][0] + TaiSanVonDieuLe['chiTieu09'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu08'][1] + TaiSanVonDieuLe['chiTieu09'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Nợ phải trả </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu08'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu08'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Vốn chủ sở hữu </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu09'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu09'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>II.2</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>VỐN
                                                ĐIỀU LỆ VÀ VỐN GÓP CỦA THÀNH VIÊN </b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng vốn
                                            điều lệ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu10'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu10'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tổng số thành viên góp vốn
                                            điều lệ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu11'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu11'][1] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Mức vốn góp thấp nhất/thành
                                            viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu12'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu12'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">4</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Mức góp vốn cao nhất/thành
                                            viên</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">13 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu13'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu13'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">II.3
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>HOẠT ĐỘNG ĐẦU TƯ</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tổng số vốn góp vào doanh
                                            nghiệp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu14'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu14'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> 2</td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng giá
                                            trị cổ phần mua</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu15'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu15'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tổng vốn điều lệ của doanh
                                            nghiệp trực thuộc</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">16</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu16'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ TaiSanVonDieuLe['chiTieu16'][1] }}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <b>III. KẾT QUẢ KINH DOANH GHI NHẬN THEO BÁO CÁO TÀI CHÍNH NĂM</b> <br>
                <b>III.1. HND, LHHTX</b>

                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full">
                            <table class="min-w-full divide-black">
                                <thead>
                                    <tr class="divide-x  divide-y  divide-black">
                                        <th scope="col" rowspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">TT</th>
                                        <th scope="col" rowspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">Chỉ tiêu</th>
                                        <th scope="col" rowspan="2" class="p-2 text-left font-semibold text-gray-900">Mã chỉ
                                            tiêu</th>
                                        <th scope="col" rowspan="2" class="p-2 text-left font-semibold text-gray-900">Đơn vị
                                            tính</th>
                                        <th scope="col" colspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">Tổng số</th>
                                    </tr>
                                    <tr class="divide-x  divide-y divide-black">
                                        <th scope="col"
                                            class="p-2 text-left font-semibold text-gray-900 border border-gray-900">
                                            HTX1</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">
                                            LH HTX2</th>
                                    </tr>

                                </thead>
                                <tbody class="divide-y divide-x divide-black bg-white">
                                    <tr class="divide-x divide-y divide-black">
                                        <td
                                            class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 border border-gray-900 text-center">
                                            A</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">3</td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Doanh
                                                thu bán hàng và cung cấp dịch vụ (01=02+04)</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu01'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu01'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>1.1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Từ
                                                HND cung ứng dịch vụ</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu02'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu02'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: - Từ giao dịch với
                                            thành viên1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu03'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu03'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">1.2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>Từ HND tạo việc làm</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu04'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu04'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>Tổng lợi nhuận kế toán
                                                trước thuế thu nhập doanh nghiệp </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu05'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu05'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>3</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Lợi
                                                nhuận sau nghĩa vụ tài chính (06=07+11)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu06'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu06'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>4</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                lợi nhuận trích lập các quỹ (07=08+09+10)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu07'][0] }}
                                        </td>

                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu07'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
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
                                            {{ KetQuaKinhDoanhHTX['chiTieu08'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu08'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Quỹ Dự phòng tài chính
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu09'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu09'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ
                                            khác</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu10'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu10'][1] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>5</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                lợi nhuận chia cho thành viên (11=12+13+14)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu11'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu11'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo
                                            mức độ sử dụng dịch vụ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu12'][0] }}
                                        </td>

                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu12'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo
                                            vốn góp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu13'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu13'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Khác (ghi rõ):</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu14'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu14'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>6</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                quỹ lương </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu15'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhHTX['chiTieu15'][1] }}

                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <b>III.2. QTDND, NHHTX</b>

                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full">
                            <table class="min-w-full divide-black">
                                <thead>
                                    <tr class="divide-x  divide-y  divide-black">
                                        <th scope="col" rowspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">TT</th>
                                        <th scope="col" rowspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pl-0">Chỉ tiêu</th>
                                        <th scope="col" rowspan="2" class="p-2 text-left font-semibold text-gray-900">Mã chỉ
                                            tiêu</th>
                                        <th scope="col" rowspan="2" class="p-2 text-left font-semibold text-gray-900">Đơn vị
                                            tính</th>
                                        <th scope="col" colspan="2"
                                            class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">Tổng số</th>
                                    </tr>
                                    <tr class="divide-x  divide-y divide-black">
                                        <th scope="col"
                                            class="p-2 text-left font-semibold text-gray-900 border border-gray-900">
                                            QTDND</th>
                                        <th scope="col" class="p-2 ptext-left font-semibold text-gray-900 sm:pr-0">
                                            NHHTX</th>
                                    </tr>

                                </thead>
                                <tbody class="divide-y divide-x divide-black bg-white">
                                    <tr class="divide-x divide-y divide-black">
                                        <td
                                            class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 border border-gray-900 text-center">
                                            A</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">3</td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>1</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng số khách
                                                hàng đang vay vốn</b> </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu01'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu01'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b></b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Trong đó:
                                                tổng số thành viên đang vay vốn</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu02'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu02'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tổng dư nợ cho vay</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu03'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu03'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>Trong đó: dư nợ cho vay thành
                                                viên</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu04'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu04'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"><b>Tổng lợi nhuận kế toán trước <br>
                                                thuế thu nhập doanh nghiệp </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu05'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu05'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>4</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng lợi
                                                nhuận sau nghĩa vụ tài chính(06 = 07 + 11)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu06'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu06'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>5</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng lợi
                                                nhuận trích lập các quỹ <br> (07=08+09+10)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu07'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu07'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
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
                                            {{ KetQuaKinhDoanhQTND['chiTieu08'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu08'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Quỹ Dự phòng tài chính
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu09'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu09'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ
                                            khác</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu10'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu10'][0] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>6</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                lợi nhuận chia cho thành viên (11=12+13+14)</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu11'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu11'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Chia ra:</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo
                                            mức độ sử dụng dịch vụ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu12'][0] }}
                                        </td>

                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu12'][1] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo
                                            vốn góp</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu13'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu13'][1] }}
                                        </td>

                                    </tr>

                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">- Khác (ghi rõ):</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu14'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu14'][1] }}
                                        </td>

                                    </tr>
                                    <tr class="divide-x divide-black">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                            <b>7</b>
                                        </td>
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                quỹ lương </b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu15'][0] }}
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ KetQuaKinhDoanhQTND['chiTieu15'][1] }}
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <b>IV. TÌNH HÌNH THỤ HƯỞNG CHÍNH SÁCH</b>
                <br>
                =
                <div class="mx-2 pb-4 w-full">
                    <div class="col-span-12  ring-1 ring-black ">
                        <div class="w-full ">
                            <table class="min-w-full divide-y divide-black">
                                <thead class="divide-x divide-y divide-gray-900">
                                    <tr class="divide-x  divide-gray-900">
                                        <th scope="col" rowspan="2"
                                            class="p-2 text-left font-semibold text-gray-900 text-center ">Tên chỉ
                                            tiêu</th>
                                        <th scope="col" rowspan="2"
                                            class="p-2 text-left font-semibold text-gray-900 text-center">Mã chỉ
                                            tiêu</th>
                                        <th scope="col" colspan="3"
                                            class="p-2 text-left font-semibold text-gray-900 text-center">Số lượng
                                            hỗ trợ</th>
                                        <th scope="col" rowspan="2"
                                            class="p-2 text-left font-semibold text-gray-900 text-center">Thời điểm
                                        </th>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <th scope="col"
                                            class="p-2 text-left font-semibold text-gray-900 text-center border border-gray-900">
                                            Đơn vị tính</th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900 text-center">Số
                                            lượng
                                        </th>
                                        <th scope="col" class="p-2 text-left font-semibold text-gray-900 text-center">Kinh
                                            phí
                                            <br> (tr. đồng)
                                        </th>
                                    </tr>

                                </thead>
                                <tbody class="divide-y divide-gray-900 bg-white">
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 text-center ">A
                                        </td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center ">2</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center ">3</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center ">4</td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">I. Chính sách
                                            hỗ trợ cho các HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">

                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">1. Hỗ trợ đào
                                            tạo, bồi dưỡng nguồn nhân lực</td>
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">2. Hỗ trợ xúc
                                            tiến thương mại, <br> mở rộng thị trường</td>
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">3. Hỗ trợ ứng
                                            dụng công khoa học, <br> công kỹ thuật và công nghệ mới</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">03</td>
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">4. Hỗ trợ tiếp
                                            cận vốn và quỹ hỗ trợ <br> phát triển HND</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">04</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu04'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu04'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu04'][2] }}
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">5. Hỗ trợ tham
                                            gia các chương trình mục tiêu, <br> chương trình phát triển KT- XH</td>
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">6. Hỗ trợ thành
                                            lập mới</td>
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
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 "><b>II. Chính
                                                sách hỗ trợ, ưu đãi đối <br> với các HND nông nghiệp</b></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">1. Hỗ trợ đầu
                                            tư phát triển kết cấu hạ tầng <br> (nhà kho, sân phơi, xưởng sơ chế, chế
                                            biến, <br> cửa hàng kinh doanh, máy móc, thiết bị... <br> phục vụ sản
                                            xuất kinh doanh)</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">07</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu07'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu07'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu07'][2] }}
                                        </td>
                                    </tr>


                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">2. Hỗ trợ, ưu
                                            đãi về giao đất, cho thuê đất</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Ha</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                        </td>
                                    </tr>

                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">Trong đó: - Diện tích
                                            đất được giao</td>
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
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu09'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu09'][1] }}</td>
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
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu10'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu10'][1] }}</td>
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
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu11'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu11'][1] }}</td>
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
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu12'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu12'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu12'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">4. Hỗ trợ vốn,
                                            giống khi gặp <br> khó khăn do thiên tai, dịch bệnh</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">13</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu13'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu13'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu13'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">5. Hỗ trợ chế
                                            biến sản phẩm</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">14</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu14'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu14'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu14'][2] }}
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-900">
                                        <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">6. Khác (ghi cụ
                                            thể)</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">15</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu15'][0] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu15'][1] }}</td>
                                        <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                            {{ Tinhhinhthuhuongchinhsach['chiTieu15'][2] }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <b>V. TRÌNH ĐỘ CÁN BỘ CHỦ CHỐT</b>

                <div class="mx-2 pb-4 w-full text-left">
                    <div class="text-right">

                        <em>Đơn vị tính: người</em>
                    </div>
                    <div class="col-span-12  ring-1 ring-black">

                        <table class="min-w-full divide-y divide-black">
                            <thead>
                                <tr class="divide-x  divide-black">
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900 sm:pl-0">TT
                                    </th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Chỉ tiêu</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Mã chỉ tiêu
                                    </th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Chưa qua đào
                                        tạo</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Sơ cấp nghề
                                    </th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Trung cấp, cao
                                        đẳng</th>
                                    <th scope="col" class="p-2 text- p-2 font-semibold text-gray-900">Đại học, trên
                                        đại học</th>

                                </tr>

                            </thead>
                            <tbody class="divide-y divide-black bg-white">

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng số
                                        </b> (01=02+06+10+14)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center text-center">01</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[0]
                                            + TrinhDoCanBoChuChot.chiTieu04[0] + TrinhDoCanBoChuChot.chiTieu05[0]
                                            + TrinhDoCanBoChuChot.chiTieu07[0] + TrinhDoCanBoChuChot.chiTieu08[0]
                                            + TrinhDoCanBoChuChot.chiTieu09[0]
                                            + TrinhDoCanBoChuChot.chiTieu11[0] + TrinhDoCanBoChuChot.chiTieu12[0]
                                            + TrinhDoCanBoChuChot.chiTieu13[0] + TrinhDoCanBoChuChot.chiTieu15[0]
                                            + TrinhDoCanBoChuChot.chiTieu16[0] + TrinhDoCanBoChuChot.chiTieu17[0] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[1]
                                            + TrinhDoCanBoChuChot.chiTieu04[1] + TrinhDoCanBoChuChot.chiTieu05[1]
                                            + TrinhDoCanBoChuChot.chiTieu07[1] + TrinhDoCanBoChuChot.chiTieu08[1]
                                            + TrinhDoCanBoChuChot.chiTieu09[1]
                                            + TrinhDoCanBoChuChot.chiTieu11[1] + TrinhDoCanBoChuChot.chiTieu12[1]
                                            + TrinhDoCanBoChuChot.chiTieu13[1] + TrinhDoCanBoChuChot.chiTieu15[1]
                                            + TrinhDoCanBoChuChot.chiTieu16[1] + TrinhDoCanBoChuChot.chiTieu17[1] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[2]
                                            + TrinhDoCanBoChuChot.chiTieu04[2] + TrinhDoCanBoChuChot.chiTieu05[2]
                                            + TrinhDoCanBoChuChot.chiTieu07[2] + TrinhDoCanBoChuChot.chiTieu08[2]
                                            + TrinhDoCanBoChuChot.chiTieu09[2]
                                            + TrinhDoCanBoChuChot.chiTieu11[2] + TrinhDoCanBoChuChot.chiTieu12[2]
                                            + TrinhDoCanBoChuChot.chiTieu13[2] + TrinhDoCanBoChuChot.chiTieu15[2]
                                            + TrinhDoCanBoChuChot.chiTieu16[2] + TrinhDoCanBoChuChot.chiTieu17[2] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[3]
                                            + TrinhDoCanBoChuChot.chiTieu04[3] + TrinhDoCanBoChuChot.chiTieu05[3]
                                            + TrinhDoCanBoChuChot.chiTieu07[3] + TrinhDoCanBoChuChot.chiTieu08[3]
                                            + TrinhDoCanBoChuChot.chiTieu09[3]
                                            + TrinhDoCanBoChuChot.chiTieu11[3] + TrinhDoCanBoChuChot.chiTieu12[3]
                                            + TrinhDoCanBoChuChot.chiTieu13[3] + TrinhDoCanBoChuChot.chiTieu15[3]
                                            + TrinhDoCanBoChuChot.chiTieu16[3] + TrinhDoCanBoChuChot.chiTieu17[3] }}
                                    </td>

                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> Chủ tịch hội đồng
                                        quản trị (02=03+04+05)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">02</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[0] + TrinhDoCanBoChuChot.chiTieu04[0]
                                            + TrinhDoCanBoChuChot.chiTieu05[0] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[1] + TrinhDoCanBoChuChot.chiTieu04[1]
                                            + TrinhDoCanBoChuChot.chiTieu05[1] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[2] + TrinhDoCanBoChuChot.chiTieu04[2]
                                            + TrinhDoCanBoChuChot.chiTieu05[2] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu03[3] + TrinhDoCanBoChuChot.chiTieu04[3]
                                            + TrinhDoCanBoChuChot.chiTieu05[3] }}
                                    </td>
                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
                                        nghiệp</td>
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
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                        nông nghiệp</td>
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
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">05</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu05[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu05[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu05[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu05[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Giám đốc
                                        (06=07+08+09)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">06</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[0]
                                            + TrinhDoCanBoChuChot.chiTieu07[0] + TrinhDoCanBoChuChot.chiTieu08[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[1]
                                            + TrinhDoCanBoChuChot.chiTieu07[1] + TrinhDoCanBoChuChot.chiTieu08[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[2]
                                            + TrinhDoCanBoChuChot.chiTieu07[2] + TrinhDoCanBoChuChot.chiTieu08[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu09[3]
                                            + TrinhDoCanBoChuChot.chiTieu07[3] + TrinhDoCanBoChuChot.chiTieu08[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
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
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                        nông nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">08</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu08[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu08[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu08[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu08[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
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
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Trưởng ban
                                        kiểm soát/ <br> kiểm soát viên (10=11+12+13)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">10</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[0] + TrinhDoCanBoChuChot.chiTieu13[0]
                                            + TrinhDoCanBoChuChot.chiTieu11[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[1] + TrinhDoCanBoChuChot.chiTieu13[1]
                                            + TrinhDoCanBoChuChot.chiTieu11[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[2] + TrinhDoCanBoChuChot.chiTieu13[2]
                                            + TrinhDoCanBoChuChot.chiTieu11[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu12[3] + TrinhDoCanBoChuChot.chiTieu13[3]
                                            + TrinhDoCanBoChuChot.chiTieu11[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
                                        nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">11</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu11[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu11[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu11[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu11[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                        nông nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">12</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu12[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu12[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu12[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu12[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">13</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu13[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu13[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu13[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu13[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Kế toán
                                        trưởng (14=15+16+17)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">14</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu15[0]
                                            + TrinhDoCanBoChuChot.chiTieu16[0] + TrinhDoCanBoChuChot.chiTieu17[0] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu15[1]
                                            + TrinhDoCanBoChuChot.chiTieu16[1] + TrinhDoCanBoChuChot.chiTieu17[1] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu15[2]
                                            + TrinhDoCanBoChuChot.chiTieu16[2] + TrinhDoCanBoChuChot.chiTieu17[2] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu15[3]
                                            + TrinhDoCanBoChuChot.chiTieu16[3] + TrinhDoCanBoChuChot.chiTieu17[3] }}
                                    </td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
                                        nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">15</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu15[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu15[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu15[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu15[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                        nông nghiệp</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">16</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu16[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu16[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu16[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu16[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">17</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu17[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu17[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu17[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu17[3] }}</td>
                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>B</b></td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left">LHHTX, NHHTX</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng số
                                        (18=19+20+21+22)</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu19[0]
                                            + TrinhDoCanBoChuChot.chiTieu20[0] + TrinhDoCanBoChuChot.chiTieu21[0]
                                            + TrinhDoCanBoChuChot.chiTieu22[0] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu19[1]
                                            + TrinhDoCanBoChuChot.chiTieu20[1] + TrinhDoCanBoChuChot.chiTieu21[1]
                                            + TrinhDoCanBoChuChot.chiTieu22[1] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu19[2]
                                            + TrinhDoCanBoChuChot.chiTieu20[2] + TrinhDoCanBoChuChot.chiTieu21[2]
                                            + TrinhDoCanBoChuChot.chiTieu22[2] }}
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0">
                                        {{ TrinhDoCanBoChuChot.chiTieu19[3]
                                            + TrinhDoCanBoChuChot.chiTieu20[3] + TrinhDoCanBoChuChot.chiTieu21[3]
                                            + TrinhDoCanBoChuChot.chiTieu22[3] }}
                                    </td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Chủ tịch hội đồng
                                        quản trị</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">19</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu19[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu19[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu19[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu19[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng Giám đốc</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">20</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu20[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu20[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu20[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu20[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Trưởng ban kiểm soát
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">21</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu21[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu21[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu21[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu21[3] }}</td>
                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Kế toán trưởng</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center">22</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu22[0] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu22[1] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu22[2] }}</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"> {{
                                        TrinhDoCanBoChuChot.chiTieu22[3] }}</td>
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
``
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
            ThongtinchungLHHTX: [],
            TaiSanVonDieuLe: [],
            KetQuaKinhDoanhHTX: [],
            KetQuaKinhDoanhQTND: [],
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
                "chiTieu15": [0,
                    0,
                    0]
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
            kyBienDong: '',

        };
    },
    mounted() {
        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        const self = this;
        this.kyBienDong = Number(params.get("kyBienDong"));
        console.log(this.kyBienDong);
        axios.get("/BaoCaoII17/ThongTinChungHTX?kyBienDong=" + self.kyBienDong)
            .then((res) => {

                self.Thongtinchung = res.data;
            });
        axios.get("/BaoCaoII17/ThongTinChungLHHTX?kyBienDong=" + self.kyBienDong)
            .then((res) => {

                self.ThongtinchungLHHTX = res.data;
            });
        axios.get("/BaoCaoII17/TaiSanVonDieuLe?kyBienDong=" + self.kyBienDong)
            .then((res) => {

                self.TaiSanVonDieuLe = res.data;
            });
        axios.get("/BaoCaoII17/KetQuaKinhDoanhHTX?kyBienDong=" + self.kyBienDong)
            .then((res) => {

                self.KetQuaKinhDoanhHTX = res.data;
            });
        axios.get("/BaoCaoII17/KetQuaKinhDoanhQTDND?kyBienDong=" + self.kyBienDong)
            .then((res) => {

                self.KetQuaKinhDoanhQTND = res.data;
            });
        axios.get("/BaoCaoII17/TinhHinhChinhSachThuHuong?kyBienDong=" + self.kyBienDong)
            .then((res) => {

                self.Tinhhinhthuhuongchinhsach = res.data;
            });
        axios.get("/BaoCaoII17/TrinhDoCanBoChuChot?kyBienDong=" + self.kyBienDong)
            .then((res) => {

                self.TrinhDoCanBoChuChot = res.data;
            });

        this.loadData();
    },
    watch: {

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

    },
}
</script>
