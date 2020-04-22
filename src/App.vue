<template>
  <div id="app">
		<div class="mui-content">
			<router-view></router-view>
		</div>
		<van-tabbar
			v-model="active"
			active-color="#07c160"
			inactive-color="#000"
			route>
			<van-tabbar-item icon="home-o" :to="{name: 'home'}">首页</van-tabbar-item>
			<van-tabbar-item icon="search" :to="{name: 'message'}">消息</van-tabbar-item>
			<van-tabbar-item icon="freinds-o" :to="{name: 'news'}">资讯</van-tabbar-item>
			<van-tabbar-item icon="setting-o" :to="{name: 'mine'}">我的</van-tabbar-item>
		</van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Toast } from 'vant';
import './css/mui.min.css';
export default{
	components:{
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem,
		[Toast.name]: Toast
	},
	data() {
		return {
			active: 0,
		}
	},
	created() {
		this.initApp();
	},
	mounted() {
		this.mui.plusReady(function () {
			plus.nativeUI.confirm("Are you sure ready?", function(e){
					console.log("Close confirm: "+e.index);
				});
		})
	},
	methods: {
		initApp() {
			// this.$toast('打卡')
		}
	}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
