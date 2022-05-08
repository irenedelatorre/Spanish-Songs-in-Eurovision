import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@irenedelatorre/spanish-participation-in-eurovision-a-gender-approach-to-c.js?v=3";

new Runtime().module(define, name => {
  if (name === "css") return new Inspector(document.querySelector("#observablehq-css"));
  if (name === "chart_participation") return new Inspector(document.querySelector("#observablehq-chart_participation"));
  if (name === "viewof radios_type") return new Inspector(document.querySelector("#observablehq-viewof-radios_type"));
  if (name === "viewof align_b_comp") return new Inspector(document.querySelector("#observablehq-viewof-align_b_comp"));
  if (name === "chart_composers") return new Inspector(document.querySelector("#observablehq-chart_composers"));
  if (name === "resize") return new Inspector(document.querySelector("#observablehq-resize"));

  return [
    "composers_chart",
    "Tooltip",
    "composers_tooltip",
    "Composers_en",
    "singers_tooltip",
    "singers_chart",
    "Singers_en"
    ]
    .includes(name);
});
