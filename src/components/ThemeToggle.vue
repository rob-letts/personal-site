<script setup lang="ts">
import { ref } from "vue";
import { MoonSVG, SunSVG } from "../svg";

const lightTheme = ref(false);
function clickHandler() {
	lightTheme.value = !lightTheme.value;
}
</script>

<template>
	<button @click="clickHandler">
		<SunSVG v-if="lightTheme" />
		<MoonSVG v-else class="" />
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
