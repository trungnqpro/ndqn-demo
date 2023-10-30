<template>
<div>
    <LayoutWebsiteNew>
        <section id="body-of-portlet">
            <div class="columns-1" id="main-content" role="main">
                <div class="portlet-layout row">
                    <div class="col-md-12 portlet-column portlet-column-only" id="column-1">
                        <div class="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">

                            <div class="portlet-boundary portlet-boundary_vn_gov_data_portlet_DatagovPortlet_  portlet-static portlet-static-end decorate  " id="p_p_id_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke_">
                                <span id="p_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"></span>

                                <section class="portlet" id="portlet_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke" style="width: 101.2%;">

                                    <div class="portlet-content" style="padding:0px !important;">

                                        <div class=" portlet-content-container">

                                            <div class="portlet-body">

                                                <section class="bg-slide container-fluid">
                                                    <div class="row">
                                                        <div class="col-md-4 col-md-offset-1  mt-150">

                                                            <h1 class="text-to">CSDL HND TỈNH QUẢNG NAM</h1>
                                                            <p class="text-trang">Điểm đầu mối công bố dữ liệu mở, cung cấp thông tin về chia sẻ dữ liệu của cơ quan nhà nước</p>
                                                            <a href="#" class="btn btn-success text-uppercase">Dữ liệu mở</a>
                                                        </div>
                                                        <div class="col-md-5 text-center col-md-offset-2"><img class="mt-30slide img-responsive" src="~@/assets/fonts/slide.svg" alt></div>
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
        <div id="lienhe" class="my-2">

           
            <div class="container my-10 px-6 mx-auto">

                <!-- Section: Design Block -->
                <section class="text-center text-gray-800">
                    <div class="max-w-[700px] mx-auto px-3 lg:px-6">

                        <div class="form-group mb-6">
                            <input v-model="dataForm.hoTen" type="text" class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Họ và tên">

                        </div>
                        <div class="form-group mb-6">
                            <input v-model="dataForm.dienThoai" type="tel" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Điện thoại liên hệ ">
                        </div>
                        <div class="form-group mb-6 text-left">
                            <input v-model="dataForm.email" type="text" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="email">
                            <span class="mt-4 mb-2 text-red-500" v-if="dataForm.errors().has('email')">
                                {{ dataForm.errors().get('email') }}
                            </span>
                        </div>
                        <div class="form-group mb-6">
                            <input v-model="dataForm.diaChi" type="text" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Địa chỉ / hội nông dân">
                        </div>
                        <div class="form-group mb-6">
                            <textarea v-model="dataForm.noiDung" class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    " id="exampleFormControlTextarea13" rows="3" placeholder="Nhập nội dung cần hỗ trỡ"></textarea>
                        </div>

                        <button @click="submitform()" style="color: white !important;" class="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Gửi thông tin</button>

                    </div>
                </section>

                <!-- Section: Design Block -->

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
                    hoTen: '',
                    diaChi: '',
                    dienThoai: '',
                    email: '',
                    noiDung: '',

                })
                .rules({
                    email: 'required',
                })
                .messages({
                    'email.required': 'Trường bắt buộc nhập',
                }),
        };
    },
    mounted() {

        this.saveform();
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
            this.tieude = 'Thêm mới thông tin'
            this.dataForm.data.hoTen = '';
            this.dataForm.data.diaChi = '';
            this.dataForm.data.dienThoai = '';
            this.dataForm.data.email = '';
            this.dataForm.data.noiDung = '';
            this.statusForm = "insert";
        },
        submitform() {

            if (this.dataForm.validate().errors().any()) {
                return;
            }
            const self = this;

            if (this.statusForm == "insert") {
                axios.post("/Contact", self.dataForm.data).then(function () {
                        self.thongbaothanhcong('Góp ý thành công')
                        self.saveform();

                    })
                    .catch(error => {
                        self.thongbaothatbai(error);
                    });
            }

        },
    },
};
</script>
