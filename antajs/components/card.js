import { Base } from "./base.js";

export class Card extends Base {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const customAttribute = new Map();
    customAttribute.set("padding", this.padding);
    customAttribute.set("border-radius", this.borderRadius);
    customAttribute.set("margin", this.margin);

    customAttribute.forEach((value, key) => {
      if (this.hasAttribute(key)) {
        customAttribute.set(key, this.getAttribute(key));
      }
    });

    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = new Map();
    cardContent.set("image", "");
    cardContent.set("header", "");
    cardContent.set("body", "");
    cardContent.set("footer", "");
    let isImageExists = false;
    cardContent.forEach((value, key) => {
      if (
        this.hasAttribute(key) &&
        this.getAttribute(key) !== null &&
        this.getAttribute(key) != ""
      ) {
        if (this.getAttribute(key) !== "" && key == "image") {
          isImageExists = true;
          card.innerHTML += `<div class="${key}"><img src="${this.getAttribute(
            key
          )}" alt="${key}"></div>`;
          return;
        }
        if (key == "header" && !isImageExists) {
          card.innerHTML += `<div class="${key}">${this.getAttribute(
            key
          )}</div>`;
          return;
        }
        if (key == "body") {
          card.innerHTML += `<div class="${key}"><div>${cardContent.get(
            key
          )}</div><slot></slot></div>`;
          return;
        } else {
          card.innerHTML += `<div class="${key}">${cardContent.get(key)}</div>`;
          return;
        }
      }
    });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        width: 100%;
        margin: ${customAttribute.get("margin")};
        font-family: Arial, sans-serif;
        font-size: 1rem;
      }
      .card {
        border-radius: ${customAttribute.get("border-radius")};
      }
     .header {
        background-color: ${this._1};
        color: ${this.pure};
        margin: ${customAttribute.get("margin")};
        padding: ${customAttribute.get("padding")};
        border-radius: ${customAttribute.get(
          "border-radius"
        )} ${customAttribute.get("border-radius")} 0 0;
     }
    .body {
        padding: ${customAttribute.get("padding")};
    }
    .footer{
        background-color: ${this._1};
        color: ${this.pure};
        padding: ${customAttribute.get("padding")};
        border-radius: 0 0 ${customAttribute.get(
          "border-radius"
        )} ${customAttribute.get("border-radius")};
     }
    
    }

    `;

    shadow.appendChild(style);
    shadow.appendChild(card);
  }
}
