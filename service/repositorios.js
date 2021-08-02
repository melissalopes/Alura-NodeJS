class Repositorios {

    //COM PROMISE
    obterDados = (response) => {
        try{
            return new Promise( resolve => {
                const dados = response.data.map( result => {
                    return {
                        name: result.name,
                        url: result.html_url,
                        language: result.language
                    }
                })
                resolve(dados)
            })
        }catch(err){
            console.log('Há um erro com a requisição de dados. ' + err)
        }
    }
    
    //SEM PROMISE
    obterNomeUsuario =  (response) => {
        try{
            const nome =  response.data.map( result => result.owner.login )
            return nome[0]
        }catch(err){
            console.log('Não há como pegar o nome de usuário. ' + err)
        }
    }

}

module.exports = new Repositorios()