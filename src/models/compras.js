const { Schema, model } = require('mongoose');

const schema = new Schema({
    idUsuario: {
        type: String
    },
    fecha: {
        type: Date
    },
    status: {
        type: Number
    },
    productos: [
        {
        idProducto: String,
        cantidad: Number
    }]
});

module.exports = model('compras', schema);
