/* 
class Usuario {
    obterDados = (response) => {
        try{
            return new Promise( resolve => {
                const dados = response.data.map( result => {
                    return result
                })
                console.log(dados)
                resolve(dados)
            })
        }catch(err){
            console.log('Há um erro com a requisição de dados. ' + err)
        }
    }
}

module.exports = new Usuario()
 */