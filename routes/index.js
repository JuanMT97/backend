const express = require('express');
const router = express.Router();

const Encuesta = require('../models/Encuesta');

router.get('/', async (req, res) => {
    const encuesta = await Encuesta.find();
    res.json(encuesta);
});

 router.get('/:id', async(req, res) => {
     const encuesta = await Encuesta.findById(req.params.id);
     res.json(encuesta);
 });

router.get('/user/:email', async(req, res) => {
    const encuesta = await Encuesta.find({ email: req.params.email});
    res.json(encuesta);
});

router.post('/', async (req,res) => {
    const encuesta = new Encuesta(req.body);
    await encuesta.save();
    res.json({
        status: 'Se guardo la encuesta'
    });
});

router.put('/:id', async (req,res) => {
    await Encuesta.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'Encuesta actualizada'
    });
});

router.delete('/:id', async (req,res) => {
    await Encuesta.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'Encuesta eliminada'
    });
});


module.exports = router;