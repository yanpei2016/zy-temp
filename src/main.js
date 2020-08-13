import Vue from 'vue'
import App from './App.vue'
<%_ if (useVueRouter) { _%>import router from './router'<%_ } _%>
<%_ if (useVuex) { _%>import store from './store'<%_ } _%>
<%_ if(UIfrag==='eleUI'){ _%>import ElementUI from 'element-ui' 
Vue.use(ElementUI)<%_ } _%>
<%_ if(UIfrag==='vant'){ _%>import vant from 'vant'
Vue.use(vant)<%_ } _%>
<%_ if(UIfrag==='antVue'){ _%>import Antd  from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd)
<%_ } _%>


Vue.config.productionTip = false
new Vue({
  <%_ if(useVueRouter){ _%>
    router, <%_ } _%>
  <%_ if(useVuex){ _%>
    store,<%_ } _%>
  render: function (h) { return h(App) },
}).$mount('#app')
