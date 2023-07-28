// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'vuex';

export default createStore({
  state: {
    likes: 0,
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {

  },
  actions: {

  },
  modules: {

  },
});
