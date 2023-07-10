import { c as create_ssr_component, a as compute_rest_props, g as getContext, h as add_attribute, b as spread, d as escape_object, e as escape_attribute_value, f as escape, s as setContext, i as is_void, v as validate_component, o as each } from "./index2.js";
import classNames from "classnames";
/* empty css                                         */import { w as writable } from "./index.js";
import { H as Heading } from "./Heading2.js";
import { S as Sidebar_1 } from "./Sidebar.js";
import { C as Card } from "./Card.js";
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = classNames(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", classNames("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button>

  ${open ? `<div class="hidden tab_content_placeholder"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li>`;
});
const styledActiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white",
  pill: "py-3 px-4 text-white bg-blue-600 rounded-lg",
  underline: "p-4 text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500",
  none: ""
};
const styledInactiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
  pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
  underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
  none: ""
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { style = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const ctx = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(style) ? false : divider;
  ulClass = classNames(defaultClass, style === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ style }) : ``}</ul>
${divider ? `${slots.divider ? slots.divider({ style }) : `
    <div class="h-px bg-gray-200 dark:bg-gray-700"></div>
  `}` : ``}
<div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div>`;
});
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = classNames(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "list", "position"]);
  let { tag = "ul" } = $$props;
  let { list = void 0 } = $$props;
  let { position = "inside" } = $$props;
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = classNames(lists[list ?? (tag === "ul" ? "disc" : "decimal")], positions[position], $$props.class);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(classList) }], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
function getVerbConjunctive(subject, form) {
  if (subject.form) {
    return subject.form + subject[form];
  } else {
    return subject[form];
  }
}
const VerbDetailCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentVerb } = $$props;
  if ($$props.currentVerb === void 0 && $$bindings.currentVerb && currentVerb !== void 0)
    $$bindings.currentVerb(currentVerb);
  return `${validate_component(Card, "Card").$$render($$result, { size: "md" }, {}, {
    default: () => {
      return `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(currentVerb.verb)} (${escape(currentVerb.action)})</h5>
  ${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1" }, {}, {
        default: () => {
          return `${validate_component(Li, "Li").$$render($$result, { liClass: "dark:text-white italic" }, {}, {
            default: () => {
              return `Yo <strong>${escape(getVerbConjunctive(currentVerb.subject, "i"))}</strong> (I ${escape(currentVerb.action)})`;
            }
          })}        
    ${validate_component(Li, "Li").$$render($$result, { liClass: "dark:text-white italic" }, {}, {
            default: () => {
              return `Tú <strong>${escape(getVerbConjunctive(currentVerb.subject, "you"))}</strong> (You ${escape(currentVerb.action)})`;
            }
          })}        
    ${validate_component(Li, "Li").$$render($$result, { liClass: "dark:text-white italic" }, {}, {
            default: () => {
              return `Él / Ella / Usted (formal) <strong>${escape(getVerbConjunctive(currentVerb.subject, "he"))}</strong> (He / She ${escape(currentVerb.action)}s)`;
            }
          })}        
    ${validate_component(Li, "Li").$$render($$result, { liClass: "dark:text-white italic" }, {}, {
            default: () => {
              return `Nosotros <strong>${escape(getVerbConjunctive(currentVerb.subject, "we"))}</strong> (We ${escape(currentVerb.action)})`;
            }
          })}            
    ${validate_component(Li, "Li").$$render($$result, { liClass: "dark:text-white italic" }, {}, {
            default: () => {
              return `Ellos / Ellas / Ustedes (formal) <strong>${escape(getVerbConjunctive(currentVerb.subject, "they"))}</strong> (They ${escape(currentVerb.action)})`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
const VerbExampleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentVerb } = $$props;
  if ($$props.currentVerb === void 0 && $$bindings.currentVerb && currentVerb !== void 0)
    $$bindings.currentVerb(currentVerb);
  return `${validate_component(Card, "Card").$$render($$result, { size: "md" }, {}, {
    default: () => {
      return `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Example Usage</h5>
  ${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1" }, {}, {
        default: () => {
          return `${each(currentVerb.examples, (example) => {
            return `${validate_component(Li, "Li").$$render($$result, { liClass: "dark:text-white italic" }, {}, {
              default: () => {
                return `<strong>${escape(example.spanish)}</strong><br>
        <i>${escape(example.english)}</i> 
      `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}`;
});
const VerbList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { verbs } = $$props;
  let { selectVerb } = $$props;
  if ($$props.verbs === void 0 && $$bindings.verbs && verbs !== void 0)
    $$bindings.verbs(verbs);
  if ($$props.selectVerb === void 0 && $$bindings.selectVerb && selectVerb !== void 0)
    $$bindings.selectVerb(selectVerb);
  return `${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1" }, {}, {
    default: () => {
      return `${each(verbs, (verb, index) => {
        return `${validate_component(Li, "Li").$$render($$result, { liClass: "dark:text-white" }, {}, {
          default: () => {
            return `<a${add_attribute("tabindex", index, 0)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">${escape(verb)}</a>              
    `;
          }
        })}`;
      })}`;
    }
  })}`;
});
const VerbPageLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { regularVerbs } = $$props;
  let { irregularVerbs } = $$props;
  let { currentVerb } = $$props;
  let { heading } = $$props;
  let { selectVerb = () => {
  } } = $$props;
  if ($$props.regularVerbs === void 0 && $$bindings.regularVerbs && regularVerbs !== void 0)
    $$bindings.regularVerbs(regularVerbs);
  if ($$props.irregularVerbs === void 0 && $$bindings.irregularVerbs && irregularVerbs !== void 0)
    $$bindings.irregularVerbs(irregularVerbs);
  if ($$props.currentVerb === void 0 && $$bindings.currentVerb && currentVerb !== void 0)
    $$bindings.currentVerb(currentVerb);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.selectVerb === void 0 && $$bindings.selectVerb && selectVerb !== void 0)
    $$bindings.selectVerb(selectVerb);
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
          return `${escape(heading)}`;
        }
      }
    )}      
      <div class="px-10 grid md:grid-cols-6 gap-4"><div class="col-span-3">${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Regular" }, {}, {
          default: () => {
            return `${validate_component(VerbList, "VerbList").$$render(
              $$result,
              {
                selectVerb,
                ",": true,
                verbs: regularVerbs
              },
              {},
              {}
            )}`;
          }
        })}
              ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Irregular" }, {}, {
          default: () => {
            return `${validate_component(VerbList, "VerbList").$$render(
              $$result,
              {
                selectVerb,
                ",": true,
                verbs: irregularVerbs
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    })}</div>
        <div class="col-span-3"><div class="mb-5">${validate_component(VerbDetailCard, "VerbDetailCard").$$render(
      $$result,
      { currentVerb },
      {
        currentVerb: ($$value) => {
          currentVerb = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  
          <div>${validate_component(VerbExampleCard, "VerbExampleCard").$$render(
      $$result,
      { currentVerb },
      {
        currentVerb: ($$value) => {
          currentVerb = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  VerbPageLayout as V
};
