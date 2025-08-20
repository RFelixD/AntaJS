import { AntaJS } from "../../config.js";

export class Button extends AntaJS {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const Style = this.getStyle()["components"]["button"];
    const Theme = this.getTheme();

    const style = document.createElement("style");
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = this.getAttribute("text");
    const container = document.createElement("div");
    container.classList.add("container");
    container.appendChild(button);
    style.textContent = `
        :host {
            width: 100%;
            border: 0;
        }
        .container {
            margin: ${Style["host"]["margin"]};
        }
        .button {
            padding: ${Style["button"]["padding"]};
            background-color: ${Theme[1]};
        }
    
    `;

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}
