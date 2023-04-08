export function getTheme(): string | undefined {
  return document.cookie
    .split(" ")
    .find((item) => item.startsWith("theme"))
    ?.split("=")
    .at(-1);
}

export function saveTheme(shouldSetDarkTheme: boolean) {
  document.cookie = `theme=${
    shouldSetDarkTheme ? "dark-mode" : "light-mode"
  }; SameSite=None; Secure`;
}

export function updateTheme(shouldSetDarkTheme: boolean) {
  document.documentElement.setAttribute(
    "class",
    shouldSetDarkTheme ? "dark-mode" : "light-mode"
  );
}