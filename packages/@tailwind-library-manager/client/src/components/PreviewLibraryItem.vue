<template>
  <div class="relative">
    <iframe
      ref="preview"
      @load="updateHeight"
      :srcdoc="html"
      class="w-full h-auto"
      :style="{ height }"
    />
    <ResizeHandle />
  </div>
</template>

<script>
import ResizeHandle from "@/components/ResizeHandle";

export default {
  props: ["code"],
  data: () => ({
    height: "150px"
  }),
  computed: {
    html() {
      return `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body>
            ${this.code}
          </body>
        </html>
      `;
    }
  },
  methods: {
    updateHeight() {
      this.height =
        this.$refs.preview.contentWindow.document.body.scrollHeight + "px";
    }
  },
  components: { ResizeHandle }
};
</script>
