const router = require('express').Router();

const controller = require('../src/controllers/usuarios');

router.get('/', controller.list);

module.exports = router;