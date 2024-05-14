<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      width="100%"
      color="transparent"
    >
      <div class="bg-navigation__opacity"></div>
      <div class="content-navigation">
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
                @click="navClick(item)"
              >
                <v-list-item-content>
                  <v-list-item-title class="title white--text text-uppercase">{{
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
        </v-container>
      </div>
    </v-navigation-drawer>
    <v-app-bar app class="px-16 hidden-xs-only" flat :color="color">
      <v-toolbar-title>
        <v-img src="@/assets/logo-nav.png" width="auto" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon  @click.stop="menu()" class="mx-xs-0" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavigationV",
  data: () => ({
    drawer: null,
    bg: "transparent",
    items: [
      { icon: "mdi-facebook", text: "Home", link: "#hero", color: "facebook" },
      {
        icon: "mdi-twitter",
        text: "About us",
        link: "#hero",
        color: "twitter",
      },
      {
        icon: "mdi-google-plus",
        text: "Services",
        link: "#services",
        color: "google",
      },
      {
        icon: "mdi-instagram",
        text: "Our Works",
        link: "#ourworks",
        color: "instagram",
      },
      {
        icon: "mdi-email-outline",
        text: "Contact",
        link: "#contact",
        color: "email",
      },
    ],
  }),
  props: {
    color: String,
  },
  methods: {
    menu() {
      this.drawer = !this.drawer;
    },
    close() {
      this.drawer = !this.drawer;
    },
    navClick(item) {
      this.drawer = !this.drawer;
      this.$vuetify.goTo(item.link);
    },
    
  },
};
</script>

<style scoped>
.v-btn > .v-btn__content .v-icon{
  color: white;
}
.divider-nav {
  border: 1px solid rgb(211, 79, 3) !important;
}
.title:hover {
  color: #f7600e !important;
}
.bg-navigation__opacity {
  position: relative;
  background: rgba(31, 30, 32, 0.7);
  width: 100%;
  height: 100%;
}
.content-navigation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}
</style>