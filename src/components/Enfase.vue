<template>

  <v-flex 
    xs12 
    sm6
    lg2>

    <v-toolbar 
      color="enfase" 
      dark>

      <v-toolbar-title>Ênfases</v-toolbar-title>

    </v-toolbar>
    <v-list two-line>
      <div 
        v-for="(enfase, index) in enfases" 
        :key="enfase.id">

        <v-list-tile 
          ripple
          @click="app_selectEnfase(index)">

          <v-list-tile-content>
            <v-list-tile-title v-text="enfase.nome"/>
          </v-list-tile-content>
          <v-list-tile-avatar v-if="enfase===selected"><v-icon>checked</v-icon></v-list-tile-avatar>
        </v-list-tile>
        <v-divider v-if="index < enfases.length-1"/>

      </div>
    </v-list>
          
  </v-flex>
    
</template>

<script>
import EventBus from "../plugins/event-bus";

export default {
  name: "Enfase",
  data() {
    return {
      enfases: [
        { id: 1, nome: "Conteúdo Textual" },
        { id: 2, nome: "Gráficos" },
        { id: 3, nome: "Mapas" },
        { id: 4, nome: "Ícones" },
        { id: 5, nome: "Fotos" },
        { id: 6, nome: "Vídeos" }
      ],
      selected: undefined
    };
  },
  methods:{
    app_selectEnfase(index) {
      this.selected = this.enfases[index];
      EventBus.$emit("EnfaseSelected", this.selected.id);
    }
  }
};
</script>
