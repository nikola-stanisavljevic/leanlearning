<template>
<div id="wrapper">
  <div align="center" justify="center" style="width:50%; margin: 0 auto;">
    
    <h1 style="padding: 10px 0px 0px; color: purple; background-color: transparent" class="font-weight-regular">{{lectureTitle}}</h1>
    
    <youtube style="padding: 10px 0px 0px" :video-id="videoId" ref="youtube"></youtube>
    
    <v-text-field
      id = "url"
      v-model="url"
      label="Enter video url"
      name = "url"
      for = "url"
      prepend-icon="link"
      v-on:keyup.enter="loadVideo()"
    ></v-text-field>

    <v-text-field
      id = "lecture"
      v-model="lectureTitle"
      label="Enter lecture title"
      name = "lecture"
      for = "lecture"
      prepend-icon="notes"
    ></v-text-field>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
      lectureTitle: 'Lecture Title',
      url: 'https://youtu.be/lG0Ys-2d4MA',
    }
  },
  methods: {
    getId () {
      return this.$youtube.getIdFromUrl(this.url)
    },
    loadVideo() {
      this.videoId = this.getId();
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style scoped>
#wrapper{
  background: url('../assets/books.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  padding: 0%;
  margin: 0%;
}

</style>