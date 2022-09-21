<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SunIcon from "./icons/SunIcon.vue";
import MoonIcon from "./icons/MoonIcon.vue";

const darkThemeActive = ref(false);

onMounted(() => {
  const previousSetting = localStorage.getItem(`dark-theme`);

  if (previousSetting) {
    darkThemeActive.value = JSON.parse(previousSetting);
    setTheme();
  } else {
    darkThemeActive.value = window?.matchMedia(`(prefers-color-scheme: dark)`).matches;
  }
});

function toggleTheme () {
  darkThemeActive.value = !darkThemeActive.value;
  localStorage.setItem(`dark-theme`, JSON.stringify(darkThemeActive.value));
  setTheme();
}

function setTheme () {
  document.documentElement.setAttribute( `class`, darkThemeActive.value ? `dark-theme` : `light-theme` );
}
</script>

<template>
  <button @click="toggleTheme">
    <MoonIcon v-if="darkThemeActive" />
    <SunIcon v-else />
  </button>
</template>

<style scoped lang="postcss">
button {
	width: 2rem;
	position: fixed;
	top: 1rem;
	right: 1rem;
	fill: var(--textColor);
}
</style>