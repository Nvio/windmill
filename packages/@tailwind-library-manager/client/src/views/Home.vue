<template>
  <div v-if="libraryItems">
    <prism v-for="(item, key) in libraryItems" :key="key">{{ item }}</prism>
  </div>
</template>

<script>
import axios from "axios";
import Prism from "vue-prism-component";

export default {
  data: () => ({
    libraryItems: null
  }),
  mounted() {
    axios.get("/api").then(({ data }) => {
      this.libraryItems = data;
    });
  },
  components: { Prism }
};
</script>
