const ColorModel = require('../models/color-model');
const ColorViewModel = require('../view-models/color-view-model');

const getColors = async (req, res) => {
  const colorDocs = await ColorModel.find();
  const colors = colorDocs.map((color) => new ColorViewModel(color));
  res.status(200).json({ colors });
};

const createColor = async (req, res) => {
  const { title } = req.body;
  const colorDoc = await ColorModel({
    title,
  });

  try {
    await colorDoc.save();
    const color = new ColorViewModel(colorDoc);
    res.status(200).json(color);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra šis tipas'${title}'`,
    });
  }
};

const getColor = async (req, res) => {
  const { id } = req.params;
  try {
    const colorDoc = await ColorModel.findById(id);
    const color = new ColorViewModel(colorDoc);
    res.status(200).json(color);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteColor = async (req, res) => {
  const { id } = req.params;
  try {
    const colorDoc = await ColorModel.findByIdAndDelete(id);
    const color = new ColorViewModel(colorDoc);
    res.status(200).json(color);
  } catch {
    res.status(404).json({
      message: 'tipas nerastas',
    });
  }
};

const updateColor = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await ColorModel.findById(id);
    try {
      const colorDoc = await ColorModel.findByIdAndUpdate(id, { title }, { new: true });
      const color = new ColorViewModel(colorDoc);
      res.status(200).json(color);
    } catch {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Tipas nerastas' });
  }
};

module.exports = {
  getColors,
  createColor,
  getColor,
  deleteColor,
  deleteColor,
  updateColor,
};
