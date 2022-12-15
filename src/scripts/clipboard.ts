import {
  DOM_SELECTORS, CONTACT_EMAIL, TOAST_SELECTOR, TOAST_ACTIVE_CLASS, TOAST_TIMEOUT
} from '@/scripts/constants';

const toast = document.querySelector(TOAST_SELECTOR) as HTMLOutputElement;

document.querySelector(DOM_SELECTORS.contactBtn)?.addEventListener(`click`, () => {
  copyTextToClipboard(CONTACT_EMAIL);

  if (toast && !toast.classList.contains(TOAST_ACTIVE_CLASS)) {
    toast.classList.add(TOAST_ACTIVE_CLASS);
    setTimeout(() => toast.classList.remove(TOAST_ACTIVE_CLASS), TOAST_TIMEOUT);
  }
});

function copyTextToClipboard (text: string) {
  navigator.clipboard.writeText(text);
}