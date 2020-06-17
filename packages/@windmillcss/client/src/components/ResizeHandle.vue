<template>
  <div
    class="border-l bg-gray-100 absolute right-0 inset-y-0 flex items-center w-4 cursor-move"
    @mousedown="start"
  >
    <svg
      class="h-4 w-4 text-gray-600 pointer-events-none"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5h2v14H8zM14 5h2v14h-2z" />
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDragging: false,
    startX: null
  }),
  mounted() {
    window.addEventListener("mousemove", this.move);
    window.addEventListener("mouseup", this.end);
  },
  methods: {
    start(e) {
      this.isDragging = true;
      this.startX = e.clientX;
      this.$emit("start");
    },
    end() {
      if (!this.isDragging) return null;

      this.isDragging = false;
      this.startX = null;
      this.$emit("end");
    },
    move(e) {
      if (!this.isDragging) return null;
      this.$emit("resize", e.clientX - this.startX);
    }
  }
};
</script>
