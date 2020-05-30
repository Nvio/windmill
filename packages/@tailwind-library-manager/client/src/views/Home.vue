<template>
  <div v-if="libraryItems">
    <LibraryItem v-for="(item, key) in libraryItems" :key="key" :code="item" />
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
