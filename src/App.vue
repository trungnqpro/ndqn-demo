<template>
<div v-if="token" class="grid grid-cols-12 relative min-h-screen ">

    <!-- <span class="absolute text-white text-4xl top-5 left-4 cursor-pointer" @click="openSidebar()">

<i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>

</span> -->
    <div :class="{'sm:hidden col-span-12 md:col-span-2 sm:col-span-3  p-2 relative overflow-y-auto text-center border-r border-gray-300  relative' : isHidden, 'hidden sm:block col-span-12 md:col-span-2 sm:col-span-3  p-2 relative overflow-y-auto text-center border-r border-gray-300  relative': !isHidden}" style="min-height: inherit; background: #0d5a86;">
        <div class="sidebar w-full pr-3 absolute top-0 bottom-0 overflow-auto">

            <div class="text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center">
                    <!-- <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i> -->
                    <h1 class="font-bold text-white text-[24px] ml-3">Hội Nông Dân</h1>
                    <i class="bi bi-justify text-black cursor-pointer sm:ml-28 lg:hidden" @click="openSidebar()"></i>
                </div>

            </div>

            <div class="my-4 bg-gray-300 h-[1px]"></div>
            <div v-for="(menu, index) in menus" :key="index">
                <!-- {{menu.decentralization}} -->

                <div v-if="menu.decentralization.includes(role)">
                    <div v-if="menu.isSubMenu" class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-white" @click="dropdown(index)">
                        <i :class="menu.icon"></i>
                        <div class="flex justify-between w-full items-center  ">
                            <span class="text-[15px] ml-4  font-medium">{{ menu.title }}</span>
                            <span :class="{ 'rotate-90': menu.isArrow }" class="text-sm rotate-0" id="arrow">
                                <i class="bi bi-chevron-down"></i>
                            </span>
                        </div>
                    </div>
                    <div v-else class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-white">
                        <i :class="menu.icon"></i>
                        <router-link to="/quan-ly-du-lieu-ky-don-vi" v-if="menu.title == 'Quản lý dữ liệu kỳ' && role == 2">
                            <div class="sm:block hidden"> <span class="text-[15px] ml-4  font-medium ">{{menu.title }} </span></div>
                            <div class="sm:hidden"> <span @click="chuyenmenu()" class="text-[15px] ml-4  font-medium ">{{menu.title }} </span></div>

                        </router-link>
                        <router-link :to="menu.route_name" v-else>
                            <div class="sm:block hidden"> <span class="text-[15px] ml-4  font-medium ">{{menu.title }} </span></div>
                            <div class="sm:hidden"> <span @click="chuyenmenu()" class="text-[15px] ml-4  font-medium ">{{menu.title }} </span></div>
                        </router-link>
                    </div>
                    <div v-if="menu.isSubMenu" :class="{ hidden: menu.isActive }" class="text-left text-sm mt-2 w-4/5 mx-auto text-white font-medium" id="submenu">
                        <router-link v-for="(sub, index) in menu.sub_menu" :key="index" :to="sub.route_name">
                            <div class="sm:block hidden">
                                <h1 class="cursor-pointer p-2 hover:bg-blue-600 hover:text-white rounded-md mt-1">
                                    {{ sub.title }}
                                </h1>
                            </div>
                            <div class="sm:hidden">
                                <h1 @click="chuyenmenu()" class="cursor-pointer p-2 hover:bg-blue-600 hover:text-white rounded-md mt-1">
                                    {{ sub.title }}
                                </h1>
                            </div>

                        </router-link>

                    </div>
                </div>

            </div>
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-white">
                <i class="bi bi-box-arrow-in-right"></i>
                <span class="text-[15px] ml-4 text-white font-medium" @click="logout()">Logout</span>
            </div>
        </div>
    </div>

    <div :class="{ 'sm:col-span-12 md:col-span-12': isHidden }" style="background: #f9fafb;" class="sm:col-span-9 md:col-span-10 col-span-12 sm:px-0 sm:pr-4">
        <div class="border-b border-gray-600 px-4" style="height: 70px; line-height: 80px;">
            <span class=" mt-2 text-gray-200 text-2xl cursor-pointer" @click="openSidebar()">
                <i class="bi bi-justify px-2 bg-slate-500 rounded-md"></i>
            </span>
        </div>
        <div class="px-4 ">

            <router-view></router-view>
        </div>
    </div>
</div>
<div v-else>
    <router-view>

    </router-view>
</div>
</template>

<style>
.sidebar::-webkit-scrollbar {
    display: none;
}
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isActive: true,

            isHidden: false,

            menus: [
                
                {
                    icon: 'bi bi-eyedropper',
                    title: 'Quản lý danh mục',
                    isActive: true,
                    isArrow: false,
                    isSubMenu: true,
                    sub_menu: [
                        {
                            icon: '',
                            route_name: '/danh-hieu-thi-dua',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục thành phố',
                        },
                        {
                            icon: '',
                            route_name: '/hinh-thuc-khen-thuong',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục phường ',
                        },
                        {
                            icon: '',
                            route_name: '/chung-nhan-san-pham',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục khu phố',
                        },
                        {
                            icon: '',
                            route_name: '/chung-nhan-khac',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục hội viên nòng cốt ',
                        },
                        {
                            icon: '',
                            route_name: '/mo-hinh-hoat-dong',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục mô hình sản xuất',
                        },
                        {
                            icon: '',
                            route_name: '/nganh-nghe',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục loại hình sản xuất ',
                        },

                        {
                            icon: '',
                            route_name: '/nhom-san-pham',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục chức vụ',
                        },

                        {
                            icon: '',
                            route_name: '/loai-hinh-kinh-te',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục tôn giáo',
                        },

                        {
                            icon: '',
                            route_name: '/chuc-danh',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục dân tộc',
                        },
                        {
                            icon: '',
                            route_name: '/linh-vuc-hoat-dong',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục quốc tịch',
                        },
                        {
                            icon: '',
                            route_name: '/ky-bien-dong',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục trình độ',

                        },
                        {
                            icon: '',
                            route_name: '/dia-ban',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục chức danh',

                        },

                    ],
                    decentralization: [1]

                },
                {
                    icon: 'bi bi-eyedropper',
                    title: 'Quản lý hội viên',
                    isActive: true,
                    isArrow: false,
                    isSubMenu: true,
                    sub_menu: [
                        {
                            icon: '',
                            route_name: '/danh-hieu-thi-dua',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Danh sách hội viên',
                        },
                    ],
                    decentralization: [1]
                },
                {
                    icon: 'bi bi-eyedropper',
                    title: 'Thống kê, báo cáo',
                    isActive: true,
                    isArrow: false,
                    isSubMenu: true,
                    sub_menu: [{
                            icon: '',
                            route_name: '/bao-cao-trinh-do-can-bo-chu-chot',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Thống kê hội viên',
                        },

                        {
                            icon: '',
                            route_name: '/thanh-vien-va-lao-dong',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Thống kê báo cáo',
                        },


                    ],
                    decentralization: [1, 3, 4, 5]

                },
                {
                    icon: 'bi bi-eyedropper',
                    title: 'Quản lý sản phẩm',
                    isActive: true,
                    isArrow: false,
                    isSubMenu: true,
                    // route_name => '/di-chuyen-hien-vat',
                    sub_menu: [

                        {
                            icon: '',
                            route_name: '/quan-ly-tai-khoan',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục loại sản phẩm',
                        },
                        {
                            icon: '',
                            route_name: '/phan-quyen',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý danh mục sản phẩm',
                        },
                        {
                            icon: '',
                            route_name: '/nhat-ky',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Duyệt chứng thực sản phẩm',
                        },
                        {
                            icon: '',
                            route_name: '/nhat-ky',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản lý sản phẩm',
                        },
                        {
                            icon: '',
                            route_name: '/nhat-ky',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Theo dõi liên hệ giao dịch',
                        },

                    ],
                    decentralization: [1]
                },
                {
                    icon: 'bi bi-eyedropper',
                    title: 'Hệ thống',
                    isActive: true,
                    isArrow: false,
                    isSubMenu: true,
                    // route_name => '/di-chuyen-hien-vat',
                    sub_menu: [

                        {
                            icon: '',
                            route_name: '/quan-ly-tai-khoan',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản trị cấu hình hệ thống',
                        },
                        {
                            icon: '',
                            route_name: '/phan-quyen',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản trị nhật ký hệ thống',
                        },
                        {
                            icon: '',
                            route_name: '/nhat-ky',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản trị tiện ích hệ thống',
                        },
                        {
                            icon: '',
                            route_name: '/nhat-ky',
                            params: {
                                layout: 'side-menu'
                            },
                            title: 'Quản trị người dùng di động',
                        },

                    ],
                    decentralization: [1]
                },
                {
                    icon: 'el-icon-refresh',
                    title: 'Đổi mật khẩu',
                    route_name: '/change-password',
                    isArrow: false,
                    isActive: true,
                    isSubMenu: false,
                    decentralization: [1, 2, 3, 4, 5]
                },

            ],
            token: localStorage.getItem("login_token"),
            role: parseInt(localStorage.getItem("role")),

            extendsApp: localStorage.getItem("extendsApp"),

        }
    },
    mounted() {},
    async created() {
        axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
    },
    methods: {
        chuyenmenu() {
            this.isHidden = !this.isHidden
        },
        logout() {
            localStorage.removeItem("login_token");
            window.location.href = '/login';
        },
        dropdown(index) {
            this.menus[index].isActive = !this.menus[index].isActive
            this.menus[index].isArrow = !this.menus[index].isArrow
            // this.isArrow = !this.isArrow

        },
        openSidebar() {
            this.isHidden = !this.isHidden
        }
    }
}
</script>
