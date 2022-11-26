import { Component } from "../../../001-lib/component/component.comp.js";

export class NavListComponent extends Component {

    constructor() {
        super({
            styleSheet: 'scripts/components/nav-list/nav-list.comp.css',
            template: 'scripts/components/nav-list/nav-list.comp.html'
        });
    }

}
customElements.define('nav-list-001', NavListComponent);