<template>
  <v-card
    style = "padding: 10px 10px 10px;"
    width="50%"
    margine = "0 auto"
    max-width="100%"
    class="mx-auto"
  >
    <v-toolbar
      color="teal"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Student list</v-toolbar-title>
    </v-toolbar>

    <v-list subheader>
      <v-subheader>2017/18</v-subheader>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="item.title"
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="item.active ? 'teal darken-2' : 'grey'">person</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>2018/19</v-subheader>

      <v-list-item
        v-for="item in items2"
        :key="item.title"
        @click="item.title"
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="item.active ? 'teal darken-2' : 'grey'">person</v-icon>
        </v-list-item-icon>
      </v-list-item>

    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { active: true, title: 'Mihajlo Nikolic', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { active: true, title: 'Stefan Stanic', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { active: true, title: 'Aleksandra Kocic', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { active: true, title: 'Tatjana Stojanovic', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      items2: [
        { active: true, title: 'Marjan Misic', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
        { active: true, title: 'Ilija Jokic', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { active: true, title: 'Ina Simic', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
      ],
    }),
  }
</script>