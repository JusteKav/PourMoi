const express = require('express');
const router = express.Router();
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');
const {
  getJewelries,
  createJewelry,
  getJewelry,
  deleteJewelry,
  updateJewelry,
} = require('../controllers/jewelry-controller');

router.get('/', getJewelries);
router.post('/', uploadManyMiddleware('files'), createJewelry);
router.get('/:id', getJewelry);
router.delete('/:id', deleteJewelry);
router.patch('/:id', uploadManyMiddleware('files'), updateJewelry);

module.exports = router;
