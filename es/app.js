import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@irenedelatorre/participacion-espanola-en-eurovision-un-enfoque-de-genero.js?v=3";

new Runtime().module(define, name => {
  if (name === "chart_participation") return new Inspector(document.querySelector("#observablehq-chart_participation"));
  if (name === "viewof radios_type") return new Inspector(document.querySelector("#observablehq-viewof-radios_type"));
  if (name === "viewof align_b_comp") return new Inspector(document.querySelector("#observablehq-viewof-align_b_comp"));
  if (name === "css") return new Inspector(document.querySelector("#observablehq-css"));
  if (name === "chart_composers") return new Inspector(document.querySelector("#observablehq-chart_composers"));

  return [
    "composers_chart",
    "Tooltip",
    "composers_tooltip",
    "Composers_es",
    "singers_tooltip",
    "singers_chart",
    "Singers_es"
    ]
    .includes(name);
});

