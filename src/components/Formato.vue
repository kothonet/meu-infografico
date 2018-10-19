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
          :disabled="$store.getters.criterio===undefined || $store.getters.formato!==undefined"
          ripple
          @click="app_selectFormato(index)"
          @mouseover.prevent.stop="app_mouseOverFormato(index)"
          @mouseleave.prevent.stop="app_mouseLeaveFormato()">

          <v-list-tile-content>
            <v-list-tile-title v-text="formato.nome"/>
          </v-list-tile-content>
          <v-list-tile-avatar v-if="$store.getters.formato !== undefined && formato.id===$store.getters.formato.id"><v-icon>checked</v-icon></v-list-tile-avatar>
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
      formatos: [
        { id: 1, nome: "Digital", descricao: "material estático produzido através de ferramentas online, para impressão ou utilização em mídias digitais" },
        { id: 2, nome: "Multimidiático", descricao: "permite a interação com o usuário, a exploração de hipertextos, a sonoridade, realidade aumentada" }
      ]
    };
  },
  methods: {
    app_selectFormato(index) {
      this.$store.dispatch('set_formato', this.formatos[index]);
    },
    app_mouseOverFormato(index) {
      EventBus.$emit("FormatoMouseOver", this.formatos[index].descricao);
    },
    app_mouseLeaveFormato() {
      EventBus.$emit("FormatoMouseLeave");
    }
  }
};
</script>
