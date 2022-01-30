<script setup lang="ts">
import { ref } from 'vue';
import Link from './Link.vue';

let preContent = ref(true);
function toggleContent() {
	preContent.value = !preContent.value;
}
</script>

<template>
	<main>
		<nav>
			<button @click="toggleContent">
				<span v-if="preContent">◀️</span>
				<span v-else>➡️</span>
			</button>
		</nav>
		<h2>{{ preContent ? 'before 2020' : 'since 2020' }}</h2>

		<ul>
			<template v-if="preContent">
				<li>
					ran a music venue called
					<Link href="https://www.youtube.com/watch?v=cwPCiHk081k"
						>Corsica Studios</Link
					>
					for 8 years.
				</li>
				<li>
					made noisy metal music in
					<Link
						href="https://disciplesofwren.bandcamp.com/album/groundswells"
						>Wren</Link
					>
					for 6 years.
				</li>
				<li>got a BA in sound design and didn't use it. 👎</li>
			</template>
			<template v-else>
				<li>
					somehow got a distinction grade <strong>MSc</strong> in
					Computer Science. 🤯
				</li>
				<li>
					started working at
					<Link href="https://www.redsnapper.net/">Red Snapper</Link>,
					primarily making static sites for the British Medical
					Journal.
				</li>
				<li>
					became deeply fascinated with the
					<strong>Vue.js</strong> ecosystem, the world of
					<strong>CSS</strong>, and front-end architecture.
				</li>
			</template>
		</ul>
	</main>
</template>

<style scoped>

main {
	margin-bottom: 5rem;
}

h2 {
	font-size: 1.2em;
	margin-bottom: 0.5rem;
}

nav,
section {
	margin-bottom: 1.5rem;
}

button {
	padding: 0.25rem 1rem;
}

strong {
	font-weight: 700;
}

li {
	margin-bottom: 1rem;
	list-style-type: square;
	list-style-position: inside;
}
</style>
