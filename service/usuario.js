
class Usuario {
    obterDados = (response) => {
        try{
            return new Promise( resolve => {
                const dados = response.data
                const lista = [dados]

                const conteudo = lista.map( result => {
                    return {
                        name: result.name,
                        login: result.login,
                        id: result.id,
                        url: result.html_url,
                        qtd_repos_public: result.public_repos,
                        repos_url: result.repos_url
                    }
                })    

                resolve(conteudo)
            })
        }catch(err){
            console.log('Há um erro com a requisição de dados. ' + err)
        }
    }
}

module.exports = new Usuario()