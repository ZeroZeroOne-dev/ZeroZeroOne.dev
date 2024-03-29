import { Component } from "../../../001-lib/component/component.comp.js";
import { RoutingComponent } from "../../../001-lib/routing/routing.comp.js";
import { RouteMatchedEvent } from "../../../001-lib/routing/routing.events.js";
import { ProjectComponent } from "../project/project.comp.js";

export class WindowComponent extends Component {
  #titleField;

  constructor() {
    super({
      styleSheet: "scripts/components/window/window.comp.css",
      template: "scripts/components/window/window.comp.html",
    });
  }

  init() {
    this.#titleField = this.getChild(".title");

    this.getChild(".close").addEventListener("click", () => this.close());

    /** @type {RoutingComponent} */
    const router = this.getChild("lib-routing-001");
    router.addEventListener(RouteMatchedEvent.Key, (event) => {
      this.show();
    });
    router.setRouteMap({
      "#/projects/(\\S+)": {
        component: ProjectComponent,
        params: (matches) => [matches[1], this.setTitle.bind(this)],
      },
    });
  }

  show() {
    this.root.style = "visibility: visible;";
  }

  close() {
    this.root.style = "visibility: hidden;";
    window.location.hash = "";
  }

  setTitle(title) {
    this.#titleField.textContent = title;
  }
}
customElements.define("window-001", WindowComponent);
