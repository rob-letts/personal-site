const CONTACT_EMAIL = `roblettsdev@gmail.com`;
const toast = document.querySelector(`.toast`) as HTMLOutputElement;

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

export {};