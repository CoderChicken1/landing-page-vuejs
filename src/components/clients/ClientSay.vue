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
        <v-slide-group mobile-break-point="1000" show-arrows>
          <v-slide-item v-for="(slide, i) in slides" :key="i">
            <v-card width="800px" class="ma-4" color="transparent" outlined>
              <v-avatar >
                <img
                  :src="slide.image"
                  alt="John"
                />
              </v-avatar>
              <v-card-title class="text-body-1 white--text">
                {{ slide.text }}
              </v-card-title>
              <v-card-text class="text-caption white--text">
                <b>{{ slide.name }}</b>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
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
        text: " We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go {here} to share with us your feedback. Thank you.",
      },
      {
        name: "Johan cruyff",
        image: require("../../assets/avatar-client-1.png"),
        text: " We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go {here} to share with us your feedback. Thank you.",
      },
      {
        name: "Karim Benzema",
        image: require("../../assets/avatar-client-1.png"),
        text: " We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go {here} to share with us your feedback. Thank you.",
      },
      {
        name: "Lionel Messi",
        image: require("../../assets/avatar-client-1.png"),
        text: " We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go {here} to share with us your feedback. Thank you.",
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