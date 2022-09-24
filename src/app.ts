// CLIPBOARD LOGIC
const CONTACT_EMAIL = `roblettsdev@gmail.com`;
const toast = document.querySelector(`.toast`) as HTMLButtonElement;

document.querySelector(`#contact-btn`)?.addEventListener(`click`, () => {
  copyTextToClipboard(CONTACT_EMAIL);

  if (toast && !toast.classList.contains(`pop-toast`)) {
    toast.classList.add(`pop-toast`);
    setTimeout(() => toast.classList.remove(`pop-toast`), 1500);
  }
});

function copyTextToClipboard (text: string) {
  navigator.clipboard.writeText(text);
}

// COLOR THEME LOGIC
let darkTheme: boolean | null = null;
const themeBtn = document.querySelector(`.theme-btn`) as HTMLButtonElement;
const lightThemeIcon = document.querySelector(`#light-theme-icon`) as SVGElement;
const darkThemeIcon = document.querySelector(`#dark-theme-icon`) as SVGElement;

document.addEventListener(`DOMContentLoaded`, () => loadPreviousTheme());
themeBtn?.addEventListener(`click`, () => toggleTheme());

function loadPreviousTheme () {
  const previousSetting = localStorage.getItem(`darkThemeActive`);

  if (previousSetting) {
    darkTheme = JSON.parse(previousSetting);
    document.documentElement.setAttribute(`class`, darkTheme ? `dark-theme` : `light-theme`);
  } else {
    darkTheme = window?.matchMedia(`(prefers-color-scheme: dark)`).matches;
  }

  setTheme();
}

function toggleTheme () {
  darkTheme = !darkTheme;
  localStorage.setItem(`darkThemeActive`, JSON.stringify(darkTheme));
  document.documentElement.setAttribute(`class`, darkTheme ? `dark-theme` : `light-theme`);
  setTheme();
}

function setTheme () {
  darkThemeIcon.style.display = darkTheme ? `block` : `none`;
  lightThemeIcon.style.display = darkTheme ? `none` : `block`;
}

new MutationObserver(mutationList => {
  const target = mutationList.at(0)?.target as HTMLHtmlElement;
  const isDarkTheme = target.classList.contains(`dark-theme`);

  document.querySelectorAll(`.emoji`).forEach(item => {
    isDarkTheme ? item.classList.remove(`invert`) : item.classList.add(`invert`);
  });
}).observe(document.documentElement, { attributes: true });