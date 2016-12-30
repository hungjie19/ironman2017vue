import './assets/css/bootstrap/stylesheets/_bootstrap.scss';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import store from './store';
// init
Vue.use( VueRouter );
Vue.use( VueI18n );

// i18n
import en from './i18n/en.json'; // 存放英文翻譯
import tw from './i18n/tw.json'; // 存放繁體中文翻譯

const locales = {
  en,
  tw,
};

// 初始取得 state 預設值
// lang 對應的是 locales 的 key 目前有：en, tw
Vue.config.lang = store.state.lang; // 從 state 獲取預設語言設定。

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]);
});

// directive
import './directive/custom-directive.js';
// filter
import './filters/custom-filter.js';

// root page
import App from './App.vue';
// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/CtoF.vue';
import learnComponent from './pages/learnComponent.vue';
import count from './pages/count.vue';
import todo from './pages/todo.vue';
import shop from './pages/shop.vue';
import cart from './pages/cart.vue';
import open1999 from './pages/open1999.vue';
import login from './pages/login.vue';
import demoFilter from './pages/demoFilter.vue';

const router = new VueRouter({
  // 使用 HTML 5 模式（沒有 hash, ex: #/hello）
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta: { requiresAuth: true },
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF,
      meta: { requiresAuth: true },
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent,
      meta: { requiresAuth: true },
    },
    {
      path: '/count',
      name: 'count',
      component: count,
      meta: { requiresAuth: true },
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo,
      meta: { requiresAuth: true },
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta: { requiresAuth: false },
      children: [ // 將會把對應到 path 的 component 放到 shop 的 <router-view />
        {
          path: 'cart', // url= shop/cart
          component: cart,
          meta: { requiresAuth: false },
        },
        {
          path: 'todo', // url= shop/todo
          component: todo,
          meta: { requiresAuth: false },
        },
        {
          path: 'hello', // url= shop/hello
          component: Hello,
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: { requiresAuth: false },
    },
    {
      path: '/open1999',
      name: 'open1999',
      component: open1999,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { requiresAuth: false },
    },
    {
      path: '/multiple',
      name: 'multiple',
      // 注意！多重顯示為設定：component`s`
      components: {
        viewLeft: shop,
        viewRight: cart,
      },
      meta: { requiresAuth: false },
    },
    {
      path: '/filter',
      name: 'filter',
      component: demoFilter,
      meta: { requiresAuth: false },
    },
    // 當 url path 不符合 router 表的時候，預設轉址到
    // 順序一定要最後面
    { path: '/*', redirect: '/login' }
  ]
});

// 頁面轉跳驗證
router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to=', to.fullPath, '| from=', from.fullPath);
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    // 如果沒有 token 
    console.log('token?', store.state.token);
    if (store.state.token === '') {
      // 轉跳到 login page
      next({ path: '/login' });
    } else {
      next(); // 往下繼續執行
    }
  } else {
    next(); // 往下繼續執行
  }
});

new Vue({
  el: '#app',
  // router 掛載設定
  router,
  // 加入 store
  store,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
});
