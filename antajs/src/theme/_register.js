import { simple } from "./simple.js";
import { minimalist } from "./minimalist.js";

export const registeredStyle = new Map();
registeredStyle.set("simple", simple);
registeredStyle.set("minimalist", minimalist);
