<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      width="100%"
      src="@/assets/bgNavigation.png"
    >
      <v-container>
          <div class="d-flex justify-center flex-column">
            <div class="d-flex justify-end">
              <v-btn icon @click="close()" class="white--text">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <v-list class="d-flex align-center flex-column">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                link
                @click="$vuetify.goTo(item.link)"
              >
                <v-list-item-content>
                  <v-list-item-title class="title white--text text-h4">{{
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
                icon
              >
                <v-icon size="32px" :color="icon.color">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-container
      >
    </v-navigation-drawer>

    <v-app-bar app dark class="px-15 mx-6" flat color="transparent" hide-on-scroll>
      <v-toolbar-title class="ml-4">
        <v-img src="@/assets/logo-nav.png" />
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-title>Menu</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="menu()" class="mr-4" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavigationV",
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-facebook", text: "Home", link: "#hero", color: "facebook"},
      { icon: "mdi-twitter", text: "About us", link: "#hero", color: "twitter"},
      { icon: "mdi-google-plus", text: "Services", link: "#services", color: "google" },
      { icon: "mdi-instagram", text: "Our Works", link: "#ourworks", color: "instagram" },
      { icon: "mdi-email-outline", text: "Contact", link: "#contact", color: "email"},
    ],
  }),
  props: {
    color: String,
  },
  methods: {
    menu() {
      this.drawer = !this.drawer;
      this.overlay = !this.overlay;
    },
    close() {
      this.drawer = !this.drawer;
      this.overlay = false;
    },
  },
};
</script>

<style scoped>
.divider-nav {
  border: 1px solid rgb(211, 79, 3) !important;
}
.title:hover {
  color: #f7600e !important;
}

</style>