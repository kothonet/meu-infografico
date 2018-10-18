<template>
  <v-dialog 
    v-model="showPreview" 
    width="400px">

    <link-prevue 
      :url="$store.getters.ferramenta === undefined ? undefined : $store.getters.ferramenta.url" />

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
      showPreview: false
    };
  },
  mounted() {
    var _self = this;
    EventBus.$on("FerramentaSelected", function() {
      _self.showPreview = _self.$store.getters.ferramenta !== undefined
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
 