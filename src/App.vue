<template>
  <v-app>
    <v-toolbar
      app
      clipped-left
      height="120px"
      color="header" 
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn 
        v-for="(item, i) in items" 
        :key="i" 
        icon 
        class="hidden-sm-and-down"
        @click="clickItem(item.route)" >
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
        <transition 
          name="fade" 
          mode="out-in">

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

</style>

<style scoped>
.v-icon,
.v-toolbar__title {
  font-size: 36px;
  font-weight: bold;
}
.v-list__tile__title {
  font-size: 20px;
}
</style>
