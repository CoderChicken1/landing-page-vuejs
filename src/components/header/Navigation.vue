<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      temporary
      width="100%"
      color="#3b434c"
    >
      <v-container>
        <div class="d-flex justify-center flex-column">
          <div class="d-flex justify-end">
            <v-btn icon @click="close()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-list class="d-flex align-center flex-column">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title class="title">{{
                  item.text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider width="100" class="divider-nav" />
          </v-list>
          <v-card-text class="d-flex justify-center">
            <v-btn
              v-for="(icon, i) in items"
              :key="i"
              class="mx-2 white--text"
              target="_blank"
              icon
            >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </div></v-container
      >
    </v-navigation-drawer>

    <v-app-bar app dark class="px-15 mx-6" flat color="transparent">
      <v-toolbar-title class="ml-4">
        <v-img src="@/assets/logo-nav.png" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="menu()" class="mr-4" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavigationV",
  data: () => ({
    drawer: null,
    //    absolute: true,
    //   overlay: false,
    items: [
      { icon: "mdi-facebook", text: "Home", link: "#hero" },
      { icon: "mdi-twitter", text: "About us", link: "#features" },
      { icon: "mdi-teamviewer", text: "Services", link: "#download" },
      { icon: "mdi-instagram", text: "Our Works", link: "#pricing" },
      { icon: "mdi-email-outline", text: "Contact", link: "#contact" },
    ],
  }),
  methods: {
    menu() {
      this.drawer = !this.drawer;
      //  this.overlay=!this.overlay;
    },
    close() {
      this.drawer = !this.drawer;
      //    this.overlay= !this.overlay;
    },
  },
};
</script>

<style scoped>
.divider-nav {
  border: 1px solid rgb(211, 79, 3) !important;
}
</style>