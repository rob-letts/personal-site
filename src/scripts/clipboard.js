import { CONTACT_EMAIL, TOAST_SELECTOR, TOAST_ACTIVE_CLASS, TOAST_TIMEOUT } from '@/scripts/constants.js';

/** @type {HTMLOutputElement} */
const toast = document.querySelector(TOAST_SELECTOR);

document.querySelector(`#contact-btn`)?.addEventListener(`click`, () => {
  copyTextToClipboard(CONTACT_EMAIL);

  if (toast && !toast.classList.contains(TOAST_ACTIVE_CLASS)) {
    toast.classList.add(TOAST_ACTIVE_CLASS);
    setTimeout(() => toast.classList.remove(TOAST_ACTIVE_CLASS), TOAST_TIMEOUT);
  }
});

/** @param {string} text */
function copyTextToClipboard (text) {
  navigator.clipboard.writeText(text);
}