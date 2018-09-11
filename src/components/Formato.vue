<template>

  <v-flex 
    xs12 
    sm6
    lg2>

    <v-toolbar 
      color="formato" 
      dark>

      <v-toolbar-title>Formatos</v-toolbar-title>

    </v-toolbar>
    <v-list two-line>
      <div 
        v-for="(formato, index) in formatos" 
        :key="formato.id">

        <v-list-tile 
          :disabled="criterio===undefined"
          ripple
          @click="app_selectFormato(index)">

          <v-list-tile-content>
            <v-list-tile-title v-text="formato.nome"/>
          </v-list-tile-content>
          <v-list-tile-avatar v-if="formato===selected"><v-icon>checked</v-icon></v-list-tile-avatar>
        </v-list-tile>
        <v-divider v-if="index < formatos.length-1"/>
      </div>
    </v-list>
          
  </v-flex>
    
</template>

<script>
import EventBus from "../plugins/event-bus";

export default {
  name: "Formato",
  data() {
    return {
      enfase: undefined,
      criterio: undefined,
      formatos: [
        { id: 1, nome: "Digital" },
        { id: 2, nome: "Multimidiástico" }
      ],
      selected: undefined
    };
  },
  mounted() {
    var _self = this;
    EventBus.$on("EnfaseSelected", function(payload) {
      _self.enfase = payload;
        _self.criterio = undefined;
        _self.selected = undefined;
    });
    EventBus.$on("CriterioSelected", function(payload) {
      _self.criterio = payload;
        _self.selected = undefined;
    });
  },
  unmounted() {
    EventBus.$off("EnfaseSelected");
    EventBus.$off("CriterioSelected");
  },
  methods: {
    app_selectFormato(index) {
      this.selected = this.formatos[index];
      EventBus.$emit("FormatoSelected", this.selected.id);
    }
  }
};
</script>
