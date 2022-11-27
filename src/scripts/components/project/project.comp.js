import { Component } from "../../../001-lib/component/component.comp.js";

export class ProjectComponent extends Component {

    #id;

    constructor(id){
        super();

        this.#id = id;
    }

    init() {
        this.root.innerHTML = `<h2>sup ${this.#id}</h2>`;
    }
}
customElements.define('project-001', ProjectComponent);