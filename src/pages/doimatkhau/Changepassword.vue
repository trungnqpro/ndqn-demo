<template>
<div class="w-full mx-auto  p-6 bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
    <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Đổi mật khẩu
    </h2>
    <div class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
        <div>
            <label for="matKhauCu" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu củ</label>
            <input v-model="dataForm.matKhauCu" type="password" name="matKhauCu" id="matKhauCu" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('matKhauCu')">
                {{ dataForm.errors().get('matKhauCu') }}
            </span>
        </div>
        <div>
            <label for="matKhauMoi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu mới</label>
            <input v-model="dataForm.matKhauMoi" type="password" name="matKhauMoi" id="matKhauMoi" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('matKhauMoi')">
                {{ dataForm.errors().get('matKhauMoi') }}
            </span>
        </div>
        <div>
            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật khẩu mới</label>
            <input v-model="dataForm.xacNhanMatKhauMoi" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('xacNhanMatKhauMoi')">
                {{ dataForm.errors().get('xacNhanMatKhauMoi') }}
            </span>
        </div>

        <button @click="submitform()" class="w-full sm:mr-4 sm:mb-0 mb-1  px-4 py-2 text-sm  text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đổi
            mật khẩu</button>
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
                url: '/NguoiDung/DoiMatKhau',
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
                    id: localStorage.getItem("iduser"),
                    matKhauCu: '',
                    matKhauMoi: '',
                    xacNhanMatKhauMoi: '',
                    UserId: localStorage.getItem("iduser"),
                })
                .rules({
                    matKhauCu: 'required',
                    matKhauMoi: 'required',
                    xacNhanMatKhauMoi: 'required',
                })
                .messages({
                    'matKhauCu.required': 'Trường bắt buộc nhập',
                    'matKhauMoi.required': 'Trường bắt buộc nhập',
                    'xacNhanMatKhauMoi.required': 'Trường bắt buộc nhập',

                }),

            rowId: '',
            statusForm: '',
            isActivemodal: true,

        }
    },
    mounted() {

    },
    watch: {

    },
    methods: {
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
        submitform() {

            if (this.dataForm.validate().errors().any()) {
                return;
            }
            const self = this;

            if (self.dataForm.matKhauMoi != self.dataForm.xacNhanMatKhauMoi) {
                self.thongbaothatbai('Nhập lại mật khẩu không đúng');
                self.dataForm.data.matKhauMoi = null;
                self.dataForm.xacNhanMatKhauMoi = null;
            }
            if (self.dataForm.matKhauMoi.length < 8) {
                self.dataForm.data.matKhauMoi = null;
                self.dataForm.xacNhanMatKhauMoi = null;
                self.thongbaothatbai('Password phải có ít nhât 8 ký tự');
            }

            var hasUppercase = /[A-Z]/.test(self.dataForm.matKhauMoi); // Kiểm tra mật khẩu có chứa ký tự viết hoa hay không
            var hasSpecialChar = /[\W_]/.test(self.dataForm.matKhauMoi); // Kiểm tra mật khẩu có chứa ký tự đặc biệt hay không
            var hasNumber = /\d/.test(self.dataForm.matKhauMoi); // Kiểm tra mật khẩu có chứa số hay không

            if (hasUppercase && hasSpecialChar && hasNumber) {

                axios.post("/NguoiDung/DoiMatKhau", self.dataForm.data).then(function () {
                        self.thongbaothanhcong('Bạn đã đổi thành công');
                        self.dataForm.data.matKhauCu = null;
                        self.dataForm.data.matKhauMoi = null;
                        self.dataForm.xacNhanMatKhauMoi = null;

                    })
                    .catch(error => {
                        if (error.response.status === 500) {
                            // Lỗi 500 - Xử lý lỗi tại đây
                            self.thongbaothatbai('Mật khẩu cũ của bạn chưa chính xác');
                        } else if (error.response.status === 404) {
                             self.thongbaothatbai('Rất tiếc không thể tim thấy người dùng');
                        } else {
                            // Các lỗi khác
                            self.thongbaothatbai('xác nhận mật khẩu mới không trùng với mật khẩu mới');
                        }

                    });

            } else {
                self.dataForm.data.matKhauMoi = null;
                self.dataForm.xacNhanMatKhauMoi = null;
                self.thongbaothatbai('Mật khẩu của bạn không chứa một ký tự ghi hoa hoặc một ký tự đặc biệt hoặc không chứa số');
            }

        },

    },
}
</script>
