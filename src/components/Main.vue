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
			<button @click="toggleContent" :disabled="preContent">
				before 2020
			</button>
			<button @click="toggleContent" :disabled="!preContent">
				since 2020
			</button>
		</nav>
		<template v-if="preContent">
			<ul>
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

				<li>
					got a BA in sound design and barely used it.
					<span
						><img
							class="emoji"
							id="thumbs-down"
							src="/logo-thumbs-down.png"
							alt="a thumbs down emoji"
					/></span>
				</li>
			</ul>
		</template>
		<template v-else>
			<ul>
				<li>
					somehow got a distinction grade <strong>MSc</strong> in
					Computer Science.
					<img
						class="emoji"
						src="logo-explode.png"
						alt="an person's exploding head emoji"
					/>
				</li>
				<li>
					started as a junior front end dev at
					<Link href="https://www.redsnapper.net/">Red Snapper</Link>,
					implementing designs primarily for the British Medical
					Journal.
				</li>
				<li>
					became deeply fascinated with the
					<strong>Vue.js</strong> and <strong>CSS</strong> ecosystems.
				</li>
			</ul>
		</template>
	</main>
</template>

<style scoped>
main {
	margin-bottom: 5rem;
	text-align: center;
}

h2 {
	font-size: 1.2em;
	margin-bottom: 0.5rem;
}

nav {
	display: flex;
	gap: 1rem;
	margin-bottom: 1.5rem;
	justify-content: center;
}

strong {
	font-weight: 700;
	color: var(--primaryColor);
}

li {
	margin-bottom: 1rem;
	list-style-type: '+';
	list-style-position: inside;
}

button {
	padding: 0.25rem 1rem;
	background: transparent;
	width: clamp(150px, 200px, 25%);
	color: var(--textColor);
	border: 1px solid var(--textColor);
	cursor: pointer;
	border-radius: 7px;
	transition: background 0.25s ease-out;
	position: relative;
	overflow: hidden;
}

#thumbs-down {
	vertical-align: bottom;
	margin-left: 0.5rem;
}

button:disabled {
	color: var(--backgroundColor);
	background: var(--textColor);
}

button:not(:disabled):hover {
	transform: scale(1.025);
}

button:before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: var(--brandGradient);
	transform: translateY(-100%);
	top: 0;
	left: 0;
	border-radius: 7px;
	z-index: -1;
	transition: all 0.2s ease-in;
}

button:not(:disabled):hover:before {
	transform: translateY(0%);
}

button:not(:disabled):active {
	transform: scale(1.05);
}
</style>
