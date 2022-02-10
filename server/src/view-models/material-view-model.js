class MaterialViewModel {
  constructor(materialModel) {
    this.id = materialModel._id;
    this.title = materialModel.title;
    this.createdAt = materialModel.createdAt;
    this.updatedAt = materialModel.updatedAt;
  }
}
module.exports = MaterialViewModel;
