import { appState } from "../AppState.js"
import { Bird } from "../Models/Bird.js"
import { server } from "./AxiosService.js"

class BirdsService {
    async getBirds() {
        const res = await server.get('api/birds')
        appState.birds = res.data.map(b => new Bird(b))
        console.log(appState.birds, 'birds');
    }

    async peepBird(formData) {
        const res = await server.post('api/birds', formData)
        // console.log(res.data, 'new bird');
        appState.birds.push(new Bird(res.data))
        // this will trigger the observer
        appState.emit('birds')
    }
    setActive(birdId) {
        const bird = appState.birds.find(b => b.id == birdId)
        // console.log(bird);
        appState.activeBird = bird
    }
}

export const birdsService = new BirdsService()