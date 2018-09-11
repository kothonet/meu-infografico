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

  </v-layout>
</template>

<script>
import Enfase from "../components/Enfase.vue";
import Criterio from "../components/Criterio.vue";
import Formato from "../components/Formato.vue";
import Ferramenta from "../components/Ferramenta.vue";

export default {
  components: {
    enfase: Enfase,
    criterio: Criterio,
    formato: Formato,
    ferramenta: Ferramenta
  }
};
</script>

<style>
.layout.column {
  margin-left: 50px;
}
</style>