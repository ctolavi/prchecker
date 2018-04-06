import axios from 'axios';

export default {
  getMyWork(callback) {
    axios.get('/user/permissions/repositories?pagelen=100').then((response) => {
      const prsPromises = [];
      response.data.values.forEach((repository) => {
        prsPromises.push(axios.get(`${repository.repository.links.self.href}/pullrequests?pagelen=25`));
      });
      const prPromises = [];
      Promise.all(prsPromises).then((results) => {
        results.forEach((pullRequests) => {
          pullRequests.data.values.forEach((pr) => {
            prPromises.push(axios.get(pr.links.self.href));
          });
        });
        Promise.all(prPromises).then((pullrequest) => {
          let myWork = [];
          pullrequest.forEach((pr) => {
            myWork = myWork.concat(pr.data);
          });
          console.log(myWork);
          callback(myWork);
        });
      });
    });
  },
};

