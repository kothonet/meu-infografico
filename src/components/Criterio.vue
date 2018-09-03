<template>

    <v-flex xs2>

      <v-toolbar color="criterio" dark>
        <v-toolbar-title>Critérios</v-toolbar-title>
      </v-toolbar>
      <v-list two-line>
        <div v-for="(criterio, index) in criterios" :key="criterio.id">
          <v-list-tile @click="selectCriterio(index)" :disabled="enfase===undefined" ripple>
            <v-list-tile-content>
              <v-list-tile-title v-text="criterio.nome"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar v-if="criterio===selected"><v-icon>checked</v-icon></v-list-tile-avatar>
          </v-list-tile>
          <v-divider v-if="index < criterios.length-1"></v-divider>
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
      enfase: undefined,
      criterios: [
        { id: 1, nome: "Qtd. de Modelos" },
        { id: 2, nome: "Impacto Visual" },
        { id: 3, nome: "Facilidade de Uso" },
        { id: 4, nome: "Gratuidade" }
      ],
      selected: undefined
    };
  },
  methods: {
    selectCriterio(index) {
      this.selected = this.criterios[index];
      EventBus.$emit("CriterioSelected", this.selected.id);
    },
    selectEnfase(id) {
      this.enfase = id;
    }
  },
  mounted() {
    var _self = this;
    EventBus.$on("EnfaseSelected", function(payload) {
      _self.enfase = payload;
      _self.selected = undefined;
    })
  },
  unmounted() {
    EventBus.$off("EnfaseSelected");
  }
};
</script>
