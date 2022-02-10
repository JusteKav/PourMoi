const express = require('express');
const router = express.Router();
const { getStones, createStone, getStone, deleteStone, updateStone } = require('../controllers/stone-controller');

router.get('/', getStones);
router.post('/', createStone);
router.get('/:id', getStone);
router.delete('/:id', deleteStone);
router.patch('/:id', updateStone);

module.exports = router;
