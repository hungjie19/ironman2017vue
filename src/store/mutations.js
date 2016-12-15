import * as types from './mutations_type.js'
import Vue from 'vue'

// state
export const state = {
  count: 0
}

// mutations
export const mutations = {
  [types.INCREASE] (state, num) {
    // 第二個參數是接收 commit 傳遞的值: num
    // 計算邏輯，改變 state
    state.count += num;
    console.log('INCREASE', num, 'state?', state.count);
  },
  [types.DECREASE] (state, num) {
    state.count -= num;
    console.log('DECREASE', num, 'state?', state.count);
  },
  [types.COUNT_RESET] (state) {
    // 歸零，就將 state 設定為 0 囉!
    state.count = 0;
    console.log('COUNT_RESET - state?', state.count);
  },
}