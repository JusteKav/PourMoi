class StoneViewModel {
  constructor(stoneModel) {
    this.id = stoneModel._id;
    this.title = stoneModel.title;
    this.createdAt = stoneModel.createdAt;
    this.updatedAt = stoneModel.updatedAt;
  }
}
module.exports = StoneViewModel;
