import { c as create_ssr_component, j as subscribe } from "./index2.js";
import { w as writable } from "./index.js";
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  let sendSkipWaitingMessage;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
    {
      await (sendSkipWaitingMessage == null ? void 0 : sendSkipWaitingMessage());
    }
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox } = await import("./workbox-window.prod.es5.js");
      wb = new Workbox("/sw.js", { scope: "/", type: "classic" });
      sendSkipWaitingMessage = async () => {
        await (wb == null ? void 0 : wb.messageSkipWaiting());
      };
      {
        {
          let onNeedRefreshCalled = false;
          const showSkipWaitingPrompt = () => {
            onNeedRefreshCalled = true;
            wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
              if (event.isUpdate)
                window.location.reload();
            });
            onNeedRefresh == null ? void 0 : onNeedRefresh();
          };
          wb.addEventListener("installed", (event) => {
            if (typeof event.isUpdate === "undefined") {
              if (typeof event.isExternal !== "undefined") {
                if (event.isExternal)
                  showSkipWaitingPrompt();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              } else {
                if (event.isExternal)
                  window.location.reload();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              }
            } else if (!event.isUpdate) {
              onOfflineReady == null ? void 0 : onOfflineReady();
            }
          });
          wb.addEventListener("waiting", showSkipWaitingPrompt);
          wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  const needRefresh = writable(false);
  const offlineReady = writable(false);
  const updateServiceWorker = registerSW({
    immediate,
    onOfflineReady() {
      offlineReady.set(true);
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onNeedRefresh() {
      needRefresh.set(true);
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onRegistered,
    onRegisteredSW,
    onRegisterError
  });
  return {
    needRefresh,
    offlineReady,
    updateServiceWorker
  };
}
const ReloadPrompt_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pwa-toast.svelte-16kqdmp.svelte-16kqdmp{position:fixed;right:0;bottom:0;margin:16px;padding:12px;border:1px solid #8885;border-radius:4px;z-index:2;text-align:left;box-shadow:3px 4px 5px 0 #8885;background-color:white}.pwa-toast.svelte-16kqdmp .message.svelte-16kqdmp{margin-bottom:8px}.pwa-toast.svelte-16kqdmp button.svelte-16kqdmp{border:1px solid #8885;outline:none;margin-right:5px;border-radius:2px;padding:3px 10px}",
  map: null
};
const ReloadPrompt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toast;
  let $needRefresh, $$unsubscribe_needRefresh;
  let $offlineReady, $$unsubscribe_offlineReady;
  const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
    onRegistered(r) {
      console.log(`SW Registered: ${r}`);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    }
  });
  $$unsubscribe_needRefresh = subscribe(needRefresh, (value) => $needRefresh = value);
  $$unsubscribe_offlineReady = subscribe(offlineReady, (value) => $offlineReady = value);
  $$result.css.add(css);
  toast = $offlineReady || $needRefresh;
  $$unsubscribe_needRefresh();
  $$unsubscribe_offlineReady();
  return `${toast ? `<div class="pwa-toast svelte-16kqdmp" role="alert"><div class="message svelte-16kqdmp">${$offlineReady ? `<span>App ready to work offline
				</span>` : `<span>New content available, click on reload button to update.
				</span>`}</div>
		${$needRefresh ? `<button class="svelte-16kqdmp">Reload
			</button>` : ``}
		<button class="svelte-16kqdmp">Close
		</button></div>` : ``}`;
});
export {
  ReloadPrompt as default
};
