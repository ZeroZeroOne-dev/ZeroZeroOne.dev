import { Component } from "../../../001-lib/component/component.comp.js";

export class ProjectsComponent extends Component {
    constructor() {
        super({
            template: 'scripts/components/projects/projects.comp.html'
        });
    }

    init() { 
        const projectList = this.getChild('#project-list');
        
        const first = document.createElement('li');
        first.textContent = 'Youtube-live';

        projectList.appendChild(first);
    }
}
customElements.define('projects-001', ProjectsComponent);