const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const typeSchema = new mongoose.Schema(
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
typeSchema.plugin(uniqueValidator);

const TypeModel = mongoose.model('Type', typeSchema);

module.exports = TypeModel;
