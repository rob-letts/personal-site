import {
  DOM_SELECTORS, LOCAL_STORAGE_THEME_KEY, LIGHT_THEME_KEY, DARK_THEME_KEY, ICON_THEME_INVERSION
} from '@/scripts/constants.js';

/** @type {boolean | null} */
let darkTheme = null;

/** @type {HTMLButtonElement} */
const themeBtn = document.querySelector(DOM_SELECTORS.themeBtn);

/** @type {SVGElement} */
const lightThemeIcon = document.querySelector(DOM_SELECTORS.lightThemeIcon);

/** @type {SVGElement} */
const darkThemeIcon = document.querySelector(DOM_SELECTORS.darkThemeIcon);

document.addEventListener(`DOMContentLoaded`, () => loadPreviousTheme());
themeBtn?.addEventListener(`click`, () => toggleTheme());
invertIconsOnThemeChange();

function loadPreviousTheme () {
  const previousSetting = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  if (previousSetting) {
    darkTheme = JSON.parse(previousSetting);
    document.documentElement.setAttribute(`class`,
      darkTheme
        ? DARK_THEME_KEY
        : LIGHT_THEME_KEY
    );
  } else {
    darkTheme = window?.matchMedia(`(prefers-color-scheme: dark)`).matches;
  }

  setTheme();
}

function toggleTheme () {
  darkTheme = !darkTheme;
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(darkTheme));
  document.documentElement.setAttribute(`class`,
    darkTheme ? DARK_THEME_KEY : LIGHT_THEME_KEY
  );
  setTheme();
}

function invertIconsOnThemeChange () {
  new MutationObserver(mutationList => {
    const target = /** @type {HTMLButtonElement} */ (mutationList.at(0).target);
    const isDarkTheme = target.classList.contains(DARK_THEME_KEY);

    document.querySelectorAll(DOM_SELECTORS.icons).forEach(item => {
      isDarkTheme
        ? item.classList.remove(ICON_THEME_INVERSION)
        : item.classList.add(ICON_THEME_INVERSION);
    });
  }).observe(document.documentElement, { attributes: true });
}

/* HELPERS */
function setTheme () {
  darkThemeIcon.style.display = darkTheme ? `block` : `none`;
  lightThemeIcon.style.display = darkTheme ? `none` : `block`;
}