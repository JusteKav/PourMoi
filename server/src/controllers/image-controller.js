const ImageModel = require('../models/image-model');
const ImageViewModel = require('../view-models/image-view-model');
const { deleteFile } = require('../helpers/file-helpers');
const { PUBLIC_PATH, IMG_FOLDER_NAME, SERVER_DOMAIN, SERVER_PORT } = process.env;

const getImages = async (req, res) => {
  const imageDocs = await ImageModel.find();

  const images = imageDocs.map((x) => new ImageViewModel(x));

  res.status(200).json({
    message: 'Data is fetched',
    images,
  });
};

const uploadImages = async (req, res) => {
  const imgData = req.files.map(({ filename }) => ({
    src: filename,
  }));

  const imgDocs = await ImageModel.insertMany(imgData);
  const images = imgDocs.map((x) => new ImageViewModel(x));

  res.status(200).send({
    images,
  });
};

const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    const imageDoc = await ImageModel.findById(id);
    const imgPath = `${SERVER_DOMAIN}:${SERVER_PORT}/${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${imageDoc.src}`;
    deleteFile(imgPath);
    await imageDoc.delete();
    res.status(200).send({
      message: 'Foto Successfully deleted',
      id,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      message: 'Foto not found',
    });
  }
};

module.exports = {
  getImages,
  uploadImages,
  deleteImage,
};
