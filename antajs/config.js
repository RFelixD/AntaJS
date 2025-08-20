import { Base } from "./src/components/base.js";

/* 
    AntaJS object contain several method that you can configure.
    Feel freely configure anything for your website.
*/
export class AntaJS extends Base {
  constructor() {
    super();
    /*
        Available style:
        simple / minimalist / formal / playful
    */
    this.setStyle("simple");
    /* 
        Theme available:
        simple      : sea / windy / nature / sunny / dark
        minimalist  : sea / windy / nature / sunny / dark
        playful     : sunny
        formal      : light / dark
    */
    this.setTheme("sea");
  }
}
