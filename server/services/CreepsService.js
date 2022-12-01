import { dbContext } from "../db/DbContext.js"

class CreepsService {
  async getCreepsByBirdId(birdId) {
    // const creeps = await dbContext.Creeps.find({ birdId: birdId })
    const creeps = await dbContext.Creeps.find({ birdId }).populate('creep', 'name picture')
    return creeps
  }
  async becomeCreep(body) {
    const creep = await dbContext.Creeps.create(body)
    await creep.populate('creep', 'name picture')
    return creep
  }

  //   NOTE rabbit hole, enter at own peril
  // async becomeCreep(body) {
  //   const foundCreep = await this.findOneCreep(body)
  //   if (foundCreep) {
  //     this.removeCreep(foundCreep._id, body.creepId)
  //   }
  //   const creep = await dbContext.Creeps.create(body)
  //   await creep.populate('creep', 'name picture')
  //   return creep
  // }

  // async findOneCreep(body) {
  //   const foundCreep = await dbContext.Creeps.findOne(body)
  //   return foundCreep
  // }

  // async removeCreep(creepId, userId) {
  //   const creep = await dbContext.Creeps.findById(creepId)

  // }
}

export const creepsService = new CreepsService()