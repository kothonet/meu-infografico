<template>

  <v-flex 
    class="hidden-md-and-down" 
    lg4>

    <v-fade-transition>

      <v-card v-if="showDescricao">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ mensagem }}</v-card-text>
      </v-card>

      <link-prevue 
        v-if="showPreview"
        :url="ferramenta === undefined ? undefined : ferramenta.url"
        :show-button="showButton"/>
    </v-fade-transition>
          
  </v-flex>
    
</template>

<script>
import EventBus from "../plugins/event-bus";
import LinkPrevue from "link-prevue";

export default {
  name: "Descricao",
  components: {
      LinkPrevue
  },
  data() {
    return {
      title: "Teste",
      mensagem: "",
      showDescricao: false,
      ferramenta: undefined,
      showPreview: false,
      showButton: false
    };
  },
  mounted() {
    var _self = this;
    EventBus.$on("EnfaseMouseOver", function(payload) {
        _self.app_mouseOverDescricao(payload);
    });
    EventBus.$on("CriterioMouseOver", function(payload) {
       _self.app_mouseOverDescricao(payload);
    });
    EventBus.$on("FormatoMouseOver", function(payload) {
        _self.app_mouseOverDescricao(payload);
    });
    EventBus.$on("FerramentaMouseOver", function(payload) {
        _self.app_mouseOverFerramenta(payload);
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
    EventBus.$on("FerramentaMouseLeave", function() {
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
      app_mouseOverDescricao(payload) {
        this.title = payload.nome
        this.mensagem = payload.descricao;
        this.showDescricao = payload ? payload.descricao.length>0 : false;
        this.showPreview = false;
      },
      app_mouseLeave() {
        this.title = "";
        this.mensagem = "";
        this.ferramenta = undefined;
        this.showDescricao = false;
        this.showPreview = false;
      },
      app_mouseOverFerramenta(payload) {
        this.title = "";
        this.mensagem = "";
        this.ferramenta = payload;
        this.showDescricao = false;
        this.showPreview = payload ? true : false;
      }
  }
};
</script>
<style scoped> 
.v-card {
    min-height: 300px;
    font-size: 20px;
}

.v-card__title {
    font-weight: bold;
}

.card-btn {
  display: none;
}
</style>