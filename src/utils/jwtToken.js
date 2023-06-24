const jsonwebtoken = require('jsonwebtoken')

exports.encodeData = (data) => {
    return jsonwebtoken.sign(data[0], process.env.KEY)
}

exports.decodeData = (data) => {
    return jsonwebtoken.verify(data, process.env.KEY)
}