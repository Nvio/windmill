<template>
  <div class="relative pr-4">
    <iframe
      ref="preview"
      @load="updateHeight"
      :srcdoc="html"
      class="w-full h-auto"
      :style="{ width, height }"
    />

    <ResizeHandle @resize="resize" @end="endResize" :style="{right: `${-change}px`}" />
  </div>
</template>

<script>
import ResizeHandle from "@/components/ResizeHandle";

export default {
  props: ["code"],
  data: () => ({
    widthChange: 0,
    startingWidthChange: 0,
    height: "150px"
  }),
  computed: {
    width() {
      return `calc(100% + ${this.change}px)`;
    },
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
    },
    change() {
      const change = this.startingWidthChange + this.widthChange;
      return change <= 0 ? change : 0;
    }
  },
  methods: {
    updateHeight() {
      this.height =
        this.$refs.preview.contentWindow.document.body.scrollHeight + "px";
    },
    resize(change) {
      return (this.widthChange = change);
    },
    endResize() {
      this.startingWidthChange += this.widthChange;
      this.widthChange = 0;
    }
  },
  components: { ResizeHandle }
};
</script>
