const { Schema, model } = require('mongoose');

const schema = new Schema({
    nombreProducto: {
        type: String
    },
    precio: {
        type: Number
    },
    categoria: {
        type: String
    },
    descuento: {
        type: Number
    },
    inventario: {
        type: Number
    },
    calificacion: {
        type: Number
    },
    status: {
        type: Number,
        default: 1
    }
});

module.exports = model('producto', schema);
