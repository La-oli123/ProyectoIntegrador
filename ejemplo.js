const jwt = require('jsonwebtoken');

const datos = {
    correo: 'juan@iteso.mx',
    password: 'hola1234'
}

const secret = 'holamundo';

const token = jwt.sign(datos, secret);

const original = jwt.decode(token, secret);

console.log(original);