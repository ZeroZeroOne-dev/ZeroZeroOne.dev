export class Component extends HTMLElement {
    shadow;

    #styleSheetPath;
    #templatePath;

    constructor(
        styleSheet = undefined,
        template = undefined
    ) {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.#styleSheetPath = styleSheet;
        this.#templatePath = template;
        this.#makeContainer();
    }

    #setStyleSheet() {
        let imports;

        if (this.#styleSheetPath == undefined) {
            imports = `
                @import '/001-lib/component/component.comp.css';
            `;
        } else {
            imports = `
                @import '/001-lib/component/component.comp.css';
                @import '${this.#styleSheetPath}';
            `;
        }

        const style = document.createElement('style');
        style.innerHTML = imports;
        this.shadow.appendChild(style);
    }

    async #makeContainer() {
        this.#setStyleSheet();

        if (this.#templatePath !== undefined) {
            const response = await fetch(this.#templatePath);
            const template = await response.text();
            this.shadow.innerHTML += template;
        }

        this.init();
    }

    getChild(selector) {
        return this.shadow.querySelector(selector);
    }

    init() { }
}