const BaseService = require('./base.service');

class CommentService extends BaseService {
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

  async createIdeaComment(comment, ideaId) {
    const idea = this.#ideaService.findOne(ideaId);
    const newComment = this.create(comment);

    idea.comments.push(newComment);

    return await this.#ideaRepository.update(ideaId, {
      comments: idea.comments,
    });
  }
}

module.exports = CommentService;
