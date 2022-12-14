const modelo = require('./../models/usuario');

const UsuariosController = {
    create: (req, res) => {
        const datosUsuarios = req.body;
        modelo.create(datosUsuarios).then(response => {
            console.log('se creó el ususario correctamente');
            res.send(response);
        }).catch(err => {
            res.status(400).send('No se pudo crear el usuario');
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
        modelo.findOne({_id: id, status: 1}).then(response => {
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

module.exports = UsuariosController;

//SELECT * from usuarios WHERE id= '123' AND status = 1