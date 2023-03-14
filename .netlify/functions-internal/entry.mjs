import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.a995b711.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3 } from './chunks/pages/all.26845c78.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
import '@supabase/supabase-js';
/* empty css                                 */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/resources.astro", _page1],["src/pages/about.astro", _page2],["src/pages/uses.astro", _page3],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/about.d728cf99.css"],"scripts":[{"type":"inline","value":"const l=document.querySelector(\"#theme-btn\"),s=document.querySelector(\"#sun-icon\"),r=document.querySelector(\"#moon-icon\");let e=!0;document.addEventListener(\"DOMContentLoaded\",u);l?.addEventListener(\"click\",h);d();function d(){new MutationObserver(t=>{const i=(t.at(0)?.target).classList.contains(\"light-theme\"),n=new Set,o=\"invert\";n.add(\".emoji\"),n.forEach(m=>{document.querySelectorAll(m).forEach(c=>{i?c.classList.add(o):c.classList.remove(o)})}),r&&s&&(r.style.display=e?\"block\":\"none\",s.style.display=e?\"none\":\"block\")}).observe(document.documentElement,{attributes:!0})}function u(){const t=localStorage.getItem(\"darkThemeIsActive\");t?(e=JSON.parse(t),a(e)):e=window?.matchMedia(\"(prefers-color-scheme: dark)\").matches}function h(){e=!e,localStorage.setItem(\"darkThemeIsActive\",JSON.stringify(e)),a(e)}function a(t){document.documentElement.setAttribute(\"class\",t?\"\":\"light-theme\")}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d728cf99.css"],"scripts":[{"type":"inline","value":"const l=document.querySelector(\"#theme-btn\"),s=document.querySelector(\"#sun-icon\"),r=document.querySelector(\"#moon-icon\");let e=!0;document.addEventListener(\"DOMContentLoaded\",u);l?.addEventListener(\"click\",h);d();function d(){new MutationObserver(t=>{const i=(t.at(0)?.target).classList.contains(\"light-theme\"),n=new Set,o=\"invert\";n.add(\".emoji\"),n.forEach(m=>{document.querySelectorAll(m).forEach(c=>{i?c.classList.add(o):c.classList.remove(o)})}),r&&s&&(r.style.display=e?\"block\":\"none\",s.style.display=e?\"none\":\"block\")}).observe(document.documentElement,{attributes:!0})}function u(){const t=localStorage.getItem(\"darkThemeIsActive\");t?(e=JSON.parse(t),a(e)):e=window?.matchMedia(\"(prefers-color-scheme: dark)\").matches}function h(){e=!e,localStorage.setItem(\"darkThemeIsActive\",JSON.stringify(e)),a(e)}function a(t){document.documentElement.setAttribute(\"class\",t?\"\":\"light-theme\")}\n"}],"routeData":{"route":"/resources","type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d728cf99.css"],"scripts":[{"type":"inline","value":"const l=document.querySelector(\"#theme-btn\"),s=document.querySelector(\"#sun-icon\"),r=document.querySelector(\"#moon-icon\");let e=!0;document.addEventListener(\"DOMContentLoaded\",u);l?.addEventListener(\"click\",h);d();function d(){new MutationObserver(t=>{const i=(t.at(0)?.target).classList.contains(\"light-theme\"),n=new Set,o=\"invert\";n.add(\".emoji\"),n.forEach(m=>{document.querySelectorAll(m).forEach(c=>{i?c.classList.add(o):c.classList.remove(o)})}),r&&s&&(r.style.display=e?\"block\":\"none\",s.style.display=e?\"none\":\"block\")}).observe(document.documentElement,{attributes:!0})}function u(){const t=localStorage.getItem(\"darkThemeIsActive\");t?(e=JSON.parse(t),a(e)):e=window?.matchMedia(\"(prefers-color-scheme: dark)\").matches}function h(){e=!e,localStorage.setItem(\"darkThemeIsActive\",JSON.stringify(e)),a(e)}function a(t){document.documentElement.setAttribute(\"class\",t?\"\":\"light-theme\")}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d728cf99.css"],"scripts":[{"type":"inline","value":"const l=document.querySelector(\"#theme-btn\"),s=document.querySelector(\"#sun-icon\"),r=document.querySelector(\"#moon-icon\");let e=!0;document.addEventListener(\"DOMContentLoaded\",u);l?.addEventListener(\"click\",h);d();function d(){new MutationObserver(t=>{const i=(t.at(0)?.target).classList.contains(\"light-theme\"),n=new Set,o=\"invert\";n.add(\".emoji\"),n.forEach(m=>{document.querySelectorAll(m).forEach(c=>{i?c.classList.add(o):c.classList.remove(o)})}),r&&s&&(r.style.display=e?\"block\":\"none\",s.style.display=e?\"none\":\"block\")}).observe(document.documentElement,{attributes:!0})}function u(){const t=localStorage.getItem(\"darkThemeIsActive\");t?(e=JSON.parse(t),a(e)):e=window?.matchMedia(\"(prefers-color-scheme: dark)\").matches}function h(){e=!e,localStorage.setItem(\"darkThemeIsActive\",JSON.stringify(e)),a(e)}function a(t){document.documentElement.setAttribute(\"class\",t?\"\":\"light-theme\")}\n"}],"routeData":{"route":"/uses","type":"page","pattern":"^\\/uses\\/?$","segments":[[{"content":"uses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/uses.astro","pathname":"/uses","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.aae43b7a.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/dm-mono-latin-ext-400-normal.e18063bb.woff2","/_astro/dm-mono-latin-400-normal.8b22f1d6.woff2","/_astro/dm-mono-all-400-normal.ef74a59f.woff","/_astro/about.d728cf99.css","/RobLettsCV.pdf","/coffee-logo.png","/wave-logo.png"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };