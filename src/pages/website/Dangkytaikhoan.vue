<template>
    <div>
        <LayoutWebsiteNew>
            <section id="body-of-portlet">
                <div class="columns-1" id="main-content" role="main">
                    <div class="portlet-layout row">
                        <div class="col-md-12 portlet-column portlet-column-only" id="column-1">
                            <div class="portlet-dropzone portlet-column-content portlet-column-content-only"
                                id="layout-column_column-1">

                                <div class="portlet-boundary portlet-boundary_vn_gov_data_portlet_DatagovPortlet_  portlet-static portlet-static-end decorate  "
                                    id="p_p_id_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke_">
                                    <span id="p_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"></span>

                                    <section class="portlet"
                                        id="portlet_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"
                                        style="width: 101.2%;">

                                        <div class="portlet-content" style="padding:0px !important;">

                                            <div class=" portlet-content-container">

                                                <div class="portlet-body">

                                                    <section class="bg-slide container-fluid">
                                                        <div class="row">
                                                            <div class="col-md-4 col-md-offset-1  mt-150">

                                                                <h1 class="text-to">CSDL HND TỈNH QUẢNG NAM</h1>
                                                                <p class="text-trang">Điểm đầu mối công bố dữ liệu mở, cung
                                                                    cấp thông tin về chia sẻ dữ liệu của cơ quan nhà nước
                                                                </p>
                                                                <a href="#"
                                                                    class="btn btn-success text-uppercase">Dữ liệu mở</a>
                                                            </div>
                                                            <div class="col-md-5 text-center col-md-offset-2"><img
                                                                    class="mt-30slide img-responsive" src="~@/assets/fonts/slide.svg"
                                                                    alt></div>
                                                        </div>
                                                    </section>

                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="dangkytaikhoan" class="mx-auto w-3/5 ">
                <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6 my-4">
                    <div class="md:grid md:grid-cols-3 ">
                        <div class="md:col-span-1">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Đăng ký tài khoản</h3>

                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="tenDonVi" class="block text-sm font-medium text-gray-700">Tên đơn vị <label
                                            for="" class="text-red-500">*</label></label>

                                    <input type="text" v-model="dataForm.tenDonVi" name="tenDonVi" id="tenDonVi"
                                        autocomplete="given-name"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('tenDonVi')">
                                        {{ dataForm.errors().get('tenDonVi') }}
                                    </span>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="maso" class="block text-sm font-medium text-gray-700">Mã số thuế<label
                                            for="" class="text-red-500">*</label> <span class="text-red-500">(Dùng làm tài
                                            khoản đăng nhập)</span></label>
                                    <input type="number" v-model="dataForm.maso" name="maso" id="maso"
                                        autocomplete="family-name"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('maso')">
                                        {{ dataForm.errors().get('maso') }}
                                    </span>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email<label for=""
                                            class="text-red-500">*</label> </label>
                                    <input type="text" v-model="dataForm.email" name="email" id="email"
                                        autocomplete="family-name"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('email')">
                                        {{ dataForm.errors().get('email') }}
                                    </span>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="diachi" class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                                    <input type="text" v-model="dataForm.diaChi" name="diachi" id="diachi"
                                        autocomplete="email"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                </div>

                                <div class="col-span-6">
                                    <label for="daidienphapluat" class="block text-sm font-medium text-gray-700">Đại diện
                                        pháp
                                        luật</label>
                                    <input type="text" v-model="dataForm.daiDienPhapLuat" name="daidienphapluat"
                                        id="daidienphapluat" autocomplete="daidienphapluat"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                </div>

                                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label for="dienthoai" class="block text-sm font-medium text-gray-700">Điện
                                        thoại</label>
                                    <input type="text" v-model="dataForm.dienThoai" name="dienthoai" id="dienthoai"
                                        autocomplete="address-level2"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium text-gray-700">Địa bàn<label
                                            for="" class="text-red-500">*</label></label>
                                    <select v-model="dataForm.idDiaBan" name="country" autocomplete="country-name"
                                        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option v-for="i in listDiaban" :value="i.id" :key="i.id">
                                            {{ i.tenDiaBan }}
                                        </option>
                                    </select>
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('idDiaBan')">
                                        {{ dataForm.errors().get('idDiaBan') }}
                                    </span>
                                </div>
                                <div class="col-span-6 sm:col-span-6">
                                    <label for="country" class="block text-sm font-medium text-gray-700">Loại hình kinh
                                        tế<label for="" class="text-red-500">*</label></label>
                                    <select v-model="dataForm.loaiHinhId" name="country" autocomplete="country-name"
                                        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option v-for="i in listLoaiHinh" :value="i.id" :key="i.id">
                                            {{ i.tenLoaiHinhKinhTe }}
                                        </option>
                                    </select>
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('loaiHinhId')">
                                        {{ dataForm.errors().get('loaiHinhId') }}
                                    </span>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu<label
                                            for="" class="text-red-500">*</label></label>
                                    <input type="password" v-model="dataForm.password" name="password" id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('password')">
                                        {{ dataForm.errors().get('password') }}
                                    </span>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="confirm-password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật
                                        khẩu<label for="" class="text-red-500">*</label></label>
                                    <input type="password" v-model="dataForm.confirmPassword" @blur="Confirmpassword()"
                                        name="confirm-password" id="confirm-password" placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="">
                                    <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('confirmPassword')">
                                        {{ dataForm.errors().get('confirmPassword') }}
                                    </span>
                                </div>
                                <span class="text-red-500 col-span-6 ">(Mật khấu ít nhất phải có 1 ký tự đặc biệt hoặc một
                                    số hoặc một chữ ghi hoa và độ dài tối thiếu là 8 ký tự)</span>
                            </div>
                        </div>
                        <div class="flex justify-end col-span-12 sm:mt-4 mt-4">
                            <button type="submit" @click="submitform()"
                                class="bg-blue-500 mt-4 sm:mt-0 sm:mr-4 xl:mr-10  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                        </div>
                    </div>
                </div>

            </div>
        </LayoutWebsiteNew>
    </div>
</template>

<script>

import axios from "axios";
import form from "vuejs-form";
export default {
    data() {
        return {
            dataForm: form({
                tenDonVi: '',
                maso: '',
                diaChi: '',
                daiDienPhapLuat: '',
                dienThoai: '',
                idDiaBan: '',
                loaiHinhId: '',
                password: null,
                confirmPassword: null,
                email: '',
            })
                .rules({
                    tenDonVi: 'required',
                    maso: 'required',
                    idDiaBan: 'required',
                    loaiHinhId: 'required',
                    password: 'required',
                    confirmPassword: 'required',
                    email: 'required',

                })
                .messages({
                    'tenDonVi.required': 'Trường bắt buộc nhập',
                    'maso.required': 'Trường bắt buộc nhập',
                    'idDiaBan.required': 'Trường bắt buộc nhập',
                    'loaiHinhId.required': 'Trường bắt buộc nhập',
                    'password.required': 'Trường bắt buộc nhập',
                    'confirmPassword.required': 'Trường bắt buộc nhập',
                    'email.required': 'Trường bắt buộc nhập',
                }),
            listDiaban: [],
            listLoaiHinh: [],
            listDonvi: [],
        };
    },
    mounted() {
        const self = this;
        this.saveform();
        axios.get("/DiaBan").then((res) => {
            self.listDiaban = res.data.data
        });
        axios.get("/LoaiHinhKinhTe").then(function (response) {
            self.listLoaiHinh = response.data.data;
        });
        axios.get("/DonVi").then(function (response) {
            self.listDonvi = response.data.data;
        });

    },
    watch: {},
    methods: {
        thongbaothanhcong(text) {
            this.$notify({

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
        saveform() {
            this.dataForm.data.tenDonVi = '';
            this.dataForm.data.maso = '';
            this.dataForm.data.diaChi = '';
            this.dataForm.data.daiDienPhapLuat = '';
            this.dataForm.data.dienThoai = '';
            this.dataForm.data.loaiHinhId = '';
            this.dataForm.data.idDiaBan = '';
            this.dataForm.data.password = null;
            this.dataForm.data.confirmPassword = null;
            this.dataForm.data.Status = 1;
            this.statusForm = "insert";
        },
        Confirmpassword() {

        },
        submitform() {

            if (this.dataForm.validate().errors().any()) {
                return;
            }
            const self = this;
            for (let index = 0; index < this.listDonvi.length; index++) {

                if (this.listDonvi[index].maSo == self.dataForm.maso) {
                    self.thongbaothatbai('mã số thuế đã được sử dụng!!!');
                    self.dataForm.data.maso = '';
                }

            }
            if (self.dataForm.password != self.dataForm.confirmPassword) {
                self.thongbaothatbai('Nhập lại mật khẩu không đúng');
                self.dataForm.data.password = null;
                self.dataForm.confirmPassword = null;
            }
            if (self.dataForm.password.length < 8) {
                self.dataForm.data.password = null;
                self.dataForm.confirmPassword = null;
                self.thongbaothatbai('Password phải có ít nhât 8 ký tự');
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(self.dataForm.email)) {
                var hasUppercase = /[A-Z]/.test(self.dataForm.password); // Kiểm tra mật khẩu có chứa ký tự viết hoa hay không
                var hasSpecialChar = /[\W_]/.test(self.dataForm.password); // Kiểm tra mật khẩu có chứa ký tự đặc biệt hay không
                var hasNumber = /\d/.test(self.dataForm.password); // Kiểm tra mật khẩu có chứa số hay không

                if (hasUppercase && hasSpecialChar && hasNumber) {
                    if (this.statusForm == "insert") {
                        axios.post("/Accounts/SignUp", self.dataForm.data).then(function () {
                            self.thongbaothanhcong('Chúc mừng bạn đăng ký thành công')
                            self.saveform();
                            window.location.href = "thong-bao-thanh-cong"
                        })
                            .catch(error => {
                                self.thongbaothatbai(error);
                            });
                    }
                } else {
                    self.dataForm.data.password = null;
                    self.dataForm.confirmPassword = null;
                    self.thongbaothatbai('Mật khẩu của bạn không chứa một ký tự ghi hoa hoặc một ký tự đặc biệt hoặc không chứa số');
                }

            } else {
                self.thongbaothatbai('Địa chỉ email không đúng định dạng');

            }

        },
    },
};
</script>
