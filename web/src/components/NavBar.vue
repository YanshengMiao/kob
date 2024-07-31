<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container"> <!--container-fluid会让container显示比较宽-->
    <!--<a class="navbar-brand" href="/">King Of Bots</a>-->
    <router-link class="navbar-brand" :to="{name: 'home'}">King Of Bots</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!--<a class="nav-link " aria-current="page" href="/pk/">PK</a>-->
          <!--:是v:vind的简写-->
          <router-link :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'pk_index'}">PK</router-link> <!--是'nav-link active不是nav-link-active'-->
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'record_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'record_index'}">Record</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'ranklist_index'}">Rank List</router-link>
        </li>
      </ul>
      <ul class="navbar-nav"> <!--me-auto mb-2 mb-lg-0会控制宽度，也即entity的水平位置-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Yansheng
          </a>
          <ul class="dropdown-menu">
            <li>
                <router-link class="dropdown-item" :to="{name: 'user_bot_index'}">My bot</router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    setup() {
        const route = useRoute();
        let route_name = computed(() => route.name);
        return {
            route_name
        }
    }
}
</script>

<style scoped>/* scope的作用是加上一个随机字符串，使这个样式不会影响到组件 */

</style>
