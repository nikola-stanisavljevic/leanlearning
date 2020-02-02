<template>
  <v-app>
    <v-content class="layout">
      <toolbar></toolbar> 
      <router-view></router-view>
      <ffooter></ffooter>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/toolbarComponent.vue'
import Ffooter from './components/footerComponent.vue'
//import VueDPlayer from 'vue-dplayer'
//import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  name: "App",

  components: {
    Toolbar,
    Ffooter//,
   // 'd-player': VueDPlayer
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
#homeDiv {
  background: url('./assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  padding: 0%;
  margin: 0%;
}
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0%;
  margin: 0%;
}
</style>
