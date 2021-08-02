const fs = require('fs')

module.exports = (dados, nomeArquivo) => {
    try {
        const caminho = `./arquivo/assets/${nomeArquivo}.txt`
        fs.writeFileSync(caminho, dados)
    } catch (err) {
        console.log('Não há como fazer o upload do arquivo. ' + err)
    }  
}