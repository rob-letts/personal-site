<script setup lang="ts">
import Bio from './components/Bio.vue';
import Footer from './components/Footer.vue';
</script>

<template>
	<main>
		<h1>hi there 👋</h1>
		<p>
			i’m <span>rob letts</span> - a front end web developer based in
			south london. ☕️
		</p>
	</main>

	<Bio />
	<Footer />
</template>

<style>
@import './assets/reset.css';
@import './assets/global.css';
</style>
