const express = require('express');
const router = express.Router();

router.post('/contatos', async (req, res, next) => {
    try {
        const data = req.body;

    } catch (err) {
        next(err);
    }
})

router.get('/categoria', async (req, res, next) => {
    try {


    } catch (err) {
        next(err);
    }
})

module.exports = router;