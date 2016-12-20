import Vue from 'vue';
import Vuex from 'vuex';
// root
import * as getters from './getters.js';
// modules
import count from './modules/count';
import todo from './modules/todo';
import shop from './modules/shop';

Vue.use( Vuex );

export default new Vuex.Store({
  // root
  getters,
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    shop,
    count,
    todo
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});