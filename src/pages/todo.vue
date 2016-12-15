<template>
  <div class="container">
    <h2>Todo List:</h2>
    <ul>
    <!-- 使用 for render todos -->
      <li v-for="(todo, index) in todos">
      <!--  提取 content 顯示 -->
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    // 使用取 list 的函式，將資料存在 todos
    todos: 'getTodos',
  }),
}
</script>