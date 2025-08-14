import { Base } from "./components/base.js";
import { Card } from "./components/bin/card.js";
import { Grid } from "../antajs/layout/grid.js";
import { SearchBar } from "./components/bin/searchbar.js";
import { Button } from "./components/button.js";

customElements.define("b-base", Base);
customElements.define("b-button", Button);

customElements.define("c-card", Card);
customElements.define("s-searchbar", SearchBar);
customElements.define("g-grid", Grid);

if (document.getElementById("loader-wrapper")) {
  document.getElementById("loader-wrapper").style.display = "none";
}
