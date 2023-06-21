const express = require('express');
const router = express.Router();
const userService = require('../service/userService')

router.post('/auth', async (req, res, next) => {
    try {
        const data = req.body;

        const result = await userService.userService(data)

        if (result.length > 0) {
            return res.status(200).json(result)
        }

        return res.status(404).json({})

    } catch (err) {
        next(err);
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

module.exports = router;