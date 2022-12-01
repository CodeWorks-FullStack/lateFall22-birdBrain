import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class BirdsService {
  async createBird(body) {
    const bird = await dbContext.Birds.create(body)
    await bird.populate('peeper creepCount', 'name picture')
    return bird
  }
  async getAllBirds(query) {
    const birds = await dbContext.Birds.find(query).populate('peeper creepCount', 'name picture')
    return birds
  }
  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId).populate('peeper creepCount', 'name picture')
    if (!bird) {
      throw new BadRequest('Bird not found with this bird Id, dawg')
    }
    return bird
  }

}

export const birdsService = new BirdsService()