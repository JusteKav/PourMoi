const JewelryModel = require('../models/jewelry-model');
const JewelryViewModel = require('../view-models/jewelry-view-model');
const { deleteFile } = require('../helpers/file-helpers');

const getJewelries = async (req, res) => {
  const jewelryDocs = await JewelryModel.find()
    .populate('color')
    .populate('material')
    .populate('type')
    .populate('stones');
  const jewelry = jewelryDocs.map((jewelry) => new JewelryViewModel(jewelry));
  res.status(200).json({ jewelry });
};

const createJewelry = async (req, res) => {
  const { title, price, weight, color, material, type, stones } = req.body;
  const files = req.files;
  const filesArr = files.map((file) => `http://localhost:5070/${file.filename}`);
  const jewelryDoc = await JewelryModel({
    title,
    price,
    weight,
    color,
    material,
    type,
    stones,
    files: filesArr,
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
    const jewelryDoc = await await JewelryModel.findById(id)
      .populate('color')
      .populate('material')
      .populate('type')
      .populate('stones');
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
    const jewelryDoc = await await JewelryModel.findByIdAndDelete(id)
      .populate('color')
      .populate('material')
      .populate('type')
      .populate('stones');
    const jewelry = new JewelryViewModel(jewelryDoc);
    jewelry.files.map((file) => {
      const imgPath = `./public/assets/images/${file.slice(22)}`;
      deleteFile(imgPath);
    });
    res.status(200).json(jewelry);
  } catch (error) {
    res.status(404).json({
      message: 'tipas nerastas',
    });
  }
};

const updateJewelry = async (req, res) => {
  const { id } = req.params;
  const { title, price, weight, material, color, type, stones, files } = req.body;
  const filesFromStorage = req.files;

  const filesArr = (newFiles, oldFiles) => {
    if (newFiles[0]) {
      const newArr = newFiles.map((file) => `http://localhost:5070/${file.filename}`);
      const oldFilesArr = oldFiles instanceof Array ? oldFiles : [oldFiles];
      oldFilesArr.map((file) => {
        const imgPath = `./public/assets/images/${file.slice(22)}`;
        deleteFile(imgPath);
      });
      return newArr;
    } else {
      return oldFiles instanceof Array ? oldFiles : [oldFiles];
    }
  };

  const newFiles = filesArr(filesFromStorage, files);

  try {
    await JewelryModel.findById(id);

    try {
      const jewelryDoc = await JewelryModel.findByIdAndUpdate(
        id,
        { title, price, weight, material, color, type, stones, files: newFiles },
        { new: true }
      )
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
