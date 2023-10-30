import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios';
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Trangchu from './pages/Trangchu.vue'
import Diaban from './pages/Diaban.vue'
import Nganhnghe from './pages/quanlydanhmuc/Nganhnghe.vue'
import Dulieuky from './pages/Dulieuky.vue'
import Dulieukydonvi from './pages/dulieuky/Dulieukydonvi.vue'
import Xemthongtin from './pages/Xemthongtin.vue'
import Donvi from './pages/Donvi.vue'
import Mohinhhoatdong from './pages/quanlydanhmuc/Mohinhhoatdong.vue'
import Nhomsanpham from './pages/quanlydanhmuc/Nhomsanpham.vue'
import Loaihinhkinhte from './pages/quanlydanhmuc/Loaihinhkinhte.vue'
import Chucdanh from './pages/quanlydanhmuc/Chucdanh.vue'
import Linhvuchoatdong from './pages/quanlydanhmuc/Linhvuchoatdong.vue'
import Banner from './pages/quanlydanhmuc/Banner.vue'
import Nhomdonvi from './pages/quanlydanhmuc/Nhomdonvi.vue'
import Nguongoc from './pages/quanlydanhmuc/Nguongoc.vue'
import Danhhieuthidua from './pages/quanlydanhmuc/Danhhieuthidua.vue'
import Hinhthuckhenthuong from './pages/quanlydanhmuc/Hinhthuckhenthuong.vue'
import Chungnhansanpham from './pages/quanlydanhmuc/Chungnhansanpham.vue'
import Chungnhankhac from './pages/quanlydanhmuc/Chungnhankhac.vue'
import Changepassword from './pages/doimatkhau/Changepassword.vue'
import Quanlytaikhoan from './pages/quanlytaikhoan/Quanlytaikhoan.vue'


import Kybiendong from './pages/quanlydanhmuc/Kybiendong.vue'
import Quanlysanpham from './pages/quanlysanpham/Quanlysanpham.vue'
// đánh giá đơn vị theo kỳ biến động
import Danhgiadonvi from '@/pages/danhgiakybiendong/Danhgiadonvi'
// Xem thông tin đơn vị
import Xemthongtindonvi from './pages/xemthongtindonvi/Xemthongtindonvi.vue'
import Xembaocao from './pages/xemthongtindonvi/Xembaocao.vue'
import Baocaodanhgia from './pages/xemthongtindonvi/Baocaodanhgia.vue'
import Bangdanhgiahoptacxanam from './pages/xemthongtindonvi/Bangdanhgiahoptacxanam.vue'
// lien hệ
import Quanlylienhe from './pages/thongtin/Quanlylienhe.vue'
// layout ngoài
import Website from './pages/website/website.vue'
import Baocaothongke from './pages/website/Baocaothongke.vue'
import Lienhe from './pages/website/Lienhe.vue'
import Sanpham from './pages/website/Sanpham.vue'
import Chitietsanpham from './pages/website/Chitietsanpham.vue'
import Dangkytaikhoan from './pages/website/Dangkytaikhoan.vue'
import Quenmatkhau from './pages/website/Quenmatkhau.vue'
import Timkiemdulieu from './pages/website/Timkiemdulieu.vue'
import Thongbaothanhcong from './pages/website/Thongbaothanhcong.vue'

import Dulieunam from './pages/dulieuky/Dulieunam.vue'
import Xemdulieunam from '@/pages/dulieuky/Xemdulieunam'
import Baocaotinh from '@/pages/dulieuky/Baocaotinh'
import Baocaohuyen from '@/pages/dulieuky/Baocaohuyen'
import Phuluc17 from '@/pages/dulieuky/Phuluc17'
import Xemphuluc17 from '@/pages/dulieuky/Xemphuluc17'

import Baocaotaisan from '@/pages/baocao/Baocaotaisan'
import Thanhvienvalaodong from '@/pages/baocao/Thanhvienvalaodong'
import Trinhdocanbochuchot from '@/pages/baocao/Trinhdocanbochuchot'
import Baocaovondieule from '@/pages/baocao/Baocaovondieule'
import Baocaohoatdongdautu from '@/pages/baocao/Baocaohoatdongdautu'
import Baocaochinhsach from '@/pages/baocao/Baocaochinhsach'
import BaocaoketquakinhdoanhHTX from '@/pages/baocao/BaocaoketquakinhdoanhHTX'
import BaocaoketquakinhdoanhQTDND from '@/pages/baocao/BaocaoketquakinhdoanhQTDND'
import Baocaotrinhdocanbochuchot from '@/pages/baocao/Baocaotrinhdocanbochuchot'


Vue.use(Router)

const router = new Router({
	
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '/home', name: "home", component: Home , meta: { requiresAuth: true }},
		{ path: '/login', name: "login", component: Login },
		{ path: '/dia-ban', name: "diaban", component: Diaban ,meta: { requiresAuth: true }},
		{ path: '/quan-ly-du-lieu-ky', name: "dulieuky", component: Dulieuky ,meta: { requiresAuth: true }},
		{ path: '/quan-ly-du-lieu-ky-don-vi', name: "dulieukydonvi", component: Dulieukydonvi,meta: { requiresAuth: true }},
		{ path: '/xem-thong-tin', name: "xemthongtin", component: Xemthongtin },
		{ path: '/don-vi', name: "donvi", component: Donvi , meta: { requiresAuth: true }},

		//quan lý danh mục
		{ path: '/mo-hinh-hoat-dong', name: "mohinhhoatdong", component: Mohinhhoatdong ,meta: { requiresAuth: true } },
		{ path: '/nganh-nghe', name: "nganhnghe", component: Nganhnghe ,meta: { requiresAuth: true } },
		{ path: '/nhom-san-pham', name: "nhomsanpham", component: Nhomsanpham ,meta: { requiresAuth: true } },
		{ path: '/loai-hinh-kinh-te', name: "Loaihinhkinhte", component: Loaihinhkinhte  ,meta: { requiresAuth: true }},
		{ path: '/chuc-danh', name: "chucdanh", component: Chucdanh ,meta: { requiresAuth: true } },
		{ path: '/linh-vuc-hoat-dong', name: "linhvuchoatdong", component: Linhvuchoatdong ,meta: { requiresAuth: true } },
		{ path: '/ky-bien-dong', name: "kybiendong", component: Kybiendong  ,meta: { requiresAuth: true }},
		{ path: '/nhom-don-vi', name: "nhomdonvi", component: Nhomdonvi ,meta: { requiresAuth: true } },
		{ path: '/nguon-goc', name: "nguongoc", component: Nguongoc  ,meta: { requiresAuth: true }},
		{ path: '/banner', name: "banner", component: Banner ,meta: { requiresAuth: true } },
		{ path: '/quan-ly-san-pham', name: "quanlysanpham", component: Quanlysanpham ,meta: { requiresAuth: true } },
		{ path: '/danh-hieu-thi-dua', name: "danhhieuthidua", component: Danhhieuthidua ,meta: { requiresAuth: true } },
		{ path: '/hinh-thuc-khen-thuong', name: "hinhthuckhenthuong", component: Hinhthuckhenthuong ,meta: { requiresAuth: true } },
		{ path: '/chung-nhan-san-pham', name: "chungnhansanpham", component: Chungnhansanpham ,meta: { requiresAuth: true } },
		{ path: '/chung-nhan-khac', name: "chungnhankhac", component: Chungnhankhac ,meta: { requiresAuth: true } },
		{ path: '/change-password', name: "changepassword", component: Changepassword ,meta: { requiresAuth: true } },
		{ path: '/quan-ly-tai-khoan', name: "quanlytaikhoan", component: Quanlytaikhoan ,meta: { requiresAuth: true } },
		// -----------------------
		// đánh giá đơn vị
		{ path: '/danh-gia-don-vi', name: "danhgiadonvi", component: Danhgiadonvi  ,meta: { requiresAuth: true }},
		// xem thông tin đơn vị 
		{ path: '/xem-thong-tin-don-vi', name: "xemthongtindonvi", component: Xemthongtindonvi  ,meta: { requiresAuth: true }},
		{ path: '/xem-bao-cao', name: "xembaocao", component: Xembaocao ,meta: { requiresAuth: true } },
		{ path: '/bao-cao-danh-gia', name: "baocaodanhgia", component: Baocaodanhgia  ,meta: { requiresAuth: true }},
		{ path: '/bang-danh-gia-hop-tac-xa-nam', name: "bangdanhgiahoptacxanam", component: Bangdanhgiahoptacxanam  ,meta: { requiresAuth: true }},
		// end xem thông tin đơn vị 
		{ path: '/quan-ly-lien-he', name: "quanlylienhe", component: Quanlylienhe  ,meta: { requiresAuth: true }}, 
		{ path: '/trangchu', name: "trangchu", component: Trangchu  ,meta: { requiresAuth: true }},
		// website
		{ path: '/', name: "website", component: Website },
		{ path: '/bao-cao-thong-ke', name: "baocaothongke", component: Baocaothongke },
		{ path: '/lien-he', name: "lienhe", component: Lienhe },
		{ path: '/tim-kiem-du-lieu', name: "timkiemdulieu", component: Timkiemdulieu },
		{ path: '/san-pham', name: "sanpham", component: Sanpham },
		{ path: '/chi-tiet-san-pham', name: "chitietsanpham", component: Chitietsanpham },
		{ path: '/dang-ky-tai-khoan', name: "dangkytaikhoan", component: Dangkytaikhoan },
		{ path: '/thong-bao-thanh-cong', name: "thongbaothanhcong", component: Thongbaothanhcong },
		{ path: '/quen-mat-khau', name: "quenmatkhau", component: Quenmatkhau },
		// 
		{ path: '/du-lieu-nam', name: "Dulieunam", component: Dulieunam  ,meta: { requiresAuth: true }},
		{ path: '/tinh-hinh-hoat-dong-cua-hop-tac-xa-nam', name: "Xemdulieunam", component: Xemdulieunam  ,meta: { requiresAuth: true }},
		{ path: '/bao-cao-tinh', name: "Baocaotinh", component: Baocaotinh  ,meta: { requiresAuth: true }},
		{ path: '/bao-cao-huyen', name: "Baocaohuyen", component: Baocaohuyen  ,meta: { requiresAuth: true }},
		{ path: '/phu-luc-17', name: "Phuluc17", component: Phuluc17 ,meta: { requiresAuth: true }},
		{ path: '/xem-phu-luc-17', name: "Xemphuluc17", component: Xemphuluc17 ,meta: { requiresAuth: true }},
		// 
		{ path: '/bao-cao-tai-san', name: "Baocaotaisan", component: Baocaotaisan ,meta: { requiresAuth: true }},
		{ path: '/thanh-vien-va-lao-dong', name: "Thanhvienvalaodong", component: Thanhvienvalaodong ,meta: { requiresAuth: true }},
		{ path: '/bao-cao-trinh-do-can-bo-chu-chot', name: "Trinhdocanbochuchot", component: Trinhdocanbochuchot },
		{ path: '/bao-cao-von-dieu-le', name: "Baocaovondieule", component: Baocaovondieule,meta: { requiresAuth: true }},
		{ path: '/bao-cao-hoat-dong-dau-tu', name: "Baocaohoatdongdautu", component: Baocaohoatdongdautu ,meta: { requiresAuth: true }},
		{ path: '/bao-cao-chinh-sach', name: "Baocaochinhsach", component: Baocaochinhsach ,meta: { requiresAuth: true }},
		{ path: '/bao-cao-ket-qua-kinh-doanh-htx-lmhtx', name: "BaocaoketquakinhdoanhHTX", component: BaocaoketquakinhdoanhHTX,meta: { requiresAuth: true } },
		{ path: '/bao-cao-ket-qua-kinh-doanh-qtdnd-nhhtx', name: "BaocaoketquakinhdoanhQTDND", component: BaocaoketquakinhdoanhQTDND ,meta: { requiresAuth: true }},
		{ path: '/bao-cao-trinh-do-can-bo-chu-chot', name: "Baocaotrinhdocanbochuchot", component: Baocaotrinhdocanbochuchot ,meta: { requiresAuth: true }},

	]
})

const loginToken = localStorage.getItem("login_token");
axios.defaults.headers.common = { 'Authorization': `Bearer ${loginToken}` };
router.beforeEach(async (to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (loginToken) {
			next();
		}
		else {
			window.location.href = '/login'
		}
	}
	else {
		next();
	}
});

export default router 