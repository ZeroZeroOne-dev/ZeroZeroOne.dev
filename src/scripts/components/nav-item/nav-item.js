import { Component } from "../../../001-lib/component/component.comp.js";

export class NavItemComponent extends Component {

    #link;

    constructor(link) {
        super({
            styleSheet: 'scripts/components/nav-item/nav-item.css',
            template: 'scripts/components/nav-item/nav-item.html'
        });

        this.#link = link;
    }

    init() {
        this.root.addEventListener('click', () => {
            window.location.hash = this.#link;
        });
    }

}
customElements.define('nav-item-001', NavItemComponent);