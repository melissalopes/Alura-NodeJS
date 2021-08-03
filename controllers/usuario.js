const axios = require('axios')
const url = `https://api.github.com/users/melissalopes`
const uploadArquivo = require('../arquivo/uploadArquivo')
const usuario = require('../service/usuario')

async function executar(){
    
    await axios.get(url).then( response => {
        async function recuperaDados() {
            const conteudo = await usuario.obterDados(response)
            uploadArquivo(JSON.stringify(conteudo), 'usuario')
        }
        recuperaDados()
    
    }).catch(err => console.log(err))
}

executar()