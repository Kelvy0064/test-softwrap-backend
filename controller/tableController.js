const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/table', async (req, res) => {
    try {
        const page = req.query.page
        const limit = parseInt(req.query.limit)
        const skip = limit * (page - 1)
        await User.find().skip(skip).limit(limit).exec((err, user) => {
            if (err) throw err
            return res.status(200).send(user)
        })
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao carregar os dados.' })
    }
})

router.post('/table', async (req, res) => {
    try {
        if (req.body.cpf && !await User.findOne({ cpf: req.body.cpf })) {
            await User.create({
                name: req.body.name,
                age: req.body.age,
                civilState: req.body.civilState,
                cpf: req.body.cpf,
                city: req.body.city,
                state: req.body.state
            })
            return res.status(200).send({ success: 'Dados inseridos.' })
        } else return res.status(406).send({ error: 'CPF já cadastrado.' })
    } catch (err) { return res.status(400).send({ error: err }) }
})

router.put('/table', async (req, res) => {
    try {
        if (req.body.cpf) {
            await User.updateOne({ cpf: req.body.cpf }, {
                name: req.body.name,
                age: req.body.age,
                civilState: req.body.civilState,
                cpf: req.body.cpf,
                city: req.body.city,
                state: req.body.state
            })
            return res.status(200).send({ success: 'Dados alterado.' })
        } else return res.status(406).send({ error: 'cpf não pode ser em branco' })
    } catch (err) { return res.status(400).send({ error: err }) }
})

router.delete('/table', async (req, res) => {
    try {
            await User.deleteOne({ cpf: req.body.cpf })
            return res.status(200).send({ success: 'Dados apagado.' })
    } catch (err) { return res.status(400).send({ error: err }) }
})

module.exports = app => app.use('/api', router)
