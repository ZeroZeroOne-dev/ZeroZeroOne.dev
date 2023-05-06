import { Component } from "../../../001-lib/component/component.comp.js";
import { ItemsService } from "../../services/items.service.js";
import { NavItemComponent } from "../nav-item/nav-item.js";

export class NavListComponent extends Component {

    #category;

    constructor() {
        super({
            styleSheet: 'scripts/components/nav-list/nav-list.comp.css',
            template: 'scripts/components/nav-list/nav-list.comp.html'
        });

        this.#category = this.getAttribute('data-category');
    }

    async init() {
        const index = ItemsService.ProjectService.index;

        const list = this.getChild('.list');

        Object.values(index).forEach(item => {
            list.appendChild(new NavItemComponent(this.#category, item));
        });
    }
}
customElements.define('nav-list-001', NavListComponent);