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
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Liên minh hội nông dân</h1>
                <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
            </div>
        </div>
        <!-- Phiếu tình hình hoạt động hội nông dân -->
        <div v-cloak v-bind:class="{ hidden: isActivemodal2 }" style="z-index: 100"
            class="min-w-screen h-screen animated fadeIn faster 
                                                 fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div @click="closemodal2()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="sm:w-7/12 w-10/12   p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white overflow-y-auto "
                style="height:90%">
                <div class="w-full  overflow-auto ">
                    <div class=" flex justify-between items-center  rounded-t border-b mb-5 dark:border-gray-600">

                        <button type="button" @click="closemodal2()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                </div>
                <div id="printMe" class="w-full grid grid-cols-12 pb-4">
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
                    <div class="col-span-12 text-base leading-normal pb-4">
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
                                                <td
                                                    class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
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
                                                    <b>1.1</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">HND cung
                                                    ứng dịch vụ (02=03+04+05)</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- HND nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- HND phi nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>1.2</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>HND
                                                        tạo việc làm (06=07+08)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- HND nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- HND phi nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>2.1</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Chia
                                                        theo mô hình tổ chức hoạt động (10=11+13)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Thành viên trong HND cung
                                                    ứng dịch vụ </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: số thành viên sử
                                                    dụng dịch vụ của HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Thành viên trong HND tạo
                                                    việc làm</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2.2</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Chia theo lĩnh vực
                                                    (14=15+16+17) </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>2.2</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Tổng
                                                    số thành viên trong lĩnh vực nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Tổng số thành viên trong
                                                    lĩnh vực phi nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">16 </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Tổng số thành viên trong
                                                    các QTDND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">17</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>3</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        số lao động thường xuyên (18=19+20)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">18</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">

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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> </td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Lao động
                                                    trong HND tạo việc làm</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">20</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: Số lao động là
                                                    thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">21</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Người</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                <td
                                                    class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- LHHTX phi nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">LHHTX</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> 2</td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        số HND thành viên (05=07+08+09)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: số thành viên sử
                                                    dụng dịch vụ của LHHTX</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- LHHTX phi nông nghiệp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">08</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                <th scope="col" rowspan="2"
                                                    class="p-2 text-left font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" rowspan="2"
                                                    class="p-2 text-left font-semibold text-gray-900">Đơn vị tính</th>
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
                                                <td
                                                    class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
                                                    A</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">B</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">C</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">2</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">3</td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td
                                                    class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">
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
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>

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
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Khoản được cấp, hỗ trợ
                                                    không hoàn lại của nhà nước,<br> khoản được tặng, cho theo thỏa thuận là
                                                    tài sản không <br> chia</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Phần trích lại từ quỹ đầu
                                                    tư phát triển đưa vào <br> tài sản không chia</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Vốn, tài sản khác do điều
                                                    lệ quy định <br> là tài sản không chia</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>2</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        cộng tài sản </b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>3</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        cộng nguồn vốn (07=08+09) </b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Vốn chủ sở hữu </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>II.2</b> </td>
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
                                                    <b>1</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng vốn
                                                    điều lệ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tổng số thành viên góp vốn
                                                    điều lệ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Thành viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Mức vốn góp thấp nhất/thành
                                                    viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">12 </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">4</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Mức góp vốn cao nhất/thành
                                                    viên</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">13 </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> 2</td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng giá
                                                    trị cổ phần mua</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tổng vốn điều lệ của doanh
                                                    nghiệp trực thuộc</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">16</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                <th scope="col" rowspan="2"
                                                    class="p-2 text-left font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" rowspan="2"
                                                    class="p-2 text-left font-semibold text-gray-900">Đơn vị tính</th>
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
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>1.1</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Từ
                                                        HND cung ứng dịch vụ</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Trong đó: - Từ giao dịch với
                                                    thành viên1</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">1.2</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"><b>Từ HND tạo việc làm</b>
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">2</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"><b>Tổng lợi nhuận kế toán
                                                        trước thuế thu nhập doanh nghiệp </b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>3</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Lợi
                                                        nhuận sau nghĩa vụ tài chính (06=07+11)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>4</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        lợi nhuận trích lập các quỹ (07=08+09+10)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Quỹ Dự phòng tài chính
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ
                                                    khác</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>5</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        lợi nhuận chia cho thành viên (11=12+13+14)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo
                                                    vốn góp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Khác (ghi rõ):</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>6</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        quỹ lương </b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

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
                                                <th scope="col" rowspan="2"
                                                    class="p-2 text-left font-semibold text-gray-900">Mã chỉ tiêu</th>
                                                <th scope="col" rowspan="2"
                                                    class="p-2 text-left font-semibold text-gray-900">Đơn vị tính</th>
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
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 border border-gray-900 text-center">
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
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng số khách hàng đang vay vốn</b> </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">01</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b></b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Trong đó: tổng số thành viên đang vay vốn</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">02</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900">2</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tổng dư nợ cho vay</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">03</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"><b>Trong đó: dư nợ cho vay thành viên</b>
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">04</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">3</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"><b>Tổng lợi nhuận kế toán trước <br> thuế thu nhập doanh nghiệp </b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">05</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>4</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng lợi nhuận sau nghĩa vụ tài chính(06 = 07 + 11)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">06</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>5</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng lợi nhuận trích lập các quỹ <br> (07=08+09+10)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">07</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>


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
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Quỹ Dự phòng tài chính
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">09</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ
                                                    khác</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">10</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>6</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        lợi nhuận chia cho thành viên (11=12+13+14)</b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">11</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
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
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Chia cho thành viên theo
                                                    vốn góp</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">13</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>

                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">- Khác (ghi rõ):</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">14</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

                                            </tr>
                                            <tr class="divide-x divide-black">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">
                                                    <b>7</b></td>
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"><b>Tổng
                                                        quỹ lương </b></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">15</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900">Tr.đ</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 sm:pr-0 text-center">
                                                </td>
                                                <td class="whitespace-nowrap p-2 text-gray-900"></td>

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
                                                <th scope="col"
                                                    class="p-2 text-left font-semibold text-gray-900 text-center">Số lượng
                                                </th>
                                                <th scope="col"
                                                    class="p-2 text-left font-semibold text-gray-900 text-center">Kinh phí
                                                    <br> (tr. đồng)</th>
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
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">2. Hỗ trợ xúc
                                                    tiến thương mại, <br> mở rộng thị trường</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">02</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Lần</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">3. Hỗ trợ ứng
                                                    dụng công khoa học, <br> công kỹ thuật và công nghệ mới</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">02</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">4. Hỗ trợ tiếp
                                                    cận vốn và quỹ hỗ trợ <br> phát triển HND</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">04</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">5. Hỗ trợ tham
                                                    gia các chương trình mục tiêu, <br> chương trình phát triển KT- XH</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">05</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Lần</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">6. Hỗ trợ thành
                                                    lập mới</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">06</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
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
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>

                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">2. Hỗ trợ, ưu
                                                    đãi về giao đất, cho thuê đất</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
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
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">Trong đó: - Diện tích đất được giao</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">08</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Ha</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">- Diện tích đất được thuê</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">09</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Ha</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">- Tiền thuê đất được miễn, giảm</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">10</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">3. Ưu đãi về tín dụng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">Trong đó: - Số tiền được vay tổ chức tín dụng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">11</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">- Số tiền được hỗ trợ lãi suất vay</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">12</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">4. Hỗ trợ vốn,
                                                    giống khi gặp <br> khó khăn do thiên tai, dịch bệnh</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">13</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">5. Hỗ trợ chế
                                                    biến sản phẩm</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">14</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">Tr. đồng</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
                                                </td>
                                            </tr>
                                            <tr class="divide-x divide-gray-900">
                                                <td class="whitespace-nowrap p-2 font-medium text-gray-900 ">6. Khác (ghi cụ
                                                    thể)</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">15</td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                                <td class="whitespace-nowrap p-2 text-gray-900 text-center">
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
                                            </td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                            </td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                            </td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0 text-center">
                                            </td>

                                        </tr>

                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0"> Chủ tịch hội đồng quản trị (02=03+04+05)</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">02</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>

                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
                                                nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">03</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                                nông nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">04</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">05</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">2</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Giám đốc
                                                (06=07+08+09)</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">06</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
                                                nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">07</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                                nông nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">08</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">09</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">3</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Trưởng ban
                                                kiểm soát/ <br> kiểm soát viên (10=11+12+13)</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">10</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
                                                nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">11</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                                nông nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">12</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">13</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">4</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Kế toán
                                                trưởng (14=15+16+17)</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">14</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND nông
                                                nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">15</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- HND phi
                                                nông nghiệp</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">16</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center"></td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">- Quỹ tín dụng</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">17</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
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
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng số (18=19+20+21+22)</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">18</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">1</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Chủ tịch hội đồng quản trị</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">19</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">2</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Tổng Giám đốc</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">20</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">3</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Trưởng ban kiểm soát</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">21</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                        </tr>
                                        <tr class="divide-x divide-black">
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">4</td>
                                            <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0">Kế toán trưởng</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center">22</td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
                                            <td class="whitespace-nowrap p-2 text-gray-900 text-center sm:pr-0"></td>
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
                <!--footer-->
                <div class="col-span-12 text-center  md:block flex pt-4 justify-center">
                    <button @click="print()"
                        class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        In
                    </button>
                    <button @click="closemodal2()"
                        class=" items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">Hủy</button>
                </div>

            </div>
        </div>
        <!-- End phiếu tình hình hoạt động hội nông dân -->

        <div>
            <Datatable :datatb="datatb" namePaging="pagination" @pagination="pagination">
                <template>
                    <el-table-column label="STT" width="100" align="center">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.$index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Tên kỳ biến động" prop="tenKyBienDong" align="center">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.tenKyBienDong }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="270">
                    <template slot="header">
                        Chức năng
                        </template>
                        <template slot-scope="scope">
                        <el-tooltip class="item" effect="dark" content="Chỉnh sửa" placement="top-start">
                            <!-- <el-button size="mini" @click="doAlertEdit(scope.row)">
                                    <i class="el-icon-edit-outline text-lg"></i>
                                </el-button> -->

                                <!-- <router-link  :to="`xem-thong-tin?ky=${dataForm.kyBienDongId}&&donvi=${scope.row.id}`">
                                        <i class="el-icon-edit-outline text-lg"></i>
                                    </router-link> -->
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="Báo cáo tình hình của hoạt động hội nông dân năm"
                                placement="top-start">
                                <el-button size="mini" @click="doPrint(scope.row)">
                                    <i class="el-icon-printer text-lg"></i>
                                </el-button>
                            </el-tooltip>
                            <router-link to="/xem-phu-luc-17">
                                <el-tooltip class="item" effect="dark"
                                    content="Báo cáo tình hình của hoạt động hội nông dân năm" placement="top-start">
                                    <el-button size="mini">
                                        <i class="el-icon-s-promotion text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                            </router-link>

                        </template>
                    </el-table-column>
                </template>
            </Datatable>
        </div>
    </div>
</template>

<script>
// import router from './router';
import axios from 'axios'; ``
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
            rowId: "",
            statusForm: "",
            isActivemodal: true,
            isActivemodal2: true,
            listKy: [],
            listLoaiHinh: [],
            listMoHinh: [],
            listLinhVuc: [],
            TenDonVi: "",
            Masothue: "",
            LinhVucName: "",
            LoaiHinhName: "",
            MoHinhname: "",
            Donvi_id: localStorage.getItem("idDonVi"),
            listTrinhDoCanBoChuChot: [],
            listThanhVienLaoDong: {
                soLaoDongLaThanhVien: null,
                soThanhVienSuDungDichVu: null,
                tongSoLaoDong: null,
                tongSoThanhVien: null,
            },
            listTaiSan: {
                taiSan02: null,
                taiSan03: null,
                taiSan04: null,
                taiSan05: null,
                taiSan06: null,
                taiSan08: null,
                taiSan09: null,
            },
            listVonDieuLe: {
                tongVonDieuLe: null,
                tongThanhVienGop: null,
                thapNhat: null,
                caoNhat: null,
            },
            listHoatDongDauTu: {
                tongVonDieuLeDoanhNghiep: null,
                tongVonGop: null,
                tongCoPhan: null,
            },
            listKetQuaKinhDoanhHTX: {},
            listKetQuaKinhDoanhQTDND: {},
            listChinhSach: {
                chinhSach01: null,
                chinhSach02: null,
                chinhSach03: null,
                chinhSach04: null,
                chinhSach05: null,
                chinhSach06: null,
                chinhSach07: null,
                chinhSach08: null,
                chinhSach09: null,
                chinhSach10: null,
                chinhSach11: null,
                chinhSach12: null,
                chinhSach13: null,
                chinhSach14: null,
                chinhSach15: null,
            }
        };
    },
    mounted() {
        const self = this;
        axios.get("/LinhVucHoatDong")
            .then((res) => {
                self.listLinhVuc = res.data.data;
            });
        axios.get("/LoaiHinhKinhTe")
            .then((res) => {
                self.listLoaiHinh = res.data.data;
            });
        axios.get("/MoHinhHoatDong")
            .then((res) => {
                self.listMoHinh = res.data.data;
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
        openmodal() {
            this.isActivemodal = false;
        },
        closemodal() {
            this.isActivemodal = true;
            this.dataForm.errors().messages = {};
        },
        openmodal2() {
            this.isActivemodal2 = false;
        },
        closemodal2() {
            this.isActivemodal2 = true;
        },
        saveform() {
            this.dataForm.tenNganhNghe = "";
            this.statusForm = "insert";
            this.openmodal();
        },
        submitform() {
            if (this.dataForm.validate().errors().any()) {
                return;
            }
            const self = this;
            this.closemodal();
            if (this.statusForm == "insert") {
                axios.post(this.datatb.url, self.dataForm.data).then(function () {
                    self.thongbaothanhcong("Lưu thành công");
                    self.loadData();
                })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            }
            else {
                axios.post(self.datatb.url, {
                    id: self.rowId,
                    data: self.dataForm.data
                }).then(function () {
                    self.thongbaothanhcong("Sửa thành công");
                    self.loadData();
                })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            }
        },
        pagination(data) {
            // Gán lại giá trị paginatenow
            this.datatb.paginatenow = data;
            // Load lại bảng
            this.loadData();
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
            }
            else {
                window.location.href = "xem-thong-tin?ky=" + data.id + "&&donvi=" + this.Donvi_id;
            }
            // Sửa tình trạng form
        },
        doPrint(data) {
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
            const self = this;
            axios.get("/TrinhDoCanBoChuChot?KyBienDong=" + data.id + "&donViId=" + this.Donvi_id)
                .then((res) => {
                    self.listTrinhDoCanBoChuChot = res.data.data;
                });
            axios.get("/ThanhVienLaoDong?KyBienDong=" + data.id + "&donViId=" + this.Donvi_id)
                .then((res) => {
                    self.listThanhVienLaoDong.tongSoThanhVien = res.data.data[0].tongSoThanhVien;
                    self.listThanhVienLaoDong.soThanhVienSuDungDichVu = res.data.data[0].soThanhVienSuDungDichVu;
                    self.listThanhVienLaoDong.tongSoLaoDong = res.data.data[0].tongSoLaoDong;
                    self.listThanhVienLaoDong.soLaoDongLaThanhVien = res.data.data[0].soLaoDongLaThanhVien;
                });
            axios.get("/TaiSan?KyBienDong=" + data.id + "&donViId=" + this.Donvi_id)
                .then((res) => {
                    self.listTaiSan.taiSan02 = res.data.data[0].taiSan02;
                    self.listTaiSan.taiSan03 = res.data.data[0].taiSan03;
                    self.listTaiSan.taiSan04 = res.data.data[0].taiSan04;
                    self.listTaiSan.taiSan05 = res.data.data[0].taiSan05;
                    self.listTaiSan.taiSan06 = res.data.data[0].taiSan06;
                    self.listTaiSan.taiSan08 = res.data.data[0].taiSan08;
                    self.listTaiSan.taiSan09 = res.data.data[0].taiSan09;
                });
            axios.get("/VonDieuLe?KyBienDong=" + data.id + "&donViId=" + this.Donvi_id)
                .then((res) => {
                    self.listVonDieuLe.tongVonDieuLe = res.data.data[0].tongVonDieuLe;
                    self.listVonDieuLe.tongThanhVienGop = res.data.data[0].tongThanhVienGop;
                    self.listVonDieuLe.thapNhat = res.data.data[0].thapNhat;
                    self.listVonDieuLe.caoNhat = res.data.data[0].caoNhat;
                });
            axios.get("/HoatDongDauTu?KyBienDong=" + data.id + "&donViId=" + this.Donvi_id)
                .then((res) => {
                    self.listHoatDongDauTu.tongVonDieuLeDoanhNghiep = res.data.data[0].tongVonDieuLeDoanhNghiep;
                    self.listHoatDongDauTu.tongVonGop = res.data.data[0].tongVonGop;
                    self.listHoatDongDauTu.tongCoPhan = res.data.data[0].tongCoPhan;
                });
            if (data.loaiHinhID == 1 || data.loaiHinhID == 3) {
                axios.get("/KetQuaKinhDoanhHTX?donViId=" + this.Donvi_id + "&KyBienDong=" + data.id)
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
                        self.dataFormKetQuaKinhDoanhHTX.data.kyBienDongId = res.data.data[0].kyBienDongId;
                        self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan04 = self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan05 + self.dataFormKetQuaKinhDoanhHTX.data.TongLoinhuan09;
                        self.dataFormKetQuaKinhDoanhHTX.data.donViId = res.data.data[0].donViId;
                        self.statusForm = "update";
                    });
            }
            else {
                axios.get("/KetQuaKinhDoanhQTDND?donViId=" + this.Donvi_id + "&KyBienDong=" + data.id)
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
                        self.dataFormKetQuaKinhDoanhQTDND.data.tongQuyLuong = res.data.data[0].tongQuyLuong;
                        self.dataFormKetQuaKinhDoanhQTDND.data.kyBienDongId = res.data.data[0].kyBienDongId;
                        self.dataFormKetQuaKinhDoanhQTDND.data.donViId = res.data.data[0].donViId;
                        self.statusForm = "update";
                    });
            }
            axios.get("/ChinhSach?donViId=" + this.Donvi_id + "&KyBienDong=" + data.id)
                .then((res) => {
                    self.listChinhSach.chinhSach01 = res.data.data[0].chinhSach01;
                    self.listChinhSach.chinhSach02 = res.data.data[0].chinhSach02;
                    self.listChinhSach.chinhSach03 = res.data.data[0].chinhSach03;
                    self.listChinhSach.chinhSach04 = res.data.data[0].chinhSach04;
                    self.listChinhSach.chinhSach05 = res.data.data[0].chinhSach05;
                    self.listChinhSach.chinhSach06 = res.data.data[0].chinhSach06;
                    self.listChinhSach.chinhSach07 = res.data.data[0].chinhSach07;
                    self.listChinhSach.chinhSach08 = res.data.data[0].chinhSach08;
                    self.listChinhSach.chinhSach09 = res.data.data[0].chinhSach09;
                    self.listChinhSach.chinhSach10 = res.data.data[0].chinhSach10;
                    self.listChinhSach.chinhSach11 = res.data.data[0].chinhSach11;
                    self.listChinhSach.chinhSach12 = res.data.data[0].chinhSach12;
                    self.listChinhSach.chinhSach13 = res.data.data[0].chinhSach13;
                    self.listChinhSach.chinhSach14 = res.data.data[0].chinhSach14;
                    self.listChinhSach.chinhSach15 = res.data.data[0].chinhSach15;
                });
            this.openmodal2();
        },
        thongbaothatbai(text) {
            this.$notify.error({
                title: "Error",
                message: text
            });
        },
        doAlertDelete(data) {
            const self = this;
            this.$confirm("Thao tác này không thể quay lại, bạn chắc chắn tiếp tục?", "Cảnh báo", {
                confirmButtonText: "Vâng, xóa nó!",
                cancelButtonText: "Không xóa!",
                type: "warning",
                center: true
            }).then(() => {
                axios.delete(self.datatb.url + "?id=" + data.id)
                    .then(function (response) {
                        self.loadData();
                        console.log(response.data[0]);
                        if (response.data[0] == "true") {
                            self.$message({
                                type: "success",
                                message: "Xóa thành công"
                            });
                        }
                        else {
                            self.thongbaothatbai(response.data[1]);
                        }
                    })
                    .catch(function (error) {
                        // Thông báo xóa thất bại
                        self.thongbaothatbai(error);
                    });
                // this.$message({
                //     type: 'success',
                //     message: 'Xóa thành công'
                // });
            }).catch(() => {
                this.$message({
                    type: "info",
                    message: "Đã hủy xóa"
                });
            });
        },
    },
}
</script>
