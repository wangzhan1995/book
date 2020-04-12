<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

  export  default {
    name:'App',
    data(){
       return{

       }
    },
    created(){

    },

  }
</script>
<style lang="less">
  body{
    margin: 0;
    padding: 0;
    list-style: none;

  }
  ul{margin:0;padding:0;list-style:none}

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .el-main{
    padding: 0!important;
  }
  .el-header{
    padding: 0 !important;
    height: 210px !important;
  }

</style>
