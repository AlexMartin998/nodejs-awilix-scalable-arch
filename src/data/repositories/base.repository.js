export class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findOne(id) {
    return await this.model.findById(id);
  }

  async findAll() {
    return await this.model.find();
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async remove(id) {
    await this.model.findByIdAndDelete(id);
  }
}
