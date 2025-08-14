export class Grid extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const customAttribute = new Map();
    customAttribute.set("columns", "3");
    customAttribute.set("col-gap", "0.5rem");
    customAttribute.set("row-gap", "0.5rem");
    customAttribute.set("padding", "0.5rem");
    customAttribute.forEach((value, key) => {
      if (this.hasAttribute(key)) {
        customAttribute.set(key, this.getAttribute(key));
      }
    });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: grid;
        grid-template-columns: repeat(${customAttribute.get("columns")}, 1fr);
        column-gap: ${customAttribute.get("col-gap")};
        row-gap: ${customAttribute.get("row-gap")};
        padding: ${customAttribute.get("padding")};
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(document.createElement("slot"));
  }
}
