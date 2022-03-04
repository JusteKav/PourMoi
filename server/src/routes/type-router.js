const express = require('express');
const router = express.Router();
const { getTypes, createType, getType, deleteType, updateType } = require('../controllers/type-controller');

router.get('/', getTypes);
router.post('/', createType);
router.get('/:id', getType);
router.delete('/:id', deleteType);
router.patch('/:id', updateType);

module.exports = router;
