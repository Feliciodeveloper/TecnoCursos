<template>
  <div class="wrap">
    <div class="cabecalho">
      <h1>{{api.titulo}}</h1>
      <h4>{{api.descricao}}</h4>
    </div>
    <div class="cursos">
      <div v-for="item in api.cursos" :key="item.id">
        <div class="informacao">
          <h3>
            {{item.nome}}
            <router-link :to="{name: 'Curso', params: {curso: item.id}}">Entrar</router-link>
          </h3>
          <p>{{item.totalAulas}} Aulas | {{item.horas}} Horas</p>
        </div>
        <p>{{item.descricao}}</p>
        <hr />
      </div>
    </div>
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

<style scoped>
.cabecalho {
  margin-bottom: 30px;
}
.cabecalho h1 {
  margin-bottom: 20px;
}
.informacao {
  margin: 25px 0 10px 0;
}
.informacao p {
  font-size: 0.75rem;
}
.cursos p {
  margin-bottom: 10px;
  max-width: 60%;
}
.informacao h3 {
  display: inline-block;
}
h3 a {
  font-size: 0.775rem;
  display: inline-block;
  border: solid 1px #2b8;
  padding: 5px 15px;
  border-radius: 2px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-left: 5px;
  font-weight: normal;
}
h3 a:hover {
  background: #2b8;
  color: #ffffff;
}
</style>
