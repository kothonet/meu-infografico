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
        v-for="(for_enfase, index) in enfases" 
        :key="for_enfase.id">

        <v-list-tile 
          ripple
          @click.prevent.stop="app_selectEnfase(index)"
          @mouseover.prevent.stop="app_mouseOverEnfase(index)"
          @mouseleave.prevent.stop="app_mouseLeaveEnfase()">

          <v-list-tile-content>
            <v-list-tile-title v-text="for_enfase.nome"/>
          </v-list-tile-content>
          <v-list-tile-avatar v-if="enfase !== undefined && for_enfase.id==enfase.id"><v-icon>checked</v-icon></v-list-tile-avatar>
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
        { id: 1, nome: "Conteúdo textual", descricao: "parte escrita, com suas opções de fontes, corpo, cores, blocos serem modificados, espaçamento, negrito, itálico" },
        { id: 2, nome: "Gráficos", descricao: "diagramas, esquemas e suas variações, como wireframes, sitemaps, networks" },
        { id: 3, nome: "Mapas", descricao: "localizações geográficas" },
        { id: 4, nome: "Ícones", descricao: "ilustrações, desenhos e formas" },
        { id: 5, nome: "Fotos", descricao: "" },
        { id: 6, nome: "Vídeos", descricao: "" }
      ]
    };
  },
  computed: {
    enfase() {
      return this.$store.state.enfase;
    }
  },
  methods:{
    app_selectEnfase(index) {
      this.$store.commit('SET_ENFASE', this.enfases[index]);
    },
    app_mouseOverEnfase(index) {
      EventBus.$emit("EnfaseMouseOver", this.enfases[index].descricao);
    },
    app_mouseLeaveEnfase() {
      EventBus.$emit("EnfaseMouseLeave");
    }
  }
};
</script>
