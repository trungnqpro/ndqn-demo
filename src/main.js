import Vue from 'vue'
import App from './App.vue'
import router from './router';

// Configure Vuejs-noty
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import lang from 'element-ui/lib/locale/lang/vi'
import locale from 'element-ui/lib/locale'
import CKEditor from 'ckeditor4-vue'
import VueHtmlToPaper from 'vue-html-to-paper';
import Treeselect from '@riophae/vue-treeselect'

locale.use(lang)

Vue.component('Datatable', require('./components/Datatable.vue').default);
Vue.component('UploadFile', require('./components/UploadFile.vue').default);

Vue.use(CKEditor);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueNoty, {
	timeout: 2000,
	progressBar: true,
	layout: 'topRight'
});

Vue.component('treeselect', Treeselect)
// set auth header
const options = {
	name: "_blank",
	specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
	styles: ["https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css","/css/print.css"],
	script:	["https://cdn.tailwindcss.com"]
};
Vue.use(VueHtmlToPaper, options);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');