<template>
  <div v-if="metadata" class="py-4">
    <LibraryItem
      v-for="(item, key) in libraryItems"
      :key="key"
      :name="item.name"
      :code="item.content"
      class="mb-16"
    />
  </div>
</template>

<script>
import axios from "axios";
import LibraryItem from "@/components/LibraryItem";

export default {
  data: () => ({
    metadata: null
  }),
  mounted() {
    axios.get("/api").then(({ data }) => {
      this.metadata = data;
    });
  },
  computed: {
    libraryItems() {
      return this.metadata.components;
    }
  },
  components: { LibraryItem }
};
</script>
