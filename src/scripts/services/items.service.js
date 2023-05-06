
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

    async getItem(id) {

        const entry = this.getEntry(id);

        var response = await fetch(`data/${this.#category}/${entry.location}/body.html`);

        const body = await response.text();

        return {
            entry,
            body
        };
    }

    getEntry(id){
        return this.#index[id];
    }

    get index() {
        return this.#index;
    }
}