<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
	<div>
		<ThemeToggle />
		<SiteHeader />
		<SiteFooter />
	</div>
</template>

<style>
@import "./global.css";
</style>
