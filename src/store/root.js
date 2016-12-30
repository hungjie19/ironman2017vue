import * as types from './mutations_types.js';
// 為了設定語系引入 Vue
import Vue from 'vue';

export const state = {
  loading: false,
  token: '',
  lang: 'en',
}

export const actions = {
  toggleLoading ({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },
  // login
  actionLogin ({ commit }, { email, password}) {
    // 目前沒找到比較好的範例 API，因此使用延遲 1.5s 模擬 ajax 以及簡單驗證。
    console.log('1. actionLogin');
    commit(types.LOADING, true); // 打開遮罩
    // 使用 Promise 包裝 API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'vue_vuex2@ironman2017.tw' && password === '123') {
          console.log('2. Promise resolve');
          commit(types.TOKEN, '3345678'); // success 儲存 token
          commit(types.LOADING, false); // 關閉遮罩
          resolve(); // resolve 結果會在 then 裡面收到
        }
        // error
        else {
          commit(types.LOADING, false); // 關閉遮罩
          reject(); // reject 結果會在 catch 裡面收到
        }
      }, 1500);
    });
  },
  setLanguage ({ commit }, lang) {
    commit(types.LANGUAGE, lang);
  },
}

export const mutations = {
  [types.LOADING] (state, isLoading) {
    state.loading = isLoading;
  },
  [types.TOKEN] (state, token) {
    state.token = token;
  },
  [types.LANGUAGE] (state, setlang) {    
    state.lang = setlang;
    // 設定 Vue config 將會改變使用的語系
    Vue.config.lang = state.lang;
  },
}
