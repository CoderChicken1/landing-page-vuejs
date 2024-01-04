<template>
  <v-container id="services" class="my-15 py-15 px-10">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-col
            md="3"
            sm="6"
            xs="12"
            class="text-center"
            v-for="(feature, i) in features"
            :key="i"
          >
            <v-card class="card" flat>
              <div class="flex-center mb-4">
                <div class="circle1">
                  <v-img
                    :src="feature.img"
                    max-height="50px"
                    max-width="30px"
                  ></v-img>
                </div>
              </div>
              <div class="content-service">
                <h1 class="font-weight-regular">{{ feature.title }}</h1>
                <p class="font-weight-regular subtitle-1">
                  {{ feature.text }}
                </p>
              </div>
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
        text: "Our print design services are a testament to timeless elegance and effective communication.",
      },
      {
        img: require("@/assets/pc-icon.png"),
        title: "Web Design",
        text: "In the ever-evolving digital landscape, our web design expertise shines through creating user-centric",
      },
      {
        img: require("@/assets/app-icon.png"),
        title: "App Design",
        text: "Mobile applications are powerful tools for connecting with your audience. Our app design team excels in crafting",
      },
      {
        img: require("@/assets/logo-icon.png"),
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
.content-service {
  text-align: center; /* Center-align the content */
}

.content-service h1 {
  margin-bottom: 8px; /* Adjust the margin as needed */
}

.content-service p {
  margin: 0; 
}
</style>