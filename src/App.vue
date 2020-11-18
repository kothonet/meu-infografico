<template>
  <v-app>
    <v-toolbar 
      app 
      clipped-left 
      height="120px" 
      color="header" 
      dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <div>Descubra em 3 etapas a ferramenta</div>
        <div>ideal para criar o seu infográfico</div>
      </v-toolbar-title>

      <v-spacer />

      <v-dialog 
        v-model="dicas" 
        scrollable 
        persistent>
        <template v-slot:activator="{ on }">
          <a 
            href="#" 
            class="app-link" 
            v-on="on">
            <div>Dicas sobre</div>
            <div>infográficos</div>
          </a>
        </template>

        <v-card>
          <v-card-text>
            <v-container 
              grid-list-md 
              text-xs-center>
              <v-layout
                row
                wrap>
                <v-flex
                  xs12>
                  <img src="@/assets/dica3.jpeg">
                </v-flex>
                <v-flex
                  xs12>
                  <span>Fonte: Domiciano, baseado em Cairo; Ginner, 2011</span>
                </v-flex>
                <br><br>
                <v-flex
                  xs12>
                  <img src="@/assets/dica2.jpeg">
                </v-flex>
                <v-flex
                  xs12>
                  <span>Fonte: Domiciano, baseado em Valente, 2011</span>
                </v-flex>
                <br><br>
                <v-flex
                  xs12>
                  <img src="@/assets/dica1.jpeg">
                </v-flex>
                <v-flex
                  xs12>
                  <span>Fonte: Domiciano, baseado em Guevara; Moore, 2013</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn 
              text 
              @click="dicas = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-spacer />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeOFadQQYg00juf6tX6jHT1S7DU-Le53m11_W2aXJGSInguPQ/viewform"
        class="app-link"
        target="_blank"
      >
        <div>Formulário de</div>
        <div>avaliação</div>
      </a>

      <v-btn
        v-for="(item, i) in items"
        :key="i"
        icon
        class="hidden-sm-and-down"
        @click="clickItem(item.route)"
      >
        <v-tooltip 
          top 
          class="app-title">
          <v-icon slot="activator">{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container 
        fluid 
        grid-list-xl>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          clipped
          mobile-break-point="500"
          app
        >
          <v-list>
            <v-list-tile
              v-for="(item, i) in items"
              :key="i"
              value="true"
              @click="clickItem(item.route)"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" />
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-fade-transition leave-absolute>
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-content>

    <v-footer height="auto">
      <v-card 
        flat 
        tile 
        class="lighten-1 text-xs-center" 
        width="100%">
        <v-card-text class="pt-0 pb-0">
          <a 
            rel="license" 
            href="http://creativecommons.org/licenses/by/4.0/">
            <img
              alt="Licença Creative Commons"
              style="border-width: 0"
              src="https://i.creativecommons.org/l/by/4.0/88x31.png"
            >
          </a>
        </v-card-text>

        <v-card-text class="pt-0 pb-0">
          <span 
            xmlns:dct="http://purl.org/dc/terms/" 
            property="dct:title">meuinfografico.com</span>

          de

          <a
            xmlns:cc="http://creativecommons.org/ns#"
            href="https://meuinfografico.com/"
            property="cc:attributionName"
            rel="cc:attributionURL"
          >
            Marcus Aurelius Lopes Domiciano
          </a>

          está licenciado com uma Licença

          <a 
            rel="license" 
            href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons - Atribuição 4.0 Internacional
          </a>

          .

          <br>

          Baseado no trabalho disponível em

          <a
            xmlns:dct="http://purl.org/dc/terms/"
            href="https://repositorio.unesp.br/handle/11449/152630"
            rel="dct:source"
          >
            https://repositorio.unesp.br/handle/11449/152630
          </a>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { db } from "./firestore";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      drawer: false,
      dicas: false,
      items: [
        {
          icon: "home",
          title: "Home",
          route: "/",
        },
        {
          icon: "info",
          title: "Sobre",
          route: "/about",
        },
        {
          icon: "help",
          title: "Ajuda",
          route: "/help",
        },
      ],
    };
  },
  firestore() {
    return {
      access: db.collection("access"),
    };
  },
  mounted() {
    axios.get("https://ipinfo.io").then((response) => {
      this.$firestore.access.add({
        date: new Date(),
        ip: response.data.ip,
        country: response.data.country,
        state: response.data.region,
        city: response.data.city,
      });
    });
  },
  methods: {
    clickItem: function (_item) {
      this.$router.push(_item);
      this.drawer = false;
    },
  },
};
</script>

<style>
.application.theme--light {
  background: "#e6e7e8";
}

.enfase,
.criterio,
.formato,
.ferramenta {
  border-radius: 5px;
}

h3,
p {
  font-size: 20px !important;
}

p ul {
  font-weight: bold;
}

h1 {
  font-size: 36px;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}

.v-toolbar.disabled {
  filter: opacity(60%);
  -moz-opacity: 0.6;
  opacity: 0.6;
}

.v-card__white .v-card__text {
  color: white;
}
</style>

<style scoped>
.v-icon,
.v-toolbar__title {
  font-size: 24px;
  font-weight: bold;
}
.v-list__tile__title {
  font-size: 20px;
}

.app-link {
  font-size: 22px;
  color: #f9a88f;
  padding: 0 30px;
}

.app-link > div {
  text-align: center;
}

</style>
