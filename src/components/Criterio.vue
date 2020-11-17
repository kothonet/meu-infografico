<template>

  <v-flex 
    xs12 
    sm6
    lg2>

    <v-tooltip 
      right 
      color="white">
      <template v-slot:activator="{ on }">
        <v-toolbar 
          :class="$store.getters.enfase===undefined ? 'disabled' : ''"
          color="criterio" 
          dark
          v-on="on">
          <v-toolbar-title>Escolha 2</v-toolbar-title>
        </v-toolbar>
      </template>
      <v-card 
        max-width="400"
        class="mx-auto"> 
        <v-card-title class="headline">CRITÉRIO</v-card-title>
        <v-card-text class="title">Sua preferência para facilitar a elaboração do infográfico</v-card-text>
        <v-card-text>(escolher só um)</v-card-text>
      </v-card>
    </v-tooltip>
    <v-list two-line>
      <div 
        v-for="(criterio, index) in criterios" 
        :key="criterio.id">

        <v-tooltip 
          right 
          color="white">
          <template v-slot:activator="{ on }">
            <v-list-tile 
              :disabled="$store.getters.enfase===undefined || $store.getters.criterio!==undefined" 
              ripple
              @click="app_selectCriterio(index)"
              v-on="on">
              <v-list-tile-content>
                <v-list-tile-title v-text="criterio.nome"/>
              </v-list-tile-content>
              <v-list-tile-avatar v-if="$store.getters.criterio !== undefined && criterio.id===$store.getters.criterio.id"><v-icon>checked</v-icon></v-list-tile-avatar>
            </v-list-tile>
          </template>
          <v-card 
            v-if="criterio.descricao !== ''"
            max-width="400" 
            class="mx-auto">
            <v-card-text 
              class="headline" 
              v-text="criterio.descricao"/>
          </v-card>
        </v-tooltip>
        
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
        { id: 1, nome: "Qtd. de modelos", descricao: "Infográficos já elaborados e compartilhados online, que servem como referência e podem ser manipulados" },
        { id: 2, nome: "Impacto visual", descricao: "Noções básicas de design, como disposição dos elementos e apelo estético" },
        { id: 3, nome: "Facilidade de uso", descricao: "Processo de produção simplificado e ágil, como a disposição dos elementos e ferramentas úteis para o usuário" },
        { id: 4, nome: "Gratuidade", descricao: "" }
      ]
    };
  },
  methods: {
    app_selectCriterio(index) {
      this.$store.dispatch('set_criterio', this.criterios[index])
    },
    app_mouseOverCriterio(index) {
      EventBus.$emit("CriterioMouseOver", this.criterios[index]);
    },
    app_mouseLeaveCriterio() {
      EventBus.$emit("CriterioMouseLeave");
    }
  }
};
</script>
