<script setup lang="ts">
import { ref } from 'vue';

let lightMode = ref(true);
function toggleLightMode() {
	lightMode.value = !lightMode.value;
}
</script>

<template>
	<header>
		<nav>
			<button @click="toggleLightMode">
				<span v-if="lightMode">Light</span>
				<span v-else>Dark</span>
			</button>
		</nav>
	</header>
</template>
