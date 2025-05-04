<script setup>
import { ref, provide } from 'vue';
const isNavbarOpen = ref(true)
provide('isSidebarOpen', isNavbarOpen)
import NavItem from "./components/SidebarItem.vue";
import EditorItem from "./components/EditorItem.vue";
</script>
<template>
  <main>
    <NavItem />
    <EditorItem />
    <router-view />
  </main>
</template>

<style>
main {
  display: flex;
  width: 100%;
  height: 100dvh;
  min-height: 500px;
  overflow: hidden;
}
</style>
