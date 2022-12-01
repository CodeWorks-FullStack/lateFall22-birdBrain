export class Creep {
    constructor(data) {
        this.id = data.id
        // this.creep = data.creep
        this.creepId = data.creepId
        this.name = data.creep.name
        this.picture = data.creep.picture
    }

    get CreepTemplate() {
        return `
    <img src="${this.picture}"  title="${this.name}" class="peeper-img mx-2">
        `
    }

}