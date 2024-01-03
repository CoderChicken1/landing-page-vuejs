<template>
  <v-container>
    <section id="ourworks" class="my-15">
      <div class="py-15">
        <h1 class="display-2 font-weight-bold mb-4 text-center">Our <span class="color-title">WORKS</span></h1>
        <h1 class="font-weight-light text-center">
          IT Outsourcing Company in Vietnam specialized in delivering
          tailor-made it solutions helping businesses in BFSI, Healthcare,
        </h1>
      </div>
      <v-row>
        <v-col>
          <v-card flat>
            <v-container fluid>
              <v-row cols="12" sm="9" offset-sm="1">
                <v-col
                  v-for="(image, index) in images"
                  :key="index"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-card flat class="d-flex" rounded>
                    <v-img
                      :src="image.imgSrc"
                      @click.stop="
                        (dialog = true), (id = index), (imgSrc = image.imgSrc)
                      "
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
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
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
                <v-dialog v-model="dialog" max-width="500" isDark="">
                  <v-card>
                    <v-img :src="imgSrc" max-width="500" height="auto"></v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="dialog = false" color="red darken-1" text>
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-btn outlined large text class="mx-auto mt-8 d-flex justify-center px-10">Show More</v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  name: "OurWorks",
  data: () => ({
    dialog: false,
    imgSrc: "",
    images: [
      { id: 1, imgSrc: require("../../assets/works-1.png") },
      { id: 2, imgSrc: require("../../assets/works-2.png") },
      { id: 3, imgSrc: require("../../assets/works-3.png") },
      { id: 4, imgSrc: require("../../assets/works-4.png") },
      { id: 5, imgSrc: require("../../assets/works-5.png") },
      { id: 5, imgSrc: require("../../assets/works-6.png") },
    ],
  }),
};
</script>

<style scoped>
.color-title {
  color: #f7600e;
}
</style>