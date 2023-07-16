let _ideaService;

export class IdeaController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }

  async findOne(req, res) {
    const { id } = req.params;
    const idea = await _ideaService.findOne(id);

    return res.status(200).json(idea);
  }

  async findAll(req, res) {
    const { pageSize, pageNumber } = req.query;
    const ideas = await _ideaService.getAll(pageSize, pageNumber);

    return res.status(200).json(ideas);
  }

  async create(req, res) {
    const { body } = req;
    const newIdea = await _ideaService.create(body);

    return res.status(201).json(newIdea);
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedIdea = await _ideaService.update(id, body);

    return res.status(200).json(updatedIdea);
  }

  async remove(req, res) {
    const { id } = req.params;
    await _ideaService.remove(id);

    return res.status(200);
  }

  async findAllByAuthor(req, res) {
    const { userId } = req.params;
    const authorIdeas = await _ideaService.findAllByAuthor(userId);

    return res.status(200).json(authorIdeas);
  }

  async upVoteIdea(req, res) {
    const { id } = req.params;
    const idea = await _ideaService.upVoteIdea(id);

    return res.status(200).json(idea);
  }

  async downVoteIdea(req, res) {
    const { id } = req.params;
    const idea = await _ideaService.downVoteIdea(id);

    return res.status(200).json(idea);
  }
}
