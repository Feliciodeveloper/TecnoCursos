<template>
  <div>
    <div class="cabecalho">
      <h1>Contato</h1>
      <h4>{{api.descricao}}</h4>
    </div>
    <div v-if="api.contato" class="informacoes">
      <p>
        <span>Email:</span>
        {{api.contato.email}}
      </p>
      <p>
        <span>Telefone:</span>
        {{api.contato.telefone}}
      </p>
      <p>
        <span>Endereco:</span>
        {{api.contato.endereco}}
      </p>
    </div>
  </div>
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

<style scoped>
.cabecalho {
  margin-bottom: 30px;
}
.cabecalho h1 {
  margin-bottom: 20px;
}

span {
  font-weight: bold;
}
</style>
