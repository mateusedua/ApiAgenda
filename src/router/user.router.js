const express = require('express');
const router = express.Router();
const userService = require('../service/userService')
const jsonwebtoken = require('../utils/jwtToken');
const { consumers } = require('nodemailer/lib/xoauth2');

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

        return res.status(404).json({
            message: "token invalido"
        })

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

router.get('/contatos/:id_usuario', async (req, res, next) => {

    try {

        const params = req.params

        const result = await userService.contatos(params)

        if (result) {
            return res.status(200).json(result)
        }

        return res.status(404).json({
            message: "not data"
        })


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

router.put('/alterarUser', async (req, res, next) => {
    try {
        const data = req.body

        const result = await userService.alterarUser(data)

        if (result !== null) {
            return res.status(200).json({
                message: "sucess"
            })
        }

        return res.status(404).json({
            message: "error"
        })

    } catch (err) {
        next(err)
    }
})

router.delete('/deleteUser', async (req, res, next) => {
    try {
        const data = req.body

        const result = await userService.deleteUser(data)

        if (result !== null) {
            return res.status(200).json({
                message: "sucess"
            })
        }

        return res.status(404).json({
            message: "error"
        })

    } catch (err) {
        next(err)
    }
})

router.get('/dataUser/:idUser', async (req, res, next) => {
    try {

        const idUser = req.params.idUser

        const result = await userService.dataUser(idUser)


        if (result !== null) {
            return res.status(200).json(result)
        }

        return res.status(404).json({
            message: "error"
        })
    } catch (err) {
        next(err)
    }
})


module.exports = router;