import firebase from '@/firebase';
import db from './db';

const state = {
  user: {},
  isLogedIn: false,
};

const mutations = {
  setUser(user) {
    state.user = user;
    state.isLogedIn = true;
  },
};

const actions = {
  // async login()
  async login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    const setUser = {
      name: user.displayName,
      id: user.uid,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(setUser.id).set(setUser);
    commit('setUser', setUser);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
