<template>

    <v-flex xs2>

            <v-toolbar color="ferramenta" dark>
              <v-toolbar-title>Ferramentas</v-toolbar-title>
            </v-toolbar>
            <v-list two-line>
              <div v-for="ferramenta in availableFerramentas" :key="ferramenta.id">
              <v-list-tile @click="selectferramenta(ferramenta.id)" >
                <v-list-tile-content>
                  <v-list-tile-title v-text="ferramenta.nome"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="ferramenta.id < ferramentas.length"></v-divider>
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
      enfase: null,
      ferramentas: [
        {
          id: 1,
          nome: 'CACOO',
          selecao: [
            {enfase:2,criterio:1,formato:1},
            {enfase:2,criterio:3,formato:1}
          ]
        },
        {
          id: 2,
          nome: 'CANVA',
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
          selecao: [
            {enfase:2,criterio:2,formato:1},
            {enfase:2,criterio:4,formato:1}
          ]
        },
        {
          id: 4,
          nome: 'EASELY',
          selecao: []
        },
        {
          id: 5,
          nome: 'INFOGRAM',
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
  methods: {
      selectferramenta(id) {
          EventBus.$emit("FerramentaSelected", id);
      }
  },
  mounted() {
    EventBus.$on("FormatoSelected", function(payload) {
      console.log(payload);
    })
  },
  unmounted() {
    EventBus.$off("FormatoSelected");
  }
};
</script>
