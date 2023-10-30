<style scoped>
.bg-login {
    background-image: url("~@/assets/images/bg-login.jpg") !important;
    background-size: cover !important;
    background-repeat: round !important;
}
.toggle-password-on path:nth-child(2) {
    display: none;
}

.toggle-password-on path:nth-child(3) {
    stroke-dasharray: 100;
    stroke-dashoffset: -21;
    animation: dash 1s linear infinite;
}

@keyframes dash {
    to {
        stroke-dashoffset: 26;
    }
}
</style>
<template>
<!-- component -->

<body class="antialiased bg-gradient-to-br from-green-100 to-white bg-login">

    <div class="container mx-auto">
        <div class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center p-10">
            <div class="flex flex-col w-full">

                <h1 class="text-4xl text-white font-bold">NỀN TẢNG QUẢN LÝ HỘI NÔNG DÂN TỈNH QUẢNG NAM</h1>

            </div>
            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                    <h2 class="text-2xl font-bold text-gray-800  mb-5">
                        ĐĂNG NHẬP
                    </h2>
                    <div action="" class="w-full text-left">
                        <div id="input" class="flex flex-col w-full my-5 ">
                            <label for="username" class="text-gray-500 mb-2">Tên đăng nhập</label>
                            <input type="text" id="username" v-model="UserName" placeholder="Tài khoản" class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
                        </div>
                        <div id="input" class="flex flex-col w-full my-5">
                            <label for="password" class="text-gray-500 mb-2">Password</label>
                            <div class="relative">
                                <input id="password-input" v-model="Password" type="password" placeholder="Mật khẩu" class="w-full appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg">
                                <button @click="Hienthimatkhau()" id="toggle-password" class="absolute right-0 top-[4px] mt-2 mr-2  focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                                        <path d="M0 0h24v24H0z" stroke="none"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path d="M3 12h4m4 0h10m3-3v6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="button" class="flex flex-col w-full my-5">
                            <button type="button" class="w-full py-4 bg-green-600 rounded-lg text-green-100" @click="login()">
                                <div class="flex flex-row items-center justify-center">
                                    <div class="mr-2">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                            </path>
                                        </svg>
                                    </div>
                                    <button type="submit" :disabled="loading" class="btn btn-block">
                                        <i class='fa fa-spin fa-spinner' v-if="loading"></i>
                                        {{ loading ? ' signing in...' : 'Login' }}
                                    </button>
                                </div>
                            </button>

                        </div>

                        <div class="text-center">
                            <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/quen-mat-khau">
                                Quên mật khẩu
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            UserName: "",
            Password: "",
            message: " ",
            error: "",
            loading: false
        };
    },
    mounted() {
    },
    methods: {
        login() {
            // let self = this
            this.loading = true;
            let UserName = this.UserName;
            let Password = this.Password;
            var data = {
                UserName,
                Password
            }
            if (UserName == "" || Password == "") {
                this.$noty.error('All fields are required');
                this.loading = false;
            } else {
                axios
                    .post('/Accounts/SignIn', data)
                    .then(function (response) {

                        // self.$router.push("/");

                        localStorage.setItem("login_token", response.data.token);

                        localStorage.setItem("role", response.data.role);
                        localStorage.setItem("iduser", response.data.user.id);
                        if (response.data.role == 1) {
                            window.location.href = '/don-vi'
                        } else if (response.data.role == 2) {
                            localStorage.setItem("idDonVi", response.data.user.idDonVi);
                            window.location.href = '/xem-thong-tin-don-vi?donvi=' + response.data.user.idDonVi;
                        } else if (response.data.role == 4 || response.data.role == 5) {
                            window.location.href = '/don-vi';
                        } else {
                            localStorage.setItem("idDiaBan", response.data.user.idDiaBan);
                            window.location.href = '/don-vi';
                        }

                    }).catch(error => {

                        if (error.response.status === 401) {
                            // Lỗi 500 - Xử lý lỗi tại đây
                            this.thongbaothatbai('Mật khẩu của bạn không đúng');
                            this.Password = '';
                            this.loading = false;
                        }

                    });

            }

        },
        thongbaothatbai(text) {
            this.$notify.error({
                title: 'Error',
                message: text
            });

        },
        Hienthimatkhau() {

            const togglePassword = document.getElementById('toggle-password');
            const passwordInput = document.getElementById('password-input');
            const isPasswordShown = passwordInput.type === 'text';
            passwordInput.type = isPasswordShown ? 'password' : 'text';
            togglePassword.classList.toggle('toggle-password-on');
        }
    },
};
</script>
