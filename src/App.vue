<template>
  <div>
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
    <router-link :to="{path: '/hello'}">Hello</router-link>
    <router-link :to="{name: 'c2f'}">CtoF</router-link>
    
    <!-- 轉跳後所載入的 component 最後會顯示在此 -->
    <router-view></router-view>

  <div>
</template>

<script>
export default {
}
</script>

<style>
  body {
    font-family: 'Avenir', "微軟正黑體", Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  .container {
    width: 768px;
    margin: 0 auto;
  }
</style>