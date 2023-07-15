let _commentService;

export class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async findOne(req, res) {
    const { id } = req.params;
    const comment = await _commentService.findOne(id);

    return res.status(200).json(comment);
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedComment = await _commentService.update(id, body);

    return res.status(200).json(updatedComment);
  }

  async remove(req, res) {
    const { id } = req.params;
    await _commentService.remove(id);

    return res.status(200);
  }

  async findAllByIdeaId(req, res) {
    const { ideaId } = req.params;
    const comments = await _commentService.findAllByIdeaId(ideaId);

    return res.status(200).json(comments);
  }

  async createIdeaComment(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const newComment = _commentService.createIdeaComment();

    return res.status(201).json(newComment);
  }
}
