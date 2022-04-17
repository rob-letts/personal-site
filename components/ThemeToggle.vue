<script setup lang="ts">
const darkThemeActive = ref<null | boolean>(null);
onMounted(() => {
	const previousSetting = localStorage.getItem("darkThemeActive");

	if (previousSetting) {
		darkThemeActive.value = JSON.parse(previousSetting);
		document.documentElement.classList.add(
			darkThemeActive.value ? "darkTheme" : "lightTheme"
		);
	} else {
		darkThemeActive.value = window?.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
	}
});

function toggleTheme() {
	darkThemeActive.value = !darkThemeActive.value;
}

function saveThemePreference() {
	toggleTheme();
	localStorage.setItem(
		"darkThemeActive",
		JSON.stringify(darkThemeActive.value)
	);
	document.documentElement.classList.remove(
		...document.documentElement.classList
	);
	document.documentElement.classList.add(
		darkThemeActive.value ? "darkTheme" : "lightTheme"
	);
}
</script>

<template>
	<button @click="saveThemePreference" class="theme-btn">
		<SVGMoon v-if="darkThemeActive" />
		<SVGSun v-else />
	</button>
</template>
