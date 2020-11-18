<template>

  <v-flex 
    xs12 
    sm6
    lg2>

    <v-tooltip 
      right 
      color="enfase">
      <template v-slot:activator="{ on }">
        <v-toolbar
          color="enfase" 
          dark
          v-on="on">
          <v-toolbar-title>Escolha 1</v-toolbar-title>
        </v-toolbar>
      </template>
      <v-card 
        max-width="400"
        class="mx-auto v-card__white"
        color="enfase"
        flat>
        <v-card-text class="title">
          <div>ÊNFASE</div>
          <br>
          <div>O que é mais importante no infográfico que você quer produzir</div>
          <br>
          <div>(escolher só um)</div>
        </v-card-text>
      </v-card>
    </v-tooltip>

    <v-list two-line>
      <div 
        v-for="(enfase, index) in enfases" 
        :key="enfase.id">

        <v-tooltip 
          :disabled="enfase.descricao === ''"
          right 
          color="enfase"
          elevation="5">
          <template v-slot:activator="{ on }">
            <v-list-tile 
              :disabled="$store.getters.enfase!==undefined"
              ripple
              @click.prevent.stop="app_selectEnfase(index)"
              v-on="on">
              <v-list-tile-content>
                <v-list-tile-title v-text="enfase.nome"/>
              </v-list-tile-content>
              <v-list-tile-avatar v-if="$store.getters.enfase !== undefined && enfase.id==$store.getters.enfase.id"><v-icon>checked</v-icon></v-list-tile-avatar>
            </v-list-tile>
          </template>
          <v-card 
            max-width="400" 
            class="mx-auto v-card__white"
            color="enfase"
            flat>
            <v-card-text 
              class="headline" 
              v-text="enfase.descricao"/>
          </v-card>
        </v-tooltip>
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
        { id: 1, nome: "Conteúdo textual", descricao: "Parte escrita, com suas opções de fontes, corpo, cores, blocos serem modificados, espaçamento, negrito, itálico" },
        { id: 2, nome: "Gráficos", descricao: "Diagramas, esquemas e suas variações, como wireframes, sitemaps, networks" },
        { id: 3, nome: "Mapas", descricao: "Localizações geográficas" },
        { id: 4, nome: "Ícones", descricao: "Ilustrações, desenhos e formas" },
        { id: 5, nome: "Fotos", descricao: "" },
        { id: 6, nome: "Vídeos", descricao: "" }
      ],
      show: false
    }
  },
  methods:{
    app_selectEnfase(index) {
      this.$store.dispatch('set_enfase', this.enfases[index]);
    },
    app_mouseOverEnfase(index) {
      EventBus.$emit("EnfaseMouseOver", this.enfases[index]);
    },
    app_mouseLeaveEnfase() {
      EventBus.$emit("EnfaseMouseLeave");
    }
  }
};
</script>

