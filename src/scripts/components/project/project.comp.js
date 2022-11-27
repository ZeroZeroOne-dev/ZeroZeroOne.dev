import { Component } from "../../../001-lib/component/component.comp.js";
import { ItemsService } from "../../services/items.service.js"

export class ProjectComponent extends Component {

    #id;

    constructor(id){
        super();

        this.#id = id;
    }

    async init() {

        const body = await ItemsService.ProjectService.getContent(this.#id);

        this.root.innerHTML = body;
    }
}
customElements.define('project-001', ProjectComponent);