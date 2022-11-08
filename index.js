const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes');

const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send('API funcionando :)')
});

app.use(apiRoutes);

const uri = 'mongodb+srv://iteso2022:ITESO1234@cluster0.jqhyj.mongodb.net/agenda?retryWrites=true&w=majority'

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

