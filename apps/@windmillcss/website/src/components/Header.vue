<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 w-full">
      <div
        class="flex flex-col md:flex-row md:justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10"
      >
        <a href="#" class="font-mono">Windmill.css</a>

        <div class="flex-1">
          <SearchInput />
        </div>

        <div class="hidden md:block flex items-center justify-end space-x-8">
          <a
            href="#"
            class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >Sign in</a>

          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >Sign up</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";

export default {
  components: { SearchInput }
};
</script>
