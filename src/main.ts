const THEME_KEYS = {
  localStorage: `darkThemeActive` ,
  light: `light-theme`,
  dark: `dark-theme`,
  invertedIcon: `invert`
}

const DOM_SELECTORS = {
  themeBtn: `.theme-btn`,
  emojiIcons: `.emoji`,
  lightThemeIcon: `#light-theme-icon`,
  darkThemeIcon: `#dark-theme-icon`
}

// Query DOM and setup theme variable
const themeBtn = document.querySelector(DOM_SELECTORS.themeBtn) as HTMLButtonElement;
const lightThemeIcon = document.querySelector(DOM_SELECTORS.lightThemeIcon) as SVGElement;
const darkThemeIcon = document.querySelector(DOM_SELECTORS.darkThemeIcon) as SVGElement;
let darkThemeIsActive: boolean = true;

// Setup Event Listeners and Mutation Observers
document.addEventListener(`DOMContentLoaded`, () => loadPreviousTheme());
themeBtn?.addEventListener(`click`, () => toggleTheme());
invertIconsOnThemeChange();

// Core functions 
function invertIconsOnThemeChange (): void {
  new MutationObserver(mutationList => {
    const target = (mutationList.at(0)?.target) as HTMLButtonElement;
    const targetHasDarkTheme = target.classList.contains(THEME_KEYS.dark);

    document.querySelectorAll(DOM_SELECTORS.emojiIcons).forEach(item => {
      targetHasDarkTheme
        ? item.classList.remove(THEME_KEYS.invertedIcon)
        : item.classList.add(THEME_KEYS.invertedIcon);
    });
  }).observe(document.documentElement, { attributes: true });
}

function loadPreviousTheme (): void {
  const previousSetting = localStorage.getItem(THEME_KEYS.localStorage);

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
  localStorage.setItem(THEME_KEYS.localStorage, JSON.stringify(darkThemeIsActive));
  setTheme(darkThemeIsActive);
  setIconTheme(darkThemeIsActive);
}

// Helpers
function setTheme (darkThemeIsActive: boolean) {
  document.documentElement.setAttribute(`class`,
    darkThemeIsActive ? THEME_KEYS.dark : THEME_KEYS.light
  );
}

function setIconTheme (darkThemeIsActive: boolean) {
  if (darkThemeIcon && lightThemeIcon) {
    darkThemeIcon.style.display = darkThemeIsActive ? `block` : `none`;
    lightThemeIcon.style.display = darkThemeIsActive ? `none` : `block`;
  }
}
