<template>
  <div>
    <Header />

    <div class="px-8 py-6">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: { Header }
};
</script>
