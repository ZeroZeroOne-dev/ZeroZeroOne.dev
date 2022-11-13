import { Component } from "../../../001-lib/component/component.comp.js";

export class AppComponent extends Component {

    constructor() {
        super(
            'scripts/components/app/app.comp.css',
            'scripts/components/app/app.comp.html'
        );
    }

}
customElements.define('app-001', AppComponent);
