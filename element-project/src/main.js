import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,//router配置导入
  render: h => h(App)
});
Vue.config.productionTip = false

