<template>
  <div class="border-2">
    <div class="flex justify-between px-2">
      <div>
        <span>Test title</span>
      </div>

      <div>
        <Button @click="mode = 'preview'">Preview</Button>
        <Button @click="mode = 'code'">Code</Button>
        <span>|</span>
        <Button @click="copy">{{ hasRecentlyCopied ? 'Copied!' : 'Copy' }}</Button>
      </div>
    </div>

    <PreviewLibrabryItem v-if="mode === 'preview'" :code="code" />
    <Prism v-if="mode === 'code'" language="html">{{ code }}</Prism>
  </div>
</template>

<script>
import Prism from "vue-prism-component";
import Button from "@/components/Button";
import PreviewLibrabryItem from "@/components/PreviewLibraryItem";

export default {
  props: ["code"],

  data: () => ({
    mode: "preview",
    hasRecentlyCopied: false
  }),

  methods: {
    copy() {
      this.hasRecentlyCopied = true;
      this.$copyText(this.code);
      setTimeout(() => (this.hasRecentlyCopied = false), 1000);
    }
  },

  components: { Prism, Button, PreviewLibrabryItem }
};
</script>
