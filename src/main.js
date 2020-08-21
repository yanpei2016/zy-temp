import Vue from 'vue'
import App from './App.vue'
<%_ if (useVueRouter) { _%>import router from './router' 
<%_ } _%>
<%_ if (useVuex) { _%>import store from './store' 
<%_ } _%>
<%_ if(UIfrag==='eleUI'){ _%>import {} from 'element-ui' 
<%_ } _%>
<%_ if(UIfrag==='vant'){ _%>import {} from 'vant'
<%_ } _%>
<%_ if(UIfrag==='antVue'){ _%>import {}  from 'ant-design-vue';
<%_ } _%>
<%_ if(UIfrag==='antVue'){ _%>import 'ant-design-vue/dist/antd.css';
<%_ } _%>
Vue.use()
Vue.config.productionTip = false
new Vue({
  <% if(useVueRouter){ %>router,<% } %>
  <% if(useVuex){%>store,<% } %>
  render: function (h) { return h(App) },
}).$mount('#app')
