let fetchData = null;
await fetch("https://raw.githubusercontent.com/rfelixd/AntaJS/main/antajs/base.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`error, status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    fetchData = data;
  })
  .catch((error) => {
    console.error("Error fetching config:", error);
  });
let configData = null;
await fetch("https://raw.githubusercontent.com/rfelixd/AntaJS/main/antajs/config.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`error, status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    configData = data;
  })
  .catch((error) => {
    console.error("Error fetching config:", error);
  });

let style = configData["style"];
let theme = configData["theme"];
let baseStyle = fetchData[style];

export class Base extends HTMLElement {
  constructor() {
    super();
    this.baseColor = baseStyle["color-set"][theme];
    this._1 = this.baseColor["1"];
    this._2 = this.baseColor["2"];
    this._3 = this.baseColor["3"];
    this._4 = this.baseColor["4"];
    this._5 = this.baseColor["5"];
    this._dark = this.baseColor["dark"];
    this.neutralColor = baseStyle["neutral-set"];
    this.stone = this.neutralColor["stone"];
    this.slate = this.neutralColor["slate"];
    this.zinc = this.neutralColor["zinc"];
    this.pure = this.neutralColor["pure"];
    this.dark = this.neutralColor["dark"];
    this.padding = baseStyle["padding"];
    this.margin = baseStyle["margin"];
    this.borderRadius = baseStyle["border-radius"];
    this.transition = baseStyle["transition"];
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const base = document.createElement("div");
    base.setAttribute("class", "base");
    const style = document.createElement("style");
    const slots = document.createElement("slot");
    style.textContent = `
            :host {
                display: block;
                width: screen;
                margin: 0;
                padding: ${this.padding};
            }`;
    shadow.appendChild(style);
    shadow.appendChild(base);
    base.appendChild(slots);
  }
}

