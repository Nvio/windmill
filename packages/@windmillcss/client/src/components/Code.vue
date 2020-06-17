<template>
  <Prism language="html">
    <slot />
  </Prism>
</template>

<script>
import Prism from "vue-prism-component";

export default {
  components: { Prism }
};
</script>
