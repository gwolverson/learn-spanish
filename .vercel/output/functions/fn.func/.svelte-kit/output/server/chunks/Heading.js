import { c as create_ssr_component, v as validate_component, f as escape } from "./index2.js";
import "classnames";
/* empty css                                         */import { H as Heading } from "./Heading2.js";
import { P } from "./P.js";
const Heading_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subTitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
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
        return `${escape(title)}`;
      }
    }
  )}
    ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400",
      align: "center"
    },
    {},
    {
      default: () => {
        return `${escape(subTitle)}`;
      }
    }
  )}</div>`;
});
export {
  Heading_1 as H
};
