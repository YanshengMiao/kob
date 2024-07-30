<template>
 <NavBar />
  <router-view/>
</template>

<script>
//脚本部分可直接使用js注释语法

import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"  //js里单双引号一样

export default {
  components: {
    NavBar
  }
}
</script>


<!-- 在Vue.js模板中使用HTML注释语法 -->
<style>
/*在样式内使用css注释语法*/
body {
  /*@表示当前目录根目录*/
  background-image: url("@/assets/background.png");
  background-size: cover;
}
</style>
