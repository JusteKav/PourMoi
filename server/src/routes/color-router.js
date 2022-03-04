const express = require('express');
const router = express.Router();
const {
  getColors,
  createColor,
  getColor,
  deleteColor,
  updateColor,
  checkColor,
} = require('../controllers/color-controller');

router.get('/', getColors);
router.post('/', createColor);
router.get('/:id', getColor);
router.delete('/:id', deleteColor);
router.patch('/:id', updateColor);

module.exports = router;
