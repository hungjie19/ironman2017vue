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
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    
    <!-- 轉跳後所載入的 component 最後會顯示在此 -->
    <router-view></router-view>

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

<style>
  .navbar {
    margin-bottom: 0;
  }
  /*
    css-loader
    from: http://www.raphaelfabeni.com.br/css-loader/
  */
  .loader{color:#fff;position:fixed;box-sizing:border-box;left:-9999px;top:-9999px;width:0;height:0;overflow:hidden;z-index:999999}.loader:after,.loader:before{box-sizing:border-box}.loader.is-active{background-color:rgba(0,0,0,0.85);width:100%;height:100%;left:0;top:0}.loader-curtain:before,.loader-curtain:after{position:fixed;width:100%;top:50%;margin-top:-35px;font-size:70px;text-align:center;font-family:Helvetica,Arial,sans-serif;overflow:hidden;line-height:1.2;content:'ironman 2017 vue & vuex'}.loader-curtain:before{color:#666}.loader-curtain:after{color:#fff;height:0;animation:curtain 1s linear infinite alternate both}.loader-curtain[data-curtain-text]:not([data-curtain-text='']):before,.loader-curtain[data-curtain-text]:not([data-curtain-text='']):after{content:attr(data-curtain-text)}.loader-curtain[data-brazilian]:before{color:#f1c40f}.loader-curtain[data-brazilian]:after{color:#2ecc71}.loader-curtain[data-colorful]:before{animation:maskColorful 2s linear infinite alternate both}.loader-curtain[data-colorful]:after{animation:curtain 1s linear infinite alternate both, maskColorful-front 2s 1s linear infinite alternate both;color:#000}@keyframes maskColorful{0%{color:#3498db}49.5%{color:#3498db}50.5%{color:#e74c3c}100%{color:#e74c3c}}@keyframes maskColorful-front{0%{color:#2ecc71}49.5%{color:#2ecc71}50.5%{color:#f1c40f}100%{color:#f1c40f}}@keyframes curtain{0%{height:0}100%{height:84px}}
</style>