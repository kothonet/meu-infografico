<template>
  <v-app>
    <v-toolbar
      app
      clipped-left
      color="header" dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-for="(item, i) in items" :key="i" @click="clickItem(item.route)" class="hidden-sm-and-down">
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-navigation-drawer
          absolute
          temporary
          clipped
          v-model="drawer"
          mobile-break-point=500
          app
        >
          <v-list>
            <v-list-tile
              value="true"
              v-for="(item, i) in items"
              :key="i"
              @click="clickItem(item.route)"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" ></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          route: '/'
        },
        {
          icon: 'info',
          title: 'Sobre',
          route: '/about'
        },
        {
          icon: 'help',
          title: 'Ajuda',
          route: '/help'
        }
      ],
      miniVariant: false,
      title: 'Meu Infográfico'
    }
  },
  methods: {
    clickItem: function(_item) {
      this.$router.push(_item);
      this.drawer = false;
    }
  }
}
</script>

<style>
.application.theme--light {
  background: '#e6e7e8';
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>