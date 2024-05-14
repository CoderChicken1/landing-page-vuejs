<template>
  <section id="ourteam" class="my-15">
    <v-container>
      <v-row cols="10" justify="center" align="center">
        <v-col cols="6" class="d-sm-flex flex-column justify-center">
          <h1 class="display-2 font-weight-bold mb-4 text-center">
            OUR <span class="color-title">TEAM</span>
          </h1>
          <p class="body-2 font-weight-regular text-center px-auto">
            Welcome to "Our Team," where creativity meets expertise, and
            innovation thrives. We are a dedicated group of professionals
            committed to delivering excellence in every project we undertake.
          </p>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="10" class="text-center">
          <v-item-group v-model="group" mandatory>
            <v-row class="mb-md-4">
              <v-col class="d-md-flex justify-center">
                <v-item
                  v-slot="{ active, toggle }"
                  v-for="(team, i) in teams"
                  :key="i"
                  class="mx-auto"
                >
                  <TeamItem
                    :img="team.img"
                    :title="team.title"
                    :text="team.text"
                    :items="items"
                    :active="active"
                    @click="toggle"
                    @mouseover="toggle"
                  />
                  <!-- <v-card
                    class="card pt-12"
                    flat
                    :ripple="false"
                    :class="{ grayscale: !active  }"
                    @click="toggle"
                    @mouseover="toggle"
                  >
                    <v-container>
                      <v-img
                        :src="team.img"
                        max-width="160px"
                        class="mb-0 mx-auto teamImage"
                        :class="{ 'image-border': active, zoomefect: active }"
                      ></v-img>
                      <v-divider v-show="active"></v-divider>
                    </v-container>
                    <v-card-text
                      class="title font-weight-bold text-uppercase"
                      :class="{ 'black--text': active }"
                    >
                      {{ team.title }}
                    </v-card-text>
                    <v-card-text class="d-flex justify-center pa-0">
                      <v-btn
                        v-for="(icon, i) in items"
                        :key="i"
                        class="white--text"
                        icon
                      >
                        <v-icon size="26px" :color="icon.color">{{
                          icon.icon
                        }}</v-icon>
                      </v-btn>
                    </v-card-text>
                    <v-card-text
                      class="d-flex justify-center body-2 font-weight-regular text-center ma-1 px-4"
                      :class="{ 'black--text': active }"
                    >
                      {{ team.text }}
                    </v-card-text>
                  </v-card> -->
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>

          <v-item-group v-model="group" class="hidden-sm-and-down" mandatory>
            <v-container>
              <v-row>
                <v-col class="d-flex justify-center" cols="12">
                  <v-item
                    v-slot="{ active, toggle }"
                    v-for="n in teams.length"
                    :key="n"
                  >
                    <div>
                      <v-btn
                        :input-value="active"
                        icon
                        :ripple="false"
                        plain
                        @click="toggle"
                      >
                        <v-icon color="#f7600e" :class="{ grayscale: !active }"
                          >mdi-record</v-icon
                        >
                      </v-btn>
                    </div>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import TeamItem from "./TeamItem.vue";
export default {
  name: "OurTeam",
  components: {
    TeamItem,
  },
  data: () => ({
    group: null,
    items: [
      { icon: "mdi-facebook", color: "facebook" },
      { icon: "mdi-twitter", color: "twitter" },
      { icon: "mdi-google-plus", color: "google" },
    ],
    teams: [
      {
        img: require("../../assets/team-1.png"),
        title: "Catherina gail",
        text: "The Print Design Leader oversees the creation of visually appealing and impactful designs for print materials",
        selected: false,
      },
      {
        img: require("../../assets/team-2.png"),
        title: "Harvey Rube",
        text: "The Logo Design Leader is responsible for crafting unique and memorable brand identities through logos",
        selected: false,
      },
      {
        img: require("../../assets/team-3.png"),
        title: "Janet Pris",
        text: "Leading the Web Design team, this individual focuses on creating visually engaging and user-friendly websites",
        selected: false,
      },
      {
        img: require("../../assets/team-4.png"),
        title: "Kevin Ward",
        text: "The App Design Leader spearheads the design process for mobile, ensuring that the interface is intuitive",
        selected: false,
      },
    ],
  }),
  methods: {},
  watch: {},
};
</script>

<style scoped>
.color-title {
  color: #f7600e;
}
.grayscale {
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}
.card {
  min-height: 300px;
}
.card::before {
  background-color: transparent !important;
}

.card .v-image {
  margin-bottom: 15px;
}
.card h1 {
  margin-bottom: 10px;
}
.teamImage {
  position: relative;
}
.v-divider {
  position: absolute;
  width: 180px;
  border-width: 2px;
  border-color: #f7600e;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.zoomefect {
  transform: scale(1.15) translateZ(0);
  transform-origin: center bottom;
  transition: transform 0.75s ease;
}
.adjust-breaking {
  width: 160px;
}
.bgRipple {
  color: transparent !important;
}
.adjust-breaking {
  height: 100px !important;
}
@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 2rem !important;
  }
}
</style>