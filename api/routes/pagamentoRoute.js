const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagamentoController')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);

module.exports = router;