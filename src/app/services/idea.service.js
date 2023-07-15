import { NotFoundException } from '../../errors/index.js';
import { BaseService } from './base.service.js';

export class IdeaService extends BaseService {
  #ideaRepository;

  constructor({ IdeaRepository }) {
    super(IdeaRepository);
    this.#ideaRepository = IdeaRepository;
  }

  async findAllByAuthor(authorId) {
    // TODO: no validar si viene o no el id xq eso ya lo hace express-validator
    if (!authorId) throw new Error('400 - auther id must be sent');

    return await this.#ideaRepository.findAllByAuthor(authorId);
  }

  async upVoteIdea(ideaId) {
    if (!ideaId) throw new Error('400 - auther id must be sent');

    const idea = await this.#ideaRepository.findOne(ideaId);
    if (!idea) throw new NotFoundException(`Idea '${id}' not found`);

    idea.upvotes.push(true);

    return await this.#ideaRepository(ideaId, { upvotes: idea.upvotes });
  }

  async downVoteIdea(ideaId) {
    if (!ideaId) throw new Error('400 - auther id must be sent');

    // const idea = await this.#ideaRepository.findOne(ideaId);
    // if (!idea) throw new NotFoundException(`Idea '${id}' not found`);
    const idea = await this.findOne(ideaId);

    idea.upvotes.push(true);

    return await this.#ideaRepository(ideaId, { upvotes: idea.upvotes });
  }
}
