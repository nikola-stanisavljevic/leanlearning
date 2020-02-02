<template>
<v-app-bar color="teal darken-2" app fixed dense>
  <v-toolbar flat color="transparent">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <router-link  to="/"><v-img contain height="70px" width="70px" src="../assets/beliLogo.png"></v-img></router-link>

    <v-spacer></v-spacer>

    <router-link tag="li" :to="'/aboutUs'" ><v-btn class="white--text" text="true" flat>About Us</v-btn></router-link>
    
    <router-link tag="li" :to="'/eduscrum'" ><v-btn class="white--text" text="true" flat>Board</v-btn></router-link>
    
    <router-link tag="li" :to="'/faq'"><v-btn v-if="userLoggedIn()" class="white--text hidden-xs-only" text="true" flat>Timeline</v-btn></router-link>

    <router-link tag="li" to="/list"><v-btn v-if="userLoggedIn()" class="white--text hidden-xs-only" text="true" flat>Students</v-btn></router-link>
    
    <router-link tag="li" to="/teams"><v-btn v-if="userLoggedIn()" class="white--text hidden-xs-only" text="true" flat>Teams</v-btn></router-link>
         
    <router-link tag="li" to="/dashboard"><v-btn v-if="userLoggedIn()" class="white--text hidden-xs-only" text="true" flat>Dashboard</v-btn></router-link>
          
    <router-link tag="li" to="/"><v-btn v-if="userLoggedIn()" class="white--text hidden-xs-only" text="true" flat @click='logoutFromFirebase'>Log out</v-btn></router-link>
    
    <router-link tag="li" to="/login"><v-btn v-if="!userLoggedIn()" class="white--text hidden-xs-only" text="true" flat>Log in</v-btn></router-link>
  
  </v-toolbar>
</v-app-bar>
</template>

<script>
  export default {
    name: 'toolbar',
    data: () => ({
      userLoggedIn () {
        return this.$store.getters.user
    }
      
    }),
    methods: {
      logoutFromFirebase () {
      this.$store.dispatch('signOutAction')
    }
    }
  }
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>