const express = require('express');
const router = express.Router();
const contatoService = require('../service/contatoService')

router.post('/contatos', async (req, res, next) => {
    try {
        const data = req.body;

    } catch (err) {
        next(err);
    }
})

router.get('/categoria', async (req, res, next) => {
    try {
        const result = await contatoService.categoria()

        if (result) {
            return res.status(200).json(result)
        }

        return res.status(404).json({})

    } catch (err) {
        next(err);
    }
})

module.exports = router;