<template>
<div>
    <div id="wrapper">
        <div class="header">
            <img class="mx-auto" src="/img/bg-header.jpg" alt="" />
            <!-- menu -->

            <nav class="sm:mt-0.5 menu">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover: bg-blue-700dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul class="flex flex-col rounded-lg bg-blue-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <a href="/" class="block py-2 uppercase pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:hover:bg-blue-500 md:p-3 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Cơ sở dữ liệu kinh tế tập thể</a>
                            </li>
                            <li style="margin: 0px !important">
                                <a href="/bao-cao-thong-ke" class="block py-2 uppercase pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-blue-500 md:border-0 md:p-3 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Báo cáo thống kê</a>
                            </li>
                            <li style="margin: 0px !important">
                                <a href="#" class="block py-2 uppercase pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-blue-500 md:border-0 md:p-3 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">văn bản pháp quy
                                </a>
                            </li>
                            <li style="margin: 0px !important">
                                <a href="/lien-he" class="block py-2 uppercase pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-blue-500 md:border-0 md:p-3 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Liên hệ
                                </a>
                            </li>

                            <li style="margin: 0px !important">
                                <a href="/san-pham" class="block py-2 uppercase pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-blue-500 md:border-0 md:p-3 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sản phẩm
                                </a>
                            </li>
                            <li v-if="token == null" style="margin: 0px !important">
                                <a href="/dang-ky-tai-khoan" class="block py-2 uppercase pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-blue-500 md:border-0 md:p-3 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Đăng ký tài khoản</a>
                            </li>
                            <li  v-if="token == null" style="margin: 0px !important">
                                <a href="/login" class="block py-2 uppercase pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-blue-500 md:border-0 md:p-3 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Đăng nhập hệ thống
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- end menu -->
        </div>
        <slot>

        </slot>
        <footer class="text-white text-center p-2 sm:h-36">
            <h1 class="font-medium">
                TRANG THÔNG TIN ĐIỆN TỬ HỘI NÔNG DÂN TỈNH QUẢNG NAM
            </h1>
            <p>
                Cơ quan chủ quản: Hội nông dân tỉnh Quảng Nam
                <br />
                Email:  - Điện thoại/Fax:
                <br />
                Địa chỉ: Tổ 7 - Phường Túc Duyên - TP Quảng Nam- Tỉnh Quảng Nam
                <br />
                Ghi rõ nguồn "Hội nông dân tỉnh Quảng Nam" khi phát hành lại thông
                tin từ website này
            </p>
        </footer>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: true,
            username: '',
            token: localStorage.getItem("login_token"),
        }
    },
    methods: {
        checkLogin() {
            // Check if user is logged in, set isLoggedIn and username accordingly
        },
        logout() {
            // Perform logout action and set isLoggedIn to false
        }
    },
    created() {
        this.checkLogin();
    }
}
</script>
