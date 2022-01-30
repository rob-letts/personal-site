<script setup lang="ts">
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style>
@import './assets/global.css';

#app {
  display: grid;
  height: 100%;
  grid-template-rows: minmax(140px, 15%) auto 2em;
}
</style>
