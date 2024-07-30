<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container"> <!--container-fluid会让container显示比较宽-->
    <!--<a class="navbar-brand" href="/">King Of Bots</a>-->
    <router-link class="navbar-brand" :to="{name: 'home'}">King Of Bots</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!--<a class="nav-link " aria-current="page" href="/pk/">PK</a>-->
          <router-link class="nav-link " :to="{name: 'pk_index'}">PK</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'record_index'}">Record</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'ranklist_index'}">Rank List</router-link>
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

</script>

<style scoped>/* scope的作用是加上一个随机字符串，使这个样式不会影响到组件 */

</style>
