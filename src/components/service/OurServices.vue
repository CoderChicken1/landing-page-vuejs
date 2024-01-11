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
        <v-card flat>
          <div class="flex-center mb-4">
            <div class="circle1">
              <v-img
                :src="feature.img"
                :max-height="i === 0 ? '50px' : i === 1 ? '100px' : '50px'"
                :max-width="i === 0 ? '40px' : i === 1 ? '50px' : '30px'"
              ></v-img>
            </div>
          </div>
          <v-card flat height="180">
            <h1 class="font-weight-regular mb-2">{{ feature.title }}</h1>
            <p class="font-weight-regular subtitle-1 overflow-hidden ma-0">
              {{ feature.text }}
            </p>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OurService",
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
.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>