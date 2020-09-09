<template>
  <div id="app">
    <TheHeader />
    <router-view />
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
}
a {
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
</style>
