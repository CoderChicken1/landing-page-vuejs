<template>
  <v-card
    v-on="$listeners"
    class="card pt-12"
    flat
    :ripple="false"
    :class="{ grayscale: !active }"
  >
    <v-container>
      <v-img
        :src="img"
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
      {{ title }}
    </v-card-text>
    <v-card-text class="d-flex justify-center pa-0">
      <v-btn v-for="(icon, i) in items" :key="i" class="white--text" icon>
        <v-icon size="26px" :color="icon.color">{{ icon.icon }}</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text
      class="d-flex justify-center body-2 font-weight-regular text-center ma-1 px-4"
      :class="{ 'black--text': active }"
    >
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TeamItem",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    img: {
        type: String,
        default:require("../../assets/team-1.png")
    },
    title:{
        type: String,
        default:"Johan"
    },
    text:{
        type: String,
        default: "Dev FrontE"
    },
    items:{
        type: Array,
        default: () => []
    }
  },
    inheritAttrs: false,
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