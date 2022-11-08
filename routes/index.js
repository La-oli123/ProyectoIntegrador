const router = require('express').Router();

const rutasUsuarios = require('./usuarios');
const rutasProductos = require('./productos');


router.use('/usuarios', rutasUsuarios);
router.use('/productos', rutasProductos);

module.exports = router;