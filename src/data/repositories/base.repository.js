class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findOne(id) {
    return await this.model.findById(id);
  }

  async findAll(pageSize = 5, pageNumber = 1) {
    const skips = pageSize * (pageNumber - 1) || 0;

    return await this.model
      .find()
      .skip(skips)
      .limit(+pageSize || 5);
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

module.exports = BaseRepository;
