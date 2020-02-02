<template>
  <v-footer
    padless
    height="auto"
  >
    <v-card
      flat
      tile
      class="teal darken-2 lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          LeanLearning is an online learning and tracking platform implemented on eduScrum core principles. 
          With eduScrum students work together in an energetic, targeted,  effective and efficient way.
          LeanLearning is suitable for any age and any subject. The main objective is agile learning! 
          Follow us on social media channels for updates and interesting content! 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Elektronski fakultet, Niš</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'ffooter',
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>
