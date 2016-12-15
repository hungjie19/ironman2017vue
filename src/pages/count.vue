<template>
  <div class="container">
    <h2>count:<span class="count"> {{ count }}</span></h2>
    <button @click="actionIncrease"> + </button>
    <button @click="actionDecrease"> - </button>
  </div>
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    // ...mapGetters 為 ES7 寫法
    ...mapGetters({
      // getCount return value 將會存在別名為 count 的 data 上
      count: 'getCount',
    }),
  },
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
    ]),
    // 其他 method call action 的方法
    callAction() {
      // example
      this.actionIncrease;
    }
  },
}
</script>