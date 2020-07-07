<template>
  <Header />
</template>

<script>
import Header from "@/components/Header";
import db from "@/db.js";

export default {
  data: () => ({
    packages: [],
  }),

  firestore: {
    packages: db.collection("packages"),
  },

  components: { Header },
};
</script>
