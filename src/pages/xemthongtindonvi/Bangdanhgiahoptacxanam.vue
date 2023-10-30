<template>
<div>
    <button @click="print()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        In
    </button>
    <div id="printMe" class="w-full grid grid-cols-12 pb-4">

        <div class="col-span-12 text-base text-center ">

            <h3>
                <b>
                    BẢNG ĐÁNH GIÁ HỢP TÁC XÃ NĂM
                </b>
            </h3>
        </div>
        <div class="col-span-12 text-base leading-normal pb-4">

            <span>Tên hội nông dân: {{InfoDonvi.tenDonVi}}</span>
            <br>
            <span>
                Địa chỉ: {{InfoDonvi.diaChi}}
            </span>
            <br>
            <span class="w-1/2">
                Điện thoại: {{InfoDonvi.dienThoai}}
            </span>
            <span class="px-2">
                Email: {{InfoDonvi.email}}
            </span>
            <br>
            <span>
                Số giấy chứng nhận đăng ký kinh doanh: {{InfoDonvi.maSo}}
            </span>
            <br>
            <span>
                Phân loại theo ngành nghề: {{InfoDonvi.tenNganhNghe}}
            </span>
            <br>
            <span>
                Sản phẩm, DV cung ứng cho thành viên: {{InfoDonvi.tenSanPhamDichVu}}
            </span>
            <br>
            <span>
                Phân loại theo quy mô thành viên: {{InfoDonvi.tenquyMoThanhVien}}
            </span>
            <br>
            <span>
                Phân loại theo quy mô tổng nguồn vốn: {{InfoDonvi.tenQuyMoTongNguonVon}}
            </span>
            <div class="py-6">
                <div class="col-span-12  ring-1 ring-black ">
                    <div class="inline-block min-w-full  align-middle ">
                        <table class=" divide-y divide-black min-w-full">
                            <thead>
                                <tr class="divide-x  divide-black">
                                    <th scope="col" class="p-2 text-center font-semibold text-gray-900 sm:pl-0 ">Số TT</th>
                                    <th scope="col" class="p-2 text-center font-semibold text-gray-900 w-3/5">Tiêu chí đánh giá</th>
                                    <th scope="col" class="p-2 text-center font-semibold text-gray-900 ">Thang điểm tối đa</th>
                                    <th scope="col" class="p-2 text-center font-semibold text-gray-900">Giá trị</th>
                                    <th scope="col" class="p-2 text-center font-semibold text-gray-900">Điểm hội nông dân tự chấm</th>
                                    <th scope="col" class="p-2 text-center font-semibold text-gray-900">Ghi chú</th>
                                </tr>

                            </thead>
                            <tbody class="divide-y divide-black bg-white">
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>I</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5"><b>Nhóm tiêu chí về tài chính</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>30</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b></b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>{{Diemdanhgia.nhomTieuChiTaiChinh }}</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b></b></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>1</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 1: Vốn của hội nông dân;</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">7</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi01}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi01 }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) Tổng nguồn vốn bình quân của HND</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">6</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi01a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi01a }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Tổng nguồn vốn của HND tăng so với năm trước</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">1</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi01b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi01b }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>2</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 2: Tài sản của hội nông dân</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">6</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi02 }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) Tổng tài sản không chia bình quân</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">5</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi02a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi02a }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Tổng tài sản không chia tăng so với năm trước</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">1</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi02b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi02b }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>3</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 3: Kết quả sản xuất kinh doanh trong năm <br> của hội nông dân;</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">11</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi03 }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) Tổng doanh thu bán hàng và cung cấp dịch vụ</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi03a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi03a }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Tỷ lệ cung ứng sản phẩm, dịch vụ cho thành viên</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi03b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi03b }}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">c) Lợi nhuận (thu nhập) trước thuế</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi03c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi03c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>4</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 4: Trích lập các Quỹ của hội nông dân</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">6</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi04}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) Tỷ lệ trích lập Quỹ đầu tư phát triển</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi04a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi04a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Tỷ lệ trích lập Quỹ Dự phòng</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi04b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi04b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">c) Tỷ lệ trích lập các Quỹ khác</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi04c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi04c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>II</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5"><b>Nhóm tiêu chí về quản trị, điều hành, năng lực của <br> hội nông dân</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>30</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>{{Diemdanhgia.nhomTieuChiQuanTriVaDieuHanh}}</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b></b></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>5</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 5: Chấp hành pháp luật trong hoạt động của <br> hội nông dân</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">8</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi05}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi05}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>6</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 6: Giải quyết các tranh chấp, khiếu nại</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">6</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi06}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi06}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>7</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 7: Trình độ cán bộ quản lý điều hành.</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">6</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi07}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) Tỷ lệ cán bộ quản lý HND qua đào tạo ĐH, CĐ trở lên</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi07a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi07a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Tỷ lệ cán bộ quản lý HND qua đào tạo sơ cấp, trung <br> cấp</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi07b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi07b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">c) Tỷ lệ cán bộ trẻ</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi07c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi07c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>8</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 8: Thực hiện các chế độ, chính sách cho <br> thành viên và người lao động</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">6</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi08}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi08}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>9</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 9: Mức độ áp dụng tiến bộ khoa học kỹ <br> thuật, xây dựng thương hiệu, chuỗi giá trị</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi09}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi09}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>III</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5"><b>Nhóm tiêu chí về thành viên, lợi ích thành viên, <br> cộng đồng và tiêu chí khác</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>40</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b></b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>{{Diemdanhgia.nhomTieuChiVeThanhVien}}</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b></b></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>10</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 10: Mức độ tham gia của thành viên đối với <br> hội nông dân;</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">14</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi10}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) Tổng số thành viên HND</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi10a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi10a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Tỷ lệ thành viên tham gia mới</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi10b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi10b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">c) Tỷ lệ thành viên tham gia đại hội thành viên</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi10c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi10c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">d) Tỷ lệ thành viên sử dụng dịch vụ</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi10d}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi10d}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>11</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 11: Lợi ích thành viên;</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">10</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi11}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) HND có giá ưu đãi cho thành viên</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi11a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi11a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Tỷ lệ chia lãi theo mức độ sử dụng dịch vụ</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi11b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi11b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">c) Thu nhập thành viên tăng so năm trước</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi11c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi11c}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>12</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 12: Sản phẩm, dịch vụ hội nông dân cung ứng <br> cho thành viên</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">7</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi12}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">a) Số lượng dịch vụ cung ứng</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi12a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi12a}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">b) Chất lượng dịch vụ</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi12b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi12b}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>

                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>13</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 13: Công tác thông tin, truyền thông, đào tạo <br> bồi dưỡng</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">4</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi13}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi13}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>14</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 14: Mức độ ảnh hưởng tích cực đến cộng <br> đồng</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">3</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi14}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi14}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>15</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5">- Tiêu chí 15: Hội nông dân được khen thưởng trong <br> năm.</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">2</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.giaTriTieuChi15}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tieuChi15}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                                <tr class="divide-x divide-black">
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>16</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-left w-3/5"><b>Tổng điểm</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"><b>100</b></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center">{{Diemdanhgia.tongDiem}}</td>
                                    <td class="whitespace-nowrap p-2 font-medium text-gray-900 sm:pl-0 text-center"></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-span-12  p-2">
                    <span>
                        <b>Hướng dẫn:</b>Hội nông dân căn cứ các tiêu chí và mức đánh giá hướng dẫn tại phụ lục 1 để tự đánh giá và điền kết quá đánh giá từng tiêu chí tại cột “Điểm hội nông dân đánh giá” và diễn giải thêm (nếu có) ở cột “Ghi chú”.
                    </span>
                    <span>
                        KẾT QUẢ XẾP LOẠI HỢP TÁC XÃ năm……: ……………………
                    </span>
                </div>
                <div class="col-span-12 flex justify-around text-base mt-4">
                    <div class="text-center">
                        <i class="p-2">

                        </i>
                        <p class="font-semibold">

                            BAN KIỂM SOÁT KIỂM TRA

                        </p>
                        <span>(ký, ghi rõ họ tên)</span>
                    </div>
                    <div class="text-center">
                        <i>
                            ....., ngày.... tháng ....năm ....
                        </i>
                        <p class="font-semibold">HỘI ĐỒNG QUẢN TRỊ HỢP TÁC XÃ</p>
                        <span>(ký, ghi rõ họ tên)</span>

                    </div>
                </div>
            </div>

            <!-- end thông tin chung -->
        </div>
    </div>
    <div class="flex justify-center  pb-4">
        <div class="h-[auto] px-7 w-[700px] rounded-[12px] bg-white p-4 shadow-md border">
            <p class="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
                Đánh giá LMHTX và đơn vị khác
            </p>
            <textarea :disabled="role == 2" v-model="dataForm.danhGia" class="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Đánh giá LMHTX và đơn vị khác"></textarea>
            <input :disabled="role == 2 " v-model="dataForm.diemDanhGia" type="number" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                               focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tổng điểm">
            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('diemDanhGia')">
                {{ dataForm.errors().get('diemDanhGia') }}
            </span>
            <div v-if="role != 2" class="flex justify-end mt-4">

                <button @click="submitform()" class="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">
                    Lưu
                </button>

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
                url: '/DanhGiaHTX',
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
                    id: 0,
                    diemDanhGia: null,
                    danhGia: '',
                    idDonVi: null,
                    kyBienDongId: null,

                })
                .rules({

                    diemDanhGia: 'required',

                })
                .messages({
                    diemDanhGia: 'required',

                }),
            rowId: '',
            statusForm: '',
            isActivemodal: true,
            donVi: null,
            kyID: null,
            Diemdanhgia: [],
            listNganhNghe: [],
            InfoDonvi: [],
            listQuyMoTongNguonVon: [],
            listQuyMoThanhVien: [],
            listSanPhamDichVu: [],
            role: parseInt(localStorage.getItem("role")),
        }
    },
    mounted: async function () {
        const self = this;
        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.donVi = Number(params.get("donvi"));
        this.kyID = Number(params.get("kyBienDong"));
        axios.get("/Nganhnghe")
            .then((res) => {
                self.listNganhNghe = res.data.data
            });
        axios.get("/QuyMoTongNguonVon").then(function (response) {
            self.listQuyMoTongNguonVon = response.data.data;
        });
        axios.get("/QuyMoThanhVien").then(function (response) {
            self.listQuyMoThanhVien = response.data.data;
        });
        axios.get("/SanPhamDichVu").then(function (response) {
            self.listSanPhamDichVu = response.data.data;
        });
        this.loadData();
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
        loadData() {

            const self = this;
            axios.get("/ChamDiem/ChamDiemHTX?donViId=" + this.donVi + "&kyBienDong=" + this.kyID)
                .then((res) => {
                    self.Diemdanhgia = res.data;

                });

            axios.get("/DonVi/" + this.donVi)
                .then(function (response) {
                    self.InfoDonvi = response.data;

                    for (let index = 0; index < self.listNganhNghe.length; index++) {
                        if (self.InfoDonvi.nganhNgheID != null) {
                            if (self.InfoDonvi.nganhNgheID == self.listNganhNghe[index].id) {
                                self.InfoDonvi.tenNganhNghe = self.listNganhNghe[index].tenNganhNghe;
                            }
                        }

                    }
                    for (let index = 0; index < self.listQuyMoThanhVien.length; index++) {
                        if (self.InfoDonvi.quyMoThanhVienId != null) {
                            if (self.InfoDonvi.quyMoThanhVienId == self.listQuyMoThanhVien[index].id) {
                                self.InfoDonvi.tenquyMoThanhVien = self.listQuyMoThanhVien[index].tieuDe;
                            }
                        }

                    }
                    for (let index = 0; index < self.listQuyMoTongNguonVon.length; index++) {
                        if (self.InfoDonvi.quyMoNguonVonId != null) {
                            if (self.InfoDonvi.quyMoNguonVonId == self.listQuyMoTongNguonVon[index].id) {
                                self.InfoDonvi.tenQuyMoTongNguonVon = self.listQuyMoTongNguonVon[index].tieuDe;
                            }
                        }

                    }
                    for (let index = 0; index < self.listSanPhamDichVu.length; index++) {
                        if (self.InfoDonvi.sanPhamDichVuId != null) {
                            if (self.InfoDonvi.sanPhamDichVuId == self.listSanPhamDichVu[index].id) {
                                self.InfoDonvi.tenSanPhamDichVu = self.listSanPhamDichVu[index].tieuDe;
                            }
                        }

                    }

                });
            axios.get("/DanhGiaHTX?donViId=" + this.donVi + "&kyBienDong=" + this.kyID)
                .then((res) => {
                    console.log(res.data.data.length);
                    if (res.data.data.length > 0) {
                    
                        self.dataForm.data.id = res.data.data[0].id;
                        self.dataForm.data.danhGia = res.data.data[0].danhGia;
                        self.dataForm.data.diemDanhGia = res.data.data[0].diemDanhGia;

                    }

                });
        },
        submitform() {

            if (this.dataForm.validate().errors().any()) {
                return;
            }

            const self = this;
            this.dataForm.data.idDonVi = this.donVi;
            this.dataForm.data.kyBienDongId = this.kyID;
            console.log(self.dataForm.data);
            if (this.statusForm == "insert") {
                axios.post(this.datatb.url, self.dataForm.data).then(function () {
                        self.thongbaothanhcong('Lưu thành công')
                        self.loadData();
                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            } else {
                axios.post(self.datatb.url + '/' + self.rowId, self.dataForm.data).then(function () {
                        self.thongbaothanhcong('Sửa thành công')
                        self.loadData();
                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            }

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
