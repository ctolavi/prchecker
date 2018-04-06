import api from '../../api/myWork';

// actions
const actions = {
  getMyWork({ commit }) {
    return api.getMyWork((response) => {
      commit('updateMyWork', response);
    });
  },
};

// mutations
const mutations = {
  updateMyWork(state, response) {
    console.log('setting response');
    console.log(response);
    state.myWork = response;
  },
};

// initial state
const state = {
  myWork: [],
};

export default {
  state,
  actions,
  mutations,
};
