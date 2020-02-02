<template>
  <div id="app">
    <section class="section">
      <h3 class="display-1">
        Tasks for the team
      </h3>
    </section>

    <div v-show="enterTitle" align="center">

      <input 
      v-model="title"
      style="border: 2px solid black;"
      placeholder="Enter task" />

      <v-btn v-on:click="addBlock(statuses[0])" class="mx-1" fab dark color="indigo">
         <v-icon teal>mdi-plus</v-icon>
      </v-btn>
    </div>

    <Kanban :stages="statuses" :blocks="blocks" @update-block="updateBlock">
      <div v-for="stage in statuses" :slot="stage" :key="stage">
        <h2>
          {{ stage }}
          <a>+</a>
        </h2>
      </div>
      <div v-for="item in blocks" :slot="item.id" :key="item.id">
        <div>
          <strong>id:</strong> {{ item.id }}
        </div>
        <div>
          {{ item.title }}
        </div>
      </div>
      <div v-if="statuses[0]" :key="backlog" :slot="`footer-${'backlog'}`">
          <a href="" @click.prevent="() => napraviNoviBlok()">+ Add a new task</a>
      </div>
    </Kanban>

  </div>
</template>

<script>
//import faker from 'faker';
import { debounce } from 'lodash';
import Kanban from './Kanban';
export default {
  name: 'app',
  components: {
    Kanban,
  },
  data() {
    return {
      enterTitle: false,
      title: '',
      statuses: ['backlog','lesson-activities', 'to-do', 'doing', 'done'],
      blocks: [],
    };
  },
  mounted() { // ovde treba da se ucita iy firebase
    //for (let i = 0; i <= 10; i += 1) {
    //  this.blocks.push({
    //    id: i,
    //    status: this.statuses[Math.floor(Math.random() * 4)],
    //    title: faker.company.bs(),
    //  });
    //}
  },
  methods: {
    napraviNoviBlok(){
      this.enterTitle = true;
    },
    updateBlock: debounce(function (id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status;
    }, 500),
    addBlock: debounce(function (stage) {
      this.blocks.push({
        id: this.blocks.length,
        status: stage,
        //title: faker.company.bs(),
        title: this.title,
      });
      this.enterTitle = false;
    }, 500)
  },
};
</script>

<style lang="scss">
  @import '../assets/kanban.scss';
  $backlog: rgb(167, 32, 115);
  $lesson-activities: #FB7D44;
  $to-do: #2A92BF;
  $doing: #F4CE46;
  $done: #00B961;
  #app{
      height: 90%;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #33363D;
    color: white;
    font-family: 'Lato';
    font-weight: 300;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  .drag-column {
    .drag-column-header > div {
      width: 100%;
      h2 > a {
        float: right;
      }
    }
    .drag-column-footer > div {
        margin-left: 10px;
        a {
            text-decoration: none;
            color: white;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &-backlog {
      .drag-column-header,
      .is-moved,
      .drag-options {
        background: $backlog;
      }
    }
    &-lesson-activities {
      .drag-column-header,
      .is-moved,
      .drag-options {
        background: $lesson-activities;
      }
    }
    &-to-do {
      .drag-column-header,
      .is-moved,
      .drag-options {
        background: $to-do;
      }
    }
    &-doing {
      .drag-column-header,
      .is-moved,
      .drag-options{
        background: $doing;
      }
    }
    &-done {
      .drag-column-header,
      .is-moved,
      .drag-options {
        background: $done;
      }
    }
  }
  .section {
    padding: 20px;
    text-align: center;
    a {
      color: white;
      text-decoration: none;
      font-weight: 300;
    }
    h4 {
      font-weight: 400;
      a {
        font-weight: 600;
      }
    }
    #dlgbtn {
        margin-right: 5%;
    }
    .control-section {
        height: 100%;
        min-height: 340px;
    }
  }

</style>