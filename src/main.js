import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueParticles from 'vue-particles'
import firebase from 'firebase'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

Vue.use(VueParticles)

Vue.config.productionTip = false;

// Add firebase data
var firebaseConfig = {
  apiKey: "AIzaSyBhtHCNf8l-XJ0olpCUbNy8KKZGm6bRYkA",
  authDomain: "leanlearning-940.firebaseapp.com",
  databaseURL: "https://leanlearning-940.firebaseio.com",
  projectId: "leanlearning-940",
  storageBucket: "leanlearning-940.appspot.com",
  messagingSenderId: "509429138238",
  appId: "1:509429138238:web:6fab9544125e6aa88a626f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  vuetify,
  store,
  iconfont: 'fa',
  render: h => h(App)
}).$mount("#app");
