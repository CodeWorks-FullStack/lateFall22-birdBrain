import { appState } from "../AppState.js"
import { Creep } from "../Models/Creep.js"
import { server } from "./AxiosService.js"

class CreepsService {
    async getCreeps() {
        const res = await server.get(`api/birds/${appState.activeBird.id}/creeps`)
        // console.log(res.data);
        appState.creepers = res.data.map(c => new Creep(c))
    }

    async becomeCreep(birdId) {
        const res = await server.post('api/creeps', { birdId })
        console.log(res.data);
        const bird = appState.birds.find(b => b.id == birdId)
        bird.creepCount++
        appState.emit('birds')
    }
}

export const creepsService = new CreepsService()