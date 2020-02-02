import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    REMOVE_USER() {
      status.user = null;
    },
    SET_STATUS(state, payload) {
      state.status = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    signOutAction ( {commit}) {
      firebase.auth().signOut()
        .then(() => {
          commit('SET_USER', null)
          commit('SET_STATUS', 'success')
          commit('SET_ERROR', null)
        })
        .catch((error) => {
          commit('SET_STATUS', 'failure')
          commit('SET_ERROR', error.message)
        })
    },
    signInAction ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
        commit('SET_USER', response.user.uid)
        commit('SET_STATUS', 'success')
        commit('SET_ERROR', null)
      })
      .catch((error) => {
        commit('SET_STATUS', 'failure')
        commit('SET_ERROR', error.message)
        alert(error.message)
      })
    }
  },
  modules: {}
});

