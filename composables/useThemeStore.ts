export function useThemeStore () {
  return themeStore;
}

const themeStore = reactive({
  darkTheme: <null | boolean>null,
  setTheme () {
    this.darkTheme = !this.darkTheme;
    localStorage.setItem(`darkThemeActive`, JSON.stringify(this.darkTheme));
    this.applyTheme();
  },
  initialiseTheme () {
    const previousSetting = localStorage.getItem(`darkThemeActive`);
    if (previousSetting) {
      this.darkTheme = JSON.parse(previousSetting);
      this.applyTheme();
    } else {
      this.darkTheme = window?.matchMedia(
        `(prefers-color-scheme: dark)`
      ).matches;
    }
  },
  applyTheme () {
    const classList = document.documentElement.classList;
    classList.remove(...document.documentElement.classList);
    classList.add(this.darkTheme ? `darkTheme` : `lightTheme`);
  }
});
