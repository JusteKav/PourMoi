const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const jewelrySchema = new mongoose.Schema(
  {
    title: {
      type: 'string',
      required: true,
      unique: true,
    },
    price: {
      type: 'number',
      required: true,
    },
    weight: {
      type: 'number',
      required: true,
    },
    files: {
      type: Array,
      required: true,
    },
    color: {
      type: Schema.Types.ObjectId,
      ref: 'Color',
    },
    material: {
      type: Schema.Types.ObjectId,
      ref: 'Material',
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: 'Type',
    },
    stones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Stone',
      },
    ],
  },
  {
    timestamps: true,
  }
);
jewelrySchema.plugin(uniqueValidator);

const JewelryModel = mongoose.model('Jewelry', jewelrySchema);

module.exports = JewelryModel;
