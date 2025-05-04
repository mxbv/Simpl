<script setup>
import { inject } from "vue";
import NavbarIcon from "@/assets/icons/editor/NavbarIcon.vue";
import DeleteIcon from "@/assets/icons/editor/DeleteIcon.vue";
const isSidebarOpen = inject("isSidebarOpen");
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>
<template>
  <section class="editor-block">
    <nav class="editor-nav">
      <button @click="toggleSidebar" class="control-item sidebar-toggle" title="Sidebar">
        <NavbarIcon :class="{ rotated: !isSidebarOpen }" />
      </button>
      <button class="control-item" title="Delete note">
        <DeleteIcon />
      </button>
    </nav>
    <input type="text" class="editor-input title" placeholder="Title" />
    <textarea name="text" id="" class="editor-input text" placeholder="Your new story"></textarea>
  </section>
</template>

<style scoped>
.editor-block {
  display: inline-flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
  background-color: #1d1d1d;
  .editor-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    .control-item {
      width: fit-content;
    }
  }
  .editor-input {
    display: flex;
    width: 100%;
    padding: 10px 20px;
    background: none;
    border: none;
    color: var(--text-dark);
    resize: none;
  }
  .title {
    font-size: 2rem;
  }
  .text {
    flex: 1;
    font-size: 1.3rem;
  }
  svg {
    transition: all 0.3s ease;
  }
  .rotated {
    transform: rotate(180deg);
  }
}
</style>
