const modelo = require('../models/producto');

const ProductosController = {
    create: (req, res) => {
        const datosProductos = req.body;
        modelo.create(datosProductos).then(response => {
            res.send(response);
        }).catch(err => {
            res.status(400).send('No se pudo agregar el producto');
        });
    },

    list: (req, res) => {
        modelo.find({status: 1}).then(response => {
            console.log('Productos funciona :)');
            res.send(response);
        }).catch(err => {
            console.log('Algo salió mal', err);
            res.status(400).send();
        });
    },
    
    getItem: (req, res) => {
        const id = req.params.id;
        modelo.findOne({_id: id}).then(response => {
            res.send(response)
        }).catch(err => {
            res.status(404).send('No se encontró')
        });
    },

    update: (req, res) => {
        const id = req.params.id;
        const nombre = req.body.nombre;
        modelo.findOne({_id: id}).then(response => {
            response.nombre = nombre;
            response.save();
            res.send(response);
        }).catch(err => {
            res.status(404).send('No se pudo actualizar');
        });
    },

    deleteOne: (req, res) => {
        const id = req.params.id;
        const status = 2;
        modelo.findOne({_id: id}).then(response => {
            response.status = status;
            response.save();
            res.send(response);
        }).catch(err => {
            res.status(400).send('No se pudo eliminar el usuario');
        });
    },
};

module.exports = ProductosController;
