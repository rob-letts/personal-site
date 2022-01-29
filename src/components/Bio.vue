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
			<span v-if="preContent">&lt;-</span>
			<span v-else>-></span>
		</button>
	</nav>

	<section>
		<h2 v-if="preContent">before 2020</h2>
		<h2 v-else>from 2020</h2>
		<ul>
			<li v-if="preContent">
				ran a music venue called
				<Link href="https://www.youtube.com/watch?v=cwPCiHk081k"
					>Corsica Studios</Link
				>
				for 8 years.
			</li>
			<li v-else>
				somehow got a distinction grade MSc in Computer Science
			</li>

			<li v-if="preContent">
				made noisy metal music in
				<Link
					href="https://disciplesofwren.bandcamp.com/album/groundswells"
					>Wren</Link
				>
				for 6 years.
			</li>
			<li v-else>
				started working at
				<Link href="https://www.redsnapper.net/">Red Snapper</Link>
				in Richmond, primarily making static sites for the British
				Medical Journal
			</li>
			<li v-if="preContent">got a BA degree in sound design</li>
			<li v-else>
				became deeply fascinated with the vue ecosystem, the world of
				CSS, and front-end architecture
			</li>
		</ul>
	</section>
</template>
