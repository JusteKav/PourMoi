const express = require('express');
const router = express.Router();
const {
  getTypes,
  createType,
  getType,
  deleteType,
  updateType,
  //   replaceType,
} = require('../controllers/type-controller');

router.get('/', getTypes);
router.post('/', createType);
router.get('/:id', getType);
router.delete('/:id', deleteType);
router.patch('/:id', updateType);
// router.put('/:id', replaceType);

module.exports = router;
