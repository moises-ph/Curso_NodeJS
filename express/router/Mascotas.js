const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('mascotas', {
        arrayMascotas : [
            {id: '1',nombre: 'Mascota 1', descripcion : 'Mascota 1 descripcion',},
            {id: '2',nombre: 'Mascota 2', descripcion : 'Mascota 2 descripcion',}
        ]
    });
})




module.exports = router;