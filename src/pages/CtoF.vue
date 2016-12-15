<template>
  <div class="container">
    <h1>Temperature Conversion</h1>
    <!-- 切換模式按鈕 -->
    <input id="toggleTemperature" type="checkbox" v-model="isCelsius">
    <label for="toggleTemperature">切換：{{ toggleTemperature }}</label>
    
    <!-- 轉換顯示區域 -->
    <!-- v-if 條件不成立的區域，不會存在瀏覽器上 -->
    <h2 v-if="isCelsius">攝氏：{{ celsius }} °C</h2>
    <h2 v-if="!isCelsius">華氏：{{ fahrenheit }} °F</h2>
    
    <!-- 使用者輸入區域 -->
    <!-- v-show 條件不成立的區域會使用 style 隱藏，會存在瀏覽器上 -->
    <div class="celsius">
      <span v-show="!isCelsius">攝氏：</span>
      <span v-show="isCelsius">華氏：</span>
      <input type='number' v-model="userInput" /> °C
    </div>

    <!-- alert 顯示計算結果 -->
    <button @click="temperatureConversio( userInput );">
      Temperature Conversio
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInput: 0,
      // 增加此變數紀錄目前是什麼模式。
      isCelsius: false,
    }
  },
  computed: {
    fahrenheit () {
      return this.userInput * 9/5 + 32;
    },
    celsius () {
      return (this.userInput - 32) * 5/9;
    },
    toggleTemperature () {
      return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    }
  },
  methods: {
    temperatureConversio ( val ) {
      // val 是從 click 傳進來的 userInput 這是示範 function 傳值。
      // 如果不傳值，直接使用 this.userInput 也可以。
      // alert 的內容直接使用 computed 已經幫我計算好的結果。
      if ( this.isCelsius ) {
        alert('攝氏: ' + this.celsius );
      } 
      else {
        alert('華氏: ' + this.fahrenheit );
      }
    }
  }
}
</script>

<style>
  .celsius {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
</style>