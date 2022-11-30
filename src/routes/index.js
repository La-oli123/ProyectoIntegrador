const router = require('express').Router();

const rutasUsuarios = require('./usuarios');
const rutasProductos = require('./productos');
const rutasInventario = require('./inventario')
const rutasCompras = require('./compras');


router.use('/usuarios', rutasUsuarios);
router.use('/productos', rutasProductos);
router.use('/inventario', rutasInventario);
router.use('/compras', rutasCompras)

module.exports = router;