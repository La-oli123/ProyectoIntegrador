const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes');

const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send('API funcionando :)')
});

app.use(express.json());
app.use(apiRoutes);

const uri = 'mongodb+srv://twofold:twofold12345@proyectointegrador.ib2xxwk.mongodb.net/ProyectoIntegrador'

mongoose.connect(uri, (err) => {
    if (!err) {
        console.log('Se conectó a la base de datos');
        app.listen(port, () => {
            console.log('El app está corriendo en el puerto: ' + port)
        });
    } else {
        console.log('Falló al conectarse a la base de datos', err);
    }
});

