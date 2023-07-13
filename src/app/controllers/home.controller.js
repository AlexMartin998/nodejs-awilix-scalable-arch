let _homeService;

export class HomeController {
  constructor({ HomeService }) {
    _homeService = HomeService;
  }

  index(req, res) {
    return res.status(200).json(_homeService.index());
  }
}
