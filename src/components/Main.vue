<script setup lang="ts">
import { ref } from 'vue';
import Link from './Link.vue';

let preContent = ref(true);
</script>

<template>
  <main>
    <nav>
      <button @click="preContent = true" :class="{ selected: !preContent }">
        before 2020...
      </button>
      <button @click="preContent = false" :class="{ selected: preContent }">
        since 2020
      </button>
    </nav>

    <ul>
      <template v-if="preContent">
        <li>
          ran a music venue called
          <Link href="https://www.youtube.com/watch?v=cwPCiHk081k">Corsica Studios</Link>
          for 8 years.
        </li>

        <li>
          made noisy metal music in
          <Link href="https://disciplesofwren.bandcamp.com/album/groundswells">Wren</Link>
          for 6 years.
        </li>
        <li>
          got a BA in sound design and didn't use it.
          <span id="thumb-down">👎</span>
        </li>
      </template>
      <template v-else>
        <li>
          somehow got a distinction grade <strong>MSc</strong> in Computer Science. 🤯
        </li>
        <li>
          started working at
          <Link href="https://www.redsnapper.net/">Red Snapper</Link>, primarily making
          static sites for the British Medical Journal.
        </li>
        <li>
          became deeply fascinated with the
          <strong>Vue.js</strong> and <strong>CSS</strong> ecosystems.
        </li>
      </template>
    </ul>
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

button {
  padding: 0.25rem 1rem;
  background: var(--textColor);
  border: 1px solid var(--textColor);
  border-radius: 7px;
  transition: background 0.25s ease-out;
}

strong {
  font-weight: 700;
  color: var(--secondaryColor);
}

li {
  margin-bottom: 1rem;
  list-style-type: square;
  list-style-position: inside;
}

#thumb-down {
  font-size: 0.8em;
}

.selected {
  color: var(--textColor);
  background: var(--backgroundColor);
}

button:hover {
  transform: scale(1.025);
}

@media only screen and (min-width: 400px) {
  nav {
    justify-content: flex-start;
  }

  main {
    text-align: left;
  }
}
</style>
