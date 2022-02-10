const TypeModel = require('../models/type-model');
const TypeViewModel = require('../view-models/type-view-model');

const getTypes = async (req, res) => {
  const typeDocs = await TypeModel.find();
  const types = typeDocs.map((type) => new TypeViewModel(type));
  res.status(200).json({ types });
};

const createType = async (req, res) => {
  const { title } = req.body;
  const typeDoc = await TypeModel({
    title,
  });

  try {
    await typeDoc.save();
    const type = new TypeViewModel(typeDoc);
    res.status(200).json(type);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra šis tipas'${title}'`,
    });
  }
};

const getType = async (req, res) => {
  const { id } = req.params;
  try {
    const typeDoc = await TypeModel.findById(id);
    const type = new TypeViewModel(typeDoc);
    res.status(200).json(type);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteType = async (req, res) => {
  const { id } = req.params;
  try {
    const typeDoc = await TypeModel.findByIdAndDelete(id);
    const type = new TypeViewModel(typeDoc);
    res.status(200).json(type);
  } catch (error) {
    res.status(404).json({
      message: 'tipas nerastas',
    });
  }
};

const updateType = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await TypeModel.findById(id);

    try {
      const typeDoc = await TypeModel.findByIdAndUpdate(id, { title }, { new: true });
      const type = new TypeViewModel(typeDoc);
      res.status(200).json(type);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Tipas nerastas' });
  }
};

// const replaceType = async (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const type = types.find((x) => x.id === id);
//   if (type) {
//     if (title) {
//       type.title = title;
//       res.status(200).json(type);
//     } else {
//       res.status(400).json({ message: 'Nepakanka duomenų' });
//     }
//   } else {
//     res.status(404).json({ message: 'Tipas nerastas' });
//   }
// };

module.exports = {
  getTypes,
  createType,
  getType,
  deleteType,
  updateType,
  // replaceType,
};
