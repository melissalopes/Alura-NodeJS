const gitHubService = require('../services/githubService');
const constantes = require('../constants/constants');
const uploadArquivo = require('../repositories/uploadArquivo');

async function getRepositorios() {
  gitHubService.getRepos(constantes.gitHubUserName).then((result) => {
    const repositorios = filtrarDados(result.data);
    uploadArquivo(JSON.stringify(repositorios), constantes.gitHubUserName);
    console.log('Repositórios filtrado com sucesso!');
  }).catch((err) => {
    console.log(`Erro ao filtrar Repositórios: ${err}`);
  });
}

function filtrarDados(data) {
  const repos = data.map(r => {
    return {
      name: r.name,
      url: r.html_url,
      language: r.language
    }
  })
  return repos;
}

getRepositorios()