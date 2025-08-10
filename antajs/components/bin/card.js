let defaultStyle = "simple";
let dataStyle = null;


export class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const customAttribute = new Map();
    customAttribute.set("gradient", "false"); //update soon
    customAttribute.set("color", "blue");
    customAttribute.set("card-style", "simple"); //update soon
    customAttribute.set("img", ""); //update soon
    customAttribute.set("padding", "1rem");
    customAttribute.set("border-radius", "0.5rem");
    customAttribute.set("margin", "0.25rem");
    customAttribute.set("positioning", "vertical"); //update soon
    customAttribute.forEach((value, key) => {
      if (this.hasAttribute(key)) {
        customAttribute.set(key, this.getAttribute(key));
      }
    });
    const colorList = new Map();
    colorList.set("blue", {
      primary: "#51a2ff",
      secondary: "#51a2ff",
      tertiary: "#a3b3ff",
    });
    colorList.set("red", {
      primary: "#ff4d4d",
      secondary: "#ff4d4d",
      tertiary: "#ff9999",
    });
    colorList.set("green", {
      primary: "#66ff66",
      secondary: "#66ff66",
      tertiary: "#99ff99",
    });
    colorList.set("yellow", {
      primary: "#ffff66",
      secondary: "#ffff66",
      tertiary: "#ffff99",
    });

    const cardStyleList = new Map();

    let conditionChecker = false;

    conditionChecker = false;
    colorList.forEach((value, key) => {
      if (customAttribute.get("color") == key) {
        conditionChecker = true;
      }
    });
    if (!conditionChecker) {
      customAttribute.set("color", "blue");
    }

    const style = document.createElement("style");
    style.textContent = `
      :host {
       border-radius:  ${customAttribute.get("border-radius")};
        display: block;
        margin: ${customAttribute.get("margin")};
        color: white;
        font-family: "Arial", sans-serif;
      }
      .header {
        border-radius: ${customAttribute.get(
          "border-radius"
        )} ${customAttribute.get("border-radius")} 0 0;
        background-color: ${
          colorList.get(customAttribute.get("color")).primary
        };
        padding: ${customAttribute.get("padding")};
      }
      .body {
       padding: ${customAttribute.get("padding")};
       color: black;
      }
      .footer {
       border-radius: 0 0  ${customAttribute.get(
         "border-radius"
       )} ${customAttribute.get("border-radius")};
       padding: ${customAttribute.get("padding")};
       background-color: ${
         colorList.get(customAttribute.get("color")).secondary
       };
      }
    `;
    shadow.appendChild(style);

    const structureName = ["header", "body", "footer"];
    structureName.forEach((item) => {
      if (this.hasAttribute(item)) {
        const element = document.createElement("div");
        element.setAttribute("class", item);
        element.innerHTML = this.getAttribute(item);
        shadow.appendChild(element);
      }
    });
  }
}
