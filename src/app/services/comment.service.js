import { BaseService } from './base.service.js';

export class CommentService extends BaseService {
  #commentRepository;
  #ideaRepository;
  #ideaService;

  constructor({ CommentRepository, IdeaRepository, IdeaService }) {
    super(CommentRepository);
    this.#commentRepository = CommentRepository;
    this.#ideaRepository = IdeaRepository;
    this.#ideaService = IdeaService;
  }

  async findAllByIdeaId(ideaId) {
    const idea = this.#ideaService.findOne(ideaId);
    const { comments } = idea;

    return comments;
  }

  async createIdeaComment(ideaId, comment, author) {
    const idea = await this.#ideaService.findOne(ideaId);

    const createdComment = await this.#commentRepository.create({
      ...comment,
      author,
    });
    idea.comments.push(createdComment);

    return await this.#ideaRepository.update(ideaId, {
      comments: idea.comments,
    });
  }
}
