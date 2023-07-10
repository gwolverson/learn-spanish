import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Heading_1 } from "../../../chunks/Heading.js";
import { S as Sidebar_1 } from "../../../chunks/Sidebar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="grid md:grid-cols-6 gap-2"><div class="col-span-1">${validate_component(Sidebar_1, "Sidebar").$$render($$result, {}, {}, {})}</div>  
    <div class="col-span-5">${validate_component(Heading_1, "Heading").$$render(
    $$result,
    {
      title: "Learn Spanish Verbs",
      subTitle: "Spanish verbs can be one of the hardest challenges when it comes to learning the language, this page helps break down different verbs types and how you would use them"
    },
    {},
    {}
  )}</div></div></div>`;
});
export {
  Page as default
};
