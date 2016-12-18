const types = {
  CREATE_TODO: 'todo/CREATE_TODO',
  TOGGLE_TODO: 'todo/TOGGLE_TODO',
  DELETE_TODO: 'todo/DELETE_TODO',
  UPDATE_TODO: 'todo/UPDATE_TODO',
}

const state = {
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-router 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false }
  ]
}

const getters = {
  getDone (state) {
    return state.todos.filter((item) => {
      return item.done;
    });
  },
  getTodo (state) {
    return state.todos.filter((item) => {
      return !item.done;
    });
  }
}

const actions = {
  addTodo ({ commit }, newTodo) {
    commit(types.CREATE_TODO, newTodo);
  },
  toggleTodo ({ commit }, obj) {
    console.log('toggleTodo', obj);
    commit(types.TOGGLE_TODO, obj);
  },
  deleteTodo ({ commit }, key) {
    commit(types.DELETE_TODO, key);
  },
  updateTodo ({ commit }, obj) {
    console.log('updateTodo', obj);
    commit(types.UPDATE_TODO, obj);
  },
}

// 流水 key
let todoKey = state.todos.length;

const mutations = {
  // 新增
  [types.CREATE_TODO] (state, newTodo) {
    // todos 是一個 Array 所以 push 一個同結構的 Object
    state.todos.push({
      key: todoKey, // 流水 key
      content: newTodo, // 新 todo 的內容
      done: false // 預設當然是未做完
    });
  
    // 流水 key +1
    todoKey++;
  },

  // 改變狀態
  [types.TOGGLE_TODO] (state, obj) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === obj.key){
        item.done = obj.checked; //直接使用 chenkbox $emit 的 value
        console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
        break;
      }
    }
  },

  // 刪除
  [types.DELETE_TODO] (state, key) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === key){
        console.log('DELETE_TODO:', item.content, ', index?', i);
        // 刪除，單純將 todo Array 從 splice 出去。
        state.todos.splice(i, 1);
        break;
      }
    }
  },
  
  // 更新
  [types.UPDATE_TODO] (state, obj) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === obj.key){
        console.log('UPDATE_TODO:', item.content, ' to →', obj.update);
        state.todos[ i ].content = obj.update;
        break;
      }
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}