<template>
  <v-card>
    <v-toolbar flat color="teal darken-2" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-image</v-icon>
        Change photo
      </v-tab>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Update info
      </v-tab>
      <v-tab>
        <v-icon left>mdi-delete</v-icon>
        Delete account
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="hello">
              <picture-input
                ref="pictureInput"
                width="200"
                height="200"
                margin="10"
                accept="image/jpeg,image/png"
                size="10"
                button-class="btn"
                :custom-strings="{
                  upload: '<h1>Bummer!</h1>',
                  drag: 'Drag your new profile image here :)'
                }"
                @change="onChange"
              >
              </picture-input>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-app>
              <v-content>
                <v-container fluid>
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                      <v-card class="elevation-12">
                        <v-card-text>
                          <v-form
                            ref="form"
                            lazy-validation
                            @submit.prevent="submit"
                          >
                            <v-text-field
                              v-model="name"
                              :counter="30"
                              :rules="nameRules"
                              label="Name"
                              for="name"
                              prepend-icon="person"
                              required
                            ></v-text-field>
                            <v-text-field
                              id="email"
                              v-model="email"
                              :rules="emailRules"
                              label="New e-mail"
                              name="email"
                              for="email"
                              prepend-icon="mail"
                              required
                            ></v-text-field>

                            <v-text-field
                              v-model="password"
                              id="password"
                              :rules="passwordRules"
                              label="New password"
                              name="password"
                              for="password"
                              prepend-icon="lock"
                              type="password"
                              ref="password"
                              required
                            />
                          </v-form>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn color="#E78200" type="submit" @click="submit">
                            Update
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-content>
            </v-app>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="mb-0">
              If you wish to delete your account from LeanLearning and remove all data associated with it click the button below.
            </p>
            <br />
            <v-btn>Delete account</v-btn>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import PictureInput from "vue-picture-input";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    PictureInput
  },
  methods: {
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>!");
      }
    }
  }
};
</script>
