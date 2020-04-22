import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "home",
		meta: { title: '首页' },
    component: require('../views/home/home.vue').default,
  },
	{
		path: "/home/message",
		name: "message",
		meta: {title: '消息'},
		component: require('../views/home/message.vue').default
	},
	{
		path: "/home/news",
		name: "news",
		meta: {title: '资讯'},
		component: require('../views/home/news.vue').default
	},
	{
		path: "/home/mine",
		name: "mine",
		meta: {title: '我的'},
		component: require('../views/home/mine.vue').default
	}
];

const router = new VueRouter({
  routes
});

export default router;
