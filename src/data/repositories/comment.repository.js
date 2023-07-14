import { BaseRepository } from './base.repository.js';

export class CommentRepository extends BaseRepository {
  #comment;

  constructor({ Comment }) {
    super(Comment);
    this.#comment = Comment;
  }
}
