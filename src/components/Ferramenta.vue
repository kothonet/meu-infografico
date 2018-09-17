<template>

  <v-flex 
    xs12 
    sm6
    lg2>

    <v-toolbar 
      color="ferramenta" 
      dark>

      <v-toolbar-title>Ferramentas</v-toolbar-title>
    </v-toolbar>

    <v-scroll-y-transition 
      group 
      tag="v-list">
      
      <template 
        v-for="(for_ferramenta, index) in availableFerramentas">

        <div 
          :key="for_ferramenta.id"
          class="v-list--two-line">

          <v-list-tile @click.prevent.stop="app_selectFerramenta(index)" >
            <v-list-tile-content>
              <v-list-tile-title v-text="for_ferramenta.nome"/>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index < availableFerramentas.length-1" />
        </div>
      </template>
    </v-scroll-y-transition>
  </v-flex>
</template>

<script>
import EventBus from "../plugins/event-bus";

export default {
  name: "Ferramenta",
  data() {
    return {
      ferramentas: [
        {
          id: 1,
          nome: 'CACOO',
          url: "https://cacoo.com",
          selecao: [
            {enfase:2,criterio:1,formato:1},
            {enfase:2,criterio:3,formato:1}
          ]
        },
        {
          id: 2,
          nome: 'CANVA',
          url: "https://www.canva.com",
          selecao: [
            {enfase:1,criterio:1,formato:1},
            {enfase:1,criterio:2,formato:1},
            {enfase:1,criterio:3,formato:1},
            {enfase:1,criterio:4,formato:1},
            {enfase:4,criterio:1,formato:1},
            {enfase:4,criterio:2,formato:1},
            {enfase:4,criterio:3,formato:1},
            {enfase:4,criterio:4,formato:1}
          ]
        },
        {
          id: 3,
          nome: 'CREATELY',
          url: "https://creately.com",
          selecao: [
            {enfase:2,criterio:2,formato:1},
            {enfase:2,criterio:4,formato:1}
          ]
        },
        {
          id: 4,
          nome: 'EASELY',
          url: "https://www.easel.ly",
          selecao: []
        },
        {
          id: 5,
          nome: 'INFOGRAM',
          url: "https://infogram.com",
          selecao: [
            {enfase:2,criterio:1,formato:2},
            {enfase:2,criterio:2,formato:2},
            {enfase:2,criterio:3,formato:2},
            {enfase:2,criterio:4,formato:2}
          ]
        },
        {
          id: 6,
          nome: 'PIKTOCHART',
          url: "https://piktochart.com",
          selecao: [
            {enfase:3,criterio:2,formato:1},
            {enfase:3,criterio:3,formato:1},
            {enfase:5,criterio:2,formato:1},
            {enfase:5,criterio:3,formato:1}
          ]
        },
        {
          id: 7,
          nome: 'VENNGAGE',
          url: "https://venngage.com",
          selecao: [
            {enfase:4,criterio:2,formato:1},
            {enfase:4,criterio:3,formato:1},
            {enfase:4,criterio:4,formato:1},
            {enfase:5,criterio:1,formato:1},
            {enfase:5,criterio:2,formato:1},
            {enfase:5,criterio:3,formato:1},
            {enfase:5,criterio:4,formato:1}
          ]
        },
        {
          id: 8,
          nome: 'VISME',
          url: "https://www.visme.co",
          selecao: [
            {enfase:1,criterio:1,formato:2},
            {enfase:1,criterio:2,formato:2},
            {enfase:1,criterio:3,formato:2},
            {enfase:1,criterio:4,formato:2},
            {enfase:3,criterio:1,formato:1},
            {enfase:3,criterio:1,formato:2},
            {enfase:3,criterio:2,formato:1},
            {enfase:3,criterio:2,formato:2},
            {enfase:3,criterio:3,formato:1},
            {enfase:3,criterio:3,formato:2},
            {enfase:3,criterio:4,formato:1},
            {enfase:3,criterio:4,formato:2},
            {enfase:4,criterio:1,formato:2},
            {enfase:4,criterio:2,formato:1},
            {enfase:4,criterio:2,formato:2},
            {enfase:4,criterio:3,formato:1},
            {enfase:4,criterio:3,formato:2},
            {enfase:4,criterio:4,formato:1},
            {enfase:4,criterio:4,formato:2},
            {enfase:5,criterio:1,formato:1},
            {enfase:5,criterio:1,formato:2},
            {enfase:5,criterio:2,formato:1},
            {enfase:5,criterio:2,formato:2},
            {enfase:5,criterio:3,formato:1},
            {enfase:5,criterio:3,formato:2},
            {enfase:5,criterio:4,formato:1},
            {enfase:5,criterio:4,formato:2},
            {enfase:6,criterio:1,formato:2},
            {enfase:6,criterio:2,formato:2},
            {enfase:6,criterio:3,formato:2},
            {enfase:6,criterio:4,formato:2}
          ]
        }
      ]
    };
  },
  computed: {
      enfase() {return this.$store.state.enfase},
      criterio() {return this.$store.state.criterio},
      formato() {return this.$store.state.formato},
      availableFerramentas() {
        var _ferramentas = [];
        var _self = this;
        if (_self.enfase !== undefined && 
          _self.criterio !== undefined && 
          _self.formato !== undefined) {

          this.ferramentas.forEach(function(ferramenta) {

            ferramenta.selecao.forEach(function(_selecao) {
              
              if(_self.enfase.id === _selecao.enfase && 
                _self.criterio.id === _selecao.criterio && 
                _self.formato.id === _selecao.formato) {
                
                _ferramentas.push(ferramenta);
              }
            });
          });
        } 
        
        return _ferramentas;
      }
  },
  methods: {
    app_selectFerramenta(index) {
        EventBus.$emit("FerramentaSelected", this.availableFerramentas[index].url);
    }
  }
};
</script>
