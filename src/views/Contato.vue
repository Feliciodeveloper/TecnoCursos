<template>
  <div></div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "Contato",
  mixins: [fetchData],
  created() {
    this.fetchData("contato");
  },
};
</script>

<style></style>
