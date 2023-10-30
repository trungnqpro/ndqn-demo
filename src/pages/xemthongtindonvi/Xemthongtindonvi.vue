<template>
<div v-if="Donvi_id == InfoDonvi.id || role == 1 || role == 3 || role == 4  || role == 5">

    <div v-cloak v-bind:class="{ hidden: isActivemodal }" style="z-index: 100" class="min-w-screen h-screen animated fadeIn faster 
                                                                         fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div @click="closemodal()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="sm:w-10/12 w-10/12  h-4/5  overflow-auto p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
            <div class="w-full  overflow-auto ">
                <div class=" flex justify-between items-center  rounded-t border-b mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white uppercase">
                        Thêm mới, chỉnh sửa
                    </h3>
                    <button type="button" @click="closemodal()" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>

                <div class="col-span-12 mt-5 md:col-span-12 md:mt-0">
                    <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                        <div class="sm:col-span-6 col-span-12 bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Tên đơn vị<label for="" class="text-red-500">*</label> </label>
                            <input v-model="dataFormDonVi.tenDonVi" name="tenDonVi" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('tenDonVi')">
                                {{ dataFormDonVi.errors().get('tenDonVi') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12 bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Email<label for="" class="text-red-500">*</label> </label>
                            <input v-model="dataFormDonVi.email" name="email" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('email')">
                                {{ dataFormDonVi.errors().get('email') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Mã số<label for="" class="text-red-500">*</label> </label>
                            <input v-model="dataFormDonVi.maSo" name="maSo" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('maSo')">
                                {{ dataFormDonVi.errors().get('maSo') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Năm thành lập <label for="" class="text-red-500">*</label> </label>
                            <input v-model="dataFormDonVi.namThanhLap" name="namThanhLap" type="date" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('namThanhLap')">
                                {{ dataFormDonVi.errors().get('namThanhLap') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Địa chỉ <label for="" class="text-red-500">*</label> </label>
                            <input v-model="dataFormDonVi.diaChi" name="diaChi" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('diaChi')">
                                {{ dataFormDonVi.errors().get('diaChi') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Trụ sở làm việc của HND/LHHTX/QTDND</label>
                            <input v-model="dataFormDonVi.truSoLamViec" checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                        <div class="col-span-12 m-3">
                            <div class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Thông tin người đại diện pháp luật của HND/LHHTX/QTDND
                                </label>
                                <div class="col-span-12 grid grid-cols-12 my-3">

                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700">Đại diện pháp
                                            luật</label>
                                        <input v-model="dataFormDonVi.daiDienPhapLuat" name="daiDienPhapLuat" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700">Năm sinh </label>
                                        <input v-model="dataFormDonVi.nguoiDaiDienNamSinh" name="nguoiDaiDienNamSinh" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700">Giới tính </label>
                                        <select v-model="dataFormDonVi.nguoiDaiDienGioiTinh" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                            <option value="1">Nam </option>
                                            <option value="2">Nữ</option>
                                        </select>

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700">Dân tộc </label>
                                        <input v-model="dataFormDonVi.nguoiDaiDienDanToc" name="nguoiDaiDienDanToc" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700">Điện thoại người đại diện </label>
                                        <input v-model="dataFormDonVi.nguoiDaiDienDienThoai" name="nguoiDaiDienDienThoai" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>
                                    <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                        <label class="block text-sm font-medium text-gray-700">Địa chỉ người đại diện </label>
                                        <input v-model="dataFormDonVi.nguoiDaiDienDiaChi" name="nguoiDaiDienDiaChi" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Điện thoại<label for="" class="text-red-500">*</label> </label>
                            <input v-model="dataFormDonVi.dienThoai" name="dienThoai" type="number" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('dienThoai')">
                                {{ dataFormDonVi.errors().get('dienThoai') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Ngành nghề <label for="" class="text-red-500">*</label> </label>
                            <select v-model="dataFormDonVi.nganhNgheID" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option value="">-- Chọn: --</option>
                                <option v-for="i in listNganhNghe" :value="i.id" :key="i.id">
                                    {{ i.tenNganhNghe }}
                                </option>
                            </select>
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('nganhNgheID')">
                                {{ dataFormDonVi.errors().get('nganhNgheID') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Lĩnh vực<label for="" class="text-red-500">*</label> </label>
                            <select v-model="dataFormDonVi.linhVucID" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option value="">-- Chọn: --</option>
                                <option v-for="i in listLinhVuc" :value="i.id" :key="i.id">
                                    {{ i.tenLinhVucHoatDong }}
                                </option>
                            </select>
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('linhVucID')">
                                {{ dataFormDonVi.errors().get('linhVucID') }}
                            </span>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Mô hình hoạt động<label for="" class="text-red-500">*</label> </label>
                            <select v-model="dataFormDonVi.moHinhID" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option value="">-- Chọn: --</option>
                                <option v-for="i in listMoHinh" :value="i.id" :key="i.id">
                                    {{ i.tenMoHinhHoatDong }}
                                </option>
                            </select>
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('moHinhID')">
                                {{ dataFormDonVi.errors().get('mohinhID') }}
                            </span>
                        </div>

                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Loại hình kinh tế<label for="" class="text-red-500">*</label> </label>
                            <select @blur="Kiemtraquyen($event)" v-model="dataFormDonVi.loaiHinhID" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option value="">-- Chọn: --</option>
                                <option v-for="i in listLoaiHinh" :value="i.id" :key="i.id">
                                    {{ i.tenLoaiHinhKinhTe }}
                                </option>
                            </select>
                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('loaiHinhID')">
                                {{ dataFormDonVi.errors().get('loaiHinhID') }}
                            </span>
                        </div>

                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Địa bàn<label for="" class="text-red-500">*</label> </label>
                            <select :disabled="role == 3" v-model="dataFormDonVi.diaBanId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option value="">-- Chọn: --</option>
                                <option v-for="i in listDiaBan" :value="i.id" :key="i.id">
                                    {{ i.tenDiaBan }}
                                </option>
                            </select>

                        </div>

                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Trang thái hoạt động:</label>
                            <select :disabled="role == 2" v-model="dataFormDonVi.status" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option selected value="1">Đang hoạt động</option>
                                <option value="2">Không hoạt động hoạt động</option>
                                <option value="3">Đã giải thể</option>
                                <option value="4">Đang giải thể</option>
                            </select>

                        </div>

                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Mô hình tổ chức</label>
                            <select v-model="dataFormDonVi.moHinhToChucId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option value="1">Quản lý riêng, điều hành riêng.</option>
                                <option value="2">Vừa quản lý vừa điều hành.</option>
                            </select>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Công tác tài chính kế toán</label>
                            <select v-model="dataFormDonVi.congTacTaiChinhKeToan" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option value="1">Chuyên trách</option>
                                <option value="2">Kiêm nhiệm</option>
                                <option value="3">Thuê ngoài</option>
                            </select>
                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Năm chuyển đổi theo Luật HND</label>
                            <input v-model="dataFormDonVi.namChuyenDoiTheoLuatHTX" name="namChuyenDoiTheoLuatHTX" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Năm tham gia thành viên HND tỉnh</label>
                            <input v-model="dataFormDonVi.namThamGiaThanhVienLMHTX" name="namThamGiaThanhVienLMHTX" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Tổ chức Đảng</label>
                            <input v-model="dataFormDonVi.coToChucDang" checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Năm thành lập tổ chức Đảng</label>
                            <input v-model="dataFormDonVi.namThanhLapToChucDang" name="namThanhLapToChucDang" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Số đảng viên tổ chức Đảng</label>
                            <input v-model="dataFormDonVi.soDangVienToChucDang" name="soDangVienToChucDang" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Tổ chức Công đoàn</label>
                            <input v-model="dataFormDonVi.coToChucCongDoan" checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Năm thành lập tổ chức Công đoàn</label>
                            <input v-model="dataFormDonVi.namThanhLapToChucCongDoan" name="namThanhLapToChucDang" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Số đoàn viên tổ chức Công đoàn</label>
                            <input v-model="dataFormDonVi.soDoanVienToChucCongDoan" name="soDangVienToChucDang" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Tổ chức Đoàn thanh niên</label>
                            <input v-model="dataFormDonVi.coToChucDoanThanhNien" checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Năm thành lập tổ chức Đoàn thanh niên</label>
                            <input v-model="dataFormDonVi.namThanhLapToChucDoanThanhNien" name="namThanhLapToChucDang" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Số đoàn viên tổ chức Đoàn thanh niên</label>
                            <input v-model="dataFormDonVi.soDoanVienToChucDoanThanhNien" name="soDangVienToChucDang" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>

                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Địa chỉ Website, Fanpage</label>
                            <input v-model="dataFormDonVi.lienKet" name="daiDienPhapLuat" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                        </div>

                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Sản phẩm, DV cung ứng cho thành viên</label>
                            <select v-model="dataFormDonVi.sanPhamDichVuId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option selected value="0">-- Chọn: --</option>
                                <option v-for="i in listSanPhamDichVu" :value="i.id" :key="i.id">
                                    {{ i.tieuDe }}
                                </option>
                            </select>

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Phân loại theo quy mô thành viên</label>
                            <select v-model="dataFormDonVi.quyMoThanhVienId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option selected value="0">-- Chọn: --</option>
                                <option v-for="i in listQuyMoThanhVien" :value="i.id" :key="i.id">
                                    {{ i.tieuDe }}
                                </option>
                            </select>

                        </div>
                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                            <label class="block text-sm font-medium text-gray-700">Phân loại theo quy mô tổng nguồn vốn</label>
                            <select v-model="dataFormDonVi.quyMoNguonVonId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                <option selected value="0">-- Chọn: --</option>
                                <option v-for="i in listQuyMoTongNguonVon" :value="i.id" :key="i.id">
                                    {{ i.tieuDe }}
                                </option>
                            </select>

                        </div>
                    </div>
                </div>

            </div>

            <!--footer-->
            <div class="col-span-12 text-center  md:block flex pt-4 justify-center">
                <button @click="submitform()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Lưu
                </button>
                <button @click="closemodal()" class=" items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">Hủy</button>
            </div>

        </div>
    </div>

    <div class="shadow overflow-hidden sm:rounded-md mt-1">

        <div class="px-4 py-5 bg-white sm:p-6">
            <div class="text-gray-100 text-xl">
                <div class="flex items-center justify-between">
                    <h1 class="font-bold text-gray-600   ">Thông tin đơn vị </h1>
                    <button @click="doAlertEditdonvi()" type="button" class="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                    </button>
                </div>

            </div>
            <div class="grid grid-cols-6 gap-6 py-2">
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Tên đơn vị: {{InfoDonvi.tenDonVi}}</label>

                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Mã số: {{InfoDonvi.maSo}}</label>

                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Năm thành lập: {{InfoDonvi.namThanhLap}} </label>

                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Địa chỉ: {{InfoDonvi.diaChi}} </label>

                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Đại diện pháp
                        luật: {{InfoDonvi.daiDienPhapLuat}}</label>

                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Điện thoại: {{InfoDonvi.dienThoai}}</label>

                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Ngành nghề: {{InfoDonvi.tenNganhNghe}}</label>

                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Lĩnh vực: {{InfoDonvi.tenLinhVucHoatDong}}</label>

                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Mô hình hoạt động: {{InfoDonvi.tenMoHinhHoatDong}}</label>

                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Loại hình kinh tế: {{InfoDonvi.tenLoaiHinhKinhTe}}</label>

                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Địa bàn: {{InfoDonvi.tenDiaBan}}</label>

                </div>
            </div>
        </div>

    </div>
    <div class="my-2">
        <div class="text-gray-100 text-xl py-2">
            <div class="text-center">
                <h1 class="font-bold text-gray-600   ">Dữ liệu kỳ </h1>

            </div>
        </div>
        <Datatable :datatb="datatb" namePaging="pagination" @pagination="pagination">
            <template>
                <el-table-column label="STT" width="100">
                    <template slot-scope="scope">
                        <div class="sm:text-center">
                            <span class="sm:hidden "><b>
                                    STT:</b></span> {{ scope.$index + 1 }}
                        </div>

                    </template>
                </el-table-column>
                <el-table-column prop="tenKyBienDong" label="Tên kỳ biến động">
                    <template slot-scope="scope">
                        <span class="sm:hidden "><b>Tên kỳ biến động:</b></span> {{ scope.row.tenKyBienDong}}
                    </template>
                </el-table-column>
                <el-table-column prop="tenKyBienDong" label="Trang thái">
                    <template slot-scope="scope">
                        <span class="sm:hidden "><b>Trang thái </b></span>

                        <span class="inline-flex rounded-full bg-red-300 px-2 text-xs font-semibold leading-5 text-white" v-if="scope.row.status == 0">Đã khóa</span>
                        <div v-else>
                            <span v-if="scope.row.ngayKetThuc > today" class="inline-flex rounded-full bg-yellow-500 px-2 text-xs font-semibold leading-5 text-white"> Đang mở</span>
                            <span v-else class="inline-flex rounded-full bg-green-500 px-2 text-xs font-semibold leading-5 text-white"> Đang mở</span>
                        </div>

                    </template>
                </el-table-column>

                <el-table-column width="270">
                    <template slot="header">
                        Chức năng
                    </template>
                    <template slot-scope="scope">
                        <div class="sm:text-center">
                            <el-tooltip class="item" effect="dark" content="Chỉnh sửa" placement="top-start">
                                <el-button v-if="scope.row.status == 1" size="mini" @click="doAlertEdit(scope.row)">
                                    <i class="el-icon-edit-outline text-lg"></i>
                                </el-button>
                            </el-tooltip>

                            <el-tooltip class="item" effect="dark" content="xem báo cáo tình hình của hoạt động hội nông dân năm" placement="top-start">
                                <el-button size="mini" @click="doXembaocao(scope.row)">
                                    <i class="el-icon-tickets text-lg"></i>
                                </el-button>
                            </el-tooltip>
                            <!-- <el-tooltip class="item" effect="dark" content="Danh mục các tiêu chí và mức điểm đánh giá" placement="top-start">
                                <el-button size="mini" @click="doBaocaodanhgia(scope.row)">
                                    <i class="el-icon-document-checked text-lg"></i>
                                </el-button>
                            </el-tooltip> -->
                            <el-tooltip class="item" effect="dark" content="Bảng đánh giá hội nông dân năm" placement="top-start">
                                <el-button size="mini" @click="doBangdanhgiahoptacxanam(scope.row)">
                                    <i class="el-icon-receiving text-lg"></i>
                                </el-button>
                            </el-tooltip>
                        </div>
                    </template>
                </el-table-column>
            </template>
        </Datatable>

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
                url: '/KyBienDongs',
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
                    kyBienDongId: '',
                })
                .rules({

                })
                .messages({

                }),
            dataFormDonVi: form({
                    tenDonVi: '',
                    maSo: '',
                    namThanhLap: '',
                    diaChi: '',
                    email: '',
                    daiDienPhapLuat: '',
                    dienThoai: '',
                    nganhNgheID: null,
                    linhVucID: null,
                    moHinhID: null,
                    loaiHinhID: null,
                    sanPhamTieuBieuID: null,
                    diaBanId: null,
                    status: 1,
                    quyMoThanhVienId: null,
                    moHinhToChucId: null,
                    quyMoNguonVonId: null,
                    sanPhamDichVuId: null,
                    namChuyenDoiTheoLuatHTX: null,
                    namThamGiaThanhVienLMHTX: null,
                    coToChucDang: false,
                    namThanhLapToChucDang: null,
                    soDangVienToChucDang: null,
                    congTacTaiChinhKeToan: null,
                    coToChucCongDoan: false,
                    namThanhLapToChucCongDoan: null,
                    soDoanVienToChucCongDoan: null,
                    coToChucDoanThanhNien: false,
                    namThanhLapToChucDoanThanhNien: null,
                    soDoanVienToChucDoanThanhNien: null,
                    truSoLamViec: true,
                    nguoiDaiDienNamSinh: '',
                    nguoiDaiDienGioiTinh: '',
                    nguoiDaiDienDanToc: '',
                    nguoiDaiDienDienThoai: '',
                    nguoiDaiDienDiaChi: '',
                    lienKet: '',

                })
                .rules({
                    tenDonVi: 'required',
                    maSo: 'required',
                    email: 'required',
                    namThanhLap: 'required',
                    diaChi: 'required',
                    dienThoai: 'required',
                    // nganhNgheID: 'required',
                    linhVucID: 'required',
                    moHinhID: 'required',
                    loaiHinhID: 'required',
                })
                .messages({
                    'tenDonVi.required': 'Trường bắt buộc nhập',
                    'maSo.required': 'Trường bắt buộc nhập',
                    'email.required': 'Trường bắt buộc nhập',
                    'namThanhLap.required': 'Trường bắt buộc nhập',
                    'diaChi.required': 'Trường bắt buộc nhập',
                    'dienThoai.required': 'Trường bắt buộc nhập',
                    // 'nganhNgheID.required': 'Trường bắt buộc nhập',
                    'linhVucID.required': 'Trường bắt buộc nhập',
                    'moHinhID.required': 'Trường bắt buộc nhập',
                    'loaiHinhID.required': 'Trường bắt buộc nhập',
                }),
            rowId: '',
            statusForm: '',
            isActivemodal: true,
            data: {
                tableData: Array(),
                total: '',
                paginatenow: 1,

            },
            listNganhNghe: [],
            listLoaiHinh: [],
            listMoHinh: [],
            listLinhVuc: [],
            listSanPhamTieuBieu: [],
            listDiaBan: [],
            listNhomDonVi: [],
            listNguonGoc: [],
            listParentId: [],
            InfoDonvi: [],
            listQuyMoTongNguonVon: [],
            listQuyMoThanhVien: [],
            listSanPhamDichVu: [],
            isActivemodal2: true,
            listTrinhDoCanBoChuChot: [],
            today: Date,
            Donvi_id: localStorage.getItem("idDonVi"),

            role: localStorage.getItem("role"),
        }
    },

    mounted: async function () {
        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.donVi = Number(params.get("donvi"));
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
                self.listDiaBan = res.data.data
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
        axios.get("/DonVi/" + this.donVi).then(function (response) {
            self.InfoDonvi = response.data;

            for (let index = 0; index < self.listNganhNghe.length; index++) {
                if (self.InfoDonvi.nganhNgheID != null) {
                    if (self.InfoDonvi.nganhNgheID == self.listNganhNghe[index].id) {
                        self.InfoDonvi.tenNganhNghe = self.listNganhNghe[index].tenNganhNghe;
                    }
                }

            }
            for (let index = 0; index < self.listLinhVuc.length; index++) {
                if (self.InfoDonvi.linhVucID != null) {
                    if (self.InfoDonvi.linhVucID == self.listLinhVuc[index].id) {
                        self.InfoDonvi.tenLinhVucHoatDong = self.listLinhVuc[index].tenLinhVucHoatDong;
                    }
                }

            }
            for (let index = 0; index < self.listLoaiHinh.length; index++) {
                if (self.InfoDonvi.loaiHinhID != null) {
                    if (self.InfoDonvi.loaiHinhID == self.listLoaiHinh[index].id) {
                        self.InfoDonvi.tenLoaiHinhKinhTe = self.listLoaiHinh[index].tenLoaiHinhKinhTe;
                    }
                }

            }
            for (let index = 0; index < self.listMoHinh.length; index++) {
                if (self.InfoDonvi.moHinhID != null) {
                    if (self.InfoDonvi.moHinhID == self.listMoHinh[index].id) {
                        self.InfoDonvi.tenMoHinhHoatDong = self.listMoHinh[index].tenMoHinhHoatDong;
                    }
                }

            }

            for (let index = 0; index < self.listDiaBan.length; index++) {
                if (self.InfoDonvi.diaBanId != null) {
                    if (self.InfoDonvi.diaBanId == self.listDiaBan[index].id) {
                        self.InfoDonvi.tenDiaBan = self.listDiaBan[index].tenDiaBan;
                    }
                }

            }
            self.dataFormDonVi.data.tenDonVi = response.data.tenDonVi
            self.dataFormDonVi.data.maSo = response.data.maSo
            self.dataFormDonVi.data.email = response.data.email
            self.dataFormDonVi.data.namThanhLap = response.data.namThanhLap
            self.dataFormDonVi.data.diaChi = response.data.diaChi
            self.dataFormDonVi.data.daiDienPhapLuat = response.data.daiDienPhapLuat
            self.dataFormDonVi.truSoLamViec = response.data.truSoLamViec;
            self.dataFormDonVi.nguoiDaiDienNamSinh = response.data.nguoiDaiDienNamSinh;
            self.dataFormDonVi.nguoiDaiDienGioiTinh = response.data.nguoiDaiDienGioiTinh;
            self.dataFormDonVi.nguoiDaiDienDanToc = response.data.nguoiDaiDienDanToc;
            self.dataFormDonVi.nguoiDaiDienDienThoai = response.data.nguoiDaiDienDienThoai;
            self.dataFormDonVi.nguoiDaiDienDiaChi = response.data.nguoiDaiDienDiaChi;
            self.dataFormDonVi.congTacTaiChinhKeToan = response.data.congTacTaiChinhKeToan;
            self.dataFormDonVi.data.dienThoai = response.data.dienThoai
            self.dataFormDonVi.data.nganhNgheID = response.data.nganhNgheID
            self.dataFormDonVi.data.linhVucID = response.data.linhVucID
            self.dataFormDonVi.data.moHinhID = response.data.moHinhID
            self.dataFormDonVi.data.loaiHinhID = response.data.loaiHinhID
            self.dataFormDonVi.data.diaBanId = response.data.diaBanId
            self.dataFormDonVi.data.status = response.data.status
            self.dataFormDonVi.quyMoThanhVienId = response.data.quyMoThanhVienId;
            self.dataFormDonVi.moHinhToChucId = response.data.moHinhToChucId;
            self.dataFormDonVi.quyMoNguonVonId = response.data.quyMoNguonVonId;
            self.dataFormDonVi.sanPhamDichVuId = response.data.sanPhamDichVuId;
            self.dataFormDonVi.namChuyenDoiTheoLuatHTX = response.data.namChuyenDoiTheoLuatHTX;
            self.dataFormDonVi.namThamGiaThanhVienLMHTX = response.data.namThamGiaThanhVienLMHTX;
            self.dataFormDonVi.coToChucDang = response.data.coToChucDang;
            self.dataFormDonVi.namThanhLapToChucDang = response.data.namThanhLapToChucDang;
            self.dataFormDonVi.soDangVienToChucDang = response.data.soDangVienToChucDang;
            self.dataFormDonVi.coToChucCongDoan = response.data.coToChucCongDoan;
            self.dataFormDonVi.namThanhLapToChucCongDoan = response.data.namThanhLapToChucCongDoan;
            self.dataFormDonVi.soDoanVienToChucCongDoan = response.data.soDoanVienToChucCongDoan;
            self.dataFormDonVi.coToChucDoanThanhNien = response.data.coToChucDoanThanhNien;
            self.dataFormDonVi.namThanhLapToChucDoanThanhNien = response.data.namThanhLapToChucDoanThanhNien;
            self.dataFormDonVi.soDoanVienToChucDoanThanhNien = response.data.soDoanVienToChucDoanThanhNien;

            self.dataFormDonVi.lienKet = response.data.lienKet;
        })

    },
    watch: {
        'datatb.searchnow'() {
            this.loadData();
        }
    },
    methods: {
        openmodal() {
            this.isActivemodal = false;
        },
        closemodal() {
            this.isActivemodal = true;
            this.dataForm.errors().messages = {};
        },
        pagination(data) {
            // Gán lại giá trị paginatenow
            this.datatb.paginatenow = data;
            // Load lại bảng
            this.loadData();
        },
        doAlertEditdonvi() {
            this.openmodal();
        },
        Kiemtraquyen(event) {
            const self = this;
            var check = '';
            for (let index = 0; index < self.listLoaiHinh.length; index++) {
                if (event.target.value == self.listLoaiHinh[index].id) {

                    check = self.listLoaiHinh[index].tenLoaiHinhKinhTe;

                }
            }

            if (this.role != 3 && check == 'HND') {
                self.thongbaothatbai('Bạn không có quyền tạo đơn vị thuộc loại hình kink tế này');
                this.dataForm.data.loaiHinhID = null;

            } else if (this.role == 3 && check != 'HND') {
                self.thongbaothatbai('Bạn không có quyền tạo đơn vị thuộc loại hình kink tế này');
                this.dataForm.data.loaiHinhID = null;
            }

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
                    self.datatb.total = Math.ceil(
                        response.data.recordsTotal / self.datatb.length
                    );
                    // Dữ liệu bảng
                    self.datatb.tableData = response.data.data;
                    self.listParentId = response.data.data;

                    const today = new Date();
                    const dd = String(today.getDate()).padStart(2, '0');
                    const mm = String(today.getMonth() + 1).padStart(2, '0');
                    const yyyy = today.getFullYear();
                    self.today = dd + '-' + mm + '-' + yyyy;

                });
        },
        //data table
        doAlertEdit(data) {
            // Gán giá trị cho form

            window.location.href = "xem-thong-tin?ky=" + data.id + "&&donvi=" + this.donVi;

            // Sửa tình trạng form

        },
        submitform() {

            if (this.dataFormDonVi.validate().errors().any()) {
                return;
            }

            const self = this;

            this.closemodal()
            axios.post("/DonVi/" + self.donVi, self.dataFormDonVi.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

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
        openmodal2() {
            this.isActivemodal2 = false;
        },
        closemodal2() {
            this.isActivemodal2 = true;

        },

        print() {
            // Pass the element id here
            this.$htmlToPaper('printMe');
        },
        doXembaocao(data) {
            // Gán giá trị cho form
            window.location.href = "xem-bao-cao?kyBienDong=" + data.id + "&&donvi=" + this.donVi;
            // Sửa tình trạng form

        },
        // doBaocaodanhgia(data) {
        //     window.location.href = "bao-cao-danh-gia?kyBienDong=" + data.id + "&&donvi=" + this.donVi;
        // },
        doBangdanhgiahoptacxanam(data) {
            window.location.href = "bang-danh-gia-hop-tac-xa-nam?kyBienDong=" + data.id + "&&donvi=" + this.donVi;
        }
    },
}
</script>
