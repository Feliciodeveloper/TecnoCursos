<template>
  <div class="wrap">
    <div class="curso">
      <div class="cabecalho">
        <h1>{{api.nome}}</h1>
        <p>{{api.descricao}}</p>
        <small>{{api.totalAulas}} Aulas | {{api.horas}} horas</small>
      </div>
      <div v-for="item in api.aulas" :key="item.id">
        <h4>
          <router-link :to="{name: 'Aula', params: {aula: item.id}}">{{item.nome}}</router-link>
        </h4>
      </div>
      <router-link to="/cursos">Voltar</router-link>
    </div>
    <div class="aulas">
      <router-view />
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData],
  props: ["curso"],
  created() {
    this.fetchData(`curso/${this.curso}`);
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
}
.curso {
  max-width: 40%;
}
.cabecalho {
  margin-bottom: 30px;
}
.cabecalho h1 {
  margin-bottom: 15px;
}
a {
  display: inline-block;
  border: 1px solid #2b8;
  margin-bottom: 10px;
  padding: 15px 20px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.2);
}
a:hover {
  background: #2b8;
  color: #fff;
}
a.router-link-exact-active {
  background: #2b8;
  color: #fff;
}
.aulas {
  max-width: 60%;
  padding-left: 40px;
}
</style>