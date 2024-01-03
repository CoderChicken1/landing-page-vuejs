<template>
  <v-container fluid id="features" class="my-15 py-15 px-10">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="space-around">
          <v-col
            xl="3"
            lg="3"
            md="3"
            sm="6"
            xs="12"
            class="text-center"
            v-for="(feature, i) in features"
            :key="i"
          >
            <v-card class="card" flat>
              <div class="flex-center">
                <div class="circle1">
                  <v-img
                    :src="feature.img"
                    max-height="50px"
                    max-width="30px"
                  ></v-img>
                </div>
              </div>
              <h1 class="font-weight-regular">{{ feature.title }}</h1>
              <h4 class="font-weight-regular subtitle-1">
                {{ feature.text }}
              </h4>
            </v-card>
          </v-col>
        </v-row>
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
        img: require("@/assets/print-icon.png"),
        title: "Print Design",
        text: "Everywhere your brand lives, through every touch point, our team works with you to create beautifully crafted  print design solutions.",
      },
      {
        img: require("@/assets/pc-icon.png"),
        title: "Web Design",
        text: "Everywhere your brand lives, through every touch point, our team works with you to create beautifully crafted  print design solutions.",
      },
      {
        img: require("@/assets/app-icon.png"),
        title: "App Design",
        text: "Everywhere your brand lives, through every touch point, our team works with you to create beautifully crafted  print design solutions.",
      },
      {
        img: require("@/assets/logo-icon.png"),
        title: "Logo Design",
        text: "Everywhere your brand lives, through every touch point, our team works with you to create beautifully crafted  print design solutions.",
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
.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle2 .img-cover {
  object-fit: cover;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>