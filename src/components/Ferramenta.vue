<template>

    <v-flex xs2>

            <v-toolbar color="ferramenta" dark>
              <v-toolbar-title>Ferramentas</v-toolbar-title>
            </v-toolbar>
            <v-list two-line>
              <div v-for="ferramenta in ferramentas" :key="ferramenta.id">
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
      ferramentas: []
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
