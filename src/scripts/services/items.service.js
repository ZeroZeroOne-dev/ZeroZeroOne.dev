
export class ItemsService {

    /** @type {ItemService} */
    static #ProjectService;

    static async init() {
        this.#ProjectService = new ItemService('projects');
        await this.ProjectService.init();
    }

    static get ProjectService() {
        return this.#ProjectService;
    }

}

class ItemService {
    #category;
    #index;

    constructor(category) {
        this.#category = category;
    }

    async init() {
        const rawIndex = await this.#getIndex();

        this.#index = Object.fromEntries(
            rawIndex.map(i => {
                return [i.id, i];
            }),
        );

        console.log(this.#index);
    }

    async #getIndex() {
        var response = await fetch(`data/${this.#category}/index.json`);
        return await response.json();
    }

    async getContent(id) {

        const index = this.#index[id];

        var response = await fetch(`data/${this.#category}/${index.index}/body.html`);
        return await response.text();
    }

    get index() {
        return this.#index;
    }
}