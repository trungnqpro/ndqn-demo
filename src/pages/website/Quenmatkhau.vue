<style>
.bg-login {
    background-image: url('~@/assets/images/bg-login.jpg') !important;
    background-size: cover;
    background-repeat: round;
}
</style><style scoped>
.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-10px);
    }

    40% {
        transform: translateX(10px);
    }

    60% {
        transform: translateX(-10px);
    }

    80% {
        transform: translateX(10px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
<template>
<!-- component -->

<div class="antialiased bg-gradient-to-br from-green-100 to-white bg-login">

    <div class="container mx-auto">
        <div class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center p-10">
            <div class="flex flex-col w-full">

                <h1 class="text-4xl text-white font-bold">NỀN TẢNG QUẢN LÝ HỘI NÔNG DÂN TỈNH QUẢNG NAM</h1>

            </div>
            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                    <div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                        <div class="px-8 mb-4 text-center">
                            <h3 class="pt-4 mb-2 text-2xl">Quên mật khẩu?</h3>
                            <p class="mb-4 text-sm text-gray-700 text-justify">
                                Quên mật khẩu của bạn? Chúng tôi hiểu rồi, có chuyện xảy ra. Chỉ cần nhập địa chỉ email của bạn dưới đây và chúng tôi sẽ gửi cho bạn một
                                liên kết để thiết lập lại mật khẩu của bạn!
                            </p>
                        </div>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                    Email
                                </label>
                                <input v-model="Email" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email Address..." />
                            </div>
                            <div class="mb-6 text-center">
                                <button @click="login()" class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">
                                    Reset Password
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />

                            <div class="text-center">
                                <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/login">
                                    Bạn đã có tài khoản? Đăng nhập!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Email: "",

            loading: false
        };
    },
    mounted() {

    },
    methods: {
        thongbaothatbai(text) {
            this.$notify.error({
                title: 'Error',
                message: text
            });

        },
        thongbaothanhcong(text) {
            this.$notify({
                title: 'Success',
                message: text,
                type: 'success'
            });
        },
        login() {
            let self = this

            this.loading = true;
            let Email = this.Email;
            var emailInput = document.getElementById('email');
            var data = {
                Email,
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(Email)) {

                axios.post("/Accounts/QuenMatKhau", data).then(function () {
                        self.thongbaothanhcong('Chúc mừng bạn gửi thành công bạn hãy vào email để xem mật khẩu');
                        self.Email = '';

                    })
                    .catch(error => {
                     
                        
                        if (error.response.status === 404) {
                            // Lỗi 500 - Xử lý lỗi tại đây
                            this.thongbaothatbai('Email của bạn chưa chính xác');
                         
                        }
                        emailInput.classList.add('shake');
                        setTimeout(function () {
                            emailInput.classList.remove('shake');
                        }, 500);

                    });
            } else if (Email == '') {
                this.thongbaothatbai('Bạn chưa nhập Email');
                emailInput.classList.add('shake');
                setTimeout(function () {
                    emailInput.classList.remove('shake');
                }, 500);
            } else {
                this.thongbaothatbai('Email của bạn chưa đúng định dạng');
                emailInput.classList.add('shake');
                setTimeout(function () {
                    emailInput.classList.remove('shake');
                }, 500);
                this.Email = '';
            }

        },

    },
};
</script>
