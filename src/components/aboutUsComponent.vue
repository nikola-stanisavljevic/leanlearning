<template>
  <v-app>
    <h1 style="padding: 10px 0px 0px; color: black; background-color: transparent" align="center" class="font-weight-regular">About Us</h1>
    <v-content style="padding: 0px 0px 0px;">
      <v-container
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="3"
            sm="8"
            md="4"
          >
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-img
                class="white--text align-end"
                height="300px"
                src="https://eduscrum.nl/en/pict/Simple/file_2754161012.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-0">eduScrum</v-card-subtitle>
              <v-card-text>
                <div class="text--primary">
                 {{description1}}
                 </div>
               </v-card-text>

              <v-card-actions>
               <v-btn
                v-if = "!userLoggedIn()"
                text
                color="#E78200"
                href="http://localhost:8080/#/register"
               >
                Sign up
              </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

                   <v-col
            cols="3"
            sm="8"
            md="4"
          >
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-img
                class="white--text align-end"
                height="300px"
                src="https://hocvienagile.com/wp-content/uploads/2019/05/eduScrum-01-1500x1061-1.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-0">eduScrum</v-card-subtitle>
              <v-card-text>
                <div class="text--primary">
                 {{description3}}
                 </div>
               </v-card-text>

              <v-card-actions>
               <v-btn
                v-if = "!userLoggedIn()"
                text
                color="#E78200"
                href="http://localhost:8080/#/register"
               >
                Sign up
              </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col
            cols="3"
            sm="8"
            md="4"
          >
            <v-card
              class="mx-auto"
              max-width="500"
            >

              <v-img
                class="white--text align-end"
                height="300px"
                src="../assets/logoSivi.png"
              >
              </v-img>

              <v-card-subtitle class="pb-0">LeanLearning</v-card-subtitle>
              <v-card-text>
                <div class="text--primary">
                 {{description2}}
                 </div>
               </v-card-text>

              <v-card-actions>
               <v-btn
               v-if = "!userLoggedIn()"
                text
                color="#E78200"
                href="http://localhost:8080/#/register"
               >
                Sign up
              </v-btn>
              </v-card-actions>
            </v-card>
         </v-col>

        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
      name: 'aboutUs',
      data() {
      return {
        
        description1: 'A groundbreaking way of education, where personalized learning has a very important role, like the 4 C\'s: Creativity, Collaboration, Communication & Critical Thinking. \n' +
        'The teacher determines the Why and the What, the students determine the How. \n' +
        'With eduScrum, the students own their own learning process, resulting in intrinsic motivation, fun, personal growth and better results.'
        ,
        description2: 
         'LeanLearning is an online learning & tracking platform implemented on eduScrum core principles. '+
         'In companies Scrum sees to it that developers work together in a productive and enjoyable way. eduScrum is an edit of Scrum for the educational system. '+
         'With eduScrum students work together in an energetic, targeted,  effective and efficient way. '+
         'With eduScrum students are stimulated to develop into a valuable member of a team. '
         ,
         description3: 
         'eduScrum ascertains a mind-set that aims for constant improvement. '+
         'eduScrum is a framework for a cocreative process and supporting. '+
         'Improvements deliver criticism ... and great results '+
         'Towards an effective and efficient educational approach that fits in the present!'
         ,
               userLoggedIn () {
        return this.$store.getters.user
    },
         }
        }
    }
</script>