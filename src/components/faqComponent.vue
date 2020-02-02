<template>
          <calendarComponent></calendarComponent>
</template>

<script>
import { mapGetters } from "vuex";
import calendarComponent from "./calendarComponent";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  components:
  {
    calendarComponent
  },
  mounted() {
      const player = this.$refs.player.dp
      player.play()
      setTimeout(() => {
        player.pause()
      }, 2000)
    },
  data () {
      return {
        tab: null,
        text: 'This is where you prepare your lecture for the class.',
        tabs: 4,
        options:{
          video: {
            url: 'https://www.youtube.com/watch?reload=9&v=bQI5uDxrFfA&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN&index=2'
          }
        }
      }
    }
};
</script>