import { Component } from "../../../001-lib/component/component.comp.js";
import { RoutingComponent } from "../../../001-lib/routing/routing.comp.js";
import { NavListComponent } from "../nav-list/nav-list.comp.js";
import { WindowComponent } from "../window/window.comp.js";

export class AppComponent extends Component {

    constructor() {
        super({
            styleSheet: 'scripts/components/app/app.comp.css',
            template: 'scripts/components/app/app.comp.html'
        });

        // RoutingComponent.setRouteMap({
        //     '#\/projects': {
        //         component: ProjectsComponent
        //     },
        //     '': {
        //         redirect: '/projects'
        //     }
        // });
    }

}
customElements.define('app-001', AppComponent);
