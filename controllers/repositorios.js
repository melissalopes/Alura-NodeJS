const axios = require('axios')
const url = `https://api.github.com/users/melissalopes/repos?`
const uploadArquivo = require('../arquivo/uploadArquivo')
const repositorios = require('../service/repositorios')

async function executar(){
    await axios.get(url).then( response => {
         function recuperaDados() {
            const conteudo = await repositorios.obterDados(response)
            const nome = await repositorios.obterNomeUsuario(response)
            uploadArquivo(JSON.stringify(conteudo), nome)
        }
        recuperaDados()
    }).catch(err => console.log(err))
}

executar()