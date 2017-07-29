import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router';
import vueResource from "vue-resource"

//开启debug模式
Vue.config.debug = true;

Vue.use(vueRouter);
Vue.use(vueResource);

// 定义组件

const First = { template: '<div><h2>123</h2></div>' }
import first from './component/firstcomponent.vue'
import suibian from './component/suibian.vue'

const humanity = {template: '<div>这里是王者荣耀召唤师峡谷</div>'}
const nature = {template: '<div>你走错地方了</div>'}

//创建路由
//配置路由规则
const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
	 {
	 	path: '/science',
	 	component: first
	 },
	 {
	 	path: '/live',
	 	component: suibian
	 },
	 {
	 	path: '/humanity',
	 	component: humanity
	 },
	 {
	 	path: '/nature',
	 	component: nature
	 }
	]
})


new Vue({
  //el: '#app',
 // render: h => h(App)
 router,
 data:{
 	acti:[]
 },
 mounted:function(){
 	console.log(0)
 	this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
 		headers: {
 			
 		},
 		emulateJSON: true
 	}).then(function(response){
 		console.log(response.body.subjects)
   		this.acti = response.body.subjects
 	},function(response){
 		console.log(2)
 	})
 }
}).$mount('#app')
