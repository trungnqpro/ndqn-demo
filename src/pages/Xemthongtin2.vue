<template>
    <div id="demo" class="bg-white min-h-screen">
        <div class="col-span-12  md:block flex p-2 justify-center">
            <router-link to="quan-ly-du-lieu-ky">
                <button
                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                    <span>Quản lý hợp tác xã</span>
                </button>
            </router-link>
        </div>
        <template>
            <el-tabs type="card" @tab-click="handleClick">
                <el-tab-pane label="Thông tin chứng nhận đăng ký kinh doanh">
                    <div
                        class="sm:w-12/12 w-full sm:h-11/12 h-4/5 p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div id="hiddenScroll" class="px-4 py-6 w-full grid grid-cols-12 overflow-y-auto "
                            style="height:90%">

                            <div class="mt-5 col-span-12 md:col-span-12 md:mt-0">
                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12 bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tên đơn vị</label>
                                        <input v-model="dataFormDonVi.TenDonVi" name="TenDonVi" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('TenDonVi')">
                                            {{ dataFormDonVi.errors().get('TenDonVi') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Mã số</label>
                                        <input v-model="dataFormDonVi.MaSo" name="MaSo" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('MaSo')">
                                            {{ dataFormDonVi.errors().get('MaSo') }}
                                        </span>
                                    </div>

                                </div>
                            </div>


                            <div class="mt-5 col-span-12 md:col-span-12 md:mt-0">
                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Năm thành lập</label>
                                        <input v-model="dataFormDonVi.NamThanhLap" name="NamThanhLap" type="date" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormDonVi.errors().has('NamThanhLap')">
                                            {{ dataFormDonVi.errors().get('NamThanhLap') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                                        <input v-model="dataFormDonVi.DiaChi" name="DiaChi" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('DiaChi')">
                                            {{ dataFormDonVi.errors().get('DiaChi') }}
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <div class="mt-5 col-span-12 md:col-span-12 md:mt-0">
                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Đại diện pháp
                                            luật</label>
                                        <input v-model="dataFormDonVi.DaiDienPhapLuat" name="DaiDienPhapLuat" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormDonVi.errors().has('DaiDienPhapLuat')">
                                            {{ dataFormDonVi.errors().get('DaiDienPhapLuat') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Điện thoại</label>
                                        <input v-model="dataFormDonVi.DienThoai" name="DienThoai" type="number" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('DienThoai')">
                                            {{ dataFormDonVi.errors().get('DienThoai') }}
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <div class="col-span-12 mt-5 md:col-span-12 md:mt-0">
                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Ngành nghề</label>
                                        <select v-model="dataFormDonVi.NganhNgheID"
                                            class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                            <option selected value="">-- Chọn: --</option>
                                            <option v-for="i in listNganhNghe" :value="i.id" :key="i.id">
                                                {{ i.tenNganhNghe }}
                                            </option>
                                        </select>
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormDonVi.errors().has('NganhNgheID')">
                                            {{ dataFormDonVi.errors().get('NganhNgheID') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Lĩnh vực</label>
                                        <select v-model="dataFormDonVi.LinhVucID"
                                            class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                            <option selected value="">-- Chọn: --</option>
                                            <option v-for="i in listLinhVuc" :value="i.id" :key="i.id">
                                                {{ i.tenLinhVucHoatDong }}
                                            </option>
                                        </select>
                                        <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('LinhVucID')">
                                            {{ dataFormDonVi.errors().get('LinhVucID') }}
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <div class="col-span-12 mt-5 md:col-span-12 md:mt-0">
                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Mô hình hoạt động</label>
                                        <select v-model="dataFormDonVi.MoHinhID"
                                            class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                            <option selected value="">-- Chọn: --</option>
                                            <option v-for="i in listMoHinh" :value="i.id" :key="i.id">
                                                {{ i.tenMoHinhHoatDong }}
                                            </option>
                                        </select>
                                        <span class="mt-4 mb-2 text-red-500" v-if="dataFormDonVi.errors().has('MoHinhID')">
                                            {{ dataFormDonVi.errors().get('MohinhID') }}
                                        </span>
                                    </div>

                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Loại hình kinh tế</label>
                                        <select v-model="dataFormDonVi.LoaiHinhID"
                                            class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                            <option selected value="">-- Chọn: --</option>
                                            <option v-for="i in listLoaiHinh" :value="i.id" :key="i.id">
                                                {{ i.tenLoaiHinhKinhTe }}
                                            </option>
                                        </select>
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormDonVi.errors().has('LoaiHinhID')">
                                            {{ dataFormDonVi.errors().get('LoaiHinhID') }}
                                        </span>
                                    </div>

                                </div>
                            </div>






                        </div>


                        <!--footer-->
                        <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                            <button @click="submitformDonVi()"
                                class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>
                            <!-- @*<button @click="closemodal()" class=" items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">
                                    Hủy
                                </button>*@ -->
                        </div>


                    </div>

                </el-tab-pane>

                <el-tab-pane label="Thành viên hợp tác xã">
                    <div class="sm:w-full w-full  p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                        <div class=" w-full  overflow-auto ">
                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Tổng
                                        số:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.TongSo" type="text" name="TongSo" id="TongSo"
                                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tổng số">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormThanhVienHTX.errors().has('TongSo')">
                                        {{ dataFormThanhVienHTX.errors().get('TongSo') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Tham gia
                                        mới:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.ThamGiaMoi" type="text" name="ThamGiaMoi"
                                        id="ThamGiaMoi" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tham gia mới">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('ThamGiaMoi')">
                                        {{ dataFormThanhVienHTX.errors().get('ThamGiaMoi') }}
                                    </span>
                                </div>
                            </div>


                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Cá
                                        nhân:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.CaNhan" type="text" name="CaNhan" id="CaNhan"
                                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Cá nhân">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormThanhVienHTX.errors().has('CaNhan')">
                                        {{ dataFormThanhVienHTX.errors().get('CaNhan') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-2 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Hộ gia
                                        đình:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.HoGiaDinh" type="text" name="HoGiaDinh"
                                        id="HoGiaDinh" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Hộ gia đình">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('HoGiaDinh')">
                                        {{ dataFormThanhVienHTX.errors().get('HoGiaDinh') }}
                                    </span>
                                </div>
                            </div>


                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Pháp
                                        nhân:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.PhapNhan" type="text" name="PhapNhan" id="PhapNhan"
                                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Pháp nhân">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('PhapNhan')">
                                        {{ dataFormThanhVienHTX.errors().get('PhapNhan') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Sử dụng dịch
                                        vụ:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.SuDungDichVu" type="text" name="SuDungDichVu"
                                        id="SuDungDichVu" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Sử dụng dịch vụ">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('SuDungDichVu')">
                                        {{ dataFormThanhVienHTX.errors().get('SuDungDichVu') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Không sử dụng
                                        dịch vụ:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.KhongSuDungDichVu" type="text"
                                        name="KhongSuDungDichVu" id="KhongSuDungDichVu" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Không sử dụng dịch vụ">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('KhongSuDungDichVu')">
                                        {{ dataFormThanhVienHTX.errors().get('KhongSuDungDichVu') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nông
                                        nghiệp:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.NongNghiep" type="text" name="NongNghiep"
                                        id="NongNghiep" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Nông nghiệp">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('NongNghiep')">
                                        {{ dataFormThanhVienHTX.errors().get('NongNghiep') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Phi nông
                                        nghiệp:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.PhiNongNghiep" type="text" name="PhiNongNghiep"
                                        id="PhiNongNghiep" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Phi nông nghiệp">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('PhiNongNghiep')">
                                        {{ dataFormThanhVienHTX.errors().get('PhiNongNghiep') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">QTDND:</label>
                                    <input v-model="dataFormThanhVienHTX.QTDND" type="text" name="QTDND" id="QTDND" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="QTDND">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormThanhVienHTX.errors().has('QTDND')">
                                        {{ dataFormThanhVienHTX.errors().get('QTDND') }}
                                    </span>
                                </div>
                            </div>


                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Giá thành
                                        viên:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.GiaThanhVien" type="text" name="GiaThanhVien"
                                        id="GiaThanhVien" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Giá thành viên">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('GiaThanhVien')">
                                        {{ dataFormThanhVienHTX.errors().get('GiaThanhVien') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-2">
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Tham gia đại
                                        hội:
                                    </label>
                                    <input v-model="dataFormThanhVienHTX.ThamGiaDaiHoi" type="text" name="ThamGiaDaiHoi"
                                        id="ThamGiaDaiHoi" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tham gia đại hội">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienHTX.errors().has('ThamGiaDaiHoi')">
                                        {{ dataFormThanhVienHTX.errors().get('ThamGiaDaiHoi') }}
                                    </span>
                                </div>
                            </div>




                        </div>



                        <!--footer-->
                        <div class=" text-center md:block pt-4">
                            <button @click="submitformThanhVienHTX()"
                                class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>
                            <!-- 
                                    <button @click="closemodal()" class="inline-flex items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">
                                    Hủy
                                </button>*@ -->
                        </div>

                    </div>

                </el-tab-pane>


                <el-tab-pane label="Kết quả kinh doanh">
                    <div class="sm:w-full w-full  sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div class=" w-full  overflow-auto ">
                            <div
                                class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                                <div id="hiddenScroll" class="px-1 py-6 w-full grid grid-cols-12 overflow-y-auto "
                                    style="height:90%">

                                    <div class="mt-5 md:col-span-12 col-span-12 md:mt-0">
                                        <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                            <div class="sm:col-span-6 col-span-12 bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Tổng Doanh
                                                    Thu</label>
                                                <input v-model="dataFormKetQuaKD.TongDoanhThu" name="TongDoanhThu"
                                                    type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('TongDoanhThu')">
                                                    {{ dataFormKetQuaKD.errors().get('TongDoanhThu') }}
                                                </span>
                                            </div>

                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Tổng Quỹ
                                                    Lương</label>
                                                <input v-model="dataFormKetQuaKD.TongQuyLuong" name="TongQuyLuong"
                                                    type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('TongQuyLuong')">
                                                    {{ dataFormKetQuaKD.errors().get('TongQuyLuong') }}
                                                </span>
                                            </div>
                                        </div>
                                        



                                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trước
                                                    Thuế</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanTruocThue" name="LoiNhuanTruocThue"
                                                    type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanTruocThue')">
                                                    {{ dataFormKetQuaKD.errors().get('LoiNhuanTruocThue') }}
                                                </span>
                                            </div>

                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Sau
                                                    Thuế</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanSauThue" name="LoiNhuanSauThue"
                                                    type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanSauThue')">
                                                    {{ dataFormKetQuaKD.errors().get('LoiNhuanSauThue') }}
                                                </span>
                                            </div>
                                        </div>


                                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trích Quỹ
                                                    DTPT</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanTrichQuyDTPT"
                                                    name="LoiNhuanTrichQuyDTPT" type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanTrichQuyDTPT')">
                                                    {{ dataFormKetQuaKD.errors().get('LoiNhuanTrichQuyDTPT') }}
                                                </span>
                                            </div>
                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trích Quỹ
                                                    DPTC</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanTrichQuyDPTC"
                                                    name="LoiNhuanTrichQuyDPTC" type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanTrichQuyDPTC')">
                                                    {{ dataFormKetQuaKD.errors().get('LoiNhuanTrichQuyDPTC') }}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Trích Quỹ
                                                    Khác</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanTrichQuyKhac"
                                                    name="LoiNhuanTrichQuyKhac" type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanTrichQuyKhac')">
                                                    {{ dataFormKetQuaKD.errors().get('LoiNhuanTrichQuyKhac') }}
                                                </span>
                                            </div>
                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Chia Thành
                                                    Viên
                                                    Theo Sử Dụng Dịch Vụ</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanChiaThanhVienTheoSuDungDichVu"
                                                    name="LoiNhuanChiaThanhVienTheoSuDungDichVu" type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanChiaThanhVienTheoSuDungDichVu')">
                                                    {{
                                                        dataFormKetQuaKD.errors().get('LoiNhuanChiaThanhVienTheoSuDungDichVu')
                                                    }}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Chia Thành
                                                    Viên
                                                    Theo Góp Vốn</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanChiaThanhVienTheoGopVon"
                                                    name="LoiNhuanChiaThanhVienTheoGopVon" type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanChiaThanhVienTheoGopVon')">
                                                    {{ dataFormKetQuaKD.errors().get('LoiNhuanChiaThanhVienTheoGopVon') }}
                                                </span>
                                            </div>
                                            <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                                <label class="block text-sm font-medium text-gray-700">Lợi Nhuận Chia Theo
                                                    Thành
                                                    Viên Khác</label>
                                                <input v-model="dataFormKetQuaKD.LoiNhuanChiaThanhVienTheoKhac"
                                                    name="LoiNhuanChiaThanhVienTheoKhac" type="text" required
                                                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <span class="mt-4 mb-2 text-red-500"
                                                    v-if="dataFormKetQuaKD.errors().has('LoiNhuanChiaThanhVienTheoKhac')">
                                                    {{ dataFormKetQuaKD.errors().get('LoiNhuanChiaThanhVienTheoKhac') }}
                                                </span>
                                            </div>
                                        </div>
                                        
                                    
                                    </div>
                                   
                                </div>


                                <!--footer-->
                                <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                                    <button @click="submitformKetQuaKinhDoanh()"
                                        class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Lưu
                                    </button>

                                </div>


                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="Lao động hợp tác xã">
                    <div class="sm:w-12/12 w-12/12  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div class=" w-full  overflow-auto ">

                            <div class="grid grid-cols-12">
                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tổng
                                        số:</label>
                                    <input v-model="dataFormLaoDongHTX.TongSo" type="text" name="TongSo" id="TongSo" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tổng số">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormLaoDongHTX.errors().has('TongSo')">
                                        {{ dataFormLaoDongHTX.errors().get('TongSo') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Không
                                        thành viên:</label>
                                    <input v-model="dataFormLaoDongHTX.KhongThanhVien" type="text" name="KhongThanhVien"
                                        id="KhongThanhVien" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Không thành viên">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('KhongThanhVien')">
                                        {{ dataFormLaoDongHTX.errors().get('KhongThanhVien') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12">
                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thuộc HND
                                        cung ứng dịch vụ:</label>
                                    <input v-model="dataFormLaoDongHTX.ThuocHTXCungUngDichVu" type="text"
                                        name="ThuocHTXCungUngDichVu" id="ThuocHTXCungUngDichVu" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Thuộc HND cung ứng dịch vụ">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('ThuocHTXCungUngDichVu')">
                                        {{ dataFormLaoDongHTX.errors().get('ThuocHTXCungUngDichVu') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thuộc HND
                                        tạo việc làm thành viên:</label>
                                    <input v-model="dataFormLaoDongHTX.ThuocHTXTaoViecLamThanhVien" type="text"
                                        name="ThuocHTXTaoViecLamThanhVien" id="ThuocHTXTaoViecLamThanhVien" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Thuộc HND tạo việc làm thành viên">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('ThuocHTXTaoViecLamThanhVien')">
                                        {{ dataFormLaoDongHTX.errors().get('ThuocHTXTaoViecLamThanhVien') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lao động
                                        nam:</label>
                                    <input v-model="dataFormLaoDongHTX.LaoDongNam" type="text" name="LaoDongNam"
                                        id="LaoDongNam" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Lao động nam">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('LaoDongNam')">
                                        {{ dataFormLaoDongHTX.errors().get('LaoDongNam') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lao động
                                        nữ:</label>
                                    <input v-model="dataFormLaoDongHTX.LaoDongNu" type="text" name="LaoDongNu"
                                        id="LaoDongNu" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Lao động nữ">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('LaoDongNu')">
                                        {{ dataFormLaoDongHTX.errors().get('LaoDongNu') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cao đẳng
                                        đại học:</label>
                                    <input v-model="dataFormLaoDongHTX.CaoDangDaiHoc" type="text" name="CaoDangDaiHoc"
                                        id="CaoDangDaiHoc" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Cao đẳng đại học">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('CaoDangDaiHoc')">
                                        {{ dataFormLaoDongHTX.errors().get('CaoDangDaiHoc') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trung
                                        cấp:</label>
                                    <input v-model="dataFormLaoDongHTX.TrungCap" type="text" name="TrungCap" id="TrungCap"
                                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Trung cấp">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormLaoDongHTX.errors().has('TrungCap')">
                                        {{ dataFormLaoDongHTX.errors().get('TrungCap') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sơ
                                        cấp:</label>
                                    <input v-model="dataFormLaoDongHTX.SoCap" type="text" name="SoCap" id="SoCap" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Sơ cấp">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormLaoDongHTX.errors().has('SoCap')">
                                        {{ dataFormLaoDongHTX.errors().get('SoCap') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chưa qua
                                        đào tạo:</label>
                                    <input v-model="dataFormLaoDongHTX.ChuaQuaDaoTao" type="text" name="ChuaQuaDaoTao"
                                        id="ChuaQuaDaoTao" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Chưa qua đào tạo">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('ChuaQuaDaoTao')">
                                        {{ dataFormLaoDongHTX.errors().get('ChuaQuaDaoTao') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tham gia
                                        BHXH:</label>
                                    <input v-model="dataFormLaoDongHTX.ThamGiaBHXH" type="text" name="ThamGiaBHXH"
                                        id="ThamGiaBHXH" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tham gia BHXH">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('ThamGiaBHXH')">
                                        {{ dataFormLaoDongHTX.errors().get('ThamGiaBHXH') }}
                                    </span>
                                </div>

                                <div class="sm:col-span-6 col-span-12 sm:px-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Là
                                        thành viên:</label>
                                    <input v-model="dataFormLaoDongHTX.LaThanhVien" type="text" name="LaThanhVien"
                                        id="LaThanhVien" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tham gia BHXH">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormLaoDongHTX.errors().has('LaThanhVien')">
                                        {{ dataFormLaoDongHTX.errors().get('LaThanhVien') }}
                                    </span>
                                </div>

                            </div>



                        </div>



                        <!--footer-->
                        <div class=" text-center  md:block pt-4">
                            <button @click="submitformLaoDongHTX()"
                                class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>

                    </div>
                </el-tab-pane>


                <el-tab-pane label="Vốn điều lệ">
                    <div class="sm:w-12/12 w-12/12  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div class=" w-full  overflow-auto ">
                            <div class="grid grid-cols-12 ">
                                <div class="col-span-12 sm:col-span-6">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tổng vốn
                                        điều lệ:</label>
                                    <input v-model="dataFormVonDieuLe.TongVonDieuLe" type="text" name="TongVonDieuLe"
                                        id="TongVonDieuLe" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tổng vốn điều lệ">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormVonDieuLe.errors().has('TongVonDieuLe')">
                                        {{ dataFormVonDieuLe.errors().get('TongVonDieuLe') }}
                                    </span>
                                </div>

                                <div class="col-span-12 sm:col-span-6 pl-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tổng
                                        thành viên góp:</label>
                                    <input v-model="dataFormVonDieuLe.TongThanhVienGop" type="text" name="TongThanhVienGop"
                                        id="TongThanhVienGop" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tổng thành viên góp">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormVonDieuLe.errors().has('TongThanhVienGop')">
                                        {{ dataFormVonDieuLe.errors().get('TongThanhVienGop') }}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 ">
                                <div class="col-span-12 sm:col-span-6">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thấp
                                        nhất:</label>
                                    <input v-model="dataFormVonDieuLe.ThapNhat" type="text" name="ThapNhat" id="ThapNhat"
                                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Thấp nhất">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormVonDieuLe.errors().has('ThapNhat')">
                                        {{ dataFormVonDieuLe.errors().get('ThapNhat') }}
                                    </span>
                                </div>

                                <div class="col-span-12 sm:col-span-6 pl-1">
                                    <label for="Name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cao
                                        nhất:</label>
                                    <input v-model="dataFormVonDieuLe.CaoNhat" type="text" name="CaoNhat" id="CaoNhat"
                                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Cao nhất">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormVonDieuLe.errors().has('CaoNhat')">
                                        {{ dataFormVonDieuLe.errors().get('CaoNhat') }}
                                    </span>
                                </div>
                            </div>



                        </div>



                        <!--footer-->
                        <div class=" text-center  md:block pt-4">
                            <button @click="submitformVonDieuLe()"
                                class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>

                    </div>
                </el-tab-pane>

                <el-tab-pane label="Lao động liên minh hợp tác xã">

                    <div
                        class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto "
                            style="height:90%">

                            <div class="mt-5 md:col-span-12 col-span-12 md:mt-0">
                                <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tổng Số</label>
                                        <input v-model="dataFormLaoDongLMHTX.TongSo" name="TongSo" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormLaoDongLMHTX.errors().has('TongSo')">
                                            {{ dataFormLaoDongLMHTX.errors().get('TongSo') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Cao Đẳng Đại Học</label>
                                        <input v-model="dataFormLaoDongLMHTX.CaoDangDaiHoc" name="CaoDangDaiHoc" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormLaoDongLMHTX.errors().has('CaoDangDaiHoc')">
                                            {{ dataFormLaoDongLMHTX.errors().get('CaoDangDaiHoc') }}
                                        </span>
                                    </div>
                                </div>

                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Trung Cấp</label>
                                        <input v-model="dataFormLaoDongLMHTX.TrungCap" name="TrungCap " type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormLaoDongLMHTX.errors().has('TrungCap')">
                                            {{ dataFormLaoDongLMHTX.errors().get('TrungCap') }}
                                        </span>
                                    </div>

                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Sơ Cấp</label>
                                        <input v-model="dataFormLaoDongLMHTX.SoCap" name="SoCap" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormLaoDongLMHTX.errors().has('SoCap')">
                                            {{ dataFormLaoDongLMHTX.errors().get('SoCap') }}
                                        </span>
                                    </div>
                                </div>



                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Chưa Qua Đào Tạo</label>
                                        <input v-model="dataFormLaoDongLMHTX.ChuaQuaDaoTao" name="ChuaQuaDaoTao" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormLaoDongLMHTX.errors().has('ChuaQuaDaoTao')">
                                            {{ dataFormLaoDongLMHTX.errors().get('ChuaQuaDaoTao') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tham Gia BHXH</label>
                                        <input v-model="dataFormLaoDongLMHTX.ThamGiaBHXH" name="ThamGiaBHXH" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormLaoDongLMHTX.errors().has('ThamGiaBHXH')">
                                            {{ dataFormLaoDongLMHTX.errors().get('ThamGiaBHXH') }}
                                        </span>
                                    </div>

                                </div>







                            </div>
                        </div>


                        <!--footer-->
                        <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                            <button @click="submitformLaoDongLMHTX()"
                                class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>


                    </div>

                </el-tab-pane>

                <el-tab-pane label="Thành viên liên minh hợp tác xã">
                    <div
                        class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto "
                            style="height:90%">

                            <div class="mt-5 md:col-span-12 col-span-12 md:mt-0">
                                <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tổng số</label>
                                        <input v-model="dataFormThanhVienLMHTX.TongSo" name="TongSo" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormThanhVienLMHTX.errors().has('TongSo')">
                                            {{ dataFormThanhVienLMHTX.errors().get('TongSo') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tham gia mời</label>
                                        <input v-model="dataFormThanhVienLMHTX.ThamGiaMoi" name="ThamGiaMoi" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormThanhVienLMHTX.errors().has('ThamGiaMoi')">
                                            {{ dataFormThanhVienLMHTX.errors().get('ThamGiaMoi') }}
                                        </span>
                                    </div>
                                </div>



                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Không sử dụng dịch vụ</label>
                                        <input v-model="dataFormThanhVienLMHTX.KhongSuDungDichVu" name="KhongSuDungDichVu"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormThanhVienLMHTX.errors().has('KhongSuDungDichVu')">
                                            {{ dataFormThanhVienLMHTX.errors().get('KhongSuDungDichVu') }}
                                        </span>
                                    </div>

                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Sử dụng dịch vụ NHHTX</label>
                                        <input v-model="dataFormThanhVienLMHTX.SuDungDichVuNHHTX" name="SuDungDichVuNHHTX"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormThanhVienLMHTX.errors().has('SuDungDichVuNHHTX')">
                                            {{ dataFormThanhVienLMHTX.errors().get('SuDungDichVuNHHTX') }}
                                        </span>
                                    </div>
                                </div>



                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Sử dụng dịch vụ nông
                                            nghiệp</label>
                                        <input v-model="dataFormThanhVienLMHTX.SưDungDichVuNongNghiep"
                                            name="SưDungDichVuNongNghiep" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormThanhVienLMHTX.errors().has('SưDungDichVuNongNghiep')">
                                            {{ dataFormThanhVienLMHTX.errors().get('SưDungDichVuNongNghiep') }}
                                        </span>
                                    </div>

                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Sử dụng dịch vụ phi nông
                                            nghiệp</label>
                                        <input v-model="dataFormThanhVienLMHTX.SuDungDichVuPhiNongNghiep"
                                            name="SuDungDichVuPhiNongNghiep" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormThanhVienLMHTX.errors().has('SuDungDichVuPhiNongNghiep')">
                                            {{ dataFormThanhVienLMHTX.errors().get('SuDungDichVuPhiNongNghiep') }}
                                        </span>
                                    </div>
                                </div>



                                <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                    <label class="block text-sm font-medium text-gray-700">GiaThanhVien</label>
                                    <input v-model="dataFormThanhVienLMHTX.GiaThanhVien" name="GiaThanhVien" type="text"
                                        required
                                        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormThanhVienLMHTX.errors().has('GiaThanhVien')">
                                        {{ dataFormThanhVienLMHTX.errors().get('GiaThanhVien') }}
                                    </span>
                                </div>



                            </div>
                        </div>


                        <!--footer-->
                        <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                            <button @click="submitformThanhVienLMHTX()"
                                class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>


                    </div>
                </el-tab-pane>

                <el-tab-pane label="Chính sách">

                    <div
                        class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto "
                            style="height:90%">

                            <div class="mt-5 col-span-12 md:col-span-12 md:mt-0">
                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-12 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Hỗ Trợ XTTM</label>
                                        <input v-model="dataFormChinhSach.HoTroXTTM" name="HoTroXTTM" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('HoTroXTTM')">
                                            {{ dataFormChinhSach.errors().get('HoTroXTTM') }}
                                        </span>
                                    </div>
                                </div>
                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Hỗ Trợ KHKT</label>
                                        <input v-model="dataFormChinhSach.HoTroKHKT" name="HoTroKHKT" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('HoTroKHKT')">
                                            {{ dataFormChinhSach.errors().get('HoTroKHKT') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Hỗ Trợ Tiếp Cận Vốn</label>
                                        <input v-model="dataFormChinhSach.HoTroTiepCanVon" name="HoTroTiepCanVon"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('HoTroTiepCanVon')">
                                            {{ dataFormChinhSach.errors().get('HoTroTiepCanVon') }}
                                        </span>
                                    </div>
                                </div>



                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Hỗ Trợ Tham Gia Các Chương
                                            Trình</label>
                                        <input v-model="dataFormChinhSach.HoTroThamGiaCacChuongTrinh"
                                            name="HoTroThamGiaCacChuongTrinh" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('HoTroThamGiaCacChuongTrinh')">
                                            {{ dataFormChinhSach.errors().get('HoTroThamGiaCacChuongTrinh') }}
                                        </span>
                                    </div>

                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Hỗ Trợ Thành Lập Mới</label>
                                        <input v-model="dataFormChinhSach.HoTroThanhLapMoi"
                                            name="TaiSanDieuLeQuyDinhKhongChua" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('HoTroThanhLapMoi')">
                                            {{ dataFormChinhSach.errors().get('HoTroThanhLapMoi') }}
                                        </span>
                                    </div>
                                </div>

                                <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">NN_Hỗ Trợ Đầu Tư Phát Triển
                                            Hạ
                                            Tầng</label>
                                        <input v-model="dataFormChinhSach.NN_HoTroDauTuPhaTrienHaTang"
                                            name="NN_HoTroDauTuPhaTrienHaTang" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('NN_HoTroDauTuPhaTrienHaTang')">
                                            {{ dataFormChinhSach.errors().get('NN_HoTroDauTuPhaTrienHaTang') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">NN_Hỗ Trợ Ưu Đãi Đất</label>
                                        <input v-model="dataFormChinhSach.NN_HoTroUuDaiDat" name="NN_HoTroUuDaiDat"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('NN_HoTroUuDaiDat')">
                                            {{ dataFormChinhSach.errors().get('NN_HoTroUuDaiDat') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">NN_Hỗ Trợ Ưu Đãi Tín
                                            Dụng</label>
                                        <input v-model="dataFormChinhSach.NN_HoTroUuDaiTinDung" name="NN_HoTroUuDaiTinDung"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('NN_HoTroUuDaiTinDung')">
                                            {{ dataFormChinhSach.errors().get('NN_HoTroUuDaiTinDung') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">NN_Hỗ Trợ Ưu Vốn
                                            Giống</label>
                                        <input v-model="dataFormChinhSach.NN_HoTroVonGiong" name="NN_HoTroVonGiong"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormChinhSach.errors().has('NN_HoTroVonGiong')">
                                            {{ dataFormChinhSach.errors().get('NN_HoTroVonGiong') }}
                                        </span>
                                    </div>

                                </div>
                                <div class="mt-5 md:col-span-12 md:mt-0">
                                    <div class="shadow sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">NN_Hỗ Trợ Ưu Đãi Tín
                                                Dụng</label>
                                            <input v-model="dataFormChinhSach.NN_HoTRoCheBienSanPham"
                                                name="NN_HoTRoCheBienSanPham" type="text" required
                                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <span class="mt-4 mb-2 text-red-500"
                                                v-if="dataFormChinhSach.errors().has('NN_HoTRoCheBienSanPham')">
                                                {{ dataFormChinhSach.errors().get('NN_HoTRoCheBienSanPham') }}
                                            </span>
                                        </div>
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">NN_Hỗ Trợ Khác</label>
                                            <input v-model="dataFormChinhSach.NN_HoTroKhac" name="NN_HoTroKhac" type="text"
                                                required
                                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <span class="mt-4 mb-2 text-red-500"
                                                v-if="dataFormChinhSach.errors().has('NN_HoTroKhac')">
                                                {{ dataFormChinhSach.errors().get('NN_HoTroKhac') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- @* <div class="mt-5 md:col-span-12 col-span-12 md:mt-0">
                            <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                    <label class="block text-sm font-medium text-gray-700">Don Vi</label>
                                    <select v-model="dataFormChinhSach.DonViId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                        <option selected value="">-- Chọn: --</option>
                                        <option v-for="i in listDonVi" :value="i.Id" :key="i.id">
                                            {{i.TenDonVi}}
                                        </option>
                                    </select>
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormChinhSach.errors().has('DonViId')">
                                        {{ dataFormChinhSach.errors().get('DonViId') }}
                                    </span>
                                </div>
                                <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                    <label class="block text-sm font-medium text-gray-700">Ky Bien Dong</label>
                                    <select v-model="dataFormChinhSach.KyBienDongId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                        <option selected value="">-- Chọn: --</option>
                                        <option v-for="i in listKyBienDong" :value="i.Id" :key="i.id">
                                                    {{i.TenKyBienDong}}
                                                </option>
                                            </select>
                                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormChinhSach.errors().has('KyBienDongId')">
                                                {{ dataFormChinhSach.errors().get('KyBienDongId') }}
                                            </span>
                                        </div>

                                    </div>
                                </div>*@ -->

                        </div>


                        <!--footer-->
                        <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                            <button @click="submitformChinhSach()"
                                class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>


                    </div>

                </el-tab-pane>

                <el-tab-pane label="Trình độ cán bộ chủ chốt">
                    <div
                        class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto "
                            style="height:90%">

                            <!-- @*<div class="mt-5 md:col-span-12 col-span-12 md:mt-0">
                                    <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                        <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                            <label class="block text-sm font-medium text-gray-700">Chuc Danh</label>
                                            <input v-model="dataFormTrinhDoCanBoChuChot.ChucDanh" name="ChucDanh" type="text" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormTrinhDoCanBoChuChot.errors().has('ChucDanh')">
                                                {{ dataFormTrinhDoCanBoChuChot.errors().get('ChucDanh') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>*@ -->
                            <div class="mt-5 md:col-span-12 col-span-12 md:mt-0">
                                <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Chức danh</label>
                                        <input v-model="dataFormTrinhDoCanBoChuChot.ChucDanh" name="ChucDanh" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTrinhDoCanBoChuChot.errors().has('ChucDanh')">
                                            {{ dataFormTrinhDoCanBoChuChot.errors().get('ChucDanh') }}
                                        </span>
                                    </div>

                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Trình độ</label>
                                        <select v-model="dataFormTrinhDoCanBoChuChot.TrinhDoID"
                                            class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                            <option selected value="">-- Chọn: --</option>
                                            <option v-for="i in listTrinhDo" :value="i.id" :key="i.id">
                                                {{ i.name }}
                                            </option>
                                        </select>
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTrinhDoCanBoChuChot.errors().has('TrinhDoID')">
                                            {{ dataFormTrinhDoCanBoChuChot.errors().get('TrinhDoID') }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <!--footer-->
                        <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                            <button @click="submitformTrinhDoCanboChuChot()"
                                class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>


                    </div>
                </el-tab-pane>

                <el-tab-pane label="Tài sản">

                    <div
                        class="sm:w-12/12 w-12/12 sm:h-11/12 h-4/5 sm:p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div id="hiddenScroll" class="sm:px-4 py-6 w-full grid grid-cols-12 overflow-y-auto "
                            style="height:90%">

                            <div class="mt-5 col-span-12 md:col-span-12 md:mt-0">
                                <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-12 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tổng Công Tài Sản</label>
                                        <input v-model="dataFormTaiSan.TongCongTaiSan" name="TongCongTaiSan" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTaiSan.errors().has('TongCongTaiSan')">
                                            {{ dataFormTaiSan.errors().get('TongCongTaiSan') }}
                                        </span>
                                    </div>
                                </div>
                                <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tài Sản Đất Không
                                            Chia</label>
                                        <input v-model="dataFormTaiSan.TaiSanDatKhongChia" name="TaiSanDatKhongChia"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTaiSan.errors().has('TaiSanDatKhongChia')">
                                            {{ dataFormTaiSan.errors().get('TaiSanDatKhongChia') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tài Sản Ho Tro Không
                                            Chia</label>
                                        <input v-model="dataFormTaiSan.TaiSanHoTroKhongChia" name="TaiSanHoTroKhongChia"
                                            type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTaiSan.errors().has('TaiSanHoTroKhongChia')">
                                            {{ dataFormTaiSan.errors().get('TaiSanHoTroKhongChia') }}
                                        </span>
                                    </div>
                                </div>



                                <div class="shadow sm:overflow-hidden col-span-12 sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tài Sản trích lại Không
                                            Chia</label>
                                        <input v-model="dataFormTaiSan.TaiSanTrichLaiKhongChia"
                                            name="TaiSanTrichLaiKhongChia" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTaiSan.errors().has('TaiSanTrichLaiKhongChia')">
                                            {{ dataFormTaiSan.errors().get('TaiSanTrichLaiKhongChia') }}
                                        </span>
                                    </div>

                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label
                                            class="block text-sm font-medium text-gray-700">TaiSanDieuLeQuyDinhKhongChua</label>
                                        <input v-model="dataFormTaiSan.TaiSanDieuLeQuyDinhKhongChua"
                                            name="TaiSanDieuLeQuyDinhKhongChua" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTaiSan.errors().has('TaiSanDieuLeQuyDinhKhongChua')">
                                            {{ dataFormTaiSan.errors().get('TaiSanDieuLeQuyDinhKhongChua') }}
                                        </span>
                                    </div>
                                </div>

                                <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">Tài Sản Đất Không
                                            Chia</label>
                                        <input v-model="dataFormTaiSan.VonNoPhaiTra" name="VonNoPhaiTra" type="text"
                                            required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTaiSan.errors().has('VonNoPhaiTra')">
                                            {{ dataFormTaiSan.errors().get('VonNoPhaiTra') }}
                                        </span>
                                    </div>
                                    <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                        <label class="block text-sm font-medium text-gray-700">VonChuSoHuu</label>
                                        <input v-model="dataFormTaiSan.VonChuSoHuu" name="VonChuSoHuu" type="text" required
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <span class="mt-4 mb-2 text-red-500"
                                            v-if="dataFormTaiSan.errors().has('VonChuSoHuu')">
                                            {{ dataFormTaiSan.errors().get('VonChuSoHuu') }}
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <!-- @*<div class="mt-5 md:col-span-12 col-span-12 md:mt-0">
                            <div class="shadow col-span-12 sm:overflow-hidden sm:rounded-md grid grid-cols-12 ">
                                <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                    <label class="block text-sm font-medium text-gray-700">Don Vi</label>
                                    <select v-model="dataFormTaiSan.DonViId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                        <option selected value="">-- Chọn: --</option>
                                        <option v-for="i in listDonVi" :value="i.Id" :key="i.id">
                                            {{i.TenDonVi}}
                                        </option>
                                    </select>
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataFormTaiSan.errors().has('DonViId')">
                                        {{ dataFormTaiSan.errors().get('DonViId') }}
                                    </span>
                                </div>
                                <div class="sm:col-span-6 col-span-12  bg-white px-4 py-5 sm:p-4">
                                    <label class="block text-sm font-medium text-gray-700">Ky Bien Dong</label>
                                    <select v-model="dataFormTaiSan.KyBienDongId" class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                        <option selected value="">-- Chọn: --</option>
                                        <option v-for="i in listKyBienDong" :value="i.Id" :key="i.id">
                                                    {{i.TenKyBienDong}}
                                                </option>
                                            </select>
                                            <span class="mt-4 mb-2 text-red-500" v-if="dataFormTaiSan.errors().has('KyBienDongId')">
                                                {{ dataFormTaiSan.errors().get('KyBienDongId') }}
                                            </span>
                                        </div>

                                    </div>
                                </div>*@ -->

                        </div>


                        <!--footer-->
                        <div class="col-span-12 text-center  md:block flex p-2 justify-center">
                            <button @click="submitformTaiSan()"
                                class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>


                    </div>

                </el-tab-pane>

                <el-tab-pane label="Hoạt động đầu tư">
                    <div class="sm:w-12/12 w-12/12  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div class=" w-full  overflow-auto ">





                            <div class="grid grid-cols-12 ">
                                <div class="col-span-12">
                                    <!-- @* here*@ -->
                                    <label for="TongVonDieuLeDoanhNghiep"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tổng vốn điều
                                        lệ doanh
                                        nghiệp:</label>
                                    <input v-model="dataFormHoatDongDautu.TongVonDieuLeDoanhNghiep" type="text"
                                        name="TongVonDieuLeDoanhNghiep" id="TongVonDieuLeDoanhNghiep" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="tongvondieule">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormHoatDongDautu.errors().has('TongVonDieuLeDoanhNghiep')">
                                        {{ dataFormHoatDongDautu.errors().get('TongVonDieuLeDoanhNghiep') }}
                                    </span>
                                </div>

                            </div>

                            <div class="grid grid-cols-12 mt-3">
                                <div class="col-span-12">
                                    <!-- @* here*@ -->
                                    <label for="TongVonGop"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tổng vốn
                                        góp:</label>
                                    <input v-model="dataFormHoatDongDautu.TongVonGop" type="text" name="TongVongop"
                                        id="TongVongop" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="tongvondieule">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormHoatDongDautu.errors().has('TongVonGop')">
                                        {{ dataFormHoatDongDautu.errors().get('TongVonGop') }}
                                    </span>
                                </div>

                            </div>

                            <div class="grid grid-cols-12 mt-3">
                                <div class="col-span-12">
                                    <!-- @* here*@ -->
                                    <label for="TongCoPhan"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tổng cổ
                                        phần:</label>
                                    <input v-model="dataFormHoatDongDautu.TongCoPhan" type="text" name="TongCoPhan"
                                        id="TongCoPhan" class=" border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="tongvondieule">
                                    <span class="mt-4 mb-2 text-red-500"
                                        v-if="dataFormHoatDongDautu.errors().has('TongCoPhan')">
                                        {{ dataFormHoatDongDautu.errors().get('TongCoPhan') }}
                                    </span>
                                </div>

                            </div>




                        </div>



                        <!--footer-->
                        <div class=" text-center  md:block pt-4">
                            <button @click="submitformHoatDongDauTu()"
                                class="inline-flex mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu
                            </button>

                        </div>

                    </div>
                </el-tab-pane>

            </el-tabs>
            <!-- @*<div class="col-span-12 text-center  md:block flex p-2 justify-center">
                    <button @click="submitform()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Lưu hiện vật
                    </button>

                </div>*@ -->
        </template>

    </div>
</template>



<script>
import axios from 'axios';
import form from 'vuejs-form'
// import {
//         v4 as uuidv4
//     } from "https://jspm.dev/uuid";

export default {
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
                DiaBanId: ''



            })
                .rules({


                    TenDonVi: 'required',
                    MaSo: 'required',
                    NamThanhLap: 'required',
                    DiaChi: 'required',
                    DaiDienPhapLuat: 'required',
                    DienThoai: 'required',
                    NganhNgheID: 'required',
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
                    'NganhNgheID.required': 'Trường bắt buộc nhập',
                    'LinhVucID.required': 'Trường bắt buộc nhập',
                    'MoHinhID.required': 'Trường bắt buộc nhập',
                    'LoaiHinhID.required': 'Trường bắt buộc nhập',







                }),

            dataFormThanhVienHTX: form({
                TongSo: '',
                ThamGiaMoi: '',

                CaNhan: '',
                HoGiaDinh: '',
                PhapNhan: '',
                SuDungDichVu: '',
                KhongSuDungDichVu: '',
                NongNghiep: '',
                PhiNongNghiep: '',
                QTDND: '',
                GiaThanhVien: '',
                ThamGiaDaiHoi: '',
                DonViId: 0,
                KyBienDongId: 0,


            })
                .rules({
                    TongSo: 'required',
                    ThamGiaMoi: 'required',
                    CaNhan: 'required',
                    HoGiaDinh: 'required',
                    PhapNhan: 'required',
                    SuDungDichVu: 'required',
                    KhongSuDungDichVu: 'required',
                    NongNghiep: 'required',
                    PhiNongNghiep: 'required',
                    QTDND: 'required',
                    GiaThanhVien: 'required',
                    ThamGiaDaiHoi: 'required',


                })
                .messages({
                    'TongSo.required': 'Trường bắt buộc nhập',
                    'ThamGiaMoi.required': 'Trường bắt buộc nhập',
                    'CaNhan.required': 'Trường bắt buộc nhập',
                    'HoGiaDinh.required': 'Trường bắt buộc nhập',
                    'PhapNhan.required': 'Trường bắt buộc nhập',
                    'SuDungDichVu.required': 'Trường bắt buộc nhập',
                    'KhongSuDungDichVu.required': 'Trường bắt buộc nhập',
                    'NongNghiep.required': 'Trường bắt buộc nhập',
                    'PhiNongNghiep.required': 'Trường bắt buộc nhập',
                    'QTDND.required': 'Trường bắt buộc nhập',
                    'GiaThanhVien.required': 'Trường bắt buộc nhập',
                    'ThamGiaDaiHoi.required': 'Trường bắt buộc nhập',
                }),

            dataFormKetQuaKD: form({
                TongDoanhThu: '',
                DoanhThuThanhVien: '',
                TyLeKetQua: '',
                LoiNhuanTruocThue: '',
                LoiNhuanSauThue: '',
                LoiNhuanTrichQuyDTPT: '',
                LoiNhuanTrichQuyDPTC: '',
                LoiNhuanTrichQuyKhac: '',
                LoiNhuanChiaThanhVienTheoSuDungDichVu: '',
                LoiNhuanChiaThanhVienTheoGopVon: '',
                LoiNhuanChiaThanhVienTheoKhac: '',
                TongQuyLuong: '',
                TongKhachHangVayvon: '',
                TongDuNoChoVay: '',
                DonViId: 0,
                KyBienDongId: 0,



            })
                .rules({
                    TongDoanhThu: 'required',
                    DoanhThuThanhVien: 'required',
                    TyLeKetQua: 'required',
                    LoiNhuanTruocThue: 'required',
                    LoiNhuanSauThue: 'required',



                })
                .messages({

                    'TongDoanhThu.required': 'Trường bắt buộc nhập',
                    'DoanhThuThanhVien.required': 'Trường bắt buộc nhập',
                    'TyLeKetQua.required': 'Trường bắt buộc nhập',
                    'LoiNhuanTruocThue.required': 'Trường bắt buộc nhập',
                    'LoiNhuanSauThue.required': 'Trường bắt buộc nhập',


                }),

            dataFormLaoDongHTX: form({
                TongSo: '',
                LaThanhVien: '',
                KhongThanhVien: '',
                ThuocHTXCungUngDichVu: '',
                ThuocHTXTaoViecLamThanhVien: '',
                LaoDongNam: '',
                LaoDongNu: '',
                CaoDangDaiHoc: '',
                TrungCap: '',
                SoCap: '',
                ChuaQuaDaoTao: '',
                ThamGiaBHXH: '',
                DonViId: 0,
                KyBienDongId: 0,


            })
                .rules({
                    TongSo: 'required',

                    KhongThanhVien: 'required',
                    ThuocHTXCungUngDichVu: 'required',
                    ThuocHTXTaoViecLamThanhVien: 'required',
                    LaoDongNam: 'required',
                    LaoDongNu: 'required',
                    CaoDangDaiHoc: 'required',
                    TrungCap: 'required',
                    SoCap: 'required',
                    ChuaQuaDaoTao: 'required',
                    ThamGiaBHXH: 'required',
                    DonViId: 'required',
                    KyBienDongId: 'required',

                })
                .messages({
                    'TongSo.required': 'Trường bắt buộc nhập',

                    'KhongThanhVien.required': 'Trường bắt buộc nhập',
                    'ThuocHTXCungUngDichVu.required': 'Trường bắt buộc nhập',
                    'ThuocHTXTaoViecLamThanhVien.required': 'Trường bắt buộc nhập',
                    'LaoDongNam.required': 'Trường bắt buộc nhập',
                    'LaoDongNu.required': 'Trường bắt buộc nhập',
                    'CaoDangDaiHoc.required': 'Trường bắt buộc nhập',
                    'TrungCap.required': 'Trường bắt buộc nhập',
                    'SoCap.required': 'Trường bắt buộc nhập',
                    'ChuaQuaDaoTao.required': 'Trường bắt buộc nhập',
                    'ThamGiaBHXH.required': 'Trường bắt buộc nhập',
                    'DonViId.required': 'Trường bắt buộc nhập',
                    'KyBienDongId.required': 'Trường bắt buộc nhập',
                }),


            dataFormVonDieuLe: form({
                TongVonDieuLe: '',
                TongThanhVienGop: '',
                ThapNhat: '',
                CaoNhat: '',
                DonViId: 0,
                KyBienDongId: 0,


            })
                .rules({
                    TongVonDieuLe: 'required',
                    TongThanhVienGop: 'required',
                    ThapNhat: 'required',
                    CaoNhat: 'required',


                })
                .messages({
                    'TongVonDieuLe.required': 'Trường bắt buộc nhập',
                    'TongThanhVienGop.required': 'Trường bắt buộc nhập',
                    'ThapNhat.required': 'Trường bắt buộc nhập',
                    'CaoNhat.required': 'Trường bắt buộc nhập',

                }),


            dataFormLaoDongLMHTX: form({
                TongSo: '',
                CaoDangDaiHoc: '',
                TrungCap: '',
                SoCap: '',
                ChuaQuaDaoTao: '',
                ThamGiaBHXH: '',
                DonViId: 0,
                KyBienDongId: 0,



            })
                .rules({
                    TongSo: 'required',

                    DonViId: 'required',
                    KyBienDongId: 'required',


                })
                .messages({
                    'TongSo.required': 'Trường bắt buộc nhập',

                    'DonViId.required': 'Trường bắt buộc nhập',
                    'KyBienDongId.required': 'Trường bắt buộc nhập',

                }),


            dataFormThanhVienLMHTX: form({
                TongSo: '',
                ThamGiaMoi: '',
                KhongSuDungDichVu: '',
                SuDungDichVuNHHTX: '',
                SưDungDichVuNongNghiep: '',
                SuDungDichVuPhiNongNghiep: '',
                GiaThanhVien: '',
                DonViId: 0,
                KyBienDongId: 0,



            })
                .rules({
                    TongSo: 'required',
                    ThamGiaMoi: 'required',
                    KhongSuDungDichVu: 'required',
                    SuDungDichVuNHHTX: 'required',
                    SưDungDichVuNongNghiep: 'required',
                    SuDungDichVuPhiNongNghiep: 'required',
                    GiaThanhVien: 'required',
                    DonViId: 'required',
                    KyBienDongId: 'required',

                })
                .messages({
                    'TongSo.required': 'Trường bắt buộc nhập',
                    'ThamGiaMoi.required': 'Trường bắt buộc nhập',
                    'KhongSuDungDichVu.required': 'Trường bắt buộc nhập',
                    'SuDungDichVuNHHTX.required': 'Trường bắt buộc nhập',
                    'SưDungDichVuNongNghiep.required': 'Trường bắt buộc nhập',
                    'SuDungDichVuPhiNongNghiep.required': 'Trường bắt buộc nhập',
                    'GiaThanhVien.required': 'Trường bắt buộc nhập',
                    'DonViId.required': 'Trường bắt buộc nhập',
                    'KyBienDongId.required': 'Trường bắt buộc nhập',
                }),


            dataFormChinhSach: form({
                HoTroXTTM: '',
                HoTroKHKT: '',
                HoTroTiepCanVon: '',
                HoTroThamGiaCacChuongTrinh: '',

                HoTroThanhLapMoi: '',
                NN_HoTroDauTuPhaTrienHaTang: '',
                NN_HoTroUuDaiDat: '',
                NN_HoTroUuDaiTinDung: '',
                NN_HoTroVonGiong: '',
                NN_HoTRoCheBienSanPham: '',
                NN_HoTroKhac: '',

                DonViId: 0,
                KyBienDongId: 0,



            })
                .rules({

                    DonViId: 'required',
                    KyBienDongId: 'required',


                })
                .messages({

                    'DonViId.required': 'Trường bắt buộc nhập',
                    'KyBienDongId.required': 'Trường bắt buộc nhập',

                }),

            dataFormTrinhDoCanBoChuChot: form({
                ChucDanh: '',
                TrinhDoID: '',
                DonViId: 0,
                KyBienDongId: 0,



            })
                .rules({
                    ChucDanh: 'required',
                    TrinhDoID: 'required',



                })
                .messages({
                    'ChucDanh.required': 'Trường bắt buộc nhập',
                    'TrinhDoID.required': 'Trường bắt buộc nhập',
                    /*'DonViId': 'Trường bắt buộc nhập',
                    'KyBienDongId': 'Trường bắt buộc nhập',*/

                }),

            dataFormTaiSan: form({
                TongCongTaiSan: '',
                TaiSanDatKhongChia: '',
                TaiSanTrichLaiKhongChia: '',

                TaiSanHoTroKhongChia: '',
                TaiSanDieuLeQuyDinhKhongChua: '',
                VonNoPhaiTra: '',
                VonChuSoHuu: '',

                KyBienDongId: 0,
                DonViId: 0



            })
                .rules({
                    TongCongTaiSan: 'required',
                    TaiSanDatKhongChia: 'required',
                    DonViId: 'required',
                    KyBienDongId: 'required',


                })
                .messages({
                    'TongCongTaiSan.required': 'Trường bắt buộc nhập',
                    'TaiSanDatKhongChia.required': 'Trường bắt buộc nhập',
                    'DonViId.required': 'Trường bắt buộc nhập',
                    'KyBienDongId.required': 'Trường bắt buộc nhập',

                }),

            dataFormHoatDongDautu: form({
                TongVonDieuLeDoanhNghiep: '',
                TongVonGop: '',
                TongCoPhan: '',
                KyBienDongId: 0,
                DonViId: 0

            })
                .rules({
                    TongVonDieuLeDoanhNghiep: 'required',
                    TongVonGop: 'required',
                    TongCoPhan: 'required',


                })
                .messages({
                    'TongVonDieuLeDoanhNghiep.required': 'Trường bắt buộc nhập',
                    'TongVonGop.required': 'Trường bắt buộc nhập',
                    'TongCoPhan.required': 'Trường bắt buộc nhập',

                }),


            listNganhNghe: [],
            listLoaiHinh: [],
            listMoHinh: [],
            listLinhVuc: [],
            listSanPhamTieuBieu: [],
            listDanhMuc: [],


            listDonVi: [],
            listKyBienDong: [],
            listTrinhDo: [],
            donVi: '',
            kyID: "",
            statusForm: "",
            trangthai: "",


            ThongTinChung: [],
            ThanhVienHopTacXa: {},
            KetQuaKinhDoanh: {},
            LaoDongHopTacXa: {},
            VonDieuLe: {},
            LaoDongLMHTX: {},
            ThanhVienLMHTX: {},
            ChinhSach: {},
            TrinhDoCanBoChuChot: {},
            TaiSan: {},
            HoatDongDauTu: {},


            normalizer(node) {


                return {
                    // id: node.id,
                    label: node.name,
                    children: node.children,
                };
            },


        }
    },
    mounted: async function () {
        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.donVi = Number(params.get("id"));
        this.kyID = Number(params.get("kyID"));
        this.dataFormThanhVienHTX.DonViId = this.donVi
        this.dataFormThanhVienHTX.KyBienDongId = this.kyID
        this.dataFormKetQuaKD.DonViId = this.donVi
        this.dataFormKetQuaKD.KyBienDongId = this.kyID
        this.dataFormLaoDongHTX.DonViId = this.donVi
        this.dataFormLaoDongHTX.KyBienDongId = this.kyID
        this.dataFormVonDieuLe.DonViId = this.donVi
        this.dataFormVonDieuLe.KyBienDongId = this.kyID

        this.dataFormLaoDongLMHTX.DonViId = this.donVi
        this.dataFormLaoDongLMHTX.KyBienDongId = this.kyID


        this.dataFormThanhVienLMHTX.DonViId = this.donVi
        this.dataFormThanhVienLMHTX.KyBienDongId = this.kyID

        this.dataFormChinhSach.DonViId = this.donVi
        this.dataFormChinhSach.KyBienDongId = this.kyID

        this.dataFormTrinhDoCanBoChuChot.DonViId = this.donVi
        this.dataFormTrinhDoCanBoChuChot.KyBienDongId = this.kyID

        this.dataFormTaiSan.DonViId = this.donVi
        this.dataFormTaiSan.KyBienDongId = this.kyID

        this.dataFormHoatDongDautu.DonViId = this.donVi
        this.dataFormHoatDongDautu.KyBienDongId = this.kyID


        console.log(typeof this.kyID);

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

        axios.get("/danh-muc/d_m__sanphams")
            .then((res) => {
                self.listSanPhamTieuBieu = res.data
            });
        axios.get("/TrinhDo")
            .then((res) => {
                self.listTrinhDo = res.data
            });
        axios.get("/thong-tin-don-vi?id=" + this.donVi).then(function (response) {
            console.log(response.data);
            self.ThongTinChung = response.data;
            self.dataFormDonVi.data.TenDonVi = self.ThongTinChung.TenDonVi
            self.dataFormDonVi.data.MaSo = self.ThongTinChung.MaSo
            self.dataFormDonVi.data.NamThanhLap = self.ThongTinChung.NamThanhLap
            self.dataFormDonVi.data.DiaChi = self.ThongTinChung.DiaChi
            self.dataFormDonVi.data.DaiDienPhapLuat = self.ThongTinChung.DaiDienPhapLuat
            self.dataFormDonVi.data.DienThoai = self.ThongTinChung.DienThoai
            self.dataFormDonVi.data.NganhNgheID = self.ThongTinChung.NganhNgheID
            self.dataFormDonVi.data.LinhVucID = self.ThongTinChung.LinhVucID
            self.dataFormDonVi.data.MoHinhID = self.ThongTinChung.MoHinhID
            self.dataFormDonVi.data.LoaiHinhID = self.ThongTinChung.LoaiHinhID
            self.dataFormDonVi.data.DiaBanId = self.ThongTinChung.DiaBanId
        })



    },
    watch: {
        'datatb.searchnow'() {
            this.loadData();
        }
    },
    methods: {

        handleClick(tab) {

            console.log(tab)
            const self = this
            if (tab.label == "Thông tin chung") {
                // if (this.ThongTinChung.status) {ThongTinChung
                console.log(this.ThongTinChung);
                this.dataFormDonVi.data.TenDonVi = this.ThongTinChung.TenDonVi
                this.dataFormDonVi.data.MaSo = this.ThongTinChung.MaSo
                this.dataFormDonVi.data.NamThanhLap = this.ThongTinChung.NamThanhLap
                this.dataFormDonVi.data.DiaChi = this.ThongTinChung.DiaChi
                this.dataFormDonVi.data.DaiDienPhapLuat = this.ThongTinChung.DaiDienPhapLuat
                this.dataFormDonVi.data.DienThoai = this.ThongTinChung.DienThoai
                this.dataFormDonVi.data.NganhNgheID = this.ThongTinChung.NganhNgheID
                this.dataFormDonVi.data.LinhVucID = this.ThongTinChung.LinhVucID
                this.dataFormDonVi.data.MoHinhID = this.ThongTinChung.MoHinhID
                this.dataFormDonVi.data.LoaiHinhID = this.ThongTinChung.LoaiHinhID
                this.dataFormDonVi.data.DiaBanId = this.ThongTinChung.DiaBanId
                self.statusForm = "update"

                // } else {
                //     console.log(2)
                //     self.statusForm = "insert"
                //     console.log(self.statusForm)

                // }


            }

            if (tab.label == "Thành viên hợp tác xã") {

                axios.get("/thanh-vien-htx?DonViId=" + this.donVi + "&KyBienDongId=" + this.kyID + "&table=thanhvienhoptacxas")
                    .then((res) => {
                        self.ThanhVienHopTacXa = res.data
                        self.dataFormThanhVienHTX.data.TongSo = self.ThanhVienHopTacXa.TongSo;
                        self.dataFormThanhVienHTX.data.ThamGiaMoi = self.ThanhVienHopTacXa.ThamGiaMoi;
                        self.dataFormThanhVienHTX.data.CaNhan = self.ThanhVienHopTacXa.CaNhan;
                        self.dataFormThanhVienHTX.data.HoGiaDinh = self.ThanhVienHopTacXa.HoGiaDinh;
                        self.dataFormThanhVienHTX.data.PhapNhan = self.ThanhVienHopTacXa.PhapNhan;
                        self.dataFormThanhVienHTX.data.SuDungDichVu = self.ThanhVienHopTacXa.SuDungDichVu;
                        self.dataFormThanhVienHTX.data.KhongSuDungDichVu = self.ThanhVienHopTacXa.KhongSuDungDichVu;
                        self.dataFormThanhVienHTX.data.NongNghiep = self.ThanhVienHopTacXa.NongNghiep;
                        self.dataFormThanhVienHTX.data.PhiNongNghiep = self.ThanhVienHopTacXa.PhiNongNghiep;
                        self.dataFormThanhVienHTX.data.QTDND = self.ThanhVienHopTacXa.QTDND;
                        self.dataFormThanhVienHTX.data.GiaThanhVien = self.ThanhVienHopTacXa.GiaThanhVien;
                        self.dataFormThanhVienHTX.data.ThamGiaDaiHoi = self.ThanhVienHopTacXa.ThamGiaDaiHoi;
                    });

                // } else {
                //     console.log(2)
                //     self.statusForm = "insert"
                //     console.log(self.statusForm)

                // }
            }
            if (tab.label == "Kết quả kinh doanh") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=ketquakinhdoanhs")
                    .then((res) => {
                        self.KetQuaKinhDoanh = res.data
                        self.dataFormKetQuaKD.data.TongDoanhThu = self.KetQuaKinhDoanh.TongDoanhThu;
                        self.dataFormKetQuaKD.data.DoanhThuThanhVien = self.KetQuaKinhDoanh.DoanhThuThanhVien;
                        self.dataFormKetQuaKD.data.TyLeKetQua = self.KetQuaKinhDoanh.TyLeKetQua;
                        self.dataFormKetQuaKD.data.LoiNhuanTruocThue = self.KetQuaKinhDoanh.LoiNhuanTruocThue
                        self.dataFormKetQuaKD.data.LoiNhuanSauThue = self.KetQuaKinhDoanh.LoiNhuanSauThue;
                        self.dataFormKetQuaKD.data.LoiNhuanTrichQuyDTPT = self.KetQuaKinhDoanh.LoiNhuanTrichQuyDTPT;
                        self.dataFormKetQuaKD.data.LoiNhuanTrichQuyDPTC = self.KetQuaKinhDoanh.LoiNhuanTrichQuyDPTC;
                        self.dataFormKetQuaKD.data.LoiNhuanTrichQuyKhac = self.KetQuaKinhDoanh.LoiNhuanTrichQuyKhac;
                        self.dataFormKetQuaKD.data.LoiNhuanChiaThanhVienTheoSuDungDichVu = self.KetQuaKinhDoanh.LoiNhuanChiaThanhVienTheoSuDungDichVu;
                        self.dataFormKetQuaKD.data.LoiNhuanChiaThanhVienTheoGopVon = self.KetQuaKinhDoanh.LoiNhuanChiaThanhVienTheoGopVon;
                        self.dataFormKetQuaKD.data.LoiNhuanChiaThanhVienTheoKhac = self.KetQuaKinhDoanh.LoiNhuanChiaThanhVienTheoKhac;
                        self.dataFormKetQuaKD.data.TongQuyLuong = self.KetQuaKinhDoanh.TongQuyLuong;
                        self.dataFormKetQuaKD.data.TongKhachHangVayvon = self.KetQuaKinhDoanh.TongKhachHangVayvon;
                        self.dataFormKetQuaKD.data.TongDuNoChoVay = self.KetQuaKinhDoanh.TongDuNoChoVay;
                        // self.dataFormKetQuaKD.KyBienDongId = self.KetQuaKinhDoanh.KyBienDongId;
                        // self.dataFormKetQuaKD.DonViId = self.KetQuaKinhDoanh.DonViId;
                        self.statusForm = "update"

                    });

            }

            if (tab.label == "Lao động hợp tác xã") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=laodonghtxes")
                    .then((res) => {
                        self.LaoDongHopTacXa = res.data;
                        self.dataFormLaoDongHTX.data.TongSo = this.LaoDongHopTacXa.TongSo;
                        self.dataFormLaoDongHTX.data.KhongThanhVien = this.LaoDongHopTacXa.KhongThanhVien;
                        self.dataFormLaoDongHTX.data.ThuocHTXCungUngDichVu = this.LaoDongHopTacXa.ThuocHTXCungUngDichVu;
                        self.dataFormLaoDongHTX.data.ThuocHTXTaoViecLamThanhVien = this.LaoDongHopTacXa.ThuocHTXTaoViecLamThanhVien;
                        self.dataFormLaoDongHTX.data.LaoDongNam = this.LaoDongHopTacXa.LaoDongNam;
                        self.dataFormLaoDongHTX.data.LaoDongNu = this.LaoDongHopTacXa.LaoDongNu;
                        self.dataFormLaoDongHTX.data.CaoDangDaiHoc = this.LaoDongHopTacXa.CaoDangDaiHoc;
                        self.dataFormLaoDongHTX.data.TrungCap = this.LaoDongHopTacXa.TrungCap;
                        self.dataFormLaoDongHTX.data.SoCap = this.LaoDongHopTacXa.SoCap;
                        self.dataFormLaoDongHTX.data.ChuaQuaDaoTao = this.LaoDongHopTacXa.ChuaQuaDaoTao;
                        self.dataFormLaoDongHTX.data.ThamGiaBHXH = this.LaoDongHopTacXa.ThamGiaBHXH
                        // self.dataFormLaoDongHTX.data.KyBienDongId = this.LaoDongHopTacXa.KyBienDongId;
                        // self.dataFormLaoDongHTX.data.DonViId = this.LaoDongHopTacXa.DonViId;
                        self.dataFormLaoDongHTX.data.LaThanhVien = this.LaoDongHopTacXa.LaThanhVien;
                        self.statusForm = "update"
                    });

            }


            if (tab.label == "Vốn điều lệ") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=vondieules")
                    .then((res) => {
                        self.VonDieuLe = res.data;
                        self.dataFormVonDieuLe.TongVonDieuLe = this.VonDieuLe.TongVonDieuLe;
                        self.dataFormVonDieuLe.TongThanhVienGop = this.VonDieuLe.TongThanhVienGop;
                        self.dataFormVonDieuLe.ThapNhat = this.VonDieuLe.ThapNhat;
                        self.dataFormVonDieuLe.CaoNhat = this.VonDieuLe.CaoNhat;
                        self.dataFormVonDieuLe.data.KyBienDongId = this.VonDieuLe.KyBienDongId;
                        self.dataFormVonDieuLe.data.DonViId = this.VonDieuLe.DonViId;
                    });

            }

            if (tab.label == "Lao động liên minh hợp tác xã") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=laodonglmhtxes")
                    .then((res) => {
                        self.LaoDongLMHTX = res.data;
                        self.dataFormLaoDongLMHTX.TongSo = this.LaoDongLMHTX.TongSo;
                        self.dataFormLaoDongLMHTX.CaoDangDaiHoc = this.LaoDongLMHTX.CaoDangDaiHoc;
                        self.dataFormLaoDongLMHTX.TrungCap = this.LaoDongLMHTX.TrungCap;
                        self.dataFormLaoDongLMHTX.SoCap = this.LaoDongLMHTX.SoCap
                        self.dataFormLaoDongLMHTX.ChuaQuaDaoTao = this.LaoDongLMHTX.ChuaQuaDaoTao;

                        self.dataFormLaoDongLMHTX.ThamGiaBHXH = this.LaoDongLMHTX.ThamGiaBHXH;

                    });
            }

            if (tab.label == "Thành viên liên minh hợp tác xã") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=thanhvienlmhtxes")
                    .then((res) => {
                        self.ThanhVienLMHTX = res.data;
                        self.dataFormThanhVienLMHTX.data.TongSo = this.ThanhVienLMHTX.TongSo;
                        self.dataFormThanhVienLMHTX.data.ThamGiaMoi = this.ThanhVienLMHTX.ThamGiaMoi;
                        self.dataFormThanhVienLMHTX.data.KhongSuDungDichVu = this.ThanhVienLMHTX.KhongSuDungDichVu;
                        self.dataFormThanhVienLMHTX.data.SuDungDichVuNHHTX = this.ThanhVienLMHTX.SuDungDichVuNHHTX;
                        self.dataFormThanhVienLMHTX.data.SưDungDichVuNongNghiep = this.ThanhVienLMHTX.SưDungDichVuNongNghiep;

                        self.dataFormThanhVienLMHTX.data.SuDungDichVuPhiNongNghiep = this.ThanhVienLMHTX.SuDungDichVuPhiNongNghiep;
                        self.dataFormThanhVienLMHTX.data.GiaThanhVien = this.ThanhVienLMHTX.GiaThanhVien;
                        self.dataFormThanhVienLMHTX.data.DonViId = this.ThanhVienLMHTX.DonViId;
                        self.dataFormThanhVienLMHTX.data.KyBienDongId = this.ThanhVienLMHTX.KyBienDongId
                    });

            }

            if (tab.label == "Chính sách") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=chinhsaches")
                    .then((res) => {
                        self.ChinhSach = res.data;
                        self.dataFormChinhSach.HoTroXTTM = this.ChinhSach.HoTroXTTM;
                        self.dataFormChinhSach.HoTroKHKT = this.ChinhSach.HoTroKHKT;
                        self.dataFormChinhSach.HoTroTiepCanVon = this.ChinhSach.HoTroTiepCanVon;
                        self.dataFormChinhSach.HoTroThamGiaCacChuongTrinh = this.ChinhSach.HoTroThamGiaCacChuongTrinh;
                        self.dataFormChinhSach.HoTroThanhLapMoi = this.ChinhSach.HoTroThanhLapMoi;
                        self.dataFormChinhSach.NN_HoTroDauTuPhaTrienHaTang = this.ChinhSach.NN_HoTroDauTuPhaTrienHaTang;
                        self.dataFormChinhSach.NN_HoTroUuDaiDat = this.ChinhSach.NN_HoTroUuDaiDat;
                        self.dataFormChinhSach.NN_HoTroUuDaiTinDung = this.ChinhSach.NN_HoTroUuDaiTinDung;
                        self.dataFormChinhSach.NN_HoTroVonGiong = this.ChinhSach.NN_HoTroVonGiong;
                        self.dataFormChinhSach.NN_HoTRoCheBienSanPham = this.ChinhSach.NN_HoTRoCheBienSanPham;
                        self.dataFormChinhSach.NN_HoTroKhac = this.ChinhSach.NN_HoTroKhac;

                        self.dataFormChinhSach.DonViId = this.ChinhSach.DonViId;
                        self.dataFormChinhSach.KyBienDongId = this.ChinhSach.KyBienDongId;
                    });

            }

            if (tab.label == "Trình độ cán bộ chủ chốt") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=trinhdocanbochuchots")
                    .then((res) => {
                        self.TrinhDoCanBoChuChot = res.data;
                        self.dataFormTrinhDoCanBoChuChot.ChucDanh = this.TrinhDoCanBoChuChot.ChucDanh;
                        self.dataFormTrinhDoCanBoChuChot.TrinhDoID = this.TrinhDoCanBoChuChot.TrinhDoID;
                        self.dataFormTrinhDoCanBoChuChot.DonViId = this.TrinhDoCanBoChuChot.DonViId;
                        self.dataFormTrinhDoCanBoChuChot.KyBienDongId = this.TrinhDoCanBoChuChot.KyBienDongId;
                    });
            }

            if (tab.label == "Tài sản") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=taisans")
                    .then((res) => {
                        self.TaiSan = res.data;
                        self.dataFormTaiSan.TongCongTaiSan = this.TaiSan.TongCongTaiSan;
                        self.dataFormTaiSan.TaiSanDatKhongChia = this.TaiSan.TaiSanDatKhongChia;
                        self.dataFormTaiSan.TaiSanHoTroKhongChia = this.TaiSan.TaiSanHoTroKhongChia;
                        self.dataFormTaiSan.TaiSanTrichLaiKhongChia = this.TaiSan.TaiSanTrichLaiKhongChia
                        self.dataFormTaiSan.TaiSanDieuLeQuyDinhKhongChua = this.TaiSan.TaiSanDieuLeQuyDinhKhongChua;

                        self.dataFormTaiSan.VonNoPhaiTra = this.TaiSan.VonNoPhaiTra;
                        self.dataFormTaiSan.VonChuSoHuu = this.TaiSan.VonChuSoHuu;
                        self.dataFormTaiSan.DonViId = this.TaiSan.DonViId;
                        self.dataFormTaiSan.KyBienDongId = this.TaiSan.KyBienDongId;
                        self.statusForm = "update"
                    });

            }

            if (tab.label == "Hoạt động đầu tư") {
                axios.get("/thanh-vien-htx?DonViId=" + self.donVi + "&KyBienDongId=" + self.kyID + "&table=hoatdongdautus")
                    .then((res) => {
                        self.HoatDongDauTu = res.data;
                        self.dataFormHoatDongDautu.TongVonDieuLeDoanhNghiep = this.HoatDongDauTu.TongVonDieuLeDoanhNghiep;
                        self.dataFormHoatDongDautu.TongVonGop = this.HoatDongDauTu.TongVonGop;
                        self.dataFormHoatDongDautu.TongCoPhan = this.HoatDongDauTu.TongCoPhan;
                        self.statusForm = "update"
                    });
            }
        },
        Back() {
            window.location.href = "/quan-ly-du-lieu-ky";
        },
        saveform() {

        },
        submitformDonVi() {
            console.log(this.statusForm)
            if (this.dataFormDonVi.validate().errors().any()) {
                return;
            }
            const self = this;


            self.dataFormDonVi.data.id = this.donVi;
            self.dataFormDonVi.data.SanPhamTieuBieuID = '';
            self.dataFormDonVi.data.NhomDonViId = '';
            self.dataFormDonVi.data.NguonGocId = '';
            self.dataFormDonVi.data.ParentId = '';


            axios.post("/DonVi", self.dataFormDonVi.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
            // }
        },

        submitformThanhVienHTX() {
            console.log(this.dataFormThanhVienHTX);
            if (this.dataFormThanhVienHTX.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/update-thanh-vien-htx", self.dataFormThanhVienHTX.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });

        },

        submitformKetQuaKinhDoanh() {
            if (this.dataFormKetQuaKD.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/update-ket-qua-kinh-doanh", self.dataFormKetQuaKD.data)
                .then(function () {
                    self.thongbaothanhcong('Sửa thành công')
                    self.loadData();
                })
                .catch(error => {
                    self.thongbaothatbai(error);
                });
        },

        submitformLaoDongHTX() {
            console.log(this.dataFormLaoDongHTX.data);
            if (this.dataFormLaoDongHTX.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/update-lao-dong-htx", self.dataFormLaoDongHTX.data).then(function () {
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

            console.log(self.dataFormVonDieuLe.data);
            axios.post("/upload-von-dieu-le", self.dataFormVonDieuLe.data).then(function () {
                self.thongbaothanhcong('Lưu thành công')
                self.loadData();
            })
                .catch(error => {
                    self.thongbaothatbai(error);
                });


        },


        submitformLaoDongLMHTX() {
            if (this.dataFormLaoDongLMHTX.validate().errors().any()) {
                return;
            }
            const self = this;
            axios.post("/uploadlaodonglmhtx", self.dataFormLaoDongLMHTX.data).then(function () {
                self.thongbaothanhcong('Lưu thành công')
                self.loadData();
            })
                .catch(error => {
                    self.thongbaothatbai(error);
                });


        },

        submitformThanhVienLMHTX() {
            if (this.dataFormThanhVienLMHTX.validate().errors().any()) {
                return;
            }
            const self = this;

            console.log(self.dataFormThanhVienLMHTX.data);
            axios.post("/uploadtvlmhtx", self.dataFormThanhVienLMHTX.data).then(function () {
                self.thongbaothanhcong('Lưu thành công')
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

            console.log(self.dataFormChinhSach.data);
            axios.post("/uploadchinhsach", self.dataFormChinhSach.data).then(function () {
                self.thongbaothanhcong('Lưu thành công')
                self.loadData();
            })
                .catch(error => {
                    self.thongbaothatbai(error);
                });


        },

        submitformTrinhDoCanboChuChot() {
            if (this.dataFormTrinhDoCanBoChuChot.validate().errors().any()) {
                return;
            }
            const self = this;

            console.log(self.dataFormTrinhDoCanBoChuChot.data);
            axios.post("/uploadtrinhdo", self.dataFormTrinhDoCanBoChuChot.data).then(function () {
                self.thongbaothanhcong('Lưu thành công')
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

            console.log(self.dataFormTaiSan.data);
            axios.post("/uploadtaisan", self.dataFormTaiSan.data).then(function () {
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

            axios.post("/hoatdongdautu", self.dataFormHoatDongDautu.data).then(function () {
                self.thongbaothanhcong('Lưu thành công')
                self.loadData();
            })
                .catch(error => {
                    self.thongbaothatbai(error);
                });


        },


        pagination(data) {
            // Gán lại giá trị paginatenow
            this.datatb.paginatenow = data;
            // Load lại bảng
            this.loadData();
        },
        // load lại dữ liệu
        loadData() {

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

