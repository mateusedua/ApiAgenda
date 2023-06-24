const express = require('express');
const router = express.Router();
const serviceEmail = require('../service/userService')
const textData = require('../views/textData')

router.get('/', (req, res) => {

    res.render('index.js', { data: textData.home })
})

router.get('/conteudo', (req, res) => {
    res.render('detalhe.js', { data: textData.detalhe })
})

router.get('/tecnologias', (req, res) => {

    res.render('tecnologias.js', { data: textData.tecnologoia })
})

router.get('/sobre', (req, res) => {

    res.render('desenvolvedor.js', { data: textData.desenvolvedor })
})

router.get('/contato', (req, res) => {
    res.render('contato.js')
})

router.get('/cadastro', (req, res) => {
    res.render('cadastro.js')
})

router.post('/enviarEmail', (req, res) => {
    const body = req.body;

    serviceEmail.enviarEmail(body, res)
})

module.exports = router;