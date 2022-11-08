const modelo = require('./../models/usuario');

const UsuariosController = {
    create: (req, res) => { },
    update: (req, res) => { },
    list: (req, res) => {
        modelo.find({}).then(response => {
            console.log('Usuarios funciona :)');
            res.send('Estamos en el controlador de usuarios y funciona correctamente :)');
        }).catch(err => {
            console.log('Algo salió mal', err);
            res.status(400).send();
        });
    },
    get: (req, res) => { },
    delete: (req, res) => { }
}

module.exports = UsuariosController;
