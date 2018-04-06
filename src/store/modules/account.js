import account from '../../api/account';

// actions
const actions = {
  login({ commit }, credentials) {
    account.login(credentials, (response) => {
      commit('updateUser', response);
    });
  },
};

// mutations
const mutations = {
  updateUser(state, response) {
    state.user.userName = response.username;
    state.user.displayName = response.display_name;
  },
};

// initial state
const state = {
  user: {
    userName: '',
    displayName: '',
    password: '',
  },
};

export default {
  state,
  actions,
  mutations,
};
