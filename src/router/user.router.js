const express = require('express');
const router = express.Router();
const userService = require('../service/userService')
const jsonwebtoken = require('../utils/jwtToken')

router.post('/auth', async (req, res, next) => {
    try {
        const data = req.body;

        const result = await userService.userService(data)

        if (result !== null) {
            const token = jsonwebtoken.encodeData(result.dataValues)
            return res.status(200).json(token)
        }

        return res.status(404).json({})

    } catch (err) {
        next(err);
    }
})

router.post('/userFound', async (req, res, next) => {
    try {
        const data = req.body

        const dataDecode = jsonwebtoken.decodeData(data.data)

        if (dataDecode) {
            return res.status(200).json(dataDecode)
        }

    } catch (err) {
        next(err)
    }
})

router.post('/cadastrarUser', async (req, res, next) => {
    try {
        const data = req.body;

        const result = await userService.cadastrarUser(data)

        if (result !== null) {
            return res.status(200).json({
                message: "user create"
            })
        }

        return res.status(400).json({})


    } catch (err) {
        next(err)
    }
})

router.post('/contatos', async (req, res, next) => {

    try {

        const body = req.body


        const result = await userService.contatos(body)

        return res.status(200).json(result)

    } catch (err) {
        next(err)
    }
})

router.get('/preData', async (req, res, next) => {
    try {
        const result = await userService.preData()

        return res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

router.get('/relatorio', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

module.exports = router;