<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">TECNO</router-link>
      </div>
      <div class="menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="cursos">Cursos</router-link></li>
          <li><router-link to="contato">Contato</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader.vue",
};
</script>

<style>
header {
  background: #234;
}
nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
ul li {
  display: inline-block;
}
li a {
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
}
.logo a {
  color: #fff;
  letter-spacing: 0.3rem;
}
.menu a.router-link-exact-active {
  color: #4b8;
}
.menu a {
  color: #fff;
}
.menu a:hover {
  background: #000;
}
</style>
