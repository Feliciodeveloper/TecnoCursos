<template>
  <div>
    <h1>Cursos</h1>
    {{cursos}}
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "Cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("cursos");
  },
};
</script>

<style></style>
