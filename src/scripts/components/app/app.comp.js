import { Component } from "../../../001-lib/component/component.comp.js";

export class AppComponent extends Component {

    constructor() {
        super(
            'scripts/components/app/app.comp.css'
        );

        this.draw();
    }

    draw(){
        this.innerHTML = "<h1>Hello World</h1>"
    }

}
customElements.define('app-001', AppComponent);
