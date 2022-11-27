import { Component } from "../../../001-lib/component/component.comp.js";
import { NavItemComponent } from "../nav-item/nav-item.js";

export class NavListComponent extends Component {

    constructor() {
        super({
            styleSheet: 'scripts/components/nav-list/nav-list.comp.css',
            template: 'scripts/components/nav-list/nav-list.comp.html'
        });
    }

    init() {
        const list = this.getChild('.list');

        list.appendChild(new NavItemComponent('/projects/1'));
        list.appendChild(new NavItemComponent('/projects/2'));
    }
}
customElements.define('nav-list-001', NavListComponent);