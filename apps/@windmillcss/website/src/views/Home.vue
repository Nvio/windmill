<template>
  <Layout />
</template>

<script>
import Layout from "@/components/Layout";
import db from "@/db.js";

export default {
  data: () => ({
    packages: []
  }),

  firestore: {
    packages: db.collection("packages")
  },

  components: { Layout }
};
</script>
