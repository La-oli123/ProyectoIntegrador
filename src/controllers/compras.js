const modelo = require('../models/inventario');

const comprasController = {
    create: (req, res) => {
        const datosCompras = req.body;
        modelo.create(datosCompras).then(response => {
            res.send(response);
        }).catch(err => {
            res.status(400).send('No se pudo hacer la compra');
        });
    },

    list: (req, res) => {
        modelo.find({status: 1}).then(response => {
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
            res.status(404).send('No se encontró la compra')
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
            res.status(404).send('No se pudo actualizar el carrito');
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
            res.status(400).send('No se pudo eliminar la compra');
        });
    },
};

module.exports = comprasController;
