<template>
  <Layout>
    <template v-if="metadata">
      <div
        v-for="component in metadata.components"
        :key="component.name"
        class="py-4 z-0"
      >
        <LibraryItem :name="component.name" :code="component.code" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import { LibraryItem } from "@windmillcss/shared";
import axios from "axios";
import path from "path";

export default {
  mounted() {
    const version = "master";
    const url = `https://raw.githubusercontent.com/${this.fullName}/${version}`;
    const index = "src/index.json";

    axios
      .get(`${url}/${index}`)
      .then(({ data: { components, ...metadata } }) => {
        this.metadata = {
          ...metadata,
          components: [],
        };

        components.forEach((component) => {
          const [dir] = index.split("/");
          const filePath = path.join(dir, component.path);

          axios.get(`${url}/${filePath}`).then(({ data }) => {
            this.metadata.components.push({ ...component, code: data });
          });
        });
      });
  },

  data: () => ({
    metadata: null,
  }),

  computed: {
    fullName() {
      return `${this.$route.params.owner}/${this.$route.params.name}`;
    },
  },

  components: { Layout, LibraryItem },
};
</script>
