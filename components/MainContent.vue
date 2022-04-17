<script setup lang="ts">
const CONTACT_EMAIL = "roblettsdev@gmail.com";
const showConfirmation = ref(false);

function clickHandler() {
	copyToClipboard(CONTACT_EMAIL);
	toggleConfirmation();
}

function toggleConfirmation() {
	showConfirmation.value = !showConfirmation.value;
}

function copyToClipboard(value: string) {
	navigator.clipboard.writeText(value);
}
</script>

<template>
	<main>
		<ul>
			<li>
				<LinkWrapper href="https://github.com/robertletts">
					<SVGGitHub />
				</LinkWrapper>
			</li>
			<li>
				<LinkWrapper href="https://www.linkedin.com/in/robertletts/">
					<SVGLinkedIn />
				</LinkWrapper>
			</li>
			<li>
				<button @click="clickHandler">
					<SVGMail />
				</button>
			</li>
			<li>
				<LinkWrapper href="/RobLettsCV.pdf" download>
					<SVGDocument />
				</LinkWrapper>
			</li>
			<li>
				<LinkWrapper
					href="https://letterboxd.com/robletts/films/diary/"
				>
					<SVGLetterboxd />
				</LinkWrapper>
			</li>
		</ul>
		<Transition name="toast" @enter="toggleConfirmation">
			<output v-show="showConfirmation" role="status" class="toast">
				<p>roblettsdev@gmail.com copied to clipboard 👍</p>
			</output>
		</Transition>
	</main>
</template>

<style scoped lang="scss">
ul {
	display: flex;
	padding-bottom: 3rem;
	gap: 2rem;
}

li {
	height: fit-content;
}

button {
	border: none;
	background-color: transparent;
	cursor: pointer;
	outline: none;
}

svg {
	fill: var(--textColor);
	height: 2em;
	width: 2em;
	transition: transform 0.2s ease-out;

	&:hover {
		transform: scale(1.2);
	}
}

footer {
	position: relative;
}

.toast {
	color: var(--light);
	position: fixed;
	bottom: 1rem;
	z-index: 1;
	border-radius: 3px;
	background: var(--secondaryColor);
	padding: 0.5rem 1.5rem;
	--delay: 1s;
	animation: show 0.3s ease, hide 0.3s ease var(--delay);
	animation-fill-mode: forwards;

	p {
		font-size: 10px;
	}
}

@keyframes show {
	from {
		opacity: 0;
		transform: translateY(2rem);
	}
}

@keyframes hide {
	to {
		opacity: 0;
	}
}
</style>
