<template>
  <section id="ourteam" class="my-15">
    <v-container>
      <v-row cols="10" justify="center" align="center">
        <v-col cols="6" class="d-flex flex-column justify-center">
          <h1 class="display-2 font-weight-bold mb-4 text-center">
            OUR <span class="color-title">TEAM</span>
          </h1>
          <p class="font-weight-regular text-center px-auto">
            Welcome to "Our Team," where creativity meets expertise, and
            innovation thrives. We are a dedicated group of professionals
            committed to delivering excellence in every project we undertake.
          </p>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col
              cols="12"
              sm="6"
              md="3"
              lg="3"
              class="text-center"
              v-for="(team, i) in teams"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="card" flat :class="{ up: hover }">
                  <v-img
                    :src="team.img"
                    max-width="150px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-bold">{{ team.title }}</h1>
                  <v-card-text class="d-flex justify-center">
                    <v-btn
                      v-for="(icon, i) in items"
                      :key="i"
                      class="mx-2 white--text"
                      icon
                    >
                      <v-icon size="26px" :color="icon.color">{{
                        icon.icon
                      }}</v-icon>
                    </v-btn>
                  </v-card-text>
                  <p class="font-weight-regular">
                    {{ team.text }}
                  </p>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "OurTeam",
  data: () => ({
       items: [
      { icon: "mdi-facebook", color: "facebook"},
      { icon: "mdi-twitter", color: "twitter"},
      { icon: "mdi-google-plus", color: "google" },
    ],
    teams: [
      {
        img: require("../../assets/team-1.png"),
        title: "Catherina gail",
        text: "The Print Design Leader oversees the creation of visually appealing and impactful designs for print materials",
      },
      {
        img: require("../../assets/team-2.png"),
        title: "Harvey Rube",
        text: "The Logo Design Leader is responsible for crafting unique and memorable brand identities through logos",
      },
      {
        img: require("../../assets/team-3.png"),
        title: "Janet Pris",
        text: "Leading the Web Design team, this individual focuses on creating visually engaging and user-friendly websites",
      },
      {
        img: require("../../assets/team-4.png"),
        title: "Kevin Ward",
        text: "The App Design Leader spearheads the design process for mobile applications, ensuring that the interface is intuitive",
      },
    ],
  }),
};
</script>

<style scoped>
.color-title {
  color: #f7600e;
}
.card {
  min-height: 300px;
  transition: 0.5s ease-out;
  cursor: pointer;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.2);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>