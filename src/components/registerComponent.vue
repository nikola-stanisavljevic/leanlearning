<template>
    <v-app>
    <v-content>
      <v-container
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color= "teal darken-2"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>
                <v-spacer />
               
              </v-toolbar>
              <v-card-text>
                <v-form
                  ref="form"
                  lazy-validation
                  @submit.prevent = "submit"
                >
                  <v-text-field
                    v-model="name"
                    :counter="30"
                    :rules="nameRules"
                    label="Name"
                    for = "name"
                    prepend-icon="person"
                    required
                  ></v-text-field>
                  <v-text-field
                    id = "email"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    name = "email"
                    for = "email"
                    prepend-icon="mail"
                    required
                  ></v-text-field>
                  

                  <v-text-field
                    v-model = "password"
                    id="password"
                    :rules="passwordRules"
                    label="Password"
                    name="password"
                    for = "password"
                    prepend-icon="lock"
                    type="password"
                    ref = "password"
                    required
                  />

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree with ToS and Policy in order to proceed with registration!']"
                    label="Do you agree with ToS and Policy?"
                    required
                  ></v-checkbox>
    
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn 
                color="#E78200"
                type = "submit"
                @click = "submit"
                to='/login'
              >
              Register
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
import firebase from 'firebase'
  export default {
    name: 'register',
    data: () => ({
      valid: true,
      number: '',
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters'
      ],
      select: null,
      checkbox: false
    }),
      
    methods: {
       validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        } else {
          this.snackbar = false;
        }
      },
      reset () {
        this.$refs.form.reset();
      },
      
      submit () {   
        var vthis = this;
        firebase.auth().createUserWithEmailAndPassword(vthis.email, vthis.password).then(function(user){
          console.log(user); alert('201 : Created'); vthis.$router.replace({ name: "Login" }); vthis.$$store.dispatch('signUpAction', user);
        }).catch(function(error){alert(error.message)});  
        
      }
    }
  }
</script>