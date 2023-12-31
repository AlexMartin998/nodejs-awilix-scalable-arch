import { BaseRepository } from './base.repository.js';

export class IdeaRepository extends BaseRepository {
  #idea;

  constructor({ Idea }) {
    super(Idea);
    this.#idea = Idea;
  }

  async findAllByAuthor(author) {
    return await this.#idea.find({ author });
  }
}
