<template>
  <button
    type="button"
    @click="$emit('click', $event)"
    :class="{'bg-indigo-100 text-indigo-700': isActive, 'text-gray-500 hover:text-indigo-600 focus:text-indigo-600': isActive}"
    class="inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-500 hover:text-indigo-600 focus:text-indigo-600"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ["isActive"]
};
</script>
