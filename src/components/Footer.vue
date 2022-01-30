<script setup lang="ts">
import Link from './Link.vue';
</script>

<template>
	<footer>
		<ul>
			<li>
				<Link href="https://github.com/robertletts">
					<img src="../../public/logo-github.svg" alt="github logo" />
				</Link>
			</li>
			<li>
				<Link href="https://www.linkedin.com/in/robertletts/">
					<img
						src="../../public/logo-linkedin.svg"
						alt="linkedin logo"
					/>
				</Link>
			</li>
			<li>
				<Link href="mailto:roblettsdev@gmail.com">
					<img src="../../public/logo-mail.svg" alt="mail logo" />
				</Link>
			</li>
			<li>
				<Link href="../../public/RobLettsCV.pdf" download>
					<img src="../../public/logo-cv.svg" alt="cv logo" />
				</Link>
			</li>
		</ul>
	</footer>
</template>

<style scoped>
ul {
	display: flex;
	justify-content: center;
	padding-bottom: 1.5rem;
	gap: 2rem;
}

@media only screen and (min-width: 400px) {
	ul {
		justify-content: flex-start;
	}
}

img {
	height: 2em;
	width: 2em;
	transition: transform 0.2s ease-out;
}

img:hover {
	transform: scale(1.2);
}
</style>
