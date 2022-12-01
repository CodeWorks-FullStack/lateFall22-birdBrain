import { appState } from "../AppState.js";
import { creepsService } from "../Services/CreepsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawCreeps() {
    let template = ''
    appState.creepers.forEach(c => template += c.CreepTemplate)
    setHTML('creeps', template)
}

export class CreepsController {
    constructor() {
        console.log("hello from the creeps");
        appState.on('activeBird', this.getCreeps)
        appState.on('creepers', _drawCreeps)
    }

    async getCreeps() {
        try {
            await creepsService.getCreeps()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async becomeCreep(birdId) {
        try {
            await creepsService.becomeCreep(birdId)
        } catch (error) {
            Pop.error(error.message)
        }
    }

}