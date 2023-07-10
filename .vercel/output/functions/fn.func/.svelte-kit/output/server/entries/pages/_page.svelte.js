import { c as create_ssr_component, v as validate_component, f as escape } from "../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
/* empty css                                                    */import { H as Heading_1 } from "../../chunks/Heading.js";
const Card_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "replace me" } = $$props;
  let { content = "replace-me" } = $$props;
  let { link = "/replace-me" } = $$props;
  let { linkText = "Learn more!" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.linkText === void 0 && $$bindings.linkText && linkText !== void 0)
    $$bindings.linkText(linkText);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(title)}</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">${escape(content)}</p>
  ${validate_component(Button, "Button").$$render($$result, { class: "w-fit", href: link }, {}, {
        default: () => {
          return `${escape(linkText)}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>`;
        }
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Heading_1, "Heading").$$render(
    $$result,
    {
      title: "¡Hola y bienvenido!",
      subTitle: "Hello and welcome! This app is designed to help you learn the language Spanish, by providing a variety of resources!."
    },
    {},
    {}
  )}
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">${validate_component(Card_1, "Card").$$render(
    $$result,
    {
      title: "Verbs",
      content: "Learn more about Spanish verbs, conjugation, when and how to use them!",
      link: "/verbs"
    },
    {},
    {}
  )}
        ${validate_component(Card_1, "Card").$$render(
    $$result,
    {
      title: "Connectives",
      content: "Learn more about Spanish connecting words and how to use them!",
      link: "/connectives"
    },
    {},
    {}
  )}
        ${validate_component(Card_1, "Card").$$render(
    $$result,
    {
      title: "Quiz",
      content: "Create randomly generates quizes to test and improve your knowledge!",
      link: "/quiz",
      linkText: "Quiz time!"
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
