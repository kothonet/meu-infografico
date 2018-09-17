<template>

  <v-flex 
    xs12 
    sm6
    lg2>

    <v-toolbar 
      color="criterio" 
      dark>

      <v-toolbar-title>Critérios</v-toolbar-title>

    </v-toolbar>
    <v-list two-line>
      <div 
        v-for="(for_criterio, index) in criterios" 
        :key="for_criterio.id">

        <v-list-tile 
          :disabled="enfase===undefined" 
          ripple
          @click="app_selectCriterio(index)"
          @mouseover.prevent.stop="app_mouseOverCriterio(index)"
          @mouseleave.prevent.stop="app_mouseLeaveCriterio()">

          <v-list-tile-content>
            <v-list-tile-title v-text="for_criterio.nome"/>
          </v-list-tile-content>
          <v-list-tile-avatar v-if="criterio !== undefined && for_criterio.id===criterio.id"><v-icon>checked</v-icon></v-list-tile-avatar>

        </v-list-tile>
        <v-divider v-if="index < criterios.length-1"/>

      </div>
    </v-list>
          
  </v-flex>
  
</template>

<script>
import EventBus from "../plugins/event-bus";

export default {
  name: "Criterio",
  data() {
    return {
      criterios: [
        { id: 1, nome: "Qtd. de modelos", descricao: "infográficos já elaborados e compartilhados online, que servem como referência e podem ser manipulados" },
        { id: 2, nome: "Impacto visual", descricao: "noções básicas de design, como disposição dos elementos e apelo estético" },
        { id: 3, nome: "Facilidade de uso", descricao: "processo de produção simplificado e ágil, como a disposição dos elementos e ferramentas úteis para o usuário" },
        { id: 4, nome: "Gratuidade", descricao: "" }
      ]
    };
  },
  computed: {
      enfase() {
        return this.$store.state.enfase;
      },
      criterio() {
        return this.$store.state.criterio;
      }
  },
  methods: {
    app_selectCriterio(index) {
      this.$store.commit('SET_CRITERIO', this.criterios[index])
    },
    app_mouseOverCriterio(index) {
      EventBus.$emit("CriterioMouseOver", this.criterios[index].descricao);
    },
    app_mouseLeaveCriterio() {
      EventBus.$emit("CriterioMouseLeave");
    }
  }
};
</script>
