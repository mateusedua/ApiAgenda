const userData = require('../data/userData')

exports.userService = async (data) => {
    const result = await userData.getUser(data)

    return result
}