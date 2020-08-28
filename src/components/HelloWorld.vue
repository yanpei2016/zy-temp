<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <%_ if (useVuex) { _%>
    <p>vuex: </p>
    <p>{{account}}</p>
    <%_ } _%>
    <%_ if(UIfrag==='vant'){ _%>
    <van-button type="primary" @click="addCount">add</van-button>
    <%_ } _%>
    <%_ if(UIfrag==='antVue'){ _%>
    <a-button type="primary" @click="addCount">add</a-button>
    <%_ } _%>
    <%_ if(UIfrag==='eleUI'){ _%>
    <el-button type="primary" @click="addCount">add</el-button>
    <%_ } _%>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      count: 0
    }
  },
  props: {
    msg: String
  },
  computed:{
    account() {
    <%_ if (useVuex) { _%>
      return this.$store.state.moduleStore.account
    <%_ } _%>
     <%_ if (!useVuex) { _%>
     return this.count
    <%_ } _%>
    }
  },
  methods:{
    addCount() {
      this.count++
      <%_ if (useVuex) { _%>
      this.$store.dispatch('moduleStore/addAccount',  this.count)
      <%_ } _%>
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
