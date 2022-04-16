<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MoonSVG, SunSVG } from "../svg";

const darkThemeActive = ref<null | boolean>(null);
onMounted(() => {
	darkThemeActive.value = window?.matchMedia('(prefers-color-scheme: dark)').matches;
})

function toggleTheme() {
	darkThemeActive.value = !darkThemeActive.value;
	document.documentElement.classList.remove(darkThemeActive.value ? "lightTheme" : "darkTheme");
	document.documentElement.classList.add(darkThemeActive.value ? "darkTheme" : "lightTheme");
}
</script>

<template>
	<button @click="toggleTheme">
		<MoonSVG v-if="darkThemeActive" />
		<SunSVG v-else />
	</button>
</template>

<style scoped lang="scss">
button {
	width: 2rem;
	position: fixed;
	top: 1rem;
	right: 1rem;
	fill: var(--textColor);
}
</style>
