<script setup>
defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link :to="`/note/${note.id}`" class="note-item">
    <div class="note-head">
      <h3 class="note-title">
        {{ note.title || "Untitled" }}
      </h3>
      <div class="note-date">{{ note.date }}</div>
    </div>
    <h4 class="note-text" v-if="note.content">
      {{ note.content }}
    </h4>
  </router-link>
</template>

<style scoped>
.note-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 1.2rem;
  background: var(--content-block);
  border-radius: 1rem;
  text-decoration: none;
  overflow: hidden;
  border: solid 1px var(--border);
  color: var(--text);
}

.note-item:hover {
  border-color: var(--border-hover);
}
.note-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.note-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 400;
  width: 100%;
  height: fit-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.note-date {
  margin-left: 1rem;
  color: var(--accent);
}
.note-text {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #858585;
}

@media screen and (max-width: 768px) {
  .note-item {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 1.2rem;
  }
}
</style>
