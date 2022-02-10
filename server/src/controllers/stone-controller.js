const StoneModel = require('../models/stone-model');
const StoneViewModel = require('../view-models/stone-view-model');

const getStones = async (req, res) => {
  const stoneDocs = await StoneModel.find();
  const stones = stoneDocs.map((stone) => new StoneViewModel(stone));
  res.status(200).json({ stones });
};

const createStone = async (req, res) => {
  const { title } = req.body;
  const stoneDoc = await StoneModel({
    title,
  });

  try {
    await stoneDoc.save();
    const stone = new StoneViewModel(stoneDoc);
    res.status(200).json(stone);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra šis tipas'${title}'`,
    });
  }
};

const getStone = async (req, res) => {
  const { id } = req.params;
  try {
    const stoneDoc = await StoneModel.findById(id);
    const stone = new StoneViewModel(stoneDoc);
    res.status(200).json(stone);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteStone = async (req, res) => {
  const { id } = req.params;
  try {
    const stoneDoc = await StoneModel.findByIdAndDelete(id);
    const stone = new StoneViewModel(stoneDoc);
    res.status(200).json(stone);
  } catch (error) {
    res.status(404).json({
      message: 'tipas nerastas',
    });
  }
};

const updateStone = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await StoneModel.findById(id);

    try {
      const stoneDoc = await StoneModel.findByIdAndUpdate(id, { title }, { new: true });
      const stone = new StoneViewModel(stoneDoc);
      res.status(200).json(stone);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Tipas nerastas' });
  }
};

module.exports = {
  getStones,
  createStone,
  getStone,
  deleteStone,
  updateStone,
};
