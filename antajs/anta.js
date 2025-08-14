import { Base } from "./components/base.js";
import { Card } from "./components/card.js";
import { Grid, Cell } from "../antajs/layout/grid.js";
import { SearchBar } from "./components/bin/searchbar.js";
import { Button } from "./components/button.js";

customElements.define("b-base", Base);
customElements.define("b-button", Button);

customElements.define("c-card", Card);
customElements.define("c-cell", Cell); // Grid col row modification

customElements.define("s-searchbar", SearchBar);

customElements.define("g-grid", Grid);
