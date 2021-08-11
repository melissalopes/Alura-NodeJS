const axios = require('axios');

const constantes = require('../constants/constants');

async function getUser(userName) {
  return await axios.get(constantes.gitHubApiBaseURL + userName);
}

async function getRepos(userName) {
  return await axios.get(`${constantes.gitHubApiBaseURL + userName}/repos`);
}

module.exports = {
  getUser,
  getRepos,
}