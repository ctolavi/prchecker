import axios from 'axios';

axios.defaults.baseURL = 'https://api.bitbucket.org/2.0';

export default {
  login(credentials, callback) {
    const encode = window.btoa(`${credentials.userName}:${credentials.password}`);
    axios.defaults.headers.common.Authorization = `Basic ${encode}`;
    return axios.get(`/users/${credentials.userName}`).then((response) => {
      if (response.status === 200) {
        callback(response.data);
      }
    });
  },
};

