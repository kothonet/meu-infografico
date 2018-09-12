<template>
  <v-dialog 
    v-model="showPreview" 
    width="400px">

    <link-prevue 
      :url="app_url" />

  </v-dialog>
</template>

<script>
import EventBus from "../plugins/event-bus";
import LinkPrevue from "link-prevue";

export default {
  name: "Preview",
  components: {
      LinkPrevue
  },
  data() {
    return {
      app_url: "http://www.google.com.br",
      showPreview: false
    };
  },
  mounted() {
    var _self = this;
    EventBus.$on("FerramentaSelected", function(payload) {
      _self.app_url = payload;
      _self.showPreview = true;
    });
  },
  unmounted() {
    EventBus.$off("FerramentaSelected");
  }
};
</script>

 <style>
#loader-container {
    min-height: 200px;
}
 </style>
 