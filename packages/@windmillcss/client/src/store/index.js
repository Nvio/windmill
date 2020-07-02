import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    metadata: null,
  },
  getters: {
    getComponent: (state) => (name) => {
      return state.metadata.components.find(({ fileName }) => {
        return fileName === name;
      });
    },
  },
  mutations: {
    setMetadata(state, metadata) {
      return (state.metadata = metadata);
    },
  },
  actions: {
    setMetadata({ commit }, metadata) {
      return commit("setMetadata", metadata);
    },
  },
  modules: {},
});
