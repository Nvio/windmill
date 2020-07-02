<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-10/12 border-2 rounded-lg border-dashed">
      <PreviewLibraryItem :code="metadata.content" />
    </div>
  </div>
</template>

<script>
import PreviewLibraryItem from "@/components/PreviewLibraryItem";

export default {
  sockets: {
    change() {
      location.reload();
    }
  },
  computed: {
    metadata() {
      return this.$store.getters.getComponent(this.$route.params.fileName);
    }
  },
  components: { PreviewLibraryItem }
};
</script>
