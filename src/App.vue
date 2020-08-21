<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <%_ if (!useVueRouter) { %><HelloWorld msg="Welcome to Your Vue.js App" /><% } _%>
        <%_ if (useVueRouter) { %><router-view></router-view><% } _%>
    </div>
</template>

<script>
<%_ if (!useVueRouter) { %>
import HelloWorld from "./components/HelloWorld.vue";
<% } _%>
export default {
    name: "App",
    components: {
        <%_ if (!useVueRouter) { %>HelloWorld,<% } _%>
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
