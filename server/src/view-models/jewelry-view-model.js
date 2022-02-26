const ColorViewModel = require('./color-view-model');
const MaterialViewModel = require('./material-view-model');
const TypeViewModel = require('./type-view-model');
const StoneViewModel = require('./stone-view-model');

class JewelryViewModel {
  constructor({ _id, title, price, weight, color, material, type, createdAt, updatedAt, stones, files }) {
    this.id = _id;
    this.title = title;
    this.price = price;
    this.weight = weight;
    this.createAt = createdAt;
    this.updatedAt = updatedAt;
    this.color = new ColorViewModel(color);
    this.material = new MaterialViewModel(material);
    this.type = new TypeViewModel(type);
    this.stones = stones.map((el) => new StoneViewModel(el));
    this.files = files;
  }
}

module.exports = JewelryViewModel;
