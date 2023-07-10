import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value, h as add_attribute, g as getContext, v as validate_component, p as compute_slots, f as escape, l as get_store_value, o as each } from "../../../../chunks/index2.js";
import classNames from "classnames";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */import { H as Heading } from "../../../../chunks/Heading2.js";
import { P } from "../../../../chunks/P.js";
import { S as Sidebar_1 } from "../../../../chunks/Sidebar.js";
import { r as regularArVerbStore, i as irregularArVerbStore } from "../../../../chunks/arVerbStores.js";
import { r as regularErVerbStore, i as irregularErVerbStore } from "../../../../chunks/erVerbStores.js";
import { r as regularIrVerbStore, i as irregularIrVerbStore } from "../../../../chunks/irVerbStores.js";
import { C as Card } from "../../../../chunks/Card.js";
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass2;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses2 = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass2 = classNames(defaultClass, colorClasses2[color], $$props.class);
  return `${show ? `
  <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass2)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const colorClasses = {
  red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
  green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
  purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
  teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
  yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
  orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
  blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
};
const labelClass = (inline, extraClass) => classNames(inline ? "inline-flex" : "flex", "items-center", extraClass);
const inputClass = (custom, color, rounded, tinted, extraClass) => classNames(
  "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",
  extraClass === true && "mr-2",
  tinted ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
  custom && "sr-only peer",
  rounded && "rounded",
  colorClasses[color],
  extraClass
);
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "custom", "inline", "group", "value", "checked"]);
  let $$slots = compute_slots(slots);
  let { color = "blue" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let background = getContext("background");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  return `${validate_component(Label, "Label").$$render(
    $$result,
    {
      class: labelClass(inline, $$props.class),
      show: !!$$slots.default
    },
    {},
    {
      default: () => {
        return `<input${spread(
          [
            { type: "checkbox" },
            { value: escape_attribute_value(value) },
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass(custom, color, true, background, $$slots.default || $$props.class))
            }
          ],
          {}
        )}${add_attribute("checked", checked, 1)}>${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Range = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "size"]);
  let { value } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    sm: "h-1 range-sm",
    md: "h-2",
    lg: "h-3 range-lg"
  };
  let inputClass2;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  inputClass2 = classNames("w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700", sizes[size] ?? sizes.md, $$props.class);
  return `<input${spread(
    [
      { type: "range" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClass2)
      }
    ],
    {}
  )}${add_attribute("value", value, 0)}>`;
});
const Flashcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { verb = {} } = $$props;
  if ($$props.verb === void 0 && $$bindings.verb && verb !== void 0)
    $$bindings.verb(verb);
  return `${validate_component(Card, "Card").$$render($$result, { size: "md" }, {}, {
    default: () => {
      return `<h5 class="m-auto pb-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(verb.verb)} ${``}</h5>                        
  ${``}
  <div class="w-48 m-auto">${validate_component(Button, "Button").$$render($$result, { color: "blue" }, {}, {
        default: () => {
          return `${``}${`Show`} Definition`;
        }
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  ({
    ...get_store_value(regularArVerbStore),
    ...get_store_value(irregularArVerbStore)
  });
  ({
    ...get_store_value(regularErVerbStore),
    ...get_store_value(irregularErVerbStore)
  });
  ({
    ...get_store_value(regularIrVerbStore),
    ...get_store_value(irregularIrVerbStore)
  });
  let generatedVerbs = [];
  let arVerbs = false;
  let erVerbs = false;
  let irVerbs = false;
  let mixedVerbs = false;
  let numberOfCards = 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div><div class="grid md:grid-cols-6 gap-6"><div class="col-span-1">${validate_component(Sidebar_1, "Sidebar").$$render($$result, {}, {}, {})}</div>  
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
          return `Flashcards`;
        }
      }
    )}                      
      <div class="px-10"><h2 class="m-auto pb-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Generate flashcards based on the content you want to focus on</h2>
        <form>${``}
          ${validate_component(P, "P").$$render($$result, { class: "pb-2 dark:text-white italic" }, {}, {
      default: () => {
        return `Select which content you want to focus on`;
      }
    })}
          <div class="grid gap-6 mb-6 md:grid-cols-2"><div>${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-6 space-x-1",
        checked: arVerbs
      },
      {
        checked: ($$value) => {
          arVerbs = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `-ar verbs`;
        }
      }
    )}
              ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-6 space-x-1",
        checked: erVerbs
      },
      {
        checked: ($$value) => {
          erVerbs = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `-er verbs`;
        }
      }
    )}
              ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-6 space-x-1",
        checked: irVerbs
      },
      {
        checked: ($$value) => {
          irVerbs = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `-ir verbs`;
        }
      }
    )}
              ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-6 space-x-1",
        checked: mixedVerbs
      },
      {
        checked: ($$value) => {
          mixedVerbs = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Mixed verbs`;
        }
      }
    )}
              ${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Number of Cards ${escape(numberOfCards)}`;
      }
    })}
              ${validate_component(Range, "Range").$$render(
      $$result,
      {
        id: "numberOfCards",
        min: "1",
        max: "10",
        value: numberOfCards
      },
      {
        value: ($$value) => {
          numberOfCards = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
          ${validate_component(Button, "Button").$$render($$result, { color: "blue" }, {}, {
      default: () => {
        return `Generate Cards`;
      }
    })}</form>
        ${generatedVerbs.length > 0 ? `<div class="pt-10 grid md:grid-cols-2 gap-6">${each(generatedVerbs, (verb) => {
      return `${validate_component(Flashcard, "Flashcard").$$render($$result, { verb }, {}, {})}`;
    })}</div>` : ``}</div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
