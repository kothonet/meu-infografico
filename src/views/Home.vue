<template>
  <v-layout 
    row 
    xs12
    wrap
    class="mx-5">

    <enfase />
    <criterio />
    <formato />
    <ferramenta />
    <descricao />

  </v-layout>
</template>

<script>
import Enfase from "../components/Enfase.vue";
import Criterio from "../components/Criterio.vue";
import Formato from "../components/Formato.vue";
import Ferramenta from "../components/Ferramenta.vue";
import Descricao from "../components/Descricao.vue";

export default {
  components: {
    Enfase,
    Criterio,
    Formato,
    Ferramenta,
    Descricao
  }
};
</script>

<style>
.layout.column {
  margin-left: 50px;
}
</style>