const router = require('express').Router();

const controller = require('../controllers/compras');

router.get('/', controller.list);
router.post('/',controller.create);
router.get('/:id', controller.getItem);
router.put('/:id', controller.update);

module.exports = router;