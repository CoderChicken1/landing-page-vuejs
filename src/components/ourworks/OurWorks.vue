<template>
  <section id="ourworks" class="my-sm-15">
    <v-container>
      <v-row class="py-sm-15" align="center" justify="center">
        <v-col cols="6">
          <h1
            class="display-2 font-weight-bold mb-4 text-center text-uppercase"
          >
            Our <span class="color-title">WORKS</span>
          </h1>
          <p class="body-1 font-weight-regular text-center">
            Explore a world of possibilities with our diverse range of services.
            We tailor our expertise to meet your unique needs
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card flat>
            <v-container>
              <v-row cols="12" sm="8">
                <v-col
                  v-for="(image, index) in displayedImages"
                  :key="index"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <ItemWorks :img="image.imgSrc" />
                </v-col>
              </v-row>
              <v-btn
                outlined
                large
                text
                class="mx-auto my-12 d-flex px-10 btn-more"
                @click="toggleShowMore"
                >{{ showMore ? "Show Less" : "Show More" }}</v-btn
              >
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ItemWorks from "./ItemWorks.vue";
export default {
  name: "OurWorks",
  components: {
    ItemWorks,
  },
  data: () => ({
    dialog: false,
    imgSrc: "",
    showMore: false,
    images: [
      { id: 1, imgSrc: require("../../assets/works-1.png") },
      { id: 2, imgSrc: require("../../assets/works-2.png") },
      { id: 3, imgSrc: require("../../assets/works-3.png") },
      { id: 4, imgSrc: require("../../assets/works-4.png") },
      { id: 5, imgSrc: require("../../assets/works-5.png") },
      { id: 6, imgSrc: require("../../assets/works-6.png") },
      { id: 7, imgSrc: require("../../assets/work-7.jpg") },
      { id: 8, imgSrc: require("../../assets/work-8.jpg") },
      { id: 9, imgSrc: require("../../assets/work-9.jpg") },
    ],
  }),
  computed: {
    displayedImages() {
      return this.showMore ? this.images : this.images.slice(0, 6);
    },
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
    redirectToExternalURL() {
      const externalURL = "https://stackoverflow.com/";
      window.open(externalURL, "_blank");
    },
  },
};
</script>

<style scoped>
.color-title {
  color: #f7600e;
}
.bgHover {
  position: relative;
  background: rgba(230, 96, 19, 0.8);
  width: 100%;
  height: 100%;
}

.v-card--reveal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.button-hover {
  color: #f7600e;
}
.btn-more >>> .v-btn__content {
  color: #f7600e;
}

@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 1.8rem !important;
  }
  .body-1 {
    font-size: 0.8rem !important;
  }
}
</style>