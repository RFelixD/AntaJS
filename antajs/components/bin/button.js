export class Button extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const customAttribute = new Map();
    customAttribute.set("text", "Click Me!");
    customAttribute.set("color", "blue");
    customAttribute.set("padding", "0.5rem");
    customAttribute.set("border-radius", "0.5rem");
    customAttribute.set("margin", "0");

    customAttribute.forEach((value, key) => {
      if (this.hasAttribute(key)) {
        customAttribute.set(key, this.getAttribute(key));
      }
    });

    const colorList = new Map();
    colorList.set("blue", "#51a2ff");
    colorList.set("red", "#ff4d4d");
    colorList.set("green", "#66ff66");
    colorList.set("yellow", "#ffff66");

    let conditionChecker = false;
    colorList.forEach((value, key) => {
      if (customAttribute.get("color") == key) {
        conditionChecker = true;
      }
    });
    if (!conditionChecker) {
      customAttribute.set("color", "blue");
    }

    const style = document.createElement("style");
    const button = document.createElement("button");
    button.textContent = customAttribute.get("text");

    style.textContent = `
            :host {
                display: block;
                width: 100%;
                margin: ${customAttribute.get("margin")};
                font-family: Arial, sans-serif;
                font-size: 1rem;
                text-align: center;
            }
            button {
                padding: ${customAttribute.get("padding")};
                background-color: ${colorList.get(
                  customAttribute.get("color")
                )};
                width: 100%;
                border: none;
                border-radius: ${customAttribute.get("border-radius")};
                color: white;
                cursor: pointer;
            }
            button:hover {
                opacity: 0.8;
            }
        `;

    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}
