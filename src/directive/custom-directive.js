import Vue from 'vue'
import store from '../store'

// test directive
Vue.directive('test', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML = s(binding ) + '<br>';
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value type: ' + typeof binding.value + '<br>' +
      'value: '      + binding.value + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ');
  }
});

function togglePassword (val) {
  return val ? 'text' : 'password';
}

// custom toggle password
Vue.directive('toggle-password', {
  bind (el, binding) {
    el.type = togglePassword( binding.value );
  },
  update (el, binding) {
    el.type = togglePassword( binding.value );
  }
});