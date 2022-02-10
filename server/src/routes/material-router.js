const express = require('express');
const router = express.Router();
const {
  getMaterials,
  createMaterial,
  getMaterial,
  deleteMaterial,
  updateMaterial,
  //   replaceMaterial,
} = require('../controllers/material-controller');

router.get('/', getMaterials);
router.post('/', createMaterial);
router.get('/:id', getMaterial);
router.delete('/:id', deleteMaterial);
router.patch('/:id', updateMaterial);
// router.put('/:id', replaceMaterial);

module.exports = router;
