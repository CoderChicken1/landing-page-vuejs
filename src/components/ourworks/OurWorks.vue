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
                  <!-- @click.stop="
                          (dialog = true), (id = index), (imgSrc = image.imgSrc)
                        "   them vao v-img o duoi de hien thi dialog-->
                  <v-hover v-slot="{ hover }">
                    <v-card flat class="d-flex" rounded>
                      <v-img
                        :src="image.imgSrc"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <!-- <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template> -->
                        <v-expand-transition>
                          <div :class="{ bgHover: hover }">
                            <div
                              v-if="hover"
                              class="d-flex justify-center align-center transition-fast-in-fast-out v-card--reveal white--text"
                              style="height: 100%"
                            >
                              <v-row
                                cols="10"
                                justify="center"
                                align="center"
                                class="hidden-xs-only"
                              >
                                <v-col
                                  class="d-flex flex-column justify-center align-center"
                                >
                                  <h1 class="title text-uppercase text-center">
                                    abazoo websites
                                  </h1>
                                  <p class="body-2 text-center">
                                    Connect with friends, family, and colleagues
                                    seamlessly. Share updates, photos, and
                                    memories effortlessly
                                  </p>
                                  <v-btn
                                    elevation="2"
                                    color="white"
                                    class="button-hover"
                                    @click="redirectToExternalURL"
                                    >show project</v-btn
                                  >
                                </v-col>
                              </v-row>
                            </div>
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
                <!-- <v-dialog v-model="dialog" max-width="500" isDark="">
                  <v-card>
                    <v-img :src="imgSrc" max-width="500" height="auto"></v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="dialog = false" color="red darken-1" text>
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog> -->
              </v-row>
              <v-btn
                outlined
                large
                text
                class="mx-auto my-12 d-flex px-10"
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
export default {
  name: "OurWorks",
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
@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 1.8rem !important;
  }
  .body-1 {
    font-size: 0.8rem !important;
  }
}
</style>