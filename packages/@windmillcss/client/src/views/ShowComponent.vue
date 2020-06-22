<template>
  <PreviewLibraryItem :code="metadata.content" />
</template>

<script>
import PreviewLibraryItem from "@/components/PreviewLibraryItem";

export default {
  computed: {
    metadata() {
      return this.$store.getters.getComponent(this.$route.params.fileName);
    }
  },
  components: { PreviewLibraryItem }
};
</script>
