const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const materialSchema = new mongoose.Schema(
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
materialSchema.plugin(uniqueValidator);

const MaterialModel = mongoose.model('Material', materialSchema);

module.exports = MaterialModel;
