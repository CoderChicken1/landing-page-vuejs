<template>
  <section id="clientsay">
  <v-container class="content-clientsay">
      <v-sheet
        class="mt-5 mx-auto"
        outlined
        tile
        color="transparent"
        width="80%"
      >
        <!-- <v-window show-arrows >
          <template v-slot:prev="{ on, attrs }">
            <v-btn icon tile depressed plain v-bind="attrs" v-on="on"
              ><v-icon size="42" color="grey">mdi-chevron-left</v-icon></v-btn
            >
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn icon tile depressed plain v-bind="attrs" v-on="on"
              ><v-icon size="42" color="grey">mdi-chevron-right</v-icon></v-btn
            >
          </template>
          <v-window-item v-for="(slide, i) in slides" :key="i">
          <v-row justify="center" align="center">
          <v-col cols="12" sm="9">
            <v-card class="mx-10 py-10" color="transparent" flat max-height="500px">
              <v-avatar size="72" class="mx-auto d-flex justify-center">
                <img :src="slide.image" alt="John" />
              </v-avatar>
              <v-card-title class="font-italic text-subtitle-1 px-10 text-center white--text">
                {{ slide.text }}
              </v-card-title>
              <v-card-text class="text-title text-center white--text">
                {{ slide.name }}
              </v-card-text>
            </v-card>
          </v-col>
          </v-row>
          </v-window-item>
        </v-window> -->
        <v-carousel show-arrows-on-hover hide-delimiters height="240" interval="4000" cycle>
          <v-carousel-item v-for="(slide, i) in slides" :key="i" >
          <v-row justify="center" align="center">
          <v-col cols="10" sm="8">
            <v-card color="transparent" flat >
              <v-avatar size="72" class="mx-auto d-flex justify-center">
                <img :src="slide.image" alt="John" />
              </v-avatar>
              <v-card-title class="font-italic text-subtitle-1 px-10 text-center white--text">
                {{ slide.text }}
              </v-card-title>
              <v-card-text class="text-title text-center white--text">
                {{ slide.name }}
              </v-card-text>
            </v-card>
          </v-col>
          </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-sheet>
   </v-container>
  </section>
</template>

<script>
export default {
  name: "ClientSay",
  data: () => ({
    slides: [
      {
        name: "Robert Solake",
        image: require("../../assets/avatar-client-1.png"),
        text: "Great platform! Love the ease of connecting with friends and sharing moments. The interface is intuitive, and the updates keep getting better. ",
      },
      {
        name: "Johan cruyff",
        image: require("../../assets/avatar-client-2.png"),
        text: "It's where I stay connected with family and friends fantastic and the constant improvements show the commitment to user experience.",
      },
      {
        name: "Karim Benzema",
        image: require("../../assets/avatar-client-3.png"),
        text: "The security measures are top-notch, and the variety of content keeps me engaged. Kudos to the team!",
      },
      {
        name: "Lionel Messi",
        image: require("../../assets/avatar-client-4.png"),
        text: "I love sharing my art, connecting with fellow artists, and exploring diverse content. It truly fosters a sense of community.",
      },
    ],
    
  }),

};
</script>

<style scoped>
#clientsay {
  background-image: url("~@/assets/bgClient.png");
  position: relative;
}
#clientsay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(59, 67, 76, 0.8);
}
.content-clientsay{
  position: relative;
}
@media screen and (max-width: 600px) {
  .v-container {
    height: 300px;
  }
  .v-card{
    height: 470px;
  }
}
</style>