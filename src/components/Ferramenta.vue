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
        v-for="(ferramenta, index) in availableFerramentas">

        <div 
          :key="ferramenta.id"
          class="v-list--two-line">

          <v-list-tile @click.prevent.stop="app_selectFerramenta(index)" >
            <v-list-tile-content>
              <v-list-tile-title v-text="ferramenta.nome"/>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index < availableFerramentas.length-1" />
        </div>
      </template>
    </v-scroll-y-transition>

    <v-btn
      v-if="this.$store.getters.enfase !== undefined || this.$store.getters.criterio !== undefined || this.$store.getters.formato !== undefined"
      dark 
      class="btn-try-again"
      @click.prevent.stop="app_try_again()">Tentar Novamente</v-btn>
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
          url: "https://www.canva.com/pt_br",
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
      availableFerramentas() {
        var _ferramentas = [];
        var _self = this;
        if (_self.$store.getters.enfase !== undefined && 
          _self.$store.getters.criterio !== undefined && 
          _self.$store.getters.formato !== undefined) {

          this.ferramentas.forEach(function(ferramenta) {

            ferramenta.selecao.forEach(function(_selecao) {
              
              if(_self.$store.getters.enfase.id === _selecao.enfase && 
                _self.$store.getters.criterio.id === _selecao.criterio && 
                _self.$store.getters.formato.id === _selecao.formato) {
                
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
      this.$store.dispatch("set_ferramenta", this.availableFerramentas[index]);
      EventBus.$emit("FerramentaSelected");
    },
    app_try_again() {
      this.$store.dispatch('set_enfase', undefined);
      this.$store.dispatch('set_criterio', undefined);
      this.$store.dispatch('set_formato', undefined);
    }
  }
};
</script>

<style scoped>
.btn-try-again {
  border-radius: 5px;
  height: 64px;
  width: 100%;
  margin: 0;
  background-color: #f3511e !important;
}

</style>
