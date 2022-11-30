const express = require('express');

const usuariosRoutes = require('./src/routes/usuarios');
const inventarioRoutes = require('./src/routes/inventario');
const productosRoutes = require('./src/routes/productos');
const comprasRoutes = require('./src/routes/compras');
const mongoose = require('mongoose');

const apiRoutes = require('./routes');

const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send('API funcionando :)')
});

app.use(express.json());
app.use('/usuarios', usuariosRoutes);
app.use('/inventario', inventarioRoutes);
app.use('/productos', productosRoutes);
app.use('/compras', comprasRoutes);

app.use('/usuarios', usuario)
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

