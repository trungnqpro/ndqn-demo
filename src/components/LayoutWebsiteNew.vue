<template>
<div>
    <nav class="navbar navbar-default sticky-top fixed-top navbar navbar-light padLR-50" id="banner">
        <div class="container-fluid bg-td">

            <div class="navbar-header"> <button @click="toggleShow" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                <!-- <a class="navbar-brand navbar-brand1" href="/"><img src="~@/assets/fonts/photo_2023-05-27_15-15-17.jpg" height="64" alt></a> -->

            </div>

            <div class="collapse navbar-collapse" :class="{ 'show': isShow }">

                <p class="text-right mt-10 mb-0 hidden-xs">
                    <a class="text-vang" href="/login">Đăng nhập</a>
                    <span class="cach">I</span>
                    <a class="hidden-xs text-vang" href="/dang-ky-tai-khoan">Đăng ký</a>

                </p>

                <ul class="nav navbar-nav navbar-right">

                    <li class="nav-item dropdown dmenu">

                        <a href="/" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            CSDL Hội Nông Dân
                        </a>
                       
                    </li>

                    <li class="nav-item dropdown dmenu">

                        <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Tìm kiếm dữ liệu
                        </a>
                        <ul class="dropdown-menu sm-menu">
                            <div class="arrow-up"></div>

                            <li>
                                <a href="/bao-cao-thong-ke">Thống kê dữ liệu </a>
                            </li>

                            <li>
                                <a href="/tim-kiem-du-lieu">Tìm kiếm dữ liệu</a>
                            </li>

                        </ul>
                    </li>

                    <li class="nav-item dropdown dmenu">

                        <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Văn bản - Hướng dẫn
                        </a>

                    </li>

                    <li class="nav-item dropdown dmenu">

                        <a href="/san-pham" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Sản phẩm
                        </a>

                    </li>
                    <li class="nav-item dropdown dmenu">
                        <a href="/lien-he" class>
                            Liên hệ
                        </a>

                    </li>

                    <li class="visible-xs-block"><a class="bt-dn" href="/login">Đăng nhập</a></li>
                    <!-- <li class="visible-xs-block"><a class="bt-dn" href="/dang-ky">Đăng ký</a></li> -->

                </ul>
            </div>

        </div>

    </nav>

    <div id="content">
        <slot>

        </slot>
    </div>
    <section class="container-fluid bg-xanh pad-TB30">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-ft">
                        <p class="mb-0">CỔNG THÔNG TIN ĐIỆN TỬ </p>
                        <h4>HỘI NÔNG DÂN TỈNH QUẢNG NAM</h4>
                        <ul class="list-unstyled menu-f">
                            <li><a class="text-xanhnhat" href><i class="far fa-envelope mr-5"></i>#</a></li>
                            <li><a class="text-xanhnhat" href><i class="fas fa-phone-alt mr-5"></i>#</a></li>
                            <li><i class="fas fa-map-marker-alt mr-5"></i>#</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <ul class="list-unstyled menu-f mb-0">
                                <li><a class="text-xanhnhat">Đánh giá - Xếp hạng</a></li>
                                <li><a class="text-xanhnhat">Ứng dụng</a></li>
                                <li><a class="text-xanhnhat">Về cổng dữ liệu Quốc gia</a></li>
                                <li><a class="text-xanhnhat">Điều khoản sử dụng</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: Phát triển bởi PITC Group |</span>
        <a class="font-semibold text-neutral-600 dark:text-neutral-400" href="http://pitcgroup.com.vn/"> www.pitcgroup.com.vn</a>
    </div>
    <div id="is_home" style="display:none;">true</div>
    <div id="check" style="display:none;">false</div>
    <div id="url" style="display:none;">/thong-tin-tai-khoan</div>

</div>
</template>

<script data-senna-track="permanent" src="/js/combo.js" type="text/javascript"></script>
<script data-senna-track="permanent" src="/js/combo_3.js" type="text/javascript"></script><script>
export default {
    data() {
        return {
            isShow: false
        };
    },
    mounted() {
        const width = window.innerWidth;
        const dangKyElement = document.getElementById("dang-ky");
        const dangNhapElement = document.getElementById("dang-nhap");
        if (width <= 400) {
            document.getElementById("dang-ky").classList.remove("hidden");
            document.getElementById("dang-nhap").classList.remove("hidden");
        } else {
            if (dangKyElement && dangNhapElement) {
                document.getElementById("dang-ky").classList.add("");
                document.getElementById("dang-nhap").classList.add("");
            }

        }

        const dmenuItems = document.querySelectorAll(".navbar-light .dmenu");
        if (dmenuItems) {
            // Thực hiện thao tác trên phần tử
            dmenuItems.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                    item.querySelector(".sm-menu") && (item.querySelector(".sm-menu").style.display = "block");
                });
                item.addEventListener("mouseleave", () => {
                    item.querySelector(".sm-menu") && (item.querySelector(".sm-menu").style.display = "none");
                });
            });
        } else {
            console.error("Phần tử không tồn tại trong DOM");
        }

        const paramInnerHtmlVal = document.getElementById("is_home").innerHTML;
        if (paramInnerHtmlVal === "true") {
            if (document.getElementById("p_p_id_com_liferay_login_web_portlet_LoginPortlet_")) {
                console.log("phai trang login sso");
                document.getElementById("body-of-portlet").setAttribute("style", "margin-top:120px;");
                document.getElementById("banner").classList.add("shrink");
            } else {
                console.log("khong phai trang login sso");
            }
        }
        // Sử dụng sự kiện scroll trong Vue
        window.addEventListener("scroll", this.handleScroll);
        console.log(this.handleScroll)
        // Chuyển đoạn mã khác tương tự thành Vue

    },
    beforeDestroy() {
        // Gỡ bỏ sự kiện scroll trước khi component bị hủy
        window.removeEventListener("scroll", this.handleScroll);
        // Remove event listener on component destroy
        window.removeEventListener("resize", this.handleWindowResize);
    },
    methods: {
        handleScroll() {
            var paramInnerHtmlVal = document.getElementById("is_home").innerHTML;
            if (paramInnerHtmlVal === "true") {
                if (window.pageYOffset > 130) {
                    document.getElementById("banner").classList.add("shrink");
                } else {
                    document.getElementById("banner").classList.remove("shrink");
                }
            }
        },
        toggleShow() {
            this.isShow = !this.isShow;
        }
    },
};
</script>

<style scoped>
@charset "utf-8";

/* main1 */
/*1546875920000*/
@keyframes fade-down {
    from {
        opacity: 0;
        top: -50px
    }

    to {
        opacity: 1;
        top: 0;
    }
}

#settings .field-type-editor {
    padding: 0
}

#settings .field-type-editor .alloy-editor {
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem
}

#settings .alloy-editor {
    padding-right: 4px;
    width: 100%
}

#settings .form-inline .checkbox label {
    padding-left: 0
}

#settings .radio-inline {
    margin-right: 125px
}

#settings .lfr-ddm-form-page.active.advanced {
    display: block
}

#settings .lfr-ddm-form-page.advanced {
    display: none
}

#settings .key-value-editor.active .key-value-cancel,
#settings .key-value-editor.active .key-value-done,
#settings .key-value-editor.active .key-value-input {
    display: inline-block
}

#settings .key-value-editor.active .key-value-output {
    display: none
}

#settings .key-value-editor .key-value-cancel,
#settings .key-value-editor .key-value-done,
#settings .key-value-editor .key-value-input {
    display: none
}

#settings .key-value-editor .key-value-cancel,
#settings .key-value-editor .key-value-done {
    font-weight: bold;
    margin-left: 25px;
    text-transform: uppercase
}

#settings .key-value-editor .key-value-label {
    color: #c4cfd6;
    margin-right: 5px
}

#settings .key-value-editor .key-value-cancel,
#settings .key-value-editor .key-value-done,
#settings .key-value-editor .key-value-input,
#settings .key-value-editor .key-value-label,
#settings .key-value-editor .key-value-output {
    font-size: 11px
}

#settings .key-value-editor .key-value-input {
    background-color: transparent !;
    border-width: 0;
    margin: 0;
    outline: 0
}

#settings .key-value-editor .key-value-input,
#settings .key-value-editor .key-value-output {
    color: #6b6c7e
}

#settings .has-error .key-value-editor {
    display: none
}

#settings .liferay-ddm-form-field-key-value .form-control {
    padding-right: 30px
}

#settings .liferay-ddm-form-field-key-value .help-block {
    height: 22px;
    position: relative
}

#settings .liferay-ddm-form-field-key-value .key-value-input {
    width: 140px
}

#settings .liferay-ddm-form-field-options {
    margin-bottom: 0
}

#settings .liferay-ddm-form-field-options .close {
    font-size: 8px;
    margin-top: 2px;
    position: absolute;
    right: 8px;
    top: 2px;
    z-index: 5
}

#settings .liferay-ddm-form-field-options .drag-handle {
    color: #c3cfd8;
    cursor: pointer;
    font-size: 22px;
    position: absolute;
    top: 12px
}

#settings .liferay-ddm-form-field-options .drag-handle:hover {
    font-weight: bold
}

#settings .liferay-ddm-form-field-options .drag-placeholder {
    opacity: .5
}

#settings .liferay-ddm-form-field-options .key-value-input {
    width: 158px
}

#settings .liferay-ddm-form-field-options .last-option:not(:first-of-type) {
    -webkit-animation: fade-down .7s ease;
    -moz-animation: fade-down .7s ease;
    animation: fade-down .7s ease
}

#settings .liferay-ddm-form-field-options .last-option .close {
    display: none
}

#settings .liferay-ddm-form-field-options .liferay-ddm-form-field-key-value {
    margin-left: 30px
}

#settings .liferay-ddm-form-field-options .lfr-ddm-form-field-repeatable-toolbar {
    display: none
}

#settings .liferay-ddm-form-field-text textarea+.input-group-addon {
    vertical-align: bottom
}

#settings .autocomplete-container .form-group {
    margin-bottom: 18px
}

#settings .autocomplete-container .toolbar-group-content {
    padding-right: 0
}

#settings .autocomplete-container .toolbar-group {
    height: 48px;
    margin: 0
}

#settings .autocomplete-container .radio {
    display: inline-block
}

#settings .autocomplete-container .radio+.radio {
    margin-left: 15px
}

#settings .autocomplete-container .header-toolbar {
    font-size: 16px;
    margin-left: -8px
}

#settings .autocomplete-container .toolbar-group-expand-text {
    line-height: 48px;
    margin: 0;
    padding-left: 0
}

div.portlet-forms-admin .form-builder-layout .layout-row-container-row .layout-row .col {
    min-height: 16px
}

.form-builder-field-list-add-container {
    display: none
}

@media(max-width:767px) {
    .lfr-ddm-plus-button.btn {
        top: 54px
    }
}

.form-builder-layout .layout-row {
    border-width: 0
}

.form-builder-layout .layout-builder-resize-col-breakpoint-over .layout-builder-resize-col-breakpoint-line,
.form-builder-layout .layout-builder-resize-col-breakpoint-line:focus {
    border-width: 0
}

.form-builder-layout .form-builder-field-list,
.form-builder-layout .form-builder-field-list-container,
.form-builder-layout .form-builder-field-actions-container {
    height: 100%
}

.form-builder-layout .form-builder-field {
    min-height: 70px
}

.form-builder-layout .form-builder-field:hover .form-builder-field-actions-container {
    opacity: 1
}

.form-builder-layout .form-builder-field-actions-container {
    -webkit-transition: opacity .2s linear;
    -moz-transition: opacity .2s linear;
    transition: opacity .2s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0
}

.form-builder-layout .form-builder-field-actions-container .btn {
    background-color: #FFF;
    cursor: pointer;
    margin: 4px 0
}

.form-builder-layout .form-builder-field-actions-container .btn:hover {
    background-color: #1c67fb
}

.form-builder-layout .form-builder-field-list-container a.lfr-ddm-form-field-repeatable-add-button {
    cursor: inherit;
    position: absolute;
    right: 10px;
    text-decoration: none;
    top: 10px
}

.form-builder-layout .layout-builder-resize-col-draggable {
    -webkit-transition: opacity .2s linear;
    -moz-transition: opacity .2s linear;
    transition: opacity .2s linear
}

.form-builder-layout .layout-builder-resize-col-draggable-dragging .layout-builder-resize-col-draggable-handle {
    background: transparent
}

.form-builder-layout .layout-builder-resize-col-draggable-handle {
    border-radius: 0;
    font-size: 20px;
    height: 100%;
    margin-right: -10px;
    margin-top: 0;
    padding: 0;
    right: 0;
    text-align: center;
    top: 0;
    width: 9px
}

.form-builder-layout .layout-builder-resize-col-draggable-handle,
.form-builder-layout .layout-builder-resize-col-draggable-handle:hover {
    background-color: transparent
}

.form-builder-layout .layout-builder-resize-col-draggable-handle svg {
    display: none
}

.form-builder-layout .layout-builder-resize-col-breakpoint-line {
    border-color: transparent
}

.form-builder-layout .layout-row-container-row:hover .layout-builder-move-cut-button.layout-builder-move-cut-row-button,
.form-builder-layout .layout-row-container-row:focus .layout-builder-move-cut-button.layout-builder-move-cut-row-button,
.form-builder-layout .layout-builder-move-cut-button.layout-builder-move-cut-row-button:focus,
.form-builder-layout .layout-row-container-row:hover .layout-builder-remove-row-button,
.form-builder-layout .layout-row-container-row:focus .layout-builder-remove-row-button,
.form-builder-layout .layout-row-container-row .layout-builder-remove-row-button:focus {
    display: none
}

.portlet-forms-admin .form-builder-layout .form-builder-field:hover {
    background-color: transparent
}

.portlet-forms-admin .form-builder-layout div.layout-row-container-row .layout-row .col:first-of-type .layout-col-content,
.portlet-forms-admin .form-builder-layout div.layout-row-container-row .layout-row .col.last-col .layout-col-content,
.portlet-forms-admin .form-builder-layout div.layout-row-container-row .layout-row .col .layout-col-content {
    padding-left: 0;
    padding-right: 0
}

#cancelFieldChangesDialog .btn,
#deleteFieldDialog .btn,
#leaveFormDialog .btn {
    border-radius: .25rem;
    box-shadow: none;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    padding: .438rem .938rem
}

#cancelFieldChangesDialog .btn-primary,
#deleteFieldDialog .btn-primary,
#leaveFormDialog .btn-primary {
    background-color: #1865fb;
    border-color: #1865fb;
    color: #FFF
}

#cancelFieldChangesDialog .btn-link,
#deleteFieldDialog .btn-link,
#leaveFormDialog .btn-link {
    background-color: #FFF;
    border-color: #cdced9;
    color: #6b6c7e
}

#cancelFieldChangesDialog .btn-link:hover,
#deleteFieldDialog .btn-link:hover,
#leaveFormDialog .btn-link:hover {
    text-decoration: none
}

#cancelFieldChangesDialog .modal-footer>.btn-toolbar>:not(:first-child),
#deleteFieldDialog .modal-footer>.btn-toolbar>:not(:first-child),
#leaveFormDialog .modal-footer>.btn-toolbar>:not(:first-child) {
    margin-left: 1rem
}

#cancelFieldChangesDialog .modal-footer>.btn-toolbar>:not(:last-child),
#deleteFieldDialog .modal-footer>.btn-toolbar>:not(:last-child),
#leaveFormDialog .modal-footer>.btn-toolbar>:not(:last-child) {
    margin-right: 0
}

#cancelFieldChangesDialog .modal-full-screen-content .modal-body,
#deleteFieldDialog .modal-full-screen-content .modal-body,
#leaveFormDialog .modal-full-screen-content .modal-body {
    overflow: visible;
    padding: 1rem 1.5rem
}

.form-builder-pages-lexicon ul {
    margin: auto;
    padding: 20px 0;
    transform: translateX(45px)
}

.multi-step-item.success-page.complete .multi-step-divider {
    background-color: #e9ecef
}

.multi-step-item.success-page.complete .multi-step-icon {
    background-color: #1865fb
}

.multi-step-item.success-page .multi-step-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%3E%3Cpath%20class='lexicon-icon-outline'%20d='M502.091%2060.993c-9.909-9.91-25.962-9.91-35.843%200L129.26%20397.981%2045.752%20314.53c-9.881-9.909-25.962-9.909-35.843%200-9.909%209.909-9.909%2025.962%200%2035.843l98.257%2098.257c2.608%202.608%205.679%204.433%208.924%205.679%204.028%202.464%208.403%204.115%2012.952%204.115%206.49%200%2012.981-2.464%2017.936-7.418L502.09%2096.865c9.909-9.909%209.909-25.962%200-35.871v-.001z'%20fill='#6B6C7E'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: .875rem;
    text-indent: -9999px
}

body .multi-step-item.active .multi-step-divider,
body .multi-step-item.success-page.complete .multi-step-divider {
    background-color: #1865fb
}

.portlet-forms-admin .ddm-form-basic-info h1 .alloy-editor.alloy-editor-placeholder p {
    color: #000;
    font-weight: 500
}

.form-builder-sidebar-list .list-group-header,
.form-builder-sidebar-list .list-group-item {
    border-left-width: 0;
    border-right-width: 0
}

@media only screen and (min-width:768px) {

    .form-builder-field-settings-sidebar.form-builder-sidebar,
    .form-builder-field-types-sidebar.form-builder-sidebar {
        margin-top: 56px
    }
}

.form-builder-sidebar {
    margin-top: 49px
}

.form-builder-sidebar.sidenav-fixed.sidenav-menu-slider {
    z-index: 1000
}

.form-builder-sidebar.sidebar-light {
    background-color: #FFF
}

.form-builder-sidebar .navbar {
    border-bottom: 1px solid #f1f2f5
}

.form-builder-sidebar .sidebar .tbar-section {
    margin-left: 8px;
    margin-right: auto
}

.form-builder-sidebar .sidebar-body {
    padding: 0
}

.form-builder-sidebar .sidebar-header {
    padding: .5rem 1.5rem
}

.form-builder-sidebar .sidebar-header .nav {
    flex-direction: row
}

.form-builder-sidebar .sidebar-content {
    width: 380px
}

.form-builder-sidebar .sidebar-title {
    font-size: 1.2rem
}

.form-builder-sidebar .sidebar-subtitle {
    font-size: 1rem
}

.form-builder-sidebar .sidebar-title,
.form-builder-sidebar .sidebar-subtitle {
    font-weight: 500
}

.form-builder-sidebar .tab a {
    outline: 0
}

.form-builder-sidebar .tab-content .tab-pane {
    padding: 1.5rem
}

.form-builder-sidebar .lfr-ddm-form-tabs-content {
    overflow: auto;
    height: calc(100vh - 201px)
}

.form-builder-sidebar .lfr-ddm-form-tabs-content .help-icon:hover {
    color: #FFF
}

.form-builder-sidebar.sidenav-fixed.sidenav-menu-slider.open {
    visibility: visible;
    width: 380px
}

.form-builder-sidebar-close {
    text-align: right
}

.form-builder-sidebar-list {
    overflow: auto;
    height: calc(100vh - 180px)
}

.form-builder-sidebar-list .list-group {
    border-radius: 0
}

.form-builder-sidebar-list .list-group-header:first-child {
    border-radius: 0
}

.form-builder-sidebar-list .list-group-header-icon-open,
.form-builder-sidebar-list .list-group-header-icon-closed {
    font-size: .75rem
}

.form-builder-sidebar-list .list-group-item {
    border-bottom-width: 0
}

.form-builder-sidebar-list .list-group-item .flex-col:first-child {
    margin: 0 16px 0 8px
}

.form-builder-sidebar-list .list-group-item:first-child,
.form-builder-sidebar-list .list-group-item:last-child {
    border-radius: 0
}

.form-builder-sidebar-list .list-group-subtitle {
    font-size: .7rem;
    margin-bottom: 2px
}

.form-builder-sidebar-list .toggler-header-collapsed .list-group-header-icon-closed {
    display: block !important;
}

.form-builder-sidebar-list .toggler-header-collapsed .list-group-header-icon-open {
    display: none !important;
}

.form-builder-sidebar-list .toggler-header-expanded .list-group-header-icon-closed {
    display: none;
}

.form-builder-sidebar-list .toggler-header-expanded .list-group-header-icon-open {
    display: block;
}

.form-builder-field-settings-sidebar .form-builder-select-field.input-group-container {
    display: inherit;
}

.form-builder-field-settings-sidebar.loading-data .lfr-ddm-form-container {
    visibility: hidden;
}

.form-builder-field-settings-sidebar.loading-data .loading-icon {
    display: block;
}

.form-builder-field-settings-sidebar .loading-icon {
    display: none;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 150px
}

.form-builder-field-settings-sidebar .required-warning {
    display: none
}

.form-builder-field-settings-sidebar #field-type-menu-content span {
    margin: 0 6px
}

.form-builder-field-settings-sidebar #field-type-menu-content>div {
    display: inline
}

.liferay-ddm-form-builder-calculator {
    align-content: center;
    display: flex;
    justify-content: center
}

.liferay-ddm-form-rule-builder .ddm-form-basic-info {
    display: none
}

.liferay-ddm-form-rule-builder .ddm-form-builder-app {
    margin-top: 0
}

.liferay-ddm-form-rule-builder .footer-button {
    margin-left: 56px;
    margin-top: 12px;
    padding: 12px 24px
}

.liferay-ddm-form-builder-rule-builder-content span.label.label-secondary {
    max-width: 200px
}

.liferay-ddm-form-builder-rule-builder-content .liferay-ddm-form-builder-rule-condition-list h4,
.liferay-ddm-form-builder-rule-builder-content .liferay-ddm-form-builder-rule-action-list h4 {
    align-items: center;
    display: flex;
    margin: 0
}

.liferay-ddm-form-builder-rule-builder-content .select-arrow-down-container:focus {
    outline: 0
}

.liferay-ddm-form-builder-rule-builder-content .text-default {
    font-weight: normal
}

.liferay-ddm-form-rule-builder-timeline {
    margin-bottom: 0
}

.liferay-ddm-form-rule-builder-timeline.can-remove-item .timeline-item:hover>.container-trash {
    display: block
}

.liferay-ddm-form-rule-builder-timeline .container-trash {
    cursor: pointer;
    display: none;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 4px
}

.liferay-ddm-form-rule-builder-timeline .container-trash:hover {
    color: #65b6f0
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider p {
    display: inline-block
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-label-container {
    margin-bottom: 15px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-output,
.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-input {
    margin-right: 10px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-output-container,
.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-input-container {
    background-color: #f8f8f8;
    border-top: 1px solid #dce0e3;
    margin-top: 15px;
    padding: 20px 55px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-output-list .container-input-field,
.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-input-list .container-input-field {
    margin-bottom: 10px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-output-list .container-input-label,
.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .data-provider-parameter-input-list .container-input-label {
    margin-top: 10px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .action-rule-data-provider .no-padding {
    padding: 0
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .container-target-action {
    display: inherit
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .container-target-action h4 {
    margin-right: 10px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .lfr-ddm-form-field-container-inline {
    display: inline-block
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .timeline-item:last-child:before {
    bottom: 42px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .timeline-item .lfr-ddm-form-field-container {
    padding: 0
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list+div div:before {
    bottom: 20px;
    top: -72px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .timeline-item .panel .no-padding-bottom {
    padding-bottom: 0
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container {
    background-color: #f8f8f8;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-fields {
    margin-top: 22px;
    padding: 8px 25px 25px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-fields textarea {
    background-color: #f5f5f5;
    border: 1px solid #CCC;
    border-radius: 2px;
    color: #333;
    font-family: Menlo;
    font-size: 13px;
    min-height: 200px;
    padding: 10px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-fields textarea[readOnly] {
    cursor: not-allowed
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-fields .calculate-field-target {
    padding-top: 45px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component {
    min-width: 238px;
    padding-bottom: 30px;
    padding-top: 30px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-add-field-button-container {
    margin: 0 auto;
    padding: 0;
    width: 206px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-add-field-button-container .calculator-add-field-button {
    height: 49px;
    margin-bottom: 5px;
    margin-left: 1px;
    width: inherit
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-add-field-button-container .form-builder-select-field {
    margin-left: 0;
    width: 206px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-add-field-button-container .form-builder-select-field .select-field-trigger {
    display: none
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area {
    display: flex;
    margin: 0 auto;
    padding: 0
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area ul {
    list-style-type: none
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons {
    display: flex;
    flex-flow: row wrap;
    margin: 0;
    overflow: inherit;
    padding: 0
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.calculator-button,
.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.calculator-add-operator-button-area {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 49px;
    justify-content: center;
    margin: 1px;
    text-align: center;
    width: 49px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.calculator-add-operator-button-area .calculator-add-operator-button {
    height: 50px;
    position: absolute;
    width: 50px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.calculator-add-operator-button-area .form-builder-select-field {
    margin-left: -19px;
    margin-top: -10px;
    position: absolute
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.calculator-add-operator-button-area .form-builder-select-field .select-field-trigger {
    display: none
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.calculator-add-operator-button-area .form-builder-select-field .drop-chosen {
    border: solid 1px #dde1e3;
    border-radius: 4px;
    left: -17px;
    padding: 5px 0;
    text-align: left;
    top: 11px;
    width: 100px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.calculator-add-operator-button-area .form-builder-select-field .drop-chosen .search-chosen {
    display: none
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.button-padding-icons {
    padding-left: 8px;
    padding-top: 10px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.button-two-columns {
    width: 100px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.border-top-left {
    border-top-left-radius: 4px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.border-top-right {
    border-top-right-radius: 4px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.border-bottom-right {
    border-bottom-right-radius: 4px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons li.border-bottom-left {
    border-bottom-left-radius: 4px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons-numbers {
    margin-right: 4px;
    width: 153px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-action-list .calculate-container-calculator-component .calculator-button-area .calculator-buttons-operators {
    width: 51px
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .panel-body {
    position: relative
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .panel-body .dropdown {
    position: absolute;
    right: 4px;
    top: 4px
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .panel-body .dropdown-toggle-operator {
    padding: 4px 12px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-condition-list .timeline-item .lfr-ddm-form-field-container {
    padding: 0
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-condition-list .timeline-item:first-child:before {
    top: 31px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-condition-list .timeline-item:last-child>.operator {
    display: none
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-condition-list .timeline-item .operator {
    border-radius: 4px;
    font-size: 14px;
    margin-top: 10px;
    position: relative
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-condition-list .timeline-item .operator .panel-body {
    padding: 5px 17px
}

.liferay-ddm-form-rule-builder-timeline.liferay-ddm-form-builder-rule-condition-list .timeline-item .panel-inline {
    display: inline-block
}

.liferay-ddm-form-rule-builder-footer {
    margin: 24px 0;
    padding: 12px 54px
}

.liferay-ddm-form-rule-builder-footer .btn:not(:last-child) {
    margin-right: 5px
}

.liferay-ddm-form-builder-rule-content .lfr-ddm-form-field-container {
    padding: 0
}

.form-builder-rule-builder-rules-list {
    margin-top: 32px
}

.timeline-increment-icon.add-condition {
    padding-bottom: 16px;
    padding-top: 16px;
    position: relative
}

.timeline-increment-icon.add-condition:before {
    background-color: #272834;
    bottom: 0;
    content: '';
    display: block;
    left: 25px;
    position: absolute;
    top: -10px;
    width: 2px;
    z-index: -1
}

.timeline-increment-icon.add-condition .form-builder-timeline-add-item {
    border-radius: 100%;
    margin-left: 3px;
    padding: 0
}

.add-condition.timeline-increment-icon {
    padding-left: 7px
}

.form-builder-rule-builder-rule-description {
    padding: 8px
}

.liferay-ddm-form-rule-builder-timeline .timeline-item {
    color: #869cad;
    position: relative
}

.liferay-ddm-form-rule-builder-timeline .timeline-item:not(:nth-of-type(1)) .timeline-icon {
    background-color: #6b6c7e
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .action-panel {
    display: table;
    width: 100%
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .calculate-container .form-group {
    margin: 0
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .form-group,
.liferay-ddm-form-rule-builder-timeline .timeline-item .form-group-autofit {
    margin: 0
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .form-group-item {
    max-width: 200px
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .rule-choose-box {
    display: table-cell
}

.liferay-ddm-form-rule-builder-timeline .timeline-item .timeline-icon {
    border: 2px solid #6b6c7e;
    margin-right: 2px
}

.form-builder .layout-col-content {
    border-radius: 5px;
    height: 100%;
    padding: 0 32px
}

.form-builder fieldset[disabled] .form-control {
    background-color: #869cad
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over {
    opacity: 1
}

.form-builder .edit-mode .lfr-duplicate-field,
.form-builder .edit-mode .lfr-delete-field {
    display: none
}

.form-builder .edit-mode div.form-builder-field-list-container.hovered-field {
    border-color: #ededed;
    box-shadow: inset 5px 0 0 #e7e7ed, inset -5px 0 0 #e7e7ed
}

.form-builder .edit-mode div.form-builder-field-list-container.hovered-field .form-builder-field {
    cursor: pointer !important
}

.form-builder .edit-mode .form-builder-layout .layout-builder-resize-col-draggable-handle {
    display: none !important
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over {
    background-color: #f0f5ff;
    border: 2px dashed #80acff;
    border-radius: 4px
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.lfr-initial-col {
    background-color: #f7f8f9;
    border: 2px dashed #a7a9bc;
    border-radius: 4px;
    color: #a7a9bc
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.lfr-initial-col.yui3-dd-drop-over {
    background-color: #f0f5ff;
    border: 2px dashed #80acff;
    color: #2e5aac
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.last-col {
    margin: 0 -24px
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-12.lfr-initial-col {
    margin: 44px 24px !important
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-12 {
    margin: 0 24px
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-1:first-child {
    margin: 0 0 0 24px;
    max-width: calc(8.33333% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-2:first-child {
    margin: 0 0 0 24px;
    max-width: calc(16.66667% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-3:first-child {
    margin: 0 0 0 24px;
    max-width: calc(25% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-4:first-child {
    margin: 0 0 0 24px;
    max-width: calc(33.33333% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-5:first-child {
    margin: 0 0 0 24px;
    max-width: calc(41.66667% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-6:first-child {
    margin: 0 0 0 24px;
    max-width: calc(50% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-7:first-child {
    margin: 0 0 0 24px;
    max-width: calc(58.33333% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-8:first-child {
    margin: 0 0 0 24px;
    max-width: calc(66.66667% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-9:first-child {
    margin: 0 0 0 24px;
    max-width: calc(75% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-10:first-child {
    margin: 0 0 0 24px;
    max-width: calc(83.33333% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.col-empty-over.col-md-11:first-child {
    margin: 0 0 0 24px;
    max-width: calc(91.66667% - 24px)
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty {
    align-items: center;
    display: flex;
    flex: 100%;
    justify-content: center
}

.form-builder .form-builder-layout .layout-row-container-row .layout-row .col.col-empty.lfr-initial-col {
    margin: 44px 24px;
    min-height: 56px
}

.form-builder .form-builder-layout .layout-row-container-row:last-child .col-empty-over {
    margin-bottom: 20px !important
}

.form-builder .layout-builder-resize-col-draggable {
    width: 3px
}

.form-builder .layout-col-content {
    border-radius: 5px;
    height: 100%;
    padding: 0 32px
}

.form-builder div.form-builder-field-list-container {
    border: 1px solid transparent;
    border-left-width: 0;
    border-right-width: 0;
    box-shadow: inset 5px 0 0 transparent, inset -5px 0 0 transparent;
    padding: 0 20px;
    -webkit-transition: border ease-out .3s, box-shadow ease-out .3s;
    -moz-transition: border ease-out .3s, box-shadow ease-out .3s;
    transition: border ease-out .3s, box-shadow ease-out .3s
}

.form-builder div.form-builder-field-list-container div.lfr-ddm-field-actions-container {
    opacity: 0;
    position: absolute;
    right: 0;
    top: calc(-32px / 2);
    visibility: hidden;
    width: 78px;
    -webkit-transition: all ease .3s;
    -moz-transition: all ease .3s;
    transition: all ease .3s
}

.form-builder div.form-builder-field-list-container div.lfr-ddm-field-actions-container button:first-child {
    margin-right: 8px
}

.form-builder div.form-builder-field-list-container.hovered-field {
    border-color: #cdced9;
    box-shadow: inset 5px 0 0 #1c67fb, inset -5px 0 0 #1c67fb
}

.form-builder div.form-builder-field-list-container.hovered-field .form-builder-field {
    cursor: default
}

.form-builder div.form-builder-field-list-container.hovered-field .form-builder-field:hover .lfr-ddm-field-actions-container {
    opacity: 1;
    visibility: visible
}

.form-builder div.form-builder-field-list-container.hovered-field .form-builder-field:hover .lfr-ddm-field-actions-container .label-primary:hover {
    background-color: #f7f8f9;
    border-color: #80acff;
    color: #0053f0
}

.form-builder .hidden {
    visibility: hidden
}

.yui3-dd-proxy .form-builder-field-list-container {
    height: 134px;
    opacity: .85;
    -webkit-transform: translateY(-60px);
    -moz-transform: translateY(-60px);
    -ms-transform: translateY(-60px);
    -o-transform: translateY(-60px);
    transform: translateY(-60px)
}

.yui3-dd-proxy .form-builder-field-list-container div.lfr-ddm-field-actions-container {
    display: none
}

.yui3-dd-proxy {
    border: none !important
}

.yui3-dd-proxy .list-group-item {
    background-color: #FFF;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)
}

.yui3-dd-proxy .list-group-item .flex-col:first-child {
    margin: 0 16px 0 8px
}

.yui3-dd-proxy .list-group-item .list-group-subtitle {
    font-size: .7rem;
    margin-bottom: 2px
}

.yui3-dd-proxy .form-builder-field label {
    float: initial
}

.form-builder-field-list .form-builder-field:hover,
.form-builder-field-list,
.lfr-ddm-form-builder-draggable-item {
    cursor: -webkit-grab !important;
    cursor: -moz-grab !important;
    cursor: grab !important
}

.yui3-dd-shim,
.yui3-dd-proxy {
    cursor: -webkit-grabbing !important;
    cursor: -moz-grabbing !important;
    cursor: grabbing !important
}

@media(max-width:767px) {
    .form-builder-layout .layout-row .col {
        flex: 0 0 100%;
        max-width: 100%
    }
}

.clay-tooltip,
.tooltip {
    padding-top: 10px
}

.clay-tooltip .tooltip-content,
.tooltip .tooltip-content {
    padding: 8px 12px
}

.clay-tooltip .tooltip-inner,
.tooltip .tooltip-inner {
    text-align: left
}

.clay-tooltip.tooltip,
.tooltip.tooltip {
    max-width: 280px
}

.clay-tooltip.right.tooltip,
.tooltip.right.tooltip {
    padding-left: 6px
}

.clay-tooltip.right .tooltip-arrow,
.tooltip.right .tooltip-arrow {
    height: .8rem;
    left: 0;
    margin-top: -0.4rem;
    top: 50%;
    width: .4rem
}

.clay-tooltip.right .tooltip-arrow:before,
.tooltip.right .tooltip-arrow:before {
    border-right-color: #272833;
    border-width: .4rem .4rem .4rem 0;
    right: 0
}

.clay-tooltip.left.tooltip,
.tooltip.left.tooltip {
    padding-right: 6px
}

.clay-tooltip.left .tooltip-arrow,
.tooltip.left .tooltip-arrow {
    height: .8rem;
    margin-top: -0.4rem;
    right: 0;
    top: 50%;
    width: .4rem
}

.clay-tooltip.left .tooltip-arrow:before,
.tooltip.left .tooltip-arrow:before {
    border-right-color: #272833;
    border-width: .4rem 0 .4rem .4rem;
    left: 0
}

.clay-tooltip.top.tooltip,
.tooltip.top.tooltip {
    padding-bottom: 6px
}

.clay-tooltip.top .tooltip-arrow,
.tooltip.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -0.4rem
}

.clay-tooltip.top .tooltip-arrow:before,
.tooltip.top .tooltip-arrow:before {
    border-top-color: #272833;
    border-width: .4rem .4rem 0;
    top: 0
}

.clay-tooltip.bottom.tooltip,
.tooltip.bottom.tooltip {
    padding-top: 6px
}

.clay-tooltip.bottom .tooltip-arrow,
.tooltip.bottom .tooltip-arrow {
    left: 50%;
    margin-left: -0.4rem;
    top: 0
}

.clay-tooltip.bottom .tooltip-arrow:before,
.tooltip.bottom .tooltip-arrow:before {
    border-right-color: #272833;
    border-width: 0 .4rem .4rem;
    bottom: 0
}

.clay-tooltip .tooltip-arrow,
.tooltip .tooltip-arrow {
    display: block;
    height: .4rem;
    position: absolute;
    width: .8rem
}

.tooltip .tooltip-arrow:before {
    border-color: transparent;
    border-style: solid;
    content: '';
    position: absolute
}

.ddm-form-export-modal-content.modal-content {
    max-height: fit-content
}

.ddm-form-export-modal-content.modal-content .modal-body {
    height: auto !important
}

.form-group .trigger-tooltip {
    padding-left: .5rem;
    padding-right: .5rem;
    padding-top: 0;
    width: initial
}

.multi-step-item.success-page.complete .multi-step-divider {
    background-color: #e9ecef
}

.multi-step-item.success-page.complete .multi-step-icon {
    background-color: #1865fb
}

.multi-step-item.success-page .multi-step-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%3E%3Cpath%20class='lexicon-icon-outline'%20d='M502.091%2060.993c-9.909-9.91-25.962-9.91-35.843%200L129.26%20397.981%2045.752%20314.53c-9.881-9.909-25.962-9.909-35.843%200-9.909%209.909-9.909%2025.962%200%2035.843l98.257%2098.257c2.608%202.608%205.679%204.433%208.924%205.679%204.028%202.464%208.403%204.115%2012.952%204.115%206.49%200%2012.981-2.464%2017.936-7.418L502.09%2096.865c9.909-9.909%209.909-25.962%200-35.871v-.001z'%20fill='#6B6C7E'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: .875rem;
    text-indent: -9999px
}

.form-builder-page-manager-popover-header.popover-one-page .popover-content {
    left: -14px;
    top: 35px
}

.form-builder-page-manager-popover-header.popover-wizard .popover-content {
    left: 3px;
    top: 3px
}

.form-builder-page-manager-popover-header.popover-pagination .popover-content {
    left: -13px;
    top: 32px
}

/* end main 1 */
/* main  */
.lfr-ddm-form-field-group {
    display: block;
    margin: .75rem 0;
    position: relative
}

.lfr-ddm-form-field-checkbox-switch {
    display: block;
    margin-bottom: 0 0 .25rem;
    min-height: 0;
    padding-left: 0;
    position: relative
}

.lfr-ddm-form-field-checkbox-switch.lfr-ddm-form-field-checkbox-switch-inline {
    display: inline-block;
    margin-right: 1rem
}

.form-builder-select-field .select-field-trigger {
    align-items: center;
    display: flex;
    justify-content: space-between
}

.form-builder-select-field .select-field-trigger .option-selected,
.form-builder-select-field .multiple-label-list .multiple-label {
    text-overflow: ellipsis;
    white-space: nowrap
}

.ddm-form-builder-app .lfr-ddm-form-page>.row {
    margin-left: 20px;
    margin-right: 20px
}

body .ddm-user-view-content .liferay-ddm-form-renderer-wizard {
    padding: 40px 34px 31px
}

body .ddm-user-view-content .multi-step-item.active .multi-step-divider {
    background-color: #1865fb
}

body .ddm-user-view-content .multi-step-indicator-label {
    margin-top: -28px
}

body .ddm-user-view-content .form-group .form-check-inline {
    margin-right: 16px
}

body .ddm-user-view-content .form-group .custom-control-inline+.custom-control-inline {
    margin-left: 16px
}

body .ddm-user-view-content .multi-step-icon {
    cursor: default
}

.portlet-forms .ddm-form-basic-info .ddm-form-name {
    color: #000;
    font-weight: 500
}

.lfr-ddm-form-container {
    word-break: normal
}

.lfr-ddm-form-container .form-control-feedback {
    margin-left: -20px
}

.lfr-ddm-form-container .icon-angle-left {
    font-size: inherit
}

.lfr-ddm-form-container .input-group-addon .form-control-feedback {
    left: -18px
}

.lfr-ddm-form-container .required-warning {
    margin-bottom: 25px;
    padding-left: 32px
}

.lfr-ddm-form-container .required-warning .icon-asterisk {
    margin-left: 4px
}

.lfr-ddm-form-container .select-arrow-down-container:focus {
    outline: 0
}

.lfr-ddm-form-container .lfr-ddm-form-field-container {
    position: relative
}

.lfr-ddm-form-container .lfr-ddm-form-field-container.has-error .liferay-ddm-form-field-date .input-group-addon {
    border-width: 0 0 2px
}

@-webkit-keyframes spin {
    100% {
        transform: rotate(359deg)
    }
}

@-moz-keyframes spin {
    100% {
        transform: rotate(359deg)
    }
}

@keyframes spin {
    100% {
        transform: rotate(359deg)
    }
}

.lfr-ddm-form-container .lfr-ddm-form-field-container .icon-asterisk {
    margin-left: 4px
}

.lfr-ddm-form-container .lfr-ddm-form-field-container .lfr-ddm-form-field-repeatable-add-button {
    position: absolute;
    right: 0;
    top: 0
}

.lfr-ddm-form-container .lfr-ddm-form-field-container .lfr-ddm-form-field-repeatable-delete-button {
    position: absolute;
    right: 15px;
    top: 0
}

.lfr-ddm-form-container .lfr-ddm-form-field-container .liferay-ddm-form-field-date .input-group-addon {
    cursor: pointer
}

.lfr-ddm-form-container .lfr-ddm-form-field-container select.form-control[multiple] {
    height: auto
}

.lfr-ddm-form-container .lfr-ddm-form-field-container textarea {
    overflow-y: hidden
}

.lfr-ddm-form-container .lfr-ddm-form-page {
    display: none;
    padding: 25px 0
}

.lfr-ddm-form-container .lfr-ddm-form-page.active {
    display: block
}

.lfr-ddm-form-container .lfr-ddm-form-page-description {
    margin-bottom: 23px
}

.lfr-ddm-form-container .lfr-ddm-form-page-title+.required-warning {
    margin-top: 0
}

.lfr-ddm-form-container .lfr-ddm-form-page-title+.row {
    margin-top: 40px
}

.lfr-ddm-form-container .lfr-ddm-form-pagination-controls {
    padding-top: 20px
}

.lfr-ddm-form-container .lfr-ddm-form-pagination-controls button {
    margin-bottom: 20px
}

.lfr-ddm-form-container .row {
    min-height: auto
}

.lfr-ddm-form-container .has-error .liferay-ddm-form-field-grid.table-responsive {
    margin-bottom: 0
}

.lfr-ddm-form-container .has-error select.form-control[multiple] {
    background-image: none
}

.lfr-ddm-form-container .has-error td,
.lfr-ddm-form-container .has-error th {
    color: #da1414
}

.lfr-ddm-form-container .lfr-ddm-form-field-repeatable-toolbar a {
    color: #65b6f0;
    text-decoration: none
}

.lfr-ddm-form-container .lfr-ddm-form-field-repeatable-toolbar a:hover {
    text-decoration: none
}

.liferay-ddm-form-field-checkbox .checkbox {
    margin-bottom: 2px
}

.liferay-ddm-form-field-document-library a {
    display: inline-block
}

.liferay-ddm-form-field-paragraph,
.liferay-ddm-form-field-tip {
    color: #869cad;
    line-height: 16px
}

.liferay-ddm-form-field-paragraph {
    font-size: 14px
}

.liferay-ddm-form-field-options .form-control-feedback {
    margin-left: 0
}

.liferay-ddm-form-field-options .form-control-feedback [class^="icon"] {
    display: none
}

.liferay-ddm-form-field-tip {
    font-size: 11px;
    font-weight: 400
}

.liferay-ddm-form-field-grid .table {
    margin-bottom: .1rem
}

.liferay-ddm-form-field-grid.table-responsive {
    margin-bottom: 0
}

.liferay-ddm-form-field-grid th,
.liferay-ddm-form-field-grid td:not(:first-child) {
    text-align: center
}

.radio-options .radio-inline span {
    display: inline-block;
    height: 28px
}

.multi-step-progress-bar>.complete {
    color: #65b6f0
}

.multi-step-progress-bar>.complete .divider {
    background-color: #65b6f0
}

.portal-popup {
    padding: 0
}

.portal-popup.open {
    padding: 0
}

.form-builder-layout .input-group .form-control {
    z-index: initial
}

.form-builder-select-field {
    position: relative
}

.form-builder-select-field .option-selected-placeholder {
    color: #6a6c7d
}

.form-builder-select-field .dropdown-menu {
    display: block;
    max-width: initial;
    min-width: 0;
    overflow: hidden;
    width: 100%
}

.form-builder-select-field .dropdown-menu .dropdown-section,
.form-builder-select-field .dropdown-menu .dropdown-item,
.form-builder-select-field .dropdown-menu .no-results-list {
    padding: .5rem 1rem
}

.form-builder-select-field .dropdown-menu .placeholder-dropdown-item {
    color: #a7a9bc
}

.form-builder-select-field .dropdown-menu .placeholder-dropdown-item:hover {
    color: #a7a9bc
}

.form-builder-select-field .dropdown-menu .custom-control {
    padding-bottom: 0
}

.form-builder-select-field .select-arrow-down-container {
    color: #6b6c7e
}

.form-builder-select-field .search-chosen {
    border-bottom: 1px solid #e4e9ec;
    position: relative
}

.form-builder-select-field .select-search-container {
    left: 8px;
    position: absolute;
    top: 2px
}

.form-builder-select-field .select-search-container a {
    color: #869cad
}

.form-builder-select-field.active .select-field-trigger {
    border-bottom: 2px solid #65b6f0
}

.form-builder-select-field .form-control[disabled]>a.select-arrow-down-container {
    cursor: not-allowed;
    opacity: .5
}

.form-builder-select-field .form-control[disabled]:focus {
    border-bottom: 2px solid #869cad;
    text-decoration: none
}

.form-builder-select-field .select-field-trigger {
    height: inherit
}

.form-builder-select-field .select-field-trigger .option-selected {
    overflow: hidden
}

.form-builder-select-field .drop-chosen {
    background-color: #FFF;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 2px 14px 0 rgba(58, 75, 87, 0.1);
    left: 0;
    position: absolute;
    right: 0;
    z-index: 1010
}

.form-builder-select-field .drop-chosen .dropdown-visible {
    display: block
}

.form-builder-select-field .drop-chosen .results-chosen {
    margin: 0;
    min-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0
}

.form-builder-select-field .drop-chosen .results-chosen .inline-scroller>span {
    padding-left: 16px
}

.form-builder-select-field .multiple-label-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-right: 20px;
    width: auto
}

.form-builder-select-field .multiple-label-list li {
    overflow: hidden
}

.form-builder-select-field .multiple-label-list span.label-secondary {
    max-width: 200px
}

.form-builder-select-field .multiple-label-list .multiple-label {
    margin-bottom: 4px;
    margin-right: 6px;
    margin-top: 0;
    overflow: hidden;
    padding-right: 20px;
    position: relative
}

.form-builder-select-field .multiple-label-list .multiple-label a {
    font-size: 6px;
    position: absolute;
    right: 5px;
    top: 1px
}

.form-builder-select-field .multiple-label-list .multiple-label a .icon-monospaced.lexicon-icon {
    margin-bottom: 1px;
    margin-left: 5px;
    padding: 0
}

.lfr-ddm-form-page-description,
.lfr-ddm-form-page-title {
    padding-left: 32px;
    padding-right: 32px
}

.lfr-ddm-form-paginated .pagination {
    justify-content: center;
    padding-bottom: 30px
}

.liferay-ddm-form-field-fieldset {
    margin-bottom: 0 !important
}

.liferay-ddm-form-field-fieldset+.lfr-ddm-form-field-repeatable-toolbar .icon-minus-sign {
    right: 26px;
    top: 16px
}

.liferay-ddm-form-field-fieldset+.lfr-ddm-form-field-repeatable-toolbar .icon-plus-sign {
    right: 8px;
    top: 16px
}

.liferay-ddm-form-field-fieldset .lfr-ddm-form-field-container .liferay-ddm-form-field-checkbox {
    margin-top: 21px
}

.liferay-ddm-form-field-fieldset.border-bottom {
    margin-bottom: 50px !important
}

.liferay-ddm-form-field-fieldset>fieldset {
    border: 1px solid rgba(134, 156, 173, 0.4);
    border-bottom-width: 0;
    border-top-width: 0;
    padding: 10px 10px 0 10px
}

.liferay-ddm-form-field-fieldset>fieldset>div {
    margin-bottom: 0;
    padding-left: 0
}

.liferay-ddm-form-field-fieldset>fieldset>div div div.form-group {
    margin-bottom: 20px !important
}

.liferay-ddm-form-field-fieldset>fieldset legend {
    border-width: 0;
    color: #869cad;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    margin: 0;
    padding: 0 8px;
    position: relative;
    text-transform: uppercase;
    width: auto
}

.liferay-ddm-form-renderer-pagination-content a {
    pointer-events: none
}

.form-check-inline .custom-control-label {
    line-height: 24px
}

.liferay-ddm-form-field-radio .custom-control-inline.custom-control {
    padding-bottom: 0
}

.liferay-ddm-form-field-radio .custom-control-inline+.custom-control-inline {
    margin-left: 11px
}

.liferay-ddm-form-field-checkbox-multiple .custom-control {
    padding-bottom: 9px
}

.liferay-ddm-form-field-checkbox-multiple .form-check-inline {
    margin-right: 11px
}

/* /end main */
/* main 2 */
/*1546875922000*/
.color-cell-editor-hidden {
    display: none
}

.portlet-document-library .field-labels-inline,
.portlet-dynamic-data-mapping .field-labels-inline {
    clear: both;
    display: block
}

.portlet-document-library .field-labels-inline .field-label,
.portlet-dynamic-data-mapping .field-labels-inline .field-label {
    margin-top: 0
}

.portlet-document-library .field .field-content,
.portlet-dynamic-data-mapping .field .field-content {
    clear: both
}

.portlet-document-library .form-builder .field-checkbox,
.portlet-dynamic-data-mapping .form-builder .field-checkbox {
    margin-top: -7px
}

.portlet-document-library .form-builder .nav-tabs+.tab-content .tab-pane,
.portlet-dynamic-data-mapping .form-builder .nav-tabs+.tab-content .tab-pane {
    padding: 2rem 1rem
}

.portlet-document-library .form-builder .property-builder-drop-container,
.portlet-document-library .form-builder .tab-pane,
.portlet-dynamic-data-mapping .form-builder .property-builder-drop-container,
.portlet-dynamic-data-mapping .form-builder .tab-pane {
    min-height: 500px
}

@media(max-width:767px) {

    .portlet-document-library .form-builder .property-builder-drop-container,
    .portlet-document-library .form-builder .tab-pane,
    .portlet-dynamic-data-mapping .form-builder .property-builder-drop-container,
    .portlet-dynamic-data-mapping .form-builder .tab-pane {
        min-height: 100px
    }

    .portlet-document-library .form-builder .property-builder-drop-container .form-builder-field .btn,
    .portlet-document-library .form-builder .tab-pane .form-builder-field .btn,
    .portlet-dynamic-data-mapping .form-builder .property-builder-drop-container .form-builder-field .btn,
    .portlet-dynamic-data-mapping .form-builder .tab-pane .form-builder-field .btn {
        display: inline;
        margin-top: 0;
        width: auto
    }
}

.portlet-document-library .form-builder .property-builder-fields-container .property-builder-field,
.portlet-dynamic-data-mapping .form-builder .property-builder-fields-container .property-builder-field {
    width: 33%
}

.portlet-document-library .form-builder .radio,
.portlet-dynamic-data-mapping .form-builder .radio {
    display: inline-block
}

.portlet-document-library .lfr-structure-entry-details-container,
.portlet-dynamic-data-mapping .lfr-structure-entry-details-container {
    margin-top: 10px
}

.portlet-document-library .lfr-translation-manager,
.portlet-dynamic-data-mapping .lfr-translation-manager {
    margin-bottom: 15px
}

.portlet-document-library .lfr-ddm-link-to-page a,
.portlet-dynamic-data-mapping .lfr-ddm-link-to-page a {
    clear: both;
    display: block
}

.portlet-document-library .lfr-ddm-small-image-preview,
.portlet-dynamic-data-mapping .lfr-ddm-small-image-preview {
    background-color: #FFF;
    border: 1px solid #CCC;
    margin-right: 1em;
    max-height: 120px;
    max-width: 120px;
    padding: 4px
}

.portlet-document-library .lfr-ddm-small-image-content,
.portlet-dynamic-data-mapping .lfr-ddm-small-image-content {
    background-color: #f5f5f5;
    padding: 5px
}

.portlet-document-library .lfr-ddm-small-image-content th,
.portlet-dynamic-data-mapping .lfr-ddm-small-image-content th {
    padding: 5px;
    white-space: nowrap;
    width: 1%
}

.portlet-document-library .lfr-ddm-small-image-view,
.portlet-dynamic-data-mapping .lfr-ddm-small-image-view {
    max-height: 120px;
    max-width: 120px
}

.portlet-document-library .lfr-ddm-types-form-column .column-content-first,
.portlet-dynamic-data-mapping .lfr-ddm-types-form-column .column-content-first {
    margin-right: 10px
}

.portlet-document-library .lfr-ddm-search-form .column,
.portlet-dynamic-data-mapping .lfr-ddm-search-form .column {
    margin-right: 10px
}

.portlet-document-library .lfr-document-library-add-menu,
.portlet-dynamic-data-mapping .lfr-document-library-add-menu {
    margin-bottom: 10px
}

.portlet-document-library .lfr-template-editor-container .lfr-template-palette-container,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container {
    width: 265px
}

.portlet-document-library .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette {
    overflow: auto;
    width: 100%
}

.portlet-document-library .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette .title-text,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette .title-text {
    font-weight: bold;
    margin: .5em
}

.portlet-document-library .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette .palette-item-content .palette-item-container,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette .palette-item-content .palette-item-container {
    cursor: pointer;
    line-height: 1.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.portlet-document-library .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette .palette-item-content .palette-item-container .palette-item,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette .palette-item-content .palette-item-container .palette-item {
    padding-right: 13px
}

.portlet-document-library .lfr-template-editor-container .lfr-template-palette-container .search-query,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container .search-query {
    margin-bottom: 26px
}

.portlet-document-library .lfr-template-editor-container .lfr-editor-container,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-editor-container {
    margin-left: 275px
}

.portlet-document-library .lfr-template-editor-container .lfr-editor-container .lfr-template-editor .lfr-rich-editor,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-editor-container .lfr-template-editor .lfr-rich-editor {
    padding-left: .2em
}

.portlet-document-library .lfr-template-editor-container .lfr-editor-container-full,
.portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-editor-container-full {
    margin-left: 0
}

@media(max-width:767px) {

    .portlet-document-library .lfr-template-editor-container .lfr-template-palette-container,
    .portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container {
        width: 100%
    }

    .portlet-document-library .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette,
    .portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-template-palette-container .lfr-template-palette {
        height: auto !important;
        margin-bottom: 15px
    }

    .portlet-document-library .lfr-template-editor-container .lfr-editor-container,
    .portlet-dynamic-data-mapping .lfr-template-editor-container .lfr-editor-container {
        clear: left;
        margin-left: 0
    }
}

.portlet-document-library .lfr-wcm-image-icon,
.portlet-dynamic-data-mapping .lfr-wcm-image-icon {
    background-position: 50%;
    padding: 0
}

.portlet-document-library .form-builder-source-wrapper,
.portlet-dynamic-data-mapping .form-builder-source-wrapper {
    height: 600px;
    position: relative
}

.portlet-document-library .form-builder-source-wrapper .form-builder-source,
.portlet-dynamic-data-mapping .form-builder-source-wrapper .form-builder-source {
    position: relative
}

.portlet-document-library .property-builder-drop-container,
.portlet-dynamic-data-mapping .property-builder-drop-container {
    overflow: auto
}

.portlet-document-library .property-builder-field,
.portlet-dynamic-data-mapping .property-builder-field {
    padding: 5px 0
}

.portlet-document-library .property-builder-field .property-builder-field-icon,
.portlet-dynamic-data-mapping .property-builder-field .property-builder-field-icon {
    font-size: 24px
}

.ltr .form-builder-rtl-inputs .portlet-dynamic-data-mapping .form-builder-content input[type="text"],
.ltr .form-builder-rtl-inputs .portlet-dynamic-data-mapping .form-builder-content textarea,
.ltr .form-builder-rtl-inputs .textcelleditor input[type="text"],
.ltr .form-builder-rtl-inputs .textcelleditor textarea,
.ltr .form-builder-rtl-inputs .textareacelleditor input[type="text"],
.ltr .form-builder-rtl-inputs .textareacelleditor textarea,
.rtl .form-builder-ltr-inputs .portlet-dynamic-data-mapping .form-builder-content input[type="text"],
.rtl .form-builder-ltr-inputs .portlet-dynamic-data-mapping .form-builder-content textarea,
.rtl .form-builder-ltr-inputs .textcelleditor input[type="text"],
.rtl .form-builder-ltr-inputs .textcelleditor textarea,
.rtl .form-builder-ltr-inputs .textareacelleditor input[type="text"],
.rtl .form-builder-ltr-inputs .textareacelleditor textarea {
    direction: rtl
}

textarea.script {
    min-height: 200px !important
}

.vertical-scrolling.nav {
    flex-direction: row
}

.vertical-scrolling.nav li {
    width: 100%
}

/* end main 2 */
/* main 4 */
/*1546875926000*/
.state-default,
.state-active,
.state-hover {
    background: #eee;
    border: 1px solid #ccc;
    border-color: #bbb #999 #999 #bbb
}

.state-active {
    background: #efefef;
    border-color: #333
}

.state-hover {
    background: #ddd;
    border-color: #999 #bbb #bbb #999;
    cursor: pointer
}

.state-disabled {
    cursor: default !important
}

.html-template {
    display: none
}

.basecelleditor-hidden,
.datecelleditor-hidden,
.dropdowncelleditor-hidden,
.textcelleditor-hidden,
.textareacelleditor-hidden,
.checkboxcelleditor-hidden,
.radiocelleditor-hidden,
.helper-hidden {
    display: none !important
}

.helper-hidden-accessible,
.overlay-hidden,
.overlaycontext-hidden,
.overlaymask-hidden,
.date-picker-hidden,
.datepicker-hidden,
.colorpicker-hidden,
.tooltip-hidden {
    clip: rect(0 0 0 0) !important;
    position: absolute !important;
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    -webkit-transform-origin-x: 0;
    -webkit-transform-origin-y: 0;
    *position: fixed !important;
    _position: absolute !important
}

.helper-force-offset {
    display: block !important;
    position: absolute !important;
    visibility: hidden !important
}

.helper-reset {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
    border: 0
}

.helper-clearfix:after {
    clear: both;
    content: "";
    display: block;
    height: 0
}

.helper-clearfix {
    zoom: 1
}

.helper-zfix {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    -ms-filter: alpha(opacity=0);
    filter: alpha(opacity=0)
}

.helper-unselectable,
.helper-unselectable * {
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    user-select: none
}

.helper-scroll-lock {
    height: 100%;
    margin: 0;
    overflow: hidden;
    width: 100%
}

.layout {
    width: 100%
}

.ltr .column,
.rtl .column-last {
    float: left
}

.rtl .column,
.ltr .column-last {
    float: right
}

.ltr .column-last {
    margin-left: -5px
}

.rtl .column-last {
    margin-right: -5px
}

.layout-content:after {
    clear: both;
    content: "";
    display: block;
    height: 0
}

.layout-content {
    zoom: 1
}

.w1-20,
.w5 {
    width: 5%
}

.w1-16 {
    width: 6.25%
}

.w1-12 {
    width: 8.334%
}

.w1-10,
.w10 {
    width: 10%
}

.w1-9 {
    width: 11.112%
}

.w1-8 {
    width: 12.5%
}

.w1-7 {
    width: 14.286%
}

.w15 {
    width: 15%
}

.w1-6 {
    width: 16.667%
}

.w3-16 {
    width: 18.75%
}

.w1-5,
.w20 {
    width: 20%
}

.w2-9 {
    width: 22.223%
}

.w1-4,
.w25 {
    width: 25%
}

.w2-7 {
    width: 28.572%
}

.w3-10,
.w30 {
    width: 30%
}

.w5-16 {
    width: 31.25%
}

.w1-3,
.w33 {
    width: 33.334%
}

.w35 {
    width: 35%
}

.w3-8 {
    width: 37.5%
}

.w38 {
    width: 38.2%
}

.w2-5,
.w40 {
    width: 40%
}

.w5-12 {
    width: 41.667%
}

.w7-16 {
    width: 43.75%
}

.w4-9 {
    width: 44.445%
}

.w45 {
    width: 45%
}

.w3-7 {
    width: 42.858%
}

.w1-2,
.w50 {
    width: 50%
}

.w55 {
    width: 55%
}

.w5-9 {
    width: 55.556%
}

.w9-16 {
    width: 56.25%
}

.w4-7 {
    width: 57.143%
}

.w7-12 {
    width: 58.334%
}

.w3-5,
.w60 {
    width: 60%
}

.w5-8 {
    width: 62.5%
}

.w62 {
    width: 61.8%
}

.w65 {
    width: 65%
}

.w2-3,
.w66 {
    width: 66.667%
}

.w11-16 {
    width: 68.75%
}

.w7-10,
.w70 {
    width: 70%
}

.w5-7 {
    width: 71.429%
}

.w3-4,
.w75 {
    width: 75%
}

.w7-9 {
    width: 77.778%
}

.w4-5,
.w80 {
    width: 80%
}

.w13-16 {
    width: 81.25%
}

.w5-6 {
    width: 83.334%
}

.w85 {
    width: 85%
}

.w6-7 {
    width: 85.715%
}

.w7-8 {
    width: 87.5%
}

.w9-10,
.w90 {
    width: 90%
}

.w11-12 {
    width: 91.667%
}

.w15-16 {
    width: 93.75%
}

.w95 {
    width: 95%
}

.w100 {
    width: 100%
}

.webkit .w1-12 {
    width: 8.345%
}

.webkit .w11-12 {
    width: 91.675%
}

.webkit .w1-6 {
    width: 16.675%
}

.webkit .w5-6 {
    width: 83.345%
}

.webkit .w5-12 {
    width: 41.675%
}

.webkit .w7-12 {
    width: 58.345%
}

.webkit .w1-3,
.webkit .w33 {
    width: 33.345%
}

.webkit .w2-3,
.webkit .w66 {
    width: 66.675%
}

.column-content,
.column-content-center {
    padding: 0 .5em
}

.ltr .column-content-first,
.rtl .column-content-last {
    padding-left: 0
}

.rtl .column-content-first,
.ltr .column-content-last {
    padding-right: 0
}

.floatbox {
    overflow: hidden
}

.fieldset-legend {
    font-size: 1.2em;
    font-weight: bold
}

.field-labels-inline .field-label,
.field-labels-inline .field-input,
.field-labels-inline .field-hint {
    float: left
}

.field-labels-inline .field-label,
.field-labels-inline .field-input-text {
    width: 45%
}

.field-labels-inline .field-label {
    margin: .3em 2% 0 0
}

.field-labels-right .field-label {
    text-align: right
}

.field-labels-inline .field-hint {
    display: block;
    float: none;
    clear: both;
    margin-left: 47%
}

.field-label,
.field-labels-top .field-label {
    display: block;
    float: none;
    text-align: left;
    margin: 0;
    width: auto
}

.field-input,
.field-labels-top .field-input {
    float: none;
    width: auto
}

.field-hint,
.field-labels-top .field-hint {
    line-height: 1;
    clear: none;
    float: right;
    width: 45%;
    margin: 0
}

.field-hint-icon {
    float: left
}

.field-inline {
    display: inline-block;
    vertical-align: middle
}

.field-label-inline {
    display: inline-block;
    margin: .4em .4em 0 0
}

.field-inline .field-content,
.field-inline .field-label {
    display: inline-block
}

.field-inline .field-label {
    vertical-align: middle
}

.field-group {
    float: left;
    width: 53%
}

.choice-label {
    line-height: 1;
    width: 89%
}

.field-input-choice {
    display: inline-block;
    margin: 0 .4em 0 0;
    vertical-align: middle
}

.field-row {
    display: block;
    clear: both
}

.field-row:after {
    clear: both;
    content: "";
    display: block;
    height: 0
}

.field-row {
    zoom: 1
}

.button-holder {
    display: block;
    clear: both
}

.button-input {
    margin: 0;
    line-height: 1.3;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 10px 6px 7px
}

.button-input {
    *padding: 4px 10px 3px 7px
}

.field-content:after,
.button-holder:after {
    clear: both;
    content: " ";
    display: block;
    height: 0;
    overflow: hidden
}

.field-content,
.button-holder {
    display: inline-block
}

/*\*/
* html .field-content,
* html .button-holder {
    height: 1%
}

.field-content,
.button-holder {
    display: block
}

/**/
.field-label,
.field-label-inline-label {
    font-weight: bold
}

.choice-label {
    font-weight: normal
}

.field-hint {
    color: #777;
    font-size: .9em
}

.choice-label,
.field-hint {
    line-height: 1.2
}

.field-element-left {
    display: inline-block;
    vertical-align: middle
}

.field.has-error .field-content {
    border-bottom: 1px solid #ef4a4a;
    background-color: #ff9f9f
}

.field.has-warn .field-content {
    border-bottom: 1px solid #ffc45f;
    background-color: #fffabf
}

.field .message-holder {
    color: red;
    display: block;
    font-weight: bold
}

.status-failure {
    border: 1px solid #ef4a4a
}

.autocomplete-results-content,
.colorpicker-content,
.overlaycontext-content {
    background: #fff
}

.overlay {
    position: absolute
}

.date-picker-content,
.overlaycontextpanel-content,
.colorpicker-content,
.tree-drag-helper-content {
    -moz-box-shadow: 4px 4px 14px rgba(119, 119, 119, 0.8);
    -webkit-box-shadow: 4px 4px 14px rgba(119, 119, 119, 0.8);
    box-shadow: 4px 4px 14px rgba(119, 119, 119, 0.8)
}

.null-selector {
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none
}

.state-default,
.state-active,
.state-hover,
.colorpicker-content,
.colorpicker-panel-content,
.loadingmask-message,
.loadingmask-message-content,
.progress-bar-content,
.progress-bar-status,
.form-builder-field,
.form-builder-default-message {
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px
}

.carousel menu {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px
}

.carousel menu a {
    -moz-border-radius: 9px;
    -webkit-border-radius: 9px;
    border-radius: 9px
}

.textboxlistentry,
.textboxlistentry-close {
    -moz-border-radius: 14px;
    -webkit-border-radius: 14px;
    border-radius: 14px
}

.editable-hover,
.overlaycontextpanel-pointer.state-default {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0
}

.state-default,
.state-disabled,
.state-disabled:hover {
    background: #d4d4d4 url('~@/assets/images/state_default_bg.png') repeat-x 0 0;
    border: 1px solid;
    border-color: #c8c9ca #9e9e9e #9e9e9e #c8c9ca
}

.state-hover {
    background: #b9ced9 url('~@/assets/images/state_hover_bg.png') repeat-x 0 0;
    border-color: #627782
}

.state-active {
    background: #ebebeb url('~@/assets/images/state_active_bg.png') repeat-x 0 0;
    border-color: #555
}

.state-active:hover {
    background: #f2faff url('~@/assets/images/state_selected_hover.png') repeat-x 0 0;
    border-color: #627782
}

#yui3-css-stamp.skin-deprecated {
    display: none
}

.loadingmask-masked {
    overflow: hidden !important
}

.loadingmask-masked-relative {
    position: relative !important
}

.loadingmask {
    height: 100%;
    width: 100%;
    zoom: 1
}

.loadingmask-content {
    background: #ccc
}

.loadingmask-message {
    background: #eee;
    border: 1px solid;
    border-color: #bbb #999 #999 #bbb;
    left: 50%;
    padding: 2px;
    position: absolute;
    top: 50%
}

.loadingmask-message-content {
    background: #fff url('~@/assets/images/loading_indicator.gif') no-repeat 5px 50%;
    border: 1px solid #ccc;
    color: #111;
    line-height: 1;
    padding: 5px 10px 5px 25px
}

.loadingmask-message {
    background: #d4d4d4 url('~@/assets/images/state_default_bg.png') repeat-x 0 0;
    border: 1px solid;
    border-color: #c8c9ca #9e9e9e #9e9e9e #c8c9ca
}

#yui3-css-stamp.skin-sam-aui-loading-mask-deprecated {
    display: none
}

.resize,
.resize-wrapper {
    z-index: 0;
    zoom: 1
}

.resize-handle {
    position: absolute;
    display: block;
    z-index: 100;
    zoom: 1
}

.resize-proxy {
    position: absolute;
    border: 1px dashed #000;
    position: absolute;
    z-index: 10000
}

.resize-hidden-handles .resize-handle {
    opacity: 0;
    filter: alpha(opacity=0)
}

.resize-handle-t,
.resize-handle-b {
    width: 100%;
    left: 0;
    height: 6px
}

.resize-handle-l,
.resize-handle-r {
    height: 100%;
    top: 0;
    width: 6px
}

.resize-handle-t {
    cursor: n-resize;
    top: 0
}

.resize-handle-b {
    cursor: s-resize;
    bottom: 0
}

.resize-handle-l {
    cursor: w-resize;
    left: 0
}

.resize-handle-r {
    cursor: e-resize;
    right: 0
}

.resize-handle-inner {
    position: absolute;
    zoom: 1
}

.resize-handle-inner-t,
.resize-handle-inner-b {
    margin-left: -8px;
    left: 50%
}

.resize-handle-inner-l,
.resize-handle-inner-r {
    margin-top: -8px;
    top: 50%
}

.resize-handle-inner-t {
    top: -5px
}

.resize-handle-inner-b {
    bottom: -4px
}

.resize-handle-inner-l {
    left: -4px
}

.resize-handle-inner-r {
    right: -5px
}

.resize-handle-tr,
.resize-handle-br,
.resize-handle-tl,
.resize-handle-bl {
    height: 16px;
    width: 16px;
    z-index: 200
}

.resize-handle-tr {
    cursor: ne-resize;
    top: 0;
    right: 0
}

.resize-handle-tl {
    cursor: nw-resize;
    top: 0;
    left: 0
}

.resize-handle-br {
    cursor: se-resize;
    bottom: 0;
    right: 0
}

.resize-handle-bl {
    cursor: sw-resize;
    bottom: 0;
    left: 0
}

#yui3-css-stamp.skin-sam-aui-resize-base-deprecated {
    display: none
}

.form-builder .property-builder-drop-container,
.form-builder .tab-pane {
    height: auto;
    min-height: 150px;
    overflow: auto;
    padding-bottom: 10px
}

.form-builder .property-builder-fields-container .form-builder-placeholder {
    display: none
}

.form-builder .property-builder-content-container,
.form-builder .property-builder-fields-container {
    padding-left: 0
}

.form-builder .property-builder-fields-container .property-builder-field {
    margin: 0
}

.form-builder-placeholder {
    border: 1px dashed #ccc;
    margin: 5px
}

.form-builder-options-editor-hidden {
    display: none
}

.basecelleditor {
    z-index: 500 !important
}

.form-builder-field-label,
.form-builder-text-field-content label,
.form-builder-checkbox-field-content {
    min-height: 33px
}

.form-builder .property-builder-canvas {
    background-image: none;
    background-color: #e7e7e7
}

#yui3-css-stamp.skin-sam-aui-form-builder-deprecated {
    display: none
}

.overlaymask-content {
    background: #000
}

#yui3-css-stamp.skin-sam-aui-overlay-mask-deprecated {
    display: none
}

.editable-content-wrapper {
    border: 1px solid transparent;
    padding: 3px
}

.editable {
    position: absolute
}

.editable-editing {
    visibility: hidden
}

.editable-hidden {
    display: none
}

.editable-form-triggers {
    background-color: transparent;
    border-width: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0
}

.editable-input {
    width: 100%
}

.editable-content {
    padding-right: 60px
}

#yui3-css-stamp.skin-sam-aui-editable-deprecated {
    display: none
}

.modal-content .dialog-iframe-node {
    border-width: 0;
    overflow: auto;
    width: 100%
}

.modal-content .dialog-iframe-bd {
    line-height: 0;
    overflow: hidden
}

.dialog-iframe-root-node {
    padding: 15px
}

.yui3-widget-content-expanded .dialog-iframe-node {
    height: 100%
}

#yui3-css-stamp.skin-sam-aui-dialog-iframe-deprecated {
    display: none
}

.textboxlist-content {
    border: 1px solid #999;
    overflow: hidden;
    padding: 4px 5px 0
}

.textboxlist-content input[type="text"].field-input-text,
.textboxlist-content input[type="text"].field-input-text:focus {
    box-shadow: none
}

.textboxlist-content .field-input-text {
    border-width: 0;
    outline-width: 0;
    padding: 3px 0 2px
}

.textboxlist-input-container input {
    margin-bottom: 4px;
    margin-top: 3px
}

.textboxlistentry-holder {
    list-style: none;
    margin: 0
}

.textboxlistentry-holder li {
    float: left;
    line-height: 1;
    margin: 0 5px 4px 0
}

.textboxlistentry {
    background-color: #dee7f8;
    border: 1px solid #cad8f3;
    padding: 7px 11px;
    position: relative
}

.textboxlistentry-focused {
    background-color: #598bec;
    border-color: #224fa8;
    color: #FFF;
    outline-width: 0
}

.textboxlistentry-focused .textboxlistentry-remove {
    background-color: #FFF
}

.textboxlistentry-remove,
.textboxlistentry-text {
    vertical-align: middle
}

.textboxlistentry-remove {
    border-radius: 50%;
    color: #d21212;
    cursor: pointer;
    margin-left: 5px;
    padding: 1px;
    text-align: center
}

.textboxlistentry-remove .icon-remove {
    margin-top: 0
}

.textboxlistentry-remove-hover {
    background-color: #cad8f3
}

#yui3-css-stamp.skin-sam-aui-textboxlist-deprecated {
    display: none
}

.combobox-content .field-content {
    float: none
}

.combobox-content {
    white-space: nowrap;
    vertical-align: middle
}

.combobox-content .field-content {
    display: inline-block
}

.combobox-content .field-input {
    display: block
}

.editable .btn-group {
    margin-top: -3px
}

.editable .toolbar {
    display: inline-block;
    margin-left: 1px
}

#yui3-css-stamp.skin-sam-aui-form-combobox-deprecated {
    display: none
}

.datepicker-display,
.datepicker-select-wrapper,
.field-date .datepicker-display,
.field-date .datepicker-select-wrapper,
.datepicker-button-wrapper {
    float: left
}

.datepicker-button-wrapper .buttonitem-content {
    margin: 0
}

.datepicker-button-wrapper {
    margin: 0 5px 0 2px
}

.datepicker-select-wrapper select {
    margin-left: 2px
}

#yui3-css-stamp.skin-sam-aui-datepicker-select-deprecated {
    display: none
}

.autosize-height-monitor {
    line-height: normal;
    left: 0;
    padding: 0;
    position: absolute;
    top: 0;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word
}

.ie .autosize-height-monitor {
    border: 1px solid #000;
    zoom: 1
}

#yui3-css-stamp.skin-sam-aui-autosize-deprecated {
    display: none
}

.form-builder-field-wrapper {
    clear: both;
    padding: 0
}

.form-builder-field .btn-toolbar {
    position: absolute;
    right: 10px;
    top: 10px
}

.form-builder-field {
    background: #FFF;
    border-radius: 3px;
    border-top: 5px solid transparent;
    box-shadow: 0 1px 2px #c4c4c4;
    margin: 8px 6px 0;
    outline: 0;
    padding: 10px;
    position: relative;
    -webkit-box-shadow: 0 1px 2px #c4c4c4
}

.form-builder-field label {
    float: left;
    margin-right: 5px
}

.form-builder-field .form-builder-field-node {
    clear: both;
    display: block
}

.form-builder-field-hover {
    border-color: #CCC
}

.form-builder-field-options-container {
    clear: left
}

.form-builder-field-selected {
    border-color: #76a7fa
}

.form-builder-field-icon {
    background-position: center center;
    background-repeat: no-repeat
}

.form-builder-field-icon-button {
    background-image: url('~@/assets/images/icon-button.png')
}

.form-builder-field-icon-checkbox {
    background-image: url('~@/assets/images/icon-checkbox.png')
}

.form-builder-field-icon-date {
    background-image: url('~@/assets/images/icon-date.png')
}

.form-builder-field-icon-decimal {
    background-image: url('~@/assets/images/icon-decimal.png')
}

.form-builder-field-icon-default {
    background-image: url('~@/assets/images/icon-default.png')
}

.form-builder-field-icon-document {
    background-image: url('~@/assets/images/icon-document.png')
}

.form-builder-field-icon-fieldset {
    background-image: url('~@/assets/images/icon-fieldset.png')
}

.form-builder-field-icon-fileupload {
    background-image: url('~@/assets/images/icon-fileupload.png')
}

.form-builder-field-icon-integer {
    background-image: url('~@/assets/images/icon-integer.png')
}

.form-builder-field-icon-number {
    background-image: url('~@/assets/images/icon-number.png')
}

.form-builder-field-icon-paragraph {
    background-image: url('~@/assets/images/icon-paragraph.png')
}

.form-builder-field-icon-password {
    background-image: url('~@/assets/images/icon-password.png')
}

.form-builder-field-icon-radio {
    background-image: url('~@/assets/images/icon-radio.png')
}

.form-builder-field-icon-select {
    background-image: url('~@/assets/images/icon-select.png')
}

.form-builder-field-icon-separator {
    background-image: url('~@/assets/images/icon-separator.png')
}

.form-builder-field-icon-text {
    background-image: url('~@/assets/images/icon-text.png')
}

.form-builder-field-icon-textarea {
    background-image: url('~@/assets/images/icon-textarea.png')
}

#yui3-css-stamp.skin-sam-aui-form-builder-field-deprecated {
    display: none
}

#yui3-css-stamp.skin-sam-aui-datepicker-base-deprecated {
    display: none
}

.overlaycontextpanel {
    position: absolute;
    z-index: 9999
}

.overlaycontextpanel-content {
    border-width: 2px;
    padding: 8px;
    position: relative
}

.overlaycontextpanel-hidden {
    display: none !important;
    top: -10000px !important;
    left: -10000px !important
}

.overlaycontextpanel .overlaycontextpanel-pointer,
.overlaycontextpanel .overlaycontextpanel-pointer-inner {
    position: absolute;
    width: 0;
    height: 0;
    background: 0
}

.overlaycontextpanel-arrow-tr .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-tc .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-tl .overlaycontextpanel-pointer {
    top: -14px;
    border-top: 0;
    border-bottom-width: 14px
}

.overlaycontextpanel-arrow-tr .overlaycontextpanel-pointer {
    border-left: 18px dashed transparent;
    border-right: 0;
    right: 10px
}

.overlaycontextpanel-arrow-tc .overlaycontextpanel-pointer {
    border-left: 10px dashed transparent;
    border-right: 10px dashed transparent;
    left: 50%;
    margin-left: -10px
}

.overlaycontextpanel-arrow-tl .overlaycontextpanel-pointer {
    border-left: 0;
    border-right: 18px dashed transparent;
    left: 10px
}

.overlaycontextpanel-arrow-tr .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-tc .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-tl .overlaycontextpanel-pointer-inner {
    border-bottom: 10px solid #fff;
    bottom: -14px
}

.overlaycontextpanel-arrow-tr .overlaycontextpanel-pointer-inner {
    border-left: 12px dashed transparent;
    border-right: 0;
    right: 2px
}

.overlaycontextpanel-arrow-tc .overlaycontextpanel-pointer-inner {
    border-left: 8px dashed transparent;
    border-right: 8px dashed transparent;
    left: -8px
}

.overlaycontextpanel-arrow-tl .overlaycontextpanel-pointer-inner {
    border-left: 0;
    border-right: 12px dashed transparent;
    left: 2px
}

.overlaycontextpanel-arrow-rb .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-rc .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-rt .overlaycontextpanel-pointer {
    right: -14px;
    border-right: 0;
    border-left-width: 14px
}

.overlaycontextpanel-arrow-rb .overlaycontextpanel-pointer {
    border-bottom: 0;
    border-top: 18px dashed transparent;
    bottom: 10px
}

.overlaycontextpanel-arrow-rc .overlaycontextpanel-pointer {
    border-bottom: 10px dashed transparent;
    border-top: 10px dashed transparent;
    bottom: 50%;
    margin-bottom: -10px
}

.overlaycontextpanel-arrow-rt .overlaycontextpanel-pointer {
    border-bottom: 18px dashed transparent;
    border-top: 0;
    top: 10px
}

.overlaycontextpanel-arrow-rb .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-rc .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-rt .overlaycontextpanel-pointer-inner {
    border-left: 10px solid #fff;
    left: -14px
}

.overlaycontextpanel-arrow-rb .overlaycontextpanel-pointer-inner {
    border-bottom: 0;
    border-top: 12px dashed transparent;
    bottom: 2px
}

.overlaycontextpanel-arrow-rc .overlaycontextpanel-pointer-inner {
    border-bottom: 8px dashed transparent;
    border-top: 8px dashed transparent;
    bottom: -8px
}

.overlaycontextpanel-arrow-rt .overlaycontextpanel-pointer-inner {
    border-bottom: 12px dashed transparent;
    border-top: 0;
    top: 2px
}

.overlaycontextpanel-arrow-br .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-bc .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-bl .overlaycontextpanel-pointer {
    bottom: -14px;
    border-bottom: 0;
    border-top-width: 14px
}

.overlaycontextpanel-arrow-br .overlaycontextpanel-pointer {
    border-left: 18px dashed transparent;
    border-right: 0;
    right: 10px
}

.overlaycontextpanel-arrow-bc .overlaycontextpanel-pointer {
    border-left: 10px dashed transparent;
    border-right: 10px dashed transparent;
    left: 50%;
    margin-left: -10px
}

.overlaycontextpanel-arrow-bl .overlaycontextpanel-pointer {
    border-left: 0;
    border-right: 18px dashed transparent;
    left: 10px
}

.overlaycontextpanel-arrow-br .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-bc .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-bl .overlaycontextpanel-pointer-inner {
    border-top: 10px solid #fff;
    top: -14px
}

.overlaycontextpanel-arrow-br .overlaycontextpanel-pointer-inner {
    border-left: 12px dashed transparent;
    border-right: 0;
    right: 2px
}

.overlaycontextpanel-arrow-bc .overlaycontextpanel-pointer-inner {
    border-left: 8px dashed transparent;
    border-right: 8px dashed transparent;
    left: -8px
}

.overlaycontextpanel-arrow-bl .overlaycontextpanel-pointer-inner {
    border-left: 0;
    border-right: 12px dashed transparent;
    left: 2px
}

.overlaycontextpanel-arrow-lb .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-lc .overlaycontextpanel-pointer,
.overlaycontextpanel-arrow-lt .overlaycontextpanel-pointer {
    left: -14px;
    border-left: 0;
    border-right-width: 14px
}

.overlaycontextpanel-arrow-lb .overlaycontextpanel-pointer {
    border-bottom: 0;
    border-top: 18px dashed transparent;
    bottom: 10px
}

.overlaycontextpanel-arrow-lc .overlaycontextpanel-pointer {
    border-bottom: 10px dashed transparent;
    border-top: 10px dashed transparent;
    bottom: 50%;
    margin-bottom: -10px
}

.overlaycontextpanel-arrow-lt .overlaycontextpanel-pointer {
    border-bottom: 18px dashed transparent;
    border-top: 0;
    top: 10px
}

.overlaycontextpanel-arrow-lb .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-lc .overlaycontextpanel-pointer-inner,
.overlaycontextpanel-arrow-lt .overlaycontextpanel-pointer-inner {
    border-right: 10px solid #fff;
    right: -14px
}

.overlaycontextpanel-arrow-lb .overlaycontextpanel-pointer-inner {
    border-bottom: 0;
    border-top: 12px dashed transparent;
    bottom: 2px
}

.overlaycontextpanel-arrow-lc .overlaycontextpanel-pointer-inner {
    border-bottom: 8px dashed transparent;
    border-top: 8px dashed transparent;
    bottom: -8px
}

.overlaycontextpanel-arrow-lt .overlaycontextpanel-pointer-inner {
    border-bottom: 12px dashed transparent;
    border-top: 0;
    top: 2px
}

.overlaycontextpanel-arrow-tl,
.overlaycontextpanel-arrow-tc,
.overlaycontextpanel-arrow-tr {
    margin-top: 12px
}

.overlaycontextpanel-arrow-bl,
.overlaycontextpanel-arrow-bc,
.overlaycontextpanel-arrow-br {
    margin-bottom: 12px
}

.overlaycontextpanel-arrow-lt,
.overlaycontextpanel-arrow-lc,
.overlaycontextpanel-arrow-lb {
    margin-left: 12px
}

.overlaycontextpanel-arrow-rt,
.overlaycontextpanel-arrow-rc,
.overlaycontextpanel-arrow-rb {
    margin-right: 12px
}

.ie6 .overlaycontextpanel-arrow-br .overlaycontextpanel-pointer,
.ie6 .overlaycontextpanel-arrow-bc .overlaycontextpanel-pointer,
.ie6 .overlaycontextpanel-arrow-bl .overlaycontextpanel-pointer {
    bottom: 0
}

#yui3-css-stamp.skin-sam-aui-overlay-context-panel-deprecated {
    display: none
}

.autocomplete-content .toolbar {
    display: inline-block;
    position: absolute
}

.autocomplete-trigger {
    cursor: pointer;
    display: inline-block;
    float: none
}

.autocomplete-list-item {
    border: 1px solid #fff;
    list-style: none;
    margin: 0;
    padding: 0 3px
}

.autocomplete-results-content {
    border: 1px solid #98c0f4;
    height: 100%;
    overflow-y: auto
}

.autocomplete-selected {
    background: #dfe8f6;
    border-color: #a3bae9
}

#yui3-css-stamp.skin-sam-aui-autocomplete-deprecated {
    display: none
}

.tooltip {
    max-width: 600px
}

.tooltip-content {
    border-width: 2px;
    padding: 8px;
    position: relative
}

#yui3-css-stamp.skin-sam-aui-tooltip-deprecated {
    display: none
}

.buttonitem-content {
    font-size: 1em;
    line-height: 130%;
    padding: 4px 5px 3px 4px;
    margin: 2px;
    white-space: nowrap;
    width: auto;
    overflow: visible;
    *padding: 2px 5px 2px 4px;
    *width: 1
}

.buttonitem-icon {
    display: inline-block;
    margin-top: -3px;
    vertical-align: middle;
    *text-indent: 0;
    *margin-top: 1px
}

.buttonitem-label {
    line-height: 1em;
    display: inline-block;
    *line-height: 1.4em
}

.buttonitem-label {
    padding: 0 5px
}

.buttonitem-icon-only {
    font-size: 0;
    height: 16px;
    width: 16px;
    overflow: hidden;
    padding: 3px;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    *height: 24px;
    *width: 24px
}

.buttonitem-icon-only .buttonitem-icon {
    margin-top: 0;
    *margin-top: -1px;
    *margin-left: -1px
}

.gecko .buttonitem-icon-only .buttonitem-icon {
    margin-top: -3px
}

#yui3-css-stamp.skin-sam-aui-button-item-deprecated {
    display: none
}

.scroller {
    overflow: hidden;
    position: relative
}

.scroller-content {
    left: 0;
    position: absolute;
    top: 0
}

.scroller-vertical .scroller-content {
    height: auto !important
}

.scroller-horizontal .scroller-content {
    float: left;
    white-space: nowrap
}

.scroller-horizontal .scroller-item {
    display: inline-block
}

.ie7 .scroller-horizontal .scroller-item,
.ie6 .scroller-horizontal .scroller-item {
    display: inline;
    zoom: 1
}

#yui3-css-stamp.skin-sam-aui-scroller-deprecated {
    display: none
}

.colorpickergrid {
    width: 340px
}

.colorpickergrid .colorpicker-container {
    height: auto;
    line-height: 0;
    text-align: center
}

.colorpickergrid-item {
    cursor: pointer;
    display: inline-block;
    height: 15px;
    margin: 3px;
    padding: 2px;
    width: 15px
}

.colorpickergrid-item-content {
    display: block;
    height: 100%
}

.colorpickergrid-item {
    border: 1px solid #ccc
}

.colorpickergrid-item:hover {
    border-color: #333
}

.colorpickergrid-item:hover {
    border-color: #333
}

#yui3-css-stamp.skin-sam-aui-color-picker-grid-plugin-deprecated {
    display: none
}

.colorpicker {
    width: 315px
}

.colorpicker-container {
    height: 228px;
    position: relative
}

.colorpicker-panel {
    position: static
}

.colorpicker-canvas {
    background: #f00 url('~@/assets/images/picker_bg.png');
    background-color: red;
    height: 184px;
    left: 5px;
    outline: 0 none;
    position: absolute;
    top: 5px;
    width: 184px
}

.colorpicker-controls {
    height: 115px;
    left: 226px;
    position: absolute;
    top: 75px;
    width: 80px
}

.colorpicker-controls .field-content .field-label {
    margin-top: 0;
    width: 20%
}

.colorpicker-controls .field-content .field-input-text {
    padding: 1px;
    width: 60%
}

.colorpicker-controls .field-content {
    clear: both;
    padding: 3px 0
}

.colorpicker-hue-thumb {
    cursor: default;
    height: 7px;
    position: absolute;
    width: 18px
}

.colorpicker-hue-thumb-image {
    background: url('~@/assets/images/color_indic.png') no-repeat 0 0;
    display: block;
    height: 7px;
    margin-left: -2px;
    margin-top: -2px;
    width: 18px
}

.colorpicker-hue-canvas {
    background: url('~@/assets/images/hue.png') no-repeat -2px -2px;
    height: 186px;
    left: 200px;
    outline: 0 none;
    position: absolute;
    top: 5px;
    width: 14px
}

.colorpicker-mask {
    left: 0;
    position: absolute;
    top: 0
}

.colorpicker-swatch {
    border: 2px solid #727c81;
    height: 60px;
    left: 226px;
    position: absolute;
    top: 5px;
    width: 60px
}

.colorpicker-swatch-current,
.colorpicker-swatch-original {
    background: #fff;
    height: 30px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
}

.colorpicker-swatch-original {
    top: auto;
    bottom: 0;
    cursor: pointer
}

.colorpicker-thumb {
    cursor: default;
    position: absolute
}

.colorpicker-thumb-image {
    background: url('~@/assets/images/select.png') no-repeat 0 0;
    display: block;
    height: 11px;
    width: 11px
}

.colorpicker-container .colorpicker-hue-slider-content {
    display: inline;
    position: static
}

#yui3-css-stamp.skin-sam-aui-color-picker-base-deprecated {
    display: none;
}

.lfr-add-panel {
    width: 330px;
}

.lfr-add-panel .add-content-menu .drag-content-item {
    cursor: move;
}

.lfr-add-panel .add-content-menu .lfr-content-category .list-group-panel.collapse.in {
    height: auto !important;
}

.lfr-add-panel .add-content-menu .lfr-content-item .drag-content-item {
    display: inline-block;
    width: 100%;
}

.lfr-add-panel .add-content-menu .lfr-content-item:focus .add-content-item,
.lfr-add-panel .add-content-menu .lfr-content-item:hover .add-content-item {
    clip: auto;
    clip-path: none;
    display: inline;
    height: auto;
    overflow: visible;
    white-space: normal;
    width: auto
}

.lfr-add-panel .add-content-menu .lfr-content-item .add-content-item {
    cursor: pointer;
    margin-right: 15px;
    padding: 2px 10px;
    position: absolute;
    right: 0;
    top: -2px
}

@media(max-width:979px) {
    .lfr-add-panel .add-content-menu .lfr-content-item .add-content-item {
        clip: auto;
        clip-path: none;
        display: inline;
        height: auto;
        overflow: visible;
        white-space: normal;
        width: auto
    }
}

.lfr-add-panel .add-content-menu .lfr-content-item .lfr-portlet-used {
    opacity: .3
}

.lfr-add-panel .add-content-menu .lfr-content-item .lfr-portlet-used.drag-content-item {
    cursor: default
}

.lfr-add-panel .add-content-menu .lfr-content-item .lfr-portlet-used.add-content-item {
    display: none
}

.lfr-add-panel .add-content-menu .lfr-content-item .taglib-icon-label {
    display: inline-flex;
    width: 70%
}

.lfr-add-panel .add-content-menu .tabular-list-group {
    padding-right: 16px
}

.lfr-add-panel .add-content-menu .tabular-list-group>.list-group-item {
    margin-bottom: 8px;
    padding: 4px
}

.lfr-add-panel .add-content-menu .tabular-list-group>.list-group-item>.list-group-item-field {
    padding-right: 4px
}

.lfr-add-panel .add-content-menu .tabular-list-group>.list-group-item>.list-group-item-field .sticker,
.lfr-add-panel .add-content-menu .tabular-list-group>.list-group-item>.list-group-item-field .user-icon {
    margin: 0 auto
}

.lfr-add-panel .add-content-menu .tabular-list-group>.list-group-item>.list-group-item-content h1 {
    font-size: .875rem
}

.lfr-add-panel .add-content-menu .tabular-list-group>.list-group-item>.list-group-item-content .text-default {
    color: #6b6c7e;
    font-size: .875rem;
    font-weight: 400
}

.lfr-add-panel .add-content-menu .list-group-item>.list-unstyled {
    padding-right: 16px
}

.lfr-add-panel .add-content-menu .list-group-item>.list-unstyled .taglib-vertical-card-footer {
    height: inherit;
    min-height: inherit
}

@media(max-width:767px) {
    .lfr-add-panel .add-content-menu .lfr-drag-portlet-message {
        display: none
    }
}

.lfr-asset-category-container {
    height: 260px;
    margin-bottom: .5em;
    overflow: auto
}

.lfr-asset-category-container fieldset {
    margin: 5px
}

.lfr-asset-category-container legend {
    margin-left: 5px
}

.lfr-asset-category-container label {
    display: block
}

.lfr-asset-category-container label input {
    vertical-align: middle
}

.lfr-asset-category-container .lfr-asset-category-message {
    display: none
}

.lfr-asset-category-container .no-matches {
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    margin-bottom: 0;
    margin-left: 5px;
    margin-top: 0;
    padding: 0
}

.lfr-asset-category-search-container {
    border-bottom: 1px solid transparent;
    margin: 3px 0;
    padding: 5px
}

.lfr-asset-category-search-input {
    width: 250px
}

.lfr-asset-vocabulary-container .lfr-asset-category-message,
.lfr-asset-vocabulary-container.no-matches .lfr-asset-category-list {
    display: none
}

.lfr-asset-vocabulary-container.no-matches legend {
    padding-left: 0
}

.lfr-asset-vocabulary-container.no-matches .lfr-asset-category-message {
    display: block
}

.lfr-asset-category-list-container {
    cursor: pointer
}

.lfr-asset-category-list ul {
    list-style: none;
    margin-top: 4px;
    padding: 0
}

.lfr-asset-category-list li {
    list-style-type: none;
    margin: 0;
    padding: 0 0 3px 16px
}

.lfr-asset-category-list span {
    padding-left: 3px
}

.lfr-categories-selector-list .tree-node-paginator {
    margin-left: 29px
}

.lfr-categories-selector-category-name,
.lfr-categories-selector-search-results-path {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.lfr-categories-selector-category-name {
    float: left;
    width: 50%
}

.lfr-categories-selector-search-results-path {
    float: right;
    width: 49%
}

.lfr-categories-selector-search-results label:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.lfr-asset-column-content {
    margin-right: 1em;
    padding: 0
}

.lfr-asset-column-actions-content {
    overflow: visible
}

.lfr-asset-column-actions .lfr-asset-summary {
    margin-bottom: 2em;
    text-align: center;
    overflow-wrap: break-all;
    word-wrap: break-all;
    word-break: break-all
}

.lfr-asset-column-actions .lfr-asset-avatar img {
    margin: 0 auto;
    max-width: 100%;
    padding-right: 2em
}

.lfr-asset-column-actions .lfr-asset-column-actions-content {
    border: 1px solid transparent;
    padding: .7em
}

.lfr-asset-column-details .lfr-asset-description {
    margin: .5em auto 2em
}

.lfr-asset-column-details .lfr-asset-icon {
    border-right: 1px solid transparent;
    float: left;
    line-height: 1em;
    margin-right: 10px;
    padding-right: 10px
}

.lfr-asset-column-details .lfr-asset-icon.last {
    border-width: 0
}

.lfr-asset-column-details .lfr-asset-date {
    overflow: hidden
}

.lfr-asset-column-details .lfr-asset-downloads {
    overflow: hidden;
    padding-left: 0
}

.lfr-asset-column-details .lfr-asset-metadata {
    clear: both;
    margin-bottom: 1.5em;
    padding-bottom: 1.5em
}

.lfr-asset-column-details .lfr-asset-ratings {
    margin: 2em 0
}

.lfr-asset-column-details .taglib-custom-attributes-list label,
.lfr-asset-column-details .lfr-asset-field label {
    display: block
}

.lfr-asset-column-details .taglib-custom-attributes-list {
    margin-bottom: 1em
}

.lfr-asset-column-details .lfr-asset-field,
.lfr-asset-column-actions .lfr-asset-field {
    clear: left;
    margin: 1em auto
}

.lfr-asset-panels {
    clear: both;
    padding-top: 1em
}

.lfr-asset-panels .lfr-panel,
.lfr-asset-column-details .lfr-panel {
    clear: both;
    margin-bottom: .2em
}

.lfr-asset-panels .lfr-panel.lfr-extended,
.lfr-asset-column-details .lfr-panel.lfr-extended {
    border: 1px solid transparent;
    margin-bottom: 0
}

.lfr-asset-column-details .lfr-panel-container,
.lfr-asset-panels .lfr-panel-container {
    border-width: 0
}

.lfr-form-row {
    border-bottom: 1px solid transparent;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 5px;
    padding-bottom: 25px;
    padding-top: 1px;
    position: relative
}

.lfr-form-row:after {
    clear: both;
    content: '';
    display: block;
    height: 0
}

.lfr-form-row:hover {
    border: solid transparent;
    border-width: 1px 0;
    padding-top: 0
}

.lfr-form-row-inline .form-group {
    margin-right: 5px
}

.lfr-form-row legend .field-label {
    float: left;
    margin-right: 10px
}

.lfr-form-row .handle-sort-vertical {
    cursor: move;
    padding-left: 20px
}

.lfr-form-row fieldset {
    border-width: 0;
    margin: 0;
    padding: 0
}

.lfr-autorow-controls {
    bottom: 5px;
    position: absolute;
    right: 5px
}

.lfr-edit-layout-panel {
    width: 440px
}

.lfr-edit-layout-panel .navbar {
    margin-bottom: 0;
    margin-top: 20px
}

@media(min-width:980px) {
    .lfr-edit-layout-panel .navbar .container-fluid {
        padding: 0
    }
}

.lfr-edit-layout-panel .site-admin-link {
    bottom: 0;
    padding: 14px;
    position: fixed
}

.lfr-edit-layout-panel .taglib-form-navigator .button-holder {
    bottom: 0;
    margin-bottom: 0;
    margin-top: 0;
    padding: 10px 15px;
    position: fixed;
    text-align: right;
    width: 405px
}

.lfr-edit-layout-panel .taglib-form-navigator .panel-group {
    margin: 20px 0 50px
}

.lfr-edit-layout-panel .taglib-form-navigator .panel-group .accordion-group.lfr-panel-extended .panel-heading {
    cursor: pointer
}

.lfr-edit-layout-panel .taglib-form-navigator .panel-group .accordion-group.lfr-panel-extended .panel-body {
    padding: 15px
}

.lfr-edit-layout-panel .taglib-form-navigator .panel-group .accordion-group.lfr-panel-extended .panel-body h3 {
    display: none
}

.lfr-edit-layout-panel .taglib-form-navigator .lfr-theme-options,
.lfr-edit-layout-panel .taglib-form-navigator .lfr-inherit-theme-options {
    padding: 10px 20px
}

* [class*="ae-toolbar-"][role="toolbar"] {
    z-index: 980
}

@media(max-width:768px) {
    * [class*="ae-toolbar-"][role="toolbar"] {
        z-index: 1000
    }
}

.alloy-editor-container {
    position: relative
}

.alloy-editor-container .alloy-editor-icon {
    bottom: 8px;
    display: none;
    position: absolute;
    right: 8px
}

.alloy-editor-container .alloy-editor {
    cursor: text;
    overflow: hidden;
    text-align: start
}

.alloy-editor-container .alloy-editor[dir="rtl"]+.alloy-editor-icon {
    left: 8px
}

.alloy-editor-container .alloy-editor.alloy-editor-placeholder:before {
    pointer-events: none
}

.alloy-editor-container .alloy-editor.alloy-editor-placeholder.ae-placeholder:empty {
    min-height: 1.5em
}

.alloy-editor-container .alloy-editor.alloy-editor-placeholder.ae-placeholder:not(:focus):not(.form-control) {
    border-left: 2px solid;
    padding-left: 10px
}

.alloy-editor-container .alloy-editor.alloy-editor-placeholder.ae-placeholder[data-required="true"]:not(:focus):before {
    content: attr(data-placeholder) " *"
}

.alloy-editor-container .alloy-editor a {
    cursor: auto
}

.alloy-editor-container .alloy-editor p:only-child {
    margin-bottom: 0
}

.alloy-editor-container .alloy-editor.form-control {
    height: auto
}

.alloy-editor-container .alloy-editor.form-control~.alloy-editor-icon {
    display: block
}

.alloy-editor-container .alloy-editor .cke_widget_embedurl .embed-help-message {
    color: #FFF;
    font-weight: 600;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity .15s ease-in-out;
    width: 100%;
    z-index: 1
}

.alloy-editor-container .alloy-editor .cke_widget_embedurl .cke_widget_mask {
    background-color: #000;
    cursor: pointer;
    opacity: 0;
    transition: opacity .15s ease-in-out
}

.alloy-editor-container .alloy-editor .cke_widget_embedurl.cke_widget_wrapper:hover .cke_widget_element,
.alloy-editor-container .alloy-editor .cke_widget_embedurl.cke_widget_wrapper.cke_widget_focused .cke_widget_element {
    outline: 0
}

.alloy-editor-container .alloy-editor .cke_widget_embedurl.cke_widget_wrapper.cke_widget_selected .cke_widget_mask {
    height: 100%;
    opacity: .6
}

.alloy-editor-container .alloy-editor .cke_widget_embedurl.cke_widget_wrapper.cke_widget_selected .embed-help-message {
    opacity: 1
}

.alloy-editor-container .alloy-editor .cke_widget_wrapper {
    max-width: 100%
}

.alloy-editor-container .alloy-editor-switch {
    position: absolute;
    text-align: right;
    top: 0;
    width: 100%
}

.alloy-editor-container .alloy-editor-switch .btn {
    margin-top: 0
}

.alloy-editor-container .alloy-editor-wrapper {
    padding-top: 44px
}

.alloy-editor-container .alloy-editor-wrapper .lfr-source-editor {
    display: none
}

.alloy-editor-container .alloy-editor-wrapper.show-source .alloy-editor-placeholder {
    display: none
}

.alloy-editor-container .alloy-editor-wrapper.show-source .lfr-source-editor {
    display: block
}

.has-error .alloy-editor-container .help-block {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.4em;
    text-align: left
}

.lfr-source-editor {
    border: solid 0 transparent;
    border-bottom-width: 2px;
    position: relative
}

.lfr-source-editor .ace_editor {
    height: 100%
}

.lfr-fulscreen-source-editor-dialog .modal-footer {
    text-align: left
}

.lfr-fullscreen-source-editor {
    height: 100%;
    overflow: hidden
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-header {
    height: 40px;
    min-height: 40px
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-header .layout-selector {
    text-align: right
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-header .layout-selector span {
    cursor: pointer;
    font-size: 12px;
    margin: 0 5px
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content {
    height: 95%;
    position: relative
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content .panel-splitter {
    border: 1px solid transparent;
    position: absolute
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content .preview-panel {
    display: inline-block;
    overflow-y: auto;
    padding-left: 20px
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content .source-panel {
    display: inline-block
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.vertical .source-panel,
.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.vertical .preview-panel {
    height: 100%;
    width: 50%
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.vertical .panel-splitter {
    height: 100%;
    left: 50%;
    top: 0
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.horizontal .source-panel,
.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.horizontal .preview-panel {
    height: 50%;
    width: 100%
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.horizontal .panel-splitter {
    top: 50%;
    width: 100%
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.simple .panel-splitter,
.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.simple .preview-panel {
    display: none
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content.simple .source-panel {
    height: 100%;
    width: 100%
}

.form-group-inline {
    display: inline-block;
    vertical-align: bottom
}

.button-holder {
    margin: 20px 0
}

.form-search .input-group {
    position: relative
}

.form-search .input-group.advanced-search .search-query {
    padding-left: 40px;
    z-index: 0
}

.form-search .input-group.advanced-search .toggle-advanced {
    cursor: pointer;
    left: 0;
    line-height: 1;
    padding: 8px 10px;
    position: absolute;
    top: 0
}

.form-search .input-group.advanced-search .toggle-advanced .caret {
    margin-top: 7px
}

.form-search .input-group.advanced-search .toggle-advanced .icon-search {
    font-size: 14px
}

@media(max-width:979px) {
    .form-search .input-group {
        width: 100%
    }

    .form-search .input-group .btn {
        clip: rect(0, 0, 0, 0);
        left: -9999px;
        position: absolute
    }

    .form-search .input-group input.search-query {
        width: 100%
    }
}

.input-flex-add-on {
    position: relative;
    width: 100%
}

.input-flex-add-on:after {
    clear: left;
    content: "";
    display: block;
    height: 0;
    visibility: hidden
}

.input-flex-add-on input {
    float: left;
    margin-top: -1px
}

.input-flex-add-on .input-group-addon {
    float: left;
    margin-top: -1px;
    padding: 9px;
    white-space: normal;
    width: auto;
    overflow-wrap: break-all;
    word-wrap: break-all;
    word-break: break-all
}

@media(max-width:979px) {
    .input-flex-add-on .input-group-addon {
        font-size: 18px;
        padding: 8px
    }
}

.input-flex-add-on .input-localized-content {
    clear: both;
    left: 0;
    padding-top: 10px;
    position: absolute;
    top: 100%
}

.input-flex-add-on .input-localized-input {
    float: left
}

.lfr-ddm-container .form-group label {
    margin-left: 0
}

.lfr-ddm-container .lfr-ddm-repeatable-helper {
    display: none
}

.lfr-ddm-container .lfr-ddm-repeatable-placeholder {
    border: 1px dotted;
    margin-top: 15px;
    padding: 20px 0
}

.lfr-ddm-container .field-wrapper {
    position: relative
}

.lfr-ddm-container .field-wrapper.form-builder-field label {
    float: none
}

.lfr-ddm-container .field-wrapper .aui-field-wrapper {
    margin-left: 20px
}

.lfr-ddm-container .field-wrapper .datepicker-display {
    float: none
}

.lfr-ddm-container .field-wrapper .datepicker-display .datepicker-button-wrapper,
.lfr-ddm-container .field-wrapper .datepicker-display .datepicker-select-wrapper {
    display: inline;
    float: none
}

.lfr-ddm-container .field-wrapper .file-entry-upload-progress {
    height: 6px;
    margin-top: -7px
}

.lfr-ddm-container .field-wrapper .icon-asterisk {
    margin-left: 4px
}

.lfr-ddm-container .field-wrapper .lfr-ddm-repeatable-add-button,
.lfr-ddm-container .field-wrapper .lfr-ddm-repeatable-delete-button {
    display: block;
    height: 16px;
    position: absolute;
    top: 4px;
    width: 16px
}

.lfr-ddm-container .field-wrapper .lfr-ddm-repeatable-add-button.lfr-ddm-repeatable-add-button,
.lfr-ddm-container .field-wrapper .lfr-ddm-repeatable-delete-button.lfr-ddm-repeatable-add-button {
    right: 4px
}

.lfr-ddm-container .field-wrapper .lfr-ddm-repeatable-add-button.lfr-ddm-repeatable-delete-button,
.lfr-ddm-container .field-wrapper .lfr-ddm-repeatable-delete-button.lfr-ddm-repeatable-delete-button {
    right: 24px
}

.lfr-ddm-container .field-wrapper-content {
    margin-bottom: 6px
}

.lfr-ddm-container .field-wrapper-content label {
    margin-left: 0
}

.lfr-ddm-container .field-wrapper-content,
.lfr-ddm-container .field-wrapper-content .field-wrapper-content {
    margin-left: 15px
}

.lfr-ddm-container .taglib-icon-help {
    margin-left: 5px
}

.lfr-ddm-link-to-page-modal .lfr-ddm-breadcrumb {
    padding-left: 0;
    padding-right: 0
}

.lfr-ddm-link-to-page-modal .lfr-ddm-pages-container {
    height: 283px;
    margin-right: -23px;
    overflow: auto;
    padding-left: 5px;
    padding-top: 50px
}

.lfr-ddm-link-to-page-modal .lfr-ddm-pages-container.top-ended {
    padding-top: 0
}

.lfr-ddm-link-to-page-modal .lfr-ddm-pages-container .loading-icon {
    display: block;
    font-size: 48px;
    margin: 0 auto
}

.lfr-ddm-link-to-page-modal .lfr-ddm-pages-container.nav>li>a {
    margin-left: 20px;
    padding-left: 0
}

.lfr-ddm-link-to-page-modal .lfr-ddm-pages-container.nav>li .loading-icon {
    font-size: 18px;
    position: absolute;
    right: 36px;
    top: 12px
}

.lfr-ddm-link-to-page-modal .lfr-ddm-pages-container.nav .lfr-ddm-page-radio {
    position: absolute;
    top: 10px
}

td.lfr-center {
    text-align: center
}

td.lfr-top {
    vertical-align: top
}

td.lfr-middle {
    vertical-align: middle
}

.definition-of-terms {
    margin-bottom: 2em
}

.definition-of-terms dd:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.definition-of-terms dl {
    margin-left: 0
}

.definition-of-terms dt {
    float: left;
    width: 25em
}

.lfr-code {
    border: 1px solid transparent;
    overflow: hidden;
    overflow-x: auto;
    white-space: pre;
    overflow-wrap: normal;
    word-wrap: normal;
    word-break: normal
}

.lfr-code table {
    table-layout: auto;
    width: 100%
}

.lfr-code table tr td.lines,
.lfr-code table tr td.line-numbers {
    border-width: 0
}

.lfr-code table tr td.line-numbers {
    border-right-width: 1px;
    cursor: default;
    padding: 0 8px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: top;
    width: 1%
}

.lfr-code table tr td.line-numbers:before {
    content: attr(data-line-number)
}

.lfr-grid {
    width: 100%
}

img.icon {
    vertical-align: middle
}

#layout-grid.dragging .lfr-portlet-column.empty {
    padding: 20px
}

.lfr-js-required {
    clip: rect(0 0 0 0);
    position: absolute
}

.js .lfr-js-required {
    clip: rect(auto auto auto auto);
    position: static
}

.popup-alert-close {
    margin-left: 5px
}

.alert.popup-alert-notice,
.alert.popup-alert-warning,
.alert.taglib-portal-message {
    left: 0;
    line-height: 30px;
    padding: 9px 14px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10000
}

@media(max-width:979px) {

    .alert.popup-alert-notice,
    .alert.popup-alert-warning,
    .alert.taglib-portal-message {
        line-height: 20px;
        margin-bottom: 0;
        padding: 14px 28px;
        position: static
    }
}

@media(max-width:979px) and (max-width:767px) {

    .alert.popup-alert-notice,
    .alert.popup-alert-warning,
    .alert.taglib-portal-message {
        margin: 0 -20px
    }
}

.alert.lfr-shutdown-message.popup-alert-warning {
    margin: 0;
    position: relative
}

.lfr-token-list {
    clear: both;
    margin: 1em 0
}

.lfr-token {
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    margin: .1em .2em;
    padding: .3em .5em .3em
}

.lfr-token-primary {
    border-width: 0
}

.lfr-token-primary,
.lfr-token-primary:hover {
    cursor: auto
}

.lfr-token-close,
.lfr-token-text {
    display: inline-block;
    vertical-align: middle
}

.lfr-token-close {
    margin-left: .3em
}

@media(max-width:767px) {
    .definition-of-terms dd {
        margin-left: 10px
    }

    .definition-of-terms dt {
        float: none
    }
}

.breadcrumbs {
    margin-bottom: 10px;
    margin-left: 0
}

.lfr-button {
    padding: 2px 0 2px 20px
}

@media(max-width:767px) {

    .js .controls-hidden .lfr-meta-actions,
    .js .controls-hidden .lfr-configurator-visibility {
        display: none
    }
}

.js .page-maximized .portlet-topper-toolbar {
    display: block
}

.configuration-frame,
.control-panel-frame {
    border-width: 0;
    overflow: auto;
    width: 100%
}

.float-container:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.lfr-meta-actions {
    padding-top: 1em
}

.lfr-table {
    border-collapse: collapse;
    clear: both
}

.lfr-table>tbody>tr>td,
.lfr-table>tbody>tr>th,
.lfr-table>thead>tr>td,
.lfr-table>thead>tr>th,
.lfr-table>tfoot>tr>td,
.lfr-table>tfoot>tr>th {
    padding: 0 5px;
    overflow-wrap: break-all;
    word-wrap: break-all;
    word-break: break-all
}

.lfr-table>tbody>tr>td:first-child,
.lfr-table>tbody>tr>td.first-child,
.lfr-table>tbody>tr>th:first-child,
.lfr-table>tbody>tr>th.first-child,
.lfr-table>thead>tr>td:first-child,
.lfr-table>thead>tr>td.first-child,
.lfr-table>thead>tr>th:first-child,
.lfr-table>thead>tr>th.first-child,
.lfr-table>tfoot>tr>td:first-child,
.lfr-table>tfoot>tr>td.first-child,
.lfr-table>tfoot>tr>th:first-child,
.lfr-table>tfoot>tr>th.first-child {
    padding-left: 0
}

.lfr-table>tbody>tr>td:last-child,
.lfr-table>tbody>tr>td.last-child,
.lfr-table>tbody>tr>th:last-child,
.lfr-table>tbody>tr>th.last-child,
.lfr-table>thead>tr>td:last-child,
.lfr-table>thead>tr>td.last-child,
.lfr-table>thead>tr>th:last-child,
.lfr-table>thead>tr>th.last-child,
.lfr-table>tfoot>tr>td:last-child,
.lfr-table>tfoot>tr>td.last-child,
.lfr-table>tfoot>tr>th:last-child,
.lfr-table>tfoot>tr>th.last-child {
    padding-right: 0
}

.lfr-table-grid .field-hint {
    float: none
}

.lfr-control-links a {
    margin-right: 1em
}

.portlet-toolbar {
    margin-bottom: 1.5em
}

.lfr-header-row {
    border: 1px solid transparent;
    min-height: 31px
}

.lfr-header-row .lfr-search-combobox {
    float: right;
    margin: -2px 0 0 2px
}

.lfr-header-row-content {
    padding: 3px 4px 0
}

.lfr-header-row:after,
.lfr-header-row-content:after {
    clear: both;
    content: '';
    display: block;
    height: 0
}

.lfr-item-viewer #cardSection {
    margin-bottom: 20px
}

.lfr-item-viewer .aspect-ratio a.item-preview {
    height: 100%;
    position: absolute;
    width: 100%
}

.lfr-item-viewer .progress-container {
    left: 0;
    margin: 0 auto;
    padding: 20px 30px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    visibility: hidden;
    width: 80%;
    z-index: 1000
}

.lfr-item-viewer .progress-container a {
    position: absolute;
    right: 30px
}

.lfr-item-viewer .progress-container .progress {
    margin-top: 10px
}

.lfr-item-viewer .tabular-list-group {
    width: 100%
}

.lfr-item-viewer .upload-view {
    display: table;
    height: 400px;
    width: 100%
}

.lfr-item-viewer .upload-view>div {
    display: table-cell;
    vertical-align: middle
}

.lfr-item-viewer .url-view {
    margin: 15px
}

.lfr-item-viewer.uploading>.progress-container {
    visibility: visible
}

.lfr-item-viewer .image-viewer-base-image-list {
    padding-top: 35px
}

@media only screen and (min-width:768px) {
    .lfr-item-viewer .image-viewer-base-image-list-inner {
        padding-left: 15px
    }
}

.lfr-item-viewer .yui3-widget-bd {
    position: relative
}

.lfr-item-viewer .image-viewer-base .lfr-item-viewer-close {
    padding: 0 15px 0 0
}

.lfr-item-viewer .lfr-item-viewer-close {
    font-size: 16px;
    left: 4px;
    max-width: calc(100% - 8px);
    padding: 0 15px 0 0;
    right: 4px;
    text-align: left;
    top: 4px;
    z-index: 5
}

.lfr-item-viewer .lfr-item-viewer-close .icon-monospaced {
    position: absolute
}

.lfr-item-viewer .image-viewer-footer-content {
    padding: 0 20px
}

@media only screen and (max-width:767px) {
    .lfr-item-viewer .image-viewer-footer-content {
        display: -webkit-box;
        display: -moz-box;
        display: box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-lines: multiple;
        -moz-box-lines: multiple;
        box-lines: multiple;
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }
}

.lfr-item-viewer .image-viewer-footer-content .image-viewer-footer-control {
    margin: 0 10px;
    position: relative
}

.lfr-item-viewer .image-viewer-footer-content .image-viewer-footer-control:focus,
.lfr-item-viewer .image-viewer-footer-content .image-viewer-footer-control:hover {
    text-decoration: none
}

.lfr-item-viewer .image-viewer-footer-content .image-viewer-thumbnails {
    display: none
}

.lfr-item-viewer .image-viewer-footer-controls {
    display: inline-block;
    white-space: nowrap
}

@media only screen and (max-width:767px) {
    .lfr-item-viewer .image-viewer-footer-controls {
        -webkit-box-flex: 0;
        -moz-box-flex: 0;
        box-flex: 0;
        -webkit-flex: 0 1 100%;
        -moz-flex: 0 1 100%;
        -ms-flex: 0 1 100%;
        flex: 0 1 100%;
        -webkit-box-ordinal-group: 1;
        -moz-box-ordinal-group: 1;
        box-ordinal-group: 1;
        -webkit-order: 1;
        -moz-order: 1;
        order: 1;
        -ms-flex-order: 1
    }
}

.lfr-item-viewer .image-viewer-caption {
    line-height: 32px;
    position: absolute;
    text-align: left;
    width: 33%
}

@media only screen and (max-width:767px) {
    .lfr-item-viewer .image-viewer-caption {
        -webkit-box-flex: 0;
        -moz-box-flex: 0;
        box-flex: 0;
        -webkit-flex: 0 1 100%;
        -moz-flex: 0 1 100%;
        -ms-flex: 0 1 100%;
        flex: 0 1 100%;
        -webkit-box-ordinal-group: 2;
        -moz-box-ordinal-group: 2;
        box-ordinal-group: 2;
        -webkit-order: 2;
        -moz-order: 2;
        order: 2;
        -ms-flex-order: 2;
        padding-left: 45px;
        padding-right: 45px;
        position: relative
    }
}

@media only screen and (max-width:767px) {
    .lfr-item-viewer .lfr-item-viewer-icon-info-link {
        bottom: 10px;
        -webkit-box-flex: 0;
        -moz-box-flex: 0;
        box-flex: 0;
        -webkit-flex: 0 1 auto;
        -moz-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-box-ordinal-group: 3;
        -moz-box-ordinal-group: 3;
        box-ordinal-group: 3;
        -webkit-order: 3;
        -moz-order: 3;
        order: 3;
        -ms-flex-order: 3;
        position: absolute;
        right: 20px;
        z-index: 1
    }
}

.lfr-item-viewer-close-text {
    display: block;
    line-height: 32px;
    padding-left: 35px
}

.lfr-item-viewer-icon-info-link {
    float: right;
    font-size: 20px
}

.lfr-item-viewer-icon-info-link:focus,
.lfr-item-viewer-icon-info-link:hover {
    text-decoration: none
}

@media only screen and (min-width:768px) {
    .image-viewer-base.open .image-viewer-base-image-list-inner {
        padding-right: 400px
    }
}

.image-viewer-base .image-viewer-sidenav.open {
    width: 300px
}

@media only screen and (min-width:768px) {
    .image-viewer-base .image-viewer-sidenav.open {
        width: 400px
    }
}

.image-viewer-base .image-viewer-sidenav .image-viewer-sidenav-menu {
    width: 300px
}

@media only screen and (min-width:768px) {
    .image-viewer-base .image-viewer-sidenav .image-viewer-sidenav-menu {
        top: 18px;
        width: 400px
    }
}

.image-viewer-sidenav {
    line-height: normal
}

.image-viewer-sidenav.sidenav-fixed {
    bottom: 0
}

@media only screen and (min-width:768px) {
    .image-viewer-sidenav.sidenav-fixed {
        bottom: 47px;
        position: absolute
    }
}

.image-viewer-sidenav .image-viewer-sidenav-body {
    text-align: left
}

.image-viewer-sidenav .image-viewer-sidenav-header {
    margin-top: 25px
}

@media only screen and (min-width:768px) {
    .image-viewer-sidenav .image-viewer-sidenav-header {
        margin-top: 0
    }
}

.image-viewer-sidenav-close {
    display: block;
    float: right;
    margin-right: -10px;
    margin-top: -15px
}

.sidenav-transition .image-viewer-base-image-list-inner {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease
}

.lfr-template {
    display: none !important
}

@media(min-height:400px) {
    .modal-body.inline-scroller {
        max-height: 320px
    }
}

.popup-alert-notice .notice-date {
    margin: 0 10px
}

.popup-alert-notice .current-user-language {
    border: solid transparent;
    border-width: 0 1px;
    display: inline;
    margin: 0 10px;
    padding: 0 15px
}

.openid-login input[type="text"] {
    padding-left: 18px
}

.page-extra-settings .lfr-panel-titlebar .lfr-panel-title {
    padding: .5em 0
}

.page-extra-settings .lfr-extended .lfr-panel-titlebar {
    line-height: 1
}

.page-extra-settings .lfr-extended .lfr-panel-content {
    padding: 5px
}

.lfr-pagination:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.lfr-pagination .dropdown-menu {
    display: none
}

.lfr-pagination .dropdown-toggle .icon-caret-down {
    margin-left: 5px
}

.lfr-pagination .lfr-pagination-controls {
    float: left
}

.lfr-pagination .lfr-pagination-controls .search-results {
    display: inline-block;
    margin-left: 10px;
    margin-top: 5px;
    top: 10px
}

.lfr-pagination .lfr-pagination-controls li .lfr-pagination-link {
    border-width: 0;
    clear: both;
    display: block;
    line-height: 20px;
    padding: 3px 20px;
    text-align: left;
    white-space: nowrap;
    width: 100%
}

.lfr-pagination .lfr-pagination-delta-selector {
    float: left
}

@media(max-width:979px) {
    .lfr-pagination .lfr-pagination-delta-selector .lfr-icon-menu-text {
        display: none
    }
}

.lfr-pagination .pagination-content {
    float: right
}

.lfr-panel-container,
.lfr-floating-container {
    clear: both
}

.lfr-panel.lfr-extended,
.lfr-panel-container,
.lfr-floating-container {
    border: 1px solid transparent
}

.lfr-floating-container {
    position: relative
}

.lfr-floating-container .lfr-form-row,
.lfr-panel-container .lfr-panel {
    border-width: 0
}

.lfr-panel-titlebar .lfr-panel-title {
    float: left;
    margin: 0
}

.lfr-panel-titlebar .lfr-panel-button {
    display: none;
    float: right;
    height: 22px;
    width: 19px
}

.lfr-panel .lfr-panel-titlebar {
    margin-bottom: .5em;
    overflow: hidden;
}

.lfr-panel.lfr-collapsible .lfr-panel-titlebar {
    cursor: pointer;
    padding-left: 15px;
}

.lfr-panel.lfr-collapsed .lfr-panel-titlebar {
    margin-bottom: 0;
}

.lfr-panel.lfr-collapsed .lfr-panel-content {
    display: none;
}

.lfr-panel.lfr-extended .lfr-panel-titlebar {
    border-bottom: 1px solid transparent;
    line-height: 1.6;
    padding: 2px
}

.lfr-panel.panel-default .panel-heading {
    border-bottom-width: 0
}

.lfr-panel .lfr-panel-content .undo-queue {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    margin: -0.5em 0 10px
}

.lfr-panel .toggler-header {
    cursor: pointer
}

.lfr-extended.lfr-collapsible .lfr-panel-button {
    display: block
}

.lfr-extended.lfr-collapsed .lfr-panel-titlebar {
    border-bottom-width: 0;
}

.lfr-panel-container .lfr-extended.lfr-collapsible .lfr-panel-titlebar {
    border-top: 1px solid transparent
}

.js .lfr-floating-container {
    position: absolute
}

.js .lfr-floating-trigger {
    padding: 3px;
    padding-right: 15px
}

.lfr-floating-container .col {
    float: left;
    margin-right: 10px;
    width: auto
}

.lfr-floating-container .language-value,
.lfr-floating-container select {
    display: inline-block;
    vertical-align: top
}

.lfr-panel-page .portal-add-content {
    padding: 0;
    padding-left: 4px
}

.lfr-panel-page .panel-page-content {
    border-left: 1px solid transparent;
    padding-left: 1em
}

.lfr-panel-page .lfr-add-content h2 {
    border: 1px solid transparent;
    border-right-width: 0;
    padding: 1px
}

.lfr-panel-page .lfr-add-content h2 span {
    display: block;
    padding: 2px;
    padding-left: 5px
}

.lfr-panel-page .lfr-add-content .lfr-content-category h2 {
    border-bottom: solid transparent;
    border-width: 0 1px 0 0
}

.lfr-panel-page.panel-page-frontpage .panel-page-content h2 {
    margin-top: 0
}

.lfr-panel-content .paginator-container {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    overflow: hidden;
    text-align: center
}

.lfr-panel-content .paginator-container .paginator-page-container,
.lfr-panel-content .paginator-container .lfr-paginator-next,
.lfr-panel-content .paginator-container .lfr-paginator-prev {
    display: inline-block
}

.lfr-panel-content .paginator-container .lfr-paginator-next,
.lfr-panel-content .paginator-container .lfr-paginator-prev {
    padding: 8px
}

.lfr-panel-content .paginator-page-container .paginator-page-link {
    border: 1px solid transparent;
    display: inline-block;
    float: none;
    padding: 5px 10px;
    text-align: center;
    width: auto
}

#portlet-set-properties fieldset {
    margin-bottom: 1em
}

#portlet-set-properties fieldset fieldset {
    margin-top: 1em
}

#portlet-set-properties .form {
    clear: both
}

#portlet-set-properties .form .text-input {
    margin-right: 5px;
    width: 80px
}

#portlet-set-properties .form fieldset.col {
    width: 29%
}

#portlet-set-properties .form #custom-css {
    height: 300px;
    width: 400px
}

#portlet-set-properties .common {
    width: 27%
}

#portlet-set-properties .extra {
    width: 20%
}

#portlet-set-properties .use-for-all-column .field-row .field-label {
    width: 50px
}

#portlet-set-properties .form-hint {
    float: none
}

#portlet-set-properties .lfr-bg-image-properties {
    display: none
}

#portlet-set-properties #border-note {
    margin-top: 10px
}

#portlet-set-properties .colorpicker-trigger {
    margin-top: 0;
    vertical-align: top
}

.lfr-position-helper {
    position: absolute;
    z-index: 10000
}

.lfr-preview-file {
    position: relative
}

.lfr-preview-file-content {
    border-bottom: 1px solid transparent;
    padding: 0 0 40px 135px;
    position: relative
}

.lfr-preview-image-content {
    text-align: center
}

.lfr-preview-audio-content,
.lfr-preview-image-content,
.lfr-preview-video-content {
    padding-left: 0
}

.lfr-preview-image-content img,
.lfr-preview-video-content .video-node {
    max-height: 440px;
    max-width: 100%
}

.lfr-preview-file-image-current-column,
.lfr-preview-file-video-current-column {
    padding: 20px;
    position: relative
}

.lfr-preview-file-image-container,
.lfr-preview-video-content .video-content {
    text-align: center;
    vertical-align: middle
}

.lfr-preview-file-actions {
    bottom: .5em;
    left: 0;
    margin: 0 10px;
    position: absolute;
    right: 0
}

.lfr-preview-file-arrow {
    border-radius: 4px;
    height: 52px;
    line-height: 48px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 52px
}

@media only screen and (min-width:768px) {
    .lfr-preview-file-arrow {
        height: 64px;
        line-height: 60px;
        width: 64px
    }
}

.lfr-preview-file-arrow.carousel-control {
    background-color: #000;
    background-image: none
}

.lfr-preview-file-toolbar {
    display: block
}

.lfr-preview-file-actions .toolbar {
    bottom: 0;
    position: absolute;
    right: 10px
}

.lfr-preview-file-info {
    display: inline-block;
    margin-top: .5em;
    padding: 3px 15px
}

.lfr-preview-file-index {
    line-height: 0
}

.lfr-preview-file-image-current {
    max-height: 440px;
    max-width: 100%;
    vertical-align: middle
}

@media(max-width:767px) {
    .lfr-preview-file-image-current {
        max-height: 65%
    }
}

.lfr-preview-file-images {
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    overflow-y: scroll;
    padding: 0 10px 0 0;
    position: absolute;
    right: 2px;
    text-align: center;
    top: 0;
    width: 125px
}

.lfr-preview-file-images-content {
    position: absolute;
    width: 100%
}

.lfr-preview-file-image {
    display: block;
    margin: 5px;
    width: 100%
}

.lfr-preview-file-image img {
    border: 1px solid transparent;
    display: inline-block;
    margin: 3px;
    min-height: 40px;
    width: 72px
}

.lfr-preview-file-loading-indicator {
    bottom: 0;
    left: 0;
    margin: 2px;
    padding: 2px 5px;
    position: absolute
}

.lfr-preview-file-image-overlay {
    height: 90%;
    width: 70%
}

.lfr-preview-file-image-overlay .modal-header {
    min-height: 61px
}

.lfr-preview-file-image-overlay .modal-header .close {
    font-size: 30px
}

.lfr-preview-file-image-overlay-content {
    border: 2px solid transparent;
    overflow: auto;
    text-align: center
}

.lfr-preview-file-image-overlay-controls {
    pointer-events: all
}

.lfr-preview-file-image-overlay-controls .image-viewer-control.carousel-control.left {
    left: 15px
}

.lfr-preview-file-image-overlay-controls .image-viewer-control.carousel-control.right {
    right: 25px
}

textarea.lfr-editor-textarea {
    height: 100%;
    min-height: 8em;
    min-width: 10em;
    padding: 0;
    width: 100%
}

.lfr-rich-editor.ace_editor {
    border: 1px solid transparent;
    height: 400px;
    position: relative;
    width: 100%
}

.lfr-search-combobox {
    float: right;
    white-space: nowrap
}

.lfr-search-combobox .field-content,
.lfr-search-combobox .button {
    border-width: 0;
    display: inline-block;
    float: left;
    vertical-align: top
}

.lfr-search-combobox:after {
    clear: both;
    content: '';
    display: block;
    height: 0
}

.lfr-search-combobox .lfr-search-combobox-item {
    margin-right: 0
}

.lfr-search-combobox .button-input {
    padding: 4px
}

.separator {
    clear: both;
    display: block;
    margin: 15px auto
}

.lfr-spa-loading .lfr-spa-loading-bar {
    display: block
}

.lfr-spa-loading-bar {
    display: none;
    height: 2px;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2000
}

.lfr-tags-selector-list {
    border: 0 solid transparent;
    border-width: 0 1px 1px;
    margin-bottom: .5em
}

.lfr-tags-selector-list li.tree-node .tree-node-content {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
}

.lfr-tags-selector-content .toolbar {
    position: static
}

.lfr-tags-selector-content .textboxlistentry-holder li {
    margin: 0 5px 0 0
}

.lfr-tags-selector-content .textboxlist-input-container input {
    margin: 0
}

.lfr-tags-selector-content .textboxlist-input-container .textboxlist-content .field-input-text {
    padding: 0
}

.lfr-tag-selector-popup {
    width: 250px
}

.lfr-tag-selector-popup label {
    border-bottom: 1px solid transparent;
    cursor: pointer;
    display: block;
    padding: 2px;
    padding-left: 20px
}

.lfr-tag-selector-popup label input {
    margin-right: 5px;
    vertical-align: middle
}

.lfr-tag-selector-popup label .lfr-tag-text {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
}

.lfr-tag-selector-popup ul {
    margin: 0
}

.lfr-tag-selector-popup li li {
    list-style: none;
    margin-left: 1em
}

.lfr-tag-selector-popup .lfr-tag-selector-search,
.lfr-tag-selector-popup .lfr-tag-selector-input {
    margin-bottom: 0
}

.lfr-tag-selector-popup .lfr-tag-message {
    display: none
}

.lfr-tag-selector-popup .no-matches {
    padding: 3px
}

.lfr-tag-selector-popup .no-matches .lfr-tag-message {
    display: block
}

.lfr-toolbar {
    padding-top: 3px
}

.lfr-toolbar:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.lfr-toolbar .lfr-button:focus,
.lfr-toolbar .lfr-button:hover {
    border: 1px solid transparent
}

.lfr-toolbar .lfr-button img {
    vertical-align: text-top
}

.lfr-toolbar .lfr-separator {
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    height: 25px;
    margin: 0 5px
}

.lfr-toolbar select {
    margin: 0 5px
}

.lfr-toolbar .lfr-button,
.lfr-emoticon-container .lfr-button {
    border: 1px solid transparent;
    cursor: pointer;
    margin: 0 2px;
    padding: 2px 4px
}

.lfr-toolbar select,
.lfr-toolbar .lfr-button,
.lfr-toolbar .lfr-separator,
.lfr-emoticon-container .lfr-button {
    float: left
}

.lfr-emoticon-container {
    border: 1px solid transparent;
    overflow: hidden;
    padding-top: 5px;
    width: 180px
}

.lfr-emoticon-container .lfr-button {
    margin: 0
}

.lfr-translation-manager {
    display: inline-block;
    margin-top: .5em;
    min-height: 1.8em
}

.lfr-translation-manager .lfr-translation-manager-content .lfr-translation-manager-default-locale {
    display: inline-block;
    width: auto
}

.lfr-translation-manager .lfr-translation-manager-content .lfr-translation-manager-icon-menu {
    float: none;
    padding: .4em 0
}

.lfr-translation-manager .lfr-translation-manager-content .lfr-translation-manager-icon-menu li,
.lfr-translation-manager .lfr-translation-manager-content .lfr-translation-manager-icon-menu li strong {
    display: inline
}

.lfr-translation-manager .lfr-translation-manager-content .lfr-translation-manager-translations-message {
    margin: 10px 0
}

.lfr-translation-manager .lfr-translation-manager-available-translations {
    white-space: normal
}

.lfr-translation-manager .lfr-translation-manager-translation {
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-block;
    margin: .2em;
    padding: .4em .3em .4em .5em
}

.lfr-translation-manager .lfr-translation-manager-translation * {
    vertical-align: middle
}

.lfr-translation-manager .lfr-translation-manager-translation img {
    margin-right: .3em
}

.lfr-translation-manager .lfr-translation-manager-change-default-locale {
    margin: 0 .4em
}

.lfr-translation-manager .lfr-translation-manager-delete-translation {
    display: inline-block;
    padding: 0 2px
}

.lfr-tree .tree-label {
    display: inline-block
}

.lfr-tree li {
    margin-bottom: 2px;
    padding-left: 0
}

.lfr-tree li ul li,
.lfr-tree li.tree-item {
    padding-left: 0
}

.lfr-tree li.tree-node .tree-node-content {
    display: block
}

.lfr-tree li.tree-item {
    padding-left: 5px
}

.lfr-tree li.tree-item li {
    padding-left: 20px
}

.lfr-tree li.tree-item ul {
    margin-left: 0;
    margin-top: 5px
}

.lfr-tree .tree-container,
.lfr-tree .tree-root-container {
    margin-left: 15px
}

.undomanager .lfr-undo-queue {
    margin: 10px auto
}

.lfr-action-undo {
    float: left
}

.lfr-action-clear {
    float: right
}

.undomanager .lfr-queue-empty,
.lfr-queue-single .lfr-action-clear {
    display: none
}

.lfr-dynamic-uploader {
    display: table;
    table-layout: fixed;
    width: 100%
}

.lfr-upload-container {
    margin-bottom: 1em
}

.lfr-upload-container .upload-target {
    border: 3px dashed transparent;
    margin-bottom: 1em;
    min-height: 30px;
    padding: 30px 0;
    position: relative;
    text-align: center
}

.lfr-upload-container .upload-target h4 span {
    display: block;
    margin: 5px 0
}

.lfr-upload-container .upload-target .or-text {
    font-size: .8em
}

.lfr-upload-container .manage-upload-target {
    padding: 5px 0 0 0;
    position: relative
}

.lfr-upload-container .manage-upload-target .select-files {
    margin: 0 10px 10px
}

.lfr-upload-container .browse-button-container {
    padding-top: 5px
}

.lfr-upload-container a.cancel-uploads {
    float: right;
    margin-right: 0
}

.lfr-upload-container a.clear-uploads {
    float: right;
    padding-left: 16px
}

.lfr-upload-container .upload-file.upload-complete.file-saved {
    padding-left: 25px
}

.lfr-upload-container .upload-file .file-title {
    display: inline-block;
    max-width: 95%;
    overflow: hidden;
    padding-right: 16px;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap
}

.lfr-upload-container .upload-file .icon-file {
    font-size: 40px
}

.lfr-upload-container .upload-list-info {
    margin: 1em 0 .5em
}

.lfr-upload-container .cancel-button {
    margin-top: -0.85em;
    position: absolute;
    right: 5px;
    top: 50%;
    white-space: nowrap
}

.lfr-upload-container .cancel-button .cancel-button-text {
    display: none;
    margin-left: 5px
}

.lfr-upload-container .cancel-button:hover .cancel-button-text {
    display: inline
}

.lfr-upload-container .cancel-button .lexicon-icon {
    height: 12px
}

.lfr-upload-container .delete-button-col {
    padding-right: 10px
}

.lfr-upload-container .file-added .success-message {
    float: right
}

.lfr-upload-container .upload-error {
    padding-left: 25px
}

.lfr-upload-container .upload-complete .cancel-button,
.lfr-upload-container .delete-button,
.lfr-upload-container .upload-complete.file-saved .delete-button,
.lfr-upload-container .upload-complete.upload-error .delete-button {
    display: none
}

.lfr-upload-container .multiple-files .upload-error .error-message {
    display: block
}

.lfr-upload-container .single-file .upload-error {
    list-style: none;
    margin-top: 1em
}

.lfr-upload-container .single-file .upload-error .upload-error-message {
    margin-bottom: .5em
}

.lfr-upload-container .upload-complete {
    padding-left: 5px
}

.lfr-upload-container .upload-complete label .select-file {
    margin-top: -7px
}

.lfr-upload-container .upload-complete .error-message,
.lfr-upload-container .upload-complete .success-message {
    margin-left: 1em
}

.lfr-upload-container .upload-complete .error-message.card-bottom,
.lfr-upload-container .upload-complete .success-message.card-bottom {
    bottom: 18px;
    position: relative
}

.lfr-upload-container .upload-complete .delete-button {
    display: inline-block
}

.lfr-upload-container .progress-bar {
    display: none;
    height: 15px
}

.lfr-upload-container .progress {
    display: inline-block;
    height: 15px;
    min-width: 20px
}

.lfr-upload-container .file-uploading .cancel-button {
    margin-top: 1px;
    top: 0
}

.lfr-upload-container .file-uploading .progress-bar {
    display: block
}

.select-files {
    float: left;
    line-height: 0;
    margin-right: 2px;
    padding: 0;
    padding-left: 5px
}

.lfr-upload-movie {
    bottom: 0;
    height: 1px;
    left: 0;
    position: absolute;
    width: 1px;
    z-index: 100000
}

.lfr-upload-movie-content {
    overflow: hidden;
    position: fixed
}

.mobile .lfr-upload-container .upload-target .drop-file-text {
    display: none
}

.upload-drop-intent .lfr-upload-container .upload-target {
    z-index: 100
}

.lfr-url-preview .lfr-url-preview-content {
    background-color: #000;
    border-radius: 0;
    margin: 0 auto
}

.lfr-url-preview .lfr-url-preview-content .modal-body {
    border-radius: 6px
}

.lfr-url-preview .lfr-url-preview-content .modal-header {
    background-color: #000;
    border-width: 0;
    color: #FFF;
    padding-bottom: 40px;
    padding-left: 0;
    text-align: left
}

.lfr-url-preview .lfr-url-preview-content .modal-header a {
    color: #FFF;
    opacity: .5
}

.add-menu .add-menu-advice {
    margin-top: -6px
}

.add-menu .add-menu-advice+.divider {
    margin-top: 0
}

.add-menu .add-menu-advice a {
    white-space: normal
}

.add-menu .dropdown-menu {
    min-width: 290px
}

.lfr-alert-container {
    left: 0;
    position: absolute;
    right: auto;
    top: auto;
    width: 100%;
    z-index: 430
}

.lfr-alert-container.inline-alert-container {
    position: relative
}

.lfr-alert-container.inline-alert-container .lfr-alert-wrapper {
    padding: 0
}

.lfr-alert-container .lfr-alert-wrapper {
    margin-bottom: 5px;
    overflow: hidden
}

.app-view-entry .entry-thumbnail {
    margin: 0;
    padding: 5px
}

.app-view-entry .entry-thumbnail .entry-thumbnail-container {
    margin-top: 50%;
    position: relative
}

.app-view-entry .entry-thumbnail .entry-thumbnail-container img {
    margin-top: -50%
}

.app-view-entry .entry-title {
    display: block;
    font-size: 1.15em;
    padding: 5px 0 10px 0
}

.app-view-entry .entry-link {
    display: block;
    overflow: hidden;
    text-align: left
}

.app-view-entry .entry-metadata {
    margin: 10px 0 20px
}

@media(max-width:979px) {
    .app-view-entry .entry-metadata {
        margin: 0 0 5px 15px;
        width: 85%
    }
}

.app-view-entry .entry-metadata .entry-title {
    padding-bottom: 3px
}

.app-view-entry .entry-metadata .entry-description {
    display: block
}

.app-view-entry .entry-metadata dl {
    margin: 0
}

.app-view-entry .entry-metadata dl.entry-latest-approved-container {
    margin: 20px 0 20px 0
}

.app-view-entry .entry-metadata dl dt {
    float: left;
    margin-right: 3px
}

.app-view-entry .entry-metadata dt,
.app-view-entry .entry-metadata dd,
.app-view-entry .entry-metadata .entry-categories,
.app-view-entry .entry-metadata .entry-tags,
.app-view-entry .entry-metadata .entry-description {
    line-height: 1.5em;
    overflow: hidden
}

.app-view-entry .entry-metadata .entry-categories,
.app-view-entry .entry-metadata .entry-tags {
    display: block
}

.app-view-entry .entry-metadata .taglib-workflow-status {
    display: inline
}

.app-view-entry .entry-metadata .taglib-workflow-status .workflow-status {
    padding-left: .2em
}

.app-view-entry .entry-metadata .entry-tags .tag {
    margin-left: 15px
}

.app-view-entry .entry-metadata .entry-tags .tag:first-child {
    margin-left: 0
}

.app-view-entry .entry-metadata .entry-categories .taglib-asset-categories-summary .asset-category {
    margin-left: .8em
}

.app-view-entry .folder-action,
.app-view-entry .entry-action {
    position: absolute;
    right: 6px;
    top: 10px
}

.app-view-entry .folder-action .btn,
.app-view-entry .entry-action .btn {
    padding: 0
}

.app-view-entry .entry-selector {
    left: 5px;
    position: absolute;
    top: 10px
}

.app-view-entry .entry-thumbnail {
    display: inline-block;
    float: left;
    margin: 5px 10px 5px 5px;
    position: relative;
    text-align: center
}

@media(max-width:979px) {
    .app-view-entry .entry-thumbnail {
        float: none
    }
}

.app-view-entry .overlay.folder-action a,
.app-view-entry .overlay.entry-action a {
    display: block;
    width: 20px
}

.app-view-entry .entry-title .entry-categories,
.app-view-entry a.entry-title .entry-tags {
    font-size: 16px
}

.lfr-search-container td .overlay.folder-action,
.lfr-search-container td .overlay.entry-action {
    position: static
}

.lfr-search-container td .overlay.folder-action .btn a,
.lfr-search-container td .overlay.entry-action .btn a {
    display: block;
    padding: 4px 12px
}

.app-view-entry-taglib.entry-display-style.display-icon {
    display: inline-block;
    float: left;
    height: 180px;
    margin: 5px;
    padding: 10px 0;
    position: relative;
    vertical-align: top;
    width: 200px
}

@media(max-width:979px) {
    .app-view-entry-taglib.entry-display-style.display-icon {
        height: 230px
    }
}

.app-view-entry-taglib.entry-display-style.display-icon .form-group {
    margin-bottom: 0
}

.app-view-entry-taglib.entry-display-style.display-icon .entry-title {
    clear: both;
    font-size: 1em;
    padding: 0 10px
}

.app-view-entry-taglib.entry-display-style.display-icon .entry-link {
    overflow: visible;
    text-align: center
}

.app-view-entry-taglib.entry-display-style.display-icon .folder-action,
.app-view-entry-taglib.entry-display-style.display-icon .entry-action {
    top: 14px
}

@media(max-width:979px) {

    .app-view-entry-taglib.entry-display-style.display-icon .folder-action,
    .app-view-entry-taglib.entry-display-style.display-icon .entry-action {
        bottom: 8px;
        right: 31px;
        top: auto
    }

    .app-view-entry-taglib.entry-display-style.display-icon .folder-action a,
    .app-view-entry-taglib.entry-display-style.display-icon .entry-action a {
        padding: 10px 0;
        width: 136px
    }
}

.app-view-entry-taglib.entry-display-style.display-icon .entry-selector {
    left: 10px
}

.app-view-entry-taglib.entry-display-style.display-icon .entry-thumbnail {
    float: none;
    margin: 0
}

.app-view-entry-taglib.entry-display-style.display-descriptive {
    display: block;
    margin: 5px;
    padding: 5px 0;
    padding-left: 20px;
    position: relative;
    text-align: left
}

.app-view-entry-taglib.entry-display-style.display-descriptive:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.app-view-entry-taglib.entry-display-style.display-descriptive .entry-title {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
}

@media(max-width:979px) {

    .app-view-entry-taglib.entry-display-style.display-descriptive .folder-action a,
    .app-view-entry-taglib.entry-display-style.display-descriptive .entry-action a {
        padding: 10px 12px;
        width: auto
    }
}

.app-view-entry-taglib.entry-display-style.display-descriptive,
.app-view-entry-taglib.entry-display-style.display-icon {
    border: 1px solid #e1e1e1;
    margin: 5px
}

.app-view-entry-taglib.entry-display-style.display-descriptive img,
.app-view-entry-taglib.entry-display-style.display-icon img {
    margin: 4px
}

.app-view-entry-taglib.entry-display-style .categories {
    margin-top: 10px
}

.app-view-entry-taglib.entry-display-style .tags {
    margin-top: 5px
}

.app-view-search-entry-taglib {
    display: block;
    margin: 5px;
    padding: 5px 0 5px 20px;
    position: relative;
    text-align: left
}

.app-view-search-entry-taglib dl {
    margin: 0
}

.app-view-search-entry-taglib dl dt {
    float: left;
    margin-right: 3px
}

.app-view-search-entry-taglib .tabview-list {
    margin-bottom: 0
}

.app-view-search-entry-taglib .taglib-workflow-status {
    display: inline
}

.app-view-search-entry-taglib .taglib-workflow-status .workflow-status {
    padding-left: .2em
}

.app-view-search-entry-taglib .entry-description {
    margin-top: 20px
}

.app-view-search-entry-taglib .entry-discussion,
.app-view-search-entry-taglib .entry-attachment {
    border-top: 1px solid #CCC;
    display: block;
    margin: .5em 4em;
    overflow: hidden;
    padding-top: 5px
}

.app-view-search-entry-taglib .entry-discussion a,
.app-view-search-entry-taglib .entry-attachment a {
    display: block;
    overflow: hidden
}

.app-view-search-entry-taglib .entry-discussion .image,
.app-view-search-entry-taglib .entry-attachment .image {
    float: left;
    padding: 5px
}

.app-view-search-entry-taglib .entry-discussion .image img.avatar,
.app-view-search-entry-taglib .entry-discussion .image img.attachment,
.app-view-search-entry-taglib .entry-attachment .image img.avatar,
.app-view-search-entry-taglib .entry-attachment .image img.attachment {
    width: 45px
}

.app-view-search-entry-taglib .entry-discussion .title,
.app-view-search-entry-taglib .entry-attachment .title {
    display: block
}

.app-view-search-entry-taglib .entry-link .entry-thumbnail-image {
    border-width: 0;
    width: 128px
}

.app-view-search-entry-taglib:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

@media(max-width:979px) {
    .app-view-taglib .form-search {
        margin-top: 5px
    }
}

.app-view-taglib .lfr-header-row-content {
    position: relative
}

.app-view-taglib .lfr-header-row-content .display-style {
    float: right
}

.app-view-taglib .lfr-header-row-content .select-all-entries {
    left: 7px;
    position: absolute;
    top: 15px;
    z-index: 1
}

@media(max-width:979px) {
    .app-view-taglib .lfr-header-row-content .select-all-entries {
        top: 17px
    }
}

.navbar .nav-display-style-buttons {
    float: right;
    margin: 8px 0 8px 15px
}

@media(max-width:767px) {
    .navbar .nav-display-style-buttons {
        float: none;
        margin: 7.5px -15px
    }
}

@media(max-width:767px) {
    .navbar .nav-display-style-buttons .display-style-buttons>.dropdown>.dropdown-menu {
        border-width: 0;
        display: block;
        float: none;
        margin-top: 0;
        position: static;
        width: auto
    }

    .navbar .nav-display-style-buttons .display-style-buttons>.dropdown>.dropdown-toggle {
        display: none
    }
}

.taglib-asset-categories-summary .asset-category {
    margin-bottom: 3px;
    margin-right: 3px;
    padding-right: 5px
}

.taglib-asset-links {
    margin-top: .5em
}

.taglib-asset-links h2 {
    margin: 0 1em .2em 0
}

.taglib-asset-links .asset-links-list {
    list-style-type: none;
    margin-left: 1.2em
}

.taglib-asset-links .asset-links-list-item {
    margin-bottom: .4em
}

.taglib-asset-metadata {
    clear: both;
    overflow: hidden;
    padding: 10px
}

.taglib-asset-metadata span {
    display: inline-block
}

.taglib-asset-metadata .asset-metadata-panel {
    clear: both
}

.taglib-asset-metadata .metadata-author {
    overflow: hidden;
    padding: 10px
}

.taglib-asset-metadata .metadata-author .asset-avatar {
    float: left;
    padding-right: 10px
}

.taglib-asset-metadata .metadata-author .asset-avatar .avatar {
    width: 45px
}

.taglib-asset-metadata .metadata-author .asset-user-info {
    margin-top: 5px
}

.taglib-asset-metadata .metadata-author .asset-user-info .user-info {
    display: block
}

.taglib-asset-metadata .metadata-entry {
    margin-right: 2em
}

.taglib-asset-metadata .metadata-categories span {
    float: none
}

.taglib-calendar {
    width: 190px
}

.taglib-calendar table {
    border: 1px solid transparent;
    width: 100%
}

.taglib-calendar tr th,
.taglib-calendar tr td {
    border-bottom: 1px solid transparent;
    height: 25px;
    text-align: center
}

.taglib-calendar tr.portlet-section-header th,
.taglib-calendar tr td {
    border: 1px solid transparent;
    border-bottom-width: 0;
    border-top-width: 0;
    padding: 0;
    width: 26px
}

.taglib-calendar tr.portlet-section-header th.first,
.taglib-calendar tr td.first {
    border-left-width: 0
}

.taglib-calendar tr.portlet-section-header th.last,
.taglib-calendar tr td.last {
    border-right-width: 0
}

.taglib-calendar tr td a {
    display: block;
    height: 15px;
    padding: 5px 0
}

.taglib-calendar .has-events a span {
    padding-bottom: 5px
}

.taglib-captcha {
    margin: 1em 0
}

.taglib-captcha .captcha {
    display: inline-block;
    margin-bottom: 1em
}

.taglib-captcha .refresh {
    display: inline-block;
    vertical-align: top
}

.taglib-categorization-filter .asset-entry {
    border: 1px solid transparent
}

.contextual-sidebar {
    height: calc(100vh - 49px);
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 49px;
    transform: translateX(100%);
    transition: transform ease .5s;
    width: 320px;
    will-change: transform
}

.contextual-sidebar.contextual-sidebar-visible {
    pointer-events: auto;
    transform: translateX(0)
}

body.has-control-menu .contextual-sidebar {
    height: calc(100vh - 98px);
    top: 98px
}

@media only screen and (min-width:768px) {
    .contextual-sidebar {
        height: calc(100vh - 63px);
        top: 63px
    }

    body.has-control-menu .contextual-sidebar {
        height: calc(100vh - 128px);
        top: 128px
    }

    .contextual-sidebar-content {
        transition: padding-right ease .5s;
        will-change: padding-right
    }

    body.contextual-sidebar-visible .contextual-sidebar-content {
        padding-right: 320px
    }
}

.display-template .field-content {
    display: inline-block
}

.display-template .form-group-inline {
    vertical-align: middle
}

.taglib-diff-table {
    border-collapse: separate;
    border-spacing: 5pt;
    table-layout: fixed;
    width: 100%
}

.taglib-diff-table td {
    word-wrap: break-word
}

.taglib-diff-html span.diff-html-added img,
.taglib-diff-html span.diff-html-removed img {
    border: 2px solid transparent
}

.taglib-diff-html span.diff-html-changed img {
    border: 2px dotted transparent
}

.taglib-diff-html div.diff-added-image,
.taglib-diff-html div.diff-removed-image {
    height: 300px;
    margin: 2px;
    position: absolute;
    width: 200px
}

.diff-version-comparator .taglib-diff-html .diff-html-changed {
    border-bottom: 2px dotted transparent
}

.diff-version-comparator .taglib-diff-html .diff-added-image,
.diff-version-comparator .taglib-diff-html .diff-removed-image {
    display: none
}

.diff-version-comparator .taglib-diff-html img {
    max-width: 100%
}

.diff-version-comparator .diff-target-selector {
    border-left: 1px solid transparent;
    padding-left: 30px
}

.diff-version-comparator .diff-container-column .diff-container {
    min-height: 400px
}

.diff-version-comparator .diff-container-column .user-name {
    margin-right: 5px
}

.diff-version-comparator .diff-container-column .legend-item {
    margin-right: 15px
}

.diff-version-comparator .divider {
    margin-bottom: 20px
}

.diff-version-comparator .input-group-search {
    padding-bottom: 20px
}

.diff-version-comparator .version-item {
    cursor: pointer
}

.taglib-discussion .alloy-editor-placeholder {
    min-height: 90px
}

.taglib-discussion .alloy-editor-placeholder p {
    margin-bottom: 0
}

.taglib-discussion .add-comment .row {
    margin-top: 30px
}

.taglib-discussion .lfr-discussion .lfr-discussion-form-edit .alloy-editor-placeholder {
    border-left: 2px solid transparent
}

.taglib-discussion .lfr-discussion .lfr-discussion-form-edit .alloy-editor-placeholder p {
    margin-bottom: 10px
}

@media only screen and (min-width:768px) {
    .taglib-discussion .lfr-discussion-details {
        float: left
    }
}

@media only screen and (max-width:767px) {
    .taglib-discussion .lfr-discussion-body {
        margin-top: 15px
    }
}

@media only screen and (min-width:768px) {
    .taglib-discussion .lfr-discussion-body {
        margin-left: 65px
    }
}

.taglib-discussion .lfr-discussion-body .button-holder {
    margin-bottom: 0
}

.taglib-discussion .lfr-discussion-body .lfr-discussion-message .lfr-discussion-message-author {
    margin-bottom: 12px
}

.taglib-discussion .lfr-discussion-body .lfr-discussion-message .lfr-discussion-message-author .author-link {
    display: block
}

.taglib-discussion .taglib-ratings {
    display: inline-block;
    margin-right: 1em
}

.lfr-discussion-reply.popover {
    max-width: none
}

.lfr-discussion-reply.popover .lfr-discussion-reply-user-avatar {
    float: left;
    padding-right: 20px
}

.lfr-discussion-reply.popover .lfr-discussion-reply-content {
    margin-top: 5px
}

.lfr-discussion-controls .reply-action {
    line-height: 32px
}

@media only screen and (min-width:768px) {
    .lfr-discussion-body .lfr-discussion-controls {
        position: absolute;
        right: 0;
        top: 0;
        width: 45%
    }

    .lfr-discussion-body .lfr-discussion-controls>div {
        float: right;
        margin-right: 12px
    }

    .lfr-discussion-body .lfr-discussion-message .lfr-discussion-message-author {
        width: 40%
    }
}

.drop-zone {
    min-height: 80px;
    padding: 20px;
    text-align: center
}

.drop-zone.drop-enabled {
    outline: 2px dashed transparent
}

.drop-zone p {
    margin: 10px auto 0;
    max-width: 75%
}

.drop-here-info {
    font-size: 25px;
    height: 100%;
    left: 0;
    min-height: 100px;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 0;
    visibility: hidden;
    width: 100%
}

.drop-here-info .drop-here-indicator {
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    transform: translate(0, -50%);
    height: 115px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 50%
}

.drop-here-info .drop-icons {
    display: inline-block;
    position: relative;
    width: 160px
}

.drop-here-info .drop-icons span {
    position: absolute;
    text-align: center
}

.drop-here-info .drop-icons span:nth-of-type(1) {
    height: 60px;
    left: 0;
    line-height: 60px;
    opacity: 0;
    top: 10px;
    width: 60px
}

.drop-here-info .drop-icons span:nth-of-type(2) {
    height: 80px;
    left: 40px;
    line-height: 80px;
    width: 80px;
    z-index: 2
}

.drop-here-info .drop-icons span:nth-of-type(3) {
    display: block;
    font-size: 45px;
    height: 70px;
    left: 90px;
    line-height: 70px;
    opacity: 0;
    position: relative;
    top: 8px;
    width: 70px;
    z-index: 1
}

.drop-here-info .drop-text {
    display: block;
    font-size: 20px;
    margin-left: 0;
    margin-top: 20px
}

.drop-active .drop-here-info {
    opacity: 1;
    visibility: visible
}

.drop-active .drop-here-info .drop-icons span:nth-of-type(1),
.drop-active .drop-here-info .drop-icons span:nth-of-type(3) {
    opacity: 1
}

.taglib-empty-result-message.taglib-empty-result-message-compact {
    min-height: auto
}

.taglib-empty-result-message.taglib-empty-result-message-compact .taglib-empty-result-message-header {
    background: 0;
    padding-top: 0
}

.taglib-empty-result-message.taglib-empty-result-message-compact .taglib-empty-search-result-message-header {
    background: 0;
    padding-top: 0
}

.taglib-empty-result-message .taglib-empty-result-message-actions {
    margin-top: 16px
}

.taglib-empty-result-message .taglib-empty-result-message-description {
    margin-top: 8px
}

.taglib-empty-result-message .taglib-empty-result-message-header,
.taglib-empty-result-message .taglib-empty-result-message-header-has-plus-btn,
.taglib-empty-result-message .taglib-empty-search-result-message-header {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: auto;
    margin-right: auto
}

.taglib-empty-result-message .taglib-empty-result-message-header,
.taglib-empty-result-message .taglib-empty-result-message-header-has-plus-btn {
    max-width: 200px;
    padding-top: 250px
}

.taglib-empty-result-message .taglib-empty-result-message-header,
.taglib-empty-result-message .taglib-empty-result-message-header-has-plus-btn {
    background-image: url('~@/assets/images/empty_state.gif')
}

.taglib-empty-result-message .taglib-empty-result-message-title {
    margin-top: 40px
}

.taglib-empty-result-message .taglib-empty-search-result-message-header {
    background-image: url('~@/assets/images/search_state.gif');
    max-width: 210px;
    padding-top: 232px
}

.taglib-empty-result-message .taglib-empty-state {
    background-image: url('~@/assets/images/empty_state.gif');
    margin: auto;
    max-width: 250px;
    padding-top: 250px
}

.taglib-empty-result-message .taglib-success-state {
    background-image: url('~@/assets/images/success_state.gif');
    margin: auto;
    max-width: 250px;
    padding-top: 250px
}

.taglib-empty-result-message .taglib-search-state {
    background-image: url('~@/assets/images/search_state.gif');
    margin: auto;
    max-width: 250px;
    padding-top: 250px
}

.field-wrapper.form-inline .control-label {
    display: inline-block
}

.field-wrapper-html {
    position: relative
}

.field-wrapper-html .input-localized .input-group-item {
    flex-wrap: nowrap
}

.taglib-flags {
    display: inline-block;
    line-height: 32px
}

.taglib-flags span a {
    margin-right: 2px
}

.taglib-form-navigator .error-notice,
.taglib-form-navigator .modified-notice {
    display: none
}

.taglib-form-navigator>.form-steps {
    position: relative
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group {
    border-width: 0;
    clear: both;
    float: none;
    overflow: visible;
    padding: 0;
    width: 100%
}

@media(max-width:979px) {
    .taglib-form-navigator>.form-steps>ul.form-navigator.list-group {
        overflow: auto;
        white-space: nowrap
    }
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab {
    border-width: 0;
    display: inline-block;
    overflow: visible;
    position: relative;
    text-align: center;
    white-space: nowrap;
    z-index: 50
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active:last-child .tab-label .tab-icon {
    display: none
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label {
    position: relative
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label .message {
    display: inline-block
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label .tab-icon {
    display: inline-block
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label {
    border-width: 0;
    display: block;
    margin: 0 5px 0 -5px;
    padding: 0
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .error-notice {
    display: none
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .number {
    clear: both;
    display: inline-block;
    margin: 5px;
    width: 30px
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .message {
    margin-left: -5px
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .modified-notice {
    display: none;
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .tab-icon {
    display: none
}

.taglib-form-navigator>.form-steps>ul.form-navigator.multi-step-progress-bar {
    display: block;
    padding-top: 10px
}

.taglib-form-navigator>.form-steps>ul.form-navigator.multi-step-progress-bar .tab-label {
    outline-width: 0
}

.taglib-form-navigator .form-navigator-content {
    overflow: visible
}

.taglib-form-navigator .form-navigator-content .form-section {
    display: none
}

.taglib-form-navigator .form-navigator-content .form-section.active {
    display: block
}

.taglib-form-navigator .form-navigator-content .form-section textarea {
    max-width: 100%
}

.taglib-form-navigator .form-navigator-content legend {
    overflow: auto;
    padding-bottom: 2px
}

.taglib-form-navigator .section-modified .modified-notice {
    display: inline-block
}

.taglib-form-navigator .section-error .error-notice {
    display: inline-block;
    margin-right: 5px
}

.taglib-header {
    border-bottom: 1px solid transparent;
    margin-bottom: 1em;
    padding-bottom: 10px
}

.taglib-header .header-title {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    margin: .1em;
    vertical-align: middle
}

.taglib-header .header-back-to {
    display: inline-block;
    vertical-align: middle
}

.taglib-header .header-back-to a {
    display: block;
    padding: 0 .3em 0 0
}

.taglib-icon-list li {
    float: left;
    margin-right: 1em
}

.taglib-icon-list:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.lfr-icon-menu .lfr-icon-menu-icon {
    max-width: none
}

.lfr-menu-list-overflow {
    overflow: auto;
    overflow-x: hidden
}

.lfr-menu-list {
    float: none;
    overflow-y: auto;
    position: relative
}

.lfr-menu-list.direction-left,
.lfr-menu-list.direction-right {
    margin: 0 2px
}

.lfr-menu-list.dropdown-menu {
    float: none;
    position: relative
}

@media(max-width:979px) {
    .lfr-menu-list.dropdown-menu>li>a {
        font-size: 22px;
        line-height: 40px;
        white-space: normal
    }

    .lfr-menu-list.dropdown-menu>li>a img {
        margin-bottom: 3px
    }
}

.lfr-menu-list.dropdown-menu .search-panel {
    margin-bottom: 0
}

.lfr-menu-list.dropdown-menu .search-panel .form-group {
    margin: 0 16px
}

.lfr-menu-list.dropdown-menu .search-panel .menu-item-filter {
    width: auto
}

@media(max-width:767px) {
    .table-cell.last .lfr-icon-menu .dropdown-toggle {
        text-align: center
    }

    .table-cell.last .lfr-icon-menu .dropdown-toggle>img,
    .table-cell.last .lfr-icon-menu .dropdown-toggle .lfr-icon-menu-text {
        display: none
    }
}

.lfr-icon-menu-open:after {
    clear: both;
    content: '';
    display: table
}

.lfr-icon-menu-open .dropdown-menu {
    position: static
}

.taglib-image-selector {
    height: 100%;
    min-height: 100px;
    padding: 0;
    position: relative;
    text-align: center
}

.taglib-image-selector.drop-enabled .drop-here-info .drop-here-indicator {
    height: 90px
}

.taglib-image-selector.drop-enabled .drop-here-info .drop-text {
    display: inline-block;
    margin-left: 20px;
    margin-top: 0
}

.taglib-image-selector .glyphicon-ok {
    left: 50%;
    padding: 20px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.taglib-image-selector .progress-wrapper {
    display: none;
    left: 50%;
    max-width: 450px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 50%
}

.taglib-image-selector .progress-wrapper button {
    margin-top: 20px
}

.taglib-image-selector .progress-wrapper p {
    font-size: 18px;
    margin: 0;
    text-align: left
}

.taglib-image-selector .progress-wrapper p.size {
    font-size: 14px
}

.taglib-image-selector .progress-wrapper .progressbar {
    height: 6px;
    margin: 5px auto;
    width: 100%
}

.taglib-image-selector.drop-active .change-image-controls {
    display: none
}

.taglib-image-selector.drop-active .progress-wrapper {
    display: none
}

.taglib-image-selector.draggable-image.vertical .current-image {
    left: 0 !important;
    max-height: inherit;
    min-width: 100%
}

.taglib-image-selector.draggable-image.horizontal .current-image {
    max-width: inherit
}

.taglib-image-selector.draggable-image.both .current-image {
    max-height: 100%;
    max-width: 100%
}

.taglib-image-selector.draggable-image.drop-enabled .image-wrapper {
    height: 0
}

.taglib-image-selector.draggable-image .image-wrapper {
    height: 400px;
    overflow: hidden;
    width: 100%
}

@media(max-width:767px) {
    .taglib-image-selector.draggable-image .image-wrapper {
        height: 150px
    }
}

.taglib-image-selector.progress-active .change-image-controls {
    display: none
}

.taglib-image-selector.progress-active .progress-wrapper {
    display: block
}

.taglib-image-selector .browse-image-controls,
.taglib-image-selector .current-image {
    margin: auto;
    max-height: 100%;
    max-width: 100%
}

.taglib-image-selector .browse-image-controls {
    padding: 10px;
    width: 100%;
    z-index: 1
}

.taglib-image-selector .browse-image-controls .drag-drop-label,
.taglib-image-selector .browse-image-controls .browse-image {
    font-size: 16px
}

.taglib-image-selector .browse-image-controls .drag-drop-label {
    line-height: 35px
}

.taglib-image-selector .browse-image-controls .file-validation-info {
    margin-top: 15px
}

.taglib-image-selector .change-image-controls {
    bottom: 10px;
    padding: 10px;
    position: absolute;
    right: 10px
}

.taglib-image-selector .current-image {
    margin-bottom: 5px
}

.taglib-image-selector .error-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2
}

.taglib-image-selector .yui3-uploader-content {
    display: none
}

.info-bar-container {
    background-color: #FFF;
    border-bottom: 1px solid #edf0f2;
    min-height: 47px
}

.info-bar-container .info-bar {
    padding: 0
}

@media only screen and (min-width:768px) {
    .info-bar-container {
        min-height: 59px
    }
}

.info-bar-container .info-bar-default .taglib-workflow-status .workflow-version {
    color: #6b6c7e
}

.info-bar-container .info-bar-default .btn {
    margin: 7px 0 7px 15px
}

@media only screen and (min-width:768px) {
    .info-bar-container .info-bar-default .btn {
        margin: 13px 0 13px 15px
    }
}

.info-bar-container .info-bar-center {
    left: 50%;
    margin-top: 16px;
    position: absolute;
    text-align: center;
    transform: translate(-50%);
    width: 100%
}

@media only screen and (min-width:768px) {
    .info-bar-container .info-bar-center {
        margin-top: 20px
    }
}

.info-bar-container.affix {
    min-height: 35px;
    transition: min-height .15s ease
}

.info-bar-container.affix .info-bar-center {
    margin-top: 5px
}

.lfr-input-date.form-group {
    margin-bottom: 0
}

.input-localized .input-group-item {
    flex-direction: column
}

.input-localized .input-localized-content {
    margin-left: 6px
}

.input-localized.input-localized-editor .form-control {
    border-width: 0;
    height: 100%;
    padding: 0
}

.input-localized.input-localized-editor .input-localized-content {
    margin-top: 0
}

.input-localized.input-localized-editor .language-value {
    margin-bottom: 7px
}

.input-localized .lfr-input-localized-default a {
    margin-right: 14px
}

.input-localized .lfr-input-localized-state {
    height: 4px;
    margin: 3px 5px;
    width: 4px
}

.input-localized.input-localized-focused .palette-item-selected .lfr-input-localized-state {
    height: 6px;
    width: 6px
}

.input-localized .palette-item-inner {
    display: block;
    height: 16px;
    width: 16px
}

.input-localized-palette-container .palette-items-container {
    font-size: 0;
    margin: 0;
    white-space: normal
}

.input-localized-palette-container .palette-item {
    border-width: 0;
    padding: .5rem 1.25rem
}

.input-localized-palette-container .palette-item-inner {
    border: 1px solid;
    margin-right: 4px;
    width: 16px
}

.input-localized-palette-container .palette-item-inner img {
    display: block
}

.input-group .input-localized .input-localized-content {
    margin-top: 3px
}

.taglib-move-boxes {
    margin-bottom: 1em
}

.taglib-move-boxes label {
    border-bottom: 1px solid transparent;
    display: block;
    margin-bottom: 5px;
    padding: 5px
}

.taglib-move-boxes .toolbar {
    text-align: center
}

.taglib-move-boxes .arrow-button img {
    border-width: 0;
    height: 16px;
    width: 16px
}

.taglib-move-boxes .choice-selector {
    width: 100%
}

.taglib-move-boxes .field-content {
    margin-bottom: 0
}

.taglib-move-boxes .move-arrow-buttons {
    margin-top: 5em
}

.taglib-move-boxes .move-arrow-buttons .arrow-button {
    display: block
}

.taglib-move-boxes .sortable-container {
    margin-top: 10px
}

.taglib-move-boxes .sortable-container .btn.edit-selection {
    margin-bottom: 10px
}

.taglib-move-boxes .sortable-container .move-option {
    border-top: 1px solid #DDD;
    display: none;
    margin: 2px 0;
    padding: 2px;
    position: relative
}

.taglib-move-boxes .sortable-container .move-option.selected {
    display: block
}

.taglib-move-boxes .sortable-container .move-option .checkbox,
.taglib-move-boxes .sortable-container .move-option .handle {
    position: absolute
}

.taglib-move-boxes .sortable-container .move-option .checkbox {
    display: none;
    margin: 7px 0 0 5px
}

.taglib-move-boxes .sortable-container .move-option .handle {
    cursor: pointer;
    font-size: 1.5em;
    padding: 6px
}

.taglib-move-boxes .sortable-container .move-option .title {
    font-size: 1.2em;
    margin: 1px 0 1px 30px
}

.taglib-move-boxes .sortable-container.edit-list-active .move-option {
    display: block
}

.taglib-move-boxes .sortable-container.edit-list-active .move-option .checkbox {
    display: inline-block
}

.taglib-move-boxes .sortable-container.edit-list-active .move-option .handle {
    display: none
}

.mobile .taglib-move-boxes .selector-container {
    display: none
}

.taglib-input-repeat .end-date-field {
    clear: both;
    padding-left: 1em
}

.taglib-input-repeat .weekdays {
    clear: both;
    padding-top: 1em
}

.taglib-input-search .input-group-btn {
    vertical-align: top
}

.lfr-input-time.form-group {
    margin-bottom: 0
}

.portlet-image-uploader .button-holder {
    margin-bottom: 5px
}

.portlet-image-uploader .button-holder>.form-group {
    margin-bottom: 0
}

.portlet-image-uploader .lfr-portrait-editor .dialog-footer {
    z-index: 11
}

.portlet-image-uploader .lfr-portrait-preview {
    overflow: auto;
    padding: 5px
}

.portlet-image-uploader .main-content-card {
    margin-top: 2px
}

.taglib-logo-selector .avatar {
    max-width: 100%
}

.info-panel .sidenav-close {
    float: right;
    margin-left: 12px;
    margin-right: 9px;
    margin-top: 25px
}

.management-bar-container {
    position: relative
}

.management-bar-container .dropdown-backdrop {
    position: relative
}

.management-bar-container .management-bar {
    padding: 0
}

.management-bar-container .management-bar>.container-fluid-1280>.management-bar-header-right {
    margin-left: -15px
}

.management-bar-container .management-bar .form-group {
    margin-bottom: 0
}

.management-bar-container .management-bar .input-select-wrapper {
    margin-top: 10px
}

.management-bar-container .management-bar .input-select-wrapper select {
    border-bottom-width: 0
}

.management-bar-container .management-bar-header>.checkbox {
    padding-left: 0
}

.management-bar-secondary-bar {
    left: 0;
    min-height: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    visibility: hidden
}

.secondary-bar-open .management-bar:first-child {
    position: absolute;
    visibility: hidden
}

.secondary-bar-open .management-bar-secondary-bar {
    position: relative;
    visibility: visible
}

.lfr-map {
    border: 1px solid transparent;
    min-height: 400px;
    width: 100%
}

.lfr-map .home-button {
    height: 35px;
    margin: 5px;
    width: 45px
}

.lfr-map .search-controls {
    margin-top: 5px;
    width: 100%
}

.lfr-map .search-controls .search-input {
    width: 100%
}

@media only screen and (min-width:768px) {
    .lfr-map .home-button {
        height: auto;
        width: auto;
    }

    .lfr-map .search-controls {
        width: 50%;
    }
}

.navbar .navbar-collapse {
    max-height: none;
}

.navbar .navbar-collapse:after,
.navbar .navbar-collapse:before {
    display: inline !important;
}

.navbar .navbar-search {
    border-top-width: 0;
    width: 100%
}

@media(min-width:768px) {
    .navbar .navbar-search {
        border-top-width: 1px;
        width: auto
    }
}

.navbar .navbar-search .form-search {
    margin: 9px 0
}

@media(min-width:768px) {
    .navbar .navbar-search .form-search {
        float: right;
        margin: 8px 0;
        max-width: 275px
    }
}

.navbar .navbar-search .form-search .input-group {
    width: 100%
}

@media(min-width:768px) {
    .navbar .navbar-search .form-search .input-group {
        width: auto
    }
}

@media(max-width:979px) {

    .navbar .container .navbar-btn,
    .navbar .container-fluid .navbar-btn,
    .navbar .container-fluid-1280 .navbar-btn {
        margin-bottom: 5px;
        width: 45px
    }

    .navbar .container .navbar-btn>.icon-bar:first-child,
    .navbar .container-fluid .navbar-btn>.icon-bar:first-child,
    .navbar .container-fluid-1280 .navbar-btn>.icon-bar:first-child {
        margin-top: 6px
    }

    .navbar .container .navbar-btn>.icon-bar:last-child,
    .navbar .container-fluid .navbar-btn>.icon-bar:last-child,
    .navbar .container-fluid-1280 .navbar-btn>.icon-bar:last-child {
        margin-bottom: 5px
    }

    .navbar .container .navbar-collapse.open,
    .navbar .container-fluid .navbar-collapse.open,
    .navbar .container-fluid-1280 .navbar-collapse.open {
        border-width: 0;
        display: block;
        height: auto;
        overflow: visible;
    }
}

@media(max-width:767px) {
    .alert-notifications.alert-notifications-fixed {
        top: inherit
    }

    .alert-notifications.alert-notifications-fixed .alert {
        max-width: none
    }
}

.lfr-notification-container {
    bottom: 1.25rem;
    left: 1.25rem;
    max-height: 100%;
    max-width: 400px;
    overflow: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    position: fixed;
    width: 100%;
    z-index: 5000
}

.lfr-notification-container .lfr-notification-wrapper {
    margin-bottom: 5px;
    overflow: hidden;
    overflow-wrap: break-word;
    word-wrap: break-word
}

.taglib-portlet-preview.show-borders {
    border: 1px solid transparent;
    margin-bottom: 1em;
    padding: 3px 3px 1em
}

.taglib-portlet-preview.show-borders .title {
    padding: .5em
}

.taglib-portlet-preview .preview {
    margin: 1em;
    min-height: 90px
}

.taglib-ratings.stars .liferay-rating-score {
    padding-left: 15px
}

.taglib-ratings.stars .liferay-rating-vote,
.taglib-ratings.stars .liferay-rating-score {
    display: inline-block
}

.taglib-ratings.like .rating-element *,
.taglib-ratings.thumbs .rating-element * {
    pointer-events: none
}

.taglib-ratings .rating-input-container {
    display: none
}

.taglib-ratings .rating-input-container .rating-input {
    margin-left: 1px
}

.taglib-rss-settings .rss-settings-options {
    margin-left: 2em
}

.lfr-search-container .entry-action {
    width: 1px
}

.lfr-search-container .entry-action .taglib-icon {
    white-space: nowrap
}

.user-info {
    overflow: hidden
}

.user-info.row,
.user-info .row {
    margin-left: 0
}

.user-info .user-avatar {
    display: inline-block;
    overflow: hidden
}

.user-info .user-avatar .avatar {
    min-height: 40px;
    width: 40px
}

.user-info .user-details {
    display: inline-block;
    padding-left: 5px
}

.user-info .user-details .date-info {
    font-size: 11px;
    min-height: 0
}

.user-info .user-details .line {
    padding-bottom: 12px
}

.user-info .user-details .user-name {
    font-size: 14px;
    min-height: 0
}

.user-status-tooltip .user-status-avatar {
    float: left;
    margin-right: 5px
}

.user-status-tooltip .user-status-avatar .user-status-avatar-image {
    width: 27px
}

.user-status-tooltip .user-status-info {
    display: inline-block;
    overflow: hidden
}

.user-status-tooltip .user-status-info .user-status-date {
    font-size: 11px
}

.lfr-search-container {
    margin-top: 1.5em;
    overflow: auto
}

@media(max-width:767px) {
    .lfr-search-container .selector-button {
        width: auto
    }
}

.lfr-search-container .table .text-bottom {
    vertical-align: bottom
}

.lfr-search-container .table .text-middle {
    vertical-align: middle
}

.lfr-search-container .table .text-top {
    vertical-align: top
}

.touch .lfr-search-container {
    -moz-overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    -o-overflow-scrolling: touch;
    -ms-overflow-scrolling: touch;
    overflow-scrolling: touch
}

.touch .lfr-search-container .searchcontainer-content .table {
    max-width: none
}

.taglib-search-iterator-page-iterator-top {
    margin-bottom: 15px
}

.taglib-page-iterator {
    clear: both;
    height: auto;
    overflow: hidden;
    width: auto
}

.taglib-page-iterator .lfr-pagination-buttons {
    float: right;
    margin: 0
}

@media(max-width:979px) {
    .taglib-page-iterator .lfr-pagination-buttons {
        width: 100%
    }
}

@media(max-width:979px) and (max-width:767px) {
    .taglib-page-iterator .lfr-pagination-buttons {
        float: none;
        margin-top: 20px
    }
}

@media(max-width:979px) {
    .taglib-page-iterator .lfr-pagination-buttons>li {
        display: inline-block;
        float: left;
        width: 50%
    }

    .taglib-page-iterator .lfr-pagination-buttons>li.first,
    .taglib-page-iterator .lfr-pagination-buttons>li.last {
        display: none
    }

    .taglib-page-iterator .lfr-pagination-buttons>li>a {
        line-height: 20px;
        padding: 11px 19px
    }
}

.taglib-page-iterator .lfr-pagination-config {
    float: left;
    line-height: 46px
}

@media(max-width:767px) {
    .taglib-page-iterator .lfr-pagination-config {
        float: none
    }

    .taglib-page-iterator .lfr-pagination-config .current-page-menu {
        display: block
    }

    .taglib-page-iterator .lfr-pagination-config .current-page-menu .btn {
        display: block
    }
}

.taglib-page-iterator .lfr-pagination-config .lfr-pagination-delta-selector,
.taglib-page-iterator .lfr-pagination-config .lfr-pagination-page-selector {
    display: inline
}

.taglib-page-iterator .lfr-pagination-config .lfr-pagination-delta-selector {
    float: none
}

@media(max-width:979px) {
    .taglib-page-iterator .lfr-pagination-config .lfr-pagination-delta-selector {
        display: none
    }
}

.taglib-page-iterator .search-results {
    float: left;
    line-height: 46px;
    margin-left: 10px
}

@media(max-width:979px) {
    .taglib-page-iterator .search-results {
        display: none
    }
}

.display-style-icon .lfr-asset-folder,
.display-style-icon .lfr-asset-item {
    float: left;
    padding-left: 15px;
    padding-right: 15px
}

@media only screen and (min-width:992px) {

    .display-style-icon .lfr-asset-folder,
    .display-style-icon .lfr-asset-item {
        width: 33.33333%
    }
}

.display-style-icon .lfr-asset-folder {
    width: 100%
}

@media only screen and (min-width:480px) {
    .display-style-icon .lfr-asset-folder {
        width: 50%
    }
}

@media only screen and (min-width:1200px) {
    .display-style-icon .lfr-asset-folder {
        width: 25%
    }
}

.display-style-icon .lfr-asset-item {
    width: 50%
}

@media only screen and (min-width:768px) {
    .display-style-icon .lfr-asset-item {
        width: 25%
    }
}

@media only screen and (min-width:1200px) {
    .display-style-icon .lfr-asset-item {
        width: 20%
    }
}

.lfr-asset-item {
    min-width: 145px
}

.lfr-asset-folder {
    min-width: 215px
}

.taglib-search-toggle .form-search {
    position: relative
}

.taglib-search-toggle .form-search .input-group-btn {
    position: absolute
}

@media(min-width:980px) {
    .taglib-search-toggle .form-search .input-group-btn {
        position: static
    }
}

.taglib-search-toggle .toggle-advanced {
    margin-left: 10px;
    position: absolute;
    top: 8px
}

.taglib-search-toggle-advanced-wrapper .taglib-search-toggle-advanced {
    border: solid transparent;
    border-width: 0 1px 1px;
    margin-top: 0;
    padding: 15px 15px 0
}

.taglib-search-toggle-advanced-wrapper .toggler-content-wrapper {
    clear: both
}

.taglib-search-toggle-advanced-wrapper .btn.close {
    position: relative;
    z-index: 1
}

.navbar-search .taglib-search-toggle-advanced-wrapper .taglib-search-toggle-advanced {
    border-width: 1px 0 0
}

.navbar-search .taglib-search-toggle-advanced-wrapper .toggler-content-wrapper {
    padding: 0;
    width: auto
}

.sites-directory-taglib {
    overflow: hidden
}

.sites-directory-taglib .app-view-entry-taglib.entry-display-style.display-icon {
    height: 100%;
    width: 140px
}

.sites-directory-taglib .app-view-entry-taglib.entry-display-style .entry-thumbnail {
    max-width: 100px
}

.sites-directory-taglib .app-view-entry-taglib.entry-display-style .entry-thumbnail img {
    max-width: 90px
}

.taglib-social-activities table {
    width: 100%
}

.taglib-social-activities td {
    padding: 5px;
    vertical-align: top
}

.taglib-social-activities .day-separator {
    border-bottom: 1px dotted transparent;
    margin-bottom: 0;
    margin-top: 10px;
    padding-bottom: 2px
}

.taglib-social-activities .portlet-icon {
    width: 16px
}

.taglib-social-bookmarks .horizontal .taglib-social-bookmark,
.taglib-social-bookmarks .simple .taglib-social-bookmark {
    display: inline-block;
    vertical-align: top
}

.taglib-social-bookmarks .horizontal .taglib-social-bookmark img,
.taglib-social-bookmarks .simple .taglib-social-bookmark img {
    vertical-align: baseline
}

.taglib-social-bookmarks a.social-bookmark-link {
    padding-left: 20px
}

.taglib-asset-tags-summary .tag {
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    margin-bottom: 3px;
    margin-right: 3px;
    padding: 2px 5px 2px 0
}

.alert-trash-form {
    display: inline-block
}

.trash-undo-button.btn-link {
    font-weight: 600;
    margin-left: .5rem;
    padding: 0;
    vertical-align: inherit
}

.trash-undo-button.btn-link:hover {
    text-decoration: none
}

.trash-undo-button.btn-link:focus {
    background-color: transparent
}

.taglib-trash-empty .trash-empty-button,
.taglib-trash-empty .trash-undo-button,
.taglib-trash-undo .trash-empty-button,
.taglib-trash-undo .trash-undo-button {
    display: inline
}

.taglib-trash-empty .trash-empty-link,
.taglib-trash-empty .trash-undo-link,
.taglib-trash-undo .trash-empty-link,
.taglib-trash-undo .trash-undo-link {
    display: none
}

.js .taglib-trash-empty .trash-empty-button,
.js .taglib-trash-empty .trash-undo-button,
.js .taglib-trash-undo .trash-empty-button,
.js .taglib-trash-undo .trash-undo-button {
    display: none
}

.js .taglib-trash-empty .trash-empty-link,
.js .taglib-trash-empty .trash-undo-link,
.js .taglib-trash-undo .trash-empty-link,
.js .taglib-trash-undo .trash-undo-link {
    display: inline-block
}

.taglib-user-display {
    padding: .5em
}

.taglib-user-display.display-style-1 .user-profile-image {
    float: left;
    margin-right: 24px
}

.taglib-user-display.display-style-1 .user-name {
    display: inline-block;
    margin-top: 10px
}

.taglib-user-display.display-style-1 .user-details {
    margin-top: 0
}

.taglib-user-display.display-style-2 .user-profile-image,
.taglib-user-display.display-style-2 .user-name {
    clear: both;
    display: block;
    min-height: 20px;
    text-align: center
}

.taglib-user-display.display-style-3 {
    padding: 0
}

.taglib-user-display.display-style-3 .user-profile-image {
    display: inline-block;
    vertical-align: middle
}

.taglib-user-display .avatar {
    display: block;
    height: 60px;
    margin: 0 auto;
    width: 60px
}

.taglib-user-display .avatar.author:after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 100%;
    width: 100%
}

.taglib-user-display .user-details {
    margin-top: 1em
}

.card-row-layout-fixed .lfr-card-actions-column {
    width: 32px
}

.card-row-layout-fixed .lfr-card-actions-column .dropdown {
    margin-left: 8px;
    margin-right: 0
}

.lfr-card-actions-column .dropdown {
    margin-right: -8px;
    margin-top: -5px
}

.lfr-card-modified-by-text,
.lfr-card-subtitle-text,
.lfr-card-workflow-text {
    font-size: 14px;
    font-weight: 400
}

.lfr-card-title-text {
    font-size: 14px;
    font-weight: 600
}

.taglib-vertical-card .icon-vertical-card-container,
.taglib-vertical-card .vertical-card-container {
    background-color: #f1f5fa
}

.taglib-vertical-card .icon-vertical-card-image .lexicon-icon {
    height: 80px;
    opacity: .2;
    width: 80px
}

.taglib-vertical-card .icon-vertical-card-image,
.taglib-vertical-card .user-vertical-card-initials {
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.taglib-vertical-card .user-vertical-card-initials {
    font-family: inherit
}

.taglib-vertical-card-footer {
    min-height: 5.6em
}

.js .taglib-webdav .show-webdav {
    display: block
}

.js .taglib-webdav table {
    border: 1px solid transparent;
    border-left-width: 0;
    border-right-width: 0;
    display: none
}

.js .taglib-webdav.visible table {
    display: block
}

.taglib-webdav table:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden
}

.taglib-workflow-status .workflow-id,
.taglib-workflow-status .workflow-version {
    margin-right: 12px
}

.table-cell .taglib-workflow-status {
    margin: 0
}

.table-cell .taglib-workflow-status .workflow-status {
    padding-left: 0
}

img.label-icon {
    border-width: 0;
    float: left
}

img.icon {
    border-width: 0;
    float: absmiddle
}

label.hidden-label {
    clip: rect(0 0 0 0);
    position: absolute
}

td.stretch {
    width: 99%
}

.nobr {
    white-space: nowrap
}

.cke_toolbar.cke_toolbar__a11yhelpbtn {
    float: right
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_toolgroup,
.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_toolgroup:hover {
    border-width: 0;
    margin-bottom: 0;
    margin-top: 5px
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button .cke_button_icon {
    display: none
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button .cke_button__a11ybtn_label {
    display: inline
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button .cke_button__a11ybtn_label:after {
    border: 1px solid transparent;
    content: 'Alt+0';
    margin-left: 5px;
    padding: 3px
}

.mac .cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button .cke_button__a11ybtn_label:after {
    content: 'Option+0'
}

/* end main 4 */
/* combo */
.portlet-asset-publisher .asset-abstract {
    overflow: auto
}

@media only screen and (min-width:768px) {
    .portlet-asset-publisher .asset-actions {
        position: absolute;
        right: 10px;
        z-index: 1
    }
}

.portlet-asset-publisher .asset-full-content img {
    max-width: 100%
}

.portlet-asset-publisher .timeline-item:first-child .timeline-icon {
    background-color: #869cad
}

.portlet-asset-publisher .timeline-item:first-child:before {
    top: 30px
}

.portlet-asset-publisher .timeline-item:first-child .lfr-autorow-controls {
    display: none
}

.portlet-asset-publisher .timeline-item:hover>.container-trash>.btn {
    opacity: 1
}

.portlet-asset-publisher .timeline-item .form-group {
    display: inline-block;
    margin: 8px;
    vertical-align: middle;
    width: auto
}

.portlet-asset-publisher .timeline-item .form-group:first-child {
    margin-left: 0
}

.portlet-asset-publisher .timeline-item .container-trash {
    cursor: pointer;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 0
}

.portlet-asset-publisher .timeline-item .container-trash:hover {
    color: #65b6f0
}

.portlet-asset-publisher .timeline-item .container-trash>.btn {
    opacity: 0
}

.portlet-asset-publisher .timeline-item .container-trash>.btn:focus {
    opacity: 1
}

.portlet-asset-publisher .timeline-item .categoriesselector-content .textboxlistentry-holder,
.portlet-asset-publisher .timeline-item .tagselector-content .textboxlistentry-holder {
    padding: 0 0 4px
}

.portlet-asset-publisher .timeline-item .categoriesselector-content .textboxlistentry-holder>.textboxlistentry,
.portlet-asset-publisher .timeline-item .tagselector-content .textboxlistentry-holder>.textboxlistentry {
    margin: 4px 5px
}

.portlet-asset-publisher .timeline-item .categoriesselector-content {
    position: relative
}

.portlet-asset-publisher .timeline-item .categoriesselector-content .textboxlistentry-holder {
    border-bottom: 2px solid #869cad;
    margin-bottom: 10px;
    min-height: 2.5em
}

.portlet-asset-publisher .timeline-item .categoriesselector-content .btn-toolbar-content {
    background-color: #FFF;
    bottom: -6px;
    padding: 15px 5px;
    position: absolute;
    right: 0
}

.portlet-asset-publisher .timeline-item .categoriesselector-content li:not(.textboxlist-input-container),
.portlet-asset-publisher .timeline-item .tagselector-content li:not(.textboxlist-input-container) {
    background-color: #e7f1f9;
    border: 0;
    color: #65b6f0
}

.portlet-asset-publisher .timeline-item .categoriesselector-content li:not(.textboxlist-input-container) .textboxlistentry-remove,
.portlet-asset-publisher .timeline-item .tagselector-content li:not(.textboxlist-input-container) .textboxlistentry-remove {
    color: #65b6f0
}

.portlet-asset-publisher .timeline-item .categoriesselector-content .textboxlist-input-container,
.portlet-asset-publisher .timeline-item .tagselector-content .textboxlist-input-container {
    height: 32px;
    line-height: 32px
}

.portlet-asset-publisher .timeline-item .categoriesselector-content .textboxlist-input-container .field-input-text,
.portlet-asset-publisher .timeline-item .tagselector-content .textboxlist-input-container .field-input-text {
    margin: 0;
    padding: 0
}

.portlet-asset-publisher .timeline-item .timeline-increment {
    z-index: 0
}

.portlet-asset-publisher .addbutton-timeline-item {
    position: relative
}

.portlet-asset-publisher .timeline-increment-icon.add-condition:before {
    background-color: #869cad;
    bottom: 37px;
    content: '';
    display: block;
    left: 20px;
    position: absolute;
    top: -10px;
    width: 2px
}

.portlet-asset-publisher .timeline-increment-icon.add-condition .form-builder-timeline-add-item {
    border-radius: 100%;
    color: #FFF;
    margin-left: 3px;
    margin-top: -55px;
    padding: 0
}

.search-bar .form-group.input-group-item {
    margin-bottom: 0
}

.search-bar-keywords-input-wrapper {
    min-width: 6.25rem
}

.search-bar-search-select-wrapper {
    max-width: 9.375rem
}

.product-menu .sidebar-header {
    line-height: 32px;
    padding-bottom: 8px;
    padding-right: 9px;
    padding-top: 8px
}

@media only screen and (min-width:768px) {
    .product-menu .sidebar-header {
        padding-bottom: 12px;
        padding-left: 24px;
        padding-top: 12px
    }
}

.product-menu .sidebar-header .sidenav-close {
    float: right;
    margin-right: -2px
}

.product-menu .sidebar-header-logo {
    margin-right: 10px
}

.product-menu .sidebar-body {
    bottom: 0;
    left: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 55px
}

@media only screen and (min-width:768px) {
    .product-menu .sidebar-body {
        top: 64px
    }
}

@media only screen and (max-width:320px) {
    .product-menu .sidebar-body {
        overflow: visible;
        position: static
    }
}

.product-menu .sidebar-body .panel-group {
    border-radius: 0
}

.product-menu .user-icon {
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    width: 32px
}

.product-menu .lfr-product-menu-sidebar .panel-group {
    overflow: hidden
}

.product-menu small {
    display: block
}

.product-menu .collapse-icon:before {
    right: 5px;
    top: auto;
}

.product-menu .list-group>.collapse>.list-group-item>.tabular-list-group,
.product-menu .list-group>.collapsing>.list-group-item>.tabular-list-group {
    margin-bottom: -10px;
    margin-top: -10px
}

.product-menu .list-group-heading h1,
.product-menu .list-group-heading h2,
.product-menu .list-group-heading h3,
.product-menu .list-group-heading h4,
.product-menu .list-group-heading h5,
.product-menu .list-group-heading h6 {
    margin-bottom: 0;
    margin-top: 0
}

.product-menu .list-group-item {
    border-top-width: 0;
    padding: 10px 20px
}

.product-menu .lfr-icon-menu .btn-default {
    border-width: 0;
    height: 32px;
    line-height: 32px;
    padding: 0;
    width: 32px;
}

.product-menu .collapse-icon .panel-notifications-count {
    display: none;
}

.product-menu .collapse-icon.collapsed .panel-notifications-count {
    display: inline-block;
    font-weight: bold;
    min-width: 32px;
    padding: 0 5px;
    position: absolute;
    right: 46px;
    text-align: center;
    width: auto;
}

.product-menu .nav-equal-height-heading .collapse-icon:after,
.product-menu .nav-equal-height-heading .collapse-icon.collapsed:after {
    content: '';
    display: block;
    height: 12px;
    left: -6px;
    position: absolute;
    right: auto;
    top: 14px;
    width: 9px
}

.product-menu .nav-equal-height-heading .collapse-icon:before {
    left: -8px;
    right: auto;
    z-index: 1
}

.product-menu .nav-nested-margins>li .nav>li .nav>li {
    margin-bottom: 1px
}

.product-menu.popover {
    background-color: #FFF
}

.product-menu .impersonation-message {
    font-size: 12px
}

.product-menu .manage-sites-link {
    padding: 1em
}

.product-menu .site-selector {
    box-shadow: none
}

.product-menu .site-selector .selectable-site {
    color: #333;
    height: auto
}

.product-menu .site-selector .list-group-item-content,
.product-menu .site-selector .list-group-item-field {
    vertical-align: middle
}

.product-menu .site-selector .site-link {
    color: #333
}

.product-menu .site-selector .site-link.selected-site {
    color: #999
}

.product-menu .site-selector .site-logo-container {
    padding: 2em
}

.product-menu .staging-links {
    font-size: 12px;
    margin: 10px 22px 4px 16px
}

.product-menu li.tree-node .tree-node-content.lfr-root-node {
    display: none
}

.product-menu .layout-tree-options {
    position: absolute;
    right: 0;
    top: 4px
}

.product-menu .tree-node-content .layout-tree-options {
    opacity: 0
}

.product-menu .tree-node-content .layout-tree-options:focus {
    opacity: 1
}

.product-menu .tree-node-content .layout-tree-options[data-deleteable="false"][data-parentable="false"][data-updateable="false"] {
    display: none
}

.product-menu .tree-node-content.tree-node-selected .tree-label>.layout-tree-options,
.product-menu .tree-node-content:active .tree-label>.layout-tree-options,
.product-menu .tree-node-content.active .tree-label>.layout-tree-options,
.product-menu .tree-node-content:hover .tree-label>.layout-tree-options {
    opacity: 1
}

.product-menu .tree-node-content .layout-tree:focus~.layout-tree-options,
.product-menu .tree-node-content .layout-tree-options:hover {
    opacity: 1
}

.product-menu .tree-node-content .layout-tree-add[data-parentable="false"],
.product-menu .tree-node-content .layout-tree-delete[data-deleteable="false"],
.product-menu .tree-node-content .layout-tree-edit[data-updateable="false"] {
    display: none
}

.product-menu .layout-set-tabs {
    display: table;
    font-size: 1em;
    padding: 0 0 2em 0;
    width: 100%
}

.product-menu .layout-set-tabs .layout-set-tab {
    display: table-cell;
    margin-right: 10px;
    padding-bottom: 4px;
    position: relative
}

.product-menu .layout-set-tabs .layout-set-tab .layout-set-link {
    display: inline-block;
    max-width: 87px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    padding-top: 8px
}

.product-menu .layout-set-tabs .layout-set-tab .layout-set-link:hover {
    text-decoration: none
}

.product-menu .layout-set-tabs .layout-set-tab:not(.selected-layout-set) {
    margin-right: 0;
    padding-left: 10px;
    width: 97px
}

.product-menu .layout-set-tabs .layout-set-tab:not(.selected-layout-set):first-child {
    padding-left: 0
}

.product-menu .layout-set-tabs .selected-layout-set {
    border-bottom: 1px solid
}

.product-menu .layout-set-tabs .selected-layout-set .layout-set-link {
    max-width: 108px
}

.toast-animation {
    display: inline-block;
    height: 20px;
    margin: 10px 4px 0 4px;
    position: relative;
    width: 20px
}

.toast-animation .pm {
    border-left: 1px solid #FFF;
    border-radius: 1px;
    height: 16px;
    left: 0;
    position: absolute;
    top: 0;
    -webkit-transition: all .6s cubic-bezier(0.165, 0.84, 0.44, 1);
    -moz-transition: all .6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all .6s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition-delay: .2s;
    -moz-transition-delay: .2s;
    transition-delay: .2s
}

.toast-animation .cn {
    border: 1px solid #FFF;
    border-radius: 1px;
    content: '';
    height: 18px;
    position: absolute;
    right: 0;
    top: -1px;
    -webkit-transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    -moz-transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition-delay: .2s;
    -moz-transition-delay: .2s;
    transition-delay: .2s;
    width: 15px
}

body.open .toast-animation .pm {
    border-left-width: 6px;
    height: 18px;
    left: 4px;
    top: -1px
}

body.open .toast-animation .cn {
    border-left-width: 9px;
    width: 19px
}

/* end combo */

/* main 3 */
/*1588014724000*/

.loading-animation,
.loadingmask-message .loadingmask-message-content {
    animation: loading-animation 1.7s infinite ease;
    border-radius: 50%;
    clear: both;
    font-size: 64px;
    height: 1em;
    margin: 1em auto;
    overflow: hidden;
    position: relative;
    transform: translateZ(0);
    width: 1em
}

.loadingmask-content {
    background: #CCC
}

.loadingmask-message {
    background: rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    border-width: 0;
    font-size: 64px;
    left: 50% !important;
    padding: .7em;
    position: absolute;
    top: 50% !important;
    transform: translate(-50%, -50%)
}

.loadingmask-message .loadingmask-message-content {
    background: transparent;
    border-width: 0;
    color: transparent;
    height: 1em;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 1em
}

.overlaymask-hidden .loadingmask-message {
    display: none
}

@keyframes loading-animation {
    0% {
        box-shadow: 0 -0.83em 0 -0.4em #07f, 0 -0.83em 0 -0.42em #008cff, 0 -0.83em 0 -0.44em #00a2ff, 0 -0.83em 0 -0.46em #00b7ff, 0 -0.83em 0 -0.477em #0CF;
        transform: rotate(0)
    }

    2%,
    96% {
        box-shadow: 0 -0.83em 0 -0.4em #07f, 0 -0.83em 0 -0.42em #008cff, 0 -0.83em 0 -0.44em #00a2ff, 0 -0.83em 0 -0.46em #00b7ff, 0 -0.83em 0 -0.477em #0CF
    }

    10% {
        box-shadow: 0 -0.83em 0 -0.4em #07f, -0.087em -0.825em 0 -0.42em #008cff, -0.173em -0.812em 0 -0.44em #00a2ff, -0.256em -0.789em 0 -0.46em #00b7ff, -0.338em -0.758em 0 -0.477em #0CF
    }

    25% {
        box-shadow: 0 -0.83em 0 -0.4em #07f, -0.338em -0.758em 0 -0.42em #008cff, -0.555em -0.617em 0 -0.44em #00a2ff, -0.671em -0.488em 0 -0.46em #00b7ff, -0.719em -0.415em 0 -0.477em #0CF
    }

    40% {
        box-shadow: 0 -0.83em 0 -0.4em #00f7ff, -0.377em -0.74em 0 -0.42em #00fff2, -0.645em -0.522em 0 -0.44em #0fd, -0.775em -0.297em 0 -0.46em #00ffc8, -0.82em -0.13em 0 -0.477em #00ffb3
    }

    60% {
        box-shadow: 0 -0.83em 0 -0.4em #07f, -0.087em -0.825em 0 -0.42em #008cff, -0.173em -0.812em 0 -0.44em #00a2ff, -0.256em -0.789em 0 -0.46em #00b7ff, -0.297em -0.775em 0 -0.477em #0CF
    }

    100% {
        box-shadow: 0 -0.83em 0 -0.4em #07f, 0 -0.83em 0 -0.42em #008cff, 0 -0.83em 0 -0.44em #00a2ff, 0 -0.83em 0 -0.46em #00b7ff, 0 -0.83em 0 -0.477em #0CF;
        transform: rotate(360deg)
    }
}

.logo {
    display: inline-block;
    line-height: 1;
    vertical-align: middle
}

.portal-iframe #main-content {
    width: 100%
}

.separator {
    border-top: 1px dotted #bfbfbf
}

.entry-status {
    border-left: 4px solid transparent
}

span.alert {
    display: inline-block
}

.update-available {
    margin-top: 10px;
    padding: 2px;
    text-align: left
}

.quick-access-nav {
    position: absolute;
    top: -1000px;
    width: 100%;
    z-index: 1000
}

.quick-access-nav a {
    background: #333;
    background: rgba(51, 51, 51, 0.9);
    border: 1px solid #FFF;
    left: 0;
    outline: 0;
    padding: 8px;
    position: absolute;
    right: 0;
    text-align: center
}

.quick-access-nav a:focus {
    color: #FFF;
    top: 1000px
}

@media only screen and (max-width:991px) {
    .responsive-table-horizontal {
        display: block;
        position: relative;
        width: 100%
    }

    .responsive-table-horizontal:after {
        clear: both;
        content: '';
        display: block;
        font-size: 0;
        height: 0;
        visibility: hidden
    }

    .responsive-table-horizontal tbody {
        display: block;
        overflow-x: auto;
        position: relative;
        white-space: nowrap;
        width: auto
    }

    .responsive-table-horizontal tbody tr {
        display: inline-block;
        vertical-align: top
    }

    .responsive-table-horizontal tbody tr td {
        display: block;
        margin-bottom: 20px
    }

    .responsive-table-horizontal tbody tr td:first-child {
        text-align: left
    }

    .responsive-table-horizontal thead {
        display: block;
        float: left;
        margin-right: 10px
    }

    .responsive-table-horizontal thead:after {
        clear: both;
        content: "";
        display: block;
        font-size: 0;
        height: 0;
        visibility: hidden
    }

    .responsive-table-horizontal thead th {
        display: block;
        margin-bottom: 20px;
        text-align: right
    }

    .responsive-table-horizontal thead th:first-child {
        text-align: right
    }

    .ie9 .responsive-table-horizontal thead {
        float: none
    }
}

.important {
    font-weight: bold
}

.highlight {
    background: #FFC;
    font-weight: bold;
    margin: 0 1px
}

.hide-accessible {
    clip: rect(0 0 0 0) !important;
    position: absolute !important;
    -webkit-transform: scale(0);
    -webkit-transform-origin-x: 0;
    -webkit-transform-origin-y: 0;
    *position: fixed !important;
    _position: absolute !important
}

.force-offset {
    display: block !important;
    position: absolute !important;
    visibility: hidden !important
}

.unselectable,
.unselectable * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_toolgroup,
.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_toolgroup:hover {
    background: transparent
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button:hover {
    background: transparent
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button .cke_button_label:after {
    border-color: #a6a6a6;
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace
}

.lfr-add-panel .add-content-menu .add-portlet-message {
    background-color: #1b2228;
    margin: 20px;
    padding: 5px 20px
}

.lfr-add-panel .add-content-menu .add-portlet-message .info-message {
    margin: 20px 0
}

.lfr-add-panel .add-content-menu .add-application-panel .lfr-content-item {
    height: 40px;
    padding: 0 16px
}

.lfr-add-panel .add-content-menu .add-application-panel .lfr-content-item.lfr-archived-setup {
    padding-left: 30px
}

.lfr-add-panel .add-content-menu .search-bar {
    margin: 10px
}

.lfr-add-panel .add-content-menu .input-group-btn {
    right: 20px
}

.lfr-add-panel .add-content-menu .display-style-bar {
    margin: 10px
}

.lfr-add-panel .add-content-menu .display-style-bar .display-style {
    padding: 5px
}

.lfr-add-panel .add-content-menu .display-style-bar .display-style.active {
    color: #869cad
}

.lfr-asset-category-container .no-matches {
    color: #999
}

.lfr-asset-category-search-container {
    background-color: #d3dadd;
    border-bottom-color: #aeb8bc
}

.lfr-asset-category-list a.selected {
    background-color: #EEE
}

.lfr-categories-selector-search-results-path {
    color: #575757;
    font-size: .9em;
    text-align: right;
    width: 25%
}

.lfr-asset-column-actions-content {
    background-color: #d7f1ff
}

.lfr-asset-column-actions .lfr-asset-column-actions-content {
    border-color: #88c5d9
}

.lfr-asset-column-details .lfr-asset-categories {
    color: #7d7d7d
}

.lfr-asset-column-details .lfr-asset-categories .lfr-asset-category {
    color: #555
}

.lfr-asset-column-details .lfr-asset-description {
    color: #444;
    font-style: italic;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -o-hyphens: auto;
    hyphens: auto
}

.lfr-asset-column-details .lfr-asset-icon {
    border-right-color: #999;
    color: #999
}

.lfr-asset-column-details .lfr-asset-tags {
    color: #7d7d7d
}

.lfr-asset-column-details .lfr-asset-tags .tag {
    color: #555
}

.lfr-asset-panels .lfr-panel.lfr-extended,
.lfr-asset-column-details .lfr-panel.lfr-extended {
    border-color: #CCC
}

.lfr-form-row {
    border-bottom-color: #CCC
}

.lfr-form-row:hover {
    background-color: #dffccb;
    border-color: #b2ff3a
}

.lfr-form-row .handle-sort-vertical {
    background: url('~@/assets/images/handle_sort_vertical.png') no-repeat 0 50%
}

.lfr-edit-layout-panel .taglib-form-navigator .button-holder {
    background-color: #FFF
}

.definition-of-terms dt {
    color: #333;
    font-weight: normal;
    width: 100%;
    word-break: break-word
}

@media only screen and (min-width:768px) {
    .definition-of-terms dt {
        width: auto
    }
}

.lfr-code {
    background: #FFF;
    border-color: #777;
    font-family: monospace
}

.lfr-code tr td.line-numbers {
    background: #fafafa
}

.lfr-code tr td.line-numbers:before {
    color: #AAA;
    text-shadow: 1px 1px #FFF
}

.popup-alert-notice .countdown-timer {
    font-size: 1.1em;
    font-weight: bold
}

.lfr-token {
    background-color: #b3daef;
    border-color: #5fa8ff;
    color: #444;
    text-decoration: none
}

.lfr-token:hover {
    background-color: #d1e5ef
}

.lfr-token-primary {
    font-weight: bold
}

.lfr-token-primary,
.lfr-token-primary:hover {
    background-color: #b3daef
}

.lfr-token-close:hover {
    text-decoration: none
}

.lfr-button {
    background: no-repeat 0 50%
}

.lfr-table>tbody>tr>th,
.lfr-table>thead>tr>th,
.lfr-table>tfoot>tr>th {
    font-weight: bold
}

.lfr-checkbox-preselected,
.lfr-configurator-visibility {
    opacity: .5
}

.lfr-header-row {
    border-bottom-color: #7b7b7b
}

.lfr-header-row .lfr-search-combobox {
    border-color: #5f5f5f
}

.openid-login input[type="text"] {
    background: url('~@/assets/images/openid.gif') no-repeat;
    background-color: #FFF;
    background-position: 0 50%;
    color: #000
}

.page-extra-settings .lfr-panel-titlebar .lfr-panel-title {
    font-size: 1em
}

.lfr-pagination .lfr-pagination-controls li .lfr-pagination-link {
    color: #333;
    font-weight: normal
}

.lfr-panel.lfr-extended,
.lfr-panel-container,
.lfr-floating-container {
    border-color: #dedede #bfbfbf #bfbfbf #dedede
}

.lfr-panel-container,
.lfr-floating-container {
    background: #FFF
}

.lfr-panel-titlebar .lfr-panel-title {
    font-size: 1.2em;
    font-weight: bold
}

.lfr-panel-titlebar .lfr-panel-button {
    background: url('~@/assets/images/panel_header_toggler_close.png') no-repeat 0 0
}

.lfr-panel-titlebar .lfr-panel-button:hover {
    background-position: 0 100%
}

.lfr-panel.lfr-collapsible .lfr-panel-titlebar {
    background: url('~@/assets/images/05_down.png') no-repeat 2px 50%
}

.lfr-panel.lfr-collapsed .lfr-panel-titlebar {
    background-image: url('~@/assets/images/05_right.png')
}

.lfr-panel.lfr-collapsed .lfr-panel-titlebar .lfr-panel-button {
    background-image: url('~@/assets/images/panel_header_toggler_open.png')
}

.lfr-panel.lfr-extended .lfr-panel-titlebar {
    background: #d6d6d6 url('~@/assets/images/panel_header.png') repeat-x 0 0;
    border-bottom-color: #cdcdcd
}

.lfr-panel-container .lfr-extended.lfr-collapsible .lfr-panel-titlebar {
    border-top-color: #cecece
}

.js .lfr-floating-trigger {
    background-image: url('~@/assets/images/05_down.png');
    background-position: 100% 50%;
    background-repeat: no-repeat;
    text-decoration: none
}

.lfr-panel-page .panel-page-content {
    border-left-color: #CCC
}

.lfr-panel-page .lfr-add-content h2 {
    border-color: #CCC
}

.lfr-panel-page .lfr-add-content h2 span {
    background: #efefef
}

.lfr-panel-page .lfr-add-content .lfr-content-category h2 {
    border-bottom-color: #CCC
}

.lfr-panel-page .lfr-add-content .lfr-content-category h2 span {
    background: 0
}

.lfr-panel-content .paginator-container {
    background: #cfd2d5;
    border-bottom-color: #dcdee0;
    border-top-color: #dcdee0
}

.lfr-panel-content .paginator-page-container .paginator-page-link {
    background: 0;
    border-color: #cfd2d5
}

.lfr-panel-content .paginator-page-container .paginator-page-link.paginator-current-page {
    background: #99a7b3 url('~@/assets/images/current_page_hover_bg.png') repeat-x 0 0;
    border-color: #6b7785 #7c8994 #919fa9;
    color: #FFF;
    font-weight: bold
}

.lfr-panel-content .paginator-page-container .paginator-page-link.paginator-current-page:hover {
    background: #5094d7 url('~@/assets/images/current_page_bg.png') repeat-x 0 0;
    border-color: #31659c #396ea8 #4c8ccb
}

#portlet-set-properties fieldset fieldset legend {
    font-size: 1.1em
}

.lfr-preview-file-content {
    border-bottom-color: #6d6d6e
}

.lfr-preview-file-image-current-column,
.lfr-preview-file-video-current-column {
    background: url('~@/assets/images/checkerboard.png')
}

.lfr-preview-file-toolbar {
    background: #333;
    opacity: .5
}

.lfr-preview-file-toolbar .icon-arrow-1-l {
    background: url('~@/assets/images/preview_left.png') no-repeat 0 50%
}

.lfr-preview-file-toolbar .icon-arrow-1-r {
    background: url('~@/assets/images/preview_right.png') no-repeat 0 50%
}

.lfr-preview-file-toolbar .icon-zoomin {
    background: url('~@/assets/images/preview_zoom.png') no-repeat 0 50%
}

.lfr-preview-file-image-current-column:hover .lfr-preview-file-toolbar {
    opacity: 1
}

.lfr-preview-file-info {
    background: #333;
    color: #FFF;
    opacity: .5
}

.lfr-preview-file-info:hover {
    opacity: 1
}

.lfr-preview-file-index {
    font-weight: bold
}

.lfr-preview-file-image-current {
    background: url('~@/assets/images/loading_indicator.gif') no-repeat 50% 50%
}

.lfr-preview-file-image img {
    background: url('~@/assets/images/loading_indicator.gif') no-repeat 50% 50%;
    border-color: #aeb8bc
}

.lfr-preview-file-image-selected img,
.lfr-preview-file-image:hover img {
    border-color: #00a2ea
}

.lfr-preview-file-loading-indicator {
    background: #333;
    color: #FFF
}

.lfr-preview-file-image-overlay-content {
    background: url('~@/assets/images/checkerboard.png');
    border-color: #555
}

.firefox .lfr-preview-video-content div.video-node {
    height: 100%
}

textarea.lfr-editor-textarea {
    font-family: monospace
}

.lfr-rich-editor.ace_editor {
    border-color: #a1a2a4
}

.lfr-plain-editor textarea,
.lfr-rich-editor.ace_editor {
    font-family: 'Monaco', 'Menlo', 'Droid Sans Mono', 'Courier New', monospace;
    font-size: 12px
}

.lfr-spa-loading-bar {
    background: #2fa4f5
}

.lfr-tag-selector-popup label {
    border-bottom-color: #EEE
}

.lfr-tag-selector-popup .no-matches {
    color: #999
}

.lfr-toolbar {
    background-color: #e5e4e8
}

.lfr-toolbar .lfr-button:focus {
    border-color: #000
}

.lfr-toolbar .lfr-button:hover {
    border-color: #CCC #777 #777
}

.lfr-toolbar .lfr-separator {
    border-left-color: #FFF;
    border-right-color: #CCC;
    font-size: 12px
}

.lfr-toolbar .lfr-button,
.lfr-emoticon-container .lfr-button {
    border-color: #e5e4e8
}

.lfr-emoticon-container {
    background: #e5e4e8;
    border-color: #CCC
}

.lfr-translation-manager .lfr-translation-manager-available-translations .lfr-translation-manager-available-translations-links {
    line-height: 1
}

.lfr-translation-manager .lfr-translation-manager-translation {
    text-decoration: none
}

.lfr-translation-manager .lfr-translation-manager-translation:hover {
    background-color: #d1e5ef
}

.lfr-translation-manager .lfr-translation-manager-translation.lfr-translation-manager-translation-editing {
    background-color: #598bec;
    border-color: #224fa8;
    color: #FFF
}

.lfr-tree a {
    text-decoration: none
}

.tree-drag-helper {
    z-index: 1035
}

.lfr-upload-container .upload-target {
    border-color: #DDD
}

.lfr-upload-container .upload-target h4 span {
    text-transform: lowercase
}

.lfr-upload-container .upload-target .drop-file-text {
    font-weight: normal
}

.lfr-upload-container a.browse-button {
    background-image: url('~@/assets/images/add.png');
    background-repeat: no-repeat;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none
}

.lfr-upload-container a.clear-uploads {
    background-image: url('~@/assets/images/remove.png');
    background-repeat: no-repeat
}

.lfr-upload-container a.cancel-uploads {
    background-image: url('~@/assets/images/close.png');
    background-repeat: no-repeat
}

.lfr-upload-container .upload-list-info h4 {
    font-size: 1.3em
}

.lfr-upload-container .cancel-button {
    color: #869cad
}

.lfr-upload-container .delete-button {
    color: #869cad
}

.lfr-upload-container .file-added .success-message {
    font-weight: normal
}

.lfr-upload-container .upload-error {
    opacity: 1
}

.lfr-upload-container .multiple-files .upload-error {
    background: #FDD url('~@/assets/images/error.png') no-repeat 5px 5px;
    border-color: #900;
    color: #900;
    font-weight: normal
}

.lfr-upload-container .upload-complete .error-message,
.lfr-upload-container .upload-complete .success-message {
    font-weight: bold
}

.lfr-upload-container .file-uploading {
    background-color: #FFC
}

.lfr-upload-container .progress-bar {
    background: #FFF;
    margin-top: 25px;
    text-align: left;
    width: 100%
}

.lfr-upload-container .progress {
    background: #8db2e3
}

.upload-drop-active .lfr-upload-container .upload-target {
    background-color: #ddedde;
    border-color: #7D7;
    border-style: dashed
}

.app-view-entry:hover .entry-thumbnail {
    border-color: #7abfdd
}

.app-view-entry.selected .entry-thumbnail {
    border-color: #057cb0
}

.app-view-entry.selected .entry-metadata dt,
.app-view-entry.selected .entry-metadata dd,
.app-view-entry.selected .entry-metadata .entry-categories,
.app-view-entry.selected .entry-metadata .entry-tags,
.app-view-entry.selected .entry-metadata .entry-description {
    color: #f0f0f0
}

.app-view-entry .entry-title {
    font-weight: bold
}

.app-view-entry .entry-link {
    text-decoration: none
}

.app-view-entry .entry-metadata dt,
.app-view-entry .entry-metadata dd,
.app-view-entry .entry-metadata .entry-categories,
.app-view-entry .entry-metadata .entry-tags,
.app-view-entry .entry-metadata .entry-description {
    color: #333;
    word-wrap: break-word
}

.app-view-entry .entry-metadata .entry-categories .taglib-asset-categories-summary {
    font-weight: bold
}

.app-view-entry .entry-metadata .entry-categories .taglib-asset-categories-summary .asset-category {
    font-weight: normal
}

.app-view-entry.selected,
.app-view-entry.selected:hover {
    background-color: #00a2ea
}

.app-view-entry.selected a,
.app-view-entry.selected a:focus,
.app-view-entry.selected a:hover {
    color: #FFF
}

.app-view-entry.selected a .lfr-icon-menu-arrow {
    color: #333
}

.app-view-entry.active-area,
.app-view-entry.active-area.hover,
.app-view-entry.active-area td {
    background-color: #5ad300
}

.app-view-entry:hover,
.app-view-entry.hover {
    background-color: #d3e8f1
}

.app-view-entry a.entry-link:hover {
    text-decoration: none
}

.app-view-entry a.entry-link:hover .entry-metadata .entry-title .entry-title-text {
    text-decoration: underline
}

.app-view-entry-taglib.entry-display-style.display-icon .entry-title {
    font-weight: normal
}

.app-view-search-entry-taglib .entry-discussion a,
.app-view-search-entry-taglib .entry-attachment a {
    text-decoration: none
}

.app-view-search-entry-taglib .entry-discussion:hover,
.app-view-search-entry-taglib .entry-attachment:hover {
    background-color: #d3e8f1
}

.app-view-search-entry-taglib .entry-folder {
    color: #999
}

.app-view-search-entry-taglib .entry-link .entry-thumbnail-image {
    color: #000;
    text-decoration: none
}

.app-view-search-entry-taglib.alt {
    background-color: #edf0f3
}

.app-view-search-entry-taglib.search {
    background-color: #FFF
}

.app-view-search-entry-taglib.search.alt {
    background-color: #e2e5e8
}

.app-view-taglib .display-style .icon {
    background-image: url('~@/assets/images/layouts.png');
    background-repeat: no-repeat
}

.app-view-taglib .icon-display-descriptive {
    background-position: -32px 0
}

.app-view-taglib .icon-display-icon {
    background-position: -16px 0
}

.app-view-taglib .icon-display-list {
    background-position: 0 0
}

.app-view-taglib .state-active .icon-display-descriptive {
    background-position: -32px 100%
}

.app-view-taglib .state-active .icon-display-icon {
    background-position: -16px 100%
}

@media only screen and (max-width:767px) {
    .navbar .nav-display-style-buttons .display-style-buttons>.dropdown>.dropdown-menu {
        background-color: transparent;
        box-shadow: none
    }
}

.navbar .nav-display-style-buttons .display-style-buttons-container .dropdown-toggle .caret {
    border-bottom-color: #333;
    border-top-color: #333
}

.taglib-asset-links {
    border-radius: 4px
}

.taglib-asset-links h2 {
    color: #999;
    font-size: 1em
}

.taglib-asset-metadata .metadata-entry-label {
    font-weight: normal
}

.taglib-asset-metadata .metadata-author {
    font-weight: bold
}

.taglib-asset-metadata .metadata-entry {
    color: #999
}

.taglib-asset-metadata .metadata-author .asset-user-info .user-info {
    color: #009ae5;
    font-size: 14px;
    line-height: 14px
}

.taglib-asset-metadata .metadata-author .asset-user-info .date-info {
    color: #8c8c8c;
    font-size: 13px
}

.taglib-calendar table {
    border-color: #999
}

.taglib-calendar tr th,
.taglib-calendar tr td {
    border-bottom-color: #999
}

.taglib-calendar tr.portlet-section-header th,
.taglib-calendar tr td {
    border-color: #999
}

.taglib-calendar a:hover,
.taglib-calendar a:focus {
    background-color: #CCC
}

.taglib-calendar .calendar-inactive {
    color: #999
}

.taglib-calendar .has-events a span {
    background: url('~@/assets/images/event_indicator.png') no-repeat 50% 95%
}

.taglib-calendar .has-events.calendar-current-day a span {
    background-image: url('~@/assets/images/event_indicator_current.png')
}

.taglib-categorization-filter.entry-title {
    color: #333;
    font-size: 1em;
    line-height: inherit
}

.taglib-categorization-filter .asset-entry {
    background-color: #dee7f8;
    border-color: #cad8f3
}

.taglib-categorization-filter .asset-entry:hover a {
    text-decoration: none
}

.taglib-categorization-filter .asset-entry:hover a .icon-remove {
    background-color: #cad8f3
}

.taglib-diff-addedline,
#taglib-diff-results ins {
    background: #e6ffe6
}

.taglib-diff-context {
    background: #EEE
}

.taglib-diff-deletedline,
#taglib-diff-results del {
    background: #ffe6e6
}

.taglib-diff-html div.diff-removed-image {
    background: #fdc6c6 url('~@/assets/images/minus.png')
}

.taglib-diff-html div.diff-added-image {
    background: #CFC url('~@/assets/images/plus.png') no-repeat
}

.taglib-diff-html div.diff-removed-image,
.taglib-diff-html div.diff-added-image {
    opacity: .55
}

.taglib-diff-html span.diff-html-added {
    background-color: #CFC;
    font-size: 1em
}

.taglib-diff-html span.diff-html-added img {
    border-color: #CFC
}

.taglib-diff-html span.diff-html-changed {
    background: url('~@/assets/images/underline.png') bottom repeat-x
}

.taglib-diff-html span.diff-html-changed img {
    border-color: #009
}

.taglib-diff-html span.diff-html-removed {
    background-color: #fdc6c6;
    font-size: 1em;
    text-decoration: line-through
}

.taglib-diff-html span.diff-html-removed img {
    border-color: #fdc6c6
}

.diff-version-comparator .taglib-diff-html .diff-html-changed {
    background-image: none;
    border-bottom-color: #009ae5
}

.diff-version-comparator .taglib-diff-html .diff-html-changed img {
    border-color: #009ae5
}

.diff-version-comparator .diff-version-head {
    border-bottom-color: #e5e5e5
}

.diff-version-comparator .diff-version-head .diff-selector-version {
    font-size: inherit
}

.diff-version-comparator .diff-version-head .diff-selector-version a {
    text-decoration: none
}

.diff-version-comparator .diff-version-head .diff-selector-version a .lfr-icon-menu-text:hover,
.diff-version-comparator .diff-version-head .diff-selector-version a .lfr-icon-menu-text:focus {
    text-decoration: underline
}

.diff-version-comparator .diff-version-head .diff-selector-version .caret {
    border-top-color: #FFF
}

.diff-version-comparator .diff-version-head .diff-target-selector {
    border-left-color: #e5e5e5
}

.diff-version-comparator .diff-version-head .diff-source-selector,
.diff-version-comparator .diff-version-head .diff-target-selector {
    font-size: 20px;
    font-weight: 200
}

.diff-version-comparator .diff-version-head .diff-source-selector .diff-selector-version-info,
.diff-version-comparator .diff-version-head .diff-target-selector .diff-selector-version-info {
    color: #8c8c8c;
    font-size: 12px
}

.diff-version-comparator .search-container-column .language-selector .form-group select {
    font-size: 13px
}

.diff-version-comparator .search-container-column .search-panels .search-panels-bar .form-group .search-panels-input {
    border-radius: 0
}

.diff-version-comparator .search-container-column .search-panels .search-panels-bar .search-panel-icon {
    background: url('~@/assets/images/search_panel_icon.png') no-repeat 0 50%;
    color: #d4d4d4;
    font-size: 0
}

.diff-version-comparator .search-container-column .search-panels .search-panels-bar input {
    font-size: 14px
}

.diff-version-comparator .search-container-column .version-item {
    border-bottom-color: #e5e5e5
}

.diff-version-comparator .search-container-column .version-item.selected {
    background-color: #f0f0f0
}

.diff-version-comparator .search-container-column .version-item.selected .version-title {
    color: #555
}

.diff-version-comparator .search-container-column .version-item.selected .version-info .user-info,
.diff-version-comparator .search-container-column .version-item.selected .version-info .date-info {
    color: #555
}

.diff-version-comparator .search-container-column .version-item .version-title {
    color: #009ae5;
    font-weight: 400
}

.diff-version-comparator .search-container-column .version-item .version-info .user-info {
    color: #009ae5;
    font-size: 13px;
    line-height: 13px
}

.diff-version-comparator .search-container-column .version-item .version-info .date-info {
    color: #8c8c8c;
    font-size: 10px
}

.diff-version-comparator .diff-container-column {
    background-color: #f1f1f1;
    border-color: #ebebeb
}

.diff-version-comparator .diff-container-column .diff-container {
    background-color: #FFF;
    border-color: #e5e5e5
}

.diff-version-comparator .diff-container-column .legend-info {
    background-color: #FFF;
    border-color: #e5e5e5
}

.diff-version-comparator .diff-container-column .legend-info .add.icon-stop {
    color: #CFC
}

.diff-version-comparator .diff-container-column .legend-info .delete.icon-stop {
    color: #fdc6c6
}

.diff-version-comparator .diff-container-column .legend-info .legend-item.diff-html-changed {
    border-bottom-color: #009ae5
}

.diff-version-comparator .diff-container-column .diff-version-filter {
    background-color: #f9f9f9;
    border-color: #e5e5e5
}

.diff-version-comparator .diff-container-column .diff-version-filter .close-version-filter {
    color: #CCC
}

.diff-version-comparator .diff-container-column .diff-version-filter .display-date {
    color: #8c8c8c;
    font-size: 10px
}

.diff-version-comparator .diff-container-column .diff-version-filter .user-name {
    color: #009ae5;
    font-size: 13px
}

.diff-version-comparator .diff-container-column .diff-version-filter .version {
    color: #555;
    font-weight: 400
}

.diff-version-comparator .diff-version-title {
    color: #8c8c8c;
    font-size: 12px
}

.taglib-discussion .lfr-discussion .lfr-discussion-form-edit .alloy-editor-placeholder {
    border-left-color: #dbdde1
}

@media only screen and (min-width:768px) {
    .taglib-discussion .lfr-discussion-details .taglib-user-display {
        word-wrap: break-word
    }
}

.taglib-discussion .lfr-discussion-details .taglib-user-display .user-details .user-name {
    font-weight: bold;
    text-decoration: none
}

.taglib-discussion .lfr-discussion-details .taglib-user-display .user-details .user-name:hover {
    text-decoration: underline
}

.taglib-discussion .lfr-discussion-details .taglib-user-display .user-profile-image .avatar {
    background-size: 50px
}

.taglib-discussion .lfr-discussion-actions li a,
.taglib-discussion .lfr-discussion-actions li a span {
    text-decoration: none
}

.taglib-discussion .lfr-discussion-actions li a:hover span,
.taglib-discussion .lfr-discussion-actions li a:focus span {
    text-decoration: underline
}

.taglib-discussion .lfr-discussion-form-container .lfr-discussion-form {
    background: #DDD;
    border-radius: 4px
}

.taglib-discussion .lfr-discussion-form-container .lfr-discussion-form .taglib-user-display .user-profile-image .avatar {
    background-size: 40px
}

.lfr-discussion-reply.popover .lfr-discussion-reply-user-name {
    font-weight: bold
}

.drop-zone.drop-enabled:not(.no-border) {
    outline-color: rgba(176, 180, 187, 0.5)
}

.drop-here-info .drop-icons span:nth-of-type(1),
.drop-here-info .drop-icons span:nth-of-type(3) {
    background: #e8e6e8;
    color: #a5a6ac
}

.drop-here-info .drop-icons span:nth-of-type(2) {
    background: #00c2ff;
    color: #FFF
}

.drop-here-info .drop-text {
    color: #FFF
}

.drop-active .drop-here-info {
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100
}

.lfr-ddm-field-group {
    margin-bottom: 20px
}

.lfr-ddm-field-group-inline {
    display: inline-block;
    vertical-align: bottom
}

.taglib-flags .icon-flag {
    color: #999
}

.taglib-flags .flag-enable:hover .icon-flag {
    color: #C00
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group {
    background: transparent
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active {
    background: transparent;
    opacity: 1
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label:hover,
.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label:focus {
    background: transparent
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label .message {
    color: #000;
    opacity: .7
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label .number {
    background: #333;
    font-size: 18px;
    opacity: 1
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab.active .tab-label .tab-icon {
    color: #333
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label {
    background: transparent;
    outline: 0
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label:hover,
.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label:focus {
    text-decoration: none
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label:hover .number,
.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label:focus .number {
    opacity: 1
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .number {
    background: #CCC;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    opacity: .6;
    text-decoration: none
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .message {
    color: #000;
    font-size: 12px
}

.taglib-header {
    border-bottom-color: #c8c9ca;
    color: #555
}

.taglib-header .header-back-to a {
    font-weight: bold;
    text-decoration: none
}

a.taglib-icon,
a.taglib-icon:focus,
a.taglib-icon:hover {
    text-decoration: none
}

a.taglib-icon:focus .taglib-text,
a.taglib-icon:hover .taglib-text {
    text-decoration: underline
}

a.taglib-icon.btn:focus .taglib-text,
a.taglib-icon.btn:hover .taglib-text {
    text-decoration: none
}

.taglib-image-selector .change-image-controls {
    background: #FFF
}

.taglib-image-selector .glyphicon-ok {
    background: #FFF;
    opacity: 0
}

.taglib-image-selector .progress-wrapper .progressbar {
    background: #b0b4bb;
    opacity: .7
}

.taglib-image-selector.check-active .glyphicon-ok {
    opacity: 1
}

.taglib-image-selector.drop-active {
    outline-width: 0
}

.taglib-image-selector.drop-active .browse-image-controls {
    opacity: 0
}

.taglib-image-selector.drop-active .glyphicon-ok {
    opacity: 0
}

.taglib-image-selector.drop-active .image-wrapper {
    opacity: .15
}

.taglib-image-selector.drop-active .error-wrapper {
    opacity: 0
}

.taglib-image-selector.progress-active .image-wrapper {
    opacity: .15
}

.taglib-image-selector.progress-active .browse-image-controls {
    opacity: 0
}

.taglib-image-selector.progress-active .drop-here-info {
    opacity: 0
}

.taglib-image-selector.progress-active .glyphicon-ok {
    opacity: 0
}

.input-localized .palette-item-inner .lfr-input-localized-flag {
    opacity: .5
}

.input-localized.input-localized-focused .palette-item-inner .lfr-input-localized-flag {
    opacity: 1
}

.input-localized .palette-item-inner {
    border-color: #666
}

.input-localized .palette-item,
.input-localized .palette-item-inner,
.input-localized .palette-item-hover,
.input-localized .palette-item-hover .palette-item-inner {
    border-color: transparent
}

.input-localized .lfr-input-localized .lfr-input-localized-state {
    background: #DDD
}

.input-localized .lfr-input-localized .lfr-input-localized-state.lfr-input-localized-state-error {
    background: #ff0047
}

.input-localized .palette-item-selected .lfr-input-localized-state {
    background: #27c1f2
}

.taglib-move-boxes .choice-selector label {
    background: #ebf1f9;
    border-bottom-color: #8db2f3
}

.taglib-move-boxes .sortable-container .move-option {
    background-color: transparent
}

.taglib-move-boxes .sortable-container .move-option.move-option-dragging {
    background-color: #fafafa
}

.taglib-move-boxes .sortable-container .move-option .handle {
    color: #999
}

.lfr-tree-display-page .tree-node .tree-node-over .tree-label {
    text-decoration: none
}

.lfr-tree-display-page .tree-label {
    cursor: default
}

.lfr-tree-display-page .tree-label a {
    color: black
}

.lfr-tree-display-page .tree-label .layout-page-invalid {
    color: #AAA;
    font-style: italic
}

.lfr-tree-display-page .tree-label .layout-page-invalid:hover {
    cursor: default;
    text-decoration: none
}

.lfr-tree-radio.lfr-tree-root-node-hidden .lfr-root-node+.tree-container {
    margin-left: 0
}

.lfr-map {
    border-color: #CCC
}

.lfr-map .search-controls {
    font-size: 15px
}

.navbar .navbar-search {
    background-color: #f3f3f3
}

@media only screen and (min-width:768px) {
    .navbar .navbar-search {
        background-color: transparent
    }
}

.taglib-portlet-preview.show-borders {
    border-color: #828f95
}

.taglib-portlet-preview.show-borders .title {
    background-color: #d3dadd;
    font-size: 1.4em;
    font-weight: bold
}

.lfr-asset-type-column,
.lfr-author-column,
.lfr-city-column,
.lfr-country-column,
.lfr-email-address-column,
.lfr-job-title-column,
.lfr-region-column,
.lfr-removed-by-column,
.lfr-replier-column,
.lfr-scope-column,
.lfr-screen-name-column,
.lfr-type-column,
.lfr-user-column,
.lfr-users-column {
    word-break: break-all \9;
    word-wrap: break-word
}

@media only screen and (min-width:768px) {

    .lfr-asset-type-column,
    .lfr-author-column,
    .lfr-city-column,
    .lfr-country-column,
    .lfr-email-address-column,
    .lfr-job-title-column,
    .lfr-region-column,
    .lfr-removed-by-column,
    .lfr-replier-column,
    .lfr-scope-column,
    .lfr-screen-name-column,
    .lfr-type-column,
    .lfr-user-column,
    .lfr-users-column {
        max-width: 125px;
        min-width: 100px
    }
}

.lfr-completion-date-column,
.lfr-create-date-column,
.lfr-date-column,
.lfr-display-date-column,
.lfr-expiration-date-column,
.lfr-last-post-date-column,
.lfr-modified-date-column,
.lfr-removed-date-column,
.lfr-reply-date-column,
.lfr-revision-column {
    white-space: nowrap
}

.lfr-description-column {
    max-width: 375px;
    min-width: 375px
}

.lfr-email-address-column,
.lfr-name-column,
.lfr-parent-organization-column,
.lfr-screen-name-column,
.lfr-title-column,
.lfr-url-column,
.lfr-wiki-column {
    max-width: 200px;
    min-width: 200px
}

.search-container-dd-toggle {
    margin-left: 15px
}

.user-info .user-details .date-info {
    color: #8c8c8c
}

.user-info .user-details .user-name {
    color: #009ae5
}

.taglib-search-toggle .toggle-advanced {
    color: inherit
}

.taglib-search-toggle .toggle-advanced,
.taglib-search-toggle .toggle-advanced:hover,
.taglib-search-toggle .toggle-advanced:focus {
    text-decoration: none
}

.taglib-search-toggle-advanced-wrapper .taglib-search-toggle-advanced {
    background-color: #fcfcfc;
    border-color: #DDD
}

.taglib-search-toggle-advanced-wrapper .taglib-search-toggle-advanced .btn.close {
    margin-right: 5px
}

.taglib-search-toggle-advanced-wrapper .taglib-search-toggle-advanced .taglib-search-toggle-advanced-content {
    position: relative
}

.taglib-search-toggle-advanced-wrapper .taglib-search-toggle-advanced .taglib-search-toggle-advanced-content .match-fields {
    margin-bottom: 0
}

.taglib-search-toggle-advanced-wrapper .taglib-search-toggle-advanced .taglib-search-toggle-advanced-content .match-fields-legend {
    color: #999;
    font-size: 13px
}

.taglib-social-activities .day-separator {
    border-bottom-color: #CCC
}

.taglib-social-bookmarks a.social-bookmark-link {
    background-repeat: no-repeat
}

.taglib-user-display a .user-name {
    text-decoration: underline
}

.taglib-user-display .avatar {
    background: no-repeat center;
    background-size: 60px
}

.taglib-user-display .avatar.author:after {
    background: rgba(50, 168, 230, 0.5)
}

.taglib-user-display .user-name {
    font-size: 1.1em;
    font-weight: bold
}

.js .taglib-webdav.visible {
    background: #f0f5f7
}

.js .taglib-webdav table {
    border-color: #828f95
}

.taglib-workflow-status .workflow-id,
.taglib-workflow-status .workflow-version,
.taglib-workflow-status .workflow-status {
    color: #999
}

.lfr-autocomplete-input-list .yui3-aclist-list {
    margin: 0
}

.liferay-autocomplete-input-mirror {
    left: -9999px;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: -9999px;
    visibility: hidden;
    white-space: pre-wrap;
    word-wrap: break-word
}

.card-tab-group .card-tab:nth-child(n+2) {
    border-left: 4px solid #65b6f0;
    padding-left: 20px
}

.card-tab-group .card-tab:nth-child(n+2) .card-tab {
    border-left: 4px solid #93ccf5;
    padding-left: 20px
}

.card-tab-group .card-tab:nth-child(n+2) .card-tab .card-tab {
    border-left-color: #c2e2f9
}

.hsv-palette .hsv-view-container .hsv-label-value-hex .hsv-value {
    width: 95px
}

.hsv-palette .hsv-view-container .hsv-label {
    display: inline;
    margin-left: 5px
}

.hsv-palette .hsv-view-container .hsv-value {
    width: 30px
}

.yui3-color-picker-popover .palette-container {
    border-collapse: separate
}

.dialog-bd {
    min-height: 30px
}

.dialog-content {
    border: 1px solid #c8c9ca;
    padding: 5px
}

.dialog-iframe-popup .contacts-portlet .portlet-configuration-container .form {
    position: static
}

.dialog-iframe-popup .lfr-form-content {
    padding: 15px
}

.dialog-iframe-popup .portlet-body,
.dialog-iframe-popup .portlet-boundary,
.dialog-iframe-popup .portlet-column,
.dialog-iframe-popup .portlet-layout {
    height: 100%
}

.dialog-iframe-popup .portlet-column {
    position: static
}

.dialog-iframe-popup .dialog-body>.container-fluid-1280,
.dialog-iframe-popup .lfr-form-content>.container-fluid-1280,
.dialog-iframe-popup .portlet-configuration-body-content>.container-fluid-1280,
.dialog-iframe-popup .export-dialog-tree>.container-fluid-1280,
.dialog-iframe-popup .lfr-dynamic-uploader>.container-fluid-1280,
.dialog-iframe-popup .process-list>.container-fluid-1280 {
    padding-top: 20px
}

.dialog-iframe-popup .dialog-body>.lfr-nav+.container-fluid-1280,
.dialog-iframe-popup .lfr-form-content>.lfr-nav+.container-fluid-1280,
.dialog-iframe-popup .portlet-configuration-body-content>.lfr-nav+.container-fluid-1280,
.dialog-iframe-popup .export-dialog-tree>.lfr-nav+.container-fluid-1280,
.dialog-iframe-popup .lfr-dynamic-uploader>.lfr-nav+.container-fluid-1280,
.dialog-iframe-popup .process-list>.lfr-nav+.container-fluid-1280 {
    padding-top: 0
}

.dialog-iframe-popup .dialog-body,
.dialog-iframe-popup .lfr-form-content,
.dialog-iframe-popup .portlet-configuration-body-content {
    bottom: 0;
    left: 0;
    margin-bottom: 0;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-overflow-scrolling: touch
}

.dialog-iframe-popup .management-bar-default,
.dialog-iframe-popup .navbar-default {
    border-left-width: 0;
    border-radius: 0;
    border-right-width: 0;
    border-top-width: 0;
    margin-bottom: 0
}

.dialog-iframe-popup .navbar~.portlet-configuration-setup,
.dialog-iframe-popup .portlet-export-import-container {
    height: calc(100% - 50px);
    position: relative
}

@media only screen and (min-width:768px) {

    .dialog-iframe-popup .navbar~.portlet-configuration-setup,
    .dialog-iframe-popup .portlet-export-import-container {
        height: calc(100% - 50px)
    }
}

.dialog-iframe-popup .panel-group .panel {
    border-left-width: 0;
    border-radius: 0;
    border-right-width: 0
}

.dialog-iframe-popup .panel-group .panel+.panel {
    border-top-width: 0;
    margin-top: 0
}

.dialog-iframe-popup .panel-heading {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.dialog-iframe-popup .portlet-configuration-setup .lfr-nav {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding-left: 3px;
    padding-right: 3px
}

@media only screen and (min-width:768px) {
    .dialog-iframe-popup .portlet-configuration-setup .lfr-nav {
        padding-left: 8px;
        padding-right: 8px
    }
}

.dialog-iframe-popup .export-dialog-tree,
.dialog-iframe-popup .lfr-dynamic-uploader,
.dialog-iframe-popup .process-list {
    bottom: 0;
    display: block;
    left: 0;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 50px;
    -webkit-overflow-scrolling: touch
}

@media only screen and (min-width:768px) {

    .dialog-iframe-popup .export-dialog-tree,
    .dialog-iframe-popup .lfr-dynamic-uploader,
    .dialog-iframe-popup .process-list {
        top: 50px
    }
}

.dialog-iframe-popup .portlet-export-import-publish-processes {
    top: 0
}

.dialog-with-footer .button-holder.dialog-footer {
    background-color: transparent;
    border-top: 1px solid #e5e5e5;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 10px 15px;
    position: absolute;
    width: 100%
}

@media only screen and (min-width:768px) {
    .dialog-with-footer .button-holder.dialog-footer {
        background-color: transparent;
        padding: 20px
    }
}

@media only screen and (max-width:767px) {
    .dialog-with-footer .button-holder .btn-lg {
        font-size: 12px;
        padding: 8px 24px
    }
}

@media only screen and (max-width:767px) {

    .dialog-with-footer .blog-article-button-row .btn-lg,
    .dialog-with-footer .journal-article-button-row .btn-lg,
    .dialog-with-footer .kb-submit-buttons .btn-lg {
        padding-left: 16px;
        padding-right: 16px
    }
}

.dialog-with-footer .dialog-body,
.dialog-with-footer .export-dialog-tree,
.dialog-with-footer .lfr-dynamic-uploader,
.dialog-with-footer .lfr-form-content,
.dialog-with-footer .portlet-configuration-body-content {
    bottom: 60px
}

@media only screen and (min-width:768px) {

    .dialog-with-footer .dialog-body,
    .dialog-with-footer .export-dialog-tree,
    .dialog-with-footer .lfr-dynamic-uploader,
    .dialog-with-footer .lfr-form-content,
    .dialog-with-footer .portlet-configuration-body-content {
        bottom: 89px
    }
}

.dialog-with-footer .lfr-dynamic-uploader.hide-dialog-footer {
    bottom: 0
}

.dialog-with-footer .lfr-dynamic-uploader.hide-dialog-footer+.dialog-footer {
    display: none
}

.dialog-with-footer .portlet-configuration-edit-templates .portlet-configuration-body-content {
    bottom: 0
}

.portlet-layout.dragging {
    border-collapse: separate
}

.drop-area {
    background-color: #d3dadd
}

.active-area {
    background: #FFC
}

.portlet-boundary.yui3-dd-dragging {
    opacity: .6
}

.portlet-boundary.yui3-dd-dragging .portlet {
    border: 2px dashed #CCC
}

.sortable-layout-proxy {
    opacity: 1
}

.sortable-layout-proxy .portlet-topper {
    background-image: none
}

.proxy {
    cursor: move;
    opacity: .65;
    position: absolute
}

.proxy.generic-portlet {
    height: 200px;
    width: 300px
}

.proxy.generic-portlet .portlet-title {
    padding: 10px
}

.proxy.not-intersecting .forbidden-action {
    background: url('~@/assets/images/forbidden_action.png') no-repeat;
    display: block;
    height: 32px;
    position: absolute;
    right: -15px;
    top: -15px;
    width: 32px
}

.resizable-proxy {
    border: 1px dashed #828f95;
    position: absolute;
    visibility: hidden
}

.sortable-proxy {
    background: #727c81;
    margin-top: 1px
}

.lfr-freeform-layout-drag-indicator {
    visibility: hidden
}

.sortable-layout-drag-target-indicator {
    margin: 2px 0
}

.yui3-dd-proxy {
    z-index: 1110 !important
}

.lfr-editable {
    outline: 1px dashed #68bb30;
    outline-offset: 2px;
    position: relative
}

.lfr-editable:after {
    background: #68bb30 url('~@/assets/images/edit_white.png') no-repeat 50%;
    content: '';
    display: block;
    height: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px
}

.lfr-editable:focus:after {
    display: none
}

.lfr-editable:focus:hover {
    background-color: transparent
}

.lfr-editable:hover {
    background-color: rgba(255, 255, 255, 0.3);
    outline-color: #519226
}

.lfr-editable:hover:after {
    background-color: #519226
}

.lfr-editable-notice-close {
    margin-left: 1em
}

.lfr-portlet-title-editable {
    margin-top: 0;
    z-index: 9999
}

.lfr-portlet-title-editable .lfr-portlet-title-editable-content {
    padding: 0
}

.lfr-portlet-title-editable .lfr-portlet-title-editable-content .field-input {
    margin-bottom: 0
}

.lfr-portlet-title-editable .lfr-portlet-title-editable-content .textfield-label {
    display: none
}

.lfr-portlet-title-editable .lfr-portlet-title-editable-content .btn-toolbar-content {
    display: inline-block;
    vertical-align: bottom
}

.lfr-portlet-title-editable .lfr-portlet-title-editable-content .btn-group {
    margin-top: 0
}

.lfr-portlet-title-editable .lfr-portlet-title-editable-content .btn {
    display: inline-block;
    float: none;
    margin-top: 0;
    width: auto
}

.alloy-editor-container .alloy-editor {
    outline: 0
}

.alloy-editor-container .alloy-editor.alloy-editor-placeholder {
    color: #2b4259
}

.alloy-editor-container .alloy-editor.alloy-editor-placeholder:empty:not(:focus) {
    background: transparent;
    border-left-color: #dbdde1;
    color: #b0b4bb
}

.alloy-editor-container .alloy-editor.alloy-editor-placeholder.readonly {
    color: #CCC
}

.alloy-editor-container .alloy-editor-icon {
    color: #869cad
}

.cke_dialog .cke_dialog_ui_input_text {
    height: auto
}

.cke_editable_inline a {
    cursor: pointer
}

.cke_panel.cke_combopanel {
    width: 220px
}

.cke_panel_block .cke_panel_grouptitle {
    font-size: 20px;
    line-height: 20px;
    margin-top: 0
}

.cke_panel_block .cke_panel_list {
    margin-left: 0
}

.cke_panel_block .cke_panel_list .cke_panel_listItem {
    line-height: initial
}

.cke_panel_block .cke_panel_list .cke_panel_listItem a:hover {
    text-decoration: none
}

.cke_show_border {
    width: 500px
}

.cke_show_border td {
    height: 15px
}

.html-editor.portlet {
    background: #FFF;
    color: #000;
    line-height: 1;
    padding: 1em
}

.html-editor.portlet-message-boards {
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -o-hyphens: auto;
    hyphens: auto;
    word-wrap: break-word
}

.html-editor.portlet-message-boards blockquote {
    background: #eef0f2 url('~@/assets/images/quoteleft.png') no-repeat 5px 5px;
    border: 1px solid #777;
    padding: 5px 45px
}

.html-editor.portlet-message-boards blockquote:after {
    background: url('~@/assets/images/quoteright.png') no-repeat 50%;
    content: '';
    display: block;
    float: right;
    height: 24px;
    margin-right: -35px;
    margin-top: -25px;
    width: 31px;
    z-index: 999
}

.html-editor.portlet-message-boards blockquote cite {
    display: block;
    font-weight: bold
}

.html-editor.portlet-message-boards pre {
    background: #f9f9f9;
    border: 1px solid #777;
    padding: .5em
}

.lfr-source-editor {
    border-color: #CCC
}

.lfr-source-editor .lfr-source-editor-toolbar li>.btn {
    background-color: #FFF;
    border: transparent;
    color: #717383;
    outline: 0
}

.lfr-source-editor .lfr-source-editor-code {
    background-color: #FFF;
    color: #2b4259
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter {
    background-color: #ededef;
    color: #868896;
    overflow: hidden
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_fold-widget {
    font-family: fontawesome-alloy;
    text-align: center;
    vertical-align: middle
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_fold-widget.ace_open,
.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_fold-widget.ace_closed {
    background-image: none
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_fold-widget.ace_open:before {
    content: "\f0d7"
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_fold-widget.ace_closed:before {
    content: "\f0dA"
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_gutter-active-cell {
    color: #FFF
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_gutter-active-line {
    background-color: #717383
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_gutter-layer {
    border-right: solid 1px #CCC
}

.lfr-source-editor .lfr-source-editor-code .ace_gutter .ace_info {
    background-image: none
}

.lfr-source-editor .lfr-source-editor-code .ace_content .ace_active-line {
    background-color: #ededef
}

.lfr-source-editor .lfr-source-editor-code .ace_content .ace_constant {
    color: #34adab
}

.lfr-source-editor .lfr-source-editor-code .ace_content .ace_tag {
    color: #1d5ec7
}

.lfr-source-editor .lfr-source-editor-code .ace_content .ace_string {
    color: #ff6c58
}

.lfr-source-editor .lfr-source-editor-code .ace_content .ace_string.ace_regex {
    color: #F00
}

.lfr-source-editor.ace_dark .lfr-source-editor-code {
    background-color: #47474f;
    color: #FFF
}

.lfr-source-editor.ace_dark .lfr-source-editor-code .ace_gutter {
    background: #54555e;
    color: #FFF
}

.lfr-source-editor.ace_dark .lfr-source-editor-code .ace_gutter .ace_gutter-active-line {
    background-color: #009aed
}

.lfr-source-editor.ace_dark .lfr-source-editor-code .ace_content .ace_active-line {
    background-color: #11394e
}

.lfr-source-editor.ace_dark .lfr-source-editor-code .ace_content .ace_cursor {
    color: #FFF
}

.lfr-source-editor.ace_dark .lfr-source-editor-code .ace_content .ace_tag {
    color: #4d91ff
}

.lfr-fullscreen-source-editor .lfr-fullscreen-source-editor-content .panel-splitter {
    border-color: #CCC
}

.file-icon-color-0 {
    background-color: #869cad;
    color: #FFF
}

.file-icon-color-1 {
    background-color: #ed8d65;
    color: #FFF
}

.file-icon-color-2 {
    background-color: #84ba3d;
    color: #FFF
}

.file-icon-color-3 {
    background-color: #9b65ed;
    color: #FFF
}

.file-icon-color-4 {
    background-color: #d4b908;
    color: #FFF
}

.file-icon-color-5 {
    background-color: #e96465;
    color: #FFF
}

.file-icon-color-6 {
    background-color: #65b4ed;
    color: #FFF
}

.file-icon-color-7 {
    background-color: #1c0c0c;
    color: #FFF
}

.lfr-item-viewer .image-viewer-base {
    outline: 0
}

.lfr-item-viewer .item-preview:hover {
    cursor: pointer
}

.lfr-item-viewer .aspect-ratio a.item-preview {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.lfr-item-viewer .search-info {
    background-color: #d3e8f1
}

.lfr-item-viewer .search-info .keywords {
    font-size: 1.4em;
    font-weight: bold
}

.lfr-item-viewer .search-info .change-search-folder {
    font-size: .8em;
    font-weight: normal
}

.lfr-item-viewer .progress-container {
    background-color: #FFF
}

.lfr-item-viewer.uploading>div:not(.progress-container) {
    opacity: .3
}

.image-viewer-caption {
    color: #777
}

.image-viewer-footer-control,
.image-viewer-footer-control:focus,
.image-viewer-footer-control:hover {
    color: #777
}

@media only screen and (min-width:768px) {
    .image-viewer-sidenav-menu {
        background-color: transparent;
        border-left-width: 0
    }
}

.image-viewer-sidenav dd {
    color: #8b8b8b;
    margin-bottom: 16px
}

@media only screen and (min-width:768px) {
    .image-viewer-sidenav dd {
        color: #777
    }
}

.image-viewer-sidenav .h5 {
    color: #869cad;
    margin-bottom: 3px
}

@media only screen and (min-width:768px) {
    .image-viewer-sidenav .h5 {
        color: #FFF
    }
}

.image-viewer-sidenav .nav-tabs-default>li {
    padding-left: 20px
}

.image-viewer-sidenav .nav-tabs-default>li:first-child {
    padding-left: 0
}

.image-viewer-sidenav .nav-tabs-default>li:first-child>a {
    padding-left: 0
}

.image-viewer-sidenav .nav-tabs-default>li>a {
    border-color: transparent;
    color: #777;
    padding-left: 0;
    padding-right: 0
}

.image-viewer-sidenav .nav-tabs-default>.active>a,
.image-viewer-sidenav .nav-tabs-default>.active>a:focus,
.image-viewer-sidenav .nav-tabs-default>.active>a:hover {
    border-color: transparent;
    color: #777
}

@media only screen and (min-width:768px) {

    .image-viewer-sidenav .nav-tabs-default>.active>a,
    .image-viewer-sidenav .nav-tabs-default>.active>a:focus,
    .image-viewer-sidenav .nav-tabs-default>.active>a:hover {
        color: #FFF
    }
}

.image-viewer-sidenav .nav-tabs-default>.active>a:after {
    background-color: #65b6f0;
    bottom: -10px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    right: 0
}

.image-viewer-sidenav-body {
    padding-top: 0
}

.lfr-item-viewer .lfr-item-viewer-close {
    color: #FFF;
    opacity: 1
}

.lfr-item-viewer .lfr-item-viewer-close,
.lfr-item-viewer .lfr-item-viewer-close:focus,
.lfr-item-viewer .lfr-item-viewer-close:hover {
    color: #FFF
}

.lfr-item-viewer .lfr-item-viewer-close .icon-monospaced {
    color: #777
}

.lfr-item-viewer-icon-info {
    color: #FFF
}

.label-circle,
.label-circle .label {
    border-radius: 20px
}

.label-rounded,
.label-rounded .label {
    border-radius: 3px
}

.label-square,
.label-square .label {
    border-radius: 0
}

.label-entry {
    background-color: #FFF;
    border: solid 1px #000;
    color: #000;
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
    padding: 0 0 0 12px
}

.label-entry button {
    background-color: transparent;
    border-width: 0;
    color: inherit;
    height: 34px;
    width: 34px
}

.nav.list-group li>a:focus,
.nav.list-group li>a:hover {
    background-color: #e5f5fc;
    color: #009ae5
}

.nav.list-group>.active {
    border-width: 1px 0 0 0
}

.nav.list-group>.active>a,
.nav.list-group>.active>a:focus,
.nav.list-group>.active>a:hover {
    background-color: #60bfef;
    border: 1px solid #60bfef;
    color: #FFF
}

.nav.list-group .list-group-item {
    padding: 0
}

.nav.list-group .list-group-item.nav-header {
    background-color: #f3f3f3;
    padding-left: 10px;
    padding-right: 10px
}

.lfr-page-templates li a {
    padding: 0
}

.lfr-page-templates li a label {
    cursor: pointer;
    display: block;
    padding: 5px 0 5px 5px
}

.menu {
    position: absolute;
    width: auto
}

.menu .notice-message {
    background-image: none;
    margin: 3px;
    padding: 6px
}

.menu-content {
    background: #FFF;
    list-style: none;
    min-width: 150px
}

.menu-content li {
    margin: 0;
    padding: 0
}

.menu-content li .disabled {
    color: #999
}

.menu-content {
    background: #ccc9c9 url('~@/assets/images/menu_bg.png') repeat-x 0 0;
    border: 1px solid;
    border-color: #aeafb1 #777879 #777879 #aeafb1;
    padding: 2px 0
}

.menugroup-content .menu-label {
    background: #d2d6de;
    color: #5b677d;
    display: block;
    padding: 5px 3px;
    text-shadow: 1px 1px #FFF
}

.menugroup-content ul {
    display: block;
    min-width: 0
}

.menu-content li {
    border-bottom: 1px solid #bcbbbb;
    border-top: 1px solid #EEE;
    display: block;
    margin: 0;
    padding: 0
}

.menu-content li.first {
    border-top-width: 0
}

.menu-content li.last {
    border-bottom-width: 0
}

.menu-content li a,
.menu-content li .disabled {
    color: #2c2f34;
    display: block;
    padding: 4px 5px;
    text-decoration: none
}

.menu-content li a.focus,
.lfr-menu-expanded li a:focus {
    background-color: #5b677d;
    color: #FFF;
    text-shadow: -1px -1px #2c2f34
}

.app-view-drop-active {
    background-color: #00a2ea;
    font-weight: bold
}

.category-portlets .app-view-drop-active {
    background-color: #00a2ea;
    color: #FFF
}

.basecelleditor [class~="form-validator-message"] {
    clip: rect(auto auto auto auto);
    width: auto
}

.document-library-file-entry-cell-editor-hidden {
    display: none
}

.previous-level {
    display: inline-block;
    font-size: 21px;
    line-height: 21px;
    margin-right: 5px;
    text-decoration: none;
    vertical-align: middle
}

.lfr-url-error {
    display: inline-block;
    white-space: normal;
    overflow-wrap: break-all;
    word-wrap: break-all;
    word-break: break-all
}

.lfr-page-layouts input[type="radio"]:checked+.card-horizontal {
    box-shadow: inset 0 0 0 2px #65b6f0
}

.lfr-page-layouts .lfr-layout-template label {
    cursor: pointer
}

.lfr-page-layouts .lfr-layout-template .layout-template-entry {
    height: 28px;
    width: 28px
}

.dialog-iframe-popup #main-content,
.dialog-iframe-popup #wrapper {
    bottom: 0;
    left: 0;
    overflow: auto;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-overflow-scrolling: touch
}

.modal {
    display: block;
    margin: 0;
    overflow: hidden;
    position: fixed
}

.modal-body {
    overflow: auto
}

.modal-body.dialog-iframe-bd {
    overflow: hidden
}

.modal-hidden {
    display: none
}

.modal-open .modal {
    overflow: hidden
}

.portal-popup .columns-max>.portlet-layout.row {
    margin-left: 0;
    margin-right: 0
}

.portal-popup .columns-max>.portlet-layout.row>.portlet-column {
    padding-left: 0;
    padding-right: 0
}

.dragging .portlet-column.customizable {
    background-color: #cffccf;
    outline: 3px solid #5eaf3d
}

.customizable-layout-column-content {
    background-color: #c92c3c
}

.customizable-layout-column-content.yui3-widget-content-expanded {
    margin: 0 15px
}

.layout-customizable-controls {
    background-color: rgba(201, 44, 60, 0.8)
}

.customizable .customizable-layout-column-content {
    background-color: #5eaf3d
}

.customizable .layout-customizable-controls {
    background-color: rgba(94, 175, 61, 0.8)
}

.layout-customizable-controls-container {
    margin: 0 15px;
    position: relative
}

.layout-customizable-controls {
    font-size: 1.5em;
    padding: 4px 16px;
    position: absolute;
    width: 100%;
    z-index: 15
}

.layout-customizable-controls label {
    color: #FFF
}

.paginator-link {
    background: #EEE no-repeat scroll 50% 1px;
    border: 1px solid #f0f1f2;
    border-color: #f0f1f2 #b2b2b2 #949494 #f0f1f1;
    color: #1f1e1e;
    display: inline-block;
    height: 20px;
    padding: 0;
    text-indent: -9999px;
    width: 20px
}

.paginator-page-link {
    height: auto;
    text-indent: 0
}

.paginator-current-page {
    background: #0083bd url('~@/assets/images/paginator_link_current_bg.png') 0 0 repeat-x;
    border-color: #38b6ef #006d9e #006d9e #46b4e6;
    color: #FFF;
    text-shadow: -1px -1px #003c57
}

.paginator-first-link {
    background-image: url('~@/assets/images/paging_first.png')
}

.paginator-prev-link {
    background-image: url('~@/assets/images/paging_previous.png')
}

.paginator-last-link {
    background-image: url('~@/assets/images/paging_last.png')
}

.paginator-next-link {
    background-image: url('~@/assets/images/paging_next.png')
}

.paginator-current-page-report,
.paginator-total {
    color: #555;
    font-size: .9em
}

.paginator-current-page-report {
    margin-left: 2em
}

.taglib-page-iterator .search-pages .page-links {
    padding: 0
}

.lfr-panel-container {
    background: #FFF
}

.lfr-panel-content {
    padding: 5px 10px
}

.lfr-panel-basic .lfr-panel-content {
    padding-left: 15px
}

.panel-hd {
    background: #c0c2c5 url('~@/assets/images/panel_header_bg.png') repeat-x 0 0;
    border: 1px solid;
    border-color: #c8c9ca #aeb2b8 #aeb2b8 #c8c9ca;
    padding-left: 10px;
    text-shadow: 1px 1px #FFF
}

.splitter {
    background-color: #f5f5f5;
    border-radius: 4px 4px 0 0;
    color: #333;
    padding: 10px 15px;
    position: relative;
    z-index: 1
}

.splitter.splitter-spaced {
    border-radius: 4px;
    margin-bottom: 20px
}

.table>tbody>tr.splitter {
    height: auto
}

.table>tbody>tr.splitter>td {
    padding: 0
}

.lfr-nav.nav-tabs {
    margin-bottom: 20px
}

.tab-active strong {
    font-weight: normal
}

.tab-back {
    float: right
}

.tab-back-content {
    border-width: 0;
    padding: 1px
}

.tag-items {
    list-style: none;
    margin: 0 1em 0 0;
    padding: 0 1em .5em 1em;
    white-space: normal
}

.tag-items li {
    display: inline;
    float: left;
    margin: 0 1em 0 0
}

.tag-items a {
    white-space: nowrap
}

.tag-selected {
    color: #000;
    font-weight: bold;
    text-decoration: none
}

.tag-cloud {
    line-height: 2.5em
}

.tag-cloud .tag-popularity-1 {
    font-size: 1em
}

.tag-cloud .tag-popularity-2 {
    font-size: 1.3em
}

.tag-cloud .tag-popularity-3 {
    font-size: 1.6em
}

.tag-cloud .tag-popularity-4 {
    font-size: 1.9em
}

.tag-cloud .tag-popularity-5 {
    font-size: 2.2em
}

.tag-cloud .tag-popularity-6 {
    font-size: 2.5em
}

.tagselector-content {
    border: 0;
    padding: 0
}

.tagselector-content .textboxlistentry-holder {
    border-bottom: 2px solid #869cad;
    margin-bottom: 10px;
    padding: 0
}

.categoriesselector-content .textboxlistentry-holder {
    background-color: transparent;
    border-width: 0;
    padding: 0
}

.lfr-portal-tooltip {
    display: inline-block
}

.tooltip {
    max-width: 200px
}

.tree-node .icon-check {
    padding-right: 2px
}

.tree-node .icon-check:before {
    content: ""
}

.tree-node .tree-node-checked .icon-check {
    padding-right: 0
}

.tree-node .tree-node-checked .icon-check:before {
    content: ""
}

.tree-node [class^="icon-"] {
    margin-right: 5px
}

.tree-node .tree-node-checkbox-container {
    margin-right: 0
}

.tree-node .tree-node-selected .tree-label {
    background: 0
}

.tree-node-content .tree-hitarea {
    color: #999;
    font-size: 10px;
    padding-right: 6px
}

.tree-node-content .tree-label {
    margin-left: 3px
}

.tree-node-content .tree-node-hidden-hitarea {
    visibility: hidden
}

.tree-node-selected .tree-label {
    background-color: transparent
}

.underlay {
    clear: both;
    top: 100%
}

.underlay .yui3-widget-hd {
    height: 38px
}

.underlay-hidden {
    display: none
}

.underlay-content {
    background: #f4f3f3 url('~@/assets/images/message_panel_shadow.png') repeat-x 0 0;
    border: 0 solid #aeafb1;
    border-width: 0 1px 1px
}

.underlay-close {
    position: absolute;
    right: 5px;
    top: 5px
}

.user-icon-color-0 {
    background-color: #4c0079
}

.user-icon-color-1 {
    background-color: #fd8300
}

.user-icon-color-2 {
    background-color: #009e57
}

.user-icon-color-3 {
    background-color: #f9b500
}

.user-icon-color-4 {
    background-color: #df4230
}

.user-icon-color-5 {
    background-color: #be67e5
}

.user-icon-color-6 {
    background-color: #004b8d
}

.user-icon-color-7 {
    background-color: #accb02
}

.user-icon-color-8 {
    background-color: #a82003
}

.user-icon-color-9 {
    background-color: #fd63a7
}

.portlet-column-content.empty {
    padding: 50px
}

#wrapper {
    padding-bottom: 0;
    padding-top: 2em;
    position: relative
}

.modify-pages li {
    position: relative
}

.modify-pages li.lfr-nav-hover .delete-tab {
    opacity: 1
}

.modify-pages .delete-tab {
    color: #444;
    cursor: pointer;
    display: block;
    font-size: 20px;
    font-weight: bold;
    height: 16px;
    line-height: 6px;
    margin-top: -8px;
    opacity: 0;
    overflow: hidden;
    padding: 3px 0;
    position: absolute;
    right: 1px;
    text-shadow: 0 1px #FFF;
    top: 50%
}

.modify-pages .delete-tab:hover {
    color: #b50303
}

.modify-pages .drag-handle {
    cursor: move;
    left: 3px;
    margin-left: 15px;
    position: absolute;
    top: 15px
}

.controls-hidden .modify-pages .lfr-nav-sortable>a>span {
    padding-left: 0
}

.controls-hidden .modify-pages .drag-handle {
    display: none
}

.touch .modify-pages .lfr-nav-sortable>a>span {
    padding-left: 28px
}

@media only screen and (min-width:992px) {
    .touch .modify-pages .lfr-nav-sortable>a>span {
        padding-left: 0
    }

    .touch .modify-pages .drag-handle {
        display: none
    }
}

.nav li .toolbar {
    margin-top: 5px
}

.navigation-pane .body-row {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%
}

.navigation-pane .body-row ul li a .icon {
    float: left;
    margin-right: 5px
}

.navigation-pane .lfr-component {
    margin-left: 0
}

.navigation-pane .navigation-entry {
    position: relative
}

.navigation-pane .navigation-entry.folder.error {
    display: block;
    padding: 6px 8px
}

.navigation-pane .navigation-entry .browse-folder,
.navigation-pane .navigation-entry .nav-item-label {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    vertical-align: middle
}

.navigation-pane .navigation-entry .nav-item-icon {
    vertical-align: middle
}

.navigation-pane .navigation-entry .overlay.entry-action {
    bottom: 0;
    display: block;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0
}

.navigation-pane .navigation-entry .overlay.entry-action .btn {
    border-width: 0;
    margin: 0;
    padding: 11px 14px
}

@media only screen and (min-width:992px) {
    .navigation-pane .navigation-entry .overlay.entry-action .btn {
        padding: 11px
    }
}

.nav-menu ul {
    padding-left: 10px
}

.nav-menu li a.ancestor {
    font-weight: bold
}

.nav-menu li a.selected {
    color: #000;
    font-weight: bold;
    text-decoration: none
}

.nav-menu-style-arrows ul {
    list-style-image: url('~@/assets/images/04_right.png')
}

.portlet-navigation .nav-pills>li>a {
    margin-bottom: 2px
}

.portlet-navigation .nav-pills>li>.dropdown-menu {
    margin-top: 0
}

.split-button-dropdowns {
    list-style: none;
    margin: 0;
    padding: 0
}

.split-button-dropdowns>li {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px
}

.form-options {
    border: 1px solid #AAA;
    display: inline-block;
    vertical-align: middle
}

.form-options input {
    border-width: 0;
    display: inline;
    float: left
}

.form-triggers {
    float: left
}

.form-trigger {
    background: #c4c4c4 url('~@/assets/images/button_bg.png') repeat-x 0 0;
    border-left: 1px solid #BBB;
    display: inline-block;
    float: left
}

.form-trigger img {
    background: no-repeat 50% 40%;
    height: 25px;
    padding: 0 3px;
    vertical-align: middle;
    width: 16px
}

.form-trigger:focus,
.form-trigger:hover {
    background-color: #83b0ca;
    background-image: url('~@/assets/images/button_bg_over.png')
}

.trigger-selected {
    background-color: #ebebeb;
    background-image: url('~@/assets/images/button_bg_selected.png')
}

.trigger-selected:focus,
.trigger-selected:hover {
    background-color: #b7def4;
    background-image: url('~@/assets/images/button_bg_selected_over.png')
}

.options-trigger img {
    background-image: url('~@/assets/images/configuration.png')
}

.save-trigger img {
    background-image: url('~@/assets/images/check.png')
}

.freeform .portlet {
    margin-bottom: 0
}

body.portlet {
    border-width: 0
}

.portlet-topper {
    position: relative
}

.portlet-topper .portlet-topper-toolbar .portlet-icon-back {
    background: url('~@/assets/images/12_left.png') no-repeat 0 50%;
    padding: 5px 5px 5px 18px
}

.portlet-topper .portlet-topper-toolbar .portlet-options .lfr-icon-menu-text {
    display: none
}

.portlet-title-editable {
    cursor: pointer
}

.portlet-title-text {
    display: inline-block;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    margin-top: 0;
    max-width: 95%;
    vertical-align: top
}

.panel-page-content .portlet-title-text,
.panel-page-body .portlet-title-text {
    cursor: auto
}

.portlet-content,
.portlet-minimized .portlet-content-container {
    padding: 12px 10px 10px
}

.portlet-minimized .portlet-content {
    padding: 0
}

.portlet-nested-portlets .portlet-boundary {
    left: 0 !important;
    position: relative !important;
    top: 0 !important
}

.portlet-draggable .portlet-topper {
    cursor: move
}

.portlet-draggable .portlet-title-default {
    background: url('~@/assets/images/draggable_borderless.png') no-repeat 2px center transparent;
    cursor: move;
    padding-left: 25px
}

.portlet .visible-interaction {
    display: none
}

.portlet:active .visible-interaction,
.portlet:hover .visible-interaction,
.portlet:focus .visible-interaction,
.portlet.active .visible-interaction {
    display: inherit
}

.lfr-status-alert-label,
.lfr-status-error-label,
.lfr-status-info-label,
.lfr-status-progress-label,
.lfr-status-success-label {
    background: none no-repeat 0 50%;
    padding: 3px 3px 3px 20px
}

.lfr-status-alert-label {
    background-image: url('~@/assets/images/alert.png');
    color: #663
}

.lfr-status-error-label {
    background-image: url('~@/assets/images/error.png');
    color: #900
}

.lfr-status-help-label,
.lfr-status-info-label,
.lfr-status-progress-label {
    background-image: url('~@/assets/images/info.png');
    color: #34404f
}

.lfr-status-help-label {
    background-image: url('~@/assets/images/help.png')
}

.lfr-status-progress-label {
    background-image: url('~@/assets/images/loading_indicator.gif')
}

.lfr-status-success-label {
    background-image: url('~@/assets/images/success.png');
    color: #384f34
}

.portlet-msg {
    background: #EEE none no-repeat 6px 50%;
    border: 1px solid #555;
    color: #34404f;
    font-weight: bold;
    margin: 2px auto 14px;
    padding: 6px 6px 6px 30px;
    text-align: left
}

.lfr-message {
    position: relative
}

.lfr-message .lfr-message-control {
    background-color: #333;
    display: inline-block
}

.lfr-message .lfr-message-controls {
    display: none;
    left: 3px;
    margin: -8px 8px 0 3px;
    position: absolute;
    top: 50%;
    z-index: 10
}

.lfr-message .lfr-message-close {
    background-image: url('~@/assets/images/close_borderless.png');
    background-position: 0 0;
    background-repeat: no-repeat
}

.lfr-message .lfr-message-close-all {
    color: #FFF;
    display: none;
    font-size: .8em;
    margin-left: 10px;
    padding: 1px 10px;
    text-shadow: 1px 1px 0 #000;
    vertical-align: top
}

.lfr-message .lfr-message-close-all a {
    color: #FFF
}

.lfr-message .lfr-message-controls-hover .lfr-message-close-all {
    display: inline-block
}

.lfr-message.pending {
    background-image: url('~@/assets/images/time.png')
}

.lfr-message-content.alert {
    margin-bottom: 0
}

.lfr-message-close {
    cursor: pointer
}

.portlet-section-selected,
.portlet-section-selected a {
    background: #727c81;
    color: #FFF;
    font-weight: bold;
    text-decoration: none
}

.portlet-section-selected a:hover,
.portlet-section-selected a:focus {
    background-color: #727c81
}

@media only screen and (min-width:768px) {
     .portlet-topper {
        width: 65%
    }
}

@media only screen and (min-width:992px) {
     .portlet-topper {
        width: 65%
    }
}

@media only screen and (min-width:1200px) {
     .portlet-topper {
        width: 65%
    }
}

.portlet {
    margin-bottom: 10px;
    position: relative
}

.portlet>.portlet-content-editable {
    border-color: transparent;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px
}

.portlet>.portlet-topper {
    display: none
}

@media only screen and (min-width:768px) {
    .portlet>.portlet-topper {
        display: -webkit-box;
        display: -moz-box;
        display: box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        -webkit-transition: opacity .25s, transform .25s;
        -o-transition: opacity .25s, transform .25s;
        transition: opacity .25s, transform .25s;
        top: 0
    }
}

@media only screen and (min-width:768px) {

    .portlet:hover>.portlet-content-editable,
    .portlet.focus>.portlet-content-editable {
        border-color: #e7e7e7;
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }
}

@media only screen and (min-width:768px) {

    .portlet:hover>.portlet-topper,
    .portlet.focus>.portlet-topper {
        opacity: 1;
        -webkit-transform: translateY(-97%);
        -moz-transform: translateY(-97%);
        -ms-transform: translateY(-97%);
        -o-transform: translateY(-97%);
        transform: translateY(-97%)
    }
}

.portlet-content-editable {
    border-color: #e7e7e7;
    border-radius: 0 0 4px 4px;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    padding: 10px
}

.portlet-actions {
    float: right
}

.portlet-options {
    display: inline-block
}

.portlet-title-default {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 1 auto;
    -moz-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2
}

.portlet-title-menu {
    -webkit-box-flex: 0;
    -moz-box-flex: 0;
    box-flex: 0;
    -webkit-flex: 0 1 auto;
    -moz-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto
}

.portlet-title-menu>span>a {
    display: inline-block;
    text-decoration: none
}

.portlet-topper {
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    border-radius: 4px 4px 0 0;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    color: #777;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    position: relative
}

.portlet-topper-toolbar {
    margin-bottom: 0;
    margin-right: -10px;
    margin-top: 0;
    padding-left: 0
}

.portlet-topper-toolbar>a,
.portlet-topper-toolbar>span>a,
.portlet-topper-toolbar .lfr-icon-menu>a {
    color: #777
}

.portlet-topper-toolbar>a:focus,
.portlet-topper-toolbar>a:hover {
    text-decoration: none
}

@media only screen and (max-width:767px) {
    .controls-visible .portlet-content-editable {
        border-color: #e7e7e7;
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }
}

@media only screen and (max-width:767px) {
    .controls-visible .portlet-topper {
        display: -webkit-box;
        display: -moz-box;
        display: box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex
    }
}

.controls-visible .portlet-topper-toolbar {
    display: block
}

.lfr-configurator-visibility .portlet-borderless-bar {
    opacity: .6
}

.lfr-configurator-visibility .portlet-content .lfr-icon-actions {
    opacity: 1
}

.lfr-panel-page {
    width: 100%
}

.lfr-panel-page .portlet-title {
    font-size: 13px
}

.lfr-panel-page .lfr-add-content h2 span {
    background-color: #d3dadd
}

.main-content-body {
    margin-top: 20px
}

.restricted,
.restricted td {
    background: #FDD;
    border-width: 0
}

.restricted * {
    color: #727c81
}

.alt.restricted td {
    background-color: #ffc0c0
}

.hover.restricted td {
    background-color: #d3bdc0
}

.alt.restricted td.first,
.restricted td.first {
    background-image: url('~@/assets/images/error.png');
    background-position: 5px 50%;
    background-repeat: no-repeat;
    padding-left: 28px
}

.portlet-decorate .portlet-content {
    background: #fff;
    border-color: #e7e7e7;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    word-break: break-word
}

.portlet-barebone .portlet-content {
    padding: 0
}

.portlet-dynamic-data-lists-display .lfr-ddm-field-group,
.portlet-dynamic-data-lists .lfr-ddm-field-group,
.portlet-journal .lfr-ddm-field-group {
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 28px 24px 28px
}

.breadcrumb.breadcrumb-vertical {
    display: inline-block;
    text-align: center
}

.breadcrumb.breadcrumb-vertical li {
    display: block
}

.breadcrumb.breadcrumb-vertical li.last,
.breadcrumb.breadcrumb-vertical li.only {
    background: 0
}

.breadcrumb.breadcrumb-vertical .divider {
    background: url('~@/assets/images/07_down.png') no-repeat 50% 100%;
    display: block;
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
    height: 10px
}

.taglib-calendar tr.portlet-section-header th,
.taglib-calendar tr td {
    border-width: 0
}

.taglib-calendar tr td a {
    background-color: #f0f5f7;
    border: 1px solid #FFF;
    border-bottom-width: 0;
    border-left-width: 0;
    display: block;
    height: 15px;
    padding: 5px 0
}

.taglib-calendar tr td a:hover {
    background-color: #727c81;
    color: #FFF
}

.taglib-calendar tr td.calendar-inactive {
    background-color: #FFF;
    color: #b5bfc4
}

.taglib-calendar tr th {
    border-bottom-color: #d7d7d7
}

.taglib-calendar table td {
    border-width: 0
}

.taglib-calendar .calendar-current-day,
.taglib-calendar .calendar-current-day a {
    background-color: #FFF
}

.taglib-calendar .calendar-current-day a {
    border: 1px solid #727c81;
    color: #369;
    text-decoration: underline
}

.navbar form {
    margin: 0
}

.menu-content,
.underlay-content {
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.5)
}

.lfr-ddm-container .file-entry-upload-progress {
    border-radius: 0 0 4px 4px
}

.lfr-preview-file-image img {
    box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.8)
}

.lfr-preview-file-image-current-column {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.8)
}

.lfr-preview-file-image-current-column {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8)
}

.portlet-document-library .lfr-ddm-small-image-preview,
.portlet-dynamic-data-mapping .lfr-ddm-small-image-preview {
    box-shadow: 0 1px 3px #CCC
}

.portlet-document-library-upload-mask .overlaymask-content {
    border-radius: 5px
}

.lfr-search-combobox-item {
    border-radius: 1px
}

.lfr-search-combobox .field-input-text {
    border-radius: 4px 1px 1px 4px
}

.lfr-search-combobox .button-input {
    border-radius: 1px 4px 4px 1px
}

.lfr-upload-container .progress-bar,
.lfr-upload-container .progress,
.lfr-editable:after {
    border-radius: 10px
}

.portlet-language .portlet-body .current-language,
.portlet-language .portlet-body .taglib-icon,
.portlet-language .portlet-body .taglib-language-list-text {
    border-radius: 10px
}

body>.lfr-menu-list ul,
.active-area-proxy,
.entry-display-style .entry-thumbnail,
.lfr-api-results,
.lfr-translation-manager,
.lfr-translation-manager-translation,
.lfr-upload-container .cancel-button .modify-pages .delete-tab,
.portlet-image-gallery-display .image-thumbnail img,
.rule-group-instance-container .rule-group-instance,
.select-documents,
.select-files,
.taglib-ratings.stars:hover,
.taglib-ratings.stars:hover .liferay-rating-vote>div,
.taglib-ratings.stars .rating-focused>div,
.tags-search-combobox .field-input-text {
    border-radius: 4px
}

.entry-display-style,
.lfr-search-combobox,
.lfr-upload-container .upload-file,
.lfr-upload-container .upload-target,
.portlet-document-library .common-file-metadata-container.selected,
.portlet-document-library-display .common-file-metadata-container.selected,
.portlet-image-gallery-display .image-icon,
.select-documents,
.select-files {
    border-radius: 5px
}

.portlet-dynamic-data-list-display .lfr-ddm-container .lfr-ddm-repeatable-placeholder,
.portlet-dynamic-data-lists .lfr-ddm-container .lfr-ddm-repeatable-placeholder {
    border-radius: 6px
}

.taglib-categorization-filter .asset-entry {
    border-radius: 14px
}

.menu-content {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group {
    box-shadow: none
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label:hover .number,
.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label:focus .number {
    box-shadow: 0 0 5px 0 #333;
    -webkit-transition-duration: .25s;
    transition-duration: .25s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out
}

.taglib-form-navigator>.form-steps>ul.form-navigator.list-group .tab .tab-label .number {
    border-radius: 50%
}

.underlay-content {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px
}

.input-localized .lfr-input-localized-state {
    border-radius: 3px
}

.input-localized .lfr-input-localized .lfr-input-localized-state {
    box-shadow: 0 0 3px #DDD
}

.input-localized .lfr-input-localized .lfr-input-localized-state.lfr-input-localized-state-error {
    box-shadow: 0 0 3px #ff0047
}

.input-localized .palette-item-selected .lfr-input-localized-state {
    box-shadow: 0 0 3px #27c1f2
}

.lfr-content-preview-popup .lfr-content-preview-popup-content {
    border-radius: 0;
    box-shadow: 8px 3px 7px rgba(0, 0, 0, 0.25)
}

.lfr-message .lfr-message-control {
    border-radius: 10px
}

.lfr-token {
    border-radius: 8px
}

.staging-tabview-list {
    border-radius: 0
}

.site-variations-tabview-list .tab-content,
.staging-tabview-list .tab-active .tab-content,
.tagselector-content .textboxlistentry-holder .lfr-tag-selector-input:focus {
    box-shadow: none
}

.rule-group-instance-container .rule-group-instance {
    box-shadow: 1px 1px 2px #999
}

.lfr-action-label {
    border-radius: 2px
}

@-webkit-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

@-moz-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

@-o-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

@keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

.lfr-progress-active .progress-bar-status,
.lfr-upload-container .file-uploading .progress-bar .progress {
    background-size: 40px 40px;
    background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0));
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0));
    -moz-animation: progress-bar-stripes .5s linear infinite;
    -webkit-animation: progress-bar-stripes .5s linear infinite;
    -o-animation: progress-bar-stripes .5s linear infinite;
    -ms-animation: progress-bar-stripes .5s linear infinite;
    animation: progress-bar-stripes .5s linear infinite;
    -webkit-transition: width, 0.5s, ease-out;
    -o-transition: width, 0.5s, ease-out;
    transition: width, 0.5s, ease-out
}

@-webkit-keyframes highlight-animation {
    from {
        background-color: #FFC
    }

    to {
        background-color: transparent
    }
}

@-moz-keyframes highlight-animation {
    from {
        background-color: #FFC
    }

    to {
        background-color: transparent
    }
}

@-o-keyframes highlight-animation {
    from {
        background-color: #FFC
    }

    to {
        background-color: transparent
    }
}

@keyframes highlight-animation {
    from {
        background-color: #FFC
    }

    to {
        background-color: transparent
    }
}

.highlight-animation {
    -moz-animation: highlight-animation .7s;
    -webkit-animation: highlight-animation .7s;
    -o-animation: highlight-animation .7s;
    -ms-animation: highlight-animation .7s;
    animation: highlight-animation .7s
}

.lfr-spa-loading .lfr-spa-loading-bar {
    -moz-animation: shift-rightwards 1s ease-in-out infinite;
    -webkit-animation: shift-rightwards 1s ease-in-out infinite;
    -o-animation: shift-rightwards 1s ease-in-out infinite;
    -ms-animation: shift-rightwards 1s ease-in-out infinite;
    animation: shift-rightwards 1s ease-in-out infinite;
    -moz-animation-delay: .4s;
    -webkit-animation-delay: .4s;
    -o-animation-delay: .4s;
    -ms-animation-delay: .4s;
    animation-delay: .4s
}

.lfr-spa-loading-bar {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%)
}

@-webkit-keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }

    40% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@-moz-keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }

    40% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@-o-keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }

    40% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@keyframes shift-rightwards {
    0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%)
    }

    40% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%)
    }
}

.mobile.touch body:first-of-type .portlet-content .lfr-icon-actions .lfr-icon-menu-text,
.mobile.touch body:first-of-type .portlet-content .lfr-icon-actions .taglib-text {
    max-width: 200px
}

.portlet-boundary.yui3-dd-dragging {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-transition: transform .3s ease;
    -o-transition: transform .3s ease;
    transition: transform .3s ease
}

.portlet-document-library .entry-thumbnail .label,
.portlet-document-library-display .workflow-status .label,
.portlet-journal .entry-thumbnail .label {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.portlet-options.btn-group .dropdown-toggle,
.portlet-options.btn-group.open .dropdown-toggle {
    box-shadow: none
}

@-webkit-keyframes lfr-drop-active {
    0% {
        background-color: #ebebeb;
        border-color: #DDD
    }

    50% {
        background-color: #ddedde;
        border-color: #7D7;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1)
    }

    75% {
        background-color: #ddedde;
        border-color: #7D7
    }

    100% {
        background-color: #ebebeb;
        border-color: #DDD
    }
}

@-moz-keyframes lfr-drop-active {
    0% {
        background-color: #ebebeb;
        border-color: #DDD
    }

    50% {
        background-color: #ddedde;
        border-color: #7D7;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1)
    }

    75% {
        background-color: #ddedde;
        border-color: #7D7
    }

    100% {
        background-color: #ebebeb;
        border-color: #DDD
    }
}

@-o-keyframes lfr-drop-active {
    0% {
        background-color: #ebebeb;
        border-color: #DDD
    }

    50% {
        background-color: #ddedde;
        border-color: #7D7;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1)
    }

    75% {
        background-color: #ddedde;
        border-color: #7D7
    }

    100% {
        background-color: #ebebeb;
        border-color: #DDD
    }
}

@keyframes lfr-drop-active {
    0% {
        background-color: #ebebeb;
        border-color: #DDD
    }

    50% {
        background-color: #ddedde;
        border-color: #7D7;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1)
    }

    75% {
        background-color: #ddedde;
        border-color: #7D7
    }

    100% {
        background-color: #ebebeb;
        border-color: #DDD
    }
}

.upload-drop-active .lfr-upload-container .upload-target {
    -moz-animation: none;
    -webkit-animation: none;
    -o-animation: none;
    -ms-animation: none;
    animation: none
}

.upload-drop-active .portlet-document-library .document-container {
    box-shadow: inset 0 0 5px #b8c1d1
}

.upload-drop-intent .lfr-upload-container .upload-target {
    -moz-animation: lfr-drop-active 1s ease .2s infinite;
    -webkit-animation: lfr-drop-active 1s ease .2s infinite;
    -o-animation: lfr-drop-active 1s ease .2s infinite;
    -ms-animation: lfr-drop-active 1s ease .2s infinite;
    animation: lfr-drop-active 1s ease .2s infinite
}

.quick-access-nav a {
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_toolgroup,
.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_toolgroup:hover {
    box-shadow: initial
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button:hover {
    box-shadow: none
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button .cke_button_label:after {
    background-image: -webkit-linear-gradient(#FFF, #e4e4e4);
    background-image: linear-gradient(#FFF, #e4e4e4);
    border-radius: 2px
}

.cke_toolbar.cke_toolbar__a11yhelpbtn .cke_button .cke_button_label:hover:after {
    background-image: -webkit-linear-gradient(#f2f2f2, #CCC);
    background-image: linear-gradient(#f2f2f2, #CCC)
}

input.switch:focus~.switch-bar:before {
    box-shadow: 0 0 3px #00F
}

input.switch:empty~.switch-bar:after,
input.switch:empty~.switch-bar:before,
input.switch:empty~.switch-bar .switch-icon,
input.switch:empty~.switch-bar .switch-toggle:after,
input.switch:empty~.switch-bar .switch-toggle:before {
    -webkit-transition: all 100ms ease-in;
    -o-transition: all 100ms ease-in;
    transition: all 100ms ease-in
}

.taglib-image-selector .glyphicon-ok {
    -webkit-transition: opacity .2s ease-in-out;
    -o-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
    border-radius: 30px
}

.taglib-image-selector .progress-wrapper .progressbar {
    border-radius: 0
}

.drop-here-info {
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out
}

.drop-here-info .drop-icons {
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out
}

.drop-here-info .drop-icons span {
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    border-radius: 3px
}

.drop-here-info .drop-icons span:nth-of-type(1) {
    -webkit-transform: rotate(25deg);
    -moz-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    -o-transform: rotate(25deg);
    transform: rotate(25deg);
    box-shadow: 5px 4px 0 0 rgba(0, 0, 0, 0.08)
}

.drop-here-info .drop-icons span:nth-of-type(2) {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    box-shadow: 0 6px 0 -2px rgba(0, 0, 0, 0.15)
}

.drop-here-info .drop-icons span:nth-of-type(3) {
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg);
    transform: rotate(-25deg);
    box-shadow: -5px 4px 0 0 rgba(0, 0, 0, 0.08)
}

.drop-active .drop-here-info span:nth-of-type(1) {
    -webkit-transform: rotate(-20deg);
    -moz-transform: rotate(-20deg);
    -ms-transform: rotate(-20deg);
    -o-transform: rotate(-20deg);
    transform: rotate(-20deg)
}

.drop-active .drop-here-info span:nth-of-type(2) {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1)
}

.drop-active .drop-here-info span:nth-of-type(3) {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transform: rotate(15deg)
}

.selected {
    font-weight: bold
}

a {
    color: #000
}

a:hover {
    color: #000;
    text-decoration: none;
    background-color: transparent
}

.control-panel {
    padding-top: 40px
}

/* end main 3 */
/* style */
body {
    margin: 0 !important;
    font-family: "Montserrat", sans-serif !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    color: #333 !important;
    background: #F5F9FE !important;
}

a {
    color: #2067DD;
}

a:hover {
    color: #2067DD;
    text-decoration: none;
}

.banner {
    background-image: url('~@/assets/images/bg_bg.jpg');
    background-color: #2B5988;
    text-align: center;
    color: #fff;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center left;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 450px;
    margin-top: 80px;
}

.fixed-top {
    position: fixed !important;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    border: none;
    border-radius: 0;
}

.fixed-top1 {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: #2B5988;
    border: none;
    border-radius: 0;
}

.shrink {
    padding-top: 0;
    padding-bottom: 0;
    background-color: #f8f8f8;
}

.navbar-brand1 {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    padding-right: 10px !important;
}

.mh-75 {
    min-height: 75px;
}

.slogan {
    display: inline-block;
}

.slogan h3 {
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 0;
    font-size: 22px;
    color: #ffd800;
}

.slogan h4 {
    margin-top: 5px;
    font-weight: 300;
    color: #855025;
}

.sticky-top .navbar-nav>li>a {
    color: #fff !important;
}

.sticky-top .navbar-nav>.active>a,
.sticky-top .navbar-nav>.active>a:hover,
.sticky-top .navbar-nav>.active>a:focus {
    color: #ffd800 !important;
    background-color: transparent !important;
}

.mt-10 {
    margin-top: 10px;
}

.box-search {
    margin-top: 130px;
}

.box-search h1 {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 48px;
    text-align: center;
}

.bo-l {
    border-radius: 30px 0 0 30px;
}

.bo-r {
    border-radius: 0 30px 30px 0;
}

@media screen and (max-width: 1024px) {
    .navbar-brand1 img {
        height: 45px;
    }

    .box-slide {
        left: 20px !important;
        right: 20px !important;
    }

    .text-bg-NGSP {
        font-size: 6em !important;
        line-height: 5rem;
        top: 34px !important;
    }
}

@media screen and (max-width: 767px) {
    .navbar-default .navbar-collapse {
        background: #fff8f3;
    }

    .fixed-top .navbar-nav>li>a {
        color: #4a4a4a !important;
    }

    .fixed-top .navbar-nav>li>a:hover {
        color: #855025 !important;
    }

    .nav-data li {
        float: left !important;
    }

    .navbar-toggle {
        margin-top: 15px;
    }

    .mt-80 {
        margin-top: 60px !important;
    }

    .mt-150 {
        margin-top: 85px;
    }

    .mt-30slide {
        margin-top: 0px !important;
    }

    .bg-slide {
        height: 667px !important;
    }

    .mh-250 {
        min-height: auto !important;
    }

}

@media screen and (max-width: 500px) {

    .slogan h3,
    .slogan h4 {
        font-size: 90%;
    }

    .navbar-brand>img {
        height: 45px;
    }

    .media-object {
        width: 120px;
    }

    .box-new {
        min-height: 156px;

    }
}

.bt-dn {
    color: #2067DD !important;
    /*border-radius: 20px;

padding-top: 10px !important;

padding-bottom: 10px !important;*/
    text-transform: uppercase;
    margin-top: 5px;
}

.text-vang {
    color: #fff;
    font-weight: 200;
}

.text-vang:hover {
    color: #ffd800;
}

.notice {
    margin-top: 5px;
}

.notice marquee {
    color: #fff;
}

.notice marquee ul {
    padding: 0;
    margin: 0;
}

.notice marquee ul li {
    line-height: 2;
    margin-right: 15px;
}

.notice marquee ul li:before {
    content: '\f061';
    font-family: 'FontAwesome';
    display: inline-block;
    color: #fdb10f;
    margin-right: 6px;
    font-size: 10px;
}

.flash-box {
    width: 150px;
    height: 38px;
    position: relative;
    background: #c9302c;
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 2.3;
}

.flash-box:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #c9302c;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}

.flash-box:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: -1px;
    width: 0;
    height: 0;
    border-left: 20px solid #c9302c;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
}

marquee {
    position: relative;
    top: 4px;
}

.text-mac {
    color: #fff;
}

.font18 {
    font-size: 18px;
}

.text-mac:hover {
    color: #F8C100;
}

.bg-xam {
    background: #F5F5F5;
}

.pad-TB30 {
    padding-top: 30px;
    padding-bottom: 30px;
}

.tle {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 700;
    color: #083071;
}

.box1 {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    display: inline-block;
    margin-bottom: 20px;
}

.mr-10 {
    margin-right: 10px;
}

.mr-5 {
    margin-right: 5px;
}

.tle1 {
    line-height: 1.3;
}

.tle1 a {
    color: #333;
    font-size: 16px;
}

.mb-30 {
    margin-bottom: 30px;
}

.mb-20 {
    margin-bottom: 20px;
}

.ml-5 {
    margin-left: 5px;
}

.bg-xanh {
    background: #2067DD !important;
    border-color: #2067DD !important;
    color: #fff;
}

.img-dt {
    display: block;
    text-align: center;
    min-height: 120px;
    margin-bottom: 20px;
    position: relative;
}

.pos {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.bg-xanh-dam {
    background: #DFEAFB;
    padding-bottom: 10px;
    padding-top: 10px;
}

.text-xanhnhat {
    color: #083071;
}

.text-xanhnhat:hover {
    color: #fff;
}

.text-trang {
    color: #fff;
}

.menu-f li a {
    padding-bottom: 5px;
    padding-top: 5px;
    display: block;
    color: #fff;
}

.breadcrumb {
    background-color: transparent;
    border-bottom: solid 1px #ccc;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
}

.mt-70 {
    margin-top: 70px;
}

.ml-10 {
    margin-left: 10px;
}

.mta-20 {
    margin-top: -30px;
}

.mt-0 {
    margin-top: 0;
}

.bo-b {
    border-bottom: solid 1px #ccc;
    margin-bottom: 20px;
}

.w-1 {
    width: 200px;
}

.text-xanh {
    color: #2B5988;
}

.mb-50 {
    margin-bottom: 50px;
}

.text-warning {
    color: #ff9600;
}

.box-tin {
    position: relative;
}

.organization-type-wrap {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
    width: 100px;
    height: 100px;
}

.organization-type {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
    position: absolute;
    right: 0;
    width: 120px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    top: -18px;
    right: -54px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    background-color: #666;
}

.organization-type[data-organization-type="federal"] {
    background-color: #71999f;
}

.organization-type[data-organization-type="university"] {
    background-color: #71769f;
}

.organization-type {
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color:
        white;
}

.text-black {
    color: #333;
}

.ul-pt {
    padding-left: 0;
    list-style: none;
}

.ul-pt li {
    background: url("~@/assets/images/Component%205%20%C3%A2__%2075.png") no-repeat 5px;
    padding-left: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
}

.ul-pt li a {
    color: #333;
}

.ul-pt li a:hover {
    color: #2B5988;
}

.mt-50 {
    margin-top: 50px;
}

.table-bordered>thead>tr>th {
    text-align: center;
    background: #2067DD;
    color: #fff;
    text-transform: uppercase;
}

.table>thead>tr>th,
.table>tbody>tr>th,
.table>tfoot>tr>th,
.table>thead>tr>td,
.table>tbody>tr>td,
.table>tfoot>tr>td {
    padding: 13px;
}

.table-bordered>thead>tr>th,
.table-bordered>thead>tr>td {
    border-bottom: solid 3px #ffd800;
}

.table-bordered {
    border: solid 2px #2067DD;
}

.bg-danger1 {
    background: #ff0000;
}

.bg-vang {
    background: #ffba00;
}

.bg-xanhla {
    background: #16922b;
}

.bg-xanhnhe {
    background: #76c3f0;
}

.bg-danger1,
.bg-vang,
.bg-xanhla,
.bg-xanhnhe {
    text-align: center;
}

.nav-data>li.active>a,
.nav-data>li.active>a:hover,
.nav-data>li.active>a:focus {
    color: #ffd800 !important;
    border: none !important;
}

.nav-data {
    border-bottom: none !important;
    background: #fff !important;
}

.nav-data li {
    margin-bottom: 20px !important;
}

.nav-data li a {
    color: #888888 !important;
    padding: 0 5px !important;
    border: none !important;
}

.nav-data li a:hover {
    color: #ffd800 !important;
    background: #fff !important;
    border: none !important;
}

.nav-data.nav-justified>li>a {
    border-bottom: none !important;
}

.bg-map {
    background: url("~@/assets/images/map.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 799px;
}

.bt-xemthem {
    border: solid 1px #ffd800;
    border-radius: 30px;
    padding: 6px 12px;
}

.bt-xemthem:hover {
    background: #ffd800;
    color: #fff;
    text-decoration: none;
}

.hedear-tab {
    background: #fff;
    border-bottom: solid 1px #ccc;
    padding-top: 20px;
}

.mb-10 {
    margin-bottom: 10px;
}

.logo-f a {
    margin-left: 10px;
    margin-right: 10px;
}

.mb-0 {
    margin-bottom: 0;
}

.box-lv {
    margin-bottom: 30px;
}

.box-lv a {
    color: #717171;
}

.box-lv a:hover {
    color: #ffd800;
}

.mt-20 {
    margin-top: 20px;
}

.mt-20 {
    margin-top: 20px;
}

.tle-home {
    background: #ffd800;
    border-radius: 4px 4px 0 0;
    padding: 14px 14px 8px 14px;
    margin-bottom: 0;
    text-align: center;
}

.tle-home a {
    color: #fff;
    text-transform: uppercase;
}

.box-tin1 {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    margin-bottom: 20px;
}

.box-tin1 h4 {
    border-bottom: 2px solid #ffd800;
    color: #ffd800;
    text-transform: uppercase;
    padding: 14px 14px 8px 14px;
    margin-top: 0;
}

.pad-20 {
    padding: 20px;
}

.link-a {
    color: #333;
    font-size: 16px;
}

.min-h600 {
    min-height: 790px;
}

.mt-100 {
    margin-top: 100px;
}

.box-tke {
    background: #f8f8f8;
    padding: 20px;
    border-radius: 6px;
}

.item-data {
    border: none;
    background-color: transparent;
}

.text-so {
    font-size: 20px;
    color: #2067DD;
}

.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
    background: #e3eeff;
    border-color: #e3eeff;
    color: #2067DD;
    font-weight: 700;
}

.tle-trang {
    border-bottom: 2px solid #2067DD;
    color: #2067DD;
    text-transform: uppercase;
    padding-bottom: 8px;
}

.pagination>.active>a,
.pagination>.active>span,
.pagination>.active>a:hover,
.pagination>.active>span:hover,
.pagination>.active>a:focus,
.pagination>.active>span:focus {
    background: #2067DD;
    border-color: #2067DD;
}

.pagination>li>a,
.pagination>li>a:hover,
.pagination>li>span:hover,
.pagination>li>a:focus,
.pagination>li>span:focus {
    color: #2067DD;
}

.tle-tt {
    color: #2067DD;
    border-bottom: solid 1px #dc9f6e;
    text-transform: uppercase;
    padding-bottom: 5px;
    margin-bottom: 30px;
}

.text-atin {
    color: #333;

}

.text-atin:hover,
.ul-tintiep li a:hover,
.ul-tintiep1 li a:hover {
    color: #2067DD;
}

.ul-tintiep li {
    background: url("~@/assets/images/Component%205%20%E2%80%93%2075.png") no-repeat left 7px;
    padding-left: 15px;
    margin-bottom: 20px;
    text-align: justify;
}

.ul-tintiep li a {
    color: #333;
}

.ul-tintiep1 li {
    margin-bottom: 20px;
    text-align: justify;
}

.ul-tintiep1 li a {
    color: #333;
}

/*mạng XH*/
.mang-right {
    text-align: right;
}

.mang-right p {
    margin-bottom: 0;
}

.bg-FB {
    background: #3a5ca3;
    border: solid 1px #3a5ca3;
    color: #fff;
}

.bg-FB:hover {
    background: #294785;
    border: solid 1px #294785;
    color: #fff;
}

.mau-FB {
    color: #3a5ca3;
}

.mau-T {
    color: #38a5c9;
}

.mau-G {
    color: #f6424d;
}

.mau-P {
    color: #ab2129;
}

/*end mạng XH*/

.dvi {
    border-radius: 6px;
    background: #dc9f6e;
    font-size: 13px;
    color: #fff;
    padding: 4px 10px;
}

.tle1a {
    border-bottom: solid 1px #dc9f6e;
    color: #dc9f6e;
    text-transform: uppercase;
    padding-bottom: 5px;
    margin-top: 0;
}

.box1a {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 30px;
}

.mh5 {
    min-height: 360px;
}

.mt-30 {
    margin-top: 30px;
}

.mt-30slide {
    margin-top: 30px;
}

/*slide*/
.mt-80 {
    margin-top: 80px;
}

.tle-slide {
    font-weight: 700;
    font-size: 50px;
}

#thumbnail-preview-indicators {
    position: relative;
    overflow: hidden;
}

#thumbnail-preview-indicators .slides .slide-1,
#thumbnail-preview-indicators .slides .slide-2,
#thumbnail-preview-indicators .slides .slide-3 {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

#thumbnail-preview-indicators,
#thumbnail-preview-indicators .slides,
#thumbnail-preview-indicators .slides .slide-1,
#thumbnail-preview-indicators .slides .slide-2,
#thumbnail-preview-indicators .slides .slide-3 {
    height: 450px;
}

#thumbnail-preview-indicators .carousel-inner .item .carousel-caption {
    top: 30%;
    bottom: inherit;
}

#thumbnail-preview-indicators .carousel-indicators li,
#thumbnail-preview-indicators .carousel-indicators li.active {
    position: relative;
    width: 100px;
    height: 8px;
}

#thumbnail-preview-indicators .carousel-indicators li>.thumbnail {
    position: absolute;
    top: 0;
    width: 100px;
    display: none;
    opacity: 0;
    left: 50%;
    margin-top: -80px;
    margin-left: -50px;
}

#thumbnail-preview-indicators .carousel-indicators li:hover>.thumbnail,
#thumbnail-preview-indicators .carousel-indicators li.active>.thumbnail {
    display: block;
    opacity: .8;
}

#thumbnail-preview-indicators .carousel-indicators li.active>.thumbnail:hover {
    opacity: 1;
}

@media screen and (max-width : 480px) {

    #thumbnail-preview-indicators .carousel-indicators li,
    #thumbnail-preview-indicators .carousel-indicators li.active {
        width: 50px;
        height: 8px;
        position: relative;
    }

    #thumbnail-preview-indicators .carousel-indicators li>.thumbnail {
        width: 50px;
        left: 50%;
        margin-top: -50px;
        margin-left: -25px;
    }

    .tle-slide {
        font-size: 30px;
        font-weight: 400;
    }
}

/*end slide*/
.box-slide {
    position: absolute;
    left: 35%;
    right: 35%;
    z-index: 10;
}

.font30 {
    font-size: 30px !important;
}

.font22 {
    font-size: 22px !important;
    line-height: 2;
}

.lin22 tr td i {
    line-height: 3;
}

.font30a {
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
}

.mh-200 {
    min-height: 257px;
}

.cach {
    margin-left: 10px;
    margin-right: 10px;
    color: #ccc;
}

.dropdown {
    border-radius: 0;
    border: 0;
}

.dropdown-menu {
    border: 0;
    top: 102%;
    border-radius: 0px 0px 5px 5px;
    border-top: solid 3px #ffd800;

}

.dropdown-item:hover {
    background: #085ca5;
    color: #fff;
}

.dropdown-menu a {
    color: #fff;
    font-size: 16px;
    padding: 15px 20px !important;
}

.dropdown-menu a:hover {
    color: #2067DD !important;
}

.navbar .nav-item .nav-link {}

.navbar-default .navbar-nav>li>a:hover {
    color: #ffd800 !important;
}

.navbar-default .navbar-nav>li>a {}

.navbar .nav-item .nav-link:hover .navbar .nav-item .nav-link {
    color: red !important;

}

.arrow-up {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
    border-bottom: 10px solid #ffd800;
}

.dmenu .arrow-up {
    position: absolute;
    top: -10px;
    left: 45%;
}

.modal-header {
    border-bottom: 2px solid #2067DD;
}

.modal-title {
    color: #2067DD;
}

.btn-primary {
    background: #dc9f6e;
    border-color: #dc9f6e;
}

.btn-primary:hover {
    background: #ffd800;
    border-color: #ffd800;
}

.text-trang:hover {
    color: #fff;
}

.lin2 {
    line-height: 2;
    font-size: 14px;
}

.line {
    border-radius: 4px;
    background: #2067DD;
    width: 100px;
    height: 6px;
    display: inline-block;
}

.box_dvi {
    border: solid 1px #eee;
    border-radius: 6px;
    display: inline-block;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
}

.fa-15x {
    font-size: 1.5em !important;
}

.navbar-default {
    background-color: transparent !important;
}

.bg-slide {
    background: url("~@/assets/images/bg_slide.png") !important;
    background-repeat: no-repeat !important;
    background-attachment: scroll !important;
    background-position: right bottom !important;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    height: 500px;
}

.mt-150 {
    margin-top: 150px;
}

.bo-none {
    border-color: #fff !important;
}

.text-xam {
    color: #8B8B8B;
}

.text-to {
    font-weight: 200;
    color: #fff;
    font-size: 50px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

@media (min-width: 1200px) {
    .padLR-50 {
        padding-left: 50px !important;
        padding-right: 50px !important;
        padding-top: 5px !important;
        padding-bottom: 5px !important;
    }
}

.bg-trang {
    background: #fff;
}

.box-new {
    background: #fff;
    padding: 20px 10px;
    box-shadow: 0 2px 6px 0 rgba(32, 103, 221, 0.2), 0 4px 20px 0 rgba(32, 103, 221, 0.19);
    border-radius: 4px;
    color: #083071;
    display: block;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
}

.box-new1 {
    background: #fff;
    padding: 20px;
    box-shadow: 0 2px 6px 0 rgba(32, 103, 221, 0.2), 0 4px 20px 0 rgba(32, 103, 221, 0.19);
    border-radius: 4px;
    color: #083071;
    display: block;
    margin-bottom: 20px;

}

.box-tin {
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(32, 103, 221, 0.2), 0 4px 20px 0 rgba(32, 103, 221, 0.19);
    border-radius: 4px;
    color: #083071;
    display: block;
    margin-bottom: 20px;
}

.box-vien {
    padding: 15px;
    border-radius: 4px;
    border: solid 1px #5ea6ff;
    display: block;
    margin-bottom: 20px;
}

.pad-TB40 {
    padding-top: 40px;
    padding-bottom: 20px;
}

.box-vien h2 {
    color: #fff;
    font-weight: 600;
}

.box-vien p {
    color: #c9e1ff;
}

.bg-xanhduong {
    background: url("~@/assets/images/so001.png") repeat top #2067DD;
    padding-top: 40px;
    padding-bottom: 20px;
}

.font65 {
    font-size: 65px;
    font-weight: 700;
    color: #fff;
}

.font33 {
    font-size: 33px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    margin-top: 0;
}

.mh-100 {
    min-height: 106px;
}

.bg-trang {
    padding-bottom: 40px;
    padding-top: 40px;
    background: #fff;
}

.pad-0 {
    padding: 0 !important;
}

.mh-250 {
    min-height: 635px;
}

.box-ndtin {
    padding: 20px;
    min-height: 250px
}

.text-ft h4 {
    font-weight: 200;
    text-transform: uppercase;
    font-size: 22px;
    margin-top: 0;
}

.text-ft h2 {
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0;
}

/*mennu shrink*/
nav {
    -webkit-transition: padding-top .3s, padding-bottom .3s !important;
    -moz-transition: padding-top .3s, padding-bottom .3s !important;
    transition: padding-top .3s, padding-bottom .3s !important;
    border: none !important;
    /*background: #102550;*/
}

.shrink {
    padding-top: 0;
    padding-bottom: 0;
    background-color: #2067DD !important;
}

/*end shrink*/
.nav-page {
    background: #2067DD !important;
}

.nav-tabs>li.active>a,
.nav-tabs>li.active>a:hover,
.nav-tabs>li.active>a:focus {
    background: #2067DD !important;
    color: #fff !important;
    border-color: #2067DD !important;
}

.nav-tabs {
    border-bottom-color: #2067DD !important;
}

.nav-tabs>li>a {
    color: #707070 !important;
}

.text-bg-NGSP {
    color: rgba(255, 255, 255, 0.05);
    font-weight: 700;
    font-size: 20em;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    line-height: 5rem;
    top: 280px;
}

.tle-trang1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 5px;
}

.line-trang {
    border-radius: 4px;
    background: #fff;
    width: 100px;
    height: 6px;
    display: inline-block;
}

.min-H250 {
    min-height: 232px;
}

.mt-47 {
    margin-top: 58px;
}

.pos-a {
    position: relative;
}

.tle-ft {
    color: #a6c6fb;
    margin-bottom: 0;
    text-transform: uppercase;
}

.menu-f li a,
.menu-f li,
.text-ft p {
    padding-top: 5px;
    display: block;
    color: #fff;
    font-weight: 300;
}

/* end style */

/* combo 1 */
.lfr-simulation-panel.open-admin-panel.sidenav-menu-slider {
    visibility: visible;
    width: 320px
}

.lfr-simulation-panel .custom-devices {
    background-color: #393a4a;
    border-radius: 4px;
    margin: 0 10px 20px;
    padding: 8px 6px 16px
}

.lfr-simulation-panel .custom-devices label {
    color: #a7a9bc;
    font-size: 12px
}

.lfr-simulation-panel .custom-devices .form-control {
    border-radius: 4px;
    padding: 8px 12px
}

.lfr-simulation-panel .custom-devices .form-group {
    margin-bottom: 0
}

.lfr-simulation-panel .default-devices {
    margin-bottom: 20px;
    padding: 0 14px
}

.lfr-simulation-panel .default-devices .icon-monospaced {
    color: #a7a9bc;
    height: 2.5rem;
    width: 2.5rem
}

.lfr-simulation-panel .default-devices .icon-monospaced>.lexicon-icon {
    height: 1.2em;
    margin-top: 3px;
    width: 1.2em
}

.lfr-simulation-panel .default-devices small {
    color: #a7a9bc;
    margin: 4px 0 16px
}

.lfr-simulation-panel .lfr-device-item.selected {
    color: #FFF
}

.lfr-simulation-panel .lfr-device-item.selected .icon {
    background-color: #393a4a;
    border-radius: 4px;
    color: #FFF
}

.lfr-simulation-panel .lfr-device-item.selected small {
    color: #FFF
}

.lfr-simulation-panel .lfr-device-item .icon {
    margin-top: 8px
}

.lfr-simulation-panel .panel .simulation-app-panel-body {
    padding-top: 20px
}

.lfr-device {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
}

.lfr-device .modal-header {
    display: none
}

.lfr-device.autosize {
    border-width: 0
}

.lfr-device .lfr-device-size-status {
    position: absolute;
    width: 100%
}

.lfr-device .lfr-device-size-status .lfr-device-size-status-content {
    display: inline-block;
    font-size: 11px;
    height: 22px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 4px
}

.lfr-device .lfr-device-size-status.b,
.lfr-device .lfr-device-size-status.bl,
.lfr-device .lfr-device-size-status.br {
    bottom: 10px
}

.lfr-device .lfr-device-size-status.t,
.lfr-device .lfr-device-size-status.tl,
.lfr-device .lfr-device-size-status.tr {
    top: 10px
}

.lfr-device .lfr-device-size-status.b,
.lfr-device .lfr-device-size-status.t {
    text-align: center
}

.lfr-device .lfr-device-size-status.r,
.lfr-device .lfr-device-size-status.br,
.lfr-device .lfr-device-size-status.tr {
    text-align: right
}

.lfr-device .lfr-device-size-status.l,
.lfr-device .lfr-device-size-status.bl,
.lfr-device .lfr-device-size-status.tl {
    text-align: left
}

.lfr-device .lfr-device-size-status.r,
.lfr-device .lfr-device-size-status.l {
    margin-top: -15px;
    top: 50%
}

.lfr-device:after {
    bottom: 10px;
    content: '';
    display: none;
    height: 30px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 30px
}

.lfr-device:before {
    content: '';
    display: none;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 20px
}

.lfr-device.rotated:after {
    bottom: 0;
    left: 10px;
    margin: auto;
    right: auto;
    top: 0
}

.lfr-device.rotated:before {
    bottom: 0;
    left: auto;
    margin: auto;
    right: 20px;
    top: 0
}

.lfr-device.smartphone:after,
.lfr-device.smartphone:before,
.lfr-device.tablet:after,
.lfr-device.tablet:before {
    display: block
}

.lfr-device.smartphone {
    padding: 50px 10px
}

.lfr-device.smartphone.rotated {
    padding: 10px 50px
}

.lfr-device.smartphone.rotated:before {
    height: 50px;
    width: 5px
}

.lfr-device.smartphone:before {
    height: 5px;
    width: 50px
}

.lfr-device.tablet {
    padding: 50px 20px
}

.lfr-device.tablet.rotated {
    padding: 20px 50px
}

.lfr-device.tablet.rotated:before {
    height: 10px;
    width: 10px
}

.lfr-device.tablet:before {
    height: 10px;
    width: 10px
}

.lfr-simulation-device {
    bottom: 25px;
    display: none;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 320px;
    top: 68px;
    z-index: 500
}

.lfr-simulation-device .modal-content {
    border-width: 0
}

.lfr-simulation-device .modal-dialog {
    position: absolute
}

.lfr-simulation-device .modal-dialog.autosize {
    margin-top: 68px;
    position: fixed
}

.lfr-has-simulation-panel {
    overflow: auto
}

.lfr-has-simulation-panel .lfr-configurator-visibility {
    display: none
}

.lfr-has-simulation-panel .lfr-simulation-device {
    display: block
}

.lfr-has-simulation-panel .simulation-icon {
    display: none
}

.lfr-simulation-device {
    background-color: rgba(255, 255, 255, 0.95)
}

.lfr-simulation-device .lfr-device-size-status-content {
    border-radius: 3px;
    box-shadow: 0 0 1px #FFF;
    opacity: .9
}

.lfr-simulation-device .lfr-device:after,
.lfr-simulation-device .lfr-device:before {
    box-shadow: #111 0 1px 0
}

.lfr-simulation-device .lfr-device:after {
    border-radius: 15px
}

.lfr-simulation-device .lfr-device.rotated:after,
.lfr-simulation-device .lfr-device.rotated:before {
    box-shadow: #111 -1px 1px 0
}

.lfr-simulation-device .lfr-device.smartphone,
.lfr-simulation-device .lfr-device.tablet {
    border-radius: 25px
}

.lfr-simulation-device .lfr-device.tablet:before {
    border-radius: 5px
}

.lfr-simulation-device .modal-dialog {
    max-width: none
}

.lfr-simulation-device .modal-dialog .modal-content {
    border-radius: 0
}

.lfr-device .lfr-device-size-status .lfr-device-size-status-content {
    background-color: #000;
    color: #FFF
}

.lfr-device:after,
.lfr-device:before {
    background: #666
}

.lfr-device.smartphone,
.lfr-device.tablet {
    background: #333
}

@media only screen and (min-width:768px) {
    body.open #wrapper {
        padding-left: 320px
    }
}

@media only screen and (min-width:768px) {

    body.open .control-menu,
    body.open .affix {
        left: 320px
    }
}

@media only screen and (min-width:768px) {

    body.open,
    body.sidenav-transition {
        overflow-x: hidden
    }
}

body.sidenav-transition #wrapper {
    -webkit-transition: padding .5s ease;
    -moz-transition: padding .5s ease;
    transition: padding .5s ease
}

.lfr-product-menu-panel.sidenav-menu-slider {
    z-index: 990
}

.lfr-product-menu-panel.sidenav-menu-slider.open,
.lfr-product-menu-panel.sidenav-menu-slider .sidenav-menu {
    width: 320px
}

.product-menu {
    background-color: #272833
}

.product-menu .company-details {
    float: left;
    width: calc(100% - 32px)
}

@media only screen and (min-width:768px) {
    .product-menu .company-details {
        width: 100%
    }
}

.product-menu .company-details .company-logo {
    margin-right: 16px;
    max-height: 32px;
    max-width: 32px
}

.product-menu .panel-header {
    background-color: #272833
}

.product-menu .form-control {
    background-color: #1b2228;
    border-radius: 0;
    border-width: 0;
    box-shadow: none;
    color: #869cad;
    height: 40px;
    padding: 8px 12px
}

.product-menu .form-control::-webkit-input-placeholder {
    color: #869cad
}

.product-menu .form-control::-moz-placeholder {
    color: #869cad
}

.product-menu .form-control:-moz-placeholder {
    color: #869cad
}

.product-menu .form-control:-ms-input-placeholder {
    color: #869cad
}

.product-menu .form-control:focus {
    color: #FFF
}

.product-menu .form-control:focus::-webkit-input-placeholder {
    color: #FFF
}

.product-menu .form-control:focus::-moz-placeholder {
    color: #FFF
}

.product-menu .form-control:focus:-moz-placeholder {
    color: #FFF
}

.product-menu .form-control:focus:-ms-input-placeholder {
    color: #FFF
}

.product-menu .collapse-icon:before {
    right: 25px
}

.product-menu .lfr-icon-menu .btn-default {
    background-color: transparent
}

.product-menu .lfr-icon-menu .btn-default:active {
    box-shadow: none;
    color: #eeeffa
}

.product-menu a {
    color: #eeeffa
}

.product-menu a:hover {
    color: #eeeffa
}

.product-menu .dropdown-menu a {
    color: inherit
}

.product-menu .nav-equal-height .nav>.active,
.product-menu .nav-equal-height>.active {
    border-left: 4px solid #FFF;
    font-weight: 700;
    margin-left: -24px;
    padding-left: 20px
}

.product-menu .nav-equal-height>.active>a,
.product-menu .nav-equal-height>.active>a:focus,
.product-menu .nav-equal-height>.active>a:hover,
.product-menu .nav-equal-height .nav>.active>a,
.product-menu .nav-equal-height .nav>.active>a:focus,
.product-menu .nav-equal-height .nav>.active>a:hover {
    color: #FFF
}

.product-menu .nav-equal-height>.active,
.product-menu .nav-equal-height .nav>.active {
    border-left-color: #FFF
}

.product-menu .nav-equal-height-heading:focus,
.product-menu .nav-equal-height-heading:hover {
    background-color: transparent
}

.product-menu .nav-equal-height-heading .collapse-icon:after,
.product-menu .nav-equal-height-heading .collapse-icon.collapsed:after {
    background-color: #1a2126;
    height: 12px
}

.product-menu .nav-equal-height-heading .collapse-icon:before {
    color: #eeeffa;
    content: "";
    font-size: 15px;
    left: -8px
}

.product-menu .nav-equal-height-heading .collapse-icon.collapsed:before {
    content: ""
}

.product-menu .nav-nested-margins>li .nav>li {
    border-left: 2px solid #eeeffa
}

.product-menu .nav-nested-margins>li .nav>li .nav>li {
    border-left: 1px dotted #eeeffa
}

.product-menu .nav-nested-margins>li .nav>li .nav>li.active {
    border-left: 1px solid #FFF
}

.product-menu .nav-nested-margins>li .nav>li .nav>li.active>a {
    color: #FFF
}

.product-menu .sidebar-header {
    background-color: #272833;
    color: #d5d6e1
}

.product-menu .sidebar-header a {
    color: #FFF
}

.product-menu .sidebar-header a:focus,
.product-menu .sidebar-header a:hover {
    color: #FFF
}

.product-menu a.list-group-heading,
.product-menu button.list-group-heading,
.product-menu .list-group-heading[data-toggle="collapse"] {
    color: #FFF
}

.product-menu .list-group {
    box-shadow: none;
    margin-bottom: 0
}

.product-menu .list-group-heading.goto-link {
    color: #eeeffa;
    font-size: .8rem
}

.product-menu .list-group-heading.goto-link:hover {
    text-decoration: underline
}

.product-menu .list-group-heading>.panel-toggler,
.product-menu .panel-title>.panel-toggler {
    line-height: 32px;
    padding: 10px 44px 10px 24px
}

.product-menu .list-group-heading .aspect-ratio-bg-cover,
.product-menu .panel-title .aspect-ratio-bg-cover {
    background-size: contain
}

.product-menu .list-group-heading .site-administration-toggler,
.product-menu .panel-title .site-administration-toggler {
    padding-right: 85px
}

.product-menu .list-group-heading {
    background-color: transparent;
    border-color: transparent;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: normal;
    word-wrap: normal;
    word-break: normal
}

.product-menu .list-group-heading.active {
    background-color: #393a4a
}

.product-menu .list-group-heading.active+div {
    background-color: #393a4a
}

.product-menu .list-group-heading:after {
    background-color: transparent;
    height: 0
}

.product-menu .list-group-heading:focus,
.product-menu .list-group-heading:hover {
    background-color: transparent
}

.product-menu .list-group-heading.collapsed {
    font-weight: 400
}

.product-menu .list-group-heading.collapsed:after {
    background-color: transparent;
    height: 0
}

.product-menu .list-group-heading {
    padding-left: 24px
}

.product-menu .list-group-item {
    border-width: 0;
    padding: 8px 8px 8px 24px
}

.product-menu .collapse>.list-group-item,
.product-menu .collapsing>.list-group-item {
    background-color: transparent
}

.product-menu .nav>li>a:focus,
.product-menu .nav>li>a:hover {
    background-color: transparent
}

.product-menu .panel {
    background-color: transparent;
    border-left-width: 0;
    border-radius: 0;
    border-right-width: 0;
    border-top-width: 0;
    box-shadow: none;
    color: #eeeffa
}

.product-menu .panel:not(:first-of-type) {
    border-top: 1px solid #393a4a
}

.product-menu .panel-body {
    background-color: #30313f;
    padding: 0
}

.product-menu .panel-group {
    margin-bottom: 0
}

.product-menu .panel-group .panel+.panel {
    margin-top: 0
}

.product-menu .panel-group .panel-heading+.panel-collapse>.panel-body,
.product-menu .panel-group .panel-heading+.panel-collapse>.list-group {
    border-top-width: 0
}

.product-menu .panel-group .panel-heading+.panel-collapse.in,
.product-menu .panel-group .panel-heading+.panel-collapse.collapsing {
    border-bottom: 2px solid #65b6f0
}

.product-menu .panel-header,
.product-menu .panel-heading {
    border-bottom-width: 1px;
    font-size: inherit;
    line-height: 1.5;
    position: relative
}

.product-menu .panel-header .panel-title>.panel-toggler:not(.collapsed),
.product-menu .panel-heading .panel-title>.panel-toggler:not(.collapsed) {
    background-color: #393a4a;
    border-left: 4px solid #65b6f0;
    font-weight: 700;
    padding-left: 20px
}

.product-menu .panel-header .panel-title>.panel-toggler .category-name,
.product-menu .panel-header .panel-title>.panel-toggler .user-name,
.product-menu .panel-header .panel-title>.panel-toggler .site-name,
.product-menu .panel-heading .panel-title>.panel-toggler .category-name,
.product-menu .panel-heading .panel-title>.panel-toggler .user-name,
.product-menu .panel-heading .panel-title>.panel-toggler .site-name {
    color: #FFF
}

.product-menu .panel-header .collapse-icon-closed,
.product-menu .panel-header .collapse-icon-open {
    font-size: inherit;
    top: 50%
}

.product-menu .panel-header.panel-heading {
    border-bottom-width: 0;
    padding: 0
}

.product-menu .user-icon,
.product-menu .sticker {
    display: inline-block;
    float: left;
    margin-right: 16px;
    position: static;
    vertical-align: middle
}

.product-menu .icon-sites {
    position: absolute;
    right: 46px;
    top: 9px;
    z-index: 1
}

.product-menu .icon-sites a {
    color: #FFF
}

.product-menu .scope-selector span {
    color: #FFF
}

.product-menu .staging-links a,
.product-menu .staging-links .links-separator {
    color: #eeeffa
}

.product-menu .staging-links .active {
    color: #FFF;
    font-weight: 600
}

.product-menu .staging-links .links-separator {
    padding: 0 5px
}

.product-menu .text-muted {
    opacity: .3
}

.product-menu-expanded.sidebar-body {
    overflow: visible
}

.product-menu-expanded.sidenav-fixed.sidenav-menu-slider {
    overflow: auto;
    visibility: visible;
    width: 100%
}

@media only screen and (min-width:768px) {

    body.open-admin-panel,
    body.open-admin-panel .control-menu,
    body.open-admin-panel .affix {
        padding-right: 320px
    }
}

@media only screen and (min-width:768px) {
    body.open-admin-panel .control-menu-level-2 {
        right: 320px
    }
}

@media only screen and (min-width:768px) {

    body.open-admin-panel,
    body.sidenav-transition {
        overflow-x: hidden
    }
}

.lfr-add-panel.open-admin-panel.sidenav-menu-slider {
    visibility: visible;
    width: 320px
}

.lfr-admin-panel.sidenav-menu-slider {
    z-index: 990
}

.lfr-admin-panel.sidenav-menu-slider .product-menu {
    width: 320px
}

.lfr-admin-panel .sidebar-body {
    padding: 0
}

.lfr-add-panel .search-bar {
    display: block;
    margin: 10px
}

.lfr-add-panel .search-bar .form-control {
    display: block;
    float: none;
    padding-right: 32px
}

.lfr-add-panel .input-group-btn {
    display: block;
    margin-top: -8px;
    position: absolute;
    right: 20px;
    top: 50%;
    z-index: 4
}

.lfr-add-panel .list-group-heading {
    font-size: .875rem
}

.lfr-add-panel .add-content-menu .add-portlet-message {
    background-color: #1b2228;
    margin: 20px;
    padding: 5px 20px
}

.lfr-add-panel .add-content-menu .add-portlet-message .info-message {
    margin: 20px 0
}

.lfr-add-panel .add-content-menu .add-application-panel .lfr-content-item {
    height: 40px;
    padding: 0 16px
}

.lfr-add-panel .add-content-menu .add-application-panel .lfr-content-item.lfr-archived-setup {
    padding-left: 30px
}

.lfr-add-panel .add-content-menu .add-content-panel .lfr-content-item {
    color: #272833
}

.lfr-add-panel .add-content-menu .display-style-bar {
    padding: 8px 16px
}

.lfr-add-panel .add-content-menu .display-style-bar .display-style {
    padding: 8px
}

.lfr-add-panel .add-content-menu .display-style-bar .display-style.active {
    color: #869cad
}

.has-control-menu .affix,
.has-control-menu #wrapper {
    margin-top: 48px
}

.has-control-menu .affix .portlet-boundary>span:first-child,
.has-control-menu #wrapper .portlet-boundary>span:first-child {
    display: block;
    position: relative;
    top: -48px;
    visibility: hidden
}

.has-control-menu .affix :target::before,
.has-control-menu #wrapper :target::before {
    content: '';
    display: block;
    height: 48px;
    margin-top: -48px
}

@media only screen and (min-width:768px) {

    .has-control-menu .affix,
    .has-control-menu #wrapper {
        margin-top: 56px
    }

    .has-control-menu .affix .portlet-boundary>span:first-child,
    .has-control-menu #wrapper .portlet-boundary>span:first-child {
        top: -56px
    }

    .has-control-menu .affix :target::before,
    .has-control-menu #wrapper :target::before {
        height: 56px;
        margin-top: -56px
    }
}

.has-control-menu.has-customization-menu .affix,
.has-control-menu.has-customization-menu #wrapper {
    margin-top: 96px
}

.has-control-menu.has-customization-menu .affix .portlet-boundary>span:first-child,
.has-control-menu.has-customization-menu #wrapper .portlet-boundary>span:first-child {
    display: block;
    position: relative;
    top: -96px;
    visibility: hidden
}

.has-control-menu.has-customization-menu .affix :target::before,
.has-control-menu.has-customization-menu #wrapper :target::before {
    content: '';
    display: block;
    height: 96px;
    margin-top: -96px
}

@media only screen and (min-width:768px) {

    .has-control-menu.has-customization-menu .affix,
    .has-control-menu.has-customization-menu #wrapper {
        margin-top: 112px
    }

    .has-control-menu.has-customization-menu .affix .portlet-boundary>span:first-child,
    .has-control-menu.has-customization-menu #wrapper .portlet-boundary>span:first-child {
        top: -112px
    }

    .has-control-menu.has-customization-menu .affix :target::before,
    .has-control-menu.has-customization-menu #wrapper :target::before {
        height: 112px;
        margin-top: -112px
    }
}

.affix,
.control-menu {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 989
}

.control-menu-icon {
    display: inline-block;
    padding: 0 2px
}

.control-menu-level-1 {
    background-color: #30313f;
    color: #869cad
}

.control-menu-level-1>.container-fluid {
    padding: 6px 1rem 7px 1rem
}

@media only screen and (min-width:768px) {
    .control-menu-level-1>.container-fluid {
        padding: 10px 1.25rem
    }
}

.control-menu-level-1 a {
    color: #FFF
}

.control-menu-level-1 a:focus,
.control-menu-level-1 a:hover {
    color: #FFF;
    text-decoration: none
}

.control-menu-level-1-heading {
    color: #FFF;
    font-size: 1rem;
    font-weight: bold
}

.control-menu-level-1-nav {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    box-lines: multiple;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -o-justify-content: space-between;
    justify-content: space-between;
    -ms-flex-pack: justify
}

.control-menu-level-1-nav>.control-menu-nav-item {
    -webkit-align-self: center;
    -moz-align-self: center;
    align-self: center;
    -ms-flex-item-align: center
}

.control-menu-level-2 {
    background-color: #FFF;
    border-bottom: 1px solid #e7e7ed;
    color: #272834;
    padding-bottom: 7px;
    padding-top: 6px
}

.control-menu-level-2 a,
.control-menu-level-2 a:focus,
.control-menu-level-2 a:hover {
    color: #6b6c7e
}

.control-menu-level-2 .container-fluid-max-xl {
    padding-left: 20px
}

.control-menu-level-2 .text-info {
    font-size: .875rem
}

.control-menu-level-2 .toggle-switch-bar .toggle-switch-handle {
    font-size: .875rem;
    text-transform: none
}

@media only screen and (min-width:768px) {
    .control-menu-level-2 {
        left: 0;
        position: absolute;
        right: 0;
        top: 100%
    }

    .control-menu-level-2 .control-menu-label {
        color: #272834
    }
}

@media only screen and (max-width:767px) {
    .control-menu-level-2 {
        bottom: 0;
        display: none;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1
    }

    .control-menu-level-2.open {
        background-color: rgba(41, 52, 61, 0.9);
        display: block;
        overflow: auto
    }
}

.control-menu-level-2-heading {
    font-size: 18px;
    font-weight: 500;
    padding: 20px 0;
    text-align: center
}

.control-menu-level-2-heading .close {
    color: #272834;
    opacity: 1
}

.control-menu-level-2-nav {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    box-lines: multiple;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -o-justify-content: space-between;
    justify-content: space-between;
    -ms-flex-pack: justify
}

@media only screen and (max-width:767px) {
    .control-menu-level-2-nav>.control-menu-nav-item {
        margin-bottom: 55px
    }

    .control-menu-level-2-nav .control-menu-nav-item,
    .control-menu-level-2-nav .dropdown {
        width: 100%
    }
}

.control-menu-link.active:after {
    background-color: #65b6f0;
    height: 2px
}

.control-menu-nav {
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0
}

.control-menu-nav-item {
    display: inline-block
}

.control-menu-nav-item-content {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 1 0;
    -moz-flex: 1 1 0;
    -ms-flex: 1 1 0;
    flex: 1 1 0;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    box-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    min-width: 64px;
    width: 0
}

.ie .control-menu-nav-item-content {
    width: auto
}

.control-menu-nav-item-content .clamp-container {
    overflow: hidden;
    text-overflow: ellipsis;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    white-space: nowrap
}

.control-menu-nav-item-content span.text-muted {
    font-size: .875rem
}

.control-menu-nav-item-field {
    -webkit-box-flex: 0;
    -moz-box-flex: 0;
    box-flex: 0;
    -webkit-flex: 0 1 auto;
    -moz-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto
}

.live-link a,
.live-link a:focus,
.staging-link a,
.staging-link a:focus {
    color: #869cad
}

.live-link.active,
.staging-link.active {
    position: relative
}

.live-link.active:after,
.staging-link.active:after {
    bottom: -16px;
    content: '';
    left: 0;
    position: absolute;
    right: 0
}

.live-link.active a,
.staging-link.active a {
    color: #FFF
}

.sidenav-transition .affix,
.sidenav-transition .control-menu,
.sidenav-transition .control-menu-level-2 {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease
}

.tools-control-group>.control-menu-nav>li>.lfr-portal-tooltip>.control-menu-icon,
.user-control-group>.control-menu-nav>li>.control-menu-icon {
    height: 35px;
    line-height: 35px;
    margin-left: 3px;
    margin-right: 3px;
    padding: 0;
    text-align: center;
    width: 35px
}

.tools-control-group {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    box-lines: multiple;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    min-width: 50px
}

.tools-control-group>.control-menu-nav {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    box-lines: multiple;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    box-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center
}

.tools-control-group .taglib-icon-help {
    margin-top: 1px;
    min-width: 32px;
    text-align: center
}

.user-control-group .portlet-options {
    margin-right: -1px
}

.my-sites-menu .site-type {
    color: #FFF;
    display: none;
    float: right;
    font-size: .8em;
    font-weight: normal;
    margin-right: 10px;
    position: absolute;
    right: 100%
}

.my-sites-menu a:hover .site-type {
    color: #FFF;
    display: inline-block
}

/* end combo 1 */
/* clay */
@font-face {
    font-family: 'fontawesome-alloy';
    src: url("~@/assets/fonts/fontawesome-alloy.eot");
    src: url("~@/assets/fonts/fontawesome-alloy.eot#iefix") format("embedded-opentype"), url("~@/assets/fonts/fontawesome-alloy.woff") format("woff"), url("~@/assets/fonts/fontawesome-alloy.ttf") format("truetype"), url("~@/assets/fonts/fontawesome-alloy.svg#fontawesome-alloy") format("svg");
    font-weight: normal;
    font-style: normal
}

.icon-large:before {
    vertical-align: -10%;
    font-size: 1.33333em
}

.icons-ul {
    margin-left: 2.14286em;
    list-style-type: none
}

.icons-ul>li {
    position: relative
}

.icons-ul .icon-li {
    position: absolute;
    left: -2.14286em;
    width: 2.14286em;
    text-align: center;
    line-height: inherit
}

.icon-muted {
    color: #eee
}

.icon-light {
    color: white
}

.icon-dark {
    color: #333
}

.icon-border {
    border: solid 1px #eee;
    padding: .2em .25em .15em;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px
}

.icon-2x {
    font-size: 2em
}

.icon-2x.icon-border {
    border-width: 2px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px
}

.icon-3x {
    font-size: 3em
}

.icon-3x.icon-border {
    border-width: 3px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.icon-4x {
    font-size: 4em
}

.icon-4x.icon-border {
    border-width: 4px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px
}

.icon-5x {
    font-size: 5em
}

.icon-5x.icon-border {
    border-width: 5px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px
}

.pull-right {
    float: right
}

.pull-left {
    float: left
}

.icon-stack {
    position: relative;
    display: inline-block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    vertical-align: -35%
}

.icon-stack [class^="icon-"],
.icon-stack [class*=" icon-"] {
    *line-height: 2em
}

.icon-stack .icon-stack-base {
    font-size: 2em;
    *line-height: 1em
}

.icon-spin {
    display: inline-block;
    -moz-animation: spin 2s infinite linear;
    -o-animation: spin 2s infinite linear;
    -webkit-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear
}

a .icon-stack,
a .icon-spin {
    display: inline-block;
    text-decoration: none
}

@-moz-keyframes spin {
    0% {
        -moz-transform: rotate(0)
    }

    100% {
        -moz-transform: rotate(359deg)
    }
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(359deg)
    }
}

@-o-keyframes spin {
    0% {
        -o-transform: rotate(0)
    }

    100% {
        -o-transform: rotate(359deg)
    }
}

@-ms-keyframes spin {
    0% {
        -ms-transform: rotate(0)
    }

    100% {
        -ms-transform: rotate(359deg)
    }
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(359deg)
    }
}

.icon-rotate-90:before {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1)
}

.icon-rotate-180:before {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2)
}

.icon-rotate-270:before {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3)
}

.icon-flip-horizontal:before {
    -webkit-transform: scale(-1, 1);
    -moz-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    transform: scale(-1, 1)
}

.icon-flip-vertical:before {
    -webkit-transform: scale(1, -1);
    -moz-transform: scale(1, -1);
    -ms-transform: scale(1, -1);
    -o-transform: scale(1, -1);
    transform: scale(1, -1)
}

a .icon-rotate-90:before,
a .icon-rotate-180:before,
a .icon-rotate-270:before,
a .icon-flip-horizontal:before,
a .icon-flip-vertical:before {
    display: inline-block
}

[data-icon]:before {
    font-family: 'fontawesome-alloy';
    content: attr(data-icon);
    speak: none;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-caret-bottom-right,
.icon-glass,
.icon-music,
.icon-search,
.icon-envelope,
.icon-heart,
.icon-star,
.icon-star-empty,
.icon-user,
.icon-film,
.icon-th-large,
.icon-th,
.icon-th-list,
.icon-ok,
.icon-remove,
.icon-zoom-in,
.icon-zoom-out,
.icon-off,
.icon-signal,
.icon-cog,
.icon-trash,
.icon-home,
.icon-file,
.icon-inbox,
.icon-play-circle,
.icon-repeat,
.icon-refresh,
.icon-list-alt,
.icon-lock,
.icon-flag,
.icon-headphones,
.icon-volume-off,
.icon-volume-down,
.icon-volume-up,
.icon-qrcode,
.icon-barcode,
.icon-tag,
.icon-tags,
.icon-book,
.icon-bookmark,
.icon-print,
.icon-camera,
.icon-font,
.icon-bold,
.icon-italic,
.icon-align-justify,
.icon-list,
.icon-indent-left,
.icon-indent-right,
.icon-facetime-video,
.icon-picture,
.icon-pencil,
.icon-map-marker,
.icon-adjust,
.icon-tint,
.icon-edit,
.icon-share,
.icon-check,
.icon-move,
.icon-step-backward,
.icon-fast-backward,
.icon-backward,
.icon-play,
.icon-pause,
.icon-stop,
.icon-forward,
.icon-fast-forward,
.icon-minus-sign,
.icon-remove-sign,
.icon-ok-sign,
.icon-question-sign,
.icon-info-sign,
.icon-screenshot,
.icon-remove-circle,
.icon-ok-circle,
.icon-ban-circle,
.icon-arrow-left,
.icon-arrow-right,
.icon-arrow-up,
.icon-arrow-down,
.icon-share-alt,
.icon-resize-full,
.icon-resize-small,
.icon-plus,
.icon-minus,
.icon-asterisk,
.icon-exclamation-sign,
.icon-gift,
.icon-leaf,
.icon-calendar,
.icon-random,
.icon-comment,
.icon-magnet,
.icon-chevron-up,
.icon-chevron-down,
.icon-retweet,
.icon-shopping-cart,
.icon-folder-close,
.icon-folder-open,
.icon-resize-vertical,
.icon-resize-horizontal,
.icon-bar-chart,
.icon-twitter-sign,
.icon-facebook-sign,
.icon-camera-retro,
.icon-key,
.icon-cogs,
.icon-comments,
.icon-thumbs-up,
.icon-thumbs-down,
.icon-star-half,
.icon-signin,
.icon-trophy,
.icon-github-sign,
.icon-upload-alt,
.icon-lemon,
.icon-phone,
.icon-check-empty,
.icon-bookmark-empty,
.icon-phone-sign,
.icon-twitter,
.icon-facebook,
.icon-github,
.icon-unlock,
.icon-credit,
.icon-rss,
.icon-hdd,
.icon-bullhorn,
.icon-bell,
.icon-certificate,
.icon-hand-right,
.icon-hand-left,
.icon-hand-up,
.icon-globe,
.icon-wrench,
.icon-tasks,
.icon-filter,
.icon-briefcase,
.icon-fullscreen,
.icon-group,
.icon-link,
.icon-cloud,
.icon-beaker,
.icon-cut,
.icon-copy,
.icon-paper-clip,
.icon-save,
.icon-sign-blank,
.icon-reorder,
.icon-list-ul,
.icon-list-ol,
.icon-strikethrough,
.icon-underline,
.icon-table,
.icon-magic,
.icon-money,
.icon-caret-down,
.icon-caret-up,
.icon-caret-left,
.icon-caret-right,
.icon-columns,
.icon-sort,
.icon-sort-down,
.icon-sort-up,
.icon-envelope-alt,
.icon-linkedin,
.icon-undo,
.icon-legal,
.icon-dashboard,
.icon-comment-alt,
.icon-comments-alt,
.icon-bolt,
.icon-sitemap,
.icon-umbrella,
.icon-paste,
.icon-lightbulb,
.icon-exchange,
.icon-bell-alt,
.icon-coffee,
.icon-food,
.icon-file-alt,
.icon-building,
.icon-hospital,
.icon-ambulance,
.icon-medkit,
.icon-fighter-jet,
.icon-beer,
.icon-h-sign,
.icon-plus-sign,
.icon-double-angle-left,
.icon-double-angle-right,
.icon-double-angle-up,
.icon-double-angle-down,
.icon-angle-left,
.icon-angle-right,
.icon-angle-up,
.icon-angle-down,
.icon-desktop,
.icon-laptop,
.icon-spinner,
.icon-circle,
.icon-reply,
.icon-github-alt,
.icon-folder-close-alt,
.icon-folder-open-alt,
.icon-expand-alt,
.icon-collapse-alt,
.icon-smile,
.icon-frown,
.icon-meh,
.icon-gamepad,
.icon-keyboard,
.icon-flag-alt,
.icon-flag-checkered,
.icon-terminal,
.icon-code,
.icon-reply-all,
.icon-star-half-full,
.icon-location-arrow,
.icon-crop,
.icon-code-fork,
.icon-subscript,
.icon-eraser,
.icon-puzzle,
.icon-microphone,
.icon-microphone-off,
.icon-shield,
.icon-calendar-empty,
.icon-fire-extinguisher,
.icon-rocket,
.icon-maxcdn,
.icon-chevron-sign-left,
.icon-chevron-sign-right,
.icon-chevron-sign-up,
.icon-chevron-sign-down,
.icon-html5,
.icon-css3,
.icon-anchor,
.icon-unlock-alt,
.icon-bullseye,
.icon-ellipsis-horizontal,
.icon-ellipsis-vertical,
.icon-rss-sign,
.icon-fb-boolean,
.icon-text-height,
.icon-text-width,
.icon-align-left,
.icon-align-center,
.icon-align-right,
.icon-step-forward,
.icon-eject,
.icon-chevron-left,
.icon-chevron-right,
.icon-plus-sign-2,
.icon-fire,
.icon-eye-open,
.icon-eye-close,
.icon-warning-sign,
.icon-plane,
.icon-heart-empty,
.icon-signout,
.icon-linkedin-sign,
.icon-pushpin,
.icon-external-link,
.icon-hand-down,
.icon-circle-arrow-left,
.icon-circle-arrow-right,
.icon-circle-arrow-up,
.icon-circle-arrow-down,
.icon-truck,
.icon-pinterest,
.icon-pinterest-sign,
.icon-google-plus-sign,
.icon-google-plus,
.icon-cloud-download,
.icon-cloud-upload,
.icon-user-md,
.icon-stethoscope,
.icon-suitcase,
.icon-tablet,
.icon-mobile,
.icon-circle-blank,
.icon-quote-left,
.icon-quote-right,
.icon-unlink,
.icon-question,
.icon-info,
.icon-exclamation,
.icon-superscript,
.icon-play-sign,
.icon-ticket,
.icon-minus-sign-alt,
.icon-check-minus,
.icon-level-up,
.icon-sort-by-attributes-alt,
.icon-sort-by-order,
.icon-sort-by-order-alt,
.icon-thumbs-up-2,
.icon-thumbs-down-2,
.icon-dribbble,
.icon-skype,
.icon-foursquare,
.icon-trello,
.icon-female,
.icon-level-down,
.icon-check-sign,
.icon-edit-sign,
.icon-external-link-sign,
.icon-share-sign,
.icon-compass,
.icon-collapse,
.icon-collapse-top,
.icon-expand,
.icon-euro,
.icon-gbp,
.icon-dollar,
.icon-rupee,
.icon-yen,
.icon-renminbi,
.icon-won,
.icon-bitcoin,
.icon-file-2,
.icon-file-text,
.icon-sort-by-alphabet,
.icon-sort-by-alphabet-alt,
.icon-sort-by-attributes,
.icon-youtube-sign,
.icon-youtube,
.icon-xing,
.icon-xing-sign,
.icon-youtube-play,
.icon-dropbox,
.icon-stackexchange,
.icon-instagram,
.icon-flickr,
.icon-adn,
.icon-bitbucket,
.icon-bitbucket-sign,
.icon-tumblr,
.icon-tumblr-sign,
.icon-long-arrow-down,
.icon-long-arrow-up,
.icon-long-arrow-left,
.icon-long-arrow-right,
.icon-apple,
.icon-windows,
.icon-android,
.icon-linux,
.icon-male,
.icon-gittip,
.icon-sun,
.icon-moon,
.icon-archive,
.icon-bug,
.icon-vk,
.icon-weibo,
.icon-renren,
.icon-time,
.icon-road,
.icon-download-alt,
.icon-download,
.icon-upload,
.icon-db-joinxor,
.icon-db-state,
.icon-db-start,
.icon-db-end,
.icon-db-fork,
.icon-db-condition,
.icon-db-task,
.icon-db-join,
.icon-fb-button,
.icon-fb-fieldset,
.icon-fb-custom-field,
.icon-fb-separator,
.icon-fb-paragraph,
.icon-fb-file-upload,
.icon-fb-text,
.icon-fb-text-box,
.icon-fb-select,
.icon-fb-radio,
.icon-fb-number,
.icon-fb-integer,
.icon-fb-decimal {
    font-family: 'fontawesome-alloy';
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    *margin-right: .3em;
    speak: none;
    text-decoration: inherit;
    text-transform: none
}

.icon-caret-bottom-right:before,
.icon-glass:before,
.icon-music:before,
.icon-search:before,
.icon-envelope:before,
.icon-heart:before,
.icon-star:before,
.icon-star-empty:before,
.icon-user:before,
.icon-film:before,
.icon-th-large:before,
.icon-th:before,
.icon-th-list:before,
.icon-ok:before,
.icon-remove:before,
.icon-zoom-in:before,
.icon-zoom-out:before,
.icon-off:before,
.icon-signal:before,
.icon-cog:before,
.icon-trash:before,
.icon-home:before,
.icon-file:before,
.icon-inbox:before,
.icon-play-circle:before,
.icon-repeat:before,
.icon-refresh:before,
.icon-list-alt:before,
.icon-lock:before,
.icon-flag:before,
.icon-headphones:before,
.icon-volume-off:before,
.icon-volume-down:before,
.icon-volume-up:before,
.icon-qrcode:before,
.icon-barcode:before,
.icon-tag:before,
.icon-tags:before,
.icon-book:before,
.icon-bookmark:before,
.icon-print:before,
.icon-camera:before,
.icon-font:before,
.icon-bold:before,
.icon-italic:before,
.icon-align-justify:before,
.icon-list:before,
.icon-indent-left:before,
.icon-indent-right:before,
.icon-facetime-video:before,
.icon-picture:before,
.icon-pencil:before,
.icon-map-marker:before,
.icon-adjust:before,
.icon-tint:before,
.icon-edit:before,
.icon-share:before,
.icon-check:before,
.icon-move:before,
.icon-step-backward:before,
.icon-fast-backward:before,
.icon-backward:before,
.icon-play:before,
.icon-pause:before,
.icon-stop:before,
.icon-forward:before,
.icon-fast-forward:before,
.icon-minus-sign:before,
.icon-remove-sign:before,
.icon-ok-sign:before,
.icon-question-sign:before,
.icon-info-sign:before,
.icon-screenshot:before,
.icon-remove-circle:before,
.icon-ok-circle:before,
.icon-ban-circle:before,
.icon-arrow-left:before,
.icon-arrow-right:before,
.icon-arrow-up:before,
.icon-arrow-down:before,
.icon-share-alt:before,
.icon-resize-full:before,
.icon-resize-small:before,
.icon-plus:before,
.icon-minus:before,
.icon-asterisk:before,
.icon-exclamation-sign:before,
.icon-gift:before,
.icon-leaf:before,
.icon-calendar:before,
.icon-random:before,
.icon-comment:before,
.icon-magnet:before,
.icon-chevron-up:before,
.icon-chevron-down:before,
.icon-retweet:before,
.icon-shopping-cart:before,
.icon-folder-close:before,
.icon-folder-open:before,
.icon-resize-vertical:before,
.icon-resize-horizontal:before,
.icon-bar-chart:before,
.icon-twitter-sign:before,
.icon-facebook-sign:before,
.icon-camera-retro:before,
.icon-key:before,
.icon-cogs:before,
.icon-comments:before,
.icon-thumbs-up:before,
.icon-thumbs-down:before,
.icon-star-half:before,
.icon-signin:before,
.icon-trophy:before,
.icon-github-sign:before,
.icon-upload-alt:before,
.icon-lemon:before,
.icon-phone:before,
.icon-check-empty:before,
.icon-bookmark-empty:before,
.icon-phone-sign:before,
.icon-twitter:before,
.icon-facebook:before,
.icon-github:before,
.icon-unlock:before,
.icon-credit:before,
.icon-rss:before,
.icon-hdd:before,
.icon-bullhorn:before,
.icon-bell:before,
.icon-certificate:before,
.icon-hand-right:before,
.icon-hand-left:before,
.icon-hand-up:before,
.icon-globe:before,
.icon-wrench:before,
.icon-tasks:before,
.icon-filter:before,
.icon-briefcase:before,
.icon-fullscreen:before,
.icon-group:before,
.icon-link:before,
.icon-cloud:before,
.icon-beaker:before,
.icon-cut:before,
.icon-copy:before,
.icon-paper-clip:before,
.icon-save:before,
.icon-sign-blank:before,
.icon-reorder:before,
.icon-list-ul:before,
.icon-list-ol:before,
.icon-strikethrough:before,
.icon-underline:before,
.icon-table:before,
.icon-magic:before,
.icon-money:before,
.icon-caret-down:before,
.icon-caret-up:before,
.icon-caret-left:before,
.icon-caret-right:before,
.icon-columns:before,
.icon-sort:before,
.icon-sort-down:before,
.icon-sort-up:before,
.icon-envelope-alt:before,
.icon-linkedin:before,
.icon-undo:before,
.icon-legal:before,
.icon-dashboard:before,
.icon-comment-alt:before,
.icon-comments-alt:before,
.icon-bolt:before,
.icon-sitemap:before,
.icon-umbrella:before,
.icon-paste:before,
.icon-lightbulb:before,
.icon-exchange:before,
.icon-bell-alt:before,
.icon-coffee:before,
.icon-food:before,
.icon-file-alt:before,
.icon-building:before,
.icon-hospital:before,
.icon-ambulance:before,
.icon-medkit:before,
.icon-fighter-jet:before,
.icon-beer:before,
.icon-h-sign:before,
.icon-plus-sign:before,
.icon-double-angle-left:before,
.icon-double-angle-right:before,
.icon-double-angle-up:before,
.icon-double-angle-down:before,
.icon-angle-left:before,
.icon-angle-right:before,
.icon-angle-up:before,
.icon-angle-down:before,
.icon-desktop:before,
.icon-laptop:before,
.icon-spinner:before,
.icon-circle:before,
.icon-reply:before,
.icon-github-alt:before,
.icon-folder-close-alt:before,
.icon-folder-open-alt:before,
.icon-expand-alt:before,
.icon-collapse-alt:before,
.icon-smile:before,
.icon-frown:before,
.icon-meh:before,
.icon-gamepad:before,
.icon-keyboard:before,
.icon-flag-alt:before,
.icon-flag-checkered:before,
.icon-terminal:before,
.icon-code:before,
.icon-reply-all:before,
.icon-star-half-full:before,
.icon-location-arrow:before,
.icon-crop:before,
.icon-code-fork:before,
.icon-subscript:before,
.icon-eraser:before,
.icon-puzzle:before,
.icon-microphone:before,
.icon-microphone-off:before,
.icon-shield:before,
.icon-calendar-empty:before,
.icon-fire-extinguisher:before,
.icon-rocket:before,
.icon-maxcdn:before,
.icon-chevron-sign-left:before,
.icon-chevron-sign-right:before,
.icon-chevron-sign-up:before,
.icon-chevron-sign-down:before,
.icon-html5:before,
.icon-css3:before,
.icon-anchor:before,
.icon-unlock-alt:before,
.icon-bullseye:before,
.icon-ellipsis-horizontal:before,
.icon-ellipsis-vertical:before,
.icon-rss-sign:before,
.icon-fb-boolean:before,
.icon-text-height:before,
.icon-text-width:before,
.icon-align-left:before,
.icon-align-center:before,
.icon-align-right:before,
.icon-step-forward:before,
.icon-eject:before,
.icon-chevron-left:before,
.icon-chevron-right:before,
.icon-plus-sign-2:before,
.icon-fire:before,
.icon-eye-open:before,
.icon-eye-close:before,
.icon-warning-sign:before,
.icon-plane:before,
.icon-heart-empty:before,
.icon-signout:before,
.icon-linkedin-sign:before,
.icon-pushpin:before,
.icon-external-link:before,
.icon-hand-down:before,
.icon-circle-arrow-left:before,
.icon-circle-arrow-right:before,
.icon-circle-arrow-up:before,
.icon-circle-arrow-down:before,
.icon-truck:before,
.icon-pinterest:before,
.icon-pinterest-sign:before,
.icon-google-plus-sign:before,
.icon-google-plus:before,
.icon-cloud-download:before,
.icon-cloud-upload:before,
.icon-user-md:before,
.icon-stethoscope:before,
.icon-suitcase:before,
.icon-tablet:before,
.icon-mobile:before,
.icon-circle-blank:before,
.icon-quote-left:before,
.icon-quote-right:before,
.icon-unlink:before,
.icon-question:before,
.icon-info:before,
.icon-exclamation:before,
.icon-superscript:before,
.icon-play-sign:before,
.icon-ticket:before,
.icon-minus-sign-alt:before,
.icon-check-minus:before,
.icon-level-up:before,
.icon-sort-by-attributes-alt:before,
.icon-sort-by-order:before,
.icon-sort-by-order-alt:before,
.icon-thumbs-up-2:before,
.icon-thumbs-down-2:before,
.icon-dribbble:before,
.icon-skype:before,
.icon-foursquare:before,
.icon-trello:before,
.icon-female:before,
.icon-level-down:before,
.icon-check-sign:before,
.icon-edit-sign:before,
.icon-external-link-sign:before,
.icon-share-sign:before,
.icon-compass:before,
.icon-collapse:before,
.icon-collapse-top:before,
.icon-expand:before,
.icon-euro:before,
.icon-gbp:before,
.icon-dollar:before,
.icon-rupee:before,
.icon-yen:before,
.icon-renminbi:before,
.icon-won:before,
.icon-bitcoin:before,
.icon-file-2:before,
.icon-file-text:before,
.icon-sort-by-alphabet:before,
.icon-sort-by-alphabet-alt:before,
.icon-sort-by-attributes:before,
.icon-youtube-sign:before,
.icon-youtube:before,
.icon-xing:before,
.icon-xing-sign:before,
.icon-youtube-play:before,
.icon-dropbox:before,
.icon-stackexchange:before,
.icon-instagram:before,
.icon-flickr:before,
.icon-adn:before,
.icon-bitbucket:before,
.icon-bitbucket-sign:before,
.icon-tumblr:before,
.icon-tumblr-sign:before,
.icon-long-arrow-down:before,
.icon-long-arrow-up:before,
.icon-long-arrow-left:before,
.icon-long-arrow-right:before,
.icon-apple:before,
.icon-windows:before,
.icon-android:before,
.icon-linux:before,
.icon-male:before,
.icon-gittip:before,
.icon-sun:before,
.icon-moon:before,
.icon-archive:before,
.icon-bug:before,
.icon-vk:before,
.icon-weibo:before,
.icon-renren:before,
.icon-time:before,
.icon-road:before,
.icon-download-alt:before,
.icon-download:before,
.icon-upload:before,
.icon-db-joinxor:before,
.icon-db-state:before,
.icon-db-start:before,
.icon-db-end:before,
.icon-db-fork:before,
.icon-db-condition:before,
.icon-db-task:before,
.icon-db-join:before,
.icon-fb-button:before,
.icon-fb-fieldset:before,
.icon-fb-custom-field:before,
.icon-fb-separator:before,
.icon-fb-paragraph:before,
.icon-fb-file-upload:before,
.icon-fb-text:before,
.icon-fb-text-box:before,
.icon-fb-select:before,
.icon-fb-radio:before,
.icon-fb-number:before,
.icon-fb-integer:before,
.icon-fb-decimal:before {
    display: inline-block;
    speak: none;
    text-decoration: inherit
}

.icon-caret-bottom-right.hide,
.icon-glass.hide,
.icon-music.hide,
.icon-search.hide,
.icon-envelope.hide,
.icon-heart.hide,
.icon-star.hide,
.icon-star-empty.hide,
.icon-user.hide,
.icon-film.hide,
.icon-th-large.hide,
.icon-th.hide,
.icon-th-list.hide,
.icon-ok.hide,
.icon-remove.hide,
.icon-zoom-in.hide,
.icon-zoom-out.hide,
.icon-off.hide,
.icon-signal.hide,
.icon-cog.hide,
.icon-trash.hide,
.icon-home.hide,
.icon-file.hide,
.icon-inbox.hide,
.icon-play-circle.hide,
.icon-repeat.hide,
.icon-refresh.hide,
.icon-list-alt.hide,
.icon-lock.hide,
.icon-flag.hide,
.icon-headphones.hide,
.icon-volume-off.hide,
.icon-volume-down.hide,
.icon-volume-up.hide,
.icon-qrcode.hide,
.icon-barcode.hide,
.icon-tag.hide,
.icon-tags.hide,
.icon-book.hide,
.icon-bookmark.hide,
.icon-print.hide,
.icon-camera.hide,
.icon-font.hide,
.icon-bold.hide,
.icon-italic.hide,
.icon-align-justify.hide,
.icon-list.hide,
.icon-indent-left.hide,
.icon-indent-right.hide,
.icon-facetime-video.hide,
.icon-picture.hide,
.icon-pencil.hide,
.icon-map-marker.hide,
.icon-adjust.hide,
.icon-tint.hide,
.icon-edit.hide,
.icon-share.hide,
.icon-check.hide,
.icon-move.hide,
.icon-step-backward.hide,
.icon-fast-backward.hide,
.icon-backward.hide,
.icon-play.hide,
.icon-pause.hide,
.icon-stop.hide,
.icon-forward.hide,
.icon-fast-forward.hide,
.icon-minus-sign.hide,
.icon-remove-sign.hide,
.icon-ok-sign.hide,
.icon-question-sign.hide,
.icon-info-sign.hide,
.icon-screenshot.hide,
.icon-remove-circle.hide,
.icon-ok-circle.hide,
.icon-ban-circle.hide,
.icon-arrow-left.hide,
.icon-arrow-right.hide,
.icon-arrow-up.hide,
.icon-arrow-down.hide,
.icon-share-alt.hide,
.icon-resize-full.hide,
.icon-resize-small.hide,
.icon-plus.hide,
.icon-minus.hide,
.icon-asterisk.hide,
.icon-exclamation-sign.hide,
.icon-gift.hide,
.icon-leaf.hide,
.icon-calendar.hide,
.icon-random.hide,
.icon-comment.hide,
.icon-magnet.hide,
.icon-chevron-up.hide,
.icon-chevron-down.hide,
.icon-retweet.hide,
.icon-shopping-cart.hide,
.icon-folder-close.hide,
.icon-folder-open.hide,
.icon-resize-vertical.hide,
.icon-resize-horizontal.hide,
.icon-bar-chart.hide,
.icon-twitter-sign.hide,
.icon-facebook-sign.hide,
.icon-camera-retro.hide,
.icon-key.hide,
.icon-cogs.hide,
.icon-comments.hide,
.icon-thumbs-up.hide,
.icon-thumbs-down.hide,
.icon-star-half.hide,
.icon-signin.hide,
.icon-trophy.hide,
.icon-github-sign.hide,
.icon-upload-alt.hide,
.icon-lemon.hide,
.icon-phone.hide,
.icon-check-empty.hide,
.icon-bookmark-empty.hide,
.icon-phone-sign.hide,
.icon-twitter.hide,
.icon-facebook.hide,
.icon-github.hide,
.icon-unlock.hide,
.icon-credit.hide,
.icon-rss.hide,
.icon-hdd.hide,
.icon-bullhorn.hide,
.icon-bell.hide,
.icon-certificate.hide,
.icon-hand-right.hide,
.icon-hand-left.hide,
.icon-hand-up.hide,
.icon-globe.hide,
.icon-wrench.hide,
.icon-tasks.hide,
.icon-filter.hide,
.icon-briefcase.hide,
.icon-fullscreen.hide,
.icon-group.hide,
.icon-link.hide,
.icon-cloud.hide,
.icon-beaker.hide,
.icon-cut.hide,
.icon-copy.hide,
.icon-paper-clip.hide,
.icon-save.hide,
.icon-sign-blank.hide,
.icon-reorder.hide,
.icon-list-ul.hide,
.icon-list-ol.hide,
.icon-strikethrough.hide,
.icon-underline.hide,
.icon-table.hide,
.icon-magic.hide,
.icon-money.hide,
.icon-caret-down.hide,
.icon-caret-up.hide,
.icon-caret-left.hide,
.icon-caret-right.hide,
.icon-columns.hide,
.icon-sort.hide,
.icon-sort-down.hide,
.icon-sort-up.hide,
.icon-envelope-alt.hide,
.icon-linkedin.hide,
.icon-undo.hide,
.icon-legal.hide,
.icon-dashboard.hide,
.icon-comment-alt.hide,
.icon-comments-alt.hide,
.icon-bolt.hide,
.icon-sitemap.hide,
.icon-umbrella.hide,
.icon-paste.hide,
.icon-lightbulb.hide,
.icon-exchange.hide,
.icon-bell-alt.hide,
.icon-coffee.hide,
.icon-food.hide,
.icon-file-alt.hide,
.icon-building.hide,
.icon-hospital.hide,
.icon-ambulance.hide,
.icon-medkit.hide,
.icon-fighter-jet.hide,
.icon-beer.hide,
.icon-h-sign.hide,
.icon-plus-sign.hide,
.icon-double-angle-left.hide,
.icon-double-angle-right.hide,
.icon-double-angle-up.hide,
.icon-double-angle-down.hide,
.icon-angle-left.hide,
.icon-angle-right.hide,
.icon-angle-up.hide,
.icon-angle-down.hide,
.icon-desktop.hide,
.icon-laptop.hide,
.icon-spinner.hide,
.icon-circle.hide,
.icon-reply.hide,
.icon-github-alt.hide,
.icon-folder-close-alt.hide,
.icon-folder-open-alt.hide,
.icon-expand-alt.hide,
.icon-collapse-alt.hide,
.icon-smile.hide,
.icon-frown.hide,
.icon-meh.hide,
.icon-gamepad.hide,
.icon-keyboard.hide,
.icon-flag-alt.hide,
.icon-flag-checkered.hide,
.icon-terminal.hide,
.icon-code.hide,
.icon-reply-all.hide,
.icon-star-half-full.hide,
.icon-location-arrow.hide,
.icon-crop.hide,
.icon-code-fork.hide,
.icon-subscript.hide,
.icon-eraser.hide,
.icon-puzzle.hide,
.icon-microphone.hide,
.icon-microphone-off.hide,
.icon-shield.hide,
.icon-calendar-empty.hide,
.icon-fire-extinguisher.hide,
.icon-rocket.hide,
.icon-maxcdn.hide,
.icon-chevron-sign-left.hide,
.icon-chevron-sign-right.hide,
.icon-chevron-sign-up.hide,
.icon-chevron-sign-down.hide,
.icon-html5.hide,
.icon-css3.hide,
.icon-anchor.hide,
.icon-unlock-alt.hide,
.icon-bullseye.hide,
.icon-ellipsis-horizontal.hide,
.icon-ellipsis-vertical.hide,
.icon-rss-sign.hide,
.icon-fb-boolean.hide,
.icon-text-height.hide,
.icon-text-width.hide,
.icon-align-left.hide,
.icon-align-center.hide,
.icon-align-right.hide,
.icon-step-forward.hide,
.icon-eject.hide,
.icon-chevron-left.hide,
.icon-chevron-right.hide,
.icon-plus-sign-2.hide,
.icon-fire.hide,
.icon-eye-open.hide,
.icon-eye-close.hide,
.icon-warning-sign.hide,
.icon-plane.hide,
.icon-heart-empty.hide,
.icon-signout.hide,
.icon-linkedin-sign.hide,
.icon-pushpin.hide,
.icon-external-link.hide,
.icon-hand-down.hide,
.icon-circle-arrow-left.hide,
.icon-circle-arrow-right.hide,
.icon-circle-arrow-up.hide,
.icon-circle-arrow-down.hide,
.icon-truck.hide,
.icon-pinterest.hide,
.icon-pinterest-sign.hide,
.icon-google-plus-sign.hide,
.icon-google-plus.hide,
.icon-cloud-download.hide,
.icon-cloud-upload.hide,
.icon-user-md.hide,
.icon-stethoscope.hide,
.icon-suitcase.hide,
.icon-tablet.hide,
.icon-mobile.hide,
.icon-circle-blank.hide,
.icon-quote-left.hide,
.icon-quote-right.hide,
.icon-unlink.hide,
.icon-question.hide,
.icon-info.hide,
.icon-exclamation.hide,
.icon-superscript.hide,
.icon-play-sign.hide,
.icon-ticket.hide,
.icon-minus-sign-alt.hide,
.icon-check-minus.hide,
.icon-level-up.hide,
.icon-sort-by-attributes-alt.hide,
.icon-sort-by-order.hide,
.icon-sort-by-order-alt.hide,
.icon-thumbs-up-2.hide,
.icon-thumbs-down-2.hide,
.icon-dribbble.hide,
.icon-skype.hide,
.icon-foursquare.hide,
.icon-trello.hide,
.icon-female.hide,
.icon-level-down.hide,
.icon-check-sign.hide,
.icon-edit-sign.hide,
.icon-external-link-sign.hide,
.icon-share-sign.hide,
.icon-compass.hide,
.icon-collapse.hide,
.icon-collapse-top.hide,
.icon-expand.hide,
.icon-euro.hide,
.icon-gbp.hide,
.icon-dollar.hide,
.icon-rupee.hide,
.icon-yen.hide,
.icon-renminbi.hide,
.icon-won.hide,
.icon-bitcoin.hide,
.icon-file-2.hide,
.icon-file-text.hide,
.icon-sort-by-alphabet.hide,
.icon-sort-by-alphabet-alt.hide,
.icon-sort-by-attributes.hide,
.icon-youtube-sign.hide,
.icon-youtube.hide,
.icon-xing.hide,
.icon-xing-sign.hide,
.icon-youtube-play.hide,
.icon-dropbox.hide,
.icon-stackexchange.hide,
.icon-instagram.hide,
.icon-flickr.hide,
.icon-adn.hide,
.icon-bitbucket.hide,
.icon-bitbucket-sign.hide,
.icon-tumblr.hide,
.icon-tumblr-sign.hide,
.icon-long-arrow-down.hide,
.icon-long-arrow-up.hide,
.icon-long-arrow-left.hide,
.icon-long-arrow-right.hide,
.icon-apple.hide,
.icon-windows.hide,
.icon-android.hide,
.icon-linux.hide,
.icon-male.hide,
.icon-gittip.hide,
.icon-sun.hide,
.icon-moon.hide,
.icon-archive.hide,
.icon-bug.hide,
.icon-vk.hide,
.icon-weibo.hide,
.icon-renren.hide,
.icon-time.hide,
.icon-road.hide,
.icon-download-alt.hide,
.icon-download.hide,
.icon-upload.hide,
.icon-db-joinxor.hide,
.icon-db-state.hide,
.icon-db-start.hide,
.icon-db-end.hide,
.icon-db-fork.hide,
.icon-db-condition.hide,
.icon-db-task.hide,
.icon-db-join.hide,
.icon-fb-button.hide,
.icon-fb-fieldset.hide,
.icon-fb-custom-field.hide,
.icon-fb-separator.hide,
.icon-fb-paragraph.hide,
.icon-fb-file-upload.hide,
.icon-fb-text.hide,
.icon-fb-text-box.hide,
.icon-fb-select.hide,
.icon-fb-radio.hide,
.icon-fb-number.hide,
.icon-fb-integer.hide,
.icon-fb-decimal.hide {
    display: none
}

.icon-caret-bottom-right.icon-fixed-width,
.icon-glass.icon-fixed-width,
.icon-music.icon-fixed-width,
.icon-search.icon-fixed-width,
.icon-envelope.icon-fixed-width,
.icon-heart.icon-fixed-width,
.icon-star.icon-fixed-width,
.icon-star-empty.icon-fixed-width,
.icon-user.icon-fixed-width,
.icon-film.icon-fixed-width,
.icon-th-large.icon-fixed-width,
.icon-th.icon-fixed-width,
.icon-th-list.icon-fixed-width,
.icon-ok.icon-fixed-width,
.icon-remove.icon-fixed-width,
.icon-zoom-in.icon-fixed-width,
.icon-zoom-out.icon-fixed-width,
.icon-off.icon-fixed-width,
.icon-signal.icon-fixed-width,
.icon-cog.icon-fixed-width,
.icon-trash.icon-fixed-width,
.icon-home.icon-fixed-width,
.icon-file.icon-fixed-width,
.icon-inbox.icon-fixed-width,
.icon-play-circle.icon-fixed-width,
.icon-repeat.icon-fixed-width,
.icon-refresh.icon-fixed-width,
.icon-list-alt.icon-fixed-width,
.icon-lock.icon-fixed-width,
.icon-flag.icon-fixed-width,
.icon-headphones.icon-fixed-width,
.icon-volume-off.icon-fixed-width,
.icon-volume-down.icon-fixed-width,
.icon-volume-up.icon-fixed-width,
.icon-qrcode.icon-fixed-width,
.icon-barcode.icon-fixed-width,
.icon-tag.icon-fixed-width,
.icon-tags.icon-fixed-width,
.icon-book.icon-fixed-width,
.icon-bookmark.icon-fixed-width,
.icon-print.icon-fixed-width,
.icon-camera.icon-fixed-width,
.icon-font.icon-fixed-width,
.icon-bold.icon-fixed-width,
.icon-italic.icon-fixed-width,
.icon-align-justify.icon-fixed-width,
.icon-list.icon-fixed-width,
.icon-indent-left.icon-fixed-width,
.icon-indent-right.icon-fixed-width,
.icon-facetime-video.icon-fixed-width,
.icon-picture.icon-fixed-width,
.icon-pencil.icon-fixed-width,
.icon-map-marker.icon-fixed-width,
.icon-adjust.icon-fixed-width,
.icon-tint.icon-fixed-width,
.icon-edit.icon-fixed-width,
.icon-share.icon-fixed-width,
.icon-check.icon-fixed-width,
.icon-move.icon-fixed-width,
.icon-step-backward.icon-fixed-width,
.icon-fast-backward.icon-fixed-width,
.icon-backward.icon-fixed-width,
.icon-play.icon-fixed-width,
.icon-pause.icon-fixed-width,
.icon-stop.icon-fixed-width,
.icon-forward.icon-fixed-width,
.icon-fast-forward.icon-fixed-width,
.icon-minus-sign.icon-fixed-width,
.icon-remove-sign.icon-fixed-width,
.icon-ok-sign.icon-fixed-width,
.icon-question-sign.icon-fixed-width,
.icon-info-sign.icon-fixed-width,
.icon-screenshot.icon-fixed-width,
.icon-remove-circle.icon-fixed-width,
.icon-ok-circle.icon-fixed-width,
.icon-ban-circle.icon-fixed-width,
.icon-arrow-left.icon-fixed-width,
.icon-arrow-right.icon-fixed-width,
.icon-arrow-up.icon-fixed-width,
.icon-arrow-down.icon-fixed-width,
.icon-share-alt.icon-fixed-width,
.icon-resize-full.icon-fixed-width,
.icon-resize-small.icon-fixed-width,
.icon-plus.icon-fixed-width,
.icon-minus.icon-fixed-width,
.icon-asterisk.icon-fixed-width,
.icon-exclamation-sign.icon-fixed-width,
.icon-gift.icon-fixed-width,
.icon-leaf.icon-fixed-width,
.icon-calendar.icon-fixed-width,
.icon-random.icon-fixed-width,
.icon-comment.icon-fixed-width,
.icon-magnet.icon-fixed-width,
.icon-chevron-up.icon-fixed-width,
.icon-chevron-down.icon-fixed-width,
.icon-retweet.icon-fixed-width,
.icon-shopping-cart.icon-fixed-width,
.icon-folder-close.icon-fixed-width,
.icon-folder-open.icon-fixed-width,
.icon-resize-vertical.icon-fixed-width,
.icon-resize-horizontal.icon-fixed-width,
.icon-bar-chart.icon-fixed-width,
.icon-twitter-sign.icon-fixed-width,
.icon-facebook-sign.icon-fixed-width,
.icon-camera-retro.icon-fixed-width,
.icon-key.icon-fixed-width,
.icon-cogs.icon-fixed-width,
.icon-comments.icon-fixed-width,
.icon-thumbs-up.icon-fixed-width,
.icon-thumbs-down.icon-fixed-width,
.icon-star-half.icon-fixed-width,
.icon-signin.icon-fixed-width,
.icon-trophy.icon-fixed-width,
.icon-github-sign.icon-fixed-width,
.icon-upload-alt.icon-fixed-width,
.icon-lemon.icon-fixed-width,
.icon-phone.icon-fixed-width,
.icon-check-empty.icon-fixed-width,
.icon-bookmark-empty.icon-fixed-width,
.icon-phone-sign.icon-fixed-width,
.icon-twitter.icon-fixed-width,
.icon-facebook.icon-fixed-width,
.icon-github.icon-fixed-width,
.icon-unlock.icon-fixed-width,
.icon-credit.icon-fixed-width,
.icon-rss.icon-fixed-width,
.icon-hdd.icon-fixed-width,
.icon-bullhorn.icon-fixed-width,
.icon-bell.icon-fixed-width,
.icon-certificate.icon-fixed-width,
.icon-hand-right.icon-fixed-width,
.icon-hand-left.icon-fixed-width,
.icon-hand-up.icon-fixed-width,
.icon-globe.icon-fixed-width,
.icon-wrench.icon-fixed-width,
.icon-tasks.icon-fixed-width,
.icon-filter.icon-fixed-width,
.icon-briefcase.icon-fixed-width,
.icon-fullscreen.icon-fixed-width,
.icon-group.icon-fixed-width,
.icon-link.icon-fixed-width,
.icon-cloud.icon-fixed-width,
.icon-beaker.icon-fixed-width,
.icon-cut.icon-fixed-width,
.icon-copy.icon-fixed-width,
.icon-paper-clip.icon-fixed-width,
.icon-save.icon-fixed-width,
.icon-sign-blank.icon-fixed-width,
.icon-reorder.icon-fixed-width,
.icon-list-ul.icon-fixed-width,
.icon-list-ol.icon-fixed-width,
.icon-strikethrough.icon-fixed-width,
.icon-underline.icon-fixed-width,
.icon-table.icon-fixed-width,
.icon-magic.icon-fixed-width,
.icon-money.icon-fixed-width,
.icon-caret-down.icon-fixed-width,
.icon-caret-up.icon-fixed-width,
.icon-caret-left.icon-fixed-width,
.icon-caret-right.icon-fixed-width,
.icon-columns.icon-fixed-width,
.icon-sort.icon-fixed-width,
.icon-sort-down.icon-fixed-width,
.icon-sort-up.icon-fixed-width,
.icon-envelope-alt.icon-fixed-width,
.icon-linkedin.icon-fixed-width,
.icon-undo.icon-fixed-width,
.icon-legal.icon-fixed-width,
.icon-dashboard.icon-fixed-width,
.icon-comment-alt.icon-fixed-width,
.icon-comments-alt.icon-fixed-width,
.icon-bolt.icon-fixed-width,
.icon-sitemap.icon-fixed-width,
.icon-umbrella.icon-fixed-width,
.icon-paste.icon-fixed-width,
.icon-lightbulb.icon-fixed-width,
.icon-exchange.icon-fixed-width,
.icon-bell-alt.icon-fixed-width,
.icon-coffee.icon-fixed-width,
.icon-food.icon-fixed-width,
.icon-file-alt.icon-fixed-width,
.icon-building.icon-fixed-width,
.icon-hospital.icon-fixed-width,
.icon-ambulance.icon-fixed-width,
.icon-medkit.icon-fixed-width,
.icon-fighter-jet.icon-fixed-width,
.icon-beer.icon-fixed-width,
.icon-h-sign.icon-fixed-width,
.icon-plus-sign.icon-fixed-width,
.icon-double-angle-left.icon-fixed-width,
.icon-double-angle-right.icon-fixed-width,
.icon-double-angle-up.icon-fixed-width,
.icon-double-angle-down.icon-fixed-width,
.icon-angle-left.icon-fixed-width,
.icon-angle-right.icon-fixed-width,
.icon-angle-up.icon-fixed-width,
.icon-angle-down.icon-fixed-width,
.icon-desktop.icon-fixed-width,
.icon-laptop.icon-fixed-width,
.icon-spinner.icon-fixed-width,
.icon-circle.icon-fixed-width,
.icon-reply.icon-fixed-width,
.icon-github-alt.icon-fixed-width,
.icon-folder-close-alt.icon-fixed-width,
.icon-folder-open-alt.icon-fixed-width,
.icon-expand-alt.icon-fixed-width,
.icon-collapse-alt.icon-fixed-width,
.icon-smile.icon-fixed-width,
.icon-frown.icon-fixed-width,
.icon-meh.icon-fixed-width,
.icon-gamepad.icon-fixed-width,
.icon-keyboard.icon-fixed-width,
.icon-flag-alt.icon-fixed-width,
.icon-flag-checkered.icon-fixed-width,
.icon-terminal.icon-fixed-width,
.icon-code.icon-fixed-width,
.icon-reply-all.icon-fixed-width,
.icon-star-half-full.icon-fixed-width,
.icon-location-arrow.icon-fixed-width,
.icon-crop.icon-fixed-width,
.icon-code-fork.icon-fixed-width,
.icon-subscript.icon-fixed-width,
.icon-eraser.icon-fixed-width,
.icon-puzzle.icon-fixed-width,
.icon-microphone.icon-fixed-width,
.icon-microphone-off.icon-fixed-width,
.icon-shield.icon-fixed-width,
.icon-calendar-empty.icon-fixed-width,
.icon-fire-extinguisher.icon-fixed-width,
.icon-rocket.icon-fixed-width,
.icon-maxcdn.icon-fixed-width,
.icon-chevron-sign-left.icon-fixed-width,
.icon-chevron-sign-right.icon-fixed-width,
.icon-chevron-sign-up.icon-fixed-width,
.icon-chevron-sign-down.icon-fixed-width,
.icon-html5.icon-fixed-width,
.icon-css3.icon-fixed-width,
.icon-anchor.icon-fixed-width,
.icon-unlock-alt.icon-fixed-width,
.icon-bullseye.icon-fixed-width,
.icon-ellipsis-horizontal.icon-fixed-width,
.icon-ellipsis-vertical.icon-fixed-width,
.icon-rss-sign.icon-fixed-width,
.icon-fb-boolean.icon-fixed-width,
.icon-text-height.icon-fixed-width,
.icon-text-width.icon-fixed-width,
.icon-align-left.icon-fixed-width,
.icon-align-center.icon-fixed-width,
.icon-align-right.icon-fixed-width,
.icon-step-forward.icon-fixed-width,
.icon-eject.icon-fixed-width,
.icon-chevron-left.icon-fixed-width,
.icon-chevron-right.icon-fixed-width,
.icon-plus-sign-2.icon-fixed-width,
.icon-fire.icon-fixed-width,
.icon-eye-open.icon-fixed-width,
.icon-eye-close.icon-fixed-width,
.icon-warning-sign.icon-fixed-width,
.icon-plane.icon-fixed-width,
.icon-heart-empty.icon-fixed-width,
.icon-signout.icon-fixed-width,
.icon-linkedin-sign.icon-fixed-width,
.icon-pushpin.icon-fixed-width,
.icon-external-link.icon-fixed-width,
.icon-hand-down.icon-fixed-width,
.icon-circle-arrow-left.icon-fixed-width,
.icon-circle-arrow-right.icon-fixed-width,
.icon-circle-arrow-up.icon-fixed-width,
.icon-circle-arrow-down.icon-fixed-width,
.icon-truck.icon-fixed-width,
.icon-pinterest.icon-fixed-width,
.icon-pinterest-sign.icon-fixed-width,
.icon-google-plus-sign.icon-fixed-width,
.icon-google-plus.icon-fixed-width,
.icon-cloud-download.icon-fixed-width,
.icon-cloud-upload.icon-fixed-width,
.icon-user-md.icon-fixed-width,
.icon-stethoscope.icon-fixed-width,
.icon-suitcase.icon-fixed-width,
.icon-tablet.icon-fixed-width,
.icon-mobile.icon-fixed-width,
.icon-circle-blank.icon-fixed-width,
.icon-quote-left.icon-fixed-width,
.icon-quote-right.icon-fixed-width,
.icon-unlink.icon-fixed-width,
.icon-question.icon-fixed-width,
.icon-info.icon-fixed-width,
.icon-exclamation.icon-fixed-width,
.icon-superscript.icon-fixed-width,
.icon-play-sign.icon-fixed-width,
.icon-ticket.icon-fixed-width,
.icon-minus-sign-alt.icon-fixed-width,
.icon-check-minus.icon-fixed-width,
.icon-level-up.icon-fixed-width,
.icon-sort-by-attributes-alt.icon-fixed-width,
.icon-sort-by-order.icon-fixed-width,
.icon-sort-by-order-alt.icon-fixed-width,
.icon-thumbs-up-2.icon-fixed-width,
.icon-thumbs-down-2.icon-fixed-width,
.icon-dribbble.icon-fixed-width,
.icon-skype.icon-fixed-width,
.icon-foursquare.icon-fixed-width,
.icon-trello.icon-fixed-width,
.icon-female.icon-fixed-width,
.icon-level-down.icon-fixed-width,
.icon-check-sign.icon-fixed-width,
.icon-edit-sign.icon-fixed-width,
.icon-external-link-sign.icon-fixed-width,
.icon-share-sign.icon-fixed-width,
.icon-compass.icon-fixed-width,
.icon-collapse.icon-fixed-width,
.icon-collapse-top.icon-fixed-width,
.icon-expand.icon-fixed-width,
.icon-euro.icon-fixed-width,
.icon-gbp.icon-fixed-width,
.icon-dollar.icon-fixed-width,
.icon-rupee.icon-fixed-width,
.icon-yen.icon-fixed-width,
.icon-renminbi.icon-fixed-width,
.icon-won.icon-fixed-width,
.icon-bitcoin.icon-fixed-width,
.icon-file-2.icon-fixed-width,
.icon-file-text.icon-fixed-width,
.icon-sort-by-alphabet.icon-fixed-width,
.icon-sort-by-alphabet-alt.icon-fixed-width,
.icon-sort-by-attributes.icon-fixed-width,
.icon-youtube-sign.icon-fixed-width,
.icon-youtube.icon-fixed-width,
.icon-xing.icon-fixed-width,
.icon-xing-sign.icon-fixed-width,
.icon-youtube-play.icon-fixed-width,
.icon-dropbox.icon-fixed-width,
.icon-stackexchange.icon-fixed-width,
.icon-instagram.icon-fixed-width,
.icon-flickr.icon-fixed-width,
.icon-adn.icon-fixed-width,
.icon-bitbucket.icon-fixed-width,
.icon-bitbucket-sign.icon-fixed-width,
.icon-tumblr.icon-fixed-width,
.icon-tumblr-sign.icon-fixed-width,
.icon-long-arrow-down.icon-fixed-width,
.icon-long-arrow-up.icon-fixed-width,
.icon-long-arrow-left.icon-fixed-width,
.icon-long-arrow-right.icon-fixed-width,
.icon-apple.icon-fixed-width,
.icon-windows.icon-fixed-width,
.icon-android.icon-fixed-width,
.icon-linux.icon-fixed-width,
.icon-male.icon-fixed-width,
.icon-gittip.icon-fixed-width,
.icon-sun.icon-fixed-width,
.icon-moon.icon-fixed-width,
.icon-archive.icon-fixed-width,
.icon-bug.icon-fixed-width,
.icon-vk.icon-fixed-width,
.icon-weibo.icon-fixed-width,
.icon-renren.icon-fixed-width,
.icon-time.icon-fixed-width,
.icon-road.icon-fixed-width,
.icon-download-alt.icon-fixed-width,
.icon-download.icon-fixed-width,
.icon-upload.icon-fixed-width,
.icon-db-joinxor.icon-fixed-width,
.icon-db-state.icon-fixed-width,
.icon-db-start.icon-fixed-width,
.icon-db-end.icon-fixed-width,
.icon-db-fork.icon-fixed-width,
.icon-db-condition.icon-fixed-width,
.icon-db-task.icon-fixed-width,
.icon-db-join.icon-fixed-width,
.icon-fb-button.icon-fixed-width,
.icon-fb-fieldset.icon-fixed-width,
.icon-fb-custom-field.icon-fixed-width,
.icon-fb-separator.icon-fixed-width,
.icon-fb-paragraph.icon-fixed-width,
.icon-fb-file-upload.icon-fixed-width,
.icon-fb-text.icon-fixed-width,
.icon-fb-text-box.icon-fixed-width,
.icon-fb-select.icon-fixed-width,
.icon-fb-radio.icon-fixed-width,
.icon-fb-number.icon-fixed-width,
.icon-fb-integer.icon-fixed-width,
.icon-fb-decimal.icon-fixed-width {
    display: inline-block;
    padding-right: .28571em;
    text-align: right;
    width: 1.14286em
}

.icon-caret-bottom-right.icon-fixed-width.icon-large,
.icon-glass.icon-fixed-width.icon-large,
.icon-music.icon-fixed-width.icon-large,
.icon-search.icon-fixed-width.icon-large,
.icon-envelope.icon-fixed-width.icon-large,
.icon-heart.icon-fixed-width.icon-large,
.icon-star.icon-fixed-width.icon-large,
.icon-star-empty.icon-fixed-width.icon-large,
.icon-user.icon-fixed-width.icon-large,
.icon-film.icon-fixed-width.icon-large,
.icon-th-large.icon-fixed-width.icon-large,
.icon-th.icon-fixed-width.icon-large,
.icon-th-list.icon-fixed-width.icon-large,
.icon-ok.icon-fixed-width.icon-large,
.icon-remove.icon-fixed-width.icon-large,
.icon-zoom-in.icon-fixed-width.icon-large,
.icon-zoom-out.icon-fixed-width.icon-large,
.icon-off.icon-fixed-width.icon-large,
.icon-signal.icon-fixed-width.icon-large,
.icon-cog.icon-fixed-width.icon-large,
.icon-trash.icon-fixed-width.icon-large,
.icon-home.icon-fixed-width.icon-large,
.icon-file.icon-fixed-width.icon-large,
.icon-inbox.icon-fixed-width.icon-large,
.icon-play-circle.icon-fixed-width.icon-large,
.icon-repeat.icon-fixed-width.icon-large,
.icon-refresh.icon-fixed-width.icon-large,
.icon-list-alt.icon-fixed-width.icon-large,
.icon-lock.icon-fixed-width.icon-large,
.icon-flag.icon-fixed-width.icon-large,
.icon-headphones.icon-fixed-width.icon-large,
.icon-volume-off.icon-fixed-width.icon-large,
.icon-volume-down.icon-fixed-width.icon-large,
.icon-volume-up.icon-fixed-width.icon-large,
.icon-qrcode.icon-fixed-width.icon-large,
.icon-barcode.icon-fixed-width.icon-large,
.icon-tag.icon-fixed-width.icon-large,
.icon-tags.icon-fixed-width.icon-large,
.icon-book.icon-fixed-width.icon-large,
.icon-bookmark.icon-fixed-width.icon-large,
.icon-print.icon-fixed-width.icon-large,
.icon-camera.icon-fixed-width.icon-large,
.icon-font.icon-fixed-width.icon-large,
.icon-bold.icon-fixed-width.icon-large,
.icon-italic.icon-fixed-width.icon-large,
.icon-align-justify.icon-fixed-width.icon-large,
.icon-list.icon-fixed-width.icon-large,
.icon-indent-left.icon-fixed-width.icon-large,
.icon-indent-right.icon-fixed-width.icon-large,
.icon-facetime-video.icon-fixed-width.icon-large,
.icon-picture.icon-fixed-width.icon-large,
.icon-pencil.icon-fixed-width.icon-large,
.icon-map-marker.icon-fixed-width.icon-large,
.icon-adjust.icon-fixed-width.icon-large,
.icon-tint.icon-fixed-width.icon-large,
.icon-edit.icon-fixed-width.icon-large,
.icon-share.icon-fixed-width.icon-large,
.icon-check.icon-fixed-width.icon-large,
.icon-move.icon-fixed-width.icon-large,
.icon-step-backward.icon-fixed-width.icon-large,
.icon-fast-backward.icon-fixed-width.icon-large,
.icon-backward.icon-fixed-width.icon-large,
.icon-play.icon-fixed-width.icon-large,
.icon-pause.icon-fixed-width.icon-large,
.icon-stop.icon-fixed-width.icon-large,
.icon-forward.icon-fixed-width.icon-large,
.icon-fast-forward.icon-fixed-width.icon-large,
.icon-minus-sign.icon-fixed-width.icon-large,
.icon-remove-sign.icon-fixed-width.icon-large,
.icon-ok-sign.icon-fixed-width.icon-large,
.icon-question-sign.icon-fixed-width.icon-large,
.icon-info-sign.icon-fixed-width.icon-large,
.icon-screenshot.icon-fixed-width.icon-large,
.icon-remove-circle.icon-fixed-width.icon-large,
.icon-ok-circle.icon-fixed-width.icon-large,
.icon-ban-circle.icon-fixed-width.icon-large,
.icon-arrow-left.icon-fixed-width.icon-large,
.icon-arrow-right.icon-fixed-width.icon-large,
.icon-arrow-up.icon-fixed-width.icon-large,
.icon-arrow-down.icon-fixed-width.icon-large,
.icon-share-alt.icon-fixed-width.icon-large,
.icon-resize-full.icon-fixed-width.icon-large,
.icon-resize-small.icon-fixed-width.icon-large,
.icon-plus.icon-fixed-width.icon-large,
.icon-minus.icon-fixed-width.icon-large,
.icon-asterisk.icon-fixed-width.icon-large,
.icon-exclamation-sign.icon-fixed-width.icon-large,
.icon-gift.icon-fixed-width.icon-large,
.icon-leaf.icon-fixed-width.icon-large,
.icon-calendar.icon-fixed-width.icon-large,
.icon-random.icon-fixed-width.icon-large,
.icon-comment.icon-fixed-width.icon-large,
.icon-magnet.icon-fixed-width.icon-large,
.icon-chevron-up.icon-fixed-width.icon-large,
.icon-chevron-down.icon-fixed-width.icon-large,
.icon-retweet.icon-fixed-width.icon-large,
.icon-shopping-cart.icon-fixed-width.icon-large,
.icon-folder-close.icon-fixed-width.icon-large,
.icon-folder-open.icon-fixed-width.icon-large,
.icon-resize-vertical.icon-fixed-width.icon-large,
.icon-resize-horizontal.icon-fixed-width.icon-large,
.icon-bar-chart.icon-fixed-width.icon-large,
.icon-twitter-sign.icon-fixed-width.icon-large,
.icon-facebook-sign.icon-fixed-width.icon-large,
.icon-camera-retro.icon-fixed-width.icon-large,
.icon-key.icon-fixed-width.icon-large,
.icon-cogs.icon-fixed-width.icon-large,
.icon-comments.icon-fixed-width.icon-large,
.icon-thumbs-up.icon-fixed-width.icon-large,
.icon-thumbs-down.icon-fixed-width.icon-large,
.icon-star-half.icon-fixed-width.icon-large,
.icon-signin.icon-fixed-width.icon-large,
.icon-trophy.icon-fixed-width.icon-large,
.icon-github-sign.icon-fixed-width.icon-large,
.icon-upload-alt.icon-fixed-width.icon-large,
.icon-lemon.icon-fixed-width.icon-large,
.icon-phone.icon-fixed-width.icon-large,
.icon-check-empty.icon-fixed-width.icon-large,
.icon-bookmark-empty.icon-fixed-width.icon-large,
.icon-phone-sign.icon-fixed-width.icon-large,
.icon-twitter.icon-fixed-width.icon-large,
.icon-facebook.icon-fixed-width.icon-large,
.icon-github.icon-fixed-width.icon-large,
.icon-unlock.icon-fixed-width.icon-large,
.icon-credit.icon-fixed-width.icon-large,
.icon-rss.icon-fixed-width.icon-large,
.icon-hdd.icon-fixed-width.icon-large,
.icon-bullhorn.icon-fixed-width.icon-large,
.icon-bell.icon-fixed-width.icon-large,
.icon-certificate.icon-fixed-width.icon-large,
.icon-hand-right.icon-fixed-width.icon-large,
.icon-hand-left.icon-fixed-width.icon-large,
.icon-hand-up.icon-fixed-width.icon-large,
.icon-globe.icon-fixed-width.icon-large,
.icon-wrench.icon-fixed-width.icon-large,
.icon-tasks.icon-fixed-width.icon-large,
.icon-filter.icon-fixed-width.icon-large,
.icon-briefcase.icon-fixed-width.icon-large,
.icon-fullscreen.icon-fixed-width.icon-large,
.icon-group.icon-fixed-width.icon-large,
.icon-link.icon-fixed-width.icon-large,
.icon-cloud.icon-fixed-width.icon-large,
.icon-beaker.icon-fixed-width.icon-large,
.icon-cut.icon-fixed-width.icon-large,
.icon-copy.icon-fixed-width.icon-large,
.icon-paper-clip.icon-fixed-width.icon-large,
.icon-save.icon-fixed-width.icon-large,
.icon-sign-blank.icon-fixed-width.icon-large,
.icon-reorder.icon-fixed-width.icon-large,
.icon-list-ul.icon-fixed-width.icon-large,
.icon-list-ol.icon-fixed-width.icon-large,
.icon-strikethrough.icon-fixed-width.icon-large,
.icon-underline.icon-fixed-width.icon-large,
.icon-table.icon-fixed-width.icon-large,
.icon-magic.icon-fixed-width.icon-large,
.icon-money.icon-fixed-width.icon-large,
.icon-caret-down.icon-fixed-width.icon-large,
.icon-caret-up.icon-fixed-width.icon-large,
.icon-caret-left.icon-fixed-width.icon-large,
.icon-caret-right.icon-fixed-width.icon-large,
.icon-columns.icon-fixed-width.icon-large,
.icon-sort.icon-fixed-width.icon-large,
.icon-sort-down.icon-fixed-width.icon-large,
.icon-sort-up.icon-fixed-width.icon-large,
.icon-envelope-alt.icon-fixed-width.icon-large,
.icon-linkedin.icon-fixed-width.icon-large,
.icon-undo.icon-fixed-width.icon-large,
.icon-legal.icon-fixed-width.icon-large,
.icon-dashboard.icon-fixed-width.icon-large,
.icon-comment-alt.icon-fixed-width.icon-large,
.icon-comments-alt.icon-fixed-width.icon-large,
.icon-bolt.icon-fixed-width.icon-large,
.icon-sitemap.icon-fixed-width.icon-large,
.icon-umbrella.icon-fixed-width.icon-large,
.icon-paste.icon-fixed-width.icon-large,
.icon-lightbulb.icon-fixed-width.icon-large,
.icon-exchange.icon-fixed-width.icon-large,
.icon-bell-alt.icon-fixed-width.icon-large,
.icon-coffee.icon-fixed-width.icon-large,
.icon-food.icon-fixed-width.icon-large,
.icon-file-alt.icon-fixed-width.icon-large,
.icon-building.icon-fixed-width.icon-large,
.icon-hospital.icon-fixed-width.icon-large,
.icon-ambulance.icon-fixed-width.icon-large,
.icon-medkit.icon-fixed-width.icon-large,
.icon-fighter-jet.icon-fixed-width.icon-large,
.icon-beer.icon-fixed-width.icon-large,
.icon-h-sign.icon-fixed-width.icon-large,
.icon-plus-sign.icon-fixed-width.icon-large,
.icon-double-angle-left.icon-fixed-width.icon-large,
.icon-double-angle-right.icon-fixed-width.icon-large,
.icon-double-angle-up.icon-fixed-width.icon-large,
.icon-double-angle-down.icon-fixed-width.icon-large,
.icon-angle-left.icon-fixed-width.icon-large,
.icon-angle-right.icon-fixed-width.icon-large,
.icon-angle-up.icon-fixed-width.icon-large,
.icon-angle-down.icon-fixed-width.icon-large,
.icon-desktop.icon-fixed-width.icon-large,
.icon-laptop.icon-fixed-width.icon-large,
.icon-spinner.icon-fixed-width.icon-large,
.icon-circle.icon-fixed-width.icon-large,
.icon-reply.icon-fixed-width.icon-large,
.icon-github-alt.icon-fixed-width.icon-large,
.icon-folder-close-alt.icon-fixed-width.icon-large,
.icon-folder-open-alt.icon-fixed-width.icon-large,
.icon-expand-alt.icon-fixed-width.icon-large,
.icon-collapse-alt.icon-fixed-width.icon-large,
.icon-smile.icon-fixed-width.icon-large,
.icon-frown.icon-fixed-width.icon-large,
.icon-meh.icon-fixed-width.icon-large,
.icon-gamepad.icon-fixed-width.icon-large,
.icon-keyboard.icon-fixed-width.icon-large,
.icon-flag-alt.icon-fixed-width.icon-large,
.icon-flag-checkered.icon-fixed-width.icon-large,
.icon-terminal.icon-fixed-width.icon-large,
.icon-code.icon-fixed-width.icon-large,
.icon-reply-all.icon-fixed-width.icon-large,
.icon-star-half-full.icon-fixed-width.icon-large,
.icon-location-arrow.icon-fixed-width.icon-large,
.icon-crop.icon-fixed-width.icon-large,
.icon-code-fork.icon-fixed-width.icon-large,
.icon-subscript.icon-fixed-width.icon-large,
.icon-eraser.icon-fixed-width.icon-large,
.icon-puzzle.icon-fixed-width.icon-large,
.icon-microphone.icon-fixed-width.icon-large,
.icon-microphone-off.icon-fixed-width.icon-large,
.icon-shield.icon-fixed-width.icon-large,
.icon-calendar-empty.icon-fixed-width.icon-large,
.icon-fire-extinguisher.icon-fixed-width.icon-large,
.icon-rocket.icon-fixed-width.icon-large,
.icon-maxcdn.icon-fixed-width.icon-large,
.icon-chevron-sign-left.icon-fixed-width.icon-large,
.icon-chevron-sign-right.icon-fixed-width.icon-large,
.icon-chevron-sign-up.icon-fixed-width.icon-large,
.icon-chevron-sign-down.icon-fixed-width.icon-large,
.icon-html5.icon-fixed-width.icon-large,
.icon-css3.icon-fixed-width.icon-large,
.icon-anchor.icon-fixed-width.icon-large,
.icon-unlock-alt.icon-fixed-width.icon-large,
.icon-bullseye.icon-fixed-width.icon-large,
.icon-ellipsis-horizontal.icon-fixed-width.icon-large,
.icon-ellipsis-vertical.icon-fixed-width.icon-large,
.icon-rss-sign.icon-fixed-width.icon-large,
.icon-fb-boolean.icon-fixed-width.icon-large,
.icon-text-height.icon-fixed-width.icon-large,
.icon-text-width.icon-fixed-width.icon-large,
.icon-align-left.icon-fixed-width.icon-large,
.icon-align-center.icon-fixed-width.icon-large,
.icon-align-right.icon-fixed-width.icon-large,
.icon-step-forward.icon-fixed-width.icon-large,
.icon-eject.icon-fixed-width.icon-large,
.icon-chevron-left.icon-fixed-width.icon-large,
.icon-chevron-right.icon-fixed-width.icon-large,
.icon-plus-sign-2.icon-fixed-width.icon-large,
.icon-fire.icon-fixed-width.icon-large,
.icon-eye-open.icon-fixed-width.icon-large,
.icon-eye-close.icon-fixed-width.icon-large,
.icon-warning-sign.icon-fixed-width.icon-large,
.icon-plane.icon-fixed-width.icon-large,
.icon-heart-empty.icon-fixed-width.icon-large,
.icon-signout.icon-fixed-width.icon-large,
.icon-linkedin-sign.icon-fixed-width.icon-large,
.icon-pushpin.icon-fixed-width.icon-large,
.icon-external-link.icon-fixed-width.icon-large,
.icon-hand-down.icon-fixed-width.icon-large,
.icon-circle-arrow-left.icon-fixed-width.icon-large,
.icon-circle-arrow-right.icon-fixed-width.icon-large,
.icon-circle-arrow-up.icon-fixed-width.icon-large,
.icon-circle-arrow-down.icon-fixed-width.icon-large,
.icon-truck.icon-fixed-width.icon-large,
.icon-pinterest.icon-fixed-width.icon-large,
.icon-pinterest-sign.icon-fixed-width.icon-large,
.icon-google-plus-sign.icon-fixed-width.icon-large,
.icon-google-plus.icon-fixed-width.icon-large,
.icon-cloud-download.icon-fixed-width.icon-large,
.icon-cloud-upload.icon-fixed-width.icon-large,
.icon-user-md.icon-fixed-width.icon-large,
.icon-stethoscope.icon-fixed-width.icon-large,
.icon-suitcase.icon-fixed-width.icon-large,
.icon-tablet.icon-fixed-width.icon-large,
.icon-mobile.icon-fixed-width.icon-large,
.icon-circle-blank.icon-fixed-width.icon-large,
.icon-quote-left.icon-fixed-width.icon-large,
.icon-quote-right.icon-fixed-width.icon-large,
.icon-unlink.icon-fixed-width.icon-large,
.icon-question.icon-fixed-width.icon-large,
.icon-info.icon-fixed-width.icon-large,
.icon-exclamation.icon-fixed-width.icon-large,
.icon-superscript.icon-fixed-width.icon-large,
.icon-play-sign.icon-fixed-width.icon-large,
.icon-ticket.icon-fixed-width.icon-large,
.icon-minus-sign-alt.icon-fixed-width.icon-large,
.icon-check-minus.icon-fixed-width.icon-large,
.icon-level-up.icon-fixed-width.icon-large,
.icon-sort-by-attributes-alt.icon-fixed-width.icon-large,
.icon-sort-by-order.icon-fixed-width.icon-large,
.icon-sort-by-order-alt.icon-fixed-width.icon-large,
.icon-thumbs-up-2.icon-fixed-width.icon-large,
.icon-thumbs-down-2.icon-fixed-width.icon-large,
.icon-dribbble.icon-fixed-width.icon-large,
.icon-skype.icon-fixed-width.icon-large,
.icon-foursquare.icon-fixed-width.icon-large,
.icon-trello.icon-fixed-width.icon-large,
.icon-female.icon-fixed-width.icon-large,
.icon-level-down.icon-fixed-width.icon-large,
.icon-check-sign.icon-fixed-width.icon-large,
.icon-edit-sign.icon-fixed-width.icon-large,
.icon-external-link-sign.icon-fixed-width.icon-large,
.icon-share-sign.icon-fixed-width.icon-large,
.icon-compass.icon-fixed-width.icon-large,
.icon-collapse.icon-fixed-width.icon-large,
.icon-collapse-top.icon-fixed-width.icon-large,
.icon-expand.icon-fixed-width.icon-large,
.icon-euro.icon-fixed-width.icon-large,
.icon-gbp.icon-fixed-width.icon-large,
.icon-dollar.icon-fixed-width.icon-large,
.icon-rupee.icon-fixed-width.icon-large,
.icon-yen.icon-fixed-width.icon-large,
.icon-renminbi.icon-fixed-width.icon-large,
.icon-won.icon-fixed-width.icon-large,
.icon-bitcoin.icon-fixed-width.icon-large,
.icon-file-2.icon-fixed-width.icon-large,
.icon-file-text.icon-fixed-width.icon-large,
.icon-sort-by-alphabet.icon-fixed-width.icon-large,
.icon-sort-by-alphabet-alt.icon-fixed-width.icon-large,
.icon-sort-by-attributes.icon-fixed-width.icon-large,
.icon-youtube-sign.icon-fixed-width.icon-large,
.icon-youtube.icon-fixed-width.icon-large,
.icon-xing.icon-fixed-width.icon-large,
.icon-xing-sign.icon-fixed-width.icon-large,
.icon-youtube-play.icon-fixed-width.icon-large,
.icon-dropbox.icon-fixed-width.icon-large,
.icon-stackexchange.icon-fixed-width.icon-large,
.icon-instagram.icon-fixed-width.icon-large,
.icon-flickr.icon-fixed-width.icon-large,
.icon-adn.icon-fixed-width.icon-large,
.icon-bitbucket.icon-fixed-width.icon-large,
.icon-bitbucket-sign.icon-fixed-width.icon-large,
.icon-tumblr.icon-fixed-width.icon-large,
.icon-tumblr-sign.icon-fixed-width.icon-large,
.icon-long-arrow-down.icon-fixed-width.icon-large,
.icon-long-arrow-up.icon-fixed-width.icon-large,
.icon-long-arrow-left.icon-fixed-width.icon-large,
.icon-long-arrow-right.icon-fixed-width.icon-large,
.icon-apple.icon-fixed-width.icon-large,
.icon-windows.icon-fixed-width.icon-large,
.icon-android.icon-fixed-width.icon-large,
.icon-linux.icon-fixed-width.icon-large,
.icon-male.icon-fixed-width.icon-large,
.icon-gittip.icon-fixed-width.icon-large,
.icon-sun.icon-fixed-width.icon-large,
.icon-moon.icon-fixed-width.icon-large,
.icon-archive.icon-fixed-width.icon-large,
.icon-bug.icon-fixed-width.icon-large,
.icon-vk.icon-fixed-width.icon-large,
.icon-weibo.icon-fixed-width.icon-large,
.icon-renren.icon-fixed-width.icon-large,
.icon-time.icon-fixed-width.icon-large,
.icon-road.icon-fixed-width.icon-large,
.icon-download-alt.icon-fixed-width.icon-large,
.icon-download.icon-fixed-width.icon-large,
.icon-upload.icon-fixed-width.icon-large,
.icon-db-joinxor.icon-fixed-width.icon-large,
.icon-db-state.icon-fixed-width.icon-large,
.icon-db-start.icon-fixed-width.icon-large,
.icon-db-end.icon-fixed-width.icon-large,
.icon-db-fork.icon-fixed-width.icon-large,
.icon-db-condition.icon-fixed-width.icon-large,
.icon-db-task.icon-fixed-width.icon-large,
.icon-db-join.icon-fixed-width.icon-large,
.icon-fb-button.icon-fixed-width.icon-large,
.icon-fb-fieldset.icon-fixed-width.icon-large,
.icon-fb-custom-field.icon-fixed-width.icon-large,
.icon-fb-separator.icon-fixed-width.icon-large,
.icon-fb-paragraph.icon-fixed-width.icon-large,
.icon-fb-file-upload.icon-fixed-width.icon-large,
.icon-fb-text.icon-fixed-width.icon-large,
.icon-fb-text-box.icon-fixed-width.icon-large,
.icon-fb-select.icon-fixed-width.icon-large,
.icon-fb-radio.icon-fixed-width.icon-large,
.icon-fb-number.icon-fixed-width.icon-large,
.icon-fb-integer.icon-fixed-width.icon-large,
.icon-fb-decimal.icon-fixed-width.icon-large {
    width: 1.42857em
}

.icon-caret-bottom-right.pull-left,
.icon-glass.pull-left,
.icon-music.pull-left,
.icon-search.pull-left,
.icon-envelope.pull-left,
.icon-heart.pull-left,
.icon-star.pull-left,
.icon-star-empty.pull-left,
.icon-user.pull-left,
.icon-film.pull-left,
.icon-th-large.pull-left,
.icon-th.pull-left,
.icon-th-list.pull-left,
.icon-ok.pull-left,
.icon-remove.pull-left,
.icon-zoom-in.pull-left,
.icon-zoom-out.pull-left,
.icon-off.pull-left,
.icon-signal.pull-left,
.icon-cog.pull-left,
.icon-trash.pull-left,
.icon-home.pull-left,
.icon-file.pull-left,
.icon-inbox.pull-left,
.icon-play-circle.pull-left,
.icon-repeat.pull-left,
.icon-refresh.pull-left,
.icon-list-alt.pull-left,
.icon-lock.pull-left,
.icon-flag.pull-left,
.icon-headphones.pull-left,
.icon-volume-off.pull-left,
.icon-volume-down.pull-left,
.icon-volume-up.pull-left,
.icon-qrcode.pull-left,
.icon-barcode.pull-left,
.icon-tag.pull-left,
.icon-tags.pull-left,
.icon-book.pull-left,
.icon-bookmark.pull-left,
.icon-print.pull-left,
.icon-camera.pull-left,
.icon-font.pull-left,
.icon-bold.pull-left,
.icon-italic.pull-left,
.icon-align-justify.pull-left,
.icon-list.pull-left,
.icon-indent-left.pull-left,
.icon-indent-right.pull-left,
.icon-facetime-video.pull-left,
.icon-picture.pull-left,
.icon-pencil.pull-left,
.icon-map-marker.pull-left,
.icon-adjust.pull-left,
.icon-tint.pull-left,
.icon-edit.pull-left,
.icon-share.pull-left,
.icon-check.pull-left,
.icon-move.pull-left,
.icon-step-backward.pull-left,
.icon-fast-backward.pull-left,
.icon-backward.pull-left,
.icon-play.pull-left,
.icon-pause.pull-left,
.icon-stop.pull-left,
.icon-forward.pull-left,
.icon-fast-forward.pull-left,
.icon-minus-sign.pull-left,
.icon-remove-sign.pull-left,
.icon-ok-sign.pull-left,
.icon-question-sign.pull-left,
.icon-info-sign.pull-left,
.icon-screenshot.pull-left,
.icon-remove-circle.pull-left,
.icon-ok-circle.pull-left,
.icon-ban-circle.pull-left,
.icon-arrow-left.pull-left,
.icon-arrow-right.pull-left,
.icon-arrow-up.pull-left,
.icon-arrow-down.pull-left,
.icon-share-alt.pull-left,
.icon-resize-full.pull-left,
.icon-resize-small.pull-left,
.icon-plus.pull-left,
.icon-minus.pull-left,
.icon-asterisk.pull-left,
.icon-exclamation-sign.pull-left,
.icon-gift.pull-left,
.icon-leaf.pull-left,
.icon-calendar.pull-left,
.icon-random.pull-left,
.icon-comment.pull-left,
.icon-magnet.pull-left,
.icon-chevron-up.pull-left,
.icon-chevron-down.pull-left,
.icon-retweet.pull-left,
.icon-shopping-cart.pull-left,
.icon-folder-close.pull-left,
.icon-folder-open.pull-left,
.icon-resize-vertical.pull-left,
.icon-resize-horizontal.pull-left,
.icon-bar-chart.pull-left,
.icon-twitter-sign.pull-left,
.icon-facebook-sign.pull-left,
.icon-camera-retro.pull-left,
.icon-key.pull-left,
.icon-cogs.pull-left,
.icon-comments.pull-left,
.icon-thumbs-up.pull-left,
.icon-thumbs-down.pull-left,
.icon-star-half.pull-left,
.icon-signin.pull-left,
.icon-trophy.pull-left,
.icon-github-sign.pull-left,
.icon-upload-alt.pull-left,
.icon-lemon.pull-left,
.icon-phone.pull-left,
.icon-check-empty.pull-left,
.icon-bookmark-empty.pull-left,
.icon-phone-sign.pull-left,
.icon-twitter.pull-left,
.icon-facebook.pull-left,
.icon-github.pull-left,
.icon-unlock.pull-left,
.icon-credit.pull-left,
.icon-rss.pull-left,
.icon-hdd.pull-left,
.icon-bullhorn.pull-left,
.icon-bell.pull-left,
.icon-certificate.pull-left,
.icon-hand-right.pull-left,
.icon-hand-left.pull-left,
.icon-hand-up.pull-left,
.icon-globe.pull-left,
.icon-wrench.pull-left,
.icon-tasks.pull-left,
.icon-filter.pull-left,
.icon-briefcase.pull-left,
.icon-fullscreen.pull-left,
.icon-group.pull-left,
.icon-link.pull-left,
.icon-cloud.pull-left,
.icon-beaker.pull-left,
.icon-cut.pull-left,
.icon-copy.pull-left,
.icon-paper-clip.pull-left,
.icon-save.pull-left,
.icon-sign-blank.pull-left,
.icon-reorder.pull-left,
.icon-list-ul.pull-left,
.icon-list-ol.pull-left,
.icon-strikethrough.pull-left,
.icon-underline.pull-left,
.icon-table.pull-left,
.icon-magic.pull-left,
.icon-money.pull-left,
.icon-caret-down.pull-left,
.icon-caret-up.pull-left,
.icon-caret-left.pull-left,
.icon-caret-right.pull-left,
.icon-columns.pull-left,
.icon-sort.pull-left,
.icon-sort-down.pull-left,
.icon-sort-up.pull-left,
.icon-envelope-alt.pull-left,
.icon-linkedin.pull-left,
.icon-undo.pull-left,
.icon-legal.pull-left,
.icon-dashboard.pull-left,
.icon-comment-alt.pull-left,
.icon-comments-alt.pull-left,
.icon-bolt.pull-left,
.icon-sitemap.pull-left,
.icon-umbrella.pull-left,
.icon-paste.pull-left,
.icon-lightbulb.pull-left,
.icon-exchange.pull-left,
.icon-bell-alt.pull-left,
.icon-coffee.pull-left,
.icon-food.pull-left,
.icon-file-alt.pull-left,
.icon-building.pull-left,
.icon-hospital.pull-left,
.icon-ambulance.pull-left,
.icon-medkit.pull-left,
.icon-fighter-jet.pull-left,
.icon-beer.pull-left,
.icon-h-sign.pull-left,
.icon-plus-sign.pull-left,
.icon-double-angle-left.pull-left,
.icon-double-angle-right.pull-left,
.icon-double-angle-up.pull-left,
.icon-double-angle-down.pull-left,
.icon-angle-left.pull-left,
.icon-angle-right.pull-left,
.icon-angle-up.pull-left,
.icon-angle-down.pull-left,
.icon-desktop.pull-left,
.icon-laptop.pull-left,
.icon-spinner.pull-left,
.icon-circle.pull-left,
.icon-reply.pull-left,
.icon-github-alt.pull-left,
.icon-folder-close-alt.pull-left,
.icon-folder-open-alt.pull-left,
.icon-expand-alt.pull-left,
.icon-collapse-alt.pull-left,
.icon-smile.pull-left,
.icon-frown.pull-left,
.icon-meh.pull-left,
.icon-gamepad.pull-left,
.icon-keyboard.pull-left,
.icon-flag-alt.pull-left,
.icon-flag-checkered.pull-left,
.icon-terminal.pull-left,
.icon-code.pull-left,
.icon-reply-all.pull-left,
.icon-star-half-full.pull-left,
.icon-location-arrow.pull-left,
.icon-crop.pull-left,
.icon-code-fork.pull-left,
.icon-subscript.pull-left,
.icon-eraser.pull-left,
.icon-puzzle.pull-left,
.icon-microphone.pull-left,
.icon-microphone-off.pull-left,
.icon-shield.pull-left,
.icon-calendar-empty.pull-left,
.icon-fire-extinguisher.pull-left,
.icon-rocket.pull-left,
.icon-maxcdn.pull-left,
.icon-chevron-sign-left.pull-left,
.icon-chevron-sign-right.pull-left,
.icon-chevron-sign-up.pull-left,
.icon-chevron-sign-down.pull-left,
.icon-html5.pull-left,
.icon-css3.pull-left,
.icon-anchor.pull-left,
.icon-unlock-alt.pull-left,
.icon-bullseye.pull-left,
.icon-ellipsis-horizontal.pull-left,
.icon-ellipsis-vertical.pull-left,
.icon-rss-sign.pull-left,
.icon-fb-boolean.pull-left,
.icon-text-height.pull-left,
.icon-text-width.pull-left,
.icon-align-left.pull-left,
.icon-align-center.pull-left,
.icon-align-right.pull-left,
.icon-step-forward.pull-left,
.icon-eject.pull-left,
.icon-chevron-left.pull-left,
.icon-chevron-right.pull-left,
.icon-plus-sign-2.pull-left,
.icon-fire.pull-left,
.icon-eye-open.pull-left,
.icon-eye-close.pull-left,
.icon-warning-sign.pull-left,
.icon-plane.pull-left,
.icon-heart-empty.pull-left,
.icon-signout.pull-left,
.icon-linkedin-sign.pull-left,
.icon-pushpin.pull-left,
.icon-external-link.pull-left,
.icon-hand-down.pull-left,
.icon-circle-arrow-left.pull-left,
.icon-circle-arrow-right.pull-left,
.icon-circle-arrow-up.pull-left,
.icon-circle-arrow-down.pull-left,
.icon-truck.pull-left,
.icon-pinterest.pull-left,
.icon-pinterest-sign.pull-left,
.icon-google-plus-sign.pull-left,
.icon-google-plus.pull-left,
.icon-cloud-download.pull-left,
.icon-cloud-upload.pull-left,
.icon-user-md.pull-left,
.icon-stethoscope.pull-left,
.icon-suitcase.pull-left,
.icon-tablet.pull-left,
.icon-mobile.pull-left,
.icon-circle-blank.pull-left,
.icon-quote-left.pull-left,
.icon-quote-right.pull-left,
.icon-unlink.pull-left,
.icon-question.pull-left,
.icon-info.pull-left,
.icon-exclamation.pull-left,
.icon-superscript.pull-left,
.icon-play-sign.pull-left,
.icon-ticket.pull-left,
.icon-minus-sign-alt.pull-left,
.icon-check-minus.pull-left,
.icon-level-up.pull-left,
.icon-sort-by-attributes-alt.pull-left,
.icon-sort-by-order.pull-left,
.icon-sort-by-order-alt.pull-left,
.icon-thumbs-up-2.pull-left,
.icon-thumbs-down-2.pull-left,
.icon-dribbble.pull-left,
.icon-skype.pull-left,
.icon-foursquare.pull-left,
.icon-trello.pull-left,
.icon-female.pull-left,
.icon-level-down.pull-left,
.icon-check-sign.pull-left,
.icon-edit-sign.pull-left,
.icon-external-link-sign.pull-left,
.icon-share-sign.pull-left,
.icon-compass.pull-left,
.icon-collapse.pull-left,
.icon-collapse-top.pull-left,
.icon-expand.pull-left,
.icon-euro.pull-left,
.icon-gbp.pull-left,
.icon-dollar.pull-left,
.icon-rupee.pull-left,
.icon-yen.pull-left,
.icon-renminbi.pull-left,
.icon-won.pull-left,
.icon-bitcoin.pull-left,
.icon-file-2.pull-left,
.icon-file-text.pull-left,
.icon-sort-by-alphabet.pull-left,
.icon-sort-by-alphabet-alt.pull-left,
.icon-sort-by-attributes.pull-left,
.icon-youtube-sign.pull-left,
.icon-youtube.pull-left,
.icon-xing.pull-left,
.icon-xing-sign.pull-left,
.icon-youtube-play.pull-left,
.icon-dropbox.pull-left,
.icon-stackexchange.pull-left,
.icon-instagram.pull-left,
.icon-flickr.pull-left,
.icon-adn.pull-left,
.icon-bitbucket.pull-left,
.icon-bitbucket-sign.pull-left,
.icon-tumblr.pull-left,
.icon-tumblr-sign.pull-left,
.icon-long-arrow-down.pull-left,
.icon-long-arrow-up.pull-left,
.icon-long-arrow-left.pull-left,
.icon-long-arrow-right.pull-left,
.icon-apple.pull-left,
.icon-windows.pull-left,
.icon-android.pull-left,
.icon-linux.pull-left,
.icon-male.pull-left,
.icon-gittip.pull-left,
.icon-sun.pull-left,
.icon-moon.pull-left,
.icon-archive.pull-left,
.icon-bug.pull-left,
.icon-vk.pull-left,
.icon-weibo.pull-left,
.icon-renren.pull-left,
.icon-time.pull-left,
.icon-road.pull-left,
.icon-download-alt.pull-left,
.icon-download.pull-left,
.icon-upload.pull-left,
.icon-db-joinxor.pull-left,
.icon-db-state.pull-left,
.icon-db-start.pull-left,
.icon-db-end.pull-left,
.icon-db-fork.pull-left,
.icon-db-condition.pull-left,
.icon-db-task.pull-left,
.icon-db-join.pull-left,
.icon-fb-button.pull-left,
.icon-fb-fieldset.pull-left,
.icon-fb-custom-field.pull-left,
.icon-fb-separator.pull-left,
.icon-fb-paragraph.pull-left,
.icon-fb-file-upload.pull-left,
.icon-fb-text.pull-left,
.icon-fb-text-box.pull-left,
.icon-fb-select.pull-left,
.icon-fb-radio.pull-left,
.icon-fb-number.pull-left,
.icon-fb-integer.pull-left,
.icon-fb-decimal.pull-left {
    margin-right: .3em
}

.icon-caret-bottom-right.pull-right,
.icon-glass.pull-right,
.icon-music.pull-right,
.icon-search.pull-right,
.icon-envelope.pull-right,
.icon-heart.pull-right,
.icon-star.pull-right,
.icon-star-empty.pull-right,
.icon-user.pull-right,
.icon-film.pull-right,
.icon-th-large.pull-right,
.icon-th.pull-right,
.icon-th-list.pull-right,
.icon-ok.pull-right,
.icon-remove.pull-right,
.icon-zoom-in.pull-right,
.icon-zoom-out.pull-right,
.icon-off.pull-right,
.icon-signal.pull-right,
.icon-cog.pull-right,
.icon-trash.pull-right,
.icon-home.pull-right,
.icon-file.pull-right,
.icon-inbox.pull-right,
.icon-play-circle.pull-right,
.icon-repeat.pull-right,
.icon-refresh.pull-right,
.icon-list-alt.pull-right,
.icon-lock.pull-right,
.icon-flag.pull-right,
.icon-headphones.pull-right,
.icon-volume-off.pull-right,
.icon-volume-down.pull-right,
.icon-volume-up.pull-right,
.icon-qrcode.pull-right,
.icon-barcode.pull-right,
.icon-tag.pull-right,
.icon-tags.pull-right,
.icon-book.pull-right,
.icon-bookmark.pull-right,
.icon-print.pull-right,
.icon-camera.pull-right,
.icon-font.pull-right,
.icon-bold.pull-right,
.icon-italic.pull-right,
.icon-align-justify.pull-right,
.icon-list.pull-right,
.icon-indent-left.pull-right,
.icon-indent-right.pull-right,
.icon-facetime-video.pull-right,
.icon-picture.pull-right,
.icon-pencil.pull-right,
.icon-map-marker.pull-right,
.icon-adjust.pull-right,
.icon-tint.pull-right,
.icon-edit.pull-right,
.icon-share.pull-right,
.icon-check.pull-right,
.icon-move.pull-right,
.icon-step-backward.pull-right,
.icon-fast-backward.pull-right,
.icon-backward.pull-right,
.icon-play.pull-right,
.icon-pause.pull-right,
.icon-stop.pull-right,
.icon-forward.pull-right,
.icon-fast-forward.pull-right,
.icon-minus-sign.pull-right,
.icon-remove-sign.pull-right,
.icon-ok-sign.pull-right,
.icon-question-sign.pull-right,
.icon-info-sign.pull-right,
.icon-screenshot.pull-right,
.icon-remove-circle.pull-right,
.icon-ok-circle.pull-right,
.icon-ban-circle.pull-right,
.icon-arrow-left.pull-right,
.icon-arrow-right.pull-right,
.icon-arrow-up.pull-right,
.icon-arrow-down.pull-right,
.icon-share-alt.pull-right,
.icon-resize-full.pull-right,
.icon-resize-small.pull-right,
.icon-plus.pull-right,
.icon-minus.pull-right,
.icon-asterisk.pull-right,
.icon-exclamation-sign.pull-right,
.icon-gift.pull-right,
.icon-leaf.pull-right,
.icon-calendar.pull-right,
.icon-random.pull-right,
.icon-comment.pull-right,
.icon-magnet.pull-right,
.icon-chevron-up.pull-right,
.icon-chevron-down.pull-right,
.icon-retweet.pull-right,
.icon-shopping-cart.pull-right,
.icon-folder-close.pull-right,
.icon-folder-open.pull-right,
.icon-resize-vertical.pull-right,
.icon-resize-horizontal.pull-right,
.icon-bar-chart.pull-right,
.icon-twitter-sign.pull-right,
.icon-facebook-sign.pull-right,
.icon-camera-retro.pull-right,
.icon-key.pull-right,
.icon-cogs.pull-right,
.icon-comments.pull-right,
.icon-thumbs-up.pull-right,
.icon-thumbs-down.pull-right,
.icon-star-half.pull-right,
.icon-signin.pull-right,
.icon-trophy.pull-right,
.icon-github-sign.pull-right,
.icon-upload-alt.pull-right,
.icon-lemon.pull-right,
.icon-phone.pull-right,
.icon-check-empty.pull-right,
.icon-bookmark-empty.pull-right,
.icon-phone-sign.pull-right,
.icon-twitter.pull-right,
.icon-facebook.pull-right,
.icon-github.pull-right,
.icon-unlock.pull-right,
.icon-credit.pull-right,
.icon-rss.pull-right,
.icon-hdd.pull-right,
.icon-bullhorn.pull-right,
.icon-bell.pull-right,
.icon-certificate.pull-right,
.icon-hand-right.pull-right,
.icon-hand-left.pull-right,
.icon-hand-up.pull-right,
.icon-globe.pull-right,
.icon-wrench.pull-right,
.icon-tasks.pull-right,
.icon-filter.pull-right,
.icon-briefcase.pull-right,
.icon-fullscreen.pull-right,
.icon-group.pull-right,
.icon-link.pull-right,
.icon-cloud.pull-right,
.icon-beaker.pull-right,
.icon-cut.pull-right,
.icon-copy.pull-right,
.icon-paper-clip.pull-right,
.icon-save.pull-right,
.icon-sign-blank.pull-right,
.icon-reorder.pull-right,
.icon-list-ul.pull-right,
.icon-list-ol.pull-right,
.icon-strikethrough.pull-right,
.icon-underline.pull-right,
.icon-table.pull-right,
.icon-magic.pull-right,
.icon-money.pull-right,
.icon-caret-down.pull-right,
.icon-caret-up.pull-right,
.icon-caret-left.pull-right,
.icon-caret-right.pull-right,
.icon-columns.pull-right,
.icon-sort.pull-right,
.icon-sort-down.pull-right,
.icon-sort-up.pull-right,
.icon-envelope-alt.pull-right,
.icon-linkedin.pull-right,
.icon-undo.pull-right,
.icon-legal.pull-right,
.icon-dashboard.pull-right,
.icon-comment-alt.pull-right,
.icon-comments-alt.pull-right,
.icon-bolt.pull-right,
.icon-sitemap.pull-right,
.icon-umbrella.pull-right,
.icon-paste.pull-right,
.icon-lightbulb.pull-right,
.icon-exchange.pull-right,
.icon-bell-alt.pull-right,
.icon-coffee.pull-right,
.icon-food.pull-right,
.icon-file-alt.pull-right,
.icon-building.pull-right,
.icon-hospital.pull-right,
.icon-ambulance.pull-right,
.icon-medkit.pull-right,
.icon-fighter-jet.pull-right,
.icon-beer.pull-right,
.icon-h-sign.pull-right,
.icon-plus-sign.pull-right,
.icon-double-angle-left.pull-right,
.icon-double-angle-right.pull-right,
.icon-double-angle-up.pull-right,
.icon-double-angle-down.pull-right,
.icon-angle-left.pull-right,
.icon-angle-right.pull-right,
.icon-angle-up.pull-right,
.icon-angle-down.pull-right,
.icon-desktop.pull-right,
.icon-laptop.pull-right,
.icon-spinner.pull-right,
.icon-circle.pull-right,
.icon-reply.pull-right,
.icon-github-alt.pull-right,
.icon-folder-close-alt.pull-right,
.icon-folder-open-alt.pull-right,
.icon-expand-alt.pull-right,
.icon-collapse-alt.pull-right,
.icon-smile.pull-right,
.icon-frown.pull-right,
.icon-meh.pull-right,
.icon-gamepad.pull-right,
.icon-keyboard.pull-right,
.icon-flag-alt.pull-right,
.icon-flag-checkered.pull-right,
.icon-terminal.pull-right,
.icon-code.pull-right,
.icon-reply-all.pull-right,
.icon-star-half-full.pull-right,
.icon-location-arrow.pull-right,
.icon-crop.pull-right,
.icon-code-fork.pull-right,
.icon-subscript.pull-right,
.icon-eraser.pull-right,
.icon-puzzle.pull-right,
.icon-microphone.pull-right,
.icon-microphone-off.pull-right,
.icon-shield.pull-right,
.icon-calendar-empty.pull-right,
.icon-fire-extinguisher.pull-right,
.icon-rocket.pull-right,
.icon-maxcdn.pull-right,
.icon-chevron-sign-left.pull-right,
.icon-chevron-sign-right.pull-right,
.icon-chevron-sign-up.pull-right,
.icon-chevron-sign-down.pull-right,
.icon-html5.pull-right,
.icon-css3.pull-right,
.icon-anchor.pull-right,
.icon-unlock-alt.pull-right,
.icon-bullseye.pull-right,
.icon-ellipsis-horizontal.pull-right,
.icon-ellipsis-vertical.pull-right,
.icon-rss-sign.pull-right,
.icon-fb-boolean.pull-right,
.icon-text-height.pull-right,
.icon-text-width.pull-right,
.icon-align-left.pull-right,
.icon-align-center.pull-right,
.icon-align-right.pull-right,
.icon-step-forward.pull-right,
.icon-eject.pull-right,
.icon-chevron-left.pull-right,
.icon-chevron-right.pull-right,
.icon-plus-sign-2.pull-right,
.icon-fire.pull-right,
.icon-eye-open.pull-right,
.icon-eye-close.pull-right,
.icon-warning-sign.pull-right,
.icon-plane.pull-right,
.icon-heart-empty.pull-right,
.icon-signout.pull-right,
.icon-linkedin-sign.pull-right,
.icon-pushpin.pull-right,
.icon-external-link.pull-right,
.icon-hand-down.pull-right,
.icon-circle-arrow-left.pull-right,
.icon-circle-arrow-right.pull-right,
.icon-circle-arrow-up.pull-right,
.icon-circle-arrow-down.pull-right,
.icon-truck.pull-right,
.icon-pinterest.pull-right,
.icon-pinterest-sign.pull-right,
.icon-google-plus-sign.pull-right,
.icon-google-plus.pull-right,
.icon-cloud-download.pull-right,
.icon-cloud-upload.pull-right,
.icon-user-md.pull-right,
.icon-stethoscope.pull-right,
.icon-suitcase.pull-right,
.icon-tablet.pull-right,
.icon-mobile.pull-right,
.icon-circle-blank.pull-right,
.icon-quote-left.pull-right,
.icon-quote-right.pull-right,
.icon-unlink.pull-right,
.icon-question.pull-right,
.icon-info.pull-right,
.icon-exclamation.pull-right,
.icon-superscript.pull-right,
.icon-play-sign.pull-right,
.icon-ticket.pull-right,
.icon-minus-sign-alt.pull-right,
.icon-check-minus.pull-right,
.icon-level-up.pull-right,
.icon-sort-by-attributes-alt.pull-right,
.icon-sort-by-order.pull-right,
.icon-sort-by-order-alt.pull-right,
.icon-thumbs-up-2.pull-right,
.icon-thumbs-down-2.pull-right,
.icon-dribbble.pull-right,
.icon-skype.pull-right,
.icon-foursquare.pull-right,
.icon-trello.pull-right,
.icon-female.pull-right,
.icon-level-down.pull-right,
.icon-check-sign.pull-right,
.icon-edit-sign.pull-right,
.icon-external-link-sign.pull-right,
.icon-share-sign.pull-right,
.icon-compass.pull-right,
.icon-collapse.pull-right,
.icon-collapse-top.pull-right,
.icon-expand.pull-right,
.icon-euro.pull-right,
.icon-gbp.pull-right,
.icon-dollar.pull-right,
.icon-rupee.pull-right,
.icon-yen.pull-right,
.icon-renminbi.pull-right,
.icon-won.pull-right,
.icon-bitcoin.pull-right,
.icon-file-2.pull-right,
.icon-file-text.pull-right,
.icon-sort-by-alphabet.pull-right,
.icon-sort-by-alphabet-alt.pull-right,
.icon-sort-by-attributes.pull-right,
.icon-youtube-sign.pull-right,
.icon-youtube.pull-right,
.icon-xing.pull-right,
.icon-xing-sign.pull-right,
.icon-youtube-play.pull-right,
.icon-dropbox.pull-right,
.icon-stackexchange.pull-right,
.icon-instagram.pull-right,
.icon-flickr.pull-right,
.icon-adn.pull-right,
.icon-bitbucket.pull-right,
.icon-bitbucket-sign.pull-right,
.icon-tumblr.pull-right,
.icon-tumblr-sign.pull-right,
.icon-long-arrow-down.pull-right,
.icon-long-arrow-up.pull-right,
.icon-long-arrow-left.pull-right,
.icon-long-arrow-right.pull-right,
.icon-apple.pull-right,
.icon-windows.pull-right,
.icon-android.pull-right,
.icon-linux.pull-right,
.icon-male.pull-right,
.icon-gittip.pull-right,
.icon-sun.pull-right,
.icon-moon.pull-right,
.icon-archive.pull-right,
.icon-bug.pull-right,
.icon-vk.pull-right,
.icon-weibo.pull-right,
.icon-renren.pull-right,
.icon-time.pull-right,
.icon-road.pull-right,
.icon-download-alt.pull-right,
.icon-download.pull-right,
.icon-upload.pull-right,
.icon-db-joinxor.pull-right,
.icon-db-state.pull-right,
.icon-db-start.pull-right,
.icon-db-end.pull-right,
.icon-db-fork.pull-right,
.icon-db-condition.pull-right,
.icon-db-task.pull-right,
.icon-db-join.pull-right,
.icon-fb-button.pull-right,
.icon-fb-fieldset.pull-right,
.icon-fb-custom-field.pull-right,
.icon-fb-separator.pull-right,
.icon-fb-paragraph.pull-right,
.icon-fb-file-upload.pull-right,
.icon-fb-text.pull-right,
.icon-fb-text-box.pull-right,
.icon-fb-select.pull-right,
.icon-fb-radio.pull-right,
.icon-fb-number.pull-right,
.icon-fb-integer.pull-right,
.icon-fb-decimal.pull-right {
    margin-left: .3em
}

a .icon-caret-bottom-right,
a .icon-glass,
a .icon-music,
a .icon-search,
a .icon-envelope,
a .icon-heart,
a .icon-star,
a .icon-star-empty,
a .icon-user,
a .icon-film,
a .icon-th-large,
a .icon-th,
a .icon-th-list,
a .icon-ok,
a .icon-remove,
a .icon-zoom-in,
a .icon-zoom-out,
a .icon-off,
a .icon-signal,
a .icon-cog,
a .icon-trash,
a .icon-home,
a .icon-file,
a .icon-inbox,
a .icon-play-circle,
a .icon-repeat,
a .icon-refresh,
a .icon-list-alt,
a .icon-lock,
a .icon-flag,
a .icon-headphones,
a .icon-volume-off,
a .icon-volume-down,
a .icon-volume-up,
a .icon-qrcode,
a .icon-barcode,
a .icon-tag,
a .icon-tags,
a .icon-book,
a .icon-bookmark,
a .icon-print,
a .icon-camera,
a .icon-font,
a .icon-bold,
a .icon-italic,
a .icon-align-justify,
a .icon-list,
a .icon-indent-left,
a .icon-indent-right,
a .icon-facetime-video,
a .icon-picture,
a .icon-pencil,
a .icon-map-marker,
a .icon-adjust,
a .icon-tint,
a .icon-edit,
a .icon-share,
a .icon-check,
a .icon-move,
a .icon-step-backward,
a .icon-fast-backward,
a .icon-backward,
a .icon-play,
a .icon-pause,
a .icon-stop,
a .icon-forward,
a .icon-fast-forward,
a .icon-minus-sign,
a .icon-remove-sign,
a .icon-ok-sign,
a .icon-question-sign,
a .icon-info-sign,
a .icon-screenshot,
a .icon-remove-circle,
a .icon-ok-circle,
a .icon-ban-circle,
a .icon-arrow-left,
a .icon-arrow-right,
a .icon-arrow-up,
a .icon-arrow-down,
a .icon-share-alt,
a .icon-resize-full,
a .icon-resize-small,
a .icon-plus,
a .icon-minus,
a .icon-asterisk,
a .icon-exclamation-sign,
a .icon-gift,
a .icon-leaf,
a .icon-calendar,
a .icon-random,
a .icon-comment,
a .icon-magnet,
a .icon-chevron-up,
a .icon-chevron-down,
a .icon-retweet,
a .icon-shopping-cart,
a .icon-folder-close,
a .icon-folder-open,
a .icon-resize-vertical,
a .icon-resize-horizontal,
a .icon-bar-chart,
a .icon-twitter-sign,
a .icon-facebook-sign,
a .icon-camera-retro,
a .icon-key,
a .icon-cogs,
a .icon-comments,
a .icon-thumbs-up,
a .icon-thumbs-down,
a .icon-star-half,
a .icon-signin,
a .icon-trophy,
a .icon-github-sign,
a .icon-upload-alt,
a .icon-lemon,
a .icon-phone,
a .icon-check-empty,
a .icon-bookmark-empty,
a .icon-phone-sign,
a .icon-twitter,
a .icon-facebook,
a .icon-github,
a .icon-unlock,
a .icon-credit,
a .icon-rss,
a .icon-hdd,
a .icon-bullhorn,
a .icon-bell,
a .icon-certificate,
a .icon-hand-right,
a .icon-hand-left,
a .icon-hand-up,
a .icon-globe,
a .icon-wrench,
a .icon-tasks,
a .icon-filter,
a .icon-briefcase,
a .icon-fullscreen,
a .icon-group,
a .icon-link,
a .icon-cloud,
a .icon-beaker,
a .icon-cut,
a .icon-copy,
a .icon-paper-clip,
a .icon-save,
a .icon-sign-blank,
a .icon-reorder,
a .icon-list-ul,
a .icon-list-ol,
a .icon-strikethrough,
a .icon-underline,
a .icon-table,
a .icon-magic,
a .icon-money,
a .icon-caret-down,
a .icon-caret-up,
a .icon-caret-left,
a .icon-caret-right,
a .icon-columns,
a .icon-sort,
a .icon-sort-down,
a .icon-sort-up,
a .icon-envelope-alt,
a .icon-linkedin,
a .icon-undo,
a .icon-legal,
a .icon-dashboard,
a .icon-comment-alt,
a .icon-comments-alt,
a .icon-bolt,
a .icon-sitemap,
a .icon-umbrella,
a .icon-paste,
a .icon-lightbulb,
a .icon-exchange,
a .icon-bell-alt,
a .icon-coffee,
a .icon-food,
a .icon-file-alt,
a .icon-building,
a .icon-hospital,
a .icon-ambulance,
a .icon-medkit,
a .icon-fighter-jet,
a .icon-beer,
a .icon-h-sign,
a .icon-plus-sign,
a .icon-double-angle-left,
a .icon-double-angle-right,
a .icon-double-angle-up,
a .icon-double-angle-down,
a .icon-angle-left,
a .icon-angle-right,
a .icon-angle-up,
a .icon-angle-down,
a .icon-desktop,
a .icon-laptop,
a .icon-spinner,
a .icon-circle,
a .icon-reply,
a .icon-github-alt,
a .icon-folder-close-alt,
a .icon-folder-open-alt,
a .icon-expand-alt,
a .icon-collapse-alt,
a .icon-smile,
a .icon-frown,
a .icon-meh,
a .icon-gamepad,
a .icon-keyboard,
a .icon-flag-alt,
a .icon-flag-checkered,
a .icon-terminal,
a .icon-code,
a .icon-reply-all,
a .icon-star-half-full,
a .icon-location-arrow,
a .icon-crop,
a .icon-code-fork,
a .icon-subscript,
a .icon-eraser,
a .icon-puzzle,
a .icon-microphone,
a .icon-microphone-off,
a .icon-shield,
a .icon-calendar-empty,
a .icon-fire-extinguisher,
a .icon-rocket,
a .icon-maxcdn,
a .icon-chevron-sign-left,
a .icon-chevron-sign-right,
a .icon-chevron-sign-up,
a .icon-chevron-sign-down,
a .icon-html5,
a .icon-css3,
a .icon-anchor,
a .icon-unlock-alt,
a .icon-bullseye,
a .icon-ellipsis-horizontal,
a .icon-ellipsis-vertical,
a .icon-rss-sign,
a .icon-fb-boolean,
a .icon-text-height,
a .icon-text-width,
a .icon-align-left,
a .icon-align-center,
a .icon-align-right,
a .icon-step-forward,
a .icon-eject,
a .icon-chevron-left,
a .icon-chevron-right,
a .icon-plus-sign-2,
a .icon-fire,
a .icon-eye-open,
a .icon-eye-close,
a .icon-warning-sign,
a .icon-plane,
a .icon-heart-empty,
a .icon-signout,
a .icon-linkedin-sign,
a .icon-pushpin,
a .icon-external-link,
a .icon-hand-down,
a .icon-circle-arrow-left,
a .icon-circle-arrow-right,
a .icon-circle-arrow-up,
a .icon-circle-arrow-down,
a .icon-truck,
a .icon-pinterest,
a .icon-pinterest-sign,
a .icon-google-plus-sign,
a .icon-google-plus,
a .icon-cloud-download,
a .icon-cloud-upload,
a .icon-user-md,
a .icon-stethoscope,
a .icon-suitcase,
a .icon-tablet,
a .icon-mobile,
a .icon-circle-blank,
a .icon-quote-left,
a .icon-quote-right,
a .icon-unlink,
a .icon-question,
a .icon-info,
a .icon-exclamation,
a .icon-superscript,
a .icon-play-sign,
a .icon-ticket,
a .icon-minus-sign-alt,
a .icon-check-minus,
a .icon-level-up,
a .icon-sort-by-attributes-alt,
a .icon-sort-by-order,
a .icon-sort-by-order-alt,
a .icon-thumbs-up-2,
a .icon-thumbs-down-2,
a .icon-dribbble,
a .icon-skype,
a .icon-foursquare,
a .icon-trello,
a .icon-female,
a .icon-level-down,
a .icon-check-sign,
a .icon-edit-sign,
a .icon-external-link-sign,
a .icon-share-sign,
a .icon-compass,
a .icon-collapse,
a .icon-collapse-top,
a .icon-expand,
a .icon-euro,
a .icon-gbp,
a .icon-dollar,
a .icon-rupee,
a .icon-yen,
a .icon-renminbi,
a .icon-won,
a .icon-bitcoin,
a .icon-file-2,
a .icon-file-text,
a .icon-sort-by-alphabet,
a .icon-sort-by-alphabet-alt,
a .icon-sort-by-attributes,
a .icon-youtube-sign,
a .icon-youtube,
a .icon-xing,
a .icon-xing-sign,
a .icon-youtube-play,
a .icon-dropbox,
a .icon-stackexchange,
a .icon-instagram,
a .icon-flickr,
a .icon-adn,
a .icon-bitbucket,
a .icon-bitbucket-sign,
a .icon-tumblr,
a .icon-tumblr-sign,
a .icon-long-arrow-down,
a .icon-long-arrow-up,
a .icon-long-arrow-left,
a .icon-long-arrow-right,
a .icon-apple,
a .icon-windows,
a .icon-android,
a .icon-linux,
a .icon-male,
a .icon-gittip,
a .icon-sun,
a .icon-moon,
a .icon-archive,
a .icon-bug,
a .icon-vk,
a .icon-weibo,
a .icon-renren,
a .icon-time,
a .icon-road,
a .icon-download-alt,
a .icon-download,
a .icon-upload,
a .icon-db-joinxor,
a .icon-db-state,
a .icon-db-start,
a .icon-db-end,
a .icon-db-fork,
a .icon-db-condition,
a .icon-db-task,
a .icon-db-join,
a .icon-fb-button,
a .icon-fb-fieldset,
a .icon-fb-custom-field,
a .icon-fb-separator,
a .icon-fb-paragraph,
a .icon-fb-file-upload,
a .icon-fb-text,
a .icon-fb-text-box,
a .icon-fb-select,
a .icon-fb-radio,
a .icon-fb-number,
a .icon-fb-integer,
a .icon-fb-decimal {
    display: inline
}

.icon-stack .icon-caret-bottom-right,
.icon-stack .icon-glass,
.icon-stack .icon-music,
.icon-stack .icon-search,
.icon-stack .icon-envelope,
.icon-stack .icon-heart,
.icon-stack .icon-star,
.icon-stack .icon-star-empty,
.icon-stack .icon-user,
.icon-stack .icon-film,
.icon-stack .icon-th-large,
.icon-stack .icon-th,
.icon-stack .icon-th-list,
.icon-stack .icon-ok,
.icon-stack .icon-remove,
.icon-stack .icon-zoom-in,
.icon-stack .icon-zoom-out,
.icon-stack .icon-off,
.icon-stack .icon-signal,
.icon-stack .icon-cog,
.icon-stack .icon-trash,
.icon-stack .icon-home,
.icon-stack .icon-file,
.icon-stack .icon-inbox,
.icon-stack .icon-play-circle,
.icon-stack .icon-repeat,
.icon-stack .icon-refresh,
.icon-stack .icon-list-alt,
.icon-stack .icon-lock,
.icon-stack .icon-flag,
.icon-stack .icon-headphones,
.icon-stack .icon-volume-off,
.icon-stack .icon-volume-down,
.icon-stack .icon-volume-up,
.icon-stack .icon-qrcode,
.icon-stack .icon-barcode,
.icon-stack .icon-tag,
.icon-stack .icon-tags,
.icon-stack .icon-book,
.icon-stack .icon-bookmark,
.icon-stack .icon-print,
.icon-stack .icon-camera,
.icon-stack .icon-font,
.icon-stack .icon-bold,
.icon-stack .icon-italic,
.icon-stack .icon-align-justify,
.icon-stack .icon-list,
.icon-stack .icon-indent-left,
.icon-stack .icon-indent-right,
.icon-stack .icon-facetime-video,
.icon-stack .icon-picture,
.icon-stack .icon-pencil,
.icon-stack .icon-map-marker,
.icon-stack .icon-adjust,
.icon-stack .icon-tint,
.icon-stack .icon-edit,
.icon-stack .icon-share,
.icon-stack .icon-check,
.icon-stack .icon-move,
.icon-stack .icon-step-backward,
.icon-stack .icon-fast-backward,
.icon-stack .icon-backward,
.icon-stack .icon-play,
.icon-stack .icon-pause,
.icon-stack .icon-stop,
.icon-stack .icon-forward,
.icon-stack .icon-fast-forward,
.icon-stack .icon-minus-sign,
.icon-stack .icon-remove-sign,
.icon-stack .icon-ok-sign,
.icon-stack .icon-question-sign,
.icon-stack .icon-info-sign,
.icon-stack .icon-screenshot,
.icon-stack .icon-remove-circle,
.icon-stack .icon-ok-circle,
.icon-stack .icon-ban-circle,
.icon-stack .icon-arrow-left,
.icon-stack .icon-arrow-right,
.icon-stack .icon-arrow-up,
.icon-stack .icon-arrow-down,
.icon-stack .icon-share-alt,
.icon-stack .icon-resize-full,
.icon-stack .icon-resize-small,
.icon-stack .icon-plus,
.icon-stack .icon-minus,
.icon-stack .icon-asterisk,
.icon-stack .icon-exclamation-sign,
.icon-stack .icon-gift,
.icon-stack .icon-leaf,
.icon-stack .icon-calendar,
.icon-stack .icon-random,
.icon-stack .icon-comment,
.icon-stack .icon-magnet,
.icon-stack .icon-chevron-up,
.icon-stack .icon-chevron-down,
.icon-stack .icon-retweet,
.icon-stack .icon-shopping-cart,
.icon-stack .icon-folder-close,
.icon-stack .icon-folder-open,
.icon-stack .icon-resize-vertical,
.icon-stack .icon-resize-horizontal,
.icon-stack .icon-bar-chart,
.icon-stack .icon-twitter-sign,
.icon-stack .icon-facebook-sign,
.icon-stack .icon-camera-retro,
.icon-stack .icon-key,
.icon-stack .icon-cogs,
.icon-stack .icon-comments,
.icon-stack .icon-thumbs-up,
.icon-stack .icon-thumbs-down,
.icon-stack .icon-star-half,
.icon-stack .icon-signin,
.icon-stack .icon-trophy,
.icon-stack .icon-github-sign,
.icon-stack .icon-upload-alt,
.icon-stack .icon-lemon,
.icon-stack .icon-phone,
.icon-stack .icon-check-empty,
.icon-stack .icon-bookmark-empty,
.icon-stack .icon-phone-sign,
.icon-stack .icon-twitter,
.icon-stack .icon-facebook,
.icon-stack .icon-github,
.icon-stack .icon-unlock,
.icon-stack .icon-credit,
.icon-stack .icon-rss,
.icon-stack .icon-hdd,
.icon-stack .icon-bullhorn,
.icon-stack .icon-bell,
.icon-stack .icon-certificate,
.icon-stack .icon-hand-right,
.icon-stack .icon-hand-left,
.icon-stack .icon-hand-up,
.icon-stack .icon-globe,
.icon-stack .icon-wrench,
.icon-stack .icon-tasks,
.icon-stack .icon-filter,
.icon-stack .icon-briefcase,
.icon-stack .icon-fullscreen,
.icon-stack .icon-group,
.icon-stack .icon-link,
.icon-stack .icon-cloud,
.icon-stack .icon-beaker,
.icon-stack .icon-cut,
.icon-stack .icon-copy,
.icon-stack .icon-paper-clip,
.icon-stack .icon-save,
.icon-stack .icon-sign-blank,
.icon-stack .icon-reorder,
.icon-stack .icon-list-ul,
.icon-stack .icon-list-ol,
.icon-stack .icon-strikethrough,
.icon-stack .icon-underline,
.icon-stack .icon-table,
.icon-stack .icon-magic,
.icon-stack .icon-money,
.icon-stack .icon-caret-down,
.icon-stack .icon-caret-up,
.icon-stack .icon-caret-left,
.icon-stack .icon-caret-right,
.icon-stack .icon-columns,
.icon-stack .icon-sort,
.icon-stack .icon-sort-down,
.icon-stack .icon-sort-up,
.icon-stack .icon-envelope-alt,
.icon-stack .icon-linkedin,
.icon-stack .icon-undo,
.icon-stack .icon-legal,
.icon-stack .icon-dashboard,
.icon-stack .icon-comment-alt,
.icon-stack .icon-comments-alt,
.icon-stack .icon-bolt,
.icon-stack .icon-sitemap,
.icon-stack .icon-umbrella,
.icon-stack .icon-paste,
.icon-stack .icon-lightbulb,
.icon-stack .icon-exchange,
.icon-stack .icon-bell-alt,
.icon-stack .icon-coffee,
.icon-stack .icon-food,
.icon-stack .icon-file-alt,
.icon-stack .icon-building,
.icon-stack .icon-hospital,
.icon-stack .icon-ambulance,
.icon-stack .icon-medkit,
.icon-stack .icon-fighter-jet,
.icon-stack .icon-beer,
.icon-stack .icon-h-sign,
.icon-stack .icon-plus-sign,
.icon-stack .icon-double-angle-left,
.icon-stack .icon-double-angle-right,
.icon-stack .icon-double-angle-up,
.icon-stack .icon-double-angle-down,
.icon-stack .icon-angle-left,
.icon-stack .icon-angle-right,
.icon-stack .icon-angle-up,
.icon-stack .icon-angle-down,
.icon-stack .icon-desktop,
.icon-stack .icon-laptop,
.icon-stack .icon-spinner,
.icon-stack .icon-circle,
.icon-stack .icon-reply,
.icon-stack .icon-github-alt,
.icon-stack .icon-folder-close-alt,
.icon-stack .icon-folder-open-alt,
.icon-stack .icon-expand-alt,
.icon-stack .icon-collapse-alt,
.icon-stack .icon-smile,
.icon-stack .icon-frown,
.icon-stack .icon-meh,
.icon-stack .icon-gamepad,
.icon-stack .icon-keyboard,
.icon-stack .icon-flag-alt,
.icon-stack .icon-flag-checkered,
.icon-stack .icon-terminal,
.icon-stack .icon-code,
.icon-stack .icon-reply-all,
.icon-stack .icon-star-half-full,
.icon-stack .icon-location-arrow,
.icon-stack .icon-crop,
.icon-stack .icon-code-fork,
.icon-stack .icon-subscript,
.icon-stack .icon-eraser,
.icon-stack .icon-puzzle,
.icon-stack .icon-microphone,
.icon-stack .icon-microphone-off,
.icon-stack .icon-shield,
.icon-stack .icon-calendar-empty,
.icon-stack .icon-fire-extinguisher,
.icon-stack .icon-rocket,
.icon-stack .icon-maxcdn,
.icon-stack .icon-chevron-sign-left,
.icon-stack .icon-chevron-sign-right,
.icon-stack .icon-chevron-sign-up,
.icon-stack .icon-chevron-sign-down,
.icon-stack .icon-html5,
.icon-stack .icon-css3,
.icon-stack .icon-anchor,
.icon-stack .icon-unlock-alt,
.icon-stack .icon-bullseye,
.icon-stack .icon-ellipsis-horizontal,
.icon-stack .icon-ellipsis-vertical,
.icon-stack .icon-rss-sign,
.icon-stack .icon-fb-boolean,
.icon-stack .icon-text-height,
.icon-stack .icon-text-width,
.icon-stack .icon-align-left,
.icon-stack .icon-align-center,
.icon-stack .icon-align-right,
.icon-stack .icon-step-forward,
.icon-stack .icon-eject,
.icon-stack .icon-chevron-left,
.icon-stack .icon-chevron-right,
.icon-stack .icon-plus-sign-2,
.icon-stack .icon-fire,
.icon-stack .icon-eye-open,
.icon-stack .icon-eye-close,
.icon-stack .icon-warning-sign,
.icon-stack .icon-plane,
.icon-stack .icon-heart-empty,
.icon-stack .icon-signout,
.icon-stack .icon-linkedin-sign,
.icon-stack .icon-pushpin,
.icon-stack .icon-external-link,
.icon-stack .icon-hand-down,
.icon-stack .icon-circle-arrow-left,
.icon-stack .icon-circle-arrow-right,
.icon-stack .icon-circle-arrow-up,
.icon-stack .icon-circle-arrow-down,
.icon-stack .icon-truck,
.icon-stack .icon-pinterest,
.icon-stack .icon-pinterest-sign,
.icon-stack .icon-google-plus-sign,
.icon-stack .icon-google-plus,
.icon-stack .icon-cloud-download,
.icon-stack .icon-cloud-upload,
.icon-stack .icon-user-md,
.icon-stack .icon-stethoscope,
.icon-stack .icon-suitcase,
.icon-stack .icon-tablet,
.icon-stack .icon-mobile,
.icon-stack .icon-circle-blank,
.icon-stack .icon-quote-left,
.icon-stack .icon-quote-right,
.icon-stack .icon-unlink,
.icon-stack .icon-question,
.icon-stack .icon-info,
.icon-stack .icon-exclamation,
.icon-stack .icon-superscript,
.icon-stack .icon-play-sign,
.icon-stack .icon-ticket,
.icon-stack .icon-minus-sign-alt,
.icon-stack .icon-check-minus,
.icon-stack .icon-level-up,
.icon-stack .icon-sort-by-attributes-alt,
.icon-stack .icon-sort-by-order,
.icon-stack .icon-sort-by-order-alt,
.icon-stack .icon-thumbs-up-2,
.icon-stack .icon-thumbs-down-2,
.icon-stack .icon-dribbble,
.icon-stack .icon-skype,
.icon-stack .icon-foursquare,
.icon-stack .icon-trello,
.icon-stack .icon-female,
.icon-stack .icon-level-down,
.icon-stack .icon-check-sign,
.icon-stack .icon-edit-sign,
.icon-stack .icon-external-link-sign,
.icon-stack .icon-share-sign,
.icon-stack .icon-compass,
.icon-stack .icon-collapse,
.icon-stack .icon-collapse-top,
.icon-stack .icon-expand,
.icon-stack .icon-euro,
.icon-stack .icon-gbp,
.icon-stack .icon-dollar,
.icon-stack .icon-rupee,
.icon-stack .icon-yen,
.icon-stack .icon-renminbi,
.icon-stack .icon-won,
.icon-stack .icon-bitcoin,
.icon-stack .icon-file-2,
.icon-stack .icon-file-text,
.icon-stack .icon-sort-by-alphabet,
.icon-stack .icon-sort-by-alphabet-alt,
.icon-stack .icon-sort-by-attributes,
.icon-stack .icon-youtube-sign,
.icon-stack .icon-youtube,
.icon-stack .icon-xing,
.icon-stack .icon-xing-sign,
.icon-stack .icon-youtube-play,
.icon-stack .icon-dropbox,
.icon-stack .icon-stackexchange,
.icon-stack .icon-instagram,
.icon-stack .icon-flickr,
.icon-stack .icon-adn,
.icon-stack .icon-bitbucket,
.icon-stack .icon-bitbucket-sign,
.icon-stack .icon-tumblr,
.icon-stack .icon-tumblr-sign,
.icon-stack .icon-long-arrow-down,
.icon-stack .icon-long-arrow-up,
.icon-stack .icon-long-arrow-left,
.icon-stack .icon-long-arrow-right,
.icon-stack .icon-apple,
.icon-stack .icon-windows,
.icon-stack .icon-android,
.icon-stack .icon-linux,
.icon-stack .icon-male,
.icon-stack .icon-gittip,
.icon-stack .icon-sun,
.icon-stack .icon-moon,
.icon-stack .icon-archive,
.icon-stack .icon-bug,
.icon-stack .icon-vk,
.icon-stack .icon-weibo,
.icon-stack .icon-renren,
.icon-stack .icon-time,
.icon-stack .icon-road,
.icon-stack .icon-download-alt,
.icon-stack .icon-download,
.icon-stack .icon-upload,
.icon-stack .icon-db-joinxor,
.icon-stack .icon-db-state,
.icon-stack .icon-db-start,
.icon-stack .icon-db-end,
.icon-stack .icon-db-fork,
.icon-stack .icon-db-condition,
.icon-stack .icon-db-task,
.icon-stack .icon-db-join,
.icon-stack .icon-fb-button,
.icon-stack .icon-fb-fieldset,
.icon-stack .icon-fb-custom-field,
.icon-stack .icon-fb-separator,
.icon-stack .icon-fb-paragraph,
.icon-stack .icon-fb-file-upload,
.icon-stack .icon-fb-text,
.icon-stack .icon-fb-text-box,
.icon-stack .icon-fb-select,
.icon-stack .icon-fb-radio,
.icon-stack .icon-fb-number,
.icon-stack .icon-fb-integer,
.icon-stack .icon-fb-decimal {
    display: block;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: inherit
}

.icon-stack .icon-text {
    height: 100%;
    line-height: inherit;
    position: absolute;
    text-align: center;
    width: 100%
}

.icon-caret-bottom-right:before {
    content: "\e016"
}

.icon-glass:before {
    content: "\f000"
}

.icon-music:before {
    content: "\f001"
}

.icon-search:before {
    content: "\f002"
}

.icon-envelope:before {
    content: "\f003"
}

.icon-heart:before {
    content: "\f004"
}

.icon-star:before {
    content: "\f005"
}

.icon-star-empty:before {
    content: "\f006"
}

.icon-user:before {
    content: "\f007"
}

.icon-film:before {
    content: "\f008"
}

.icon-th-large:before {
    content: "\f009"
}

.icon-th:before {
    content: "\f00a"
}

.icon-th-list:before {
    content: "\f00b"
}

.icon-ok:before {
    content: "\f00c"
}

.icon-remove:before {
    content: "\f00d"
}

.icon-zoom-in:before {
    content: "\f00e"
}

.icon-zoom-out:before {
    content: "\f010"
}

.icon-off:before {
    content: "\f011"
}

.icon-signal:before {
    content: "\f012"
}

.icon-cog:before {
    content: "\f013"
}

.icon-trash:before {
    content: "\f014"
}

.icon-home:before {
    content: "\f015"
}

.icon-file:before {
    content: "\f016"
}

.icon-inbox:before {
    content: "\f01c"
}

.icon-play-circle:before {
    content: "\f01d"
}

.icon-repeat:before {
    content: "\f01e"
}

.icon-refresh:before {
    content: "\f021"
}

.icon-list-alt:before {
    content: "\f022"
}

.icon-lock:before {
    content: "\f023"
}

.icon-flag:before {
    content: "\f024"
}

.icon-headphones:before {
    content: "\f025"
}

.icon-volume-off:before {
    content: "\f026"
}

.icon-volume-down:before {
    content: "\f027"
}

.icon-volume-up:before {
    content: "\f028"
}

.icon-qrcode:before {
    content: "\f029"
}

.icon-barcode:before {
    content: "\f02a"
}

.icon-tag:before {
    content: "\f02b"
}

.icon-tags:before {
    content: "\f02c"
}

.icon-book:before {
    content: "\f02d"
}

.icon-bookmark:before {
    content: "\f02e"
}

.icon-print:before {
    content: "\f02f"
}

.icon-camera:before {
    content: "\f030"
}

.icon-font:before {
    content: "\f031"
}

.icon-bold:before {
    content: "\f032"
}

.icon-italic:before {
    content: "\f033"
}

.icon-align-justify:before {
    content: "\f039"
}

.icon-list:before {
    content: "\f03a"
}

.icon-indent-left:before {
    content: "\f03b"
}

.icon-indent-right:before {
    content: "\f03c"
}

.icon-facetime-video:before {
    content: "\f03d"
}

.icon-picture:before {
    content: "\f03e"
}

.icon-pencil:before {
    content: "\f040"
}

.icon-map-marker:before {
    content: "\f041"
}

.icon-adjust:before {
    content: "\f042"
}

.icon-tint:before {
    content: "\f043"
}

.icon-edit:before {
    content: "\f044"
}

.icon-share:before {
    content: "\f045"
}

.icon-check:before {
    content: "\f046"
}

.icon-move:before {
    content: "\f047"
}

.icon-step-backward:before {
    content: "\f048"
}

.icon-fast-backward:before {
    content: "\f049"
}

.icon-backward:before {
    content: "\f04a"
}

.icon-play:before {
    content: "\f04b"
}

.icon-pause:before {
    content: "\f04c"
}

.icon-stop:before {
    content: "\f04d"
}

.icon-forward:before {
    content: "\f04e"
}

.icon-fast-forward:before {
    content: "\f050"
}

.icon-minus-sign:before {
    content: "\f056"
}

.icon-remove-sign:before {
    content: "\f057"
}

.icon-ok-sign:before {
    content: "\f058"
}

.icon-question-sign:before {
    content: "\f059"
}

.icon-info-sign:before {
    content: "\f05a"
}

.icon-screenshot:before {
    content: "\f05b"
}

.icon-remove-circle:before {
    content: "\f05c"
}

.icon-ok-circle:before {
    content: "\f05d"
}

.icon-ban-circle:before {
    content: "\f05e"
}

.icon-arrow-left:before {
    content: "\f060"
}

.icon-arrow-right:before {
    content: "\f061"
}

.icon-arrow-up:before {
    content: "\f062"
}

.icon-arrow-down:before {
    content: "\f063"
}

.icon-share-alt:before {
    content: "\f064"
}

.icon-resize-full:before {
    content: "\f065"
}

.icon-resize-small:before {
    content: "\f066"
}

.icon-plus:before {
    content: "\f067"
}

.icon-minus:before {
    content: "\f068"
}

.icon-asterisk:before {
    content: "\f069"
}

.icon-exclamation-sign:before {
    content: "\f06a"
}

.icon-gift:before {
    content: "\f06b"
}

.icon-leaf:before {
    content: "\f06c"
}

.icon-calendar:before {
    content: "\f073"
}

.icon-random:before {
    content: "\f074"
}

.icon-comment:before {
    content: "\f075"
}

.icon-magnet:before {
    content: "\f076"
}

.icon-chevron-up:before {
    content: "\f077"
}

.icon-chevron-down:before {
    content: "\f078"
}

.icon-retweet:before {
    content: "\f079"
}

.icon-shopping-cart:before {
    content: "\f07a"
}

.icon-folder-close:before {
    content: "\f07b"
}

.icon-folder-open:before {
    content: "\f07c"
}

.icon-resize-vertical:before {
    content: "\f07d"
}

.icon-resize-horizontal:before {
    content: "\f07e"
}

.icon-bar-chart:before {
    content: "\f080"
}

.icon-twitter-sign:before {
    content: "\f081"
}

.icon-facebook-sign:before {
    content: "\f082"
}

.icon-camera-retro:before {
    content: "\f083"
}

.icon-key:before {
    content: "\f084"
}

.icon-cogs:before {
    content: "\f085"
}

.icon-comments:before {
    content: "\f086"
}

.icon-thumbs-up:before {
    content: "\f087"
}

.icon-thumbs-down:before {
    content: "\f088"
}

.icon-star-half:before {
    content: "\f089"
}

.icon-signin:before {
    content: "\f090"
}

.icon-trophy:before {
    content: "\f091"
}

.icon-github-sign:before {
    content: "\f092"
}

.icon-upload-alt:before {
    content: "\f093"
}

.icon-lemon:before {
    content: "\f094"
}

.icon-phone:before {
    content: "\f095"
}

.icon-check-empty:before {
    content: "\f096"
}

.icon-bookmark-empty:before {
    content: "\f097"
}

.icon-phone-sign:before {
    content: "\f098"
}

.icon-twitter:before {
    content: "\f099"
}

.icon-facebook:before {
    content: "\f09a"
}

.icon-github:before {
    content: "\f09b"
}

.icon-unlock:before {
    content: "\f09c"
}

.icon-credit:before {
    content: "\f09d"
}

.icon-rss:before {
    content: "\f09e"
}

.icon-hdd:before {
    content: "\f0a0"
}

.icon-bullhorn:before {
    content: "\f0a1"
}

.icon-bell:before {
    content: "\f0a2"
}

.icon-certificate:before {
    content: "\f0a3"
}

.icon-hand-right:before {
    content: "\f0a4"
}

.icon-hand-left:before {
    content: "\f0a5"
}

.icon-hand-up:before {
    content: "\f0a6"
}

.icon-globe:before {
    content: "\f0ac"
}

.icon-wrench:before {
    content: "\f0ad"
}

.icon-tasks:before {
    content: "\f0ae"
}

.icon-filter:before {
    content: "\f0b0"
}

.icon-briefcase:before {
    content: "\f0b1"
}

.icon-fullscreen:before {
    content: "\f0b2"
}

.icon-group:before {
    content: "\f0c0"
}

.icon-link:before {
    content: "\f0c1"
}

.icon-cloud:before {
    content: "\f0c2"
}

.icon-beaker:before {
    content: "\f0c3"
}

.icon-cut:before {
    content: "\f0c4"
}

.icon-copy:before {
    content: "\f0c5"
}

.icon-paper-clip:before {
    content: "\f0c6"
}

.icon-save:before {
    content: "\f0c7"
}

.icon-sign-blank:before {
    content: "\f0c8"
}

.icon-reorder:before {
    content: "\f0c9"
}

.icon-list-ul:before {
    content: "\f0ca"
}

.icon-list-ol:before {
    content: "\f0cb"
}

.icon-strikethrough:before {
    content: "\f0cc"
}

.icon-underline:before {
    content: "\f0cd"
}

.icon-table:before {
    content: "\f0ce"
}

.icon-magic:before {
    content: "\f0d0"
}

.icon-money:before {
    content: "\f0d6"
}

.icon-caret-down:before {
    content: "\f0d7"
}

.icon-caret-up:before {
    content: "\f0d8"
}

.icon-caret-left:before {
    content: "\f0d9"
}

.icon-caret-right:before {
    content: "\f0da"
}

.icon-columns:before {
    content: "\f0db"
}

.icon-sort:before {
    content: "\f0dc"
}

.icon-sort-down:before {
    content: "\f0dd"
}

.icon-sort-up:before {
    content: "\f0de"
}

.icon-envelope-alt:before {
    content: "\f0e0"
}

.icon-linkedin:before {
    content: "\f0e1"
}

.icon-undo:before {
    content: "\f0e2"
}

.icon-legal:before {
    content: "\f0e3"
}

.icon-dashboard:before {
    content: "\f0e4"
}

.icon-comment-alt:before {
    content: "\f0e5"
}

.icon-comments-alt:before {
    content: "\f0e6"
}

.icon-bolt:before {
    content: "\f0e7"
}

.icon-sitemap:before {
    content: "\f0e8"
}

.icon-umbrella:before {
    content: "\f0e9"
}

.icon-paste:before {
    content: "\f0ea"
}

.icon-lightbulb:before {
    content: "\f0eb"
}

.icon-exchange:before {
    content: "\f0ec"
}

.icon-bell-alt:before {
    content: "\f0f3"
}

.icon-coffee:before {
    content: "\f0f4"
}

.icon-food:before {
    content: "\f0f5"
}

.icon-file-alt:before {
    content: "\f0f6"
}

.icon-building:before {
    content: "\f0f7"
}

.icon-hospital:before {
    content: "\f0f8"
}

.icon-ambulance:before {
    content: "\f0f9"
}

.icon-medkit:before {
    content: "\f0fa"
}

.icon-fighter-jet:before {
    content: "\f0fb"
}

.icon-beer:before {
    content: "\f0fc"
}

.icon-h-sign:before {
    content: "\f0fd"
}

.icon-plus-sign:before {
    content: "\f0fe"
}

.icon-double-angle-left:before {
    content: "\f100"
}

.icon-double-angle-right:before {
    content: "\f101"
}

.icon-double-angle-up:before {
    content: "\f102"
}

.icon-double-angle-down:before {
    content: "\f103"
}

.icon-angle-left:before {
    content: "\f104"
}

.icon-angle-right:before {
    content: "\f105"
}

.icon-angle-up:before {
    content: "\f106"
}

.icon-angle-down:before {
    content: "\f107"
}

.icon-desktop:before {
    content: "\f108"
}

.icon-laptop:before {
    content: "\f109"
}

.icon-spinner:before {
    content: "\f110"
}

.icon-circle:before {
    content: "\f111"
}

.icon-reply:before {
    content: "\f112"
}

.icon-github-alt:before {
    content: "\f113"
}

.icon-folder-close-alt:before {
    content: "\f114"
}

.icon-folder-open-alt:before {
    content: "\f115"
}

.icon-expand-alt:before {
    content: "\f116"
}

.icon-collapse-alt:before {
    content: "\f117"
}

.icon-smile:before {
    content: "\f118"
}

.icon-frown:before {
    content: "\f119"
}

.icon-meh:before {
    content: "\f11a"
}

.icon-gamepad:before {
    content: "\f11b"
}

.icon-keyboard:before {
    content: "\f11c"
}

.icon-flag-alt:before {
    content: "\f11d"
}

.icon-flag-checkered:before {
    content: "\f11e"
}

.icon-terminal:before {
    content: "\f120"
}

.icon-code:before {
    content: "\f121"
}

.icon-reply-all:before {
    content: "\f122"
}

.icon-star-half-full:before {
    content: "\f123"
}

.icon-location-arrow:before {
    content: "\f124"
}

.icon-crop:before {
    content: "\f125"
}

.icon-code-fork:before {
    content: "\f126"
}

.icon-subscript:before {
    content: "\f12c"
}

.icon-eraser:before {
    content: "\f12d"
}

.icon-puzzle:before {
    content: "\f12e"
}

.icon-microphone:before {
    content: "\f130"
}

.icon-microphone-off:before {
    content: "\f131"
}

.icon-shield:before {
    content: "\f132"
}

.icon-calendar-empty:before {
    content: "\f133"
}

.icon-fire-extinguisher:before {
    content: "\f134"
}

.icon-rocket:before {
    content: "\f135"
}

.icon-maxcdn:before {
    content: "\f136"
}

.icon-chevron-sign-left:before {
    content: "\f137"
}

.icon-chevron-sign-right:before {
    content: "\f138"
}

.icon-chevron-sign-up:before {
    content: "\f139"
}

.icon-chevron-sign-down:before {
    content: "\f13a"
}

.icon-html5:before {
    content: "\f13b"
}

.icon-css3:before {
    content: "\f13c"
}

.icon-anchor:before {
    content: "\f13d"
}

.icon-unlock-alt:before {
    content: "\f13e"
}

.icon-bullseye:before {
    content: "\f140"
}

.icon-ellipsis-horizontal:before {
    content: "\f141"
}

.icon-ellipsis-vertical:before {
    content: "\f142"
}

.icon-rss-sign:before {
    content: "\f143"
}

.icon-fb-boolean:before {
    content: "\e008"
}

.icon-text-height:before {
    content: "\f034"
}

.icon-text-width:before {
    content: "\f035"
}

.icon-align-left:before {
    content: "\f036"
}

.icon-align-center:before {
    content: "\f037"
}

.icon-align-right:before {
    content: "\f038"
}

.icon-step-forward:before {
    content: "\f051"
}

.icon-eject:before {
    content: "\f052"
}

.icon-chevron-left:before {
    content: "\f053"
}

.icon-chevron-right:before {
    content: "\f054"
}

.icon-plus-sign-2:before {
    content: "\f055"
}

.icon-fire:before {
    content: "\f06d"
}

.icon-eye-open:before {
    content: "\f06e"
}

.icon-eye-close:before {
    content: "\f070"
}

.icon-warning-sign:before {
    content: "\f071"
}

.icon-plane:before {
    content: "\f072"
}

.icon-heart-empty:before {
    content: "\f08a"
}

.icon-signout:before {
    content: "\f08b"
}

.icon-linkedin-sign:before {
    content: "\f08c"
}

.icon-pushpin:before {
    content: "\f08d"
}

.icon-external-link:before {
    content: "\f08e"
}

.icon-hand-down:before {
    content: "\f0a7"
}

.icon-circle-arrow-left:before {
    content: "\f0a8"
}

.icon-circle-arrow-right:before {
    content: "\f0a9"
}

.icon-circle-arrow-up:before {
    content: "\f0aa"
}

.icon-circle-arrow-down:before {
    content: "\f0ab"
}

.icon-truck:before {
    content: "\f0d1"
}

.icon-pinterest:before {
    content: "\f0d2"
}

.icon-pinterest-sign:before {
    content: "\f0d3"
}

.icon-google-plus-sign:before {
    content: "\f0d4"
}

.icon-google-plus:before {
    content: "\f0d5"
}

.icon-cloud-download:before {
    content: "\f0ed"
}

.icon-cloud-upload:before {
    content: "\f0ee"
}

.icon-user-md:before {
    content: "\f0f0"
}

.icon-stethoscope:before {
    content: "\f0f1"
}

.icon-suitcase:before {
    content: "\f0f2"
}

.icon-tablet:before {
    content: "\f10a"
}

.icon-mobile:before {
    content: "\f10b"
}

.icon-circle-blank:before {
    content: "\f10c"
}

.icon-quote-left:before {
    content: "\f10d"
}

.icon-quote-right:before {
    content: "\f10e"
}

.icon-unlink:before {
    content: "\f127"
}

.icon-question:before {
    content: "\f128"
}

.icon-info:before {
    content: "\f129"
}

.icon-exclamation:before {
    content: "\f12a"
}

.icon-superscript:before {
    content: "\f12b"
}

.icon-play-sign:before {
    content: "\f144"
}

.icon-ticket:before {
    content: "\f145"
}

.icon-minus-sign-alt:before {
    content: "\f146"
}

.icon-check-minus:before {
    content: "\f147"
}

.icon-level-up:before {
    content: "\f148"
}

.icon-sort-by-attributes-alt:before {
    content: "\f161"
}

.icon-sort-by-order:before {
    content: "\f162"
}

.icon-sort-by-order-alt:before {
    content: "\f163"
}

.icon-thumbs-up-2:before {
    content: "\f164"
}

.icon-thumbs-down-2:before {
    content: "\f165"
}

.icon-dribbble:before {
    content: "\f17d"
}

.icon-skype:before {
    content: "\f17e"
}

.icon-foursquare:before {
    content: "\f180"
}

.icon-trello:before {
    content: "\f181"
}

.icon-female:before {
    content: "\f182"
}

.icon-level-down:before {
    content: "\f149"
}

.icon-check-sign:before {
    content: "\f14a"
}

.icon-edit-sign:before {
    content: "\f14b"
}

.icon-external-link-sign:before {
    content: "\f14c"
}

.icon-share-sign:before {
    content: "\f14d"
}

.icon-compass:before {
    content: "\f14e"
}

.icon-collapse:before {
    content: "\f150"
}

.icon-collapse-top:before {
    content: "\f151"
}

.icon-expand:before {
    content: "\f152"
}

.icon-euro:before {
    content: "\f153"
}

.icon-gbp:before {
    content: "\f154"
}

.icon-dollar:before {
    content: "\f155"
}

.icon-rupee:before {
    content: "\f156"
}

.icon-yen:before {
    content: "\f157"
}

.icon-renminbi:before {
    content: "\f158"
}

.icon-won:before {
    content: "\f159"
}

.icon-bitcoin:before {
    content: "\f15a"
}

.icon-file-2:before {
    content: "\f15b"
}

.icon-file-text:before {
    content: "\f15c"
}

.icon-sort-by-alphabet:before {
    content: "\f15d"
}

.icon-sort-by-alphabet-alt:before {
    content: "\f15e"
}

.icon-sort-by-attributes:before {
    content: "\f160"
}

.icon-youtube-sign:before {
    content: "\f166"
}

.icon-youtube:before {
    content: "\f167"
}

.icon-xing:before {
    content: "\f168"
}

.icon-xing-sign:before {
    content: "\f169"
}

.icon-youtube-play:before {
    content: "\f16a"
}

.icon-dropbox:before {
    content: "\f16b"
}

.icon-stackexchange:before {
    content: "\f16c"
}

.icon-instagram:before {
    content: "\f16d"
}

.icon-flickr:before {
    content: "\f16e"
}

.icon-adn:before {
    content: "\f170"
}

.icon-bitbucket:before {
    content: "\f171"
}

.icon-bitbucket-sign:before {
    content: "\f172"
}

.icon-tumblr:before {
    content: "\f173"
}

.icon-tumblr-sign:before {
    content: "\f174"
}

.icon-long-arrow-down:before {
    content: "\f175"
}

.icon-long-arrow-up:before {
    content: "\f176"
}

.icon-long-arrow-left:before {
    content: "\f177"
}

.icon-long-arrow-right:before {
    content: "\f178"
}

.icon-apple:before {
    content: "\f179"
}

.icon-windows:before {
    content: "\f17a"
}

.icon-android:before {
    content: "\f17b"
}

.icon-linux:before {
    content: "\f17c"
}

.icon-male:before {
    content: "\f183"
}

.icon-gittip:before {
    content: "\f184"
}

.icon-sun:before {
    content: "\f185"
}

.icon-moon:before {
    content: "\f186"
}

.icon-archive:before {
    content: "\f187"
}

.icon-bug:before {
    content: "\f188"
}

.icon-vk:before {
    content: "\f189"
}

.icon-weibo:before {
    content: "\f18a"
}

.icon-renren:before {
    content: "\f18b"
}

.icon-time:before {
    content: "\f017"
}

.icon-road:before {
    content: "\f018"
}

.icon-download-alt:before {
    content: "\f019"
}

.icon-download:before {
    content: "\f01a"
}

.icon-upload:before {
    content: "\f01b"
}

.icon-db-joinxor:before {
    content: "\e006"
}

.icon-db-state:before {
    content: "\e009"
}

.icon-db-start:before {
    content: "\e00b"
}

.icon-db-end:before {
    content: "\e00a"
}

.icon-db-fork:before {
    content: "\e00c"
}

.icon-db-condition:before {
    content: "\e00e"
}

.icon-db-task:before {
    content: "\e00d"
}

.icon-db-join:before {
    content: "\e00f"
}

.icon-fb-button:before {
    content: "\e010"
}

.icon-fb-fieldset:before {
    content: "\e011"
}

.icon-fb-custom-field:before {
    content: "\e012"
}

.icon-fb-separator:before {
    content: "\e013"
}

.icon-fb-paragraph:before {
    content: "\e014"
}

.icon-fb-file-upload:before {
    content: "\e015"
}

.icon-fb-text:before {
    content: "\e000"
}

.icon-fb-text-box:before {
    content: "\e001"
}

.icon-fb-select:before {
    content: "\e002"
}

.icon-fb-radio:before {
    content: "\e003"
}

.icon-fb-number:before {
    content: "\e004"
}

.icon-fb-integer:before {
    content: "\e005"
}

.icon-fb-decimal:before {
    content: "\e007"
}

.icon-btc:before {
    content: "\f15a"
}

.icon-cny:before {
    content: "\f158"
}

.icon-eur:before {
    content: "\f153"
}

.icon-gear:before {
    content: "\f013"
}

.icon-gears:before {
    content: "\f085"
}

.icon-inr:before {
    content: "\f156"
}

.icon-jpy:before {
    content: "\f157"
}

.icon-krw:before {
    content: "\f159"
}

.icon-mail-forward:before {
    content: "\f064"
}

.icon-mail-reply:before {
    content: "\f112"
}

.icon-paperclip:before {
    content: "\f0c6"
}

.icon-power-off:before {
    content: "\f011"
}

.icon-rotate-left:before {
    content: "\f0e2"
}

.icon-rotate-right:before {
    content: "\f01e"
}

.icon-star-half-empty:before {
    content: "\f123"
}

.icon-unchecked:before {
    content: "\f096"
}

.icon-usd:before {
    content: "\f155"
}

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
    display: block
}

audio,
canvas,
progress,
video {
    display: inline-block;
    vertical-align: baseline
}

audio:not([controls]) {
    display: none;
    height: 0
}

[hidden],
template {
    display: none
}

a {
    background-color: transparent
}

a:active,
a:hover {
    outline: 0
}

abbr[title] {
    border-bottom: 1px dotted
}

b,
strong {
    font-weight: bold
}

dfn {
    font-style: italic
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

mark {
    background: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sup {
    top: -0.5em
}

sub {
    bottom: -0.25em
}

img {
    border: 0
}

svg:not(:root) {
    overflow: hidden
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0
}

pre {
    overflow: auto
}

code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

button,
input,
optgroup,
select,
textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button {
    overflow: visible
}

button,
select {
    text-transform: none
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],
html input[disabled] {
    cursor: default
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0
}

input {
    line-height: normal
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    height: auto
}

input[type="search"] {
    -webkit-appearance: textfield;
    box-sizing: content-box
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font-weight: bold
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td,
th {
    padding: 0
}

/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
@media print {

    *,
    *:before,
    *:after {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important
    }

    a,
    a:visited {
        text-decoration: underline
    }

    a[href]:after {
        content: " ("attr(href) ")"
    }

    abbr[title]:after {
        content: " ("attr(title) ")"
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
        content: ""
    }

    pre,
    blockquote {
        border: 1px solid #999;
        page-break-inside: avoid
    }

    thead {
        display: table-header-group
    }

    tr,
    img {
        page-break-inside: avoid
    }

    img {
        max-width: 100% !important
    }

    p,
    h2,
    h3 {
        orphans: 3;
        widows: 3
    }

    h2,
    h3 {
        page-break-after: avoid
    }

    .navbar {
        display: none
    }

    .btn>.caret,
    .dropup>.btn>.caret {
        border-top-color: #000 !important
    }

    .label {
        border: 1px solid #000
    }

    .table {
        border-collapse: collapse !important
    }

    .table td,
    .table th {
        background-color: #fff !important
    }

    .table-bordered th,
    .table-bordered td {
        border: 1px solid #ddd !important
    }
}

@font-face {
    font-family: 'Glyphicons Halflings';
    src: url("~@/assets/fonts/glyphicons-halflings-regular.eot");
    src: url("~@/assets/fonts/glyphicons-halflings-regular.eot#iefix") format("embedded-opentype"), url("~@/assets/fonts/glyphicons-halflings-regular.woff2") format("woff2"), url("~@/assets/fonts/glyphicons-halflings-regular.woff") format("woff"), url("~@/assets/fonts/glyphicons-halflings-regular.ttf") format("truetype"), url("~@/assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular") format("svg")
}

.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.glyphicon-asterisk:before {
    content: "\2a"
}

.glyphicon-plus:before {
    content: "\2b"
}

.glyphicon-euro:before,
.glyphicon-eur:before {
    content: "\20ac"
}

.glyphicon-minus:before {
    content: "\2212"
}

.glyphicon-cloud:before {
    content: "\2601"
}

.glyphicon-envelope:before {
    content: "\2709"
}

.glyphicon-pencil:before {
    content: "\270f"
}

.glyphicon-glass:before {
    content: "\e001"
}

.glyphicon-music:before {
    content: "\e002"
}

.glyphicon-search:before {
    content: "\e003"
}

.glyphicon-heart:before {
    content: "\e005"
}

.glyphicon-star:before {
    content: "\e006"
}

.glyphicon-star-empty:before {
    content: "\e007"
}

.glyphicon-user:before {
    content: "\e008"
}

.glyphicon-film:before {
    content: "\e009"
}

.glyphicon-th-large:before {
    content: "\e010"
}

.glyphicon-th:before {
    content: "\e011"
}

.glyphicon-th-list:before {
    content: "\e012"
}

.glyphicon-ok:before {
    content: "\e013"
}

.glyphicon-remove:before {
    content: "\e014"
}

.glyphicon-zoom-in:before {
    content: "\e015"
}

.glyphicon-zoom-out:before {
    content: "\e016"
}

.glyphicon-off:before {
    content: "\e017"
}

.glyphicon-signal:before {
    content: "\e018"
}

.glyphicon-cog:before {
    content: "\e019"
}

.glyphicon-trash:before {
    content: "\e020"
}

.glyphicon-home:before {
    content: "\e021"
}

.glyphicon-file:before {
    content: "\e022"
}

.glyphicon-time:before {
    content: "\e023"
}

.glyphicon-road:before {
    content: "\e024"
}

.glyphicon-download-alt:before {
    content: "\e025"
}

.glyphicon-download:before {
    content: "\e026"
}

.glyphicon-upload:before {
    content: "\e027"
}

.glyphicon-inbox:before {
    content: "\e028"
}

.glyphicon-play-circle:before {
    content: "\e029"
}

.glyphicon-repeat:before {
    content: "\e030"
}

.glyphicon-refresh:before {
    content: "\e031"
}

.glyphicon-list-alt:before {
    content: "\e032"
}

.glyphicon-lock:before {
    content: "\e033"
}

.glyphicon-flag:before {
    content: "\e034"
}

.glyphicon-headphones:before {
    content: "\e035"
}

.glyphicon-volume-off:before {
    content: "\e036"
}

.glyphicon-volume-down:before {
    content: "\e037"
}

.glyphicon-volume-up:before {
    content: "\e038"
}

.glyphicon-qrcode:before {
    content: "\e039"
}

.glyphicon-barcode:before {
    content: "\e040"
}

.glyphicon-tag:before {
    content: "\e041"
}

.glyphicon-tags:before {
    content: "\e042"
}

.glyphicon-book:before {
    content: "\e043"
}

.glyphicon-bookmark:before {
    content: "\e044"
}

.glyphicon-print:before {
    content: "\e045"
}

.glyphicon-camera:before {
    content: "\e046"
}

.glyphicon-font:before {
    content: "\e047"
}

.glyphicon-bold:before {
    content: "\e048"
}

.glyphicon-italic:before {
    content: "\e049"
}

.glyphicon-text-height:before {
    content: "\e050"
}

.glyphicon-text-width:before {
    content: "\e051"
}

.glyphicon-align-left:before {
    content: "\e052"
}

.glyphicon-align-center:before {
    content: "\e053"
}

.glyphicon-align-right:before {
    content: "\e054"
}

.glyphicon-align-justify:before {
    content: "\e055"
}

.glyphicon-list:before {
    content: "\e056"
}

.glyphicon-indent-left:before {
    content: "\e057"
}

.glyphicon-indent-right:before {
    content: "\e058"
}

.glyphicon-facetime-video:before {
    content: "\e059"
}

.glyphicon-picture:before {
    content: "\e060"
}

.glyphicon-map-marker:before {
    content: "\e062"
}

.glyphicon-adjust:before {
    content: "\e063"
}

.glyphicon-tint:before {
    content: "\e064"
}

.glyphicon-edit:before {
    content: "\e065"
}

.glyphicon-share:before {
    content: "\e066"
}

.glyphicon-check:before {
    content: "\e067"
}

.glyphicon-move:before {
    content: "\e068"
}

.glyphicon-step-backward:before {
    content: "\e069"
}

.glyphicon-fast-backward:before {
    content: "\e070"
}

.glyphicon-backward:before {
    content: "\e071"
}

.glyphicon-play:before {
    content: "\e072"
}

.glyphicon-pause:before {
    content: "\e073"
}

.glyphicon-stop:before {
    content: "\e074"
}

.glyphicon-forward:before {
    content: "\e075"
}

.glyphicon-fast-forward:before {
    content: "\e076"
}

.glyphicon-step-forward:before {
    content: "\e077"
}

.glyphicon-eject:before {
    content: "\e078"
}

.glyphicon-chevron-left:before {
    content: "\e079"
}

.glyphicon-chevron-right:before {
    content: "\e080"
}

.glyphicon-plus-sign:before {
    content: "\e081"
}

.glyphicon-minus-sign:before {
    content: "\e082"
}

.glyphicon-remove-sign:before {
    content: "\e083"
}

.glyphicon-ok-sign:before {
    content: "\e084"
}

.glyphicon-question-sign:before {
    content: "\e085"
}

.glyphicon-info-sign:before {
    content: "\e086"
}

.glyphicon-screenshot:before {
    content: "\e087"
}

.glyphicon-remove-circle:before {
    content: "\e088"
}

.glyphicon-ok-circle:before {
    content: "\e089"
}

.glyphicon-ban-circle:before {
    content: "\e090"
}

.glyphicon-arrow-left:before {
    content: "\e091"
}

.glyphicon-arrow-right:before {
    content: "\e092"
}

.glyphicon-arrow-up:before {
    content: "\e093"
}

.glyphicon-arrow-down:before {
    content: "\e094"
}

.glyphicon-share-alt:before {
    content: "\e095"
}

.glyphicon-resize-full:before {
    content: "\e096"
}

.glyphicon-resize-small:before {
    content: "\e097"
}

.glyphicon-exclamation-sign:before {
    content: "\e101"
}

.glyphicon-gift:before {
    content: "\e102"
}

.glyphicon-leaf:before {
    content: "\e103"
}

.glyphicon-fire:before {
    content: "\e104"
}

.glyphicon-eye-open:before {
    content: "\e105"
}

.glyphicon-eye-close:before {
    content: "\e106"
}

.glyphicon-warning-sign:before {
    content: "\e107"
}

.glyphicon-plane:before {
    content: "\e108"
}

.glyphicon-calendar:before {
    content: "\e109"
}

.glyphicon-random:before {
    content: "\e110"
}

.glyphicon-comment:before {
    content: "\e111"
}

.glyphicon-magnet:before {
    content: "\e112"
}

.glyphicon-chevron-up:before {
    content: "\e113"
}

.glyphicon-chevron-down:before {
    content: "\e114"
}

.glyphicon-retweet:before {
    content: "\e115"
}

.glyphicon-shopping-cart:before {
    content: "\e116"
}

.glyphicon-folder-close:before {
    content: "\e117"
}

.glyphicon-folder-open:before {
    content: "\e118"
}

.glyphicon-resize-vertical:before {
    content: "\e119"
}

.glyphicon-resize-horizontal:before {
    content: "\e120"
}

.glyphicon-hdd:before {
    content: "\e121"
}

.glyphicon-bullhorn:before {
    content: "\e122"
}

.glyphicon-bell:before {
    content: "\e123"
}

.glyphicon-certificate:before {
    content: "\e124"
}

.glyphicon-thumbs-up:before {
    content: "\e125"
}

.glyphicon-thumbs-down:before {
    content: "\e126"
}

.glyphicon-hand-right:before {
    content: "\e127"
}

.glyphicon-hand-left:before {
    content: "\e128"
}

.glyphicon-hand-up:before {
    content: "\e129"
}

.glyphicon-hand-down:before {
    content: "\e130"
}

.glyphicon-circle-arrow-right:before {
    content: "\e131"
}

.glyphicon-circle-arrow-left:before {
    content: "\e132"
}

.glyphicon-circle-arrow-up:before {
    content: "\e133"
}

.glyphicon-circle-arrow-down:before {
    content: "\e134"
}

.glyphicon-globe:before {
    content: "\e135"
}

.glyphicon-wrench:before {
    content: "\e136"
}

.glyphicon-tasks:before {
    content: "\e137"
}

.glyphicon-filter:before {
    content: "\e138"
}

.glyphicon-briefcase:before {
    content: "\e139"
}

.glyphicon-fullscreen:before {
    content: "\e140"
}

.glyphicon-dashboard:before {
    content: "\e141"
}

.glyphicon-paperclip:before {
    content: "\e142"
}

.glyphicon-heart-empty:before {
    content: "\e143"
}

.glyphicon-link:before {
    content: "\e144"
}

.glyphicon-phone:before {
    content: "\e145"
}

.glyphicon-pushpin:before {
    content: "\e146"
}

.glyphicon-usd:before {
    content: "\e148"
}

.glyphicon-gbp:before {
    content: "\e149"
}

.glyphicon-sort:before {
    content: "\e150"
}

.glyphicon-sort-by-alphabet:before {
    content: "\e151"
}

.glyphicon-sort-by-alphabet-alt:before {
    content: "\e152"
}

.glyphicon-sort-by-order:before {
    content: "\e153"
}

.glyphicon-sort-by-order-alt:before {
    content: "\e154"
}

.glyphicon-sort-by-attributes:before {
    content: "\e155"
}

.glyphicon-sort-by-attributes-alt:before {
    content: "\e156"
}

.glyphicon-unchecked:before {
    content: "\e157"
}

.glyphicon-expand:before {
    content: "\e158"
}

.glyphicon-collapse-down:before {
    content: "\e159"
}

.glyphicon-collapse-up:before {
    content: "\e160"
}

.glyphicon-log-in:before {
    content: "\e161"
}

.glyphicon-flash:before {
    content: "\e162"
}

.glyphicon-log-out:before {
    content: "\e163"
}

.glyphicon-new-window:before {
    content: "\e164"
}

.glyphicon-record:before {
    content: "\e165"
}

.glyphicon-save:before {
    content: "\e166"
}

.glyphicon-open:before {
    content: "\e167"
}

.glyphicon-saved:before {
    content: "\e168"
}

.glyphicon-import:before {
    content: "\e169"
}

.glyphicon-export:before {
    content: "\e170"
}

.glyphicon-send:before {
    content: "\e171"
}

.glyphicon-floppy-disk:before {
    content: "\e172"
}

.glyphicon-floppy-saved:before {
    content: "\e173"
}

.glyphicon-floppy-remove:before {
    content: "\e174"
}

.glyphicon-floppy-save:before {
    content: "\e175"
}

.glyphicon-floppy-open:before {
    content: "\e176"
}

.glyphicon-credit-card:before {
    content: "\e177"
}

.glyphicon-transfer:before {
    content: "\e178"
}

.glyphicon-cutlery:before {
    content: "\e179"
}

.glyphicon-header:before {
    content: "\e180"
}

.glyphicon-compressed:before {
    content: "\e181"
}

.glyphicon-earphone:before {
    content: "\e182"
}

.glyphicon-phone-alt:before {
    content: "\e183"
}

.glyphicon-tower:before {
    content: "\e184"
}

.glyphicon-stats:before {
    content: "\e185"
}

.glyphicon-sd-video:before {
    content: "\e186"
}

.glyphicon-hd-video:before {
    content: "\e187"
}

.glyphicon-subtitles:before {
    content: "\e188"
}

.glyphicon-sound-stereo:before {
    content: "\e189"
}

.glyphicon-sound-dolby:before {
    content: "\e190"
}

.glyphicon-sound-5-1:before {
    content: "\e191"
}

.glyphicon-sound-6-1:before {
    content: "\e192"
}

.glyphicon-sound-7-1:before {
    content: "\e193"
}

.glyphicon-copyright-mark:before {
    content: "\e194"
}

.glyphicon-registration-mark:before {
    content: "\e195"
}

.glyphicon-cloud-download:before {
    content: "\e197"
}

.glyphicon-cloud-upload:before {
    content: "\e198"
}

.glyphicon-tree-conifer:before {
    content: "\e199"
}

.glyphicon-tree-deciduous:before {
    content: "\e200"
}

.glyphicon-cd:before {
    content: "\e201"
}

.glyphicon-save-file:before {
    content: "\e202"
}

.glyphicon-open-file:before {
    content: "\e203"
}

.glyphicon-level-up:before {
    content: "\e204"
}

.glyphicon-copy:before {
    content: "\e205"
}

.glyphicon-paste:before {
    content: "\e206"
}

.glyphicon-alert:before {
    content: "\e209"
}

.glyphicon-equalizer:before {
    content: "\e210"
}

.glyphicon-king:before {
    content: "\e211"
}

.glyphicon-queen:before {
    content: "\e212"
}

.glyphicon-pawn:before {
    content: "\e213"
}

.glyphicon-bishop:before {
    content: "\e214"
}

.glyphicon-knight:before {
    content: "\e215"
}

.glyphicon-baby-formula:before {
    content: "\e216"
}

.glyphicon-tent:before {
    content: "\26fa"
}

.glyphicon-blackboard:before {
    content: "\e218"
}

.glyphicon-bed:before {
    content: "\e219"
}

.glyphicon-apple:before {
    content: "\f8ff"
}

.glyphicon-erase:before {
    content: "\e221"
}

.glyphicon-hourglass:before {
    content: "\231b"
}

.glyphicon-lamp:before {
    content: "\e223"
}

.glyphicon-duplicate:before {
    content: "\e224"
}

.glyphicon-piggy-bank:before {
    content: "\e225"
}

.glyphicon-scissors:before {
    content: "\e226"
}

.glyphicon-bitcoin:before {
    content: "\e227"
}

.glyphicon-btc:before {
    content: "\e227"
}

.glyphicon-xbt:before {
    content: "\e227"
}

.glyphicon-yen:before {
    content: "\00a5"
}

.glyphicon-jpy:before {
    content: "\00a5"
}

.glyphicon-ruble:before {
    content: "\20bd"
}

.glyphicon-rub:before {
    content: "\20bd"
}

.glyphicon-scale:before {
    content: "\e230"
}

.glyphicon-ice-lolly:before {
    content: "\e231"
}

.glyphicon-ice-lolly-tasted:before {
    content: "\e232"
}

.glyphicon-education:before {
    content: "\e233"
}

.glyphicon-option-horizontal:before {
    content: "\e234"
}

.glyphicon-option-vertical:before {
    content: "\e235"
}

.glyphicon-menu-hamburger:before {
    content: "\e236"
}

.glyphicon-modal-window:before {
    content: "\e237"
}

.glyphicon-oil:before {
    content: "\e238"
}

.glyphicon-grain:before {
    content: "\e239"
}

.glyphicon-sunglasses:before {
    content: "\e240"
}

.glyphicon-text-size:before {
    content: "\e241"
}

.glyphicon-text-color:before {
    content: "\e242"
}

.glyphicon-text-background:before {
    content: "\e243"
}

.glyphicon-object-align-top:before {
    content: "\e244"
}

.glyphicon-object-align-bottom:before {
    content: "\e245"
}

.glyphicon-object-align-horizontal:before {
    content: "\e246"
}

.glyphicon-object-align-left:before {
    content: "\e247"
}

.glyphicon-object-align-vertical:before {
    content: "\e248"
}

.glyphicon-object-align-right:before {
    content: "\e249"
}

.glyphicon-triangle-right:before {
    content: "\e250"
}

.glyphicon-triangle-left:before {
    content: "\e251"
}

.glyphicon-triangle-bottom:before {
    content: "\e252"
}

.glyphicon-triangle-top:before {
    content: "\e253"
}

.glyphicon-console:before {
    content: "\e254"
}

.glyphicon-superscript:before {
    content: "\e255"
}

.glyphicon-subscript:before {
    content: "\e256"
}

.glyphicon-menu-left:before {
    content: "\e257"
}

.glyphicon-menu-right:before {
    content: "\e258"
}

.glyphicon-menu-down:before {
    content: "\e259"
}

.glyphicon-menu-up:before {
    content: "\e260"
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

*:before,
*:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

html {
    font-size: 10px;
    -webkit-tap-highlight-color: transparent
}

body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857;
    color: #333;
    background-color: #fff
}

input,
button,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

a {
    color: #337ab7;
    text-decoration: none
}

a:hover,
a:focus {
    color: #23527c;
    text-decoration: underline
}

a:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

figure {
    margin: 0
}

img {
    vertical-align: middle
}

.img-responsive {
    display: block;
    max-width: 100%;
    height: auto
}

.img-rounded {
    border-radius: 6px
}

.img-thumbnail {
    padding: 4px;
    line-height: 1.42857;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    display: inline-block;
    max-width: 100%;
    height: auto
}

.img-circle {
    border-radius: 50%
}

hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto
}

[role="button"] {
    cursor: pointer
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit
}

h1 small,
h1 .small,
h2 small,
h2 .small,
h3 small,
h3 .small,
h4 small,
h4 .small,
h5 small,
h5 .small,
h6 small,
h6 .small,
.h1 small,
.h1 .small,
.h2 small,
.h2 .small,
.h3 small,
.h3 .small,
.h4 small,
.h4 .small,
.h5 small,
.h5 .small,
.h6 small,
.h6 .small {
    font-weight: normal;
    line-height: 1;
    color: #777
}

h1,
.h1,
h2,
.h2,
h3,
.h3 {
    margin-top: 20px;
    margin-bottom: 10px
}

h1 small,
h1 .small,
.h1 small,
.h1 .small,
h2 small,
h2 .small,
.h2 small,
.h2 .small,
h3 small,
h3 .small,
.h3 small,
.h3 .small {
    font-size: 65%
}

h4,
.h4,
h5,
.h5,
h6,
.h6 {
    margin-top: 10px;
    margin-bottom: 10px
}

h4 small,
h4 .small,
.h4 small,
.h4 .small,
h5 small,
h5 .small,
.h5 small,
.h5 .small,
h6 small,
h6 .small,
.h6 small,
.h6 .small {
    font-size: 75%
}

h1,
.h1 {
    font-size: 36px
}

h2,
.h2 {
    font-size: 30px
}

h3,
.h3 {
    font-size: 24px
}

h4,
.h4 {
    font-size: 18px
}

h5,
.h5 {
    font-size: 14px
}

h6,
.h6 {
    font-size: 12px
}

p {
    margin: 0 0 10px
}

.lead {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4
}

@media(min-width:768px) {
    .lead {
        font-size: 21px
    }
}

small,
.small {
    font-size: 85%
}

mark,
.mark {
    background-color: #fcf8e3;
    padding: .2em
}

.text-left {
    text-align: left
}

.text-right {
    text-align: right
}

.text-center {
    text-align: center
}

.text-justify {
    text-align: justify
}

.text-nowrap {
    white-space: nowrap
}

.text-lowercase {
    text-transform: lowercase
}

.text-uppercase,
.initialism {
    text-transform: uppercase
}

.text-capitalize {
    text-transform: capitalize
}

.text-muted {
    color: #777
}

.text-primary {
    color: #337ab7
}

a.text-primary:hover,
a.text-primary:focus {
    color: #286090
}

.text-success {
    color: #3c763d
}

a.text-success:hover,
a.text-success:focus {
    color: #2b542c
}

.text-info {
    color: #31708f
}

a.text-info:hover,
a.text-info:focus {
    color: #245269
}

.text-warning {
    color: #8a6d3b
}

a.text-warning:hover,
a.text-warning:focus {
    color: #66512c
}

.text-danger {
    color: #a94442
}

a.text-danger:hover,
a.text-danger:focus {
    color: #843534
}

.bg-primary {
    color: #fff
}

.bg-primary {
    background-color: #337ab7
}

a.bg-primary:hover,
a.bg-primary:focus {
    background-color: #286090
}

.bg-success {
    background-color: #dff0d8
}

a.bg-success:hover,
a.bg-success:focus {
    background-color: #c1e2b3
}

.bg-info {
    background-color: #d9edf7
}

a.bg-info:hover,
a.bg-info:focus {
    background-color: #afd9ee
}

.bg-warning {
    background-color: #fcf8e3
}

a.bg-warning:hover,
a.bg-warning:focus {
    background-color: #f7ecb5
}

.bg-danger {
    background-color: #f2dede
}

a.bg-danger:hover,
a.bg-danger:focus {
    background-color: #e4b9b9
}

.page-header {
    padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 1px solid #eee
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 10px
}

ul ul,
ul ol,
ol ul,
ol ol {
    margin-bottom: 0
}

.list-unstyled,
.timeline {
    padding-left: 0;
    list-style: none
}

.list-inline {
    padding-left: 0;
    list-style: none;
    margin-left: -5px
}

.list-inline>li {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px
}

dl {
    margin-top: 0;
    margin-bottom: 20px
}

dt,
dd {
    line-height: 1.42857
}

dt {
    font-weight: bold
}

dd {
    margin-left: 0
}

.dl-horizontal dd:before,
.dl-horizontal dd:after {
    content: " ";
    display: table
}

.dl-horizontal dd:after {
    clear: both
}

@media(min-width:768px) {
    .dl-horizontal dt {
        float: left;
        width: 160px;
        clear: left;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .dl-horizontal dd {
        margin-left: 180px
    }
}

abbr[title],
abbr[data-original-title] {
    cursor: help;
    border-bottom: 1px dotted #777
}

.initialism {
    font-size: 90%
}

blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee
}

blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
    margin-bottom: 0
}

blockquote footer,
blockquote small,
blockquote .small {
    display: block;
    font-size: 80%;
    line-height: 1.42857;
    color: #777
}

blockquote footer:before,
blockquote small:before,
blockquote .small:before {
    content: '\2014 \00A0'
}

.blockquote-reverse,
blockquote.pull-right {
    padding-right: 15px;
    padding-left: 0;
    border-right: 5px solid #eee;
    border-left: 0;
    text-align: right
}

.blockquote-reverse footer:before,
.blockquote-reverse small:before,
.blockquote-reverse .small:before,
blockquote.pull-right footer:before,
blockquote.pull-right small:before,
blockquote.pull-right .small:before {
    content: ''
}

.blockquote-reverse footer:after,
.blockquote-reverse small:after,
.blockquote-reverse .small:after,
blockquote.pull-right footer:after,
blockquote.pull-right small:after,
blockquote.pull-right .small:after {
    content: '\00A0 \2014'
}

address {
    margin-bottom: 20px;
    font-style: normal;
    line-height: 1.42857
}

code,
kbd,
pre,
samp {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace
}

code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px
}

kbd {
    padding: 2px 4px;
    font-size: 90%;
    color: #fff;
    background-color: #333;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25)
}

kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: bold;
    box-shadow: none
}

pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px
}

pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0
}

.pre-scrollable {
    max-height: 340px;
    overflow-y: scroll
}

.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px
}

.container:before,
.container:after {
    content: " ";
    display: table
}

.container:after {
    clear: both
}

@media(min-width:768px) {
    .container {
        width: 750px
    }
}

@media(min-width:992px) {
    .container {
        width: 970px
    }
}

@media(min-width:1200px) {
    .container {
        width: 1170px
    }
}

.container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px
}

.container-fluid:before,
.container-fluid:after {
    content: " ";
    display: table
}

.container-fluid:after {
    clear: both
}

.row {
    margin-left: -15px;
    margin-right: -15px
}

.row:before,
.row:after {
    content: " ";
    display: table
}

.row:after {
    clear: both
}

.col-xs-1,
.col-sm-1,
.col-md-1,
.col-lg-1,
.col-xs-2,
.col-sm-2,
.col-md-2,
.col-lg-2,
.col-xs-3,
.col-sm-3,
.col-md-3,
.col-lg-3,
.col-xs-4,
.col-sm-4,
.col-md-4,
.col-lg-4,
.col-xs-5,
.col-sm-5,
.col-md-5,
.col-lg-5,
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6,
.col-xs-7,
.col-sm-7,
.col-md-7,
.col-lg-7,
.col-xs-8,
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xs-9,
.col-sm-9,
.col-md-9,
.col-lg-9,
.col-xs-10,
.col-sm-10,
.col-md-10,
.col-lg-10,
.col-xs-11,
.col-sm-11,
.col-md-11,
.col-lg-11,
.col-xs-12,
.col-sm-12,
.col-md-12,
.col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px
}

.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12 {
    float: left
}

.col-xs-1 {
    width: 8.33333%
}

.col-xs-2 {
    width: 16.66667%
}

.col-xs-3 {
    width: 25%
}

.col-xs-4 {
    width: 33.33333%
}

.col-xs-5 {
    width: 41.66667%
}

.col-xs-6 {
    width: 50%
}

.col-xs-7 {
    width: 58.33333%
}

.col-xs-8 {
    width: 66.66667%
}

.col-xs-9 {
    width: 75%
}

.col-xs-10 {
    width: 83.33333%
}

.col-xs-11 {
    width: 91.66667%
}

.col-xs-12 {
    width: 100%
}

.col-xs-pull-0 {
    right: auto
}

.col-xs-pull-1 {
    right: 8.33333%
}

.col-xs-pull-2 {
    right: 16.66667%
}

.col-xs-pull-3 {
    right: 25%
}

.col-xs-pull-4 {
    right: 33.33333%
}

.col-xs-pull-5 {
    right: 41.66667%
}

.col-xs-pull-6 {
    right: 50%
}

.col-xs-pull-7 {
    right: 58.33333%
}

.col-xs-pull-8 {
    right: 66.66667%
}

.col-xs-pull-9 {
    right: 75%
}

.col-xs-pull-10 {
    right: 83.33333%
}

.col-xs-pull-11 {
    right: 91.66667%
}

.col-xs-pull-12 {
    right: 100%
}

.col-xs-push-0 {
    left: auto
}

.col-xs-push-1 {
    left: 8.33333%
}

.col-xs-push-2 {
    left: 16.66667%
}

.col-xs-push-3 {
    left: 25%
}

.col-xs-push-4 {
    left: 33.33333%
}

.col-xs-push-5 {
    left: 41.66667%
}

.col-xs-push-6 {
    left: 50%
}

.col-xs-push-7 {
    left: 58.33333%
}

.col-xs-push-8 {
    left: 66.66667%
}

.col-xs-push-9 {
    left: 75%
}

.col-xs-push-10 {
    left: 83.33333%
}

.col-xs-push-11 {
    left: 91.66667%
}

.col-xs-push-12 {
    left: 100%
}

.col-xs-offset-0 {
    margin-left: 0
}

.col-xs-offset-1 {
    margin-left: 8.33333%
}

.col-xs-offset-2 {
    margin-left: 16.66667%
}

.col-xs-offset-3 {
    margin-left: 25%
}

.col-xs-offset-4 {
    margin-left: 33.33333%
}

.col-xs-offset-5 {
    margin-left: 41.66667%
}

.col-xs-offset-6 {
    margin-left: 50%
}

.col-xs-offset-7 {
    margin-left: 58.33333%
}

.col-xs-offset-8 {
    margin-left: 66.66667%
}

.col-xs-offset-9 {
    margin-left: 75%
}

.col-xs-offset-10 {
    margin-left: 83.33333%
}

.col-xs-offset-11 {
    margin-left: 91.66667%
}

.col-xs-offset-12 {
    margin-left: 100%
}

@media(min-width:768px) {

    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12 {
        float: left
    }

    .col-sm-1 {
        width: 8.33333%
    }

    .col-sm-2 {
        width: 16.66667%
    }

    .col-sm-3 {
        width: 25%
    }

    .col-sm-4 {
        width: 33.33333%
    }

    .col-sm-5 {
        width: 41.66667%
    }

    .col-sm-6 {
        width: 50%
    }

    .col-sm-7 {
        width: 58.33333%
    }

    .col-sm-8 {
        width: 66.66667%
    }

    .col-sm-9 {
        width: 75%
    }

    .col-sm-10 {
        width: 83.33333%
    }

    .col-sm-11 {
        width: 91.66667%
    }

    .col-sm-12 {
        width: 100%
    }

    .col-sm-pull-0 {
        right: auto
    }

    .col-sm-pull-1 {
        right: 8.33333%
    }

    .col-sm-pull-2 {
        right: 16.66667%
    }

    .col-sm-pull-3 {
        right: 25%
    }

    .col-sm-pull-4 {
        right: 33.33333%
    }

    .col-sm-pull-5 {
        right: 41.66667%
    }

    .col-sm-pull-6 {
        right: 50%
    }

    .col-sm-pull-7 {
        right: 58.33333%
    }

    .col-sm-pull-8 {
        right: 66.66667%
    }

    .col-sm-pull-9 {
        right: 75%
    }

    .col-sm-pull-10 {
        right: 83.33333%
    }

    .col-sm-pull-11 {
        right: 91.66667%
    }

    .col-sm-pull-12 {
        right: 100%
    }

    .col-sm-push-0 {
        left: auto
    }

    .col-sm-push-1 {
        left: 8.33333%
    }

    .col-sm-push-2 {
        left: 16.66667%
    }

    .col-sm-push-3 {
        left: 25%
    }

    .col-sm-push-4 {
        left: 33.33333%
    }

    .col-sm-push-5 {
        left: 41.66667%
    }

    .col-sm-push-6 {
        left: 50%
    }

    .col-sm-push-7 {
        left: 58.33333%
    }

    .col-sm-push-8 {
        left: 66.66667%
    }

    .col-sm-push-9 {
        left: 75%
    }

    .col-sm-push-10 {
        left: 83.33333%
    }

    .col-sm-push-11 {
        left: 91.66667%
    }

    .col-sm-push-12 {
        left: 100%
    }

    .col-sm-offset-0 {
        margin-left: 0
    }

    .col-sm-offset-1 {
        margin-left: 8.33333%
    }

    .col-sm-offset-2 {
        margin-left: 16.66667%
    }

    .col-sm-offset-3 {
        margin-left: 25%
    }

    .col-sm-offset-4 {
        margin-left: 33.33333%
    }

    .col-sm-offset-5 {
        margin-left: 41.66667%
    }

    .col-sm-offset-6 {
        margin-left: 50%
    }

    .col-sm-offset-7 {
        margin-left: 58.33333%
    }

    .col-sm-offset-8 {
        margin-left: 66.66667%
    }

    .col-sm-offset-9 {
        margin-left: 75%
    }

    .col-sm-offset-10 {
        margin-left: 83.33333%
    }

    .col-sm-offset-11 {
        margin-left: 91.66667%
    }

    .col-sm-offset-12 {
        margin-left: 100%
    }
}

@media(min-width:992px) {

    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12 {
        float: left
    }

    .col-md-1 {
        width: 8.33333%
    }

    .col-md-2 {
        width: 16.66667%
    }

    .col-md-3 {
        width: 25%
    }

    .col-md-4 {
        width: 33.33333%
    }

    .col-md-5 {
        width: 41.66667%
    }

    .col-md-6 {
        width: 50%
    }

    .col-md-7 {
        width: 58.33333%
    }

    .col-md-8 {
        width: 66.66667%
    }

    .col-md-9 {
        width: 75%
    }

    .col-md-10 {
        width: 83.33333%
    }

    .col-md-11 {
        width: 91.66667%
    }

    .col-md-12 {
        width: 100%
    }

    .col-md-pull-0 {
        right: auto
    }

    .col-md-pull-1 {
        right: 8.33333%
    }

    .col-md-pull-2 {
        right: 16.66667%
    }

    .col-md-pull-3 {
        right: 25%
    }

    .col-md-pull-4 {
        right: 33.33333%
    }

    .col-md-pull-5 {
        right: 41.66667%
    }

    .col-md-pull-6 {
        right: 50%
    }

    .col-md-pull-7 {
        right: 58.33333%
    }

    .col-md-pull-8 {
        right: 66.66667%
    }

    .col-md-pull-9 {
        right: 75%
    }

    .col-md-pull-10 {
        right: 83.33333%
    }

    .col-md-pull-11 {
        right: 91.66667%
    }

    .col-md-pull-12 {
        right: 100%
    }

    .col-md-push-0 {
        left: auto
    }

    .col-md-push-1 {
        left: 8.33333%
    }

    .col-md-push-2 {
        left: 16.66667%
    }

    .col-md-push-3 {
        left: 25%
    }

    .col-md-push-4 {
        left: 33.33333%
    }

    .col-md-push-5 {
        left: 41.66667%
    }

    .col-md-push-6 {
        left: 50%
    }

    .col-md-push-7 {
        left: 58.33333%
    }

    .col-md-push-8 {
        left: 66.66667%
    }

    .col-md-push-9 {
        left: 75%
    }

    .col-md-push-10 {
        left: 83.33333%
    }

    .col-md-push-11 {
        left: 91.66667%
    }

    .col-md-push-12 {
        left: 100%
    }

    .col-md-offset-0 {
        margin-left: 0
    }

    .col-md-offset-1 {
        margin-left: 8.33333%
    }

    .col-md-offset-2 {
        margin-left: 16.66667%
    }

    .col-md-offset-3 {
        margin-left: 25%
    }

    .col-md-offset-4 {
        margin-left: 33.33333%
    }

    .col-md-offset-5 {
        margin-left: 41.66667%
    }

    .col-md-offset-6 {
        margin-left: 50%
    }

    .col-md-offset-7 {
        margin-left: 58.33333%
    }

    .col-md-offset-8 {
        margin-left: 66.66667%
    }

    .col-md-offset-9 {
        margin-left: 75%
    }

    .col-md-offset-10 {
        margin-left: 83.33333%
    }

    .col-md-offset-11 {
        margin-left: 91.66667%
    }

    .col-md-offset-12 {
        margin-left: 100%
    }
}

@media(min-width:1200px) {

    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12 {
        float: left
    }

    .col-lg-1 {
        width: 8.33333%
    }

    .col-lg-2 {
        width: 16.66667%
    }

    .col-lg-3 {
        width: 25%
    }

    .col-lg-4 {
        width: 33.33333%
    }

    .col-lg-5 {
        width: 41.66667%
    }

    .col-lg-6 {
        width: 50%
    }

    .col-lg-7 {
        width: 58.33333%
    }

    .col-lg-8 {
        width: 66.66667%
    }

    .col-lg-9 {
        width: 75%
    }

    .col-lg-10 {
        width: 83.33333%
    }

    .col-lg-11 {
        width: 91.66667%
    }

    .col-lg-12 {
        width: 100%
    }

    .col-lg-pull-0 {
        right: auto
    }

    .col-lg-pull-1 {
        right: 8.33333%
    }

    .col-lg-pull-2 {
        right: 16.66667%
    }

    .col-lg-pull-3 {
        right: 25%
    }

    .col-lg-pull-4 {
        right: 33.33333%
    }

    .col-lg-pull-5 {
        right: 41.66667%
    }

    .col-lg-pull-6 {
        right: 50%
    }

    .col-lg-pull-7 {
        right: 58.33333%
    }

    .col-lg-pull-8 {
        right: 66.66667%
    }

    .col-lg-pull-9 {
        right: 75%
    }

    .col-lg-pull-10 {
        right: 83.33333%
    }

    .col-lg-pull-11 {
        right: 91.66667%
    }

    .col-lg-pull-12 {
        right: 100%
    }

    .col-lg-push-0 {
        left: auto
    }

    .col-lg-push-1 {
        left: 8.33333%
    }

    .col-lg-push-2 {
        left: 16.66667%
    }

    .col-lg-push-3 {
        left: 25%
    }

    .col-lg-push-4 {
        left: 33.33333%
    }

    .col-lg-push-5 {
        left: 41.66667%
    }

    .col-lg-push-6 {
        left: 50%
    }

    .col-lg-push-7 {
        left: 58.33333%
    }

    .col-lg-push-8 {
        left: 66.66667%
    }

    .col-lg-push-9 {
        left: 75%
    }

    .col-lg-push-10 {
        left: 83.33333%
    }

    .col-lg-push-11 {
        left: 91.66667%
    }

    .col-lg-push-12 {
        left: 100%
    }

    .col-lg-offset-0 {
        margin-left: 0
    }

    .col-lg-offset-1 {
        margin-left: 8.33333%
    }

    .col-lg-offset-2 {
        margin-left: 16.66667%
    }

    .col-lg-offset-3 {
        margin-left: 25%
    }

    .col-lg-offset-4 {
        margin-left: 33.33333%
    }

    .col-lg-offset-5 {
        margin-left: 41.66667%
    }

    .col-lg-offset-6 {
        margin-left: 50%
    }

    .col-lg-offset-7 {
        margin-left: 58.33333%
    }

    .col-lg-offset-8 {
        margin-left: 66.66667%
    }

    .col-lg-offset-9 {
        margin-left: 75%
    }

    .col-lg-offset-10 {
        margin-left: 83.33333%
    }

    .col-lg-offset-11 {
        margin-left: 91.66667%
    }

    .col-lg-offset-12 {
        margin-left: 100%
    }
}

table {
    background-color: transparent
}

caption {
    padding-top: 8px;
    padding-bottom: 8px;
    color: #777;
    text-align: left
}

th {
    text-align: left
}

.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px
}

.table>thead>tr>th,
.table>thead>tr>td,
.table>tbody>tr>th,
.table>tbody>tr>td,
.table>tfoot>tr>th,
.table>tfoot>tr>td {
    padding: 8px;
    line-height: 1.42857;
    vertical-align: top;
    border-top: 1px solid #ddd
}

.table>thead>tr>th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd
}

.table>caption+thead>tr:first-child>th,
.table>caption+thead>tr:first-child>td,
.table>colgroup+thead>tr:first-child>th,
.table>colgroup+thead>tr:first-child>td,
.table>thead:first-child>tr:first-child>th,
.table>thead:first-child>tr:first-child>td {
    border-top: 0
}

.table>tbody+tbody {
    border-top: 2px solid #ddd
}

.table .table {
    background-color: #fff
}

.table-condensed>thead>tr>th,
.table-condensed>thead>tr>td,
.table-condensed>tbody>tr>th,
.table-condensed>tbody>tr>td,
.table-condensed>tfoot>tr>th,
.table-condensed>tfoot>tr>td {
    padding: 5px
}

.table-bordered {
    border: 1px solid #ddd
}

.table-bordered>thead>tr>th,
.table-bordered>thead>tr>td,
.table-bordered>tbody>tr>th,
.table-bordered>tbody>tr>td,
.table-bordered>tfoot>tr>th,
.table-bordered>tfoot>tr>td {
    border: 1px solid #ddd
}

.table-bordered>thead>tr>th,
.table-bordered>thead>tr>td {
    border-bottom-width: 2px
}

.table-striped>tbody>tr:nth-of-type(odd) {
    background-color: #f9f9f9
}

.table-hover>tbody>tr:hover {
    background-color: #f5f5f5
}

table col[class*="col-"] {
    position: static;
    float: none;
    display: table-column
}

table td[class*="col-"],
table th[class*="col-"] {
    position: static;
    float: none;
    display: table-cell
}

.table>thead>tr>td.active,
.table>thead>tr>th.active,
.table>thead>tr.active>td,
.table>thead>tr.active>th,
.table>tbody>tr>td.active,
.table>tbody>tr>th.active,
.table>tbody>tr.active>td,
.table>tbody>tr.active>th,
.table>tfoot>tr>td.active,
.table>tfoot>tr>th.active,
.table>tfoot>tr.active>td,
.table>tfoot>tr.active>th {
    background-color: #f5f5f5
}

.table-hover>tbody>tr>td.active:hover,
.table-hover>tbody>tr>th.active:hover,
.table-hover>tbody>tr.active:hover>td,
.table-hover>tbody>tr:hover>.active,
.table-hover>tbody>tr.active:hover>th {
    background-color: #e8e8e8
}

.table>thead>tr>td.success,
.table>thead>tr>th.success,
.table>thead>tr.success>td,
.table>thead>tr.success>th,
.table>tbody>tr>td.success,
.table>tbody>tr>th.success,
.table>tbody>tr.success>td,
.table>tbody>tr.success>th,
.table>tfoot>tr>td.success,
.table>tfoot>tr>th.success,
.table>tfoot>tr.success>td,
.table>tfoot>tr.success>th {
    background-color: #dff0d8
}

.table-hover>tbody>tr>td.success:hover,
.table-hover>tbody>tr>th.success:hover,
.table-hover>tbody>tr.success:hover>td,
.table-hover>tbody>tr:hover>.success,
.table-hover>tbody>tr.success:hover>th {
    background-color: #d0e9c6
}

.table>thead>tr>td.info,
.table>thead>tr>th.info,
.table>thead>tr.info>td,
.table>thead>tr.info>th,
.table>tbody>tr>td.info,
.table>tbody>tr>th.info,
.table>tbody>tr.info>td,
.table>tbody>tr.info>th,
.table>tfoot>tr>td.info,
.table>tfoot>tr>th.info,
.table>tfoot>tr.info>td,
.table>tfoot>tr.info>th {
    background-color: #d9edf7
}

.table-hover>tbody>tr>td.info:hover,
.table-hover>tbody>tr>th.info:hover,
.table-hover>tbody>tr.info:hover>td,
.table-hover>tbody>tr:hover>.info,
.table-hover>tbody>tr.info:hover>th {
    background-color: #c4e3f3
}

.table>thead>tr>td.warning,
.table>thead>tr>th.warning,
.table>thead>tr.warning>td,
.table>thead>tr.warning>th,
.table>tbody>tr>td.warning,
.table>tbody>tr>th.warning,
.table>tbody>tr.warning>td,
.table>tbody>tr.warning>th,
.table>tfoot>tr>td.warning,
.table>tfoot>tr>th.warning,
.table>tfoot>tr.warning>td,
.table>tfoot>tr.warning>th {
    background-color: #fcf8e3
}

.table-hover>tbody>tr>td.warning:hover,
.table-hover>tbody>tr>th.warning:hover,
.table-hover>tbody>tr.warning:hover>td,
.table-hover>tbody>tr:hover>.warning,
.table-hover>tbody>tr.warning:hover>th {
    background-color: #faf2cc
}

.table>thead>tr>td.danger,
.table>thead>tr>th.danger,
.table>thead>tr.danger>td,
.table>thead>tr.danger>th,
.table>tbody>tr>td.danger,
.table>tbody>tr>th.danger,
.table>tbody>tr.danger>td,
.table>tbody>tr.danger>th,
.table>tfoot>tr>td.danger,
.table>tfoot>tr>th.danger,
.table>tfoot>tr.danger>td,
.table>tfoot>tr.danger>th {
    background-color: #f2dede
}

.table-hover>tbody>tr>td.danger:hover,
.table-hover>tbody>tr>th.danger:hover,
.table-hover>tbody>tr.danger:hover>td,
.table-hover>tbody>tr:hover>.danger,
.table-hover>tbody>tr.danger:hover>th {
    background-color: #ebcccc
}

.table-responsive {
    overflow-x: auto;
    min-height: .01%
}

@media screen and (max-width:767px) {
    .table-responsive {
        width: 100%;
        margin-bottom: 15px;
        overflow-y: hidden;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        border: 1px solid #ddd
    }

    .table-responsive>.table {
        margin-bottom: 0
    }

    .table-responsive>.table>thead>tr>th,
    .table-responsive>.table>thead>tr>td,
    .table-responsive>.table>tbody>tr>th,
    .table-responsive>.table>tbody>tr>td,
    .table-responsive>.table>tfoot>tr>th,
    .table-responsive>.table>tfoot>tr>td {
        white-space: nowrap
    }

    .table-responsive>.table-bordered {
        border: 0
    }

    .table-responsive>.table-bordered>thead>tr>th:first-child,
    .table-responsive>.table-bordered>thead>tr>td:first-child,
    .table-responsive>.table-bordered>tbody>tr>th:first-child,
    .table-responsive>.table-bordered>tbody>tr>td:first-child,
    .table-responsive>.table-bordered>tfoot>tr>th:first-child,
    .table-responsive>.table-bordered>tfoot>tr>td:first-child {
        border-left: 0
    }

    .table-responsive>.table-bordered>thead>tr>th:last-child,
    .table-responsive>.table-bordered>thead>tr>td:last-child,
    .table-responsive>.table-bordered>tbody>tr>th:last-child,
    .table-responsive>.table-bordered>tbody>tr>td:last-child,
    .table-responsive>.table-bordered>tfoot>tr>th:last-child,
    .table-responsive>.table-bordered>tfoot>tr>td:last-child {
        border-right: 0
    }

    .table-responsive>.table-bordered>tbody>tr:last-child>th,
    .table-responsive>.table-bordered>tbody>tr:last-child>td,
    .table-responsive>.table-bordered>tfoot>tr:last-child>th,
    .table-responsive>.table-bordered>tfoot>tr:last-child>td {
        border-bottom: 0
    }
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0;
    min-width: 0
}

legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    font-size: 21px;
    line-height: inherit;
    color: #333;
    border: 0;
    border-bottom: 1px solid #e5e5e5
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold
}

input[type="search"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

input[type="radio"],
input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal
}

input[type="file"] {
    display: block
}

input[type="range"] {
    display: block;
    width: 100%
}

select[multiple],
select[size] {
    height: auto
}

input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

output {
    display: block;
    padding-top: 7px;
    font-size: 14px;
    line-height: 1.42857;
    color: #555
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s
}

.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6)
}

.form-control::-moz-placeholder {
    color: #999;
    opacity: 1
}

.form-control:-ms-input-placeholder {
    color: #999
}

.form-control::-webkit-input-placeholder {
    color: #999
}

.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
    background-color: #eee;
    opacity: 1
}

.form-control[disabled],
fieldset[disabled] .form-control {
    cursor: not-allowed
}

textarea.form-control {
    height: auto
}

input[type="search"] {
    -webkit-appearance: none
}

@media screen and (-webkit-min-device-pixel-ratio:0) {

    input[type="date"].form-control,
    input[type="time"].form-control,
    input[type="datetime-local"].form-control,
    input[type="month"].form-control {
        line-height: 34px
    }

    input[type="date"].input-sm,
    .input-group-sm>input[type="date"].form-control,
    .input-group-sm>input[type="date"].input-group-addon,
    .input-group-sm>.input-group-btn>input[type="date"].btn,
    .input-group-sm input[type="date"],
    input[type="time"].input-sm,
    .input-group-sm>input[type="time"].form-control,
    .input-group-sm>input[type="time"].input-group-addon,
    .input-group-sm>.input-group-btn>input[type="time"].btn,
    .input-group-sm input[type="time"],
    input[type="datetime-local"].input-sm,
    .input-group-sm>input[type="datetime-local"].form-control,
    .input-group-sm>input[type="datetime-local"].input-group-addon,
    .input-group-sm>.input-group-btn>input[type="datetime-local"].btn,
    .input-group-sm input[type="datetime-local"],
    input[type="month"].input-sm,
    .input-group-sm>input[type="month"].form-control,
    .input-group-sm>input[type="month"].input-group-addon,
    .input-group-sm>.input-group-btn>input[type="month"].btn,
    .input-group-sm input[type="month"] {
        line-height: 30px
    }

    input[type="date"].input-lg,
    .input-group-lg>input[type="date"].form-control,
    .input-group-lg>input[type="date"].input-group-addon,
    .input-group-lg>.input-group-btn>input[type="date"].btn,
    .input-group-lg input[type="date"],
    input[type="time"].input-lg,
    .input-group-lg>input[type="time"].form-control,
    .input-group-lg>input[type="time"].input-group-addon,
    .input-group-lg>.input-group-btn>input[type="time"].btn,
    .input-group-lg input[type="time"],
    input[type="datetime-local"].input-lg,
    .input-group-lg>input[type="datetime-local"].form-control,
    .input-group-lg>input[type="datetime-local"].input-group-addon,
    .input-group-lg>.input-group-btn>input[type="datetime-local"].btn,
    .input-group-lg input[type="datetime-local"],
    input[type="month"].input-lg,
    .input-group-lg>input[type="month"].form-control,
    .input-group-lg>input[type="month"].input-group-addon,
    .input-group-lg>.input-group-btn>input[type="month"].btn,
    .input-group-lg input[type="month"] {
        line-height: 46px
    }
}

.form-group {
    margin-bottom: 15px
}

.radio,
.checkbox {
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px
}

.radio label,
.checkbox label {
    min-height: 20px;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer
}

.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
    position: absolute;
    margin-left: -20px;
    margin-top: 4px \9
}

.radio+.radio,
.checkbox+.checkbox {
    margin-top: -5px
}

.radio-inline,
.checkbox-inline {
    position: relative;
    display: inline-block;
    padding-left: 20px;
    margin-bottom: 0;
    vertical-align: middle;
    font-weight: normal;
    cursor: pointer
}

.radio-inline+.radio-inline,
.checkbox-inline+.checkbox-inline {
    margin-top: 0;
    margin-left: 10px
}

input[type="radio"][disabled],
input[type="radio"].disabled,
fieldset[disabled] input[type="radio"],
input[type="checkbox"][disabled],
input[type="checkbox"].disabled,
fieldset[disabled] input[type="checkbox"] {
    cursor: not-allowed
}

.radio-inline.disabled,
fieldset[disabled] .radio-inline,
.checkbox-inline.disabled,
fieldset[disabled] .checkbox-inline {
    cursor: not-allowed
}

.radio.disabled label,
fieldset[disabled] .radio label,
.checkbox.disabled label,
fieldset[disabled] .checkbox label {
    cursor: not-allowed
}

.form-control-static {
    padding-top: 7px;
    padding-bottom: 7px;
    margin-bottom: 0;
    min-height: 34px
}

.form-control-static.input-lg,
.input-group-lg>.form-control-static.form-control,
.input-group-lg>.form-control-static.input-group-addon,
.input-group-lg>.input-group-btn>.form-control-static.btn,
.form-control-static.input-sm,
.input-group-sm>.form-control-static.form-control,
.input-group-sm>.form-control-static.input-group-addon,
.input-group-sm>.input-group-btn>.form-control-static.btn {
    padding-left: 0;
    padding-right: 0
}

.input-sm,
.input-group-sm>.form-control,
.input-group-sm>.input-group-addon,
.input-group-sm>.input-group-btn>.btn {
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px
}

select.input-sm,
.input-group-sm>select.form-control,
.input-group-sm>select.input-group-addon,
.input-group-sm>.input-group-btn>select.btn {
    height: 30px;
    line-height: 30px
}

textarea.input-sm,
.input-group-sm>textarea.form-control,
.input-group-sm>textarea.input-group-addon,
.input-group-sm>.input-group-btn>textarea.btn,
select[multiple].input-sm,
.input-group-sm>select[multiple].form-control,
.input-group-sm>select[multiple].input-group-addon,
.input-group-sm>.input-group-btn>select[multiple].btn {
    height: auto
}

.form-group-sm .form-control {
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px
}

.form-group-sm select.form-control {
    height: 30px;
    line-height: 30px
}

.form-group-sm textarea.form-control,
.form-group-sm select[multiple].form-control {
    height: auto
}

.form-group-sm .form-control-static {
    height: 30px;
    min-height: 32px;
    padding: 6px 10px;
    font-size: 12px;
    line-height: 1.5
}

.input-lg,
.input-group-lg>.form-control,
.input-group-lg>.input-group-addon,
.input-group-lg>.input-group-btn>.btn {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33333;
    border-radius: 6px
}

select.input-lg,
.input-group-lg>select.form-control,
.input-group-lg>select.input-group-addon,
.input-group-lg>.input-group-btn>select.btn {
    height: 46px;
    line-height: 46px
}

textarea.input-lg,
.input-group-lg>textarea.form-control,
.input-group-lg>textarea.input-group-addon,
.input-group-lg>.input-group-btn>textarea.btn,
select[multiple].input-lg,
.input-group-lg>select[multiple].form-control,
.input-group-lg>select[multiple].input-group-addon,
.input-group-lg>.input-group-btn>select[multiple].btn {
    height: auto
}

.form-group-lg .form-control {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33333;
    border-radius: 6px
}

.form-group-lg select.form-control {
    height: 46px;
    line-height: 46px
}

.form-group-lg textarea.form-control,
.form-group-lg select[multiple].form-control {
    height: auto
}

.form-group-lg .form-control-static {
    height: 46px;
    min-height: 38px;
    padding: 11px 16px;
    font-size: 18px;
    line-height: 1.33333
}

.has-feedback {
    position: relative
}

.has-feedback .form-control {
    padding-right: 42.5px
}

.form-control-feedback {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: block;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    pointer-events: none
}

.input-lg+.form-control-feedback,
.input-group-lg>.form-control+.form-control-feedback,
.input-group-lg>.input-group-addon+.form-control-feedback,
.input-group-lg>.input-group-btn>.btn+.form-control-feedback,
.input-group-lg+.form-control-feedback,
.form-group-lg .form-control+.form-control-feedback {
    width: 46px;
    height: 46px;
    line-height: 46px
}

.input-sm+.form-control-feedback,
.input-group-sm>.form-control+.form-control-feedback,
.input-group-sm>.input-group-addon+.form-control-feedback,
.input-group-sm>.input-group-btn>.btn+.form-control-feedback,
.input-group-sm+.form-control-feedback,
.form-group-sm .form-control+.form-control-feedback {
    width: 30px;
    height: 30px;
    line-height: 30px
}

.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label {
    color: #3c763d
}

.has-success .form-control {
    border-color: #3c763d;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075)
}

.has-success .form-control:focus {
    border-color: #2b542c;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168
}

.has-success .input-group-addon {
    color: #3c763d;
    border-color: #3c763d;
    background-color: #dff0d8
}

.has-success .form-control-feedback {
    color: #3c763d
}

.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label {
    color: #8a6d3b
}

.has-warning .form-control {
    border-color: #8a6d3b;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075)
}

.has-warning .form-control:focus {
    border-color: #66512c;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b
}

.has-warning .input-group-addon {
    color: #8a6d3b;
    border-color: #8a6d3b;
    background-color: #fcf8e3
}

.has-warning .form-control-feedback {
    color: #8a6d3b
}

.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline,
.has-error.radio label,
.has-error.checkbox label,
.has-error.radio-inline label,
.has-error.checkbox-inline label {
    color: #a94442
}

.has-error .form-control {
    border-color: #a94442;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075)
}

.has-error .form-control:focus {
    border-color: #843534;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483
}

.has-error .input-group-addon {
    color: #a94442;
    border-color: #a94442;
    background-color: #f2dede
}

.has-error .form-control-feedback {
    color: #a94442
}

.has-feedback label~.form-control-feedback {
    top: 25px
}

.has-feedback label.sr-only~.form-control-feedback {
    top: 0
}

.help-block {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #737373
}

@media(min-width:768px) {
    .form-inline .form-group {
        display: inline-block;
        margin-bottom: 0;
        vertical-align: middle
    }

    .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle
    }

    .form-inline .form-control-static {
        display: inline-block
    }

    .form-inline .input-group {
        display: inline-table;
        vertical-align: middle
    }

    .form-inline .input-group .input-group-addon,
    .form-inline .input-group .input-group-btn,
    .form-inline .input-group .form-control {
        width: auto
    }

    .form-inline .input-group>.form-control {
        width: 100%
    }

    .form-inline .control-label {
        margin-bottom: 0;
        vertical-align: middle
    }

    .form-inline .radio,
    .form-inline .checkbox {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
        vertical-align: middle
    }

    .form-inline .radio label,
    .form-inline .checkbox label {
        padding-left: 0
    }

    .form-inline .radio input[type="radio"],
    .form-inline .checkbox input[type="checkbox"] {
        position: relative;
        margin-left: 0
    }

    .form-inline .has-feedback .form-control-feedback {
        top: 0
    }
}

.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 7px
}

.form-horizontal .radio,
.form-horizontal .checkbox {
    min-height: 27px
}

.form-horizontal .form-group {
    margin-left: -15px;
    margin-right: -15px
}

.form-horizontal .form-group:before,
.form-horizontal .form-group:after {
    content: " ";
    display: table
}

.form-horizontal .form-group:after {
    clear: both
}

@media(min-width:768px) {
    .form-horizontal .control-label {
        text-align: right;
        margin-bottom: 0;
        padding-top: 7px
    }
}

.form-horizontal .has-feedback .form-control-feedback {
    right: 15px
}

@media(min-width:768px) {
    .form-horizontal .form-group-lg .control-label {
        padding-top: 14.33333px;
        font-size: 18px
    }
}

@media(min-width:768px) {
    .form-horizontal .form-group-sm .control-label {
        padding-top: 6px;
        font-size: 12px
    }
}

.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.btn:focus,
.btn.focus,
.btn:active:focus,
.btn:active.focus,
.btn.active:focus,
.btn.active.focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

.btn:hover,
.btn:focus,
.btn.focus {
    color: #333;
    text-decoration: none
}

.btn:active,
.btn.active {
    outline: 0;
    background-image: none;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125)
}

.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
    cursor: not-allowed;
    opacity: .65;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    box-shadow: none
}

a.btn.disabled,
fieldset[disabled] a.btn {
    pointer-events: none
}

.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc
}

.btn-default:focus,
.btn-default.focus {
    color: #333;
    background-color: #e6e6e6;
    border-color: #8c8c8c
}

.btn-default:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad
}

.btn-default:active,
.btn-default.active,
.open>.btn-default.dropdown-toggle {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad
}

.btn-default:active:hover,
.btn-default:active:focus,
.btn-default:active.focus,
.btn-default.active:hover,
.btn-default.active:focus,
.btn-default.active.focus,
.open>.btn-default.dropdown-toggle:hover,
.open>.btn-default.dropdown-toggle:focus,
.open>.btn-default.dropdown-toggle.focus {
    color: #333;
    background-color: #d4d4d4;
    border-color: #8c8c8c
}

.btn-default:active,
.btn-default.active,
.open>.btn-default.dropdown-toggle {
    background-image: none
}

.btn-default.disabled,
.btn-default.disabled:hover,
.btn-default.disabled:focus,
.btn-default.disabled.focus,
.btn-default.disabled:active,
.btn-default.disabled.active,
.btn-default[disabled],
.btn-default[disabled]:hover,
.btn-default[disabled]:focus,
.btn-default[disabled].focus,
.btn-default[disabled]:active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default,
fieldset[disabled] .btn-default:hover,
fieldset[disabled] .btn-default:focus,
fieldset[disabled] .btn-default.focus,
fieldset[disabled] .btn-default:active,
fieldset[disabled] .btn-default.active {
    background-color: #fff;
    border-color: #ccc
}

.btn-default .badge {
    color: #fff;
    background-color: #333
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4
}

.btn-primary:focus,
.btn-primary.focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40
}

.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74
}

.btn-primary:active,
.btn-primary.active,
.open>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #286090;
    border-color: #204d74
}

.btn-primary:active:hover,
.btn-primary:active:focus,
.btn-primary:active.focus,
.btn-primary.active:hover,
.btn-primary.active:focus,
.btn-primary.active.focus,
.open>.btn-primary.dropdown-toggle:hover,
.open>.btn-primary.dropdown-toggle:focus,
.open>.btn-primary.dropdown-toggle.focus {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40
}

.btn-primary:active,
.btn-primary.active,
.open>.btn-primary.dropdown-toggle {
    background-image: none
}

.btn-primary.disabled,
.btn-primary.disabled:hover,
.btn-primary.disabled:focus,
.btn-primary.disabled.focus,
.btn-primary.disabled:active,
.btn-primary.disabled.active,
.btn-primary[disabled],
.btn-primary[disabled]:hover,
.btn-primary[disabled]:focus,
.btn-primary[disabled].focus,
.btn-primary[disabled]:active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary,
fieldset[disabled] .btn-primary:hover,
fieldset[disabled] .btn-primary:focus,
fieldset[disabled] .btn-primary.focus,
fieldset[disabled] .btn-primary:active,
fieldset[disabled] .btn-primary.active {
    background-color: #337ab7;
    border-color: #2e6da4
}

.btn-primary .badge {
    color: #337ab7;
    background-color: #fff
}

.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c
}

.btn-success:focus,
.btn-success.focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625
}

.btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439
}

.btn-success:active,
.btn-success.active,
.open>.btn-success.dropdown-toggle {
    color: #fff;
    background-color: #449d44;
    border-color: #398439
}

.btn-success:active:hover,
.btn-success:active:focus,
.btn-success:active.focus,
.btn-success.active:hover,
.btn-success.active:focus,
.btn-success.active.focus,
.open>.btn-success.dropdown-toggle:hover,
.open>.btn-success.dropdown-toggle:focus,
.open>.btn-success.dropdown-toggle.focus {
    color: #fff;
    background-color: #398439;
    border-color: #255625
}

.btn-success:active,
.btn-success.active,
.open>.btn-success.dropdown-toggle {
    background-image: none
}

.btn-success.disabled,
.btn-success.disabled:hover,
.btn-success.disabled:focus,
.btn-success.disabled.focus,
.btn-success.disabled:active,
.btn-success.disabled.active,
.btn-success[disabled],
.btn-success[disabled]:hover,
.btn-success[disabled]:focus,
.btn-success[disabled].focus,
.btn-success[disabled]:active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success,
fieldset[disabled] .btn-success:hover,
fieldset[disabled] .btn-success:focus,
fieldset[disabled] .btn-success.focus,
fieldset[disabled] .btn-success:active,
fieldset[disabled] .btn-success.active {
    background-color: #5cb85c;
    border-color: #4cae4c
}

.btn-success .badge {
    color: #5cb85c;
    background-color: #fff
}

.btn-info {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da
}

.btn-info:focus,
.btn-info.focus {
    color: #fff;
    background-color: #31b0d5;
    border-color: #1b6d85
}

.btn-info:hover {
    color: #fff;
    background-color: #31b0d5;
    border-color: #269abc
}

.btn-info:active,
.btn-info.active,
.open>.btn-info.dropdown-toggle {
    color: #fff;
    background-color: #31b0d5;
    border-color: #269abc
}

.btn-info:active:hover,
.btn-info:active:focus,
.btn-info:active.focus,
.btn-info.active:hover,
.btn-info.active:focus,
.btn-info.active.focus,
.open>.btn-info.dropdown-toggle:hover,
.open>.btn-info.dropdown-toggle:focus,
.open>.btn-info.dropdown-toggle.focus {
    color: #fff;
    background-color: #269abc;
    border-color: #1b6d85
}

.btn-info:active,
.btn-info.active,
.open>.btn-info.dropdown-toggle {
    background-image: none
}

.btn-info.disabled,
.btn-info.disabled:hover,
.btn-info.disabled:focus,
.btn-info.disabled.focus,
.btn-info.disabled:active,
.btn-info.disabled.active,
.btn-info[disabled],
.btn-info[disabled]:hover,
.btn-info[disabled]:focus,
.btn-info[disabled].focus,
.btn-info[disabled]:active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info,
fieldset[disabled] .btn-info:hover,
fieldset[disabled] .btn-info:focus,
fieldset[disabled] .btn-info.focus,
fieldset[disabled] .btn-info:active,
fieldset[disabled] .btn-info.active {
    background-color: #5bc0de;
    border-color: #46b8da
}

.btn-info .badge {
    color: #5bc0de;
    background-color: #fff
}

.btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236
}

.btn-warning:focus,
.btn-warning.focus {
    color: #fff;
    background-color: #ec971f;
    border-color: #985f0d
}

.btn-warning:hover {
    color: #fff;
    background-color: #ec971f;
    border-color: #d58512
}

.btn-warning:active,
.btn-warning.active,
.open>.btn-warning.dropdown-toggle {
    color: #fff;
    background-color: #ec971f;
    border-color: #d58512
}

.btn-warning:active:hover,
.btn-warning:active:focus,
.btn-warning:active.focus,
.btn-warning.active:hover,
.btn-warning.active:focus,
.btn-warning.active.focus,
.open>.btn-warning.dropdown-toggle:hover,
.open>.btn-warning.dropdown-toggle:focus,
.open>.btn-warning.dropdown-toggle.focus {
    color: #fff;
    background-color: #d58512;
    border-color: #985f0d
}

.btn-warning:active,
.btn-warning.active,
.open>.btn-warning.dropdown-toggle {
    background-image: none
}

.btn-warning.disabled,
.btn-warning.disabled:hover,
.btn-warning.disabled:focus,
.btn-warning.disabled.focus,
.btn-warning.disabled:active,
.btn-warning.disabled.active,
.btn-warning[disabled],
.btn-warning[disabled]:hover,
.btn-warning[disabled]:focus,
.btn-warning[disabled].focus,
.btn-warning[disabled]:active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning,
fieldset[disabled] .btn-warning:hover,
fieldset[disabled] .btn-warning:focus,
fieldset[disabled] .btn-warning.focus,
fieldset[disabled] .btn-warning:active,
fieldset[disabled] .btn-warning.active {
    background-color: #f0ad4e;
    border-color: #eea236
}

.btn-warning .badge {
    color: #f0ad4e;
    background-color: #fff
}

.btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a
}

.btn-danger:focus,
.btn-danger.focus {
    color: #fff;
    background-color: #c9302c;
    border-color: #761c19
}

.btn-danger:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925
}

.btn-danger:active,
.btn-danger.active,
.open>.btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925
}

.btn-danger:active:hover,
.btn-danger:active:focus,
.btn-danger:active.focus,
.btn-danger.active:hover,
.btn-danger.active:focus,
.btn-danger.active.focus,
.open>.btn-danger.dropdown-toggle:hover,
.open>.btn-danger.dropdown-toggle:focus,
.open>.btn-danger.dropdown-toggle.focus {
    color: #fff;
    background-color: #ac2925;
    border-color: #761c19
}

.btn-danger:active,
.btn-danger.active,
.open>.btn-danger.dropdown-toggle {
    background-image: none
}

.btn-danger.disabled,
.btn-danger.disabled:hover,
.btn-danger.disabled:focus,
.btn-danger.disabled.focus,
.btn-danger.disabled:active,
.btn-danger.disabled.active,
.btn-danger[disabled],
.btn-danger[disabled]:hover,
.btn-danger[disabled]:focus,
.btn-danger[disabled].focus,
.btn-danger[disabled]:active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger,
fieldset[disabled] .btn-danger:hover,
fieldset[disabled] .btn-danger:focus,
fieldset[disabled] .btn-danger.focus,
fieldset[disabled] .btn-danger:active,
fieldset[disabled] .btn-danger.active {
    background-color: #d9534f;
    border-color: #d43f3a
}

.btn-danger .badge {
    color: #d9534f;
    background-color: #fff
}

.btn-link {
    color: #337ab7;
    font-weight: normal;
    border-radius: 0
}

.btn-link,
.btn-link:active,
.btn-link.active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
    border-color: transparent
}

.btn-link:hover,
.btn-link:focus {
    color: #23527c;
    text-decoration: underline;
    background-color: transparent
}

.btn-link[disabled]:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:hover,
fieldset[disabled] .btn-link:focus {
    color: #777;
    text-decoration: none
}

.btn-lg,
.btn-group-lg>.btn {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33333;
    border-radius: 6px
}

.btn-sm,
.btn-group-sm>.btn {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px
}

.btn-xs,
.btn-group-xs>.btn {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px
}

.btn-block {
    display: block;
    width: 100%
}

.btn-block+.btn-block {
    margin-top: 5px
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
    width: 100%
}

.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear
}

.fade.in {
    opacity: 1
}

.collapse {
    display: none !important;
    visibility: unset;
}

.collapse.in {
    display: block !important;
}

tr.collapse.in {
    display: table-row;
}

tbody.collapse.in {
    display: table-row-group;
}

.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition-property: height, visibility;
    transition-property: height, visibility;
    -webkit-transition-duration: .35s;
    transition-duration: .35s;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
}

.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent
}

.dropup,
.dropdown {
    position: relative
}

.dropdown-toggle:focus {
    outline: 0
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    background-clip: padding-box
}

.dropdown-menu.pull-right {
    right: 0;
    left: auto
}

.dropdown-menu .divider {
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5
}

.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857;
    color: #333;
    white-space: nowrap
}

.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus {
    text-decoration: none;
    color: #262626;
    background-color: #f5f5f5
}

.dropdown-menu>.active>a,
.dropdown-menu>.active>a:hover,
.dropdown-menu>.active>a:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    background-color: #337ab7
}

.dropdown-menu>.disabled>a,
.dropdown-menu>.disabled>a:hover,
.dropdown-menu>.disabled>a:focus {
    color: #777
}

.dropdown-menu>.disabled>a:hover,
.dropdown-menu>.disabled>a:focus {
    text-decoration: none;
    background-color: transparent;
    background-image: none;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    cursor: not-allowed
}

.open>.dropdown-menu {
    display: block
}

.open>a {
    outline: 0
}

.dropdown-menu-right {
    left: auto;
    right: 0
}

.dropdown-menu-left {
    left: 0;
    right: auto
}

.dropdown-header {
    display: block;
    padding: 3px 20px;
    font-size: 12px;
    line-height: 1.42857;
    color: #777;
    white-space: nowrap
}

.dropdown-backdrop {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 990
}

.pull-right>.dropdown-menu {
    right: 0;
    left: auto
}

.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
    border-top: 0;
    border-bottom: 4px dashed;
    border-bottom: 4px solid \9;
    content: ""
}

.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-bottom: 2px
}

@media(min-width:768px) {
    .navbar-right .dropdown-menu {
        right: 0;
        left: auto
    }

    .navbar-right .dropdown-menu-left {
        left: 0;
        right: auto
    }
}

.btn-group,
.btn-group-vertical {
    position: relative;
    display: inline-block;
    vertical-align: middle
}

.btn-group>.btn,
.btn-group-vertical>.btn {
    position: relative;
    float: left
}

.btn-group>.btn:hover,
.btn-group>.btn:focus,
.btn-group>.btn:active,
.btn-group>.btn.active,
.btn-group-vertical>.btn:hover,
.btn-group-vertical>.btn:focus,
.btn-group-vertical>.btn:active,
.btn-group-vertical>.btn.active {
    z-index: 2
}

.btn-group .btn+.btn,
.btn-group .btn+.btn-group,
.btn-group .btn-group+.btn,
.btn-group .btn-group+.btn-group {
    margin-left: -1px
}

.btn-toolbar {
    margin-left: -5px
}

.btn-toolbar:before,
.btn-toolbar:after {
    content: " ";
    display: table
}

.btn-toolbar:after {
    clear: both
}

.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
    float: left
}

.btn-toolbar>.btn,
.btn-toolbar>.btn-group,
.btn-toolbar>.input-group {
    margin-left: 5px
}

.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
    border-radius: 0
}

.btn-group>.btn:first-child {
    margin-left: 0
}

.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.btn-group>.btn:last-child:not(:first-child),
.btn-group>.dropdown-toggle:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.btn-group>.btn-group {
    float: left
}

.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn {
    border-radius: 0
}

.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,
.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
    outline: 0
}

.btn-group>.btn+.dropdown-toggle {
    padding-left: 8px;
    padding-right: 8px
}

.btn-group>.btn-lg+.dropdown-toggle,
.btn-group-lg.btn-group>.btn+.dropdown-toggle {
    padding-left: 12px;
    padding-right: 12px
}

.btn-group.open .dropdown-toggle {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125)
}

.btn-group.open .dropdown-toggle.btn-link {
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn .caret {
    margin-left: 0
}

.btn-lg .caret,
.btn-group-lg>.btn .caret {
    border-width: 5px 5px 0;
    border-bottom-width: 0
}

.dropup .btn-lg .caret,
.dropup .btn-group-lg>.btn .caret {
    border-width: 0 5px 5px
}

.btn-group-vertical>.btn,
.btn-group-vertical>.btn-group,
.btn-group-vertical>.btn-group>.btn {
    display: block;
    float: none;
    width: 100%;
    max-width: 100%
}

.btn-group-vertical>.btn-group:before,
.btn-group-vertical>.btn-group:after {
    content: " ";
    display: table
}

.btn-group-vertical>.btn-group:after {
    clear: both
}

.btn-group-vertical>.btn-group>.btn {
    float: none
}

.btn-group-vertical>.btn+.btn,
.btn-group-vertical>.btn+.btn-group,
.btn-group-vertical>.btn-group+.btn,
.btn-group-vertical>.btn-group+.btn-group {
    margin-top: -1px;
    margin-left: 0
}

.btn-group-vertical>.btn:not(:first-child):not(:last-child) {
    border-radius: 0
}

.btn-group-vertical>.btn:first-child:not(:last-child) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}

.btn-group-vertical>.btn:last-child:not(:first-child) {
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0;
    border-top-left-radius: 0
}

.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn {
    border-radius: 0
}

.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,
.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}

.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child {
    border-top-right-radius: 0;
    border-top-left-radius: 0
}

.btn-group-justified {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: separate
}

.btn-group-justified>.btn,
.btn-group-justified>.btn-group {
    float: none;
    display: table-cell;
    width: 1%
}

.btn-group-justified>.btn-group .btn {
    width: 100%
}

.btn-group-justified>.btn-group .dropdown-menu {
    left: auto
}

[data-toggle="buttons"]>.btn input[type="radio"],
[data-toggle="buttons"]>.btn input[type="checkbox"],
[data-toggle="buttons"]>.btn-group>.btn input[type="radio"],
[data-toggle="buttons"]>.btn-group>.btn input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none
}

.input-group {
    position: relative;
    display: table;
    border-collapse: separate
}

.input-group[class*="col-"] {
    float: none;
    padding-left: 0;
    padding-right: 0
}

.input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0
}

.input-group-addon,
.input-group-btn,
.input-group .form-control {
    display: table-cell
}

.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
    border-radius: 0
}

.input-group-addon,
.input-group-btn {
    width: 1%;
    white-space: nowrap;
    vertical-align: middle
}

.input-group-addon {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px
}

.input-group-addon.input-sm,
.input-group-sm>.input-group-addon,
.input-group-sm>.input-group-btn>.input-group-addon.btn {
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 3px
}

.input-group-addon.input-lg,
.input-group-lg>.input-group-addon,
.input-group-lg>.input-group-btn>.input-group-addon.btn {
    padding: 10px 16px;
    font-size: 18px;
    border-radius: 6px
}

.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
    margin-top: 0
}

.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child>.btn,
.input-group-btn:first-child>.btn-group>.btn,
.input-group-btn:first-child>.dropdown-toggle,
.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child>.btn-group:not(:last-child)>.btn {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.input-group-addon:first-child {
    border-right: 0
}

.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child>.btn,
.input-group-btn:last-child>.btn-group>.btn,
.input-group-btn:last-child>.dropdown-toggle,
.input-group-btn:first-child>.btn:not(:first-child),
.input-group-btn:first-child>.btn-group:not(:first-child)>.btn {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.input-group-addon:last-child {
    border-left: 0
}

.input-group-btn {
    position: relative;
    font-size: 0;
    white-space: nowrap
}

.input-group-btn>.btn {
    position: relative
}

.input-group-btn>.btn+.btn {
    margin-left: -1px
}

.input-group-btn>.btn:hover,
.input-group-btn>.btn:focus,
.input-group-btn>.btn:active {
    z-index: 2
}

.input-group-btn:first-child>.btn,
.input-group-btn:first-child>.btn-group {
    margin-right: -1px
}

.input-group-btn:last-child>.btn,
.input-group-btn:last-child>.btn-group {
    z-index: 2;
    margin-left: -1px
}

.nav {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none
}

.nav:before,
.nav:after {
    content: " ";
    display: table
}

.nav:after {
    clear: both
}

.nav>li {
    position: relative;
    display: block
}

.nav>li>a {
    position: relative;
    display: block;
    padding: 10px 15px
}

.nav>li>a:hover,
.nav>li>a:focus {
    text-decoration: none;
    background-color: #eee
}

.nav>li.disabled>a {
    color: #777
}

.nav>li.disabled>a:hover,
.nav>li.disabled>a:focus {
    color: #777;
    text-decoration: none;
    background-color: transparent;
    cursor: not-allowed
}

.nav .open>a,
.nav .open>a:hover,
.nav .open>a:focus {
    background-color: #eee;
    border-color: #337ab7
}

.nav .nav-divider {
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5
}

.nav>li>a>img {
    max-width: none
}

.nav-tabs {
    border-bottom: 1px solid #ddd
}

.nav-tabs>li {
    float: left;
    margin-bottom: -1px
}

.nav-tabs>li>a {
    margin-right: 2px;
    line-height: 1.42857;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0
}

.nav-tabs>li>a:hover {
    border-color: #eee #eee #ddd
}

.nav-tabs>li.active>a,
.nav-tabs>li.active>a:hover,
.nav-tabs>li.active>a:focus {
    color: #555;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
    cursor: default
}

.nav-pills>li {
    float: left
}

.nav-pills>li>a {
    border-radius: 4px
}

.nav-pills>li+li {
    margin-left: 2px
}

.nav-pills>li.active>a,
.nav-pills>li.active>a:hover,
.nav-pills>li.active>a:focus {
    color: #fff;
    background-color: #337ab7
}

.nav-stacked>li {
    float: none
}

.nav-stacked>li+li {
    margin-top: 2px;
    margin-left: 0
}

.nav-justified,
.nav-tabs.nav-justified {
    width: 100%
}

.nav-justified>li,
.nav-tabs.nav-justified>li {
    float: none
}

.nav-justified>li>a,
.nav-tabs.nav-justified>li>a {
    text-align: center;
    margin-bottom: 5px
}

.nav-justified>.dropdown .dropdown-menu {
    top: auto;
    left: auto
}

@media(min-width:768px) {

    .nav-justified>li,
    .nav-tabs.nav-justified>li {
        display: table-cell;
        width: 1%
    }

    .nav-justified>li>a,
    .nav-tabs.nav-justified>li>a {
        margin-bottom: 0
    }
}

.nav-tabs-justified,
.nav-tabs.nav-justified {
    border-bottom: 0
}

.nav-tabs-justified>li>a,
.nav-tabs.nav-justified>li>a {
    margin-right: 0;
    border-radius: 4px
}

.nav-tabs-justified>.active>a,
.nav-tabs.nav-justified>.active>a,
.nav-tabs-justified>.active>a:hover,
.nav-tabs.nav-justified>.active>a:hover,
.nav-tabs-justified>.active>a:focus,
.nav-tabs.nav-justified>.active>a:focus {
    border: 1px solid #ddd
}

@media(min-width:768px) {

    .nav-tabs-justified>li>a,
    .nav-tabs.nav-justified>li>a {
        border-bottom: 1px solid #ddd;
        border-radius: 4px 4px 0 0
    }

    .nav-tabs-justified>.active>a,
    .nav-tabs.nav-justified>.active>a,
    .nav-tabs-justified>.active>a:hover,
    .nav-tabs.nav-justified>.active>a:hover,
    .nav-tabs-justified>.active>a:focus,
    .nav-tabs.nav-justified>.active>a:focus {
        border-bottom-color: #fff
    }
}

.tab-content>.tab-pane {
    display: none
}

.tab-content>.active {
    display: block
}

.nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-right-radius: 0;
    border-top-left-radius: 0
}

.navbar {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    padding: .5rem 1rem
}

.navbar:before,
.navbar:after {
    content: " ";
    display: table
}

.navbar:after {
    clear: both
}

@media(min-width:768px) {
    .navbar {
        border-radius: 4px
    }
}

.navbar-header:before,
.navbar-header:after {
    content: " ";
    display: table
}

.navbar-header:after {
    clear: both
}

@media(min-width:768px) {
    .navbar-header {
        float: left
    }
}

.navbar-collapse {
    overflow-x: visible;
    padding-right: 15px;
    padding-left: 15px;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    -webkit-overflow-scrolling: touch
}

.navbar-collapse:before,
.navbar-collapse:after {
    content: " ";
    display: table
}

.navbar-collapse:after {
    clear: both
}

.navbar-collapse.in {
    overflow-y: auto
}

@media(min-width:768px) {
    .navbar-collapse {
        width: auto;
        border-top: 0;
        box-shadow: none
    }

    .navbar-collapse.collapse {
        display: block !important;
        height: auto !important;
        padding-bottom: 0;
        overflow: visible !important
    }

    .navbar-collapse.in {
        overflow-y: visible
    }

    .navbar-fixed-top .navbar-collapse,
    .navbar-static-top .navbar-collapse,
    .navbar-fixed-bottom .navbar-collapse {
        padding-left: 0;
        padding-right: 0
    }
}

.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
    max-height: 340px
}

@media(max-device-width:480px) and (orientation:landscape) {

    .navbar-fixed-top .navbar-collapse,
    .navbar-fixed-bottom .navbar-collapse {
        max-height: 200px
    }
}

.container>.navbar-header,
.container>.navbar-collapse,
.container-fluid>.navbar-header,
.container-fluid>.navbar-collapse {
    margin-right: -15px;
    margin-left: -15px
}

@media(min-width:768px) {

    .container>.navbar-header,
    .container>.navbar-collapse,
    .container-fluid>.navbar-header,
    .container-fluid>.navbar-collapse {
        margin-right: 0;
        margin-left: 0
    }
}

.navbar-static-top {
    z-index: 1000;
    border-width: 0 0 1px
}

@media(min-width:768px) {
    .navbar-static-top {
        border-radius: 0
    }
}

.navbar-fixed-top,
.navbar-fixed-bottom {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030
}

@media(min-width:768px) {

    .navbar-fixed-top,
    .navbar-fixed-bottom {
        border-radius: 0
    }
}

.navbar-fixed-top {
    top: 0;
    border-width: 0 0 1px
}

.navbar-fixed-bottom {
    bottom: 0;
    margin-bottom: 0;
    border-width: 1px 0 0
}

.navbar-brand {
    float: left;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    height: 50px
}

.navbar-brand:hover,
.navbar-brand:focus {
    text-decoration: none
}

.navbar-brand>img {
    display: block
}

@media(min-width:768px) {

    .navbar>.container .navbar-brand,
    .navbar>.container-fluid .navbar-brand {
        margin-left: -15px
    }
}

.navbar-toggle {
    position: relative;
    float: right;
    margin-right: 15px;
    padding: 9px 10px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px
}

.navbar-toggle:focus {
    outline: 0
}

.navbar-toggle .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px
}

.navbar-toggle .icon-bar+.icon-bar {
    margin-top: 4px
}

@media(min-width:768px) {
    .navbar-toggle {
        display: none
    }
}

.navbar-nav {
    margin: 7.5px -15px
}

.navbar-nav>li>a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px
}

@media(max-width:767px) {
    .navbar-nav .open .dropdown-menu {
        position: static;
        float: none;
        width: auto;
        margin-top: 0;
        background-color: transparent;
        border: 0;
        box-shadow: none
    }

    .navbar-nav .open .dropdown-menu>li>a,
    .navbar-nav .open .dropdown-menu .dropdown-header {
        padding: 5px 15px 5px 25px
    }

    .navbar-nav .open .dropdown-menu>li>a {
        line-height: 20px
    }

    .navbar-nav .open .dropdown-menu>li>a:hover,
    .navbar-nav .open .dropdown-menu>li>a:focus {
        background-image: none
    }
}

@media(min-width:768px) {
    .navbar-nav {
        float: left;
        margin: 0
    }

    .navbar-nav>li {
        float: left
    }

    .navbar-nav>li>a {
        padding-top: 15px;
        padding-bottom: 15px
    }
}

.navbar-form {
    margin-left: -15px;
    margin-right: -15px;
    padding: 10px 15px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
    margin-top: 8px;
    margin-bottom: 8px
}

@media(min-width:768px) {
    .navbar-form .form-group {
        display: inline-block;
        margin-bottom: 0;
        vertical-align: middle
    }

    .navbar-form .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle
    }

    .navbar-form .form-control-static {
        display: inline-block
    }

    .navbar-form .input-group {
        display: inline-table;
        vertical-align: middle
    }

    .navbar-form .input-group .input-group-addon,
    .navbar-form .input-group .input-group-btn,
    .navbar-form .input-group .form-control {
        width: auto
    }

    .navbar-form .input-group>.form-control {
        width: 100%
    }

    .navbar-form .control-label {
        margin-bottom: 0;
        vertical-align: middle
    }

    .navbar-form .radio,
    .navbar-form .checkbox {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
        vertical-align: middle
    }

    .navbar-form .radio label,
    .navbar-form .checkbox label {
        padding-left: 0
    }

    .navbar-form .radio input[type="radio"],
    .navbar-form .checkbox input[type="checkbox"] {
        position: relative;
        margin-left: 0
    }

    .navbar-form .has-feedback .form-control-feedback {
        top: 0
    }
}

@media(max-width:767px) {
    .navbar-form .form-group {
        margin-bottom: 5px
    }

    .navbar-form .form-group:last-child {
        margin-bottom: 0
    }
}

@media(min-width:768px) {
    .navbar-form {
        width: auto;
        border: 0;
        margin-left: 0;
        margin-right: 0;
        padding-top: 0;
        padding-bottom: 0;
        -webkit-box-shadow: none;
        box-shadow: none
    }
}

.navbar-nav>li>.dropdown-menu {
    margin-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0
}

.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu {
    margin-bottom: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}

.navbar-btn {
    margin-top: 8px;
    margin-bottom: 8px
}

.navbar-btn.btn-sm,
.btn-group-sm>.navbar-btn.btn {
    margin-top: 10px;
    margin-bottom: 10px
}

.navbar-btn.btn-xs,
.btn-group-xs>.navbar-btn.btn {
    margin-top: 14px;
    margin-bottom: 14px
}

.navbar-text {
    margin-top: 15px;
    margin-bottom: 15px
}

@media(min-width:768px) {
    .navbar-text {
        float: left;
        margin-left: 15px;
        margin-right: 15px
    }
}

@media(min-width:768px) {
    .navbar-left {
        float: left !important
    }

    .navbar-right {
        float: right !important;
        margin-right: -15px
    }

    .navbar-right~.navbar-right {
        margin-right: 0
    }
}

.navbar-default {
    background-color: #f8f8f8;
    border-color: #e7e7e7
}

.navbar-default .navbar-brand {
    color: #777
}

.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
    color: #5e5e5e;
    background-color: transparent
}

.navbar-default .navbar-text {
    color: #777
}

.navbar-default .navbar-nav>li>a {
    color: #777
}

.navbar-default .navbar-nav>li>a:hover,
.navbar-default .navbar-nav>li>a:focus {
    color: #333;
    background-color: transparent
}

.navbar-default .navbar-nav>.active>a,
.navbar-default .navbar-nav>.active>a:hover,
.navbar-default .navbar-nav>.active>a:focus {
    color: #555;
    background-color: #e7e7e7
}

.navbar-default .navbar-nav>.disabled>a,
.navbar-default .navbar-nav>.disabled>a:hover,
.navbar-default .navbar-nav>.disabled>a:focus {
    color: #ccc;
    background-color: transparent
}

.navbar-default .navbar-toggle {
    border-color: #ddd
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
    background-color: #ddd
}

.navbar-default .navbar-toggle .icon-bar {
    background-color: #888
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
    border-color: #e7e7e7
}

.navbar-default .navbar-nav>.open>a,
.navbar-default .navbar-nav>.open>a:hover,
.navbar-default .navbar-nav>.open>a:focus {
    background-color: #e7e7e7;
    color: #555
}

@media(max-width:767px) {
    .navbar-default .navbar-nav .open .dropdown-menu>li>a {
        color: #777
    }

    .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu>li>a:focus {
        color: #333;
        background-color: transparent
    }

    .navbar-default .navbar-nav .open .dropdown-menu>.active>a,
    .navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus {
        color: #555;
        background-color: #e7e7e7
    }

    .navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,
    .navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus {
        color: #ccc;
        background-color: transparent
    }
}

.navbar-default .navbar-link {
    color: #777
}

.navbar-default .navbar-link:hover {
    color: #333
}

.navbar-default .btn-link {
    color: #777
}

.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
    color: #333
}

.navbar-default .btn-link[disabled]:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:hover,
fieldset[disabled] .navbar-default .btn-link:focus {
    color: #ccc
}

.navbar-inverse {
    background-color: #222;
    border-color: #090909
}

.navbar-inverse .navbar-brand {
    color: #9d9d9d
}

.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
    color: #fff;
    background-color: transparent
}

.navbar-inverse .navbar-text {
    color: #9d9d9d
}

.navbar-inverse .navbar-nav>li>a {
    color: #9d9d9d
}

.navbar-inverse .navbar-nav>li>a:hover,
.navbar-inverse .navbar-nav>li>a:focus {
    color: #fff;
    background-color: transparent
}

.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.active>a:hover,
.navbar-inverse .navbar-nav>.active>a:focus {
    color: #fff;
    background-color: #090909
}

.navbar-inverse .navbar-nav>.disabled>a,
.navbar-inverse .navbar-nav>.disabled>a:hover,
.navbar-inverse .navbar-nav>.disabled>a:focus {
    color: #444;
    background-color: transparent
}

.navbar-inverse .navbar-toggle {
    border-color: #333
}

.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
    background-color: #333
}

.navbar-inverse .navbar-toggle .icon-bar {
    background-color: #fff
}

.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
    border-color: #101010
}

.navbar-inverse .navbar-nav>.open>a,
.navbar-inverse .navbar-nav>.open>a:hover,
.navbar-inverse .navbar-nav>.open>a:focus {
    background-color: #090909;
    color: #fff
}

@media(max-width:767px) {
    .navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header {
        border-color: #090909
    }

    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
        background-color: #090909
    }

    .navbar-inverse .navbar-nav .open .dropdown-menu>li>a {
        color: #9d9d9d
    }

    .navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,
    .navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus {
        color: #fff;
        background-color: transparent
    }

    .navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,
    .navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,
    .navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus {
        color: #fff;
        background-color: #090909
    }

    .navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,
    .navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,
    .navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus {
        color: #444;
        background-color: transparent
    }
}

.navbar-inverse .navbar-link {
    color: #9d9d9d
}

.navbar-inverse .navbar-link:hover {
    color: #fff
}

.navbar-inverse .btn-link {
    color: #9d9d9d
}

.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
    color: #fff
}

.navbar-inverse .btn-link[disabled]:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:hover,
fieldset[disabled] .navbar-inverse .btn-link:focus {
    color: #444
}

.breadcrumb {
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px
}

.breadcrumb>li {
    display: inline-block
}

.breadcrumb>li+li:before {
    content: "/ ";
    padding: 0 5px;
    color: #ccc
}

.breadcrumb>.active {
    color: #777
}

.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px
}

.pagination>li {
    display: inline
}

.pagination>li>a,
.pagination>li>span {
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.42857;
    text-decoration: none;
    color: #337ab7;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px
}

.pagination>li:first-child>a,
.pagination>li:first-child>span {
    margin-left: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px
}

.pagination>li:last-child>a,
.pagination>li:last-child>span {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px
}

.pagination>li>a:hover,
.pagination>li>a:focus,
.pagination>li>span:hover,
.pagination>li>span:focus {
    z-index: 3;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd
}

.pagination>.active>a,
.pagination>.active>a:hover,
.pagination>.active>a:focus,
.pagination>.active>span,
.pagination>.active>span:hover,
.pagination>.active>span:focus {
    z-index: 2;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
    cursor: default
}

.pagination>.disabled>span,
.pagination>.disabled>span:hover,
.pagination>.disabled>span:focus,
.pagination>.disabled>a,
.pagination>.disabled>a:hover,
.pagination>.disabled>a:focus {
    color: #777;
    background-color: #fff;
    border-color: #ddd;
    cursor: not-allowed
}

.pagination-lg>li>a,
.pagination-lg>li>span {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33333
}

.pagination-lg>li:first-child>a,
.pagination-lg>li:first-child>span {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px
}

.pagination-lg>li:last-child>a,
.pagination-lg>li:last-child>span {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px
}

.pagination-sm>li>a,
.pagination-sm>li>span {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5
}

.pagination-sm>li:first-child>a,
.pagination-sm>li:first-child>span {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px
}

.pagination-sm>li:last-child>a,
.pagination-sm>li:last-child>span {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px
}

.pager {
    padding-left: 0;
    margin: 20px 0;
    list-style: none;
    text-align: center
}

.pager:before,
.pager:after {
    content: " ";
    display: table
}

.pager:after {
    clear: both
}

.pager li {
    display: inline
}

.pager li>a,
.pager li>span {
    display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px
}

.pager li>a:hover,
.pager li>a:focus {
    text-decoration: none;
    background-color: #eee
}

.pager .next>a,
.pager .next>span {
    float: right
}

.pager .previous>a,
.pager .previous>span {
    float: left
}

.pager .disabled>a,
.pager .disabled>a:hover,
.pager .disabled>a:focus,
.pager .disabled>span {
    color: #777;
    background-color: #fff;
    cursor: not-allowed
}

.label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em
}

.label:empty {
    display: none
}

.btn .label {
    position: relative;
    top: -1px
}

a.label:hover,
a.label:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer
}

.label-default {
    background-color: #777
}

.label-default[href]:hover,
.label-default[href]:focus {
    background-color: #5e5e5e
}

.label-primary {
    background-color: #337ab7
}

.label-primary[href]:hover,
.label-primary[href]:focus {
    background-color: #286090
}

.label-success {
    background-color: #5cb85c
}

.label-success[href]:hover,
.label-success[href]:focus {
    background-color: #449d44
}

.label-info {
    background-color: #5bc0de
}

.label-info[href]:hover,
.label-info[href]:focus {
    background-color: #31b0d5
}

.label-warning {
    background-color: #f0ad4e
}

.label-warning[href]:hover,
.label-warning[href]:focus {
    background-color: #ec971f
}

.label-danger {
    background-color: #d9534f
}

.label-danger[href]:hover,
.label-danger[href]:focus {
    background-color: #c9302c
}

.badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
    background-color: #777;
    border-radius: 10px
}

.badge:empty {
    display: none
}

.btn .badge {
    position: relative;
    top: -1px
}

.btn-xs .badge,
.btn-group-xs>.btn .badge,
.btn-group-xs>.btn .badge {
    top: 0;
    padding: 1px 5px
}

.list-group-item.active>.badge,
.nav-pills>.active>a>.badge {
    color: #337ab7;
    background-color: #fff
}

.list-group-item>.badge {
    float: right
}

.list-group-item>.badge+.badge {
    margin-right: 5px
}

.nav-pills>li>a>.badge {
    margin-left: 3px
}

a.badge:hover,
a.badge:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer
}

.jumbotron {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    color: inherit;
    background-color: #eee
}

.jumbotron h1,
.jumbotron .h1 {
    color: inherit
}

.jumbotron p {
    margin-bottom: 15px;
    font-size: 21px;
    font-weight: 200
}

.jumbotron>hr {
    border-top-color: #d5d5d5
}

.container .jumbotron,
.container-fluid .jumbotron {
    border-radius: 6px
}

.jumbotron .container {
    max-width: 100%
}

@media screen and (min-width:768px) {
    .jumbotron {
        padding-top: 48px;
        padding-bottom: 48px
    }

    .container .jumbotron,
    .container-fluid .jumbotron {
        padding-left: 60px;
        padding-right: 60px
    }

    .jumbotron h1,
    .jumbotron .h1 {
        font-size: 63px
    }
}

.thumbnail {
    display: block;
    padding: 4px;
    margin-bottom: 20px;
    line-height: 1.42857;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: border .2s ease-in-out;
    -o-transition: border .2s ease-in-out;
    transition: border .2s ease-in-out
}

.thumbnail>img,
.thumbnail a>img {
    display: block;
    max-width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto
}

.thumbnail .caption {
    padding: 9px;
    color: #333
}

a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
    border-color: #337ab7
}

.alert,
.portlet-msg-alert,
.portlet-msg-error,
.portlet-msg-help,
.portlet-msg-info,
.portlet-msg-progress,
.portlet-msg-success {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px
}

.alert h4,
.portlet-msg-alert h4,
.portlet-msg-error h4,
.portlet-msg-help h4,
.portlet-msg-info h4,
.portlet-msg-progress h4,
.portlet-msg-success h4 {
    margin-top: 0;
    color: inherit
}

.alert .alert-link,
.portlet-msg-alert .alert-link,
.portlet-msg-error .alert-link,
.portlet-msg-help .alert-link,
.portlet-msg-info .alert-link,
.portlet-msg-progress .alert-link,
.portlet-msg-success .alert-link {
    font-weight: bold
}

.alert>p,
.portlet-msg-alert>p,
.portlet-msg-error>p,
.portlet-msg-help>p,
.portlet-msg-info>p,
.portlet-msg-progress>p,
.portlet-msg-success>p,
.alert>ul,
.portlet-msg-alert>ul,
.portlet-msg-error>ul,
.portlet-msg-help>ul,
.portlet-msg-info>ul,
.portlet-msg-progress>ul,
.portlet-msg-success>ul {
    margin-bottom: 0
}

.alert>p+p,
.portlet-msg-alert>p+p,
.portlet-msg-error>p+p,
.portlet-msg-help>p+p,
.portlet-msg-info>p+p,
.portlet-msg-progress>p+p,
.portlet-msg-success>p+p {
    margin-top: 5px
}

.alert-dismissable,
.alert-dismissible {
    padding-right: 35px
}

.alert-dismissable .close,
.alert-dismissable .modal-primary-action-button,
.alert-dismissible .close,
.alert-dismissible .modal-primary-action-button {
    position: relative;
    top: -2px;
    right: -21px;
    color: inherit
}

.alert-success,
.portlet-msg-success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #3c763d
}

.alert-success hr,
.portlet-msg-success hr {
    border-top-color: #c9e2b3
}

.alert-success .alert-link,
.portlet-msg-success .alert-link {
    color: #2b542c
}

.alert-info,
.portlet-msg-help,
.portlet-msg-info,
.portlet-msg-progress {
    background-color: #d9edf7;
    border-color: #bce8f1;
    color: #31708f
}

.alert-info hr,
.portlet-msg-help hr,
.portlet-msg-info hr,
.portlet-msg-progress hr {
    border-top-color: #a6e1ec
}

.alert-info .alert-link,
.portlet-msg-help .alert-link,
.portlet-msg-info .alert-link,
.portlet-msg-progress .alert-link {
    color: #245269
}

.alert-warning,
.portlet-msg-alert {
    background-color: #fcf8e3;
    border-color: #faebcc;
    color: #8a6d3b
}

.alert-warning hr,
.portlet-msg-alert hr {
    border-top-color: #f7e1b5
}

.alert-warning .alert-link,
.portlet-msg-alert .alert-link {
    color: #66512c
}

.alert-danger,
.portlet-msg-error {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442
}

.alert-danger hr,
.portlet-msg-error hr {
    border-top-color: #e4b9c0
}

.alert-danger .alert-link,
.portlet-msg-error .alert-link {
    color: #843534
}

@-webkit-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

@keyframes progress-bar-stripes {
    from {
        background-position: 40px 0
    }

    to {
        background-position: 0 0
    }
}

.progress {
    overflow: hidden;
    height: 20px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1)
}

.progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background-color: #337ab7;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease
}

.progress-striped .progress-bar,
.progress-bar-striped {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-size: 40px 40px
}

.progress.active .progress-bar,
.progress-bar.active {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -o-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite
}

.progress-bar-success {
    background-color: #5cb85c
}

.progress-striped .progress-bar-success {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)
}

.progress-bar-info {
    background-color: #5bc0de
}

.progress-striped .progress-bar-info {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)
}

.progress-bar-warning {
    background-color: #f0ad4e
}

.progress-striped .progress-bar-warning {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)
}

.progress-bar-danger {
    background-color: #d9534f
}

.progress-striped .progress-bar-danger {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)
}

.media {
    margin-top: 15px
}

.media:first-child {
    margin-top: 0
}

.media,
.media-body {
    zoom: 1;
    overflow: hidden
}

.media-body {
    width: 10000px
}

.media-object {
    display: block
}

.media-object.img-thumbnail {
    max-width: none
}

.media-right,
.media>.pull-right {
    padding-left: 10px
}

.media-left,
.media>.pull-left {
    padding-right: 10px
}

.media-left,
.media-right,
.media-body {
    display: table-cell;
    vertical-align: top
}

.media-middle {
    vertical-align: middle
}

.media-bottom {
    vertical-align: bottom
}

.media-heading {
    margin-top: 0;
    margin-bottom: 5px
}

.media-list {
    padding-left: 0;
    list-style: none
}

.list-group {
    margin-bottom: 20px;
    padding-left: 0
}

.list-group-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd
}

.list-group-item:first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px
}

.list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px
}

a.list-group-item,
button.list-group-item {
    color: #555
}

a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
    color: #333
}

a.list-group-item:hover,
a.list-group-item:focus,
button.list-group-item:hover,
button.list-group-item:focus {
    text-decoration: none;
    color: #555;
    background-color: #f5f5f5
}

button.list-group-item {
    width: 100%;
    text-align: left
}

.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
    background-color: #eee;
    color: #777;
    cursor: not-allowed
}

.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
    color: inherit
}

.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
    color: #777
}

.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
    z-index: 2;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7
}

.list-group-item.active .list-group-item-heading,
.list-group-item.active .list-group-item-heading>small,
.list-group-item.active .list-group-item-heading>.small,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading>small,
.list-group-item.active:hover .list-group-item-heading>.small,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading>small,
.list-group-item.active:focus .list-group-item-heading>.small {
    color: inherit
}

.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
    color: #c7ddef
}

.list-group-item-success {
    color: #3c763d;
    background-color: #dff0d8
}

a.list-group-item-success,
button.list-group-item-success {
    color: #3c763d
}

a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
    color: inherit
}

a.list-group-item-success:hover,
a.list-group-item-success:focus,
button.list-group-item-success:hover,
button.list-group-item-success:focus {
    color: #3c763d;
    background-color: #d0e9c6
}

a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus,
button.list-group-item-success.active,
button.list-group-item-success.active:hover,
button.list-group-item-success.active:focus {
    color: #fff;
    background-color: #3c763d;
    border-color: #3c763d
}

.list-group-item-info {
    color: #31708f;
    background-color: #d9edf7
}

a.list-group-item-info,
button.list-group-item-info {
    color: #31708f
}

a.list-group-item-info .list-group-item-heading,
button.list-group-item-info .list-group-item-heading {
    color: inherit
}

a.list-group-item-info:hover,
a.list-group-item-info:focus,
button.list-group-item-info:hover,
button.list-group-item-info:focus {
    color: #31708f;
    background-color: #c4e3f3
}

a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus,
button.list-group-item-info.active,
button.list-group-item-info.active:hover,
button.list-group-item-info.active:focus {
    color: #fff;
    background-color: #31708f;
    border-color: #31708f
}

.list-group-item-warning {
    color: #8a6d3b;
    background-color: #fcf8e3
}

a.list-group-item-warning,
button.list-group-item-warning {
    color: #8a6d3b
}

a.list-group-item-warning .list-group-item-heading,
button.list-group-item-warning .list-group-item-heading {
    color: inherit
}

a.list-group-item-warning:hover,
a.list-group-item-warning:focus,
button.list-group-item-warning:hover,
button.list-group-item-warning:focus {
    color: #8a6d3b;
    background-color: #faf2cc
}

a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus,
button.list-group-item-warning.active,
button.list-group-item-warning.active:hover,
button.list-group-item-warning.active:focus {
    color: #fff;
    background-color: #8a6d3b;
    border-color: #8a6d3b
}

.list-group-item-danger {
    color: #a94442;
    background-color: #f2dede
}

a.list-group-item-danger,
button.list-group-item-danger {
    color: #a94442
}

a.list-group-item-danger .list-group-item-heading,
button.list-group-item-danger .list-group-item-heading {
    color: inherit
}

a.list-group-item-danger:hover,
a.list-group-item-danger:focus,
button.list-group-item-danger:hover,
button.list-group-item-danger:focus {
    color: #a94442;
    background-color: #ebcccc
}

a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus,
button.list-group-item-danger.active,
button.list-group-item-danger.active:hover,
button.list-group-item-danger.active:focus {
    color: #fff;
    background-color: #a94442;
    border-color: #a94442
}

.list-group-item-heading {
    margin-top: 0;
    margin-bottom: 5px
}

.list-group-item-text {
    margin-bottom: 0;
    line-height: 1.3
}

.panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05)
}

.panel-body {
    padding: 15px
}

.panel-body:before,
.panel-body:after {
    content: " ";
    display: table
}

.panel-body:after {
    clear: both
}

.panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px
}

.panel-heading>.dropdown .dropdown-toggle {
    color: inherit
}

.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit
}

.panel-title>a,
.panel-title>small,
.panel-title>.small,
.panel-title>small>a,
.panel-title>.small>a {
    color: inherit
}

.panel-footer {
    padding: 10px 15px;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px
}

.panel>.list-group,
.panel>.panel-collapse>.list-group {
    margin-bottom: 0
}

.panel>.list-group .list-group-item,
.panel>.panel-collapse>.list-group .list-group-item {
    border-width: 1px 0;
    border-radius: 0
}

.panel>.list-group:first-child .list-group-item:first-child,
.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child {
    border-top: 0;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px
}

.panel>.list-group:last-child .list-group-item:last-child,
.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child {
    border-bottom: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px
}

.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child {
    border-top-right-radius: 0;
    border-top-left-radius: 0
}

.panel-heading+.list-group .list-group-item:first-child {
    border-top-width: 0
}

.list-group+.panel-footer {
    border-top-width: 0
}

.panel>.table,
.panel>.table-responsive>.table,
.panel>.panel-collapse>.table {
    margin-bottom: 0
}

.panel>.table caption,
.panel>.table-responsive>.table caption,
.panel>.panel-collapse>.table caption {
    padding-left: 15px;
    padding-right: 15px
}

.panel>.table:first-child,
.panel>.table-responsive:first-child>.table:first-child {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px
}

.panel>.table:first-child>thead:first-child>tr:first-child,
.panel>.table:first-child>tbody:first-child>tr:first-child,
.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,
.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px
}

.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,
.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,
.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,
.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,
.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,
.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,
.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,
.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child {
    border-top-left-radius: 3px
}

.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,
.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,
.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,
.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,
.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,
.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,
.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,
.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child {
    border-top-right-radius: 3px
}

.panel>.table:last-child,
.panel>.table-responsive:last-child>.table:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px
}

.panel>.table:last-child>tbody:last-child>tr:last-child,
.panel>.table:last-child>tfoot:last-child>tr:last-child,
.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,
.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px
}

.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,
.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,
.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,
.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,
.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,
.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,
.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,
.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child {
    border-bottom-left-radius: 3px
}

.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,
.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,
.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,
.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,
.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,
.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,
.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,
.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child {
    border-bottom-right-radius: 3px
}

.panel>.panel-body+.table,
.panel>.panel-body+.table-responsive,
.panel>.table+.panel-body,
.panel>.table-responsive+.panel-body {
    border-top: 1px solid #ddd
}

.panel>.table>tbody:first-child>tr:first-child th,
.panel>.table>tbody:first-child>tr:first-child td {
    border-top: 0
}

.panel>.table-bordered,
.panel>.table-responsive>.table-bordered {
    border: 0
}

.panel>.table-bordered>thead>tr>th:first-child,
.panel>.table-bordered>thead>tr>td:first-child,
.panel>.table-bordered>tbody>tr>th:first-child,
.panel>.table-bordered>tbody>tr>td:first-child,
.panel>.table-bordered>tfoot>tr>th:first-child,
.panel>.table-bordered>tfoot>tr>td:first-child,
.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,
.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,
.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,
.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,
.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,
.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child {
    border-left: 0
}

.panel>.table-bordered>thead>tr>th:last-child,
.panel>.table-bordered>thead>tr>td:last-child,
.panel>.table-bordered>tbody>tr>th:last-child,
.panel>.table-bordered>tbody>tr>td:last-child,
.panel>.table-bordered>tfoot>tr>th:last-child,
.panel>.table-bordered>tfoot>tr>td:last-child,
.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,
.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,
.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,
.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,
.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,
.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child {
    border-right: 0
}

.panel>.table-bordered>thead>tr:first-child>td,
.panel>.table-bordered>thead>tr:first-child>th,
.panel>.table-bordered>tbody>tr:first-child>td,
.panel>.table-bordered>tbody>tr:first-child>th,
.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,
.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,
.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,
.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th {
    border-bottom: 0
}

.panel>.table-bordered>tbody>tr:last-child>td,
.panel>.table-bordered>tbody>tr:last-child>th,
.panel>.table-bordered>tfoot>tr:last-child>td,
.panel>.table-bordered>tfoot>tr:last-child>th,
.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,
.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,
.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,
.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th {
    border-bottom: 0
}

.panel>.table-responsive {
    border: 0;
    margin-bottom: 0
}

.panel-group {
    margin-bottom: 20px
}

.panel-group .panel {
    margin-bottom: 0;
    border-radius: 4px
}

.panel-group .panel+.panel {
    margin-top: 5px
}

.panel-group .panel-heading {
    border-bottom: 0
}

.panel-group .panel-heading+.panel-collapse>.panel-body,
.panel-group .panel-heading+.panel-collapse>.list-group {
    border-top: 1px solid #ddd
}

.panel-group .panel-footer {
    border-top: 0
}

.panel-group .panel-footer+.panel-collapse .panel-body {
    border-bottom: 1px solid #ddd
}

.panel-default {
    border-color: #ddd
}

.panel-default>.panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd
}

.panel-default>.panel-heading+.panel-collapse>.panel-body {
    border-top-color: #ddd
}

.panel-default>.panel-heading .badge {
    color: #f5f5f5;
    background-color: #333
}

.panel-default>.panel-footer+.panel-collapse>.panel-body {
    border-bottom-color: #ddd
}

.panel-primary {
    border-color: #337ab7
}

.panel-primary>.panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7
}

.panel-primary>.panel-heading+.panel-collapse>.panel-body {
    border-top-color: #337ab7
}

.panel-primary>.panel-heading .badge {
    color: #337ab7;
    background-color: #fff
}

.panel-primary>.panel-footer+.panel-collapse>.panel-body {
    border-bottom-color: #337ab7
}

.panel-success {
    border-color: #d6e9c6
}

.panel-success>.panel-heading {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6
}

.panel-success>.panel-heading+.panel-collapse>.panel-body {
    border-top-color: #d6e9c6
}

.panel-success>.panel-heading .badge {
    color: #dff0d8;
    background-color: #3c763d
}

.panel-success>.panel-footer+.panel-collapse>.panel-body {
    border-bottom-color: #d6e9c6
}

.panel-info {
    border-color: #bce8f1
}

.panel-info>.panel-heading {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1
}

.panel-info>.panel-heading+.panel-collapse>.panel-body {
    border-top-color: #bce8f1
}

.panel-info>.panel-heading .badge {
    color: #d9edf7;
    background-color: #31708f
}

.panel-info>.panel-footer+.panel-collapse>.panel-body {
    border-bottom-color: #bce8f1
}

.panel-warning {
    border-color: #faebcc
}

.panel-warning>.panel-heading {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc
}

.panel-warning>.panel-heading+.panel-collapse>.panel-body {
    border-top-color: #faebcc
}

.panel-warning>.panel-heading .badge {
    color: #fcf8e3;
    background-color: #8a6d3b
}

.panel-warning>.panel-footer+.panel-collapse>.panel-body {
    border-bottom-color: #faebcc
}

.panel-danger {
    border-color: #ebccd1
}

.panel-danger>.panel-heading {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1
}

.panel-danger>.panel-heading+.panel-collapse>.panel-body {
    border-top-color: #ebccd1
}

.panel-danger>.panel-heading .badge {
    color: #f2dede;
    background-color: #a94442
}

.panel-danger>.panel-footer+.panel-collapse>.panel-body {
    border-bottom-color: #ebccd1
}

.embed-responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border: 0
}

.embed-responsive-16by9 {
    padding-bottom: 56.25%
}

.embed-responsive-4by3 {
    padding-bottom: 75%
}

.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05)
}

.well blockquote {
    border-color: #ddd;
    border-color: rgba(0, 0, 0, 0.15)
}

.well-lg {
    padding: 24px;
    border-radius: 6px
}

.well-sm {
    padding: 9px;
    border-radius: 3px
}

.close,
.modal-primary-action-button {
    float: right;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .2;
    filter: alpha(opacity=20)
}

.close:hover,
.modal-primary-action-button:hover,
.close:focus,
.modal-primary-action-button:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: .5;
    filter: alpha(opacity=50)
}

button.close,
button.modal-primary-action-button {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance: none
}

.modal-open {
    overflow: hidden
}

.modal {
    display: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    outline: 0
}

.modal.fade .modal-dialog {
    -webkit-transform: translate(0, -25%);
    -ms-transform: translate(0, -25%);
    -o-transform: translate(0, -25%);
    transform: translate(0, -25%);
    -webkit-transition: -webkit-transform .3s ease-out;
    -moz-transition: -moz-transform .3s ease-out;
    -o-transition: -o-transform .3s ease-out;
    transition: transform .3s ease-out
}

.modal.in .modal-dialog {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0)
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px
}

.modal-content {
    position: relative;
    background-color: #fff;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
    outline: 0
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000
}

.modal-backdrop.fade {
    opacity: 0;
    filter: alpha(opacity=0)
}

.modal-backdrop.in {
    opacity: .5;
    filter: alpha(opacity=50)
}

.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    min-height: 16.42857px
}

.modal-header .close,
.modal-header .modal-primary-action-button {
    margin-top: -2px
}

.modal-title {
    margin: 0;
    line-height: 1.42857
}

.modal-body {
    position: relative;
    padding: 15px
}

.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5
}

.modal-footer:before,
.modal-footer:after {
    content: " ";
    display: table
}

.modal-footer:after {
    clear: both
}

.modal-footer .btn+.btn {
    margin-left: 5px;
    margin-bottom: 0
}

.modal-footer .btn-group .btn+.btn {
    margin-left: -1px
}

.modal-footer .btn-block+.btn-block {
    margin-left: 0
}

.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}

@media(min-width:768px) {
    .modal-dialog {
        width: 600px;
        margin: 30px auto
    }

    .modal-content {
        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5)
    }

    .modal-sm {
        width: 300px
    }
}

@media(min-width:992px) {
    .modal-lg {
        width: 900px
    }
}

.tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.42857;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    font-size: 12px;
    opacity: 0;
    filter: alpha(opacity=0)
}

.tooltip.in {
    opacity: .9;
    filter: alpha(opacity=90)
}

.tooltip.top {
    margin-top: -3px;
    padding: 5px 0
}

.tooltip.right {
    margin-left: 3px;
    padding: 0 5px
}

.tooltip.bottom {
    margin-top: 3px;
    padding: 5px 0
}

.tooltip.left {
    margin-left: -3px;
    padding: 0 5px
}

.tooltip-inner {
    max-width: 200px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 4px
}

.tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
}

.tooltip.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000
}

.tooltip.top-left .tooltip-arrow {
    bottom: 0;
    right: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000
}

.tooltip.top-right .tooltip-arrow {
    bottom: 0;
    left: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000
}

.tooltip.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #000
}

.tooltip.left .tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #000
}

.tooltip.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000
}

.tooltip.bottom-left .tooltip-arrow {
    top: 0;
    right: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000
}

.tooltip.bottom-right .tooltip-arrow {
    top: 0;
    left: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000
}

.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: none;
    max-width: 276px;
    padding: 1px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.42857;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    font-size: 14px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2)
}

.popover.top {
    margin-top: -10px
}

.popover.right {
    margin-left: 10px
}

.popover.bottom {
    margin-top: 10px
}

.popover.left {
    margin-left: -10px
}

.popover-title {
    margin: 0;
    padding: 8px 14px;
    font-size: 14px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0
}

.popover-content {
    padding: 9px 14px
}

.popover>.arrow,
.popover>.arrow:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
}

.popover>.arrow {
    border-width: 11px
}

.popover>.arrow:after {
    border-width: 10px;
    content: ""
}

.popover.top>.arrow {
    left: 50%;
    margin-left: -11px;
    border-bottom-width: 0;
    border-top-color: #999;
    border-top-color: rgba(0, 0, 0, 0.25);
    bottom: -11px
}

.popover.top>.arrow:after {
    content: " ";
    bottom: 1px;
    margin-left: -10px;
    border-bottom-width: 0;
    border-top-color: #fff
}

.popover.right>.arrow {
    top: 50%;
    left: -11px;
    margin-top: -11px;
    border-left-width: 0;
    border-right-color: #999;
    border-right-color: rgba(0, 0, 0, 0.25)
}

.popover.right>.arrow:after {
    content: " ";
    left: 1px;
    bottom: -10px;
    border-left-width: 0;
    border-right-color: #fff
}

.popover.bottom>.arrow {
    left: 50%;
    margin-left: -11px;
    border-top-width: 0;
    border-bottom-color: #999;
    border-bottom-color: rgba(0, 0, 0, 0.25);
    top: -11px
}

.popover.bottom>.arrow:after {
    content: " ";
    top: 1px;
    margin-left: -10px;
    border-top-width: 0;
    border-bottom-color: #fff
}

.popover.left>.arrow {
    top: 50%;
    right: -11px;
    margin-top: -11px;
    border-right-width: 0;
    border-left-color: #999;
    border-left-color: rgba(0, 0, 0, 0.25)
}

.popover.left>.arrow:after {
    content: " ";
    right: 1px;
    border-right-width: 0;
    border-left-color: #fff;
    bottom: -10px
}

.carousel {
    position: relative
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%
}

.carousel-inner>.item {
    display: none;
    position: relative;
    -webkit-transition: .6s ease-in-out left;
    -o-transition: .6s ease-in-out left;
    transition: .6s ease-in-out left
}

.carousel-inner>.item>img,
.carousel-inner>.item>a>img {
    display: block;
    max-width: 100%;
    height: auto;
    line-height: 1
}

@media all and (transform-3d),
(-webkit-transform-3d) {
    .carousel-inner>.item {
        -webkit-transition: -webkit-transform .6s ease-in-out;
        -moz-transition: -moz-transform .6s ease-in-out;
        -o-transition: -o-transform .6s ease-in-out;
        transition: transform .6s ease-in-out;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        -moz-perspective: 1000px;
        perspective: 1000px
    }

    .carousel-inner>.item.next,
    .carousel-inner>.item.active.right {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        left: 0
    }

    .carousel-inner>.item.prev,
    .carousel-inner>.item.active.left {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        left: 0
    }

    .carousel-inner>.item.next.left,
    .carousel-inner>.item.prev.right,
    .carousel-inner>.item.active {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        left: 0
    }
}

.carousel-inner>.active,
.carousel-inner>.next,
.carousel-inner>.prev {
    display: block
}

.carousel-inner>.active {
    left: 0
}

.carousel-inner>.next,
.carousel-inner>.prev {
    position: absolute;
    top: 0;
    width: 100%
}

.carousel-inner>.next {
    left: 100%
}

.carousel-inner>.prev {
    left: -100%
}

.carousel-inner>.next.left,
.carousel-inner>.prev.right {
    left: 0
}

.carousel-inner>.active.left {
    left: -100%
}

.carousel-inner>.active.right {
    left: 100%
}

.carousel-control {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 15%;
    opacity: .5;
    filter: alpha(opacity=50);
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6)
}

.carousel-control.left {
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)
}

.carousel-control.right {
    left: auto;
    right: 0;
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)
}

.carousel-control:hover,
.carousel-control:focus {
    outline: 0;
    color: #fff;
    text-decoration: none;
    opacity: .9;
    filter: alpha(opacity=90)
}

.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
    position: absolute;
    top: 50%;
    margin-top: -10px;
    z-index: 5;
    display: inline-block
}

.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
    left: 50%;
    margin-left: -10px
}

.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
    right: 50%;
    margin-right: -10px
}

.carousel-control .icon-prev,
.carousel-control .icon-next {
    width: 20px;
    height: 20px;
    line-height: 1;
    font-family: serif
}

.carousel-control .icon-prev:before {
    content: '\2039'
}

.carousel-control .icon-next:before {
    content: '\203a'
}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 60%;
    margin-left: -30%;
    padding-left: 0;
    list-style: none;
    text-align: center
}

.carousel-indicators li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    background-color: #000 \9;
    background-color: transparent
}

.carousel-indicators .active {
    margin: 0;
    width: 12px;
    height: 12px;
    background-color: #fff
}

.carousel-caption {
    position: absolute;
    left: 15%;
    right: 15%;
    bottom: 20px;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6)
}

.carousel-caption .btn {
    text-shadow: none
}

@media screen and (min-width:768px) {

    .carousel-control .glyphicon-chevron-left,
    .carousel-control .glyphicon-chevron-right,
    .carousel-control .icon-prev,
    .carousel-control .icon-next {
        width: 30px;
        height: 30px;
        margin-top: -15px;
        font-size: 30px
    }

    .carousel-control .glyphicon-chevron-left,
    .carousel-control .icon-prev {
        margin-left: -15px
    }

    .carousel-control .glyphicon-chevron-right,
    .carousel-control .icon-next {
        margin-right: -15px
    }

    .carousel-caption {
        left: 20%;
        right: 20%;
        padding-bottom: 30px
    }

    .carousel-indicators {
        bottom: 20px
    }
}

.clearfix:before,
.clearfix:after {
    content: " ";
    display: table
}

.clearfix:after {
    clear: both
}

.center-block {
    display: block;
    margin-left: auto;
    margin-right: auto
}

.pull-right {
    float: right !important
}

.pull-left {
    float: left !important
}

.hide {
    display: none !important
}

.show {
    display: block !important
}

.invisible {
    visibility: hidden
}

.text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0
}

.hidden {
    display: none !important
}

.affix {
    position: fixed
}

@-ms-viewport {
    width: device-width
}

.visible-xs {
    display: none !important
}

.visible-sm {
    display: none !important
}

.visible-md {
    display: none !important
}

.visible-lg {
    display: none !important
}

.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
    display: none !important
}

@media(max-width:767px) {
    .visible-xs {
        display: block !important
    }

    table.visible-xs {
        display: table !important
    }

    tr.visible-xs {
        display: table-row !important
    }

    th.visible-xs,
    td.visible-xs {
        display: table-cell !important
    }
}

@media(max-width:767px) {
    .visible-xs-block {
        display: block !important
    }
}

@media(max-width:767px) {
    .visible-xs-inline {
        display: inline !important
    }
}

@media(max-width:767px) {
    .visible-xs-inline-block {
        display: inline-block !important
    }
}

@media(min-width:768px) and (max-width:991px) {
    .visible-sm {
        display: block !important
    }

    table.visible-sm {
        display: table !important
    }

    tr.visible-sm {
        display: table-row !important
    }

    th.visible-sm,
    td.visible-sm {
        display: table-cell !important
    }
}

@media(min-width:768px) and (max-width:991px) {
    .visible-sm-block {
        display: block !important
    }
}

@media(min-width:768px) and (max-width:991px) {
    .visible-sm-inline {
        display: inline !important
    }
}

@media(min-width:768px) and (max-width:991px) {
    .visible-sm-inline-block {
        display: inline-block !important
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .visible-md {
        display: block !important
    }

    table.visible-md {
        display: table !important
    }

    tr.visible-md {
        display: table-row !important
    }

    th.visible-md,
    td.visible-md {
        display: table-cell !important
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .visible-md-block {
        display: block !important
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .visible-md-inline {
        display: inline !important
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .visible-md-inline-block {
        display: inline-block !important
    }
}

@media(min-width:1200px) {
    .visible-lg {
        display: block !important
    }

    table.visible-lg {
        display: table !important
    }

    tr.visible-lg {
        display: table-row !important
    }

    th.visible-lg,
    td.visible-lg {
        display: table-cell !important
    }
}

@media(min-width:1200px) {
    .visible-lg-block {
        display: block !important
    }
}

@media(min-width:1200px) {
    .visible-lg-inline {
        display: inline !important
    }
}

@media(min-width:1200px) {
    .visible-lg-inline-block {
        display: inline-block !important
    }
}

@media(max-width:767px) {
    .hidden-xs {
        display: none !important
    }
}

@media(min-width:768px) and (max-width:991px) {
    .hidden-sm {
        display: none !important
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .hidden-md {
        display: none !important
    }
}

@media(min-width:1200px) {
    .hidden-lg {
        display: none !important
    }
}

.visible-print {
    display: none !important
}

@media print {
    .visible-print {
        display: block !important
    }

    table.visible-print {
        display: table !important
    }

    tr.visible-print {
        display: table-row !important
    }

    th.visible-print,
    td.visible-print {
        display: table-cell !important
    }
}

.visible-print-block {
    display: none !important
}

@media print {
    .visible-print-block {
        display: block !important
    }
}

.visible-print-inline {
    display: none !important
}

@media print {
    .visible-print-inline {
        display: inline !important
    }
}

.visible-print-inline-block {
    display: none !important
}

@media print {
    .visible-print-inline-block {
        display: inline-block !important
    }
}

@media print {
    .hidden-print {
        display: none !important
    }
}

.alert-notification {
    width: 100%
}

@media(min-width:768px) {
    .alert-notification {
        max-width: 280px
    }
}

.aspect-ratio {
    display: block;
    overflow: hidden;
    position: relative;
    padding-bottom: 100%
}

.aspect-ratio img {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%
}

.aspect-ratio.aspect-ratio-vertical img {
    height: 100%;
    width: auto
}

.aspect-ratio-center img {
    left: 50%;
    right: auto;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.aspect-ratio-middle img {
    bottom: auto;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.aspect-ratio-right img {
    left: auto;
    right: 0
}

.aspect-ratio-top img {
    bottom: auto;
    top: 0
}

.aspect-ratio-3-to-2 {
    padding-bottom: 66.66667%
}

.aspect-ratio-4-to-3 {
    padding-bottom: 75%
}

.aspect-ratio-8-to-5 {
    padding-bottom: 62.5%
}

.aspect-ratio-16-to-9 {
    padding-bottom: 56.25%
}

.aspect-ratio-bg-cover {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
}

.aspect-ratio-bg-center {
    background-position: center;
    background-repeat: no-repeat
}

.badge {
    border-radius: 100px;
    font-size: 12px;
    padding-bottom: 3px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 3px
}

.badge-lg {
    font-size: 16px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px
}

.badge-sm {
    font-size: 9px;
    padding-bottom: 2px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 2px
}

.badge .lexicon-icon {
    height: 9px;
    margin-left: 2px;
    width: 9px
}

.badge-lg .lexicon-icon {
    height: 13px;
    margin-left: 4px;
    width: 13px
}

.badge-sm .lexicon-icon {
    height: 5px;
    width: 5px
}

.badge a {
    color: #fff
}

.badge a:focus,
.badge a:hover {
    color: #fff;
    text-decoration: none
}

.badge-danger {
    background-color: #d9534f
}

.badge-info {
    background-color: #5bc0de
}

.badge-primary {
    background-color: #337ab7
}

.badge-success {
    background-color: #5cb85c
}

.badge-warning {
    background-color: #f0ad4e
}

.breadcrumb {
    padding: 8px 15px 3px
}

.breadcrumb>li {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

@media(min-width:768px) {
    .breadcrumb>li {
        max-width: 300px
    }
}

.breadcrumb>li:before {
    content: '\00a0'
}

.breadcrumb>li+li:before {
    content: "/ "
}

.breadcrumb-vertical>li {
    display: block;
    max-width: none;
    word-wrap: break-word
}

.breadcrumb-vertical>li:before {
    color: #ccc
}

.breadcrumb-vertical>li:before,
.breadcrumb-vertical>li+li:before {
    content: " ";
    padding: 0
}

.btn-action,
.btn-action-secondary {
    z-index: 950
}

.btn-action,
.btn-action-secondary .btn {
    padding: 0
}

.btn-action .lexicon-icon {
    display: block;
    height: 100%;
    margin: auto
}

.btn-action-secondary {
    display: inline-block
}

.btn-action-secondary .dropdown-menu-left-side {
    margin-right: 5px
}

.btn-action-secondary .dropdown-menu-right-side {
    margin-left: 5px
}

.btn-bottom-left {
    bottom: 20px;
    left: 20px;
    position: fixed
}

.btn-bottom-right {
    bottom: 20px;
    position: fixed;
    right: 20px
}

.btn-top-left {
    left: 20px;
    position: fixed;
    top: 20px
}

.btn-top-right {
    position: fixed;
    right: 20px;
    top: 20px
}

.card,
.card-horizontal {
    background-color: #fff;
    border-color: #ccc;
    border-color: rgba(0, 0, 0, 0.15);
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    margin-bottom: 20px;
    position: relative
}

.card .card-col-content:first-child,
.card .card-col-field:first-child,
.card-horizontal .card-col-content:first-child,
.card-horizontal .card-col-field:first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px
}

.card .card-col-content:last-child,
.card .card-col-field:last-child,
.card-horizontal .card-col-content:last-child,
.card-horizontal .card-col-field:last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px
}

.card .divider,
.card-horizontal .divider {
    background-color: rgba(0, 0, 0, 0.15);
    border-width: 0;
    height: 1px;
    margin-bottom: 10px;
    margin-top: 10px
}

.card .figure,
.card-horizontal .figure {
    margin-bottom: 0;
    overflow: visible
}

.card-block {
    padding: 15px;
    word-wrap: break-word
}

.card-col-content,
.card-col-field {
    display: table-cell;
    position: relative;
    vertical-align: middle
}

.card-col-content {
    max-width: 10px;
    position: relative;
    width: auto;
    word-break: break-all \9;
    word-wrap: break-word
}

.card-col-field {
    width: 1%
}

.card-row {
    display: table;
    height: 100%;
    width: 100%
}

.card-row.card-row-padded .card-col-gutters:first-child {
    padding-left: 0
}

.card-row.card-row-padded .card-col-gutters:last-child {
    padding-right: 0
}

.card-row.card-row-padded .card-col-gutters .divider {
    margin-left: 0;
    margin-right: 0
}

.card-row .card-col-gutters {
    padding: 0 10px
}

.card-row .card-col-gutters .divider {
    margin-left: -10px;
    margin-right: -10px
}

.card-row-layout-fixed {
    table-layout: fixed
}

.card-row-layout-fixed .card-col-content {
    word-wrap: break-word
}

.card-row-layout-fixed .card-col-field {
    width: auto;
    word-wrap: break-word
}

.card-row-padded {
    padding: 15px
}

.card-row-valign-top .card-col-content,
.card-row-valign-top .card-col-field {
    vertical-align: top
}

.card-row-valign-top .clamp-container {
    top: 0
}

.card-row-valign-top .clamp-horizontal .clamp-container {
    -ms-transform: none;
    transform: none
}

.card-row-valign-bottom .card-col-content,
.card-row-valign-bottom .card-col-field {
    vertical-align: bottom
}

.card-row-valign-bottom .clamp-container {
    bottom: 0
}

.card-row-valign-bottom .clamp-horizontal .clamp-container {
    -ms-transform: none;
    transform: none
}

.card-circle {
    border-radius: 20px
}

.card-circle .card-col-content:first-child,
.card-circle .card-col-field:first-child {
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px
}

.card-circle .card-col-content:last-child,
.card-circle .card-col-field:last-child {
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px
}

.card-square {
    border-radius: 0
}

.card-square .card-col-content:first-child,
.card-square .card-col-field:first-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.card-square .card-col-content:last-child,
.card-square .card-col-field:last-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.checkbox-card,
.radio-card {
    margin-bottom: 0;
    margin-top: 0
}

.checkbox-card label,
.radio-card label {
    color: #333;
    display: inline;
    padding-left: 0
}

.checkbox-card input[type="checkbox"],
.radio-card input[type="radio"] {
    margin-left: 0;
    margin-top: 0;
    z-index: 1
}

.checkbox-bottom-left .card-horizontal .card.flex-container,
.checkbox-middle-left .card-horizontal .card.flex-container,
.checkbox-top-left .card-horizontal .card.flex-container,
.radio-bottom-left .card-horizontal .card.flex-container,
.radio-middle-left .card-horizontal .card.flex-container,
.radio-top-left .card-horizontal .card.flex-container {
    padding-left: 40px
}

.checkbox-bottom-left .card-horizontal>.card-row,
.checkbox-middle-left .card-horizontal>.card-row,
.checkbox-top-left .card-horizontal>.card-row,
.radio-bottom-left .card-horizontal>.card-row,
.radio-middle-left .card-horizontal>.card-row,
.radio-top-left .card-horizontal>.card-row {
    padding-left: 40px
}

.checkbox-bottom-right .card-horizontal .card.flex-container,
.checkbox-middle-right .card-horizontal .card.flex-container,
.checkbox-top-right .card-horizontal .card.flex-container,
.radio-bottom-right .card-horizontal .card.flex-container,
.radio-middle-right .card-horizontal .card.flex-container,
.radio-top-right .card-horizontal .card.flex-container {
    padding-right: 40px
}

.checkbox-bottom-right .card-horizontal>.card-row,
.checkbox-middle-right .card-horizontal>.card-row,
.checkbox-top-right .card-horizontal>.card-row,
.radio-bottom-right .card-horizontal>.card-row,
.radio-middle-right .card-horizontal>.card-row,
.radio-top-right .card-horizontal>.card-row {
    padding-right: 40px
}

.checkbox-bottom-left input[type="checkbox"],
.checkbox-bottom-left label>input[type="checkbox"],
.radio-bottom-left input[type="radio"],
.radio-bottom-left label>input[type="radio"] {
    bottom: 15px;
    left: 15px
}

.checkbox-bottom-right input[type="checkbox"],
.checkbox-bottom-right label>input[type="checkbox"],
.radio-bottom-right input[type="radio"],
.radio-bottom-right label>input[type="radio"] {
    bottom: 15px;
    right: 15px
}

.checkbox-middle-left input[type="checkbox"],
.checkbox-middle-left label>input[type="checkbox"],
.radio-middle-left input[type="radio"],
.radio-middle-left label>input[type="radio"] {
    left: 15px;
    margin-top: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.checkbox-middle-right input[type="checkbox"],
.checkbox-middle-right label>input[type="checkbox"],
.radio-middle-right input[type="radio"],
.radio-middle-right label>input[type="radio"] {
    margin-top: 0;
    right: 15px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.checkbox-top-left label>input[type="checkbox"],
.radio-top-left label>input[type="radio"] {
    left: 15px;
    top: 15px
}

.checkbox-top-right label>input[type="checkbox"],
.radio-top-right label>input[type="radio"] {
    right: 15px;
    top: 15px
}

.clamp-container {
    left: 8px;
    margin: -2px;
    padding: 2px;
    position: absolute;
    right: 8px
}

.clamp-horizontal .clamp-container {
    overflow: hidden;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

@media(-ms-high-contrast:active),
(-ms-high-contrast:none) {

    .clamp-all,
    .clamp-all-scroll {
        overflow: hidden
    }
}

.clamp-all .clamp-container,
.clamp-all-scroll .clamp-container {
    bottom: 0;
    overflow: hidden;
    right: 0;
    top: 0
}

@media(-ms-high-contrast:active),
(-ms-high-contrast:none) {

    .clamp-all .clamp-container,
    .clamp-all-scroll .clamp-container {
        bottom: auto
    }
}

@media(-ms-high-contrast:active),
(-ms-high-contrast:none) {
    .clamp-all-scroll {
        overflow: auto
    }
}

.clamp-all-scroll .clamp-container {
    -webkit-overflow-scrolling: touch;
    overflow: auto
}

.crop-img {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%
}

.crop-img img {
    left: 0;
    position: absolute
}

.crop-img-center img {
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.crop-img-right img {
    left: auto;
    right: 0
}

.crop-img-bottom img {
    bottom: 0;
    top: auto
}

.crop-img-middle img {
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.crop-img-center.crop-img-middle img {
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.dropdown-menu form .checkbox:hover,
.dropdown-menu form .radio:hover,
.dropdown-menu form .form-group:hover {
    background-color: #f5f5f5;
    color: #262626
}

.dropdown-menu form .checkbox.focus,
.dropdown-menu form .radio.focus,
.dropdown-menu form .form-group.focus {
    background-color: #f5f5f5;
    color: #262626
}

.dropdown-menu form .checkbox.focus label,
.dropdown-menu form .radio.focus label,
.dropdown-menu form .form-group.focus label {
    color: #262626
}

.dropdown-menu form .checkbox.active,
.dropdown-menu form .radio.active,
.dropdown-menu form .form-group.active {
    background-color: #337ab7
}

.dropdown-menu form .checkbox.active label,
.dropdown-menu form .radio.active label,
.dropdown-menu form .form-group.active label {
    color: #fff
}

.dropdown-menu form .checkbox,
.dropdown-menu form .radio {
    margin: 0
}

.dropdown-menu form .checkbox input[type='checkbox'],
.dropdown-menu form .radio input[type='radio'] {
    margin-bottom: 0;
    margin-right: 6px
}

.dropdown-menu form .checkbox label {
    display: block;
    padding: 3px 20px;
    padding-left: 40px
}

.dropdown-menu form .radio label {
    display: block;
    padding: 3px 20px;
    padding-left: 40px
}

.dropdown-menu form .form-group {
    margin-bottom: 0;
    padding: 3px 20px
}

.dropdown-menu>.active>a:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

.dropdown-toggle:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
    text-decoration: none
}

.dropdown-toggle:hover {
    text-decoration: none
}

.inline-scroller {
    height: 125px;
    list-style: none;
    margin: 0;
    overflow: auto;
    padding: 0;
    -webkit-overflow-scrolling: touch
}

.link-list {
    list-style: none;
    margin-top: 20px;
    padding-left: 0
}

.link-list:first-child {
    margin-top: 0
}

.dropdown-menu .inline-scroller li a,
.dropdown-menu .link-list li a {
    color: #333;
    display: block;
    padding: 3px 20px;
    word-wrap: break-word
}

.dropdown-menu .inline-scroller li a:focus,
.dropdown-menu .inline-scroller li a:hover,
.dropdown-menu .link-list li a:focus,
.dropdown-menu .link-list li a:hover {
    background-color: #f5f5f5;
    color: #262626;
    text-decoration: none
}

.dropdown-menu .inline-scroller>.active>a,
.dropdown-menu .inline-scroller>.active>a:focus,
.dropdown-menu .inline-scroller>.active>a:hover,
.dropdown-menu .link-list>.active>a,
.dropdown-menu .link-list>.active>a:focus,
.dropdown-menu .link-list>.active>a:hover {
    background-color: #337ab7;
    color: #fff
}

.dropdown-menu .inline-scroller>.disabled>a,
.dropdown-menu .inline-scroller>.disabled>a:hover,
.dropdown-menu .inline-scroller>.disabled>a:focus,
.dropdown-menu .link-list>.disabled>a,
.dropdown-menu .link-list>.disabled>a:hover,
.dropdown-menu .link-list>.disabled>a:focus {
    background-color: transparent;
    background-image: none;
    color: #777;
    cursor: not-allowed;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    text-decoration: none
}

.dropdown-menu .link-list .link-list-heading {
    color: #777;
    font-size: 12px;
    padding: 3px 20px
}

.dropdown-menu-center {
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.dropdown-menu-left-side {
    left: auto;
    margin: -1px 2px 0 0;
    right: 100%;
    top: 0
}

.dropdown-menu-left-side-bottom {
    bottom: 0;
    left: auto;
    margin: -1px 2px 0 0;
    right: 100%;
    top: auto
}

.dropdown-menu-left-side-middle {
    left: auto;
    margin: 0 2px 0 0;
    right: 100%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%
}

.dropdown-menu-right-side {
    left: 100%;
    margin: -1px 0 0 2px;
    top: 0
}

.dropdown-menu-right-side-bottom {
    bottom: 0;
    left: 100%;
    margin: -1px 0 0 2px;
    top: auto
}

.dropdown-menu-right-side-middle {
    left: 100%;
    margin: 0 0 0 2px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%
}

.dropdown-menu-top,
.dropup .dropdown-menu {
    bottom: 100%;
    margin-bottom: 2px;
    top: auto
}

.dropdown-menu-top-center {
    bottom: 100%;
    left: 50%;
    margin-bottom: 2px;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: auto
}

.dropdown-menu-top-right,
.dropup .dropdown-menu-right {
    bottom: 100%;
    left: auto;
    margin-bottom: 2px;
    right: 0;
    top: auto
}

.dropdown-menu-bottom {
    bottom: 0;
    top: auto
}

.btn-group-justified>.btn-group.dropdown-full .dropdown-menu {
    left: 0
}

@media(max-width:767px) {

    .dropdown-menu [class*="col-sm"],
    .dropdown-menu [class*="col-md"],
    .dropdown-menu [class*="col-lg"] {
        padding: 0
    }
}

.dropdown-full .dropdown-menu,
.dropdown-wide .dropdown-menu {
    max-width: none;
    padding: 5px 0;
    width: 100%
}

@media(min-width:768px) {

    .dropdown-full .dropdown-menu,
    .dropdown-wide .dropdown-menu {
        max-height: none;
        padding: 20px 0;
        width: 100%
    }
}

@media(min-width:992px) {
    .dropdown-wide .dropdown-menu {
        min-width: 500px
    }
}

li.dropdown-full {
    position: static
}

@media(max-width:991px) {
    li.dropdown-wide {
        position: static
    }
}

@media(max-width:767px) {
    .navbar-nav .dropdown-menu-center {
        -ms-transform: none;
        transform: none
    }
}

.navbar-right .dropdown-menu-center {
    left: 50%;
    right: auto
}

.container-fluid-1280 {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding-left: 15px;
    padding-right: 15px
}

.container-fluid-1280:before,
.container-fluid-1280:after {
    content: " ";
    display: table
}

.container-fluid-1280:after {
    clear: both
}

.lexicon-icon {
    display: inline-block;
    fill: currentColor;
    height: 16px;
    transform: translateZ(0);
    vertical-align: middle;
    width: 16px
}

.lexicon-icon-sm {
    height: 7px;
    width: 7px
}

.lexicon-icon-md {
    height: 32px;
    width: 32px
}

.lexicon-icon-lg {
    height: 128px;
    width: 128px
}

a.collapse-icon {
    padding-right: 45px
}

.collapse-icon-closed [class^="icon-"],
.collapse-icon-closed [class*=" icon-"],
.collapse-icon-closed .lexicon-icon,
.collapse-icon-open [class^="icon-"],
.collapse-icon-open [class*=" icon-"],
.collapse-icon-open .lexicon-icon {
    display: block !important;
}

.collapse-icon .collapse-icon-closed,
.collapse-icon .collapse-icon-open {
    position: absolute;
    right: 15px;
    top: 10px
}

.collapse-icon .collapse-icon-closed [class^="icon-"],
.collapse-icon .collapse-icon-closed [class*=" icon-"],
.collapse-icon .collapse-icon-open [class^="icon-"],
.collapse-icon .collapse-icon-open [class*=" icon-"] {
    margin-top: calc(((1em * 1.42857) - 1em) / 2)
}

.collapse-icon .collapse-icon-closed .lexicon-icon,
.collapse-icon .collapse-icon-open .lexicon-icon {
    margin-top: calc(((1em * 1.42857) - 16px) / 2)
}

.collapse-icon .collapse-icon-closed {
    display: none
}

.collapse-icon .collapse-icon-open {
    display: inline-block
}

.collapsed .collapse-icon-closed {
    display: inline-block
}

.collapsed .collapse-icon-open {
    display: none !important;
}

.collapse-icon-middle .collapse-icon-closed,
.collapse-icon-middle .collapse-icon-open {
    margin-top: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

a .icon-monospaced,
.icon-monospaced {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    width: 32px;
    text-align: center;
    vertical-align: middle
}

.icon-monospaced.btn {
    line-height: 32px;
    padding: 0
}

.icon-monospaced.btn:before {
    position: relative;
    top: -1px
}

.icon-monospaced.btn-xs,
.btn-group-xs>.icon-monospaced.btn,
.icon-monospaced.icon-xs {
    height: 20px;
    line-height: 20px;
    width: 20px
}

.icon-monospaced.btn-sm,
.btn-group-sm>.icon-monospaced.btn,
.icon-monospaced.icon-sm {
    height: 26px;
    line-height: 26px;
    width: 26px
}

.icon-monospaced.btn-lg,
.btn-group-lg>.icon-monospaced.btn,
.icon-monospaced.icon-lg {
    height: 40px;
    line-height: 40px;
    width: 40px
}

.icon-monospaced.icon-large {
    height: 26px;
    line-height: 26px;
    width: 26px
}

.icon-monospaced.icon-2x {
    height: 40px;
    line-height: 40px;
    width: 40px
}

.icon-monospaced.icon-3x {
    height: 48px;
    line-height: 48px;
    width: 48px
}

.icon-monospaced.icon-4x {
    height: 75px;
    line-height: 75px;
    width: 75px
}

.icon-monospaced.icon-5x {
    height: 100px;
    line-height: 100px;
    width: 100px
}

.icon-monospaced .glyphicon {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    width: 32px;
    text-align: center
}

.icon-monospaced.lexicon-icon {
    padding: 8px
}

.icon-monospaced .lexicon-icon {
    display: block;
    height: 32px;
    line-height: 32px;
    width: 32px;
    padding: 8px
}

.help-icon {
    border-radius: 100px;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    width: 32px;
    text-align: center
}

.help-icon:hover,
.help-icon:focus {
    text-decoration: none
}

.help-icon.icon-monospaced {
    vertical-align: baseline
}

.help-icon-default {
    background-color: #eee;
    color: gray
}

.help-icon-default:focus,
.help-icon-default:hover {
    color: #333
}

.input-group .form-control:focus {
    z-index: 3
}

.input-group-btn .btn:focus,
.input-group-btn .btn:hover {
    z-index: 3
}

.input-group-btn:first-child>.btn,
.input-group-btn:first-child>.btn-group {
    margin-right: -2px
}

.input-group-input {
    display: table-cell
}

.input-group-input .form-control {
    display: block
}

.input-group-default {
    display: table
}

.input-group-default .input-group-addon,
.input-group-default .input-group-btn {
    display: table-cell;
    width: 1%
}

.input-group-default .input-group-addon {
    background-color: transparent;
    border-width: 0;
    padding: 0 10px
}

.input-group-default .input-group-addon:first-child .input-group-addon-content {
    margin-left: -10px
}

.input-group-default .input-group-addon:last-child .input-group-addon-content {
    margin-right: -10px
}

.input-group-default .help-icon {
    height: 28px;
    line-height: 28px;
    width: 28px
}

.input-sm .help-icon,
.input-group-sm>.form-control .help-icon,
.input-group-sm>.input-group-addon .help-icon,
.input-group-sm>.input-group-btn>.btn .help-icon {
    height: 20px;
    line-height: 20px;
    width: 20px
}

.input-lg .help-icon,
.input-group-lg>.form-control .help-icon,
.input-group-lg>.input-group-addon .help-icon,
.input-group-lg>.input-group-btn>.btn .help-icon {
    height: 35px;
    line-height: 35px;
    width: 35px
}

.input-group-addon-content {
    display: inline-block
}

input[type="checkbox"],
input[type="radio"] {
    cursor: pointer
}

@media(max-width:768px) {
    .form-control {
        font-size: 16px
    }
}

.figure {
    margin-bottom: 20px;
    overflow: hidden;
    position: relative
}

.figcaption {
    padding: 5px 2px
}

.figcaption-bottom {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.7);
    color: #FFF;
    font-weight: 300;
    padding: 10px 15px;
    position: absolute;
    width: 100%;
    bottom: 0
}

.figcaption-full {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.7);
    color: #FFF;
    font-weight: 300;
    padding: 10px 15px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    width: 100%
}

.figcaption-top {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.7);
    color: #FFF;
    font-weight: 300;
    padding: 10px 15px;
    position: absolute;
    width: 100%;
    top: 0
}

.figure-circle {
    border-radius: 50%
}

.figure-rounded {
    border-radius: 4px
}

.figure-square {
    border-radius: 0
}

.figcaption-danger {
    background-color: #d9534f;
    background-color: rgba(217, 83, 79, 0.7);
    color: #FFF
}

.figcaption-info {
    background-color: #5bc0de;
    background-color: rgba(91, 192, 222, 0.7);
    color: #FFF
}

.figcaption-primary {
    background-color: #337ab7;
    background-color: rgba(51, 122, 183, 0.7);
    color: #FFF
}

.figcaption-success {
    background-color: #5cb85c;
    background-color: rgba(92, 184, 92, 0.7);
    color: #FFF
}

.figcaption-warning {
    background-color: #f0ad4e;
    background-color: rgba(240, 173, 78, 0.7);
    color: #FFF
}

.label {
    display: inline-block;
    font-size: 12px;
    padding-bottom: 3px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 3px
}

.label a {
    color: #fff;
    display: inline-block
}

.label a:focus,
.label a:hover {
    text-decoration: none
}

.label-lg {
    font-size: 16px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px
}

.label-sm {
    font-size: 9px;
    padding-bottom: 2px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 2px
}

.label .lexicon-icon {
    height: 9px;
    margin-left: 2px;
    width: 9px
}

.label-lg .lexicon-icon {
    height: 13px;
    margin-left: 4px;
    width: 13px
}

.label-sm .lexicon-icon {
    height: 5px;
    width: 5px
}

.list-group-heading {
    background-color: #fff;
    border: 1px solid #ddd;
    display: block;
    font-weight: 500;
    margin-bottom: -1px;
    overflow: hidden;
    padding: 10px 15px;
    position: relative;
    word-wrap: break-word
}

.list-group-heading:focus {
    z-index: 1
}

.list-group-heading:focus,
.list-group-heading:hover {
    text-decoration: none
}

.list-group-heading:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px
}

.list-group-heading:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-bottom: 0
}

a.list-group-heading,
button.list-group-heading,
.list-group-heading[data-toggle="collapse"] {
    color: #555
}

a.list-group-heading:focus,
a.list-group-heading:hover,
button.list-group-heading:focus,
button.list-group-heading:hover,
.list-group-heading[data-toggle="collapse"]:focus,
.list-group-heading[data-toggle="collapse"]:hover {
    background-color: #f5f5f5;
    color: #555
}

.list-group-item .checkbox input[type="checkbox"]:checked+.card .dropdown-toggle,
.list-group-item.active .dropdown-toggle {
    color: #fff
}

.list-group-item .checkbox input[type="checkbox"]:checked+.card .dropdown-toggle:focus,
.list-group-item.active .dropdown-toggle:focus {
    color: #fff
}

.list-group-item .checkbox input[type="checkbox"]:checked+.card .dropdown-toggle:hover,
.list-group-item.active .dropdown-toggle:hover {
    color: #fff
}

.list-group-item .checkbox input[type="checkbox"]:checked+.card .card-col-content a,
.list-group-item .checkbox input[type="checkbox"]:checked+.card .list-group-item-content a,
.list-group-item.active .card-col-content a,
.list-group-item.active .list-group-item-content a {
    color: #fff
}

.list-group .collapse:last-child,
.list-group .collapsing:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden
}

.list-group .collapse:last-child .list-group-item:last-child,
.list-group .collapsing:last-child .list-group-item:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px
}

.list-group .collapse .list-group-item:first-child,
.list-group .collapsing .list-group-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.list-group .collapse .list-group-item:last-child,
.list-group .collapsing .list-group-item:last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.list-group .collapse .tabular-list-group,
.list-group .collapsing .tabular-list-group {
    margin-bottom: 0
}

.list-group .list-group-heading {
    margin-top: -1px
}

.list-group .list-group-heading:first-child {
    margin-top: 0
}

.list-group .list-group-heading.collapsed:nth-last-child(2) {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px
}

.tabular-list-group {
    border-collapse: separate;
    display: table;
    margin-bottom: 20px;
    padding: 0
}

.tabular-list-group>li,
.tabular-list-group .list-group-item {
    border-width: 0;
    display: table-row;
    height: 100px;
    padding: 0
}

.tabular-list-group>li:first-child .list-group-item-content,
.tabular-list-group>li:first-child .list-group-item-field,
.tabular-list-group .list-group-item:first-child .list-group-item-content,
.tabular-list-group .list-group-item:first-child .list-group-item-field {
    border-top: 1px solid #ddd
}

.tabular-list-group .list-group-item-content,
.tabular-list-group .list-group-item-field {
    border: 1px solid #ddd;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    padding: 8px;
    position: relative;
    word-break: break-all;
    word-break: break-word
}

.tabular-list-group .list-group-item-content:first-child,
.tabular-list-group .list-group-item-field:first-child {
    border-left-width: 1px;
    padding-left: 15px
}

.tabular-list-group .list-group-item-content:last-child,
.tabular-list-group .list-group-item-field:last-child {
    border-right-width: 1px;
    padding-right: 15px
}

.tabular-list-group .list-group-item-content h1,
.tabular-list-group .list-group-item-content h2,
.tabular-list-group .list-group-item-content h3,
.tabular-list-group .list-group-item-content h4,
.tabular-list-group .list-group-item-content h5,
.tabular-list-group .list-group-item-content h6 {
    margin: .5em 0
}

.tabular-list-group .list-group-item-content h1:first-child,
.tabular-list-group .list-group-item-content h2:first-child,
.tabular-list-group .list-group-item-content h3:first-child,
.tabular-list-group .list-group-item-content h4:first-child,
.tabular-list-group .list-group-item-content h5:first-child,
.tabular-list-group .list-group-item-content h6:first-child {
    margin-top: 0
}

.tabular-list-group .list-group-item-content h1:last-child,
.tabular-list-group .list-group-item-content h2:last-child,
.tabular-list-group .list-group-item-content h3:last-child,
.tabular-list-group .list-group-item-content h4:last-child,
.tabular-list-group .list-group-item-content h5:last-child,
.tabular-list-group .list-group-item-content h6:last-child {
    margin-bottom: 0
}

.tabular-list-group .list-group-item-field {
    text-align: center
}

.tabular-list-group.no-borders>li:first-child .list-group-item-content,
.tabular-list-group.no-borders>li:first-child .list-group-item-field,
.tabular-list-group.no-borders .list-group-item:first-child .list-group-item-content,
.tabular-list-group.no-borders .list-group-item:first-child .list-group-item-field {
    border-top-width: 0
}

.tabular-list-group.no-borders .list-group-item-content,
.tabular-list-group.no-borders .list-group-item-field {
    border-width: 0
}

.tabular-list-group.full-borders .list-group-item-content,
.tabular-list-group.full-borders .list-group-item-content:last-child,
.tabular-list-group.full-borders .list-group-item-field,
.tabular-list-group.full-borders .list-group-item-field:last-child {
    border-right-width: 1px
}

.tabular-list-group.full-borders .list-group-item-content:first-child,
.tabular-list-group.full-borders .list-group-item-field:first-child {
    border-left-width: 1px
}

.list-group-item-content,
.list-group-item-field {
    display: table-cell;
    padding: 0 .3em;
    vertical-align: middle
}

.list-group-item-field {
    width: 1%
}

@media(min-width:992px) {

    .tabular-list-group .list-group-item-content,
    .tabular-list-group .list-group-item-field {
        padding: 1em .8em
    }
}

@media(max-width:279px) {

    .tabular-list-group>li,
    .tabular-list-group .list-group-item {
        display: block;
        height: auto
    }

    .tabular-list-group .list-group-item-content,
    .tabular-list-group .list-group-item-field {
        display: block;
        width: 100%
    }
}

.detailed-list-view .list-group-item {
    cursor: pointer
}

.detailed-list-view .list-group-item-field:first-child+.list-group-item-field {
    border-left-width: 1px;
    padding-left: 12px;
    padding-right: 16px
}

@media(min-width:768px) {
    .detailed-list-view .list-group-item-field:first-child+.list-group-item-field {
        border-left-width: 0
    }
}

.detailed-list-view .list-group-item-field:last-child {
    padding-left: 8px;
    padding-right: 12px
}

.detailed-list-view .list-group-item-content,
.detailed-list-view .list-group-item-field {
    vertical-align: middle
}

@media(min-width:768px) {

    .detailed-list-view .list-group-item-content,
    .detailed-list-view .list-group-item-field {
        vertical-align: top
    }
}

.detailed-list-view>.active .detailed-list-view-icon:after {
    color: #fff;
    content: '\f00c';
    font-family: 'fontawesome-alloy';
    font-size: 16px;
    vertical-align: middle
}

@media(min-width:768px) {
    .detailed-list-view>.active .detailed-list-view-icon:after {
        content: normal
    }
}

.detailed-list-view>.active .detailed-list-view-icon>[class^="icon-"],
.detailed-list-view>.active .detailed-list-view-icon>[class*=" icon-"],
.detailed-list-view>.active .detailed-list-view-icon>.user-icon {
    display: none
}

@media(min-width:768px) {

    .detailed-list-view>.active .detailed-list-view-icon>[class^="icon-"],
    .detailed-list-view>.active .detailed-list-view-icon>[class*=" icon-"] {
        display: inline
    }
}

@media(min-width:768px) {
    .detailed-list-view>.active .detailed-list-view-icon>.user-icon {
        display: block
    }
}

.detailed-list-view-icon {
    height: 34px;
    line-height: 34px;
    width: 34px
}

@media(min-width:768px) {
    .detailed-list-view-icon {
        height: 48px;
        line-height: 48px;
        width: 48px
    }
}

.detailed-list-view-icon [class^="icon-"],
.detailed-list-view-icon [class*=" icon-"] {
    font-size: 28px
}

@media(min-width:768px) {

    .detailed-list-view-icon [class^="icon-"],
    .detailed-list-view-icon [class*=" icon-"] {
        font-size: 38px
    }
}

@media(max-width:279px) {
    .detailed-list-view .dropdown {
        display: inline-block
    }

    .detailed-list-view .dropdown-menu {
        left: 50%;
        right: auto;
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 100%
    }

    .detailed-list-view .detailed-list-view-icon {
        margin-left: auto;
        margin-right: auto
    }
}

.list-group-card h1,
.list-group-card h2,
.list-group-card h3,
.list-group-card h4,
.list-group-card h5,
.list-group-card h6 {
    margin-bottom: 5px;
    margin-top: 0
}

.list-group-card h1:last-child,
.list-group-card h2:last-child,
.list-group-card h3:last-child,
.list-group-card h4:last-child,
.list-group-card h5:last-child,
.list-group-card h6:last-child {
    margin-bottom: 0
}

.list-group-card .card {
    border-color: #ddd;
    border-radius: 0;
    border-width: 1px;
    box-shadow: none;
    margin: 0
}

.list-group-card .card-col-content,
.list-group-card .card-col-field {
    vertical-align: top
}

.list-group-card .checkbox input[type="checkbox"]:checked+.card {
    background-color: #337ab7;
    color: #fff
}

.list-group-card .list-group-card-icon {
    font-size: 2.4em
}

@media(min-width:768px) {
    .list-group-card .list-group-card-icon {
        font-size: 3em
    }
}

.list-group-card .list-group-card-icon>[class^="icon-"],
.list-group-card .list-group-card-icon>[class*=" icon-"],
.list-group-card .list-group-card-icon>.user-icon {
    display: block;
    height: 34px;
    line-height: 34px;
    width: 34px;
    text-align: center
}

@media(min-width:768px) {

    .list-group-card .list-group-card-icon>[class^="icon-"],
    .list-group-card .list-group-card-icon>[class*=" icon-"],
    .list-group-card .list-group-card-icon>.user-icon {
        height: 45px;
        line-height: 45px;
        width: 45px
    }
}

.list-group-card .list-group-item {
    border-width: 0;
    margin-bottom: 0;
    margin-top: -1px;
    padding: 0
}

.list-group-card .list-group-item:last-child .card {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px
}

.list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"] {
    display: none
}

@media(min-width:768px) {
    .list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"] {
        display: block
    }
}

.list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon:after {
    color: #fff;
    content: "";
    display: block;
    font-family: 'fontawesome-alloy';
    font-size: 16px;
    height: 34px;
    line-height: 34px;
    width: 34px;
    text-align: center;
    vertical-align: middle
}

@media(min-width:768px) {
    .list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon:after {
        content: normal
    }
}

.list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon>[class^="icon-"],
.list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon>[class*=" icon-"],
.list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon>.user-icon {
    display: none
}

@media(min-width:768px) {

    .list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon>[class^="icon-"],
    .list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon>[class*=" icon-"] {
        display: block
    }
}

@media(min-width:768px) {
    .list-group-card-checkbox-hidden-xs .checkbox input[type="checkbox"]:checked+.card .list-group-card-icon>.user-icon {
        display: block
    }
}

@media(max-width:767px) {

    .list-group-card-checkbox-hidden-xs .checkbox-bottom-left .card.flex-container,
    .list-group-card-checkbox-hidden-xs .checkbox-middle-left .card.flex-container,
    .list-group-card-checkbox-hidden-xs .checkbox-top-left .card.flex-container {
        padding-left: 20px
    }
}

@media(max-width:767px) {

    .list-group-card-checkbox-hidden-xs .checkbox-bottom-left .card-row,
    .list-group-card-checkbox-hidden-xs .checkbox-middle-left .card-row,
    .list-group-card-checkbox-hidden-xs .checkbox-top-left .card-row {
        padding-left: 20px
    }
}

@media(max-width:767px) {

    .list-group-card-checkbox-hidden-xs .checkbox-bottom-right .card.flex-container,
    .list-group-card-checkbox-hidden-xs .checkbox-middle-right .card.flex-container,
    .list-group-card-checkbox-hidden-xs .checkbox-top-right .card.flex-container {
        padding-right: 20px
    }
}

@media(max-width:767px) {

    .list-group-card-checkbox-hidden-xs .checkbox-bottom-right .card-row,
    .list-group-card-checkbox-hidden-xs .checkbox-middle-right .card-row,
    .list-group-card-checkbox-hidden-xs .checkbox-top-right .card-row {
        padding-right: 20px
    }
}

.loading-icon,
.loading-animation,
.loadingmask-message .loadingmask-message-content {
    animation: loading-icon 1.7s infinite ease;
    border-radius: 50%;
    display: block;
    font-size: 16px;
    height: 1em;
    margin: 1em auto;
    position: relative;
    width: 1em
}

.loading-icon:after,
.loading-animation:after,
.loading-icon:before,
.loading-animation:before,
.loadingmask-message .loadingmask-message-content:after,
.loadingmask-message .loadingmask-message-content:before {
    border-radius: 50%;
    content: '';
    display: block;
    font-size: inherit;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
}

@keyframes loading-icon {
    0% {
        box-shadow: 0 -0.83em 0 -0.4em #647bd3, 0 -0.83em 0 -0.42em #6484d3, 0 -0.83em 0 -0.44em #648dd3, 0 -0.83em 0 -0.46em #6496d3, 0 -0.83em 0 -0.477em #64a0d3;
        transform: rotate(0)
    }

    2%,
    96% {
        box-shadow: 0 -0.83em 0 -0.4em #647bd3, 0 -0.83em 0 -0.42em #6484d3, 0 -0.83em 0 -0.44em #648dd3, 0 -0.83em 0 -0.46em #6496d3, 0 -0.83em 0 -0.477em #64a0d3
    }

    10% {
        box-shadow: 0 -0.83em 0 -0.4em #647bd3, -0.087em -0.825em 0 -0.42em #6484d3, -0.173em -0.812em 0 -0.44em #648dd3, -0.256em -0.789em 0 -0.46em #6496d3, -0.338em -0.758em 0 -0.477em #64a0d3
    }

    25% {
        box-shadow: 0 -0.83em 0 -0.4em #647bd3, -0.338em -0.758em 0 -0.42em #6484d3, -0.555em -0.617em 0 -0.44em #648dd3, -0.671em -0.488em 0 -0.46em #6496d3, -0.719em -0.415em 0 -0.477em #64a0d3
    }

    40% {
        box-shadow: 0 -0.83em 0 -0.4em #64b2d3, -0.377em -0.74em 0 -0.42em #64bcd3, -0.645em -0.522em 0 -0.44em #64c5d3, -0.775em -0.297em 0 -0.46em #64ced3, -0.82em -0.13em 0 -0.477em #64d3cf
    }

    60% {
        box-shadow: 0 -0.83em 0 -0.4em #647bd3, -0.087em -0.825em 0 -0.42em #6484d3, -0.173em -0.812em 0 -0.44em #648dd3, -0.256em -0.789em 0 -0.46em #6496d3, -0.297em -0.775em 0 -0.477em #64a0d3
    }

    100% {
        box-shadow: 0 -0.83em 0 -0.4em #647bd3, 0 -0.83em 0 -0.42em #6484d3, 0 -0.83em 0 -0.44em #648dd3, 0 -0.83em 0 -0.46em #6496d3, 0 -0.83em 0 -0.477em #64a0d3;
        transform: rotate(360deg)
    }
}

.loading-icon.linear,
.linear.loading-animation,
.loading-icon.linear:before,
.linear.loading-animation:before,
.loading-icon.linear:after,
.linear.loading-animation:after {
    border-radius: 50%;
    box-shadow: none
}

.loading-icon.linear,
.linear.loading-animation {
    animation: none;
    height: 1em;
    margin: 0 auto;
    position: relative;
    transform: translateZ(0);
    width: 1em
}

.loading-icon.linear:before,
.linear.loading-animation:before,
.loading-icon.linear:after,
.linear.loading-animation:after {
    animation: 2s ease-out infinite both;
    border: .15em solid transparent;
    border-left-color: #5094ce;
    border-radius: 50%;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(270deg);
    transform-origin: 50%;
    width: 100%
}

.loading-icon.linear:before,
.linear.loading-animation:before {
    animation-name: loading-icon-linear
}

.loading-icon.linear:after,
.linear.loading-animation:after {
    animation-name: loading-icon-spin
}

@keyframes loading-icon-linear {
    0% {
        transform: rotate(0)
    }

    10.99% {
        border-bottom-color: transparent
    }

    11% {
        border-bottom-color: #5094ce
    }

    66% {
        border-bottom-color: #5094ce
    }

    66.6% {
        border-bottom-color: transparent
    }

    66.6%,
    100% {
        transform: rotate(360deg)
    }
}

@keyframes loading-icon-linear {
    0% {
        transform: rotate(0)
    }

    10.99% {
        border-bottom-color: transparent
    }

    11% {
        border-bottom-color: #5094ce
    }

    66% {
        border-bottom-color: #5094ce
    }

    66.6% {
        border-bottom-color: transparent
    }

    66.6%,
    100% {
        transform: rotate(360deg)
    }
}

@keyframes loading-icon-spin {

    0%,
    22% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(360deg)
    }
}

a.btn>.loading-icon,
a.btn>.loading-animation,
button>.loading-icon,
button>.loading-animation {
    font-size: 1em;
    margin-right: .8em;
    margin-top: 0
}

a.btn>.loading-icon.linear,
a.btn>.linear.loading-animation,
button>.loading-icon.linear,
button>.linear.loading-animation {
    margin-right: .2em;
    margin-top: -0.2em
}

a.btn>.loading-icon,
a.btn>.loading-animation,
a.btn>.loading-icon.linear,
a.btn>.linear.loading-animation,
button>.loading-icon,
button>.loading-animation,
button>.loading-icon.linear,
button>.linear.loading-animation {
    display: none;
    margin-bottom: 0;
    vertical-align: middle
}

a.btn.loading>.loading-icon,
a.btn.loading>.loading-animation,
a.btn.loading>.loading-icon.linear,
a.btn.loading>.linear.loading-animation,
button.loading>.loading-icon,
button.loading>.loading-animation,
button.loading>.loading-icon.linear,
button.loading>.linear.loading-animation {
    display: inline-block
}

.loading-icon.loading-icon-xs,
.loading-icon-xs.loading-animation,
.loading-animation.loading-animation-xs {
    font-size: 8px
}

.loading-icon.loading-icon-sm,
.loading-icon-sm.loading-animation,
.loading-animation.loading-animation-sm {
    font-size: 10px
}

.loading-icon.loading-icon-md,
.loading-icon-md.loading-animation,
.loading-animation.loading-animation-md {
    font-size: 32px
}

.loading-icon.loading-icon-lg,
.loading-icon-lg.loading-animation,
.loading-animation.loading-animation-lg {
    font-size: 64px
}

.management-bar {
    border-color: transparent;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    margin-bottom: 20px;
    min-height: 50px;
    position: relative
}

.management-bar:before,
.management-bar:after {
    content: " ";
    display: table
}

.management-bar:after {
    clear: both
}

@media(min-width:768px) {
    .management-bar {
        border-radius: 4px
    }
}

.management-bar .checkbox,
.management-bar .radio {
    margin-bottom: 0;
    margin-top: 0
}

.management-bar .checkbox label,
.management-bar .radio label {
    display: block
}

.management-bar .management-bar-nav>li>.btn,
.management-bar .management-bar-nav>.dropdown>.btn,
.management-bar-header>.btn,
.management-bar-header-right>.btn,
.management-bar-header>.dropdown,
.management-bar-header-right>.dropdown {
    margin: 8px 0 8px 15px;
    padding: 0
}

.management-bar-header>.dropdown,
.management-bar-header-right>.dropdown {
    float: left
}

.management-bar-header>.dropdown>a,
.management-bar-header-right>.dropdown>a {
    padding: 0
}

@media(min-width:768px) {
    .management-bar .management-bar-collapse {
        float: left
    }
}

.container>.management-bar-header,
.container>.management-bar-collapse,
.container-fluid>.management-bar-header,
.container-fluid>.management-bar-collapse {
    margin-left: -15px;
    margin-right: -15px
}

@media(min-width:768px) {

    .container>.management-bar-header,
    .container>.management-bar-collapse,
    .container-fluid>.management-bar-header,
    .container-fluid>.management-bar-collapse {
        margin-left: 0;
        margin-right: 0
    }
}

.container-fluid-1280 .management-bar-header-right {
    margin-right: 0
}

.management-bar-header>.checkbox,
.management-bar-header>.radio,
.management-bar-header-right>.checkbox,
.management-bar-header-right>.radio {
    float: left;
    padding: 15px 0 15px 15px
}

.management-bar-header {
    float: left
}

.management-bar-header:before,
.management-bar-header:after {
    content: " ";
    display: table
}

.management-bar-header:after {
    clear: both
}

.management-bar-header-right {
    float: right;
    margin-right: 15px
}

.management-bar-header-right>a {
    display: block;
    float: left;
    padding: 15px 15px
}

.management-bar-header-item {
    float: left;
    height: 50px;
    padding: 15px 15px
}

.management-bar-header-item:hover,
.management-bar-header-item:focus {
    text-decoration: none
}

.management-bar-header-item>img {
    display: block
}

@media(min-width:768px) {

    .management-bar>.container .management-bar-header-item,
    .management-bar>.container-fluid .management-bar-header-item {
        margin-left: -15px
    }
}

.management-bar-item-title {
    display: inline-block;
    float: left;
    margin-right: 5px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

@media(min-width:768px) {
    .management-bar-item-title {
        max-width: 150px
    }
}

.management-bar-toggle {
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    float: right;
    margin-right: 15px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 9px 10px;
    position: relative
}

@media(min-width:768px) {
    .management-bar-toggle {
        display: none
    }
}

.management-bar-toggle:focus {
    outline: 0;
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

.management-bar-toggle-link {
    border-radius: 0;
    border-width: 0
}

.management-bar-toggle-link.management-bar-toggle {
    margin: 0;
    padding: 15px 15px
}

.management-bar-toggle-link:focus,
.management-bar-toggle-link:hover {
    background-color: #eee;
    text-decoration: none
}

.management-bar-toggle-left {
    float: left;
    margin: 8px 15px;
    padding: 6px 10px
}

.management-bar-default .management-bar-toggle-left {
    color: #555
}

.management-bar-collapse {
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    overflow-x: visible;
    padding-left: 15px;
    padding-right: 15px
}

.management-bar-collapse:before,
.management-bar-collapse:after {
    content: " ";
    display: table
}

.management-bar-collapse:after {
    clear: both
}

@media(max-width:767px) {
    .management-bar-collapse {
        background-color: #fff;
        border-color: transparent;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        clear: both;
        left: -1px;
        position: absolute;
        right: -1px;
        top: 100%;
        z-index: 1001
    }
}

@media(min-width:768px) {
    .management-bar-collapse {
        border-top-width: 0;
        box-shadow: none;
        clear: none;
        margin-top: 0;
        padding-left: 0;
        padding-right: 0;
        position: static;
        width: auto
    }
}

@media(min-width:768px) {
    .management-bar-collapse.collapse {
        display: block !important;
        height: auto !important;
        overflow: visible !important;
        padding-bottom: 0
    }
}

.management-bar-collapse.in {
    overflow-y: auto
}

@media(min-width:768px) {
    .management-bar-collapse.in {
        overflow-y: visible
    }
}

.management-bar-default .management-bar-collapse {
    border-color: #e7e7e7
}

.management-bar-collapse .management-bar-nav>li>a,
.management-bar-collapse .management-bar-nav>li>span {
    padding-bottom: 10px;
    padding-top: 10px
}

@media(min-width:768px) {

    .management-bar-collapse .management-bar-nav>li>a,
    .management-bar-collapse .management-bar-nav>li>span {
        padding-bottom: 15px;
        padding-top: 15px
    }
}

.management-bar-nav {
    margin: 7.5px -15px
}

@media(min-width:768px) {
    .management-bar-nav {
        float: left;
        margin: 0
    }
}

@media(min-width:768px) {
    .management-bar-nav>li {
        float: left
    }
}

.management-bar-nav>li>a,
.management-bar-nav>li>span {
    display: inline-block;
    padding: 15px 15px
}

.management-bar-nav>li>.checkbox {
    padding-bottom: 15px;
    padding-left: 15px;
    padding-top: 15px
}

.management-bar-nav>li>.dropdown-menu {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    margin-top: 0
}

@media(max-width:767px) {
    .management-bar-nav .open .dropdown-menu {
        background-color: transparent;
        border-width: 0;
        box-shadow: none;
        float: none;
        margin-top: 0;
        position: static;
        width: auto
    }
}

@media(max-width:767px) {

    .management-bar-nav .open .dropdown-menu>li>a,
    .management-bar-nav .open .dropdown-menu .dropdown-header {
        padding: 5px 15px 5px 25px
    }
}

@media(max-width:767px) {

    .management-bar-nav .open .dropdown-menu>li>a:hover,
    .management-bar-nav .open .dropdown-menu>li>a:focus {
        background-image: none
    }
}

.management-bar-no-collapse .management-bar-nav {
    float: left;
    margin: 0
}

.management-bar-no-collapse .management-bar-nav>li {
    float: left;
    margin-left: -1px
}

.management-bar-no-collapse .management-bar-nav>li:first-child {
    margin-left: 0
}

.management-bar-no-collapse .management-bar-nav .dropdown-menu {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    position: absolute
}

.management-bar-no-collapse .management-bar-nav-right {
    float: right;
    margin-right: 15px
}

.management-bar-no-collapse .container-fluid-1280 .management-bar-nav-right {
    margin-right: 0
}

.management-bar-default .navbar-nav>li>a {
    color: #777
}

.management-bar-default .navbar-nav>li>a:hover,
.management-bar-default .navbar-nav>li>a:focus {
    background-color: transparent;
    color: #333
}

.management-bar-default .navbar-nav>.active>a,
.management-bar-default .navbar-nav>.active>a:hover,
.management-bar-default .navbar-nav>.active>a:focus {
    background-color: #e7e7e7;
    color: #555
}

.management-bar-default .navbar-nav>.disabled>a,
.management-bar-default .navbar-nav>.disabled>a:hover,
.management-bar-default .navbar-nav>.disabled>a:focus {
    background-color: transparent;
    color: #ccc
}

.management-bar-default .navbar-nav>.open>a,
.management-bar-default .navbar-nav>.open>a:hover,
.management-bar-default .navbar-nav>.open>a:focus {
    background-color: #e7e7e7;
    color: #555
}

@media(max-width:767px) {
    .management-bar-default .navbar-nav .open .dropdown-menu>li>a {
        color: #777
    }

    .management-bar-default .navbar-nav .open .dropdown-menu>li>a:hover,
    .management-bar-default .navbar-nav .open .dropdown-menu>li>a:focus {
        background-color: transparent;
        color: #333
    }

    .management-bar-default .navbar-nav .open .dropdown-menu>.active>a,
    .management-bar-default .navbar-nav .open .dropdown-menu>.active>a:hover,
    .management-bar-default .navbar-nav .open .dropdown-menu>.active>a:focus {
        background-color: #e7e7e7;
        color: #555
    }

    .management-bar-default .navbar-nav .open .dropdown-menu>.disabled>a,
    .management-bar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,
    .management-bar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus {
        background-color: transparent;
        color: #ccc
    }
}

.management-bar-default {
    background-color: #f8f8f8;
    border-color: #e7e7e7
}

.management-bar-default a {
    color: #777
}

@media(max-width:767px) {
    .management-bar-default .management-bar-collapse {
        background-color: #f8f8f8;
        border-color: #e7e7e7
    }
}

.management-bar-default .management-bar-text {
    color: #777
}

.management-bar-default .nav>li>a,
.management-bar-default .nav>.dropdown>a {
    color: #777
}

.management-bar-default .nav>li>a:hover,
.management-bar-default .nav>.dropdown>a:hover {
    background-color: transparent;
    color: #333
}

.management-bar-default .nav>li>a:focus,
.management-bar-default .nav>.dropdown>a:focus {
    background-color: #e7e7e7;
    color: #555
}

.management-bar-default .nav>.disabled>a,
.management-bar-default .nav>.disabled>a:focus,
.management-bar-default .nav>.disabled>a:hover {
    background-color: transparent;
    color: #ccc
}

.management-bar-default .nav>.open>a {
    border-color: #e7e7e7
}

.management-bar-default .nav .open>a,
.management-bar-default .nav .open>a:focus {
    background-color: #e7e7e7
}

.management-bar-default .btn-default,
.management-bar-default .nav>li>.btn-default {
    background-color: #f8f8f8;
    color: #777
}

.management-bar-default .btn-default:focus,
.management-bar-default .btn-default:hover,
.management-bar-default .nav>li>.btn-default:focus,
.management-bar-default .nav>li>.btn-default:hover {
    background-color: #dfdfdf;
    border-color: #c9c9c9;
    color: #777
}

.management-bar-default .btn-default:active,
.management-bar-default .btn-default.active,
.management-bar-default .nav>li>.btn-default:active,
.management-bar-default .nav>li>.btn-default.active {
    background-color: #dfdfdf
}

.modal-body {
    background-color: transparent
}

@media(max-width:767px) {
    .modal-body {
        bottom: 64px;
        left: 0;
        overflow: auto;
        position: absolute;
        right: 0;
        top: 56px
    }
}

.modal-body,
.modal-body h1,
.modal-body h2,
.modal-body h3,
.modal-body h4,
.modal-body h5,
.modal-body h6,
.modal-body .h1,
.modal-body .h2,
.modal-body .h3,
.modal-body .h4,
.modal-body .h5,
.modal-body .h6 {
    color: #333
}

.modal-body.inline-scroller {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    padding: 15px
}

.modal-body-iframe {
    padding: 0
}

.modal-body-iframe iframe {
    border-width: 0;
    height: 100%;
    width: 100%
}

.modal-body-no-footer {
    bottom: 0
}

.modal-header-no-header {
    top: 0
}

.modal-content {
    overflow: auto
}

@media(max-width:767px) {
    .modal-content {
        border-radius: 0;
        border-width: 0;
        box-shadow: none;
        height: 100%
    }
}

@media(max-width:767px) {
    .modal-dialog {
        bottom: 0;
        left: 0;
        margin: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0
    }
}

.modal-footer {
    background-color: transparent;
    border-color: #e5e5e5;
    clear: both;
    text-align: left
}

@media(max-width:767px) {
    .modal-footer {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0
    }
}

.modal-footer,
.modal-footer h1,
.modal-footer h2,
.modal-footer h3,
.modal-footer h4,
.modal-footer h5,
.modal-footer h6,
.modal-footer .h1,
.modal-footer .h2,
.modal-footer .h3,
.modal-footer .h4,
.modal-footer .h5,
.modal-footer .h6 {
    color: #333
}

.modal-header {
    background-color: transparent;
    border-color: #e5e5e5
}

.modal-header,
.modal-header h1,
.modal-header h2,
.modal-header h3,
.modal-header h4,
.modal-header h5,
.modal-header h6,
.modal-header .h1,
.modal-header .h2,
.modal-header .h3,
.modal-header .h4,
.modal-header .h5,
.modal-header .h6 {
    color: #333
}

.modal-title {
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.close.btn-default,
.btn-default.modal-primary-action-button {
    background-color: transparent;
    background-image: none;
    box-shadow: none
}

.close.btn-default:active,
.btn-default.modal-primary-action-button:active,
.close.btn-default:active:focus,
.btn-default.modal-primary-action-button:active:focus,
.close.btn-default:active:hover,
.btn-default.modal-primary-action-button:active:hover,
.close.btn-default:focus,
.btn-default.modal-primary-action-button:focus,
.close.btn-default:hover,
.btn-default.modal-primary-action-button:hover {
    background-color: transparent;
    background-image: none;
    border-width: 0;
    color: inherit
}

.close.btn-default:active:focus,
.btn-default.modal-primary-action-button:active:focus,
.close.btn-default:active:hover,
.btn-default.modal-primary-action-button:active:hover {
    border-color: transparent;
    box-shadow: none
}

.modal-header .close,
.modal-header .modal-primary-action-button {
    color: #333;
    float: left;
    margin-right: 10px
}

@media(min-width:768px) {

    .modal-header .close,
    .modal-header .modal-primary-action-button {
        float: right;
        margin-right: 0
    }
}

.modal-header .modal-primary-action-button {
    float: right;
    margin-left: 10px;
    margin-top: -1px;
    padding: 0
}

.modal-iframe iframe {
    border-width: 0;
    float: left;
    height: 300px;
    width: 100%
}

.modal-iframe .modal-body {
    padding: 0
}

.modal-full-screen {
    bottom: 0;
    left: 0;
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto
}

@media(min-width:768px) {
    .modal-full-screen {
        bottom: 45px;
        left: 45px;
        right: 45px;
        top: 45px
    }
}

.modal-full-screen .modal-body {
    bottom: 64px;
    left: 0;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 56px
}

@media(min-width:768px) {
    .modal-full-screen .modal-body {
        bottom: 64px;
        top: 56px
    }
}

.modal-full-screen .modal-body-iframe {
    padding: 0
}

.modal-full-screen .modal-body-iframe iframe {
    border-width: 0;
    float: left;
    height: 100%;
    width: 100%
}

.modal-full-screen .modal-body-no-footer {
    bottom: 0
}

.modal-full-screen .modal-body-no-header {
    top: 0
}

.modal-full-screen .modal-content {
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 0;
    border-width: 0;
    height: 100%
}

@media(min-width:768px) {
    .modal-full-screen .modal-content {
        border-radius: 6px;
        border-width: 1px
    }
}

.modal-full-screen .modal-footer {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: auto
}

@media(min-width:768px) {
    .modal-full-screen .modal-footer {
        padding: 15px
    }
}

.modal-inverse a,
.modal-inverse .btn-link,
.modal-inverse .close,
.modal-inverse .modal-primary-action-button,
.modal-inverse .close.btn-default:active:focus,
.modal-inverse .btn-default.modal-primary-action-button:active:focus {
    color: #9d9d9d
}

.modal-inverse .modal-content {
    background-color: #222;
    border-color: #090909
}

.modal-inverse .modal-body {
    background-color: transparent
}

.modal-inverse .modal-body,
.modal-inverse .modal-body h1,
.modal-inverse .modal-body h2,
.modal-inverse .modal-body h3,
.modal-inverse .modal-body h4,
.modal-inverse .modal-body h5,
.modal-inverse .modal-body h6,
.modal-inverse .modal-body .h1,
.modal-inverse .modal-body .h2,
.modal-inverse .modal-body .h3,
.modal-inverse .modal-body .h4,
.modal-inverse .modal-body .h5,
.modal-inverse .modal-body .h6 {
    color: #9d9d9d
}

.modal-inverse .modal-header {
    background-color: transparent;
    border-color: #090909
}

.modal-inverse .modal-header,
.modal-inverse .modal-header h1,
.modal-inverse .modal-header h2,
.modal-inverse .modal-header h3,
.modal-inverse .modal-header h4,
.modal-inverse .modal-header h5,
.modal-inverse .modal-header h6,
.modal-inverse .modal-header .h1,
.modal-inverse .modal-header .h2,
.modal-inverse .modal-header .h3,
.modal-inverse .modal-header .h4,
.modal-inverse .modal-header .h5,
.modal-inverse .modal-header .h6 {
    color: #9d9d9d
}

.modal-inverse .modal-footer {
    background-color: transparent;
    border-color: #090909
}

.modal-inverse .modal-footer,
.modal-inverse .modal-footer h1,
.modal-inverse .modal-footer h2,
.modal-inverse .modal-footer h3,
.modal-inverse .modal-footer h4,
.modal-inverse .modal-footer h5,
.modal-inverse .modal-footer h6,
.modal-inverse .modal-footer .h1,
.modal-inverse .modal-footer .h2,
.modal-inverse .modal-footer .h3,
.modal-inverse .modal-footer .h4,
.modal-inverse .modal-footer .h5,
.modal-inverse .modal-footer .h6 {
    color: #9d9d9d
}

.nameplate {
    display: table;
    width: 100%
}

.nameplate-content,
.nameplate-field {
    display: table-cell;
    padding: 6px;
    vertical-align: top
}

.nameplate-field {
    width: 1%
}

.nameplate-content {
    word-wrap: break-word
}

.nameplate-content h1,
.nameplate-content h2,
.nameplate-content h3 {
    margin-top: 0
}

.nameplate-content h4,
.nameplate-content h5,
.nameplate-content h6 {
    margin-top: 2px
}

.nameplate-content small {
    color: #777;
    display: block
}

.nameplate-label {
    border-radius: 100px;
    display: table;
    float: left;
    margin: 0 5px 2px 0;
    min-width: 50px;
    padding: 0 3px
}

@media(max-width:767px) {
    .nameplate-label {
        height: 32px;
        margin-right: 0
    }
}

.nameplate-label a {
    text-decoration: none
}

.nameplate-label .nameplate-content,
.nameplate-label .nameplate-field {
    vertical-align: middle
}

@media(min-width:768px) {

    .nameplate-label .nameplate-content,
    .nameplate-label .nameplate-field {
        width: auto
    }
}

.nameplate-label .nameplate-content {
    height: auto;
    position: relative
}

@media(max-width:767px) {
    .nameplate-label .nameplate-content {
        width: auto
    }
}

.nameplate-label .nameplate-label-text {
    display: block;
    font-weight: 500;
    max-width: 200px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap
}

@media(max-width:767px) {
    .nameplate-label .nameplate-label-text {
        left: 5px;
        max-width: none;
        position: absolute;
        right: 5px;
        text-align: left;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        top: 50%
    }
}

.nameplate-label .icon-monospaced,
.nameplate-label .icon-monospaced.lexicon-icon {
    margin: 0;
    height: 20px;
    line-height: 20px;
    width: 20px
}

.nameplate-label .icon-monospaced.lexicon-icon {
    padding: 4px
}

.nameplate-label .user-icon {
    height: 22px;
    line-height: 22px;
    width: 22px
}

.nameplate-label-more .icon-monospaced.lexicon-icon {
    padding: 6px 4px 0
}

.nameplate-label-more .nameplate-label-text {
    text-align: center
}

.nameplate-label-circle {
    border-radius: 100px
}

.nameplate-label-rounded {
    border-radius: 3px
}

.nameplate-label-square {
    border-radius: 0
}

.nameplate-label-default {
    background-color: #f8f8f8;
    color: #777
}

.nameplate-label-inverse {
    background-color: #222;
    color: #9d9d9d
}

.nameplate-label-primary {
    background-color: #337ab7;
    color: #fff
}

.nameplate-label-primary a {
    color: #23527c
}

.nameplate-label-primary a:focus,
.nameplate-label-primary a:hover {
    color: #122b40
}

.nameplate-label-success {
    background-color: #5cb85c;
    color: #fff
}

.nameplate-label-info {
    background-color: #5bc0de;
    color: #fff
}

.nameplate-label-warning {
    background-color: #f0ad4e;
    color: #fff
}

.nameplate-label-danger {
    background-color: #d9534f;
    color: #fff
}

.nameplate-label-danger a {
    color: #23527c
}

.nameplate-label-danger a:focus,
.nameplate-label-danger a:hover {
    color: #122b40
}

.pagination-bar:before,
.pagination-bar:after {
    content: " ";
    display: table
}

.pagination-bar:after {
    clear: both
}

.pagination-bar .pagination {
    width: 100%
}

.pagination-bar .pagination>li {
    display: block;
    float: left
}

.pagination-bar .pagination>li:first-child {
    text-align: left
}

.pagination-bar .pagination>li:last-child {
    text-align: right
}

.pagination-items-per-page {
    float: left
}

.pagination-items-per-page [class*="icon-"] {
    margin-left: 10px
}

.pagination-items-per-page a {
    display: block;
    padding-bottom: 6px;
    padding-top: 6px
}

.pagination-items-per-page a:focus,
.pagination-items-per-page a:hover {
    text-decoration: none
}

.pagination-results {
    float: right;
    padding-bottom: 6px;
    padding-top: 6px
}

.pagination-lg.pagination-items-per-page a,
.pagination-lg.pagination-results,
.pagination-lg .pagination-items-per-page a,
.pagination-lg .pagination-results {
    font-size: 18px;
    padding-bottom: 10px;
    padding-top: 10px
}

.pagination-lg.pagination>li>a,
.pagination-lg.pagination>li>span,
.pagination-lg .pagination>li>a,
.pagination-lg .pagination>li>span {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33333
}

.pagination-lg.pagination>li:first-child>a,
.pagination-lg.pagination>li:first-child>span,
.pagination-lg .pagination>li:first-child>a,
.pagination-lg .pagination>li:first-child>span {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px
}

.pagination-lg.pagination>li:last-child>a,
.pagination-lg.pagination>li:last-child>span,
.pagination-lg .pagination>li:last-child>a,
.pagination-lg .pagination>li:last-child>span {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px
}

.pagination-sm.pagination-items-per-page a,
.pagination-sm.pagination-results,
.pagination-sm .pagination-items-per-page a,
.pagination-sm .pagination-results {
    font-size: 12px;
    padding-bottom: 5px;
    padding-top: 5px
}

.pagination-sm.pagination>li>a,
.pagination-sm.pagination>li>span,
.pagination-sm .pagination>li>a,
.pagination-sm .pagination>li>span {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5
}

.pagination-sm.pagination>li:first-child>a,
.pagination-sm.pagination>li:first-child>span,
.pagination-sm .pagination>li:first-child>a,
.pagination-sm .pagination>li:first-child>span {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px
}

.pagination-sm.pagination>li:last-child>a,
.pagination-sm.pagination>li:last-child>span,
.pagination-sm .pagination>li:last-child>a,
.pagination-sm .pagination>li:last-child>span {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px
}

@media(min-width:768px) {
    .pagination-bar .pagination {
        float: right;
        margin: 0;
        width: auto
    }

    .pagination-results {
        float: left;
        margin-left: 25px
    }
}

.panel-title {
    font-size: 1em;
    font-weight: 500;
    overflow-wrap: break-word;
    word-wrap: break-word
}

.panel-group .panel-heading {
    padding: 0
}

.panel-group .panel-heading .collapse-icon {
    padding-right: 45px
}

.panel-group .panel-title>a,
.panel-group .panel-title>span {
    display: block;
    padding: 10px 15px;
    position: relative
}

.panel-blank {
    box-shadow: none;
    border-color: transparent
}

.panel-blank>.panel-heading {
    color: #333;
    background-color: transparent;
    border-color: transparent
}

.panel-blank>.panel-heading+.panel-collapse>.panel-body {
    border-top-color: transparent
}

.panel-blank>.panel-heading .badge {
    color: transparent;
    background-color: #333
}

.panel-blank>.panel-footer+.panel-collapse>.panel-body {
    border-bottom-color: transparent
}

.panel-blank>.panel-footer {
    background-color: transparent;
    border-color: transparent
}

.panel-group .panel-blank .panel-heading+.panel-collapse>.panel-body,
.panel-group .panel-blank .panel-heading+.panel-collapse>.list-group {
    border-top-color: transparent
}

.panel-primary>.panel-footer {
    background-color: #337ab7;
    border-color: #337ab7;
    color: #FFF
}

.panel-success>.panel-footer {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #5cb85c
}

.panel-warning>.panel-footer {
    background-color: #fcf8e3;
    border-color: #faebcc;
    color: #f0ad4e
}

.panel-danger>.panel-footer {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #d9534f
}

.progress-xs {
    border-radius: 2px;
    height: 8px
}

.progress-xs .progress-bar {
    font-size: 8px;
    line-height: 8px
}

.progress-lg {
    border-radius: 4px;
    height: 32px
}

.progress-lg .progress-bar {
    font-size: 14px;
    line-height: 32px
}

.progress-xl {
    border-radius: 6px;
    height: 52px
}

.progress-xl .progress-bar {
    font-size: 18px;
    line-height: 52px
}

.multi-step-progress-bar {
    display: table;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    position: relative;
    width: 100%
}

.multi-step-progress-bar>li {
    color: #BBB;
    display: table-cell;
    vertical-align: bottom;
    width: 1%
}

.multi-step-progress-bar>.active {
    color: #337ab7
}

.multi-step-progress-bar>.active .divider {
    background-color: #337ab7;
    color: #337ab7
}

.multi-step-progress-bar>.active .divider:after {
    content: ""
}

.multi-step-progress-bar>.complete {
    color: #555
}

.multi-step-progress-bar>.complete .divider {
    background-color: #555;
    color: #337ab7;
    margin-left: 15px
}

.multi-step-progress-bar>.complete .divider:after {
    content: "";
    left: -14px
}

.multi-step-progress-bar .divider {
    background-color: #BBB;
    color: #BBB;
    height: 1px;
    margin: 10px 0 10px 12px;
    position: relative
}

.multi-step-progress-bar .divider:after {
    content: "";
    display: block;
    font-family: 'fontawesome-alloy';
    left: -12px;
    position: absolute;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%
}

.multi-step-progress-bar .progress-bar-step,
.multi-step-progress-bar .progress-bar-title {
    margin-right: 10px
}

@media(max-width:767px) {
    .multi-step-progress-bar-collapse {
        padding-top: 20px
    }
}

@media(max-width:767px) {
    .multi-step-progress-bar-collapse>li {
        width: auto
    }
}

@media(max-width:767px) {
    .multi-step-progress-bar-collapse>li:last-child {
        width: 1%
    }
}

@media(max-width:767px) {
    .multi-step-progress-bar-collapse>li:last-child .divider {
        width: 0
    }
}

@media(max-width:767px) {
    .multi-step-progress-bar-collapse>.active .progress-bar-title {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        top: 0
    }
}

@media(max-width:767px) {
    .multi-step-progress-bar-collapse .progress-bar-title {
        display: none;
    }
}

.multi-step-progress-bar-fixed>li {
    display: inline-block;
    width: 100px
}

.container-fluid-1280.sidenav-container {
    padding-left: 15px;
    padding-right: 15px
}

.sidenav-container {
    position: relative
}

.sidenav-container>.sidenav-menu-slider {
    visibility: hidden;
    width: 0
}

.sidenav-container>.sidenav-content {
    left: 0
}

.sidenav-container.open>.sidenav-menu-slider {
    visibility: visible
}

.sidenav-content {
    padding-left: 0;
    padding-right: 0;
    position: relative
}

@media(min-width:768px) {
    .sidenav-content {
        position: static
    }

    .sidenav-content:before,
    .sidenav-content:after {
        content: " ";
        display: table
    }

    .sidenav-content:after {
        clear: both
    }
}

.sidenav-menu {
    height: 100%;
    position: relative
}

.sidenav-menu-slider {
    overflow: hidden;
    position: absolute;
    z-index: 10
}

.sidenav-fixed>.sidenav-menu-slider {
    bottom: 0;
    left: 0;
    position: fixed;
    top: 0;
    z-index: 1035
}

.sidenav-right>.sidenav-content {
    left: auto;
    right: 0
}

.sidenav-right>.sidenav-menu-slider {
    left: auto;
    right: 0
}

.sidenav-right>.sidenav-menu-slider .sidenav-menu {
    right: 0
}

.sidenav-js-fouc>.sidenav-menu-slider {
    opacity: 0;
    visibility: hidden
}

.sidenav-transition .sidenav-content,
.sidenav-transition .sidenav-menu,
.sidenav-transition .sidenav-menu-slider {
    transition: all .5s ease
}

.sidenav-transition {
    transition: all .5s ease
}

.sidenav-fixed.sidenav-menu-slider {
    bottom: 0;
    left: 0;
    position: fixed;
    top: 0;
    visibility: hidden;
    width: 0
}

.sidenav-fixed.sidenav-menu-slider.open {
    visibility: visible;
    width: 320px
}

.sidenav-fixed.sidenav-menu-slider .sidenav-menu {
    position: absolute
}

.sidenav-menu-slider,
.sidenav-menu-slider .sidenav-menu {
    width: 320px
}

.sidenav-menu-slider.sidenav-right {
    left: auto;
    right: 0
}

.sidenav-menu-slider.sidenav-right .sidenav-menu {
    right: 0
}

.flex-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-flow: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.flex-container-stacked {
    -ms-flex-direction: column;
    flex-direction: column
}

.flex-row-vertical {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column
}

.flex-item-expand {
    -ms-flex: 1;
    flex: 1;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    min-width: 0
}

.flex-item-full {
    -ms-flex: 1 100%;
    flex: 1 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.flex-item-full+.flex-item-expand {
    -ms-flex-preferred-size: auto;
    flex-basis: auto
}

.flex-item-bottom {
    -ms-flex-item-align: end;
    align-self: flex-end
}

.flex-item-center {
    -ms-flex-item-align: center;
    align-self: center
}

.flex-item-top {
    -ms-flex-item-align: start;
    align-self: flex-start
}

@media(max-width:479px) {
    .flex-container-stacked-xxs {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-xxs .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(max-width:767px) {
    .flex-container-stacked-xs {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-xs .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(max-width:991px) {
    .flex-container-stacked-sm {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-sm .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(max-width:1199px) {
    .flex-container-stacked-md {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-md .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(min-width:1200px) {
    .flex-container-stacked-lg {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-lg .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(min-width:480px) and (max-width:767px) {
    .flex-container-stacked-xs-only {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-xs-only .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(min-width:768px) and (max-width:991px) {
    .flex-container-stacked-sm-only {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-sm-only .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .flex-container-stacked-md-only {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .flex-container-stacked-md-only .flex-item-full {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
}

@media(max-width:479px) {
    .flex-item-break-xxs {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

@media(max-width:767px) {
    .flex-item-break-xs {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

@media(max-width:991px) {
    .flex-item-break-sm {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

@media(max-width:1199px) {
    .flex-item-break-md {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

@media(min-width:1200px) {
    .flex-item-break-lg {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

@media(min-width:480px) and (max-width:767px) {
    .flex-item-break-xs-only {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

@media(min-width:768px) and (max-width:991px) {
    .flex-item-break-sm-only {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .flex-item-break-md-only {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%
    }
}

.sticker {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    left: 15px;
    height: 32px;
    line-height: 32px;
    width: 32px;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 15px
}

.sticker .lexicon-icon {
    margin-top: -1px
}

.sticker-static {
    position: static
}

.sticker-bottom-left {
    bottom: 15px;
    right: auto;
    top: auto
}

.sticker-bottom-right {
    bottom: 15px;
    left: auto;
    right: 15px;
    top: auto
}

.sticker-top-right {
    left: auto;
    right: 15px
}

.sticker-bottom {
    bottom: 15px;
    top: auto
}

.sticker-right {
    left: auto;
    right: 15px
}

.sticker-outside {
    left: -15px;
    top: -15px
}

.sticker-outside.sticker-bottom-left {
    bottom: -15px;
    top: auto
}

.sticker-outside.sticker-bottom-right {
    bottom: -15px;
    left: auto;
    right: -15px;
    top: auto
}

.sticker-outside.sticker-top-right {
    left: auto;
    right: -15px
}

.sticker-outside.sticker-bottom {
    bottom: -15px;
    top: auto
}

.sticker-outside.sticker-right {
    left: auto;
    right: -15px
}

.sticker-sm {
    font-size: 9px;
    height: 22px;
    line-height: 22px;
    width: 22px
}

.sticker-sm .lexicon-icon {
    height: 9px;
    margin-top: -2px;
    width: 9px
}

.sticker-lg {
    font-size: 16px;
    height: 44px;
    line-height: 44px;
    width: 44px
}

.sticker-lg .lexicon-icon {
    height: 16px;
    margin-top: -3px;
    width: 16px
}

.sticker-circle {
    border-radius: 100px
}

.sticker-rounded {
    border-radius: 4px
}

.sticker-square {
    border-radius: 0
}

.sticker-danger {
    background-color: #d9534f
}

.sticker-default {
    background-color: #777
}

.sticker-info {
    background-color: #5bc0de
}

.sticker-primary {
    background-color: #337ab7
}

.sticker-success {
    background-color: #5cb85c
}

.sticker-warning {
    background-color: #f0ad4e
}

th {
    height: 20px
}

.table>thead tr td:first-child,
.table>tbody tr td:first-child,
.table>tfoot tr td:first-child {
    padding-left: 15px
}

.table>thead tr td:first-child .checkbox,
.table>tbody tr td:first-child .checkbox,
.table>tfoot tr td:first-child .checkbox {
    margin-bottom: 0;
    margin-left: 1px;
    margin-top: 0
}

.table>thead tr td:last-child,
.table>tbody tr td:last-child,
.table>tfoot tr td:last-child {
    padding-right: 15px
}

.table thead .clamp-container {
    bottom: 8px
}

.table th {
    height: 36px
}

.table tr td:first-child .clamp-container,
.table tr th:first-child .clamp-container {
    left: 15px
}

.table tr td:last-child .clamp-container,
.table tr th:last-child .clamp-container {
    right: 15px
}

.table .clamp-container {
    -ms-transform: none;
    transform: none
}

.table-cell-content {
    max-width: 100px;
    min-width: 100px;
    position: relative;
    width: auto;
    word-break: break-all \9;
    word-wrap: break-word
}

.table-responsive {
    -webkit-overflow-scrolling: touch
}

@media(max-width:767px) {
    .table-responsive .table .table-cell-content {
        white-space: normal
    }
}

.table-cell-field {
    width: 1%
}

.table-list>thead>tr>td,
.table-list>thead>tr>th {
    border-bottom-width: 0
}

.table-list>tbody>tr {
    height: 55px
}

.table-list>tbody>tr>td,
.table-list>tbody>tr>th,
.table-list>tfoot>tr>td,
.table-list>tfoot>tr>th {
    border-top-width: 0;
    vertical-align: middle
}

.table-list>tbody td,
.table-list>tfoot td {
    box-shadow: inset 0 -1px #ddd
}

.table-list>tbody>tr.active:hover td,
.table-list>tbody>tr.active td,
.table-list>tfoot>tr.active:hover td,
.table-list>tfoot>tr.active td {
    box-shadow: inset 0 -1px #ddd
}

.table-list>tbody>tr:hover td,
.table-list>tfoot>tr:hover td {
    box-shadow: inset 0 -1px #ddd
}

.table-list .checkbox,
.table-list .radio {
    float: left
}

.table-list .checkbox label,
.table-list .radio label {
    display: block
}

.table-list thead .clamp-container {
    -ms-transform: none;
    transform: none
}

.table-list.table-valign-middle thead .clamp-container,
.table-list .clamp-container {
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.table-autofit>thead>tr>th,
.table-autofit>thead>tr>td,
.table-autofit>tbody>tr>th,
.table-autofit>tbody>tr>td {
    width: 1%
}

.table-autofit .table-cell-content {
    width: auto
}

.table-heading-nowrap>thead>tr>th,
.table-heading-nowrap>thead>tr>td {
    white-space: nowrap
}

.table-responsive .table-heading-nowrap>thead>tr>.table-cell-content {
    white-space: nowrap
}

.table-valign-bottom>thead>tr>th,
.table-valign-bottom>tbody>tr>td,
.table-valign-bottom>tfoot>tr>td {
    vertical-align: bottom
}

.table-valign-bottom .clamp-container {
    bottom: 8px;
    -ms-transform: none;
    transform: none
}

.table-valign-middle>thead>tr>th,
.table-valign-middle>tbody>tr>td,
.table-valign-middle>tfoot>tr>td {
    vertical-align: middle
}

.table-valign-middle thead .clamp-container {
    bottom: auto
}

.table-valign-middle .clamp-container {
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    top: auto
}

.table-valign-top>thead>tr>th,
.table-valign-top>tbody>tr>td,
.table-valign-top>tfoot>tr>td {
    vertical-align: top
}

.table-valign-top thead .clamp-container {
    bottom: auto
}

.table-valign-top .clamp-container {
    -ms-transform: none;
    transform: none
}

.tbody-valign-bottom>tbody>tr>td {
    vertical-align: bottom
}

.tbody-valign-bottom tbody .clamp-container {
    bottom: 8px;
    -ms-transform: none;
    transform: none
}

.tbody-valign-middle>tbody>tr>td {
    vertical-align: middle
}

.tbody-valign-middle tbody .clamp-container {
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    top: auto
}

.tbody-valign-top>tbody>tr>td {
    vertical-align: top
}

.tbody-valign-top tbody .clamp-container {
    -ms-transform: none;
    transform: none
}

.thead-valign-bottom>thead>tr>td,
.thead-valign-bottom>thead>tr>th {
    vertical-align: bottom
}

.thead-valign-bottom thead .clamp-container {
    -ms-transform: none;
    transform: none
}

.thead-valign-middle>thead>tr>td,
.thead-valign-middle>thead>tr>th {
    vertical-align: middle
}

.thead-valign-middle thead .clamp-container {
    bottom: auto;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.thead-valign-top>thead>tr>td,
.thead-valign-top>thead>tr>th {
    vertical-align: top
}

.thead-valign-top thead .clamp-container {
    bottom: auto;
    -ms-transform: none;
    transform: none
}

.timeline {
    padding-left: 20px
}

.timeline .panel,
.timeline .panel-group {
    margin-bottom: 0
}

.timeline-icon {
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 50%;
    display: block;
    height: 10px;
    line-height: 10px;
    width: 10px
}

.timeline-increment-label {
    color: #333
}

.timeline-item {
    padding-bottom: 5px;
    padding-left: 35px;
    padding-top: 5px;
    position: relative
}

.timeline-item:before {
    background-color: #ddd;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    width: 2px
}

.timeline-item.active .timeline-icon {
    background-color: #337ab7;
    border-color: #337ab7
}

.timeline-item .panel,
.timeline-item .panel-heading {
    position: relative
}

.timeline-item .panel .timeline-increment-icon {
    margin-left: -1px
}

.timeline-item .timeline-increment-icon {
    left: -34px;
    position: absolute;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1
}

.timeline-right {
    padding-left: 0;
    padding-right: 20px
}

.timeline-right .timeline-item {
    padding-left: 0;
    padding-right: 35px
}

.timeline-right .timeline-item:before {
    left: auto;
    right: -2px
}

.timeline-right .timeline-item .panel .timeline-increment-icon {
    margin-left: auto;
    margin-right: -1px
}

.timeline-right .timeline-item .timeline-increment-icon {
    left: auto;
    right: -36px;
    -ms-transform: translate(50%, -50%);
    transform: translate(50%, -50%)
}

@media(max-width:767px) {
    .timeline-right-xs-only {
        padding-left: 0;
        padding-right: 20px
    }

    .timeline-right-xs-only .timeline-item {
        padding-left: 0;
        padding-right: 35px
    }

    .timeline-right-xs-only .timeline-item:before {
        left: auto;
        right: -2px
    }

    .timeline-right-xs-only .timeline-item .panel .timeline-increment-icon {
        margin-left: auto;
        margin-right: -1px
    }

    .timeline-right-xs-only .timeline-item .timeline-increment-icon {
        left: auto;
        right: -36px;
        -ms-transform: translate(50%, -50%);
        transform: translate(50%, -50%)
    }
}

@media(min-width:768px) {
    .timeline-center {
        padding-left: 0
    }

    .timeline-center .timeline-item {
        margin-left: 50%;
        width: 50%
    }

    .timeline-center .timeline-item .timeline-increment-label {
        left: -100%;
        margin-left: -70px;
        position: absolute;
        text-align: right;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%
    }

    .timeline-center .timeline-item.timeline-item-reverse {
        padding-left: 0;
        padding-right: 35px;
        margin-left: 0
    }

    .timeline-center .timeline-item.timeline-item-reverse:before {
        left: auto;
        right: -2px
    }

    .timeline-center .timeline-item.timeline-item-reverse .panel .timeline-increment-icon {
        margin-left: auto;
        margin-right: -1px
    }

    .timeline-center .timeline-item.timeline-item-reverse .timeline-increment-icon {
        left: auto;
        right: -36px;
        -ms-transform: translate(50%, -50%);
        transform: translate(50%, -50%)
    }

    .timeline-center .timeline-item.timeline-item-reverse .timeline-increment-label {
        margin-left: auto;
        margin-right: -70px;
        right: -100%;
        text-align: left
    }
}

@media(min-width:768px) {

    .timeline-even .timeline-item:nth-of-type(even),
    .timeline-odd .timeline-item:nth-of-type(odd) {
        padding-left: 0;
        padding-right: 35px;
        margin-left: 0
    }

    .timeline-even .timeline-item:nth-of-type(even):before,
    .timeline-odd .timeline-item:nth-of-type(odd):before {
        left: auto;
        right: -2px
    }

    .timeline-even .timeline-item:nth-of-type(even) .panel .timeline-increment-icon,
    .timeline-odd .timeline-item:nth-of-type(odd) .panel .timeline-increment-icon {
        margin-left: auto;
        margin-right: -1px
    }

    .timeline-even .timeline-item:nth-of-type(even) .timeline-increment-icon,
    .timeline-odd .timeline-item:nth-of-type(odd) .timeline-increment-icon {
        left: auto;
        right: -36px;
        -ms-transform: translate(50%, -50%);
        transform: translate(50%, -50%)
    }

    .timeline-even .timeline-item:nth-of-type(even) .timeline-increment-label,
    .timeline-odd .timeline-item:nth-of-type(odd) .timeline-increment-label {
        margin-left: auto;
        margin-right: -70px;
        right: -100%;
        text-align: left
    }
}

.timeline-spacing-xl.timeline {
    padding-left: 25px
}

@media(min-width:768px) {
    .timeline-spacing-xl.timeline-center {
        padding-left: 0
    }

    .timeline-spacing-xl.timeline-center .timeline-item .timeline-increment-label {
        margin-left: -100px
    }

    .timeline-spacing-xl.timeline-center .timeline-item.timeline-item-reverse {
        padding-right: 50px
    }

    .timeline-spacing-xl.timeline-center .timeline-item.timeline-item-reverse .timeline-increment-icon {
        right: -51px
    }

    .timeline-spacing-xl.timeline-center .timeline-item.timeline-item-reverse .timeline-increment-label {
        margin-left: auto;
        margin-right: -100px
    }
}

@media(min-width:768px) {

    .timeline-spacing-xl.timeline-even .timeline-item:nth-of-type(even),
    .timeline-spacing-xl.timeline-odd .timeline-item:nth-of-type(odd) {
        padding-right: 50px
    }

    .timeline-spacing-xl.timeline-even .timeline-item:nth-of-type(even) .timeline-increment-icon,
    .timeline-spacing-xl.timeline-odd .timeline-item:nth-of-type(odd) .timeline-increment-icon {
        right: -51px
    }

    .timeline-spacing-xl.timeline-even .timeline-item:nth-of-type(even) .timeline-increment-label,
    .timeline-spacing-xl.timeline-odd .timeline-item:nth-of-type(odd) .timeline-increment-label {
        margin-left: auto;
        margin-right: -100px
    }
}

.timeline-spacing-xl.timeline-right {
    padding-right: 25px
}

.timeline-spacing-xl.timeline-right .timeline-item {
    padding-right: 50px
}

.timeline-spacing-xl.timeline-right .timeline-item .timeline-increment-icon {
    right: -51px
}

@media(max-width:767px) {
    .timeline-spacing-xl.timeline-right-xs-only {
        padding-left: 0;
        padding-right: 25px
    }

    .timeline-spacing-xl.timeline-right-xs-only .timeline-item {
        padding-left: 0;
        padding-right: 50px
    }

    .timeline-spacing-xl.timeline-right-xs-only .timeline-item .timeline-increment-icon {
        left: auto;
        right: -51px
    }
}

.timeline-spacing-xl .timeline-item {
    padding-bottom: 15px;
    padding-left: 50px;
    padding-top: 15px
}

.timeline-spacing-xl .timeline-item .timeline-increment-icon {
    left: -49px
}

.toolbar:before,
.toolbar:after,
.header-toolbar:before,
.header-toolbar:after {
    content: " ";
    display: table
}

.toolbar:after,
.header-toolbar:after {
    clear: both
}

.toolbar .nameplate-content,
.toolbar .nameplate-field,
.header-toolbar .nameplate-content,
.header-toolbar .nameplate-field {
    vertical-align: middle
}

.toolbar-group,
.toolbar-group-expand,
.toolbar-group-right {
    display: table
}

.toolbar-group,
.toolbar-group-right {
    height: 34px;
    margin-bottom: 0
}

.toolbar-group {
    float: left
}

.toolbar-group-right {
    float: right
}

.toolbar-group-expand .input-group {
    width: 100%
}

.toolbar-group-expand .toolbar-group-content,
.toolbar-group-expand .toolbar-group-field {
    display: table-cell;
    float: none;
    vertical-align: middle
}

.toolbar-group-expand .toolbar-group-field {
    width: 1%
}

.toolbar-group-expand-text {
    line-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.toolbar-group-content,
.toolbar-group-field {
    display: table-cell;
    float: none;
    margin-bottom: 0;
    min-height: 0;
    vertical-align: middle
}

.toolbar-group-content>a:focus,
.toolbar-group-content>a:hover,
.toolbar-group-content>.dropdown>a:focus,
.toolbar-group-content>.dropdown>a:hover,
.toolbar-group-field>a:focus,
.toolbar-group-field>a:hover,
.toolbar-group-field>.dropdown>a:focus,
.toolbar-group-field>.dropdown>a:hover {
    text-decoration: none
}

.toolbar-group-field {
    width: 1%
}

@media(min-width:768px) {
    .toolbar {
        margin-bottom: 10px
    }

    .toolbar-group,
    .toolbar-group-right {
        display: table;
        height: 34px;
        width: auto
    }

    .toolbar-group {
        float: left;
        padding-right: 15px
    }

    .toolbar-group-right {
        float: right;
        padding-left: 15px
    }

    .toolbar-group-row {
        clear: none;
        display: table-row
    }

    .toolbar-group-content,
    .toolbar-group-field {
        display: table-cell;
        float: none;
        margin-bottom: 0;
        vertical-align: middle
    }

    .toolbar-group-expand {
        clear: none;
        display: table
    }

    .toolbar-group-expand-text {
        clear: none
    }

    .toolbar-group-field {
        width: 1%
    }
}

@media(max-width:767px) {
    .tbg-xs-newline {
        clear: both;
        display: block;
        float: left
    }
}

@media(min-width:768px) and (max-width:991px) {

    .tbg-sm-newline,
    .tbg-md-newline,
    .tbg-lg-newline {
        margin-top: 10px
    }

    .tbg-sm-newline {
        clear: both
    }

    .tbg-sm-newline.toolbar-group-right {
        float: left
    }

    .tbg-md-newline.toolbar-group-right,
    .tbg-lg-newline.toolbar-group-right {
        float: left
    }
}

@media(min-width:992px) and (max-width:1199px) {

    .tbg-md-newline,
    .tbg-lg-newline {
        margin-top: 10px
    }

    .tbg-md-newline {
        clear: both;
        margin-top: 10px
    }

    .tbg-md-newline.toolbar-group-right {
        float: left
    }

    .tbg-lg-newline.toolbar-group-right {
        float: left
    }
}

@media(min-width:1200px) {
    .tbg-lg-newline {
        clear: both;
        margin-top: 10px
    }

    .tbg-lg-newline.toolbar-group-right {
        float: left
    }
}

.header-toolbar {
    margin-bottom: 20px
}

@media(min-width:768px) {
    .header-toolbar {
        border-radius: 4px
    }
}

.header-toolbar .dropdown-menu {
    margin-top: 7px
}

.header-toolbar .toolbar-group,
.header-toolbar .toolbar-group-expand,
.header-toolbar .toolbar-group-right {
    height: 50px
}

.header-toolbar .toolbar-group {
    margin-left: 15px;
    padding-right: 0
}

.header-toolbar .toolbar-group:first-child .toolbar-group-content,
.header-toolbar .toolbar-group:first-child .toolbar-group-field {
    padding-left: 15px
}

.header-toolbar .toolbar-group:first-child .toolbar-group-content:first-child,
.header-toolbar .toolbar-group:first-child .toolbar-group-field:first-child {
    padding-left: 0;
    padding-right: 15px
}

.header-toolbar .toolbar-group-right {
    margin-left: 15px;
    margin-right: 15px;
    padding-left: 0
}

.header-toolbar .toolbar-group-right+.toolbar-group-right {
    margin-left: 0
}

.header-toolbar .toolbar-group-expand-text {
    line-height: 50px;
    padding-left: 15px
}

.header-toolbar .toolbar-group-content>a,
.header-toolbar .toolbar-group-content>.dropdown>a {
    border-radius: 4px
}

.header-toolbar .container-fluid-1280 .toolbar-group {
    margin-left: 0
}

.header-toolbar .container-fluid-1280 .toolbar-group-right {
    margin-right: 0
}

.header-toolbar-default {
    background-color: #f8f8f8;
    border: 1px solid #e7e7e7
}

.header-toolbar-default .toolbar-group:first-child .toolbar-group-content:first-child,
.header-toolbar-default .toolbar-group:first-child .toolbar-group-field:first-child {
    border-right: 1px solid #e7e7e7
}

.header-toolbar-default .toolbar-group-content>a,
.header-toolbar-default .toolbar-group-content>.dropdown>a {
    color: #777
}

.header-toolbar-default .toolbar-group-content>a:focus,
.header-toolbar-default .toolbar-group-content>a:hover,
.header-toolbar-default .toolbar-group-content>.dropdown>a:focus,
.header-toolbar-default .toolbar-group-content>.dropdown>a:hover {
    background-color: transparent;
    color: #333
}

.header-toolbar-default .toolbar-group-expand,
.header-toolbar-default .toolbar-group-expand-text {
    color: #777
}

.tooltip-inner {
    max-width: 230px;
    word-wrap: break-word
}

.toggle-card {
    -webkit-user-select: none;
    float: left;
    line-height: normal;
    position: relative
}

.toggle-card-container {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: none;
    color: #333;
    display: table;
    height: 78px;
    padding: 4px 4px;
    text-align: center;
    width: 69px
}

.toggle-card-cell {
    display: table-cell;
    text-align: center;
    word-break: break-word
}

.toggle-card-icon {
    border-radius: 30px;
    font-size: 16px;
    height: 32px;
    margin: 0 auto;
    width: 32px
}

.toggle-card-icon [class*="icon-"] {
    display: block
}

.toggle-card-label {
    height: 40px;
    line-height: 16px;
    overflow: hidden;
    padding-top: 4px
}

input.toggle-card {
    height: 78px;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 69px
}

.toggle-card input.toggle-card {
    height: auto;
    width: auto
}

input.toggle-card:empty~.toggle-card-container .toggle-card-on {
    display: none
}

input.toggle-card:empty~.toggle-card-container .toggle-card-icon {
    background-color: transparent;
    border: #869cad solid 0
}

input.toggle-card:empty~.toggle-card-container .toggle-card-icon [class*="icon-"] {
    line-height: 32px
}

input.toggle-card:checked~.toggle-card-container {
    background-color: #fff;
    border: 1px solid #337ab7;
    color: #337ab7;
    padding-bottom: 4px;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 4px
}

input.toggle-card:checked~.toggle-card-container .toggle-card-off {
    display: none
}

input.toggle-card:checked~.toggle-card-container .toggle-card-on {
    display: block
}

input.toggle-card:checked~.toggle-card-container .toggle-card-icon {
    background-color: transparent;
    border: 0 solid #337ab7
}

input.toggle-card:checked~.toggle-card-container .toggle-card-icon [class*="icon-"] {
    line-height: 32px
}

input.toggle-card:focus~.toggle-card-container {
    box-shadow: 0 0 3px 2px rgba(102, 175, 233, 0.6)
}

input.toggle-card[disabled]~.toggle-card-container {
    cursor: not-allowed;
    opacity: .4
}

.toggle-switch-bar .toggle-switch-handle {
    display: block;
    float: left;
    min-width: 50px;
    text-transform: uppercase
}

.toggle-switch-bar .toggle-switch-icon {
    font-size: 12px
}

.toggle-switch-bar .button-icon {
    font-size: 12px
}

input.toggle-switch {
    font-size: 62.5%;
    opacity: 0;
    position: absolute
}

input.toggle-switch:empty~.toggle-switch-bar:before {
    background-color: #eee;
    border: 1px solid #ccc
}

input.toggle-switch:checked~.toggle-switch-bar:before {
    background-color: #337ab7;
    border: 1px solid #337ab7
}

input.toggle-switch:empty~.toggle-switch-bar:after {
    background-color: #fff;
    border: 1px solid #ccc
}

input.toggle-switch:checked~.toggle-switch-bar:after {
    background-color: #FFF;
    border: 1px solid #337ab7
}

input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-icon {
    color: #555
}

input.toggle-switch:checked~.toggle-switch-bar .toggle-switch-icon {
    color: #FFF
}

input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-icon.button-icon {
    color: #555
}

input.toggle-switch:checked~.toggle-switch-bar .toggle-switch-icon.button-icon {
    color: #337ab7
}

input.toggle-switch:empty~.toggle-switch-bar {
    cursor: pointer;
    display: block;
    float: left;
    font-size: 1.2rem;
    line-height: 25px;
    min-height: 25px;
    position: relative;
    text-indent: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

input.toggle-switch:empty~.toggle-switch-bar:after,
input.toggle-switch:empty~.toggle-switch-bar:before {
    bottom: 0;
    content: ' ';
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    width: 50px
}

input.toggle-switch:empty~.toggle-switch-bar:after {
    border-radius: 3px 0 0 3px;
    bottom: 0;
    height: 25px;
    left: 0;
    top: 0;
    width: 25px
}

input.toggle-switch:empty~.toggle-switch-bar:before {
    border-radius: 3px
}

input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-handle:after {
    content: attr(data-label-off);
    margin-left: 6px
}

input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-icon {
    left: 0;
    line-height: 25px;
    position: absolute;
    text-align: center;
    text-indent: 0;
    top: 0;
    width: 25px;
    z-index: 1
}

input.toggle-switch:empty~.toggle-switch-bar .button-icon-on,
input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-icon-on {
    opacity: 0
}

input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-icon-on {
    left: 0
}

input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-icon-off {
    left: 25px
}

input.toggle-switch:checked~.toggle-switch-bar:after {
    border-radius: 0 3px 3px 0;
    left: 25px
}

input.toggle-switch:checked~.toggle-switch-bar:before {
    border-radius: 3px
}

input.toggle-switch:checked~.toggle-switch-bar .toggle-switch-handle:after {
    content: attr(data-label-on);
    margin-left: 6px
}

input.toggle-switch:checked~.toggle-switch-bar .button-icon {
    left: 25px
}

input.toggle-switch:checked~.toggle-switch-bar .button-icon-on,
input.toggle-switch:checked~.toggle-switch-bar .toggle-switch-icon-on {
    opacity: 1
}

input.toggle-switch:checked~.toggle-switch-bar .button-icon-off,
input.toggle-switch:checked~.toggle-switch-bar .toggle-switch-icon-off {
    opacity: 0
}

input.toggle-switch:disabled~.toggle-switch-bar,
input.toggle-switch.disabled~.toggle-switch-bar {
    cursor: not-allowed;
    opacity: .4
}

input.toggle-switch:focus~.toggle-switch-bar:before {
    box-shadow: 0 0 3px 2px #66afe6
}

input.toggle-switch:empty~.toggle-switch-bar:after,
input.toggle-switch:empty~.toggle-switch-bar:before,
input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-icon,
input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-handle:after,
input.toggle-switch:empty~.toggle-switch-bar .toggle-switch-handle:before {
    transition: all 100ms ease-in
}

.toggle-switch-label {
    display: block;
    margin-bottom: 2px
}

.toggle-switch-text {
    clear: both;
    display: block;
    font-size: 1.25rem
}

.toggle-switch-text-left,
.toggle-switch-text-right {
    float: left;
    line-height: 25px
}

.toggle-switch-text-left {
    margin-right: 7px
}

.toggle-switch-text-right {
    clear: none;
    margin-left: 7px
}

body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: scrollbar
}

.monospace {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace
}

.sans-serif {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
}

.serif {
    font-family: Georgia, "Times New Roman", Times, serif
}

.icon-angle-left {
    font-size: 1.5em
}

.icon-xs {
    font-size: .6em
}

.icon-xs.icon-angle-left {
    font-size: .9em
}

.icon-sm {
    font-size: .8em
}

.icon-sm.icon-angle-left {
    font-size: 1.2em
}

.icon-lg {
    font-size: 1.667em
}

.icon-lg.icon-angle-left {
    font-size: 2.667em
}

.icon-xl {
    font-size: 3.334em
}

.icon-xl.icon-angle-left {
    font-size: 4.667em
}

.icon-xxl {
    font-size: 5em
}

.bg-default {
    background-color: #eee
}

a.bg-default:hover,
a.bg-default:focus {
    background-color: #d5d5d5
}

mark,
.mark {
    background-color: #fcf8e3;
    box-decoration-break: clone;
    box-shadow: -0.25em 0 0 #fcf8e3;
    color: #333;
    display: inline;
    line-height: normal;
    padding: 2px .25em 3px 0;
    position: relative;
    white-space: pre-wrap
}

mark:before,
.mark:before {
    background-color: #fcf8e3;
    bottom: 0;
    content: '';
    display: block;
    position: absolute;
    right: 100%;
    top: 0;
    width: .25em;
    z-index: -1
}

td .truncate-text,
th .truncate-text {
    white-space: normal \9
}

.truncate-text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal \9;
    word-wrap: normal
}

.blockquote-xs {
    border-left: 1px solid #eee;
    font-size: 12.25px;
    padding: 10px 14px
}

.blockquote-sm {
    border-left: 3px solid #eee;
    font-size: 14px;
    padding: 10px 16px
}

.blockquote-lg {
    border-left: 8px solid #eee;
    font-size: 26.25px;
    padding: 10px 30px
}

.blockquote-danger {
    border-color: #d9534f
}

.blockquote-danger footer,
.blockquote-danger small,
.blockquote-danger .small {
    color: #d9534f
}

.blockquote-default {
    border-color: #eee
}

.blockquote-default footer,
.blockquote-default small,
.blockquote-default .small {
    color: #eee
}

.blockquote-info {
    border-color: #5bc0de
}

.blockquote-info footer,
.blockquote-info small,
.blockquote-info .small {
    color: #5bc0de
}

.blockquote-primary {
    border-color: #337ab7
}

.blockquote-primary footer,
.blockquote-primary small,
.blockquote-primary .small {
    color: #337ab7
}

.blockquote-success {
    border-color: #5cb85c
}

.blockquote-success footer,
.blockquote-success small,
.blockquote-success .small {
    color: #5cb85c
}

.blockquote-warning {
    border-color: #f0ad4e
}

.blockquote-warning footer,
.blockquote-warning small,
.blockquote-warning .small {
    color: #f0ad4e
}

.user-icon {
    border-radius: 50%;
    background-color: transparent;
    color: #333;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    height: 34px;
    line-height: 34px;
    width: 34px
}

.user-icon.user-icon-circle,
.user-icon-circle .user-icon {
    border-radius: 50%
}

.user-icon.user-icon-rounded,
.user-icon-rounded .user-icon {
    border-radius: 5px
}

.user-icon.user-icon-square,
.user-icon-square .user-icon {
    border-radius: 0
}

.user-icon-xxl {
    height: 96px;
    line-height: 96px;
    width: 96px;
    font-size: 37px
}

.user-icon-xl {
    height: 48px;
    line-height: 48px;
    width: 48px;
    font-size: 22px
}

.user-icon-lg {
    height: 34px;
    line-height: 34px;
    width: 34px;
    font-size: 13px
}

.user-icon-sm {
    height: 22.50056px;
    line-height: 22.50056px;
    width: 22.50056px;
    font-size: 9px
}

.user-icon-xs {
    height: 16.50041px;
    line-height: 16.50041px;
    width: 16.50041px;
    font-size: 8px
}

.user-icon-danger {
    background-color: #d9534f;
    color: #FFF
}

.user-icon-default {
    background-color: #777;
    color: #FFF
}

.user-icon-info {
    background-color: #5bc0de;
    color: #FFF
}

.user-icon-primary {
    background-color: #337ab7;
    color: #FFF
}

.user-icon-success {
    background-color: #5cb85c;
    color: #FFF
}

.user-icon-warning {
    background-color: #f0ad4e;
    color: #FFF
}

@media(min-width:768px) {
    .user-icon-xxl {
        height: 128px;
        line-height: 128px;
        width: 128px;
        font-size: 50px
    }

    .user-icon-xl {
        height: 64px;
        line-height: 64px;
        width: 64px;
        font-size: 30px
    }

    .user-icon-lg {
        height: 45px;
        line-height: 45px;
        width: 45px;
        font-size: 18px
    }

    .user-icon-sm {
        height: 30px;
        line-height: 30px;
        width: 30px;
        font-size: 12px
    }

    .user-icon-xs {
        height: 22px;
        line-height: 22px;
        width: 22px;
        font-size: 8px
    }
}

.portlet-msg-progress {
    background-image: url('~@/assets/images/loading_indicator.gif');
    background-position: 6px 50%;
    background-repeat: no-repeat;
    padding-left: 30px
}

.navbar .nav li>a {
    overflow-wrap: break-all;
    word-wrap: break-all;
    word-break: break-all
}

.entry-status.approved {
    border-color: #d6e9c6 !important
}

.entry-status.scheduled {
    border-color: #d9edf7 !important
}

.entry-status.pending {
    border-color: #bce8f1 !important
}

.entry-status.denied {
    border-color: #ebccd1 !important
}

.entry-status.expired {
    border-color: #faebcc !important
}

.entry-status.draft {
    border-color: #555 !important
}

.status.approved {
    color: #3c763d
}

.status.scheduled {
    color: #31708f
}

.status.pending {
    color: #31708f
}

.status.denied {
    color: #a94442
}

.status.expired {
    color: #8a6d3b
}

.status.draft {
    color: #555
}

/* end clay */
</style>
