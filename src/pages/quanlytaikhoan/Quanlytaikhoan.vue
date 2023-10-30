<template>
    <div v-if="token">
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 ">
                <h1 class="font-bold text-gray-600 text-[24px]  ">Quản lý tài khoản</h1>
            </div>
        </div>
        <!-- <div class="my-2 bg-gray-600 h-[1px]"></div> -->
        <div v-cloak v-bind:class="{ hidden: isActivemodal }" style="z-index: 100"
            class="min-w-screen h-screen animated fadeIn faster 
                                                                         fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div @click="closemodal()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div
                class="sm:w-10/12 w-11/12 h-4/5  overflow-auto p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
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
                        <div class="grid grid-cols-12 ">
                            <div class=" col-span-12 px-4 py-5 sm:p-4">
                                <label for="userName"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Tên
                                    :</label>
                                <input v-model="dataForm.userName" type="text" name="userName" id="userName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="name" required>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('userName')">
                                    {{ dataForm.errors().get('userName') }}
                                </span>
                            </div>
                            <div class=" col-span-12 px-4 py-5 sm:p-4">
                                <label for="role"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Quyền :</label>
                                <select v-model="dataForm.role"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="0">-- Quyền: --</option>
                                    <option value="3">Huyện </option>
                                    <option value="4">Liên minh hội nông dân </option>
                                    <option value="5">Sở</option>
                                </select>

                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('role')">
                                    {{ dataForm.errors().get('role') }}
                                </span>
                            </div>

                            <div class=" col-span-12 px-4 py-5 sm:p-4" v-if="dataForm.role == 3">
                                <label for="gender"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Địa bàn :</label>
                                <select v-model="dataForm.idDiaBan"
                                    class="rounded-md border-2 p-2 form-control form-select px-5 w-full">
                                    <option value="">-- Chọn: --</option>
                                    <option v-for="i in listDiaBan" :value="i.id" :key="i.id">
                                        {{ i.tenDiaBan }}
                                    </option>
                                </select>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('idDiaBan')">
                                    {{ dataForm.errors().get('idDiaBan') }}
                                </span>
                            </div>

                            <div v-if="statusForm != 'update'" class=" col-span-12 px-4 py-5 sm:p-4">
                                <label for="passwordHash"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Mật khẩu :</label>
                                <input v-model="dataForm.passwordHash" type="password" name="passwordHash" id="passwordHash"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Mật khẩu" required>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('passwordHash')">
                                    {{ dataForm.errors().get('passwordHash') }}
                                </span>
                            </div>
                            <div v-if="statusForm != 'update'" class=" col-span-12 px-4 py-5 sm:p-4">
                                <label for="confirmPassword"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Nhập lại mật khẩu
                                    :</label>
                                <input v-model="dataForm.confirmPassword" type="password" name="confirmPassword"
                                    id="confirmPassword"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Nhập lại mật khẩu" required>
                                <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('confirmPassword')">
                                    {{ dataForm.errors().get('confirmPassword') }}
                                </span>
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
        <div v-cloak v-bind:class="{ hidden: isActivemodal2 }" style="z-index: 100"
            class="min-w-screen h-screen animated fadeIn faster 
                                                                         fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div @click="closemodal2()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div
                class="sm:w-10/12 w-11/12 h-4/5  overflow-auto p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                <div class="w-full  overflow-auto ">
                    <div class=" flex justify-between items-center  rounded-t border-b mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white uppercase">
                            Đổi mật khẩu
                        </h3>
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
                <div class="mt-4 space-y-4 lg:mt-5 md:space-y-5">

                    <div>
                        <label for="matKhauMoi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật
                            khẩu mới</label>
                        <input v-model="dataForm2.matKhauMoi" type="password" name="matKhauMoi" id="matKhauMoi"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="">
                        <span class="mt-4 mb-2 text-red-500" v-if="dataForm2.errors().has('matKhauMoi')">
                            {{ dataForm2.errors().get('matKhauMoi') }}
                        </span>
                    </div>
                    <div>
                        <label for="confirm-password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật khẩu
                            mới</label>
                        <input v-model="dataForm2.xacNhanMatKhauMoi" type="password" name="confirm-password"
                            id="confirm-password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="">
                        <span class="mt-4 mb-2 text-red-500" v-if="dataForm2.errors().has('xacNhanMatKhauMoi')">
                            {{ dataForm2.errors().get('xacNhanMatKhauMoi') }}
                        </span>
                    </div>
                </div>
                <!--footer-->
                <div class="col-span-12 text-center  md:block flex pt-4 justify-center">
                    <button @click="submitformchagepassword()"
                        class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Lưu
                    </button>
                    <button @click="closemodal2()"
                        class=" items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">Hủy</button>
                </div>

            </div>
        </div>
        <!--     
    <div v-cloak v-bind:class="{ hidden: isActivemoda2 }" style="z-index: 100" class="min-w-screen h-screen animated fadeIn faster 
                                                                         fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div @click="closemodal2()" class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="sm:w-10/12 w-6/12  h-4/5  overflow-auto p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
            <div class="w-full  overflow-auto ">
                <div class=" flex justify-between items-center  rounded-t border-b mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white uppercase">
                        Đổi mật khẩu
                    </h3>
                    <button type="button" @click="closemodal2()" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="mt-5 md:col-span-12 md:mt-0">
                    <div class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                        <div>
                            <label for="matKhauMoi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu mới</label>
                            <input v-model="dataForm2.matKhauMoi" type="password" name="matKhauMoi" id="matKhauMoi" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataForm2.errors().has('matKhauMoi')">
                                {{ dataForm2.errors().get('matKhauMoi') }}
                            </span>
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật khẩu mới</label>
                            <input v-model="dataForm2.xacNhanMatKhauMoi" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataForm2.errors().has('xacNhanMatKhauMoi')">
                                {{ dataForm2.errors().get('xacNhanMatKhauMoi') }}
                            </span>
                        </div>

                    </div>

                </div>

            </div>
            <div class="col-span-12 text-center  md:block flex pt-4 justify-center">
                <button @click="submitformchagepassword()" class=" mr-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Lưu
                </button>
                <button @click="closemodal2()" class=" items-center px-4 py-2 border border-red-700   text-sm font-medium rounded-md shadow-sm text-red-700 bg-white hover:text-white hover:bg-red-700 ">Hủy</button>
            </div>

        </div>
    </div> -->

        <div class="py-4">
            <div class="grid grid-cols-12 ">
                <div class="sm:col-span-2 lg:mb-0 mb-2 col-span-12 ">
                    <button @click="saveform()"
                        class="rounded-lg lg:w-auto w-full px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Thêm
                        mới</button>
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
                    <el-table-column label="STT" width="100">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.stt }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="Tên HND" prop="name">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Tên tài khoản" prop="userName">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.userName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="270">
                        <template slot="header">
                            Chức năng
                        </template>
                        <template slot-scope="scope">
                            <div class="text-center">
                                <el-tooltip class="item" effect="dark" content="Chỉnh sửa" placement="top-start">
                                    <el-button size="mini" @click="doAlertEdit(scope.row)">
                                        <i class="el-icon-edit-outline text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="Đổi mật khẩu" placement="top-start">
                                    <el-button size="mini" @click="doChangerPassword(scope.row)">
                                        <i class="el-icon-key text-lg"></i>
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="Xóa" placement="top-start">
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
export default {
    data() {
        return {
            datatb: {
                // Tên các cột có thẻ search
                searchcolum: [
                    'name', 'userName'
                ],
                // đường dẫn đến ajax
                url: '/NguoiDung',
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
                userName: '',
                role: null,
                idDiaBan: null,
                passwordHash: '',
                confirmPassword: null,
                name: '',
                idDonVi: null,
                profilePicture: null,
                status: 1,
                comfirm: null,
                normalizedUserName: '',
                email: null,
                normalizedEmail: null,
                emailConfirmed: false,

                securityStamp: '',
                concurrencyStamp: '',
                phoneNumber: null,
                phoneNumberConfirmed: false,
                twoFactorEnabled: false,
                lockoutEnd: null,
                lockoutEnabled: true,
                accessFailedCount: 0,
            })
                .rules({
                    userName: 'required',
                    role: 'required',
                    passwordHash: 'required',
                    confirmPassword: 'required',
                })
                .messages({
                    'userName.required': 'Trường bắt buộc nhập',
                    'role.required': 'Trường bắt buộc nhập',
                    'passpasswordHashword.required': 'Trường bắt buộc nhập',
                    'confirmPassword.required': 'Trường bắt buộc nhập',
                }),
            dataForm2: form({
                id: '',
                matKhauMoi: '',
                xacNhanMatKhauMoi: '',
                UserId: '',
            })
                .rules({

                    matKhauMoi: 'required',
                    xacNhanMatKhauMoi: 'required',
                })
                .messages({

                    'matKhauMoi.required': 'Trường bắt buộc nhập',
                    'xacNhanMatKhauMoi.required': 'Trường bắt buộc nhập',

                }),
            token: localStorage.getItem("login_token"),
            iduser: localStorage.getItem("iduser"),
            rowId: '',
            statusForm: '',
            isActivemodal: true,
            isActivemodal2: true,
            listDiaBan: []
        }
    },
    mounted() {
        const self = this;
        axios.get("/DiaBan").then(function (response) {
            self.listDiaBan = response.data.data;
        });

        this.loadData();
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
        openmodal2() {
            this.isActivemodal2 = false;
        },
        closemodal2() {
            this.isActivemodal2 = true;
            this.dataForm.errors().messages = {};
        },
        saveform() {

            const self = this;
            self.dataForm.data.userName = '';
            self.dataForm.data.role = 0;
            self.dataForm.data.idDiaBan = 0;
            this.dataForm.data.passwordHash = '';
            this.dataForm.data.confirmPassword = null;
            self.statusForm = "insert";
            this.openmodal();
        },
        submitform() {
            if (this.dataForm.validate().errors().any()) {
                return;
            }
            const self = this;
            if (self.dataForm.role == 3 && self.dataForm.idDiaBan == 0) {
                self.thongbaothatbai('Bạn chưa chọn địa bàn');
            }
            this.closemodal()
            self.dataForm.normalizedUserName = self.dataForm.userName;

            if (this.statusForm == "insert") {

                if (self.dataForm.passwordHash != self.dataForm.confirmPassword) {
                    self.thongbaothatbai('Nhập lại mật khẩu không đúng');
                    self.dataForm.data.passwordHash = null;
                    self.dataForm.confirmPassword = null;
                }
                if (self.dataForm.passwordHash.length < 8) {
                    self.dataForm.data.passwordHash = null;
                    self.dataForm.confirmPassword = null;
                    self.thongbaothatbai('Password phải có ít nhât 8 ký tự');
                }
                var hasUppercase = /[A-Z]/.test(self.dataForm.passwordHash); // Kiểm tra mật khẩu có chứa ký tự viết hoa hay không
                var hasSpecialChar = /[\W_]/.test(self.dataForm.passwordHash); // Kiểm tra mật khẩu có chứa ký tự đặc biệt hay không
                var hasNumber = /\d/.test(self.dataForm.passwordHash); // Kiểm tra mật khẩu có chứa số hay không

                if (hasUppercase && hasSpecialChar && hasNumber) {
                    axios.post(this.datatb.url, self.dataForm.data).then(function () {
                        self.thongbaothanhcong('Lưu thành công')
                        self.loadData();
                    })
                        .catch(error => {
                            self.thongbaothatbai(error);
                        });
                } else {
                    self.dataForm.data.passwordHash = null;
                    self.dataForm.confirmPassword = null;
                    self.thongbaothatbai('Mật khẩu của bạn không chứa một ký tự ghi hoa hoặc một ký tự đặc biệt hoặc không chứa số');
                }

            } else {
                console.log(self.dataForm.capTrenID);
                if (self.dataForm.capTrenID == "0") {
                    self.dataForm.capTrenID = null;
                }
                console.log(self.dataForm.data);
                // axios.put(this.datatb.url + '/' + self.rowId, self.dataForm.data).then(function () {
                //         self.thongbaothanhcong('Sửa thành công')
                //         self.loadData();
                //     })
                //     .catch(error => {
                //         self.thongbaothatbai(error);
                //     });

            }

        },

        pagination(data) {
            // Gán lại giá trị paginatenow
            this.datatb.paginatenow = data;
            // Load lại bảng
            this.loadData();
        },
        doChangerPassword(data) {
            this.dataForm2.data.matKhauMoi = null;
            this.dataForm2.xacNhanMatKhauMoi = null;
            this.dataForm2.data.UserId = data.id;
            this.openmodal2('sua');
        },
        submitformchagepassword() {

            if (this.dataForm2.validate().errors().any()) {
                return;
            }
            const self = this;

            this.closemodal2()
            if (self.dataForm2.matKhauMoi != self.dataForm2.xacNhanMatKhauMoi) {
                self.thongbaothatbai('Nhập lại mật khẩu không đúng');
                self.dataForm2.data.matKhauMoi = null;
                self.dataForm2.xacNhanMatKhauMoi = null;
            }
            if (self.dataForm2.matKhauMoi.length < 8) {
                self.dataForm2.data.matKhauMoi = null;
                self.dataForm2.xacNhanMatKhauMoi = null;
                self.thongbaothatbai('Password phải có ít nhât 8 ký tự');
            }

            var hasUppercase = /[A-Z]/.test(self.dataForm2.matKhauMoi); // Kiểm tra mật khẩu có chứa ký tự viết hoa hay không
            var hasSpecialChar = /[\W_]/.test(self.dataForm2.matKhauMoi); // Kiểm tra mật khẩu có chứa ký tự đặc biệt hay không
            var hasNumber = /\d/.test(self.dataForm2.matKhauMoi); // Kiểm tra mật khẩu có chứa số hay không

            if (hasUppercase && hasSpecialChar && hasNumber) {

                axios.post("/NguoiDung/CapLaiMatKhau", self.dataForm2.data).then(function () {
                    self.thongbaothanhcong('Bạn đã đổi thành công');
                    self.loadData();
                })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });

            } else {
                self.dataForm2.data.matKhauMoi = null;
                self.dataForm2.xacNhanMatKhauMoi = null;
                self.thongbaothatbai('Mật khẩu của bạn không chứa một ký tự ghi hoa hoặc một ký tự đặc biệt hoặc không chứa số');
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
                    for (let index = 0; index < response.data.data.length; index++) {

                        response.data.data[index].stt = start + 1;
                        start++;
                    }
                    self.datatb.tableData = response.data.data;
                });
        },
        //data table
        doAlertEdit(data) {
            // Gán giá trị cho form

            this.dataForm.data.userName = data.userName;

            if (data.capTrenID == null) {
                this.dataForm.data.capTrenID = 0;
            } else {
                this.dataForm.data.capTrenID = data.capTrenID;
            }

            // Sửa tình trạng form
            this.statusForm = "update";
            this.rowId = data.id;
            this.openmodal('sua');
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
