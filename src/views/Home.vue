<template>
  <div class="wrap">
    <div class="conteudo">
      <h1>Sobre a {{api.titulo}}</h1>
      <h3>{{api.descricao}}</h3>
      <router-link to="cursos" class="btn">Cursos</router-link>
      <div class="avaliacoes">
        <h2>Avaliacões</h2>
        <ul>
          <li v-for="item in api.avaliacoes" :key="item.nome">
            <h5>{{item.nome}}</h5>
            <p>{{item.descricao}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="img">
      <img src="@/assets/aprender.png" alt="imagem demostrativa" />
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("home");
  },
};
</script>
<style scoped>
h1,
h3 {
  margin-top: 25px;
}
.wrap {
  display: flex;
  justify-content: space-between;
}
.conteudo {
  max-width: 350px;
}
.btn {
  cursor: pointer;
  border: solid 1px #2b8;
  text-align: center;
  padding: 15px 0;
  display: block;
  margin-top: 25px;
  border-radius: 5px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.2);
}
.avaliacoes {
  margin-top: 50px;
}
.avaliacoes ul li {
  margin: 25px 0;
  list-style-type: disc;
  text-align: justify;
}
.avaliacoes ul li h5 {
  font-size: 1rem;
  font-weight: normal;
  font-weight: 600;
}
.avaliacoes p {
  margin-top: 10px;
  font-size: 0.725rem;
}
.img {
  width: 500px;
}
.img img {
  max-width: 100%;
}
h2 {
  margin-bottom: 0;
  text-align: center;
}
</style>
