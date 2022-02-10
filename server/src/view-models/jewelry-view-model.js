const ColorViewModel = require('./color-view-model');
const MaterialViewModel = require('./material-view-model');
const TypeViewModel = require('./type-view-model');

class JewelryViewModel {
  constructor({ _id, title, price, weight, color, material, type, createdAt, updatedAt }) {
    this.id = _id;
    this.title = title;
    this.price = price;
    this.weight = weight;
    this.createAt = createdAt;
    this.updatedAt = updatedAt;
    this.color = new ColorViewModel(color);
    this.material = new MaterialViewModel(material);
    this.type = new TypeViewModel(type);
  }
}

module.exports = JewelryViewModel;
