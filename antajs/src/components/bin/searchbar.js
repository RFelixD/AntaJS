export class SearchBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const customAttribute = new Map();
    customAttribute.set("placeholder", "Search...");
    customAttribute.set("value", "");
    customAttribute.set("color", "blue");
    customAttribute.set("border-radius", "0.5rem");
    customAttribute.set("padding", "0.5rem");
    customAttribute.set("margin", "0.25rem");

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
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", customAttribute.get("value"));
    input.setAttribute("placeholder", customAttribute.get("placeholder"));
    input.setAttribute("class", "search-input");

    style.textContent = `
            :host {
                display: inline;
                margin: ${customAttribute.get("margin")};
            }
            .search-input {
                padding: ${customAttribute.get("padding")};
                border: 1px solid ${colorList.get(
                  customAttribute.get("color")
                )};
                border-radius: ${customAttribute.get("border-radius")};
                outline: none;
           `;
    shadow.appendChild(style);
    shadow.appendChild(input);
  }
}
