const BaseRepository = require('./base.repository');

class CommentRepository extends BaseRepository {
  #comment;

  constructor({ Comment }) {
    super(Comment);
    this.#comment = Comment;
  }
}

module.exports = CommentRepository;
