import {
  DOM_SELECTORS, LOCAL_STORAGE_THEME_KEY, LIGHT_THEME_KEY, DARK_THEME_KEY, ICON_THEME_INVERSION
} from '@/scripts/constants.js';

// Query DOM and setup theme variable

/** @type {HTMLButtonElement} */
const themeBtn = document.querySelector(DOM_SELECTORS.themeBtn);

/** @type {SVGElement} */
const lightThemeIcon = document.querySelector(DOM_SELECTORS.lightThemeIcon);

/** @type {SVGElement} */
const darkThemeIcon = document.querySelector(DOM_SELECTORS.darkThemeIcon);

/** @type {boolean | null} */
let darkThemeIsActive = null;

// Setup Event Listeners and Mutation Observers

document.addEventListener(`DOMContentLoaded`, () => loadPreviousTheme());
themeBtn?.addEventListener(`click`, () => toggleTheme());
invertIconsOnThemeChange();

// Core functions for this module

/** @returns {void} */
function invertIconsOnThemeChange () {
  new MutationObserver(mutationList => {
    const target = /** @type {HTMLButtonElement} */ (mutationList.at(0).target);
    const targetHasDarkTheme = target.classList.contains(DARK_THEME_KEY);

    document.querySelectorAll(DOM_SELECTORS.emojiIcons).forEach(item => {
      targetHasDarkTheme
        ? item.classList.remove(ICON_THEME_INVERSION)
        : item.classList.add(ICON_THEME_INVERSION);
    });
  }).observe(document.documentElement, { attributes: true });
}

/** @returns {void} */
function loadPreviousTheme () {
  const previousSetting = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  if (previousSetting) {
    darkThemeIsActive = JSON.parse(previousSetting);
    setTheme(darkThemeIsActive);
  } else {
    darkThemeIsActive = window?.matchMedia(`(prefers-color-scheme: dark)`).matches;
  }

  setIconTheme(darkThemeIsActive);
}

/** @returns {void} */
function toggleTheme () {
  darkThemeIsActive = !darkThemeIsActive;
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(darkThemeIsActive));
  setTheme(darkThemeIsActive);
  setIconTheme(darkThemeIsActive);
}

// Helpers

/** @param {boolean} darkThemeIsActive */
function setTheme (darkThemeIsActive) {
  document.documentElement.setAttribute(`class`,
    darkThemeIsActive ? DARK_THEME_KEY : LIGHT_THEME_KEY
  );
}

/** @param {boolean} darkThemeIsActive */
function setIconTheme (darkThemeIsActive) {
  darkThemeIcon.style.display = darkThemeIsActive ? `block` : `none`;
  lightThemeIcon.style.display = darkThemeIsActive ? `none` : `block`;
}