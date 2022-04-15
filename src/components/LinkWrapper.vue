<script setup lang="ts">
defineProps<{
	href: string;
}>();
</script>
<template>
	<a :href="href" target="_blank" rel="noopener noreferrer">
		<slot>{{ href }}</slot>
	</a>
</template>

<style>
a {
	color: var(--primaryColor);
	font-weight: 700;
}
</style>
