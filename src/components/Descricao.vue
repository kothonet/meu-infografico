<template>

  <v-flex 
    class="hidden-md-and-down" 
    lg4>

    <v-card v-if="showDescricao">
      <v-card-title>
        {{ mensagem }}
      </v-card-title>
    </v-card>
          
  </v-flex>
    
</template>

<script>
import EventBus from "../plugins/event-bus";

export default {
  name: "Descricao",
  data() {
    return {
      mensagem: "",
      showDescricao: false
    };
  },
  mounted() {
    var _self = this;
    EventBus.$on("EnfaseMouseOver", function(payload) {
        _self.app_mouseOver(payload);
    });
    EventBus.$on("CriterioMouseOver", function(payload) {
       _self.app_mouseOver(payload);
    });
    EventBus.$on("FormatoMouseOver", function(payload) {
        _self.app_mouseOver(payload);
    });
    EventBus.$on("EnfaseMouseLeave", function() {
        _self.app_mouseLeave();
    });
    EventBus.$on("CriterioMouseLeave", function() {
        _self.app_mouseLeave();
    });
    EventBus.$on("FormatoMouseLeave", function() {
        _self.app_mouseLeave();
    });
  },
  unmounted() {
    EventBus.$off("EnfaseMouseOver");
    EventBus.$off("CriterioMouseOver");
    EventBus.$off("FormatoMouseOver");
    EventBus.$off("EnfaseMouseLeave");
    EventBus.$off("CriterioMouseLeave");
    EventBus.$off("FormatoMouseLeave");
  },
  methods: {
      app_mouseOver(payload) {
        this.mensagem = payload;
        this.showDescricao = payload ? payload.length>0 : false;
      },
      app_mouseLeave() {
        this.mensagem = "";
        this.showDescricao = false;
      }
  }
};
</script>
 <style scoped> 
 .v-card__title {
     font-size: 20px;
 }
 </style>
 