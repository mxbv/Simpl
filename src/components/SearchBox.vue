<script setup>
import { defineEmits, ref, watch } from "vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
const emit = defineEmits(["update:searchQuery"]);
const searchInput = ref("");

watch(searchInput, (newQuery) => {
  emit("update:searchQuery", newQuery);
});
</script>

<template>
  <div class="search">
    <SearchIcon />
    <input
      v-model="searchInput"
      type="text"
      placeholder="Search"
      class="search-input"
    />
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 13px;
  border-radius: 13px;
  margin-right: 10px;
  background-color: var(--item);
}
.search-input {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  margin-left: 10px;
  color: var(--text);
}
svg {
  color: var(--text);
}
.search:hover {
  background-color: var(--item-hover);
}
</style>
