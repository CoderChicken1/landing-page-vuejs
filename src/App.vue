<template>
  <v-app>
      <NavigationV :color="color"/>
    <v-main class="pt-0" id="main">
      <HomeSection />
      <OurService />
      <NewLetter />
      <OurWorks />
      <ClientSay />
      <OurTeam />
      <ContactSection />
      <FooterSection />
    </v-main>
  </v-app>
</template>

<script>
//import LoadingCircle from "./components/animation/LoadingCircle.vue"
import NavigationV from "./components/header/Navigation.vue";
import OurService from "./components/service/OurServices.vue";
import NewLetter from "./components/newletter/NewLetters.vue";
import OurWorks from "./components/ourworks/OurWorks.vue";
import ClientSay from "./components/clients/ClientSay.vue";
import OurTeam from "./components/team/OurTeam.vue";
import ContactSection from "./components/contact/ContactV.vue";
import FooterSection from "./components/footer/Footer.vue";
import HomeSection from "./components/header/HomeSection.vue";

export default {
  name: "App",

  components: {
   // LoadingCircle,
    NavigationV,
    HomeSection,
    OurService,
    NewLetter,
    OurWorks,
    ClientSay,
    OurTeam,
    ContactSection,
    FooterSection,
  },

  data: () => ({
    color: "transparent",
  }),
  created() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.color = 'appbar';
      } else {
        this.color = 'transparent';
      }
    },
  },
  watch: {
   
  },
};
</script>

<style scoped>

</style>

