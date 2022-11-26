const { Schema, model } = require('mongoose');

const schema = new Schema({
    nombre: {
        type: String
    },
    cantidad: {
        type: Number
    },
    precioCompra: {
        type: Number
    },
    idProducto: {
        type: String
    }
});

module.exports = model('inventario', schema);
