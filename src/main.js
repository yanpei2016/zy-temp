import Vue from 'vue'
import App from './App.vue'
<% if (useVueRouter) { %>
  import router from './router'
<% } %>

<% if (useVuex) { %>
  import store from './store'
<% } %>

<% if(UIfrag==='eleUI'){%>
  import ElementUI from 'element-ui'
  Vue.use(ElementUI)
<% } %>
<% if(UIfrag==='vant'){%>
  import vant from 'vant'
  Vue.use(vant)
<% } %>
<% if(UIfrag==='antVue'){%>
  import Antd  from 'ant-design-vue'
  import 'ant-design-vue/dist/antd.css';
  Vue.use(Antd)
<% } %>


Vue.config.productionTip = false
new Vue({
  <% if(useVueRouter){%>
    router,
  <% } %>
  <% if(useVuex){%>
    store,
  <% } %>
  render: function (h) { return h(App) },
}).$mount('#app')
