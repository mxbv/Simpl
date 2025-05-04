<script setup>
import { inject } from "vue";
const isSidebarOpen = inject("isSidebarOpen");
import SettingsIcon from "../assets/icons/sidebar/SettingsIcon.vue";
import FolderIcon from "../assets/icons/sidebar/FolderIcon.vue";
import AddIcon from "../assets/icons/sidebar/AddIcon.vue";
</script>
<template>
  <Transition name="sidebar">
    <aside v-if="isSidebarOpen">
      <div class="control-block">
        <input class="control-item" type="text" placeholder="Search notes..." />
        <button class="control-item add" title="Add note"><AddIcon class="icon" />Add note</button>
      </div>
      <div class="note-list">
        <div class="note-list-item">
          <span>New note</span>
          <span class="date">01.02.25</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
        <div class="note-list-item">
          <span>New note</span>
        </div>
      </div>
      <div class="control-block bottom">
        <button class="control-item settings" title="Settings"><SettingsIcon class="icon" /></button>
        <button class="control-item" title="Choose folder"><FolderIcon class="icon" /></button>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
aside {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 280px;
  height: 100%;
  padding: 10px;
  z-index: 1000;
  /* background-color: #1d1d1d; */
  background-color: var(--bg-dark);
  transition: all 0.3s ease;
  .control-block {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    input {
      line-height: 1;
      background-color: var(--item-dark) !important;
      height: fit-content;
      padding: 10px;
    }
    input:hover {
      background-color: var(--item-hover-dark) !important;
    }
    .add {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #000000;
      margin-top: 10px;
      svg {
        margin-right: 5px;
      }
    }
    .add:hover {
      background-color: #101010;
    }
  }
  .bottom {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .control-item {
      display: flex;
      width: 50%;
    }
    .settings {
      margin-right: 10px;
    }
  }
  .note-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex: 1;
    margin: 10px 0px;
    overflow: auto;

    .note-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      width: 100%;
      border-radius: 10px;
      user-select: none;
      .date {
        color: #626262;
        font-weight: 300;
      }
    }
    .note-list-item:hover {
      background-color: var(--item-hover-dark);
    }
  }
}
.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease;
}
</style>
