import { c as create_ssr_component, l as get_store_value, v as validate_component } from "../../../../../chunks/index2.js";
import { r as regularIrVerbStore, i as irregularIrVerbStore } from "../../../../../chunks/irVerbStores.js";
import { V as VerbPageLayout } from "../../../../../chunks/VerbPageLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const regularVerbs = Object.keys(get_store_value(regularIrVerbStore));
  const irregularVerbs = Object.keys(get_store_value(irregularIrVerbStore));
  const combinedVerbs = {
    ...get_store_value(regularIrVerbStore),
    ...get_store_value(irregularIrVerbStore)
  };
  let currentVerb = combinedVerbs["vivir"];
  function selectVerb(verb) {
    currentVerb = combinedVerbs[verb];
  }
  return `${validate_component(VerbPageLayout, "VerbPageLayout").$$render(
    $$result,
    {
      heading: "-ir Verbs",
      regularVerbs,
      irregularVerbs,
      currentVerb,
      selectVerb
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
