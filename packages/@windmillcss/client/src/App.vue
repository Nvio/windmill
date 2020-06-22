<template>
  <div id="app">
    <div v-if="metadata" class="w-screen h-screen flex">
      <div class="w-1/4 bg-gray-100 h-full border-r shadow-md">
        <div class="border-b py-2 text-center">
          <router-link to="/">
            <span class="font-light text-gray-600">{{ metadata.name }}</span>
          </router-link>
        </div>

        <ul v-if="metadata" class="py-6 px-8">
          <router-link
            v-for="(component, key) in metadata.components"
            :key="key"
            :to="component.fileName"
            v-slot="{href, navigate, isActive}"
          >
            <li
              class="text-gray-500 w-full rounded-md px-2 mb-2"
              :class="{'bg-blue-200 text-blue-600': isActive}"
            >
              <a :href="href" @click="navigate">
                <font-awesome-icon icon="file" class="mr-2" />
                <span>{{ component.name }}</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>

      <div class="w-3/4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  mounted() {
    axios.get("/api").then(({ data }) => {
      this.$store.dispatch("setMetadata", data);
    });
  },

  computed: mapState(["metadata"])
};
</script>
