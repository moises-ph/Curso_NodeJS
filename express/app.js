const express  = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('estoy respondiendo a tu peticion con express');
})

app.get('/servicios', (req, res) => {
    res.send('estas en la pagina de servicios');
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
})


app.listen(port, () => {
    console.log('servidor corriendo en el puerto ' + port);
}); 