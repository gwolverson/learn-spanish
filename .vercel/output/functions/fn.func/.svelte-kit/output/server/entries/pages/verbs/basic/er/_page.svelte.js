import { c as create_ssr_component, l as get_store_value, v as validate_component } from "../../../../../chunks/index2.js";
import { r as regularErVerbStore, i as irregularErVerbStore } from "../../../../../chunks/erVerbStores.js";
import { V as VerbPageLayout } from "../../../../../chunks/VerbPageLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const regularVerbs = Object.keys(get_store_value(regularErVerbStore));
  const irregularVerbs = Object.keys(get_store_value(irregularErVerbStore));
  const combinedVerbs = {
    ...get_store_value(regularErVerbStore),
    ...get_store_value(irregularErVerbStore)
  };
  let currentVerb = combinedVerbs["comer"];
  function selectVerb(verb) {
    currentVerb = combinedVerbs[verb];
  }
  return `${validate_component(VerbPageLayout, "VerbPageLayout").$$render(
    $$result,
    {
      heading: "-er Verbs",
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
