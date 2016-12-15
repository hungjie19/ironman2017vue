<template>
  <div class="container">
    <h2 style="color: red;">count: {{ count }}</h2>

    <!-- 1. 增加 input 可以設定數值 model 綁定 num -->
    Set Number: 
    <input type='number' v-model='num' style="width: 50px;"><br/>
    
    <!-- 3. 雙向綁定 num 到按鈕上顯示-->
    <!-- 傳 num 數值給 action -->
    <button @click="actionIncrease(num)">+{{ num }}</button>
    <button @click="actionDecrease(num)">-{{ num }}</button>

    <!-- 4. 新增歸零按鈕 -->
    <button @click="actionCountReset">歸零</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // 2. model num 預設值為: 1
      num: 1
    }
  },
  computed: mapGetters({
    count: 'getCount',
  }),
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',

      // 5. 引入歸零 action
      'actionCountReset'
    ])
  }
}
</script>