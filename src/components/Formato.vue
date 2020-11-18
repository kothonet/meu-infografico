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
          :class="$store.getters.criterio===undefined ? 'disabled' : ''"
          color="formato" 
          dark
          v-on="on">
          <v-toolbar-title>Escolha 3</v-toolbar-title>
        </v-toolbar>
      </template>
      <v-card 
        max-width="400"
        class="mx-auto"
        flat> 
        <v-card-text class="title">
          <div>FORMATO</div>
          <br>
          <div>Como você pretende utilizar o infográfico</div>
          <br>
          <div>(escolher só um)</div>
        </v-card-text>
      </v-card>
    </v-tooltip>
    <v-list two-line>
      <div 
        v-for="(formato, index) in formatos" 
        :key="formato.id">

        <v-tooltip 
          right 
          color="white">
          <template v-slot:activator="{ on }">
            <v-list-tile 
              :disabled="$store.getters.criterio===undefined || $store.getters.formato!==undefined"
              ripple
              @click="app_selectFormato(index)"
              v-on="on">
              <v-list-tile-content>
                <v-list-tile-title v-text="formato.nome"/>
              </v-list-tile-content>
              <v-list-tile-avatar v-if="$store.getters.formato !== undefined && formato.id===$store.getters.formato.id"><v-icon>checked</v-icon></v-list-tile-avatar>
            </v-list-tile>
          </template>
          <v-card 
            v-if="formato.descricao !== ''"
            max-width="400" 
            class="mx-auto"
            flat>
            <v-card-text 
              class="headline" 
              v-text="formato.descricao"/>
          </v-card>
        </v-tooltip>


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
        { id: 1, nome: "Digital", descricao: "Material estático produzido através de ferramentas online, para impressão ou utilização em mídias digitais" },
        { id: 2, nome: "Multimidiático", descricao: "Permite a interação com o usuário, a exploração de hipertextos, a sonoridade, realidade aumentada" }
      ]
    };
  },
  methods: {
    app_selectFormato(index) {
      this.$store.dispatch('set_formato', this.formatos[index]);
    },
    app_mouseOverFormato(index) {
      EventBus.$emit("FormatoMouseOver", this.formatos[index]);
    },
    app_mouseLeaveFormato() {
      EventBus.$emit("FormatoMouseLeave");
    }
  }
};
</script>
