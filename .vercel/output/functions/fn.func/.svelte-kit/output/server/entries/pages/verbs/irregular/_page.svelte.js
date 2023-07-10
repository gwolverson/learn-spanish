import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
/* empty css                                                          */import { H as Heading } from "../../../../chunks/Heading2.js";
import { S as Sidebar_1 } from "../../../../chunks/Sidebar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="grid md:grid-cols-6 gap-2"><div class="col-span-1">${validate_component(Sidebar_1, "Sidebar").$$render($$result, {}, {}, {})}</div>  
    <div class="col-span-5">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4 text-center",
      customSize: "text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `Irregular Verbs`;
      }
    }
  )}</div></div></div>`;
});
export {
  Page as default
};
