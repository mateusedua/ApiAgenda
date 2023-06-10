const express = require('express');
const router = express.Router();

router.post('/auth', async (req, res, next) => {
    try {
        const data = req.body;

    } catch (err) {
        next(err);
    }
})

module.exports = router;