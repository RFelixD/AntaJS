import { simple } from "../theme/simple.js";
import { minimalist } from "../theme/minimalist.js";

class Base {
  constructor() {
    this.Style = simple;
  }
  setStyle(prop) {
    switch (prop) {
      case "simple":
        this.Style = simple;
        break;
      case "minimalist":
        this.Style = minimalist;
        break;
      default:
        this.Style = simple;
    }
  }
  getGlobalCSS(prop, fallback = "") {}
}

const x = new Base();
console.log(x.Style);
//x.setStyle("simple");
//console.log(x.Style2);
