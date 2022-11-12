export class Component extends HTMLElement {
    shadow;
    styleSheetPath;
    state = {};

    constructor(
        styleSheet = undefined,
        template = undefined
    ) {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.styleSheetPath = styleSheet;
        this.#setStyleSheet();

        this.templatePath = template;
        this.#setTemplate();
    }

    #setStyleSheet() {
        let imports;

        if (this.styleSheetPath == undefined) {
            imports = `
                @import '/001-lib/component/component.comp.css';
            `;
        } else {
            imports = `
                @import '/001-lib/component/component.comp.css';
                @import '${this.styleSheetPath}';
            `;
        }

        const style = document.createElement('style');
        style.innerHTML = imports;
        this.shadow.appendChild(style);
    }

    async #setTemplate() {
        if (this.templatePath == undefined)
            return;

        const response = await fetch(this.templatePath);
        const template = await response.text();
        this.shadow.innerHTML = template;

    }

    setState(newState) {
        Object.entries(newState)
            .forEach(([key, value]) => {
                this.state[key] = this.#isObject(this.state[key]) &&
                    this.#isObject(value) ? { ...this.state[key], ...value } : value;
            });
    }

    #isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    appendChild(child) {
        this.shadow.appendChild(child);
    }

    replaceChild(current, newChild) {
        this.shadow.replaceChild(current, newChild);
    }

    replaceChildren(newChildren = []) {
        this.shadow.replaceChildren(newChildren);
    }

    removeChildren() {
        this.replaceChildren();
    }

    get innerHTML() {
        return this.shadow.innerHTML;
    }

    set innerHTML(html) {
        this.shadow.innerHTML = null;
        this.#setStyleSheet();
        this.shadow.innerHTML += html;
    }
}