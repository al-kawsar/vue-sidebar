<script setup>

import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <div class="app">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media screen and (max-width: 768px) {
      padding-left: 6rem;
    }
  }



}
</style>
