const { NotFoundException } = require('../../errors');

class BaseService {
  #repository;

  constructor(repository) {
    this.#repository = repository;
  }

  async findOne(id) {
    if (!id) throw new Error('NO ID');

    const currentEntity = await this.#repository.findOne(id);
    if (!currentEntity)
      throw new NotFoundException(`Record with id '${id}' not found`);

    return currentEntity;
  }

  async findAll(pageSize = 5, pageNumber = 1) {
    return await this.#repository.findAll(pageSize, pageNumber);
  }

  async create(entity) {
    return await this.#repository.create(entity);
  }

  async update(id, entity) {
    if (!id) throw new Error('No ID');

    return await this.#repository.update(id, entity);
  }

  async remove(id) {
    const product = this.findOne(id);

    await this.#repository.remove(product.id);
  }
}

module.exports = BaseService;
