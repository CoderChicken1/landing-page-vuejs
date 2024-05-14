<template>
  <v-container id="services" class="my-15 py-15 px-10">
    <v-row align="center" justify="center">
      <v-col
        md="3"
        cols="12"
        class="text-center"
        v-for="(feature, i) in features"
        :key="i"
      >
        <v-row align="center"> </v-row>
        <ServiceItem
          :img="feature.img"
          :title="feature.title"
          :text="feature.text"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ServiceItem from "./ServiceItem.vue";
export default {
  name: "OurService",
  components: {
    ServiceItem,
  },

  data: () => ({
    features: [
      {
        img: require("@/assets/print-1.png"),
        title: "Print Design",
        text: "Our print design services are a testament to timeless elegance and effective communication.",
      },
      {
        img: require("@/assets/web-1.png"),
        title: "Web Design",
        text: "In the ever-evolving digital landscape, our web design expertise shines through creating user-centric",
      },
      {
        img: require("@/assets/app-1.png"),
        title: "App Design",
        text: "Mobile applications are powerful tools for connecting with your audience. Our app design team excels in crafting",
      },
      {
        img: require("@/assets/logo-1.png"),
        title: "Logo Design",
        text: "Your logo is the face of your brand, and we understand its significance. Our logo design process is a blend of creativity",
      },
    ],
  }),
};
</script>

<style scoped>
</style>