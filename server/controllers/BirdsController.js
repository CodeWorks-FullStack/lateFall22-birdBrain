import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";

export class BirdsController extends BaseController {
  constructor () {
    super('api/birds')
    this.router
      .get('', this.getAllBirds)
      .get('/:birdId', this.getBirdById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBird)
  }
  async getAllBirds(req, res, next) {
    try {
      const birds = await birdsService.getAllBirds(req.query)
      return res.send(birds)
    } catch (error) {
      next(error)
    }
  }
  async getBirdById(req, res, next) {
    try {
      const bird = await birdsService.getBirdById(req.params.birdId)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }
  async createBird(req, res, next) {
    try {
      req.body.peeperId = req.userInfo.id
      const bird = await birdsService.createBird(req.body)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }
}