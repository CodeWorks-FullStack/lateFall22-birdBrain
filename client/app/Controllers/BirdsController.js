import { appState } from "../AppState.js"
import { Bird } from "../Models/Bird.js"
import { birdsService } from "../Services/BirdsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawBirds() {
    let template = ''
    appState.birds.forEach(b => template += b.CardTemplate)
    setHTML('birds', template)
}

function _drawActive() {
    setHTML('birdModalContent', appState.activeBird.ActiveTemplate)
}

export class BirdsController {
    constructor() {
        console.log('hello from the birds controller')
        this.getBirds()
        appState.on('birds', _drawBirds)
        appState.on('activeBird', _drawActive)
    }

    async getBirds() {
        try {
            await birdsService.getBirds()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    getBirdForm() {
        setHTML('birdModalContent', Bird.GetBirdForm())
    }

    async peepBird() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let formData = getFormData(form)
            console.log(formData)
            if (formData.canFly == 'on') {
                formData.canFly = true
            } else {
                formData.canFly = false
            }
            await birdsService.peepBird(formData)
        } catch (error) {
            Pop.error(error.message)
        }
    }

    setActive(birdId) {
        try {
            console.log(birdId);
            birdsService.setActive(birdId)
        } catch (error) {
            Pop.error(error.message)
        }
    }
}