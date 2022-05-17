const express  = require('express');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.static(__dirname + '/public'));


// Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Pagina 404',
        descripcion: 'La pagina requerida no se encuentra en el servidor'
    });
})


app.listen(port, () => {
    console.log(`Our app is running on port ${port}`);
}); 