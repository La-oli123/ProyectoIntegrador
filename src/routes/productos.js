const router = require('express').Router();

const controller = require('../src/controllers/productos');

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;