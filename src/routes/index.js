const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Home-Bienvenido a mi portafolio");
});

router.get('/about-me', (req, res) => {
    res.send("Sobre mi");
})

router.get('/pojects', (req, res) => {
    res.send("Estos son mis proyectos");
})

router.get('/services/:id', (req, res) => {
    const { id } = req.params
    //const id = req.params.id
    //console .log(id)
    res.send(`Servicios de id = ${id})`);
})

module.exports = router;
