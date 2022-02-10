const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const stoneSchema = new mongoose.Schema(
  {
    title: {
      type: 'string',
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
stoneSchema.plugin(uniqueValidator);

const StoneModel = mongoose.model('Stone', stoneSchema);

module.exports = StoneModel;
