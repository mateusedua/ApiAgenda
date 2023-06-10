const express = require('express');
const router = express.Router();
const userService = require('../service/userService')

router.post('/auth', async (req, res, next) => {
    try {
        const data = req.body;

        const result = await userService.userService(data)

        if (result) {
            return res.status(200).json(result)
        }

        return res.status(400).json({})

    } catch (err) {
        next(err);
    }
})

module.exports = router;