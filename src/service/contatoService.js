const contatoData = require('../data/contatoData')

exports.categoria = async () => {
    const result = await contatoData.getCategoria()
    return result
}