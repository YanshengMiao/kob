<template>
<div>
  <div>Bot昵称：{{ bot_name }}</div>
  <div>Bot战力：{{ bot_rating }}</div>
</div>
  <router-view/>
</template>

<script>
//脚本部分可直接使用js注释语法

//这是ajax
import $ from 'jquery';
//定义两个变量
import { ref } from 'vue';
export default {
  name: "App",
  //setup是整个函数的入口
  setup: () => {
    let bot_name = ref("");
    let bot_rating = ref("");

    $.ajax({
      url: "http://localhost:3000/pk/getbotinfo/",
      type: "get", //get:获取数据 post:创建数据
      success: resp => {
        console.log(resp); //CORS:跨域问题（引用的port跟当前port不一样导致）
        bot_name.value = resp.name;
        bot_rating.value = resp.rating;
      }
    });

    return {
      bot_name,
      bot_rating
    }
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
