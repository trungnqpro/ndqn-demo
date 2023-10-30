<template>
    <div v-if="role != 2">
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 ">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Quản lý đơn vị</h1>
            </div>
        </div>
        <!-- <div class="my-2 bg-gray-600 h-[1px]"></div> -->
        <div v-cloak v-bind:class="{ hidden: isActivemodal }" style="z-index: 100"
            class="min-w-screen h-screen animated fadeIn faster 
                                                                         fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div @click="closemodal()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div
                class="sm:w-10/12 w-11/12  h-4/5  overflow-auto p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                <div class="w-full  overflow-auto ">
                    <div class=" flex justify-between items-center  rounded-t border-b mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white uppercase">
                            Thêm mới, chỉnh sửa
                        </h3>
                        <button type="button" @click="closemodal()"
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
                    <div class="mt-5 md:col-span-12 md:mt-0">
                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                            <div class="sm:col-span-6 col-span-12 bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tên đơn vị<label for=""
                                        class="text-red-500">*</label> </label>
                                <input v-model="dataForm.tenDonVi" name="tenDonVi" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('tenDonVi')">
                                    {{ dataForm.errors().get('tenDonVi') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12 bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Email<label for=""
                                        class="text-red-500">*</label> </label>
                                <input v-model="dataForm.email" name="email" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('email')">
                                    {{ dataForm.errors().get('email') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Mã số<label for=""
                                        class="text-red-500">*</label> </label>
                                <input v-model="dataForm.maSo" name="maSo" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('maSo')">
                                    {{ dataForm.errors().get('maSo') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Năm thành lập <label for=""
                                        class="text-red-500">*</label> </label>
                                <input v-model="dataForm.namThanhLap" name="namThanhLap" type="date" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('namThanhLap')">
                                    {{ dataForm.errors().get('namThanhLap') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Địa chỉ <label for=""
                                        class="text-red-500">*</label> </label>
                                <input v-model="dataForm.diaChi" name="diaChi" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('diaChi')">
                                    {{ dataForm.errors().get('diaChi') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trụ sở làm việc của
                                    HND/LHHTX/QTDND</label>
                                <input v-model="dataForm.truSoLamViec" checked id="disabled-checked-checkbox"
                                    type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="col-span-12 m-3">
                                <div
                                    class="relative border border-gray-400 rounded-md px-3 py-2 shadow-sm  grid grid-cols-12">
                                    <label for="name"
                                        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white  font-medium text-gray-900">Thông
                                        tin người đại diện pháp luật của HND/LHHTX/QTDND
                                    </label>
                                    <div class="col-span-12 grid grid-cols-12 my-3">

                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700">Đại diện pháp
                                                luật</label>
                                            <input v-model="dataForm.daiDienPhapLuat" name="daiDienPhapLuat" type="text"
                                                required
                                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700">Năm sinh </label>
                                            <input v-model="dataForm.nguoiDaiDienNamSinh" name="nguoiDaiDienNamSinh"
                                                type="text" required
                                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700">Giới tính </label>
                                            <select v-model="dataForm.nguoiDaiDienGioiTinh"
                                                class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                                <option value="1">Nam </option>
                                                <option value="2">Nữ</option>
                                            </select>

                                        </div>
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700">Dân tộc </label>
                                            <input v-model="dataForm.nguoiDaiDienDanToc" name="nguoiDaiDienDanToc"
                                                type="text" required
                                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700">Điện thoại người đại diện
                                            </label>
                                            <input v-model="dataForm.nguoiDaiDienDienThoai" name="nguoiDaiDienDienThoai"
                                                type="text" required
                                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>
                                        <div class="sm:col-span-4 col-span-12  bg-white px-4 py-5 sm:p-4 ">
                                            <label class="block text-sm font-medium text-gray-700">Địa chỉ người đại diện
                                            </label>
                                            <input v-model="dataForm.nguoiDaiDienDiaChi" name="nguoiDaiDienDiaChi"
                                                type="text" required
                                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Điện thoại<label for=""
                                        class="text-red-500">*</label> </label>
                                <input v-model="dataForm.dienThoai" name="dienThoai" type="number" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('dienThoai')">
                                    {{ dataForm.errors().get('dienThoai') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Ngành nghề <label for=""
                                        class="text-red-500">*</label> </label>

                                <select v-model="dataForm.nganhNgheID"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="">-- Chọn: --</option>
                                    <option v-for="i in listNganhNghe" :value="i.id" :key="i.id">
                                        {{ i.tenNganhNghe }}
                                    </option>
                                </select>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('nganhNgheID')">
                                    {{ dataForm.errors().get('nganhNgheID') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Lĩnh vực<label for=""
                                        class="text-red-500">*</label> </label>
                                <select v-model="dataForm.linhVucID"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="">-- Chọn: --</option>
                                    <option v-for="i in listLinhVuc" :value="i.id" :key="i.id">
                                        {{ i.tenLinhVucHoatDong }}
                                    </option>
                                </select>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('linhVucID')">
                                    {{ dataForm.errors().get('linhVucID') }}
                                </span>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Mô hình hoạt động<label for=""
                                        class="text-red-500">*</label> </label>
                                <select v-model="dataForm.moHinhID"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="">-- Chọn: --</option>
                                    <option v-for="i in listMoHinh" :value="i.id" :key="i.id">
                                        {{ i.tenMoHinhHoatDong }}
                                    </option>
                                </select>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('moHinhID')">
                                    {{ dataForm.errors().get('mohinhID') }}
                                </span>
                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Loại hình kinh tế<label for=""
                                        class="text-red-500">*</label> </label>
                                <select @blur="Kiemtraquyen($event)" v-model="dataForm.loaiHinhID"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="">-- Chọn: --</option>
                                    <option v-for="i in listLoaiHinh" :value="i.id" :key="i.id">
                                        {{ i.tenLoaiHinhKinhTe }}
                                    </option>
                                </select>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('loaiHinhID')">
                                    {{ dataForm.errors().get('loaiHinhID') }}
                                </span>
                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Địa bàn<label for=""
                                        class="text-red-500">*</label> </label>
                                <select :disabled="role == 3" v-model="dataForm.diaBanId"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="">-- Chọn: --</option>
                                    <option v-for="i in listDiaBan" :value="i.id" :key="i.id">
                                        {{ i.tenDiaBan }}
                                    </option>
                                </select>

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Trang thái hoạt động:</label>
                                <select v-model="dataForm.status"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option selected value="1">Đang hoạt động</option>
                                    <option value="2">Không hoạt động </option>
                                    <option value="3">Đã giải thể</option>
                                    <option value="4">Đang giải thể</option>
                                </select>

                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Mô hình tổ chức</label>
                                <select v-model="dataForm.moHinhToChucId"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="1">Quản lý riêng, điều hành riêng.</option>
                                    <option value="2">Vừa quản lý vừa điều hành.</option>
                                </select>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Công tác tài chính kế toán</label>
                                <select v-model="dataForm.congTacTaiChinhKeToan"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="1">Chuyên trách</option>
                                    <option value="2">Kiêm nhiệm</option>
                                    <option value="3">Thuê ngoài</option>
                                </select>
                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Năm chuyển đổi theo Luật
                                    HND</label>
                                <input v-model="dataForm.namChuyenDoiTheoLuatHTX" name="namChuyenDoiTheoLuatHTX" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Năm tham gia thành viên Liên minh
                                    HND tỉnh</label>
                                <input v-model="dataForm.namThamGiaThanhVienLMHTX" name="namThamGiaThanhVienLMHTX"
                                    type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổ chức Đảng</label>
                                <input v-model="dataForm.coToChucDang" checked id="disabled-checked-checkbox"
                                    type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Năm thành lập tổ chức
                                    Đảng</label>
                                <input v-model="dataForm.namThanhLapToChucDang" name="namThanhLapToChucDang" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Số đảng viên tổ chức
                                    Đảng</label>
                                <input v-model="dataForm.soDangVienToChucDang" name="soDangVienToChucDang" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổ chức Công đoàn</label>
                                <input v-model="dataForm.coToChucCongDoan" checked id="disabled-checked-checkbox"
                                    type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Năm thành lập tổ chức Công
                                    đoàn</label>
                                <input v-model="dataForm.namThanhLapToChucCongDoan" name="namThanhLapToChucDang" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Số đoàn viên tổ chức Công
                                    đoàn</label>
                                <input v-model="dataForm.soDoanVienToChucCongDoan" name="soDangVienToChucDang" type="text"
                                    required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Tổ chức Đoàn thanh niên</label>
                                <input v-model="dataForm.coToChucDoanThanhNien" checked id="disabled-checked-checkbox"
                                    type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Năm thành lập tổ chức Đoàn thanh
                                    niên</label>
                                <input v-model="dataForm.namThanhLapToChucDoanThanhNien" name="namThanhLapToChucDang"
                                    type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Số đoàn viên tổ chức Đoàn thanh
                                    niên</label>
                                <input v-model="dataForm.soDoanVienToChucDoanThanhNien" name="soDangVienToChucDang"
                                    type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Địa chỉ Website, Fanpage</label>
                                <input v-model="dataForm.lienKet" name="lienket" type="text" required
                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

                            </div>

                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Sản phẩm, DV cung ứng cho thành
                                    viên</label>
                                <select v-model="dataForm.sanPhamDichVuId"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option selected value="0">-- Chọn: --</option>
                                    <option v-for="i in listSanPhamDichVu" :value="i.id" :key="i.id">
                                        {{ i.tieuDe }}
                                    </option>
                                </select>

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Phân loại theo quy mô thành
                                    viên</label>
                                <select v-model="dataForm.quyMoThanhVienId"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option selected value="0">-- Chọn: --</option>
                                    <option v-for="i in listQuyMoThanhVien" :value="i.id" :key="i.id">
                                        {{ i.tieuDe }}
                                    </option>
                                </select>

                            </div>
                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                <label class="block text-sm font-medium text-gray-700">Phân loại theo quy mô tổng nguồn
                                    vốn</label>
                                <select v-model="dataForm.quyMoNguonVonId"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
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
                    <button @click="submitform()"
                        class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Lưu
                    </button>
                    <button @click="closemodal()"
                        class=" items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">Hủy</button>
                </div>

            </div>
        </div>
        <div class="py-4">
            <div class="grid grid-cols-12 ">
                <div class="sm:col-span-4  lg:mb-0 mb-2 col-span-12 grid grid-cols-12">
                    <button @click="saveform()"
                        class="rounded-lg sm:mr-4 xl:mr-10 lg:w-auto sm:col-span-6 col-span-12 px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Thêm
                        mới</button>
                    <a href="https://apicsdllmhtx.thainguyen.gov.vn/api/Donvi/ExportExcelDanhSachDonVi" download
                        class="text-center bg-blue-500 mt-4 sm:mt-0 sm:mr-4 xl:mr-10 sm:col-span-6  col-span-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                        Xuất excel


                    </a>
                </div>

                <div class="sm:col-start-10 sm:col-end-13  col-span-12">
                    <input class="effect-7" type="text" placeholder="Tìm kiếm" v-model="datatb.searchnow" />
                    <span class="focus-border">
                        <i></i>
                    </span>
                </div>
            </div>

        </div>

        <div>
            <Datatable :datatb="datatb" namePaging="pagination" @pagination="pagination">
                <template>
                    <el-table-column label="STT" width="50">
                        <template slot-scope="scope">
                            <div class="sm:text-center">
                                <span class="sm:hidden "><b>
                                        STT:</b></span> {{ scope.row.stt }}
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column prop="tenDonVi" label="Tên Đơn Vị">
                        <template slot-scope="scope">
                            <span class="sm:hidden "><b>Tên Đơn Vị:</b></span> {{ scope.row.tenDonVi }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="maSo" label="Mã Số">
                        <template slot-scope="scope">
                            <span class="sm:hidden "><b>
                                    Mã Số:</b></span> {{ scope.row.maSo }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="namThanhLap" label="Năm Thành Lập">
                        <template slot-scope="scope">
                            <span class="sm:hidden "><b>Năm Thành Lập:</b></span> {{ scope.row.namThanhLap }}
                        </template>
                    </el-table-column>

                    <el-table-column width="270">
                        <template slot="header">
                            Chức năng
                        </template>
                        <template slot-scope="scope">
                            <div class="sm:text-center">
                                <el-tooltip class="item" effect="dark" content="Xem thông tin đơn vị" placement="top-start">
                                    <el-button size="mini" @click="doViewInfoDonVi(scope.row)">
                                        <i class="el-icon-view text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip v-if="role == 1 || role == 4 || role == 3 || role == 5" class="item"
                                    effect="dark" content="Chỉnh sửa" placement="top-start">
                                    <el-button size="mini" @click="doAlertEdit(scope.row)">
                                        <i class="el-icon-edit-outline text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip v-if="role == 1" class="item" effect="dark" content="Xóa" placement="top-start">
                                    <el-button size="mini" @click="doAlertDelete(scope.row)">
                                        <i class="  el-icon-delete text-lg"></i>
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

// register globally
export default {

    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'name'
                ],
                // đường dẫn đến ajax
                url: '/Donvi',
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
                coToChucCongDoan: false,
                namThanhLapToChucCongDoan: null,
                soDoanVienToChucCongDoan: null,
                coToChucDoanThanhNien: false,
                namThanhLapToChucDoanThanhNien: null,
                soDoanVienToChucDoanThanhNien: null,
                lienKet: '',
                truSoLamViec: true,
                nguoiDaiDienNamSinh: '',
                nguoiDaiDienGioiTinh: '',
                nguoiDaiDienDanToc: '',
                nguoiDaiDienDienThoai: '',
                nguoiDaiDienDiaChi: '',
                congTacTaiChinhKeToan: null,
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
            listQuyMoTongNguonVon: [],
            listQuyMoThanhVien: [],
            listSanPhamDichVu: [],
            role: parseInt(localStorage.getItem("role")),
            idDiaBan: localStorage.getItem("idDiaBan"),

        }
    },
    mounted() {
        this.loadData();
        const self = this;
        axios.get("/NganhNghe").then(function (response) {
            self.listNganhNghe = response.data.data;
        });
        axios.get("/LinhVucHoatDong").then(function (response) {
            self.listLinhVuc = response.data.data;
        });
        axios.get("/LoaiHinhKinhTe").then(function (response) {
            self.listLoaiHinh = response.data.data;
        });

        axios.get("/MoHinhHoatDong").then(function (response) {
            self.listMoHinh = response.data.data;
        });

        axios.get("/NhomDonVi").then(function (response) {
            self.listNhomDonVi = response.data.data;
        });
        axios.get("/DiaBan").then(function (response) {
            self.listDiaBan = response.data.data;
        });
        axios.get("/NguonGoc").then(function (response) {
            self.listNguonGoc = response.data.data;
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

    },
    watch: {
        'datatb.searchnow'() {
            this.loadData();
        }
    },
    methods: {
        xuatexecldonvi() {
            const self = this;

            axios
                .get(self.datatb.url + '/ExportExcelDanhSachDonVi', {


                })
                .then(function (response) {
                    console.log(response);
                });
        },
        openmodal() {
            this.isActivemodal = false;
        },
        closemodal() {
            this.isActivemodal = true;
            this.dataForm.errors().messages = {};
        },
        saveform() {
            this.dataForm.tenDonVi = '';
            this.dataForm.maSo = '';
            this.dataForm.namThanhLap = '';
            this.dataForm.daiDienPhapLuat = '';
            this.dataForm.dienThoai = '';
            this.dataForm.email = '';
            this.dataForm.nganhNgheID = null;
            this.dataForm.linhVucID = null;
            this.dataForm.moHinhID = null;
            this.dataForm.diaChi = '';
            this.dataForm.truSoLamViec = true;
            this.dataForm.congTacTaiChinhKeToan = null;

            this.dataForm.nguoiDaiDienNamSinh = '';
            this.dataForm.nguoiDaiDienGioiTinh = '';
            this.dataForm.nguoiDaiDienDanToc = '';
            this.dataForm.nguoiDaiDienDienThoai = '';
            this.dataForm.nguoiDaiDienDiaChi = '';
            this.dataForm.loaiHinhID = null;
            if (this.role == 3) {
                this.dataForm.diaBanId = this.idDiaBan;
            } else {
                this.dataForm.diaBanId = null;
            }

            this.dataForm.status = 1;
            this.dataForm.quyMoThanhVienId = null;
            this.dataForm.moHinhToChucId = null;
            this.dataForm.quyMoNguonVonId = null;
            this.dataForm.sanPhamDichVuId = null;
            this.dataForm.namChuyenDoiTheoLuatHTX = null;
            this.dataForm.namThamGiaThanhVienLMHTX = null;
            this.dataForm.coToChucDang = false;
            this.dataForm.namThanhLapToChucDang = null;
            this.dataForm.soDangVienToChucDang = null;
            this.dataForm.coToChucCongDoan = false;
            this.dataForm.namThanhLapToChucCongDoan = null;
            this.dataForm.soDoanVienToChucCongDoan = null;
            this.dataForm.coToChucDoanThanhNien = false;
            this.dataForm.namThanhLapToChucDoanThanhNien = null;
            this.dataForm.soDoanVienToChucDoanThanhNien = null;

            this.dataForm.lienKet = '';

            this.statusForm = "insert";
            this.openmodal();
        },
        submitform() {

            if (this.dataForm.validate().errors().any()) {
                return;
            }

            const self = this;

            this.closemodal()
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
        pagination(data) {
            // Gán lại giá trị paginatenow
            this.datatb.paginatenow = data;
            // Load lại bảng
            this.loadData();
        },
        thongbaothanhcong(text) {
            this.$notify({
                title: 'Success',
                message: text,
                type: 'success'
            });
        },
        // load lại dữ liệu
        loadData() {

            const self = this;
            // Lấy index bản ghi bắt đầu

            var start = this.datatb.length * (this.datatb.paginatenow - 1);
            self.datatb.start = start;

            // Ajax dữ liệu
            if (this.idDiaBan && this.role == 3) {
                axios
                    .get(self.datatb.url + '/QuanLyDuLieuKy', {
                        // Đẩy dữ liệu lên controller
                        params: {
                            // Giá trị mặc định phải có
                            // start:index bản ghi bắt đầu
                            // length:số lượng bản ghi trên 1 trang
                            // searchcolum:Các cột được phép tìm kiếm
                            // searchnow: Giá trị tìm kiêm hiện tại
                            role: this.role,
                            idDiaBan: this.idDiaBan,

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
                        for (let index = 0; index < response.data.data.length; index++) {

                            response.data.data[index].stt = start + 1;
                            start++;
                        }
                        // Dữ liệu bảng
                        self.datatb.tableData = response.data.data;
                        self.listParentId = response.data.data;
                    });
            } else {
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
                        for (let index = 0; index < response.data.data.length; index++) {

                            response.data.data[index].stt = start + 1;
                            start++;
                        }

                        self.datatb.tableData = response.data.data;
                        self.listParentId = response.data.data;
                    });
            }

        },
        //data table
        doAlertEdit(data) {
            const self = this;
            // Gán giá trị cho form
            self.dataForm.tenDonVi = data.tenDonVi;
            self.dataForm.maSo = data.maSo;
            self.dataForm.namThanhLap = data.namThanhLap;
            self.dataForm.email = data.email;
            self.dataForm.daiDienPhapLuat = data.daiDienPhapLuat;
            self.dataForm.dienThoai = data.dienThoai;
            self.dataForm.diaChi = data.diaChi;
            self.dataForm.status = data.status;
            self.dataForm.congTacTaiChinhKeToan = data.congTacTaiChinhKeToan;
            self.dataForm.truSoLamViec = data.truSoLamViec;
            self.dataForm.nguoiDaiDienNamSinh = data.nguoiDaiDienNamSinh;
            self.dataForm.nguoiDaiDienGioiTinh = data.nguoiDaiDienGioiTinh;
            self.dataForm.nguoiDaiDienDanToc = data.nguoiDaiDienDanToc;
            self.dataForm.nguoiDaiDienDienThoai = data.nguoiDaiDienDienThoai;
            self.dataForm.nguoiDaiDienDiaChi = data.nguoiDaiDienDiaChi;
            if (data.nganhNgheID == null) {
                this.dataForm.data.nganhNgheID = 0;
            } else {
                this.dataForm.data.nganhNgheID = data.nganhNgheID;
            }
            if (data.linhVucID == null) {
                this.dataForm.data.linhVucID = 0;
            } else {
                this.dataForm.data.linhVucID = data.linhVucID;
            }
            if (data.moHinhID == null) {
                this.dataForm.data.moHinhID = 0;
            } else {
                this.dataForm.data.moHinhID = data.moHinhID;
            }
            if (data.loaiHinhID == null) {
                this.dataForm.data.loaiHinhID = 0;
            } else {
                this.dataForm.data.loaiHinhID = data.loaiHinhID;
            }
            if (data.diaBanId == null) {
                this.dataForm.data.diaBanId = 0;
            } else {
                this.dataForm.data.diaBanId = data.diaBanId;
            }
            this.dataForm.quyMoThanhVienId = data.quyMoThanhVienId;
            this.dataForm.moHinhToChucId = data.moHinhToChucId;
            this.dataForm.quyMoNguonVonId = data.quyMoNguonVonId;
            this.dataForm.sanPhamDichVuId = data.sanPhamDichVuId;
            this.dataForm.namChuyenDoiTheoLuatHTX = data.namChuyenDoiTheoLuatHTX;
            this.dataForm.namThamGiaThanhVienLMHTX = data.namThamGiaThanhVienLMHTX;
            this.dataForm.coToChucDang = data.coToChucDang;
            this.dataForm.namThanhLapToChucDang = data.namThanhLapToChucDang;
            this.dataForm.soDangVienToChucDang = data.soDangVienToChucDang;
            this.dataForm.coToChucCongDoan = data.coToChucCongDoan;
            this.dataForm.namThanhLapToChucCongDoan = data.namThanhLapToChucCongDoan;
            this.dataForm.soDoanVienToChucCongDoan = data.soDoanVienToChucCongDoan;
            this.dataForm.coToChucDoanThanhNien = data.coToChucDoanThanhNien;
            this.dataForm.namThanhLapToChucDoanThanhNien = data.namThanhLapToChucDoanThanhNien;
            this.dataForm.soDoanVienToChucDoanThanhNien = data.soDoanVienToChucDoanThanhNien;

            this.dataForm.lienKet = data.lienKet;

            // Sửa tình trạng form
            this.statusForm = "update";
            this.rowId = data.id;
            this.openmodal('sua');
        },
        thongbaothatbai(text) {
            this.$notify.error({
                title: 'Error',
                message: text
            });

        },
        doAlertDelete(data) {
            const self = this;
            this.$confirm('Thao tác này không thể quay lại, bạn chắc chắn tiếp tục?', 'Cảnh báo', {
                confirmButtonText: 'Vâng, xóa nó!',
                cancelButtonText: 'Không xóa!',
                type: 'warning',
                center: true
            }).then(() => {
                axios.post(self.datatb.url + '/Delete/' + data.id)
                    .then(function (response) {
                        self.loadData();
                        console.log(response.data)
                        if (response.data == true) {
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
        doViewInfoDonVi(data) {
            // Gán giá trị cho form
            window.location.href = "xem-thong-tin-don-vi?donvi=" + data.id;
            // Sửa tình trạng form

        },
        Kiemtraquyen(event) {
            const self = this;
            var check = '';
            for (let index = 0; index < self.listLoaiHinh.length; index++) {
                if (event.target.value == self.listLoaiHinh[index].id) {

                    check = self.listLoaiHinh[index].tenLoaiHinhKinhTe;

                }
            }

            if (this.role == 5 && check == 'HND') {
                self.thongbaothatbai('Bạn không có quyền tạo đơn vị thuộc loại hình kink tế này');
                this.dataForm.data.loaiHinhID = null;

            } else if (this.role == 3 && check != 'HND') {
                self.thongbaothatbai('Bạn không có quyền tạo đơn vị thuộc loại hình kink tế này');
                this.dataForm.data.loaiHinhID = null;
            }

        },

    },
}
</script>
