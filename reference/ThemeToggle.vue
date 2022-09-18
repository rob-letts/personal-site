<script setup lang="ts">
import { useThemeStore } from "../public/useThemeStore";
const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initialiseTheme();
});
</script>

<template>
  <button @click="themeStore.setTheme">
    <SVGMoon v-if="themeStore.darkTheme" />
    <SVGSun v-else />
  </button>
</template>

<style scoped>
button {
	width: 2rem;
	position: fixed;
	top: 1rem;
	right: 1rem;
	fill: var(--textColor);
}
</style>
