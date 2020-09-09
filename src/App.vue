<template>
  <div id="app">
    <TheHeader />
    <router-view class="conteiner" />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #234;
  box-sizing: border-box;
}
a {
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
.conteiner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
