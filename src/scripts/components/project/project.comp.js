import { Component } from "../../../001-lib/component/component.comp.js";
import { ItemsService } from "../../services/items.service.js"

export class ProjectComponent extends Component {

    #id;
    #setWindowTitle;

    constructor(id, setWindowTitle){
        super({
            styleSheet: 'scripts/components/project/project.comp.css'
        });

        this.#setWindowTitle = setWindowTitle;
        this.#id = id;
    }

    async init() {

        const item = await ItemsService.ProjectService.getItem(this.#id);

        this.#setWindowTitle(item.entry.title);

        this.root.innerHTML = item.body;
        
    }
}
customElements.define('project-001', ProjectComponent);