<template>
  <section id="clientsay" class="bgClient">
    <v-container>
      <v-sheet
        class="mt-5 mx-auto"
        outlined
        tile
        color="transparent"
        max-width="80%"
      >
        <v-window show-arrows>
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
            <v-card class="mx-10 py-10" color="transparent" flat>
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
          </v-window-item>
        </v-window>
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
        name: "Thiago Silva ",
        image: require("../../assets/avatar-client-1.png"),
        text: "Great platform! Love the ease of connecting with friends and sharing moments. The interface is intuitive, and the updates keep getting better. ",
      },
      {
        name: "Johan cruyff",
        image: require("../../assets/avatar-client-1.png"),
        text: "It's where I stay connected with family and friends fantastic and the constant improvements show the commitment to user experience.",
      },
      {
        name: "Karim Benzema",
        image: require("../../assets/avatar-client-1.png"),
        text: "The security measures are top-notch, and the variety of content keeps me engaged. Kudos to the team!",
      },
      {
        name: "Lionel Messi",
        image: require("../../assets/avatar-client-1.png"),
        text: "I love sharing my art, connecting with fellow artists, and exploring diverse content. It truly fosters a sense of community.",
      },
    ],
  }),
};
</script>

<style scoped>
.bgClient {
  background-image: url("~@/assets/bgClient.png");
}
</style>