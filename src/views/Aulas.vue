<template>
  <div>
    <h2>{{api.nome}}</h2>
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${api.youtube}`"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  props: ["aula"],
  mixins: [fetchData],
  created() {
    this.fetchData(`aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`aula/${to.params.aula}`);
    next();
  },
};
</script>

<style>
h2 {
  margin-bottom: 30px;
}
</style>