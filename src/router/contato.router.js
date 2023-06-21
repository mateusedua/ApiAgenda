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

        const result = await contatoService.alterarContato(body.data.data, body.data.idContato)

        if (result.count >= 1) {
            return res.status(200).json({
                message: "Contato alterado"
            })
        }

        return res.status(400).json({})

    } catch (err) {
        next(err)
    }

})

router.delete('/deleteContato', async (req, res, next) => {
    try {
        const body = req.body

        const result = await contatoService.deleteContato(body)

        if (result.count = 1) {
            return res.status(200).json({
                message: "sucess"
            })
        }

        return res.status(400).json({})

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