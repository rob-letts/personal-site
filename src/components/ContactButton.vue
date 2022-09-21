<script setup lang="ts">
import { ref } from 'vue';

const CONTACT_EMAIL = `roblettsdev@gmail.com`;
const showToast = ref(false);

function copyTextToClipboard () {
  navigator.clipboard.writeText(CONTACT_EMAIL);
}

function toggleToast () {
  navigator.clipboard.writeText(CONTACT_EMAIL);
  showToast.value = true;
  setTimeout(() => showToast.value = false, 1500);
}

function clickHandler () {
  copyTextToClipboard();
  if (!showToast.value) {
    toggleToast();
  }
}
</script>

<template>
  <button @click="clickHandler">
    <slot />
  </button>

  <output
    :class="{pop: showToast}"
    role="status"
    class="toast display-none"
  >
    <p>roblettsdev@gmail.com copied to clipboard 👍</p>
  </output>
</template>

<style scoped lang="postcss">
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}

.toast {
  display: none;
	color: var(--lightColor);
	position: fixed;
	bottom: 1rem;
	z-index: 1;
	border-radius: 3px;
	background: var(--secondaryColor);
	padding: 0.5rem 1.5rem;

	& p {
		font-size: 10px;
	}
}

.pop {
  display: block;
  --delay: 1s;
	animation: show 0.5s ease, hide 0.3s ease var(--delay);
	animation-fill-mode: forwards;
}
</style>
