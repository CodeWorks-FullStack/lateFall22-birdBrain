export class Bird {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.canFly = data.canFly
        this.size = data.size
        this.img = data.img
        this.peeperId = data.peeperId
    }


    get CardTemplate() {
        return `
     <div class="col-4 p-3">
        <div class="elevation-3">
          <img class="bird-img" src="${this.img}" data-bs-toggle="modal" data-bs-target="#birdModal" onclick="app.birdsController.setActive('${this.id}')" alt="">
          <h1>${this.name}</h1>
          <div class="d-flex justify-content-between">
            <p class="fs-3">👀 0</p>
            <img class="peeper-img" src="https://thiscatdoesnotexist.com" alt="">
          </div>
        </div>
      </div>`
    }


    get ActiveTemplate() {
        return `
            <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body container-fluid">
          <div class="row">
            <div class="col-6">
              <img class="img-fluid" src="${this.img}" alt="">
            </div>
            <div class="col-6">
             <h1>${this.canFly == true ? '👍' : '👎'}</h1>
             <h1>${this.size}</h1>

            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>`
    }

    static GetBirdForm() {
        return `
       <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Peep a Bird</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
     
        <form onsubmit="app.birdsController.peepBird()">
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="name" name="name" placeholder="Bird Name">
              <label for="name">Bird Name</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="url" class="form-control" id="img" name="img" placeholder="Bird Image">
              <label for="img">Bird Image</label>
            </div>
          </div>
          <input type="checkbox" id="canFly"  name="canFly">
          <div>
          </div>
          <select name="size" class="form-select" id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="chunko">Chonker</option>
          </select>
          <div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
        `
    }
}