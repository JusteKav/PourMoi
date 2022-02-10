const express = require('express');
const router = express.Router();
const {
  getJewelries,
  createJewelry,
  getJewelry,
  deleteJewelry,
  updateJewelry,
} = require('../controllers/jewelry-controller');

router.get('/', getJewelries);
router.post('/', createJewelry);
router.get('/:id', getJewelry);
router.delete('/:id', deleteJewelry);
router.patch('/:id', updateJewelry);

module.exports = router;
