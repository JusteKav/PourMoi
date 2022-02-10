const MaterialModel = require('../models/material-model');
const MaterialViewModel = require('../view-models/material-view-model');

const getMaterials = async (req, res) => {
  const materialDocs = await MaterialModel.find();
  const materials = materialDocs.map((material) => new MaterialViewModel(material));
  res.status(200).json({ materials });
};

const createMaterial = async (req, res) => {
  const { title } = req.body;
  const materialDoc = await MaterialModel({
    title,
  });

  try {
    await materialDoc.save();
    const material = new MaterialViewModel(materialDoc);
    res.status(200).json(material);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra šis tipas'${title}'`,
    });
  }
};

const getMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const materialDoc = await MaterialModel.findById(id);
    const material = new MaterialViewModel(materialDoc);
    res.status(200).json(material);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const materialDoc = await MaterialModel.findByIdAndDelete(id);
    const material = new MaterialViewModel(materialDoc);
    res.status(200).json(material);
  } catch (error) {
    res.status(404).json({
      message: 'tipas nerastas',
    });
  }
};

const updateMaterial = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await MaterialModel.findById(id);

    try {
      const materialDoc = await MaterialModel.findByIdAndUpdate(id, { title }, { new: true });
      const material = new MaterialViewModel(materialDoc);
      res.status(200).json(material);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Tipas nerastas' });
  }
};

// const replaceMaterial = async (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const material = material.find((x) => x.id === id);
//   if (material) {
//     if (title) {
//       material.title = title;
//       res.status(200).json(material);
//     } else {
//       res.status(400).json({ message: 'Nepakanka duomenų' });
//     }
//   } else {
//     res.status(404).json({ message: 'Tipas nerastas' });
//   }
// };

module.exports = {
  getMaterials,
  createMaterial,
  getMaterial,
  deleteMaterial,
  updateMaterial,
  //   replaceMaterial,
};
