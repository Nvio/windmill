<template>
  <div class="border rounded-md">
    <div class="flex justify-between px-6 py-4 border-b">
      <div>
        <span class="text-xl">{{ name }}</span>
      </div>

      <div class="flex items-center">
        <ToggleButton @click="mode = 'preview'" :isActive="mode === 'preview'"
          >Preview</ToggleButton
        >
        <ToggleButton @click="mode = 'code'" :isActive="mode === 'code'"
          >Code</ToggleButton
        >
        <div class="border-r h-5 mx-4" />
        <WhiteButton @click="copy">{{
          hasRecentlyCopied ? "Copied!" : "Copy"
        }}</WhiteButton>
      </div>
    </div>

    <PreviewLibrabryItem v-if="mode === 'preview'" :code="code" />
    <Code v-if="mode === 'code'">{{ code }}</Code>
  </div>
</template>

<script>
import ToggleButton from "@/components/ToggleButton";
import PreviewLibrabryItem from "@/components/PreviewLibraryItem";
import WhiteButton from "@/components/WhiteButton";
import Code from "@/components/Code";

export default {
  props: ["name", "code"],

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

  components: { ToggleButton, PreviewLibrabryItem, WhiteButton, Code }
};
</script>
