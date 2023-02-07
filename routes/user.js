const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const validation = require('../middleware/validate');

router.get('/', userController.getAll);

router.get('/:id', userController.getSingle);

router.post('/', validation.saveUser, userController.createSingle);

router.put('/:id', validation.saveUser, userController.updateSingle);

router.delete('/:id', userController.deleteSingle);

module.exports = router;