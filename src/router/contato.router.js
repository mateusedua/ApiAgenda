const express = require('express');
const router = express.Router();
const contatoService = require('../service/contatoService')

router.get('/categoria', async (req, res, next) => {
    try {
        const result = await contatoService.categoria()

        return res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

router.put('/alterarContato', async (req, res, next) => {
    try {
        const body = req.body

        await contatoService.alterarContato(body.data.data, body.data.idContato)

        return res.status(200).json({
            message: "sucess"
        })
    } catch (err) {
        next(err)
    }

})

router.delete('/deleteContato', async (req, res, next) => {
    try {
        const body = req.body

        await contatoService.deleteContato(body)

        return res.status(200).json({
            message: "sucess"
        })
    } catch (err) {
        next(err)
    }
})

router.post('/cadastrarContato', async (req, res, next) => {
    try {
        const body = req.body

        await contatoService.cadastrarContato(body.data.data, body.data.idUser)

        return res.status(200).json({})

    } catch (err) {
        next(err)
    }
})

module.exports = router;