import Vue from 'vue'
import App from './App.vue'
<%_ if (useVueRouter) { _%>import router from './router' 
<%_ } _%>
<%_ if (useVuex) { _%>import store from './store' 
<%_ } _%>
<%_ if(UIfrag==='eleUI'){ _%>import { Button } from 'element-ui' 
<%_ } _%>
<%_ if(UIfrag==='vant'){ _%>import { Button } from 'vant'
<%_ } _%>
<%_ if(UIfrag==='antVue'){ _%>import { Button }  from 'ant-design-vue';
<%_ } _%>

Vue.use(Button)
Vue.config.productionTip = false
new Vue({
  <% if(useVueRouter){ %>router,<% } %>
  <% if(useVuex){%>store,<% } %>
  render: function (h) { return h(App) },
}).$mount('#app')
