<script setup lang="ts">
defineProps<{
	href: string;
}>();
</script>
<template>
	<a :href="href" target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
</template>

<style>
a {
	color: coral;
	text-decoration: dashed;
	font-weight: 500;
}
</style>
