// root types
import * as rootypes from '../mutations_types.js';

const types = {
  OPEN_1999: 'open/OPEN_1999',
  OPENDATA_SEARCH_REGION: 'open/OPENDATA_SEARCH_REGION',
  OPENDATA_SEARCH_KEYWORD: 'OPENDATA_SEARCH_KEYWORD',
}

const state = {
  opendata: [],
  RegionOption: ["三民區", "仁武區", "內門區", "六龜區", "前金區", "前鎮區", "大寮區", "大樹區", "大社區", "小港區", "岡山區", "左營區", "彌陀區", "新興區", "旗山區", "旗津區", "杉林區", "林園區", "桃源區", "梓官區", "楠梓區", "橋頭區", "永安區", "湖內區", "燕巢區", "田寮區", "甲仙區", "美濃區", "苓雅區", "茂林區", "茄萣區", "路竹區", "那瑪夏區", "阿蓮區", "鳥松區", "鳳山區", "鹽埕區", "鼓山區"],
  search: {
    region: 'all',
    keyword: ''
  }
}

const getters = {
  getRegionOption: state => state.RegionOption,
  getOpen1999: state => {
    // 將原始資料儲存在另一變數下 `_opendata`，
    let _opendata = state.opendata;
    // 出現搜尋條件的時候，使用 filter 過濾條件，
    if (state.search.region !== 'all') {
      _opendata = _opendata.filter( item => (item.ZipName_ === state.search.region) );
    }
    // 出現搜尋條件的時候，使用 filter 過濾條件，
    if (state.search.keyword !== '') {
      _opendata = _opendata.filter( item => (JSON.stringify( item ).indexOf( state.search.keyword ) != -1) );
    }
    // 回傳結果。
    return _opendata;
  }
}

const actions = {
  open1999 ({ commit }) {
    // 啟動 loading
    commit(rootypes.LOADING, true);
    
    // use fetch call open 1999 API
    fetch('http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery')
      .then(function(response) {
        // fetch 有 'ok' 物件可以判斷 response state 是不是 200
        // 將資料處理成 JSON
        if(response.ok) {
          return response.json();
        } 
        else {
          console.error(response);
          commit(rootypes.LOADING, false);
        }
      })
      .then(function(data) {
        // 把 json 傳給 mutation
        commit(types.OPEN_1999, data);
        // 關閉 loading
        commit(rootypes.LOADING, false);
      })
      .catch(function(error) {
        console.error(error);
        commit(rootypes.LOADING, false);
      });
  },

  opendataSearchRegion ({ commit }, region) {
    console.log('opendataSearchRegion', region);
    commit(types.OPENDATA_SEARCH_REGION, region);
  },

  opendataSearchKeyword ({ commit }, keyword) {
    commit(types.OPENDATA_SEARCH_KEYWORD, keyword);
  },
}

const mutations = {
  [types.OPEN_1999] (state, data) {
    state.opendata = data;
  },

  [types.OPENDATA_SEARCH_REGION] (state, region) {
    state.search.region = region;
  },

  [types.OPENDATA_SEARCH_KEYWORD] (state, keyword) {
    state.search.keyword = keyword;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}