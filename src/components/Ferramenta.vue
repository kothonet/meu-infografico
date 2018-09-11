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
    <v-list two-line>
      <div 
        v-for="(ferramenta, index) in availableFerramentas" 
        :key="ferramenta.id">

        <v-list-tile @click.prevent.stop="app_selectFerramenta(index)">
          <v-list-tile-content>
            <v-list-tile-title 
              @mouseover.prevent.stop="app_mouseover(index)" 
              @mouseleave.prevent.stop="app_mouseleave(index)"
              v-text="ferramenta.nome"/>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="index < availableFerramentas.length-1"/>
      </div>
    </v-list>
          
  </v-flex>
    
</template>

<script>
import EventBus from "../plugins/event-bus";

export default {
  name: "Ferramenta",
  data() {
    return {
      enfase: undefined,
      criterio: undefined,
      formato: undefined,
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
      ],
      availableFerramentas: []
    };
  },
  mounted() {
    var _self = this;
    EventBus.$on("EnfaseSelected", function(payload) {
      _self.enfase = payload;
      _self.availableFerramentas = [];

      _self.criterio = undefined;
      _self.selected = undefined;
    });
    EventBus.$on("CriterioSelected", function(payload) {
      _self.criterio = payload;
      _self.availableFerramentas = [];

      _self.selected = undefined;
    });
    EventBus.$on("FormatoSelected", function(payload) {
      _self.formato = payload;
      _self.availableFerramentas = [];

      _self.ferramentas.forEach(function(ferramenta) {
        ferramenta.selecao.forEach(function(_selecao) {
          if(_self.enfase === _selecao.enfase && _self.criterio === _selecao.criterio && _self.formato === _selecao.formato) {
            _self.availableFerramentas.push(ferramenta);
          }
        });
      });
    });
  },
  unmounted() {
    EventBus.$off("EnfaseSelected");
    EventBus.$off("CriterioSelected");
    EventBus.$off("FormatoSelected");
  },
  methods: {
    app_selectFerramenta(index) {
        EventBus.$emit("FerramentaSelected", this.ferramentas[index].id);
    },
    app_mouseover(index) {
      console.log(this.availableFerramentas[index].url);
    },
    app_mouseleave(index) {
      console.log(this.availableFerramentas[index].url);
    }
  }
};
</script>
