<template>
  <div class="container">
    <!-- 公式撰寫在 template -->
    <h2>華氏：{{ celsius * 9/5 + 32 }} °F</h2>
    <!-- 公式收納在 computed -->
    <h2>華氏：{{ fahrenheit }} °F</h2>
    <div class="celsius">
      攝氏：<input type='number' v-model="celsius" /> °C
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      celsius: 0
    }
  },
  computed: {
    // ES6:
    fahrenheit () {
      // computed 計算後才會顯示到 template 上面。
      return this.celsius * 9/5 + 32;
    }
    // ES5:
    // fahrenheit: function () {
    //   return this.celsius * 9/5 + 32;
    // }
  }
}
</script>

<style>
  .celsius {
    font-size: 1.5em;
  }
</style>