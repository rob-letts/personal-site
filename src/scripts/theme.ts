import {
  DOM_SELECTORS, LOCAL_STORAGE_THEME_KEY, LIGHT_THEME_KEY, DARK_THEME_KEY, ICON_THEME_INVERSION
} from '@/scripts/constants';

// Query DOM and setup theme variable
const themeBtn = document.querySelector(DOM_SELECTORS.themeBtn) as HTMLButtonElement;
const lightThemeIcon = document.querySelector(DOM_SELECTORS.lightThemeIcon) as SVGElement;
const darkThemeIcon = document.querySelector(DOM_SELECTORS.darkThemeIcon) as SVGElement;
let darkThemeIsActive: boolean = true;

// Setup Event Listeners and Mutation Observers
document.addEventListener(`DOMContentLoaded`, () => loadPreviousTheme());
themeBtn?.addEventListener(`click`, () => toggleTheme());
invertIconsOnThemeChange();

// Core functions for this module
function invertIconsOnThemeChange (): void {
  new MutationObserver(mutationList => {
    const target = (mutationList.at(0)?.target) as HTMLButtonElement;
    const targetHasDarkTheme = target.classList.contains(DARK_THEME_KEY);

    document.querySelectorAll(DOM_SELECTORS.emojiIcons).forEach(item => {
      targetHasDarkTheme
        ? item.classList.remove(ICON_THEME_INVERSION)
        : item.classList.add(ICON_THEME_INVERSION);
    });
  }).observe(document.documentElement, { attributes: true });
}

function loadPreviousTheme (): void {
  const previousSetting = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  if (previousSetting) {
    darkThemeIsActive = JSON.parse(previousSetting);
    setTheme(darkThemeIsActive);
  } else {
    darkThemeIsActive = window?.matchMedia(`(prefers-color-scheme: dark)`).matches;
  }

  setIconTheme(darkThemeIsActive);
}

function toggleTheme (): void {
  darkThemeIsActive = !darkThemeIsActive;
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(darkThemeIsActive));
  setTheme(darkThemeIsActive);
  setIconTheme(darkThemeIsActive);
}

// Helpers
function setTheme (darkThemeIsActive: boolean) {
  document.documentElement.setAttribute(`class`,
    darkThemeIsActive ? DARK_THEME_KEY : LIGHT_THEME_KEY
  );
}

function setIconTheme (darkThemeIsActive: boolean) {
  if (darkThemeIcon && lightThemeIcon) {
    darkThemeIcon.style.display = darkThemeIsActive ? `block` : `none`;
    lightThemeIcon.style.display = darkThemeIsActive ? `none` : `block`;
  }
}