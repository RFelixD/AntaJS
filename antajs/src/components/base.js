import { registeredStyle } from "../theme/_register.js";

export class Base extends HTMLElement {
  #isStyleExist = false;
  #themeObj;
  constructor() {
    super();
    this.Style = registeredStyle.get("simple");
    this.#themeObj = this.Style["theme"];
    this.Theme = this.#themeObj["sea"];
  }
  setStyle(prop) {
    registeredStyle.forEach((value, key) => {
      if (prop == key) {
        this.Style = value;
        this.#isStyleExist = true;
      }
    });
    return this.#isStyleExist;
  }
  getStyle() {
    return this.Style;
  }
  setTheme(prop) {
    if (typeof this.#themeObj[prop] !== "undefined") {
      this.Theme = this.#themeObj[prop];
    }
    return typeof this.#themeObj[prop] !== "undefined";
  }
  getTheme() {
    return this.Theme;
  }
  getGlobalCSS(prop, fallback = "") {}
}
