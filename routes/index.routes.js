const express = require('express');
const router  = express.Router();
const indexController = require('../controller/index.controller');

router.get('/', indexController.getIndex)
router.get('/delete-item/:id', indexController.deleteItem)

module.exports = router;