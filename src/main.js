// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.config.devtools = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// require('./mode')
// import e,{b,c} from './mode';
// console.log(b,c,e);

// console.log(a);
// let a = 1;
// setTimeout(() => {
//   console.log(5);
// }, 0);
// var promise = new Promise(function(resolve,reject){
//   console.log(1);
//   resolve();
//   console.log(2);
// });
// promise.then(function(){
//   console.log(3);
// });
// console.log(4);

// console.log(2);



