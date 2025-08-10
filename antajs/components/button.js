import { Base } from "./base.js";
export class Button extends Base {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const customAttribute = new Map();
    customAttribute.set("text", "Click Me!");
    customAttribute.set("padding", this.padding);
    customAttribute.set("border-radius", this.borderRadius);
    customAttribute.set("margin", this.margin);
    customAttribute.set("ui", "primary");

    customAttribute.forEach((value, key) => {
      if (this.hasAttribute(key)) {
        customAttribute.set(key, this.getAttribute(key));
      }
    });

    const style = document.createElement("style");
    const button = document.createElement("button");

    button.textContent = customAttribute.get("text");
    if (customAttribute.get("ui") == "primary") {
      style.textContent = `
            :host {
                display: block;
                width: 100%;
                margin: ${customAttribute.get("margin")};
                font-family: Arial, sans-serif;
                font-size: 1rem;
                text-align: center;
            }
            .primary {
                padding: ${customAttribute.get("padding")};
                background-color: ${this._1};
                width: 100%;
                color: white;
                border: none;
                border-radius: ${this.borderRadius};
                cursor: pointer;
                transition: ${this.transition};
            }
            button:hover {
                opacity: 0.7;
            }
        `;

      button.classList.add("primary");
    } else if (customAttribute.get("ui") == "secondary") {
      style.textContent = `
            :host {
                display: block;
                width: 100%;
                margin: ${customAttribute.get("margin")};
                font-family: Arial, sans-serif;
                font-size: 1rem;
                text-align: center;
            }
            .secondary {
                padding: ${customAttribute.get("padding")};
                background-color: ${this.pure};
                border: 1px solid ${this._1};
                border-radius: ${this.borderRadius};
                width: 100%;
                color: ${this.dark};
                cursor: pointer;
                transition: ${this.transition};
            }
            button:hover {
                background-color: ${this._1};
                color: ${this.pure};
            }
        `;
      button.classList.add("secondary");
    }
    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}
