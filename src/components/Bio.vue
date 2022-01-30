<script setup lang="ts">
import { ref } from 'vue';
import Link from './Link.vue';

let preContent = ref(true);
function toggleContent() {
	preContent.value = !preContent.value;
}
</script>

<template>
	<nav>
		<button @click="toggleContent">
			<span v-if="preContent">before 2020</span>
			<span v-else>from 2020</span>
		</button>
	</nav>

	<section>
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
				<li>got a BA degree in sound design</li>
			</template>
			<template v-else>
				<li>somehow got a distinction grade MSc in Computer Science</li>
				<li>
					started working at
					<Link href="https://www.redsnapper.net/">Red Snapper</Link>
					in Richmond, primarily making static sites for the British
					Medical Journal
				</li>
				<li>
					became deeply fascinated with the vue ecosystem, the world
					of CSS, and front-end architecture
				</li>
			</template>
		</ul>
	</section>
</template>
