const axios = require('axios')
const url = `https://api.github.com/users/melissalopes/repos?`
const uploadArquivo = require('../arquivo/uploadArquivo')
const repositorios = require('../service/repositorios')

axios.get(url).then( response => {
    async function recuperaDados() {
        const conteudo = await repositorios.obterDados(response)
        const nome = await repositorios.obterNomeUsuario(response)
        uploadArquivo(JSON.stringify(conteudo), nome)
    }
    recuperaDados()
}).catch(err => console.log(err))

