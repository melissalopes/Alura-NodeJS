const gitHubService = require('../services/githubService');
const constantes = require('../constants/constants');
const uploadArquivo = require('../repositories/uploadArquivo');

async function getUsuario() {
  gitHubService.getUser(constantes.gitHubUserName).then((result) => {
    const user = filtrarDados(result.data);
    uploadArquivo(JSON.stringify(user), 'usuario');
    console.log('Usuário filtrado com sucesso!');
  }).catch((err) => {
    console.log(`Erro ao filtrar Usuário: ${err}`);
  });
}

function filtrarDados(data) {
  return {
    name: data.name,
    login: data.login,
    id: data.id,
    url: data.html_url,
    qtd_repos_public: data.public_repos,
    repos_url: data.repos_url
  };
}

getUsuario()