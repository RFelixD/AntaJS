import { Base } from "./base.js";

export class Card extends Base {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const customAttribute = new Map();
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
        (this.hasAttribute(key) &&
          this.getAttribute(key) !== null &&
          this.getAttribute(key) != "") ||
        key == "body"
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
          card.innerHTML += `<div class="${key}"><div>${this.getAttribute(
            key
          )}</div><div><slot></slot></div></div>`;
          return;
        } else {
          card.innerHTML += `<div class="${key}">${cardContent.get(key)}</div>`;
          return;
        }
      }
    });

    const style = document.createElement("style");

    switch (this.style_page) {
      case "simple":
        style.textContent = `
            :host {
              display: block;
              width: 100%;
              margin: 0.1rem;
              font-family: Arial, sans-serif;
              font-size: 1rem;
            }
            .header {
                background-color: ${this._2};
                color: ${this.pure};
                padding: 0.65rem 0 0.65rem 1.25rem;
                font-size: 1.25rem;
            }
            .body {
                padding: 2px 4px
            }
            .footer{
                background-color: ${this._2};
                color: ${this.pure};
                padding: 2px 4px;
            }
        `;

        break;
      case "minimalist":
        style.textContent = `
          :host {
            display: block;
            width: 100%;
            margin: 0.1rem;
            font-family: Arial, sans-serif;
            font-size: 1rem;
          }
          .card {
            border-radius: ${customAttribute.get("border-radius")};
          }
          .header {
              background-color: ${this._1};
              color: ${this.pure};
              padding: 0.65rem 0 0.65rem 1.25rem;
              border-radius: ${customAttribute.get(
                "border-radius"
              )} ${customAttribute.get("border-radius")} 0 0;
              font-size: 1.25rem;
          }
          .body {
              padding: 2px 4px
          }
          .footer{
              background-color: ${this._1};
              color: ${this.pure};
              padding: 2px 4px;
              border-radius: 0 0 ${customAttribute.get(
                "border-radius"
              )} ${customAttribute.get("border-radius")};
          }
        
    `;
        break;
      default:
        style.textContent = `
          :host {
            display: block;
            width: 100%;
            margin: 0.1rem;
            font-family: Arial, sans-serif;
            font-size: 1rem;
          }
          .card {
            border-radius: ${customAttribute.get("border-radius")};
          }
          .header {
              background-color: ${this._1};
              color: ${this.pure};
              padding: 0.65rem 0 0.65rem 1.25rem;
              border-radius: ${customAttribute.get(
                "border-radius"
              )} ${customAttribute.get("border-radius")} 0 0;
              font-size: 1.25rem;
          }
          .body {
              padding: 2px 4px
          }
          .footer{
              background-color: ${this._1};
              color: ${this.pure};
              padding: 2px 4px;
              border-radius: 0 0 ${customAttribute.get(
                "border-radius"
              )} ${customAttribute.get("border-radius")};
          }
        
    `;
    }
    shadow.appendChild(style);
    shadow.appendChild(card);
  }
}
