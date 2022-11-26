import { Component } from "../../../001-lib/component/component.comp.js";

export class WindowComponent extends Component {

    constructor(){
        super({
            styleSheet: 'scripts/components/window/window.comp.css',
            template: 'scripts/components/window/window.comp.html'
        })
    }

    init(){
        this.getChild('.close')
            .addEventListener('click', () => this.close());  
    }

    show(){
        this.root.style = 'visibility: visible;'
    }

    close(){
        this.root.style = 'visibility: hidden;'
    }

}
customElements.define('window-001', WindowComponent);