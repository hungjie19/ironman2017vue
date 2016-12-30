<template>
  <div>
    <!-- loading 拉到最外層，可以讓所有頁面使用。 -->
    <div v-if="loading" class="loader loader-curtain is-active"></div>
    <!-- 
      router-link 就像
      <a href="/c2f">CtoF</a>
      :to 裡面是物件形式，描述要轉跳的目的與需要帶的參數
      目的：考可以用 path 或 name
      在 main.js router 我們是這樣設定的：
      {
        path: '/hello',
        name: 'hello',
        component: Hello
      },
    -->
    <nav class="navbar navbar-default ">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" :to="{path: '/'}">Ironman2017vue</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{path: '/hello'}">Hello</router-link></li>
            <li><router-link :to="{name: 'c2f'}">CtoF</router-link></li>
            <li><router-link :to="{name: 'learnComponent'}">Component</router-link></li>
            <li><router-link :to="{name: 'count'}">Count</router-link></li>
            <li><router-link :to="{name: 'todo'}">Todo</router-link></li>
            <li><router-link :to="{name: 'shop'}">Shop</router-link></li>
            <li><router-link :to="{name: 'cart'}">Cart</router-link></li>
            <li><router-link :to="{name: 'open1999'}">open1999</router-link></li>
            <li><router-link :to="{name: 'login'}">login</router-link></li>
            <li><router-link :to="{name: 'multiple'}">multiples views</router-link></li>
            <li><router-link :to="{path: '/shop/cart'}">nested routes</router-link></li>
            <li><router-link :to="{name: 'filter'}">filter</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    
    <!-- 轉跳後所載入的 component 最後會顯示在此 -->
    <router-view></router-view>
    
    <!-- 
      multiples views
      多重顯示，在 router-view 設定 name 之後可以嵌入特定 Page
      沒有設定 name 的 view 使用 `default` 設定
    -->
    <div class="row">
      <router-view name="viewLeft" class="col-md-6 viewLeft"></router-view>
      <router-view name="viewRight" class="col-md-6 viewRight"></router-view>
    </div>

  <div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters({
    // 取得 loading state
    loading: 'getLoading'
  }),
}
</script>

<style lang="scss">
  .nested-routes,
  .viewRight {
    border: solid 2px red;
  }
  .viewLeft {
    border: solid 2px blue;
  }
</style>
