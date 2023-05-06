import { Component } from "../../../001-lib/component/component.comp.js";

export class NavItemComponent extends Component {

    #item;
    #category;

    constructor(category, item) {
        super({
            styleSheet: 'scripts/components/nav-item/nav-item.css',
            // template: 'scripts/components/nav-item/nav-item.html'
        });

        this.#category = category;
        this.#item = item;
    }

    init() {
        this.root.addEventListener('click', () => {
            window.location.hash = `/${this.#category}/${this.#item.id}`;
        });

       this.root.innerHTML = `
            <h2>${this.#item.title}</h2>
            <span>${this.#item.summary}</span>
            <hr />
       `;
    }

}
customElements.define('nav-item-001', NavItemComponent);