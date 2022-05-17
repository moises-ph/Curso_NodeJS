const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: "mi titulo dinamico"});
});

router.get('/servicios', (req, res) => {
    res.render('servicios', {tituloservicio: "Página de servicios dinamico"});
})


module.exports = router;