<template>
    <section id="ourteam" class="my-15">
  <v-container>
      <div class="py-15">
        <h1 class="display-2 font-weight-bold mb-4 text-center">
          OUR <span class="color-title">TEAM</span>
        </h1>
        <p class="font-weight-regular text-center">
          IT Outsourcing Company in Vietnam specialized in delivering
          tailor-made it solutions helping businesses in BFSI, Healthcare,
        </p>
      </div>

      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
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
                <v-card
                  class="card"                 
                  flat
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="team.img"
                    max-width="120px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ team.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ team.text }}
                  </h4>
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
    teams: [
      {
        img: require("../../assets/team-1.png"),
        title: "Catherina gail",
        text: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        img: require("../../assets/team-2.png"),
        title: "Harvey Rube",
        text: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        img: require("../../assets/team-3.png"),
        title: "Janet Pris",
        text: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        img: require("../../assets/team-4.png"),
        title: "Kevin Ward",
        text: "Lorem ipsum dolor sit amet, consectetur",
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
  padding: 10px;
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
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>