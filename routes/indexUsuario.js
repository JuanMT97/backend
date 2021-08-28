const express = require('express');
const router = express.Router();

const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {
    const usuario = await Usuario.find();
    res.json(usuario);
});

router.post('/', async (req,res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        status: 'Se guardo el usuario'
    });
});

router.delete('/:id', async (req,res) => {
    await Usuario.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'Usuario eliminado'
    });
});

router.put('/:id', async (req,res) => {
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'Usuario actualizado'
    });
});

module.exports = router;