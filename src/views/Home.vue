<template>
  <v-container fluid>
      <v-layout column>
        <v-flex xs12>
          <v-layout row>

            <enfase class="item"></enfase>
            <criterio class="item"></criterio>
            <formato class="item"></formato>
            <ferramenta class="item"></ferramenta>

          </v-layout>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import Enfase from '../components/Enfase.vue';
import Criterio from '../components/Criterio.vue';
import Formato from '../components/Formato.vue';
import Ferramenta from '../components/Ferramenta.vue';

export default {
  components: {
    'enfase': Enfase,
    'criterio': Criterio,
    'formato': Formato,
    'ferramenta': Ferramenta
  }
};
</script>

<style>
.item {
  margin: 10px;
}

.layout.column {
  margin-left: 50px;
}
</style>