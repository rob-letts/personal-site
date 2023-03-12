import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.a995b711.mjs';
import 'html-escaper';
import { createClient } from '@supabase/supabase-js';
/* empty css                           */
const $$Astro$f = createAstro();
const $$SiteNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SiteNav;
  const astroPages = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/about.astro": () => Promise.resolve().then(() => _page2),"../pages/index.astro": () => Promise.resolve().then(() => _page0),"../pages/resources.astro": () => Promise.resolve().then(() => _page1),"../pages/uses.astro": () => Promise.resolve().then(() => _page3)}), () => "../pages/*.astro");
  function getName(filePath, sequenceToRemove) {
    return filePath.split("/").at(-1)?.replace(sequenceToRemove, "");
  }
  const navItems = [
    "/",
    ...astroPages.map((page) => getName(page.file, ".astro")).filter((item) => item !== "index")
  ];
  return renderTemplate`${maybeRenderHead($$result)}<nav>
  <ul>
    ${navItems.map((item) => renderTemplate`<li>
        <a${addAttribute(item, "href")}>${item}</a>
      </li>`)}
  </ul>
</nav>`;
}, "/Users/rob/Dev/roblettsdev/src/components/SiteNav.astro");

const $$Astro$e = createAstro();
const $$SunIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SunIcon;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"${addAttribute(id, "id")}>
  <title>A sun icon</title>
  <path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z"></path>
  <path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z"></path>
  <path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z"></path>
  <path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z"></path>
  <path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z"></path>
  <path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z"></path>
  <path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z"></path>
  <path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z"></path>
  <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"></path>
</svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/SunIcon.astro");

const $$Astro$d = createAstro();
const $$MoonIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$MoonIcon;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"${addAttribute(id, "id")}>
  <title>A moon icon</title>
  <path d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z"></path>
</svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/MoonIcon.astro");

const $$Astro$c = createAstro();
const $$ThemeButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ThemeButton;
  return renderTemplate`

${maybeRenderHead($$result)}<button id="theme-btn">
  ${renderComponent($$result, "MoonIcon", $$MoonIcon, { "id": "moon-icon" })}
  ${renderComponent($$result, "SunIcon", $$SunIcon, { "id": "sun-icon" })}
</button>`;
}, "/Users/rob/Dev/roblettsdev/src/components/ThemeButton.astro");

const $$Astro$b = createAstro();
const $$SiteLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SiteLayout;
  return renderTemplate`<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Contact page for Rob Letts, a Front-End Web Developer.">
  <meta name="generator"${addAttribute(Astro2.generator, "content")}>
  <title>Rob Letts Dev</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕</text></svg>">
${renderHead($$result)}</head>

<body>
  <header>
    ${renderComponent($$result, "SiteNav", $$SiteNav, {})}
    ${renderComponent($$result, "ThemeButton", $$ThemeButton, {})}
  </header>

  <main>
    ${renderSlot($$result, $$slots["default"])}
  </main>
</body></html>`;
}, "/Users/rob/Dev/roblettsdev/src/layouts/SiteLayout.astro");

const $$Astro$a = createAstro();
const $$BandcampIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BandcampIcon;
  return renderTemplate`${maybeRenderHead($$result)}<svg role="img" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 682.66669 682.66669" version="1.1"> <title>Access Rob Letts' bandcamp profile to assess the quality of his music taste</title> <defs id="defs6"> <clipPath id="clipPath20" clipPathUnits="userSpaceOnUse"> <path style="clip-rule:evenodd" id="path18" d="M 2560,0 C 3973.85,0 5120,1146.15 5120,2560 5120,3973.85 3973.85,5120 2560,5120 1146.15,5120 0,3973.85 0,2560 0,1146.15 1146.15,0 2560,0 Z"></path> </clipPath> <clipPath id="clipPath26" clipPathUnits="userSpaceOnUse"> <path id="path24" d="M 0,0 H 5120 V 5120 H 0 Z"></path> </clipPath> <clipPath id="clipPath36" clipPathUnits="userSpaceOnUse"> <path style="clip-rule:evenodd" id="path34" d="M 3057.78,1754.95 H 1189.97 l 872.23,1610.1 h 1867.83 l -872.25,-1610.1"></path> </clipPath> <clipPath id="clipPath42" clipPathUnits="userSpaceOnUse"> <path id="path40" d="M 0,0 H 5120 V 5120 H 0 Z"></path> </clipPath> </defs> <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)" id="g10"> <g transform="scale(0.1)" id="g12"> <g id="g14"> <g clip-path="url(#clipPath20)" id="g16"> <g clip-path="url(#clipPath26)" id="g22"> <path id="bandcamp-logo-fg" id="path28" style="fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 H 5170 V 5170 H 0 Z"></path> </g> </g> </g> <g id="g30"> <g clip-path="url(#clipPath36)" id="g32"> <g clip-path="url(#clipPath42)" id="g38"> <path id="bandcamp-logo-bg" id="path44" style="fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 1139.97,1704.95 h 2840.06 v 1710.1 H 1139.97 Z"></path> </g> </g> </g> </g> </g> </svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/BandcampIcon.astro");

const $$Astro$9 = createAstro();
const $$GitHubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GitHubIcon;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px"> <title>The GitHub brand logo</title> <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path> </svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/GitHubIcon.astro");

const $$Astro$8 = createAstro();
const $$LinkedinIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LinkedinIcon;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px"> <title>The LinkedIn brand logo</title> <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path> </svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/LinkedinIcon.astro");

const $$Astro$7 = createAstro();
const $$LetterboxdIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LetterboxdIcon;
  return renderTemplate`${maybeRenderHead($$result)}<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" height="50px"> <title>The letterboxd website logo</title> <defs> <path id="path-1" d="M0 0h129.847v141.443H0z"></path> <path id="path-3" d="M0 0h129.847v141.443H0z"></path> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <circle id="Circle" class="letterboxd-icon-bg" cx="250" cy="250" r="250"></circle> <g id="Dots" transform="translate(61 180)"> <ellipse id="Green" class="letterboxd-icon-fg" cx="189" cy="70" rx="70.0786517" ry="70"></ellipse> <g id="Blue" transform="translate(248.153)"> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"></use> </mask> <ellipse class="letterboxd-icon-fg" mask="url(#mask-2)" cx="59.7686766" cy="70" rx="70.0786517" ry="70"></ellipse> </g> <g id="Orange"> <mask id="mask-4" fill="white"> <use xlink:href="#path-3"></use> </mask> <ellipse class="letterboxd-icon-fg" mask="url(#mask-4)" cx="70.0786517" cy="70" rx="70.0786517" ry="70"></ellipse> </g> <path d="M129.54 107.063C122.81 96.315 118.92 83.611 118.92 70s3.89-26.315 10.618-37.063c6.73 10.748 10.618 23.452 10.618 37.063s-3.889 26.315-10.618 37.063ZM248.46 32.937C255.19 43.685 259.08 56.389 259.08 70s-3.89 26.315-10.618 37.063C241.73 96.315 237.843 83.611 237.843 70s3.889-26.315 10.618-37.063Z" id="Overlap" class="letterboxd-icon-bg"></path> </g> </g> </svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/LetterboxdIcon.astro");

const $$Astro$6 = createAstro();
const $$DocumentIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DocumentIcon;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px"> <title>A paper document icon</title> <path d="M464 64H192c-8.8 0-16 7.7-16 16.5V112H74c-23.1 0-42 18.9-42 42v207.5c0 47.6 39 86.5 86 86.5h279.7c45.1 0 82.3-36.9 82.3-82V80c0-8.8-7.2-16-16-16zm-288 80v192h-42V163.2c0-6.8-.8-13.3-3.3-19.2H176zm-17 255.4C148 410 133.2 416 118.5 416c-14.5 0-28.1-5.7-38.5-16-10.3-10.3-16-24-16-38.5V163.2c0-10.6 8.4-19.2 19-19.2s19 8.6 19 19.2V352c0 8.8 7.2 16 16 16h57.5c-1.5 11.6-7.2 22.6-16.5 31.4zM448 366c0 13.3-5.4 25.8-14.9 35.3-9.5 9.5-22.2 14.7-35.4 14.7H187.3c12.8-14.9 20.7-33.9 20.7-54.5V97h240v269z"></path> <path d="M248 136h160v56H248zM248 224h160v32H248zM248 288h160v32H248zM408 352H248s0 32-8 32h148.7c19.3 0 19.3-21 19.3-32z"></path> </svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/DocumentIcon.astro");

const $$Astro$5 = createAstro();
const $$CodepenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CodepenIcon;
  return renderTemplate`${maybeRenderHead($$result)}<svg role="img" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 100 100"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>`;
}, "/Users/rob/Dev/roblettsdev/src/components/icons/CodepenIcon.astro");

const $$Astro$4 = createAstro();
const $$SiteLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SiteLinks;
  const links = [
    { href: `https://github.com/rob-letts`, icon: $$GitHubIcon },
    { href: `https://www.\xE5linkedin.com/in/robertletts/`, icon: $$LinkedinIcon },
    { href: `/RobLettsCV.pdf`, icon: $$DocumentIcon },
    { href: `https://letterboxd.com/robletts/films/diary/`, icon: $$LetterboxdIcon },
    { href: `https://bandcamp.com/robletts`, icon: $$BandcampIcon },
    { href: `https://codepen.io/rob-letts`, icon: $$CodepenIcon }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<aside>
  <ul class="icon-list">
    ${links.map((link) => renderTemplate`<li>
          <a${addAttribute(link.href, "href")} target="_blank">
            ${renderComponent($$result, "link.icon", link.icon, {})}
          </a>
        </li>`)}
  </ul>
</aside>`;
}, "/Users/rob/Dev/roblettsdev/src/components/SiteLinks.astro");

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>
    hi there
    <img class="emoji" src="/wave-logo.png" alt="a waving hand emoji">
  </h1><p>
    i'm
    <a class="name" href="https://github.com/rob-letts">Rob Letts</a>
    - a front-end web developer based in South London.
  </p>${renderComponent($$result2, "SiteLinks", $$SiteLinks, {})}` })}`;
}, "/Users/rob/Dev/roblettsdev/src/pages/index.astro");

const $$file$3 = "/Users/rob/Dev/roblettsdev/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Resources = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Resources;
  const supabase = createClient("https://lakswfkkrrjbbqkmqoxd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxha3N3ZmtrcnJqYmJxa21xb3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1Mzk4NzAsImV4cCI6MTk5NDExNTg3MH0.g8eo-PHslW3dFNeIi23_wWEUkG3p4JhuTWCZkJaVpTQ");
  const { data } = await supabase.from("resources").select("*");
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<p>Ongoing collection of resources that I like, use, or consume.</p><ul>
    ${data?.map((item) => renderTemplate`<h2>${item.link}</h2><h2>${item.title}</h2><ul>${item.category}</ul>`)}
  </ul>` })}`;
}, "/Users/rob/Dev/roblettsdev/src/pages/resources.astro");

const $$file$2 = "/Users/rob/Dev/roblettsdev/src/pages/resources.astro";
const $$url$2 = "/resources";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  const supabase = createClient("https://lakswfkkrrjbbqkmqoxd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxha3N3ZmtrcnJqYmJxa21xb3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1Mzk4NzAsImV4cCI6MTk5NDExNTg3MH0.g8eo-PHslW3dFNeIi23_wWEUkG3p4JhuTWCZkJaVpTQ");
  const { data } = await supabase.from("skills").select("*");
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section>
    <h2>Present</h2>
    <ul>
      <li>I like CSS a lot.</li>
      <li>I work with an awesome team at <a href="https://www.tixtrack.com/" target="_blank">TixTrack</a>. We use Vue.js.</li>
      <li>I care deeply about A11y, UX, and Front End Architecture.</li>
    </ul>

    <h2>Past</h2>
    <ul>
      <li>I played bass in noisy metal band called <a href="https://disciplesofwren.bandcamp.com/album/groundswells-2" target="_blank">Wren</a>.</li>
      <li>I helped run a very loud music venue called <a href="https://www.corsicastudios.com/" target="_blank">Corsica Studios</a>.</li>
    </ul>
  </section>${data?.map((item) => renderTemplate`<h2>${item.category}</h2><ul>${item.title}</ul>`)}` })}`;
}, "/Users/rob/Dev/roblettsdev/src/pages/about.astro");

const $$file$1 = "/Users/rob/Dev/roblettsdev/src/pages/about.astro";
const $$url$1 = "/about";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Uses = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Uses;
  const supabase = createClient("https://lakswfkkrrjbbqkmqoxd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxha3N3ZmtrcnJqYmJxa21xb3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1Mzk4NzAsImV4cCI6MTk5NDExNTg3MH0.g8eo-PHslW3dFNeIi23_wWEUkG3p4JhuTWCZkJaVpTQ");
  const { data } = await supabase.from("uses").select("*");
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {}, { "default": ($$result2) => renderTemplate`${data?.map((item) => renderTemplate`${maybeRenderHead($$result2)}<h2>${item.category}</h2><ul>${item.name}</ul>`)}` })}`;
}, "/Users/rob/Dev/roblettsdev/src/pages/uses.astro");

const $$file = "/Users/rob/Dev/roblettsdev/src/pages/uses.astro";
const $$url = "/uses";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Uses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
