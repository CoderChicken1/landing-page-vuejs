<template>
  <v-app>
    <NavigationV />
    <v-main class="pt-0">
      <HomeSection />
      <OurService />
      <NewLetter />
      <OurWorks />
      <ClientSay/>
      <OurTeam/>
      <ContactSection/>
      <FooterSection/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationV from "./components/header/Navigation.vue";
import HomeSection from "./components/header/HomeSection.vue";
import OurService from "./components/service/OurServices.vue";
import NewLetter from "./components/newletter/NewLetters.vue";
import OurWorks from "./components/ourworks/OurWorks.vue";
import ClientSay from "./components/clients/ClientSay.vue";
import OurTeam from "./components/team/OurTeam.vue";
import ContactSection from "./components/contact/ContactV.vue";
import FooterSection from "./components/footer/Footer.vue";
export default {
  name: "App",

  components: {
    NavigationV,
    HomeSection,
    OurService,
    NewLetter,
    OurWorks,
    ClientSay,
    OurTeam,
    ContactSection,
    FooterSection
  },

  data: () => ({
  
  }),

};
</script>
