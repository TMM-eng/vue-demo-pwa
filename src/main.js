import Vue from 'vue'
import App from './App.vue'
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
