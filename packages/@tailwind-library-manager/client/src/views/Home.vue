<template>
  <div v-if="libraryItems" class="py-4">
    <LibraryItem v-for="(item, key) in libraryItems" :key="key" :code="item" class="mb-16" />
  </div>
</template>

<script>
import axios from "axios";
import LibraryItem from "@/components/LibraryItem";

export default {
  data: () => ({
    libraryItems: null
  }),
  mounted() {
    axios.get("/api").then(({ data }) => {
      this.libraryItems = data;
    });
  },
  components: { LibraryItem }
};
</script>
