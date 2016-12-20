const types = {
  ADD_CART: 'store/ADD_CART',
}

const state = {
  // 餐點列表
  products: [
    {
      title: 'The Perfect Sandwich, A Real NYC Classic',
      image: 'http://www.w3schools.com/w3images/sandwich.jpg',
      inventory: 5,
      price: 155
    },
    {
      title: 'Let Me Tell You About This Steak',
      image: 'http://www.w3schools.com/w3images/steak.jpg',
      inventory: 1,
      price: 1380
    },
    {
      title: 'Cherries, interrupted',
      image: 'http://www.w3schools.com/w3images/cherries.jpg',
      inventory: 2,
      price: 499
    },
    {
      title: 'Once Again, Robust Wine and Vegetable Pasta',
      image: 'http://www.w3schools.com/w3images/wine.jpg',
      inventory: 3,
      price: 790
    }
  ],
  // 購物車
  shoppingCart: [],
}

const getters = {
  // 取得餐點列表
  getProducts: state => state.products,
  // 取得購物車總數量
  getShoppingCartTotal: state => state.shoppingCart.length,
}

const actions = {
  addCart ({ commit }, id) {
    commit(types.ADD_CART, id);
  },
  cancelCart ({ commit }, id) {
    commit(types.CANCEL_CART, id);
  }
}

const mutations = {
  [types.ADD_CART] (state, id) {
    // ES6 array find 找到條件成立的內容。
    const product = state.products.find(item => item.title === id && item.inventory !== 0);
    // 餐點庫存 -1
    product.inventory = product.inventory - 1;
    // 餐點加入購物車 title, price
    state.shoppingCart.push({
      title: product.title,
      price: product.price,
    });
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}