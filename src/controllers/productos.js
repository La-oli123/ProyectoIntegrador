const modelo = require('../models/producto');

const ProductosController = {
    create: (req, res) => { },
    update: (req, res) => { },
    list: (req, res) => {
        modelo.find({}).then(response => {
            console.log('Producto funciona :)');
            res.send('Estamos en el controlador de productos y funciona correctamente :)');
        }).catch(err => {
            console.log('Algo salió mal', err);
            res.status(400).send();
        });
    },
    get: (req, res) => { },
    delete: (req, res) => { }
}

module.exports = ProductosController;
