<template>
<div>
    <!-- button search -->
    <div class="grid grid-cols-12">
        <slot name="searchdata"> </slot>
    </div>
    <!--  data table -->
    <el-table :data="datatb.tableData" @selection-change="handleSelectionChange" border style="width: 100%" row-key="id">
        <slot></slot>
    </el-table>

    <!--  -->
    <!-- pagination -->
    <!-- current-change khi trang hien tai thay doi -->
    <el-pagination @current-change="handleCurrentChange" :page-size="100" layout="prev, pager, next, jumper" :total="datatb.total * 100">
    </el-pagination>
    <!--  -->
</div>
</template>

<script>
import axios from 'axios';
export default {
    // Gia tri nhan vao
    props: {
        // Tên hàm truyền ra view khhi thay đổi check box
        nameCheckbox: {
            type: String,
            default: "checkbox",
        },
        namePaging: {
            type: String,
            default: "pagination",
        },
        // Dữ liệu ban đâù
        datatb: {
            type: Object,
        },
        methodselect: {
            type: String,
        }
    },

    //
    data() {
        return {};
    },
    mounted() {
        // this.loadData();
    },
    watch: {},
    methods: {

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
                    self.datatb.tableData = response.data.data;
                });
        },
        // search dữ liệu
        // onChange(event) {
        //   // Gán lại trang hiện tại là 1 và gán lại giá trị searchnow ( biến dùng để tìm kiếm)
        //   this.datatb.paginatenow = 1;
        //   this.datatb.searchnow = event.target.value;
        //   // Load lại bảng
        //   this.loadData();
        // },
        // Khi thay đổi check box thì truyền dữ liệu ra
        handleSelectionChange(val) {
            // console.log(val);
            this.$emit(this.methodselect, val);
        },
        // Sua xoa

        // Khi thay đổi trang hiện tại thì truyền dữ liệu ra
        // handleSizeChange(val) {
        //   console.log(`${val} items per page`);
        // },
        handleCurrentChange(val) {
            this.$emit("pagination", val);
        },
    },
};
</script>

<style>
[v-cloak] {
    display: none;
}

.el-table__body-wrapper.is-scrolling-left table {
    width: 100% !important;
}

.el-table th.el-table__cell {
    background-color: #1481c1;
    text-align: center;

}

th .cell {
    color: white;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;

}

td .cell {
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.25rem;

}

.el-input--mini .el-input__inner {
    height: 40px;
}

.el-pagination {
    padding: 12px 5px;
    text-align: right;
}

h2 {
    text-align: center;
    color: #2079df;
    font-size: 28px;
    float: left;
    width: 100%;
    position: relative;
    line-height: 58px;
    font-weight: 400;
}

h2:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100px;
    height: 2px;
    background-color: #2079df;
    margin-left: -50px;
}

/*= Reset CSS End
================= */

/*= input focus effects css
=========================== */
:focus {
    outline: none;
}

.col-3 {
    margin-top: 4px;
    margin-bottom: 4px;
    position: relative;
}

/* necessary to give position: relative to parent. */
input[type="text"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
}

.effect-7 {
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
}

.effect-7~.focus-border:before,
.effect-7~.focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.4s;
}

.effect-7~.focus-border:after {
    top: auto;
    bottom: 0;
}

.effect-7~.focus-border i:before,
.effect-7~.focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.6s;
}

.effect-7~.focus-border i:after {
    left: auto;
    right: 0;
}

.effect-7:focus~.focus-border:before,
.effect-7:focus~.focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
}

.effect-7:focus~.focus-border i:before,
.effect-7:focus~.focus-border i:after {
    top: 0;
    height: 100%;
    transition: 0.6s;
}

.el-responsive-table {
    overflow-x: auto;
}

.el-table__body-wrapper {
    min-width: unset !important;
}



@media screen and (max-width: 767px) {
    .el-table__body-wrapper {
        overflow-x: scroll;
    }

    .el-pagination__jump {
        display: block !important;
    }

    .el-table__header-wrapper,
    .el-table__footer-wrapper {
        display: none;
    }

    .el-table-column--prop-name,
    .el-table-column--prop-age,
    .el-table-column--prop-gender,
    .el-table-column--prop-city {
        width: 100%;
        display: block;
        text-align: center;
    }

    .el-table__row {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #f0f0f0;
        padding: 16px 0;
        width: 610px;
    }

    .el-table__row .el-table__cell {
        width: 100%;
    }

    .el-table__column {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 8px;
    }

    .el-table__column--prop-name,
    .el-table__column--prop-city {
        font-weight: bold;
        color: #333;
    }

    .el-table__column--prop-age,
    .el-table__column--prop-gender {
        color: #999;
    }

}

/* 
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .el-table-column--prop-name,
  .el-table-column--prop-age,
  .el-table-column--prop-gender,
  .el-table-column--prop-city {
    width: 25%;
    display: block;
    float: left;
  }

  .el-table__column--prop-name {
    font-weight: bold;
    color: #333;
  }

  .el-table__column--prop-age,
  .el-table__column--prop-gender,
  .el-table__column--prop-city {
    color: #999;
  }

  .el-table__row {
    display: block;
    clear: both;
    border-bottom: 1px solid #f0f0f0;
    padding: 16px 0;
  }

  .el-table__column {
    display: block;
    float: left;
    padding: 8px;
  }
}

@media screen and (min-width: 1024px) {
  .el-table__header-wrapper {
    display: table-header-group;
  }

  .el-table__footer-wrapper {
    display: table-footer-group;
  }

  .el-table-column--prop-name,
  .el-table-column--prop-age,
  .el-table-column--prop-gender,
  .el-table-column--prop-city {
    width: auto;
    display: table-cell;
    text-align: left;
  }

  .el-table__row {
    display: table-row;
    border-bottom: none;
    padding: 0;
  }
} */
</style>
