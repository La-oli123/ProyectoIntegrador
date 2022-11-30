const express = require('express');

require('dotenv').config();

const usuariosRoutes = require('./src/routes/usuarios');
const inventarioRoutes = require('./src/routes/inventario');
const productosRoutes = require('./src/routes/productos');
const comprasRoutes = require('./src/routes/compras');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express()

const port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const url = __dirname + '/public/';
    res.sendFile(url);
})

app.post('/', (req, res) => {
    const user = require.body.usuario;
    const password = req.body.password;

    jwt.sign({user: user}, 'secretKey', (err, token) => {
        res.json({
            token
        });
    });
});

app.post("", verifyToken, (req, res) => {
    res.json({
    });
});

function verifyToken (req, res, next){

}

app.use(express.json());
app.use('/usuarios', usuariosRoutes);
app.use('/inventario', inventarioRoutes);
app.use('/productos', productosRoutes);
app.use('/compras', comprasRoutes);

const uri = 'mongodb+srv://twofold:twofold12345@proyectointegrador.ib2xxwk.mongodb.net/ProyectoIntegrador?retryWrites=true&w=majority'

mongoose.connect(uri, (err) => {
    if (!err) {
        console.log('Se conectó a la base de datos');
        app.listen(port, () => {
            console.log('El app está corriendo en el puerto ' + port)
        });
    } else {
        console.log('Falló al conectarse a la base de datos', err);
    }
});

