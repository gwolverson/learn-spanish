import { c as create_ssr_component, l as get_store_value, v as validate_component } from "../../../../../chunks/index2.js";
import { r as regularArVerbStore, i as irregularArVerbStore } from "../../../../../chunks/arVerbStores.js";
import { V as VerbPageLayout } from "../../../../../chunks/VerbPageLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const regularVerbs = Object.keys(get_store_value(regularArVerbStore));
  const irregularVerbs = Object.keys(get_store_value(irregularArVerbStore));
  const combinedVerbs = {
    ...get_store_value(regularArVerbStore),
    ...get_store_value(irregularArVerbStore)
  };
  let currentVerb = combinedVerbs["hablar"];
  function selectVerb(verb) {
    currentVerb = combinedVerbs[verb];
  }
  return `${validate_component(VerbPageLayout, "VerbPageLayout").$$render(
    $$result,
    {
      heading: "-ar Verbs",
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
