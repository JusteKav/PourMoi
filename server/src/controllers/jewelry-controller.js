const JewelryModel = require('../models/jewelry-model');
const JewelryViewModel = require('../view-models/jewelry-view-model');

const getJewelries = async (req, res) => {
  const jewelryDocs = await JewelryModel.find().populate('color').populate('material').populate('type');
  const jewelry = jewelryDocs.map((jewelry) => new JewelryViewModel(jewelry));
  res.status(200).json({ jewelry });
};

const createJewelry = async (req, res) => {
  const { title, price, weight, color, material, type } = req.body;
  const jewelryDoc = await JewelryModel({
    title,
    price,
    weight,
    color,
    material,
    type,
  });

  try {
    await jewelryDoc.save();
    const jewelry = new JewelryViewModel(jewelryDoc);
    res.status(200).json(jewelry);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra šis tipas'${title}'`,
    });
  }
};

const getJewelry = async (req, res) => {
  const { id } = req.params;
  try {
    const jewelryDoc = await JewelryModel.findById(id).populate('color').populate('material').populate('type');
    const jewelry = new JewelryViewModel(jewelryDoc);
    res.status(200).json(jewelry);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteJewelry = async (req, res) => {
  const { id } = req.params;
  try {
    const jewelryDoc = await JewelryModel.findByIdAndDelete(id).populate('color').populate('material').populate('type');
    const jewelry = new JewelryViewModel(jewelryDoc);
    res.status(200).json(jewelry);
  } catch (error) {
    res.status(404).json({
      message: 'tipas nerastas',
    });
  }
};

const updateJewelry = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await JewelryModel.findById(id);

    try {
      const jewelryDoc = await JewelryModel.findByIdAndUpdate(id, { title }, { new: true })
        .populate('color')
        .populate('material')
        .populate('type');
      const jewelry = new JewelryViewModel(jewelryDoc);
      res.status(200).json(jewelry);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Tipas nerastas' });
  }
};

module.exports = {
  getJewelries,
  createJewelry,
  getJewelry,
  deleteJewelry,
  updateJewelry,
};
