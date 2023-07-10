import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { H as Heading } from "../../../chunks/Heading2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `Quiz Time!`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
