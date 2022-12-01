import { Auth0Provider } from "@bcwdev/auth0provider";
import { creepsService } from "../services/CreepsService.js";
import BaseController from "../utils/BaseController.js";

export class CreepsController extends BaseController {
  constructor () {
    super('api/creeps')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.becomeCreep)
  }
  async becomeCreep(req, res, next) {
    try {
      req.body.creepId = req.userInfo.id
      const creep = await creepsService.becomeCreep(req.body)
      return res.send(creep)
    } catch (error) {
      next(error)
    }
  }
}