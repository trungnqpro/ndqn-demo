<template>
<div>
     <button @click="print()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    In
                </button>
    <div id="printMe" class="w-full grid grid-cols-12 pb-4">
 
        <div class="col-span-12 text-base text-center ">

            <h3>
                DANH MỤC CÁC TIÊU CHÍ VÀ MỨC ĐIỂM ĐÁNH GIÁ <br>
                (Ban hành kèm theo Thông tư số 01/2020/TT-BKHĐT ngày 19 tháng 02 năm 2020 của Bộ trưởng Bộ  Kế hoạch và Đầu tư)
            </h3>
        </div>
        <div class="col-span-12 text-base leading-normal pb-4">
            <!-- Thông tin chung -->

            <div class="mx-4 py-6">
                <div class="col-span-12  ring-1 ring-black ">
                    <div class="inline-block w-full  align-middle ">
                        <table class=" divide-y divide-black w-full">
                            <thead>
                                <tr class="divide-x  divide-black">
                                    <th scope="col" class="p-2 text-left font-semibold text-gray-900 sm:pl-0 ">Nhóm tiêu chí, tên tiêu <br> chí</th>
                                    <th scope="col" class="p-2 text-left font-semibold text-gray-900">Điểm tối đa</th>
                                    <th scope="col" class="p-2 text-left font-semibold text-gray-900 w-3/5">Mức xếp loại - Cách xác định</th>
                                    <th scope="col" class="p-2 text-left font-semibold text-gray-900">Ghi chú</th>
                                </tr>

                            </thead>
                            <tbody class="divide-y divide-black bg-white">
                                <tr class="divide-x divide-black">
                                    <td colspan="4" class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left"><b>II. Nhóm tiêu chí về tài chính (tối đa 30 điểm)</b></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 1: Vốn của hợp <br> tác xã</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">7</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left w-3/5">
                                        a) Tổng nguồn vốn bình quân của hội nông dân
                                        <br> (Toàn bộ nguồn vốn của hội nông dân được
                                        <br> hình thành từ nguồn vốn chủ sở hữu và các
                                        <br> khoản nợ phải trả của hội nông dân):
                                        <br> - Dưới 100 triệu đồng: 0 điểm
                                        <br> - Từ 100 triệu đến dưới 500 triệu đồng: 1 điểm
                                        <br> - Từ 500 triệu đồng đến dưới 1 tỷ đồng: 2 điểm
                                        <br> - Từ 1 tỷ đồng đến dưới 5 tỷ đồng: 3 điểm
                                        <br> - Từ 5 tỷ đồng đến dưới 10 tỷ đồng: 4 điểm
                                        <br> - Từ 10 tỷ đồng đến dưới 50 tỷ đồng: 5 điểm
                                        <br> - Từ 50 tỷ đồng trở lên: 6
                                        <br>b) Tổng nguồn vốn của hội nông dân tăng so
                                        <br> với năm trước: Cộng 1 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 2: Tài sản của
                                        <br> hội nông dân</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">6</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Tổng tài sản không chia (bình quân) <br>
                                         của hội nông dân
                                        <br> - Không có tài sản không chia: 0 điểm
                                        <br> - Tài sản không chia dưới 100 triệu đồng: 1
                                        <br> điểm;
                                        <br> - Tài sản không chia từ 100 triệu đồng đến
                                        <br> dưới 500 triệu đồng: 2 điểm;
                                        <br> - Tài sản không chia từ 500 triệu đến dưới 1
                                        <br> tỷ đồng: 3 điểm;
                                        <br> - Từ 1 tỷ đồng đến dưới 2 tỷ đồng: 4 điểm;
                                        <br> - Từ 2 tỷ đồng trở lên: 5 điểm.
                                        <br> b) Tổng tài sản không chia tăng so với năm
                                        <br> trước: Cộng 1 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <th rowspan="3" class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 3: Kết quả sản
                                        <br> xuất kinh doanh trong năm
                                        <br> của hội nông dân</th>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">4</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Tổng doanh thu bán hàng và cung cấp <br> dịch vụ của năm
                                        <br>
                                        - Dưới 100 triệu đồng: 0 điểm;
                                        <br>
                                        - Từ 100 triệu đồng đến dưới 1 tỷ đồng: 1 điểm
                                        <br>
                                        - Từ 1 tỷ đồng đến dưới 5 tỷ đồng: 2 điểm
                                        <br>
                                        - Từ 5 tỷ đồng đến dưới 10 tỷ đồng: 3 điểm
                                        <br>
                                        - Từ 10 tỷ đồng trở lên: 4 điểm
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">

                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center border-l border-black">3</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        b) Tỷ lệ cung ứng, tiêu thụ sản phẩm,
                                        <br> dịch vụ, việc làm cho thành viên:
                                        <br> Xác định bằng tỷ lệ giữa giá trị sản phẩm,
                                        <br> dịch vụ HND giao dịch với thành viên
                                        <br> (hoặc tiền lương HND trả cho thành viên)/
                                        <br> Tổng giá trị sản phẩm, dịch vụ HND
                                        <br> cung ứng (hoặc tổng tiền lương của HND
                                        <br> chi trả cho người tất cả người lao động):
                                        <br> b1. Đối với HND cung ứng sản phẩm, dịch vụ
                                        <br> - Dưới 50%: 0 điểm
                                        <br> - Từ 50% đến dưới 60%: 1 điểm
                                        <br> - Từ 60% đến dưới 70 %: 2 điểm
                                        <br> - Từ 70% đến dưới 100%: 3 điểm
                                        <br> b2. Đối với HND tạo việc làm:
                                        <br> - Dưới 30%: 0 điểm
                                        <br> - Từ 30% đến dưới 40%: 1 điểm
                                        <br> - Từ 40% đến dưới 50 %: 2 điểm
                                        <br> - Từ 50% đến dưới 100%: 3 điểm
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">

                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center border-l border-black">4</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        c) Lợi nhuận (thu nhập) trước thuế của năm
                                        <br>
                                        - Lỗ hoặc không có lợi nhuận: 0 điểm
                                        <br>
                                        - Dưới 200 triệu đồng: 1 điểm
                                        <br>
                                        - Từ 200 triệu đồng đến dưới 500 triệu: 2 điểm
                                        <br>
                                        - Từ 500 triệu đồng đến dưới 1 tỷ đồng: 3 điểm
                                        <br>
                                        - Từ 1 tỷ đồng trở lên: 4 điểm
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 4: Trích lập các <br> Quỹ của hội nông dân</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">6</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Tỷ lệ trích lập Quỹ đầu tư phát triển/ <br> tổng thu nhập (Lợi nhuận sau thuế):
                                        <br> - Không trích hoặc trích dưới 20%: Trừ 1 điểm;
                                        <br> - Từ 20% đến dưới 25%: 1 điểm
                                        <br> - Từ 25% trở lên: 2 điểm
                                        <br> b) Tỷ lệ trích lập Quỹ Dự phòng/ <br> tổng thu nhập (Lợi nhuận sau thuế):
                                        <br> - Không trích hoặc trích dưới 5%: Trừ 1 điểm;
                                        <br> - Từ 5% đến dưới 10%: 1 điểm
                                        <br> - Từ 10% trở lên: 2 điểm
                                        <br> c) Có trích lập các Quỹ khác <br> (Quỹ khen thưởng, phúc lợi,…)/ <br> tổng thu nhập (lợi nhuận sau thuế): 2 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td colspan="4" class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left"><b>II. Nhóm tiêu chí về quản trị, điều hành, năng lực của hội nông dân (tối đa 30 điểm)</b></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 5: Chấp hành <br> pháp luật trong tổ chức, <br> hoạt động của hội nông dân</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">8</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Chấp hành pháp luật trong tổ chức, hoạt
                                        <br> động của hội nông dân được 3 điểm, trường
                                        <br> hợp hội nông dân vi phạm và chưa có biện
                                        <br> pháp khắc phục bị trừ 1 điểm cho mỗi vi
                                        <br> phạm (trừ tối đa 3 điểm).
                                        <br>b) Chấp hành pháp luật trong thành lập và đăng
                                        <br> ký hội nông dân được 3 điểm, trường
                                        <br> hợp hội nông dân vi phạm và chưa có biện
                                        <br> pháp khắc phục bị trừ 1 điểm cho mỗi
                                        <br> vi phạm (trừ tối đa 3 điểm).
                                        <br> c) Chấp hành các quy định pháp luật khác
                                        <br> được 2 điểm, trường hợp vi
                                        <br> phạm, mỗi vi phạm trừ 1 điểm (trừ tối đa 2 điểm).
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 6: Giải quyết các <br> tranh chấp, khiếu nại</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">6</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Giải quyết đầy đủ, kịp thời khiếu nại, tố
                                        <br> cáo trong hội nông dân được 3 điểm, mỗi vụ
                                        <br> việc còn tồn đọng bị trừ 1 điểm (trừ tối đa 3
                                        <br> điểm).
                                        <br> b) Giải quyết đầy đủ tranh chấp, khiếu nại,
                                        <br>tố cáo bên ngoài hội nông dân được 3 điểm,
                                        <br> mỗi vụ việc còn tồn đọng bị trừ 1 điểm
                                        <br> (trừ tối đa 3 điểm).
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 7: Trình độ cán <br> bộ quản lý điều hành <br> (thành viên hội đồng <br> quản trị, Ban kiểm soát, <br> Giám đốc, Phó giám đốc).</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">6</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Tỷ lệ cán bộ quản lý HND qua đào tạo từ
                                        <br> đại học, cao đẳng trở lên trên tổng số cán bộ
                                        <br> quản lý HND:
                                        <br> - Từ 30% đến dưới 50%: 1 điểm;
                                        <br> - Từ 50% trở lên: 2 điểm;
                                        <br> b) Tỷ lệ cán bộ quản lý HND qua đào tạo sơ <br>
                                        cấp, trung cấp trở lên trên tổng số cán bộ
                                        <br> quản lý HND chiếm:
                                        <br> - Từ 30% đến dưới 50%: 1 điểm
                                        <br> - Từ 50% trở lên: 2 điểm
                                        <br> c) Tỷ lệ cán bộ HND trẻ (từ dưới 40 tuổi) <br>
                                        trên tổng số cán bộ quản lý HND:
                                        <br> - Từ 10% đến dưới 30%: 1 điểm
                                        <br> - Từ 30% trở lên: 2 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 8: Chế độ, chính <br>
                                        sách cho thành viên <br>
                                        và người lao động. Hợp tác <br>
                                        xã thực hiện tốt các chế <br>
                                        độ lương, BHXH, BHYT, <br>
                                        BHTN cho người lao động <br>
                                        và bộ máy quản trị, điều <br>
                                        hành của HND, đảm bảo <br>
                                        an ninh, an toàn lao động.</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">6</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        - Hội nông dân không có nợ lương trái quy <br>
                                        định được 2 điểm. Mỗi trường hợp nợ <br>
                                        lương trái quy định trừ 0,5 điểm (trừ tối đa <br>
                                        2 điểm).
                                        - Hội nông dân thực hiện đầy đủ chế độ phụ <br>
                                        cấp cho hội đồng quản trị, ban kiểm soát <br>
                                        theo quy định của điều lệ được 2 điểm. Mỗi <br>
                                        vi phạm trừ 1 điểm (trừ tối đa 2 điểm). <br>

                                        - Hội nông dân thực hiện đầy đủ chính sách về <br>
                                        BHYT, BHXH, BHTN cho người lao động <br>
                                        được 2 điểm, mỗi vi phạm trừ 0,5 điểm (trừ <br>
                                        tối đa 2 điểm).
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 9: Mức độ áp <br>
                                        dụng tiến bộ khoa học kỹ <br>
                                        thuật, xây dựng thương <br>
                                        hiệu, chuỗi giá trị
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">4</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        Hội nông dân được cộng 0,5 điểm cho mỗi nội <br>
                                        dung sau đây (cộng tối đa 4 điểm): <br>

                                        - Hội nông dân có website, tham gia thương <br>
                                        mại điện tử hoặc có giao dịch trên các diễn <br>
                                        đàn, mạng xã hội (facebook, zalo, <br>
                                        instagram,…);
                                        <br>- HND có nhãn hiệu sản phẩm, hàng hóa;
                                        <br> - Hội nông dân có nhận dạng, thương hiệu riêng;
                                        <br> - Hội nông dân có đầu tư máy móc, cơ giới áp <br>
                                        dụng vào sản xuất kinh doanh, chế biến;
                                        <br> - Hội nông dân xây dựng sản phẩm chủ lực gắn <br>
                                        với chuỗi giá trị hoặc có tham gia vào liên <br>
                                        hiệp hội nông dân, tham gia mạng lưới liên kết <br>
                                        với các hội nông dân khác;<br>
                                        - HND có văn bằng sáng chế, quyền sở
                                        <br> hữu đối với giống cây trồng mới do HND chọn
                                        <br> tạo hoặc phát hiện và phát triển hoặc được <br>
                                        hưởng quyền sở hữu;
                                        <br> - HND nông nghiệp có tổ chức quy trình sản <br>
                                        xuất thực hành nông nghiệp sạch – GAP, <br>
                                        hữu cơ cho thành viên;
                                        <br> - Hội nông dân thực hiện chứng nhận truy xuất <br>
                                        nguồn gốc;
                                        <br> - Hội nông dân áp dụng các tiến bộ, khoa học <br>
                                        kỹ thuật khác.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td colspan="4" class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left"><b>III. Nhóm tiêu chí về thành viên, lợi ích thành viên, cộng đồng (Tối đa 40 điểm)</b></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 10: Mức độ tham <br>
                                        gia của thành viên đối với <br>
                                        hội nông dân: Tổng số thành <br>
                                        viên HND (4 điểm); Tỷ lệ <br>
                                        thành viên tham gia mới <br>
                                        (3 điểm); Tỷ lệ thành <br>
                                        viên tham gia Đại hội <br>
                                        thành viên (3); Tỷ lệ <br>
                                        thành viên sử dụng dịch <br>
                                        vụ (3 điểm)
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">14</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Tổng số thành viên hội nông dân <br>
                                        - Hội nông dân có từ 100 thành viên trở xuống: <br>
                                        1 điểm <br>
                                        - Hội nông dân có từ 101 đến 300 thành viên: 2 <br>
                                        điểm <br>
                                        
                                        - Hội nông dân có từ 301 đến 1000 thành viên: <br>
                                        3 điểm <br>
                                        
                                        - Hội nông dân có từ trên 1000 thành viên: 4 <br> điểm
                                        Lưu ý: <br>
                                        + Trường hợp hội nông dân tạo việc làm được <br>
                                        cộng thêm 2 điểm cho tiêu chí này và tổng <br>
                                        điểm tối đa không vượt quá 4 điểm. <br>

                                        + Đối với hội nông dân (liên hiệp hội nông dân) có <br>
                                        thành viên là hội nông dân thì được cộng thêm <br>
                                        số lượng thành viên của HND thành viên khi <br>
                                        xác định tiêu chí này. Ví dụ: Liên hiệp Hợp tác <br>
                                        xã A có 4 thành viên là các HND B,C,D,E với số <br>
                                        lượng thành viên tương ứng là 10,20,30,40 <br>
                                        thì Tổng số thành viên của HND A được xác <br>
                                        định để cho điểm sẽ là 100 (10+20+30+40) <br>
                                        thành viên, tương ứng với 3 điểm. <br>
                                        b) Tỷ lệ thành viên tham gia mới: Xác định <br>
                                        bằng tỷ lệ giữa số thành viên mới/ Tổng số <br>
                                        thành viên hội nông dân <br>
                                        <br> - Không có thành viên mới gia nhập: 0 điểm;
                                        <br> - Tỷ lệ thành viên mới gia nhập dưới 10%: 1 <br> điểm;
                                        <br> - Đạt từ 10% đến dưới 20%: 2 điểm;
                                        <br> - Đạt từ 20% trở lên: 3 điểm. <br>
                                        c) Tỷ lệ thành viên tham gia đại hội thành <br>
                                        viên: Xác định bằng tỷ lệ giữa tổng số thành <br>
                                        viên tham gia đại hội/ Tổng số thành viên <br>
                                        đủ tư cách tham dự hội nghị <br>
                                        <br> - Đạt dưới 50%: 0 điểm;
                                        <br> - Đạt từ 50% đến dưới 70%: 1 điểm;
                                        <br> - Đạt từ 70% đến dưới 90%: 2 điểm;
                                        <br> - Đạt từ 90% đến 100%: 3 điểm;
                                        <br> d) Tỷ lệ thành viên sử dụng dịch vụ: Xác <br>
                                        định bằng tỷ lệ giữa tổng số lượng thành <br>
                                        viên có sử dụng dịch vụ / Tổng số thành <br>
                                        viên của hội nông dân. <br>
                                        <br> - Đạt dưới 40%: 0 điểm;
                                        <br> - Đạt từ 40% đến dưới 50%: 1 điểm;
                                        <br> - Đạt từ 50% đến dưới 60%: 2 điểm;
                                        <br> - Đạt từ 60% đến dưới 80%: 3 điểm;
                                        <br> - Đạt từ 80% đến 100%: 4 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td rowspan="2" class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 11: Lợi ích thành <br>
                                        viên
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">6</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Hội nông dân có giá ưu đãi cho thành viên <br>
                                        so với khách hàng không phải thành viên: <br>
                                        <br> - Không có giá ưu đãi: 0 điểm
                                        <br> - Có giá ưu đãi thấp hơn dưới 3%: 1 điểm;
                                        <br> - Có giá ưu đãi thấp hơn từ 3 đến dưới 5%: <br> 2 điểm
                                        <br> - Giá ưu đãi thấp hơn từ 5 đến dưới 10%: 3 <br>
                                        điểm
                                        <br> - Giá ưu đãi thấp hơn từ 10% trở lên: 4 <br>
                                        điểm.
                                        b) Tỷ lệ chia lãi theo mức độ sử dụng dịch <br>
                                        vụ: Được xác định bằng tỷ lệ giữa lợi nhuận <br>
                                        phân phối theo mức độ sử dụng/ Tổng số <br>
                                        lợi nhuận phân phối. <br>
                                        <br> - Từ 50% trở xuống: 0 điểm;
                                        <br> - Từ trên 50% đến 70%: 2 điểm;
                                        <br> - Từ trên 70% đến 90%: 3 điểm;
                                        <br> - Từ trên 90% trở lên: 4 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left">
                                        Tổng <br>
                                        điểm <br>
                                        trên 6 <br>
                                        thì <br> tính <br> là 6 <br> điểm
                                    </td>

                                </tr>
                                <tr class="divide-x divide-black">

                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center border-l  border-black">4</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        c) Tỷ lệ tăng thu nhập bình quân của thành <br>
                                        viên hội nông dân so với năm trước: <br>

                                        <br> - Không tăng hoặc giảm so với năm trước: 0 <br>
                                        điểm;
                                        <br> - Tăng dưới 5% so với năm trước: 2 điểm;
                                        <br> - Tăng từ 5% đến dưới 10% so với năm <br>
                                        trước: 3 điểm;
                                        <br> - Tăng từ 10% trở lên so với năm trước: 4 <br>
                                        điểm
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 12: Sản phẩm, <br> dịch vụ hội nông dân cung <br> ứng
                                        cho thành viên
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">7</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        a) Số lượng dịch vụ hội nông dân cung ứng cho <br>
                                        thành viên: <br>
                                        <br> - Hội nông dân cung cấp 1 dịch vụ cho thành <br>
                                        viên: 1 điểm
                                        <br> - Hội nông dân cung cấp từ 2 đến 3 dịch vụ cho <br>
                                        thành viên: 2 điểm;
                                        <br> - Hội nông dân cung từ 4 dịch vụ trở lên cho <br>
                                        thành viên: 3 điểm b) Chất lượng dịch vụ <br> cung ứng cho thành viên:
                                        <br> - Chất lượng dịch vụ trung bình: 1 điểm;
                                        <br> - Chất lượng dịch vụ khá: 2 điểm;
                                        <br> - Chất lượng dịch vụ tốt: 3 điểm;
                                        <br> - Chất lượng dịch vụ rất tốt: 4 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left">

                                    </td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 13: Sản phẩm, <br> dịch vụ hội nông dân cung <br> ứng
                                        cho thành viên
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">4</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        Tỷ lệ số thành viên HND được thông tin, <br>
                                        tuyên truyền, bồi dưỡng trong năm trên <br>
                                        tổng số thành viên HND: <br>
                                        <br> - Dưới 10%: 0 điểm;
                                        <br> - Từ 10% đến dưới 20%: 1 điểm;
                                        <br> - Từ 20% đến dưới 40%: 2 điểm;
                                        <br> - Từ 40% đến dưới 60%: 3 điểm;
                                        <br> - Từ 60% trở lên: 4 điểm. <br>

                                        Hội nông dân thông tin đầy đủ, kịp thời, chính <br> xác về hoạt động sản xuất, kinh doanh, tài <br>
                                        chính, phân phối thu nhập và những nội <br>
                                        dung khác theo quy định của Điều lệ cho <br>
                                        thành viên của hội nông dân, mỗi vi phạm <br>
                                        bị trừ 1 điểm.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left">

                                    </td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 14: Mức độ ảnh <br>
                                        hưởng tích cực đến cộng <br>
                                        đồng: Tích cực tham gia<br> hoặc
                                        có đóng góp cho các <br>
                                        hoạt động cộng đồng <br>
                                        trong khu vực
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">3</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        Hội nông dân được cộng 1 điểm cho mỗi nội <br>
                                        dung sau đây (cộng tối đa 3 điểm): <br>
                                        <br> - Hội nông dân có tổ chức đảng, đoàn thể;
                                        <br> - Có đóng góp hoặc tổ chức các hoạt động <br>
                                        từ thiện;
                                        <br> - Hoạt động của hội nông dân thân thiện và góp <br>
                                        phần bảo vệ môi trường;
                                        <br> - HND có tổ chức lực lượng tự quản về an <br>
                                        ninh; tham gia lực lượng dân quân tự vệ;
                                        <br> - Trang bị, huấn luyện (diễn tập) phòng <br>
                                        cháy, chữa cháy, ứng phó sự cố thiên tai, tìm <br>
                                        kiếm cứu nạn…;
                                        <br> - Các hoạt động khác được cộng đồng công <br>
                                        nhận.
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left">

                                    </td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left">Tiêu chí 15: Hội nông dân <br>
                                        được khen thưởng trong <br>
                                        năm. <br>

                                        (Chỉ tính theo cấp khen <br>
                                        thưởng cao nhất)
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-center ">2</td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left ">
                                        <br> - Hội nông dân có khen thưởng từ cấp tỉnh trở <br>
                                        lên: 2 điểm
                                        <br> - Hội nông dân có khen thưởng cấp quận, <br>
                                        huyện: 1 điểm
                                    </td>
                                    <td class="whitespace-nowrap p-2 text-gray-900 text-left">

                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- end thông tin chung -->
        </div>
    </div>
</div>
</template>

<script>
// import axios from 'axios';
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
                    tenDonVi: '',
                    maSo: '',
                    namThanhLap: '',
                    diaChi: '',
                    daiDienPhapLuat: '',
                    dienThoai: '',
                    nganhNgheID: null,
                    linhVucID: null,
                    moHinhID: null,
                    loaiHinhID: null,
                    sanPhamTieuBieuID: null,
                    diaBanId: null,
                })
                .rules({

                    diaBanId: 'required',
                })
                .messages({
                    'diaBanId.required': 'Trường bắt buộc nhập',

                }),
            rowId: '',
            statusForm: '',
            isActivemodal: true,

            role: parseInt(localStorage.getItem("role")),
        }
    },
    mounted() {

        // const self = this;

    },
    watch: {

    },
    methods: {
        print() {
            // Pass the element id here
            this.$htmlToPaper('printMe');
        },
        thongbaothanhcong(text) {
            this.$notify({
                title: 'Success',
                message: text,
                type: 'success'
            });
        },

        thongbaothatbai(text) {
            this.$notify.error({
                title: 'Error',
                message: text
            });

        },

    },
}
</script>
