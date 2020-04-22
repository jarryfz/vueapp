import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from 'vuex'
import mui from './js/mui.js'; 
Vue.prototype.mui = mui
// Vue.config.productionTip = false;

window.app = Object.assign({}, {mui});
const initVue = function(){
	Vue.use(Vuex);
	// Object.keys(directives).forEach((key) => {
	//     Vue.directive(key, directives[key]);
	// });
	const VueApp = Vue.extend(App);
	window.app.App = new VueApp({ router, store,name: "app" }).$mount('#app');
	// new Vue({
	//   router,
	//   store,
	//   render: h => h(App)
	// }).$mount("#app");
}
if(mui.os.plus) {
	mui.plusReady(function(){
		initVue()
	})
}else {
	mui.ready(function() {
		initVue();
	});
}
